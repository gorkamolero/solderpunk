import type { SynthConfig } from '@/lib/shared-types'
import { zones, legendItems } from './zones'
import { seedLessons } from './lessons'

export const brainsConfig: SynthConfig = {
  id: 'brains',
  name: 'Behringer Brains',
  description:
    'Plaits-derived multi-engine Eurorack macro-oscillator — 20+ synthesis engines (VA, FM, granular, chords, speech, drums, DX7, TB-303) under three macro knobs and CV-everything.',
  panelImage: '/brains-panel.png',
  panelAspectRatio: '900 / 1700',
  panelAlt: 'Behringer Brains Eurorack module front panel',
  defaultMessage: 'Behringer Brains Explorer — hover over zones to learn, pick a tutorial to begin.',
  zones,
  legendItems,
  lessons: seedLessons,
  patchSource: {
    type: 'links',
    intro: "Brains has no preset banks — its sounds come from picking an engine and dialing three macros. It runs Mutable's Plaits DSP, so these are the authoritative engine references, plus a full walkthrough.",
    groups: [
      {
        heading: 'Engine Reference & Manuals',
        color: '#ff4d4d',
        items: [
          { name: 'Behringer Brains — Product Page', url: 'https://www.behringer.com/en/products/0720-ABP', desc: 'Official page: 20+ engines, specs, OLED scope, and a Downloads tab.', badge: 'Official' },
          { name: 'Plaits — Full Manual', url: 'https://pichenettes.github.io/mutable-instruments-documentation/modules/plaits/manual/', desc: 'Authoritative engine-by-engine reference (HARMONICS / TIMBRE / MORPH).', badge: 'Manual' },
          { name: 'Plaits — Module Overview', url: 'https://pichenettes.github.io/mutable-instruments-documentation/modules/plaits/', desc: 'Overview of the 16 Plaits engines that Brains mirrors.', badge: 'Reference' },
          { name: 'Synthmodes — Plaits Reference', url: 'https://synthmodes.com/modules/plaits/index.html', desc: 'Clean per-mode breakdown: controls, aux out, and usage notes.', badge: 'Reference' },
          { name: 'Plaits Quickstart (PDF)', url: 'https://pichenettes.github.io/mutable-instruments-documentation/modules/plaits/downloads/plaits_quickstart.pdf', desc: 'Downloadable 12-page quickstart booklet for offline engine reference.', badge: 'Manual' },
          { name: 'Plaits Firmware — Custom Data', url: 'https://pichenettes.github.io/mutable-instruments-documentation/modules/plaits/firmware/', desc: 'How the wavetable/DX7-SysEx engines load custom data — maps to Brains.', badge: 'Reference' },
          { name: 'Synth Modes — Source Repo', url: 'https://github.com/boourns/synthmodes', desc: 'Open CC-BY engine cheat-sheet data (XML + per-engine pages), forkable.', badge: 'Reference' },
        ],
      },
      {
        heading: 'Try the Engines (Software & Firmware)',
        color: '#e8a33d',
        items: [
          { name: 'Macro — Plaits for Reason', url: 'https://synthanatomy.com/2022/02/macro-free-synth-brings-mutable-instruments-plaits-oscillator-to-reason.html', desc: 'Free Reason Rack Extension of the Plaits engines — learn them in software.', badge: 'Free' },
          { name: 'Flechtwerk — Plaits plugin', url: 'https://trnr.gumroad.com/l/flechtwerk', desc: 'Free standalone / plugin macro synth built on the Plaits engines.', badge: 'Free' },
          { name: 'Good To Hear — JI firmware', url: 'https://goodtohear.co.uk/plaits', desc: 'Just-intonation alt-firmware for Plaits — engine ideas relevant to Brains.', badge: 'Firmware' },
        ],
      },
      {
        heading: 'Walkthrough',
        color: '#0af',
        items: [
          { name: 'Brains — Full Engine Walkthrough', url: 'https://www.youtube.com/watch?v=LiZ2J2_lus0', desc: '~60-min video covering every Brains engine plus a Plaits comparison.', badge: 'YouTube' },
        ],
      },
    ],
  },
}
