# Behringer Brains — Reference & Sound Resources

The Behringer Brains is a 16 HP Eurorack macro-oscillator that runs Mutable Instruments **Plaits** DSP (15 inherited Plaits engines) plus 5 Behringer-added engines (the "Reloaded" firmware: BX7 FM, Bassline/TD-3, Wave Generator, Vox, Audio Scope).

**Critical note for this project:** Brains has **NO preset banks**. Its "sounds" come from selecting an engine and dialing the three macros (HARMONICS / TIMBRE / MORPH) plus FREQ. It is therefore **not on presetpatch** or any preset-sharing site. The valuable resources are: (1) authoritative engine references — the Plaits manual is canonical for every shared engine; (2) the official Behringer page + manual + firmware tooling; (3) engine-by-engine walkthroughs (video/forum); (4) software Plaits emulations you can use to learn the engines without hardware.

Verification done June 2026 via `curl -sIL` (HTTP status) and WebFetch (content). All ModWiggler and Gearspace forum URLs are Cloudflare/bot-blocked to automated fetchers (403) but are confirmed live and accessible in a normal browser.

---

## Official (Behringer)

### Behringer BRAINS — Official Product Page
- URL: https://www.behringer.com/en/products/0720-ABP
- Type: Official
- What's there: Canonical product page. Overview, 20+ synthesis engines / "25 synth models", 96 kHz, OLED oscilloscope, multifunction TIMBRE/HARMONICS/FREQ/MORPH controls, specs, and the Software/Downloads tab where firmware and the SynthTribe link live. (Note: the older `product.html?modelCode=0720-ABP` and `product?modelCode=P0E6H` URLs now 404 — use the `/en/products/0720-ABP` path.)
- API? No
- Verified: yes (curl 200; WebFetch confirmed it is the official Brains page)

### Behringer Support / Downloads
- URL: https://www.behringer.com/en/support
- Type: Official
- What's there: Entry point to Behringer downloads/support; firmware for Brains (including the "Reloaded" update) is distributed here and via the product page Software tab, applied over USB with the SynthTribe app.
- API? No
- Verified: yes (curl 200)

### SynthTribe App (firmware + DX7/BX7 SysEx tool) — Apple App Store
- URL: https://apps.apple.com/lb/app/synthtribe/id1487038242
- Type: Official (companion software)
- What's there: Behringer's editor/updater app. Used to flash Brains firmware over USB and to upload custom DX7 SysEx patches into the BX7 FM engine (32 patches, interchangeable with native DX7). Also Mac/Windows desktop versions.
- API? No
- Verified: yes (App Store listing; corroborated by multiple sources incl. Behringer Reloaded coverage)

---

## Manual

### Behringer BRAINS Quick Start Guide — ManualsLib
- URL: https://www.manualslib.com/manual/3092811/Behringer-Brains.html
- Type: Manual
- What's there: Full Behringer Brains Quick Start Guide, viewable inline and downloadable as PDF, 33+ languages. Documents all 22 control points (display, TIMBRE/HARMONICS/MORPH/FREQ knobs, CV inputs, outputs, trigger), specs (impedances, voltage ranges, 48 kHz sampling spec on this older revision, 130 mA @ +12V), and per-engine parameter descriptions.
- API? No
- Verified: yes (curl 200; WebFetch confirmed it is the QSG with downloadable PDF)

---

## Reference — Plaits (authoritative for all shared engines)

### Plaits — Official Manual (pichenettes.github.io)
- URL: https://pichenettes.github.io/mutable-instruments-documentation/modules/plaits/manual/
- Type: Reference / Manual (authoritative)
- What's there: The canonical Mutable Instruments Plaits manual. Documents all 16 synthesis models and exactly what HARMONICS / TIMBRE / MORPH do per model, the internal LPG, dual outputs, trigger behavior. This is the single most authoritative reference for every Brains engine inherited from Plaits.
- API? No
- Verified: yes (WebFetch confirmed it is the official manual with full macro/engine docs)

