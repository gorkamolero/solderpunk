import type { SynthConfig } from '@/lib/shared-types'
import { zones, legendItems } from './zones'
import { seedLessons } from './lessons'

export const hectorConfig: SynthConfig = {
  id: 'hector',
  name: 'Poly Effects Hector',
  description:
    'Touchscreen virtual-modular Eurorack module — ~100 LV2 modules (Mutable ports, granular, NAM amp capture, Loopler) patched on a screen, with 6 in / 8 out that are all CV + audio.',
  panelImage: '/hector-panel.png',
  panelAspectRatio: '1800 / 1200',
  panelAlt: 'Poly Effects Hector Eurorack module',
  defaultMessage: 'Poly Effects Hector Explorer — hover over zones to learn, pick a tutorial to begin.',
  zones,
  legendItems,
  lessons: seedLessons,
  patchSource: {
    type: 'patchstorage',
    platformId: 3540,
    platformUrl: 'https://patchstorage.com/platform/beebo-hector/',
  },
}
