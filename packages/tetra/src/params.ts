/** DSI Tetra NRPN parameter definitions.
 *  Unlike the Tempest (scattered SysEx bits), the Tetra uses standard NRPN messages.
 *  This means REAL-TIME parameter control — no dump/modify/send cycle.
 *
 *  Layer B offset: +200
 *  Combo Voice offsets: V1 +512, V2 +768, V3 +1024, V4 +1280 */

export interface TetraParam {
  name: string
  displayName: string
  nrpn: number
  min: number
  max: number
  displayOffset?: number
}

export const PARAMS: Record<string, TetraParam> = {
  osc1Freq:     { name: 'osc1Freq',     displayName: 'Osc 1 Frequency',    nrpn: 0,   min: 0, max: 120 },
  osc1Detune:   { name: 'osc1Detune',   displayName: 'Osc 1 Fine Tune',    nrpn: 1,   min: 0, max: 100, displayOffset: -50 },
  osc1Shape:    { name: 'osc1Shape',    displayName: 'Osc 1 Shape',        nrpn: 2,   min: 0, max: 103 },
  osc1Glide:    { name: 'osc1Glide',    displayName: 'Osc 1 Glide',        nrpn: 3,   min: 0, max: 127 },
  osc1Kbd:      { name: 'osc1Kbd',      displayName: 'Osc 1 Kbd Track',    nrpn: 4,   min: 0, max: 1 },
  osc2Freq:     { name: 'osc2Freq',     displayName: 'Osc 2 Frequency',    nrpn: 5,   min: 0, max: 120 },
  osc2Detune:   { name: 'osc2Detune',   displayName: 'Osc 2 Fine Tune',    nrpn: 6,   min: 0, max: 100, displayOffset: -50 },
  osc2Shape:    { name: 'osc2Shape',    displayName: 'Osc 2 Shape',        nrpn: 7,   min: 0, max: 103 },
  osc2Glide:    { name: 'osc2Glide',    displayName: 'Osc 2 Glide',        nrpn: 8,   min: 0, max: 127 },
  osc2Kbd:      { name: 'osc2Kbd',      displayName: 'Osc 2 Kbd Track',    nrpn: 9,   min: 0, max: 1 },
  oscSync:      { name: 'oscSync',      displayName: 'Osc Sync',           nrpn: 10,  min: 0, max: 1 },
  glideMode:    { name: 'glideMode',    displayName: 'Glide Mode',         nrpn: 11,  min: 0, max: 3 },
  oscSlop:      { name: 'oscSlop',      displayName: 'Osc Slop',           nrpn: 12,  min: 0, max: 5 },
  oscMix:       { name: 'oscMix',       displayName: 'Osc Mix',            nrpn: 13,  min: 0, max: 127 },
  noise:        { name: 'noise',        displayName: 'Noise Level',        nrpn: 14,  min: 0, max: 127 },

  cutoff:       { name: 'cutoff',       displayName: 'Filter Cutoff',      nrpn: 15,  min: 0, max: 164 },
  resonance:    { name: 'resonance',    displayName: 'Resonance',          nrpn: 16,  min: 0, max: 127 },
  keyAmount:    { name: 'keyAmount',    displayName: 'Key Amount',         nrpn: 17,  min: 0, max: 127 },
  audioMod:     { name: 'audioMod',     displayName: 'Audio Mod',          nrpn: 18,  min: 0, max: 127 },
  filterPoles:  { name: 'filterPoles',  displayName: 'Filter Poles',       nrpn: 19,  min: 0, max: 1 },

  filterEnvAmt: { name: 'filterEnvAmt', displayName: 'Filter Env Amount',  nrpn: 20,  min: 0, max: 254, displayOffset: -127 },
  filterEnvVel: { name: 'filterEnvVel', displayName: 'Filter Env Vel',     nrpn: 21,  min: 0, max: 127 },
  filterDelay:  { name: 'filterDelay',  displayName: 'Filter Env Delay',   nrpn: 22,  min: 0, max: 127 },
  filterAttack: { name: 'filterAttack', displayName: 'Filter Env Attack',  nrpn: 23,  min: 0, max: 127 },
  filterDecay:  { name: 'filterDecay',  displayName: 'Filter Env Decay',   nrpn: 24,  min: 0, max: 127 },
  filterSustain:{ name: 'filterSustain',displayName: 'Filter Env Sustain', nrpn: 25,  min: 0, max: 127 },
  filterRelease:{ name: 'filterRelease',displayName: 'Filter Env Release', nrpn: 26,  min: 0, max: 127 },

  vcaVolume:    { name: 'vcaVolume',    displayName: 'VCA Volume',         nrpn: 27,  min: 0, max: 127 },
  pan:          { name: 'pan',          displayName: 'Pan Spread',         nrpn: 28,  min: 0, max: 127 },
  fbGain:       { name: 'fbGain',       displayName: 'Feedback Gain',      nrpn: 29,  min: 0, max: 127 },

  ampEnvAmt:    { name: 'ampEnvAmt',    displayName: 'Amp Env Amount',     nrpn: 30,  min: 0, max: 127 },
  ampEnvVel:    { name: 'ampEnvVel',    displayName: 'Amp Env Vel',        nrpn: 31,  min: 0, max: 127 },
  ampDelay:     { name: 'ampDelay',     displayName: 'Amp Env Delay',      nrpn: 32,  min: 0, max: 127 },
  ampAttack:    { name: 'ampAttack',    displayName: 'Amp Env Attack',     nrpn: 33,  min: 0, max: 127 },
  ampDecay:     { name: 'ampDecay',     displayName: 'Amp Env Decay',      nrpn: 34,  min: 0, max: 127 },
  ampSustain:   { name: 'ampSustain',   displayName: 'Amp Env Sustain',    nrpn: 35,  min: 0, max: 127 },
  ampRelease:   { name: 'ampRelease',   displayName: 'Amp Env Release',    nrpn: 36,  min: 0, max: 127 },

  lfo1Rate:     { name: 'lfo1Rate',     displayName: 'LFO 1 Rate',        nrpn: 37,  min: 0, max: 166 },
  lfo1Shape:    { name: 'lfo1Shape',    displayName: 'LFO 1 Shape',       nrpn: 38,  min: 0, max: 4 },
  lfo1Amt:      { name: 'lfo1Amt',      displayName: 'LFO 1 Amount',      nrpn: 39,  min: 0, max: 127 },
  lfo1Dest:     { name: 'lfo1Dest',     displayName: 'LFO 1 Destination', nrpn: 40,  min: 0, max: 43 },
  lfo1Sync:     { name: 'lfo1Sync',     displayName: 'LFO 1 Sync',        nrpn: 41,  min: 0, max: 1 },

  lfo2Rate:     { name: 'lfo2Rate',     displayName: 'LFO 2 Rate',        nrpn: 42,  min: 0, max: 166 },
  lfo2Shape:    { name: 'lfo2Shape',    displayName: 'LFO 2 Shape',       nrpn: 43,  min: 0, max: 4 },
  lfo2Amt:      { name: 'lfo2Amt',      displayName: 'LFO 2 Amount',      nrpn: 44,  min: 0, max: 127 },
  lfo2Dest:     { name: 'lfo2Dest',     displayName: 'LFO 2 Destination', nrpn: 45,  min: 0, max: 43 },
  lfo2Sync:     { name: 'lfo2Sync',     displayName: 'LFO 2 Sync',        nrpn: 46,  min: 0, max: 1 },

  lfo3Rate:     { name: 'lfo3Rate',     displayName: 'LFO 3 Rate',        nrpn: 47,  min: 0, max: 166 },
  lfo3Shape:    { name: 'lfo3Shape',    displayName: 'LFO 3 Shape',       nrpn: 48,  min: 0, max: 4 },
  lfo3Amt:      { name: 'lfo3Amt',      displayName: 'LFO 3 Amount',      nrpn: 49,  min: 0, max: 127 },
  lfo3Dest:     { name: 'lfo3Dest',     displayName: 'LFO 3 Destination', nrpn: 50,  min: 0, max: 43 },
  lfo3Sync:     { name: 'lfo3Sync',     displayName: 'LFO 3 Sync',        nrpn: 51,  min: 0, max: 1 },

  lfo4Rate:     { name: 'lfo4Rate',     displayName: 'LFO 4 Rate',        nrpn: 52,  min: 0, max: 166 },
  lfo4Shape:    { name: 'lfo4Shape',    displayName: 'LFO 4 Shape',       nrpn: 53,  min: 0, max: 4 },
  lfo4Amt:      { name: 'lfo4Amt',      displayName: 'LFO 4 Amount',      nrpn: 54,  min: 0, max: 127 },
  lfo4Dest:     { name: 'lfo4Dest',     displayName: 'LFO 4 Destination', nrpn: 55,  min: 0, max: 43 },
  lfo4Sync:     { name: 'lfo4Sync',     displayName: 'LFO 4 Sync',        nrpn: 56,  min: 0, max: 1 },

  env3Dest:     { name: 'env3Dest',     displayName: 'Env 3 Destination',  nrpn: 57,  min: 0, max: 43 },
  env3Amt:      { name: 'env3Amt',      displayName: 'Env 3 Amount',       nrpn: 58,  min: 0, max: 254, displayOffset: -127 },
  env3Vel:      { name: 'env3Vel',      displayName: 'Env 3 Vel',          nrpn: 59,  min: 0, max: 127 },
  env3Delay:    { name: 'env3Delay',    displayName: 'Env 3 Delay',        nrpn: 60,  min: 0, max: 127 },
  env3Attack:   { name: 'env3Attack',   displayName: 'Env 3 Attack',       nrpn: 61,  min: 0, max: 127 },
  env3Decay:    { name: 'env3Decay',    displayName: 'Env 3 Decay',        nrpn: 62,  min: 0, max: 127 },
  env3Sustain:  { name: 'env3Sustain',  displayName: 'Env 3 Sustain',      nrpn: 63,  min: 0, max: 127 },
  env3Release:  { name: 'env3Release',  displayName: 'Env 3 Release',      nrpn: 64,  min: 0, max: 127 },

  mod1Src:      { name: 'mod1Src',      displayName: 'Mod 1 Source',       nrpn: 65,  min: 0, max: 20 },
  mod1Amt:      { name: 'mod1Amt',      displayName: 'Mod 1 Amount',       nrpn: 66,  min: 0, max: 254, displayOffset: -127 },
  mod1Dest:     { name: 'mod1Dest',     displayName: 'Mod 1 Destination',  nrpn: 67,  min: 0, max: 47 },
  mod2Src:      { name: 'mod2Src',      displayName: 'Mod 2 Source',       nrpn: 68,  min: 0, max: 20 },
  mod2Amt:      { name: 'mod2Amt',      displayName: 'Mod 2 Amount',       nrpn: 69,  min: 0, max: 254, displayOffset: -127 },
  mod2Dest:     { name: 'mod2Dest',     displayName: 'Mod 2 Destination',  nrpn: 70,  min: 0, max: 47 },
  mod3Src:      { name: 'mod3Src',      displayName: 'Mod 3 Source',       nrpn: 71,  min: 0, max: 20 },
  mod3Amt:      { name: 'mod3Amt',      displayName: 'Mod 3 Amount',       nrpn: 72,  min: 0, max: 254, displayOffset: -127 },
  mod3Dest:     { name: 'mod3Dest',     displayName: 'Mod 3 Destination',  nrpn: 73,  min: 0, max: 47 },
  mod4Src:      { name: 'mod4Src',      displayName: 'Mod 4 Source',       nrpn: 74,  min: 0, max: 20 },
  mod4Amt:      { name: 'mod4Amt',      displayName: 'Mod 4 Amount',       nrpn: 75,  min: 0, max: 254, displayOffset: -127 },
  mod4Dest:     { name: 'mod4Dest',     displayName: 'Mod 4 Destination',  nrpn: 76,  min: 0, max: 47 },

  seq1Dest:     { name: 'seq1Dest',     displayName: 'Seq 1 Destination',  nrpn: 77,  min: 0, max: 43 },
  seq2Dest:     { name: 'seq2Dest',     displayName: 'Seq 2 Destination',  nrpn: 78,  min: 0, max: 43 },
  seq3Dest:     { name: 'seq3Dest',     displayName: 'Seq 3 Destination',  nrpn: 79,  min: 0, max: 43 },
  seq4Dest:     { name: 'seq4Dest',     displayName: 'Seq 4 Destination',  nrpn: 80,  min: 0, max: 43 },

  bpm:          { name: 'bpm',          displayName: 'BPM',                nrpn: 91,  min: 30, max: 250 },
  clockDiv:     { name: 'clockDiv',     displayName: 'Clock Divide',       nrpn: 92,  min: 0, max: 12 },
  bendRange:    { name: 'bendRange',    displayName: 'Bend Range',         nrpn: 93,  min: 0, max: 12 },
  seqTrigger:   { name: 'seqTrigger',   displayName: 'Seq Trigger',        nrpn: 94,  min: 0, max: 3 },
  unisonMode:   { name: 'unisonMode',   displayName: 'Unison Mode',        nrpn: 95,  min: 0, max: 4 },
  keyMode:      { name: 'keyMode',      displayName: 'Key Mode',           nrpn: 96,  min: 0, max: 5 },
  arpMode:      { name: 'arpMode',      displayName: 'Arp Mode',           nrpn: 97,  min: 0, max: 14 },
  env3Repeat:   { name: 'env3Repeat',   displayName: 'Env 3 Repeat',       nrpn: 98,  min: 0, max: 1 },
  unison:       { name: 'unison',       displayName: 'Unison',             nrpn: 99,  min: 0, max: 1 },
  arp:          { name: 'arp',          displayName: 'Arp On/Off',         nrpn: 100, min: 0, max: 1 },
  sequencer:    { name: 'sequencer',    displayName: 'Sequencer On/Off',   nrpn: 101, min: 0, max: 1 },

  pushItNote:   { name: 'pushItNote',   displayName: 'Push It Note',       nrpn: 111, min: 0, max: 127 },
  pushItVel:    { name: 'pushItVel',    displayName: 'Push It Velocity',   nrpn: 112, min: 0, max: 127 },
  pushItMode:   { name: 'pushItMode',   displayName: 'Push It Mode',       nrpn: 113, min: 0, max: 2 },

  subOsc1:      { name: 'subOsc1',      displayName: 'Sub Osc 1 Level',    nrpn: 114, min: 0, max: 127 },
  subOsc2:      { name: 'subOsc2',      displayName: 'Sub Osc 2 Level',    nrpn: 115, min: 0, max: 127 },
  fbVolume:     { name: 'fbVolume',     displayName: 'Feedback Volume',    nrpn: 116, min: 0, max: 127 },

  splitPoint:   { name: 'splitPoint',   displayName: 'Split Point',        nrpn: 118, min: 0, max: 127 },
  keyboardMode: { name: 'keyboardMode', displayName: 'Keyboard Mode',      nrpn: 119, min: 0, max: 2 },
}

export const LAYER_B_OFFSET = 200
export const COMBO_OFFSETS = { voice1: 512, voice2: 768, voice3: 1024, voice4: 1280 }
