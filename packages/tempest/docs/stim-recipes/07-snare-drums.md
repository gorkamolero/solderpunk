# Tempest Recipes: Snare Drums

**Author:** Stim  
**Published:** March 31, 2012  
**Source:** http://noisylittlebugger.net/2012/03/31/tempest-recipes-snare-drums/

---

## Overview

This comprehensive guide teaches snare drum synthesis on the Tempest synthesizer. The author emphasizes using ears over theory, noting that "the core snare sound is pretty standard and can be synthesized with ease."

## Key Concepts

### Snare Function in Rhythm

Snares typically hit on upbeats (2 and 4) and serve as the rhythm's temporal anchor. The author explains that "the snare reinforces the sense of tempo" while other elements vary. Pitch changes dramatically alter beat feel.

### Acoustic Properties

Analysis shows acoustic snares peak around 120-200Hz with complex high-frequency harmonics from rattling snares. Classic drum machines (TR-808, TR-909, LinnDrum, TR-505) share similar frequency characteristics despite sounding distinct.

## Basic Patching Strategy

### Starting Point

- Triangle wave in Osc2 at 0/100 mix (Osc1 reserved for filter FM)
- Pitch set to F2 region (~200Hz) using spectrum analyzer
- Subtle pitch envelope (decay ~40, amount ~10)

### Adding Snare Character

- Mix Resonant 4K noise sample at reduced level (~60)
- Apply 2-pole filter with cutoff ~40
- Gradually increase filter envelope amount

### Critical Limitation Solution

The Tempest hardwires oscillator amplitude to the main amp envelope. To independently control noise decay, attach an aux envelope to the highpass filter, creating independent attack/decay characteristics for "skin" and "snares."

## Advanced Techniques

### Modulation Approaches

- Map velocity to envelope decay (harder hits = longer sustain)
- Add random modulation to fine pitch
- Use noise as a modulation source for additional character
- Enable LFO modulation on oscillator frequencies

### Layering Options

- Deploy Osc1 as FM modulator using pulse waves
- Experiment with magic TR-909 frequencies (185Hz, 330Hz)
- Add bypass noise for high-frequency content
- Introduce amp feedback for transient emphasis

### Ghost Rolls

The Tempest roll feature enables variable-pressure snare fills -- "gently applying variable pressure to a pad for endless snare fills."

## Post-Processing

The author stresses that "dry snares are rare" and recommends reverb as essential. Additional effects like pitch-shifter and compression enhance results.

## Philosophy

Rather than modeling harmonics precisely, the author advocates empirical approach: listen carefully and adjust iteratively. Success requires "the ability to dig-out your own snares from scratch in seconds, on-the-fly, mid-performance."
