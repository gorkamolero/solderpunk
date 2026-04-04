# Tempest Recipes: Cowbells

**Author:** Stim  
**Published:** February 21, 2012  
**Source:** http://noisylittlebugger.net/2012/02/21/tempest-recipes-cowbells/

---

## Overview

This tutorial covers synthesizing a classic 808 cowbell sound using the Tempest synthesizer. The author references the Waldorf Attack VST manual, which describes the 808 cowbell as "made of two square oscillators, one oscillating at 540Hz, the other at 800Hz" with a heavily emphasized attack phase followed by filtering.

## Core Recipe

### Oscillator Setup

- OSC1: Square wave (pulse @ 50%) tuned to approximately 540Hz (D#6)
- OSC2: Square wave tuned to approximately 800Hz (G#6)
- Key Follow: OFF for both oscillators
- Wave Reset: OFF
- Slight detuning between oscillators for character

### Adding Movement

- Apply LFO1 to OSC1/2 pulse width at approximately 30Hz rate
- Experiment with modulating only one oscillator at higher rates
- Vary pulse widths individually for different flavors

## Envelope Shaping

### Amplitude Envelope

- Set decay to 100 for extended tail
- Use ModPaths to map envelope to its own decay with positive modulation
- Slightly increase attack to reshape transient
- Reduce velocity amount to ~10; set envelope amount to 100 for consistency
- Cowbells benefit from reduced dynamic range

### Filter Envelope

- Close filter cutoff until muffled, then increase envelope amount
- Match filter attack to amp attack
- Increase and reshape decay similarly to amp envelope
- Engage high-pass filter to remove lowest frequencies

## Chromatic Implementation

To play cowbells across multiple keys without standard key-tracking:

- Keep oscillator key-tracking OFF initially
- Apply custom tracking via ModPaths using "Note Number" source
- A setting of +127 corresponds to one-semitone intervals
- Values like +64 produce half-semitone intervals

Alternatively, enable oscillator sync and track only one oscillator, with OSC2 defining pitch.

## Optional Enhancements

- Add filter FM and amplitude feedback for additional tonal weight
- Modulate the high-pass filter with envelope to create abrupt cutoff
- Layer synthesized sounds with digital samples
- Apply reverb for added dimension
- Experiment with drastically different oscillator pitches

## Reference

Raw 808 cowbell recording and spectrum analysis demonstrate the sound's characteristic peaks at 540Hz and 800Hz frequencies.
