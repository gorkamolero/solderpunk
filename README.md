# SOLDERPUNK

Interactive, AI-assisted **synth explorers** — hover any control on a flat panel render to
learn what it does, follow guided tutorials, and (for supported synths) drive the real
hardware over MIDI. Each instrument bundles a deep, cited knowledge base you can query.

**Instruments:** DSI Tempest · DSI Tetra · Moog Minitaur · Moog Grandmother · Behringer Brains ·
Empress ZOIA · Poly Effects Hector.

---

## Quick start

**Prerequisites**
- **Node** ≥ 20 (tested on 24)
- **pnpm** ≥ 10 (works on 10 and 11 — see [the build note](#why-install-just-works) below)
- A modern browser. **Live MIDI control needs Chrome or Edge** (Web MIDI isn't in Safari/Firefox).

**Install & run**

```bash
git clone https://github.com/gorkamolero/solderpunk.git
cd solderpunk
pnpm install
pnpm dev            # → http://localhost:3000
```

Then open an explorer:

| Route | Instrument |
|---|---|
| `/` | landing — pick a synth |
| `/tempest` `/tetra` | DSI Tempest / Tetra |
| `/minitaur` `/grandmother` `/brains` | Moog Minitaur / Grandmother · Behringer Brains |
| `/zoia` `/hector` | Empress ZOIA · Poly Effects Hector |

> **Port already in use?** `pnpm --filter @solderpunk/web dev -- -p 3939` (or any free port).

**Production build**

```bash
pnpm build          # next build (type-checks + prerenders all routes)
```

No environment variables are required — the lesson database self-seeds on first run.

---

## Live MIDI control (Minitaur + Grandmother)

These two have a CC map, so the explorer can drive the real hardware:

1. Connect the synth to your computer (USB or a MIDI interface).
2. Open `/minitaur` (or `/grandmother`) **in Chrome/Edge**.
3. Click **Connect** in the MIDI bar, pick the output and channel.
4. Drag a glowing (teal-outlined) knob **vertically** — it sends that control's MIDI CC.

Minitaur exposes its full CC map (every knob); Grandmother only its handful of
MIDI-controllable parameters (most GM knobs are analog-only).

---

## Ask the corpus (optional — agent Q&A)

Each instrument ships a cited research corpus under `research/<id>/` (deep-research docs,
manuals, a synthesized `SKILL.md`). It's queryable by an AI agent via
[QMD](https://github.com/tobi/qmd) (local hybrid search — no cloud):

```bash
npm i -g @tobilu/qmd          # or: bun install -g @tobilu/qmd
qmd collection add research   # from the repo root
qmd embed                     # builds the local vector index (first run downloads a small model)
qmd query "how do I get a reese bass on the minitaur"
```

The repo's `.mcp.json` registers `qmd` as an MCP server, so opening the project in
**Claude Code** (or via `codex mcp`) gives the agent `query`/`get` tools over the corpus —
ask any synth question and it answers grounded in the docs. Re-index after editing docs:
`qmd update && qmd embed`.

---

## Project layout

```
packages/web/         Next.js app — the explorers
  src/lib/<synth>/     per-synth: zones.ts (hotspots) · lessons.ts (tutorials) · config.ts · cc.ts (MIDI)
  src/components/      Panel, PanelZone, MidiBar, Sidebar, ExplorerLayout
  public/<synth>-panel.png   flat panel renders
research/<id>/        deep-research corpus + manuals + SKILL.md (queried via QMD)
scripts/              panel/zone detection pipeline
```

<a name="why-install-just-works"></a>
### Why `pnpm install` just works

The app has native dependencies (`better-sqlite3`, `sharp`, `esbuild`). pnpm 10+ blocks
build scripts by default, which would break the install — so `pnpm-workspace.yaml`
pre-approves them under **both** `allowBuilds` (pnpm 11) and `onlyBuiltDependencies`
(pnpm 10). No `pnpm approve-builds` step needed.
