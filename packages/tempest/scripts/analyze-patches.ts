import { TempestSound } from '../src/sysex.js'
import { readFileSync, readdirSync } from 'fs'
import { oscShapeName } from '../src/params.js'
import { join } from 'path'

// Find all 157-byte sound files
function findSounds(dir: string): string[] {
  const results: string[] = []
  for (const entry of readdirSync(dir, { withFileTypes: true, recursive: true })) {
    if (entry.name.endsWith('.syx')) {
      const path = join(entry.parentPath || dir, entry.name)
      try {
        const data = readFileSync(path)
        if (data.length === 157 && data[0] === 0xF0 && data[3] === 0x60) {
          results.push(path)
        }
      } catch {}
    }
  }
  return results
}

const sounds = findSounds('patches')
console.log(`Found ${sounds.length} sound files\n`)

for (const path of sounds.slice(0, 20)) {
  const data = readFileSync(path)
  const s = TempestSound.fromBytes(new Uint8Array(data))
  const name = path.split('/').pop()?.replace('.syx', '')
  console.log(`=== ${name} ===`)
  console.log(`  Osc1: ${oscShapeName(s.get('osc1Shape'))} freq=${s.get('osc1Freq')} fine=${s.get('osc1Fine') - 50}`)
  console.log(`  Osc2: ${oscShapeName(s.get('osc2Shape'))} freq=${s.get('osc2Freq')}`)
  console.log(`  Osc3: sample#${s.get('osc3Sample')} level=${s.get('osc3Level')} freq=${s.get('osc3Freq') - 64}`)
  console.log(`  Osc4: sample#${s.get('osc4Sample')} level=${s.get('osc4Level')} freq=${s.get('osc4Freq') - 64}`)
  console.log(`  Mix=${s.get('oscMix')} Sub=${s.get('subOsc')} PrePost=${s.get('prePostFilter')}`)
  console.log(`  LPF=${s.get('lpfFreq')} Reso=${s.get('resonance')} HP=${s.get('hpFreq')} 4P=${s.get('fourPole')}`)
  console.log(`  Amp: A=${s.get('ampEnvAttack')} D=${s.get('ampEnvDecay')} S=${s.get('ampEnvSustain')} R=${s.get('ampEnvRelease')} Amt=${s.get('ampEnvAmount')}`)
  console.log(`  Pitch: Amt=${s.get('pitchEnvAmount') - 127} D=${s.get('pitchEnvDecay')}`)
  console.log(`  Vol=${s.get('vcaVolume')} FB=${s.get('vcaFeedback')}`)
  console.log()
}
