import type { SeedLesson } from '@/lib/shared-types'

// Tutorials authored from the Brains research corpus (research/brains/claude.md + chatgpt.md).
// Zone ids referenced here match lib/brains/zones.ts (section groups: scope, bank, macros, cv, io;
// internals prefixed by their group, e.g. bank-model, macros-harmonics, io-out2).
// Knob-position values are starting points — every macro re-maps per engine, so you tune by ear.
// For every shared engine the Mutable Instruments Plaits manual is authoritative; Behringer-added
// engines are flagged [Behringer] where the research does.

export const seedLessons: SeedLesson[] = [
  {
    title: 'Meet Brains',
    section_id: 'macros',
    tags: 'tutorial,beginner,intro,plaits,macro-oscillator',
    content: {
      type: 'tutorial',
      steps: [
        {
          title: 'A macro-oscillator',
          body: "Brains is a 16 HP macro-oscillator: it wraps the open-source Mutable Instruments Plaits DSP in Behringer hardware, adding an OLED scope, a USB port, three LED-coloured banks, and Behringer's own engines. It plays **one synthesis engine at a time** — pick the engine, then sculpt it.\n\nThat's the whole idea inherited from Plaits: one model, three tone macros, frequency + FM, an internal envelope, an internal low-pass gate, and an AUX output that's a variant of the main signal. Because the shared engines run Plaits code, **the Plaits manual is authoritative for them**."
        },
        {
          title: 'Pick an engine: BANK + MODEL',
          focus: 'bank',
          body: "Choose the engine with [[bank-button|BANK]] and [[bank-model|MODEL]]. The latest firmware (manual V5.0, 2024) advertises **24 synthesis engines** across three LED-coloured banks — red/green/yellow. The red bank is pitched/synth, the green bank is noise/percussion/physical, and the yellow bank holds Behringer's extended modes (DX7-style FM, TB-303 Bassline, Wave Generator, Vox) plus the Audio Scope utility.\n\nThe scope now shows the **model name** when you switch. Honest count: 20 sound engines at launch + 4 extended (BX7, Bassline, Wave Generator, Vox) = 24, with Audio Scope a 5th utility mode."
        },
        {
          title: 'Three macros reshape any engine',
          focus: 'macros',
          body: "Every engine is sculpted by three knobs whose meaning **changes per engine**: [[macros-harmonics|HARMONICS]], [[macros-timbre|TIMBRE]], and [[macros-morph|MORPH]]. On a virtual-analog patch HARMONICS detunes two waves; on FM it's the operator ratio; on Chords it picks the chord type. The same three knobs, a different job each time.\n\n[[macros-freq|FREQ]] sets pitch relative to a root, and the [[scope|OLED scope]] shows the resulting waveform. Learning Brains is mostly learning what these three macros do on each engine — that's the Engine Atlas tutorial."
        },
        {
          title: 'The LPG, and a hidden tweak',
          focus: 'macros',
          body: "Pitched engines play through an internal **low-pass gate (LPG)** struck by a trigger — that's why a note both opens in volume and gets brighter, then rings out.\n\nTwo inherited button-combos shape it, printed on the last page of the manual and missed by almost everyone: hold the **BANK** button and turn [[macros-timbre|TIMBRE]] to move the LPG from filter-like (CCW) to pure VCA (CW); hold **BANK** and turn [[macros-morph|MORPH]] to set the ring/decay time (1–4 yellow LEDs). Because it's an LPG, a lingering tail remains even when the decay is shortened."
        },
        {
          title: 'OUT and AUX are two voices',
          focus: 'io',
          body: "[[io-out1|OUT 1]] is the main signal; [[io-out2|OUT 2 / AUX]] carries an alternate or variant of it — a sub-oscillator, the chord's root note, a low-fi version, an alternate drum model. The Plaits manual calls AUX \"a variant, sidekick, or by-product of the main signal.\"\n\nEverything is CV-controllable via the [[io|jacks]] — pitch on [[io-voct|V/Oct]], strike on [[io-trig|Trig]], accent/level on [[io-level|Level]]. There is **no hardware MIDI**: the USB port is class-compliant USB-MIDI used only for firmware and SysEx. To play it from a keyboard, use a MIDI-to-CV converter into V/Oct and Trig."
        }
      ]
    }
  },
  {
    title: "Fix: 'too high' or 'clicking'",
    section_id: 'macros',
    tags: 'tutorial,gotcha,frequency,hidden,bass',
    content: {
      type: 'tutorial',
      steps: [
        {
          title: 'The #1 Brains gotcha',
          focus: 'macros-freq',
          body: "If Brains sounds way too high — or it **clicks** instead of playing a pitched note — the [[macros-freq|FREQ]] knob range is set wrong. A clicking sound means the range is set to the **lowest** window. This is the single most common Brains complaint, and it's a Plaits-inherited setting buried on the last page of the manual."
        },
        {
          title: 'Hold MODEL, turn HARMONICS',
          focus: 'macros-harmonics',
          body: "Hold the **MODEL** button and turn [[macros-harmonics|HARMONICS]] to set the FREQ knob's octave range, shown on the LEDs:\n\n• 1 LED = a narrow ±7-semitone window around C0\n• 2 LEDs = around C1 … up to 8 = around C7\n• **all LEDs lit = the full 8-octave range, C0–C8**\n\n(On Plaits the same combo is hold the *second* model button + Harmonics; Behringer remapped it to the dedicated MODEL button.) Set this first, before you blame the patch."
        },
        {
          title: '"No real bass" is the same fix',
          focus: 'macros-freq',
          body: "Owners who report Brains \"has no bass\" almost always have the FREQ range set wrong. For deep bass, set the range to **1–2 LEDs** (a low octave) with this combo, then dial the pitch with [[macros-freq|FREQ]].\n\nA solid starting bass: engine **2-Op FM** (or Virtual Analog), [[macros-harmonics|HARMONICS]] ~9 o'clock (low ratio), [[macros-timbre|TIMBRE]] low–mid, [[macros-morph|MORPH]] at noon, patch [[io-trig|Trig]] to strike the LPG, and use [[io-level|Level]] for accent."
        }
      ]
    }
  },
  {
    title: 'The Engine Atlas: HARMONICS / TIMBRE / MORPH',
    section_id: 'macros',
    tags: 'tutorial,engines,atlas,harmonics,timbre,morph,aux',
    content: {
      type: 'tutorial',
      steps: [
        {
          title: 'One control scheme, many engines',
          focus: 'macros',
          body: "The whole module comes down to three macros that re-map per engine. This tour walks the families with the exact Plaits-inherited behaviours. Reminder: [[macros-harmonics|HARMONICS]] = the structural/spectral control, [[macros-timbre|TIMBRE]] = the primary tone, [[macros-morph|MORPH]] = the variation/blend, and [[io-out2|AUX]] = a related side-output.\n\nEverything below is **Plaits-inherited** unless flagged [Behringer]."
        },
        {
          title: 'Virtual Analog & Waveshaping',
          focus: 'macros-harmonics',
          body: "**Virtual Analog** — two detuned classic waves. HARMONICS: detuning between them. TIMBRE: a variable square (narrow pulse → full square → hardsync formants). MORPH: a variable saw (triangle → saw with a widening notch). AUX: sum of two hardsync'd waveforms. Tip: a *very narrow pulse* or *very wide notch* = silence, so you can mute one oscillator and play a focused square or saw.\n\n**Waveshaping** — an asymmetric triangle through a waveshaper + wavefolder. HARMONICS: the waveshaper waveform. TIMBRE: wavefolder amount (push it for screaming leads). MORPH: waveform asymmetry. AUX: a variant with another wavefolder curve."
        },
        {
          title: 'FM (2-operator)',
          focus: 'macros-morph',
          body: "**2-Operator FM** — two sines modulating each other's phase. HARMONICS: the frequency ratio. TIMBRE: the modulation index. MORPH: the feedback path (op2 → its own phase past noon = rough; op1's phase before noon = chaotic). AUX: a sub-oscillator.\n\nTip from the docs: MORPH fully CCW ≈ Braids \"WTFM\", fully CW ≈ Braids \"FBFM\", and noon = gentle classic FM. (The yellow-bank **BX7 [Behringer]** is a separate, deeper DX7-style FM engine — covered in the extended-modes tutorial.)"
        },
        {
          title: 'Grains/Formant, Additive, Wavetable',
          focus: 'macros-timbre',
          body: "**Grains / Formant** (the Brains \"Grains\" label = Plaits' formant/grainlet engine) — VOSIM/Pulsar/Casio-CZ formants. HARMONICS: ratio between formant 1 and 2. TIMBRE: formant frequency. MORPH: formant width/shape. AUX: a filtered-waveform sim where HARMONICS picks the filter type.\n\n**Additive** — 24 harmonically-related sines. HARMONICS: number of spectral bumps. TIMBRE: index of the most prominent harmonic (≈ band-pass cutoff). MORPH: bump shape, flat/wide → peaked/narrow (≈ resonance). AUX: a Hammond-drawbar-only variant.\n\n**Wavetable** — four banks of 8×8 waves. HARMONICS: bank select. TIMBRE: row (by brightness). MORPH: column. AUX: a low-fi 5-bit output."
        },
        {
          title: 'Chords',
          focus: 'macros-harmonics',
          body: "**Chords** — four-note chords from VA or wavetable oscillators. HARMONICS: chord type. TIMBRE: inversion/transposition. MORPH: waveform (first half = string-machine drawbar waves, second half = a 16-wave wavetable). **AUX: the root note only** — one of the most useful AUX outputs on the module, since it makes an instant tuned bass layer under the chord.\n\nStock chord order as HARMONICS turns: octave, fifth, sus4, m, m7, m9, m11, 6/9, M9, M7, M. Crossfade [[io-out1|OUT]] (chord) against [[io-out2|AUX]] (root) for movement."
        },
        {
          title: 'Speech & Vox',
          focus: 'macros-morph',
          body: "**Speech** — formant filter + SAM + LPC synthesis. HARMONICS: crossfades formant → SAM → LPC vowels, then several banks of LPC words. TIMBRE: the \"species\" (Daleks → chipmunks). MORPH: phoneme/word-segment selection. AUX: the unfiltered vocal-cords signal.\n\nKey trick: with HARMONICS past ~11 o'clock you reach the word banks — then [[io-trig|Trig]] utters words, the [[cv-fm|FM attenuverter]] sets intonation, and the [[cv-morph|MORPH attenuverter]] sets speed. A single random CV + trigger stream becomes a stuttering vocal sequencer.\n\nThe yellow-bank **Vox [Behringer]** is different — a smoother vocal-morphing engine, not the formant/SAM/LPC hybrid."
        },
        {
          title: 'Behringer extras in the synth banks',
          focus: 'bank-model',
          body: "Four engines aren't in stock Plaits — they're Behringer's own:\n\n• **Supersaw / Hypersaw [Behringer]** — thick detuned saws. Sound On Sound: best run *free* (no Trig) as a regular oscillator. HARMONICS adds harmonics/detune, MORPH ≈ sub-oscillator level, AUX = a copy of OUT 1.\n• **Karplus [Behringer]** — plucked-string; MORPH = decay time, AUX = a copy of OUT 1.\n• In the percussion banks, **FM Drum, Cowbell, Toms [Behringer]** add synthetic drum voices alongside the analog-emulation kicks/snares/hats — for all three, MORPH = decay time."
        }
      ]
    }
  },
  {
    title: 'Drums: a full kit from one module',
    section_id: 'io',
    tags: 'tutorial,drums,percussion,model-cv,kit',
    content: {
      type: 'tutorial',
      steps: [
        {
          title: 'The percussion bank',
          focus: 'bank',
          body: "The green bank is Brains' drum machine: **Modal Strings, FM Drum, Bass, Snare, Hi-Hat, Cowbell, Toms** (plus Rain/Noise/Dust textures). Per family:\n\n• **Bass Drum** — bridged-T network + shaped pulse. HARMONICS: attack sharpness/overdrive. TIMBRE: brightness. MORPH: decay.\n• **Snare** — bridged-T shell modes + BP noise. HARMONICS: harmonic/noise balance. TIMBRE: mode balance. MORPH: decay.\n• **Hi-Hat** — metallic tone + clocked noise → HPF. HARMONICS: metallic/noise balance. TIMBRE: HPF cutoff. MORPH: decay.\n• **FM Drum / Cowbell / Toms [Behringer]** — MORPH: decay."
        },
        {
          title: 'Drum models bypass the LPG',
          focus: 'io-trig',
          body: "These percussion/physical models behave differently from the pitched engines: the internal **LPG is disabled**. [[io-trig|Trig]] triggers the synthesis directly, and the [[io-level|Level]] input becomes an **accent** control instead of an envelope opener.\n\nSo for drums you patch a gate/trigger to Trig and (optionally) a velocity/accent CV to Level. No external envelope needed — the engine is a complete struck voice."
        },
        {
          title: 'Bass-drum drone bonus',
          focus: 'io-trig',
          body: "A useful side-effect: with **nothing patched to Trig**, the analog Bass Drum model produces a *continuous tone* whose amplitude is still modulated by [[macros-morph|MORPH]] and its CV. That gives you a clean drone/sine source from a \"drum\" engine — handy for sub layers or generative pads."
        },
        {
          title: 'One module, whole kit: MODEL-CV',
          focus: 'io-modelcv',
          body: "To get more than one drum voice from a single module, sequence the engine itself. Patch per-step CV into the [[io-modelcv|MODEL CV]] jack (±5 V) and assign voltages to engines. [[io-trig|Trig]] **samples-and-holds** the Model CV, so each clocked step locks in a model and then strikes it — pseudo-preset kit switching.\n\nThe model→voltage map is non-linear; a measured set: Toms 1.578, Cowbell 1.417, Hi-Hat 1.238, Snare 0.872, Bass 0.677, FM Drum 0.492, Modal 0.301, Dust −0.056, Noise −0.424, Rain −0.626. Attenuate MODEL CV heavily, since model selection can otherwise jump too far. Note: **MODEL CV only affects the red/green engines**, not the yellow-bank modes."
        },
        {
          title: 'The quirk: delay the trigger',
          focus: 'io-trig',
          body: "Critical timing gotcha: **model changes don't happen instantly.** If a model-change CV and a trigger arrive at the *same* moment, the trigger plays the old or an in-between model — your kick fires as the last sound.\n\nThe fix: **delay the trigger slightly** relative to the MODEL CV step. Bigger model jumps (further apart on the voltage map) need a longer delay. Patch the MODEL CV straight from the sequencer, but route the gate through a short trigger-delay so the model settles first."
        }
      ]
    }
  },
  {
    title: 'OUT + AUX: two voices, instant stereo',
    section_id: 'io',
    tags: 'tutorial,aux,stereo,routing,outputs',
    content: {
      type: 'tutorial',
      steps: [
        {
          title: 'AUX is not a backup',
          focus: 'io-out2',
          body: "Treat [[io-out1|OUT 1]] and [[io-out2|OUT 2 / AUX]] as **two separate, usable voices**, not main-and-spare. The Plaits manual: AUX is \"a variant, sidekick, or by-product of the main signal.\" Examples by engine:\n\n• Virtual Analog → AUX = sum of two hardsync'd waveforms\n• 2-Op FM → AUX = a sub-oscillator\n• Chords → AUX = the root note only\n• Wavetable → AUX = a low-fi 5-bit version\n• Drums → AUX = an alternate drum model\n• Supersaw / Karplus [Behringer] → AUX = a copy of OUT 1"
        },
        {
          title: 'Instant stereo',
          focus: 'io',
          body: "The community's favourite trick: pan **[[io-out1|OUT]] hard-left and [[io-out2|AUX]] hard-right** for instant stereo width from a single oscillator — the two outputs differ enough (variant vs. main) to feel wide without any external effect.\n\nBoth outputs are 3.5 mm TS, DC-coupled, max ~6.2 V, so they're line-level patch points like any other oscillator out."
        },
        {
          title: 'Crossfade and layer',
          focus: 'io-out2',
          body: "Beyond hard-panning, **crossfade** OUT and AUX with a crossfader or two VCAs for movement that isn't just stereo. Classic uses:\n\n• **Chords**: blend the chord (OUT) with its root (AUX) for instant bass reinforcement under the pad.\n• **Drones**: mixing in AUX is often \"the missing sauce\" — it thickens an otherwise static patch.\n• **Parallel voicing**: send one output into a filter and leave the other bright."
        },
        {
          title: 'Self-patch for chaos',
          focus: 'cv-fm',
          body: "Because both outputs are real signals, you can feed **OUT or AUX back into a CV input** — [[cv-fm|FM]], [[cv-timbre|Timbre CV]], or [[cv-morph|Morph CV]] — for \"interesting/bonkers/terrifying\" results.\n\nOne caveat from the docs: the CV inputs are band-limited (DC to ~2 kHz), so audio-rate through-zero FM via the FM jack is limited compared to an analog oscillator. For true audio-rate FM, feed audio into [[io-voct|V/Oct]] instead."
        }
      ]
    }
  },
  {
    title: 'Extended modes: BX7 & Bassline',
    section_id: 'bank',
    tags: 'tutorial,extended,bx7,dx7,bassline,td-3,sysex,behringer',
    content: {
      type: 'tutorial',
      steps: [
        {
          title: 'The yellow bank',
          focus: 'bank',
          body: "The 2023 \"Reloaded\" update added a yellow bank of Behringer's own engines: **BX7** (DX7-style FM), **Bassline** (TB-303/TD-3), **Wave Generator**, **Vox**, plus the **Audio Scope** utility. These are *not* Plaits' v1.2 engines — Behringer wrote its own, because the Plaits 1.2 code wasn't open at the time, and Brains can't run stock Plaits firmware anyway (different hardware, 96 kHz).\n\nUnlike the red/green banks, the yellow modes are **not** affected by [[io-modelcv|MODEL CV]]."
        },
        {
          title: 'BX7 — DX7-style FM [Behringer]',
          focus: 'bank-model',
          body: "**BX7** is a DX7-compatible six-operator FM voice with **32 presets**. It's an *enveloped synth voice*, so it must be struck via [[io-trig|Trig]] to speak. Macros:\n\n• [[macros-harmonics|HARMONICS]] = **preset selection** (pick one of the 32)\n• [[macros-timbre|TIMBRE]] = **vibrato**\n• [[macros-morph|MORPH]] = **tremolo**\n• [[io-level|LEVEL]] = **velocity**\n\nNote: BX7's two extra parameters (fixed LFO to pitch, fixed LFO to level) differ from Mutable's index/time-travel approach — this is Behringer's own take, not the Plaits FM engine."
        },
        {
          title: 'Loading DX7 patches via SysEx',
          focus: 'io-out1',
          body: "BX7 can swap sounds with the whole DX7 ecosystem. Send a **32-voice DX7 `.syx` SysEx file over USB** — this **overwrites** the 32 BX7 presets in Brains memory. The documented route is the **SynthTribe** app (one owner reports Windows more reliable than Mac); after upload, select voices with the [[macros-harmonics|HARMONICS]] knob.\n\nAlternative confirmed by a user: send banks over USB-MIDI from the DX-7II Librarian web app (even from an Android phone), bypassing SynthTribe. Tools like Dexed can author compatible dumps."
        },
        {
          title: 'BX7 velocity trick',
          focus: 'io-level',
          body: "Because BX7 is an enveloped voice, for DX7-like dynamics you feed a **velocity CV into [[io-level|LEVEL]]**. A Sweetwater owner reserved one sequencer channel just for velocity, which made BX7 \"sound reasonably like a DX7, albeit a monophonic one.\"\n\nSo a typical BX7 patch is: [[io-voct|V/Oct]] for pitch, [[io-trig|Trig]] for note-on, and a per-step velocity CV into LEVEL."
        },
        {
          title: 'Bassline — TB-303 / TD-3 [Behringer]',
          focus: 'bank-model',
          body: "**Bassline** is a TB-303 emulation (modelled on Behringer's TD-3), also an enveloped voice that needs [[io-trig|Trig]]. Macros:\n\n• [[macros-timbre|TIMBRE]] = **cutoff**\n• [[macros-harmonics|HARMONICS]] = **resonance / distortion**\n• [[macros-morph|MORPH]] = **env mod / decay**\n• [[io-level|LEVEL]] = **accent**\n\nFor acid lines: sequence pitch via [[io-voct|V/Oct]], strike each step with Trig, and drive [[io-level|LEVEL]] on the accented steps. Sweep TIMBRE (cutoff) with HARMONICS (resonance) up for the classic squelch."
        },
        {
          title: 'Wave Generator & Vox [Behringer]',
          focus: 'macros',
          body: "Two more yellow-bank engines round out the set:\n\n• **Wave Generator** — intentionally gritty/digital. [[macros-timbre|TIMBRE]] = **waveform**, [[macros-harmonics|HARMONICS]] = **bit crush**, [[macros-morph|MORPH]] = **sample rate**, [[io-level|LEVEL]] = level. (No user-sample import — it's built-in waveforms with bit-crush/sample-rate controls.)\n• **Vox** — smooth vocal morphing. [[macros-timbre|TIMBRE]] = **formant shift**, [[macros-harmonics|HARMONICS]] = **resonance**, [[macros-morph|MORPH]] = **blend vowels**, [[io-level|LEVEL]] = level. Sweep formant shift and vowel blend slowly with envelopes or LFOs rather than big jumps.\n\nThe 5th yellow slot, **Audio Scope**, isn't a sound generator — it routes external audio in via [[io-voct|V/Oct]] and draws it on the OLED."
        }
      ]
    }
  }
]
