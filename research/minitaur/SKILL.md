---
name: minitaur
description: "Moog Minitaur (and Sirin variant) — complete knowledge base for the 100% analog 2-VCO monophonic bass synth: architecture, MIDI CC control/automation, the under-the-hood editor-only parameters, bass sound design with exact knob settings, CV/Gate, and Taurus lineage. Use when: (1) designing bass/sub/acid/reese/kick sounds on a Minitaur or Sirin, (2) controlling or automating it over MIDI CC (every knob is a CC; 14-bit MSB/LSB pairs), (3) reaching the hidden 'under the hood' params (Note Sync, filter KB tracking, glide type, LFO sync, EG trigger mode, CV remapping) via CC, the free Minitaur Editor, or GLIDE shift-panel combos, (4) integrating with a DAW/Ableton, CV/Gate modular, polychain, or a DFAM, (5) calibrating/troubleshooting (warm-up drift, Pitch CV offset, MIDI freeze), (6) user mentions 'Minitaur', 'Moog Minitaur', 'Sirin', 'Taurus', analog Moog bass, the Minitaur Editor, or self-oscillating-filter kicks/sines."
---

# Minitaur

Research: `/Users/gorkolas/www/music/solderpunk/research/minitaur` (full notes in `claude.md` and `chatgpt.md`)

## What This Covers

- The 100% analog 2-VCO / ladder-filter bass architecture and its hard limits
- The "under the hood" parameters most owners never touch (only reachable via CC, Editor, or GLIDE-shift)
- Firmware evolution from no-presets-no-editor to the final v2.2.2 / Editor v3.3.0
- The full MIDI CC map (MSB/LSB pairs) and CC automation tricks
- Sound-design recipes with exact knob/value settings
- Editor, DAW, CV/Gate, polychain, and DFAM integration
- Calibration, quirks, and the Sirin cross-reference

## Key Constraint

