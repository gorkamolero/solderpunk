# Tempest Recipes: 1-Voice Chords

**Author:** Stim  
**Published:** February 26, 2012  
**Source:** http://noisylittlebugger.net/2012/02/26/tempest-recipes-1-voice-chords/

---

## Overview

This tutorial explains how to create single-voice chord progressions on the Tempest synthesizer by tuning oscillators to specific intervals. A template patch is provided for download (stimchords.syx).

## Core Concept

The technique leverages oscillator tuning to produce complete chords with a single keypress. In 16 tunings mode, "notes pressed will play the relevant root chord." This conserves voices while enabling complex harmonic content.

## Patch Setup

The template includes a kick on Pad 1 and the chord stab on Pad 16, with four sliders controlling different chord variations:

- **Minor (0,3,7)**: Default slider position
- **Minor 7th (0,3,7,10)**: Slider 1 affects Osc1/2 mix
- **Minor 6th (0,3,7,9)**: Slider 1 at maximum, Slider 2 minimum
- **Min/maj 7th (0,3,7,11)**: Both sliders at maximum

## Construction Method

1. Start with sawtooth waves on all four oscillators, keeping digital Oscs 3-4 low initially
2. Determine slider FX values (approximately 4 units per semitone)
3. Set Osc1/2 mix to 100/0, then adjust individual oscillator pitches
4. Use the interval backbone 0,7 common to target chords
5. Implement Osc2 at interval 10, adjustable via sliders for variations

The author notes: "Osc1 +3, Osc 2 +10 (inaudible), Osc 3 +0, Osc4 + 7" creates the default minor chord.

## Common Chord Intervals

Reference chart (semitone intervals from root):

- Major: 0,4,7
- Diminished: 0,3,6
- Augmented: 0,4,8
- Suspended 4th: 0,5,7
- Minor 6th: 0,3,7,9

## Advanced Techniques

- Octave transposition enables chord inversions
- External reverb/delay enhances the sound
- Diminished scale pairs effectively with varying chord shapes
- SID arpeggio tricks work on full chords or individual oscillators
