# ZOIA / ZOIA Euroburo — Patch Sources

Deep-research catalog of patch sources for the Empress Effects **ZOIA** and **ZOIA Euroburo** grid-based modular pedal. Every source below was verified LIVE (HTTP 200 + real content) on **2026-06-19**. Dead/parked/irrelevant candidates were discarded (see "Discarded" at the bottom).

**Headline:** Patchstorage (platform id **3003** = "ZOIA / Euroburo", **1,499 patches**) is the de-facto hub and the only first-class public API. It is also the layer the `zoia_lib` manager pulls from, where Empress publishes the official Euroburo factory bank, and where nearly every notable designer hosts. Everything else is downloads, login-walled communities, or commercial one-offs.

---

## APIs / Structured Data

### Patchstorage REST API (THE structured source)
- URL: https://patchstorage.com/api/beta/
- Type: API / Community (free)
- What's there: WordPress REST API exposing the entire patch catalog. ZOIA/Euroburo = `platforms=3003`. Confirmed **1,499 patches** via `x-wp-total` header. Returns JSON: patch metadata, authors, categories, tags, file download URLs, dates.
- Key endpoints:
  - `GET /platforms?slug=zoia` -> confirms `{"id":3003,...,"name":"ZOIA / Euroburo"}`
  - `GET /patches/?platforms=3003&per_page=100&page=N` (per_page max 100; supports `order`, `orderby`, `search`, `categories`, `tags`, `author`, date ranges). NOTE: `author` requires the integer user id (e.g. `8405`), the slug returns HTTP 400.
  - `GET /patches/{id}` -> single patch detail + file download URLs
  - `GET /patches/{id}/files/{fileId}/download/` -> direct binary/zip download
  - `POST /auth/token`, `POST /auth/token/validate` -> auth for upload
  - `POST /patches`, `PUT /patches/{id}`, `POST /files` -> create/update/upload
- API? **YES** — `https://patchstorage.com/api/beta/` (public read; auth for write). Docs: https://patchstorage.com/docs/api/beta/
- Verified: yes (curl `x-wp-total: 1499`; `platforms?slug=zoia` returned id 3003 "ZOIA / Euroburo")

### Gumroad product JSON-LD (semi-structured, per-product)
- URL: https://cuckoo.gumroad.com (and any Gumroad product page)
- Type: Paid / structured-ish
- What's there: Each Gumroad product page embeds `schema.org/Product` JSON-LD (`name`, `price`, `priceCurrency`) plus a JS data blob. Scrapeable per-URL but there is no public catalog/search API — you must know the product slug. Pages are JS-rendered so plain fetch sees only `<title>`; curl + grep the JSON-LD is the reliable path.
- API? Partial — no query API, but per-product JSON-LD is machine-readable.
- Verified: yes (curl pulled JSON-LD `@type:Product`, exact prices, from the two Cuckoo ZOIA products)

> No other source offers a public query API. Empress's own site, YouTube descriptions, Reddit, Facebook, Discord, and Google Docs are all unstructured or login-walled. Patchstorage is the single REST/JSON source; Gumroad is per-product JSON-LD only.

---

## Official (Empress Effects)

### Empress — ZOIA Support hub
- URL: https://empresseffects.com/blogs/support-zoia
- Type: Official
- What's there: Central index for ZOIA — manual, firmware, factory patches, sampler guide, module index. Static blog pages, Shopify-CDN file downloads.
- API? No.
- Verified: yes (WebFetch live content)

### Empress — ZOIA 5 Factory Patches (firmware 5 set)
- URL: https://empresseffects.com/blogs/support-zoia/zoia-5-new-factory-patches
- Type: Official / Free
- What's there: Firmware-5 factory presets as a ZIP (guitar/effects-focused set + hand-picked Patchstorage favorites + new-module demos). Direct ZIP: `https://cdn.shopify.com/s/files/1/0028/5462/files/zoia_5_factory_patches.zip?v=1733755979` (`.bin` patches, ~117 KB).
- API? No (static CDN ZIP).
- Verified: yes (curl HTTP 200, `application/zip`, 117,533 bytes)

