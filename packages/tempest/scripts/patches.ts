#!/usr/bin/env npx tsx
/**
 * Tempest patch manager — browse, inspect, and send .syx files.
 *
 * Usage:
 *   npx tsx scripts/patches.ts list [--type kick|snare|hat|bass|pad|clap|tom|all]
 *   npx tsx scripts/patches.ts info <file.syx>
 *   npx tsx scripts/patches.ts send <file.syx>
 *   npx tsx scripts/patches.ts beats              List beat files (non-157 byte)
 *
 * IMPORTANT: For 'send', select the target pad/beat on the Tempest FIRST.
 */

import { readFileSync, readdirSync } from 'fs'
import { join } from 'path'
import { TempestSound } from '../src/sysex.js'
import { oscShapeName, MOD_SOURCES, MOD_DESTINATIONS } from '../src/params.js'

const PATCHES_DIR = join(import.meta.dirname, '..', 'patches')

// ── Helpers ──

interface PatchFile {
  path: string
  name: string
  size: number
  type: 'sound' | 'beat' | 'project' | 'unknown'
}

function scanPatches(): PatchFile[] {
  const results: PatchFile[] = []
  for (const entry of readdirSync(PATCHES_DIR, { withFileTypes: true, recursive: true })) {
    if (!entry.name.endsWith('.syx')) continue
    const path = join(entry.parentPath || PATCHES_DIR, entry.name)
    try {
      const data = readFileSync(path)
      if (data[0] !== 0xF0) continue
      const typeMap: Record<number, PatchFile['type']> = {
        0x60: 'sound', 0x63: 'sound',
        0x5F: 'beat', 0x62: 'beat',
        0x5E: 'project',
      }
      results.push({
        path,
        name: entry.name.replace('.syx', ''),
        size: data.length,
        type: (data[1] === 0x01 && data[2] === 0x28) ? (typeMap[data[3]] ?? 'unknown') : 'unknown',
      })
    } catch {}
  }
  return results
}

function matchesType(name: string, type: string): boolean {
  const n = name.toLowerCase()
  const patterns: Record<string, string[]> = {
    kick: ['kick', 'bd', 'bass drum', 'bassdrum'],
    snare: ['snare', 'snr', 'sd'],
    hat: ['hat', 'hh', 'hihat', 'hi-hat'],
    bass: ['bass', 'sub'],
    pad: ['pad', 'string', 'chord'],
    clap: ['clap', 'cp'],
    tom: ['tom'],
  }
  if (type === 'all') return true
  const p = patterns[type]
  return p ? p.some(pat => n.includes(pat)) : false
}

function printSound(path: string) {
  const data = readFileSync(path)
  const s = TempestSound.fromBytes(new Uint8Array(data))

  console.log(`  Osc 1:  ${oscShapeName(s.get('osc1Shape')).padEnd(12)} Freq=${s.get('osc1Freq')} Fine=${s.get('osc1Fine') - 50}`)
  console.log(`  Osc 2:  ${oscShapeName(s.get('osc2Shape')).padEnd(12)} Freq=${s.get('osc2Freq')} Fine=${s.get('osc2Fine') - 50}`)
  console.log(`  Mix=${s.get('oscMix')} Sub=${s.get('subOsc')} Sync=${s.get('sync')}`)
  console.log(`  Osc 3:  sample #${s.get('osc3Sample').toString().padEnd(4)} Level=${s.get('osc3Level')} Freq=${s.get('osc3Freq') - 64}`)
  console.log(`  Osc 4:  sample #${s.get('osc4Sample').toString().padEnd(4)} Level=${s.get('osc4Level')} Freq=${s.get('osc4Freq') - 64}`)
  console.log(`  PrePost=${s.get('prePostFilter')}`)
  console.log(`  LPF=${s.get('lpfFreq')} Reso=${s.get('resonance')} AudioMod=${s.get('audioMod')} 4Pole=${s.get('fourPole')}`)
  console.log(`  HPF=${s.get('hpFreq')}`)
  console.log(`  Amp:   A=${s.get('ampEnvAttack')} D=${s.get('ampEnvDecay')} S=${s.get('ampEnvSustain')} R=${s.get('ampEnvRelease')} Amt=${s.get('ampEnvAmount')} Vel=${s.get('ampEnvVelAmt')}`)
  console.log(`  Pitch: A=${s.get('pitchEnvAttack')} D=${s.get('pitchEnvDecay')} S=${s.get('pitchEnvSustain')} R=${s.get('pitchEnvRelease')} Amt=${s.get('pitchEnvAmount') - 127} Dest=${MOD_DESTINATIONS[s.get('pitchEnvDest')] ?? s.get('pitchEnvDest')}`)
  console.log(`  LP Env: Amt=${s.get('lpEnvAmount') - 127} Vel=${s.get('lpEnvVelAmt')}`)
  console.log(`  LFO 1: Shape=${['Tri','RevSaw','Saw','Sq','Rand'][s.get('lfo1Shape')]} Rate=${s.get('lfo1Rate')} Amt=${s.get('lfo1Amount')} Dest=${MOD_DESTINATIONS[s.get('lfo1Dest')] ?? '?'}`)
  console.log(`  LFO 2: Shape=${['Tri','RevSaw','Saw','Sq','Rand'][s.get('lfo2Shape')]} Rate=${s.get('lfo2Rate')} Amt=${s.get('lfo2Amount')} Dest=${MOD_DESTINATIONS[s.get('lfo2Dest')] ?? '?'}`)
  console.log(`  Volume=${s.get('vcaVolume')} Feedback=${s.get('vcaFeedback')}`)

  // Active mod slots
  for (let i = 1; i <= 8; i++) {
    const src = s.get(`mod${i}Source`)
    if (src > 0) {
      console.log(`  Mod ${i}: ${MOD_SOURCES[src]} → ${MOD_DESTINATIONS[s.get(`mod${i}Dest`)]} amt=${s.get(`mod${i}Amount`) - 127}`)
    }
  }
}

