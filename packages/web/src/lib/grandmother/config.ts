import type { SynthConfig } from '@/lib/shared-types'
import { zones, legendItems } from './zones'
import { seedLessons } from './lessons'
import { ccMap } from './cc'

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
  ccMap,
  patchSource: {
    type: 'links',
    intro: 'The Grandmother has no preset memory — patches are physical cable routings. These are official patchbooks, patch-sheet collections, and tutorials.',
    groups: [
      {
        heading: 'Patchbooks & Manuals',
        color: '#ff4d4d',
        items: [
          { name: 'Exploration Patchbook (L.B. Donna)', url: 'https://cmi.com.au/Files/Files/Docs/MOOG/MOOG-MODGRAND-Grandmother_Patchbook_LBD_1_0.pdf', desc: 'Official 12-patch Moog patchbook with full knob / cable diagrams.', badge: 'Official' },
          { name: 'Grandmother Patchbook (PDF)', url: 'https://cdn.inmusicbrands.com/Moog/Grandmother/Grandmother_Dark_Patchbook.pdf', desc: 'Official Moog patchbook PDF with illustrated patch recipes.', badge: 'Manual' },
          { name: 'PresetPatch — Moog Grandmother', url: 'https://www.presetpatch.com/synth/moog-grandmother', desc: 'Community hub of free patch sheets and sound-design articles.', badge: 'Community' },
          { name: 'Moog Forum — Patch Library', url: 'https://forum.moogmusic.com/t/moog-grandmother-patch-library/35796', desc: 'Official Moog forum thread aggregating Grandmother patches.', badge: 'Community' },
          { name: 'Grandmother Patches (community)', url: 'https://grandmother-patches.vercel.app/', desc: 'Largest community patch library + interactive editor — aggregates the Dark Patchbook, LBD, SynthLib & PresetPatch.', badge: 'Community' },
          { name: 'SynthLib — Grandmother', url: 'https://synthlib.com/brands/moog/instruments/moog-grandmother', desc: 'Searchable Grandmother patch library.', badge: 'Community' },
          { name: 'Max4Live PatchSheet', url: 'https://maxforlive.com/library/device/5669/patchsheet-for-moog-grandmother', desc: 'Free Ableton device to document & recall your Grandmother patches.', badge: 'Tool' },
        ],
      },
      {
        heading: 'Paid Patch PDFs',
        color: '#e8a33d',
        items: [
          { name: 'Anton Anru — Analog Classics', url: 'https://lfo.store/shop/hardware-synths/moog-grandmother/moog-grandmother-analog-classics-50-patches/', desc: '50 designed Grandmother patches as a PDF patchbook.', badge: 'Paid' },
          { name: 'Anton Anru — Explorer', url: 'https://lfo.store/shop/hardware-synths/moog-grandmother/moog-grandmother-explorer-50-patches-by-anton-anru/', desc: '50 more Grandmother patch sheets (PDF).', badge: 'Paid' },
        ],
      },
      {
        heading: 'Video Tutorials',
        color: '#0af',
        items: [
          { name: 'Intro to Grandmother Patching', url: 'https://www.youtube.com/watch?v=lbbeH3U-9mc', desc: 'Beginner tutorial on the semi-modular patch points for new tones.', badge: 'YouTube' },
          { name: 'LBD Patchbook Walkthrough', url: 'https://www.youtube.com/watch?v=z9y_iw_p7Kw', desc: 'Building patches from the official Lisa Bella Donna patchbook.', badge: 'YouTube' },
        ],
      },
    ],
  },
  media: [
    {
      heading: 'Video Tutorials',
      color: '#ff4d4d',
      items: [
        { name: "Unlocking Grandmother's Secrets", url: 'https://www.youtube.com/watch?v=ciVigeCZiXA', desc: "Loopop's single best deep-dive — review, ideas and tips.", badge: 'Video' },
        { name: 'Arpeggiator Explained', url: 'https://www.youtube.com/watch?v=UfFCkc0260M', desc: 'How the arp works and how to drive it.', badge: 'Video' },
        { name: 'How to Use the Sequencer', url: 'https://www.youtube.com/watch?v=1Lm4acY7wf8', desc: 'Recording and playing the 256-step sequencer.', badge: 'Video' },
        { name: 'Grandmother + Subharmonicon Patching', url: 'https://www.youtube.com/watch?v=L946yzuqnUM', desc: 'Semi-modular patching across two Moogs.', badge: 'Video' },
      ],
    },
    {
      heading: 'Playlists & Courses',
      color: '#0af',
      items: [
        { name: 'Official Moog Tutorials', url: 'https://www.youtube.com/playlist?list=PLwKFiLdtN6B3XXcAU7y1ztii_7FSFqIaU', desc: "Moog's own Grandmother tutorial playlist.", badge: 'Playlist' },
        { name: 'Grandmother 101 (Ask.Video)', url: 'https://macprovideo.com/course/moog-grandmother-101-explained-and-explored', desc: 'Rishabh Rajan — structured 21-video course (arp, seq, reverb, patchbay).', badge: 'Course' },
      ],
    },
  ],
}
