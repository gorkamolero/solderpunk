/**
 * Tempest SysEx parameter definitions.
 *
 * Each parameter maps to scattered bit positions in the 157-byte SysEx message.
 * A "bit location" is { byte, bit } where byte is 0-indexed in the message
 * and bit is 0-6 within that 7-bit SysEx byte (bit 0 = LSB).
 *
 * The `bits` array is ordered from param bit 0 (LSB) to param bit N (MSB).
 * So bits[0] holds the least significant bit of the parameter value.
 */

export interface BitLocation {
  byte: number
  bit: number
}

export interface ParamDef {
  /** Human-readable display name */
  displayName: string
  /** Number of bits in the parameter value */
  bitCount: number
  /** Minimum raw value */
  min: number
  /** Maximum raw value */
  max: number
  /** Bit locations, ordered LSB to MSB */
  bits: BitLocation[]
  /** Display offset (e.g., -127 for bipolar, -50 for cents) */
  displayOffset?: number
  /** Whether the value is inverted (1=off, 0=on) */
  inverted?: boolean
}

/** Shorthand: "5.0" → { byte: 5, bit: 0 } */
function b(spec: string): BitLocation {
  const [byteStr, bitStr] = spec.split('.')
  return { byte: Number(byteStr), bit: Number(bitStr) }
}

/** Create a param with bits from dot-notation strings */
function param(
  displayName: string,
  max: number,
  bitSpecs: string[],
  opts?: { displayOffset?: number; inverted?: boolean; min?: number }
): ParamDef {
  return {
    displayName,
    bitCount: bitSpecs.length,
    min: opts?.min ?? 0,
    max,
    bits: bitSpecs.map(b),
    displayOffset: opts?.displayOffset,
    inverted: opts?.inverted,
  }
}

