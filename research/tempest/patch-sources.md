# DSI / Sequential Tempest — Patch / Preset / Sound Sources

Deep-research catalog of places to get **Tempest patches/presets** (loadable SysEx Beats/sounds) plus a few notable **sample packs** (audio one-shots — flagged as such, since they are NOT loadable patches).

Format key for "type": **Official / Free / Paid / Community / Forum / API**.
All URLs verified live as of **2026-06-19** (method noted per source).

> **Important distinction:** The Tempest stores sounds inside *Beats/Projects* as MIDI **SysEx (.syx)**. A "patch" = a Tempest sound you load over MIDI (SysEx Librarian / MIDI-OX). A "sample pack" = WAV recordings of the Tempest — useful audio, but you cannot load them back into the Tempest as sounds. Both are listed; sample packs are clearly marked.

---

## Patch / SysEx sources (loadable into the Tempest)

### Sequential — Tempest Factory Sounds
- **URL:** https://sequential.com/tempest-factory-sounds/ and https://sequential.com/support/download/tempest-sounds/
- **Type:** Official / Free
- **What's there:** The official factory sound sets as SysEx — two downloads: the new Tempest sound set for **OS 1.4**, and the original set for **OS 1.0–1.3**. Plus the factory projects/beats. Loadable via SysEx Librarian (Mac) / MIDI-OX (Win).
- **API / structured data?** No.
- **Verified:** yes (curl HTTP 200, ~130KB / ~152KB pages).

### Sequential Forum — Tempest Sound Design & Patch Exchange
- **URL:** https://forum.sequential.com/index.php?topic=34.0 (and the Hardwarecore SysEx thread https://forum.sequential.com/index.php?topic=334.0)
- **Type:** Forum / Free / Community
- **What's there:** Long-running user patch-exchange thread; members post .syx attachments and Beat files. This is the main living community dumping ground (successor to the old dsiforum.com threads). 808 kick tutorials etc. also linked here.
- **API / structured data?** No (forum attachments).
- **Verified:** yes (curl HTTP 200, ~98KB; "sysex/attachment" matches present).

### NoisyLittleBugger / Stim (Tempest Recipes + Kits)
- **URL:** https://noisylittlebugger.net/tempest-recipes/ , kits index https://noisylittlebugger.net/my-tempest-kits/ , Starship Stim v1 https://stimresp.wordpress.com/2013/03/06/tempest-kits-starship-stim-v1/
- **Type:** Community / Free
- **What's there:** The definitive Tempest sound-design blog — dozens of recipe articles (SID sounds, sub-bass, 1-voice chords, etc.) plus downloadable kits ("Starship Stim v1" = a Beat of individual sounds for User3). The recipes are the value; the kit pages embed .syx links.
- **API / structured data?** No.
- **Verified:** yes (curl HTTP 200 on recipes index, 92 "tempest" mentions; kit page HTTP 200). **Caveat:** the legacy direct file `noisylittlebugger.net/patches/tempest/StarshipStim/StarshipStimV1_sounds.syx` currently returns **404** — request a re-up via the blog if the inline download is dead.

### Bitrotten / Leviathant — TR-606 & DR-110 emulation drums
- **URL:** https://www.bitrotten.com/tempest/ (direct file: https://www.bitrotten.com/tempest/LeviathantDrumsV1.zip)
- **Type:** Free (suggested $5 donation)
- **What's there:** "Leviathant Drums v1" — a year of sound design emulating the Roland TR-606 and Boss DR-110 on the Tempest. Zip contains **`Leviathant Drums v1.syx` (8,173 bytes) + readme.txt**. Multiple iterations of each drum voice (kicks, snares, handclaps, cymbals/noise).
- **API / structured data?** No.
- **Verified:** yes (downloaded zip, HTTP 200 application/zip, 5,021 bytes; unzip confirms the .syx + readme).

### Hardwarecore #1 (free soundset)
- **URL:** https://hardwarecore.wordpress.com/2015/06/01/dsi-tempest-soundset-hardwarecore-1/
- **Type:** Free (was $10)
- **What's there:** **64 patches** = 16 Pads, 16 Bass, 16 Leads & Misc, 16 Bass Drums. Ships as **two .syx files** ("Hardwarecore Lead, Effect, BD.syx" and "Hardwarecore Pads & Bass.syx", 32 sounds each = 1 Beat each) **plus WAV demos**. Mirrored on the Sequential forum (topic 334).
- **API / structured data?** No.
- **Verified:** yes (WebFetch read full page; download mirrored on forum.sequential.com topic 334, verified HTTP 200).

