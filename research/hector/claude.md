# The Definitive Guide to Learning & Mastering the Poly Effects Hector (and Beebo)

## TL;DR
- The Hector is a 30 HP Eurorack touchscreen "virtual modular" running the same firmware ("Beebo OS," developed almost single-handedly by Loki Davison) as the Beebo pedal, with ~100+ patchable LV2 modules, 6 in / 8 out (±5V, all CV+audio), MIDI I/O, a 64-bit quad-core CPU, and fully interchangeable presets with Beebo — so essentially all Beebo documentation, tutorials and patches apply.
- The biggest power-user wins come from understanding three under-documented systems: (1) parallel routing to multiply CPU headroom, (2) "Spotlight"/XY-pad macro control plus deep MIDI-learn, and (3) abusing the Mutable Instruments ports (Plaits/Clouds/Rings/Marbles/Tides/Warps/Grids) plus the convolution reverb/IR engine and the newer NAM "nano" amp-capture module.
- The community is small and scattered: the [official manual PDF](https://storage.googleapis.com/poly_effects1/manual.pdf), the [Poly Effects firmware blog](https://www.polyeffects.com/firmware), the [GitHub source repos](https://github.com/polyeffects), the [ModWiggler mega-thread](https://www.modwiggler.com/forum/viewtopic.php?t=243346), the Facebook users group, and [Patchstorage](https://patchstorage.com/platform/beebo-hector/) (145 entries / 150 subscribers) are the real knowledge base. There is no official Discord; documentation is thin on file formats and exact parameter ranges, which I flag throughout.

---

## Key Findings

1. **It's one instrument in two bodies.** [Hector](https://www.polyeffects.com/polyeffects/p/hector) (Eurorack, $599 per Engadget's August 2021 review, touchscreen-only) and Beebo (pedal, two encoders + three footswitches) run identical firmware and swap presets. Beebo even retains footswitch modules purely for patch compatibility. Treat them as the same platform.
2. **Parallelism is the master skill.** Because the CPU is quad-core and assigns parallel chains to different cores, four modules in parallel can cost the same as one, and ~1/4 of four in series. This is the single most important performance lesson and it's buried in §1.12 of the [manual](https://storage.googleapis.com/poly_effects1/manual.pdf).
3. **The Mutable ports are the secret weapon.** Plaits (Macro Osc), Clouds (Granular, Granular Looping, Pitch Verb, Resonestor), Rings (Multi Resonator), Marbles (Chaos Controller), Tides (Looping Envelope), Warps (Meta Modulation, Bitmangle, Doppler Panner), Grids (Drum Patterns) — many use the expanded "Parasite" firmware, giving you a Eurorack-legend collection you can instance multiple times.
4. **NAM amp capture is real but heavy.** Since firmware [331](https://www.polyeffects.com/firmware/firmware-331-beta-1-for-testers)/[337](https://www.polyeffects.com/firmware/firmware-337-amps-spotlight-reverb-browser) there's a Neural Amp Modeler module that loads only "nano" NAM captures; it's very CPU-hungry (leaves room for a cab + a delay or two, not a reverb). Captures are made/packaged via the companion site [ampcapture.polyeffects.com](https://ampcapture.polyeffects.com/amp_info/0).
5. **It's powerful but quirky.** Long boot times (30–40s), a sometimes-sluggish touchscreen, fiddly small sliders, occasional MIDI-thru/freeze bugs, and high fixed round-trip latency ([community-measured 15–18 ms](https://thegearforum.com/threads/poly-beebo-gets-nam-capture-support.2940/)) are real and recurring. Power-supply quality dramatically affects Hector stability.
6. **Documentation is genuinely sparse.** The manual lags the firmware; some modules (notably NAM Amp) aren't documented at all; exact numeric parameter ranges are mostly absent because the UI uses normalized 0–1 sliders with optional numeric entry. Vendor module counts vary ([Perfect Circuit](https://www.perfectcircuit.com/poly-hector.html) "over 90," Engadget "over 100"), so treat ~90–100 as the supportable range.

---

## Layer 1 — The Manual (Foundational Reference)

### Operating model
- **Hardware/DSP:** Both Hector and Beebo run a 64-bit quad-core CPU, 32-bit float internal processing, 24-bit conversion, 48 kHz sampling. ([Manual](https://storage.googleapis.com/poly_effects1/manual.pdf) §3, "Specifications.")
- **Power:** Beebo = 9V centre-negative, ≥500 mA. Hector = +12V at 340 mA, little from −12V, 0 from 5V; observe the −12V keying. (Manual §1.1.)
- **I/O:** Hector has 6 inputs / 8 outputs, all CV & audio capable; all I/O is ±5V, including pitch (so to interface with 0–10V modules you need a scaler like the Erica Pico MScale). (Manual §3.1.)
- **MIDI:** Hector is Type A 3.5mm TRS in and out, with onboard opto-isolation and MIDI thru (no MIDI box needed). Beebo's MIDI pinout varies by serial (early units Type B / Chase Bliss-style; later Type A in). (Manual §4.)
- **The patching paradigm:** Modules are blocks you place on the touchscreen and connect. Hold a source (e.g., Input 1) and tap a destination module to connect (multi-touch); hold a module to reveal copy / disconnect / delete buttons; tap to open its parameter view; drag to move. Audio connections vs. control (CV) connections are colour-coded — control signals are green. (Manual §1.2–1.10.)
- **Knobs (Beebo):** Touch any slider and it auto-maps to the two encoders — right = coarse, left = fine. (Manual §1.6.)
- **Presets & set lists:** Save/load via the patch icon; build a "set list" to define stepping order. Step presets via both footswitch pairs (Beebo) or MIDI Program Change (both). (Manual §1.7, §4.1.)
- **Footswitches (Beebo):** By default rightmost = bypass. Hold a module + press a footswitch to assign enable/disable; assign one switch to multiple modules, or two disabled modules to one switch to toggle between them. Footswitch modules also output tap-tempo (BPM) and value. (Manual §1.8–1.9.)
- **CPU meter:** Appears above 60% usage. Parallel routing is the key to maximizing headroom. (Manual §1.12.)
- **Effects loops:** Any I/O pair can be an external send/return (e.g., out 3 → external pedal → in 3), best used on wet-only signals (delay/reverb tails) to avoid phase/latency problems. (Manual §1.13.)

### Loading IRs (convolution reverb & cabs)
- Put WAV files in folders named `reverbs` and `cabs` on a FAT32 USB drive, then Settings → Copy IRs. **Files must be 48 kHz WAVs.** (Manual §1.15.) The FAQ adds: any bit depth, **max 3.5 seconds**, trimmed as short as possible for performance. The [407 update](https://www.polyeffects.com/firmware/improved-beebo-hector-407-installer) split IR modules into "short" (original length) and long variants supporting much longer IRs.
- Convolution modules include Mono Reverb, Quad Ir Reverb, Mono Cab, Stereo Cab, Quad Ir Cab. The quad IR modules require special 4-channel IRs (most users won't have these). You can load non-reverb audio as an IR for creative/destructive effects.

### Loading neural captures (NAM amp modeling)
- The **NAM Amp** module loads **only NAM "nano" model captures** (the smallest WaveNet tier). Introduced in firmware [331 beta](https://www.polyeffects.com/firmware/firmware-331-beta-1-for-testers) (play included models only), import enabled in [333 beta](https://www.polyeffects.com/firmware/firmware-333-beta-2-for-testers) / full release in [337](https://www.polyeffects.com/firmware/firmware-337-amps-spotlight-reverb-browser).
- Workflow: go to **[ampcapture.polyeffects.com](https://ampcapture.polyeffects.com/amp_info/0)**, which offers two paths — "CAPTURE AN AMP" ([/amp_info/1](https://ampcapture.polyeffects.com/amp_info/1)) and "UPLOAD EXISTING NAM FOR BEEBO OR HECTOR" ([/amp_info/0](https://ampcapture.polyeffects.com/amp_info/0)). You enter amp metadata (brand, model, year, description, number of controls to capture, whether you're micing a cab), then either capture or "package" an existing `.nam` nano model for the device. The standard NAM capture pipeline this front-ends requires reamping a sweep file (or a DI/wet pair) recorded as 24-bit/48 kHz mono WAV, with cloud training producing the `.nam` file. (The exact on-site recording steps, training backend, output container, and on-device transfer mechanism are JS-rendered and could not be fully verified; transfer is via USB consistent with all other content imports — flagged as not fully verified.)
- **CPU reality:** even nano captures are "very CPU heavy" (Poly's wording); Poly states there's room for a mono cab and a delay or two but not a simultaneous reverb. Each amp "setting" is a separate capture; use Beebo's own EQ/saturator/gate modules around NAM for tone-shaping. The NAM code runs on the ARM CPU (no dedicated DSP), and whole-device round-trip latency is [community-measured at 15–18 ms](https://thegearforum.com/threads/poly-beebo-gets-nam-capture-support.2940/). Only "nano" tier works because the shared CPU can't run heavier NAM tiers (Standard ≈13.8k params) in real time.

### Firmware update procedure
- Standard method: download the firmware ZIP from [polyeffects.com/firmware](https://www.polyeffects.com/firmware), unzip, copy the `.deb` files (packages: frontend, modules, ingen, extra-content) **directly to the root** of a FAT32 USB drive (one partition, no subfolders), insert, Settings → update firmware. It restarts itself.
- On macOS, format with Disk Utility as MS-DOS (FAT) + Master Boot Record (GUID won't work). Sandisk drives work; some Verbatim drives have failed; no drives >16 GB tested.
- If an update fails, test by exporting a preset to the drive; if that fails the drive is unreadable. As a last resort, reflash the microSD/internal image with Balena Etcher.
- **The 400-series is a major architecture change.** v403 must be installed before v406; [v407](https://www.polyeffects.com/firmware/improved-beebo-hector-407-installer) is a 6.3 GB reflash that swaps to a self-healing filesystem (to fix "read disturb" corruption that hits Beebos after 4–7 years), moves the environment to X11, and requires you to be on v338 first. The 407 install can require removing the panel and flashing the microSD via Etcher, and selecting one of three panel drivers (80/23/19) by editing a `panel_version` file. After 407, re-add any IR modules (they were split into long/short).

### Preset / patch file format
- Presets export as a **single file** (older firmware exported a folder; this changed around firmware 2.50). To import, place presets in a folder called `presets` on the USB (no longer `/presets/beebo`).
- Patchstorage downloads use the **`.instr`** extension — this is an **Ingen** graph file (the engine is a fork of David Robillard's Ingen modular host; the whole UI is QML/Qt + Python, DSP is LV2 plugins). The format is effectively an open Ingen/LV2 patch description. (Exact internal schema isn't officially documented for end users.)

### Full module list (from the official manual's table of contents)
The [manual](https://storage.googleapis.com/poly_effects1/manual.pdf) documents ~148 modules. Below is the complete list grouped by function. For most, the UI exposes normalized sliders (0–1) with optional numeric entry, so published numeric ranges are scarce; I give them where documented.

**Envelopes & function generators:** Ad Env Level, Ad Envelope, Adsr (Attack/Decay/Release/Sustain Level/Trigger Threshold), Dahdsr (delay-attack-hold-decay-sustain-release, fully CV-able), Looping Envelope (Tides port — Mode/Ramp/Range/Shape/Slope/Smoothness/Shift, 4 outputs), Auto Swell (Uptime/Downtime/Threshold), Env Follower (Attack/Decay/Invert/Max/Min/Peak-RMS/Saturation/Threshold), Slew Limiter.

**Oscillators / synth voices:** Macro Osc (Plaits port — Model/Harmonics/Timbre/Morph + mods, LPG Color/Decay, V/oct), Multi Resonator (Rings — Structure/Brightness/Damping/Position/Polyphony/Resonator/Internal Exciter), Resonestor (Clouds Parasite dual-voice resonator), Freeze (drone freeze).

**Granular / texture / special reverb:** Granular (Clouds Parasite — Blend/Density/Size/Texture/Pitch/Position/Spread/Reverb/Reverse/Feedback/Freeze), Granular Looping (Clouds Parasite micro-loop — Tape Length/Pitch Windows/Diffusion/Filter, CPU-hungry), Pitch Verb (Clouds Oliverb — long tails, pitch-shifting, self-oscillating; Decay/Diffusion/Size/Modulation/Hold/Pitch/Pre-Delay), Time Stretch.

**Reverbs & cabs (algorithmic + convolution):** Basic Reverb (Bandwidth/Damping/Decay/Density/Early-vs-Late/Predelay/Size/Mix), Mono Reverb (convolution), Stereo Reverb, Quad Ir Reverb, Mono Cab, Stereo Cab, Quad Ir Cab.

**Delays:** Delay (Time/Feedback/Tone/Glide/Warp/Level, BPM or ms, CV-able; add modules on the repeats), Bitcrushed Delay, Twist Delay, Midi Ntap Delay.

**Modulation FX:** Chorus D, Chorus D Ext, Chorus J, Flanger, Flanger Ext, Thruzero Flange, Phaser, Phaser Ext, Phaser Stereo Ext, Stereo Phaser, Harmonic Tremolo, Harmonic Trem Ext, Vibrato, Vibrato Ext, Doppler Panner (Warps Parasite binaural 3D panner), Rotary & Rotary Advanced (physical-model Leslie, 30+ params), Pan, Reverse, Turntable Stop, Vinyl.

**Distortion / saturation / lo-fi / amp:** Saturator (Pregain/Postgain), Warmth, Bitcrusher, Bitmangle (Warps Parasite bitwise AND/XOR mangler), Wavefolder, Amp Bass (SVT-style), Power Amp Cream, Power Amp Super, plus the NAM Amp module (undocumented in manual).

**Filters:** Filter (VA resonant LP), Filter Uberheim (multi-out LP/BP/BS/HP), Diode Ladder Lpf, K Org Lpf, K Org Hpf, Oog Half Lpf, Mono Eq (4-band parametric + shelves + HP/LP), Stereo Eq.

**Dynamics:** Mono Compressor, Stereo Compress.

**Sequencers / rhythm / chaos:** Euclidean (4 tracks, Beats/Steps/Shift per track, "is the one" outs to chain), Note Sequencer (16-step, internal clock), Note Sequencer Ext (trigger-advanced), Step Sequencer, Step Sequencer Ext, Drum Patterns (Grids port — Map X/Y, Chaos, per-voice density, Swing), Chaos Controller (Marbles port — Deja Vu, T/X/Y sections, distribution bias, spread, scales), Clock Divider.

**CV utilities / logic / math:** Attenuverter (A×B, ring-mod/AM of two CVs), Product, Ratio, Difference, Sum, Max (logical OR), Min (logical AND), Rectify Value, Sample Hold, Cv Meter, Toggle, Trigger To Gate, Cv To Trigger, Quantizer (12-tone scale), Pitch Cal In, Pitch Cal Out, Pitch Detect (beta), Pitch Shift, Onset Detect, Tuner, Tempo Ratio, Slew Limiter, LFO (Wave Form/Tempo/Multiplier/Level/Unipolar/Reset).

**Mixing / routing:** Matrix Mixer (4-in/3-out), Wet Dry, Wet Dry Stereo. (Note: there is no dedicated stereo level mixer — a long-standing community request; people use Wet Dry Stereo + VCAs.)

**Looping (Loopler):** Loop Common In/Out (add two pairs for stereo), Loop Extra Midi (for internal MIDI control), Loop Midi Out (clock out). Loopler is based on SooperLooper/EDP (LoopIII/IV) with full command set: Record, Overdub, Multiply (+ MultiIncrease), Insert, Replace, Substitute, Reverse, Undo/Redo, Mute, Trigger, Oneshot, Pause, Solo, Delay Mode. Commands MIDI-/footswitch-bindable per-loop, per-selected-loop, or all-loops.

**MIDI processing suite (a standout — 40+ modules):** Midi Cc, Midi Cc To Note, Midi Channel Filter/Map, Midi Choke Filter, Midi Chord (harmonizer with scale + intervals), Midi Clock In/Out, Midi Delay, Midi Dup/Nodup, Midi Enforce Scale, Midi Event Blocker, Midi Keyrange/Keysplit, Midi Map Key Channel/Scale, Midi Mapcc, Midi Mono Legato, Midi No Active Sensing, Midi Note To Cc/Cv/Pgm, Midi Note Toggle, Midi One Channel Filter, Midi Quantize, Midi Rand Velocity, Midi Scale Cc, Midi Sostenuto, Midi Strum (arpeggiated strum with direction/acceleration/velocity ramp/randomization), Midi Tonal Pedal, Midi Transpose, Midi Velocity Gamma/Range/Scale, Cv To Midi Cc, Cv To Note, Note To Cv, Poly Note To Cv (4-voice), plus a MIDI Program Change module (firmware 338).

---

## Layer 2 — Internet Custom Tips (the gold)

### 1. Hidden features most owners never discover
- **Spotlight / macro control (firmware 3.14+).** Expose any parameter from any module to a single "Spotlight" page: open a module's "more" view (three dots), then tap the slider. You can bind Spotlight parameters to the Beebo knobs, to MIDI, and ([firmware 337](https://www.polyeffects.com/firmware/firmware-337-amps-spotlight-reverb-browser)) to an **XY pad** view. This is how power users turn a sprawling patch into a few performable macros — one user described setting up "Macros in the spotlight feature so… it will take less than a few seconds to choose the preset and efficiently tailor for the task." Firmware 337 also added a single view of **all MIDI bindings**.
- **On-device QR-code documentation.** Firmware 337 added QR codes inside every module that link to the relevant section of Poly's livestream videos — the on-device docs are more complete than the PDF.
- **Module/preset search shortcut (firmware 338).** Type a single letter + Enter in the module or preset browser to jump to entries starting with that letter; search combines with category filters.
- **The bipolar-LFO trick.** A unipolar LFO runs 0–1; set its level/offset to zero and it becomes bipolar (negative + positive) — the documented way to get a centered modulation.
- **SSH access (post-400 / X11).** Hector/Beebo run Debian; after the 400 update you can SSH in (user `debian`, password `temppwd`) to inspect or modify the system. The root filesystem is a read-only overlay — use `overlayroot-chroot` to make persistent changes. The entire UI and DSP source is on [GitHub](https://github.com/polyeffects), and there's a `show_single_widget.py` dev harness for building custom module UIs.
- **Hidden "amp captures from famous rigs."** Firmware betas quietly shipped specific captures — e.g., [333 beta](https://www.polyeffects.com/firmware/firmware-333-beta-2-for-testers) added "a capture of the amp Steve Vai used on his tour of Australia," and 337 added amps captured at Deluxe Guitar, Melbourne.

### 2. Firmware notes & version gems
- The project has had an extraordinary update cadence (~50 updates in 2020 alone). Key milestones: 2.50 added Rings (Multi Resonator) and switched presets to single-file export; [3.0](https://www.polyeffects.com/firmware/21012021) merged Beebo+Digit into one firmware (you get both effect sets); 3.4 added Loopler; 3.14 added Spotlight + pitch cal modules and shipped Hector; 325 added the Tuner; [331](https://www.polyeffects.com/firmware/firmware-331-beta-1-for-testers)/[333](https://www.polyeffects.com/firmware/firmware-333-beta-2-for-testers)/[337](https://www.polyeffects.com/firmware/firmware-337-amps-spotlight-reverb-browser) added NAM amp capture; 338 added the search system + MIDI Program Change module; [403/406/407](https://www.polyeffects.com/firmware/improved-beebo-hector-407-installer) = the big architecture/filesystem overhaul.
- **407 caution:** it's a full reflash, not a normal update — back up presets first, follow Loki's video, and expect minor screen-tearing on the new build that some users dislike.
- **Hosting flakiness:** some older firmware download links (300-series) have broken due to a billing/hosting issue on Google Cloud storage; the community sometimes shares mirrors (Loki posted a Mega link for 407).

### 3. MIDI / CV / control tricks
- **MIDI-learn anything:** hold the "more" (triple-dot) button, tap a slider, tap the MIDI icon, send a CC. Note the historical bug — MIDI learn once responded on all channels; after the fix it locks to the channel the CC arrived on, so you must re-learn saved CCs after that update.
- **Loopler MIDI binding is special:** bind directly from the Loopler screen (MIDI icon → choose selected/all/specific loop → press command → send MIDI). No patch-view routing needed for basic actions or MIDI-clock sync; for internal MIDI control (e.g., Chaos Controller → CV To CC → Loopler) add the Loop Extra Midi module.
- **Drive synths from MIDI:** Midi Note To Cv / Poly Note To Cv feed the Macro Osc and other voices. Community caveat: CV pitch tracking into Macro Osc is finicky — always route external pitch CV through a Pitch Cal In module, and several users found MIDI note input far more reliable than V/oct for in-tune results (one workaround: turn Macro Osc's Tone-tab Frequency slider fully down for proper tracking range).
- **Clocking Hector from your rack is awkward** — a recurring complaint is the lack of a simple 4-ppqn clock-to-tempo module. Workarounds: use Looping Envelope (Tides) or run a unipolar square LFO out to clock your rack instead, then match BPMs. Bug note: input latency means trigger-clocked internal modules may not stay tightly in sync with external gear.
- **MIDI program change** module (338) can fire PC messages from a trigger — useful for switching external pedals/presets from internal logic.
- **Calibration:** I/O is uncalibrated by default (so audio isn't distorted); use Pitch Cal In/Out for accurate V/oct. The input calibration workflow is automated; output calibration is manual.

### 4. Patch-design techniques that exploit Hector's architecture (with settings)

**A. CPU-multiplying parallel design (foundational).** Instead of chaining serially, fan one input out to multiple parallel processors and recombine with Wet Dry Stereo / Matrix Mixer. Loki Davison himself confirmed the headroom on the [ModWiggler thread](https://modwiggler.com/forum/viewtopic.php?t=243346&start=150): "I can comfortably run 3 x rings 3 x clouds + 1 x marbles with only 64% CPU used... if you see the patch with the 2 convolution reverbs at once it should use way more CPU than 3 mutable modules." A user-built example — Euclidean + 4× Macro Osc + 4× LFO + Quantizer + Wet/Dry Stereo — ran at ~61% CPU.

**B. "Cassette Tape Machine"** (deconstructed from go_outside's [Patchstorage patch](https://patchstorage.com/cassette-tape-machine/)). A full stereo lo-fi tape emulation built from: a **Warmth + Saturator** drive stage; a **warble** stage of two Vibratos per channel (L+R), the first pair driven by one random LFO through a **Slew Limiter** (to smooth warble), the second pair by a slow triangle LFO at low depth — deliberately modulating L+R identically to avoid phase issues and mimic real capstan wow; a **crinkle/dropout** stage of independent Tremolos + Low-Pass Filters each with its own LFO (raise LFO depth = more "wear"); and a separate **noise** path of two slightly-detuned noise oscillators through VCAs controlled by one triangle LFO for fluttering tape hiss (disconnect the VCA outs to kill noise; set noise level in each VCA's gain).

**C. Generative voice/sequence (Plaits + Marbles + Quantizer).** Macro Osc held drone + Chaos Controller (Marbles) triggering a Quantizer-fed melody; let very slow random LFOs (initially off, "switched on" minutes in) modulate the Chaos Controller's spread/bias sliders to evolve the harmony over time. This is the core generative recipe used in [published ambient pieces](https://danielcpappas.com/generative-waves/).

**D. Granular delay that's actually usable ("ThreeGrain").** Three instances of the Granular (Clouds) module in parallel on a stereo path = a lush granular delay/reverb hybrid; the GrainVerb and "reve infinie" patches push the same idea toward near-infinite convolution-flavored decay.

**E. No-input/feedback mangling.** Internal virtual feedback loops are blocked in Hector's simulated environment, but you can patch physical cables (or use the feedback/hopscotch approach) between Hector's outputs and inputs to enter genuine no-input-mixer territory — "lots of fun," per a user who confirmed this with Poly support.

**F. Build your own modulation FX.** Per Poly, if the stock chorus/flanger don't satisfy, build one from a few Delay modules modulated by LFOs — the modular ethos.

**G. Other deconstructable shared patches** ([Patchstorage](https://patchstorage.com/platform/beebo-hector/)): "Delay Swarm" (6 pan-modded delay lines), "Delay VCA Swells" (4 delays → LFO-controlled VCAs for polyrhythmic swells), "Equaliday" (triple delay each with its own EQ/saturation/compression), "patamodelay" (16-step pattern-modulated tape delay; footswitch A = tap tempo, B = enable), "madlooper" (two-track Frippertronics looper with random reverse/half-speed), "Drum controlled Filter(s)" (Drum Patterns triggers envelopes → resonant filter), "Euclidean Resonators" (Euclidean + 4× Rings), and "Loopler Soundscape Template."

### 5. Every patch / IR / sample / neural-capture resource
- **[Patchstorage "Beebo / Hector"](https://patchstorage.com/platform/beebo-hector/)** — the main patch hub, 145 entries / 150 subscribers, `.instr` downloads (free; many CC/WTFPL licensed). Prolific authors: **go_outside** (tape, delay, granular), **langda** (time machine, reve infinie, arp drum phaser, patamodelay, madlooper, granulasorus), **noisebrick**.
- **Paul Creedy preset packs** — 200+ Beebo presets shared in Google Drive folders, posted via the ModWiggler thread and the Elektronauts Beebo thread.
- **Leon Todd presets** — bundled into firmware (well-regarded amp/ambient presets).
- **IRs:** any 48 kHz WAV reverb/cab IR works (Hainbach/Edouard Morin-Fournier "Pool of the Black Star" IRs shipped in firmware; users load Bricasti M7, EMT 140, real-space and famous-studio IRs). The stock library includes e.g. "Emt 140 Dark" reverbs and "1x12Cab" cabs.
- **Neural captures:** make/package at **[ampcapture.polyeffects.com](https://ampcapture.polyeffects.com/amp_info/0)**; source pre-made nano models from the broader NAM ecosystem (Tone3000/ToneHunt) — but only "nano" tier loads. Community tip: some retrain NAM models via ToneX-style tools for the pedal.
- **Built-in content:** ~100 modules, plus stock cab/reverb IRs and included NAM captures.

### 6. Companion software / file-management ecosystem
- **[ampcapture.polyeffects.com](https://ampcapture.polyeffects.com/amp_info/0)** — web companion for capturing/packaging NAM nano amp models.
- **[GitHub (github.com/polyeffects)](https://github.com/polyeffects)** — full open source: [`digit_ui`](https://github.com/polyeffects/digit_ui) (QML/Qt+Python frontend), `ingen` (modular host fork), `PolyLV2` / `poly_filters` / `lenticular_lv2` / `neural-amp-modeler-lv2` / `cv_to_cc.lv2` (the DSP modules), `sooperlooper` (Loopler), plus the public bug tracker (digit_ui/issues) — the best place to report bugs and see what's fixed.
- **File management:** everything moves via FAT32 USB — presets (single `.instr`-style files in a `presets` folder), IRs (`reverbs`/`cabs` folders, 48 kHz WAV), firmware (`.deb` packages at drive root). There is no dedicated desktop editor/librarian; Etcher is used for full reflashes.
- **External control:** works well with MIDI controllers (Morningstar MC8, Korg nanoKONTROL) and CV fader banks (16n) for hands-on macro control — strongly recommended given the touchscreen.

### 7. Community resources & forums
- **[ModWiggler "Poly Effects BeeBo/Digit in Euro format: Hector" mega-thread](https://www.modwiggler.com/forum/viewtopic.php?t=243346)** — the deepest technical discussion, with Loki ("polyexpressive") participating directly.
- **Facebook "Poly Effects (Beebo / Hector) Users Group"** — the most active community and where Loki is most responsive (admins include Gary Cane); the de-facto support channel. **Note: there is no official Poly Effects Discord** — searches surface only unrelated servers, so be wary of imposters.
- **lines (llllllll.co)** — has a Poly Effects Hector thread (where the 15–18 ms latency question was raised), good for ambient/experimental context.
- **Patchstorage** (patches + Q&A), **KVR Audio** (Beebo/Hector thread), **Gearspace**, **The Gear Page / [The Gear Forum](https://thegearforum.com/threads/poly-beebo-gets-nam-capture-support.2940/)** (NAM discussion), **[theFretBoard](https://www.thefretboard.co.uk/discussion/252990/beebo-news)**, **VGuitar Forums**, **Elektronauts**, and the **Morningstar** forum (MIDI controller tips).
- **Video tutorials:** Poly Effects' own YouTube channel (livestream walkthroughs, now linked via in-module QR codes); **Loopop** (the definitive Hector review/tutorial, by synthesist Ziv Eliraz); **Cinematic Laboratory** (deep module dives by Robert); **Tri Pedal Review** (the manual's recommended starting point); **Andre LaFosse** (Loopler/EDP-style looping); plus workshop/patch-build videos for Macro Osc and granular delay.
- **Reference docs:** the [manual PDF](https://storage.googleapis.com/poly_effects1/manual.pdf), the [firmware blog](https://www.polyeffects.com/firmware), FAQs page, and the Japanese distributor Fukusan's module list (a useful mirror of module descriptions).

---

## Recommendations (staged)

**Stage 1 — Get oriented (day 1):** Read the manual's Getting Started section and watch the Loopop Hector review + a Tri Pedal Review video. Build a trivial patch (Input → Delay → Output), then add an LFO → Delay warp to learn control routing. Buy a fine-tipped capacitive stylus (~5.5 mm) — multiple owners say it transforms the touchscreen experience. Confirm your firmware version (Settings) before anything else.

**Stage 2 — Learn the architecture (week 1):** Internalize parallel-vs-serial routing (watch the CPU meter, keep it under 60–80%). Set up Spotlight macros and MIDI-learn a controller (nanoKONTROL/MC8/16n). Build template presets (mono/stereo I/O, send chains, basic synth voice, ambient verb) and organize a set list for instant recall live.

**Stage 3 — Exploit the deep modules (weeks 2–4):** Work through the Mutable ports one at a time using the linked manuals/videos (Plaits, Clouds, Rings, Marbles, Tides, Warps, Grids). Deconstruct 3–4 Patchstorage patches (start with "Cassette Tape Machine," "ThreeGrain," "Delay VCA Swells," "Euclidean Resonators"). Import your own 48 kHz IRs.

**Stage 4 — Advanced/neural & generative:** If on guitar/bass, try NAM: package a nano capture at ampcapture.polyeffects.com, load NAM Amp + a single cab (skip reverb to save CPU). For generative work, build the Marbles→Quantizer→Plaits recipe and modulate Chaos Controller params with slow LFOs.

**Thresholds that should change your approach:**
- **CPU meter appearing / >80%:** re-route serial chains in parallel, replace CPU-hungry modules (Granular Looping, multiple convolution reverbs, NAM) with lighter ones, or split work across I/O pairs/cores.
- **On firmware <338 and wanting 407:** update to 338 first, then do the 407 reflash (back up presets, watch the video).
- **Hector instability/freezes:** suspect power first — use a high-quality, well-regulated supply with ample headroom (users cite the Arturia RackBrute supply as quiet); over-power the case if needed.
- **Latency intolerable for live serial use (15–18 ms):** don't place Hector/Beebo mid-chain in a latency-critical guitar rig; use it for ambient/wet, modulation, CV, and synth duties where latency matters less.

---

## Caveats & gaps (where information is thin or unverified)
- **Exact numeric parameter ranges are mostly undocumented.** The UI uses normalized 0–1 sliders (with optional numeric entry), and Poly publishes parameter *names* but rarely ranges/units. I have not invented ranges; where I lack a documented figure I've said so. Several frequency-related sliders are linear (cutoff useful range crammed into the first quarter) — a known UI gripe.
- **The NAM Amp module is undocumented in the manual.** Its exact on-screen control names couldn't be verified; I described only what firmware notes and users confirm (nano-only, very CPU-heavy, separate per-setting captures). The capture website's full step-by-step (recording/training backend, output container, transfer step) is JS-rendered and couldn't be fully captured — treat those specifics as unverified.
- **Latency (15–18 ms)** is community-measured, device-wide round-trip — not an official spec and not NAM-specific. Some users don't notice it; sensitive players do.
- **Sampling/WAV playback** has been repeatedly requested and teased but, as of the latest available info, is not a shipping feature — don't buy expecting a sampler.
- **No official Discord** could be verified; the Facebook group is the real hub. Treat any "Poly Effects Discord" invite with suspicion.
- **Preset/patch internal schema** (`.instr`/Ingen) is open via GitHub but not documented as a user-facing spec; round-tripping/hand-editing is undocumented territory.
- **Module count** is reported inconsistently by vendors ([Perfect Circuit](https://www.perfectcircuit.com/poly-hector.html) "over 90," Engadget/Poly "over 100"); the manual enumerates ~148 entries including utilities and variants. Treat ~100 "core" modules as the safe figure.
- **Known bugs/quirks** (varying by firmware): long boot (30–40s), sluggish screen with complex patches, occasional LFOs stopping, modules not appearing on add, MIDI-thru occasionally dropping until reboot, Loopler-out reappearing after power cycle, delay "beats" mode reverting to ms, and CV pitch-tracking difficulties. Most have workarounds; check the GitHub issue tracker and Facebook group for current status.
- **Development pace has slowed** since the early frenetic period and the 400-series overhaul; some long-promised features (sample playback, Plaits 1.2) remain outstanding. Support is a one-person operation (Loki Davison), which means responsive but uneven.

---

## Annotated source list
- **[storage.googleapis.com/poly_effects1/manual.pdf](https://storage.googleapis.com/poly_effects1/manual.pdf)** — Official Hector/Beebo manual: operating model, full module list with parameter names, Loopler command reference, firmware update, IR import, MIDI, specs.
- **[polyeffects.com/firmware](https://www.polyeffects.com/firmware)** (+ [337](https://www.polyeffects.com/firmware/firmware-337-amps-spotlight-reverb-browser), [333 beta 2](https://www.polyeffects.com/firmware/firmware-333-beta-2-for-testers), [331 beta 1](https://www.polyeffects.com/firmware/firmware-331-beta-1-for-testers), [407 installer](https://www.polyeffects.com/firmware/improved-beebo-hector-407-installer), [3.0](https://www.polyeffects.com/firmware/21012021)) — Firmware changelogs: NAM amp module, Spotlight/XY pad, search system, the 403/406/407 architecture overhaul and reflash instructions.
- **[polyeffects.com/polyeffects/p/hector](https://www.polyeffects.com/polyeffects/p/hector)** and **/p/beebo** — Official product pages: feature overview, module highlights, convolution reverb.
- **polyeffects.com/faqs** — IR specs (48 kHz, max 3.5s), power, MIDI pinouts, boot behavior.
- **[ampcapture.polyeffects.com](https://ampcapture.polyeffects.com/amp_info/0)** (+ [/amp_info/1](https://ampcapture.polyeffects.com/amp_info/1)) — NAM capture/packaging companion site (metadata form verified; later steps JS-hidden).
- **[github.com/polyeffects](https://github.com/polyeffects)** ([digit_ui](https://github.com/polyeffects/digit_ui), ingen, PolyLV2, neural-amp-modeler-lv2, sooperlooper, issues) — Full open source, SSH/dev notes, bug tracker.
- **[patchstorage.com/platform/beebo-hector](https://patchstorage.com/platform/beebo-hector/)** (+ [cassette-tape-machine](https://patchstorage.com/cassette-tape-machine/) and other patch pages) — 145 shared `.instr` patches with deconstructable recipes.
- **[modwiggler.com/forum/viewtopic.php?t=243346](https://www.modwiggler.com/forum/viewtopic.php?t=243346)** — The Hector mega-thread: CPU/parallelism (with Loki quotes), latency, pitch-cal issues, NAM impressions, power-supply advice, bugs.
- **engadget.com** (Beebo review + Hector shipping article) — Interface walkthrough, $599 price, bug observations, hardware differences.
- **[thegearforum.com/threads/poly-beebo-gets-nam-capture-support.2940](https://thegearforum.com/threads/poly-beebo-gets-nam-capture-support.2940/)** — NAM nano details, CPU load, ~17 ms latency reports.
- **[thegearforum.com/threads/loki-poly-effects.1503](https://thegearforum.com/threads/loki-poly-effects.1503/)** — Loki AMA: design philosophy, how Mutable ports are made, open-source history.
- **fukusan.com/products/poly_effects/module_list** — Japanese distributor's mirror of module descriptions/I/O.
- **synthanatomy.com**, **gearnews.com**, **musicradar.com**, **mixdownmag.com.au** — Launch coverage and feature summaries.
- **loopopmusic.com / YouTube (Loopop)**, **Cinematic Laboratory**, **Tri Pedal Review**, **Andre LaFosse** — Primary video tutorials.
- **[danielcpappas.com/generative-waves](https://danielcpappas.com/generative-waves/)** — Detailed real-world generative patch using Beebo (Plaits + Marbles + Quantizer) deconstructed by the artist.
- **[perfectcircuit.com/poly-hector.html](https://www.perfectcircuit.com/poly-hector.html)** — Retailer spec sheet ("over 90 modules," I/O, price).
- **[thefretboard.co.uk/discussion/252990/beebo-news](https://www.thefretboard.co.uk/discussion/252990/beebo-news)** — Guitarist-community impressions and news.
