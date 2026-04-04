# Tempest Recipes: Tuned Woods, Sticks and Clicks

**Author:** Stim  
**Published:** February 1, 2013  
**Source:** http://noisylittlebugger.net/2013/02/01/tempest-recipes-tuned-woods-sidesticks/

---

## Overview

This guide explains synthesizing woody percussion sounds using the Tempest synthesizer, building on previous cowbell techniques through square wave oscillator tuning.

## Single Square Wave Foundation

Start with basic setup to establish proper envelopes:

- **Oscillator:** Osc 2 Square at D#2, mix set to 0/100
- **Amplitude Envelope:** ~60 amount, decay around 50 (adjustable). Add peak for clicky stick sounds by reducing decay and increasing peak
- **Filter:** 24dB lowpass at 60Hz (removes harmonic fizz), no resonance, no filter FM
- **Filter Envelope:** Decay 40, amount 40
- **High Pass:** ~40 to tighten the sound
- **Amp Feedback:** Provides convincing knock using fixed velocity

Advanced envelope shaping involves modulating "Amp Envelope Decay with the Amp envelope itself for nice curve" using negative values for hollow tones and positive for clickier sounds.

## Dual Oscillator Techniques

Introduce Osc1 as second square wave, experimenting with relative pitch and level balance. A useful undocumented feature: press and hold the oscillator select button until all four oscillator lights appear -- the pitch knob now tunes all oscillators simultaneously while preserving relative pitches.

Extreme detuning between oscillators yields interesting tonal variations, especially at higher pitches.

## Modulation Methods

### LFO1 Techniques

- Modulate PWM on either/both oscillators for significant tonal variation
- Modulate one oscillator's frequency with high LFO rate
- Random LFO shape set to Osc2 frequency (rate 150, amount 100) produces dull "wet cardboard" hits

Filter FM without resonance creates flabbier sounds.

## Pitch Applications

Lower pitches work for bass patches; higher pitches produce effective side-stick tones. Chromatic playing is possible but requires careful envelope and keyboard tracking adjustments to maintain consistent progression across the keyboard.

With dedicated tuning, convincing marimba and xylophone sounds emerge, though intermediate tones offer more creative potential.
