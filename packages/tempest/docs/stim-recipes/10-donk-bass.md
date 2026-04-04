# Tempest Recipes: Donk Bass

**Author:** Stim  
**Published:** January 15, 2013  
**Source:** http://noisylittlebugger.net/2013/01/15/tempest-recipes-donk-bass/

---

## Overview

This guide demonstrates how to create the characteristic "hollow 'thwank'" bass sound using a Tempest synthesizer. The author describes this as "a great foundation for our own, less cheesy variants" of a garage staple.

## Core Sound Design Steps

### Oscillator Setup

The recipe begins with "a square wave on Osc2" with oscillator mix set to 0/100 to isolate that oscillator exclusively.

### Filter Configuration

Use a 12dB filter with cutoff around 40 and resonance at approximately 30. Set filter keytracking (LP KEY>FREQ parameter) to about 15. The filter envelope drives the characteristic sound, with suggested decay of 60 and amount of 20-30. Velocity control should be applied sparingly to maintain definition.

### Amplitude Shaping

Increase amp envelope amount to 32 and reduce velocity sensitivity to 64 as "a nice compromise." Consider adding a subtle pitch envelope with short duration for additional attack interest.

## FM Synthesis Enhancement

The author explains that "the most pleasing sounds pop out when the frequency of the modulator(s) is at integer ratios of the carrier's frequency."

Configure Osc1 (modulator) one octave above Osc2 (carrier). Turn Filter FM audio modulation approximately halfway. Adjusting Osc1's pitch reveals tonal variations -- metallic at certain ratios, more pleasing at others, enabling experimentation with envelopes controlling pitch and volume for additional textures.

## Finishing Touches

Apply modest feedback for fuller sound, using "Fixed level" mode on the pad to precisely measure maximum feedback and prevent velocity surprises.
