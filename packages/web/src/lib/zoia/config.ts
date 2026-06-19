import type { SynthConfig } from '@/lib/shared-types'
import { zones, legendItems } from './zones'
import { seedLessons } from './lessons'

export const zoiaConfig: SynthConfig = {
  id: 'zoia',
  name: 'Empress ZOIA',
  description:
    'Grid-based modular synth / effects platform in a pedal — 80+ modules you patch on an 8×5 button grid into synth voices, sequencers, effect chains, or a whole virtual pedalboard.',
  panelImage: '/zoia-panel.png',
  panelAspectRatio: '1600 / 1066',
  panelAlt: 'Empress ZOIA pedal',
  defaultMessage: 'Empress ZOIA Explorer — hover over zones to learn, pick a tutorial to begin.',
  zones,
  legendItems,
  lessons: seedLessons,
  patchSource: {
    type: 'patchstorage',
    platformId: 3003,
    platformUrl: 'https://patchstorage.com/platform/zoia/',
  },
}
