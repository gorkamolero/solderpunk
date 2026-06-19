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
  patchSource: {
    type: 'links',
    groups: [
      {
        heading: 'Sounds & Presets',
        color: '#ff4d4d',
        items: [
          { name: 'Minitaur Editor / Librarian', url: 'https://moogmusic-help.freshdesk.com/en/support/solutions/articles/69000840730-how-do-i-download-the-minitaur-editor-librarian-', desc: 'Official Moog instructions for the free editor that stores presets on the Minitaur.', badge: 'Official' },
          { name: 'PresetPatch — Moog Minitaur', url: 'https://www.presetpatch.com/synth/moog-minitaur', desc: '53+ free user patches — bass, lead, techno — plus community soundsets.', badge: 'Free' },
          { name: 'Ultimate Preset — Bass Expansion', url: 'https://www.ultimatepreset.com/product/up-moog-minitaur-bass-exspansion/', desc: 'Free 18-preset analog bass pack (needs firmware v2.2 / editor 3.2).', badge: 'Free' },
          { name: 'Moog Forum — Minitaur Presets', url: 'https://forum.moogmusic.com/t/minitaur-presets/15146', desc: 'Official Moog community thread sharing user Minitaur presets.', badge: 'Forum' },
        ],
      },
      {
        heading: 'Premium Soundsets',
        color: '#0af',
        items: [
          { name: 'LFO Store — Analog Tones', url: 'https://lfo.store/shop/hardware-synths/moog-minitaursirin/moog-minitaursirin-analog-tones-100-presets-by-anton-anru/', desc: '100-preset bank — bass, leads, plucks, chords — by Anton Anru.', badge: 'Paid' },
          { name: 'LFO Store — Minitaur / Sirin', url: 'https://lfo.store/product-category/hardware-synths/moog-minitaursirin/', desc: 'Browse all professionally designed Minitaur / Sirin soundbanks.', badge: 'Paid' },
          { name: 'Robust American — Volume I', url: 'https://www.robustamericanpatches.com/products/volume-i-for-the-moog-minitaur', desc: '60 designed Minitaur patches as a .syx bank.', badge: 'Paid' },
          { name: 'Synthonia — Minitaur', url: 'https://www.synthonia.com/marketplace/moog/minitaur', desc: 'Minitaur soundset marketplace (e.g. Funky Basses).', badge: 'Paid' },
        ],
      },
    ],
  },
  media: [
    {
      heading: 'Video Tutorials',
      color: '#ff4d4d',
      items: [
        { name: 'A Look At Minitaur', url: 'https://www.youtube.com/watch?v=_NXrSPQ7aHY', desc: 'Official Moog feature rundown of the whole panel.', badge: 'Video' },
        { name: 'How To Make Kicks', url: 'https://www.youtube.com/watch?v=utNeTGo60bI', desc: 'Turning the bass mono into a punchy kick drum.', badge: 'Video' },
        { name: 'Bass Leads for Melodic Techno', url: 'https://www.youtube.com/watch?v=UVG8yRALF_Y', desc: 'Dialing in driving Minitaur bass/lead lines.', badge: 'Video' },
        { name: 'Berlin School Sketch', url: 'https://www.youtube.com/watch?v=rhmzRWOc0kA', desc: 'One-synth sequenced performance/sound-design.', badge: 'Video' },
        { name: 'Minitaur Video Demo (Daniel Fisher)', url: 'https://www.sweetwater.com/insync/moog-minitaur-video-demo/', desc: 'Sweetwater InSync — best overall panel walkthrough.', badge: 'Demo' },
      ],
    },
    {
      heading: 'Channels',
      color: '#0af',
      items: [
        { name: 'Moog Music (official)', url: 'https://www.youtube.com/@MoogSynthesizers', desc: 'Official demos, tips, and artist sessions.', badge: 'Channel' },
      ],
    },
  ],
}
