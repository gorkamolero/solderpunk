# Tempest Recipes: Bass Drums Part I

**Author:** Stim  
**Published:** February 20, 2012  
**Source:** http://noisylittlebugger.net/2012/02/20/tempest-recipes-bass-drums-part-i/

---

## Overview

This comprehensive guide explores synthesizing bass drums on the Tempest, covering three drum types: kick drums, orchestral drums, and pitched bass drums.

## 808 Kick Drum

The 808 uses "a triggered resonant circuit with a short frequency rise" creating its iconic sound. The fundamental frequency sits around 60Hz.

### Basic Synthesis Approach

- Use sine wave oscillator modulated by pitch envelope
- Pitch envelope creates the characteristic "drop"
- Phase set to 90% generates the initial click
- Low values with long decay produce deep, "floppy" sounds
- Higher values with short decay increase tightness and pitch

### Advanced Techniques

- Add brief square wave impulse via Aux envelope for snap
- Use self-oscillating filter at low cutoff and high resonance (90)
- Filter envelope controls pitch; resonance controls boom length
- Incorporate filter FM for sustained tail
- Layer digital oscillators for definition
- Attach LFO to filter cutoff for wobble and vibrato
- Add minimal white/pink/green noise post-filter for beef

## 909 Kick Drum

The 909 employs "a triangle oscillator, with filtered noise click" for its attack.

### Basic Recipe

- Triangle oscillator (OSC1) at ~60Hz
- Pitch envelope: Decay 24, Amount 90
- Filter cutoff around 55
- Filter envelope: Amount 70, Decay 60

### Enhancement Steps

- Increase both Amp and Filter decay to 100
- Use ModPaths to control Filter envelope decay (author suggested +50)
- Shorten Amp envelope to approximately 90
- Add subtle noise (<10 mix level) for attack definition

### Attack Options

- White noise controlled by short decay envelope
- Second oscillator as saw wave pitched above triangle
- Use Amp Feedback (gradually increase for aggression)
- Compress external signal for snap

The author emphasizes: "The tempest is capable of some incredibly...punchy...snappy...kicks straight out" with post-processing.
