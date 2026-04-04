# Tempest Recipes: Apito -- The Samba Whistle

**Author:** Stim  
**Published:** January 14, 2013  
**Source:** http://noisylittlebugger.net/2013/01/14/tempest-recipes-apito-whistle/

---

## Overview

This post provides synthesis instructions for creating an apito (Brazilian samba whistle) sound on a Tempest synthesizer, describing it as "a nice 'n' easy analogue take on the apito."

## Synthesis Parameters

### Oscillators

- Start with 2 triangle wave oscillators tuned to F6 and F#6
- Apply extreme detuning to Oscillator 2 (fine tuning: +/-40)

### Amplitude Envelope

- ADSR configuration with substantial sustain
- Release time shortened to approximately 30

### LFO 1 (Random Waveshape)

- Mapped to Oscillator 1 frequency
- Rate: 126
- Amount: 5 (minimal modulation)

### LFO 2 (Square Waveshape)

- Mapped to Oscillator 2 frequency
- Rate: 120
- Amount: 83 (substantial modulation mimicking the ball inside the whistle)

### Filter

- High-pass filter setting: approximately 50
- Substantial Filter FM
- Slight envelope modulation to emphasize attack
- Experiment with both filter slopes

## Additional Tips

The author suggests playing the patch chromatically across octaves to discover bonus sounds and recommends processing through delay effects for enhanced results.
