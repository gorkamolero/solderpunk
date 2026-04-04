import type { Zone, LegendItem } from '@/lib/shared-types'

export const zones: Zone[] = [
  // TOP ROW: Rear panel labels (connections)
  { id: 'connections', label: 'Connections',
    tip: '13-15V DC, USB, MIDI In/Out, Poly Chain Out (doubles as 2nd MIDI Out), 4 Audio Outputs, Phones.',
    rect: ['1%', '0%', '98%', '8%'], group: 'io' },

  // LEFT SECTION: Select knob + Mode buttons
  { id: 'select', label: 'Select',
    tip: 'Rotary encoder for selecting programs, banks, and parameter values.',
    rect: ['1%', '12%', '10%', '25%'], group: 'nav' },

  { id: 'mode', label: 'Mode Buttons',
    tip: 'Program, Combo, Global modes. Press to switch between 512 programs, 128 combos, or global settings.',
    rect: ['12%', '10%', '10%', '28%'], group: 'nav' },

  // CENTER: LCD Display
  { id: 'display', label: 'LCD Display',
    tip: '2x16 character LCD. Shows program name, bank, parameter names and values. The main feedback for the Tetra\'s deep menu system.',
    rect: ['24%', '12%', '36%', '20%'], group: 'nav' },

  // RIGHT SECTION: Write button + Volume
  { id: 'write', label: 'Write',
    tip: 'Save current edits to memory. Hold to save, confirm with encoder.',
    rect: ['66%', '12%', '8%', '14%'], group: 'utility' },

  { id: 'volume', label: 'Volume',
    tip: 'Master output volume. Analog potentiometer.',
    rect: ['86%', '12%', '12%', '20%'], group: 'utility' },

  // ASSIGNABLE PARAMETERS ROW
  { id: 'assign', label: 'Assignable Parameters',
    tip: 'Four assignable parameter knobs. In Combo mode: AP1-AP4 map one per voice for real-time control. Assign to any parameter per patch.',
    rect: ['12%', '40%', '76%', '22%'], group: 'mod' },

  // BOTTOM ROW: Main parameter knobs
  { id: 'osc', label: 'Pitch / Oscillators',
    tip: 'Pitch control. Two analog oscillators per voice: Saw, Tri, Saw-Tri, Pulse. Sub-oscillators exclusive to Tetra/Mopho.',
    rect: ['1%', '66%', '12%', '30%'], group: 'synth' },

  { id: 'filter', label: 'Filter',
    tip: 'Curtis CEM3379 LPF. Cutoff (0-164) and Resonance. 2-pole or 4-pole. Self-oscillates in 4-pole mode.',
    rect: ['13%', '66%', '22%', '30%'], group: 'synth' },

  { id: 'env', label: 'Envelopes',
    tip: 'Attack and Decay/Release controls. Three DADSR envelopes: Filter, VCA, Env 3. Env 3 has Repeat mode.',
    rect: ['35%', '66%', '22%', '30%'], group: 'mod' },

  { id: 'assign-params', label: 'Assign / Edit',
    tip: 'Assign Params: map the 4 assignable knobs. Edit B/Combo: switch layers or cycle through Combo voices.',
    rect: ['57%', '66%', '22%', '30%'], group: 'utility' },

  { id: 'pushit', label: 'Push It!',
    tip: 'Instant note trigger without a keyboard. Hold for latch. In arp mode, toggles arp on/off. Great for sound design.',
    rect: ['82%', '66%', '16%', '30%'], group: 'utility' },

  // INDIVIDUAL KNOBS
  { id: 'pitch-knob', label: 'Pitch', tip: 'Oscillator pitch. Coarse tuning.', rect: ['3%', '72%', '6%', '14%'], group: 'knob' },
  { id: 'cutoff-knob', label: 'Cutoff', tip: 'Low-pass filter cutoff frequency. 0-164 (13+ octave range). Real potentiometer.', rect: ['15%', '72%', '6%', '14%'], group: 'knob' },
  { id: 'resonance-knob', label: 'Resonance', tip: 'Filter resonance. Real potentiometer. Self-oscillates at high values in 4-pole mode.', rect: ['26%', '72%', '6%', '14%'], group: 'knob' },
  { id: 'attack-knob', label: 'Attack', tip: 'Envelope attack time. Applies to currently selected envelope.', rect: ['37%', '72%', '6%', '14%'], group: 'knob' },
  { id: 'decay-knob', label: 'Decay/Release', tip: 'Envelope decay/release time.', rect: ['48%', '72%', '6%', '14%'], group: 'knob' },
  { id: 'assign-params-knob', label: 'Assign Params', tip: 'Enter Assign Parameters mode to map the 4 assignable knobs.', rect: ['60%', '72%', '6%', '14%'], group: 'knob' },
  { id: 'edit-knob', label: 'Edit B/Combo', tip: 'Edit Layer B (Program mode) or cycle through voices 1-4 (Combo mode, beta firmware).', rect: ['70%', '72%', '6%', '14%'], group: 'knob' },

  // Assignable parameter knobs (row of 4)
  { id: 'ap1-knob', label: 'AP 1', tip: 'Assignable Parameter 1. Maps to Voice 1 in Combo mode.', rect: ['22%', '44%', '6%', '14%'], group: 'knob' },
  { id: 'ap2-knob', label: 'AP 2', tip: 'Assignable Parameter 2. Maps to Voice 2 in Combo mode.', rect: ['36%', '44%', '6%', '14%'], group: 'knob' },
  { id: 'ap3-knob', label: 'AP 3', tip: 'Assignable Parameter 3. Maps to Voice 3 in Combo mode.', rect: ['50%', '44%', '6%', '14%'], group: 'knob' },
  { id: 'ap4-knob', label: 'AP 4', tip: 'Assignable Parameter 4. Maps to Voice 4 in Combo mode.', rect: ['64%', '44%', '6%', '14%'], group: 'knob' },

  // Volume knob
  { id: 'volume-knob', label: 'Volume', tip: 'Master output volume.', rect: ['88%', '14%', '8%', '14%'], group: 'knob' },

  // Mode buttons
  { id: 'btn-program', label: 'Program', tip: 'Enter Program mode. 512 programs in banks 1-4.', rect: ['13%', '12%', '8%', '6%'], group: 'button' },
  { id: 'btn-combo', label: 'Combo', tip: 'Enter Combo mode. 128 combos with 512 independent programs.', rect: ['13%', '19%', '8%', '6%'], group: 'button' },
  { id: 'btn-global', label: 'Global', tip: 'Global settings: Master Tune, MIDI channel, Clock, Calibration.', rect: ['13%', '26%', '8%', '6%'], group: 'button' },
  { id: 'btn-write', label: 'Write', tip: 'Save current program or combo to memory.', rect: ['68%', '14%', '6%', '10%'], group: 'button' },
  { id: 'btn-pushit', label: 'Push It!', tip: 'Red button. Instant note trigger. Hold for sustained note. Toggle mode available.', rect: ['88%', '72%', '8%', '14%'], group: 'button' },
]

export const legendItems: LegendItem[] = [
  { id: 'osc', label: 'Oscillators', color: '#1a6b4a' },
  { id: 'filter', label: 'Filter', color: '#a8307a' },
  { id: 'env', label: 'Envelopes', color: '#1a4a6b' },
  { id: 'assign', label: 'Assign Params', color: '#4a6b1a' },
  { id: 'display', label: 'Display', color: '#005555' },
  { id: 'connections', label: 'I/O', color: '#2a5a8a' },
  { id: 'pushit', label: 'Push It!', color: '#d4880a' },
]
