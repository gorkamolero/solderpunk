# Tempest Recipes: Sub-Bass

**Author:** Stim  
**Published:** January 16, 2013  
**Source:** http://noisylittlebugger.net/2013/01/16/tempest-recipes-sub-bass/

---

## Overview

This guide explores creating a sub-bass patch using the Tempest synthesizer's digital oscillators, specifically leveraging the 130.81Hz sine sample for deep, resonant low-end frequencies.

## Key Concepts

The author begins by noting that "a perfect sine wave contains only one harmonic -- the fundamental frequency," making sampled sines valuable for pure low-end synthesis. Digital oscillators provide expanded sound design possibilities beyond analog options.

## Patch Construction Steps

### Oscillator Setup

- Load the 130.81Hz sine sample into Oscillator 3
- Reduce pitch to -24

### Amplitude Envelope Configuration

- Set attack and release to 40 each
- Maximize sustain
- Set envelope amount to 64
- Reduce velocity sensitivity to approximately 32

This approach produces a "felt" rather than "heard" sound -- ideal for layering beneath kick drums.

### Filter Settings

- Leave wide open with zero resonance (unnecessary for sine waves lacking additional harmonics)

### Pitch Envelope Enhancement

- Attack: 26
- Decay: 60
- Amount: 10
- Adjustments work best during playback with active beats

## Harmonic Enrichment Options

Add complexity using the Feedback control with "fixed level" settings, or employ FM synthesis by configuring Oscillator 1 at low frequency with oscillator mix at 0/100.

**Result:** Usable chromatically for deep subby basslines.