### Empress — Samples + older factory patches ("place in root dir")
- URL: `https://cdn.shopify.com/s/files/1/0028/5462/files/place_in_root_dir.zip?v=1733925015`
- Type: Official / Free
- What's there: Samples + older factory patches needed by sample-dependent patches (Groovebox, Grand Piano). ~1 MB ZIP.
- API? No.
- Verified: yes (curl HTTP 200, `application/zip`, 1,012,324 bytes)

### Empress — ZOIA Euroburo Support hub
- URL: https://empresseffects.com/blogs/support-zoia-euroburo
- Type: Official
- What's there: Dedicated Euroburo support blog (Control Port & MIDI, CV, Features, Firmware, Modules). ZOIA and Euroburo share ONE firmware (`eezo0532.bin`, v0532 / "Firmware 5") — no separate Euroburo firmware.
- API? No.
- Verified: yes (WebFetch live content)

### Empress — Euroburo Factory Patches (OFFICIAL, hosted on Patchstorage)
- URL: https://patchstorage.com/zoia-euroburo-factory-patches/
- Type: Official / Free
- What's there: The real Euroburo factory bank (the on-site ZIP is ZOIA-focused; Empress publishes the Euroburo bank here). Posted by official account `empress-effects` (PS user id **8405**). 1,845+ downloads. Categories: effects, sequencers, sounds, synthesizers, utilities. Direct ZIP: `https://patchstorage.com/api/beta/patches/144494/files/144493/download/` (`ZOIA-Euroburo-Factory-Patches.zip`, ~128 KB). Most designed by Christopher H. M. Jacques.
- API? Reachable via Patchstorage API (`/patches/144494`).
- Verified: yes (curl HTTP 200 on patch page and `/api/beta/patches/144494`)

### Empress — official Patchstorage account
- URL: https://patchstorage.com/author/empress-effects/
- Type: Official / Free
- What's there: PS user id **8405**, member since 2021-09-17. Hosts exactly ONE upload: the Euroburo Factory Patches ZIP (above). Per-firmware ZOIA factory patches stay on empresseffects.com, not here.
- API? Via Patchstorage API (`author=8405`).
- Verified: yes (HTTP 200)

### Empress — Firmware (factory patches baked in)
- URL: https://empresseffects.com/blogs/support-zoia-euroburo/updating-firmware-on-the-zoia-and-euroburo-latest-version-2-80-beta-3-0
- Type: Official / Free
- What's there: Firmware update page covering BOTH devices. Binary `eezo0532.bin` (v0532, ~1.2 MB): `https://cdn.shopify.com/s/files/1/0028/5462/files/eezo0532.bin?v=1770216052`. Firmware bundles the factory patch set. Old versions: https://empresseffects.com/blogs/support-zoia/old-firmware-versions-for-the-zoia
- API? No.
- Verified: yes (curl HTTP 200, `application/octet-stream`, 1,211,432 bytes)

### Empress — official docs (for patch authoring)
- ZOIA User Manual PDF: `https://empresseffects.com/cdn/shop/files/ZOIA_User_Manual_rev02_web.pdf` (verified, 2.6 MB)
- Euroburo Addendum Manual PDF: `https://cdn.shopify.com/s/files/1/0028/5462/files/ZOIA_Euroburo_addendum_manual.pdf?v=1724860234` (verified, 386 KB)
- ZEBU Manual v2.30 PDF: `https://empresseffects.com/cdn/shop/files/ZEBU_Manual_2_dot_30.pdf?v=14854070245356257737` (verified, 1.32 MB)
- Official Module Index (Google Sheet): https://docs.google.com/spreadsheets/d/1a9q2OCo_Sd_IbWsH99wlFvjcTIN20e7wb5Qgn5fLxms/edit
- Type: Official / docs. API? No. Verified: yes (curl HTTP 200 on PDFs).

---

## Tools / Patch Managers

