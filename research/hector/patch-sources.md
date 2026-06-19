# Poly Effects Hector / Beebo — Patch Sources

Hector (Eurorack) and Beebo (pedal) run the same "Beebo OS" firmware and **share patches**, so every source below applies to both. Patches are `.tar`/preset bundles loaded via USB/SD or downloaded in-device.

Research date: 2026-06-19. Each source verified live.

---

## API / Structured-data sources (queryable)

### Patchstorage — Beebo / Hector
- **URL:** https://patchstorage.com/platform/beebo-hector/
- **Type:** Free / Community (primary hub)
- **What's there:** ~143 community patches (effects, synths, loopers, granular, drum machines, templates) with artwork, tags, download counts, view counts, like counts, and author metadata. Patches downloadable directly.
- **API?** YES — open WordPress REST API at `https://patchstorage.com/api/beta/`. Beebo/Hector platform id = **3540**.
  - List patches: `GET /api/beta/patches/?platforms=3540&per_page=50&page=N`
  - Pagination via response headers `X-WP-Total` (=143) and `X-WP-TotalPages`.
  - Single patch + files: `GET /api/beta/patches/{id}`
  - Author profile: `https://patchstorage.com/author/{slug}/`
  - No auth required for reads.
- **Verified:** yes (curl against `/api/beta/patches/?platforms=3540` returned JSON; `x-wp-total: 143` header confirmed; sample patch id 181531 "Cassette Tape Machine" by go_outside returned with full metadata).

### Poly Effects NAM Amp Capture portal (ampcapture / namcap)
- **URL:** https://ampcapture.polyeffects.com/ (canonical `https://namcap.polyeffects.com/`)
- **Type:** Official — NAM (Neural Amp Modeler) amp captures for Beebo/Hector (not patches, but loadable device content / "nano" captures).
- **What's there:** Two flows only — "Capture an amp" wizard and "Upload existing NAM for Beebo or Hector." Per-capture pages exist at sequential URLs `https://ampcapture.polyeffects.com/amp_info/{id}` (id starts at 0). This is the companion to the `hector` skill's NAM workflow.
- **API?** PARTIAL / NO clean JSON API — pages are server-rendered HTML. There is a predictable, scrapeable URL pattern (`/amp_info/{id}`, sequential integer ids) but **no public list/browse/search/JSON endpoint** (`/browse`, `/amps`, `/captures`, `/search`, `/api/*` all 404). Root page is a capture/upload wizard, not a browsable library. Treat as semi-structured at best, not a query API.
- **Verified:** yes (curl: root returns 200 with only `/amp_info/0` and `/amp_info/1` links + "CAPTURE AN AMP" / "UPLOAD EXISTING NAM" text; `/amp_info/{3,10}` return 200 HTML; all guessed listing routes 404).

---

## Official sources

### Poly Effects — official site
- **URL:** https://www.polyeffects.com/ (Hector: `/polyeffects/p/hector`, Beebo: `/polyeffects/p/beebo`)
- **Type:** Official
- **What's there:** Product pages, shop. Firmware downloads at https://www.polyeffects.com/firmware, update-troubleshooting at `/fixing-update-issues`, FAQs at `/faqs`. Footer links to YouTube, Instagram (https://www.instagram.com/polyeffects/), Facebook (https://www.facebook.com/polyeffects), email info@polyeffects.com. No on-site patch library — they point users to Patchstorage.
- **API?** No.
- **Verified:** yes (WebFetch of homepage + FAQs; firmware page indexed live).

### Poly Effects — YouTube channel (@polypedals)
- **URL:** https://www.youtube.com/@polypedals  (channel id `UCwQ9E6imYd0qFPMEuEZjcdw`; videos: `/@polypedals/videos`, livestreams: `/@polypedals/streams`)
- **Type:** Official / YouTube
- **What's there:** Damon (founder) posts patch walkthroughs, livestreams that go through effects/modules, and tip videos (e.g. "Tip and Tricks for Beebo/Hector and Flat V", "First Patch with Poly Effects Hector"). Acts as the de-facto manual supplement. Some walkthrough patches are shared (typically via Patchstorage links in descriptions).
- **API?** No (YouTube Data API exists but not Poly-specific).
- **Verified:** yes (channel id present in polyeffects.com footer; channel + video titles surfaced via search; consent-redirect confirms `@polypedals` is the live channel).

---

## Community sources

### Facebook — Poly Effects (Beebo / Hector) Users Group
- **URL:** https://www.facebook.com/groups/polyeffects/
- **Type:** Community / Forum (Facebook group)
- **What's there:** Active users group for Beebo/Hector owners. Patch sharing, troubleshooting, sound-design discussion. Patch files are commonly posted as attachments/links in the group feed.
- **API?** No (login-walled; Graph API requires app + group admin token — not practically queryable).
- **Verified:** yes (WebFetch confirmed group exists and is titled "Poly Effects (Beebo / Hector) Users Group"; linked from official site).

### ModWiggler forum — "Poly Effects BeeBo/Digit in Euro format: Hector"
- **URL:** https://www.modwiggler.com/forum/viewtopic.php?t=243346
- **Type:** Forum / Community
- **What's there:** The main long-running discussion thread (11+ pages). Owners discuss patches, firmware, feature requests; patch links and tips are posted throughout. Closest thing to an official-adjacent forum.
- **API?** No (phpBB; behind Cloudflare, no public API).
- **Verified:** yes (search confirms thread live at 11+ paginated pages, `&start=0..325`; Cloudflare blocks automated fetch but pages index fine).

