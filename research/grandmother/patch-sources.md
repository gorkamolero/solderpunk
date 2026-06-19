# Moog Grandmother — Patch Resources

Research compiled 2026-06-19. The Grandmother has **no preset memory**; "patches" are physical
cable routings + knob positions. Everything below is patch documentation (PDF patchbooks, blank
patch sheets, patch-recall apps, community libraries, forum threads, YouTube breakdowns) — **not**
downloadable preset files (except where noted, e.g. the patch-mapper `.syx` files only carry the
~43 MIDI-CC parameters, never the cable routings).

**Verification note:** The official `api.moogmusic.com/sites/default/files/...` PDF links are now
**dead (404)** — both the Lisa Bella Donna and Mike Dean patchbooks. Use the working mirrors listed
below instead. The official downloads portal (`moogmusic.com/downloads`) is live but serves files
through a JS gate, not via the old direct CDN paths.

---

### Official Moog — Grandmother product page
- URL: https://www.moogmusic.com/synthesizers/grandmother/
- Type: Official
- What's there: Product/landing page; links into the downloads portal for manual, patchbooks, firmware.
- API? no
- Verified: yes (curl HTTP 200)

### Official Moog — Downloads portal (Patch filter)
- URL: https://www.moogmusic.com/downloads/?type=Patch
- Type: Official
- What's there: Canonical entry point for official patchbooks/patches. Live, but file links are
  rendered client-side (the page HTML returned only nav/footer to the fetcher), so use the mirrors
  below for direct PDFs.
- API? no
- Verified: yes (curl HTTP 200; WebFetch confirmed it's the official downloads page, file URLs JS-gated)

### Official Moog — Grandmother User Manual v2 (working CDN)
- URL: https://cdn.inmusicbrands.com/Moog/Grandmother/Grandmother_Manual_Version_2.pdf
- Type: Manual
- What's there: Full official manual (7.25 MB PDF). Decodes the 41-point patchbay and includes the
  blank patch-sheet template; the manual itself points users to moogmusic.com for more blank sheets.
- API? no
- Verified: yes (curl HTTP 200, content-type application/pdf, 7,250,172 bytes)

### Official Moog — Grandmother Exploration Patchbook (Lisa Bella Donna, 12 patches) — WORKING MIRROR
- URL: https://cmi.com.au/Files/Files/Docs/MOOG/MOOG-MODGRAND-Grandmother_Patchbook_LBD_1_0.pdf
- Type: Official (mirrored by CMI, an Australian Moog dealer)
- What's there: The official 12-patch exploration patchbook by Lisa Bella Donna. Each patch = full
  panel diagram + cable routing + notes.
- API? no
- Verified: yes (curl HTTP 200, application/pdf, 4,862,833 bytes). NOTE: the original
  `api.moogmusic.com/.../Grandmother_Patchbook_LBD_1_0.pdf` now returns **404** — this CMI mirror is
  the live copy.

### Official Moog — Grandmother Exploration Patchbook (Mike Dean, 6 patches) — WORKING MIRROR
- URL: https://www.presetpatch.com/f/moog-grandmother/grandmother_patchbook_mikedean_0_pdf
- Type: Official (mirrored/hosted on PresetPatch)
- What's there: The official 6-patch patchbook designed by producer Mike Dean (Kanye/Travis Scott).
  File-detail page with download.
- API? no
- Verified: yes (curl HTTP 200 on PresetPatch file page). NOTE: original
  `api.moogmusic.com/.../Grandmother_Patchbook_MikeDean_0.pdf` returns **404**; CMI does NOT mirror
  this one (404). PresetPatch is the working source.

### Grandmother Dark Patchbook (Scribd)
- URL: https://www.scribd.com/document/523716104/Grandmother-Dark-Patchbook
- Type: Official content / Community-hosted
- What's there: The Grandmother Dark variant's patchbook (same electronics as standard GM). One of the
  named source patchbooks aggregated by the community libraries below.
- API? no
- Verified: yes (curl HTTP 200)

### grandmother-patches.vercel.app — interactive patch library + editor  ⭐ HAS PUBLIC API
- URL: https://grandmother-patches.vercel.app/
- Type: Community (interactive web app)
- What's there: "Largest public Grandmother patch library." Browse patches by sound type, favorites,
  and a full interactive patch editor (virtual knobs + cables). Aggregates the Grandmother Dark
  Patchbook, Lisa Bella Donna Patchbook, SynthLib community patches, and PresetPatch. Built by
  forum user `morgansawer` (announced in the Moog forum patch-library thread). Vite SPA — the
  built-in/seed patch data is bundled in the JS; user accounts/submissions live in Supabase.
- API? **YES** — Supabase backend, publicly queryable with the embedded anon (publishable) key:
  - Project URL: `https://yyggehjdufwcpxmubstg.supabase.co`
  - Anon/publishable key: `sb_publishable_ikDWtbEZMIl9IiZ8hFSXqw_2fQsL3Ek`
  - REST: `GET {url}/rest/v1/{table}?select=*` with headers `apikey: <key>` + `Authorization: Bearer <key>`
  - Tables (PostgREST): `user_patches`, `patch_submissions`, `profiles`, `ratings`, `favorites`
  - Current state: `profiles` returns real rows; `user_patches`/`patch_submissions`/`ratings`/`favorites`
    return `[]` (RLS-gated or no public user submissions yet). The curated seed patches are NOT in the DB —
    they're bundled in the front-end JS (`/assets/index-*.js`). So the API is live and structured but
    the *patch* content is currently mostly client-side, not served via the API.
- Verified: yes (curl HTTP 200 on site; extracted Supabase URL+key from JS bundle; confirmed live REST —
  `profiles` query returned HTTP 200 with rows, other tables HTTP 200 empty, `count=exact` shows `*/0`
  on user_patches; `patches` table 404 with hint "Perhaps you meant public.user_patches")

### Moog Forum — "Moog Grandmother Patch Library" thread
- URL: https://forum.moogmusic.com/t/moog-grandmother-patch-library/35796
- Type: Forum
- What's there: Announcement + discussion thread for the grandmother-patches.vercel.app app above;
  lists the source patchbooks and invites community patch submissions.
- API? no (Discourse forums do expose a JSON API via `.json` URL suffix, but not relevant patch data here)
- Verified: yes (WebFetch returned full thread content; summarized the shared URLs)

### SynthLib — Moog Grandmother patch library
- URL: https://synthlib.com/brands/moog/instruments/moog-grandmother
- Type: Community
- What's there: User-contributed Grandmother patch repository (categorized: lead/bass/etc.). One of the
  named sources aggregated by the Vercel app. Users can upload their own patches.
- API? no (no documented public API found; standard web repository)
- Verified: yes (curl HTTP 200; note: WebFetch returns 403 to bots, but the page loads fine for browsers/curl)

### PresetPatch — Moog Grandmother
- URL: https://www.presetpatch.com/synth/moog-grandmother
- Type: Community
- What's there: ~9 user-shared Grandmother patches (mix of .jpg patch-sheet images, a PDF [the Mike Dean
  patchbook], and one .syx). Free patch sheets + sound-design articles. Download counts/likes.
