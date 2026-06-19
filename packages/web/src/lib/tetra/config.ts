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
  patchSource: {
    type: 'links',
    groups: [
      {
        heading: 'Sounds & Patches',
        color: '#ff4d4d',
        items: [
          { name: 'PresetPatch — DSI Tetra', url: 'https://www.presetpatch.com/synth/dsi-tetra', desc: 'Community library of free .syx banks and individual Tetra patches.', badge: 'Free' },
          { name: 'Tetra Programs + Combos Bank', url: 'https://www.presetpatch.com/f/dsi-tetra/tetra_programscombos_1_0_syx', desc: 'Free downloadable Tetra Programs & Combos .syx bank.', badge: 'Free' },
          { name: 'Sequential — Factory Sounds', url: 'https://sequential.com/tetra-factory-sounds/', desc: 'Official factory program banks as a loadable SysEx file, with instructions.', badge: 'Official' },
          { name: 'Sequential Forum — Loading SysEx', url: 'https://forum.sequential.com/index.php?topic=4240.0', desc: 'Community thread on importing .syx banks into the Tetra.', badge: 'Forum' },
          { name: 'eXode Patches (forum)', url: 'https://forum.sequential.com/index.php?topic=95.0', desc: 'Free community Tetra .syx banks shared on the Sequential forum.', badge: 'Free' },
          { name: 'Noisy Machines — Juno-style', url: 'https://noisymachines.gumroad.com/', desc: 'Free Juno-flavoured Tetra patch pack (Gumroad).', badge: 'Free' },
          { name: 'Edisyn (open-source editor)', url: 'https://github.com/eclab/edisyn', desc: 'Free editor/librarian with patch randomize, morph & hill-climb generation.', badge: 'Free' },
        ],
      },
      {
        heading: 'Premium Soundsets',
        color: '#0af',
        items: [
          { name: 'Synth-Patches — 110 Patches', url: 'https://synth-patches.com/dsi-tetra/', desc: "110 custom Tetra / Prophet '08-compatible patches in .syx.", badge: 'Paid' },
          { name: 'LFO Store — Black Cube', url: 'https://lfo.store/shop/hardware-synths/dsi-tetraprophet-black-cube-soundset-128-presets/', desc: '128 presets — seqs, leads, arps, bass — by Nick Chronos.', badge: 'Paid' },
          { name: 'Boxed Ear — Binary Pulsars', url: 'https://www.boxedear.com/tqsprophet08.php', desc: '128 sounds for Prophet 08 / Mopho / Tetra (SysEx + SoundTower).', badge: 'Paid' },
          { name: 'Mike Hiegemann — 100 Sounds', url: 'https://mikehiegemann.com/sound-design/prophet-08-sounds/', desc: "100 pro Prophet '08 / Rev2 / Tetra-compatible patches.", badge: 'Paid' },
        ],
      },
    ],
  },
}
