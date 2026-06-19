# Deep-research prompt — Behringer Brains

```
You are building the definitive reference for LEARNING AND MASTERING the Behringer Brains — the screen-based, multi-engine Eurorack macro-oscillator module. CRITICAL CONTEXT: Brains is derived from Mutable Instruments Plaits (open-source), then expanded by Behringer with extra engines, a display, presets, and MIDI. So you must mine BOTH the Behringer docs AND the deep Mutable Instruments Plaits documentation/community — the shared engines behave like Plaits. Be exhaustive — sweep the entire internet, including obscure sources. Leave no stone unturned.

WORK IN TWO LAYERS:

LAYER 1 — THE MANUAL (the base). Extract everything from the official Behringer Brains manual and firmware notes, AND the Mutable Instruments Plaits manual (for the inherited engines):
- Full architecture: the macro-oscillator concept, main vs. aux outputs, the HARMONICS / TIMBRE / MORPH macro controls, the LEVEL/FM/TRIG/V-OCT CV inputs with voltage ranges and behavior.
- THE ENGINE ATLAS: every synthesis model/engine (virtual analog, waveshaping, FM, granular, wavetable, additive, chord, speech/vowel, noise, modal/percussion, plus Behringer-added and sample-based engines). For EACH engine: what it generates and exactly what Harmonics, Timbre, Morph, and the aux output do in that engine.
- The screen/menu system, preset storage/recall, MIDI implementation (USB/TRS — notes, CC, V/oct), sample or wavetable loading if supported, and firmware update procedure.
- Document exactly how Brains DIFFERS from Plaits (extra engines, screen, presets, MIDI, any changed behavior).

LAYER 2 — INTERNET CUSTOM TIPS (the gold). Scour ModWiggler/Muffwiggler, Reddit (r/eurorack, r/modular, r/synthesizers), YouTube demos, blogs, and the Plaits community for:
- Hidden features, menu/easter-egg settings, and alternate/secret modes most owners never discover (including Plaits-inherited ones).
- Firmware secrets and version gems.
- The craziest power-user tricks (self-patching macros with CV, using the aux output, audio-rate FM, the chord/speech/percussion engines as full voices, drones, generative).
- PATCH RECIPES with exact engine + macro settings + CV routings (bass, leads, drums/percussion, chords, drones, textures), and which engine is best for what.
- Brains-specific quirks, bugs, calibration, and workarounds vs. Plaits.

OUTPUT, in this structure:
1. Hidden features & menu/easter-egg settings most owners never discover
2. Firmware notes, version gems & how Brains diverges from Plaits
3. The engine atlas — every model, with exactly what Harmonics/Timbre/Morph/aux/CV do in each
4. MIDI / CV control tricks
5. Patch recipes that exploit Brains' engines (exact engine + macro + routing settings)
6. Sample / wavetable / preset resources
7. Community resources & forums (ModWiggler, Reddit, Plaits docs & community)

SOURCING (mandatory — this feeds a public release, so attribution must be complete):
- Cite EVERY non-trivial claim inline with its direct URL.
- For every shared engine, cite BOTH the Behringer source and the Mutable/Plaits source, and state clearly whether the behavior is Plaits-inherited or Behringer-specific.
- End with an annotated "Sources" list: Behringer manual & firmware notes, the Plaits manual, every forum thread, video, and blog post, each with a one-line note on what it contains.
- Flag contradictions between sources and note firmware version where behavior differs.
```
