import type { SeedLesson } from '@/lib/shared-types'

// Tutorials authored from research/brains/. Zone ids match lib/brains/zones.ts.

export const seedLessons: SeedLesson[] = [
  {
    title: 'Meet Brains',
    section_id: 'macros',
    tags: 'tutorial,beginner,intro,plaits',
    content: {
      type: 'tutorial',
      steps: [
        {
          title: 'A macro-oscillator',
          body: "Brains runs the open-source Mutable Instruments Plaits engine, expanded by Behringer. It plays ONE synthesis engine at a time — virtual analog, FM, granular, additive, chords, speech, drums, plus Behringer's DX7, TB-303, Wave Generator and Vox modes. The Plaits manual is authoritative for every shared engine."
        },
        {
          title: 'Three macros reshape any engine',
          focus: 'macros',
          body: "Pick an engine with [[bank-button|BANK]] + [[bank-model|MODEL]], then sculpt it with three knobs whose meaning changes per engine: [[macros-harmonics|HARMONICS]], [[macros-timbre|TIMBRE]], and [[macros-morph|MORPH]]. [[macros-freq|FREQ]] sets pitch. The [[scope|OLED scope]] shows the waveform."
        },
        {
          title: 'OUT and AUX are two voices',
          focus: 'io',
          body: "[[io-out1|OUT 1]] is the main signal; [[io-out2|OUT 2 / AUX]] is a *variant* — a sub-osc, the chord's root note, a low-fi version, an alternate drum model. Pan OUT and AUX hard L/R for instant stereo, or blend them. Everything is CV-controllable via the [[io|jacks]]; there's no hardware MIDI."
        }
      ]
    }
  },
  {
    title: "Fix: 'too high' or 'clicking'",
    section_id: 'macros',
    tags: 'tutorial,gotcha,frequency,hidden',
    content: {
      type: 'tutorial',
      steps: [
        {
          title: 'The #1 Brains gotcha',
          focus: 'macros-freq',
          body: "If Brains sounds way too high, or clicks instead of playing a note, the [[macros-freq|FREQ]] knob range is set wrong. Hold the MODEL button and turn [[macros-harmonics|HARMONICS]] to set the octave range — 1 LED = a narrow window around C0, all LEDs = the full 8-octave range. A clicking sound means it's at the lowest range. This Plaits-inherited combo is on the last page of the manual and almost everyone misses it."
        }
      ]
    }
  }
]
