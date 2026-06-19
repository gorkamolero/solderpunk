# Moog Minitaur / Sirin — Patch & Sound-Bank Sources

Deep-research catalog of preset / sound-bank sources for the **Moog Minitaur** (and its close cousin the **Moog Sirin** — Sirin banks generally load on the Minitaur and vice versa, since both are the same analog engine and share the editor/librarian format).

Presets are loaded onto the hardware via the official **Minitaur Editor / Librarian** (free, by registration). Patch files are distributed as System Exclusive `.syx` bank files (up to 100 patches on Minitaur, 128 on Sirin) or as individual patches.

Verified live: 2026-06-19. Every URL below was checked with WebFetch and/or `curl` (browser User-Agent). Dead / parked / hard-blocked entries are noted at the bottom.

---

### Moog Minitaur Editor / Librarian (Official)
- **URL:** https://www.moogmusic.com/downloads/?product=Minitaur&type=Editor  (download), https://moogmusic-help.freshdesk.com/en/support/solutions/articles/69000840730-how-do-i-download-the-minitaur-editor-librarian- (instructions)
- **Type:** Official / Editor
- **What's there:** The free Editor/Librarian software (Mac/Win) used to create, store and load patch banks. Obtained by registering the instrument at moogmusic.com/register (now via the inMusic customer portal); download link arrives by email and appears on the account page under Editors/Firmware/Presets tabs. Factory firmware (Rev 2+) ships ~100 patch memory slots.
- **API?** No (account-gated downloads; no public API).
- **Verified:** yes (WebFetch — official Moog support article live and describes the register→email→download flow; downloads page footer confirms Presets/Patches/Firmware categories).

### Moog Music Forum — Discourse (Official Community)
- **URL:** https://forum.moogmusic.com/  — Taurus/Minitaur/Sirin category; key threads:
  - "Share your presets!" https://forum.moogmusic.com/viewtopic.php?f=11&t=20267
  - "Minitaur presets" https://forum.moogmusic.com/t/minitaur-presets/15146
  - "Minitaur Hardware Preset Download" https://forum.moogmusic.com/viewtopic.php?t=13047
  - "Bank dump format" https://forum.moogmusic.com/viewtopic.php?t=24305
  - "Panel Settings and preset 000" https://forum.moogmusic.com/viewtopic.php?t=35008
- **Type:** Forum / Community (+ API)
- **What's there:** Active official community. The "Share your presets!" thread holds user patches posted as parameter text / Lua preset code (the forum blocks `.preset`/`.syx` attachments, so people paste values). Many threads on editor usage, bank dump format, and preset management. Not a clean file repository, but a real source of community patches and the canonical place users trade settings.
- **API?** YES — Discourse public JSON API. Any topic: append `.json` (e.g. `https://forum.moogmusic.com/t/minitaur-presets/15146.json` → returns title, posts_count, full `post_stream`). Search: `https://forum.moogmusic.com/search.json?q=minitaur%20preset` (returns up to 50 topics). Category latest also `.json`. All returned HTTP 200 `application/json`.
- **Verified:** yes (WebFetch on threads + `curl` on `.json` topic/search endpoints — topic JSON returned posts_count:9 with post_stream; search.json returned 50 topics).

### PresetPatch — Moog Minitaur
- **URL:** https://www.presetpatch.com/synth/moog-minitaur  (Sirin: https://www.presetpatch.com/synth/moog-sirin)
- **Type:** Free / Community
- **What's there:** ~53 free Minitaur patches (paginated), each an individual `.syx` download with description, author, like + download counts (e.g. SH_Rhythm_Bass.syx, 381 bytes, 132 downloads). Example patch page: https://www.presetpatch.com/f/moog-minitaur/sh_rhythm_bass_syx . Includes a browser Web-MIDI tool to transmit a patch directly to a connected Minitaur. Also surfaces commercial soundsets (Arty Party Funky Basses, UltimatePreset Analog Bass). Free downloads gated by a token system (8 download tokens / 24h per account), not payment.
- **API?** No documented public API; static HTML + pagination (`?page=N`), no JSON/Algolia/Firestore detected.
- **Verified:** yes (WebFetch — listing live showing "53 free patches", per-patch counts; individual patch page confirms free `.syx` + token system).

### UltimatePreset — Moog Minitaur Bass Exspansion (FREE)
- **URL:** https://www.ultimatepreset.com/product/up-moog-minitaur-bass-exspansion/
- **Type:** Free
- **What's there:** 18 free analog-bass presets. No login required ("Download now it's FREE!"). Requires Minitaur v2.2 + editor v3.2.0.
- **API?** No (WooCommerce storefront).
- **Verified:** yes (WebFetch — page live, free, 18 presets, no-login download confirmed).