// ── Commands ──

const [cmd, ...args] = process.argv.slice(2)

switch (cmd) {
  case 'list': {
    const typeFlag = args.indexOf('--type')
    const type = typeFlag !== -1 ? args[typeFlag + 1] : 'all'
    const patches = scanPatches().filter(p => p.type === 'sound' && matchesType(p.name, type))
    patches.sort((a, b) => a.name.localeCompare(b.name))
    console.log(`${patches.length} sounds matching "${type}":\n`)
    for (const p of patches) {
      console.log(`  ${p.name}`)
      console.log(`    ${p.path}`)
    }
    break
  }

  case 'beats': {
    const patches = scanPatches().filter(p => p.type === 'beat')
    patches.sort((a, b) => a.name.localeCompare(b.name))
    console.log(`${patches.length} beat files:\n`)
    for (const p of patches) {
      console.log(`  ${p.name} (${p.size} bytes)`)
      console.log(`    ${p.path}`)
    }
    break
  }

  case 'info': {
    const file = args[0]
    if (!file) { console.error('Usage: patches.ts info <file.syx>'); process.exit(1) }
    const data = readFileSync(file)
    console.log(`File: ${file}`)
    console.log(`Size: ${data.length} bytes`)
    console.log(`Header: ${Array.from(data.slice(0, 5)).map(b => b.toString(16).padStart(2, '0')).join(' ')}`)

    if (data.length === 157 && data[3] === 0x60) {
      console.log(`Type: Sound (RAM dump)\n`)
      printSound(file)
    } else if (data[3] === 0x5F || data[3] === 0x62) {
      console.log(`Type: Beat dump (${data.length} bytes)`)
    } else if (data[3] === 0x5E) {
      console.log(`Type: Project dump (${data.length} bytes)`)
    } else if (data[3] === 0x63) {
      console.log(`Type: Sound (Flash)`)
    } else {
      console.log(`Type: Unknown`)
    }
    break
  }

  case 'send': {
    const file = args[0]
    if (!file) { console.error('Usage: patches.ts send <file.syx>'); process.exit(1) }
    const data = readFileSync(file)

    console.log(`\n⚠  Select the target pad/beat on the Tempest BEFORE pressing Enter.`)
    console.log(`   Sounds (157 bytes) → overwrite currently selected pad`)
    console.log(`   Beats → overwrite currently selected beat\n`)

    const { default: midi } = await import('midi')
    const output = new midi.Output()
    if (output.getPortCount() === 0) {
      console.error('No MIDI output ports found. Is the Tempest connected via USB?')
      process.exit(1)
    }
    output.openPort(0)
    output.sendMessage(Array.from(data))
    output.closePort()

    const types: Record<number, string> = { 0x60: 'Sound', 0x5F: 'Beat', 0x62: 'Beat', 0x5E: 'Project', 0x63: 'Flash Sound' }
    const type = types[data[3]] ?? 'Unknown'
    console.log(`✓ Sent ${type}: ${file} (${data.length} bytes)`)
    break
  }

  default:
    console.log(`Tempest Patch Manager

Usage:
  npx tsx scripts/patches.ts list [--type kick|snare|hat|bass|pad|clap|tom|all]
  npx tsx scripts/patches.ts beats
  npx tsx scripts/patches.ts info <file.syx>
  npx tsx scripts/patches.ts send <file.syx>`)
}
