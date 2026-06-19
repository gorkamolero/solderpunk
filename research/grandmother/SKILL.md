---
name: grandmother
description: "Moog Grandmother (standard & Dark) — complete knowledge base for the semi-modular analog synth: architecture, the 41-point patchbay (every jack decoded), self-patching, spring reverb, arp/256-step sequencer, hidden features, Global Settings/firmware, patch recipes, and integration. Use when: (1) explaining or teaching the Grandmother (or Grandmother Dark), (2) decoding the patchbay — what a jack normals to, what patching it breaks, voltage ranges, (3) building patches (LFO-as-3rd-oscillator, Krell/generative auto-drone, keyboard-stepped S/H, envelope follower, HP feedback scream, two-filter split, bell/gong FM, self-oscillating sine voice, velocity→cutoff accent), (4) integrating with Mother-32/DFAM/Subharmonicon/Eurorack as controller, clock master/slave, or external-audio processor, (5) Global Settings, firmware (v1.1.x), oscillator/pot calibration, or MIDI CC, (6) user mentions 'Grandmother', 'Moog Grandmother', 'GM Dark', spring reverb, 41 patch points, or the LFO/filter as extra oscillators. Standard and Dark are electronically identical — color only."
---

# Moog Grandmother (Standard & Dark)

Synthesized from `research/grandmother/claude.md` and `research/grandmother/chatgpt.md`. Every non-trivial claim is cited inline. **Contradictions are flagged explicitly** — when sources disagree, the hierarchy is: current Global Settings/release-notes PDF → current support article → manual → community workaround.

## Quick Reference

