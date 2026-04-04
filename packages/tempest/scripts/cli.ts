#!/usr/bin/env node

/**
 * Tempest CLI — SysEx sound editor for the DSI Tempest.
 *
 * Usage:
 *   tempest ports                          List MIDI ports
 *   tempest dump                           Dump current sound as hex
 *   tempest read [param]                   Read one or all parameters
 *   tempest set <param>=<value> [...]      Set parameter(s) and send
 *   tempest load <file.syx>                Load a .syx file and send to Tempest
 *   tempest save <file.syx>                Dump current sound to a .syx file
 *   tempest params                         List all parameter names
 *   tempest randomize [section]            Randomize sound parameters
 */

import { readFileSync, writeFileSync } from 'node:fs'
import { TempestSound } from './sysex.js'
import { TempestMidi, listInputs, listOutputs } from './midi.js'
import { PARAMS, MOD_SOURCES, MOD_DESTINATIONS, oscShapeName } from './params.js'

const args = process.argv.slice(2)
const command = args[0]

function usage(): void {
  console.log(`
tempest — DSI Tempest SysEx Sound Editor

Commands:
  ports                         List MIDI ports
  dump                          Dump current sound as hex
  read [param]                  Read one or all parameters from Tempest
  set <param>=<value> [...]     Set parameter(s) and send to Tempest
  load <file.syx>               Load .syx file → send to Tempest
  save <file.syx>               Dump current sound → save to .syx file
  params                        List all parameter names and ranges
  randomize [section]           Randomize sound (sections: osc, filter, env, lfo, mod, all)

Options:
  --input <name>                MIDI input port name/substring
  --output <name>               MIDI output port name/substring

Examples:
  tempest set osc1Freq=60 lpfFreq=120 resonance=64
  tempest read lpfFreq
  tempest save my-kick.syx
  tempest load my-kick.syx
`)
}

function formatParamValue(name: string, value: number): string {
  const param = PARAMS[name]
  if (!param) return String(value)

  let display = String(value)
  if (param.displayOffset) {
    display = `${value + param.displayOffset} (raw: ${value})`
  }

  // Add human-readable names for special params
  if (name.includes('Shape') && !name.includes('lfo')) {
    display += ` [${oscShapeName(value)}]`
  }
  if (name.includes('Source') && name.startsWith('mod')) {
    display += ` [${MOD_SOURCES[value] ?? '?'}]`
  }
  if ((name.includes('Dest') || name.includes('dest')) && !name.includes('Source')) {
    display += ` [${MOD_DESTINATIONS[value] ?? '?'}]`
  }

  return display
}

function extractOption(flag: string): string | undefined {
  const idx = args.indexOf(flag)
  if (idx !== -1 && idx + 1 < args.length) {
    return args[idx + 1]
  }
  return undefined
}

