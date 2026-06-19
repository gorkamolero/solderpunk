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
- **grandmother** — Owner's Manual v2, Global Settings, Lisa Bella Donna & Dark patchbooks
- **zoia** — User Manual rev02, Euroburo Manual, 4.0 Sampler/Sequencer Guide, full changelog (fw 5.32)
- **brains** — Plaits Quickstart (PDF) + Plaits Manual (HTML) — authoritative for the shared engines
- **hector** — *(none yet)*

**Known gaps** (host hard-blocks non-browser clients; grab via a real browser session if needed):
- Hector manual — `storage.googleapis.com` returns 403 to curl (ACL/hotlink).
- Brains V1.02 / V5.0 Behringer quick-starts — `manuals.plus` 403s bots; the Plaits docs above cover the inherited engines, the Behringer-specific engines are captured in the research docs.
- Grandmother Mike Dean patchbook — the cited Moog URL now 404s (moved); minor.

## Roadmap

[INTEGRATION_PLAN.md](INTEGRATION_PLAN.md) — phased, Codex-ready: land corpus (done) → skills →
web explorers (panel-hotspot for Minitaur/Grandmother/Brains, module-browser for ZOIA/Hector) →
optional live MIDI control.