### Tim Mantle / Psalm37 (a.k.a. "LF0")
- **URL:** http://www.timmantle.com/tempest.html , bio/store http://www.timmantle.com/psalm37.html , eBay store https://www.ebay.co.uk/usr/psalm37audio
- **Type:** Paid (some free demos)
- **What's there:** Pro sound designer (did factory sounds for DSI Prophet 12 / Pro 2). Sells Tempest banks — **128 synth sounds** and **160 drum sounds** as SysEx, sold via eBay (psalm37audio). The MatrixSynth "LF0" post (below) is this same person's marketing. Demos on YouTube (e.g. "All New DSI Tempest – 128 Synth Sounds").
- **API / structured data?** No.
- **Verified:** yes (timmantle tempest.html curl HTTP 200, 77KB; psalm37.html HTTP 200; eBay store HTTP 200, 190KB with sound/patch items listed).

### MatrixSynth — "DSI Tempest Synth & Drum Patches by LF0"
- **URL:** https://www.matrixsynth.com/2017/03/dsi-tempest-synth-drum-patches-by-lf0.html
- **Type:** Community/blog pointer → Paid product (the Tim Mantle/Psalm37 banks above)
- **What's there:** Listing + demo videos for **128 synth + 160 drum** Tempest patches; "buy here" → eBay Psalm37. Same product as Tim Mantle. MatrixSynth is also a good general archive to search ("Tempest" tag) for other patch announcements.
- **API / structured data?** No.
- **Verified:** yes (WebFetch read content + counts).

### Deep Mind Dark / Home Records Label — "New Sound Pack" (Peter Jaczewski)
- **URL:** https://deepminddark.bandcamp.com/merch/dsi-tempest-new-sound-pack , Gumroad mirror https://homerecordslabel.gumroad.com/l/zafmcn
- **Type:** Paid (€15)
- **What's there:** **512 patches** = 256 synth + 256 percussion, delivered as a single **SysEx project** (~81 KB). Requires Main OS 1.5.0.2 / Voice OS 1.5. These are loadable patches, not samples. Same author = the "Tempest Mopho Banks by Peter Jaczewski" (384 sounds) referenced on PresetPatch and Tim Mantle's site.
- **API / structured data?** No.
- **Verified:** yes (WebFetch confirmed counts, format, price, firmware reqs).