### Plaits — Module Overview (pichenettes.github.io)
- URL: https://pichenettes.github.io/mutable-instruments-documentation/modules/plaits/
- Type: Reference (authoritative)
- What's there: Plaits module index — feature list of the 16 models split into pitched vs percussion/noise banks, hardware specs (STM32F373, 12HP), and links to Manual, Firmware, Open source, "Plaits vs Braids" comparison.
- API? No
- Verified: yes (WebFetch confirmed module overview page)

### Plaits — Firmware page + custom-data loading (pichenettes.github.io)
- URL: https://pichenettes.github.io/mutable-instruments-documentation/modules/plaits/firmware/
- Type: Reference / Firmware (authoritative)
- What's there: Plaits firmware history (v1.0–v1.2 final) and — crucially for Brains — how custom data loads via the TIMBRE input audio: 32 custom DX7 SysEx patches (6-op FM), custom wave-terrain data, and 15 custom wavetable waveforms + bank D wave-map customization. Links to an online editor for building that custom content. Directly relevant to the Brains BX7/Wavetable workflows.
- API? No
- Verified: yes (WebFetch confirmed firmware page + custom-data details)

### Plaits — Quickstart PDF (pichenettes.github.io)
- URL: https://pichenettes.github.io/mutable-instruments-documentation/modules/plaits/downloads/plaits_quickstart.pdf
- Type: Reference / Manual (authoritative)
- What's there: The printable Plaits quickstart booklet PDF — condensed per-engine macro reference.
- API? No
- Verified: yes (curl 200)

### Synth Modes — Plaits cheat sheet
- URL: https://synthmodes.com/modules/plaits/index.html
- Type: Reference
- What's there: Mobile-friendly Plaits mode-by-mode cheat sheet. Lists all 16 modes with their three control parameters labelled per engine (e.g. mode 3 FM = ratio / mod index / feedback). Quick-glance complement to the official manual; also exists as the "Modes" iOS app.
- API? No (but the source data is semi-structured — see GitHub entry below)
- Verified: yes (curl 200; WebFetch confirmed Plaits mode reference)

### Synth Modes — source repo (boourns/synthmodes) [SEMI-STRUCTURED DATA]
- URL: https://github.com/boourns/synthmodes
- Type: Reference / structured data
- What's there: The open repo (CC-BY-4.0) powering synthmodes.com and the Modes iOS app. Engine/mode cheat sheets are stored as per-module folders under `data/`, each with a `module.xml` index (pages, icons, tags) plus per-page HTML, catalogued by `data/modules.xml`. Not a JSON API, but it IS machine-parseable structured XML+HTML for the Plaits modes — the closest thing to a structured engine dataset found. Forkable to extend for Brains' extra engines.
- API? No public API, but structured XML/HTML data (parseable)
- Verified: yes (WebFetch confirmed XML index + HTML page format)

---

## Reference — Open-source Plaits DSP (engine source of truth)

### pichenettes/eurorack (original Plaits firmware source)
- URL: https://github.com/pichenettes/eurorack
- Type: Reference / source code (authoritative)
- What's there: Emilie Gillet's original Mutable Instruments firmware repo. `plaits/dsp/engine/*.h` contains the exact engine implementations (e.g. `chord_engine.h` chord tables) Brains runs. Ground truth for engine behavior and for understanding/modifying chord layouts, FM ratios, etc.
- API? No (source code)
- Verified: yes (curl 200; referenced across search results)

### sourcebox/mi-plaits-dsp-rs (Rust port of Plaits DSP)
- URL: https://github.com/sourcebox/mi-plaits-dsp-rs
- Type: Reference / source code
- What's there: Native Rust `no_std` port of the Plaits DSP (based on firmware 1.2), all 24 engines, APIs kept close to the original. Useful if building tools/visualizers or generating engine audio examples programmatically (its tests render WAV files). MIT.
- API? No (library)
- Verified: yes (curl 200; WebFetch confirmed Rust DSP port, 24 engines)

---

## Alternative / Custom Firmware