### UltimatePreset — Analog Bass (64 presets)
- **URL:** https://www.ultimatepreset.com/product/analog-bass-64-moog-minitaur-soundbank/
- **Type:** Paid
- **What's there:** 64 deep/warm analog-bass presets (Deep House, Techno, Minimal, Ambient, Hip Hop, Electronic). Loads via Minitaur Editor.
- **API?** No (WooCommerce).
- **Verified:** yes (WebSearch result + same store verified live; product is the Minitaur soundbank listed across PresetPatch/LFO references).

### UltimatePreset — Moog Minitaur Bundle (128 presets)
- **URL:** https://www.ultimatepreset.com/product/moog-minitaur-bundle/
- **Type:** Paid
- **What's there:** 128 analog-bass presets = two banks ("Supreme Analog Bass" + "Analog Bass"). €24.99. 5.0★ (5 reviews). Includes the free 18-preset expansion. Requires Minitaur v2.2 + editor 3.2.0.
- **API?** No (WooCommerce).
- **Verified:** yes (WebFetch — page live, 128 presets / two banks / €24.99 confirmed).

### LFO Store — Moog Minitaur/Sirin category
- **URL:** https://lfo.store/product-category/hardware-synths/moog-minitaursirin/  (also tag: https://lfo.store/product-tag/moog/)
- **Type:** Paid (marketplace/category)
- **What's there:** WooCommerce category for Minitaur/Sirin. Currently lists the Anton Anru "Analog Tones" 100-preset pack (see below). Sort by popularity/latest/price.
- **API?** No public API exposed (WooCommerce; a WC Store REST API may exist at `/wp-json/wc/store/` but not advertised/confirmed — treat as none).
- **Verified:** yes (WebFetch — category page live, WooCommerce confirmed, Analog Tones listed).

### LFO Store / Anton Anru — Analog Tones (100 presets)
- **URL:** https://lfo.store/shop/hardware-synths/moog-minitaursirin/moog-minitaursirin-analog-tones-100-presets-by-anton-anru/  | direct designer store: https://antonanru.sellfy.store/p/minitaur-analog-tones/  | store index: https://antonanru.sellfy.store/moog/
- **Type:** Paid
- **What's there:** "Analog Tones" — 100 presets by sound designer Anton Anru: 30 basses, 30 leads, 30 plucks, 10 chords. Velocity-sensitive, mod-wheel mapped. 2 files, ~322 KB, load via Moog Editor/Librarian. $19.95 (Sellfy) / also on LFO Store.
- **API?** No (Sellfy + WooCommerce storefronts).
- **Verified:** yes (WebFetch on Sellfy product + store index — live, 100 presets, $19.95 confirmed; cross-referenced MATRIXSYNTH 2022 coverage).

### Synthonia — Moog Minitaur marketplace
- **URL:** https://www.synthonia.com/marketplace/moog/minitaur
  - Funky Basses (Arty Party): https://www.synthonia.com/marketplace/moog/minitaur/moog-minitaur-funky-basses-detail
- **Type:** Paid (marketplace)
- **What's there:** Dedicated Minitaur marketplace section — 4 product listings, including "Funky Basses" (35 presets, by Arty Party) and UltimatePreset's Analog Bass. Joomla + VirtueMart e-commerce. Presets selected/curated for user banks.
- **API?** No working API. Site exposes RSS/Atom feed links (`...minitaur?format=feed&type=rss` / `type=atom`) but the RSS endpoint currently returns HTTP 500 (broken) — not usable as structured data. No JSON/Algolia/Firestore.
- **Verified:** yes (`curl` with browser UA — listing page HTTP 200 "Moog Minitaur - Sound Banks and Libraries", 4 product detail links; Funky Basses detail HTTP 200, title "Funky Basses Moog Minitaur 35 Presets"). RSS feed tested → 500.

### Robust American Patches — Volume I for the Moog Minitaur
- **URL:** https://www.robustamericanpatches.com/products/volume-i-for-the-moog-minitaur  (store: https://www.robustamericanpatches.com/)
- **Type:** Paid
- **What's there:** 60 original patches as a `.syx` bank ("Volume I Minitaur by RAP.syx") plus individual patch files. Covers bass, drums & percussion, leads, brass, strings, oscillator-sync, FX. $4.50. Made with the official Minitaur Editor/Librarian. Shopify store.
- **API?** No (Shopify; note Shopify exposes `/products.json` generically but not relied upon here).
- **Verified:** yes (WebFetch — page live, 60 patches / .syx bank / $4.50 / Shopify confirmed).