### Soundform Recordings — "SFR Kicks V1.2"
- **URL:** https://soundformrecordings.gumroad.com/l/jlpum (alias https://app.gumroad.com/l/jlpum)
- **Type:** Paid
- **What's there:** **SysEx patch bank** — 16 custom kick drums (one per pad of Bank 1, Voice 1, center-panned) built for Music Gear Nut's "Tempest Kick Drum" video; by Gregory S (contributor to the official Tempest 1.4 Sound Bank). One Beat file in SysEx. Soundform also sells Tempest WAV kick packs (samples) on the same Gumroad store.
- **API / structured data?** No.
- **Verified:** yes (WebFetch confirmed it's a SysEx patch bank / loadable).

### Future Classic Kicks Vol.1 (Aion Raw Library)
- **URL:** Announce thread https://gearspace.com/board/samples-presets-profiles-and-services/857584-future-classic-kicks-vol-1-dsi-tempest.html , flyer https://rekkerd.org/sound-pack-flyer-future-classic-kicks-vol-1/
- **Type:** Paid (~$17–24) — primarily a SAMPLE pack, but the original Tempest **SysEx patches were posted free** for Tempest owners on the DSI/Prophet forum.
- **What's there:** Sample pack of kicks crafted on the Tempest (parallel valve/comp processing); the *source SysEx kick patches* were shared on the DSI forum (search forum.sequential.com for the Aion / Future Classic Kicks thread).
- **API / structured data?** No.
- **Verified:** yes (search-confirmed; Gearspace thread returns 403 to bots but is a real live listing — flyer on rekkerd.org corroborates).

### PresetPatch — DSI Tempest section
- **URL:** https://www.presetpatch.com/synth/dsi-tempest
- **Type:** Community / Free (login + daily download tokens)
- **What's there:** User-uploaded patches. Currently lists **NineT9.syx** (techmo33) and **Mopho_Demo.zip** (homerecordslabel) as free downloads, plus a "buy" pointer to Peter Jaczewski's Mopho Banks (384 sounds). Small but a real platform with the Tempest as a listed synth.
- **API / structured data?** No public API found (gated behind login + download tokens; page scan showed no /api/, JSON, Algolia or Firestore endpoints).
- **Verified:** yes (WebFetch listed patches; curl scan for API hints = none).

### midi.link — public Firestore patch database ⭐ (API)
- **URL (site):** https://midi.link  |  **API base:** `https://firestore.googleapis.com/v1/projects/midi-link-5614f/databases/(default)/documents/patches`
- **Type:** Community / Free / **API (public Firestore REST)**
- **What's there:** ~79 patches total in the DB, of which **45 are Tempest** (`instrument.path == "tempest"`). Each patch document carries: `name`, `tags` (kick/snare/hi_hat/lead/bass/cymb/noise…), `instrument` map, `user`, timestamps, and **`data.bytesValue` = the raw Tempest SysEx as base64** (decode → write .syx → load). Example names: "Bouncy Rim", "808 Style Kick", "606 SD", "DR110 CY Noise", "Dub Morse".
- **API / structured data?** **YES — public Firestore REST, no auth.** Endpoint: `GET .../documents/patches?pageSize=300` (returns the full collection in one page; paginate with `pageToken` if it grows). The whole `patches` collection is world-readable (HTTP 200); other collection names return 403, so query `patches` and filter client-side by `instrument.path`.
- **Verified:** yes (curl HTTP 200; parsed JSON; confirmed 45 Tempest docs with base64 SysEx in `data.bytesValue`).

---

## Sample packs (audio one-shots — NOT loadable Tempest patches)

### LØSTLVLS — DSI Tempest sample pack
- **URL:** https://lostlvls.bandcamp.com/album/sample-pack-dsi-tempest-l-stlvls
- **Type:** Paid (£12.99) — **SAMPLES (WAV)**, not SysEx.
- **What's there:** 576 one-shots (24-bit/48kHz) across BD/SD/perc/hats/cymbals/bass/lead/pad/FX, + 9 sample chains, + Octatrack .ot slice files + Ableton Selector kit.
- **API / structured data?** No.
- **Verified:** yes (WebFetch confirmed it's WAV samples, counts, price).

### Splice — "Tempest Drums" by Bullyfinger
- **URL:** https://splice.com/sounds/packs/bullyfinger/tempest-drums/samples
- **Type:** Paid (Splice subscription) — **SAMPLES**, not SysEx.
- **What's there:** Drum sample pack recorded from the DSI Tempest. (Splice has its own internal API but it's auth-gated; not useful for free SysEx.)
- **API / structured data?** Internal/auth-gated only — treat as no public API.
- **Verified:** yes (search-confirmed listing).

### Polynominal — Tempest sample pack
- **URL:** https://polynominal.gumroad.com/l/mcuuf
- **Type:** Paid (~€5) — **SAMPLES (WAV)**, not SysEx.
- **What's there:** ~320 Tempest drum samples (kicks/claps/snares/hats/perc).
- **API / structured data?** No.
- **Verified:** yes (search-confirmed Gumroad listing).

### Sylvain Moreau — "Tempest BD1"
- **URL:** https://www.sylvainmoreau.com/sylvainmoreau/index.php/product/album/
- **Type:** Paid — **SAMPLES** (Tempest bass-drum recordings).
- **What's there:** A bass-drum-focused Tempest sample album.
- **API / structured data?** No.
- **Verified:** partial (search-confirmed; product page is a generic catalog URL — confirm exact product before linking on a live surface).

---

## Tools / platforms (context, not patch banks)

### Patch Base (Coffeeshopped) — Tempest editor
- **URL:** https://coffeeshopped.com/patch-base/editor/dave-smith-instruments/tempest
- **Type:** Tool — **NOT yet available.** Page says Tempest is only "one of the synths we're considering adding support for." No editor/librarian or patch library exists for it today.
- **API / structured data?** No.
- **Verified:** yes (WebFetch — confirmed "considering"/voting-page only).

### General community archives to keep searching
- **MOD WIGGLER — "DSI Tempest sound repository":** https://www.modwiggler.com/forum/viewtopic.php?t=161081 — real, active repo thread, but bot-blocked (HTTP 403 to curl/WebFetch). Open in a browser to harvest the linked .syx/Dropbox/SoundCloud posts. **Type:** Forum/Community/Free. **Verified:** exists (403 to automated fetch — needs a real browser session).
- **Gearspace DSI user-library thread:** https://gearspace.com/board/electronic-music-instruments-and-electronic-music-production/525937-dave-smith-instruments-patches-user-library-thread.html — broad DSI patch-sharing thread; some Tempest .syx posts. **Verified:** search-confirmed (Gearspace 403s automated fetches).

---

## Negative results (checked, discard)
- **patches.fm** — site is effectively empty (739-byte stub, zero Tempest content). Not a source.
- **KVR "DSI Tempest users" thread** (kvraudio.com/forum/viewtopic.php?t=458227) — discussion only, **no** patch/sysex downloads.
- **timmantle.com served over HTTP** initially refused on one fetch path; the working URL is `http://www.timmantle.com/tempest.html` (HTTP 200 via curl).