async function main() {
  if (!command || command === '--help' || command === '-h') {
    usage()
    return
  }

  const inputOpt = extractOption('--input')
  const outputOpt = extractOption('--output')

  switch (command) {
    case 'ports': {
      console.log('MIDI Inputs:')
      for (const p of listInputs()) {
        console.log(`  ${p.index}: ${p.name}`)
      }
      console.log('\nMIDI Outputs:')
      for (const p of listOutputs()) {
        console.log(`  ${p.index}: ${p.name}`)
      }
      break
    }

    case 'params': {
      console.log('Parameter Name          Display Name              Range')
      console.log('─'.repeat(70))
      for (const [name, param] of Object.entries(PARAMS)) {
        const range = param.displayOffset
          ? `${param.min + param.displayOffset}..${param.max + param.displayOffset} (raw ${param.min}..${param.max})`
          : `${param.min}..${param.max}`
        console.log(`${name.padEnd(24)}${param.displayName.padEnd(26)}${range}`)
      }
      break
    }

    case 'dump': {
      const midi = TempestMidi.connect({ input: inputOpt, output: outputOpt })
      try {
        console.log(`Connected: ${midi.portNames.input} / ${midi.portNames.output}`)
        console.log('Requesting sound dump...')
        const bytes = await midi.requestSound()
        console.log(`Received ${bytes.length} bytes:`)
        // Print hex dump
        for (let i = 0; i < bytes.length; i += 16) {
          const slice = Array.from(bytes.slice(i, i + 16))
          const hex = slice.map(b => b.toString(16).padStart(2, '0')).join(' ')
          const addr = i.toString(16).padStart(4, '0')
          console.log(`  ${addr}: ${hex}`)
        }
      } finally {
        midi.close()
      }
      break
    }

    case 'read': {
      const midi = TempestMidi.connect({ input: inputOpt, output: outputOpt })
      try {
        console.log(`Connected: ${midi.portNames.input} / ${midi.portNames.output}`)
        console.log('Requesting sound dump...')
        const bytes = await midi.requestSound()
        const sound = TempestSound.fromBytes(bytes)

        const paramName = args[1]
        if (paramName && !paramName.startsWith('--')) {
          // Read single param
          if (!PARAMS[paramName]) {
            console.error(`Unknown param: ${paramName}`)
            console.error(`Use 'tempest params' to list available parameters`)
            process.exit(1)
          }
          const value = sound.get(paramName)
          console.log(`${paramName} = ${formatParamValue(paramName, value)}`)
        } else {
          // Read all params
          const all = sound.getAll()
          for (const [name, value] of Object.entries(all)) {
            console.log(`${name.padEnd(24)} = ${formatParamValue(name, value)}`)
          }
        }
      } finally {
        midi.close()
      }
      break
    }

    case 'set': {
      const midi = TempestMidi.connect({ input: inputOpt, output: outputOpt })
      try {
        console.log(`Connected: ${midi.portNames.input} / ${midi.portNames.output}`)
        console.log('Requesting current sound...')
        const bytes = await midi.requestSound()
        const sound = TempestSound.fromBytes(bytes)

        // Parse param=value pairs
        const pairs = args.slice(1).filter((a: string) => a.includes('='))
        if (pairs.length === 0) {
          console.error('Usage: tempest set <param>=<value> [param2=value2 ...]')
          process.exit(1)
        }

        for (const pair of pairs) {
          const [name, valStr] = pair.split('=')
          const value = Number(valStr)
          if (isNaN(value)) {
            console.error(`Invalid value for ${name}: ${valStr}`)
            process.exit(1)
          }
          sound.set(name, value)
          console.log(`  ${name} → ${formatParamValue(name, value)}`)
        }

        // Send modified sound back
        console.log('Sending modified sound...')
        midi.sendSysEx(sound.toBytes())
        console.log('Done.')
      } finally {
        midi.close()
      }
      break
    }

    case 'save': {
      const filename = args[1]
      if (!filename) {
        console.error('Usage: tempest save <file.syx>')
        process.exit(1)
      }

      const midi = TempestMidi.connect({ input: inputOpt, output: outputOpt })
      try {
        console.log(`Connected: ${midi.portNames.input} / ${midi.portNames.output}`)
        console.log('Requesting sound dump...')
        const bytes = await midi.requestSound()
        writeFileSync(filename, Buffer.from(bytes))
        console.log(`Saved ${bytes.length} bytes to ${filename}`)
      } finally {
        midi.close()
      }
      break
    }

    case 'load': {
      const filename = args[1]
      if (!filename) {
        console.error('Usage: tempest load <file.syx>')
        process.exit(1)
      }

      const fileData = readFileSync(filename)
      const sound = TempestSound.fromBytes(new Uint8Array(fileData))
      console.log(`Loaded ${filename} (${fileData.length} bytes)`)

      // Print a few key params
      const preview = ['osc1Freq', 'osc1Shape', 'lpfFreq', 'resonance', 'vcaVolume']
      for (const name of preview) {
        console.log(`  ${name} = ${formatParamValue(name, sound.get(name))}`)
      }

      const midi = TempestMidi.connect({ input: inputOpt, output: outputOpt })
      try {
        console.log(`Connected: ${midi.portNames.input} / ${midi.portNames.output}`)
        console.log('Sending sound...')
        midi.sendSysEx(sound.toBytes())
        console.log('Done.')
      } finally {
        midi.close()
      }
      break
    }

    case 'randomize': {
      const midi = TempestMidi.connect({ input: inputOpt, output: outputOpt })
      try {
        console.log(`Connected: ${midi.portNames.input} / ${midi.portNames.output}`)
        console.log('Requesting current sound...')
        const bytes = await midi.requestSound()
        const sound = TempestSound.fromBytes(bytes)

        const section = args[1] ?? 'all'
        const sectionMap: Record<string, string[]> = {
          osc: Object.keys(PARAMS).filter(k => k.startsWith('osc') || k === 'oscMix' || k === 'subOsc'),
          filter: ['lpfFreq', 'resonance', 'hpFreq', 'fourPole', 'audioMod', 'lpKeyFreq', 'hpKeyFreq'],
          env: Object.keys(PARAMS).filter(k => k.includes('Env') || k.includes('env')),
          lfo: Object.keys(PARAMS).filter(k => k.startsWith('lfo')),
          mod: Object.keys(PARAMS).filter(k => k.startsWith('mod')),
          all: Object.keys(PARAMS),
        }

        const paramNames = sectionMap[section]
        if (!paramNames) {
          console.error(`Unknown section: ${section}. Choose: ${Object.keys(sectionMap).join(', ')}`)
          process.exit(1)
        }

        for (const name of paramNames) {
          const param = PARAMS[name]
          const value = Math.floor(Math.random() * (param.max - param.min + 1)) + param.min
          sound.set(name, value)
        }

        console.log(`Randomized ${paramNames.length} parameters in section: ${section}`)
        console.log('Sending randomized sound...')
        midi.sendSysEx(sound.toBytes())
        console.log('Done.')
      } finally {
        midi.close()
      }
      break
    }

    default:
      console.error(`Unknown command: ${command}`)
      usage()
      process.exit(1)
  }
}

main().catch(err => {
  console.error(err.message)
  process.exit(1)
})
