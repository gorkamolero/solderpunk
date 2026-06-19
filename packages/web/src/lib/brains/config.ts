import type { SynthConfig } from '@/lib/shared-types'
import { zones, legendItems } from './zones'
import { seedLessons } from './lessons'

export const brainsConfig: SynthConfig = {
  id: 'brains',
  name: 'Behringer Brains',
  description:
    'Plaits-derived multi-engine Eurorack macro-oscillator — 20+ synthesis engines (VA, FM, granular, chords, speech, drums, DX7, TB-303) under three macro knobs and CV-everything.',
  panelImage: '/brains-panel.png',
  panelAspectRatio: '910 / 1728',
  panelAlt: 'Behringer Brains Eurorack module front panel',
  defaultMessage: 'Behringer Brains Explorer — hover over zones to learn, pick a tutorial to begin.',
  zones,
  legendItems,
  lessons: seedLessons,
}
