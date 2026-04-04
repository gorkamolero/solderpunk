import type { SynthConfig } from '@/lib/shared-types'
import { zones, legendItems } from './zones'
import { seedLessons } from './lessons'

export const tempestConfig: SynthConfig = {
  id: 'tempest',
  name: 'DSI Tempest',
  description: 'Six-voice analog drum machine and synthesizer by Dave Smith and Roger Linn',
  panelImage: '/panel.webp',
  panelAspectRatio: '1200 / 799',
  panelAlt: 'DSI Tempest front panel',
  defaultMessage: 'DSI Tempest Explorer — hover over zones to learn, pick a tutorial to begin.',
  zones,
  legendItems,
  lessons: seedLessons,
}
