# Tempest Recipes: Hi-Hats, Shakers, Zaps

**Author:** Stim  
**Published:** March 4, 2012  
**Source:** http://noisylittlebugger.net/2012/03/04/tempest-recipes-hi-hats-shakers-zaps/

---

## Overview

This guide explores synthesizing percussion sounds -- hi-hats, shakers, maracas, and similar elements -- using the Tempest synthesizer. The foundation relies on noise as the primary component, with filtering techniques to sculpt the desired frequencies.

## Shakers

Basic approach: band-passed white noise with key modifications:

- Utilize the 4K resonant noise sample; pitch envelope application adds character
- Attack timing depends on tempo; release should approximate attack duration
- Vary release times and filter envelope shapes for different variations via reverse function
- Stay in 16 Tunings mode for playability across different pitches
- Key-tracking the filter and pitch enables greater expressiveness
- Two-pole filters yield more natural results
- Employ roll function set to 16th quantization for groovy rhythms
- Heavy velocity control utilization is strongly recommended

## Hi-Hats

Setting amplitude attack to zero provides the right starting point. A single sound works for both open and closed hats by assigning an FX slider to envelope decay parameters.

### Metallic Tone Technique

- Map triangle oscillator frequency to noise as modulation source
- As modulation increases, sound gradually becomes noisier while retaining oscillator character
- Pitched-up, this creates a metallic click quality
- Mix with small amounts of digital oscillator noise for layered depth
- Modulate filters and add slight amp feedback for enhanced metallic resonance

## Zaps

Band-passed noise creates effective percussive sounds:

- Increase filter resonance at 24dB and open cutoff with fast envelope for Kraftwerk-style effects
- Apply LFO to filter for bubbly textures
- Use ADSR mode for disco-style whooshes with heavy reverb