- API? no (manual upload/download; no machine-readable feed found)
- Verified: yes (WebFetch enumerated the 9 items and confirmed no API)

### Patchstorage — patch-aggregation platform  ⭐ HAS PUBLIC API (minimal GM content)
- URL: https://patchstorage.com/moog-grandmother/
- Type: Community platform
- What's there: For the Grandmother specifically, only **1** patch (a VCV Rack `.vcv` emulation of the
  GM, tagged moog — not a real hardware patch sheet). Patchstorage is a large categorized platform with
  tags/platforms/states, so it could host more GM patch documentation in future.
- API? **YES** — public WordPress/PostgREST-style REST API documented in site footer:
  - Endpoint base: `https://patchstorage.com/api/beta/` (e.g. `/api/beta/patches`, `/api/beta/platforms`)
  - Confirmed live: `/api/beta/platforms?per_page=100` returns JSON (e.g. moog-model-15 id=4242,
    moog-model-d id=7039). There is **no dedicated `moog-grandmother` platform id** — the single GM
    patch is filed under VCV Rack — so the API works but currently surfaces ~no Grandmother-specific data.
  - Docs: linked from footer at patchstorage.com/docs/ (302 redirect to docs)
- Verified: yes (curl: `/api/beta/patches` returned a structured JSON validation error confirming the
  endpoint is live; `/api/beta/platforms` returned real platform JSON; WebFetch confirmed the single VCV patch + API in footer)