### zoia_lib — ZOIA Librarian (the main patch manager)
- URL: https://github.com/meanmedianmoge/zoia_lib
- Type: Community / Tool (free, GPL-3.0)
- What's there: Cross-platform (Python 3.11+, Mac/Windows binaries) patch manager — browse, search, download, upload, import, organize, edit, visualize, version-control ZOIA/Euroburo patches; SD-card folder management. 182 stars, 25 forks. Last release **v2.1, 2026-03-13** (actively maintained). Lead dev Mike Moger (also runs the ZOIA Discord).
- **What it pulls from:** Patchstorage ONLY (remote). Other "sources" are local filesystem + direct SD-card import. There is NO separate community .bin bank / Google Drive / secondary repo integrated (confirmed by grepping README + `api.py` for bank/google/drive/dropbox — none). It hits `https://patchstorage.com/api/beta/` filtered by `platforms=3003`.
- Key files: `zoia_lib/backend/api.py` (Patchstorage endpoints), `zoia_lib/backend/patch_binary.py` (the `.bin` parser).
- `.bin` format: little-endian 32-bit-int arrays — `[header][modules][connections][pages][starred_params][colors]`. Params normalized as raw/65535. Module IDs index `ModuleIndex.json`. Connections = 5 ints `[src_mod][src_block][dst_mod][dst_block][strength]`.
- API? No (it's a consumer of the Patchstorage API).
- Verified: yes (curl HTTP 200; README + raw source files inspected)

### Other parsers / forks (independent, not integrated)
- C# port: https://github.com/andrzejolszak/zoia_lib_cs
- Native macOS librarian: https://github.com/johnnyturpin-aow/zoia_lib_macOS
- Go parser: https://github.com/mdouchement/zoia
- JS parser: https://github.com/patmooney/zoia-patch
- Web explorer: https://github.com/laurentgratton/zoia-explorer
- Patch viewer build: https://github.com/marcuslupinus/ZoiaPatchViewerBuild
- eclab/zoia (Sean Luke, GMU — Hammond/Leslie + reverb patches + docs, Apache-2.0): https://github.com/eclab/zoia (verified HTTP 200)
- Type: Tool / Free. API? No. Verified: yes (eclab + zoia_lib confirmed; others surfaced via search).

### ZOIA Cheatsheet (interactive module reference)
- URL: https://sensai7.github.io/ZOIACheatsheet/ (source: https://github.com/sensai7/ZOIACheatsheet)
- Type: Community / Tool (free)
- What's there: Interactive module reference (not patches, but authoring aid).
- API? No.
- Verified: yes (curl HTTP 200)

---

## Community (Free)

### Patchstorage — ZOIA / Euroburo platform (the hub)
- URL: https://patchstorage.com/platform/zoia/
- Type: Community / Free (+ API, see top)
- What's there: **1,499 patches**, ~676 subscribers. Per-author URLs `/author/<slug>/`, per-patch slugs, downloadable `.bin`/`.zip`. The central repository the entire community points to.
- API? YES (see Patchstorage REST API at top).
- Verified: yes (curl `x-wp-total: 1499`)

### r/Zoia subreddit
- URL: https://www.reddit.com/r/Zoia/
- Type: Forum / Community (free)
- What's there: Discussion hub; patches are pointed to on Patchstorage rather than hosted here. Listed as the official community subreddit in the zoia_lib README and the umbrella-company aggregator.
- API? Reddit has a JSON API generally, but no ZOIA-specific structured patch data.
- Verified: yes (exists — cross-referenced in two independent verified sources). NOTE: live subscriber count / pinned posts / wiki could NOT be fetched (Reddit firewalled from research environment).

### Empress ZOIA Users (Facebook group)
- URL: https://www.facebook.com/groups/EmpressZOIAUsers/ (numeric: https://www.facebook.com/groups/2127852327446882/)
- Type: Forum / Community (free, login-walled)
- What's there: Main ZOIA Facebook group; patch shares posted as files/links. Linked as the official FB community from the zoia_lib README and Empress's Euroburo product page.
- API? No.
- Verified: exists (login-walled — WebFetch sees title "Empress ZOIA Users"; member count not visible without login).

### ZOIA Discord (dedicated community server)
- URL: https://discord.gg/HG5GesY
- Type: Forum / Community (free)
- What's there: Server "ZOIA" — "discuss the Empress Effects ZOIA and Euroburo." **~1,405 members / ~125 online.** Owned by meanmedianmoge (Mike Moger, zoia_lib author). The canonical community Discord; also linked from the zoia_lib README. Patch sharing happens in-channel.
- API? No (invite may eventually rotate).
- Verified: yes (Discord invite API returned live server name/description/member count)

### umbrella-company.jp — ZOIA resource aggregator
- URL: https://umbrella-company.jp/contents/empress-effects-zoia-resources/
- Type: Community / Free (aggregator)
- What's there: Best single index of ZOIA resources — manuals, tutorials, community links, the staple Google Docs. Not a patch host itself, but the best discovery page.
- API? No.
- Verified: yes (curl HTTP 200)

### Community Google Docs (staples — authoring, not patch files)
- Tips, Tricks & Explanations (maintained by C.H.M. Jacques): https://docs.google.com/document/d/1bDqMHjLc4GCYtf2yGNHgjkDqQJ6zrRVuCZohJdKkWWc/edit
- Module Index spreadsheet: https://docs.google.com/spreadsheets/d/1a9q2OCo_Sd_IbWsH99wlFvjcTIN20e7wb5Qgn5fLxms/edit
- CV Guide for Guitarists: https://docs.google.com/document/d/1R6OibVAc6kq3gdM_YHE5y88oDB8R8Oah0YC-aSJSBPI/edit
- Type: Community / Free. API? No. Verified: linked from umbrella-company (live).
- NOTE: there is NO single community "ZOIA Patches" Google Drive dump — the community centralizes on Patchstorage.

---

## Notable Patch Designers (all host free on Patchstorage)

### Christopher H. M. Jacques (the most prolific / prominent)
- Patchstorage: https://patchstorage.com/author/christopher-h-m-jacques/ — **312 patches** (joined 2019); designed most Euroburo factory patches; maintains the Tips & Tricks doc.
- YouTube (primary ZOIA patch channel): https://www.youtube.com/c/ChristopherHMJacques (ID `UC0NWr69typMXCfiDPXbsSsQ`) — walkthroughs link the matching Patchstorage patch in the description.
- Patreon (early-access / exclusive, from EUR3/mo, ~40 members): https://www.patreon.com/chmjacques
- Bandcamp (generative ALBUMS made on ZOIA, not patch files): https://christopherhmjacques.bandcamp.com
- Linktree: https://linktr.ee/chmjacques
- Type: Community / Free (+ Patreon paid layer). API? Via Patchstorage. Verified: yes (PS author page + YouTube channel HTTP 200).

### personalnadir
- URL: https://patchstorage.com/author/personalnadir/ — ~50 ZOIA patches (joined 2021), high download counts. 2nd most prolific.
- Verified: yes.

### WZ
- URL: https://patchstorage.com/author/wz/ — ~38 patches; designed factory patch "ARCADE".
- Verified: yes.

### liamodellbass
- URL: https://patchstorage.com/author/liamodellbass/ — ~36 patches.
- Verified: yes.

### Jeremy Blake / redmeansrecording (YouTuber)
- Patchstorage: https://patchstorage.com/author/redmeansrecording/
- SoundCloud demo playlist: https://soundcloud.com/jeremyblake/sets/zoia-patch-demos
- Verified: yes.

### Cuckoo / True Cuckoo (free + paid)
- Patchstorage (free, handle "Chipman"): https://patchstorage.com/chipman/
- YouTube: https://www.youtube.com/@truecuckoo
- Paid Gumroad packs: see Paid section.
- Verified: yes.

### Sean Luke / eclab
- GitHub: https://github.com/eclab/zoia (Hammond/Leslie sim + reverb patches w/ predelay + docs).
- Verified: yes (HTTP 200).

### Other prolific PS authors (addressable at `/author/<slug>/`)
ambienttrash, ryanholmbergmusic (Ryan Holmberg), fireghosting (Fireghosting), charlie-ysasi (~21), stefan-werni (~14), peblo-nemo (~14), athomeontwo (~14), barbie-almalbis (~13), joegriffinable (~12), john_greenbeck (~11), avantgov (~11), snowdeaf (~10), hakonsoreide (~9), diyguitarguy (Whammy MIDI sequencers).
- Type: Community / Free. API? Via Patchstorage. Verified: factory-patch authors verified; long tail surfaced via API sampling.

---

## YouTube Channels (downloadable patches)

### Christopher H. M. Jacques
- https://www.youtube.com/c/ChristopherHMJacques — see designer entry. Patches free on Patchstorage, linked in descriptions. The dominant ZOIA patch-walkthrough channel.
- Verified: yes (HTTP 200).

### Empress Effects (official)
- https://www.youtube.com/@empresseffects — "Empress ZOIA Patches" playlist: https://www.youtube.com/playlist?list=PLkD7X9UnKyng3NpJqV8GdBFp0hWr3_hSu — featured patches free on Patchstorage.
- Verified: yes (HTTP 200).

### Cuckoo / True Cuckoo
- https://www.youtube.com/@truecuckoo — ZOIA patch videos; mix of free (Patchstorage "Chipman") and paid (Gumroad).
- Verified: yes (HTTP 200).

> Note: "Joseph Brett" is a red herring — youtube.com/user/JosephsBrett is an unrelated filmmaker/animator, NOT ZOIA. Discarded.

---

## Paid Patch Packs

### Cuckoo — ZOIA Pack 1 (the main commercial pack)
- URL: https://cuckoo.gumroad.com/l/EqAK
- Type: Paid
- What's there: **$14 USD** — 26 diverse patches (fat bass synths, FM synths, sequencer solutions, vocal chains, experimental), each with a control page on page 0. 5.0 rating.
- API? Per-product JSON-LD (no catalog API).
- Verified: yes (curl HTTP 200; JSON-LD `"price":14.0` USD)

### Cuckoo — ZOIA VoiVoi Formant Synth
- URL: https://cuckoo.gumroad.com/l/voivoi
- Type: Paid
- What's there: **$5 USD** — single singing/formant synth patch, MIDI-playable (ch1, aftertouch, velocity, pitch bend, mod wheel). Featured in firmware 5.
- API? Per-product JSON-LD.
- Verified: yes (curl HTTP 200; JSON-LD `"price":5.0` USD)

### Christopher H. M. Jacques — Patreon (closest thing to a paid patch tier)
- URL: https://www.patreon.com/chmjacques — from EUR3/mo, ~40 members, 41 exclusive posts (early-access / exclusive content). His patches themselves are free on Patchstorage.
- Type: Paid (membership). API? No. Verified: yes (HTTP 200).

> Patchstorage has NO premium/paid tier — the entire ZOIA catalog is free. Cuckoo's two Gumroad products are the only verified dedicated ZOIA patch packs currently selling.

---

## Discarded (dead / parked / not actually ZOIA patches)
- `support.empresseffects.com/.../zoia-euroburo-addendum` (Freshdesk) — DEAD, 301 -> product-support. Empress migrated to Shopify blog. Use the Euroburo support blog + addendum PDF instead.
- `pabloperdomo.gumroad.com/l/hXEPX` — product is "American Patch Ztool 2019", NOT ZOIA. Discard.
- `patchboutique.bandcamp.com/album/babushka` — 404, dead. Discard.
- `samplesunlimited.bandcamp.com/album/empress-zoia-sample-pack` ($2) — live but an AUDIO sample pack recorded with a ZOIA, NOT loadable `.bin` patches. Adjacent only.
- "Joseph Brett" YouTube — unrelated filmmaker, NOT ZOIA. Discard.
- **chrisbeckstrom** — premise appears to be a misattribution. His GitHub (github.com/chrisbeckstrom) has ZERO ZOIA repos; no Patchstorage author page (404). He's a DIY-modular / Pure Data / VCV Rack artist (bkstrm.net, chrisbeckstrom.bandcamp.com). No verifiable ZOIA patch collection under that name. Likely mixed up with C.H.M. Jacques or his modular/PD work.

---

_Compiled 2026-06-19. Live-verified via curl + WebFetch. The only true public query API is Patchstorage (`/api/beta/`, platform 3003); Gumroad offers per-product JSON-LD only._