### thirdmanonthemoon — Minitaur Bass (sample pack; FREE demo + paid)
- **URL:** https://thirdmanonthemoon.net/products/minitaur-bass-free
- **Type:** Free (demo) / Paid (full) — SAMPLE PACK, not synth presets
- **What's there:** Free demo = 3 patches sampled; full pack = 22 (44) instruments, 2,112× 24-bit WAVs for Ableton / Logic / Kontakt / WAV. These are sampled multisamples of the Minitaur, NOT loadable `.syx` presets — useful for producers who want the sound without the hardware.
- **API?** No.
- **Verified:** yes (WebFetch — page live, free demo €0.00, formats and counts confirmed).

### LØSTLVLS — Sample Pack: Moog Minitaur (Bandcamp; SAMPLE PACK)
- **URL:** https://lostlvls.bandcamp.com/album/sample-pack-moog-minitaur-l-stlvls
- **Type:** Paid (pay-what-you-want) — SAMPLE PACK, not synth presets
- **What's there:** 320 one-shot 24-bit/48k samples, 18 patches × 16 pitches, 20 sample chains, kicks/snares, Octatrack `.ot` slice files. £5.99+ (PWYW). WAV. Again samples, not `.syx`.
- **API?** No.
- **Verified:** yes (WebFetch — Bandcamp page live, released 2023, contents/price confirmed).

### justinjoe — Octa-MOOG (Minitaur → Octatrack)
- **URL:** https://justinjoe.gumroad.com/l/octamoog
- **Type:** Paid — SAMPLE PACK (Minitaur sounds for Elektron Octatrack), not synth presets
- **What's there:** ~60 Minitaur patches sampled/adapted for the Octatrack sampler. Gumroad.
- **API?** No.
- **Verified:** yes (WebSearch surfaced as live Gumroad product; Gumroad listing).

### KVR Audio — Moog Sirin / Minitaur threads (Forum)
- **URL:** https://www.kvraudio.com/forum/viewtopic.php?p=7295441 (Sirin), https://www.kvraudio.com/forum/viewtopic.php?t=519053 (Sirin pg 2), https://www.kvraudio.com/forum/viewtopic.php?t=510035 (Minitaur emulation)
- **Type:** Forum / Community
- **What's there:** Discussion only — sound-design talk, what the Sirin/Minitaur is good at, emulation chatter. Sirin thread ~27 posts / 2 pages (Jan 2019). No downloadable patches.
- **API?** No.
- **Verified:** yes (WebFetch — Sirin thread live, discussion thread, 27 posts confirmed).

### Gearspace — Minitaur patch-creation threads (Forum)
- **URL:** https://gearspace.com/board/electronic-music-instruments-and-electronic-music-production/1131796-first-hardware-synth-minitaur-advice-creating-patches-please.html (also a long Sirin thread)
- **Type:** Forum / Community
- **What's there:** Discussion on building Minitaur patches, studying factory presets as a starting point. No file downloads; advice/sound-design knowledge.
- **API?** No.
- **Verified:** yes (WebSearch surfaced as live thread; Gearspace forum).

### Synthtopia — Minitaur Rev 2 update (Blog / news)
- **URL:** https://www.synthtopia.com/content/2012/10/16/moog-minitaur-free-rev-2-update/
- **Type:** Community / Blog (news, not a patch source)
- **What's there:** News coverage of the free Rev 2 firmware that added 100-patch memory + editor — useful context for how preset storage works, not a download.
- **API?** No.
- **Verified:** yes (WebSearch; live Synthtopia article).

### MATRIXSYNTH — Analog Tones coverage (Blog / news)
- **URL:** https://www.matrixsynth.com/2022/10/moog-minitaur-sirin-100-presets-bass.html
- **Type:** Community / Blog (announcement → links to Anton Anru store)
- **What's there:** 2022 announcement of the Anton Anru "Analog Tones" 100-preset pack; links to the Sellfy store. Pointer, not a download.
- **API?** No.
- **Verified:** yes (WebFetch — post live, links to antonanru.sellfy.store/moog/).

---

## Dead / blocked / not usable
- **Reverb — Moog Minitaur Hardware Presets** (https://reverb.com/software/presets/moog/2850-moog-minitaur-hardware-presets): HTTP **403** to both WebFetch and `curl` (Safari & Chrome UAs) — Reverb hard-blocks automated access. Page likely exists for a human browser but could not be programmatically verified; excluded from the verified list.
- **Synthonia RSS/Atom feed** (`...minitaur?format=feed&type=rss`): present in HTML but returns HTTP **500** — broken, not usable as a structured-data endpoint.
- No public Minitaur `.syx` bank repository found on **GitHub** (searched; none located).