### Gearspace — Poly Effects Beebo thread
- **URL:** https://gearspace.com/board/electronic-music-instruments-and-electronic-music-production/1319824-poly-effects-beebo.html
- **Type:** Forum / Community
- **What's there:** Multi-page discussion thread (3+ pages). General discussion, occasional patch/preset talk and demos. Lower patch-sharing volume than ModWiggler/Facebook.
- **API?** No.
- **Verified:** yes (multiple pages indexed in search, incl. page 3; thread is live — direct WebFetch 403 via bot, normal for Gearspace).

### theFretBoard — "Poly Effects Beebo - Thoughts?"
- **URL:** https://www.thefretboard.co.uk/discussion/215119/poly-effects-beebo-thoughts
- **Type:** Forum / Community (guitar-focused)
- **What's there:** Discussion thread, mostly impressions/Q&A from guitarists; light on downloadable patches. Useful for use-case context.
- **API?** No.
- **Verified:** yes (indexed live via search).

---

## Notable patch designers (all publish via Patchstorage; ranked by patch count)

These are the high-output Beebo/Hector authors — query each via `https://patchstorage.com/author/{slug}/` or filter the API by author. No designer was found to maintain a separate paid store, Patreon, or personal patch site.

### suregork — top designer (17 patches)
- **URL:** https://patchstorage.com/author/suregork/
- **Type:** Free / Community
- **What's there:** 17 patches, all Beebo/Hector. Granular/looper/delay/ambient focus. Popular: "Muesli" (granular microlooper), "Entropy", "Kaikuma", "Fableish" (5-patch pack inspired by Walrus Audio Fable). Member since 2022.
- **API?** Via Patchstorage API (filter by author).
- **Verified:** yes (WebFetch of author page: 17 patches confirmed; counts via API author tally).

### GFK_NYC (15 patches)
- **URL:** https://patchstorage.com/author/gfk_nyc/
- **Type:** Free / Community
- **What's there:** 15 Beebo/Hector patches. Second-most-prolific author.
- **API?** Via Patchstorage API.
- **Verified:** yes (count from API author aggregation across all 143 patches).

### langda (10 patches)
- **URL:** https://patchstorage.com/author/langda/
- **Type:** Free / Community
- **What's there:** 10 patches: "Equaliday", "time machine", "reve infinie", "arp drum phaser", "patamodelay", "madlooper", "granulasorus", "chorusonator", "space echo", etc.
- **Verified:** yes (API tally + names confirmed on platform page).

### Madeche (9), go_outside (8), indeterminacy (8), loylo (7), ArtsyEngineering (7), gamaliel (6)
- **URLs:** `https://patchstorage.com/author/{madeche|go_outside|indeterminacy|loylo|artsyengineering|gamaliel}/`
- **Type:** Free / Community
- **What's there:** Mid-volume contributors. go_outside = lofi/tape/granular (e.g. "Cassette Tape Machine", "Delay VCA Swells", "GrainVerb", "ThreeGrain").
- **Verified:** yes (API author counts).

### Godspeed64 (3 patches)
- **URL:** https://patchstorage.com/author/godspeed64/
- **Type:** Free / Community
- **What's there:** 3 patches incl. "Oceanic Transcendence" and "Lush Garden" (stereo paddy delays + verb). Named in the brief.
- **Verified:** yes (API tally + search confirm patches "Oceanic Transcendence" / "Lush Garden").

### Poly4Synth
- **URL:** https://patchstorage.com/poly4synth/  (note: this is a **patch**, not an author — "Poly4Synth")
- **Type:** Free / Community
- **What's there:** 4-note subtractive polysynth patch for Beebo, designed for use with a poly-MIDI source (e.g. Arturia KeyStep). Mentioned in brief as "the Poly4Synth" — it is a single notable patch on Patchstorage, not a separate site/designer.
- **API?** Via Patchstorage API (it's a patch record).
- **Verified:** yes (page indexed live; described as a 4-note subtractive synth patch).

### "poly" (official Poly Effects account, 1+ patch)
- **URL:** https://patchstorage.com/author/poly/
- **Type:** Official / Free
- **What's there:** Poly Effects' own Patchstorage account (factory/demo patches).
- **Verified:** yes (appears in API author list as `poly`).

---

## Paid patch packs
- **None found.** No paid Beebo/Hector patch packs were located on Gumroad, Bandcamp, Patreon, or designer sites. All discoverable patches are free on Patchstorage. suregork's "Fableish" and similar named packs are free Patchstorage uploads, not paid products.
- **Verified:** yes (targeted searches for "patch pack paid bandcamp gumroad" and Patreon returned no paid offerings; top designers have no external stores on their profiles).

---

## Notes / dead-ends
- **Discord:** No official Poly Effects Discord found. Community lives on Facebook + ModWiggler. (Not verified-present; treat as absent.)
- **GitHub:** No `polyeffects` org/user repos and GitHub repo search for "beebo poly effects" = 0 results. No public patch repo. (Verified via GitHub API.)
- **namcap.polyeffects.com:** canonical host tag for the ampcapture portal; does not resolve as a separate browsable site.
- **Loopop tutorial** (https://loopopmusic.com/hector-and-beebo-review-and-tutorial-...) and Loopop YouTube review are good *learning* references but host **no downloadable patches**. (Verified — no patch files.)
