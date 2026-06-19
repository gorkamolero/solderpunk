# The Definitive Guide to Learning & Mastering the Empress ZOIA and ZOIA Euroburo

> A two-layer reference: **Layer 1** distills the official manuals and firmware notes; **Layer 2** is the community "gold" — hidden features, power-user tricks, and patch recipes. Every non-trivial claim is linked inline, with an annotated source list at the end.

---

## TL;DR

- The ZOIA is a modular synthesizer/effects "platform" in pedal form (the [Euroburo](https://empresseffects.com/products/zoia-euroburo) is its 34HP Eurorack twin); both run the same firmware and the same ~80–90+ modules. The single best learning path is **Manual → Module Index/Cheatsheet → Patchstorage deconstruction → community Tips & Tricks doc**.
- As of firmware **5.00** (December 10, 2024), the latest features are the **Reverse Delay** and **Univibe** modules plus an overall **14% CPU performance improvement** ([changelog](https://cdn.shopify.com/s/files/1/0028/5462/files/zoia_changelog_52792f30-e99b-4be7-919c-b1b7de6920ec.txt?v=1733847708)).
- The biggest hidden levers are **not modules but behaviors:** connection strength = multiply/divide, CV summing at inputs = add/subtract, the multiplier-as-CV-VCA trick, `0.1 CV = 1 octave` pitch scaling, the DSP Usage screen, Performance Mode (Shift+Back), super-fine tuning (Shift+knob), and the undo stack ([Tips, Tricks & Explanations](https://docs.google.com/document/u/0/d/1bDqMHjLc4GCYtf2yGNHgjkDqQJ6zrRVuCZohJdKkWWc/mobilebasic)).
- The richest community resources are the official [Module Index](https://empresseffects.com/blogs/support-zoia/zoia-module-index), gonya707's interactive [Cheatsheet](https://sensai7.github.io/ZOIACheatsheet/), Christopher H.M. Jacques's [Tips, Tricks, and Explanations](https://docs.google.com/document/u/0/d/1bDqMHjLc4GCYtf2yGNHgjkDqQJ6zrRVuCZohJdKkWWc/mobilebasic) doc, the [ZOIA Librarian](https://github.com/meanmedianmoge/zoia_lib), [Patchstorage](https://patchstorage.com/platform/zoia/) (1,300+ free patches), [r/ZOIA](https://www.reddit.com/r/ZOIA/), the Facebook group, and the community Discord.

---

## Key Findings

1. **ZOIA and Euroburo are functionally the same instrument** running merged firmware since v2.20; the differences are physical I/O and a handful of Euroburo-specific behaviors (clock filters on CV inputs, CV transpose A→C, "sticky"/integrated modules). ([Euroburo Addendum](https://empresseffects.com/products/zoia-euroburo); [changelog](https://cdn.shopify.com/s/files/1/0028/5462/files/zoia_changelog_52792f30-e99b-4be7-919c-b1b7de6920ec.txt?v=1733847708))
2. **The module set has grown via firmware:** original ~80 modules, with later additions including Sampler (beta, v3.00), Logic Gate (v2.81/3.00), CV Mixer/attenuverter (v2.00), Tap to CV / MIDI Clock Out / MIDI Pitch Bend (v1.13), and Reverse Delay + Univibe (v5.00). The official Euroburo page now states "over 90 modules" while the long-standing figure is "80+." ([product page](https://empresseffects.com/products/zoia); [changelog](https://cdn.shopify.com/s/files/1/0028/5462/files/zoia_changelog_52792f30-e99b-4be7-919c-b1b7de6920ec.txt?v=1733847708))
3. **The patch file (.bin) format is community-reverse-engineered, not officially open.** Little-endian, 4-byte words, header carries patch length + module count, 15-char name limit, modules carry type/color/page/grid-position (0–39 on an 8×5 grid), and connections store source/destination module+block plus a gain value scaled to dB. ([mdouchement Go parser](https://github.com/mdouchement/zoia); [ZOIA Librarian](https://github.com/meanmedianmoge/zoia_lib))
4. **The deepest power-user techniques come from a single Google Doc** maintained by Christopher H.M. Jacques (credited dozens of times in the firmware changelog), covering math, logic gates built from multipliers/inverters/comparators, min/maxing modulation, and latency/buffer management. ([Tips & Tricks doc](https://docs.google.com/document/u/0/d/1bDqMHjLc4GCYtf2yGNHgjkDqQJ6zrRVuCZohJdKkWWc/mobilebasic))
5. **ZOIA is a commercial success** — per Empress's "Back in Beige" blog (Dec 10, 2024), the ZOIA "has now sold over 10,000 units," the basis for the limited beige "ZOIA 10K" edition.

---

# LAYER 1 — THE MANUAL (the base)

## Operating model

- **The grid:** Each page is one full **8×5 grid** of buttons (40 buttons). Each module occupies one or more buttons; each button is an input, output, or parameter, and is either audio or CV. ([manual](https://imagescdn.juno.co.uk/manual/845375-01U.pdf))
- **Pages & patches:** A patch contains up to **64 pages** (0–63); you can store up to **64 patches** in internal memory. Connections can be made *across pages* but **not across patches**. ([manual](https://imagescdn.juno.co.uk/manual/845375-01U.pdf))
- **Signals:** Audio flows output→input between modules. CV ranges **0 to 1** (or −1 to 1) internally. Analysis modules convert audio→CV. ([Cheatsheet](https://sensai7.github.io/ZOIACheatsheet/))
- **The knob (rotary encoder):** Navigate/select; dial parameters; **hold knob + turn = fine tune**; **Shift + knob = super-fine tune**. Push-and-twist sensitivity was improved in v2.40. ([changelog](https://cdn.shopify.com/s/files/1/0028/5462/files/zoia_changelog_52792f30-e99b-4be7-919c-b1b7de6920ec.txt?v=1733847708))
- **Action buttons (via Shift):** Move, Copy, Edit, Delete; **View** (cycle value / audio-CV visualization / connection list); **Save**; **Random** (randomly modifies a parameter/connection — undoable since v2.10). ([changelog](https://cdn.shopify.com/s/files/1/0028/5462/files/zoia_changelog_52792f30-e99b-4be7-919c-b1b7de6920ec.txt?v=1733847708))
- **Utility buttons:** Page Left/Right, Back (**Shift+Back on home = Performance Mode**, which blocks new connections/deletes — back-button LED glows magenta), Shift, Undo, Help (per-item built-in help), Backspace.
- **Stompswitches (pedal):** Bypass, Scroll. To use them inside a patch via the Stompswitch module, hold both together for 2 seconds to "switch to" them, hold again to return.
- **"Starring":** Star a parameter (Shift+Star) to add it to the Starred List for quick access and MIDI CC mapping; in the starred window, turning left reveals a "learn" option that assigns the next received CC. ([manual](https://imagescdn.juno.co.uk/manual/845375-01U.pdf))
- **Undo "Buffer":** The number of undo levels shows at the bottom-left of the patch screen (since v2.10). Undoable: add/delete connection, delete/move module, star/unstar, random. Actions that **clear** the stack: adding/copying/editing a module, copying a page, deleting a patch. (Distinct from the audio "1 Buffer Delay" module.) ([changelog](https://cdn.shopify.com/s/files/1/0028/5462/files/zoia_changelog_52792f30-e99b-4be7-919c-b1b7de6920ec.txt?v=1733847708))
- **Config Menu (Shift + gear):** input pad (−12/−6/0 dB), CPort mode (exp/cv/MIDI), MIDI channel + starred CC channel, MIDI Consume (some/all/none), MIDI CC Setup, **DSP Usage viewer**, Patches to/from SD, Format SD, **Hide Firmware**, LED calibration. ([manual](https://imagescdn.juno.co.uk/manual/845375-01U.pdf))
- **Auto-shift:** Inverts Shift behavior for the top grid row for one-touch action-button access (avoid placing keyboard/pushbutton modules there).
- **Screen saver:** Comes on after 1 hour (since v1.13); any button wakes it. ([changelog](https://cdn.shopify.com/s/files/1/0028/5462/files/zoia_changelog_52792f30-e99b-4be7-919c-b1b7de6920ec.txt?v=1733847708))

## Module categories (five groups)

Interface, Analysis, Audio, CV (Control), and Effects. Every module's exact parameters, ranges, and per-block input/output definitions are catalogued in the official [Module Index](https://empresseffects.com/blogs/support-zoia/zoia-module-index) and gonya707's interactive [Cheatsheet](https://sensai7.github.io/ZOIACheatsheet/) — the canonical references for every parameter.

**Interface:** Audio Input, Audio Output, MIDI Notes In, MIDI CC In, MIDI Pressure (aftertouch), MIDI Clock In, MIDI CC Out, MIDI PC Out, MIDI Note Out, MIDI Clock Out (v1.13), MIDI Pitch Bend (v1.13), Stompswitch, UI Button, Pixel, Pushbutton, Keyboard, Cport Exp/CV In, Cport CV Out. (Euroburo adds integrated CV In/Out, Headphone Out, and 2 pushbuttons.)

**Analysis:** Onset Detector (audio→CV trigger at peaks), Env Follower (audio→CV by signal strength; connection strength = sensitivity), Pitch Detector (audio pitch→CV note).

**Audio:** Oscillator (square/tri/saw/sine, optional FM input, duty cycle, upsampling), VCA, SV Filter (low/high/band outputs; v2.30 added instant frequency change option), Multi-Filter (HP/LP/BP/bell/hi-shelf/lo-shelf), Delay Line (100ms–16s, no dry/no repeats — feed back for repeats), Audio Panner, Pitch Shifter, Audio Balance, Audio Mixer (2–8 ch), Inverter (needs 1 Buffer Delay on dry side for phase alignment), Audio In/Out Switch, Noise, Ring Modulator, Bit Crusher, Aliaser, Granular (grain size/position/density/texture/speed-pitch/freeze, num grains), Looper (record/overdub/reverse), Sampler (beta, v3.00+), Stereo Spread, Bit Modulator, Diffuser, Buffer/1 Buffer Delay.

**CV (Control):** LFO (v1.13 added linear CV control), Sequencer (1–32 steps, up to 8 tracks; v4.00 added CV-step behaviour, CV-ramp output, key input, and sequencer "pages" for >32 steps), ADSR (v1.13/2.00 reworked, linear time option), Sample & Hold (v2.00 track-and-hold), CV Invert, CV Rectify, Value, Trigger, CV Flip Flop, CV Delay (v2.30 linear CV-controlled time), CV Loop (max 16s since v1.10), CV Filter (v2.00 separate rise/fall), Clock Divider (v1.13 independent divisor/dividend 1–32), Comparator, In/Out Switch, Slew Limiter, Quantizer (v2.60 "extended" → 40+ scales), Steps, Multiplier, Random, Rhythm, Tap to CV (v1.13), CV Mixer/attenuverter (v2.00), Logic Gate (v2.81/3.00: AND/OR/NOT/NOR/NAND/XOR/XNOR).

**Effects:** Tone Control EQ, Delay w/Mod, Ping Pong Delay, Reverse Delay (v5.00), OD & Distortion, Fuzz, Compressor, Gate, Plate Reverb, Hall Reverb, Room Reverb, Ghostverb, Reverb Lite (CPU-friendly), Phaser, Chorus, Vibrato, Flanger (from the Empress Nebulus), Univibe (v5.00), Tremolo, Env Filter, Ring Modulator, Cabinet Sim.

## MIDI implementation

- **Ports:** Onboard 1/8" MIDI In/Out (**TRS Type A** — "listen on TIP, send on RING"), with 1/8"-to-5-pin dongles included. Same Type A as Make Noise, Korg, Akai.
- **Control Port (pedal):** ¼" TRS that sends/receives MIDI, OR an expression pedal, OR CV (0–5V) — set in Config. Expression pedal pinout: TIP=signal, RING=3.3V, SLEEVE=ground.
- **Modules:** MIDI Notes In (1–8 outputs; priority newest/oldest/highest/lowest/round-robin since v1.13; range C-2 to A10), MIDI CC In, MIDI Pressure, MIDI Clock In, MIDI CC Out, MIDI PC Out, MIDI Note Out, MIDI Clock Out (24 PPQN, v1.13), MIDI Pitch Bend (v1.13).
- **MIDI Consume (Config):** "some" (default — used MIDI consumed, rest passed thru), "all" (nothing passed thru), "none" (everything passed thru = MIDI-thru/merge).
- **Program Change** recalls patches; bypass/engage and UI interactions can be triggered via MIDI CC on the configured channel.
- **MIDI Learn** via starred parameters (since v1.02). ([changelog](https://cdn.shopify.com/s/files/1/0028/5462/files/zoia_changelog_52792f30-e99b-4be7-919c-b1b7de6920ec.txt?v=1733847708))

## CV / expression / USB / SD-card workflow

- **CV:** Pedal CV via Control Port (0–5V). Euroburo: 4 CV in + 4 CV out, each editable for −5/+5V, 0/5V, or 0/10V; eight dedicated CV UI buttons; CV transpose A→C for C-to-C gear. Euroburo CV inputs have **clock filters** (Schmitt-trigger thresholds) to clean noisy gates/triggers. ([Euroburo](https://empresseffects.com/products/zoia-euroburo))
- **USB:** ZOIA has no general-purpose USB host/data port; firmware and patches move via the microSD card.
- **SD card:** **FAT32 only** (not exFAT). Pedal = pins up; Euroburo = pins down. Use `to_zoia`/`from_zoia` folders; Config → "Patches from/to SD." Since v1.05, a folder system supports up to 64 folders and 256 backup folders. Firmware files are .bin; leave one on the card and it re-flashes every boot — delete after updating, or use "Hide Firmware?". ([firmware update guide](https://empresseffects.com/blogs/support-zoia/updating-firmware-on-the-zoia-and-euroburo-latest-version))
- **Latency:** Per Empress support, "The baseline latency when bypassed is 3.21ms and 1.33ms with each audio module in series." CV is sampled at 1/64 of 48kHz = **750Hz** (one CV sample every 1.333ms).

## Patch file format (community reverse-engineered; not officially open)

Per the meanmedianmoge `Binary Format.pdf` and the [mdouchement Go parser](https://github.com/mdouchement/zoia): a patch is little-endian, organized in 4-byte words, laid out (firmware ≥1.10) as `[header][modules][#patch_cables][patch_cables][#pages][pages][per-module extra][padding]`; pre-1.10 patches omit the per-module "extra" (Extended Colours) block. The header begins with patch length (stored ×4 = a word count) and a module count; the patch name is limited to **15 characters**. There is no explicit firmware-version field — parsers detect <1.10 vs ≥1.10 by comparing the running offset to the patch length. Each module stores a type/ID byte, color byte, page, grid position (0–39 on the 8×5 grid), an 8-entry options array, parameters, and a trailing 15-byte name. Each connection stores source module+block, destination module+block, and a connection strength/gain (scaled to roughly −100…+12 dB). **Empress has stated they will not open the binary format.**

## Pedal vs. Euroburo differences

- Euroburo = 34HP Eurorack, no stompswitches (Stompswitch module removed from the menu since v2.30), adds 4 CV in/4 out + 8 CV buttons, 2 "sticky" quick-access buttons, stereo 3.5mm audio I/O, headphone out, optional desktop case (9–12V center-negative, 300mA).
- **Cross-compatibility:** A Euroburo patch loaded on a pedal puts Euroburo-specific modules on a new "Euro Modules" page above page 0; these can connect/edit but not move/copy/re-add. Bypass Euroburo via Shift+press the audio I/O buttons.
- **Factory patches differ:** ZOIA firmware-5 factory patches are "guitar-centric" and ZOIA-only; Euroburo has its own factory bank.

---

# LAYER 2 — INTERNET CUSTOM TIPS (the gold)

## 1. Hidden features most owners never discover

- **Multiplier as a CV VCA:** Route a CV source and a Value module into a Multiplier; the Value now acts as an adjustable depth/connection-strength control you can place remotely or modulate with an LFO/ADSR. ([Tips & Tricks](https://docs.google.com/document/u/0/d/1bDqMHjLc4GCYtf2yGNHgjkDqQJ6zrRVuCZohJdKkWWc/mobilebasic))
- **ZOIA math:** CV **sums at inputs** → positive values add, negative (via Value set −1→1 or CV Invert) subtract. **Connection strength** below 100% divides, above 100% multiplies. Connecting a source to multiple inputs of a Multiplier gives exponents (Y×Y = Y²). ([Tips & Tricks](https://docs.google.com/document/u/0/d/1bDqMHjLc4GCYtf2yGNHgjkDqQJ6zrRVuCZohJdKkWWc/mobilebasic))
- **Min/maxing modulation:** Bias the destination (or a Value module) to set the modulation **minimum**; set connection strength to define the **range/maximum**. With a −1→1 LFO the bias is the centerpoint and the strength is the spread.
- **Logic gates without the Logic Gate module:** NOT = CV Invert + Value biased to 1; AND = Multiplier; OR = sum at a shared input; NAND = AND→NOT; NOR = OR→NOT; XOR/XNOR = combinations of multipliers + inverter/comparator. Comparators implement max/min.
- **Super-fine tuning:** Shift + knob for the finest parameter resolution.
- **Multiple display readouts:** Click the encoder to cycle LFO rate between Hz / seconds / BPM; Value between raw value and note (A0–A10); connection strength between % and dB.
- **DSP Usage map (Config):** Scrolls through the first 64 modules highlighting each — doubles as a way to *find* hidden/overlapping modules.
- **Top-row auto-shift inversion** for one-touch action buttons.
- **Sample & Hold shortcut:** The Random module has a "new value only when triggered" option — a S&H from random with fewer modules.

## 2. Firmware notes & version gems

- **5.00 (Dec 10, 2024):** Reverse Delay + Univibe; "Improved the overall CPU performance by 14%"; refreshed factory patches; Groovebox + Grand Piano patches require samples. ([changelog](https://cdn.shopify.com/s/files/1/0028/5462/files/zoia_changelog_52792f30-e99b-4be7-919c-b1b7de6920ec.txt?v=1733847708))
- **4.20 (Nov 20, 2024):** Sequencer data footprint reduced — **patches with sequencers saved on ≥4.20 won't load on earlier firmware** (back up first). Encoder acceleration for BPM.
- **4.00 (Oct 8, 2024):** Big Sequencer update (CV step, CV ramp output, key input, sequencer pages); Sampler mono/stereo + 8/16/24/32-bit; sample-rate converter; FAT32 up to 128GB.
- **3.00 (Apr 5, 2023):** Sampler (beta) and Logic Gate; single-patch import/export.
- **2.60 (Dec 21, 2021):** Quantizer "extended" → 40+ scales.
- **2.20 (Aug 30, 2021):** Euroburo compatibility merged; "Euro Modules" page; Device Control module.
- **2.10 (Jun 24, 2021):** Undoability + on-screen undo-level counter.
- **2.00 (Jun 1, 2021):** ~24% average CPU reduction; CV Mixer/attenuverter; ADSR rework.
- **1.13 (Aug 25, 2020):** MIDI Clock Out, MIDI Pitch Bend, Tap to CV; Clock Divider independent divisor/dividend; LFO/ADSR linear CV; round-robin MIDI; screensaver; "Hide Firmware?".
- **1.10 (Feb 28, 2020):** Extended Colours; MIDI Consume; CV Loop max raised to 16s.
- **Note:** Per the [eclab/zoia README](https://github.com/eclab/zoia), Empress has said the pedal is "largely basically out of firmware space, is now 7 years old... not high priority. And they're not going to open their binary format" — so major new features are unlikely.

## 3. MIDI / CV / control tricks

- **MIDI Learn via starred Value modules** instead of the parameter directly — lets you attenuate/invert the incoming CC (star two inputs of a Multiplier to attenuate one with the other).
- **MIDI feedback to a controller:** Value → both the destination parameter and a MIDI CC Out; star the Value and use learn. Set MIDI Consume to "some"/"all" to avoid a loop.
- **Onset Detector → random Program Change** to chaotically recall presets on external gear (e.g., Eventide H9).
- **Pitch Detector → Oscillator** for a synth lead that follows guitar playing (monophonic guitar-synth).
- **Euroburo clock filters:** Engage on CV input modules (Shift + pencil icon) to stop ADSRs from false-triggering on noisy gates.
- **CV/external sync:** MIDI Clock In → square LFO at detected BPM to drive sequencers; MIDI Clock Out at 24 PPQN with start/continue/stop.
- **Pitch scaling rule:** `0.1 CV = 1 octave`; a 5th ≈ .058, a 4th ≈ .042. To drop pitch, pass through CV Invert.

## 4. Patch-design techniques that exploit ZOIA's architecture (with exact settings)

- **Basic subtractive synth voice:** Oscillator → VCA (audio); ADSR → VCA level; Keyboard/MIDI Notes gate → ADSR; note out → Oscillator frequency; add SV/Multi-Filter for tone.
- **Generative "Space Race":** Random CV → Quantizer (key of D) → Oscillator; a square LFO clocks the Random to issue new notes; a fast LFO adds vibrato; multiple sequencers feed an In Switch cycled by a "slow ass LFO"; everything lands in a Hall Reverb. ([Patchstorage](https://patchstorage.com/platform/zoia/))
- **Granular pitch-shifter ("Harmonic Pixies"):** 3 Granular instances, each 8 grains, max size/texture/density; detuning produces a "harp" effect; feed each granular back on itself for ringing trills — **cap feedback around −17 dB**.
- **Predelay reverb fix:** Per [eclab/zoia](https://github.com/eclab/zoia), predelay "is bizzarely missing from the Zoia's reverb modules" — roll your own mix and insert a Delay before the reverb.
- **Groovebox:** 5 Samplers (one WAV each) triggered by the 5 outputs of a 16-step Sequencer, into an Audio Mixer.
- **CS-80-style poly ("ZS-40"):** key-tracked filter (100%), shared filter/VCA bipolar envelope, ring mod with envelope-controlled frequency, 12dB/oct via two stacked LPFs; ADSR A/D/R linear, 15s max (.1 = 1.5s).
- **Tape-warble / lo-fi:** Compressor + Vibrato + Filter + Overdrive ([ambienttrash](https://empresseffects.com/blogs/empress-blog/five-zoia-patches-we-love)).
- **CPU-saving:** Use Reverb Lite instead of Plate/Hall; watch the DSP Usage screen; keep live patches under ~70% CPU; avoid reverse/overdub on the sampler in performance-critical patches.

## 5. Patch / sample resources

- **[Patchstorage ZOIA/Euroburo platform](https://patchstorage.com/platform/zoia/):** per Empress's blog, the community has uploaded **over 1,300 presets** free, filterable by tag/category. Notable deconstructable patches: Space Race, Harmonic Pixies, groovebox, ZS-40 (CS-80), Interlacer (FM/cross-mod), Saxobone, plus emulations (Strymon DIG, Fairfield Shallow Water, Hologram Microcosm, Meris Ottobit Jr, Moog DFAM).
- **Factory patches:** "ZOIA Factory Patches" collection on Patchstorage; firmware-5 guitar-centric set; Groovebox/Grand Piano sample packs for older ZOIAs.
- **[eclab/zoia GitHub](https://github.com/eclab/zoia):** Hammond+Leslie, and predelay-enabled Hall/Plate/Room/Ghost + Delay/Pong reverb patches.

## 6. Editor / companion ecosystem

- **[ZOIA Librarian (meanmedianmoge/zoia_lib)](https://github.com/meanmedianmoge/zoia_lib):** main cross-platform (Win/Mac, Python/Qt) patch manager — editor, visualizer, patch expander, SD folder/bank management, Patchstorage browsing, includes ZOIA + Euroburo factory banks. Latest line ~v2.1. ([releases](https://github.com/meanmedianmoge/zoia_lib/releases))
- **[Native macOS Librarian (johnnyturpin-aow/zoia_lib_macOS)](https://github.com/johnnyturpin-aow/zoia_lib_macOS):** SwiftUI fork focused on discovery/visualization.
- **ZoiaPatchViewer (marcuslupinus):** Windows C#/.NET viewer of modules, connections, options, starred params.
- **[mdouchement/zoia (Go)](https://github.com/mdouchement/zoia)** and **patmooney/zoia-patch (JS):** open-source patch parsers documenting the binary format.
- **Original Python project:** john-breton/ZOIA-Librarian (design docs, JSON schemas).

## 7. Community resources & forums

- **Official:** [Module Index](https://empresseffects.com/blogs/support-zoia/zoia-module-index), Sampler/Sequencer Guide, Quick Start, FAQ, [changelog](https://empresseffects.com/zoia-changelog), ZOIA Bootcamp series, ["Five ZOIA Patches We Love"](https://empresseffects.com/blogs/empress-blog/five-zoia-patches-we-love).
- **[r/ZOIA](https://www.reddit.com/r/ZOIA/)** + its wiki/FAQ (maintained by Mike Moger & Christopher Jacques) and the Bootcamp megathread.
- **[Christopher H.M. Jacques's Tips, Tricks, and Explanations doc](https://docs.google.com/document/u/0/d/1bDqMHjLc4GCYtf2yGNHgjkDqQJ6zrRVuCZohJdKkWWc/mobilebasic)** — the single deepest community knowledge base.
- **[gonya707's interactive Cheatsheet](https://sensai7.github.io/ZOIACheatsheet/)** — every module/parameter, searchable.
- **Facebook "Empress ZOIA Users" group** and the **community Discord**.
- **Tutorial creators:** Christopher H.M. Jacques, Ron Cavagnaro (Quickstart), Charlie Ysasi (sequencer/drums, Spanish), Empress's own walkthroughs, plus shop walkthroughs (Perfect Circuit, Get Offset).

---

## Recommendations (a staged learning plan)

**Stage 1 — Foundations (week 1):** Read the official manual once; install firmware 5.00 after backing up patches; keep the Cheatsheet open while you work; do the Quick Start and Bootcamp. *Benchmark:* build a tremolo (LFO→VCA) and a basic synth voice from memory.

**Stage 2 — Architecture fluency (weeks 2–4):** Read the Jacques doc on connection strength, math, min/maxing, and pitch scaling. Deconstruct three Patchstorage patches in the Librarian's visualizer (Space Race, groovebox, a reverb patch). *Benchmark:* set a modulation range precisely and explain `0.1 = 1 octave`.

**Stage 3 — Power use (month 2+):** Build a generative patch (Random→Quantizer→Osc clocked by LFO), a multi-effect with stompswitch/UI-button pages, and a MIDI-controller/utility patch. Use the DSP Usage screen to keep patches under ~70% CPU. *Benchmark:* a gig-ready bank organized via the Librarian and exported to a labeled SD folder.

**Thresholds that change the plan:** On a Euroburo, prioritize the Addendum and clock-filter setup before CV-heavy work. Save failures → check CPU and that sequencer patches match firmware ≥4.20. Patches loading empty → re-save on current firmware.

---

## Caveats

- **Module count is fuzzy and version-dependent:** "80+" is long-standing; the Euroburo page also says "over 90." The authoritative list is the live Module Index/Cheatsheet for your firmware.
- **Binary format is reverse-engineered, not official:** field offsets come from community parsers; the PDF's exact byte offsets could not be verified verbatim, and the Go author flags uncertainty about whether patch length is truly 2 bytes and that module-name extraction "does not work for all modules."
- **Firmware-specific behavior differs:** sequencer patches saved on ≥4.20 won't load on older firmware; ADSR/pitch-shifter behavior changed across 1.11/2.00; the "waveform updating" hang affected firmware 3.0.
- **Some community links rot;** verify SD/firmware steps against current Empress support pages.
- **Generic guitar-tone "settings" SEO content is low-authority;** prefer Empress docs, the Cheatsheet, and the Jacques doc.

---

## Sources (annotated)

**Official Empress documentation & firmware**

- [empresseffects.com/products/zoia](https://empresseffects.com/products/zoia) — ZOIA product page; module descriptions, specs, "80+ modules."
- [empresseffects.com/products/zoia-euroburo](https://empresseffects.com/products/zoia-euroburo) — Euroburo page; "over 90 modules," CV I/O, sticky buttons, headphone out.
- [empresseffects.com/blogs/support-zoia/zoia-module-index](https://empresseffects.com/blogs/support-zoia/zoia-module-index) — official Module Index (canonical per-module/parameter reference).
- [zoia_changelog…txt](https://cdn.shopify.com/s/files/1/0028/5462/files/zoia_changelog_52792f30-e99b-4be7-919c-b1b7de6920ec.txt?v=1733847708) / [empresseffects.com/zoia-changelog](https://empresseffects.com/zoia-changelog) — full firmware changelog 0.33→5.00.
- [Firmware update guide](https://empresseffects.com/blogs/support-zoia/updating-firmware-on-the-zoia-and-euroburo-latest-version) — update procedure; .bin handling; factory-patch notes.
- ["Five ZOIA Patches We Love"](https://empresseffects.com/blogs/empress-blog/five-zoia-patches-we-love) — "over 1300 presets"; ambienttrash/Jacques/Saxobone picks.
- [Juno-hosted manual PDF](https://imagescdn.juno.co.uk/manual/845375-01U.pdf) — operating model, grid, config, MIDI/CV (firmware 1.13).

**Community references**

- [Tips, Tricks, and Explanations (Christopher H.M. Jacques)](https://docs.google.com/document/u/0/d/1bDqMHjLc4GCYtf2yGNHgjkDqQJ6zrRVuCZohJdKkWWc/mobilebasic) — multiplier-as-VCA, math, logic gates, min/maxing, pitch scaling, buffers, MIDI tricks.
- [ZOIA Cheatsheet (gonya707/sensai7)](https://sensai7.github.io/ZOIACheatsheet/) — interactive module/parameter cheatsheet; verbatim module help text.
- [r/ZOIA](https://www.reddit.com/r/ZOIA/) — subreddit, FAQ, Bootcamp megathread.

**Editors / parsers / format docs**

- [meanmedianmoge/zoia_lib](https://github.com/meanmedianmoge/zoia_lib) (+ [releases](https://github.com/meanmedianmoge/zoia_lib/releases)) — ZOIA Librarian; binary format PDF.
- [johnnyturpin-aow/zoia_lib_macOS](https://github.com/johnnyturpin-aow/zoia_lib_macOS) — native macOS librarian.
- [mdouchement/zoia](https://github.com/mdouchement/zoia) — Go patch parser; documented byte layout, 15-char name limit, 8×5 grid, connection gain→dB scaling.
- [eclab/zoia](https://github.com/eclab/zoia) — bugs/omissions notes (predelay missing; "out of firmware space") + reverb/Hammond patches.

**Patches & tutorials**

- [Patchstorage ZOIA platform](https://patchstorage.com/platform/zoia/) — Space Race, Harmonic Pixies, groovebox, ZS-40, Interlacer, emulations.
- YouTube: Christopher H.M. Jacques (synth voice, randomness, sample & holds), Ron Cavagnaro (Quickstart), Charlie Ysasi (sequencer 101).

*Lower-authority (flagged):* generic guitar-settings SEO sites; manual mirror hosts.
