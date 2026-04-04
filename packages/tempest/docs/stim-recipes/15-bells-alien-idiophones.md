# Tempest Recipes: Bells and Alien Idiophones

**Author:** Stim  
**Published:** February 6, 2013  
**Source:** http://noisylittlebugger.net/2013/02/06/tempest-recipes-bells-and-alien-idiophones/

---

## Overview

This recipe demonstrates synthesizing bell sounds and experimental textures using the Tempest synthesizer, initiated by a DSI forum request. While the author notes FM synthesis typically produces more natural bells, this approach yields "nice results, especially on the weirder side."

## Core Recipe

### Oscillator Setup

- Both Osc 1 and Osc 2 use triangle waves
- For harmonic bells playable chromatically: Osc 2 at C4, Osc 1 at C5
- For inharmonic church bell tones: Osc 2 at D#1, working upward
- Detune Osc 2 to approximately 30 (increase for more clangorous effects)

### Amplitude Envelope

- AD mode with zero attack and lengthy decay (around 60)
- Boost amplitude envelope amount to 100
- Use ModPaths to self-modulate the decay parameter with positive values near 30 for bell-like characteristics

### LFO Modulation

- LFO1 routed to Osc 2 frequency with random shape
- Apply minimal amount (1-2) to introduce subtle tail randomness

### Filter Configuration

- 4-pole filter with slightly closed cutoff (120)
- Zero resonance initially
- Gradually increase Filter FM (Audio Mod) knob to explore "tons of cool analogue sounds"
- Modulate filter parameters with both LFOs for expanded sonic possibilities

### Effects

- Layer chorus and reverb generously
- Apply compression heavily -- the author emphasizes growing appreciation for Tempest's compressor

The author notes exploration often leads away from pure bell tones "into crazy modulation land" with worthwhile results.
