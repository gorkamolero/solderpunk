/** Panel hotspot zones — OpenCV detected + hand-tuned via editor. */

export interface Zone {
  id: string
  label: string
  tip: string
  rect: [string, string, string, string]
  group?: string
}

export const zones: Zone[] = [
  // ═══ ROW 1: SYNTHESIS ═══
  { id: 'osc', label: 'Oscillators',
    tip: 'Select (1-4), Shape, 1/2 Mix or Sample/Level, Pitch, Fine',
    rect: ['14.9%', '27.7%', '22.3%', '9.8%'], group: 'synth' },

  { id: 'lpf', label: 'Lowpass Filter',
    tip: 'Frequency (0-164), Resonance, Audio Mod, 4-Pole',
    rect: ['37.2%', '27.7%', '16.7%', '9.6%'], group: 'synth' },

  { id: 'hpf', label: 'Highpass',
    tip: 'Frequency (0-127). 2-pole, -12dB/oct',
    rect: ['53.8%', '27.5%', '5.4%', '10.4%'], group: 'synth' },

  { id: 'amp', label: 'Amp',
    tip: 'Feedback, Volume (on screen)',
    rect: ['59.4%', '27.8%', '5.8%', '9.5%'], group: 'synth' },

  // ═══ ROW 2: MODULATION ═══
  { id: 'env', label: 'Envelopes',
    tip: '5 DAPDSR: Pitch, LP, Amp, Aux1, Aux2. AD Mode, Attack, Decay, Amount, Vel Amt.',
    rect: ['14.8%', '37.3%', '22.4%', '10.8%'], group: 'mod' },

  { id: 'lfo', label: 'LFO 1 & 2',
    tip: 'Shape, Rate, Amount, Destination, Sync',
    rect: ['36.9%', '37.3%', '11.4%', '10.8%'], group: 'mod' },

  { id: 'mixer', label: 'Mixer',
    tip: 'Level, Mute, Solo, Delay Send/Time/Feedback',
    rect: ['48.5%', '37.5%', '17.1%', '11%'], group: 'mix' },

  // ═══ DISPLAY & MASTER ═══
  { id: 'master', label: 'Master',
    tip: 'BPM/Swing, Distort, Compress, Volume',
    rect: ['65.6%', '18.5%', '19.7%', '8.8%'], group: 'utility' },

  { id: 'display', label: 'Display',
    tip: 'OLED screen + soft knobs. 16 sound pages, beat events, mixer, system.',
    rect: ['65.7%', '27.9%', '19.3%', '22.9%'], group: 'nav' },

  // ═══ MIDDLE SECTION ═══
  { id: 'fx-sliders', label: 'Real Time FX',
    tip: 'FX1-FX4 assign, Latch On. Two touch sliders.',
    rect: ['14.7%', '48.8%', '11.5%', '33.2%'], group: 'fx' },

  { id: 'pad-function', label: 'Pad Function',
    tip: '16 Beats, 16 Time Steps, 16 Sounds, 16 Mutes, 16 Tunings, 16 Levels',
    rect: ['26.8%', '48.3%', '9.2%', '10.1%'], group: 'pads' },

  { id: 'pad-options', label: 'Pad Options',
    tip: 'Sound Bank B, Reverse, Roll, Fixed Level',
    rect: ['36%', '48.6%', '8.3%', '9.8%'], group: 'pads' },

  { id: 'screens', label: 'Screens',
    tip: 'Play List, Events, Pads, Sounds, Mixer',
    rect: ['44.3%', '48.7%', '8.3%', '9.3%'], group: 'nav' },

  { id: 'rec-edit', label: 'Rec/Edit',
    tip: 'Click, Undo Rec, Erase, Copy',
    rect: ['52.4%', '48.7%', '8.5%', '9%'], group: 'rec' },

  { id: 'system', label: 'System',
    tip: 'System settings: MIDI, Clock, Calibration, Preferences',
    rect: ['61%', '48.7%', '4.5%', '9%'], group: 'utility' },

  { id: 'transport', label: 'Transport',
    tip: 'Rewind, FF, Record, Stop, Play',
    rect: ['65.9%', '50.6%', '19.3%', '7%'], group: 'rec' },

  // ═══ 16 PADS ═══
  { id: 'pad-1', label: '1', tip: 'Pad 1', rect: ['28.1%', '61.6%', '5.8%', '8.3%'], group: 'pads' },
  { id: 'pad-2', label: '2', tip: 'Pad 2', rect: ['35.2%', '61.6%', '5.7%', '8.4%'], group: 'pads' },
  { id: 'pad-3', label: '3', tip: 'Pad 3', rect: ['42.4%', '61.6%', '5.7%', '8.4%'], group: 'pads' },
  { id: 'pad-4', label: '4', tip: 'Pad 4', rect: ['49.5%', '61.6%', '5.7%', '8.4%'], group: 'pads' },
  { id: 'pad-5', label: '5', tip: 'Pad 5', rect: ['56.5%', '61.6%', '5.7%', '8.4%'], group: 'pads' },
  { id: 'pad-6', label: '6', tip: 'Pad 6', rect: ['63.6%', '61.7%', '5.7%', '8.3%'], group: 'pads' },
  { id: 'pad-7', label: '7', tip: 'Pad 7', rect: ['70.8%', '61.7%', '5.7%', '8.3%'], group: 'pads' },
  { id: 'pad-8', label: '8', tip: 'Pad 8', rect: ['77.8%', '61.7%', '5.8%', '8.4%'], group: 'pads' },
  { id: 'pad-9', label: '9', tip: 'Pad 9', rect: ['28.1%', '71.7%', '5.8%', '8.3%'], group: 'pads' },
  { id: 'pad-10', label: '10', tip: 'Pad 10', rect: ['35.2%', '71.7%', '5.7%', '8.3%'], group: 'pads' },
  { id: 'pad-11', label: '11', tip: 'Pad 11', rect: ['42.4%', '71.7%', '5.7%', '8.3%'], group: 'pads' },
  { id: 'pad-12', label: '12', tip: 'Pad 12', rect: ['49.5%', '71.8%', '5.7%', '8.3%'], group: 'pads' },
  { id: 'pad-13', label: '13', tip: 'Pad 13', rect: ['56.5%', '71.8%', '5.7%', '8.4%'], group: 'pads' },
  { id: 'pad-14', label: '14', tip: 'Pad 14', rect: ['63.6%', '71.8%', '5.7%', '8.3%'], group: 'pads' },
  { id: 'pad-15', label: '15', tip: 'Pad 15', rect: ['70.8%', '71.8%', '5.7%', '8.3%'], group: 'pads' },
  { id: 'pad-16', label: '16', tip: 'Pad 16', rect: ['77.8%', '71.8%', '5.8%', '8.3%'], group: 'pads' },

  // ═══ INDIVIDUAL KNOBS (per-section OpenCV + manual labels) ═══

  // Main Out (top edge, above soft knobs)
  { id: 'bpm-knob', label: 'BPM/Swing', tip: 'BPM / Swing', rect: ['66.5%', '19.9%', '2.6%', '3.8%'], group: 'knob' },
  { id: 'distort-knob', label: 'Distort', tip: 'Distortion amount', rect: ['71.6%', '19.9%', '2.6%', '3.9%'], group: 'knob' },
  { id: 'compress-knob', label: 'Compress', tip: 'Compression amount', rect: ['76.6%', '19.9%', '2.6%', '3.8%'], group: 'knob' },
  { id: 'volume-knob', label: 'Volume', tip: 'Main Volume', rect: ['81.5%', '19.9%', '2.6%', '3.8%'], group: 'knob' },

  // Soft Knobs (top of display zone, detected inside display area)
  { id: 'soft-knob-1', label: 'Soft 1', tip: 'Context-dependent. Function shown on OLED screen.', rect: ['66.8%', '28.7%', '2.4%', '3.6%'], group: 'knob' },
  { id: 'soft-knob-2', label: 'Soft 2', tip: 'Context-dependent. Function shown on OLED screen.', rect: ['71.8%', '28.8%', '2.4%', '3.6%'], group: 'knob' },
  { id: 'soft-knob-3', label: 'Soft 3', tip: 'Context-dependent. Function shown on OLED screen.', rect: ['76.8%', '29.0%', '2.2%', '3.3%'], group: 'knob' },
  { id: 'soft-knob-4', label: 'Soft 4', tip: 'Context-dependent. Function shown on OLED screen.', rect: ['81.7%', '29.1%', '2.1%', '3.2%'], group: 'knob' },

  // Oscillators: Shape, 1/2 Mix, Pitch, Fine
  { id: 'osc-shape', label: 'Shape', tip: 'Off, Saw, Tri, Saw-Tri, Pulse 0-99%. Secondary: Sample (digital)', rect: ['22.2%', '28.8%', '2.3%', '3.5%'], group: 'knob' },
  { id: 'osc-mix', label: '1/2 Mix', tip: '0=100% Osc1, 64=50/50, 127=100% Osc2. Secondary: Level (digital)', rect: ['27.8%', '28.9%', '2.3%', '3.5%'], group: 'knob' },
  { id: 'osc-pitch', label: 'Pitch', tip: 'C0-C10 semitones (10 octaves). Secondary: Frequency (digital, -24 to +24)', rect: ['33.4%', '28.8%', '2.3%', '3.5%'], group: 'knob' },
  { id: 'osc-fine', label: 'Fine', tip: '-50 to +50 cents. Secondary: Pre/Post Filter (digital)', rect: ['38.9%', '28.8%', '2.3%', '3.5%'], group: 'knob' },

  // Lowpass: Frequency, Resonance, Audio Mod
  { id: 'lpf-frequency', label: 'Frequency', tip: '0-164. 13+ octave range. Steps in semitones slowly, smooth at speed.', rect: ['40.2%', '28.8%', '2.3%', '3.5%'], group: 'knob' },
  { id: 'lpf-resonance', label: 'Resonance', tip: '0-127. Self-oscillates at high values in 4-pole mode.', rect: ['45.8%', '28.8%', '2.3%', '3.5%'], group: 'knob' },
  { id: 'lpf-audio-mod', label: 'Audio Mod', tip: '0-127. FM from Osc 1 to filter cutoff. Bell-like FM sounds.', rect: ['51.2%', '28.8%', '2.3%', '3.5%'], group: 'knob' },

  // Highpass: Frequency
  { id: 'hpf-frequency', label: 'Frequency', tip: '0-127. 2-pole -12dB/oct. 0 passes all frequencies.', rect: ['56.9%', '28.8%', '2.3%', '3.5%'], group: 'knob' },

  // Amp: Feedback
  { id: 'amp-feedback', label: 'Feedback', tip: '0-127. Feeds left output back pre-filter. Fuzzy distortion to pandemonium.', rect: ['62.4%', '28.8%', '2.3%', '3.5%'], group: 'knob' },

  // Envelopes: Attack, Decay, Amount, Velocity Amt
  { id: 'env-attack', label: 'Attack', tip: '0-127. Attack time of selected envelope.', rect: ['22.2%', '38.4%', '2.3%', '3.5%'], group: 'knob' },
  { id: 'env-decay', label: 'Decay', tip: '0-127. Decay time. Shift: Sustain Level.', rect: ['27.8%', '38.4%', '2.3%', '3.5%'], group: 'knob' },
  { id: 'env-amount', label: 'Amount', tip: '-127 to +127. Mod amount to destination. Amp is 0-127 only. Shift: Release.', rect: ['33.3%', '38.4%', '2.3%', '3.5%'], group: 'knob' },
  { id: 'env-velamt', label: 'Vel Amt', tip: '0-127. How much velocity affects envelope amount.', rect: ['38.8%', '38.4%', '2.3%', '3.5%'], group: 'knob' },

  // LFO: Rate, Amount
  { id: 'lfo-rate', label: 'Rate', tip: '0-162. Free: 30sec to 523Hz. Synced: 32 quarter notes to 64th notes.', rect: ['44.6%', '38.4%', '2.3%', '3.5%'], group: 'knob' },
  { id: 'lfo-amount', label: 'Amount', tip: '0-127. Modulation depth to destination.', rect: ['50.1%', '38.3%', '2.4%', '3.6%'], group: 'knob' },

  // Mixer: Level, Pan, Delay Send
  { id: 'mixer-level', label: 'Level', tip: '0-127. Per-sound volume to the mix bus.', rect: ['55.7%', '38.2%', '2.4%', '3.6%'], group: 'knob' },
  { id: 'mixer-pan', label: 'Pan', tip: 'Stereo position. Affects feedback loop behavior.', rect: ['61.2%', '38.2%', '2.4%', '3.6%'], group: 'knob' },
  { id: 'mixer-delay-send', label: 'Delay Send', tip: '0-127. Amount sent to the beat delay effect.', rect: ['66.7%', '38.2%', '2.4%', '3.6%'], group: 'knob' },

  // ═══ BUTTONS (detected from BW template + manual labels) ═══
  { id: 'osc-show-btn', label: 'Show', tip: 'Oscillators Show button', rect: ['16.5%', '23.3%', '2.1%', '1.5%'], group: 'button' },
  { id: 'osc-select-btn', label: 'Select', tip: 'Select oscillator 1-4 (Ana/Digi)', rect: ['16.9%', '30.2%', '2.2%', '1.5%'], group: 'button' },
  { id: 'lpf-4pole-btn', label: '4 Pole/Show', tip: 'Toggle 2-pole/4-pole filter + Show', rect: ['44.7%', '34.7%', '2.1%', '1.5%'], group: 'button' },
  { id: 'env-admode-btn', label: 'AD Mode', tip: 'Toggle AD (attack-decay only) vs ADSR', rect: ['16.9%', '40.1%', '2.1%', '1.5%'], group: 'button' },
  { id: 'env-pitch-btn', label: 'Pitch', tip: 'Select Pitch envelope', rect: ['16.9%', '45.3%', '2.1%', '1.5%'], group: 'button' },
  { id: 'env-lowpass-btn', label: 'Lowpass', tip: 'Select Lowpass envelope', rect: ['21.1%', '45.3%', '2.1%', '1.5%'], group: 'button' },
  { id: 'env-amp-btn', label: 'Amp', tip: 'Select Amp envelope', rect: ['25.2%', '45.3%', '2.1%', '1.5%'], group: 'button' },
  { id: 'env-aux1-btn', label: 'Aux1', tip: 'Select Aux 1 envelope', rect: ['29.4%', '45.3%', '2.1%', '1.5%'], group: 'button' },
  { id: 'env-aux2-btn', label: 'Aux2', tip: 'Select Aux 2 envelope', rect: ['33.5%', '45.3%', '2.2%', '1.5%'], group: 'button' },
  { id: 'lfo-lfo2-btn', label: 'LFO2', tip: 'Toggle LFO 1/2 editing', rect: ['39.1%', '45.3%', '2.1%', '1.5%'], group: 'button' },
  { id: 'lfo-show-btn', label: 'Show', tip: 'LFO Show (Shape/Destination/Sync on screen)', rect: ['44.7%', '45.4%', '2.2%', '1.5%'], group: 'button' },
  { id: 'mixer-mute-btn', label: 'Mute', tip: 'Mute selected sound', rect: ['50.3%', '45.3%', '2.1%', '1.5%'], group: 'button' },
  { id: 'mixer-solo-btn', label: 'Solo', tip: 'Solo selected sound', rect: ['55.8%', '45.3%', '2.1%', '1.6%'], group: 'button' },
  { id: 'mixer-show-btn', label: 'Show', tip: 'Mixer Show (Delay Repeats/Time/On on screen)', rect: ['61.4%', '45.4%', '2.2%', '1.5%'], group: 'button' },
  { id: 'nav-pageup-btn', label: 'Page Up', tip: 'Screen page up', rect: ['67.4%', '44.1%', '2.1%', '1.7%'], group: 'button' },
  { id: 'nav-up-btn', label: 'Up', tip: 'Navigate up', rect: ['72.0%', '44.2%', '2.2%', '1.6%'], group: 'button' },
  { id: 'nav-left-btn', label: 'Left', tip: 'Navigate left', rect: ['76.5%', '44.2%', '2.2%', '1.6%'], group: 'button' },
  { id: 'nav-right-btn', label: 'Right', tip: 'Navigate right', rect: ['81.1%', '44.2%', '2.2%', '1.7%'], group: 'button' },
  { id: 'nav-shift-btn', label: 'Shift', tip: 'Display Shift', rect: ['67.4%', '48.0%', '2.2%', '1.5%'], group: 'button' },
  { id: 'nav-down-btn', label: 'Down', tip: 'Navigate down', rect: ['72.0%', '48.0%', '2.2%', '1.6%'], group: 'button' },
  { id: 'nav-pagedown-btn', label: 'Page Down', tip: 'Screen page down', rect: ['76.5%', '48.0%', '2.2%', '1.6%'], group: 'button' },
  { id: 'nav-screenttl-btn', label: 'Screen Title', tip: 'Screen title select', rect: ['81.1%', '48.0%', '2.2%', '1.6%'], group: 'button' },
  { id: 'fx-playback1-btn', label: 'Playback', tip: 'FX1/3 Playback assign', rect: ['16.9%', '51.0%', '2.2%', '1.5%'], group: 'button' },
  { id: 'fx-playback2-btn', label: 'Playback', tip: 'FX2/4 Playback assign', rect: ['22.0%', '51.0%', '2.1%', '1.5%'], group: 'button' },
  { id: 'padfn-16beats-btn', label: '16 Beats', tip: '16 Beats pad function', rect: ['28.2%', '51.0%', '2.1%', '1.5%'], group: 'button' },
  { id: 'padfn-16timesteps-btn', label: '16 Time Steps', tip: '16 Time Steps pad function', rect: ['32.4%', '50.9%', '2.1%', '1.7%'], group: 'button' },
  { id: 'padopt-bankb-btn', label: 'Sound Bank B', tip: 'Toggle Sound Bank A/B', rect: ['36.6%', '51.0%', '2.1%', '1.5%'], group: 'button' },
  { id: 'padopt-reverse-btn', label: 'Reverse', tip: 'Reverse sample playback', rect: ['40.8%', '51.0%', '2.1%', '1.5%'], group: 'button' },
  { id: 'screens-playlist-btn', label: 'Play List', tip: 'Play List screen', rect: ['44.9%', '51.0%', '2.1%', '1.6%'], group: 'button' },
  { id: 'screens-events-btn', label: 'Events', tip: 'Events screen', rect: ['49.1%', '51.0%', '2.1%', '1.5%'], group: 'button' },
  { id: 'recedit-click-btn', label: 'Click', tip: 'Metronome click', rect: ['53.3%', '51.0%', '2.1%', '1.7%'], group: 'button' },
  { id: 'recedit-undorec-btn', label: 'Undo Rec', tip: 'Undo last recording', rect: ['57.5%', '51.0%', '2.2%', '1.7%'], group: 'button' },
  { id: 'system-btn', label: 'System', tip: 'System settings menu', rect: ['61.7%', '51.0%', '2.1%', '1.6%'], group: 'button' },
  { id: 'fx-assign1-btn', label: 'Assign', tip: 'FX1/3 Assign', rect: ['16.9%', '53.1%', '2.2%', '1.5%'], group: 'button' },
  { id: 'fx-assign2-btn', label: 'Assign', tip: 'FX2/4 Assign', rect: ['22.0%', '53.1%', '2.1%', '1.5%'], group: 'button' },
  { id: 'fx-latchon1-btn', label: 'Latch On', tip: 'FX1/3 Latch On', rect: ['16.9%', '55.2%', '2.2%', '1.5%'], group: 'button' },
  { id: 'fx-latchon2-btn', label: 'Latch On', tip: 'FX2/4 Latch On', rect: ['22.0%', '55.2%', '2.1%', '1.5%'], group: 'button' },
  { id: 'padfn-16sounds-btn', label: '16 Sounds', tip: '16 Sounds pad function', rect: ['28.2%', '55.2%', '2.2%', '1.5%'], group: 'button' },
  { id: 'padfn-16mutes-btn', label: '16 Mutes', tip: '16 Mutes pad function', rect: ['32.4%', '55.2%', '2.1%', '1.5%'], group: 'button' },
  { id: 'padopt-roll-btn', label: 'Roll', tip: 'Roll / arpeggiate', rect: ['36.6%', '55.2%', '2.1%', '1.6%'], group: 'button' },
  { id: 'padopt-fixedlevel-btn', label: 'Fixed Level', tip: 'Fixed velocity level', rect: ['40.8%', '55.2%', '2.1%', '1.6%'], group: 'button' },
  { id: 'screens-pads-btn', label: 'Pads', tip: 'Pads screen', rect: ['44.9%', '55.2%', '2.1%', '1.5%'], group: 'button' },
  { id: 'screens-sounds-btn', label: 'Sounds', tip: 'Sounds screen', rect: ['49.1%', '55.2%', '2.1%', '1.6%'], group: 'button' },
  { id: 'recedit-erase-btn', label: 'Erase', tip: 'Erase notes/events', rect: ['53.3%', '55.2%', '2.2%', '1.6%'], group: 'button' },
  { id: 'recedit-copy-btn', label: 'Copy', tip: 'Copy sound/beat', rect: ['57.5%', '55.2%', '2.2%', '1.6%'], group: 'button' },
  { id: 'system-saveload-btn', label: 'Save/Load', tip: 'Save/Load menu', rect: ['61.7%', '55.1%', '2.1%', '1.7%'], group: 'button' },
  { id: 'transport-rewind-btn', label: '<<', tip: 'Rewind', rect: ['67.0%', '53.6%', '1.1%', '3.2%'], group: 'button' },
  { id: 'transport-ff-btn', label: '>>', tip: 'Fast forward', rect: ['69.0%', '53.6%', '1.1%', '3.2%'], group: 'button' },
  { id: 'transport-rec-btn', label: 'REC', tip: 'Record', rect: ['71.8%', '53.9%', '2.7%', '2.7%'], group: 'button' },
  { id: 'transport-stop-btn', label: 'STOP', tip: 'Stop playback', rect: ['76.3%', '53.9%', '2.6%', '2.7%'], group: 'button' },
  { id: 'transport-play-btn', label: 'PLAY', tip: 'Start playback', rect: ['80.9%', '53.9%', '2.7%', '2.7%'], group: 'button' },
]

export const legendItems = [
  { id: 'osc', label: 'Oscillators', color: '#1a6b4a' },
  { id: 'lpf', label: 'Lowpass', color: '#a8307a' },
  { id: 'hpf', label: 'Highpass', color: '#7a30a8' },
  { id: 'amp', label: 'Amp', color: '#d4880a' },
  { id: 'env', label: 'Envelopes', color: '#1a4a6b' },
  { id: 'lfo', label: 'LFO', color: '#4a6b1a' },
  { id: 'mixer', label: 'Mixer', color: '#2a5a8a' },
  { id: 'display', label: 'Display', color: '#005555' },
  { id: 'system', label: 'System', color: '#444444' },
  { id: 'transport', label: 'Transport', color: '#662222' },
  { id: 'master', label: 'Master', color: '#555555' },
]
