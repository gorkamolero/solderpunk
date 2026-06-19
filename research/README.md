# Research corpus

Deep-research corpora for each instrument, plus the prompts that generated them and the
integration roadmap. This is the raw material that feeds solderpunk's three knowledge
layers: **corpus → Claude skill → web explorer** (see [INTEGRATION_PLAN.md](INTEGRATION_PLAN.md)).

## The method (how Tempest & Tetra were built)

Two layers per instrument:

1. **The manual (base).** Everything from the official manual + firmware notes: architecture,
   every parameter/range, exact operating procedures, full MIDI/CV implementation.
2. **Internet custom tips (the gold).** Forums, Reddit, Discord, YouTube, patch repos, obscure
   blogs — hidden features, firmware secrets, power-user tricks, sound/patch recipes with exact settings.

**Every source is logged with a direct link** (solderpunk ships publicly — attribution must be complete).
Each instrument was researched twice (Claude + ChatGPT deep research) and both are kept.

## Corpus

Each `<id>/` holds `prompt.md` (the deep-research prompt), `claude.md`, and `chatgpt.md`.

| Instrument | Folder | Firmware baseline / notes |
|---|---|---|
| Empress ZOIA / Euroburo | [zoia/](zoia/) | ChatGPT doc = fw **5.32** (newer than Claude's 5.00). Module-browser explorer. |
| Poly Effects Hector / Beebo | [hector/](hector/) | fw 407-era; touchscreen → module-browser explorer; docs sparse (gaps flagged). |
| Moog Minitaur | [minitaur/](minitaur/) | fw v2.2.2 final; full MIDI CC map → live-control candidate. |
| Moog Grandmother | [grandmother/](grandmother/) | fw v1.1.x; patchbay + MIDI CC → live-control candidate. |
| Behringer Brains | [brains/](brains/) | Plaits-derived; CV only (no MIDI). Label engines Plaits-inherited vs Behringer. |

## Primary manuals

`<id>/manuals/` holds the actual cited source PDFs (downloaded + verified `%PDF`), the true primary sources behind the research:

- **minitaur** — Owner's Manual, v2.2 Addendum, Editor User's Manual
- **grandmother** — Owner's Manual v2, Global Settings, Lisa Bella Donna + Dark + Mike Dean patchbooks
- **zoia** — User Manual rev02, Euroburo Manual, 4.0 Sampler/Sequencer Guide, full changelog (fw 5.32)
- **brains** — Behringer quick-starts V1.02 (20-engine) + V5.0 (24-engine) + Plaits Quickstart + Plaits Manual (HTML)
- **hector** — official "Hector and Beebo Manual" (97 pp, Poly Effects)

All cited primary sources are archived locally. The host blocks (GCS 403, manuals.plus 403, Moog 404)
were worked around via the Wayback Machine and proper request headers (UA + Referer + `Accept`).

## Querying the corpus (QMD)

This corpus is indexed with [QMD](https://github.com/tobi/qmd) (`@tobilu/qmd`) — local hybrid
search over the `.md` files: **BM25 + vector (EmbeddingGemma-300M) + LLM rerank**, all on-device.
This is the "ask and use these things" layer — no re-researching, no cloud.

```bash
qmd query "growly reese bass"     # hybrid (expansion + rerank) — recommended
qmd search "patchbay normals"     # BM25 only, instant, no model
qmd vsearch "self-oscillating filter as a sine voice"   # vector only
```

- Collection `research` points at this folder (`**/*.md`); 22 docs → 360 embedded chunks.
- **Claude uses it automatically** via the installed `qmd` skill (`~/.claude/skills/qmd`): ask about
  any instrument and Claude queries the corpus and answers cited.
- **Adding a new instrument** = drop its `.md` into `research/<id>/`, then `qmd update && qmd embed`.
- The index (`~/.cache/qmd/index.sqlite`) is a local cache — regenerable, not committed.

## Roadmap

[INTEGRATION_PLAN.md](INTEGRATION_PLAN.md) — phased, Codex-ready: land corpus (done) → skills →
web explorers (panel-hotspot for Minitaur/Grandmother/Brains, module-browser for ZOIA/Hector) →
optional live MIDI control.
