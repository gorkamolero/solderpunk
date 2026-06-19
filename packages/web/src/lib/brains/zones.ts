import type { Zone, LegendItem } from '@/lib/shared-types'

export const zones: Zone[] = [
  // PANEL SECTIONS
  { id: 'scope', label: 'Scope',
    tip: 'OLED scope display showing the current model output activity.',
    rect: ['33.6%', '10.0%', '32.4%', '9.7%'], group: 'scope' },

  { id: 'bank', label: 'Bank and Model',
    tip: 'Select the model bank and browse the Brains synthesis models.',
    rect: ['8.9%', '24.2%', '81.0%', '8.5%'], group: 'bank' },

  { id: 'macros', label: 'Macros',
    tip: 'Main sound-shaping controls for timbre, harmonics, frequency, and morph.',
    rect: ['8.0%', '37.7%', '83.0%', '20.6%'], group: 'macros' },

  { id: 'cv', label: 'CV Attenuverters',
    tip: 'Set the polarity and amount for timbre, FM, and morph control voltages.',
    rect: ['11.7%', '53.3%', '76.3%', '18.9%'], group: 'cv' },

  { id: 'io', label: 'Inputs and Outputs',
    tip: 'Patch pitch, trigger, modulation, level, and audio connections.',
    rect: ['11.7%', '73.7%', '76.3%', '13.6%'], group: 'io' },

  // BANK AND MODEL
  { id: 'bank-button', label: 'Bank',
    tip: 'Switch between the A and B model banks.',
    rect: ['8.9%', '24.6%', '13.8%', '7.3%'], group: 'button' },
  { id: 'bank-model', label: 'Model',
    tip: 'Select the active synthesis model within the current bank.',
    rect: ['75.9%', '24.6%', '13.8%', '7.3%'], group: 'knob' },

  // MACROS
  { id: 'macros-timbre', label: 'Timbre',
    tip: 'Adjust the primary tone parameter for the selected model.',
    rect: ['8.0%', '37.9%', '15.8%', '8.5%'], group: 'knob' },
  { id: 'macros-harmonics', label: 'Harmonics',
    tip: 'Shape harmonic content or model-specific structure.',
    rect: ['29.9%', '49.9%', '15.8%', '8.5%'], group: 'knob' },
  { id: 'macros-freq', label: 'Frequency',
    tip: 'Set the frequency parameter used by the selected model.',
    rect: ['53.8%', '49.9%', '15.8%', '8.5%'], group: 'knob' },
  { id: 'macros-morph', label: 'Morph',
    tip: 'Move through model-specific variations and blend points.',
    rect: ['75.2%', '37.9%', '15.8%', '8.5%'], group: 'knob' },

  // CV ATTENUVERTERS
  { id: 'cv-timbre', label: 'Timbre CV',
    tip: 'Set timbre CV depth and polarity.',
    rect: ['11.7%', '53.3%', '8.5%', '4.6%'], group: 'knob' },
  { id: 'cv-morph', label: 'Morph CV',
    tip: 'Set morph CV depth and polarity.',
    rect: ['79.1%', '53.3%', '8.5%', '4.6%'], group: 'knob' },
  { id: 'cv-fm', label: 'FM',
    tip: 'Set FM modulation depth and polarity.',
    rect: ['57.3%', '64.0%', '8.5%', '4.6%'], group: 'knob' },
  { id: 'cv-timbrecv', label: 'Timbre CV',
    tip: 'CV input for modulating the timbre parameter.',
    rect: ['11.7%', '64.1%', '8.5%', '4.6%'], group: 'jack' },
  { id: 'cv-morphcv', label: 'Morph CV',
    tip: 'CV input for modulating the morph parameter.',
    rect: ['79.1%', '64.1%', '8.5%', '4.6%'], group: 'jack' },

  // INPUTS AND OUTPUTS
  { id: 'io-out1', label: 'Out 1',
    tip: 'Main audio output.',
    rect: ['11.7%', '73.8%', '8.5%', '4.6%'], group: 'jack' },
  { id: 'io-modelcv', label: 'Model CV',
    tip: 'Control the model selection by voltage.',
    rect: ['11.7%', '83.5%', '8.5%', '4.6%'], group: 'jack' },
  { id: 'io-harmonicscv', label: 'Harmonics CV',
    tip: 'Modulate the harmonics parameter by voltage.',
    rect: ['33.5%', '73.8%', '8.5%', '4.6%'], group: 'jack' },
  { id: 'io-voct', label: 'V/Oct',
    tip: 'Pitch input for calibrated one-volt-per-octave tracking.',
    rect: ['33.5%', '83.5%', '8.5%', '4.6%'], group: 'jack' },
  { id: 'io-fm', label: 'FM',
    tip: 'Frequency modulation CV input.',
    rect: ['57.0%', '73.8%', '8.5%', '4.6%'], group: 'jack' },
  { id: 'io-level', label: 'Level',
    tip: 'Control the output level by voltage.',
    rect: ['57.0%', '83.5%', '8.5%', '4.6%'], group: 'jack' },
  { id: 'io-out2', label: 'Out 2',
    tip: 'Secondary audio output for alternate or stereo model outputs.',
    rect: ['79.1%', '73.8%', '8.5%', '4.6%'], group: 'jack' },
  { id: 'io-trig', label: 'Trig',
    tip: 'Trigger input for exciter, strike, or model-specific events.',
    rect: ['79.1%', '83.5%', '8.5%', '4.6%'], group: 'jack' },
]

export const legendItems: LegendItem[] = [
  { id: 'scope', label: 'Scope', color: '#0af' },
  { id: 'bank', label: 'Bank and Model', color: '#ff4d4d' },
  { id: 'macros', label: 'Macros', color: '#1a6b4a' },
  { id: 'cv', label: 'CV', color: '#a8307a' },
  { id: 'io', label: 'I/O', color: '#444444' },
]