- **100% analog, semi-modular monosynth**, 32-note keyboard, arp + 256-step sequencer.
- **2 oscillators** (Voyager-derived, NOT Minimoog) with hard sync; **1 LFO** (0.07 Hz–1.3 kHz, doubles as a 3rd oscillator); **noise**.
- **Filter: −24 dB/oct 4-pole Moog ladder LPF** (Moog 904A lineage) — NOT 12 dB. The only −6 dB/oct element is the static 1-pole high-pass in Utilities. VCA = Moog 902; spring reverb = Moog 905. ([Sound on Sound](https://www.soundonsound.com/reviews/moog-grandmother), [Perfect Circuit](https://www.perfectcircuit.com/signal/moog-filters))
- **41 patch points** total — 35 front + 6 rear; Moog markets it as 21 inputs / 16 outputs (some copy says 20 outputs) + a 4-jack parallel mult. All 3.5 mm. ([Moog manual](https://cdn.inmusicbrands.com/Moog/Grandmother/Grandmother_Manual_Version_2.pdf))
- **Standard vs Dark: electronically identical** (same circuits, firmware, patchbay) — panel color only. Dark launched $999/£1,049 vs the colored model's $899 (2019). ([Dark Series announcement](https://www.moogmusic.com/news/introducing-dark-series-matriarch-grandmother))
- Default signal flow: keyboard/arp/seq → oscillators + envelope → mixer → ladder LPF → VCA → spring reverb → main / headphone / Eurorack out. Patching an **input** breaks the normalled internal feed at that point; **outputs** break nothing.

## Architecture

- **Oscillators.** Two Voyager-derived VCOs (Moog's site once said "Minimoog-derived"; Moog confirmed Voyager to Sound on Sound). Hard sync slaves Osc 2 to Osc 1. Measured pulse duty cycle is ~16–18%, not the manual's stated 25%. ([Sound on Sound](https://www.soundonsound.com/reviews/moog-grandmother))
- **Mixer.** Based on the Moog CP3 — channel knobs past ~1 o'clock add gentle-to-overdriven distortion (this is the built-in grit). ([MusicRadar](https://www.musicradar.com/reviews/moog-grandmother))
- **Filter.** −24 dB/oct 4-pole transistor ladder LPF (904A); self-oscillates at max resonance and becomes a tunable sine voice. The separate **High Pass Filter** in Utilities is a static −6 dB/oct 1-pole and must be patched into the path manually. ([Sound on Sound](https://www.soundonsound.com/reviews/moog-grandmother))
- **Spring reverb.** Real 6" tank based on the vintage **Moog 905**. MIX is fully dry→fully wet (no independent wet-add — shares the 905 limitation). Largely impact-resistant but susceptible to EMI; some early units shipped with a loose tank screw (rattle, a known QA item). ([Sound on Sound](https://www.soundonsound.com/reviews/moog-grandmother))
- **Envelope.** One panel ADSR feeding filter + VCA, with normal/inverted outputs. VCA modes: **ENV / KB RLS / DRONE**.

## Hidden Features

- **LFO as a 3rd oscillator.** The LFO is full-range (0.07 Hz–1.3 kHz) and 1V/oct-trackable. Patch **KB OUT → RATE IN** (LFO tracks the keyboard), then **MOD WAVE OUT → MIXER NOISE IN**; the NOISE mixer level is the "3rd oscillator" volume. ([Moog support](https://moogmusic-help.freshdesk.com/en/support/solutions/articles/69000840749-moog-grandmother-how-do-i-use-the-lfo-as-a-3rd-oscillator-))
- **Filter self-oscillation = sine voice (a 4th oscillator).** RESONANCE full up, CUTOFF ~10 o'clock, KBD TRACK 1:1 to play it in tune. ([Moog manual](https://cdn.inmusicbrands.com/Moog/Grandmother/Grandmother_Manual_Version_2.pdf))
- **2–3 envelopes.** Beyond the panel ADSR, the **S/H OUT**, the **accent envelope on KB VEL OUT** during sequencing, and the modulation oscillator (per-note via SYNC) serve as extra contour/trigger sources — enabling paraphonic-style and multi-envelope patches. ([loopop](https://www.youtube.com/watch?v=VHwdmO2Wf_Q))
- **Secret control combos** ([Moog manual](https://cdn.inmusicbrands.com/Moog/Grandmother/Grandmother_Manual_Version_2.pdf)):
  - **Legato Glide:** hold **HOLD** while turning GLIDE right = ON, left = OFF (default Off). Acid lines. (Also **CC94**.)
  - **Gated Glide** (firmware-added): glide only advances while a note is held. (Also **CC103**.)
  - **Fine LFO tuning:** hold **SHIFT** while turning MOD RATE — essential when the LFO is an audio oscillator.
  - **Octave transpose:** SHIFT + ◀KB / KB▶.
  - **Stuck-note panic:** hold all three left-hand-controller buttons ~1 s — clears the note stack and sends MIDI All Notes Off.
- **Global Edit entry:** hold **HOLD + SYNC** until the SYNC LED blinks; black keys select parameters, white keys set values, double-tap a white key to write-and-exit. ([Global Settings PDF](https://cmi.com.au/Files/Files/Docs/MOOG/MOOG-MODGRAND-Grandmother_Global_Settings.pdf))
- **Oscillator recalibration:** in Global Edit, hold PLAY+HOLD+TAP and press the lowest key. Takes a while — never right before a gig. Fixes drift and the common "Osc 2 FREQUENCY won't hit a clean perfect 5th at full CW" complaint. Allow 10–15 min warm-up (up to 25 if cold) first. There's also a 3-file pot/wheel calibration (min/max/center SysEx) for asymmetric mod-wheel/Osc-2 detune. ([Moog support](https://moogmusic-help.freshdesk.com/en/support/solutions/articles/69000840753-moog-grandmother-why-are-my-oscillators-out-of-tune-))
- **Local-Off gotcha.** Local Off is more aggressive than most assume: **KB OUT, GATE OUT, and KB VELOCITY OUT are disengaged** because they're hard-wired to the internal voice — make-or-break if you intend to use Grandmother strictly as a MIDI-CV controller. (See Integration; this contradicts the naive assumption that Local Off only mutes the audio engine.) ([Global Settings PDF](https://cmi.com.au/Files/Files/Docs/MOOG/MOOG-MODGRAND-Grandmother_Global_Settings.pdf))

## Global Settings & Firmware

Current public firmware is **v1.1.3** (package `Grandmother_Firmware_v1_1_3.syx`). Update flow is multi-stage: send `…_FIRMWARE_INVALIDATE.syx`, reselect Grandmother as MIDI out, send `…_FIRMWARE_ERASE.syx`, then the firmware file. ([Moog downloads](https://www.moogmusic.com/downloads/?product=Grandmother), [General Troubleshooting](https://moogmusic-help.freshdesk.com/en/support/solutions/articles/69000840530-moog-grandmother-general-troubleshooting))

**Check your version:** Global Edit, hold A#2 + G#0, read PLAY/HOLD/TAP blink counts as major/minor/bugfix. ([Moog support](https://moogmusic-help.freshdesk.com/en/support/solutions/articles/69000840528-moog-how-do-i-tell-what-firmware-version-my-synthesizer-is-on-))

Firmware materially changed behavior across revisions:
- **v1.0.6:** added Global Settings params; fixed external Step-Advance lockup under MIDI clock; fixed oscillator pitch not updating to MIDI notes. ([ADSR](https://www.adsrsounds.com/news/moog-releases-grandmother-v1-0-6-firmware-update/))
- **v1.1.0:** added **Multi-Trig (CC95)**; PLAY no longer *outputs* CC73 (still responds); MIDI Clock Output default → Off; SysEx editing of global params; MIDI Out filters; Gate Length via **CC106** (64 = 50%). ([Firmware notes, ManualsLib](https://www.manualslib.com/manual/2045112/Moog-Grandmother.html))
- **v1.1.2:** sync-engine improvements, adaptive tempo filtering, **max clock output raised to over 500 Hz** (preserved as a quoted official-release line in community refs, not a currently viewable first-party page). ([Reddit clock-sync](https://www.reddit.com/r/moog/comments/1d508bl/connecting_dfamm32grandmother/))
- **v1.1.3:** the **Multi-Trig** Global Setting — determines whether envelopes retrigger on each new key vs only after all keys release (default Off). Note: at least one forum user reports it not retriggering as expected — verify on your unit. ([Higher Hz](https://higherhz.com/moog-grandmother-review/), [Moog forum](https://forum.moogmusic.com/viewtopic.php?t=34480))

**The v1.1.3 Global Settings PDF is the treasure map** — it documents the instrument's hidden OS, not just a settings addendum. Settings are organized in groups of ten, selected by upper black keys. Beyond MIDI channel / note priority / bend range / clock mode / PPQN / KB OUT range / Local On-Off, it exposes: **Osc 2 Frequency Knob Range** (0–18 semitones, default 7), **Velocity CV range** (−5/+5 V or 0/+5 V), **Glide Type** (Linear Constant Rate / Linear Constant Time / Exponential), Gated Glide, **Clock Output Mode** (only while arp/seq runs, or always), **Multi-Trig** + Multi-Trig Reset Speed, separate MIDI IN/OUT channels, MIDI Out filters (keys/wheels/knobs), Knob Mode (Snap/Pass-Thru/Relative), 14-bit CC output, sequence transpose, swing (0–16383), pitch variance (±40 cents in 0.1-cent steps), Global Reset, and Show Firmware Version. A free web SysEx editor exposes all settings (requires v1.1.3): [marcora.github.io/grandmother-editor](https://marcora.github.io/grandmother-editor/). ([Global Settings PDF](https://cmi.com.au/Files/Files/Docs/MOOG/MOOG-MODGRAND-Grandmother_Global_Settings.pdf))

> **Contradiction flags (real doc drift, not user error):**
> - **Filter slope:** −24 dB/oct (4-pole). The "12 dB" figure floating around is wrong.
> - **PPQN default:** manual says **2 PPQN**; v1.1.3 release notes say **4 PPQN** (16th-note). Treat 4 as current. If syncing to legacy 8th-note clock gear, set it back to 2 manually.
> - **Pitch-bend range floor:** manual says **1–12 semitones**; release notes say **0–12** (0 = off), consistent with the CC107/108 "0 (OFF)" row — release notes win.
> - **SysEx param IDs / tunings:** Moog's own support article admits some parameter IDs are absent/incorrect in docs and that multiple tuning-scale slots are NOT saveable the way the manual implies. ([Tunings support note](https://moogmusic-help.freshdesk.com/en/support/solutions/articles/69000840612-moog-grandmother-using-different-scales-or-tunings-on-a-moog-grandmother))

## THE PATCHBAY DECODED

All points 3.5 mm. **Pitch inputs are summed, not replacements.** **Mixer source inputs** replace their normalled source and hand level to the corresponding knob. **FILTER IN / VCA IN / REVERB IN** are the audio-chain insert points — each breaks its normalled upstream feed. The **MULT is unbuffered**, so only merge AC-coupled audio (osc, filter, HPF, reverb, Eurorack outs) — never DC/control. Specs from the manual's Patch Point Index (pp. 38–42), CV-range exceptions from the Global Settings PDF. ([Moog manual](https://cdn.inmusicbrands.com/Moog/Grandmother/Grandmother_Manual_Version_2.pdf), [Global Settings PDF](https://cmi.com.au/Files/Files/Docs/MOOG/MOOG-MODGRAND-Grandmother_Global_Settings.pdf))

| Area | Jack | Dir | Normal / what patching breaks | Range, Z |
|---|---|---|---|---|
| ARP/SEQ | GATE OUT | out | +8 V gate per new note (kbd/arp/seq); no break | +8 V, 5 Ω |
| ARP/SEQ | KB OUT | out | 1V/oct pitch CV; no break. **Disengaged in Local Off** | −5/+5 V (or 0–10 V via Global), 5 Ω |
| ARP/SEQ | KB VEL OUT | out | velocity CV; outputs **accent envelope** during seq playback; no break. Disengaged in Local Off | 0/+5 V (Global: also −5/+5 V), 5 Ω |
| Modulation | RATE IN | in | summed with RATE knob; 1V/oct so LFO can be "played"; no normal to break | −5/+5 V, 100 kΩ |
| Modulation | SYNC IN | in | rising edge resets LFO to cycle start; no normal | 0/+5 V, 100 kΩ |
| Modulation | WAVE OUT | out | selected LFO waveform, DC-coupled; no break | 10 Vpp, 5 Ω |
| Modulation | S/H OUT | out | sample-and-hold of noise, sampled each LFO cycle start. **No internal routing — must be patched** | −5/+5 V, 2 kΩ |
| Oscillators | OSC 1 / OSC 2 WAVE OUT | out | osc waveform, AC-coupled; no break | 10 Vpp, 2 kΩ |
| Oscillators | OSC 1 / OSC 2 PITCH IN | in | **summed** with internal pitch CV — does NOT remove it | −5/+5 V, 90 kΩ |
| Oscillators | OSC 1 PWM IN | in | pulse-width mod; no normal | 0/+5 V, 100 kΩ |
| Oscillators | OSC 2 LIN FM IN | in | linear FM into Osc 2; no normal | −5/+5 V, 90 kΩ |
| Mixer | OSC 1 / OSC 2 / NOISE IN | in | **replaces** the normalled internal source; channel knob then controls the patched signal | −5/+5 V, 100 kΩ |
| Mixer | OUTPUT | out | sum of channel knobs, DC-coupled (CP3-style); no break | 2 kΩ |
| Utilities | MULT 1–4 | I/O | four parallel **unbuffered** jacks; split one signal to ≤3 places, or merge ≤2 AC-coupled audio; no normal | parallel network |
| Utilities | HIGH PASS FILTER INPUT | in | static −6 dB/oct 1-pole HP; must be patched in; no normal | −5/+5 V, 110 kΩ |
| Utilities | HIGH PASS FILTER OUTPUT | out | HPF out, AC-coupled; no break | 10 Vpp, 2 kΩ |
| Utilities | ATTENUATOR INPUT | in | bipolar/inverting. **Normalled to a positive DC voltage** — patching here replaces it | −8/+8 V, 100 kΩ |
| Utilities | ATTENUATOR OUTPUT | out | 12 o'clock = zero; **with nothing patched in, a usable ±8 V DC offset/CV source**; no break | 5 Ω |
| Filter | FILTER INPUT | in | **breaks** Mixer Output → LPF normal (don't feed line/inst level here) | −5/+5 V, 100 kΩ |
| Filter | FILTER OUTPUT | out | LPF out, AC-coupled; no break | 10 Vpp, 2 kΩ |
| Filter | ENV AMT IN | in | summed with ENVELOPE AMT knob; no normal | −8/+8 V DC, 110 kΩ |
| Filter | CUTOFF IN | in | summed with KBD track / env / cutoff; no normal | −5/+5 V, 100 kΩ |
| Envelope | TRIGGER IN | in | any signal >1.2 V triggers; **breaks** normalled kbd/arp/seq gate | 0/+8 V DC, 100 kΩ |
| Envelope | +ENV / −ENV OUT | out | normal & inverted ADSR, DC-coupled; no break | 10 Vpp, 5 Ω |
| Output | VCA AMT IN | in | in DRONE the patched CV alone sets volume; in ENV/KB RLS it's summed (tremolo) | 0/+8 V (DRONE), −8/+8 V (ENV/KB RLS), 100 kΩ |
| Output | VCA IN | in | audio into VCA; **breaks** Filter → VCA normal | −5/+5 V, 100 kΩ |
| Output | REVERB IN | in | audio into spring tank; **breaks** VCA → reverb normal | −5/+5 V, 100 kΩ |
| Rear | CLOCK IN | in | clock or step-advance (Global); no audio normal | −5/+5 V, 100 kΩ |
| Rear | ON/OFF IN | in | >2.5 V plays arp/seq, <2.5 V stops | 0/+5 V |
| Rear | RESET IN | in | >2.5 V resets arp/seq position | 0/+5 V |
| Rear | CLOCK OUT | out | clock at tempo × PPQN; no break | 0/+5 V |
| Rear | EURORACK OUT | out | **buffered** main out at Eurorack level; **post-reverb-mix, pre-VOLUME knob** (volume knob has no effect); no break | −5/+5 V (peaks ±8 V), 2 kΩ |
| Rear | REVERB OUT | out | **always 100% wet**, post-tank; not affected by REVERB MIX; no break | 10 Vpp, AC-coupled, 1 kΩ |

**Also rear (not patch-bay jacks):** **INSTRUMENT IN** (1/4", hi-Z preamp boosting guitar to ~10 Vpp into the mixer, post-mixer/pre-filter, no gain knob — clips musically); **MAIN OUT / HEADPHONE** (1/4" — jack is TRS but signal is mono: **use a TS cable**; a TRS/balanced cable causes phase cancellation and a weak signal — near-universal owner gotcha); **MIDI In/Out/Thru** (5-pin DIN) + **USB MIDI**. ([Gearspace balanced-out](https://gearspace.com/board/electronic-music-instruments-and-electronic-music-production/1396331-moog-grandmother-balanced-output.html))

## Patch Recipes

- **LFO as 3rd oscillator.** KB OUT → RATE IN; MOD WAVE OUT → MIXER NOISE IN; raise NOISE for volume; RATE = coarse tune, SHIFT+RATE = fine. ([Moog support](https://moogmusic-help.freshdesk.com/en/support/solutions/articles/69000840749-moog-grandmother-how-do-i-use-the-lfo-as-a-3rd-oscillator-))
- **Krell / generative auto-drone.** VCA → DRONE. S/H OUT → MULT, distribute to CUTOFF IN, OSC pitch, and TRIGGER IN (self-triggering); MOD RATE low. Variation: GATE OUT → MOD SYNC IN resets S/H per step, S/H OUT → OSC 2 PITCH IN. ([matrixsynth](https://www.matrixsynth.com/2019/03/moog-grandmother-self-generating-patch.html))
- **Keyboard-stepped Sample & Hold.** GATE OUT → MOD SYNC IN, MOD S/H OUT → CUTOFF IN, MOD RATE at minimum — each key press clocks a new random value (no sequencer needed). ([Moog manual](https://cdn.inmusicbrands.com/Moog/Grandmother/Grandmother_Manual_Version_2.pdf))
- **Envelope follower.** VCA → DRONE; oscillators down in mixer; Y-split an external source into INSTRUMENT IN **and** Envelope TRIGGER IN; CUTOFF/RESONANCE ~halfway, all envelope stages at zero — incoming amplitude drives the filter. Switch VCA to KB RLS to also shape volume. ([Gearspace](https://gearspace.com/board/electronic-music-instruments-and-electronic-music-production/1234086-moog-grandmother-envelope-follower.html))
- **HP feedback scream (official).** MIXER OUTPUT → HIGH PASS FILTER INPUT, then HIGH PASS FILTER OUTPUT → MIXER NOISE IN. NOISE knob = feedback amount, HIGH PASS knob = tone; expect overload/screech (community runs both oscillators ~9 o'clock, noise mix above halfway). ([Moog support](https://moogmusic-help.freshdesk.com/en/support/solutions/articles/69000840752-moog-grandmother-how-do-i-use-the-high-pass-filter-))
- **Two independent filters.** Simple: OSC 2 WAVE OUT → HPF IN → MIXER OSC 2 IN. Full split: OSC 2 WAVE OUT → HPF IN → HPF OUT → MULT; LPF OUT → another MULT jack; third MULT jack → VCA IN — Osc 1 takes the LP path, Osc 2 the HP path, recombined. ([Moog manual](https://cdn.inmusicbrands.com/Moog/Grandmother/Grandmother_Manual_Version_2.pdf))
- **Bell/gong FM.** Both oscillators triangle; Osc 2 an octave lower (carrier below modulator); Osc 1 mixer off, Osc 2 at 50%; OSC 1 WAVE OUT → ATTENUATOR → OSC 2 LIN FM IN; tune Osc 2 to a 4th/5th; fast attack, slow-ish decay, no sustain; reverb 50%. ([MOD WIGGLER](https://modwiggler.com/forum/viewtopic.php?t=221454))
- **Self-oscillating sine voice.** RESONANCE full, CUTOFF ~10 o'clock, KBD TRACK 1:1 — play the filter as a clean sine counter-voice/sub. ([Moog manual](https://cdn.inmusicbrands.com/Moog/Grandmother/Grandmother_Manual_Version_2.pdf))
- **Velocity / accent → cutoff.** KB VEL OUT → CUTOFF IN so sequencer accents (recorded with TAP in REC) or velocity open the filter — there's no internal velocity routing. ([Moog manual](https://cdn.inmusicbrands.com/Moog/Grandmother/Grandmother_Manual_Version_2.pdf))
- **Per-note LFO reset (2nd-envelope feel).** KB GATE OUT → MOD SYNC IN; at slow rates the LFO acts like a second envelope (delayed vibrato, per-note filter bloom); at fast rates, flam/ratchet/delay effects. ([Moog support](https://moogmusic-help.freshdesk.com/en/support/solutions/articles/69000840748-moog-grandmother-how-do-i-get-the-lfo-to-reset-on-each-note-))
- **AM / tremolo.** MOD WAVE OUT → VCA AMT IN. ([Moog manual](https://cdn.inmusicbrands.com/Moog/Grandmother/Grandmother_Manual_Version_2.pdf))
- **Reverb too hot.** FILTER OUT → ATTENUATOR IN → ATTENUATOR OUT → REVERB IN, attenuator at ~+1/+2, REVERB MIX ~noon. Also mult the filter output to keep muddy bass out of the spring (per *Patch & Tweak with Moog*). ([Moog forum](https://forum.moogmusic.com/t/grandmother-reverb-distorts-very-easily/21048))

The **Lisa Bella Donna "Exploration Patchbook"** routings are graphical, but verbatim performance notes capture the spirit: *"SET GLIDE AT 11 O'CLOCK. SWEEP HIGH PASS FILTER FOR PHASE CHARACTER…"* and *"INCREASE RESONANCE FOR LASER TRACERS. SWITCH TO RANDOM MODE FOR FINALE WHILE INCREASING HIGH PASS FILTER."* ([LBD Patchbook](https://cdn.inmusicbrands.com/Moog/Grandmother/Grandmother-Patchbook-Lisa-Bella-Donna.pdf))

## Integration

- **As a MIDI-CV controller.** Set **Local Off** — keyboard/arp/wheels drive only MIDI out... but remember KB OUT, GATE OUT, KB VEL OUT are *also* disengaged in Local Off (they're hard-wired to the internal voice). For analog-CV control of external gear, you may prefer Local On and just not patch the internal voice. ([Global Settings PDF](https://cmi.com.au/Files/Files/Docs/MOOG/MOOG-MODGRAND-Grandmother_Global_Settings.pdf))
- **Eurorack audio.** **EURORACK OUT** = buffered main out at modular level, post-reverb-mix/pre-volume — correct send for stable gain staging into a rack. Mixer channel inputs accept 10 Vpp Eurorack audio to replace internal sources. ([Moog manual](https://cdn.inmusicbrands.com/Moog/Grandmother/Grandmother_Manual_Version_2.pdf))
- **Clocking M32 / DFAM / Subharmonicon.** CLOCK OUT (0–+5 V) + CLOCK IN with selectable PPQN (now default 4/16th); ON/OFF IN and RESET IN for transport; max clock out >500 Hz after v1.1.2. For continuous clock to a DFAM, enable the always-on **Clock Output Mode**; the DFAM wants a pulse stream at ADVANCE/CLOCK and is happiest already "running." ([Reddit](https://www.reddit.com/r/moog/comments/1d508bl/connecting_dfamm32grandmother/), [Moog "Sync M32 & DFAM"](https://www.youtube.com/watch?v=YyVeym4wO8o))
- **External-audio processor.** INSTRUMENT IN (post-mixer/pre-filter) feeds the ladder filter + VCA + spring as a mono FX chain — set VCA to DRONE so the path stays open without a held note. For a real wet/dry reverb send, go source → VCA IN, VCA = DRONE, use the front MIX knob (rear REVERB OUT is always 100% wet). To loop a pedal: WAVE OUT → ATTENUATOR → pedal → MIXER IN. ([Moog support](https://moogmusic-help.freshdesk.com/en/support/solutions/articles/69000840713-moog-can-i-play-a-moog-with-my-guitar-))
- **TS-cable gotcha:** always use a TS (not TRS/balanced) cable on the main output (see Patchbay).
- **MIDI CC map (key entries):** CC1 Mod Wheel, CC3 Mod Rate, CC5 Glide Time, CC8 Arp/Seq Rate, CC12 Osc 2 Freq, CC65 Glide On/Off, CC69 Hold, CC73 Arp/Seq Play, CC74/75 osc octaves, CC77 Osc 2 Sync, CC85 Glide Type, CC90 clock division, CC91 Arp/Seq Mode, CC92 Direction/Pattern, CC93 Range/Slot, CC94 Legato Glide, **CC95 Multi-Trig**, CC103 Gated Glide, **CC106 Gate Length** (64 = 50%), CC107/108 bend ranges, CC119 transpose; plus RPN 0/1/2 (bend/fine/coarse tune), CC64 sustain, CC120/123 All Sounds/Notes Off. 14-bit available on CC1–31 (+32 LSB). USB-MIDI for DAW + firmware. ([Moog manual](https://cdn.inmusicbrands.com/Moog/Grandmother/Grandmother_Manual_Version_2.pdf))

## Patch-Sheet & Patchbook Resources

- **Official Moog:** [Grandmother Manual](https://cdn.inmusicbrands.com/Moog/Grandmother/Grandmother_Manual_Version_2.pdf) (end-of-manual patch examples + blank sheets), [Global Settings/Release Notes PDF](https://cmi.com.au/Files/Files/Docs/MOOG/MOOG-MODGRAND-Grandmother_Global_Settings.pdf), [Blank Preset Sheet & patchbooks via Downloads](https://www.moogmusic.com/downloads/?product=Grandmother).
- **Lisa Bella Donna "Exploration Patchbook"** — canonical learn-by-patching resource, paired with Moog's [Grandmother Tutorials playlist](https://www.youtube.com/playlist?list=PLwKFiLdtN6B3XXcAU7y1ztii_7FSFqIaU): [LBD Patchbook PDF](https://cdn.inmusicbrands.com/Moog/Grandmother/Grandmother-Patchbook-Lisa-Bella-Donna.pdf).
- **Mike Dean Patchbook** — simpler, more immediately musical; Moog no longer surfaces it prominently but the file path survives: [Grandmother_Patchbook_MikeDean_0.pdf](https://api.moogmusic.com/sites/default/files/2020-04/Grandmother_Patchbook_MikeDean_0.pdf).
- **Grandmother Dark Patchbook** — [PDF](https://cdn.inmusicbrands.com/Moog/Grandmother/Grandmother_Dark_Patchbook.pdf) (16 patches at Dark launch).
- **Community libraries:** [presetpatch.com/synth/moog-grandmother](https://www.presetpatch.com/synth/moog-grandmother), [SynthLib](https://synthlib.com/brands/moog/instruments/moog-grandmother), [Metapatch](https://www.metapatch.com/patches), [patch-library.net](https://patch-library.net/), and the 2026 interactive **[grandmother-patches.vercel.app](https://grandmother-patches.vercel.app/)** (aggregates Dark + LBD + SynthLib + PresetPatch with an editor). Commercial sets: [Anton Anru](https://antonanru.com/).
- **Patch logger/editor:** [SunnySynths](https://sunnysynths.com/) saver/loader (note: Grandmother has **no SysEx patch dump** — patch settings are stored on the computer only); [marcora editor](https://marcora.github.io/grandmother-editor/) for Global Settings.

## Community

- **Official forum:** [Semi-Modular Analog Synthesizers category](https://forum.moogmusic.com/c/the-moog-forum/moog-semi-modular-analog-synthesizers/15) — clocking, reverb quirks, calibration, firmware drift, patch-recall tools.
- **YouTube:** [loopop "Unlocking Grandmother's Secrets"](https://www.youtube.com/watch?v=VHwdmO2Wf_Q) (definitive hidden-features tour); Moog's [Tutorials playlist](https://www.youtube.com/playlist?list=PLwKFiLdtN6B3XXcAU7y1ztii_7FSFqIaU); [once upon a synth "7 Patch Tips"](https://www.youtube.com/watch?v=rB7rDnY-zcY); [kleemannbeats "15 Tricks"](https://www.youtube.com/watch?v=cVOogHXW4FU).
- **[MOD WIGGLER](https://modwiggler.com/forum/viewtopic.php?t=201171)** — long-running megathread (tuning, reverb-tank rattle, VCA/oscillator bleed, FM recipes). **Reddit:** [r/moog](https://www.reddit.com/r/moog/), [r/synthesizers](https://www.reddit.com/r/synthesizers/). **[Elektronauts](https://www.elektronauts.com/t/moog-grandmother/56068)** — firmware chatter. **Book:** [*Patch & Tweak with Moog*](https://bjooks.com/products/patch-tweak-with-moog).
