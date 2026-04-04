import type { SynthConfig } from '@/lib/shared-types'
import { zones, legendItems } from './zones'
import { seedLessons } from './lessons'

export const tetraConfig: SynthConfig = {
  id: 'tetra',
  name: 'DSI Tetra',
  description: 'Four-voice analog desktop synthesizer with 1,024 programs, feedback loops, and sub-oscillators',
  panelImage: '/tetra-panel.png',
  panelAspectRatio: '2816 / 1536',
  panelAlt: 'DSI Tetra front panel',
  defaultMessage: 'DSI Tetra Explorer — hover over zones to learn, pick a tutorial to begin.',
  zones,
  legendItems,
  lessons: seedLessons,
}
