# SOLDERPUNK — Integration Plan: 5 New Instruments

Integrate deep-research corpora for **ZOIA / Euroburo**, **Poly Hector / Beebo**, **Moog Minitaur**, **Moog Grandmother**, and **Behringer Brains** into solderpunk's three knowledge layers (corpus → skill → explorer), the same way Tempest and Tetra were built.

This doc is written to be handed to Codex (or any agent) phase by phase. Each phase has a clear deliverable, file paths, and a "done when" check.

---

## 0. What already exists (the template)

A synth in solderpunk is one `SynthConfig` (`packages/web/src/lib/<id>/config.ts`):

```ts
export const <id>Config: SynthConfig = {
  id, name, description,
  panelImage: '/<id>-panel.png',      // transparent PNG in packages/web/public/
  panelAspectRatio: 'W / H',          // matches the PNG's pixel dims
  panelAlt, defaultMessage,
  zones,        // hotspot rectangles on the panel (lib/<id>/zones.ts)
  legendItems,  // colour key for zone groups
  lessons,      // tutorials (lib/<id>/lessons.ts) — steps that `focus` a zone id
}
```

- The explorer page (`app/<id>/page.tsx`) wraps `<SynthProvider config={...}>`; the sidebar reads `config.lessons` directly, the panel renders `zones` as hover/clickable hotspots, tutorials walk `steps[].focus` → highlighted zone.
- Zones with `group: 'knob' | 'button'` whose id is `parent-thing` auto-highlight their parent group on hover (see `synth-context.tsx`).
- SQLite (`lib/db.ts`) is the persistence layer for the `/api/lessons` editor; the explorer itself works off `config.lessons`, so a new synth does **not** require touching `db.ts` to render. (Generalising the seed to all synths is a Phase-3 nicety, not a blocker.)
- Tempest is the only synth with a Claude **skill** today (`~/.claude/skills/tempest/`). Tetra has docs but no skill yet.

**Two integration archetypes for the 5 new instruments:**

| Archetype | Fits | Why |
|---|---|---|
| **Panel-hotspot** (existing model) | Minitaur, Grandmother, Brains | Fixed knob/jack panels → rectangles map to controls |
| **Module-browser** (new component) | ZOIA, Hector | No fixed control panel (8×5 button grid / touchscreen) — the "panel" is a searchable module/patch index |

---

## Corpus → instrument map

| id | Source files (in `~/Downloads`) | Firmware baseline / notes |
|---|---|---|
| `zoia` | `ZOIA_Euroburo_Mastering_Guide_CLAUDE.md`, `zoia_master_reference_CHATGPT.md` | ChatGPT = fw **5.32** (newer); Claude = 5.00. Module-browser archetype. |
| `hector` | `Poly-Effects-Hector-Beebo-Guide_CLAUDE.md`, `poly_hector_reference_CHATGPT.md` | fw 407-era. Module-browser archetype. Sparse docs — flag gaps. |
| `minitaur` | `Moog_Minitaur_Mastery_Reference_CLAUDE.md`, `moog_minitaur_master_reference_CHATGPT.md` | fw v2.2.2 (final). Full MIDI CC map → MIDI-control candidate. |
| `grandmother` | `Moog_Grandmother_Mastery_Reference_CLAUDE.md`, `moog_grandmother_reference_CHATGPT.md` | fw v1.1.x. Patchbay + MIDI CC. MIDI-control candidate. |
| `brains` | `behringer-brains-mastery-guide_CLAUDE.md`, `behringer_brains_reference_CHATGPT.md` | Plaits-derived; mine Plaits manual for shared engines. CV only (no MIDI). |

---

## Phase 1 — Land the corpus  (no assets · low risk · "centralize here")

For each `<id>`, create `research/<id>/`:

```
research/<id>/
  prompt.md     # the deep-research prompt (move the existing flat research/<id>.md here)
  claude.md     # the *_CLAUDE.md result
  chatgpt.md    # the *_CHATGPT.md result
```

- Update `research/README.md` index to point at the folders + the corpus→instrument table above (firmware baseline + which source is newer).
- Add `research/INTEGRATION_PLAN.md` (this file).
- Commit + push to `origin` (private `spanishflu-est1918/solderpunk`).

**Done when:** all 5 folders hold prompt + both sources; `git log` shows the commit on `origin/main`.

---

## Phase 2 — Skills  (no assets · "ask Claude anywhere")

For each `<id>`, synthesize one `SKILL.md` from the two sources and install it.

**Synthesis rules** (mirror `~/.claude/skills/tempest/SKILL.md`):
- YAML frontmatter: `name: <id>`, a rich `description` with explicit "Use when…" triggers (instrument names, aliases, sound-design, the control system).
- Body sections, deduped across the two sources, **citations kept inline**: Hidden features · Firmware/version gems · Control map (MIDI CC / CV / patchbay as applicable) · Architecture/engine atlas · Sound-design & patch recipes (exact settings) · Resources & forums.
- Flag contradictions between the two sources rather than smoothing them (e.g. ZOIA fw 5.00 vs 5.32; Brains 20 vs 24 vs 25 engines).
- For Brains, label each engine **Plaits-inherited** vs **Behringer-specific** and cite both Behringer + Plaits sources.
- Reference files: drop `claude.md` + `chatgpt.md` into the skill dir as `references/` so deep detail is on-demand.

