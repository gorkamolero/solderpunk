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
  media: [
    {
      heading: 'Video Tutorials',
      color: '#ff4d4d',
      items: [
        { name: 'Quickstart Pt. 1 — FX Basics', url: 'https://www.youtube.com/watch?v=IsNusPfswF4', desc: "Ron Cavagnaro's famous free beginner course (start here).", badge: 'Video' },
        { name: 'Building a Synth Voice', url: 'https://www.youtube.com/watch?v=t1Q--dvkODg', desc: 'The hows and whys of patching a voice on the grid.', badge: 'Video' },
        { name: 'Module Rundown: Audio', url: 'https://www.youtube.com/watch?v=ti3t8VcRCL8', desc: 'Christopher H. M. Jacques walks the audio modules.', badge: 'Video' },
        { name: 'Encyclopedia of CV: Multiplier', url: 'https://www.youtube.com/watch?v=jvAHbN0ZCGI', desc: 'The hub of CV interactions, explained.', badge: 'Video' },
      ],
    },
    {
      heading: 'Channels & Series',
      color: '#0af',
      items: [
        { name: 'Empress Quickstart Playlist', url: 'https://www.youtube.com/playlist?list=PLIetTwVphMAn0psmNmQVdP4gq_sjLWgDJ', desc: 'Official 8-part Quickstart series.', badge: 'Playlist' },
        { name: 'Christopher H. M. Jacques', url: 'https://www.youtube.com/channel/UC0NWr69typMXCfiDPXbsSsQ', desc: 'Deepest module + CV-math education on ZOIA.', badge: 'Channel' },
        { name: 'Knobs', url: 'https://www.youtube.com/channel/UCarxZ8bKjfFzUOgN5LjYOhQ', desc: 'Cinematic ZOIA explorations and patch ideas.', badge: 'Channel' },
      ],
    },
  ],
}
