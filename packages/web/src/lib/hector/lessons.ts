import type { SeedLesson } from '@/lib/shared-types'

// Tutorials authored from research/hector/. Zone ids match lib/hector/zones.ts.

export const seedLessons: SeedLesson[] = [
  {
    title: 'Meet Hector',
    section_id: 'screen',
    tags: 'tutorial,beginner,intro,modular',
    content: {
      type: 'tutorial',
      steps: [
        {
          title: 'A touchscreen virtual-modular',
          body: "Hector runs the same 'Beebo OS' firmware as the Poly Beebo pedal — ~100 patchable LV2 modules, presets swap between the two. It's a self-contained synth + effects + looper rig you patch by touch."
        },
        {
          title: 'Patch it on the screen',
          focus: 'screen',
          body: "The [[screen|touchscreen]] is the whole interface: drop module blocks ([[screen-delay|Delay]], [[screen-filter|Filter]], [[screen-reverb|Reverb]], [[screen-seq|Seq]], [[screen-lfo|LFO]], the Mutable ports) and wire them. Audio and control are colour-coded; any module can modulate any other."
        },
        {
          title: 'All I/O is CV + audio (±5V)',
          focus: 'in',
          body: "The 6 [[in|inputs]] and 8 [[out|outputs]] are every one CV- and audio-capable at ±5V — use [[out-1|outputs]] as effects sends/returns or CV out. [[midi|MIDI + USB]] at the bottom handle control and firmware. Drive synth modules from MIDI via the note-to-CV modules."
        }
      ]
    }
  },
  {
    title: 'Parallel = headroom',
    section_id: 'screen',
    tags: 'tutorial,cpu,performance,parallel',
    content: {
      type: 'tutorial',
      steps: [
        {
          title: 'The master CPU skill',
          focus: 'screen',
          body: "Hector's CPU is quad-core and assigns parallel chains to different cores — so four modules in parallel can cost about the same as one, and roughly a quarter of four in series. Think in branches, not a serial pedalboard: split into parallel voices/effects and recombine with a mixer. Watch the CPU meter (appears above 60%)."
        }
      ]
    }
  }
]
