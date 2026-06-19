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
  media: [
    {
      heading: 'Video Tutorials',
      color: '#ff4d4d',
      items: [
        { name: 'Hector & Beebo Review + Tutorial', url: 'https://loopopmusic.com/hector-and-beebo-review-and-tutorial-your-dream-effect-without-a-line-of-code', desc: "Loopop's definitive chaptered overview.", badge: 'Tutorial' },
        { name: 'First Patch with Hector', url: 'https://www.youtube.com/watch?v=xkHegX5nptI', desc: 'Best hands-on first-patch build.', badge: 'Video' },
        { name: 'Modular in a Modular (Ep. 01)', url: 'https://www.youtube.com/watch?v=HqgPlCeXtIk', desc: 'Series intro to building patches on the touchscreen.', badge: 'Video' },
        { name: 'As Marbles / Plaits / Clouds', url: 'https://www.youtube.com/watch?v=MEHB-LCrPm8', desc: 'Using the Mutable ports for an ambient ensemble.', badge: 'Video' },
      ],
    },
    {
      heading: 'Channels & Series',
      color: '#0af',
      items: [
        { name: 'Poly Effects (official)', url: 'https://www.youtube.com/@polypedals/videos', desc: 'Damon Poly posts feature + patch walkthroughs.', badge: 'Channel' },
        { name: 'Andre LaFosse — Loopler Series', url: 'https://www.youtube.com/playlist?list=PLRjhe9qWtn03la3e8N8UsllrxKouF9OPI', desc: 'The deepest looper/EDP coverage anywhere.', badge: 'Playlist' },
      ],
    },
  ],
}