### jewelbox81 — Grandmother Patch Recall (web app)
- URL: https://jewelbox81.github.io/grandmother-patch-app/
- Type: Community (tool)
- What's there: Blank interactive patch-recall tool by "Criskcracker." Click patch points to draw
  cables, set knobs/switches, name + add notes, then export as a `.json` (reloadable) or `.png`
  snapshot. Starts empty (no bundled library) — a documentation/recall utility, not a patch collection.
- API? no
- Verified: yes (curl HTTP 200; WebFetch described features)

### Sunny Synths — Moog Grandmother Patch Mapper (desktop app, paid)
- URL: https://www.sunnysynths.com/moog-grandmother
- Type: Community (tool)
- What's there: v3.0 standalone/VST/AU "patch saver/loader" for PC/Mac (15 EUR). Saves/loads `.syx`
  files with name/author/date/category metadata, visualizes cables on a panel replica, exports
  program parameters as text. Caveat: only stores the ~43 MIDI-CC parameters (knob values), NOT the
  physical cable routings, since GM has no sysex for the patchbay.
- API? no
- Verified: yes (WebFetch described full feature set + limitations)

### Max for Live — "PatchSheet for Moog Grandmother" v1.0 (free)
- URL: https://maxforlive.com/library/device/5669/patchsheet-for-moog-grandmother
- Type: Community (tool)
- What's there: Free M4L device (CC-BY-SA, `Moog Grandmother PatchSheet 1.0.zip`). Digital panel
  replica that stores your patch state inside the Ableton Live track so you can recall it later.
  Does not affect audio — pure documentation.
- API? no
- Verified: yes (curl HTTP 200; WebFetch described it)

### MATRIXSYNTH — Moog Grandmother Patch Tutorials (roundup)
- URL: https://www.matrixsynth.com/2021/03/moog-grandmother-patch-tutorials.html
- Type: Blog / YouTube roundup
- What's there: Embeds the 4 official Moog patch tutorial videos: 2-Op Analog FM Synthesis,
  Randomized Filter Envelope Modulation (S&H), Envelope-Controlled Oscillator Sync, Building
  Sequences Live. Good source of official technique breakdowns.
- API? no
- Verified: yes (WebFetch listed all 4 videos)

### Loopop — "Unlocking Grandmother's Secrets" (review + tips)
- URL: https://loopopmusic.com/unlocking-grandmothers-secrets-review-ideas-and-tips-for-moogs-latest-semi-modular-synth
- Type: Blog (companion to a well-known Loopop YouTube deep-dive)
- What's there: In-depth ideas/tips article covering the three V/oct oscillators, envelopes, and
  patching techniques. Pairs with Loopop's video.
- API? no
- Verified: yes (surfaced and described via WebSearch result snippet; standard public Loopop article)

### Anton Anru — "Analog Classics" (50 patches, PDF, paid)
- URL (store): https://lfo.store/shop/hardware-synths/moog-grandmother/moog-grandmother-analog-classics-50-patches/
- URL (alt/author store): https://antonanru.sellfy.store/p/grandmother-analog-classics/
- Type: Community / sound designer (commercial, $24.95)
- What's there: 50-patch PDF patchbook (16 Leads, 13 Basses, 13 Arps, 5 Drones, 3 Chords). Each page =
  panel diagram + cable routing + notes on how the patch works and what to tweak, plus audio examples.
  Needs up to 8 patch cords + firmware v1.1.3. Genuine physical patch documentation (no preset files).
- API? no
- Verified: yes (lfo.store curl HTTP 200; WebFetch on both lfo.store and sellfy confirmed format/price/patch count)

### Anton Anru — "Explorer" (50 patches, PDF, paid)
- URL: https://lfo.store/shop/hardware-synths/moog-grandmother/moog-grandmother-explorer-50-patches-by-anton-anru/
- Type: Community / sound designer (commercial)
- What's there: 50 experimental-but-usable patches (12 Leads, 10 Basses, 9 Plucks, 10 Arps, 6 Drones,
  3 Chords) as a PDF patchbook with per-patch notes + audio examples; up to 8 cords, firmware v1.1.3+.
- API? no
- Verified: yes (curl HTTP 200; WebFetch described patch breakdown/format)

### DavidSparks.me — Grandmother Blank Patch Sheets (notebook + PDF, paid)
- URL: https://www.davidsparks.me/moog-grandmother
- Type: Community (blank templates, commercial)
- What's there: Blank patch-sheet template — 75-page spiral notebook (Amazon) or printable PDF ($2.99,
  B&W diagram, resized to 11x7). 70 synth-diagram pages + quick-reference + notes pages. For logging
  your own knob positions / cable routings / sequencer steps.
