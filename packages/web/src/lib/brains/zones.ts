import type { Zone, LegendItem } from '@/lib/shared-types'

export const zones: Zone[] = [
  // PANEL SECTIONS
  { id: 'scope', label: 'Scope',
    tip: 'OLED scope display showing the current model output activity.',
    rect: ['37.0%', '8.6%', '26.7%', '8.5%'], group: 'scope' },

  { id: 'bank', label: 'Bank and Model',
    tip: 'Select the model bank and browse the Brains synthesis models.',
    rect: ['12.7%', '21.9%', '73.7%', '7.6%'], group: 'bank' },

  { id: 'macros', label: 'Macros',
    tip: 'Main sound-shaping controls for timbre, harmonics, frequency, and morph.',
    rect: ['12.1%', '35.3%', '75.9%', '15.7%'], group: 'macros' },

  { id: 'cv', label: 'CV Attenuverters',
    tip: 'Set the polarity and amount for timbre, FM, and morph control voltages.',
    rect: ['14.9%', '47.9%', '70.3%', '12.4%'], group: 'cv' },

  { id: 'io', label: 'Inputs and Outputs',
    tip: 'Patch pitch, trigger, modulation, level, and audio connections.',
    rect: ['13.1%', '65.5%', '73.4%', '17.0%'], group: 'io' },

  // BANK AND MODEL
  { id: 'bank-button', label: 'Bank',
    tip: 'Switch between the A and B model banks.',
    rect: ['12.7%', '22.3%', '13.3%', '6.8%'], group: 'button' },
  { id: 'bank-model', label: 'Model',
    tip: 'Select the active synthesis model within the current bank.',
    rect: ['75.3%', '22.4%', '11.3%', '5.9%'], group: 'knob' },

  // MACROS
  { id: 'macros-timbre', label: 'Timbre',
    tip: 'Adjust the primary tone parameter for the selected model.',
    rect: ['12.1%', '35.3%', '14.5%', '7.9%'], group: 'knob' },
  { id: 'macros-harmonics', label: 'Harmonics',
    tip: 'Shape harmonic content or model-specific structure.',
    rect: ['33.1%', '43.2%', '14.2%', '7.9%'], group: 'knob' },
  { id: 'macros-freq', label: 'Frequency',
    tip: 'Set the frequency parameter used by the selected model.',
    rect: ['54.4%', '43.2%', '14.2%', '7.9%'], group: 'knob' },
  { id: 'macros-morph', label: 'Morph',
    tip: 'Move through model-specific variations and blend points.',
    rect: ['73.7%', '35.3%', '14.5%', '7.9%'], group: 'knob' },

  // CV ATTENUVERTERS
  { id: 'cv-timbre', label: 'Timbre CV',
    tip: 'Set timbre CV depth and polarity.',
    rect: ['15.3%', '47.9%', '7.9%', '4.2%'], group: 'knob' },
  { id: 'cv-morph', label: 'Morph CV',
    tip: 'Set morph CV depth and polarity.',
    rect: ['77.0%', '47.9%', '7.9%', '4.2%'], group: 'knob' },
  { id: 'cv-fm', label: 'FM',
    tip: 'Set FM modulation depth and polarity.',
    rect: ['57.5%', '56.1%', '7.9%', '4.2%'], group: 'knob' },
  { id: 'cv-timbrecv', label: 'Timbre CV',
    tip: 'CV input for modulating the timbre parameter.',
    rect: ['14.9%', '56.5%', '8.0%', '4.2%'], group: 'jack' },
  { id: 'cv-morphcv', label: 'Morph CV',
    tip: 'CV input for modulating the morph parameter.',
    rect: ['77.4%', '56.5%', '8.0%', '4.2%'], group: 'jack' },

  // INPUTS AND OUTPUTS
  { id: 'io-out1', label: 'Out 1',
    tip: 'Main audio output.',
    rect: ['14.9%', '69.2%', '8.0%', '4.2%'], group: 'jack' },
  { id: 'io-modelcv', label: 'Model CV',
    tip: 'Control the model selection by voltage.',
    rect: ['14.9%', '77.6%', '8.0%', '4.2%'], group: 'jack' },
  { id: 'io-harmonicscv', label: 'Harmonics CV',
    tip: 'Modulate the harmonics parameter by voltage.',
    rect: ['35.8%', '69.2%', '8.0%', '4.2%'], group: 'jack' },
  { id: 'io-voct', label: 'V/Oct',
    tip: 'Pitch input for calibrated one-volt-per-octave tracking.',
    rect: ['35.8%', '77.6%', '8.0%', '4.2%'], group: 'jack' },
  { id: 'io-fm', label: 'FM',
    tip: 'Frequency modulation CV input.',
    rect: ['57.1%', '69.2%', '8.0%', '4.2%'], group: 'jack' },
  { id: 'io-level', label: 'Level',
    tip: 'Control the output level by voltage.',
    rect: ['57.1%', '77.6%', '8.0%', '4.2%'], group: 'jack' },
  { id: 'io-out2', label: 'Out 2',
    tip: 'Secondary audio output for alternate or stereo model outputs.',
    rect: ['77.4%', '69.2%', '8.0%', '4.2%'], group: 'jack' },
  { id: 'io-trig', label: 'Trig',
    tip: 'Trigger input for exciter, strike, or model-specific events.',
    rect: ['77.4%', '77.6%', '8.0%', '4.2%'], group: 'jack' },
]

export const legendItems: LegendItem[] = [
  { id: 'scope', label: 'Scope', color: '#0af' },
  { id: 'bank', label: 'Bank and Model', color: '#ff4d4d' },
  { id: 'macros', label: 'Macros', color: '#1a6b4a' },
  { id: 'cv', label: 'CV', color: '#a8307a' },
  { id: 'io', label: 'I/O', color: '#444444' },
]
