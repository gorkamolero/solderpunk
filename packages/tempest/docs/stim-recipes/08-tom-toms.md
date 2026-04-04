# Tempest Recipes: Tom-Toms

**Author:** Stim  
**Published:** April 2, 2012  
**Source:** http://noisylittlebugger.net/2012/04/02/tempest-recipes-tom-toms/

---

## Overview

This post explores synthesizing tom-tom drum sounds on the Tempest synthesizer. The author emphasizes that electronic toms often lack realism, but their functional role matters most: "Tom-Toms are tonal instruments -- that is, if they are pitched correctly relative to each other, they can play a tune."

## Key Advantages of Digital Tom Synthesis

The Tempest offers unique advantages over physical drums:

- Rapid retuning between songs (seconds vs. significant effort)
- Single pad can generate multiple pitched toms using 16 tunings mode
- Dynamic modeling based on note velocity and pitch
- Expanded tuning palette enabling experimentation

## Synthesis Recipe

### Oscillator Setup

- Use triangle waves in both Oscillator 1 & 2
- Start with 100/0 mix ratio
- Switch to 16 tunings mode for pitch variation

### Pitch Envelope

- Apply minimal pitch envelope (under 5 units)
- Tweak decay for contextual fitting
- Keep pitch changes subtle -- avoid obvious modulation

### Filter Design

- Employ 2-pole filter without initial resonance
- Reduce until "only a dull bump" remains
- Increase filter envelope amount substantially
- Apply slight attack to eliminate clicking artifacts

### Advanced Shaping

- Optional Oscillator 2 detuning with short envelope emphasizing high frequencies
- Introduce filter FM for "hollowness and depth, as if moving through a drum shell"
- Add small highpass filtering to prevent bass conflicts
- Map Note Number to envelope decay: higher notes decay faster (suggested starting value +80)

### Dynamic Enhancement

- Velocity-map key parameters
- Apply self-modulation to envelopes, particularly filter envelope
- Use LFO modulation judiciously for interesting tail characteristics

### Noise Considerations

The author finds noise "of limited use" for tom sounds, suggesting it "detract[s] from the innocent simplicity of a good Tom sound."

## Practical Context

The post stresses designing toms within active patterns rather than isolation, as context dramatically affects perceived quality. Realistic drum programming respects physical limitations (maximum four simultaneous hits with two hands and feet), though electronic music allows greater flexibility with shorter, poppier tom articulations.

## Tuning Reference

A chord chart is provided for 16 tunings mode, offering suggestions for pitch selection within various musical keys.
