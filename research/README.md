# Research prompts

Deep-research prompts for building each instrument's knowledge base. Paste one per
run into a deep-research tool (Claude or ChatGPT), let it run, then centralize the
output (with its source links) into that instrument's package.

## The method

How tempest and tetra were built — two layers:

1. **The manual (base).** Extract *everything* from the official manual(s) and
   firmware notes: full architecture/signal path, every parameter with ranges,
   exact operating procedures (every button press), complete MIDI implementation.
2. **Internet custom tips (the gold).** Scour forums, Reddit, Discord, YouTube,
   patch repositories, and obscure personal blogs for hidden features, firmware
   secrets, power-user tricks, and sound/patch-design recipes with *exact* settings.

**Always keep a sources log with direct links to every source.** solderpunk will be
released publicly, so attribution must be complete and links exact. Cite every
non-trivial claim inline; end every report with an annotated link list.

Output shape mirrors `packages/tetra/docs/tetra-complete-guide.md` +
`resources.md` (the annotated link catalog) + the per-recipe attribution model in
`packages/tempest/docs/sound-design-tips.md`.

## Prompts

- [zoia.md](zoia.md) — Empress Effects ZOIA / ZOIA Euroburo
- [hector.md](hector.md) — Poly Effects Hector (and Beebo)
- [minitaur.md](minitaur.md) — Moog Minitaur
- [grandmother.md](grandmother.md) — Moog Grandmother
- [brains.md](brains.md) — Behringer Brains (Plaits-derived multi-engine macro-oscillator)
