# Tempest Recipes: Claps

**Author:** Stim  
**Published:** February 19, 2013  
**Source:** http://noisylittlebugger.net/2013/02/19/tempest-recipes-claps/

---

## Overview

This guide explores synthesizing clap sounds using the Tempest synthesizer. The author explains that "claps are several sounds in one, each offset by a tiny amount, differing in volume, pitch and other nuances."

## Core Concept

A realistic clap mimics multiple people clapping simultaneously at slightly different moments. This creates a chorus effect that responds well to reverb processing. The Tempest's envelope delay parameter -- distinct from MIDI delay -- provides the mechanism for creating these layered "crack" sounds.

## Basic Setup Instructions

### Initial Configuration

- Load the "Resonant 4k noise" sample into Oscillator 3, pitched down 12 semitones
- Set all envelope Amount values to zero for velocity control
- Configure the main Amplitude envelope with zero delay and velocity amount of 127, using a decay of approximately 20

### Creating the Crack Effect

The technique involves reassigning the Pitch envelope to modulate VCA level. Set matching decay (20) with a delay of 30 milliseconds and velocity amount around 30. Progressively add layers using Aux-1 and Aux-2 envelopes with slightly different parameters:

- Aux-1: decay of 25, velocity amount 40, delay of 8
- Aux-2: decay of 30, velocity amount 20, delay of 11

## Key Parameters

Focus adjustment on delay times, decay values, and velocity amounts. The envelope delay operates on a logarithmic scale, with maximum settings (127) producing nearly 6 seconds of separation between sounds.

## Experimental Applications

Use ModPath assignments to modulate additional parameters like pitch and pan across envelope stages. The guide encourages exploring similar techniques with snares and other percussion sounds.
