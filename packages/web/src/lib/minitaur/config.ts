import type { SynthConfig } from '@/lib/shared-types'
import { zones, legendItems } from './zones'
import { seedLessons } from './lessons'
import { ccMap } from './cc'

export const minitaurConfig: SynthConfig = {
  id: 'minitaur',
  name: 'Moog Minitaur',
  description:
    '100% analog 2-VCO monophonic bass synth on the Moog Taurus engine — 24 dB Moog ladder filter, a deep hidden MIDI-CC / editor parameter layer, and the punch of Note Sync.',
  panelImage: '/minitaur-panel.png',
  panelAspectRatio: '2048 / 1365',
  panelAlt: 'Moog Minitaur front panel',
  defaultMessage: 'Moog Minitaur Explorer — hover over zones to learn, pick a tutorial to begin.',
  zones,
  legendItems,
  lessons: seedLessons,
  ccMap,
}
