# Tempest Recipes: SID Sounds

**Author:** Stim  
**Published:** February 23, 2012  
**Source:** http://noisylittlebugger.net/2012/02/23/tempest-recipes-sid-sounds/

---

## Overview

This tutorial explores recreating classic Commodore 64 SID synthesizer sounds using the Tempest synthesizer. The author notes that while the Tempest lacks a ring modulator, it offers alternative methods for achieving vintage 8-bit characteristics.

## Getting Crunchy Sounds

The guide recommends using square waves extensively as a primary tool for achieving that nostalgic 8-bit quality:

### Kick Drums

Replace sine waves with square waves in basic drum patches, then adjust pitch envelopes downward and experiment with envelope settings for "phatt" results.

### Snares & Toms

Combine digital samples with square-wave LFOs modulating oscillator frequency at high rates and amounts. Layer multiple oscillators with different frequencies and separate LFO modulation to create varied industrial textures.

### Hi-Hats

Use pitched digital noise (specifically "Resonant 4K Noise") modulated heavily through filters. The author suggests noise as a modulation source on oscillator frequency via ModPaths.

The square wave creates a bitcrushing effect by its dominance in the mix, though the author acknowledges this doesn't fully replicate dedicated bitcrushing hardware.

## Fake Chord Arpeggios

The SID's three-voice limitation inspired the characteristic "fake chord" technique -- rapidly modulating oscillator frequency between defined intervals:

### Basic Setup

- Use one triangle-wave oscillator (Osc1)
- Switch to ADSR mode for sustained arpeggios
- Attach square-wave LFO to Osc1 frequency

### Calibration Method

Using a tuner (the author recommends GTune), empirical testing revealed that each LFO amount unit equals approximately one semitone (8 units = 1 semitone). The full LFO range spans 16 semitones (LFO amount 0-128).

### Common Intervals

- Power chords: 7 semitones (LFO amount = 56)
- Tritone: 6 semitones (LFO amount = 48)
- Octaves: 12 semitones (LFO amount = 96)

### Creating Three-Note Chords

Deploy multiple oscillators with different LFO-modulated frequencies and rates. Sync LFOs to clock with varying speeds to create movement. The author notes that longer envelope decay/release times create natural delay and chorus effects.

## Additional Techniques

### Widening with Panning

Route square-wave LFO to voice pan at low amounts (approximately 10). Gradually increase LFO rate to discover sweet spots where chorus effects emerge. Cranked settings produce distorted, experimental effects.

The author emphasizes experimentation with modulating LFO rates themselves using envelopes, note numbers, velocity, or other modulation sources for richer sonic variation.
