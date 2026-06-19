import type { SeedLesson } from '@/lib/shared-types'

// Tutorials authored from research/grandmother/. Zone ids match lib/grandmother/zones.ts.

export const seedLessons: SeedLesson[] = [
  {
    title: 'Meet the Grandmother',
    section_id: 'filter',
    tags: 'tutorial,beginner,intro,architecture',
    content: {
      type: 'tutorial',
      steps: [
        {
          title: 'A 100% analog semi-modular',
          body: "The Grandmother is fully analog and semi-modular: it's already internally wired, but every stage is exposed on a 41-point patchbay you can interrupt. The default signal flow is keyboard/arp → oscillators → mixer → filter → VCA → spring reverb → out."
        },
        {
          title: 'The signal path',
          focus: 'filter',
          body: "[[osc|Oscillators]] feed the [[mix|Mixer]], into the **24 dB/oct Moog ladder** [[filter|Filter]] (NOT 12 dB — a common myth), then the [[out|Output]] VCA and the real **spring reverb**. The [[env|Envelope]] shapes the filter and amp; the [[arp|Arp/Seq]] drives it all."
        },
        {
          title: 'Secretly three oscillators',
          focus: 'mod',
          body: "The [[mod|LFO]] is full-range (0.07 Hz–1.3 kHz) and 1V/oct-trackable — patch KB OUT → its RATE IN and it plays like a third oscillator. And the [[filter|filter]] self-oscillates into a clean sine (max [[filter-resonance|Resonance]], KBD track 1:1). That's effectively four voices from a 'mono' synth."
        }
      ]
    }
  },
  {
    title: 'The patchbay — break the normals',
    section_id: 'util',
    tags: 'tutorial,patchbay,semi-modular,krell',
    content: {
      type: 'tutorial',
      steps: [
        {
          title: 'Patching breaks the wire',
          focus: 'filter-cutoff-in',
          body: "Inserting a cable into an INPUT overrides its normalled internal signal. The [[util-mult-tl|MULT]] splits one CV to many places; the [[util-attenuator|Attenuator]] is normalled to a DC voltage, so with nothing patched it's a handy offset source. Feed [[filter-cutoff-in|CUTOFF IN]] to sweep the filter from anywhere."
        },
        {
          title: 'Self-generating Krell drone',
          focus: 'mod-sh-out',
          body: "The community staple: set [[out-vca-mode|VCA = DRONE]], then patch [[mod-sh-out|S/H OUT]] (random) into the [[util-mult-tl|MULT]] and distribute to [[filter-cutoff-in|CUTOFF IN]], oscillator pitch, and the envelope [[env-trigger-in|TRIGGER IN]] so the patch self-triggers. Slow [[mod-rate|MOD RATE]] for evolving generative motion — no keys touched."
        }
      ]
    }
  }
]
