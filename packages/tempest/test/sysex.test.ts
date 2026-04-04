import { describe, it, expect } from 'vitest'
import { TempestSound } from '../src/sysex.js'
import { PARAMS } from '../src/params.js'

describe('TempestSound bit-level pack/unpack', () => {
  it('reads and writes Osc 1 Frequency (simple: all 7 bits in one byte)', () => {
    const sound = TempestSound.init()

    // Osc 1 Freq is 7 bits, all in byte 5 (bits 0-6) — the simplest case
    sound.set('osc1Freq', 64)
    expect(sound.get('osc1Freq')).toBe(64)

    sound.set('osc1Freq', 0)
    expect(sound.get('osc1Freq')).toBe(0)

    sound.set('osc1Freq', 127)
    expect(sound.get('osc1Freq')).toBe(127)
  })

  it('reads and writes Osc 1 Shape (bits scattered across bytes 4 and 6-7)', () => {
    const sound = TempestSound.init()

    // Shape bit 0 → 6.6, bit 1 → 4.1, bits 2-6 → 7.0-7.4
    sound.set('osc1Shape', 103) // max: Pulse 99%
    expect(sound.get('osc1Shape')).toBe(103)

    sound.set('osc1Shape', 1) // Saw
    expect(sound.get('osc1Shape')).toBe(1)

    sound.set('osc1Shape', 0) // Off
    expect(sound.get('osc1Shape')).toBe(0)
  })

  it('reads and writes LPF Freq (8-bit parameter spanning 3 bytes)', () => {
    const sound = TempestSound.init()

    // LPF Freq is 8 bits, range 0-164, scattered across bytes 28, 30, 31
    sound.set('lpfFreq', 164) // max
    expect(sound.get('lpfFreq')).toBe(164)

    sound.set('lpfFreq', 82) // middle
    expect(sound.get('lpfFreq')).toBe(82)

    sound.set('lpfFreq', 0)
    expect(sound.get('lpfFreq')).toBe(0)
  })

  it('reads and writes a 1-bit parameter (4Pole)', () => {
    const sound = TempestSound.init()

    sound.set('fourPole', 1)
    expect(sound.get('fourPole')).toBe(1)

    sound.set('fourPole', 0)
    expect(sound.get('fourPole')).toBe(0)
  })

  it('setting one parameter does not corrupt another in the same byte', () => {
    const sound = TempestSound.init()

    // Osc 1 Fine (bit 0 in byte 4) and Osc 1 Shape (bit 1 in byte 4) share byte 4
    sound.set('osc1Fine', 100)
    sound.set('osc1Shape', 50)

    // Both should retain their values — no bit collisions
    expect(sound.get('osc1Fine')).toBe(100)
    expect(sound.get('osc1Shape')).toBe(50)
  })

  it('handles Mod Matrix source/amount/destination', () => {
    const sound = TempestSound.init()

    // Mod 1: Source=LFO1 (6), Amount=200 (8-bit), Dest=Lowpass Filter (14)
    sound.set('mod1Source', 6)
    sound.set('mod1Amount', 200)
    sound.set('mod1Dest', 14)

    expect(sound.get('mod1Source')).toBe(6)
    expect(sound.get('mod1Amount')).toBe(200)
    expect(sound.get('mod1Dest')).toBe(14)
  })

  it('roundtrips: set all params → serialize → parse → all params match', () => {
    const sound = TempestSound.init()

    // Set a variety of parameters across different sections
    const testValues: Record<string, number> = {
      osc1Freq: 60,
      osc1Shape: 42,
      osc1Fine: 75,
      osc1Glide: 30,
      osc2Freq: 72,
      osc2Shape: 88,
      lpfFreq: 120,
      resonance: 64,
      hpFreq: 40,
      fourPole: 1,
      ampEnvAttack: 10,
      ampEnvDecay: 80,
      ampEnvSustain: 100,
      ampEnvRelease: 50,
      ampEnvAmount: 90,
      vcaVolume: 110,
      lfo1Shape: 3,
      lfo1Rate: 80,
      lfo1Amount: 64,
      lfo1Dest: 14,
      mod1Source: 8,
      mod1Amount: 180,
      mod1Dest: 1,
    }

    for (const [key, val] of Object.entries(testValues)) {
      sound.set(key, val)
    }

    // Serialize to SysEx bytes and re-parse
    const bytes = sound.toBytes()
    const parsed = TempestSound.fromBytes(bytes)

    for (const [key, val] of Object.entries(testValues)) {
      expect(parsed.get(key), `${key} should roundtrip`).toBe(val)
    }
  })

  it('validates parameter ranges', () => {
    const sound = TempestSound.init()

    expect(() => sound.set('osc1Freq', 128)).toThrow()
    expect(() => sound.set('osc1Freq', -1)).toThrow()
    expect(() => sound.set('lpfFreq', 165)).toThrow()
    expect(() => sound.set('fourPole', 2)).toThrow()
  })

  it('SysEx message has correct header and footer', () => {
    const sound = TempestSound.init()
    const bytes = sound.toBytes()

    expect(bytes[0]).toBe(0xF0) // SysEx start
    expect(bytes[1]).toBe(0x01) // DSI manufacturer ID
    expect(bytes[2]).toBe(0x28) // Tempest device ID
    expect(bytes[3]).toBe(0x60) // Sound dump command
    expect(bytes[bytes.length - 1]).toBe(0xF7) // SysEx end
    expect(bytes.length).toBe(157)
  })

  it('all data bytes are 7-bit clean (MIDI constraint)', () => {
    const sound = TempestSound.init()
    sound.set('osc1Freq', 127)
    sound.set('lpfFreq', 164)
    sound.set('mod1Amount', 254)

    const bytes = sound.toBytes()
    // Every byte between header (0-3) and footer (156) must be <= 0x7F
    for (let i = 4; i < bytes.length - 1; i++) {
      expect(bytes[i], `byte ${i} must be 7-bit clean`).toBeLessThanOrEqual(0x7F)
    }
  })
})

describe('Parameter registry', () => {
  it('has entries for all major synthesis parameters', () => {
    const requiredParams = [
      'osc1Freq', 'osc1Shape', 'osc1Fine', 'osc1Glide',
      'osc2Freq', 'osc2Shape', 'osc2Fine', 'osc2Glide',
      'osc3Freq', 'osc3Fine', 'osc3Sample', 'osc3Level',
      'osc4Freq', 'osc4Fine', 'osc4Sample', 'osc4Level',
      'lpfFreq', 'resonance', 'hpFreq', 'fourPole',
      'ampEnvAttack', 'ampEnvDecay', 'ampEnvSustain', 'ampEnvRelease',
      'vcaVolume', 'vcaFeedback',
      'lfo1Shape', 'lfo1Rate', 'lfo1Amount', 'lfo1Dest',
      'lfo2Shape', 'lfo2Rate', 'lfo2Amount', 'lfo2Dest',
      'mod1Source', 'mod1Amount', 'mod1Dest',
    ]

    for (const name of requiredParams) {
      expect(PARAMS[name], `missing param: ${name}`).toBeDefined()
    }
  })

  it('every param has valid bit mappings that sum to declared bit count', () => {
    for (const [name, param] of Object.entries(PARAMS)) {
      expect(param.bits.length, `${name} bit count mismatch`).toBe(param.bitCount)
    }
  })
})