export const PARAMS: Record<string, ParamDef> = {
  // ═══════════════════════════════════════════════
  // OSCILLATOR 1
  // ═══════════════════════════════════════════════
  osc1Freq: param('Osc 1 Frequency', 127,
    ['5.0', '5.1', '5.2', '5.3', '5.4', '5.5', '5.6']),

  osc1Fine: param('Osc 1 Fine', 100,
    ['4.0', '6.0', '6.1', '6.2', '6.3', '6.4', '6.5'],
    { displayOffset: -50 }),

  osc1Shape: param('Osc 1 Shape', 103,
    ['6.6', '4.1', '7.0', '7.1', '7.2', '7.3', '7.4']),

  osc1Glide: param('Osc 1 Glide', 127,
    ['7.5', '7.6', '4.2', '8.0', '8.1', '8.2', '8.3']),

  osc1KeyFollow: param('Osc 1 Key Follow', 1, ['8.4']),

  osc1WaveReset: param('Osc 1 Wave Reset', 1, ['8.5']),

  // ═══════════════════════════════════════════════
  // OSCILLATOR 2
  // ═══════════════════════════════════════════════
  osc2Freq: param('Osc 2 Frequency', 127,
    ['8.6', '4.3', '9.0', '9.1', '9.2', '9.3', '9.4']),

  osc2Fine: param('Osc 2 Fine', 100,
    ['9.5', '9.6', '4.4', '10.0', '10.1', '10.2', '10.3'],
    { displayOffset: -50 }),

  osc2Shape: param('Osc 2 Shape', 103,
    ['10.4', '10.5', '10.6', '4.5', '11.0', '11.1', '11.2']),

  osc2Glide: param('Osc 2 Glide', 127,
    ['11.3', '11.4', '11.5', '11.6', '4.6', '13.0', '13.1']),

  osc2KeyFollow: param('Osc 2 Key Follow', 1, ['13.2']),

  osc2WaveReset: param('Osc 2 Wave Reset', 1, ['13.3']),

  // ═══════════════════════════════════════════════
  // OSCILLATOR 3 (digital)
  // ═══════════════════════════════════════════════
  osc3Freq: param('Osc 3 Frequency', 127,
    ['13.4', '13.5', '13.6', '12.0', '14.0', '14.1', '14.2'],
    { displayOffset: -64 }),

  osc3Fine: param('Osc 3 Fine', 100,
    ['14.3', '14.4', '14.5', '14.6', '14.7', '15.0', '15.1'],
    { displayOffset: -50 }),

  osc3Sample: param('Osc 3 Sample', 464,
    ['15.2', '15.3', '15.4', '15.5', '15.6', '12.2', '16.0', '16.2', '16.3']),

  osc3Level: param('Osc 3 Level', 127,
    ['26.0', '26.1', '26.2', '26.3', '26.4', '26.5', '26.6']),

  osc3KeyFollow: param('Osc 3 Key Follow', 1, ['17.5']),

  osc3Reverse: param('Osc 3 Reverse', 1, ['111.5']),

  // ═══════════════════════════════════════════════
  // OSCILLATOR 4 (digital)
  // ═══════════════════════════════════════════════
  osc4Freq: param('Osc 4 Frequency', 127,
    ['17.6', '12.4', '18.0', '18.1', '18.2', '18.3', '18.4'],
    { displayOffset: -64 }),

  osc4Fine: param('Osc 4 Fine', 100,
    ['18.5', '18.6', '12.5', '19.0', '19.1', '19.2', '19.3'],
    { displayOffset: -50 }),

  osc4Sample: param('Osc 4 Sample', 464,
    ['19.4', '19.5', '19.6', '12.6', '21.0', '21.1', '21.2', '21.4', '21.5']),

  osc4Level: param('Osc 4 Level', 127,
    ['20.5', '27.0', '27.1', '27.2', '27.3', '27.4', '27.5']),

  osc4KeyFollow: param('Osc 4 Key Follow', 1, ['20.1']),

  osc4Reverse: param('Osc 4 Reverse', 1, ['111.6']),

  // ═══════════════════════════════════════════════
  // SHARED OSC
  // ═══════════════════════════════════════════════
  oscMix: param('Osc 1/2 Mix', 127,
    ['24.2', '24.3', '24.4', '24.5', '24.6', '20.3', '25.0']),

  subOsc: param('Sub Osc', 127,
    ['25.1', '25.2', '25.3', '25.4', '25.5', '25.6', '20.4']),

  oscSlop: param('Osc Slop', 5,
    ['23.3', '23.4', '23.5']),

  sync: param('Sync 2>1', 1, ['23.0']),

  glideMode: param('Glide Mode', 1, ['23.2']),

  keyAssign: param('Key Assign', 1, ['108.2']),

  pitchbendRange: param('Pitchbend Range', 12,
    ['23.6', '20.2', '24.0', '24.1']),

  prePostFilter: param('Pre/Post Filter', 127,
    ['27.6', '20.6', '29.0', '29.1', '29.2', '29.3', '29.4']),

  // ═══════════════════════════════════════════════
  // FILTER
  // ═══════════════════════════════════════════════
  lpfFreq: param('LPF Frequency', 164,
    ['30.4', '30.5', '30.6', '28.1', '31.0', '31.1', '31.2', '31.3']),

  resonance: param('Resonance', 127,
    ['31.4', '31.5', '31.6', '28.2', '32.0', '32.1', '32.2']),

  audioMod: param('Audio Mod', 127,
    ['35.1', '35.2', '35.3', '35.4', '35.5', '35.6', '28.6']),

  fourPole: param('4 Pole', 1, ['37.0']),

  hpFreq: param('HP Frequency', 127,
    ['36.0', '38.0', '38.1', '38.2', '38.3', '38.4', '38.5']),

  lpKeyFreq: param('LP Key>Freq', 127,
    ['32.3', '32.4', '32.5', '32.6', '28.3', '33.0', '33.1']),

  hpKeyFreq: param('HP Key>Freq', 127,
    ['38.6', '36.1', '39.0', '39.1', '39.2', '39.3', '39.4']),

  lpEnvAmount: param('LP Env Amount', 254,
    ['33.2', '33.3', '33.4', '33.5', '33.6', '28.4', '34.0', '34.1'],
    { displayOffset: -127 }),

  lpEnvVelAmt: param('LP Env Vel Amt', 127,
    ['34.2', '34.3', '34.4', '34.5', '34.6', '28.5', '35.0']),

  vcaFeedback: param('VCA Feedback', 127,
    ['29.5', '29.6', '28.0', '30.0', '30.1', '30.2', '30.3']),

  // ═══════════════════════════════════════════════
  // VCA
  // ═══════════════════════════════════════════════
  vcaVolume: param('VCA Volume', 127,
    ['42.2', '42.3', '42.4', '42.5', '42.6', '36.5', '43.0']),

  // ═══════════════════════════════════════════════
  // AMP ENVELOPE
  // ═══════════════════════════════════════════════
  ampEnvAmount: param('Amp Env Amount', 127,
    ['40.4', '40.5', '40.6', '36.3', '41.0', '41.1', '41.2']),

  ampEnvVelAmt: param('Amp Env Vel Amt', 127,
    ['41.3', '41.4', '41.5', '41.6', '36.4', '42.0', '42.1']),

  ampEnvDelay: param('Amp Env Delay', 127,
    ['60.2', '64.0', '64.1', '64.2', '64.3', '64.4', '64.5']),

  ampEnvAttack: param('Amp Env Attack', 127,
    ['64.6', '60.3', '65.0', '65.1', '65.2', '65.3', '65.4']),

  ampEnvDecay: param('Amp Env Decay', 127,
    ['65.5', '65.6', '60.4', '66.0', '66.1', '66.2', '66.3']),

  ampEnvSustain: param('Amp Env Sustain', 127,
    ['66.4', '66.5', '66.6', '60.5', '67.0', '67.1', '67.2']),

  ampEnvRelease: param('Amp Env Release', 127,
    ['67.3', '67.4', '67.5', '67.6', '60.6', '69.0', '69.1']),

  ampEnvPeak: param('Amp Env Peak', 127,
    ['109.0', '109.1', '109.2', '109.3', '109.4', '109.5', '109.6']),

  // ═══════════════════════════════════════════════
  // PITCH ENVELOPE
  // ═══════════════════════════════════════════════
  adMode: param('AD Mode', 1, ['50.3'], { inverted: true }),

  pitchEnvAmount: param('Pitch Env Amount', 254,
    ['51.2', '51.3', '51.4', '51.5', '51.6', '44.6', '53.0', '53.1'],
    { displayOffset: -127 }),

  pitchEnvVelAmt: param('Pitch Env Vel Amt', 127,
    ['53.2', '53.3', '53.4', '53.5', '53.6', '52.0', '54.0']),

  pitchEnvDelay: param('Pitch Env Delay', 127,
    ['54.1', '54.2', '54.3', '54.4', '54.5', '54.6', '52.1']),

  pitchEnvAttack: param('Pitch Env Attack', 127,
    ['55.0', '55.1', '55.2', '55.3', '55.4', '55.5', '55.6']),

  pitchEnvDecay: param('Pitch Env Decay', 127,
    ['52.2', '56.0', '56.1', '56.2', '56.3', '56.4', '56.5']),

  pitchEnvSustain: param('Pitch Env Sustain', 127,
    ['56.6', '52.3', '57.0', '57.1', '57.2', '57.3', '57.4']),

  pitchEnvRelease: param('Pitch Env Release', 127,
    ['57.5', '57.6', '52.4', '58.0', '58.1', '58.2', '58.3']),

  pitchEnvPeak: param('Pitch Env Peak', 127,
    ['106.2', '106.3', '106.4', '106.5', '106.6', '100.5', '107.0']),

  pitchEnvDest: param('Pitch Env Dest', 58,
    ['50.4', '50.5', '50.6', '44.5', '51.0', '51.1']),

  // ═══════════════════════════════════════════════
  // LP ENVELOPE
  // ═══════════════════════════════════════════════
  lpEnvDelay: param('LP Env Delay', 127,
    ['58.4', '58.5', '58.6', '52.5', '59.0', '59.1', '59.2']),

  lpEnvAttack: param('LP Env Attack', 127,
    ['59.3', '59.4', '59.5', '59.6', '52.6', '61.0', '61.1']),

  lpEnvDecay: param('LP Env Decay', 127,
    ['61.2', '61.3', '61.4', '61.5', '61.6', '60.0', '62.0']),

  lpEnvSustain: param('LP Env Sustain', 127,
    ['62.1', '62.2', '62.3', '62.4', '62.5', '62.6', '60.1']),

  lpEnvRelease: param('LP Env Release', 127,
    ['63.0', '63.1', '63.2', '63.3', '63.4', '63.5', '63.6']),

  lpEnvPeak: param('LP Env Peak', 127,
    ['107.1', '107.2', '107.3', '107.4', '107.5', '107.6', '100.6']),

  // ═══════════════════════════════════════════════
  // AUX 1 ENVELOPE
  // ═══════════════════════════════════════════════
  aux1EnvDest: param('Aux 1 Env Dest', 58,
    ['69.2', '69.3', '69.4', '69.5', '69.6', '68.0']),

  aux1EnvAmount: param('Aux 1 Env Amount', 254,
    ['70.0', '70.1', '70.2', '70.3', '70.4', '70.5', '70.6', '68.1'],
    { displayOffset: -127 }),

  aux1EnvVelAmt: param('Aux 1 Env Vel Amt', 127,
    ['71.0', '71.1', '71.2', '71.3', '71.4', '71.5', '71.6']),

  aux1EnvDelay: param('Aux 1 Env Delay', 127,
    ['68.2', '72.0', '72.1', '72.2', '72.3', '72.4', '72.5']),

  aux1EnvAttack: param('Aux 1 Env Attack', 127,
    ['72.6', '68.3', '73.0', '73.1', '73.2', '73.3', '73.4']),

  aux1EnvDecay: param('Aux 1 Env Decay', 127,
    ['73.5', '73.6', '68.4', '74.0', '74.1', '74.2', '74.3']),

  aux1EnvSustain: param('Aux 1 Env Sustain', 127,
    ['74.4', '74.5', '74.6', '68.5', '75.0', '75.1', '75.2']),

  aux1EnvRelease: param('Aux 1 Env Release', 127,
    ['75.3', '75.4', '75.5', '75.6', '68.6', '77.0', '77.1']),

  aux1EnvPeak: param('Aux 1 Env Peak', 127,
    ['108.0', '110.0', '110.1', '110.2', '110.3', '110.4', '110.5']),

  // ═══════════════════════════════════════════════
  // AUX 2 ENVELOPE
  // ═══════════════════════════════════════════════
  aux2EnvDest: param('Aux 2 Env Dest', 58,
    ['77.2', '77.3', '77.4', '77.5', '77.6', '76.0']),

  aux2EnvAmount: param('Aux 2 Env Amount', 254,
    ['78.0', '78.1', '78.2', '78.3', '78.4', '78.5', '78.6', '76.1'],
    { displayOffset: -127 }),

  aux2EnvVelAmt: param('Aux 2 Env Vel Amt', 127,
    ['79.0', '79.1', '79.2', '79.3', '79.4', '79.5', '79.6']),

  aux2EnvDelay: param('Aux 2 Env Delay', 127,
    ['76.2', '80.0', '80.1', '80.2', '80.3', '80.4', '80.5']),

  aux2EnvAttack: param('Aux 2 Env Attack', 127,
    ['80.6', '76.3', '81.0', '81.1', '81.2', '81.3', '81.4']),

  aux2EnvDecay: param('Aux 2 Env Decay', 127,
    ['81.5', '81.6', '76.4', '82.0', '82.1', '82.2', '82.3']),

  aux2EnvSustain: param('Aux 2 Env Sustain', 127,
    ['82.4', '82.5', '82.6', '76.5', '83.0', '83.1', '83.2']),

  aux2EnvRelease: param('Aux 2 Env Release', 127,
    ['83.3', '83.4', '83.5', '83.6', '76.6', '85.0', '85.1']),

  aux2EnvPeak: param('Aux 2 Env Peak', 127,
    ['110.6', '108.1', '111.0', '111.1', '111.2', '111.3', '111.4']),

  // ═══════════════════════════════════════════════
  // LFO 1
  // ═══════════════════════════════════════════════
  lfo1Shape: param('LFO 1 Shape', 4,
    ['45.1', '45.2', '45.3']),

  lfo1Rate: param('LFO 1 Rate', 162,
    ['43.1', '43.2', '43.3', '43.4', '43.5', '43.6', '36.6', '45.0']),

  lfo1Amount: param('LFO 1 Amount', 127,
    ['45.4', '45.5', '45.6', '44.0', '46.0', '46.1', '46.2']),

  lfo1Dest: param('LFO 1 Dest', 58,
    ['46.3', '46.4', '46.5', '46.6', '44.1', '47.0']),

  lfo1Sync: param('LFO 1 Sync', 1, ['47.1']),

  lfo1Restart: param('LFO 1 Restart', 3, ['113.0', '113.1']),

  // ═══════════════════════════════════════════════
  // LFO 2
  // ═══════════════════════════════════════════════
  lfo2Shape: param('LFO 2 Shape', 4,
    ['48.2', '48.3', '48.4']),

  lfo2Rate: param('LFO 2 Rate', 162,
    ['47.2', '47.3', '47.4', '47.5', '47.6', '44.2', '48.0', '48.1']),

  lfo2Amount: param('LFO 2 Amount', 127,
    ['48.5', '48.6', '44.3', '49.0', '49.1', '49.2', '49.3']),

  lfo2Dest: param('LFO 2 Dest', 58,
    ['49.4', '49.5', '49.6', '44.4', '50.0', '50.1']),

  lfo2Sync: param('LFO 2 Sync', 1, ['50.2']),

  lfo2Restart: param('LFO 2 Restart', 3, ['113.2', '113.3']),

  // ═══════════════════════════════════════════════
  // MOD MATRIX
  // ═══════════════════════════════════════════════
  mod1Source: param('Mod 1 Source', 22,
    ['85.2', '85.3', '85.4', '85.5', '85.6']),

  mod1Amount: param('Mod 1 Amount', 254,
    ['84.0', '86.0', '86.1', '86.2', '86.3', '86.4', '86.5', '86.6'],
    { displayOffset: -127 }),

  mod1Dest: param('Mod 1 Dest', 58,
    ['84.1', '87.0', '87.1', '87.2', '87.3', '87.4']),

  mod2Source: param('Mod 2 Source', 22,
    ['87.5', '87.6', '84.2', '88.0', '88.1']),

  mod2Amount: param('Mod 2 Amount', 254,
    ['88.2', '88.3', '88.4', '88.5', '88.6', '84.3', '89.0', '89.1'],
    { displayOffset: -127 }),

  mod2Dest: param('Mod 2 Dest', 58,
    ['89.2', '89.3', '89.4', '89.5', '89.6', '84.4']),

  mod3Source: param('Mod 3 Source', 22,
    ['90.0', '90.1', '90.2', '90.3', '90.4']),

  mod3Amount: param('Mod 3 Amount', 254,
    ['90.5', '90.6', '84.5', '91.0', '91.1', '91.2', '91.3', '91.4'],
    { displayOffset: -127 }),

  mod3Dest: param('Mod 3 Dest', 58,
    ['91.5', '91.6', '84.6', '93.0', '93.1', '93.2']),

  mod4Source: param('Mod 4 Source', 22,
    ['93.3', '93.4', '93.5', '93.6', '92.0']),

  mod4Amount: param('Mod 4 Amount', 254,
    ['94.0', '94.1', '94.2', '94.3', '94.4', '94.5', '94.6', '92.1'],
    { displayOffset: -127 }),

  mod4Dest: param('Mod 4 Dest', 58,
    ['95.0', '95.1', '95.2', '95.3', '95.4', '95.5']),

  mod5Source: param('Mod 5 Source', 22,
    ['95.6', '92.2', '96.0', '96.1', '96.2']),

  mod5Amount: param('Mod 5 Amount', 254,
    ['96.3', '96.4', '96.5', '96.6', '92.3', '97.0', '97.1', '97.2'],
    { displayOffset: -127 }),

  mod5Dest: param('Mod 5 Dest', 58,
    ['97.3', '97.4', '97.5', '97.6', '92.4', '98.0']),

  mod6Source: param('Mod 6 Source', 22,
    ['98.1', '98.2', '98.3', '98.4', '98.5']),

  mod6Amount: param('Mod 6 Amount', 254,
    ['98.6', '92.5', '99.0', '99.1', '99.2', '99.3', '99.4', '99.5'],
    { displayOffset: -127 }),

  mod6Dest: param('Mod 6 Dest', 58,
    ['99.6', '92.6', '101.0', '101.1', '101.2', '101.3']),

  mod7Source: param('Mod 7 Source', 22,
    ['101.4', '101.5', '101.6', '100.0', '102.0']),

  mod7Amount: param('Mod 7 Amount', 254,
    ['102.1', '102.2', '102.3', '102.4', '102.5', '102.6', '100.1', '103.0'],
    { displayOffset: -127 }),

  mod7Dest: param('Mod 7 Dest', 58,
    ['103.1', '103.2', '103.3', '103.4', '103.5', '103.6']),

  mod8Source: param('Mod 8 Source', 22,
    ['100.2', '104.0', '104.1', '104.2', '104.3']),

  mod8Amount: param('Mod 8 Amount', 254,
    ['104.4', '104.5', '104.6', '100.3', '105.0', '105.1', '105.2', '105.3'],
    { displayOffset: -127 }),

  mod8Dest: param('Mod 8 Dest', 58,
    ['105.4', '105.5', '105.6', '100.4', '106.0', '106.1']),
}

