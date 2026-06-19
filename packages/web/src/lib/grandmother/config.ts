import type { SynthConfig } from '@/lib/shared-types'
import { zones, legendItems } from './zones'
import { seedLessons } from './lessons'

export const grandmotherConfig: SynthConfig = {
  id: 'grandmother',
  name: 'Moog Grandmother',
  description:
    'Semi-modular analog synth — 24 dB Moog ladder filter, spring reverb, arp/256-step sequencer, and a 41-point patchbay that turns the whole instrument inside out.',
  panelImage: '/grandmother-panel.png',
  panelAspectRatio: '1774 / 887',
  panelAlt: 'Moog Grandmother control panel',
  defaultMessage: 'Moog Grandmother Explorer — hover over zones to learn, pick a tutorial to begin.',
  zones,
  legendItems,
  lessons: seedLessons,
}
