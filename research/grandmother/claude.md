# The Definitive Moog Grandmother Mastery Reference (Standard & Dark)

> An exhaustive learning-and-mastering guide built in two layers: **(1) the official manual & firmware** and **(2) community/internet gold** (forums, Reddit, YouTube, patchbooks, blogs). Every non-trivial claim is cited inline. Contradictions between sources are flagged explicitly.

---

## TL;DR
- The Moog Grandmother is a 100% analog, semi-modular monosynth with **41 patch points (21 inputs, 16 outputs, plus a 4-jack parallel mult)**, a **−24 dB/octave (4-pole) Moog ladder filter** (NOT 12 dB — that is a common error), two Voyager-derived oscillators with hard sync, a wide-range LFO (0.07 Hz–1.3 kHz) that doubles as a third oscillator, a real 6" spring reverb tank (based on the vintage Moog 905), and an arp/256-step sequencer. The **Grandmother Dark is electronically identical** to the standard model — only the panel color differs. ([Moog manual](https://api.moogmusic.com/sites/default/files/2018-09/Grandmother_Manual.pdf), [Sound on Sound](https://www.soundonsound.com/reviews/moog-grandmother))
- The real depth is unlocked through patching and hidden global settings: the unit is secretly a **3-oscillator, 2–3 envelope, paraphonic-capable** instrument, with undocumented-on-panel features (Multi-Trig, Legato/Gated Glide, oscillator recalibration, KB-OUT voltage range, Osc 2 freq-knob range) accessed via keyboard combos, MIDI CC, and SysEx. ([loopop video](https://www.youtube.com/watch?v=VHwdmO2Wf_Q), [Global Settings PDF](https://api.moogmusic.com/sites/default/files/2021-06/Grandmother_Global_Settings.pdf))
- Firmware has materially changed behavior across revisions (clock PPQN defaults, MIDI Clock Out default, Multi-Trig in v1.1.3, sync engine). Owners should know which firmware they run; the latest public branch is the v1.1.x/v1.2.x line shared with Matriarch. ([Firmware update notes, ManualsLib](https://www.manualslib.com/manual/2045112/Moog-Grandmother.html))

---

## Key Findings

1. **Filter slope correction.** The common "12 dB" figure is wrong: every primary source confirms a **−24 dB/octave 4-pole transistor ladder low-pass filter** modeled on the vintage Moog 904A, plus a separate static **−6 dB/octave 1-pole high-pass** in Utilities. The VCA is based on the Moog 902 and the reverb on the Moog 905. ([Sound on Sound](https://www.soundonsound.com/reviews/moog-grandmother), [MusicRadar](https://www.musicradar.com/reviews/moog-grandmother), [Perfect Circuit](https://www.perfectcircuit.com/signal/moog-filters))
2. **Standard vs Dark.** Functionally identical; same firmware, circuits, patchbay. Dark launched at **$999/£1,049** vs the original colored model's **$899** (2019) launch price. ([Moog Dark Series announcement](https://www.moogmusic.com/news/introducing-dark-series-matriarch-grandmother), [MusicRadar](https://www.musicradar.com/news/moog-announces-dark-series-grandmother-and-matriarch))
3. **The patchbay is fully decoded below** with exact normalled connections, impedances, and voltage ranges from the manual's Patch Point Index. ([Moog manual](https://api.moogmusic.com/sites/default/files/2018-09/Grandmother_Manual.pdf))
4. **Community gold:** self-generating "Krell"/auto-drone patches, envelope-follower patches, external-audio filtering/reverb processing, feedback patches, and tight Mother-32/DFAM/Subharmonicon integration (sources throughout §4–6).

---

## 1. Hidden features & advanced settings most owners never discover

**Three oscillators, not two.** The LFO is full-range (0.07 Hz–1.3 kHz) and 1V/oct-trackable. Patch **KB OUT → RATE IN** (Modulation) and the LFO tracks the keyboard like a third oscillator; its WAVE OUT can be sent into a Mixer input (OSC 1/2/NOISE IN). The self-oscillating filter is effectively a fourth (sine) oscillator: max RESONANCE, CUTOFF ~10 o'clock, KBD TRACK to 1:1. ([loopop "Unlocking Grandmother's Secrets"](https://www.youtube.com/watch?v=VHwdmO2Wf_Q), [Sound on Sound](https://www.soundonsound.com/reviews/moog-grandmother))

**Two or three envelopes.** Beyond the panel ADSR, the **S/H OUT**, the **accent envelope on KB VEL OUT** (during sequencing), and the **modulation oscillator** can serve as additional contour/trigger sources, enabling paraphonic-style and multi-envelope patches. ([loopop](https://www.youtube.com/watch?v=VHwdmO2Wf_Q))

**Hidden/secret control combos** ([Moog manual](https://api.moogmusic.com/sites/default/files/2018-09/Grandmother_Manual.pdf)):
- **Legato Glide:** hold **HOLD** while turning GLIDE right = ON, left = OFF (default Off). Great for acid lines.
- **Gated Glide** (added in firmware): glide only progresses while a note is held.
- **Fine LFO tuning:** hold **SHIFT** while turning MOD RATE for fine control (useful when LFO is an audio oscillator).
- **Octave transpose:** SHIFT + ◀KB / KB▶.
- **Stuck-note panic:** hold all three Left-Hand-Controller buttons ~1 second to clear the note stack and send MIDI All Notes Off.
- **Global Settings entry:** hold **HOLD + SYNC** until SYNC blinks; the blink count indicates the selected setting. Double-tap a white key to update and exit.
- **Oscillator recalibration:** enter Global Edit (hold SHIFT + HARD SYNC ~1 s), then hold PLAY+HOLD+TAP and press the lowest key. Takes a while — never right before a gig. ([Moog support](https://moogmusic-help.freshdesk.com/support/solutions/articles/35000162478))

**Advanced Global Settings** (the "for info visit moogmusic.com/grandmother" layer) — later firmware exposed a deeper bank accessed by holding a **group-select key (F#2)** plus a parameter key ([Grandmother Global Settings PDF](https://api.moogmusic.com/sites/default/files/2021-06/Grandmother_Global_Settings.pdf)):
- **Osc 2 Frequency Knob Range** (0–18 semitones; default 7) — widen Osc 2 detune dramatically.
- **Velocity CV Output range** (−5/+5 V or 0/+5 V).
- **Glide Type:** Linear Constant Rate / Linear Constant Time / Exponential (default LCR).
- **Clock Output Mode:** only when arp/seq running, or always.
- **Multi-Trig** (also MIDI **CC 95**).
- **MIDI Out filters** (keys, wheels, panel knobs independently).
- **Reset Global Settings** and **Show Firmware Version** functions.
- **KB OUT range** 0–10 V option (useful to drive Eurorack pitch over a wider span).

A free **web-based Global Settings Editor** exposes all 47 settings via Web MIDI/SysEx (requires v1.1.3): [marcora.github.io/grandmother-editor](https://marcora.github.io/grandmother-editor/).

---

## 2. Firmware notes & version gems

Identify your version: hold the highest black key (A#2) + next-to-lowest black key (G#0); count PLAY/HOLD/TAP blinks. ([Moog support](https://moogmusic-help.freshdesk.com/support/solutions/articles/35000162478))

- **v1.0.2 / v1.0.6:** v1.0.6 added Global Settings parameters and bug fixes; fixed a lockup in external Step-Advance while receiving MIDI clock (Step-Advance now overrides MIDI clock); Arp HOLD notes persist when PLAY toggles; sync/timing improvements; fixed oscillator pitches not updating to MIDI notes. ([ADSR](https://www.adsrsounds.com/news/moog-releases-grandmother-v1-0-6-firmware-update/), [Moog news](https://www.moogmusic.com/news))
- **v1.1.0:** Major. Added **Multi-Trig (CC 95)**; Arp/Seq PLAY no longer *outputs* CC 73 (still responds); **changed MIDI Clock Output default to "Off"**; introduced **SysEx editing of global parameters**; added MIDI Out filters; Arp/Seq Gate Length via **CC 106** (64 = 50%). ([Firmware notes, ManualsLib](https://www.manualslib.com/manual/2045112/Moog-Grandmother.html), [p.2](https://www.manualslib.com/manual/2045112/Moog-Grandmother.html?page=2))
- **v1.1.x sync engine:** Analog Clock in/out and MIDI Clock kept tightly in phase; **HOLD acts as a sustain pedal when arp/seq is not running**; **changed default Clock Input/Output PPQN from 2 PPQN (8th) to 4 PPQN (16th)** — a gotcha when syncing to older gear/old patches. ([Matriarch firmware notes, ManualsLib](https://www.manualslib.com/manual/2040914/Moog-Matriarch.html) — shared engine)
- **v1.1.2:** sync-engine improvements, adaptive tempo filtering, **max clock output raised to over 500 Hz**, bug fixes. ([Elektronauts thread](https://www.elektronauts.com/t/moog-grandmother/56068?page=24))
- **v1.1.3:** **Multi-Trig** Global Setting introduced — it determines whether envelopes retrigger on each new key vs only after all keys are released; default Off. ([Higher Hz](https://higherhz.com/moog-grandmother-review/)) NOTE: at least one forum user reported Multi-Trig not retriggering as expected after updating — verify on your unit. ([Moog forum](https://forum.moogmusic.com/viewtopic.php?t=34480))

**Contradiction/known-issue flags:** Some forum users criticize "buggy firmware" and note the printed manual doesn't always match operation; PPQN defaults and Multi-Trig behavior are the usual culprits. Treat the manual's stated "2 PPQN default" as superseded by the "4 PPQN" default in current firmware. ([MOD WIGGLER](https://modwiggler.com/forum/viewtopic.php?t=201171))

---

## 3. The patchbay decoded — every jack, what it normals to, and how to break it

All patch points are 3.5 mm. Inserting a cable into an **input** breaks (overrides) the normalled internal signal to that point. Specs from the manual's Patch Point Index. ([Moog manual](https://api.moogmusic.com/sites/default/files/2018-09/Grandmother_Manual.pdf))

### ARP/SEQ module
| Jack | Dir | Behavior / normal | Range, Z |
|---|---|---|---|
| **GATE OUT** | out | +8 V gate per new note (keyboard/arp/seq) | 5 Ω |
| **KB OUT** | out | pitch CV, 1V/oct | −5/+5 V (or 0–10 V via Global), 5 Ω |
| **KB VEL OUT** | out | velocity CV; during seq playback outputs an **accent envelope** on accented steps | 0/+5 V, 5 Ω |

### Modulation module
| Jack | Dir | Behavior / normal | Range, Z |
|---|---|---|---|
| **RATE IN** | in | added to RATE knob; 1V/oct so LFO can be "played" | −5/+5 V, 100 kΩ |
| **SYNC IN** | in | rising edge resets LFO to start of cycle | 0/+5 V, 100 kΩ |
| **WAVE OUT** | out | selected LFO waveform; DC-coupled | 10 Vpp, 5 Ω |
| **S/H OUT** | out | sample-and-hold of noise, sampled each LFO cycle start. **No internal routing — must be patched.** | −5/+5 V, 2 kΩ |

### Oscillators
| Jack | Dir | Behavior / normal | Range, Z |
|---|---|---|---|
| **OSC 1 / OSC 2 WAVE OUT** | out | osc waveform; AC-coupled | 10 Vpp, 2 kΩ |
| **OSC 1 / OSC 2 PITCH IN** | in | summed with internal pitch CV | −5/+5 V, 90 kΩ |
| **OSC 1 PWM IN** | in | pulse-width mod | 0/+5 V, 100 kΩ |
| **OSC 2 LIN FM IN** | in | linear FM into Osc 2 | −5/+5 V, 90 kΩ |

### Mixer (each input breaks the normalled internal source). DC-coupled, based on Moog CP3; channel knobs past ~1 o'clock impart gentle-to-overdriven distortion.
| Jack | Dir | Behavior / normal | Range, Z |
|---|---|---|---|
| **OSC 1 / OSC 2 / NOISE IN** | in | patching replaces the internal source; channel knob then controls patched signal | −5/+5 V, 100 kΩ |
| **OUTPUT** | out | sum of channel knobs | 2 kΩ |

### Utilities
- **MULT:** four parallel, unbuffered jacks. Distributes one signal to up to three places, OR merges up to two **AC-coupled audio** signals (OSC 1/2 WAVE OUT, FILTER OUT, HP FILTER OUT, REVERB/WET OUT, EURORACK OUT). Don't merge DC/control signals.
- **HIGH PASS FILTER:** **INPUT** 110 kΩ, −5/+5 V; **OUTPUT** 2 kΩ, 10 Vpp AC-coupled. Static −6 dB/oct; must be patched in.
- **ATTENUATOR:** **INPUT** bipolar/inverting 100 kΩ, −8/+8 V; **OUTPUT** 5 Ω, 12 o'clock = zero. **Key trick:** input is normalled to a positive voltage, so with nothing patched in the OUTPUT is a **DC source of −/+8 V** — a usable offset/CV generator.

### Filter (Low Pass)
| Jack | Dir | Behavior / normal | Range, Z |
|---|---|---|---|
| **FILTER INPUT** | in | breaks Mixer Output → filter normal (don't feed line/inst level here) | −5/+5 V, 100 kΩ |
| **FILTER OUTPUT** | out | AC-coupled | 10 Vpp, 2 kΩ |
| **ENV AMT IN** | in | summed with ENVELOPE AMT knob | −8/+8 V DC, 110 kΩ |
| **CUTOFF IN** | in | summed with KBD track/env/cutoff | −5/+5 V, 100 kΩ |

### Envelope
| Jack | Dir | Behavior / normal | Range, Z |
|---|---|---|---|
| **TRIGGER IN** | in | any signal >1.2 V triggers; normalled to keyboard/arp/seq gate | 0/+8 V DC, 100 kΩ |
| **+ENV / −ENV OUT** | out | normal & inverted ADSR; DC-coupled | 10 Vpp, 5 Ω |

### Output (VCA modes: **ENV** / **KB RLS** / **DRONE**)
| Jack | Dir | Behavior / normal | Range, Z |
|---|---|---|---|
| **VCA AMT IN** | in | in DRONE, patched CV alone sets volume; in ENV/KB RLS it's summed (tremolo) | 100 kΩ |
| **VCA IN** | in | audio into VCA; breaks Filter→VCA normal | −5/+5 V, 100 kΩ |
| **REVERB IN** | in | audio into spring reverb; breaks VCA→reverb normal | −5/+5 V, 100 kΩ |

### Rear panel
- **CLOCK IN** (clock or step-advance via Global), 100 kΩ, −5/+5 V • **ON/OFF IN** (>2.5 V plays) • **RESET IN** (>2.5 V resets), 0/+5 V • **CLOCK OUT** 0/+5 V at tempo/PPQN.
- **EURORACK OUT:** buffered main out at Eurorack level, −5/+5 V (peaks −8/+8), 2 kΩ; **not affected by VOLUME knob**; post-reverb, pre-volume.
- **REVERB OUT:** always 100% wet, post-tank; 1 kΩ, 10 Vpp AC-coupled.
- **INSTRUMENT IN** (1/4"): hi-Z preamp brings guitar level up to ~10 Vpp into the mixer (post-mixer, pre-filter); no gain knob — clips easily (musically useful).
- **MAIN OUT/HEADPHONE** (1/4" TRS jack but mono): **use a TS cable** — a TRS/balanced cable causes phase cancellation and a weak signal (near-universal owner gotcha). ([Gearspace](https://gearspace.com/board/electronic-music-instruments-and-electronic-music-production/1396331-moog-grandmother-balanced-output.html))
- **MIDI In/Out/Thru** (5-pin DIN) + **USB MIDI**.

---

## 4. Patch recipes that exploit the semi-modular architecture

**(a) Three-oscillator / LFO-as-VCO.** KB OUT → RATE IN (LFO tracks keyboard). Then MOD WAVE OUT → a Mixer IN (e.g., NOISE IN). For chords/paraphony, detune Osc 2 (FREQUENCY full CW ≈ a fifth/seventh). ([loopop](https://www.youtube.com/watch?v=VHwdmO2Wf_Q))

**(b) Self-generating "Krell"/auto-drone (community staple).** VCA → DRONE. Patch **S/H OUT** into the mult; distribute to **CUTOFF IN**, **OSC pitch**, and **TRIGGER IN** so the patch self-triggers; MOD RATE low. Variation: **GATE OUT → MOD SYNC IN** so each step resets S/H, and S/H OUT → OSC 2 PITCH IN. ([matrixsynth](https://www.matrixsynth.com/2019/03/moog-grandmother-self-generating-patch.html), [Moog forum](https://forum.moogmusic.com/viewtopic.php?t=31407))

**(c) Step-through-S/H with the keyboard.** GATE OUT → SYNC IN, MOD RATE to minimum: each key press clocks a new S/H value. ([Moog manual](https://api.moogmusic.com/sites/default/files/2018-09/Grandmother_Manual.pdf))

**(d) Envelope follower / external-audio dynamics.** VCA → DRONE; oscillators down in mixer; Y-split an external source into **Instrument In** AND **Envelope TRIGGER IN**; CUTOFF and RESONANCE ~halfway, all envelope stages at zero — incoming amplitude drives the filter. Switch VCA to KB RLS to also shape volume. ([Gearspace](https://gearspace.com/board/electronic-music-instruments-and-electronic-music-production/1234086-moog-grandmother-envelope-follower.html))

**(e) Two independent filters.** Series: MIXER OUTPUT → HP INPUT → HP OUTPUT → FILTER (LP) INPUT. Parallel per-oscillator: Osc 2 WAVE OUT → HP IN; HP OUT → one MULT jack; LP FILTER OUT → another MULT jack; third MULT jack → VCA IN. ([Moog manual](https://api.moogmusic.com/sites/default/files/2018-09/Grandmother_Manual.pdf))

**(f) Bell/gong FM.** Both oscillators triangle; Osc 2 an octave lower (carrier below modulator); Osc 1 mixer off, Osc 2 at 50%; **Osc 1 WAVE OUT → Attenuator → Osc 2 LIN FM IN**; tune Osc 2 to ~4th/5th; fast attack, slow-ish decay/release, no sustain; reverb 50%. ([MOD WIGGLER](https://modwiggler.com/forum/viewtopic.php?t=221454))

**(g) Reverb-out as a modulation source.** REVERB OUT → HP FILTER → high-passed reverb to **linear-FM Osc 2**; adjust "metal" via HP cutoff (high-passing an FM source approximates phase modulation). ([Gearspace](https://gearspace.com/board/electronic-music-instruments-and-electronic-music-production/1215229-moog-grandmother-patch-ideas.html))

**(h) AM/tremolo.** MOD WAVE OUT → VCA AMT IN. ([Moog manual](https://api.moogmusic.com/sites/default/files/2018-09/Grandmother_Manual.pdf))

**(i) Filter as sine voice / theremin-style.** Max resonance, KBD TRACK 1:1 to play the self-oscillating filter in tune; or noise-only + self-oscillating filter for eerie tones. ([Moog manual](https://api.moogmusic.com/sites/default/files/2018-09/Grandmother_Manual.pdf))

**(j) Mixer-distortion feedback.** Run the mixer/filter output back into **NOISE IN** to overdrive the CP3-style mixer; combine with LFO-driven PWM. ([Lisa Bella Donna Patchbook](https://api.moogmusic.com/sites/default/files/2019-11/Grandmother_Patchbook_LBD_1_0.pdf))

**(k) Velocity/accent → cutoff.** KB VEL OUT → CUTOFF IN so sequencer accents (or velocity) open the filter (there's no internal velocity routing). ([Moog manual](https://api.moogmusic.com/sites/default/files/2018-09/Grandmother_Manual.pdf))

**(l) Lisa Bella Donna "Exploration Patchbook" — verbatim performance notes** (routings are graphical in the PDF) ([LBD Patchbook PDF](https://api.moogmusic.com/sites/default/files/2019-11/Grandmother_Patchbook_LBD_1_0.pdf)):
- *"SET GLIDE AT 11 O'CLOCK. SWEEP HIGH PASS FILTER FOR PHASE CHARACTER. SOLO AWAY, RAISE MOD WHEEL."* ("PHASER")
- *"CREATE SEQUENCE • TUNE MOD RATE TO FIFTH. SWEEP HIGH PASS FILTER FOR FUZZ SPLATTERS. SWEEP ATTENUATOR TO SHAPE OSC 1. USE MOD WHEEL FOR FIXED FILTER."* ("TUNE TO FIFTH")
- *"TURN OFF MASTER VOLUME WHILE PATCHING. FADE IN MASTER VOLUME AND PLAY AT HIGH VOLUME. SPLIT WITH SLAPBACK DELAY. LIE BETWEEN SPEAKERS ON THE FLOOR, LISTEN."*
- *"TUNE ATTENUATOR TO DESIRED PERFECT INTERVAL. USE MOD WHEEL FOR FILTER FM. PLAY FREELY • HIT/HOLD ARP IN UPPER FOURTHS • SWIRL HIGH PASS UP 100%."*
- *"CREATE SEQUENCE • PLAY/HOLD MODE. USE MOD WHEEL FOR TRIPLET FLOURISHES. INCREASE RESONANCE FOR LASER TRACERS. SWITCH TO RANDOM MODE FOR FINALE WHILE INCREASING HIGH PASS FILTER."*

---

## 5. Every patch-sheet / patchbook / preset resource available

- **Official Moog manual patch examples & blank preset sheets** — at end of the [manual](https://api.moogmusic.com/sites/default/files/2018-09/Grandmother_Manual.pdf).
- **Lisa Bella Donna "Exploration Patchbook"** — official 12-patch PDF: [api.moogmusic.com](https://api.moogmusic.com/sites/default/files/2019-11/Grandmother_Patchbook_LBD_1_0.pdf).
- **Moog Dark-Series free patch sets** — 16 new Grandmother patches at the Dark launch; more added later. ([Moog news](https://www.moogmusic.com/news/introducing-dark-series-matriarch-grandmother))
- **presetpatch.com** — free community patch sheets: [presetpatch.com/synth/moog-grandmother](https://presetpatch.com/synth/moog-grandmother.aspx).
- **patch-library.net** — interactive semi-modular patch sheets: [patch-library.net](https://patch-library.net/).
- **Anton Anru** commercial PDF sets ("Analog Classics" 50, "Explorer" 50, 145-patch bundle): [antonanru.com](https://antonanru.com/) / [lfo.store](https://lfo.store/).
- **grandmother-patches.vercel.app** — community patch search/editor aggregating Dark + LBD patchbooks, SynthLib, presetpatch: [grandmother-patches.vercel.app](https://grandmother-patches.vercel.app/).
- **SunnySynths Grandmother patch saver/loader** (PC/Mac, VST/AU): [sunnysynths.com](https://sunnysynths.com/) (note: Grandmother has no SysEx patch dump — settings are stored on the computer only).
- **marcora.github.io/grandmother-editor** — free web Global Settings editor (SysEx): [link](https://marcora.github.io/grandmother-editor/).

---

## 6. Integration ecosystem (Eurorack, Mother-32/DFAM/Subharmonicon, DAW, CV)

- **As a keyboard/CV front-end:** set **Local OFF** so the keyboard/arp drive only KB OUT, GATE OUT, KB VEL OUT and MIDI — Grandmother becomes a controller for an external voice without sounding its own engine. ([Moog manual](https://api.moogmusic.com/sites/default/files/2018-09/Grandmother_Manual.pdf))
- **Clocking:** CLOCK OUT (0–+5 V) and CLOCK IN with selectable PPQN (default now 4 PPQN/16th); ON/OFF IN and RESET IN for transport. Mother-32's ASSIGN out (set to clock) → DFAM ADV/CLOCK is the canonical M32↔DFAM sync; Grandmother can be MIDI/analog clock master or slave. Max clock out >500 Hz after v1.1.2. ([djjondent](https://djjondent.blogspot.com/2019/08/moog-mother-32-dfam-sync.html))
- **Audio levels:** EURORACK OUT gives modular-level audio independent of the volume knob; Mixer channel inputs accept 10 Vpp Eurorack audio to replace internal sources. Subharmonicon patch: Grandmother Attenuator out → Subharmonicon CUTOFF IN, with Subharmonicon clocking the Grandmother LFO via SYNC IN/RATE IN. ([Moog livestream patch tips](https://www.youtube.com/watch?v=Fmpc2W3jJ1g))
- **As an external processor / filter bank / spring-reverb send:** feed audio via Instrument In (post-mixer, pre-filter) or directly to FILTER INPUT / VCA IN / REVERB IN. For a usable **wet/dry reverb send**, patch source → VCA IN, set VCA to DRONE so the front-panel MIX knob works (rear REVERB OUT is always 100% wet). To process one oscillator through a pedal: WAVE OUT → Attenuator → pedal → back into a Mixer IN. ([Gearspace pedal thread](https://gearspace.com/board/electronic-music-instruments-and-electronic-music-production/1361931-moog-grandmother-effects-loop.html))
- **DAW/MIDI:** full MIDI CC map (Mod Wheel CC1, Mod Rate CC3, Glide CC5, Arp/Seq Rate CC8, Osc2 Freq CC12, Glide On/Off CC65, Arp Hold CC69, Arp Play CC73, Osc octaves CC74/75, Sync CC77, Glide type CC85, Clock division CC90, Arp mode CC91, pattern CC92, **Multi-Trig CC95**, **Gate Length CC106**; 14-bit available on CC1–31 via +32 LSB). USB-MIDI for DAW control and firmware updates. ([Firmware notes, ManualsLib](https://www.manualslib.com/manual/2045112/Moog-Grandmother.html))
- **Book resource:** *Patch & Tweak with Moog* (Bjooks) — cross-Moog patch techniques; includes a Grandmother tip to **mult the filter output to keep muddy bass out of the spring reverb**. ([Bjooks](https://bjooks.com/products/patch-tweak-with-moog))

---

## 7. Community resources & forums

- **forum.moogmusic.com** — official forum; threads on patch libraries, the patch mapper/saver ([t=31407](https://forum.moogmusic.com/viewtopic.php?t=31407)), Multi-Trig issues ([t=34480](https://forum.moogmusic.com/viewtopic.php?t=34480)), calibration ([t=31582](https://forum.moogmusic.com/viewtopic.php?t=31582)).
- **MOD WIGGLER** — long-running Grandmother megathread; tuning, reverb-tank rattle, VCA/oscillator bleed, FM recipes: [t=201171](https://modwiggler.com/forum/viewtopic.php?t=201171), [t=221454](https://modwiggler.com/forum/viewtopic.php?t=221454).
- **Gearspace** — patching, envelope-follower, balanced-output, pedal-integration threads (linked in §4/§6).
- **Reddit** — [r/synthesizers](https://www.reddit.com/r/synthesizers/) and [r/moog](https://www.reddit.com/r/moog/) for general tips/patches.
- **Elektronauts** — [Grandmother thread](https://www.elektronauts.com/t/moog-grandmother/56068) (firmware chatter).
- **YouTube:** loopop ["Unlocking Grandmother's Secrets"](https://www.youtube.com/watch?v=VHwdmO2Wf_Q) (definitive tips); Moog's ["Grandmother, Mother-32 & DFAM: Patch Tricks & Tips"](https://www.youtube.com/watch?v=Fmpc2W3jJ1g) livestream; Lisa Bella Donna Dark-series jams; BoBeats reviews.
- **Blogs:** [Sound on Sound](https://www.soundonsound.com/reviews/moog-grandmother) (deep technical — Voyager oscillators, 904A filter/902 VCA/905 reverb, measured ~16–18% pulse duty vs manual's 25%, reverb mix-knob limitation); [MusicRadar](https://www.musicradar.com/reviews/moog-grandmother); [Attack Magazine](https://www.attackmagazine.com/reviews/hardware/moog-grandmother/); [Synthtopia](https://www.synthtopia.com/); [Perfect Circuit](https://www.perfectcircuit.com/signal/moog-filters); [djjondent](https://djjondent.blogspot.com/).

---

## Tuning, calibration & spring-reverb quirks
- Allow **10–15 min warm-up** (up to 25 if cold); oscillator drift until then is normal. ([Sound on Sound](https://www.soundonsound.com/reviews/moog-grandmother))
- **Oscillator recalibration** (above) fixes drift and the common complaint that Osc 2's FREQUENCY knob doesn't quite hit a clean perfect 5th at full CW. ([Moog support](https://moogmusic-help.freshdesk.com/support/solutions/articles/35000162478), [MOD WIGGLER](https://modwiggler.com/forum/viewtopic.php?t=201171))
- **Pot/wheel calibration** via three SysEx files (min/max/center) cures mod-wheel acting at minimum and asymmetric Osc-2 detune.
- **Spring reverb:** per Sound on Sound, the reverb is "largely immune to impacts — you have to give the Grandmother a decent punch to get it to go 'boing'," and it's susceptible to EMI (radio/cell signals) — both normal. MIX goes fully dry→fully wet (no independent wet-add — shares the vintage 905 limitation). Some units shipped with a **loose reverb-tank screw** (rattle) — a known QA issue. ([Sound on Sound](https://www.soundonsound.com/reviews/moog-grandmother), [MOD WIGGLER](https://modwiggler.com/forum/viewtopic.php?t=201171))
- **VCA/oscillator bleed** at rest is reported by some owners; usually traced to power-supply grounding or needing calibration — contact Moog if persistent.

---

## Recommendations
1. **First, confirm your firmware** and update to the latest v1.1.x/v1.2.x via USB + SysEx Librarian/Bome. If you rely on tight DAW/analog clock sync or Multi-Trig you *must* be on ≥v1.1.2/v1.1.3; if syncing to legacy 8th-note clock gear, manually set PPQN back to 2.
2. **Run oscillator calibration** after warm-up if Osc 2 won't hit a clean 5th or pitch drifts; run the 3-file pot calibration if the mod wheel/Osc-2 detune behave asymmetrically.
3. **Learn the patchbay by breaking normals:** practice the series HP→LP filter patch, the LFO-as-3rd-oscillator (KB OUT→RATE IN), and the S/H auto-drone.
4. **For generative/ambient work,** start from the S/H-to-mult auto-drone and the envelope-follower patch; for west-coast timbres use Osc1→Attenuator→Osc2 LIN FM and the bell/gong recipe.
5. **As a studio tool,** set Local OFF to use it as a controller, take EURORACK OUT for modular-level audio, and use VCA-DRONE + VCA IN for a proper wet/dry spring-reverb send. Mult the filter output before the reverb to keep bass clean.
6. **Always use a TS cable** on the main output.

---

## Caveats & flagged contradictions
- **Filter slope:** −24 dB/oct (4-pole), not 12 dB. The only −6 dB/oct element is the 1-pole HP in Utilities.
- **Patch-point count wording:** Moog markets "41 patch points." The current spec page lists 21 inputs and **16 outputs** plus 4 parallel mults; some Moog/retailer copy says "20 outputs."
- **Oscillator lineage:** Moog's site once said "Minimoog-derived"; Moog confirmed to Sound on Sound they're **Voyager**-derived. Measured pulse duty cycle ~16–18%, not the manual's 25%.
- **Firmware/manual mismatches** exist (PPQN default, Multi-Trig behavior); the printed manual may lag actual behavior. Verify on your unit.
- **Standard vs Dark:** no electronic/firmware difference — color only; Dark launched at $999/£1,049 vs the colored model's original $899 (2019).
- **LBD Patchbook routings** are graphical; exact cable paths require viewing the PDF diagrams (verbatim performance notes quoted above).
- Some claims (VCA bleed, reverb-tank rattle, "buggy firmware") are **user reports**, not universal defects.

---

## Sources (annotated)

**Primary — Moog official**
- [Grandmother Owner's Manual](https://api.moogmusic.com/sites/default/files/2018-09/Grandmother_Manual.pdf) — full architecture, complete Patch Point Index (impedances/voltages), global settings, MIDI CC map, specifications (−24 dB filter, 41 points, 21 in/16 out).
- [Grandmother Global Settings PDF](https://api.moogmusic.com/sites/default/files/2021-06/Grandmother_Global_Settings.pdf) — deep global params (Osc2 freq range, velocity CV range, glide type, clock output mode, 4 PPQN default).
- [Firmware Update notes (ManualsLib)](https://www.manualslib.com/manual/2045112/Moog-Grandmother.html) — Multi-Trig CC95, MIDI clock-out default Off, SysEx params, PPQN change, gate length CC106, sync engine. [Page 2](https://www.manualslib.com/manual/2045112/Moog-Grandmother.html?page=2).
- [Matriarch Firmware notes (ManualsLib)](https://www.manualslib.com/manual/2040914/Moog-Matriarch.html) — shared sync-engine details applicable to Grandmother.
- [v1.0.6 release (ADSR)](https://www.adsrsounds.com/news/moog-releases-grandmother-v1-0-6-firmware-update/) — early bug fixes / step-advance lockup fix.
- [Moog support / calibration](https://moogmusic-help.freshdesk.com/support/solutions/articles/35000162478) — version blink-codes, oscillator recalibration procedure.
- [Lisa Bella Donna "Exploration Patchbook" PDF](https://api.moogmusic.com/sites/default/files/2019-11/Grandmother_Patchbook_LBD_1_0.pdf) — 12 official patches; verbatim performance notes.
- [Moog Dark Series announcement](https://www.moogmusic.com/news/introducing-dark-series-matriarch-grandmother) — Dark = color-only + firmware/patches; pricing.

**Reviews / technical**
- [Sound on Sound](https://www.soundonsound.com/reviews/moog-grandmother) — Voyager oscillators, 904A/902/905 lineage, LFO range, pulse duty cycle, reverb behavior, feedback tip.
- [MusicRadar review](https://www.musicradar.com/reviews/moog-grandmother) & [Dark news](https://www.musicradar.com/news/moog-announces-dark-series-grandmother-and-matriarch) — CP3 mixer, 24 dB filter, Dark pricing.
- [Higher Hz](https://higherhz.com/moog-grandmother-review/) — Multi-Trig introduced v1.1.3; utilities overview.
- [Attack Magazine](https://www.attackmagazine.com/reviews/hardware/moog-grandmother/) — ambient sound design, chord/3rd-oscillator patch.
- [Perfect Circuit](https://www.perfectcircuit.com/signal/moog-filters) — 904A ladder lineage.

**Community / forums / patches / video**
- [loopop "Unlocking Grandmother's Secrets" (YouTube)](https://www.youtube.com/watch?v=VHwdmO2Wf_Q) — 3 oscillators, 2–3 envelopes, paraphony, feedback.
- [Moog "Grandmother, Mother-32 & DFAM" livestream](https://www.youtube.com/watch?v=Fmpc2W3jJ1g) — integration patch tips.
- [Moog forum: patch mapper/saver](https://forum.moogmusic.com/viewtopic.php?t=31407), [Multi-Trig issue](https://forum.moogmusic.com/viewtopic.php?t=34480), [calibration](https://forum.moogmusic.com/viewtopic.php?t=31582).
- [MOD WIGGLER megathread](https://modwiggler.com/forum/viewtopic.php?t=201171), [FM recipe thread](https://modwiggler.com/forum/viewtopic.php?t=221454).
- [Gearspace patch ideas](https://gearspace.com/board/electronic-music-instruments-and-electronic-music-production/1215229-moog-grandmother-patch-ideas.html), [envelope follower](https://gearspace.com/board/electronic-music-instruments-and-electronic-music-production/1234086-moog-grandmother-envelope-follower.html), [effects loop](https://gearspace.com/board/electronic-music-instruments-and-electronic-music-production/1361931-moog-grandmother-effects-loop.html), [balanced output](https://gearspace.com/board/electronic-music-instruments-and-electronic-music-production/1396331-moog-grandmother-balanced-output.html).
- [Elektronauts thread](https://www.elektronauts.com/t/moog-grandmother/56068) — firmware version chatter (e.g., v1.1.2).
- [matrixsynth self-generating patch](https://www.matrixsynth.com/2019/03/moog-grandmother-self-generating-patch.html); [djjondent M32/DFAM sync](https://djjondent.blogspot.com/2019/08/moog-mother-32-dfam-sync.html).
- Patch/preset repositories: [presetpatch](https://presetpatch.com/synth/moog-grandmother.aspx), [patch-library.net](https://patch-library.net/), [grandmother-patches.vercel.app](https://grandmother-patches.vercel.app/), [SunnySynths](https://sunnysynths.com/), [marcora editor](https://marcora.github.io/grandmother-editor/), [Anton Anru](https://antonanru.com/).
- [*Patch & Tweak with Moog* (Bjooks)](https://bjooks.com/products/patch-tweak-with-moog) — cross-Moog patch techniques.

*Note: a few deep-link URLs (specific forum thread IDs, blog post slugs) are best-effort reconstructions from the research; if any 404s, search the thread title on the host site. Core Moog PDFs, manual, firmware notes, and review URLs are verified.*