**Install:** `~/.claude/skills/<id>/` on roadbook (this machine) and cyberyogin (`100.99.106.119`, prefix `export PATH=/opt/homebrew/bin:$PATH` over SSH). Also keep a canonical copy in-repo so it ships with solderpunk — recommended: `research/<id>/SKILL.md` (or a `skills/<id>/` tree if we want a clean export later).

**Done when:** the 5 skills appear in `/skills`, and "give me an acid bass on Minitaur" / "Krell patch on Grandmother" / "which Brains engine for FM bass" auto-load the right skill.

---

## Phase 3 — Web explorers

### 3A. Panel-hotspot explorers — Minitaur, Grandmother, Brains

Per instrument, produce `packages/web/src/lib/<id>/{config,zones,types,lessons}.ts`, `app/<id>/page.tsx`, a landing-page entry, and `public/<id>-panel.png`.

**Panel-image pipeline (the asset work — Codex-assisted):**
1. **Find a good source image** — a high-resolution, dead-on (no perspective) front-panel shot. Best sources: manufacturer press/product photos (Moog, Behringer), Perfect Circuit / Sweetwater hi-res product images, or the manual's panel diagram.
   - Minitaur: Moog product top-down panel shot.
   - Grandmother: use the **standard colored** panel, not Dark (black-on-black kills hotspot legibility); Moog product shot or manual diagram.
   - Brains: Behringer product image (16HP face) or manual front view.
2. **Generate / clean the panel render via Codex + an image model** (the "Nano Banana" step used for Tempest/Tetra): straighten, crop to the panel, remove background to transparent PNG (rembg), normalize lighting. Output `public/<id>-panel.png`; record pixel `W×H` for `panelAspectRatio`.
3. **Detect zones** — run the OpenCV detection pass (the tempest/tetra `scripts/` zone-detection pipeline) to get bounding boxes for knobs/jacks/switches; hand-label each box with an id + human label, emit `zones.ts`. Group ids as `<section>` (parent) and `<section>-<control>-knob` (child) so the parent-highlight behavior works.
4. **Author `lessons.ts`** straight from the research recipes:
   - Minitaur: §4 sound-design recipes (Rolling Techno Sub, Classic House Bass, Dread/Reverse, Acid 303, 808 self-osc kick, Reese) + the Note Sync / KB-tracking hidden gems.
   - Grandmother: §4 patch recipes (LFO-as-3rd-osc, Krell auto-drone, S/H step, envelope follower, HP-feedback scream, two-filter split, bell FM, self-osc sine) + the patchbay "break the normal" lessons.
   - Brains: per-engine atlas walkthroughs + recipes (synth bass on VA, wind chimes FM, church bells Grains, harmonic organ Wavetable, speech word-sequencer, BX7/Bassline/Vox).
5. Wire `config.ts`, add `app/<id>/page.tsx` (copy tetra's), add the card to `app/page.tsx`.

**Done when:** `/minitaur`, `/grandmother`, `/brains` render the panel with working hover zones and at least 4–6 tutorials each.

### 3B. Module-browser explorers — ZOIA, Hector

These need a **new component** (no panel-hotspot). Design:
- A searchable, categorized **module index** (Interface / Audio / Control / Analysis / Effects for ZOIA; the ~100 LV2 modules for Hector), each card showing params + a one-line "why it matters", sourced from the research's module tables + the official module-index spreadsheet (ZOIA) / Fukusan mirror (Hector).
- Tutorials = **patch deconstructions** (ZOIA: Space Race, Harmonic Pixies, groovebox, ZS-40; Hector: Cassette Tape Machine, ThreeGrain, Loopler auto-record, Marbles→Plaits generative) presented as step lists referencing module names instead of panel zones.
- Reuse the sidebar/tutorial engine; swap the panel pane for the module browser. Add `lib/<id>/modules.ts` (the index data) alongside `lessons.ts`.

**Done when:** `/zoia` and `/hector` render a searchable module index + patch-deconstruction tutorials.

---

## Phase 4 (stretch) — Live MIDI control

Tempest/Tetra have a SysEx engine. The analog here:
- **Minitaur & Grandmother**: full MIDI CC maps (documented in the research) → a Web MIDI "control the real synth" panel where moving an on-screen zone sends the matching CC. High value, real hardware payoff.
- **Brains**: CV only, USB for firmware/BX7 SysEx → no live control; explorer stays teaching-only.
- **ZOIA**: device-level CC remote (CC 60–63) + starred-param CC → limited control, optional.
- **Hector**: MIDI-mappable but black-box → skip.

Build only after 3A lands; gate on owning the hardware to test.

---

## Suggested layout decision

- Corpus: `research/<id>/` (keeps prompt + both sources + synthesized skill together).
- Web: `packages/web/src/lib/<id>/` (no new monorepo package — these have no SysEx engine, unlike tempest/tetra).
- Skills: canonical in-repo copy under `research/<id>/SKILL.md`; installed copy at `~/.claude/skills/<id>/`.

## Risks & caveats
- **Source-image licensing**: panel images are manufacturer product photos — fine for a personal/teaching build, but for public release credit the source and/or use the manual's own panel diagram (clearest provenance).
- **Firmware drift**: cite the firmware baseline in each skill/lesson (ZOIA 5.32, Minitaur 2.2.2, GM 1.1.x, Brains V5.0). Flag contradictions, don't hide them.
- **Grandmother Dark** panel is low-contrast → use the colored panel for the explorer.
- **ZOIA/Hector** do not fit the hotspot model — don't force a panel; build the module-browser.
- **Hector docs are sparse** — mark thin/unverified areas in the skill (the ChatGPT source already flags these).
