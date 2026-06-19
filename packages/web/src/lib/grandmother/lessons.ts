import type { SeedLesson } from '@/lib/shared-types'

// Tutorials authored from the Grandmother research corpus (research/grandmother/claude.md + chatgpt.md).
// Zone ids referenced here match lib/grandmother/zones.ts (groups: arp, mod, osc, mix, util, filter,
// env, out; internals prefixed by their group, e.g. filter-cutoff, mod-sh-out, util-mult-tl, out-volume).
// Every fact/setting traces to the two research docs; nothing added from general knowledge.

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
          body: "The Grandmother is fully analog and semi-modular: it's already internally wired, but every stage is exposed on a **41-point patchbay** (21 inputs, 16 outputs, plus a 4-jack mult) you can interrupt. The default flow is keyboard/arp → oscillators → mixer → filter → VCA → spring reverb → out. The **Dark** model is electronically identical — only the panel colour differs."
        },
        {
          title: 'The signal path',
          focus: 'filter',
          body: "[[osc|Oscillators]] feed the [[mix|Mixer]], into the **24 dB/oct Moog ladder** [[filter|Filter]] — NOT 12 dB, a common myth; the only −6 dB element is the 1-pole high-pass in [[util|Utilities]]. Then the [[out|Output]] VCA and a real **6-inch spring reverb** (based on the vintage Moog 905). The [[env|Envelope]] shapes the filter/amp; the [[arp|Arp/Seq]] drives it all. Oscillators are Voyager-derived; allow ~10-15 min warm-up before they hold pitch."
        },
        {
          title: 'Secretly three (or four) oscillators',
          focus: 'mod',
          body: "The [[mod|LFO]] is full-range (0.07 Hz–1.3 kHz) and 1V/oct-trackable — patch **KB OUT → [[mod-rate-in|RATE IN]]** and it plays like a third oscillator; send its [[mod-wave-out|WAVE OUT]] into a [[mix-noise-in|mixer input]] to hear it. And the [[filter|filter]] self-oscillates into a clean sine (max [[filter-resonance|Resonance]], cutoff ~10 o'clock, KBD track 1:1) — effectively a fourth voice from a 'mono' synth."
        }
      ]
    }
  },
  {
    title: 'The patchbay — break the normals',
    section_id: 'util',
    tags: 'tutorial,patchbay,semi-modular',
    content: {
      type: 'tutorial',
      steps: [
        {
          title: 'Patching an input breaks the wire',
          focus: 'filter-cutoff-in',
          body: "Every patch point is 3.5 mm. Inserting a cable into an **INPUT** overrides (breaks) the normalled internal signal to that point; **outputs** never break anything. The main audio insert points are [[filter-input|FILTER IN]], [[out-vca-in|VCA IN]], and REVERB IN — each cuts its normalled upstream feed. Feed [[filter-cutoff-in|CUTOFF IN]] (summed, doesn't break) to sweep the filter from anywhere."
        },
        {
          title: 'The MULT and the attenuator',
          focus: 'util',
          body: "The [[util-mult-tl|MULT]] is four parallel unbuffered jacks — split one CV to up to three places, or merge two **AC-coupled audio** signals (don't merge DC/control). The [[util-attenuator|ATTENUATOR]] is bipolar/inverting and is **normalled to a positive voltage**, so with nothing patched in its OUTPUT is a usable **±8 V DC offset source**. The [[util-hpf|HIGH PASS FILTER]] is a static −6 dB/oct you patch in manually — great for thinning bass or, fed back, screaming."
        }
      ]
    }
  },
  {
    title: 'Krell: a self-generating drone',
    section_id: 'mod',
    tags: 'tutorial,krell,generative,patch',
    content: {
      type: 'tutorial',
      steps: [
        {
          title: 'Let the patch play itself',
          focus: 'mod-sh-out',
          body: "The community staple. Set [[out-vca-mode|VCA MODE = DRONE]] so sound passes with no key held. The [[mod-sh-out|S/H OUT]] is a sample-and-hold of noise, sampled at each LFO cycle — it has **no internal routing, so it must be patched**."
        },
        {
          title: 'Wire the self-trigger',
          focus: 'util',
          body: "Patch [[mod-sh-out|S/H OUT]] into the [[util-mult-tl|MULT]] and distribute to [[filter-cutoff-in|CUTOFF IN]], an [[osc-osc2-freq|oscillator pitch]] input, and the envelope [[env-trigger-in|TRIGGER IN]] so the patch self-triggers. Keep [[mod-rate|MOD RATE]] low for slow evolving motion. Variation from the docs: **GATE OUT → [[mod-sync-in|MOD SYNC IN]]** so each step resets the S/H — endless generative burbles, no keys touched."
        }
      ]
    }
  },
  {
    title: 'Two filters & the HP-feedback scream',
    section_id: 'filter',
    tags: 'tutorial,filter,feedback,patch',
    content: {
      type: 'tutorial',
      steps: [
        {
          title: 'Split into two filters',
          focus: 'util-hpf',
          body: "The Grandmother hides a second filter — the static [[util-hpf|HIGH PASS]]. Series: MIXER OUT → [[util-hpf-in|HPF IN]] → [[util-hpf-out|HPF OUT]] → [[filter-input|FILTER (LP) IN]]. Parallel per-oscillator: send [[osc-osc2-wave-out|OSC 2 WAVE OUT]] → HPF, the LP filter the other oscillator, and recombine through the [[util-mult-tl|MULT]] into [[out-vca-in|VCA IN]] — each oscillator through its own filter."
        },
        {
          title: 'The official feedback scream',
          focus: 'util-hpf',
          body: "Moog's own trick: [[filter|MIXER/FILTER OUT]] → [[util-hpf-in|HIGH PASS IN]], then [[util-hpf-out|HIGH PASS OUT]] → [[mix-noise-in|NOISE IN]]. Use the [[mix-noise|NOISE]] mixer knob as feedback amount and the [[util-hpf|HIGH PASS]] knob as tone — expect overload and screeching timbres. A Reddit staple runs both oscillators ~9 o'clock with the noise mix above halfway."
        }
      ]
    }
  },
  {
    title: 'Hidden settings & the Local-Off gotcha',
    section_id: 'arp',
    tags: 'tutorial,hidden,global-settings,firmware',
    content: {
      type: 'tutorial',
      steps: [
        {
          title: 'The secret global menu',
          focus: 'arp',
          body: "Enter Global Edit by holding **HOLD + SYNC** until SYNC blinks; black keys select a parameter, white keys set values, double-tap a white key to write+exit. Beyond MIDI channel and note priority, firmware v1.1.x exposes a deep layer: **Osc 2 freq-knob range** (0–18 semitones), **glide type** (LCR/LCT/Exp), **Clock Output Mode** (always vs only-while-running), and **Multi-Trig** (also MIDI **CC 95**) which decides whether envelopes retrigger per key. The v1.1.3 Global Settings PDF is the real treasure map."
        },
        {
          title: 'Legato glide & calibration',
          focus: 'mod',
          body: "For acid lines, enable **Legato Glide**: hold HOLD while turning GLIDE right (left = off). If Osc 2 won't hit a clean 5th at full CW, run **oscillator recalibration** from Global Edit (it takes a while — never right before a gig)."
        },
        {
          title: 'Local Off is more aggressive than you think',
          focus: 'out',
          body: "To use the Grandmother purely as a MIDI/CV controller, set **Local Off** — but note the docs' warning: that **disengages KB OUT, GATE OUT, and KB VELOCITY OUT** (they're hard-wired to the internal voice). Make-or-break detail if you're driving external gear from its keyboard."
        }
      ]
    }
  },
  {
    title: 'Integration: Mother-32, DFAM & external audio',
    section_id: 'out',
    tags: 'tutorial,integration,eurorack,reverb',
    content: {
      type: 'tutorial',
      steps: [
        {
          title: 'Clock & control the Moog family',
          focus: 'arp',
          body: "The Grandmother speaks 5-pin DIN MIDI, USB MIDI, analog clock in/out, pitch CV, gate, and velocity/accent CV. It can be clock master or slave; default Clock PPQN is now **4 PPQN (16th)**, not the manual's old 2 PPQN — a sync gotcha with legacy gear. Pair it with Mother-32/DFAM via the rear clock + the [[arp|Arp/Seq]]."
        },
        {
          title: 'As an external processor + the cable gotcha',
          focus: 'out',
          body: "Feed audio into INSTRUMENT IN (post-mixer, pre-filter) and run it through the filter, VCA and spring reverb. For a proper wet/dry reverb send, patch source → [[out-vca-in|VCA IN]] with [[out-vca-mode|VCA = DRONE]] so the front-panel MIX works (the rear REVERB OUT is always 100% wet). **EURORACK OUT** gives modular-level audio independent of [[out-volume|VOLUME]]. One near-universal gotcha: the 1/4\" main out is mono — **use a TS cable**; a TRS/balanced cable causes phase cancellation and a weak signal."
        }
      ]
    }
  }
]
