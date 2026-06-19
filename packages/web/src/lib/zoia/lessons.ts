import type { SeedLesson } from '@/lib/shared-types'

// Tutorials authored from research/zoia/. Zone ids match lib/zoia/zones.ts.

export const seedLessons: SeedLesson[] = [
  {
    title: 'Meet the ZOIA',
    section_id: 'grid',
    tags: 'tutorial,beginner,intro,modular',
    content: {
      type: 'tutorial',
      steps: [
        {
          title: 'A modular synth in a pedal',
          body: "ZOIA is a grid-based modular environment: synthesizer, effects processor, MIDI controller and virtual pedalboard in one. You place modules from 80+ options onto pages and patch them together with the encoder. The Euroburo is its Eurorack twin running the same firmware."
        },
        {
          title: 'The grid, encoder, and screen',
          focus: 'grid',
          body: "Each page is an [[grid|8×5 button grid]] (40 buttons) — each button is a module's input, output, or parameter, colored by signal type. The [[enc|encoder]] navigates, dials values (push-twist = fine, Shift = super-fine), and makes connections. The [[screen|OLED]] shows what's selected. A patch holds up to 64 pages."
        },
        {
          title: 'It is mostly behaviors, not modules',
          focus: 'grid',
          body: "The real power is in how CV flows: **connection strength** above 100% multiplies / below divides; CV **sums** at inputs (add/subtract); a Multiplier is a CV VCA. Master those and a few modules build 'impossible' patches."
        }
      ]
    }
  },
  {
    title: 'Performance & patches',
    section_id: 'foot',
    tags: 'tutorial,performance,midi,footswitches',
    content: {
      type: 'tutorial',
      steps: [
        {
          title: 'Footswitches & Performance Mode',
          focus: 'foot',
          body: "The [[foot-bypass|BYPASS]] and [[foot-select|SELECT]] / [[foot-scroll|SCROLL]] footswitches can be reassigned inside a patch via the Stompswitch module. Shift+Back enters Performance Mode (back LED glows magenta) which blocks accidental edits while you play."
        },
        {
          title: 'Star parameters for MIDI & quick access',
          focus: 'grid',
          body: "Star any parameter (Shift+Star) to add it to the Starred list for instant access and MIDI-CC mapping (turn left in the starred window to 'learn' the next CC). Program Change recalls patches over MIDI on the [[io|jacks]]/Control Port (TRS Type A)."
        }
      ]
    }
  }
]