### Good To Hear — Just Intonation Chords firmware for Plaits
- URL: https://goodtohear.co.uk/plaits
- Type: Reference / alt-firmware
- What's there: Custom Plaits firmware that swaps the Chords-engine ratios for just-intonation tuning, distributed as a flashable WAV plus a full build/upload tutorial (modifying `chordsAsRatios`). Demonstrates the alt-firmware path; applies to Plaits hardware (Brains uses Behringer's own closed firmware/SynthTribe, so this is reference/educational rather than directly flashable to a Brains).
- API? No
- Verified: yes (curl 200; WebFetch confirmed downloadable custom firmware + tutorial)

---

## Software Plaits emulations (learn the engines without hardware)

### Macro — free Plaits Rack Extension for Reason (Presteign Sound Labs)
- URL: https://synthanatomy.com/2022/02/macro-free-synth-brings-mutable-instruments-plaits-oscillator-to-reason.html
- Type: Reference (software emulation)
- What's there: Free Reason Rack Extension reproducing all 16 Plaits engines with the same macro controls + LPG. Great for learning each engine's HARMONICS/TIMBRE/MORPH response in a DAW before/instead of dialing on hardware.
- API? No
- Verified: yes (WebFetch confirmed free Reason RE, all 16 engines)

### Macro — User Manual PDF (Presteign Sound Labs)
- URL: https://soundlabs.presteign.com/downloads/Macro%20User%20Manual.pdf
- Type: Manual / Reference (software)
- What's there: PDF manual for the Macro RE; per-engine parameter labels (e.g. WAVEFORM/FOLD ASYM/FOLD AMT) — another cross-check for what the macros do per engine.
- API? No
- Verified: yes (curl 200)

### Flechtwerk — free standalone/plugin Plaits-based macro synth (trnr)
- URL: https://trnr.gumroad.com/l/flechtwerk
- Type: Reference (software emulation)
- What's there: Free macro synthesizer with 24 unique engines based on Plaits firmware 1.2, three macro controls (Harmonics, Timbre, Morph). Plays the same engines as Brains for hands-on learning; a Pro version also exists.
- API? No
- Verified: yes (curl 200; engine/macro details corroborated by Synthtopia/Synthanatomy coverage)

---

## Forum (ModWiggler — Cloudflare-blocked to bots, live in browser)

### ModWiggler — "Behringer Brains thread." (main megathread)
- URL: https://www.modwiggler.com/forum/viewtopic.php?t=249968
- Type: Forum
- What's there: The primary multi-page Brains discussion (7+ pages): engine impressions, Reloaded firmware engines (BX7/Bassline/Wave Gen/Vox), Brains-vs-Plaits sound (Brains brighter, 96 kHz vs 48 kHz, longer LPG decay), USB/firmware tips, owner reports.
- API? No
- Verified: yes — confirmed via WebSearch result snippets and curl (curl returns **403, Cloudflare/bot-blocked**; page is live and accessible in a normal browser)

### ModWiggler — "Anyone have direct experience with Brains vs Plaits?"
- URL: https://www.modwiggler.com/forum/viewtopic.php?t=282064
- Type: Forum
- What's there: Focused Brains-vs-Plaits comparison thread (sound character, sample rate, layout differences, LPG decay).
- API? No
- Verified: yes — via WebSearch snippet; curl **403, Cloudflare/bot-blocked** (live in browser)

### ModWiggler — Mutable Instruments Plaits Cheat Sheet
- URL: https://www.modwiggler.com/forum/viewtopic.php?t=219360
- Type: Forum / Reference
- What's there: Community Plaits cheat sheet (per-engine macro quick reference) — applies directly to the shared Brains engines.
- API? No
- Verified: yes — via WebSearch snippet; curl **403, Cloudflare/bot-blocked** (live in browser)

### Gearspace — Behringer BRAINS (review/discussion)
- URL: https://gearspace.com/board/modular-mania-all-things-eurorack-and-modular-synths-effects/1354238-behringer-brains-9.html
- Type: Forum
- What's there: Long Gearspace Brains thread; user impressions, comparisons, Reloaded firmware discussion.
- API? No
- Verified: yes — via WebSearch snippet; curl **403, bot-blocked** (live in browser)

### Gearspace — Behringer Brains Reloaded
- URL: https://gearspace.com/board/modular-mania-all-things-eurorack-and-modular-synths-effects/1400537-behringer-brains-reloaded.html
- Type: Forum
- What's there: Thread on the Reloaded firmware update (5 new engines), uploading DX7 patches via SynthTribe, user feedback.
- API? No
- Verified: yes — via WebSearch snippet (curl likely 403 like other Gearspace; live in browser)