The Minitaur has **NO real-time onboard editing of its deep features** — the front panel only shows ~half the synth. Everything else (Note Sync, filter KB tracking, glide type, velocity sens, LFO shapes, CV remapping, polychain) is reached three ways: (1) **MIDI CC** — every parameter has one; (2) the free **Minitaur Editor/Librarian** (standalone + VST/AU/AAX); (3) **GLIDE shift-panel** combos added in firmware v2.1/v2.2. There is no MIDI-CC-less path to most of these. ([soundonsound.com](https://www.soundonsound.com/reviews/moog-minitaur))

## Quick Reference

- **2 VCOs**: each saw OR square; VCO1 = master, VCO2 offset ±~1 octave + fine Beat detune
- **Filter**: classic 24 dB/oct Moog ladder low-pass; self-oscillates past ~2 o'clock
- **2 envelopes**: Minimoog-style ADS with shared Decay/Release (Mode 2 decouples them); ~1 ms–30 s
- **1 LFO**: triangle at launch; v2.2 adds Square / Saw-down / Saw-up / S&H / Filter-EG
- **Range**: hard ceiling at **C5 / MIDI note 72** (V/Hz oscillators) — notes 73+ ignored unless Top Octave Wrap is on
- **NO Multidrive** — drive comes only from overdriving the mixer into the filter (~2 o'clock)
- **Presets**: up to 128 slots (ships ~94); Program Change recall
- **Final firmware**: v2.2.2 / Editor PC v3.3.0, Mac v3.3.3

---

## Architecture

100% analog audio path derived from the Taurus bass engine: **VCO1 + VCO2 + External Input → mixer → 24 dB/oct Moog ladder filter → VCA → output**. ([Minitaur User Manual](https://cdn.inmusicbrands.com/Moog/Minitaur/Minitaur_Manual.pdf))

- **Oscillators** — two VCOs, each saw or square. VCO1 is master; VCO2 has a coarse Frequency offset (≈±1 octave) plus a fine **Beat** detune around VCO1. Pitch is affected by note, glide, VCO2 freq/beat, Pitch CV, Fine Tune, and LFO. ([Minitaur User Manual](https://cdn.inmusicbrands.com/Moog/Minitaur/Minitaur_Manual.pdf))
- **Filter** — classic 24 dB/octave Moog ladder low-pass, resonance self-oscillates at high settings (usable as a sine source). Resonance attenuates low end (de-facto high-pass to tame bass build-up). OTA-based coupling gives subtle compression/distortion and an inherited ~20 Hz bass boost from the Taurus design. ([Minitaur User Manual](https://cdn.inmusicbrands.com/Moog/Minitaur/Minitaur_Manual.pdf) ; [modwiggler.com](https://www.modwiggler.com/forum/viewtopic.php?t=273159))
- **Envelopes** — separate filter and amp envelopes, Minimoog-style ADS with a shared Decay/Release control (later firmware adds independent Decay/Release "Mode 2"). Attack/decay/release ≈ 1 ms–30 s. Triggered by MIDI Note On or the Gate jack. ([Minitaur User Manual](https://cdn.inmusicbrands.com/Moog/Minitaur/Minitaur_Manual.pdf))
- **Mixer = the only drive** — VCO levels begin to clip the filter input around **2 o'clock**, adding aggressive harmonics. This is the Minitaur's entire "dirt" story. ([Minitaur User Manual](https://cdn.inmusicbrands.com/Moog/Minitaur/Minitaur_Manual.pdf))
- **Hard C5 ceiling** — highest oscillator pitch is C5 / 523.25 Hz; MIDI notes 0–72 recognized, 73+ ignored. This is a consequence of **V/Hz oscillators** (cheaper than the Minimoog's V/oct, but limited to roughly 3 octaves), so it **cannot be fixed in firmware**. The Sirin solves it in hardware. ([Minitaur User Manual](https://cdn.inmusicbrands.com/Moog/Minitaur/Minitaur_Manual.pdf) ; [synthtopia.com](https://www.synthtopia.com/content/2017/07/22/moog-updates-minitaur-firmware-editor/))
- **NO Multidrive** — the dedicated overdrive circuit belongs to the Sub Phatty / Sub 37, NOT the Minitaur. For real grit, add an external Moog MF Drive / Minifooger Drive or careful feedback. ([elektronauts.com](https://www.elektronauts.com/t/moog-minitaur-drive-fb-mod/70861) ; [Moog MF Drive](https://us.amazon.com/Moog-MF-Drive-Minifooger-Overdrive/dp/B00V7C6FNG))
- **Lineage** — fourth Taurus-family instrument: Taurus I (1975), Taurus 2 (1981, "a Rogue on a stick"), Taurus 3 (2010), Minitaur (2012). ([soundonsound.com](https://www.soundonsound.com/reviews/moog-minitaur))

---

## Hidden / Editor-Only "Under the Hood" Parameters

Sound On Sound counted "no fewer than 20 additional voicing parameters" Moog calls **under the hood**. Reach them via CC, the Editor's UNDER THE HOOD / Extended layouts, or GLIDE-shift. ([soundonsound.com](https://www.soundonsound.com/reviews/moog-minitaur) ; [Editor Manual](https://files.kraftmusic.com/media/ownersmanual/Moog_Minitaur_Editor_Users_Manual.pdf))

- **Note Sync (CC 81) — THE key one.** Resets both oscillator phases to zero on every Note On. Eliminates random phase cancellation in detuned patches and guarantees consistent attack "punch." Leave **ON** for studio bass that must sit under a kick; turn **OFF** for organic phase drift / live Taurus feel. ([Minitaur User Manual](https://cdn.inmusicbrands.com/Moog/Minitaur/Minitaur_Manual.pdf) ; [soundonsound.com](https://www.soundonsound.com/reviews/moog-minitaur))
- **Filter Keyboard Tracking (CC 20)** — 0–200%, default ≈32 (~50%). Set to 100% to play the self-oscillating filter as a true pitched oscillator across the keyboard; 0% keeps sub/kick patches identical note-to-note. SOS found units shipped not tracking at 100% and fixed it here. ([soundonsound.com](https://www.soundonsound.com/reviews/moog-minitaur))
- **VCO2 Beat (CC 18)** — fine detune around VCO1 (~±50 cents, default 64) for analog beating without changing the musical interval.
- **Filter Velocity Sensitivity (CC 89)** and **VCA Velocity Sensitivity (CC 90)** — defaults ≈64; essential for 303-style accents and dynamic plucks. SOS notes max depth is subtle.
- **Glide Type (CC 92)** — Linear Constant Rate (default) / Linear Constant Time / Exponential (the Taurus-like curve). **Legato Glide (CC 83)** — glide only on overlapping notes (303-style "slide").
- **EG Trigger Mode (CC 73)** — Legato On / Legato Off / EG Reset. EG Reset can loop envelopes after a full cycle, turning EGs into multi-stage mod sources. ([Editor Manual](https://files.kraftmusic.com/media/ownersmanual/Moog_Minitaur_Editor_Users_Manual.pdf))
- **Key Priority (CC 91)** — Low / High / Last (default Last). Low = vintage bass-line discipline; Last = modern sequencer predictability.
- **Pitch Bend Up / Down ranges (CC 107 / 108)** — independent Off/2/3/4/5/7/12/24 semitones, default ±3.
- **LFO MIDI Sync (CC 87), Clock Divide (CC 86), Key Trigger (CC 82)** — clock-synced from 4 whole notes down to 1/64 triplet; key trigger resets the LFO each note.
- **External Input Level (CC 27)** — 0–200%, default 64 (≈50%, unity near midpoint); no panel knob except via shift/editor.
- **CV remapping (Editor only)** — Pitch CV and Volume CV can be remapped to control *any* parameter; the Gate input can drive any on/off parameter (e.g. switch oscillator waveshape via gate). Configured in the Editor's Hardware Settings; global, saved on power-down. CV-to-MIDI converts any input voltage to that parameter's CC out the USB port (Minitaur as multi-channel CV→MIDI converter), limited to **0 to +5V only**. ([Minitaurv2.2 Addendum](https://cdn.inmusicbrands.com/Moog/Minitaur/Minitaurv2.2_Addendum.pdf) ; [Editor Manual](https://files.kraftmusic.com/media/ownersmanual/Moog_Minitaur_Editor_Users_Manual.pdf))
- **14-bit MIDI output** (global, default OFF) — panel knobs then send 14-bit CC for smooth, zipper-free automation.
- **Decay/Release Mode 2** — decouples Decay and Release (the RELEASE switch then toggles which the knob edits); plus **Filter EG Delay/Hold** and **Amp EG Hold** timing stages.
- **Knob Mode** — Snap / Pass-Thru / Relative (default Relative) governs knob behavior on preset change.
- **Poly Voice Number / Max** — polychain up to 16 Moog synths.
- **Custom tuning scales** via MIDI Tuning Standard SysEx; **Top Octave Wrap** wraps notes above C5 back into the top octave (lead/SFX behavior).
- **Drone / "Gate Always On"** — hold GLIDE + Amp Sustain min→max to latch the gate open, letting the filter or external audio drone with no held note. ([Minitaurv2.2 Addendum](https://cdn.inmusicbrands.com/Moog/Minitaur/Minitaurv2.2_Addendum.pdf) ; [Moog latch-gate support](https://support.inmusicstore.com/en/support/solutions/articles/69000840568-moog-minitaur-sirin-how-do-i-latch-the-gate-on-a-minitaur-or-sirin-))

---

## GLIDE Shift-Panel Functions (firmware v2.1 / v2.2)

Hold **GLIDE** and turn/press another control. The front-panel labels do not show these. ([Minitaurv2.2 Addendum](https://cdn.inmusicbrands.com/Moog/Minitaur/Minitaurv2.2_Addendum.pdf) ; [macprovideo.com](https://macprovideo.com/article/new-articles/moog-releases-minitaur-analog-bass-synth-2-2-update-new-lfo-features))

| GLIDE + control | Function |
|---|---|
| OSC 1 WAVE | Next preset |
| OSC 2 WAVE | Previous preset |
| RELEASE (held ~1 s) | Save current preset to current slot |
| VCO 2 FREQ | VCO2 Beat (fine detune) |
| VCO 1 LEVEL | External Input Level |
| VCO 2 LEVEL | Hard Sync on/off *(v2.2)* |
| LFO RATE | LFO waveform / mod source select *(v2.2)* |
| VCO LFO AMT | LFO "VCO2 Only" *(v2.2)* |
| FILTER EG ATTACK | Filter EG Delay *(v2.2)* / Trigger Mode (older docs) |
| AMP EG ATTACK | EG Trigger Mode (Legato On/Off/Reset) |
| FILTER EG DECAY/RELEASE | Filter EG Hold |
| AMP EG DECAY/RELEASE | Amp EG Hold |
| AMP SUSTAIN min→max | Drone / latch gate on (max→min to disable) |
| AMP SUSTAIN to zero | Panic / All Notes Off |
| GLIDE RATE | Top Octave Wrap *(v2.2)* |
| RELEASE (held ~1 s, no GLIDE) | Toggle independent Decay/Release Mode 2 (LED blinks once/twice) |

---

## Firmware Evolution

All units share identical hardware and are flash-upgradeable via MIDI SysEx; the RAM for patch memory and code always existed, so every Minitaur can reach the latest firmware. ([gearspace.com](https://gearspace.com/board/electronic-music-instruments-and-electronic-music-production/1415346-moog-minitaur-hardware-software-update.html))

| Version | What it added |
|---|---|
| **v1.x** (~Feb 2012) | Original ship: NO onboard presets, NO editor — "not a preset synth." Already had CC control + SysEx state dump. Forum diagnostics attest early builds **v1.0.7** and **v1.1.1**. ([synthtopia.com](https://www.synthtopia.com/content/2012/02/25/moog-minitaur-now-shipping-whos-ordered-one/)) |
| **v2.0 "Rev 2"** (Oct 2012) | 100 onboard presets (front-panel recall); independent Decay/Release mode; assignable CV/Gate inputs; CV-to-MIDI; Editor/Librarian introduced. ([synthtopia.com](https://www.synthtopia.com/content/2012/10/16/moog-minitaur-free-rev-2-update/)) |
| **v2.1** (Editor v3.0, ~2014) | Front-panel preset save; polychain ≤16 Moog synths; MIDI Tuning Standard (custom scales); Program Change; MIDI Note Transpose (±2 oct); MIDI CC filter; load preset volume/mod-wheel; Knob Mode; Top Octave Wrap. Editor rebuilt standalone + VST/AU/RTAS/AAX. ([sweetwater.com](https://www.sweetwater.com/insync/moog-minitaur-editor-v3-firmware-v2-1/)) |
| **v2.1.1** (Editor v3.0.4) | Fixed MIDI Sustain Pedal bug; fixed 1-byte SysEx tuning import; slowed SysEx output to editor 50%; Windows USB driver port names. ([sweetwater.com](https://www.sweetwater.com/insync/moog-releases-firmware-v2-1-1-for-minitaur/)) |
| **v2.2** (Jul 22 2017, Editor v3.2) | New LFO waveforms (Square, Saw-down, Saw-up/Ramp, S&H) + **Filter EG** as mod source; **VCO2 Hard Sync**; **LFO to VCO2 only**; RPN 2 coarse tuning (−64..+63 st); shift-panel functions; up to 128 presets; full Windows support; Filter EG delay 0–10 s. ([synthtopia.com](https://www.synthtopia.com/content/2017/07/22/moog-updates-minitaur-firmware-editor/) ; [gearspace.com](https://gearspace.com/board/electronic-music-instruments-and-electronic-music-production/1165752-now-available-minitaur-firmware-v2-2-amp-minitaur-editor-librarian-v3-2-a.html)) |
| **v2.2.1** (~Jan 2018, Editor v3.2.1) | Fixed LFO Key Trigger when MIDI Sync on but no clock; fixed Envelope Release knobs in independent Decay/Release + Glide; improved LFO MIDI Sync. ([forum.moogmusic.com](https://forum.moogmusic.com/t/mtr-minitaur-firmware-v2-2-1-released/19443)) |
| **v2.2.2** (FINAL / current, Editor PC v3.3.0 / Mac v3.3.3) | Maintenance release; support's firmware-reload procedure names `Minitaur_Firmware_v2_2_2.syx`. **See errata below — this version is support-referenced but lacks public release notes.** ([Moog/inMusic troubleshooting](https://support.inmusicstore.com/en/support/solutions/articles/69000840566-moog-minitaur-general-troubleshooting)) |

**Check your version:** send the display-FW-version SysEx and the VCO Wave LEDs flash the number, or read it on the Editor Settings page (lower-right area).

---

## MIDI CC Map (MSB / LSB)

**Channel/clock:** sends + receives on ONE channel (default 1; set by holding all four panel switches then sending any MIDI on the target channel, remembered after power-down). Receives on DIN + USB simultaneously; **sends only from USB**; DIN IN is NOT passed to USB OUT. Receives MIDI Clock, Velocity, Pitch Bend (programmable 0–±24), CC, and (post-v2.1) Program Change. Does **NOT** transmit notes or respond to aftertouch. ([Minitaur User Manual](https://cdn.inmusicbrands.com/Moog/Minitaur/Minitaur_Manual.pdf))

**Resolution:** SENDS 7-bit CC for all params; RECEIVES 7-bit or 14-bit for **knob** params (MSB + LSB pair), 7-bit only for switches. Enabling 14-bit MIDI output (global) kills the semitone "zipper" quantization on automated knobs. **These are MSB/LSB CC pairs, NOT NRPN** (see errata). ([Minitaur User Manual](https://cdn.inmusicbrands.com/Moog/Minitaur/Minitaur_Manual.pdf) ; [midi.guide](https://midi.guide/d/moog/minitaur/))

| Section | Parameter | CC | 14-bit LSB | Values / notes |
|---|---|---:|---:|---|
| Performance | Mod Wheel | 1 | 33 | 0–127; panel VCO/VCF LFO amounts set the maxima |
| LFO | LFO Rate | 3 | 35 | 0.01–100 Hz unsynced; tempo-division when synced |
| Glide | Glide Rate | 5 | — | portamento time |
| VCA | Output Level / MIDI Volume | 7 | 39 | separate from physical master volume |
| LFO | VCF LFO Amount | 12 | 44 | up to ±5 oct cutoff mod |
| LFO | VCO LFO Amount | 13 | 45 | up to ±1 oct pitch mod |
| Mixer | VCO1 Level | 15 | 47 | clips filter ≥ ~2 o'clock |
| Mixer | VCO2 Level | 16 | 48 | clips filter ≥ ~2 o'clock |
| Oscillator | VCO2 Frequency | 17 | 49 | 64 = center, ~±1 oct |
| Oscillator | VCO2 Beat | 18 | 50 | 64 = no beat, ~±50 cents (do not send LSB alone) |
| Filter | Cutoff | 19 | 51 | ~20 Hz–20 kHz |
| Filter | KB Tracking | 20 | 54 | default ≈32 (~50%); 100% for pitched filter |
| Filter | Resonance | 21 | 53 | high = self-oscillation |
| Filter EG | Filter EG Amount | 22 | 50 | positive/negative sweep around midpoint |
| Filter EG | VCF Attack | 23 | 55 | ~1 ms–30 s |
| Filter EG | VCF Decay/Release | 24 | 56 | mode/switch dependent |
| Filter EG | VCF Sustain | 25 | 57 | |
| Mixer | External Input Level | 27 | 59 | unity ≈ midpoint, up to ~200% |
| Amp EG | VCA Attack | 28 | 60 | ~1 ms–30 s |
| Amp EG | VCA Decay/Release | 29 | 61 | mode/switch dependent |
| Amp EG | VCA Sustain | 30 | 62 | |
| Glide | Glide Switch | 65 | — | 0–63 off / 64–127 on |
| Oscillator | VCO1 Wave | 70 | — | 0–63 saw / 64–127 square |
| Oscillator | VCO2 Wave | 71 | — | 0–63 saw / 64–127 square |
| Envelopes | Release Switch | 72 | — | 0–63 off / 64–127 on |
| Envelopes | EG Trigger Mode | 73 | — | 0–42 Legato On / 43–85 Legato Off / **86–127 EG Reset** |
| Oscillator | Hard Sync | 80 | — | 0–63 off / 64–127 on *(v2.2)* |
| Oscillator | Note Sync | 81 | — | 0–63 off / 64–127 on |
| LFO | LFO Key Trigger | 82 | — | 0–63 off / 64–127 on |
| Glide | Legato Glide | 83 | — | 0–63 always / 64–127 legato only |
| LFO | LFO Shape / Mod Source | 85 | — | 0–21 Tri / 22–43 Sqr / 44–65 Saw-down / 66–87 Saw-up / 88–109 S&H / 110–127 Filter EG *(v2.2)* |
| LFO | LFO Clock Divide | 86 | — | stepped table (4 whole notes → 1/64 triplet) |
| LFO | LFO MIDI Sync | 87 | — | 0–63 internal / 64–127 MIDI clock |
| Filter | Filter Velocity Sens | 89 | — | default ≈64 |
| VCA | VCA Velocity Sens | 90 | — | default ≈64 |
| Keyboard | Key Priority | 91 | — | 0–42 Low / 43–85 High / **86–127 Last** |
| Glide | Glide Type | 92 | — | 0–42 LCR / 43–85 LCT / 86–127 EXP |
| Pitch Bend | Bend Up Range | 107 | — | 0–15 off / 16–31 2 / 32–47 3 / 48–63 4 / 64–79 5 / 80–95 7 / 96–111 12 / 112–127 24 st |
| Pitch Bend | Bend Down Range | 108 | — | same ranges as Up |
| LFO | VCO2 Mod Only | 112 | — | 0–63 off / 64–127 on *(v2.2)* |
| Control | All Sounds Off | 120 | — | any value |
| Control | Local Control | 122 | — | 0 off / 127 on (remembered) |
| Control | All Notes Off | 123 | — | any value |

**LFO Clock Divide (CC86) table** — 0–6 = 4 whole notes, 7–12 = 3 whole, 13–18 = 2 whole, 19–24 = whole+half, 25–30 = whole, 31–36 = dotted half, 37–42 = whole-note triplet, 43–48 = half, 49–54 = dotted-triplet, 55–60 = half-note triplet, 61–67 = quarter, 68–73 = dotted 8th, 74–79 = quarter triplet, 80–85 = 8th, 86–91 = dotted 16th, 92–97 = 8th triplet, 98–103 = 16th, 104–109 = 16th triplet, 110–115 = 32nd, 116–121 = 32nd triplet, 122–127 = 64th triplet. ([Minitaur User Manual](https://cdn.inmusicbrands.com/Moog/Minitaur/Minitaur_Manual.pdf) ; [midi.guide CSV](https://raw.githubusercontent.com/pencilresearch/midi/main/Moog/Minitaur.csv))

**CC tricks:**
- **Automate the hidden params from any sequencer** — every parameter is a CC, so full recall is possible without the Editor (laborious but works). Use 14-bit pairs for Cutoff (19+51), Resonance (21+53), VCO2 Freq (17+49), envelope times, and levels. ([soundonsound.com](https://www.soundonsound.com/reviews/moog-minitaur))
- **Local Control Off (CC 122 = 0)** breaks USB MIDI feedback loops in a DAW.
- **Program Change** recalls presets *only if a valid preset occupies that slot*; can be filtered on/off in globals.
- **Coarse tuning via RPN 2** (−64..+63 semitones), added in v2.2 — the documented high-level tuning protocol (there is no public NRPN chart). ([gearspace.com](https://gearspace.com/board/electronic-music-instruments-and-electronic-music-production/1165752-now-available-minitaur-firmware-v2-2-amp-minitaur-editor-librarian-v3-2-a.html))
- **SysEx state dump** (firmware 1.0.7+): `F0 04 08 1B 00 00 F7` makes the Minitaur transmit its current settings as CCs. **Version request:** `F0 04 08 16 00 00 F7`. **Custom CV start note:** `F0 04 08 23 18 00 nn F7`. ([forum.moogmusic.com](https://forum.moogmusic.com/t/minitaur-dump/11696) ; [macprovideo.com](https://macprovideo.com/article/new-articles/moog-releases-minitaur-analog-bass-synth-2-2-update-new-lfo-features))
- **Sirin SysEx** — identical commands with the header byte changed, e.g. version request becomes `F0 04 18 16 00 00 F7`. ([modwiggler.com](https://www.modwiggler.com/forum/viewtopic.php?t=212654&start=75))
- **Fixed CC implementation** — CCs are not user-reassignable in firmware 2.x; use a MIDI translator / controller-mapping layer if your hardware sends fixed CCs. ([forum.moogmusic.com](https://forum.moogmusic.com/t/can-you-edit-minitaurs-cc-implementation/20788))

---

## Sound-Design Recipes (exact settings)

Values are **0–127 MIDI/Editor** where given, clock positions where the source used a knob. **Always warm up 15 min and tune by ear** — analog unit variation and warm-up state shift every result. ([attackmagazine.com](https://www.attackmagazine.com/technique/synth-secrets/synthesizing-bass-for-3-different-genres-with-moog-minitaur/))

**Rolling Techno Sub** (Attack Magazine) — Init patch, **Note Sync ON**. Single VCO1 square at full level, VCO2 off. Cutoff ~halfway, Resonance ~9 o'clock. Amp Decay/Release ~3 o'clock, Sustain ~halfway. Filter EG: Attack ~10 o'clock, Decay ~11, Sustain matching; turn **Filter EG Amount counter-clockwise (negative)** ~10 o'clock so the filter pumps with the beat. ([attackmagazine.com](https://www.attackmagazine.com/technique/synth-secrets/synthesizing-bass-for-3-different-genres-with-moog-minitaur/))

**Classic House Bass** (Attack Magazine) — Both VCOs saw; VCO1 full, VCO2 ~half, detune VCO2 slightly. Cutoff ~320 Hz, Resonance ~10 o'clock, EG Amount ~2 o'clock. Amp: Attack 0, Decay ~10 o'clock, Sustain just below, **Release OFF** for staccato. Filter EG: Attack 0, Decay & Sustain ~9 o'clock. ([attackmagazine.com](https://www.attackmagazine.com/technique/synth-secrets/synthesizing-bass-for-3-different-genres-with-moog-minitaur/))

**Dread / Reverse Bass** (Attack Magazine) — Both VCOs square; VCO1 full, VCO2 ~10 o'clock until phasing. Cutoff ~1000 Hz, light Resonance. Amp: Attack 0, Decay ~1 o'clock, Sustain ~3 o'clock, Release ON. Filter EG: Attack 0, Decay ~1 o'clock, Sustain ~12 o'clock; turn **Filter EG Amount counter-clockwise** for a fade-in; set **EG Trigger Mode = Legato Off** to stop overlapping-note retrigger. ([attackmagazine.com](https://www.attackmagazine.com/technique/synth-secrets/synthesizing-bass-for-3-different-genres-with-moog-minitaur/))

**Clean Taurus Sub** (low-resonance fundamental) — VCO1 saw, VCO2 saw, VCO2 Freq 64 (unison), Beat 64–65. Note Sync ON. VCO1 Lvl 86, VCO2 Lvl 74. Cutoff 55, **Resonance 6–10** (deep sub needs little resonance). Filter EG Amt 18–25, KB Track 32. VCF A/D/S 0/38/40, VCA A/D/S 0/70/110. Release off (or on @35 for legato tails). ([Minitaur User Manual](https://cdn.inmusicbrands.com/Moog/Minitaur/Minitaur_Manual.pdf) ; [gearspace.com](https://gearspace.com/board/electronic-music-instruments-and-electronic-music-production/772701-minitaur-sub-bass.html))

**Acid / 303-style** — ONE oscillator (saw classic / square rounder), VCO1 Lvl 90–105, VCO2 Lvl 0. Cutoff 42–58, **Resonance 92–110** (just below self-oscillation), Filter EG Amt 88–112 (positive), KB Track 20–40, **Filter Velocity 90–115** for accents. VCF A/D/S 0/34–52/0, VCA A/D/S 0/45–65/120–127. **Glide ON, Rate 20–32, Type EXP, Legato ON, Key Priority Last.** Sequence overlapping notes for slides, high velocity for accents. The Minitaur is a fixed 24 dB ladder (no 3-pole option), so lean on resonance + envelope phrasing. ([forum.moogmusic.com](https://forum.moogmusic.com/viewtopic.php?f=7&t=9077) ; [gearspace.com](https://gearspace.com/board/electronic-music-instruments-and-electronic-music-production/1356265-moog-vs-tb-303-a.html))

**808 Self-Oscillating Kick / Sine** — **VCO1 Lvl 0, VCO2 Lvl 0, Ext In 0.** Cutoff 34–42 (tune by ear to the kick fundamental), **Resonance 123–127** (self-oscillation = playable sine). Filter EG Amt 80–100 (positive, fast = pitch "blip"), KB Track 0 for one tuned kick. VCF A/D/S 0/62–82/0, VCA A/D/S 0/58–78/0. EG Trigger = EG Reset or Legato Off, Release off, low notes (C0–C1). For a longer boom: lower EG Amt to 55–70, lower cutoff, extend VCA Decay; for a click add a tiny VCO1 square @ Lvl 5–12. ([musicradar.com](https://www.musicradar.com/reviews/tech/moog-minitaur-530857) ; [forum.vintagesynth.com](https://forum.vintagesynth.com/viewtopic.php?t=32649))

**Reese Bass** — Two detuned saws, VCO1 Lvl 96, VCO2 Lvl 96, VCO2 Freq 64, **VCO2 Beat 74** (slow) / 84 (wide) / 44 (opposite detune). Note Sync OFF for phase motion (ON for controlled attacks). Cutoff 70–82, Resonance 8–18, Filter EG Amt 5–15, KB Track 32–60. VCA A/D/S 0/80/127. LFO triangle, Rate 6–12 (or 1/2-note synced), VCO LFO Amt 2–5, VCF LFO Amt 5–12. Tip: tune VCO2 to a 5th/7th to imply a missing fundamental; push both levels past 110 for dirt. ([modwiggler.com](https://modwiggler.com/forum/viewtopic.php?t=122491))

**Hard-Sync Growl / pseudo-FM** *(v2.2)* — VCO1 saw, VCO2 square/saw, **Hard Sync ON + VCO2 Mod Only ON.** VCO2 Freq 88–110, Beat 64. VCO1 Lvl 75–90, VCO2 Lvl 95–115. Cutoff 62–78, Resonance 18–32, Filter EG Amt 30–50. LFO = Filter EG (sweep) or Triangle (wobble), Key Trigger ON, VCO LFO Amt 50–85, VCF LFO Amt 10–20. VCF A/D/S 0/42–60/0, VCA A/D/S 0/60/127. **Automation move:** 14-bit sweep of VCO2 Frequency 64→120 — pitch stays anchored on VCO1 while harmonics tear upward. ([Minitaurv2.2 Addendum](https://cdn.inmusicbrands.com/Moog/Minitaur/Minitaurv2.2_Addendum.pdf) ; [Editor Manual](https://files.kraftmusic.com/media/ownersmanual/Moog_Minitaur_Editor_Users_Manual.pdf))

**S&H Rhythmic Hard-Sync** *(v2.2)* — start from Hard-Sync Growl, then LFO Shape = Sample & Hold, **LFO MIDI Sync ON**, Clock Divide 61–67 (1/4) / 80–85 (1/8) / 98–103 (1/16). VCO LFO Amt 35–55, VCF LFO Amt 8–20, Key Trigger ON for repeatable hits. ([presetpatch.com](https://www.presetpatch.com/synth/moog-minitaur))

**Percussive Pluck** — VCO1 square, VCO2 saw, VCO2 Freq 32–45 (sub-oct) or 64 (unison), Note Sync ON. VCO1 Lvl 70, VCO2 Lvl 86. Cutoff 36–50, Resonance 28–42, **Filter EG Amt 85–110**, Filter Velocity 60–90. VCF A/D/S 0/22–34/0, VCA A/D/S 0/26–40/0. EG Trigger = Legato Off / EG Reset, Release off. Slap variant: VCO1 saw, VCO2 square, Cutoff 60, VCA Velocity 70–100. ([Minitaur User Manual](https://cdn.inmusicbrands.com/Moog/Minitaur/Minitaur_Manual.pdf))

**Driven Ladder Growl (no Multidrive)** — VCO1 saw, VCO2 square, Beat 68–76. **VCO1 Lvl 112–127, VCO2 Lvl 105–127** (clip the filter hard). Cutoff 58–72, Resonance 18–32, Filter EG Amt 40–65, KB Track 32–60. VCF A/D/S 0/38–55/20, VCA A/D/S 0/70/127. Optional **external feedback**: headphone out → EXT IN at very low level (Ext In Lvl 15–45) — start master low with a downstream limiter; can get loud/unstable fast. For reliable grit, add an MF Drive instead. ([elektronauts.com](https://www.elektronauts.com/t/moog-minitaur-drive-fb-mod/70861))

**External Audio Filter/VCA Processor** — VCO1 Lvl 0, VCO2 Lvl 0, **Ext In Lvl 64** (unity) / 90–110 (drive). Open the gate via latch-gate, a sustained MIDI note, or +5V Gate. VCA Attack 0 / Sustain 127 for static processing. Cutoff 40–90, Resonance 0–70, Filter EG Amt 0 (static) or 40–100 (rhythmic). LFO MIDI Sync ON + VCF LFO Amt 10–50 for tempo-locked sweeps. ([Minitaur User Manual](https://cdn.inmusicbrands.com/Moog/Minitaur/Minitaur_Manual.pdf) ; [Moog latch-gate support](https://support.inmusicstore.com/en/support/solutions/articles/69000840568-moog-minitaur-sirin-how-do-i-latch-the-gate-on-a-minitaur-or-sirin-))

**Lead / SFX despite bass range** — **Top Octave Wrap ON.** VCO1 square, VCO2 saw, Hard Sync ON (sync lead) / off (whistle), VCO2 Freq 90–120, VCO2 Mod Only ON if synced. Cutoff 75–110, Resonance 40–95, **KB Track 80–127.** LFO = Saw-up/down or Filter EG, Rate 20–50 (or 1/8–1/16 synced). Pitch Bend Range 12/24 st for drops. VCA Sustain 127 (lead) / 0 (blips). Self-osc filter + KB Track 100% = R2-D2 bleeps; triangle LFO (0.01–100 Hz) into filter = "Dr Who" effects. ([musicradar.com](https://www.musicradar.com/reviews/tech/moog-minitaur-530857) ; [soundonsound.com](https://www.soundonsound.com/reviews/moog-minitaur))

---

## Editor & Integration

- **Minitaur Editor/Librarian** (free after registration) — standalone + VST/AU/RTAS/AAX; MIDI-control only ("does not make or process sound"). Layouts: **Panel** (mirrors front panel), **Under The Hood** (software/MIDI-only params), **Extended** (both + individual release-stage controls), plus a Settings/global page. **GET** pulls hardware state in, **SEND** pushes editor state out, **AUTO SEND** makes edits affect hardware immediately. Latest: PC v3.3.0 / Mac v3.3.3. ([Editor Manual](https://files.kraftmusic.com/media/ownersmanual/Moog_Minitaur_Editor_Users_Manual.pdf))
- **Settings page exposes:** firmware version, MIDI in/out + channels, CV mapping/calibration, note calibration, SysEx ID, Program Change send/receive, triplets, MIDI Note Transpose, MIDI CC filter, 14-bit MIDI, Echo DIN/USB, Echo MIDI. ([Editor Manual](https://files.kraftmusic.com/media/ownersmanual/Moog_Minitaur_Editor_Users_Manual.pdf))
- **DAW / Ableton gotcha** — put the Editor plugin on a track; add a separate MIDI lane (External Instrument) pointed at the Minitaur. **If the Minitaur appears in Ableton's top "Control Surface" device list AND its MIDI ports are enabled, a MIDI conflict/freeze occurs** — disable it as a control surface and enable only Track In/Out. For Program-Change GUI-follow, turn **Echo MIDI ON**. For LFO sync, enable Sync on both Minitaur MIDI ports + MIDI Sync in the Editor plugin. ([launchclip.com](http://launchclip.com/moog-minitaur-ableton-midi-fix/) ; [Moog Ableton sync support](https://support.inmusicstore.com/en/support/solutions/articles/69000840567-moog-minitaur-sirin-how-can-i-get-minitaur-sirin-to-sync-to-ableton-))
- **Windows multi-client driver** — DAW + Editor can't share the same USB ports unless the Minitaur USB driver is installed; that driver path requires firmware **v2.2.0+**. ([Moog/inMusic troubleshooting](https://support.inmusicstore.com/en/support/solutions/articles/69000840566-moog-minitaur-general-troubleshooting))
- **External audio input** — routes through mixer → filter → VCA but is **silent until the VCA opens** (MIDI Note On, +5V Gate, or latch-gate/drone). Works on polyphonic sources to "warm up sterile digital"; paraphonic when combined with CV/Gate. ([Minitaur User Manual](https://cdn.inmusicbrands.com/Moog/Minitaur/Minitaur_Manual.pdf))
- **CV/Gate** — Pitch / Filter / Volume CV (0 to +5V, ~1V/oct on pitch) and +5V Gate (overrides MIDI triggering). Only ~4 octaves of CV range (0–+5V, **NOT** the Mother-32's ±5V). CP-251 is the recommended companion for complex modulation. Calibrate Pitch CV at +1V then +4V — the spread must be exactly 3V; run note calibration first after warm-up. ([Minitaur User Manual](https://cdn.inmusicbrands.com/Moog/Minitaur/Minitaur_Manual.pdf))
- **Polychain** — up to 16 Moog synths (Little/Slim Phatty, Sub Phatty, Sub 37, Minitaur) via Poly Voice Number/Max; never set a unit's voice number above the max or it may not play. No-editor pseudo-duophony: one unit Low priority, another High/Last. For stacked layering, send the same MIDI to multiple units rather than polychaining. ([Editor Manual](https://files.kraftmusic.com/media/ownersmanual/Moog_Minitaur_Editor_Users_Manual.pdf) ; [forum.moogmusic.com](https://forum.moogmusic.com/viewtopic.php?f=11&t=28609))
- **DFAM / Mother-32 pairing** — DFAM has no MIDI, so drive the Minitaur from DFAM: Trigger→Gate, Pitch→Pitch CV, Velocity→Volume/Filter CV; or use a BeatStep Pro / A4 as the control center. ([gearspace.com](https://gearspace.com/board/electronic-music-instruments-and-electronic-music-production/1202124-sync-moog-dfam-minitaur.html))
- **Firmware tools** — SysEx Librarian (macOS) / Bome SendSX (Windows); reduce transfer speed if it fails. Factory restore trio: `_Minitaur_Factory_Restore_Cmd.syx`, `_Minitaur_Pitch_CV_RESET_Cmd.syx`, `all_presets_100_v2.syx`. Bootloader: hold both OSC WAVE buttons on power-up, press Release until only its LED is lit, erase then send the firmware `.syx`. ([Moog/inMusic troubleshooting](https://support.inmusicstore.com/en/support/solutions/articles/69000840566-moog-minitaur-general-troubleshooting))

---

## Calibration & Quirks

- **Warm-up** — 15 min to reach concert pitch; operate 50–100°F (≈10–37°C), out of direct sunlight, or the VCOs drift. ([Minitaur User Manual](https://cdn.inmusicbrands.com/Moog/Minitaur/Minitaur_Manual.pdf))
- **Pitch CV offset** — a notorious quirk where 0/1/2V yields ~G or G#/Ab instead of C; calibrate at Ab1/Ab4 or send a MIDI C first. Input is 0–+5V only (~4 oct). Only 4 internal trimpots; tuning/CV is SysEx-automated. ([forum.moogmusic.com](https://forum.moogmusic.com/viewtopic.php?t=23936) ; [modwiggler.com](https://modwiggler.com/forum/viewtopic.php?t=132120))
- **Decay-to-zero clicks** — SOS: "I never set the Minitaur's Decay knob to zero." With Attack and Decay both at zero, clicking is "always horrid at the end" of notes. ([soundonsound.com](https://www.soundonsound.com/reviews/moog-minitaur))
- **MIDI freeze / stuck notes** — more common over USB; panic via GLIDE + Amp Sustain to zero, or load an Init preset. Older firmware could freeze / lose presets / stop the LFO — update to v2.2.2 + use the restore trio. ([gearspace.com](https://gearspace.com/board/electronic-music-instruments-and-electronic-music-production/1147091-help-moog-minitaur-freezes.html))
- **Mod Wheel gotcha** — on power-up the VCO/VCF LFO Amount knobs control depth directly until the first Mod Wheel message arrives, then the wheel takes over. "Load Preset Mod Wheel" can make presets sound unexpected. ([Minitaur User Manual](https://cdn.inmusicbrands.com/Moog/Minitaur/Minitaur_Manual.pdf))
- **Laptop PSU noise** — USB chattering from a laptop power supply; use a different port or run on battery. ([soundonsound.com](https://www.soundonsound.com/reviews/moog-minitaur))
- **macOS "Hardware Disconnected"** — reselect MIDI ports, connect directly (no hub), match firmware/editor versions, try different USB ports. ([modwiggler.com](https://www.modwiggler.com/forum/viewtopic.php?t=204759))

**Sirin cross-reference** — limited-edition Minitaur variant (NAMM 2019, 2,500 units worldwide, $599 launch). Same "Minitaur Main Board" but **smaller VCO timing capacitors shift the range up to E0–D8** (plays well above middle C). Same engine, hard sync, 6 LFO shapes, 128 presets, same editor architecture; slightly less bottom-end per some users. SysEx = Minitaur commands with the header byte changed. ([synthtopia.com](https://www.synthtopia.com/content/2019/01/24/moog-sirin-takes-the-minitaur-to-new-heights/) ; [robomuso.wordpress.com](https://robomuso.wordpress.com/2019/12/04/moog-sirin-review/))

---

## Errata & Contradictions

- **Manual CC errata** (v2.1 addendum): **CC 73** EG Reset is 86–127 (manual wrongly said 85–127); **CC 91** Last is 86–127 (manual wrongly said 87–127). The table above uses the corrected values. ([Minitaur User Manual](https://cdn.inmusicbrands.com/Moog/Minitaur/Minitaur_Manual.pdf))
- **"NRPN" is really MSB/LSB** — the Minitaur uses 14-bit CC pairs (MSB + LSB), not true NRPN. midi.guide's CSV leaves NRPN fields blank; v2.2 adds RPN 2 for coarse tuning. Some third-party charts loosely mislabel the CC pairs "NRPN." ([midi.guide CSV](https://raw.githubusercontent.com/pencilresearch/midi/main/Moog/Minitaur.csv))
- **v2.2.2 vs v2.2.1** — Moog's downloads page still lists **v2.2.1** as latest (with Editor PC v3.3.0 / Mac v3.3.3), while the support firmware-reload article names `Minitaur_Firmware_v2_2_2.syx` and Reddit users report units showing 2.2.2. No public 2.2.2 release notes exist. Treat **2.2.1 as the latest release-note-backed firmware** and 2.2.2 as the support-referenced final; **check the Editor Settings page before downgrading or overwriting**. ([Moog downloads](https://www.moogmusic.com/downloads/?product=Minitaur) ; [Reddit 2.2.2](https://www.reddit.com/r/synthesizers/comments/1kvo3b6/minitaur_firmware_222/))
- **First-ship firmware (v1.0 vs v1.1)** — only forum evidence (v1.0.7, v1.1.1 attested), no authoritative Moog primary source for the literal first label.
- **Preset count varies** — manual says ships with ~94; Rev 2 stored 100; restore file is `all_presets_100_v2.syx`; slots = 128. Do not assume every unit ships with an identical filled bank.
- **Top Octave Wrap changes the C5 ceiling behavior** — with it ON, notes above C5 wrap into the top octave instead of being ignored. Keep bass sequences in-range; enable Wrap only for deliberate lead/SFX.
- **Recipe values are starting points** — analog unit-to-unit variation + warm-up state mean you should always tune by ear.

---

## Sound Design Index

Grep this file for recipe names:
- `Rolling Techno Sub` / `Classic House Bass` / `Dread / Reverse Bass`
- `Clean Taurus Sub` / `Acid / 303-style` / `Reese Bass`
- `808 Self-Oscillating Kick` / `Percussive Pluck`
- `Hard-Sync Growl` / `S&H Rhythmic Hard-Sync` / `Driven Ladder Growl`
- `External Audio Filter/VCA Processor` / `Lead / SFX`
- Concepts: `Note Sync` / `self-oscillat` / `Hard Sync` / `VCO2 Mod Only` / `Filter EG Amount` / `Glide Type` / `latch gate` / `Top Octave Wrap`

## Resources

- **Official** — [Minitaur Manual PDF](https://cdn.inmusicbrands.com/Moog/Minitaur/Minitaur_Manual.pdf) · [v2.2 Addendum PDF](https://cdn.inmusicbrands.com/Moog/Minitaur/Minitaurv2.2_Addendum.pdf) · [Editor Manual PDF](https://files.kraftmusic.com/media/ownersmanual/Moog_Minitaur_Editor_Users_Manual.pdf) · [Downloads](https://www.moogmusic.com/downloads/?product=Minitaur) · [Troubleshooting / SysEx / firmware reload](https://support.inmusicstore.com/en/support/solutions/articles/69000840566-moog-minitaur-general-troubleshooting)
- **MIDI** — [midi.guide CC map](https://midi.guide/d/moog/minitaur/) · [raw CSV](https://raw.githubusercontent.com/pencilresearch/midi/main/Moog/Minitaur.csv)
- **Reviews / deep-dives** — [Sound On Sound (definitive hidden-params review)](https://www.soundonsound.com/reviews/moog-minitaur) · [Attack Magazine bass recipes](https://www.attackmagazine.com/technique/synth-secrets/synthesizing-bass-for-3-different-genres-with-moog-minitaur/) · [MusicRadar](https://www.musicradar.com/reviews/tech/moog-minitaur-530857) · [MatrixSynth](https://www.matrixsynth.com/2012/10/exclusive-moog-minitaur-review-all-bass.html)
- **Patches** — [PresetPatch (free .syx + blank sheet)](https://www.presetpatch.com/synth/moog-minitaur) · [Ultimate Preset](https://www.ultimatepreset.com/product/up-toro-moog-minitaur-bass-presets/) · [Robust American Patches Vol. I](https://www.robustamericanpatches.com/products/volume-i-for-the-moog-minitaur) · [LFO.store Analog Tones (Minitaur/Sirin)](https://lfo.store/shop/hardware-synths/moog-minitaursirin/moog-minitaursirin-analog-tones-100-presets-by-anton-anru/)
- **Forums** — [Moog forum](https://forum.moogmusic.com/) · Gearspace · MOD WIGGLER · Reddit r/synthesizers, r/moog · [Reddit alt-panel cheat sheet](https://www.reddit.com/r/synthesizers/comments/r69fd8/moog_minitaur_cheat_sheet_for_alternate_panel/)
