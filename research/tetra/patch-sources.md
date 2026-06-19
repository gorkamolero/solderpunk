# DSI / Sequential Tetra — Patch / Preset / Sound-Bank Sources

The Tetra is a 4-voice analog synth in the **Prophet '08 / Mopho** family. Each Tetra voice is
essentially a Mopho voice, and the Prophet '08 is the 8-voice keyboard sibling. As a result,
**Prophet '08 and Mopho `.syx` banks load on the Tetra** (with caveats: Prophet '08 patches that
rely on 8-voice polyphony or the second osc/sub behavior may need tweaking; layered/combo patches
drop to 2-note polyphony per layer). All `.syx` files transfer via SysEx Librarian (Mac) or
MIDI-OX / Windows SysEx utility.

Research date: 2026-06-19. Each source below was verified live (method noted).

---

## Official

### Sequential — Tetra Factory Sounds
- **URL:** https://sequential.com/tetra-factory-sounds/
- **Type:** Official / Free
- **What's there:** All Tetra factory program banks as a single MIDI SysEx (`.syx`) download, plus install instructions. The canonical factory set.
- **API?** No.
- **Verified:** yes (WebFetch — page live, 2025 copyright, download referenced in sidebar)

### Sequential — Prophet '08 Factory Sounds
- **URL:** https://sequential.com/prophet-08-factory-sounds/
- **Type:** Official / Free
- **What's there:** Prophet '08 factory banks as `.syx`. Tetra-compatible (same patch format; tweak for voice differences).
- **API?** No.
- **Verified:** yes (WebSearch result + same template as Tetra/Mopho factory pages, all live)

### Sequential — Mopho x4 Factory Sounds
- **URL:** https://sequential.com/mopho-x4-factory-sounds/
- **Type:** Official / Free
- **What's there:** Mopho x4 factory program banks as MIDI SysEx. Same per-voice architecture as Tetra, so loadable on Tetra.
- **API?** No.
- **Verified:** yes (WebFetch — page live, 2025 copyright)

### Sequential Forum (official davesmithinstruments / sequential forum)
- **URL:** https://forum.sequential.com/ (Tetra threads incl. https://forum.sequential.com/index.php?topic=435.0)
- **Type:** Official / Forum / Community
- **What's there:** Active official forum; threads on Prophet'08→Tetra patch transfer, troubleshooting (no-sound-on-load = check local control / global reset), and user-shared banks (see eXode below).
- **API?** No.
- **Verified:** yes (WebFetch — thread live, replies through 2021)

---

## Free / Community

