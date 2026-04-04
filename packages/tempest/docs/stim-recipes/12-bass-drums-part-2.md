# Tempest Recipes: Bass Drums Part 2

**Author:** Stim  
**Published:** January 18, 2013  
**Source:** http://noisylittlebugger.net/2013/01/18/tempest-recipes-bass-drums-part-2-2/

---

## Overview

This tutorial demonstrates how to create flexible bass drum templates on the DSI Tempest synthesizer by layering analog and digital oscillators. The approach balances boomy kicks with natural-sounding variants through strategic parameter adjustments.

## Three-Component Drum Architecture

The foundation uses three sound sources:

1. **Sub-sine element** -- Body of the kick drum
2. **Kick sample** -- Tonal character and harmonic flavor
3. **Analog oscillators** -- Attack punch and click definition

## Digital Oscillator Setup

Starting from an initialized patch:

- Oscillator 4: Set a 130Hz sine wave, initially pitched down 24 semitones
- Oscillator 3: Load an interesting kick sample (author recommends "Nice" as a starting point)
- Balance Osc 3 and Osc 4 levels for thumpy character without additional processing

## Filter Configuration

The patch bypasses the low-pass filter for digital oscillators, preserving headroom for other modulation. The author typically sets Pre/Post filter to "20/80," allowing subtle filtering while protecting low-end frequency content during 16-beat mode sequencing.

## Amplitude Envelope Shaping

The amp envelope controls decay length and introduces punch through the Peak parameter (accessible via rightmost soft-knob in envelope mode). Velocity sensitivity assignment here remains critical for expressive control.

## LFO Modulation Techniques

### LFO1 Application

Maps to Oscillator 4 frequency using triangle waveform for wobble effects. Rate begins at zero, controlled by amplitude envelope decay via ModPaths mapping. This creates dynamic animation as the sound sustains.

### LFO2 Application

Controls all oscillator frequencies with sawtooth wave, creating pitch rise effects. Setting quarter-note tempo sync with extended amp decay produces rhythmic pumping. Reverse sawtooth variants add punch to digital oscillators.

## Analog Oscillator Treatment

The author employs Oscillator 2 with 0/100 mixing ratio, preserving FM modulation flexibility (though noted as less useful for kicks). Configuration details:

- Triangle waveform with key follow disabled and wave reset enabled
- Initial frequency: C3
- Pitch envelope: 30ms decay, full amount (127)
- Auxiliary Envelope 1: 20ms decay, full amount, with 3-step delay creating doubling and click

## Filter Sculpting for Punch

The low-pass filter tightens the squeak artifacts while retaining body, controlled via filter envelope with 20ms decay and full amount. The high-pass filter provides the most dramatic character variations, adding attack definition and clarity. Higher HPF settings with shorter amp decay yield more natural kicks.

Amplitude feedback, when combined with judicious HPF settings, generates extreme clickiness for hard-hitting kicks, though caution prevents filter bleed-through causing equipment damage.

## Sequencing Flexibility

Mapping sliders to amplitude decay, pitch envelopes, and filter parameters enables expressive real-time control over kick character while maintaining the core template structure.
