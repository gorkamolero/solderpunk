# Tempest Recipes: Congas

**Author:** Stim  
**Published:** January 21, 2013  
**Source:** http://noisylittlebugger.net/2013/01/21/tempest-recipes-congas/

---

## Overview

This tutorial demonstrates synthesizing conga drum sounds using the Tempest synthesizer, referencing a low 808 conga sample with a key frequency around 150 Hz.

## Core Synthesis Settings

### Basic Tone Foundation

- Oscillator 2: Triangle wave tuned to D2 (approximately 150 Hz)
- Oscillator mix: 0/100 (Osc 2 only)
- Filter: 12dB lowpass with zero resonance
- Technique: Close the filter gradually until matching the reference tone, then shorten the amp envelope

## Adding Attack Transient ("Snap")

The author identifies that authentic congas require crisp initial impact. Three approaches are suggested:

### FM Method (Preferred)

- Oscillator 1: Sawtooth at D4 (two octaves above fundamental)
- Use auxiliary envelope mapped to FilterFM with all stages at zero
- Set envelope amount to maximum (127)
- Adjust only the peak parameter (0-5 range) for subtle snap without obvious artifacts

### Alternative Approaches

- Apply fast-decay filter envelope separately
- Layer low-level noise samples (under 40 mix level) for natural reverb-like quality
- Create exponential, self-modulating amp and filter envelope decays

### Artifact Management

Adding 6ms of amp attack temporarily removes clicking artifacts, then reintroduce them with control by adjusting other envelope attacks.

## Tail Brightness Enhancement

Attach additional auxiliary envelope to filter cutoff with moderate amount (35) and decay (40), increasing attack parameter for smoother opening and brightness during sound decay. Close the highpass filter slightly to reduce muddiness while preserving body.

## Extended Applications

Higher-pitched congas benefit from similar treatment with adjusted pitch, filter, and envelope settings. Layer different percussion samples and retune for expanded palette. Reverb is described as essential.
