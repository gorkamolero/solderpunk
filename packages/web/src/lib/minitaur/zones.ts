import type { Zone, LegendItem } from './types'

export const zones: Zone[] = [
  // PANEL SECTIONS
  { id: 'osc', label: 'Oscillators',
    tip: 'VCO 1 and VCO 2 waveform selection plus fine tuning.',
    rect: ['13.8%', '28.5%', '6.9%', '33.1%'], group: 'osc' },

  { id: 'vco2', label: 'VCO 2',
    tip: 'Offset oscillator 2 frequency against oscillator 1.',
    rect: ['24.3%', '21.6%', '8.8%', '12.9%'], group: 'osc' },

  { id: 'mix', label: 'Mix',
    tip: 'Set the levels feeding the ladder filter from VCO 1 and VCO 2.',
    rect: ['24.3%', '43.8%', '20.5%', '13.1%'], group: 'mix' },

  { id: 'filter', label: 'Filter',
    tip: 'Shape brightness and bite with cutoff, resonance, and envelope amount.',
    rect: ['38.7%', '20.5%', '38.7%', '15.0%'], group: 'filter' },

  { id: 'vca', label: 'VCA',
    tip: 'Set final loudness and release behavior for the amp.',
    rect: ['81.2%', '22.3%', '8.8%', '25.5%'], group: 'amp' },

  { id: 'env', label: 'Envelopes',
    tip: 'Filter and amplifier envelopes for note shape and movement.',
    rect: ['47.5%', '43.7%', '29.9%', '34.1%'], group: 'env' },

  { id: 'mod', label: 'Mod',
    tip: 'LFO rate and modulation depth routed to oscillator and filter pitch.',
    rect: ['11.8%', '66.4%', '32.6%', '13.2%'], group: 'mod' },

  { id: 'glide', label: 'Glide',
    tip: 'Enable portamento and set the slide rate between notes.',
    rect: ['82.3%', '52.6%', '8.7%', '24.7%'], group: 'utility' },

  // OSCILLATORS
  { id: 'osc-fine', label: 'Fine Tune',
    tip: 'Fine-tune the oscillator pitch.',
    rect: ['16.8%', '29.5%', '2.9%', '4.4%'], group: 'knob' },
  { id: 'osc-wave1', label: 'VCO 1 Wave',
    tip: 'Switch VCO 1 between saw and square wave.',
    rect: ['14.8%', '41.0%', '4.7%', '7.0%'], group: 'button' },
  { id: 'osc-wave2', label: 'VCO 2 Wave',
    tip: 'Switch VCO 2 between saw and square wave.',
    rect: ['14.8%', '53.0%', '4.7%', '7.0%'], group: 'button' },

  // VCO 2
  { id: 'vco2-freq', label: 'VCO 2 Freq',
    tip: 'Tune VCO 2 above or below VCO 1 for intervals and detuned bass.',
    rect: ['25.5%', '23.2%', '6.4%', '9.7%'], group: 'knob' },

  // MIX
  { id: 'mix-vco1', label: 'VCO 1 Lvl',
    tip: 'Set VCO 1 level into the filter. Higher settings overdrive the input.',
    rect: ['25.5%', '45.4%', '6.4%', '9.7%'], group: 'knob' },
  { id: 'mix-vco2', label: 'VCO 2 Lvl',
    tip: 'Set VCO 2 level into the filter. Balance it against VCO 1.',
    rect: ['37.1%', '45.5%', '6.4%', '9.7%'], group: 'knob' },

  // FILTER
  { id: 'filter-cutoff', label: 'Cutoff',
    tip: 'Set the ladder filter cutoff frequency.',
    rect: ['39.9%', '21.7%', '8.3%', '12.5%'], group: 'knob' },
  { id: 'filter-res', label: 'Res',
    tip: 'Increase filter resonance up to self-oscillation.',
    rect: ['56.8%', '23.0%', '6.4%', '9.7%'], group: 'knob' },
  { id: 'filter-eg', label: 'EG Amount',
    tip: 'Set how strongly the filter envelope opens or closes the cutoff.',
    rect: ['69.8%', '23.0%', '6.4%', '9.7%'], group: 'knob' },

  // VCA
  { id: 'vca-volume', label: 'Volume',
    tip: 'Set the final output level.',
    rect: ['82.2%', '23.3%', '6.4%', '9.7%'], group: 'knob' },
  { id: 'vca-release', label: 'Release',
    tip: 'Enable release behavior for the envelopes.',
    rect: ['83.5%', '40.8%', '4.7%', '7.0%'], group: 'button' },

  // ENVELOPES
  { id: 'env-fenv-attack', label: 'Filter Attack',
    tip: 'Set how quickly the filter envelope rises.',
    rect: ['48.7%', '45.3%', '6.4%', '9.7%'], group: 'knob' },
  { id: 'env-fenv-decay', label: 'Filter Decay',
    tip: 'Set how quickly the filter envelope falls after attack.',
    rect: ['60.1%', '45.3%', '6.4%', '9.7%'], group: 'knob' },
  { id: 'env-fenv-sustain', label: 'Filter Sustain',
    tip: 'Set the held filter envelope level while a note is held.',
    rect: ['71.4%', '45.2%', '6.4%', '9.7%'], group: 'knob' },
  { id: 'env-aenv-attack', label: 'Amp Attack',
    tip: 'Set how quickly the amplifier envelope rises.',
    rect: ['48.7%', '68.0%', '6.4%', '9.7%'], group: 'knob' },
  { id: 'env-aenv-decay', label: 'Amp Decay/Release',
    tip: 'Set amplifier decay time and release time when release is enabled.',
    rect: ['60.1%', '68.1%', '6.4%', '9.7%'], group: 'knob' },
  { id: 'env-aenv-sustain', label: 'Amp Sustain',
    tip: 'Set the held amplifier level while a note is held.',
    rect: ['71.8%', '67.8%', '6.4%', '9.7%'], group: 'knob' },

  // MOD
  { id: 'mod-lfo-rate', label: 'LFO Rate',
    tip: 'Set the modulation oscillator speed.',
    rect: ['12.8%', '68.1%', '6.4%', '9.7%'], group: 'knob' },
  { id: 'mod-vco-lfo', label: 'VCO LFO Amt',
    tip: 'Set LFO modulation depth to oscillator pitch.',
    rect: ['25.0%', '68.0%', '6.4%', '9.7%'], group: 'knob' },
  { id: 'mod-vcf-lfo', label: 'VCF LFO Amt',
    tip: 'Set LFO modulation depth to filter cutoff.',
    rect: ['36.8%', '67.9%', '6.4%', '9.7%'], group: 'knob' },

  // GLIDE
  { id: 'glide-rate', label: 'Glide Rate',
    tip: 'Set the portamento slide speed between notes.',
    rect: ['83.3%', '54.2%', '6.4%', '9.7%'], group: 'knob' },
  { id: 'glide-on', label: 'Glide On',
    tip: 'Turn glide on or off.',
    rect: ['83.5%', '69.2%', '4.7%', '7.0%'], group: 'button' },
]

export const legendItems: LegendItem[] = [
  { id: 'osc', label: 'Oscillators', color: '#1a6b4a' },
  { id: 'mix', label: 'Mix', color: '#2a5a8a' },
  { id: 'filter', label: 'Filter', color: '#a8307a' },
  { id: 'amp', label: 'VCA', color: '#d4880a' },
  { id: 'env', label: 'Envelopes', color: '#1a4a6b' },
  { id: 'mod', label: 'Mod', color: '#4a6b1a' },
  { id: 'utility', label: 'Glide', color: '#444444' },
]