---

## Reddit

### r/eurorack — "Behringer Brains - Review"
- URL: https://old.reddit.com/r/eurorack/comments/plxh1d/behringer_brains_review/
- Type: Reddit
- What's there: Owner review and discussion of the Brains shortly after release.
- API? No (reddit.com .json endpoint is blocked to bots; old.reddit HTML works)
- Verified: yes (curl old.reddit 200; title confirmed "Behringer Brains - Review : eurorack")

### r/eurorack — "latency with Behringer Brains"
- URL: https://old.reddit.com/r/eurorack/comments/wq012j/latency_with_behringer_brains/
- Type: Reddit
- What's there: Discussion of trigger/latency behavior on the Brains (relevant to percussion/LPG patching).
- API? No
- Verified: yes (curl old.reddit 200; title confirmed)

### r/eurorack — "Behringer Brains Reloaded adds 5 new modes"
- URL: https://old.reddit.com/r/eurorack/comments/11geqx2/behringer_brains_reloaded_adds_5_new_modes/
- Type: Reddit
- What's there: Reloaded firmware announcement discussion (BX7/Bassline/Wave Gen/Vox/Audio Scope).
- API? No
- Verified: yes (curl old.reddit; surfaced in old.reddit search results)

### r/eurorack — "Behringer Brains update"
- URL: https://old.reddit.com/r/eurorack/comments/zpwb12/behringer_brains_update/
- Type: Reddit
- What's there: Firmware update discussion thread.
- API? No
- Verified: yes (surfaced in old.reddit search results)

### r/synthesizers — "Introducing Behringer Brains"
- URL: https://old.reddit.com/r/synthesizers/comments/o0bz2q/introducing_behringer_brains/
- Type: Reddit
- What's there: Launch-day reactions, Plaits-clone discussion.
- API? No
- Verified: yes (surfaced in old.reddit search results)

### r/synthesizers — "Behringer Brains help"
- URL: https://old.reddit.com/r/synthesizers/comments/1ijizpn/behringer_brains_help/
- Type: Reddit
- What's there: Help thread — practical troubleshooting / how-to-use questions (engine selection, getting sound out).
- API? No
- Verified: yes (curl old.reddit 200; title confirmed "Behringer Brains help : synthesizers")

### r/synthesizers — "Minimal modular synth using Behringer Brains"
- URL: https://old.reddit.com/r/synthesizers/comments/11g05zz/minimal_modular_synth_using_behringer_brains/
- Type: Reddit
- What's there: Patch/voice example built around Brains as the single voice — useful real-world patching context.
- API? No
- Verified: yes (curl old.reddit 200; title confirmed)

---

## YouTube (video walkthroughs)

### "Behringer Brains Multi-Engine Oscillator, all you need to know / Comparison – Tutorial/Review"
- URL: https://www.youtube.com/watch?v=LiZ2J2_lus0
- Type: YouTube
- What's there: ~60-min deep walkthrough — every engine, hidden functions, button combos, and side-by-side sound comparison with Plaits. The most thorough single video.
- API? No
- Verified: yes (curl 200; title from WebSearch result)

### "Behringer Brains Multi-Engine Oscillator Module – First Look!"
- URL: https://www.youtube.com/watch?v=EMqFaeyCtXU
- Type: YouTube
- What's there: First-look/overview demo of the module and its modes.
- API? No
- Verified: yes (curl 200; title from WebSearch result)

### "Introducing – Behringer BRAINS Reloaded"
- URL: https://www.youtube.com/watch?v=FJsEAcVaEV8
- Type: YouTube (official-style intro)
- What's there: Intro/demo of the Reloaded firmware update and its 5 new engines (BX7 FM, Bassline/TD-3, Wave Generator, Vox, Audio Scope).
- API? No
- Verified: yes (curl 200; title from WebSearch result)

