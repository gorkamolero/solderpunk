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
  patchSource: [
    {
      type: 'midilink',
      instrumentPath: 'tempest',
      browseUrl: 'https://midi.link/instruments/tempest',
    },
    {
      type: 'links',
      groups: [
        {
          heading: 'Sounds & Patches',
          color: '#ff4d4d',
          items: [
            { name: 'Sequential — Factory Sounds', url: 'https://sequential.com/tempest-factory-sounds/', desc: 'Official factory sound sets / projects for OS 1.0–1.4, in SysEx.', badge: 'Official' },
            { name: 'Sequential Forum — Patch Exchange', url: 'https://forum.sequential.com/index.php?topic=34.0', desc: 'Community patch thread with a shared-patches zip and synthesis tips.', badge: 'Forum' },
            { name: "Stim's Tempest Recipes", url: 'https://noisylittlebugger.net/tempest-recipes/', desc: '16-part sound-design series: kicks, snares, hats, bass, bells.', badge: 'Tutorial' },
            { name: 'Hardwarecore #1 Soundset', url: 'https://hardwarecore.wordpress.com/2015/06/01/dsi-tempest-soundset-hardwarecore-1/', desc: 'Free 64-patch set (pads, bass, leads, bass drums) — once $10.', badge: 'Free' },
            { name: 'Bitrotten — TR-606 / DR-110', url: 'https://www.bitrotten.com/tempest/', desc: "Leviathant's Roland analog-drum emulation SysEx set, donation-ware.", badge: 'Free' },
            { name: 'PresetPatch — DSI Tempest', url: 'https://www.presetpatch.com/synth/dsi-tempest', desc: 'User-uploaded free Tempest patches plus commercial listings.', badge: 'Free' },
          ],
        },
        {
          heading: 'Premium Soundsets',
          color: '#0af',
          items: [
            { name: 'Soundform — SFR Kicks V1.2', url: 'https://soundformrecordings.gumroad.com/l/jlpum', desc: '16 custom Tempest kick drums as a SysEx patch bank.', badge: 'Paid' },
          ],
        },
      ],
    },
  ],
  media: [
    {
      heading: 'Video Tutorials',
      color: '#ff4d4d',
      items: [
        { name: 'QuickStart with Roger Linn', url: 'https://www.youtube.com/watch?v=bAZfJ3xH74I', desc: 'The co-designer walks through every function — best first watch.', badge: 'Video' },
        { name: 'Designing a Kick & Snare', url: 'https://www.youtube.com/watch?v=mTBpJIgERgM', desc: 'Official sound-design tutorial for the core drum voices.', badge: 'Video' },
        { name: '808 Kick Drum Tutorial', url: 'https://www.youtube.com/watch?v=ZFDTbc1Qxds', desc: 'Dave Smith builds an 808-style kick from scratch.', badge: 'Video' },
        { name: 'Analog Kick Synthesis (2 parts)', url: 'https://adamschneidermusic.com/tempest-analog-kick-synthesis/', desc: 'Adam Schneider — the deepest free kick sound-design walkthrough.', badge: 'Tutorial' },
      ],
    },
    {
      heading: 'Playlists & Reviews',
      color: '#0af',
      items: [
        { name: 'Official Tempest Tutorials', url: 'https://www.youtube.com/playlist?list=PLrYKylZgRl7nQxNc3uZ9VHKA9V_S5gLhD', desc: "Sequential's full tutorial playlist.", badge: 'Playlist' },
        { name: 'Sonic LAB Review', url: 'https://sonicstate.com/news/2011/12/23/sonic-lab-review-tempest-analog-drum-machine/', desc: 'In-depth video review of the instrument.', badge: 'Review' },
      ],
    },
  ],
}