/** Mod source value → name */
export const MOD_SOURCES: Record<number, string> = {
  0: 'Off', 1: 'Pitch Env', 2: 'Filter Env', 3: 'Amp Env',
  4: 'Aux 1 Env', 5: 'Aux 2 Env', 6: 'LFO 1', 7: 'LFO 2',
  8: 'Velocity', 9: 'Note Number', 10: 'Noise', 11: 'Random',
  12: 'Pad Pressure', 13: 'Slider Pos 1', 14: 'Slider Pos 2',
  15: 'Slider Press 1', 16: 'Slider Press 2',
  17: 'Foot Pedal 1', 18: 'Foot Pedal 2',
  19: 'MIDI Pitch Bend', 20: 'MIDI Mod Wheel',
  21: 'MIDI Breath', 22: 'MIDI Expression',
}

/** Mod/env destination value → name */
export const MOD_DESTINATIONS: Record<number, string> = {
  0: 'Off', 1: 'Osc 1 Freq', 2: 'Osc 2 Freq', 3: 'Osc 3 Freq',
  4: 'Osc 4 Freq', 5: 'Osc All Freq', 6: 'Osc 1/2 Mix',
  7: 'Osc 3 Level', 8: 'Osc 4 Level', 9: 'Osc 1 PW',
  10: 'Osc 2 PW', 11: 'Osc 1/2 PW', 12: 'Sub Osc Vol',
  13: 'Feedback Vol', 14: 'LPF', 15: 'Resonance',
  16: 'Filter FM', 17: 'HPF', 18: 'VCA Level', 19: 'Pan',
  20: 'LFO 1 Freq', 21: 'LFO 2 Freq', 22: 'LFO All Freq',
  23: 'LFO 1 Amt', 24: 'LFO 2 Amt', 25: 'LFO All Amt',
  26: 'Pitch Env Amt', 27: 'Filter Env Amt', 28: 'Amp Env Amt',
  29: 'Aux 1 Env Amt', 30: 'Aux 2 Env Amt', 31: 'All Env Amt',
  32: 'Pitch Env Atk', 33: 'Filter Env Atk', 34: 'Amp Env Atk',
  35: 'Aux 1 Env Atk', 36: 'Aux 2 Env Atk', 37: 'All Env Atk',
  38: 'Pitch Env Dec', 39: 'Filter Env Dec', 40: 'Amp Env Dec',
  41: 'Aux 1 Env Dec', 42: 'Aux 2 Env Dec', 43: 'All Env Dec',
  44: 'Pitch Env Rel', 45: 'Filter Env Rel', 46: 'Amp Env Rel',
  47: 'Aux 1 Env Rel', 48: 'Aux 2 Env Rel', 49: 'All Env Rel',
  50: 'Mod 1 Amt', 51: 'Mod 2 Amt', 52: 'Mod 3 Amt',
  53: 'Mod 4 Amt', 54: 'Mod 5 Amt', 55: 'Mod 6 Amt',
  56: 'Mod 7 Amt', 57: 'Mod 8 Amt',
}

/** Osc shape value → name */
export const OSC_SHAPES: Record<number, string> = {
  0: 'Off', 1: 'Saw', 2: 'Tri', 3: 'Saw-Tri',
  // 4-103 = Pulse 0% to Pulse 99%
}

export function oscShapeName(value: number): string {
  if (value <= 3) return OSC_SHAPES[value] ?? 'Unknown'
  if (value <= 103) return `Pulse ${value - 4}%`
  return 'Unknown'
}