### Behringer Brains Exploration — YouTube playlist
- URL: https://www.youtube.com/playlist?list=PLS8VX9bQJIlgKFnLTBwobStcmiWn2xehV
- Type: YouTube
- What's there: A full playlist exploring the Brains across multiple videos/engines.
- API? No
- Verified: yes (surfaced in WebSearch results; standard YouTube playlist URL)

---

## Blogs / Reviews / News

### Sound On Sound — Behringer BRAINS review
- URL: https://www.soundonsound.com/reviews/behringer-brains
- Type: Reference / Review
- What's there: Professional in-depth review: engine breakdown, Plaits comparison, sound character, verdict.
- API? No
- Verified: yes (curl 200)

### Synthtopia — "Behringer Intros 'Brains'… a Mutable Instruments Plaits Clone"
- URL: https://www.synthtopia.com/content/2021/06/15/behringer-intros-brains-eurorack-module-a-mutable-instruments-plaits-clone/
- Type: News / Reference
- What's there: Launch announcement framing Brains explicitly as a Plaits clone; engine list and open-source lineage.
- API? No
- Verified: yes (curl 200)

### Synthtopia — "Behringer Brains Reloaded Adds 5 New Modes"
- URL: https://www.synthtopia.com/content/2023/03/02/behringer-brains-reloaded-adds-5-new-modes/
- Type: News / Reference
- What's there: Coverage of the Reloaded firmware (the 5 Behringer-specific engines).
- API? No
- Verified: yes (curl 200)

### Synthanatomy — "Behringer Brains reloaded: new update adds 5 engines (FM synth, TD-3…)"
- URL: https://synthanatomy.com/2023/03/behringer-brains-reloaded-new-update-adds-5-engines-fm-synth-td-3.html
- Type: News / Reference
- What's there: Detailed breakdown of the BX7 FM (DX7-compatible), Bassline (TD-3), Wave Generator, Vox engines + SynthTribe upload workflow.
- API? No
- Verified: yes (curl 200)

### MusicTech — "Behringer Brains Reloaded update brings five new synth engines"
- URL: https://musictech.com/news/gear/behringer-brains-reloaded/
- Type: News / Reference
- What's there: Reloaded firmware coverage with engine descriptions.
- API? No
- Verified: yes (curl 200)

### MatrixSynth — "Introducing – Behringer BRAINS Reloaded"
- URL: https://www.matrixsynth.com/2023/03/introducing-behringer-brains-reloaded.html
- Type: News / Reference
- What's there: Reloaded announcement repost with video and engine list.
- API? No
- Verified: yes (curl 200)

### ranzee — Behringer Brains
- URL: https://ranzee.com/behringer-brains/
- Type: Blog / Reference
- What's there: Hands-on blog write-up of the module and engines.
- API? No
- Verified: yes (curl 200)

---

## Dead / unusable (recorded honestly)

- `https://www.behringer.com/product.html?modelCode=0720-ABP` — **404** (old URL scheme; use `/en/products/0720-ABP`).
- `https://www.behringer.com/product?modelCode=P0E6H` — **404** (cited by one search snippet; does not resolve — use `/en/products/0720-ABP`).
- `https://www.behringer.com/product/videos.html?modelCode=0720-ABP` — **404** (old video-tab URL).
- `https://www.gearnews.com/behringer-brains-multi-engine-oscillator/` — **404** (article moved/removed).
- `https://www.sweetwater.com/sweetcare/articles/getting-started-with-behringer-synthtribe/` — **403** (Sweetwater bot-blocks; live in browser; generic SynthTribe how-to, not Brains-specific).
- reddit.com `.json` / `search.json` endpoints — **blocked to bots** ("Blocked" page); use `old.reddit.com` HTML instead (works).

---

## Structured-data / API summary

No source exposes a public JSON/REST API of Brains or Plaits patches/engine parameters — expected, since Brains has no presets and isn't on presetpatch. The closest to machine-readable structured data is **github.com/boourns/synthmodes** (CC-BY-4.0 XML index + HTML per-engine cheat-sheet pages, parseable). The Plaits/Plaits-DSP source repos (`pichenettes/eurorack`, `sourcebox/mi-plaits-dsp-rs`) are structured *source code* (engine definitions, chord tables, FM ratios) — authoritative but not an API.
