---
name: brains
description: "Behringer Brains — 16 HP Eurorack macro-oscillator running Mutable Instruments Plaits DSP, with Behringer-added engines. Complete knowledge base for engine selection, the HARMONICS/TIMBRE/MORPH macros, CV control, hidden button-combos, and per-engine sound design. Use when: (1) discussing the Behringer Brains or how it relates to Plaits (it's a Plaits clone), (2) picking or programming an engine — Virtual Analog, FM, Grains, Additive, Chords, Speech, Wavetable, drums/percussion, or the extended BX7/Bassline/Wave Generator/Vox modes, (3) explaining what HARMONICS/TIMBRE/MORPH/AUX/CV do on a specific engine, (4) CV/gate patching, DX7/BX7 FM SysEx, drum-kit-from-one-module tricks, (5) fixing 'Brains too high / clicking', no-bass, or LPG/decay issues, (6) user mentions 'Brains', 'Behringer Brains', 'Plaits clone', macro-oscillator, or any of its engines. For every shared engine the Plaits manual is authoritative; each engine is tagged Plaits-inherited or Behringer-specific."
---

# Behringer Brains

Research dossier: `/Users/gorkolas/www/music/solderpunk/research/brains/` (`claude.md`, `chatgpt.md`)

## What This Is

Behringer Brains is a **16 HP Eurorack macro-oscillator** that wraps the open-source Mutable Instruments **Plaits** DSP (MIT-licensed code) in Behringer hardware, adding an OLED scope, a USB port, three LED-coloured banks (red/green/yellow), and Behringer-developed engines. Because the shared engines run Plaits code, **the [Plaits manual](https://pichenettes.github.io/mutable-instruments-documentation/modules/plaits/manual/) is authoritative for them**. Every engine below is tagged **[Plaits-inherited]** or **[Behringer-specific]**; shared behaviour cites both the Brains manual and the Plaits source.

## Key Constraint

Brains has **NO hardware MIDI port**. The only jacks are USB (class-compliant USB-MIDI, used solely for firmware updates and BX7 DX7-SysEx) and CV. **CV is the primary performance-control system** — pitch/gate/accent come from V/OCT + TRIG + LEVEL. To play from a keyboard, use an external MIDI-to-CV converter ([Brains V1.02 PDF](https://manuals.plus/m/da233b300e89a228051026a0199f11fc1228383d990ab7e5d4a2a2277a5cd1cf_optim.pdf); [V5.0 PDF](https://manuals.plus/m/6948b5393d40bf4cb288ca2646250503dc487084cf0b0e349fef31d02ef4557c_optim.pdf)).

## Architecture

- **One engine at a time.** Select with the BANK + MODEL buttons (or MODEL CV). Three model-dependent tone macros: **HARMONICS**, **TIMBRE**, **MORPH**. [Plaits-inherited] ([Plaits manual](https://pichenettes.github.io/mutable-instruments-documentation/modules/plaits/manual/)).
- **Internal decay envelope normalled to the CV attenuverters.** When a TIMBRE/MORPH/FM CV input is unpatched and TRIG is patched, that parameter's attenuverter sets how much of the internal envelope modulates it. Reset attenuverters to 12 o'clock after unpatching or "the envelope takes over." [Plaits-inherited] ([Brains manual](https://manuals.plus/m/da233b300e89a228051026a0199f11fc1228383d990ab7e5d4a2a2277a5cd1cf_optim.pdf); [Plaits manual](https://pichenettes.github.io/mutable-instruments-documentation/modules/plaits/manual/)).
- **Internal low-pass gate (LPG).** LEVEL opens it; TRIG strikes it. On drum/physical-model engines the LPG is bypassed, TRIG triggers synthesis directly, and LEVEL becomes an **accent** control. [Plaits-inherited] ([Plaits manual](https://pichenettes.github.io/mutable-instruments-documentation/modules/plaits/manual/)).
- **AUX = sidekick output.** OUT 2 carries "a variant, sidekick, or by-product of the main signal" — not a copy (except on a few engines, noted below). Pan OUT/AUX hard L/R for instant stereo, or crossfade. [Plaits-inherited] ([Plaits manual](https://pichenettes.github.io/mutable-instruments-documentation/modules/plaits/manual/); community: [musicradar](https://www.musicradar.com/reviews/mutable-instruments-plaits)).
- **TRIG samples-and-holds the MODEL CV** — per-note model switching is stable when clocked. [Plaits-inherited] ([Plaits manual](https://pichenettes.github.io/mutable-instruments-documentation/modules/plaits/manual/)).
- **CV input ranges** (Brains V5.0 spec): TIMBRE ±8 V (50k), HARMONICS ±5 V (100k), FREQ ±8 V (50k), MORPH ±8 V (50k), MODEL ±5 V (100k), V/OCT −3 to +7 V (100k), LEVEL 0 to +8 V (50k), TRIG 0 to +8 V (50k). OUT 1 / OUT 2: 3.5 mm TS, DC-coupled, 1k, 6.2 V max. Plaits' published ranges match.

## Hidden Features (button-combos most owners never find)

Plaits has "no menu, no hidden settings, no easter eggs" (Émilie Gillet, MI forum). The "hidden" features are button-combo settings printed on the **last page** of the manual.

- **LPG response (VCFA↔VCA):** hold **BANK** + turn **TIMBRE**. Fully CW = VCA, fully CCW = true low-pass gate. (Plaits: hold *first* model button + TIMBRE — remapped to BANK on Brains.) [Plaits-inherited].
- **LPG ring / decay time:** hold **BANK** + turn **MORPH**; shown by 1–4 yellow LEDs. Because it is an LPG, a lingering tail remains even when decay is shortened. [Plaits-inherited].
- **FREQ-range narrowing (the #1 "Brains too high / clicking" fix):** hold **MODEL** + turn **HARMONICS**. Narrows the coarse FREQ knob from full 8 octaves (all LEDs) down to 14-semitone windows centred on C0…C7 (1 LED = C0 ±7 semitones … 8 = C7). **A clicking sound means it's set to the lowest range; "no real bass" complaints almost always trace to the wrong FREQ range — set it low first.** [Plaits-inherited] ([Plaits manual "Common issues"](https://pichenettes.github.io/mutable-instruments-documentation/modules/plaits/manual/); rediscovered by Brains owners in [Reddit "Behringer Brains help"](https://www.reddit.com/r/synthesizers/comments/1ijizpn/behringer_brains_help/)).
- **Speech-engine word tricks:** with HARMONICS past ~11 o'clock the Speech engine reaches LPC word banks — TRIG utters words, the **FM attenuverter** sets intonation, the **MORPH attenuverter** sets speed. A single random CV + trigger stream turns Brains into a stuttering vocal sequencer. [Plaits-inherited].
- **Drone via untriggered bass-drum:** with nothing patched to TRIG, the analog Bass Drum model produces a continuous tone whose amplitude is still modulated by MORPH — a usable drone/sine source. [Plaits-inherited].
- **Plaits-only modes NOT on Brains:** v1.1 colour-blind mode + LFO range; v1.2 octaves mode + short-double-press model navigation. Part of Plaits 1.2, which Brains never received (different hardware). Community reports Brains owners using inherited *LFO behaviour* in practice, but Behringer never documented it.

## Firmware & How Brains DIVERGES from Plaits

**Plaits lineage (authoritative for shared engines):** v1.0 = 16 models; v1.1 = colour-blind + LFO; **v1.2 (final)** added a second bank of 8 engines (Classic-waves+filter, Phase distortion, 3× six-op FM with DX7-style presets, Wave terrain, String machine, Chord/arpeggio) plus an online editor for DX7 SysEx / wavetable / wave-terrain ([Plaits firmware page](https://pichenettes.github.io/mutable-instruments-documentation/modules/plaits/firmware/)).

**Brains lineage:**
- **Original (2021):** 20 engines = **16 Plaits models + Behringer's Supersaw, FM Drum, Cowbell, Toms**; OLED scope; USB ([V1.02 PDF](https://manuals.plus/m/da233b300e89a228051026a0199f11fc1228383d990ab7e5d4a2a2277a5cd1cf_optim.pdf)).
- **"Reloaded" (March 2023):** free update adding 5 yellow-bank modes — **BX7** (DX7-compatible FM, 32 patches, SysEx-loadable), **Bassline** (TD-3/TB-303), **Wave Generator** (bitcrush/sample-rate), **Vox** (vocal/formant morphing), **Audio Scope** (OLED oscilloscope, signal in via V/OCT). Screen now shows the model name ([Synthtopia](https://www.synthtopia.com/content/2023/03/02/behringer-brains-reloaded-adds-5-new-modes/); [MusicTech](https://musictech.com/news/gear/behringer-brains-reloaded/); [V5.0 PDF](https://manuals.plus/m/6948b5393d40bf4cb288ca2646250503dc487084cf0b0e349fef31d02ef4557c_optim.pdf)).
- **Latest (manual V5.0, 2024):** "24 Synthesis Engines, 96 kHz, OLED Oscilloscope."

**Critical divergences:**
1. **Different engine set.** Brains did NOT get Plaits' 1.2 bank (that code wasn't open-source at release); Behringer wrote its own BX7/Bassline/Wave Generator/Vox instead. BX7's two extra params (fixed LFO→pitch as vibrato, fixed LFO→level as tremolo) differ from MI's index/time-travel approach.
2. **Hardware.** 16 HP vs Plaits' 12 HP; more current; more powerful CPU/flash; **96 kHz output** (Plaits is 48 kHz); three LED banks vs Plaits' two.
3. **Firmware delivery.** Brains updates via **USB + SynthTribe app**; Plaits via audio injection into a CV input. **Brains CANNOT run stock Plaits firmware** — different hardware, 96 kHz, proprietary engines ([ModWiggler/Facebook quote](https://www.modwiggler.com/forum/viewtopic.php?p=3778078)).
4. **Scope.** Shows the internally generated signal (external audio only in dedicated Audio Scope mode); SoS found it "sluggish" when sequencing/triggering.
5. **License/attribution.** Plaits code is MIT-licensed; Behringer added its own engines rather than releasing the new modes as open source. Legal-but-controversial clone.

## THE ENGINE ATLAS

For every shared engine the macro behaviour is **[Plaits-inherited]** ([Plaits manual](https://pichenettes.github.io/mutable-instruments-documentation/modules/plaits/manual/)) and corroborated by the Brains "Waveform Parameters" table ([Brains V1.02/V5.0 PDFs](https://manuals.plus/m/da233b300e89a228051026a0199f11fc1228383d990ab7e5d4a2a2277a5cd1cf_optim.pdf)). Behringer-added engines are **[Behringer-specific]**.

### Synth / pitched (red bank)

1. **Virtual Analog** [Plaits-inherited] — two detuned classic waves. HARMONICS: detuning between the two. TIMBRE: variable square (narrow pulse → full square → hardsync formants). MORPH: variable saw (triangle → wide-notch saw, Braids' CSAW). AUX: sum of two hardsync'd waveforms. *Trick: a narrow pulse or wide notch silences one oscillator — turns the engine into a focused square/saw voice.*
2. **Waveshaping** [Plaits-inherited] — asymmetric triangle → waveshaper + wavefolder. HARMONICS: waveshaper waveform. TIMBRE: wavefolder amount. MORPH: asymmetry. AUX: alternate wavefolder curve.
3. **FM (2-operator)** [Plaits-inherited] — two sines modulating each other's phase. HARMONICS: frequency ratio. TIMBRE: modulation index. MORPH: feedback path (op2 self-feedback CW = rough; op1 chaos CCW). AUX: sub-oscillator. *Tip: MORPH fully CCW ≈ Braids WTFM, fully CW ≈ FBFM, noon = gentle classic FM.*
4. **Grains / Formant** [Plaits-inherited] — VOSIM/Pulsar/Grainlet/Casio-CZ formants. HARMONICS: ratio between formant 1 and 2. TIMBRE: formant frequency. MORPH: formant width/shape. AUX: windowed-sine filtered-waveform variant where HARMONICS selects filter type (peaking, LP, BP, HP).
5. **Harmonic / Additive** [Plaits-inherited] — 24 harmonically-related sines. HARMONICS: number of spectral bumps. TIMBRE: index of most prominent harmonic (≈ BP cutoff). MORPH: bump shape (flat/wide → peaked/narrow ≈ resonance). AUX: Hammond-drawbar harmonics only (ratios 1, 2, 3, 4, 6, 8, 10, 12).
6. **Wavetable** [Plaits-inherited] — four banks of 8×8 waves (A additive/drawbar, B formant/waveshaping, C Shruthi/Ambika ROM, D random permutation). HARMONICS: bank select (interpolated forward, non-interpolated reverse). TIMBRE: row (by brightness). MORPH: column. AUX: low-fi (5-bit/bit-reduced) output.
7. **Chords** [Plaits-inherited] — four-note chords via VA or wavetable oscillators. HARMONICS: chord type. TIMBRE: inversion/transposition. MORPH: waveform (first half = string-machine drawbar, second half = 16-wave wavetable). **AUX: root note only** (use as tuned bass layer). Stock chord order: octave, fifth, sus4, m, m7, m9, m11, 6/9, M9, M7, M ([quickstart PDF](https://pichenettes.github.io/mutable-instruments-documentation/modules/plaits/downloads/plaits_quickstart.pdf)).
8. **Speech / Vowel** [Plaits-inherited] — formant filter + SAM + LPC. HARMONICS: crossfades formant → SAM → LPC vowels, then LPC word banks. TIMBRE: "species" (Daleks → chipmunks). MORPH: phoneme/word-segment. AUX: unfiltered vocal-cords signal. (See speech-word tricks under Hidden Features.)
9. **Karplus-Strong** [Plaits-inherited] — plucked-string physical model. HARMONICS: string stiffness. TIMBRE: brightness + dust-noise sensitivity. MORPH: decay time. AUX: copy of OUT 1 on Brains (Behringer's wording is thinner than Mutable's).
10. **Supersaw / Hypersaw** [Behringer-specific] — not in stock Plaits. HARMONICS: harmonic content/detune. TIMBRE: number of waveforms. MORPH: sub-oscillator level. AUX: copy of OUT 1. *Runs especially well **free** (no TRIG) as a thick detuned lead — SoS praised it as "thick and luscious."*

### Noise / percussion (green bank)

11. **Rain (Granular Cloud)** [Plaits-inherited] — 8 enveloped saws. HARMONICS: pitch randomization. TIMBRE: grain density. MORPH: grain duration/overlap. AUX: sine-oscillator variant.
12. **Noise (Filtered)** [Plaits-inherited] — variable-clock white noise → resonant filter; **cutoff tracks FREQ + V/OCT, so it plays melodically**. HARMONICS: filter response LP → BP → HP. TIMBRE: clock frequency. MORPH: resonance. AUX: two-band-pass variant, separation set by HARMONICS.
13. **Dust (Particle Noise)** [Plaits-inherited] — dust through all-pass/band-pass networks. HARMONICS: frequency randomization. TIMBRE: particle density. MORPH: reverberant all-pass (before noon) → resonant BP (after). AUX: raw dust noise. *Strong drone/texture engine — rewards slow modulation.*
14. **Modal Strings (Inharmonic String)** [Plaits-inherited] — mini-Rings resonator. HARMONICS: inharmonicity/material. TIMBRE: excitation brightness/dust density. MORPH: decay (energy absorption). AUX: raw exciter signal. *When TRIG is unpatched, the resonator self-excites with dust noise → self-running drone; can also be excited by external audio.*
15. **Bass Drum (Analog)** [Plaits-inherited] — bridged-T network + shaped pulse. HARMONICS: attack sharpness/overdrive. TIMBRE: brightness. MORPH: decay. AUX: FM-triangle-VCO variant. *Untriggered = continuous drone tone.*
16. **Snare Drum (Analog)** [Plaits-inherited] — bridged-T shell modes + BP noise. HARMONICS: harmonic/noise balance. TIMBRE: mode balance. MORPH: decay. AUX: FM sine-VCO pair + HP noise variant.
17. **Hi-Hat (Analog)** [Plaits-inherited] — square-osc metallic tone + clocked noise → HPF → VCA. HARMONICS: metallic/noise balance. TIMBRE: HPF cutoff. MORPH: decay. AUX: 3 ring-modulating square-osc pairs + clean VCA variant.
18. **FM Drum** [Behringer-specific] — not in stock Plaits. HARMONICS: harmonic content. TIMBRE: low-pass cutoff. MORPH: decay. AUX: alternate FM-drum model. *Range from zappy to squelchy (SoS).*
19. **Cowbell** [Behringer-specific] — not in stock Plaits. HARMONICS: texture. TIMBRE: brightness. MORPH: decay. AUX: alternate cowbell model.
20. **Toms** [Behringer-specific] — not in stock Plaits. HARMONICS: resonance. TIMBRE: tone. MORPH: decay. AUX: alternate tom model. *"Interesting grit when pushed" (SoS).*

### Extended (yellow bank) — all [Behringer-specific], from Brains V5.0 table. **MODEL CV does NOT reach these.**

21. **BX7 (DX7 FM)** — 32 DX7-compatible FM presets. **HARMONICS: preset select · TIMBRE: vibrato · MORPH: tremolo · LEVEL: velocity.** Enveloped voice — needs TRIG to speak. Accepts DX7 SysEx over USB (overwrites the 32 presets).
22. **Bassline (TD-3)** — TB-303/TD-3 emulation. **TIMBRE: cutoff · HARMONICS: resonance + distortion · MORPH: env-mod + decay · LEVEL: accent.** Enveloped voice — needs TRIG.
23. **Wave Generator** — intentionally gritty/digital. **TIMBRE: waveform · HARMONICS: bit crush · MORPH: sample rate · LEVEL: level.**
24. **Vox** — smooth vocal morphing (distinct from the Plaits Speech engine). **TIMBRE: formant shift · HARMONICS: resonance · MORPH: blend vowels · LEVEL: level.**
25. **Audio Scope** [Behringer-specific] — utility, NOT a sound generator. Routes external audio in via **V/OCT** and displays it on the OLED. (This is the "25th slot" that pushes marketing from 24 engines to 25 models.)

## MIDI / CV Control

- **No hardware MIDI.** USB-MIDI is class-compliant but used only for firmware + BX7 DX7 SysEx. Pitch/gate/accent = V/OCT + TRIG + LEVEL via an external MIDI-CV converter.
- **DX7 SysEx into BX7:** send a 32-voice DX7 `.syx` over USB (via SynthTribe, or directly via USB-MIDI from tools like the DX-7II Librarian web app) — overwrites the 32 BX7 presets. Select voices with HARMONICS afterward.
- **BX7/Bassline velocity:** feed a velocity CV into **LEVEL**; a reviewer reserved one sequencer channel for velocity to make BX7 "sound reasonably like a DX7, albeit monophonic."
- **MODEL CV as a drum-kit map:** patch CV to the MODEL jack (±5 V; **red/green engines only**) and assign per-step voltages to engines. The map is non-linear; one measured set: Toms 1.578, Cowbell 1.417, Hi-Hat 1.238, Snare 0.872, Bass 0.677, FM Drum 0.492, Modal 0.301, Dust −0.056, Noise −0.424, Rain −0.626, WT −0.801, Supersaw −1.294, Karplus −1.518, Speech −1.847, Chords −2.086, Additive −2.136, Grains −2.454, FM2 −2.64, Waveshaping −3.014, VA −3.276 ([ModWiggler](https://modwiggler.com/forum/viewtopic.php?t=249968&start=150)). Heavily attenuate MODEL CV before sequencing it.
- **Delay-the-trigger quirk:** model changes are NOT instant. If a model-change CV and a trigger arrive together, the trigger plays the old/in-between model. **Delay the trigger slightly**; bigger model jumps need longer delay ([ModWiggler](https://modwiggler.com/forum/viewtopic.php?t=249968&start=175)). TRIG's sample-and-hold of MODEL CV is what makes clocked kit-switching stable.
- **OUT + AUX as two voices:** treat them as separate modulation-compatible voices, not main+backup. Blend chord OUT with chord AUX root for instant bass; pan hard L/R for stereo; take one side into a filter for parallel voicing.
- **Self-patching / audio-rate FM:** patch OUT/AUX back into FM/TIMBRE/MORPH for chaotic results. CV inputs are band-limited (~DC–2 kHz) so through-zero FM is limited vs analog — for true audio-rate FM, feed audio into V/OCT instead.

## Patch Recipes (exact macro starting points)

Behaviours are Plaits-inherited unless flagged. Knob positions are starting points; the richest exact-settings corpus is [Rochefsky's recipe spreadsheet](https://docs.google.com/spreadsheets/d/1dRfHovtpSsfLHN1WJhJI7sm5KOQZMe6Uwe0KR7WJ87I/edit) (written for Plaits — **port by engine name, not bank colour**, since Plaits and Brains colours differ).

- **Classic synth bass — Virtual Analog (or FM):** triggered; low-mid pitch (set FREQ range low first via MODEL+HARMONICS); HARMONICS ~centre; TIMBRE ~2 o'clock; MORPH ~11 o'clock; internal envelope ~3 LEDs. Exploits the LPG rather than fighting it. (Rochefsky "Classic Synth Bass.")
- **Wind chimes — FM (2-op):** untriggered/drone; mid register; HARMONICS centre; TIMBRE ~9 o'clock; MORPH fully CW. Pairs beautifully with reverb. (Rochefsky "Wind Chimes.")
- **Large inharmonic church bells — Grains/Formant:** triggered; base pitch ~2 o'clock; HARMONICS fully CW; TIMBRE centre; MORPH fully CW. Pushes the formant engine in a bell (not vocal) direction. (Rochefsky.)
- **Harmonic organ — Wavetable:** triggered; low-mid register; TIMBRE fully CW; HARMONICS ~2–3 o'clock; MORPH ~3 o'clock; long LPG ~4 LEDs; OUT or OUT+AUX mixed. (Rochefsky.)
- **Counting one-to-ten / vocal sequencer — Speech:** triggered; low-mid pitch; HARMONICS ~1 o'clock (word banks); TIMBRE centre; MORPH attenuverter = speed, FM attenuverter = intonation; envelope irrelevant. (Rochefsky.)
- **Lush chords / pad — Chords:** HARMONICS selects chord type; TIMBRE = inversion/transposition; MORPH sweeps string-machine → wavetable; crossfade OUT (chord) and AUX (root). Animates best when macros are clocked, not static.
- **Drone / generative — Bass Drum untriggered** (amplitude via MORPH) or **Additive** with slow HARMONICS/MORPH LFOs; random CV → macros; LFO on MODEL for evolving timbres. For drones, *mixing AUX is often the missing sauce.*
- **Drums (full kit from one module):** green-bank percussion (Modal/Bass/Snare/Hi-Hat + Behringer FM Drum/Cowbell/Toms). TRIG triggers synthesis, LEVEL = accent (LPG bypassed). Sequenced kit: drive MODEL CV with per-step voltages (map above) and delay the trigger.
- **Acid bass — Bassline [Behringer]:** TIMBRE=cutoff, HARMONICS=resonance/distortion, MORPH=env-mod/decay, LEVEL=accent; trigger via TRIG; sequence pitch via V/OCT.
- **FM keys — BX7 [Behringer]:** select preset with HARMONICS; add vibrato on TIMBRE, tremolo on MORPH; velocity via LEVEL; needs TRIG.
- **Vocal morph — Vox [Behringer]:** sweep TIMBRE (formant shift) and MORPH (vowel blend) slowly with envelopes/LFOs rather than big jumps.

## Sample / Preset Resources

- **DX7 SysEx into BX7** is the only documented preset-import path: send a DX7 `.syx` over USB (SynthTribe, or direct USB-MIDI). Overwrites the 32 BX7 presets. Dexed is the common tool for making/editing compatible dumps.
- **No user wavetable/sample loading** for the oscillator engines (unlike Plaits 1.2's online editor, which Brains never received). Wave Generator offers built-in waveforms with bit-crush/sample-rate only.
- **Plaits 1.2 online editor** ([pichenettes.github.io/plaits-editor/](https://pichenettes.github.io/plaits-editor/)) — FM-bank/wavetable/wave-terrain editors. **Comparison-only** for Brains (not flashable). Use it to understand "what Plaits can do."
- **SynthTribe** (Behringer, Mac/Windows) handles firmware updates + BX7 SysEx (Windows reported more reliable than Mac).

## Community Resources

- **Plaits manual** (authoritative for shared engines): [manual](https://pichenettes.github.io/mutable-instruments-documentation/modules/plaits/manual/) · [firmware 1.2 notes](https://pichenettes.github.io/mutable-instruments-documentation/modules/plaits/firmware/) · [quickstart](https://pichenettes.github.io/mutable-instruments-documentation/modules/plaits/downloads/plaits_quickstart.pdf) · [source](https://github.com/pichenettes/eurorack).
- **Brains manuals:** [V1.02 PDF](https://manuals.plus/m/da233b300e89a228051026a0199f11fc1228383d990ab7e5d4a2a2277a5cd1cf_optim.pdf) (clearest 20-engine source + I/O ranges) · [V5.0 PDF](https://manuals.plus/m/6948b5393d40bf4cb288ca2646250503dc487084cf0b0e349fef31d02ef4557c_optim.pdf) (yellow bank, DX7 SysEx note, hidden combos — but a corrupted calibration page, see below).
- **Rochefsky:** [Plaits resource hub](https://www.rochefsky.com/learnings/plaits) (cheat-sheet, infographic) + [100+ recipe spreadsheet](https://docs.google.com/spreadsheets/d/1dRfHovtpSsfLHN1WJhJI7sm5KOQZMe6Uwe0KR7WJ87I/edit).
- **ModWiggler:** main [Behringer Brains thread](https://modwiggler.com/forum/viewtopic.php?t=249968) (tips, model-CV map, calibration, FW issues); [Factory Reset?](https://modwiggler.com/forum/viewtopic.php?t=271486) (bass/FREQ); huge [Plaits thread](https://modwiggler.com/forum/viewtopic.php?t=197383).
- **Reddit:** [Behringer Brains help](https://www.reddit.com/r/synthesizers/comments/1ijizpn/behringer_brains_help/) (real-world reliance on Plaits docs for hidden functions).
- **Reviews:** [Sound On Sound](https://www.soundonsound.com/reviews/behringer-brains) (new engines, 96 kHz, scope critique); [MusicRadar Plaits](https://www.musicradar.com/reviews/mutable-instruments-plaits) (AUX/chord/drone tips).

## Contradictions to Flag

- **Engine count: 20 vs 24 vs 25.** Behringer's own page carries all three. Honest reading: 20 at launch (16 Plaits + 4 Behringer) + 4 extended (BX7/Bassline/Wave Generator/Vox) = **24 synthesis engines**; counting Audio Scope (a utility, not a generator) yields **25 model slots**.
- **"15 Plaits engines" vs 16.** Early Behringer/retailer marketing said "20 oscillators including **15** Mutable Instruments Plaits engines" ([ModularGrid](https://modulargrid.net/e/forum/posts/index/10133)), but the V1.02 engine tables line up with **all 16** original Plaits models + 4 Behringer extras. Treat 16 as correct.
- **Corrupted V5.0 calibration section.** One mirrored V5.0 manual contains a calibration page referring to **PAGE, SAVE, a joystick, DATA control, and a mix output** — none of which exist on Brains. This is OCR/mirror cross-contamination from another product; ignore it. Real Brains calibration uses BANK+MODEL with 1 V / 3 V references (verify A2=110, A3=220, A4=440, A5=880 Hz).
- **V/Oct calibration drift.** Owners report Brains tracking off near 4 V despite "factory calibrated" claims (one measured "out ~10 cent at 4.0018 V") — but also a measurement red herring (a Fluke showed 4.2 V where a cheap DVM showed 4.00 V). Calibrate with a trusted DVM/tuner.
- **AUX wording for Behringer drum engines** ("alternate FM drum/cowbell/tom model") comes from a Behringer fragment and could not be re-confirmed verbatim across mirrors; the Plaits-derived AUX behaviours ARE confirmed. Sweetwater's "neural network" copy is marketing, not literal.