- API? no
- Verified: yes (WebFetch described both products + pricing)

### Reverb — "Beautifully Illustrated Blank Patch Sheet PDF"
- URL: https://reverb.com/item/65988877-moog-grandmother-beautifully-illustrated-blank-patch-sheet-pdf
- Type: Community (blank template, commercial)
- What's there: A graphic designer's redrawn GM front-panel blank patch-sheet PDF for logging patches.
- API? no
- Verified: partial — listing exists per WebSearch; Reverb returns HTTP 403 to bots (Cloudflare), so
  not machine-fetchable, but loads in a normal browser.

### The Oyster House Boys — "Free Moog Grandmother patch booklet"
- URL: http://www.theoysterhouseboys.com/uncategorized/free-moog-grandmother-patch-booklet/
- Type: Blog (free patch notes)
- What's there: Free PDF patch notes for the author's favorite Grandmother sounds.
- API? no
- Verified: partial — surfaced in WebSearch; direct fetch returned ECONNREFUSED at time of research
  (site may be intermittently down). Listed for completeness; re-check before relying on it.

### ModWiggler — "I built a web app to save patches for the Moog Grandmother"
- URL: https://www.modwiggler.com/forum/viewtopic.php?t=297340
- Type: Forum
- What's there: Thread about a GM patch-saving web app (save snapshot images or `.json` files for
  later editing) — corresponds to the jewelbox81 / morgansawer apps. Community discussion.
- API? no (phpBB; no relevant API)
- Verified: partial — HTTP 403 to bots (Cloudflare); live in a normal browser. URL confirmed via WebSearch.

### ModWiggler — "Buchla 208c + Moog Grandmother Patch Sheet"
- URL: https://www.modwiggler.com/forum/viewtopic.php?t=245790
- Type: Forum
- What's there: Thread sharing a custom blank patch sheet combining Buchla 208c + Moog Grandmother.
- API? no
- Verified: partial — HTTP 403 to bots (Cloudflare); live in a normal browser. URL confirmed via WebSearch.

### YouTube — patch breakdowns / tutorials (collection)
- Type: YouTube
- What's there:
  - Moog patch tips/tutorials playlist: https://www.youtube.com/playlist?list=PLJVdBZmh_jYgYTdUosa9xeZ0o1Vtq_nQX
  - "An Intro to Moog Grandmother Patching": https://www.youtube.com/watch?v=lbbeH3U-9mc
  - "50 Patches: Bass, Lead, Arp, Chords Demo": https://www.youtube.com/watch?v=TwXEnbRrDYs
  - "Generative Seqs & Complex Arps": https://www.youtube.com/watch?v=e9IbuqQ-7Rk
  - "12 Moog Grandmother Patches": https://www.youtube.com/watch?v=0Fjvqr8dHaA
  - "Mike Dean Exploration Patchbook": https://www.youtube.com/watch?v=repVJfG__tk
  - "TLDR: Mike Dean Grandmother Patchbook": https://www.youtube.com/watch?v=OUOiKGiSbkE
  - Lisa Bella Donna patchbook walkthroughs (Patch book 1 — envelope to mod rate):
    https://www.youtube.com/watch?v=z9y_iw_p7Kw and (Patch book 2 — advanced PWM routing):
    https://www.youtube.com/watch?v=ZtgceU2DG0g
- API? no (YouTube Data API exists but not patch-specific)
- Verified: partial — all surfaced via WebSearch from authoritative roundups (matrixsynth, official Moog,
  Loopop). Individual video IDs not each curl-checked, but the titles/IDs come from current search results.

---

## API / structured-data sources (rare for this instrument)
1. **grandmother-patches.vercel.app** — public Supabase REST API (anon key embedded in client). Tables
   exist and respond, but patch content is currently bundled in the front-end JS, so the API yields
   mostly user/account data right now. The standout structured source for this instrument.
2. **patchstorage.com** — documented public REST API (`/api/beta/`), confirmed live, but holds only ~1
   Grandmother-tagged patch (a VCV emulation) and no dedicated GM platform id.

All other sources are PDFs, images, blog posts, forum threads, YouTube, or manual-download tools with no API.
