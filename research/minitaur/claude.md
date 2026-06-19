# The Definitive Reference for Learning & Mastering the Moog Minitaur

## TL;DR
- The Minitaur is a 100% analog, 2-VCO monophonic bass synth (notes MIDI 0–72 only) whose "real" feature set lives **under the hood** via MIDI CC and the free Editor — Sound On Sound counts "no fewer than 20 additional voicing parameters" Moog calls under-the-hood — and which gained nearly all its programmability (100/128 presets, hard sync, multiple LFO shapes, CV remapping, polychain) through free firmware, culminating in the final **firmware v2.2.2 / Editor v3.3.0**.
- It has **no Multidrive** (that's the Sub Phatty/Sub 37) — its "dirt" comes from overdriving the mixer into the ladder filter; its signature tricks are Note Sync for punch, the self-oscillating filter as a sine source, and routing external audio through the filter.
- Master it by learning the full CC map (every knob = a CC; knobs are 14-bit capable), exploiting the editor's hidden parameters, and using community recipes ([Attack Magazine](https://www.attackmagazine.com/technique/synth-secrets/synthesizing-bass-for-3-different-genres-with-moog-minitaur/), [Moog forum](https://forum.moogmusic.com/)) for sub, acid, reese and percussion.

## Key Findings
1. The Minitaur is based on the Taurus I/Taurus 3 engine: 2 VCOs (saw/square), a classic 24 dB/oct Moog ladder filter, two Minimoog-style envelopes (ADS with shared Decay/Release), and a single triangle LFO at launch. The pitch ceiling is a hard C5 (MIDI note 72) due to its V/Hz oscillator design.
2. Every front-panel control except Fine Tune and Volume transmits/receives MIDI CC; knob parameters accept 7-bit OR 14-bit (MSB/LSB) values for high resolution.
3. The "under the hood" parameters (Note Sync, filter key tracking, velocity sensitivities, pitch bend ranges, glide type/legato, LFO sync/key trigger, trigger mode, key priority) are the key to mastery and are only reachable via CC, the Editor, or (post-v2.2) GLIDE-shift panel combos.
4. Firmware evolution transformed the synth: presets, CV remapping, polychain, custom tuning, hard sync, and new LFO shapes were all added free.
5. The Minitaur does NOT have Multidrive/overdrive as a dedicated circuit — a common point of confusion with the Sub Phatty and Sub 37.

---

## 1. Hidden Features & Editor-Only Parameters Most Owners Never Use

Sound On Sound counted "no fewer than 20 additional voicing parameters" that Moog calls "under the hood." These are accessible only via MIDI CC, the Editor, or (after firmware v2.2) the GLIDE "shift" panel functions. ([soundonsound.com](https://www.soundonsound.com/reviews/moog-minitaur))

**The hidden/under-the-hood parameter list (from the Editor & MIDI chart):**
- **Note Sync (CC 81)** — resets both oscillator phases to zero on every Note On. The single most important hidden control: it eliminates random phase cancellation in detuned patches and guarantees maximum, consistent attack "punch" on each note. SOS and Attack Magazine both recommend leaving it ON for bass. ([soundonsound.com](https://www.soundonsound.com/reviews/moog-minitaur) ; [attackmagazine.com](https://www.attackmagazine.com/technique/synth-secrets/synthesizing-bass-for-3-different-genres-with-moog-minitaur/))
- **VCO 2 Beat (CC 18)** — fine offset for VCO2, ±50 cents, default 64 — for slow detune beating.
- **Filter Keyboard Tracking (CC 20)** — 0–200%, default 32 (~50%). Set to 100% to play the self-oscillating filter as a true pitched oscillator across the keyboard. SOS found units shipped not tracking at 100% and fixed it with this parameter. ([soundonsound.com](https://www.soundonsound.com/reviews/moog-minitaur))
- **Filter Velocity Sensitivity (CC 89)** and **VCA Velocity Sensitivity (CC 90)** — defaults 64; SOS notes max depth is subtle.
- **Pitch Bend Up/Down ranges (CC 107/108)** — independently settable to Off/2/3/4/5/7/12/24 semitones; default ±3.
- **Glide Type (CC 92)** — Linear Constant Rate (default), Linear Constant Time, Exponential (the Taurus-like curve).
- **Legato Glide (CC 83)** — glide only on overlapping notes (303-style "slide").
- **LFO MIDI Sync (CC 87), LFO Clock Divide (CC 86), LFO Key Trigger (CC 82)** — clock-synced LFO from 4 whole notes down to 1/64 triplet; key trigger resets the LFO each note.
- **EG Trigger Mode (CC 73)** — Legato On / Legato Off / EG Reset.
- **Key Priority (CC 91)** — Low / High / Last (default Last).
- **External Input Level (CC 27)** — 0–200%, default 64.
- **VCA initial level (CC 7)** and **Local Control (CC 122)**.

**Editor-only / global hidden gems:**
- **CV Mapping** — Pitch and Volume CV inputs can be remapped to control *any* parameter; the Gate input can drive any on/off parameter (e.g., switch oscillator waveshape via gate). Configured only in the Editor's Hardware Settings; global, saved on power-down. ([Minitaur v2.2 Addendum PDF](https://cdn.inmusicbrands.com/Moog/Minitaur/Minitaurv2.2_Addendum.pdf))
- **CV-to-MIDI conversion** — any CV at the inputs is converted to that parameter's CC out the USB port, turning the Minitaur into a multi-channel CV→MIDI converter (for modular, CP-251, Etherwave Pro). ([Minitaur Manual PDF](https://cdn.inmusicbrands.com/Moog/Minitaur/Minitaur_Manual.pdf))
- **14-bit MIDI output** (global, default OFF) — panel knobs then send 14-bit CC for smooth, zipper-free automation.
- **Decay/Release Mode 2** — decouples Decay and Release (RELEASE switch then toggles which the knob edits).
- **Knob Mode** — Snap / Pass-Thru / Relative (default Relative) governs knob behavior on preset change.
- **Poly Voice Number/Max** — polychain up to 16 Moog synths.
- **Filter EG Delay/Hold time, Amp EG Hold time** — added in later firmware via GLIDE-shift.
- **Custom tuning scales** via MIDI Tuning Standard SysEx (Scale/Octave 1-byte and 2-byte). ([Minitaur Manual PDF](https://cdn.inmusicbrands.com/Moog/Minitaur/Minitaur_Manual.pdf))
- **Drone / "Gate Always On"** — GLIDE + Amp EG Sustain to zero then to max holds the gate open, letting external audio or the filter drone without a held note. ([Minitaur v2.2 Addendum PDF](https://cdn.inmusicbrands.com/Moog/Minitaur/Minitaurv2.2_Addendum.pdf))

**GLIDE shift-panel functions (firmware v2.1/v2.2)** — hold GLIDE and turn/press:
- VCO 2 FREQ knob → VCO2 Beat; VCO 1 LVL → Ext Input Level; Filter Attack → Trigger Mode; Filter Decay → Filter EG Hold; Amp Decay → Amp EG Hold; Amp Sustain to zero → Panic/All Notes Off.
- (v2.2) LFO Rate → LFO waveform; VCO 2 LVL → Hard Sync on/off; VCO LFO AMT → LFO "VCO2 Only"; Filter Attack → Filter EG Delay; GLIDE → Top Octave Wrap. ([macprovideo.com](https://macprovideo.com/article/new-articles/moog-releases-minitaur-analog-bass-synth-2-2-update-new-lfo-features))
- Preset navigation: GLIDE + VCO1 = next preset; GLIDE + VCO2 = previous; GLIDE + RELEASE (held 1s) = save. ([Minitaur Manual PDF](https://cdn.inmusicbrands.com/Moog/Minitaur/Minitaur_Manual.pdf))

---

## 2. Firmware Evolution & Current Full Feature Set

The Minitaur is "flash upgradeable via MIDI SysEx." All units share identical hardware; SOS confirms "all Minitaurs can be upgraded… the RAM for the patch memories and code space always existed." ([gearspace.com](https://gearspace.com/board/electronic-music-instruments-and-electronic-music-production/1415346-moog-minitaur-hardware-software-update.html))

- **v1.x (original, ~Feb 2012):** Shipped with NO onboard preset memory and NO editor; announced at NAMM January 2012 and described as "not a preset synth." Forum diagnostics confirm early builds v1.0.7 and v1.1.1 existed. ([synthtopia.com](https://www.synthtopia.com/content/2012/02/25/moog-minitaur-now-shipping-whos-ordered-one/) ; [forum.moogmusic.com](https://forum.moogmusic.com/viewtopic.php?f=11&t=28654))
- **v2.0 "Rev 2" (Oct 16, 2012):** Added 100 onboard presets recallable from the front panel; independent Decay/Release mode; assignable CV/Gate inputs (Pitch/Mod to any parameter, Gate to on/off params); CV-to-MIDI conversion. Editor/Librarian introduced. ([synthtopia.com](https://www.synthtopia.com/content/2012/10/16/moog-minitaur-free-rev-2-update/))
- **v2.1 (with Editor v3.0, ~2014):** Front-panel preset save; polychain up to 16 Moog synths; MIDI Tuning Standard (custom scales); Program Change support; MIDI Note Transpose (±2 octaves); MIDI CC filter; load preset volume/mod-wheel; Knob Mode (Snap/Pass-Thru/Relative); Wrap Top Octave behavior. Editor rebuilt as standalone + VST/AU/RTAS/AAX. ([sweetwater.com](https://www.sweetwater.com/insync/moog-minitaur-editor-v3-firmware-v2-1/))
- **v2.1.1:** Fixed MIDI Sustain Pedal bug; fixed 1-byte SysEx tuning import; slowed SysEx output to editor by 50%; added port names for new Windows USB driver (Editor v3.0.4). ([sweetwater.com](https://www.sweetwater.com/insync/moog-releases-firmware-v2-1-1-for-minitaur/))
- **v2.2 (July 22, 2017, Editor v3.2):** New LFO waveforms — Square, Saw, Ramp (Saw Up), Sample & Hold, and **Filter EG** as a mod source (analog percussion); **VCO2 Hard Sync**; **LFO to VCO2 only**; RPN 2 coarse tuning (±63 semitones); shift-panel functions; up to 128 presets; full Windows support; new Filter EG delay range 0–10s. ([synthtopia.com](https://www.synthtopia.com/content/2017/07/22/moog-updates-minitaur-firmware-editor/) ; [macprovideo.com](https://macprovideo.com/article/new-articles/moog-releases-minitaur-analog-bass-synth-2-2-update-new-lfo-features))
- **v2.2.1 (~Jan 2018, Editor v3.2.1):** Fixed LFO Key Trigger when MIDI Sync on but no clock present; fixed Envelope Release knobs in independent decay/release + Glide; improved LFO MIDI Sync. ([forum.moogmusic.com](https://forum.moogmusic.com/t/minitaur-firmware-2-2-1/19627))
- **v2.2.2 (FINAL / current, Editor v3.3.0):** Maintenance release; named in Moog/inMusic support as `Minitaur_Firmware_v2_2_2.syx`. This is the latest firmware as of 2026; no newer version exists. ([inMusic Support](https://inmusicsupport.freshdesk.com/en/support/solutions/articles/69000840566-moog-minitaur-general-troubleshooting))

**To check your version:** send the display-FW-version SysEx; the VCO Wave LEDs flash the version number.

---

## 3. MIDI / CC / NRPN Control Tricks (Full Chart)

**Channel/clock:** Sends and receives on ONE channel (default 1; set via holding all four panel switches then sending any MIDI). Receives on DIN + USB simultaneously; sends only from USB. DIN IN is NOT passed to USB OUT. Receives MIDI Clock; recognizes Velocity (Note On), Pitch Bend (programmable 0–±24), CC, and (post-v2.1) Program Change. Does NOT transmit notes or respond to aftertouch. ([Minitaur Manual PDF](https://cdn.inmusicbrands.com/Moog/Minitaur/Minitaur_Manual.pdf))

**Resolution note:** Minitaur SENDS 7-bit CC for all parameters; it RECEIVES 7-bit or 14-bit for knob parameters (MSB + LSB pair), but only 7-bit for switches. Enabling 14-bit MIDI output (global) makes knobs send fine resolution to avoid the semitone "zipper" quantization SOS demonstrated. The Minitaur uses MSB/LSB CC pairs rather than NRPN. ([midi.guide](https://midi.guide/d/moog/minitaur/) ; [soundonsound.com](https://www.soundonsound.com/reviews/moog-minitaur))

**Complete CC map (MSB / LSB):**

*Oscillators:* VCO1 Wave **70** (0–63 saw / 64–127 square); VCO2 Wave **71**; VCO2 Frequency **17/49** (64=center, ±12 semitones); VCO2 Beat **18/50** (±50 cents); Hard Sync **80**; Note Sync **81**.

*Modulation/LFO:* LFO Rate **3/35**; LFO Shape **85** (0–21 Tri / 22–43 Sqr / 44–65 Saw Down / 66–87 Saw Up / 88–109 S&H / 110–127 Filter EG); LFO→VCO Amount **13/45**; LFO→VCF Amount **12/44**; LFO VCO2 Only **112**; LFO Key Trigger **82**; LFO MIDI Sync **87** (0–63 Internal / 64–127 MIDI clock); LFO Clock Divide **86** (stepped table, 4 whole notes → 1/64 triplet); Mod Wheel **1/33**.

*Mixer:* VCO1 Level **15/47**; VCO2 Level **16/48**; Ext Input Level **27/59** (default 64 = 50%, up to 200%).

*Filter:* Cutoff **19/51**; Resonance **21/53**; EG Amount **22/50**; KB Tracking **20/54** (default 32); Velocity Sens **89**.

*Envelopes:* VCF Attack **23/55**; VCF Decay/Release **24/56**; VCF Sustain **25/57**; VCA Attack **28/60**; VCA Decay/Release **29/61**; VCA Sustain **30/62**; Release Switch **72**; EG Trigger Mode **73** (0–42 Legato On / 43–85 Legato Off / 86–127 EG Reset).

*Glide:* Switch **65**; Rate **5**; Type **92** (LCR/LCT/Exp); Legato **83**.

*Pitch Bend:* Down Range **108**; Up Range **107** (Off/2/3/4/5/7/12/24 semitones).

*Keyboard/VCA/Control:* Key Priority **91** (Low/High/Last); VCA Volume **7/39**; VCA Vel Sens **90**; Local Control **122** (0 off/127 on); All Sounds Off **120**; All Notes Off **123**. ([midi.guide](https://midi.guide/d/moog/minitaur/))

**Manual erratum (from the v2.1 addendum):** CC 73 EG Reset is 86–127 (manual wrongly said 85–127); CC 91 Last is 86–127 (manual wrongly said 87–127). ([Minitaur Manual PDF](https://cdn.inmusicbrands.com/Moog/Minitaur/Minitaur_Manual.pdf))

**CC tricks:**
- **Automate the hidden params from a DAW/sequencer** — since every parameter has a CC, full automation/recall is possible even without the editor (laborious but works). ([soundonsound.com](https://www.soundonsound.com/reviews/moog-minitaur))
- **Local Control Off (CC 122 value 0)** breaks USB MIDI feedback loops in a DAW. ([Minitaur Manual PDF](https://cdn.inmusicbrands.com/Moog/Minitaur/Minitaur_Manual.pdf))
- **Program Change** changes presets (only if a valid preset is in that slot); can be filtered on/off.
- **SysEx custom CV start note**: `F0 04 08 23 18 00 nn F7` sets a custom CV start note. ([macprovideo.com](https://macprovideo.com/article/new-articles/moog-releases-minitaur-analog-bass-synth-2-2-update-new-lfo-features))
- **Sirin SysEx**: the Sirin uses identical SysEx commands with header byte changed (e.g., version request `F0 04 08 16 00 00 F7` for Minitaur → `F0 04 18 16 00 00 F7` for Sirin). ([modwiggler.com](https://www.modwiggler.com/forum/viewtopic.php?t=212654&start=75))

---

## 4. Sound-Design Techniques That Exploit the Analog Architecture

**Core architecture facts to exploit:** Oscillator levels begin to clip the filter input at ~2 o'clock, adding aggressive harmonics (the Minitaur's only "drive"). Resonance attenuates low end — usable as a de-facto high-pass to control bass build-up. The filter self-oscillates past ~2 o'clock. Filter↔VCA coupling and OTA-based circuitry give subtle compression/distortion and a 20 Hz bass boost inherited from the Taurus design. ([Minitaur Manual PDF](https://cdn.inmusicbrands.com/Moog/Minitaur/Minitaur_Manual.pdf) ; [attackmagazine.com](https://www.attackmagazine.com/technique/synth-secrets/synthesizing-bass-for-3-different-genres-with-moog-minitaur/) ; [modwiggler.com](https://www.modwiggler.com/forum/viewtopic.php?t=273159))

**Rolling Techno Sub (Attack Magazine):** Init patch, Note Sync ON. Single VCO1 square at full level, VCO2 off. Cutoff ~halfway, resonance ~9 o'clock. Amp Decay/Release ~3 o'clock, Sustain ~halfway. Filter EG: Attack ~10 o'clock, Decay ~11, Sustain matching; turn Filter EG Amount counter-clockwise (negative) ~10 o'clock so the filter pumps with the beat. ([attackmagazine.com](https://www.attackmagazine.com/technique/synth-secrets/synthesizing-bass-for-3-different-genres-with-moog-minitaur/))

**Classic House Bass (Attack Magazine):** Both VCOs saw; VCO1 full, VCO2 ~half, detune VCO2 slightly for movement. Cutoff ~320 Hz, resonance ~10 o'clock, EG Amount ~2 o'clock. Amp: Attack 0, Decay ~10 o'clock, Sustain just below, Release OFF for staccato. Filter EG: Attack 0, Decay & Sustain ~9 o'clock. ([attackmagazine.com](https://www.attackmagazine.com/technique/synth-secrets/synthesizing-bass-for-3-different-genres-with-moog-minitaur/))

**Dread/Reverse Bass (Attack Magazine):** Both VCOs square; VCO1 full, VCO2 ~10 o'clock until phasing. Cutoff ~1000 Hz, light resonance. Amp: Attack 0, Decay ~1 o'clock, Sustain ~3 o'clock, Release ON. Filter EG Attack 0, Decay ~1 o'clock, Sustain ~12 o'clock; turn Filter EG Amount counter-clockwise for a fade-in; set EG Trigger Mode = Legato Off to stop overlapping-note retrigger issues. ([attackmagazine.com](https://www.attackmagazine.com/technique/synth-secrets/synthesizing-bass-for-3-different-genres-with-moog-minitaur/))

**Acid / 303-style (Moog forum):** Use ONE oscillator (saw or square), set Glide = Exponential + Legato mode for "slides," Sustain 0, Attack 0, disable Release; automate Filter EG Amount (positive only) and add resonance for the squelch. A reduced filter slope (the forum thread refers to 3-pole/18 dB on Phatty-class units) gets closer to a 303; the Minitaur is a fixed 24 dB ladder, so emphasize resonance + envelope phrasing instead. ([forum.moogmusic.com](https://forum.moogmusic.com/viewtopic.php?f=7&t=9077))

**808-style sub kick / sine source (self-oscillating filter):** Turn both VCO levels to zero, raise resonance to ~100% (self-oscillation), set cutoff low; the filter becomes a playable sine. Use a gentle positive Filter EG Amount with a fast Filter EG for the pitch "blip," and shape the Amp EG for the body. A constantly-running approach benefits from Note Sync. ([sweetwater.com reviews](https://www.sweetwater.com/store/detail/Minitaur--moog-minitaur-analog-bass-synthesizer/reviews) ; [forum.vintagesynth.com](https://forum.vintagesynth.com/viewtopic.php?t=32649))

**Reese bass:** Two detuned saws/squares (VCO2 offset slightly), Note Sync ON to control phase, low cutoff, moderate resonance, long sustain (drone), tiny release to avoid clicks. A forum tip: tune VCO2 to a 5th or 7th to imply a missing fundamental. ([modwiggler.com](https://modwiggler.com/forum/viewtopic.php?t=122491))

**Growl/aggressive:** Push both VCO levels past 2 o'clock to clip the filter; add resonance and a moderate Filter EG. An external Moog MF Drive / Minifooger Drive after the output adds the "Multidrive-like" grit the Minitaur lacks internally. ([Moog MF Drive on Amazon](https://us.amazon.com/Moog-MF-Drive-Minifooger-Overdrive/dp/B00V7C6FNG))

**Lead/SFX:** SOS notes the engine makes excellent brass/flute and lead sounds despite the bass branding; the triangle LFO (0.01–100 Hz, confirmed by Absolute Music's review) into filter creates "Dr Who"-style effects; self-oscillating filter + key tracking at 100% gives R2-D2 bleeps. ([soundonsound.com](https://www.soundonsound.com/reviews/moog-minitaur) ; [community.absolutemusic.co.uk](https://community.absolutemusic.co.uk/entries/moog-minitaur-review) ; [musicradar.com](https://www.musicradar.com/reviews/tech/moog-minitaur-530857))

---

## 5. Every Preset Bank / Patch Resource Available

- **Factory presets:** Per the manual, the Minitaur ships loaded with 94 presets in internal memory; up to 128 presets can be saved/loaded using the free Minitaur Editor or any SysEx utility. ([Minitaur Manual PDF](https://cdn.inmusicbrands.com/Moog/Minitaur/Minitaur_Manual.pdf)) Earlier Rev 2 stored 100. Studying the factory bank is the recommended self-teaching path.
- **Factory restore SysEx:** `_Minitaur_Factory_Restore_Cmd.syx`, `_Minitaur_Pitch_CV_RESET_Cmd.syx`, and `all_presets_100_v2.syx` reload defaults. ([inMusic Support](https://inmusicsupport.freshdesk.com/en/support/solutions/articles/69000840566-moog-minitaur-general-troubleshooting))
- **PresetPatch** — free user `.syx` patches, soundsets, and a blank patch sheet PDF. ([presetpatch.com](https://www.presetpatch.com/synth/moog-minitaur))
- **Ultimate Preset** — free "Moog Minitaur Bass Expansion" (18 analog bass presets; requires firmware v2.2 + Editor v3.2.0); also a 64-patch soundset. ([ultimatepreset.com](https://www.ultimatepreset.com/product/up-moog-minitaur-bass-exspansion/))
- **LFO.store / Anton Anru** — "Analog Tones," 100 presets (30 Bass, 30 Lead, 30 Pluck, 10 Chords), compatible with Minitaur and Sirin. ([lfo.store](https://lfo.store/shop/hardware-synths/moog-minitaursirin/moog-minitaursirin-analog-tones-100-presets-by-anton-anru/))
- **Blank patch sheet** for documenting sounds. ([presetpatch.com blank sheet](https://www.presetpatch.com/f/moog-minitaur/minitaur_hardware_presets-blank-sheet_pdf))
- Note: presets are saved one at a time and require the Editor; there is no onboard "save all."

---

## 6. The Editor & Integration Ecosystem

- **Minitaur Editor/Librarian** (free after registration) — standalone + VST/AU/RTAS/AAX plugin. It is MIDI-control only ("does not make or process sound"). Three views: PANEL, UNDER THE HOOD, PRESET MANAGER, plus a SETTINGS/global page. Latest version v3.3.0. ([Editor User's Manual PDF](https://files.kraftmusic.com/media/ownersmanual/Moog_Minitaur_Editor_Users_Manual.pdf))
- **OS support:** Mac OS X 10.6.8+; Windows 7+ (Intel/AMD). Both 32-bit and 64-bit install paths provided. Editor's bundled Windows USB multi-client driver requires firmware v2.2.0 first, and lets a DAW and the editor share the USB port. ([manualslib.com](https://www.manualslib.com/manual/1247798/Moog-Minitaur.html?page=3) ; [inMusic Support](https://inmusicsupport.freshdesk.com/en/support/solutions/articles/69000840566-moog-minitaur-general-troubleshooting))
- **DAW integration (Ableton example):** Put the Editor plugin on a track; create a separate MIDI lane with External Instrument pointed at the Minitaur. A known gotcha: if the Minitaur appears in Ableton's top "Control Surface" device list AND its MIDI ports are enabled, a MIDI conflict/freeze occurs — disable it as a control surface and only enable Track In/Out. ([launchclip.com](http://launchclip.com/moog-minitaur-ableton-midi-fix/) ; [attackmagazine.com](https://www.attackmagazine.com/technique/synth-secrets/synthesizing-bass-for-3-different-genres-with-moog-minitaur/))
- **macOS compatibility:** owners report "Hardware Disconnected" issues on newer macOS/USB ports; remedies include trying different USB ports and matching firmware/editor versions. ([modwiggler.com](https://www.modwiggler.com/forum/viewtopic.php?t=204759))
- **External audio input:** processes any external signal through the mixer → ladder filter → VCA. Needs a Note On (or +5V to GATE) to open the VCA; "Gate Always On" lets it drone. Works on polyphonic sources too ("warm up a sterile digital signal") and creates ARP-style paraphonic patches when combined with the CV/Gate inputs. ([Minitaur Manual PDF](https://cdn.inmusicbrands.com/Moog/Minitaur/Minitaur_Manual.pdf) ; [soundonsound.com](https://www.soundonsound.com/reviews/moog-minitaur))
- **CV/Gate integration:** Pitch/Filter/Volume CV (0–+5V, 1V/oct on pitch) and a +5V Gate (which overrides MIDI triggering). The CP-251 is the recommended companion for complex modulation (dual-LFO filter sweeps, S&H stepping, noise as audio/CV). ([Minitaur Manual PDF](https://cdn.inmusicbrands.com/Moog/Minitaur/Minitaur_Manual.pdf))
- **Polychain:** Up to 16 Moog synths (Little/Slim Phatty, Sub Phatty, Sub 37, Minitaur) via Poly Voice Number/Max. A no-editor alternative: set one unit Low priority and another High/Last priority for pseudo-duophony. ([forum.moogmusic.com](https://forum.moogmusic.com/viewtopic.php?f=11&t=28609))
- **DFAM/Mother-32 pairing:** DFAM has no MIDI, so drive the Minitaur from DFAM via Trigger→Gate, Pitch→Pitch CV, Velocity→Volume/Filter CV; or use a BeatStep Pro/A4 as the control center. ([gearspace.com](https://gearspace.com/board/electronic-music-instruments-and-electronic-music-production/1202124-sync-moog-dfam-minitaur.html))

---

## 7. Calibration, Quirks & Community Resources

**Calibration & tuning stability:**
- 15-minute warm-up to reach concert pitch; recommended operating range 50–100°F (≈10–37°C) or the VCOs may drift. ([community.absolutemusic.co.uk](https://community.absolutemusic.co.uk/entries/moog-minitaur-review) ; [Minitaur Manual PDF](https://cdn.inmusicbrands.com/Moog/Minitaur/Minitaur_Manual.pdf))
- **Note Calibration** keeps the analog oscillators in tune; run from the Editor. ([manualslib.com](https://www.manualslib.com/manual/1247798/Moog-Minitaur.html?page=21))
- **Pitch CV calibration:** send 1V then run the +1V SysEx, send 4V then run the +4V SysEx; the spread must be exactly 3V. There is a notorious offset where 0/1/2V yields ~G or G#/Ab instead of C; many users calibrate at Ab1/Ab4 or send a MIDI C first. The input expects 0–+5V (NOT the Mother-32's ±5V) — only 4 octaves of CV range. ([forum.moogmusic.com](https://forum.moogmusic.com/viewtopic.php?t=23936) ; [modwiggler.com](https://modwiggler.com/forum/viewtopic.php?t=132120))
- Only 4 internal trimpots; tuning/CV is software/SysEx-automated. ([modwiggler.com](https://www.modwiggler.com/forum/viewtopic.php?t=49732&start=210))

**Known quirks & workarounds:**
- **Hard C5 ceiling** (MIDI note 72): notes ≥73 ignored — a design consequence of V/Hz oscillators (cheaper but limited to roughly 3 octaves of range, vs the Minimoog's V/oct), so it cannot be fixed in firmware. The Sirin solves it in hardware. ([synthtopia.com — v2.2](https://www.synthtopia.com/content/2017/07/22/moog-updates-minitaur-firmware-editor/) ; [synthtopia.com — Sirin](https://www.synthtopia.com/content/2019/01/24/moog-sirin-takes-the-minitaur-to-new-heights/))
- **MIDI freeze / stuck notes:** more common over USB; panic via GLIDE + Amp Sustain to zero, or load an Init preset. ([gearspace.com](https://gearspace.com/board/electronic-music-instruments-and-electronic-music-production/1147091-help-moog-minitaur-freezes.html))
- **Preset/LFO glitches:** older firmware could freeze, lose presets, or stop the LFO; update to v2.2.2 and use the factory-restore SysEx trio. ([inMusic Support](https://inmusicsupport.freshdesk.com/en/support/solutions/articles/69000840566-moog-minitaur-general-troubleshooting))
- **Mod Wheel gotcha:** on power-up the VCO/VCF LFO Amount knobs directly control depth until the first Mod Wheel message arrives, after which the wheel takes over. "Load Preset Mod Wheel" can make presets sound different than expected. ([Minitaur Manual PDF](https://cdn.inmusicbrands.com/Moog/Minitaur/Minitaur_Manual.pdf) ; [forum.moogmusic.com](https://forum.moogmusic.com/viewtopic.php?f=11&t=28551))
- **Decay-to-zero clicks:** SOS warns "I never set the Minitaur's Decay knob to zero" — with Attack and Decay at zero, clicking occurs and is "always horrid at the end" of notes. ([soundonsound.com](https://www.soundonsound.com/reviews/moog-minitaur))
- **Laptop PSU noise:** USB chattering from a laptop power supply; try a different port or run on battery. ([soundonsound.com](https://www.soundonsound.com/reviews/moog-minitaur))

**Sirin cross-reference:** A limited-edition Minitaur variant (NAMM 2019), with a production run of 2,500 units worldwide (1,250 to US retailers) and a $599 launch price, built on the same "Minitaur Main Board" with smaller VCO timing capacitors that shift the range up to E0–D8 (plays well above middle C). Same engine, hard sync, 6 LFO shapes, 128 presets, same editor architecture; slightly less bottom-end than the Minitaur per some users. ([synthtopia.com](https://www.synthtopia.com/content/2019/01/24/moog-sirin-takes-the-minitaur-to-new-heights/) ; [robomuso.wordpress.com](https://robomuso.wordpress.com/2019/12/04/moog-sirin-review/))

**Lineage note:** The Minitaur is the fourth Taurus-family instrument — Taurus I (1975), the short-lived Taurus 2 (1981, "a Rogue on a stick"), Taurus 3 (2010), then the Minitaur (2012). ([soundonsound.com](https://www.soundonsound.com/reviews/moog-minitaur))

**Community resources:**
- Moog forum, Taurus/Minitaur/Sirin section: [forum.moogmusic.com](https://forum.moogmusic.com/)
- Gearspace Minitaur threads; MOD WIGGLER; Reddit r/synthesizers & r/moog.
- Sound On Sound review (definitive deep-dive on hidden params); MusicRadar, MatrixSynth & Absolute Music reviews.
- Attack Magazine "Synthesizing Bass for 3 Different Genres" (recipe walkthrough).
- [midi.guide](https://midi.guide/d/moog/minitaur/) CSV/SVG of the full CC map.

---

## Recommendations
1. **First:** Update to firmware v2.2.2 and install Editor v3.3.0 (free after registration). This is non-negotiable for presets, hard sync, the extra LFO shapes, and CV remapping. Verify with the FW-version SysEx.
2. **Learn the architecture hands-on** by reverse-engineering the factory bank, then build your own from Init patches.
3. **Turn ON Note Sync** for virtually all bass work; set Filter KB Tracking to 100% if you want to play the self-oscillating filter as a pitched sine.
4. **Drive the mixer (VCOs past 2 o'clock)** for grit; if you need real overdrive, add an MF Drive — do not expect Sub-Phatty Multidrive from the Minitaur.
5. **In the DAW**, enable 14-bit MIDI output and disable the Minitaur as an Ableton "control surface" to avoid zipper noise and freezes.
6. **For modular**, calibrate Pitch CV carefully (1V/4V SysEx, 3V spread, 0–+5V only) and remember the Gate overrides MIDI.
7. **Benchmarks that change the plan:** if you need notes above C5, lead duties, or a higher range, get a Sirin instead; if you need Multidrive/sub-osc/noise, step up to the Sub 37/Subsequent 37.

## Caveats
- The exact label of the literal first-ship firmware (v1.0 vs v1.1) is documented only via forum evidence (v1.0.7 and v1.1.1 attested), not an authoritative Moog primary source.
- The detailed v2.2.2 bug-fix changelog could not be located publicly; only its existence as the final/current version is confirmed.
- The Minitaur uses MSB/LSB CC pairs, not true NRPN; some third-party charts loosely call these "NRPN."
- Knob-position recipes from Attack Magazine and forums are starting points — analog unit-to-unit variation and warm-up state mean you should always tune by ear.
- Editor compatibility on the newest macOS (Apple Silicon/Sonoma+) is not officially documented; expect possible USB/"Hardware Disconnected" issues.

---

## Annotated Sources
- **Official Minitaur Manual (PDF)** — https://cdn.inmusicbrands.com/Moog/Minitaur/Minitaur_Manual.pdf — full panel/signal path, complete MIDI CC table, MIDI implementation chart, specs, v2.1 addendum (presets, shift functions, CV mapping, manual errata), and the 94-preset statement.
- **Minitaur v2.2 Addendum (PDF)** — https://cdn.inmusicbrands.com/Moog/Minitaur/Minitaurv2.2_Addendum.pdf — v2.2 features: LFO shapes, hard sync, VCO2-only mod, shift panel, CV mapping.
- **Minitaur Editor User's Manual (PDF)** — https://files.kraftmusic.com/media/ownersmanual/Moog_Minitaur_Editor_Users_Manual.pdf — editor layouts, under-the-hood params, system requirements, plugin formats.
- **midi.guide — Moog Minitaur CCs** — https://midi.guide/d/moog/minitaur/ — verified, exhaustive CC MSB/LSB map (43 params), value ranges; downloadable CSV/SVG.
- **Sound On Sound review (Gordon Reid, 2012)** — https://www.soundonsound.com/reviews/moog-minitaur — the definitive deep-dive: the "20 hidden parameters," Note Sync, KB-tracking fix, 14-bit MIDI, paraphonic patches, decay-click warning, Taurus lineage.
- **Synthtopia — Rev 2 (2012)** — https://www.synthtopia.com/content/2012/10/16/moog-minitaur-free-rev-2-update/ — 100 presets, CV remapping, CV-to-MIDI, independent decay/release.
- **Synthtopia — v2.2 (2017)** — https://www.synthtopia.com/content/2017/07/22/moog-updates-minitaur-firmware-editor/ — LFO waveforms, hard sync, V/Hz range explanation.
- **macProVideo — v2.2 detail** — https://macprovideo.com/article/new-articles/moog-releases-minitaur-analog-bass-synth-2-2-update-new-lfo-features — exact shift-panel mappings, RPN 2 tuning, CV-start-note SysEx.
- **Sweetwater inSync — Editor v3 / fw v2.1** — https://www.sweetwater.com/insync/moog-minitaur-editor-v3-firmware-v2-1/ — polychain, tuning scales, program change.
- **Sweetwater inSync — fw v2.1.1** — https://www.sweetwater.com/insync/moog-releases-firmware-v2-1-1-for-minitaur/ — sustain-pedal fix and SysEx fixes.
- **Moog/inMusic Support — troubleshooting** — https://inmusicsupport.freshdesk.com/en/support/solutions/articles/69000840566-moog-minitaur-general-troubleshooting — current firmware v2.2.2 filename, factory-restore SysEx trio, Windows USB driver requirement.
- **Moog Forum — v2.2.1 notes** — https://forum.moogmusic.com/t/minitaur-firmware-2-2-1/19627 — v2.2.1 bug fixes.
- **Moog Forum — acid basslines** — https://forum.moogmusic.com/viewtopic.php?f=7&t=9077 — 303-style recipe (single osc, exponential/legato glide, sustain 0, resonance).
- **Moog Forum — polychain & CV/tuning** — https://forum.moogmusic.com/viewtopic.php?f=11&t=28609 ; https://forum.moogmusic.com/viewtopic.php?t=23936 — polychain alternatives; CV tuning offset workarounds.
- **Attack Magazine — bass for 3 genres** — https://www.attackmagazine.com/technique/synth-secrets/synthesizing-bass-for-3-different-genres-with-moog-minitaur/ — exact knob-position recipes for techno sub, house, dread bass.
- **MusicRadar review** — https://www.musicradar.com/reviews/tech/moog-minitaur-530857 — external input "overdrive the filter," sine-wave bleeps/kicks, CV input scaling.
- **MatrixSynth review** — https://www.matrixsynth.com/2012/10/exclusive-moog-minitaur-review-all-bass.html — under-the-hood param list, layering/transpose limitation, audio-in vs MF-101.
- **Absolute Music review** — https://community.absolutemusic.co.uk/entries/moog-minitaur-review — LFO 0.01–100 Hz, warm-up/temperature spec, filter/resonance behavior.
- **Vintage Synth Explorer — 808/filter kick** — https://forum.vintagesynth.com/viewtopic.php?t=32649 — self-oscillating-filter kick method.
- **MOD WIGGLER — Reese/sub & Taurus circuit** — https://modwiggler.com/forum/viewtopic.php?t=122491 ; https://www.modwiggler.com/forum/viewtopic.php?t=273159 — detune tips, filter / VCA coupling / 20 Hz bass-boost lore.
- **MOD WIGGLER — Sirin SysEx & CV** — https://www.modwiggler.com/forum/viewtopic.php?t=212654&start=75 ; https://modwiggler.com/forum/viewtopic.php?t=132120 — Sirin SysEx header swap; ES-3/CV calibration.
- **MOD WIGGLER — editor "Hardware Disconnected"** — https://www.modwiggler.com/forum/viewtopic.php?t=204759 — macOS/USB port remedies.
- **LaunchClip — Ableton MIDI fix** — http://launchclip.com/moog-minitaur-ableton-midi-fix/ — control-surface conflict fix.
- **Gearspace — DFAM sync** — https://gearspace.com/board/electronic-music-instruments-and-electronic-music-production/1202124-sync-moog-dfam-minitaur.html — CV pairing.
- **Gearspace — hardware-vs-software** — https://gearspace.com/board/electronic-music-instruments-and-electronic-music-production/1415346-moog-minitaur-hardware-software-update.html — all-units-upgradeable confirmation.
- **Synthtopia — Sirin (2019)** — https://www.synthtopia.com/content/2019/01/24/moog-sirin-takes-the-minitaur-to-new-heights/ — Sirin specs/range, 2,500-unit run.
- **robomuso — Sirin review** — https://robomuso.wordpress.com/2019/12/04/moog-sirin-review/ — $599 price, CV/CP-251 driving, bass-end comparison.
- **PresetPatch** — https://www.presetpatch.com/synth/moog-minitaur — free user `.syx` patches and blank patch sheet.
- **Ultimate Preset** — https://www.ultimatepreset.com/product/up-moog-minitaur-bass-exspansion/ — free 18-patch bass expansion.
- **LFO.store / Anton Anru** — https://lfo.store/shop/hardware-synths/moog-minitaursirin/moog-minitaursirin-analog-tones-100-presets-by-anton-anru/ — 100-preset paid bank.
- **Amazon — Moog MF Drive** — https://us.amazon.com/Moog-MF-Drive-Minifooger-Overdrive/dp/B00V7C6FNG — external overdrive companion (the "Multidrive" the Minitaur lacks).
