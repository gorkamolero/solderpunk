import type { SeedLesson } from './types'

// Tutorials authored from the Minitaur research corpus (research/minitaur/).
// Zone ids referenced here match lib/minitaur/zones.ts (groups: osc, vco2, mix, filter,
// vca, env, mod, glide; internals prefixed by their group, e.g. filter-cutoff, env-fenv-attack).
// Knob-position values are starting points — analog unit variation + warm-up mean you tune by ear.

export const seedLessons: SeedLesson[] = [
  {
    title: 'Meet the Minitaur',
    section_id: 'osc',
    tags: 'tutorial,beginner,intro,architecture',
    content: {
      type: 'tutorial',
      steps: [
        {
          title: 'A 100% analog bass machine',
          body: "The Minitaur is a two-oscillator analog monosynth built on the Moog Taurus bass engine. The whole signal path is analog: **two VCOs → mixer → 24 dB/oct Moog ladder filter → VCA → output**.\n\nIt looks tiny and simple, but most of its real power lives **under the hood** — reachable only over MIDI CC, the free Minitaur Editor, or GLIDE shift-panel combos. Sound On Sound counted *“no fewer than 20 additional voicing parameters.”* This Explorer covers the panel; the [[osc|skill]] covers the hidden layer."
        },
        {
          title: 'Two oscillators',
          focus: 'osc',
          body: "[[osc-wave1|VCO 1]] and [[osc-wave2|VCO 2]] each do **saw or square**. VCO1 is the master; [[vco2-freq|VCO2 Frequency]] offsets VCO2 by roughly ±1 octave, and a fine **Beat** detune (editor/CC) sets a slow chorus-like beating against VCO1.\n\nOne hard limit to know: the Minitaur tops out at **C5 (MIDI note 72)** — notes above are ignored. It's a V/Hz oscillator design, ~3 octaves of range. That's a feature for a bass synth, not a bug (the Moog Sirin variant raises the ceiling if you need leads)."
        },
        {
          title: 'The mixer IS the drive',
          focus: 'mix',
          body: "The Minitaur has **no Multidrive** (that's the Sub Phatty / Sub 37 — a very common mix-up).\n\nIts only “dirt” is overdriving the mixer into the filter: push [[mix-vco1|VCO1 Level]] and [[mix-vco2|VCO2 Level]] **past ~2 o'clock** and the oscillators begin to clip the ladder filter input, adding aggressive harmonics. For clean sub tones, keep levels lower and resonance low. For grit, drive them — and if you want true overdrive, add an external Moog MF Drive after the output."
        },
        {
          title: 'Filter, envelopes, output',
          focus: 'filter',
          body: "The [[filter|filter]] is the classic 24 dB/oct Moog ladder: [[filter-cutoff|Cutoff]], [[filter-res|Resonance]] (self-oscillates past ~2 o'clock), and [[filter-eg|EG Amount]]. Resonance also thins the low end — useful as a de-facto high-pass to tame bass build-up.\n\nTwo ADS-style envelopes: the filter envelope ([[env-fenv-attack|A]]/[[env-fenv-decay|D]]/[[env-fenv-sustain|S]]) shapes cutoff, the amp envelope ([[env-aenv-attack|A]]/[[env-aenv-decay|D]]/[[env-aenv-sustain|S]]) shapes volume, then [[vca-volume|Volume]]. One warning from Sound On Sound: *never set Decay fully to zero* — with Attack and Decay both at zero you get a horrid click at note end."
        }
      ]
    }
  },
  {
    title: 'Note Sync: the bass-consistency weapon',
    section_id: 'osc',
    tags: 'tutorial,hidden,note-sync,under-the-hood',
    content: {
      type: 'tutorial',
      steps: [
        {
          title: 'The single most useful hidden control',
          focus: 'osc',
          body: "**Note Sync** (MIDI CC 81, or the Editor) resets both oscillator phases to zero on every Note On. Off, the free-running VCOs drift in and out of phase, so each note's attack energy varies randomly.\n\nFor bass that must sit consistently under a kick, turn Note Sync **ON** — it guarantees maximum, repeatable attack punch every note. Both Sound On Sound and Attack Magazine recommend leaving it on for bass. Turn it **OFF** when you *want* organic movement (a reese, a live-feeling Taurus patch)."
        },
        {
          title: 'The under-the-hood layer',
          body: "Note Sync is one of ~20 params not on the panel. The others you'll reach for most:\n\n• **Filter Keyboard Tracking** (CC 20) — set 100% to play the self-oscillating filter as a pitched sine across the keyboard.\n• **Glide Type** (CC 92) — Linear Constant Rate / Constant Time / **Exponential** (the Taurus-like, 303-style curve).\n• **Legato Glide** (CC 83) — glide only on overlapping notes (303 “slide”).\n• **LFO MIDI Sync / Clock Divide / Key Trigger**, **EG Trigger Mode**, **Key Priority**.\n\nEvery panel knob is also a CC (14-bit capable), so the whole synth automates from a DAW. Ask the assistant for the full CC map."
        }
      ]
    }
  },
  {
    title: 'Recipe: Rolling Techno Sub',
    section_id: 'filter',
    tags: 'recipe,bass,techno,sub',
    content: {
      type: 'tutorial',
      steps: [
        {
          title: 'A pumping sub that locks to the beat',
          focus: 'mix',
          body: "Start from an Init patch, **Note Sync ON**.\n\n• [[osc-wave1|VCO1]] = **square**, [[mix-vco1|VCO1 Level]] full; [[mix-vco2|VCO2 Level]] off.\n• [[filter-cutoff|Cutoff]] ~halfway, [[filter-res|Resonance]] ~9 o'clock."
        },
        {
          title: 'Make it pump',
          focus: 'filter-eg',
          body: "• Amp envelope: [[env-aenv-decay|Decay/Release]] ~3 o'clock, [[env-aenv-sustain|Sustain]] ~halfway.\n• Filter envelope: [[env-fenv-attack|Attack]] ~10 o'clock, [[env-fenv-decay|Decay]] ~11, Sustain matching.\n• Turn [[filter-eg|Filter EG Amount]] **counter-clockwise (negative)** to ~10 o'clock — the filter now ducks and re-opens with each note, giving that rolling, pumping motion.\n\nSource: Attack Magazine, “Synthesizing Bass for 3 Different Genres.”"
        }
      ]
    }
  },
  {
    title: 'Recipe: Classic House Bass',
    section_id: 'mix',
    tags: 'recipe,bass,house,staccato',
    content: {
      type: 'tutorial',
      steps: [
        {
          title: 'Detuned, punchy, staccato',
          focus: 'mix',
          body: "• Both oscillators **saw**: [[mix-vco1|VCO1]] full, [[mix-vco2|VCO2]] ~half; detune [[vco2-freq|VCO2]] slightly for movement.\n• [[filter-cutoff|Cutoff]] ~320 Hz, [[filter-res|Resonance]] ~10 o'clock, [[filter-eg|EG Amount]] ~2 o'clock."
        },
        {
          title: 'Staccato envelopes',
          focus: 'env',
          body: "• Amp envelope: [[env-aenv-attack|Attack]] 0, [[env-aenv-decay|Decay]] ~10 o'clock, [[env-aenv-sustain|Sustain]] just below, **Release OFF** for the staccato stab.\n• Filter envelope: [[env-fenv-attack|Attack]] 0, [[env-fenv-decay|Decay]] & Sustain ~9 o'clock.\n\nSource: Attack Magazine."
        }
      ]
    }
  },
  {
    title: 'Recipe: Acid / 303-style',
    section_id: 'glide',
    tags: 'recipe,bass,acid,303,glide',
    content: {
      type: 'tutorial',
      steps: [
        {
          title: 'Squelch and slide',
          focus: 'glide',
          body: "The Minitaur can't drop to an 18 dB filter like a real 303, so you lean on resonance + envelope phrasing instead.\n\n• **One oscillator** (saw or square), [[mix-vco1|VCO1]] only.\n• Set [[glide|Glide]] = **Exponential** + **Legato** (both under-the-hood / CC) so tied notes “slide” like a 303.\n• Amp envelope: [[env-aenv-attack|Attack]] 0, [[env-aenv-sustain|Sustain]] 0, Release disabled."
        },
        {
          title: 'The squelch',
          focus: 'filter-res',
          body: "• Crank [[filter-res|Resonance]] and add a positive [[filter-eg|Filter EG Amount]].\n• Sequence/automate the Filter EG Amount (positive only) for the rising squelch.\n• Keep [[filter-cutoff|Cutoff]] low and let the envelope do the talking.\n\nSource: Moog forum acid-bassline thread."
        }
      ]
    }
  },
  {
    title: 'Recipe: 808 sub-kick from the filter',
    section_id: 'filter',
    tags: 'recipe,kick,808,self-oscillation,sine',
    content: {
      type: 'tutorial',
      steps: [
        {
          title: 'Turn the filter into a sine oscillator',
          focus: 'filter-res',
          body: "The ladder filter self-oscillates into a clean sine — perfect for an 808-style sub kick.\n\n• [[mix-vco1|VCO1]] and [[mix-vco2|VCO2]] levels **to zero** (no oscillators).\n• [[filter-res|Resonance]] to ~100% (self-oscillation), [[filter-cutoff|Cutoff]] low — the filter is now a playable sine."
        },
        {
          title: 'The pitch blip + body',
          focus: 'filter-eg',
          body: "• Add a gentle **positive** [[filter-eg|Filter EG Amount]] with a fast filter envelope ([[env-fenv-attack|Attack]] 0, short [[env-fenv-decay|Decay]]) for the 808 pitch “blip.”\n• Shape the amp envelope [[env-aenv-decay|Decay]] for the body/tail.\n• **Note Sync ON** keeps the attack consistent kick to kick.\n\nSet the filter's pitch with **Filter KB Tracking at 100%** if you want to play the kick chromatically."
        }
      ]
    }
  },
  {
    title: 'Recipe: Reese Bass',
    section_id: 'osc',
    tags: 'recipe,bass,reese,dnb',
    content: {
      type: 'tutorial',
      steps: [
        {
          title: 'Two detuned oscillators, beating',
          focus: 'osc',
          body: "• Both [[osc-wave1|VCO1]] and [[osc-wave2|VCO2]] saw (or square); offset [[vco2-freq|VCO2]] slightly and add **Beat** detune until you hear movement.\n• **Note Sync OFF** here — you *want* the phase drift; it's what makes a reese churn. (Tip: tune VCO2 to a 5th or 7th to imply a missing fundamental.)"
        },
        {
          title: 'Low, dark, sustained',
          focus: 'filter',
          body: "• [[filter-cutoff|Cutoff]] low, [[filter-res|Resonance]] moderate.\n• Amp envelope: long [[env-aenv-sustain|Sustain]] (a drone), tiny Release to avoid clicks.\n• Modulate cutoff slowly ([[mod|LFO→VCF]] or by hand) for the classic evolving reese.\n\nSource: MOD WIGGLER reese/sub threads."
        }
      ]
    }
  }
]