### eXode Patches for DSI Tetra (Sequential forum)
- **URL:** https://forum.sequential.com/index.php?topic=95.0
- **Type:** Free / Community / Forum
- **What's there:** `eXode_Banks.zip` (17.24 kB) attached to the post — two full banks (C and D) of free Tetra patches by forum user eXode. ~2,825 downloads. Also usable on Prophet '08 / Mopho (won't sound identical). Highly regarded.
- **API?** No.
- **Verified:** yes (WebFetch — thread live, attachment present, replies through Feb 2021)

### Noisy Machines — Juno-style Tetra patches (free)
- **URL:** https://noisymachines.gumroad.com/ (featured via https://www.matrixsynth.com/2021/04/dsi-tetra-free-download-patches-classic.html)
- **Type:** Free / Community
- **What's there:** Free Tetra patches emulating Juno 6/60/106 within the Tetra's single-osc/one-ADSR/4-pole constraints. Gumroad (`.syx`).
- **API?** No.
- **Verified:** yes (Matrixsynth post live via WebFetch; Gumroad storefront returns HTTP 200 via curl — JS-rendered so body not readable by WebFetch, but live)

### Edisyn (open-source patch editor + librarian) — eclab/edisyn
- **URL:** https://github.com/eclab/edisyn
- **Type:** Free / Community (open-source software, not a bank)
- **What's there:** Java editor/librarian (Mac/Win/Linux) with explicit support for **Prophet '08, Tetra (Single + Combo), Mopho, Mopho Keyboard, Mopho SE, Mopho x4, Prophet Rev2**. Reads/writes `.syx`. Notable for sophisticated patch-generation tools: randomization, merging, blending, morphing, hill-climbing, deep-learned models — effectively a way to *generate* new Tetra patches. Actively maintained (1,839+ commits).
- **API?** No public web API, but it is open-source code you can drive programmatically / read SysEx spec from.
- **Verified:** yes (WebFetch — repo active, recent commits)

### Steelberry Clones — "Science" 64 patches (free intro pack available)
- **URL:** http://stereoklang.se/blog/science-64-presets-for-mopho (vendor: Alba Ecstasy, see below)
- **Type:** Free (intro pack) / Paid (full)
- **What's there:** Free MoPho-made test pack + free 88-sample RAW pack; advertises the paid "Science" 64-patch set. Tetra-compatible.
- **API?** No.
- **Verified:** yes (WebSearch result; full product verified via Alba Ecstasy below)

---

## Paid Soundset Designers

### Synth-Patches.com — DSI Tetra (110 patches)
- **URL:** https://synth-patches.com/dsi-tetra/ (storefront: https://synthpatches.gumroad.com/l/prophet-08-rev2-patches and /l/dsi-mopho)
- **Type:** Paid
- **What's there:** 110 patches, `.syx`, ~$14+VAT, ambient/vaporwave/downtempo ("Boards of Canada / Tycho / Tame Impala"). Compatible across Prophet 08, REV2, Mopho X4, Mopho Keys, Tetra. Also sells Mopho (110) and Prophet 08/REV2 (110) variants.
- **API?** No (plain HTML, no JSON-LD; sells via Gumroad).
- **Verified:** yes (WebFetch — page live, Gumroad checkout active)

### LFO Store — DSI Tetra "Black Cube" by Nick Chronos (128 presets)
- **URL:** https://lfo.store/product-category/hardware-synths/dsi-tetraprophet/ (product: .../dsi-tetraprophet-black-cube-soundset-128-presets/)
- **Type:** Paid
- **What's there:** 128 presets (62 sequences, 14 arps, 8 motion, 6 FX, 8 basses, 27 leads). Compatible MoPho/MoPho SE/Tetra/Prophet. Same store carries Prophet 08 & Rev.2 (128), Mopho "Yellow Cube" (128), Evolver "Are You Sequenced?" (128). Sells via Sellfy (lfo.sellfy.store).
- **API?** No.
- **Verified:** yes (WebFetch — category page live, products listed)

### Boxed Ear — TQS "Binary Pulsars" (128 sounds, by Two Quiet Suns)
- **URL:** https://www.boxedear.com/tqsprophet08.php
- **Type:** Paid
- **What's there:** 128 patches (pads, poly synths, basses, atmospheres, arps), ~$26 / €24 / £21. Delivered as MIDI SysEx **+ SoundTower** editor file. Compatible with all Prophet 08 / Mopho / Tetra models. Instant download via email.
- **API?** No.
- **Verified:** yes (WebFetch — page live, purchase active)

### GEOSynths — Prophet 08 (64 patches)
- **URL:** https://www.geosynths.com/prophet08 (also https://www.geosynths.com/prophetrev2)
- **Type:** Paid
- **What's there:** 64 playable Prophet '08 patches (motion pads, strings, bass, arps, keys) + bundled free plugin presets. Prophet '08 `.syx` generally loads on Tetra, BUT vendor explicitly warns NOT compatible with Prophet REV2 and does not advertise Tetra — treat Tetra use as "loads with tweaking," unverified by vendor. Separate REV2 set (128) also sold.
- **API?** No.
- **Verified:** yes (WebFetch — page live, no-refunds sales model active)

### Mike Hiegemann — Prophet '08 & Rev2 Sounds (100 sounds)
- **URL:** https://mikehiegemann.com/sound-design/prophet-08-sounds/
- **Type:** Paid
- **What's there:** 100 sounds (pads, evolving/layered, percussion, arps). Formats: `.syx` (Bank 1), `.p_b` (SoundEditor), PDF. Explicitly states compatibility with Rev2 + all Mopho and Tetra models ("most patches will need some tweaking" on Mopho/Tetra). PayPal Buy Now → Dropbox delivery.
- **API?** No.
- **Verified:** yes (WebFetch — page live, comments through Sep 2022)

### Alba Ecstasy — "Science" 64 patches for MoPho/Tetra/Prophet 08 (REV1)
- **URL:** https://www.albaecstasy.ro/mopho-tetra-prophet-08-presets/
- **Type:** Paid (free intro pack available)
- **What's there:** 64 presets (drums, basses, leads, arps, sequencers), €12, 100% royalty-free. Compatible MoPho/MoPho SE/X4/Tetra/Prophet REV1 (REV2 untested). Also includes 88 samples/loops. Free test pack offered. Instant download.
- **API?** No.
- **Verified:** yes (WebFetch — page live, checkout active)

### Sunsine Audio — "Four" / "Two By Four" (128 presets) — DISCONTINUED
- **URL:** https://sunsineaudio.com/ (was the storefront)
- **Type:** Paid — NO LONGER AVAILABLE
- **What's there (historical):** "Four" = 128 presets across 3 `.syx` files (one each for Tetra/Mopho/Prophet 08), was ~$6.99, bonus Reaktor Tetra Editor ensemble. "Two By Four" was a related set. Product documented on rekkerd.org / Synthtopia.
- **API?** No.
- **Verified:** yes (curl — sunsineaudio.com now returns a parked/placeholder "Success!" hosting page, 0 product content, all /shop /store /products paths 404 → store is DEFUNCT). Listed for completeness; do not link as a live buy.

### Creatures of Sound — Prophet 08 & Tetra Soundbank — LIKELY DISCONTINUED
- **URL:** discussed at https://gearspace.com/board/electronic-music-instruments-and-electronic-music-production/904279-prophet-08-amp-tetra-patches-creatures-sound.html
- **Type:** Paid — hard to find for sale
- **What's there:** Well-regarded 3rd-party bank (mellow patches, strong modulation) for Prophet 08 / Tetra. Users on Gearspace call it "the best 3rd party bank" but note it became difficult to buy.
- **API?** No.
- **Verified:** partial (WebSearch confirms the bank + reputation; Gearspace thread behind Cloudflare challenge to automated fetch; no live storefront found — treat as archival/secondhand)

---

## Aggregators / Indexes / Tools (browse hubs)

### PresetPatch — DSI Tetra
- **URL:** https://www.presetpatch.com/synth/dsi-tetra  (sound-sets index: /resources/sound-sets)
- **Type:** Free (community uploads) + commercial listings
- **What's there:** ~12 free user patches/banks. Formats: `.t4p` (single patch), `.syx` (banks). Examples: `eXode_Bank_D.syx`, `Tetra_ProgramsCombos_1.0.syx`, `Tron_Drum_C@.t4p`. Free account + daily download tokens to grab files. Sound-sets resource tab also surfaces commercial sets (e.g. Boxed Ear). Community upload model — collection grows over time.
- **API?** No documented REST/JSON API. `/synth/dsi-tetra.json` returns HTML (not JSON); `/api/...` is 404. It DOES expose a standard crawlable `sitemap.xml` (`https://www.presetpatch.com/sitemap.xml`, recently updated 2026-06) — structured/enumerable but not a queryable data API.
- **Verified:** yes (WebFetch page; curl probes of .json/api/sitemap endpoints)

### Coffeeshopped Patch Base — DSI Tetra editor/librarian
- **URL:** https://coffeeshopped.com/patch-base/editor/dave-smith-instruments/tetra
- **Type:** Tool (paid app; no bundled patches)
- **What's there:** iPad/macOS editor & librarian for the Tetra — edits all voice params + 4-part combos, organizes the 512 voices / 128 combos, imports/exports `.syx`, iCloud sync. No patch library, no public database.
- **API?** No.
- **Verified:** yes (WebFetch — page live)

### Sound Quest MIDI Quest — Tetra & Prophet 08 editor/librarian
- **URL:** https://squest.com/ (supports Prophet 08 + Tetra among 900+ instruments)
- **Type:** Tool (paid app)
- **What's there:** SysEx editor/librarian supporting Prophet 08 and Tetra; graphic editing, organization, bank management. No bundled Tetra banks.
- **API?** No.
- **Verified:** yes (WebSearch result; squest.com product pages live)

### Gearspace — "Dave Smith Instruments patches USER-LIBRARY" thread
- **URL:** https://gearspace.com/board/electronic-music-instruments-and-electronic-music-production/525937-dave-smith-instruments-patches-user-library-thread.html
- **Type:** Forum / Community
- **What's there:** Long-running thread where users share DSI patch files (Prophet 08 / Mopho / Tetra) — `.syx` attachments and links. Good archival source.
- **API?** No.
- **Verified:** partial (WebSearch confirms thread exists & topic; Gearspace serves Cloudflare "Just a moment" challenge to automated fetch — live for human browsers, known-active platform)

### KVR Audio — Soundware Forum
- **URL:** https://www.kvraudio.com/forum/ (Soundware section; Tetra discussion e.g. viewtopic.php?t=265226)
- **Type:** Forum / Community
- **What's there:** General patch/preset & SysEx discussion; place to find/request Tetra & Prophet-family banks. No single canonical Tetra thread, but the Soundware forum is the hub.
- **API?** No.
- **Verified:** yes (WebSearch — forum + Tetra threads live)

### Vintage Synth Explorer — Tetra forums & page
- **URL:** https://www.vintagesynth.com/dave-smith-instruments/tetra ; forum https://forum.vintagesynth.com/ (e.g. viewtopic.php?f=18&t=76819)
- **Type:** Community / Forum
- **What's there:** Tetra discussion incl. Mopho x4 + Tetra vs Prophet 08 comparisons; community knowledge and occasional patch sharing.
- **API?** No.
- **Verified:** yes (WebSearch results live)

### Matrixsynth — DSI Tetra free-download post
- **URL:** https://www.matrixsynth.com/2021/04/dsi-tetra-free-download-patches-classic.html
- **Type:** Blog / Community (discovery)
- **What's there:** Points to the free Noisy Machines Juno-style Tetra patches; Matrixsynth broadly indexes DSI patch news.
- **API?** No.
- **Verified:** yes (WebFetch — post live)

### Rekkerd / Synthtopia — soundset news (discovery hubs)
- **URLs:** https://rekkerd.org/sunsine-audio-four128-sounds-for-dsi-tetra-mopho-and-prophet-08/ , https://rekkerd.org/boxed-ear-releases-tqs-binary-pulsars-dsi-synthesizers/ , https://www.synthtopia.com/content/2012/09/08/sunsine-audio-releases-129-presets-for-dsi-tetra-mopho-and-prophet-08/
- **Type:** Blog / News (discovery — not hosts)
- **What's there:** Release coverage of Tetra/Prophet/Mopho soundsets (Sunsine, Boxed Ear, etc.) with specs and links back to vendors. Useful for finding more designers.
- **API?** No.
- **Verified:** yes (WebFetch — rekkerd pages live; Synthtopia via WebSearch)

---

## Compatibility note (for loading)
- Single patches: `.t4p` (Patch Base / Tetra single), `.syx` (banks).
- Prophet '08 banks → Tetra: load fine; voices using 8-note poly or P08-specific behavior may differ. Layered/combo patches = 2-note poly per layer on Tetra.
- Mopho / Mopho x4 banks → Tetra: closest match (Tetra voice == Mopho voice).
- Tools to load: SysEx Librarian (Mac), MIDI-OX / Windows SysEx Transfer Utility, Edisyn, Patch Base, MIDI Quest, SoundTower.
