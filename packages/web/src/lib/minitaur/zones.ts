import type { Zone, LegendItem } from './types'

export const zones: Zone[] = [
  // PANEL SECTIONS
  { id: 'osc', label: 'Oscillators',
    tip: 'VCO 1 and VCO 2 waveform selection plus fine tuning.',
    rect: ['8.0%', '28.7%', '18.8%', '41.8%'], group: 'osc' },

  { id: 'vco2', label: 'VCO 2',
    tip: 'Offset oscillator 2 frequency against oscillator 1.',
    rect: ['8.0%', '71.7%', '18.8%', '16.7%'], group: 'osc' },

  { id: 'mix', label: 'Mix',
    tip: 'Set the levels feeding the ladder filter from VCO 1 and VCO 2.',
    rect: ['27.7%', '46.1%', '21.5%', '21.9%'], group: 'mix' },

  { id: 'filter', label: 'Filter',
    tip: 'Shape brightness and bite with cutoff, resonance, and envelope amount.',
    rect: ['27.7%', '23.8%', '48.3%', '21.1%'], group: 'filter' },

  { id: 'vca', label: 'VCA',
    tip: 'Set final loudness and release behavior for the amp.',
    rect: ['77.2%', '23.8%', '13.6%', '21.1%'], group: 'amp' },

  { id: 'env', label: 'Envelopes',
    tip: 'Filter and amplifier envelopes for note shape and movement.',
    rect: ['50.1%', '46.1%', '29.5%', '21.9%'], group: 'env' },

  { id: 'mod', label: 'Mod',
    tip: 'LFO rate and modulation depth routed to oscillator and filter pitch.',
    rect: ['27.7%', '69.3%', '26.2%', '19.1%'], group: 'mod' },

  { id: 'glide', label: 'Glide',
    tip: 'Enable portamento and set the slide rate between notes.',
    rect: ['80.6%', '46.1%', '10.2%', '33.9%'], group: 'utility' },

  // OSCILLATORS
  { id: 'osc-fine', label: 'Fine Tune',
    tip: 'Fine-tune the oscillator pitch.',
    rect: ['17.7%', '34.6%', '7.0%', '10.6%'], group: 'knob' },
  { id: 'osc-wave1', label: 'VCO 1 Wave',
    tip: 'Switch VCO 1 between saw and square wave.',
    rect: ['11.0%', '35.5%', '3.3%', '13.6%'], group: 'button' },
  { id: 'osc-wave2', label: 'VCO 2 Wave',
    tip: 'Switch VCO 2 between saw and square wave.',
    rect: ['11.0%', '55.1%', '3.3%', '13.6%'], group: 'button' },

  // VCO 2
  { id: 'vco2-freq', label: 'VCO 2 Freq',
    tip: 'Tune VCO 2 above or below VCO 1 for intervals and detuned bass.',
    rect: ['17.7%', '76.5%', '7.0%', '10.6%'], group: 'knob' },

  // MIX
  { id: 'mix-vco1', label: 'VCO 1 Lvl',
    tip: 'Set VCO 1 level into the filter. Higher settings overdrive the input.',
    rect: ['29.7%', '51.8%', '7.0%', '10.6%'], group: 'knob' },
  { id: 'mix-vco2', label: 'VCO 2 Lvl',
    tip: 'Set VCO 2 level into the filter. Balance it against VCO 1.',
    rect: ['40.0%', '51.8%', '7.0%', '10.6%'], group: 'knob' },

  // FILTER
  { id: 'filter-cutoff', label: 'Cutoff',
    tip: 'Set the ladder filter cutoff frequency.',
    rect: ['32.7%', '28.4%', '7.0%', '10.6%'], group: 'knob' },
  { id: 'filter-res', label: 'Res',
    tip: 'Increase filter resonance up to self-oscillation.',
    rect: ['48.0%', '28.4%', '7.0%', '10.6%'], group: 'knob' },
  { id: 'filter-eg', label: 'EG Amount',
    tip: 'Set how strongly the filter envelope opens or closes the cutoff.',
    rect: ['64.2%', '28.4%', '7.0%', '10.6%'], group: 'knob' },

  // VCA
  { id: 'vca-volume', label: 'Volume',
    tip: 'Set the final output level.',
    rect: ['80.8%', '28.4%', '7.0%', '10.6%'], group: 'knob' },
  { id: 'vca-release', label: 'Release',
    tip: 'Enable release behavior for the envelopes.',
    rect: ['81.7%', '39.7%', '5.2%', '3.8%'], group: 'button' },

  // ENVELOPES
  { id: 'env-fenv-attack', label: 'Filter Attack',
    tip: 'Set how quickly the filter envelope rises.',
    rect: ['51.8%', '51.8%', '7.0%', '10.6%'], group: 'knob' },
  { id: 'env-fenv-decay', label: 'Filter Decay',
    tip: 'Set how quickly the filter envelope falls after attack.',
    rect: ['61.4%', '51.8%', '7.0%', '10.6%'], group: 'knob' },
  { id: 'env-fenv-sustain', label: 'Filter Sustain',
    tip: 'Set the held filter envelope level while a note is held.',
    rect: ['71.2%', '51.8%', '7.0%', '10.6%'], group: 'knob' },
  { id: 'env-aenv-attack', label: 'Amp Attack',
    tip: 'Set how quickly the amplifier envelope rises.',
    rect: ['55.8%', '74.2%', '7.0%', '10.6%'], group: 'knob' },
  { id: 'env-aenv-decay', label: 'Amp Decay/Release',
    tip: 'Set amplifier decay time and release time when release is enabled.',
    rect: ['63.6%', '74.2%', '7.0%', '10.6%'], group: 'knob' },
  { id: 'env-aenv-sustain', label: 'Amp Sustain',
    tip: 'Set the held amplifier level while a note is held.',
    rect: ['71.5%', '74.2%', '7.0%', '10.6%'], group: 'knob' },

  // MOD
  { id: 'mod-lfo-rate', label: 'LFO Rate',
    tip: 'Set the modulation oscillator speed.',
    rect: ['29.4%', '74.2%', '7.0%', '10.6%'], group: 'knob' },
  { id: 'mod-vco-lfo', label: 'VCO LFO Amt',
    tip: 'Set LFO modulation depth to oscillator pitch.',
    rect: ['38.1%', '74.2%', '7.0%', '10.6%'], group: 'knob' },
  { id: 'mod-vcf-lfo', label: 'VCF LFO Amt',
    tip: 'Set LFO modulation depth to filter cutoff.',
    rect: ['46.3%', '74.2%', '7.0%', '10.6%'], group: 'knob' },

  // GLIDE
  { id: 'glide-rate', label: 'Glide Rate',
    tip: 'Set the portamento slide speed between notes.',
    rect: ['82.2%', '51.8%', '7.0%', '10.6%'], group: 'knob' },
  { id: 'glide-on', label: 'Glide On',
    tip: 'Turn glide on or off.',
    rect: ['83.8%', '67.6%', '4.0%', '5.4%'], group: 'button' },
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
