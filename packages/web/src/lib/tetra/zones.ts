import type { Zone, LegendItem } from '@/lib/shared-types'

export const zones: Zone[] = [
  { id: 'select', label: 'Select', tip: 'Rotary encoder — browse programs, combos, parameters', rect: ['4.5%', '17%', '7%', '12%'], group: 'knob' },
  { id: 'program-btn', label: 'Program', tip: 'Enter Program mode (512 programs)', rect: ['17%', '12%', '6%', '8%'], group: 'button' },
  { id: 'combo-btn', label: 'Combo', tip: 'Enter Combo mode (128 combos, independent 512 programs)', rect: ['17%', '21%', '6%', '8%'], group: 'button' },
  { id: 'global-btn', label: 'Global', tip: 'Enter Global settings', rect: ['17%', '30%', '6%', '8%'], group: 'button' },
  { id: 'display', label: 'Display', tip: 'LCD screen showing program name, bank, parameters', rect: ['30%', '10%', '32%', '22%'], group: 'nav' },
  { id: 'write-btn', label: 'Write', tip: 'Save current program/combo to memory', rect: ['73%', '17%', '7%', '12%'], group: 'button' },
  { id: 'volume', label: 'Volume', tip: 'Master volume', rect: ['87%', '17%', '7%', '12%'], group: 'knob' },

  { id: 'ap1', label: 'Param 1', tip: 'Assignable Parameter 1 — context-dependent', rect: ['28%', '43%', '7%', '12%'], group: 'knob' },
  { id: 'ap2', label: 'Param 2', tip: 'Assignable Parameter 2 — context-dependent', rect: ['41%', '43%', '7%', '12%'], group: 'knob' },
  { id: 'ap3', label: 'Param 3', tip: 'Assignable Parameter 3 — context-dependent', rect: ['54%', '43%', '7%', '12%'], group: 'knob' },
  { id: 'ap4', label: 'Param 4', tip: 'Assignable Parameter 4 — context-dependent', rect: ['67%', '43%', '7%', '12%'], group: 'knob' },

  { id: 'pitch', label: 'Pitch', tip: 'Osc 1+2 frequency. NRPN 0/5', rect: ['7%', '68%', '7%', '12%'], group: 'knob' },
  { id: 'cutoff', label: 'Cutoff', tip: 'Filter cutoff 0-164. NRPN 15. Self-oscillates at high resonance in 4-pole.', rect: ['20%', '68%', '7%', '12%'], group: 'knob' },
  { id: 'resonance', label: 'Resonance', tip: 'Filter resonance 0-127. NRPN 16', rect: ['33.5%', '68%', '7%', '12%'], group: 'knob' },
  { id: 'attack', label: 'Attack', tip: 'Amp envelope attack 0-127. NRPN 33', rect: ['47%', '68%', '7%', '12%'], group: 'knob' },
  { id: 'decay-release', label: 'Decay/Release', tip: 'Amp envelope decay (NRPN 34) + release (NRPN 36)', rect: ['60%', '68%', '7%', '12%'], group: 'knob' },

  { id: 'assign-params-btn', label: 'Assign Params', tip: 'Map the 4 assignable knobs to different parameters', rect: ['70%', '68%', '7%', '12%'], group: 'button' },
  { id: 'edit-b-btn', label: 'Edit B/Combo', tip: 'Toggle Layer A/B editing. In Combo mode cycles voices 1-4.', rect: ['79%', '68%', '7%', '12%'], group: 'button' },
  { id: 'push-it-btn', label: 'Push It!', tip: 'Trigger a note without keyboard. Toggle/latch modes. NRPN 111-113.', rect: ['87%', '68%', '8%', '14%'], group: 'button' },
]

export const legendItems: LegendItem[] = [
  { id: 'display', label: 'Display', color: '#0af' },
  { id: 'pitch', label: 'Oscillators', color: '#1a6b4a' },
  { id: 'cutoff', label: 'Filter', color: '#a8307a' },
  { id: 'attack', label: 'Envelope', color: '#1a4a6b' },
  { id: 'ap1', label: 'Assignable', color: '#4a6b1a' },
  { id: 'push-it-btn', label: 'Push It', color: '#ff4d4d' },
]
