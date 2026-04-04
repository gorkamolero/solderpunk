# DSI Tempest Sound Design Tips

Compiled from the [Sequential Forum thread](https://forum.sequential.com/index.php?topic=34.0) (4 pages, 72+ replies) and [Stim's Tempest Recipes](http://noisylittlebugger.net/) blog series.

---

## Table of Contents

- [Architecture Fundamentals](#architecture-fundamentals)
- [Bass Drums (Kicks)](#bass-drums-kicks)
- [Snare Drums](#snare-drums)
- [Hi-Hats, Shakers, Zaps](#hi-hats-shakers-zaps)
- [Claps](#claps)
- [Cowbells](#cowbells)
- [Bells and Alien Idiophones](#bells-and-alien-idiophones)
- [Sub-Bass](#sub-bass)
- [Donk Bass](#donk-bass)
- [House Bass](#house-bass)
- [SID Sounds and Arpeggios](#sid-sounds-and-arpeggios)
- [One-Voice Chords](#one-voice-chords)
- [Pads and Drones](#pads-and-drones)
- [Mod Matrix Techniques](#mod-matrix-techniques)
- [FM Synthesis and Feedback](#fm-synthesis-and-feedback)
- [Humanization](#humanization)
- [Troubleshooting: Clicks and Pops](#troubleshooting-clicks-and-pops)
- [Voice Assignment](#voice-assignment)
- [FX Slot Stacking](#fx-slot-stacking)
- [Cymbal Creation](#cymbal-creation)
- [Patch Collections](#patch-collections)
- [External Resources](#external-resources)

---

## Architecture Fundamentals

*Source: Stim's Recipes - "First Things First"*

- **Oscillators**: 2 analog (OSC 1-2) + 2 digital (OSC 3-4) per voice. Digital oscillators are louder by default -- reduce to ~50% for balance.
- **Analog oscillators** are free-running (slight variations between hits). Enable **Wave Reset = ON** for consistent attack transients.
- **Digital oscillators** are precise by default.
- **Envelopes**: 5 per sound. Amp and Cutoff are hardwired; Pitch, Aux1, Aux2 are freely assignable.
- **Percussion model**: Attack-Decay-Release (not full ADSR). The **Peak** parameter holds the sound at maximum after attack, before decay begins.
- **Envelope bending**: Envelopes are linear but can be shaped by modulating their own decay/release (self-modulation via mod matrix).
- **Filters**: LP + HP combined = bandpass. LP switches between 4-pole (24dB) and 2-pole (12dB). Apply subtle HP to reduce muddiness.
- **Velocity**: Map to Amplitude, Filter, Pitch. Set envelope velocity amount to `127` for full dynamic range. 8 mod slots available.

---

## Bass Drums (Kicks)

### 808 Kick

*Source: Stim's Recipes*

| Parameter | Value |
|---|---|
| OSC 1 | Sine wave, 100% mix |
| Pitch | ~130.81 Hz (C3) |
| Phase | 90% (for initial click) |
| Pitch Env Decay | `24` |
| Pitch Env Amount | `90` |
| LP Cutoff | Start closed, raise to ~`40` |
| Resonance | ~`90` (near self-oscillation) |
| Filter Env Amount | Start low, increase for snap |

**Modulation:**
- Map Pitch Envelope to OSC 1 frequency only
- Add Filter FM (Audio Mod) for boomy sustain
- Optional: LFO to filter cutoff with Aux envelope controlling rate/amount

**Layering:**
- Tiny white/pink/green noise post-filter for definition
- Digital square wave (OSC 2) via Aux env with `2ms` delay for attack clarity
- Barely perceptible hi-hat or conga sample mixed in

### 909 Kick

*Source: Stim's Recipes*

| Parameter | Value |
|---|---|
| OSC 1 | Triangle wave, mix 100/0, wave reset ON, key follow OFF |
| Fundamental | ~60 Hz (A2) |
| Pitch Env Decay | `24` |
| Pitch Env Amount | `90` |
| LP Cutoff | ~`55` |
| Filter Env Amount | `70` |
| Filter Env Decay | `60` |
| Amp Env Decay | `90`-`100` |

**Advanced modulation:**
- Filter envelope modulates its own decay (`+50`)
- Pitch envelope affects noise sample pitch (positive/negative)
- OSC 3: White or pink noise at < `10` mix level, or resonant 4K noise with envelope control

**Attack enhancement:**
- OSC 2: Saw wave pitched above triangle for impulse perturbance
- Amp Feedback: Gradually increase for aggression
- Separate envelope for OSC 3 noise attack shaping

### Bass Drums Part 2

*Source: Stim's Recipes*

| Parameter | Value |
|---|---|
| OSC 4 (digital) | 130 Hz sine, pitch `-24` |
| OSC 3 (digital) | Kick sample ("Nice" recommended) |
| OSC 2 (analog) | Triangle, C3, mix 0/100, key follow OFF, wave reset ON |
| Pre/Post Filter | 20/80 ratio for digital oscillators |
| Pitch Env (OSC 2) | Decay `30`, Amount `127` |
| Aux Env 1 (OSC 2) | Decay `20`, Amount `127`, Delay `3` |
| Filter Env | Decay `20`, Amount `127` |

**Modulation routing:**
- LFO1 -> OSC 4 frequency: Triangle wave, rate `0`; map Amp Envelope to LFO1 Frequency in ModPaths for decay-dependent wobble
- LFO2 -> All OSC frequencies: Sawtooth (ramp-up), amount ~`80`, sync to quarter notes for rhythmic pumping

### Self-Resonating Kick Fine-Tuning

*Source: AdamXAudio (forum)*

- Use ADSR mode, assign Aux Env to LP Filter Cutoff with amount `1`-`2`
- Sustain parameter acts as fine-tuner for self-resonating frequencies
- Set LPF key tracking to `65`, turn cutoff fully down
- Route Aux Envelope (long peak time) or ADSR (0 attack/decay, full sustain) to LP Filter Cutoff
- Achieves lower filter frequencies beyond normal knob range
- Pushes digital oscillators past the `-24`/`+24` pitch limit

---

## Snare Drums

*Source: Stim's Recipes*

### Core Setup

| Parameter | Value |
|---|---|
| OSC 2 | Triangle wave, mix 0/100 |
| OSC 1 | Reserved for Filter FM (kept silent initially) |
| Wave Reset | OFF (for organic variation) |
| Key Follow | ON (enables pitch variation in 16 Tunings mode) |
| Pitch | ~200 Hz region (F2), tuned by ear |
| Pitch Env Decay | `40` |
| Pitch Env Amount | `10` |

### Noise Source

| Parameter | Value |
|---|---|
| Sample | "Resonant 4K" (pitchable noise) |
| Initial Mix Level | ~`60` (digital samples run hotter) |

### Filter

| Parameter | Value |
|---|---|
| Type | 2-pole (prevents resonant squeaks) |
| Resonance | `0` (starting point) |
| Cutoff | ~`40` |
| Filter Env Amount | Increase gradually |

### Separate Noise Control via Highpass

The critical technique: analog oscillator amplitude is hardwired to the main Amp envelope. To control noise independently:

- Aux Envelope 1 -> Highpass filter
- HP Env Amount: ~`90`
- Attack: Extended (smooth transient-to-noise transition)
- Decay: Shaped independently from main Amp envelope

### Advanced Modulation
- **Velocity -> envelope decay amounts** (harder hits sustain longer)
- OSC 1 FM: Introduce pulse wave for filter modulation
- Noise as modulation source on oscillator frequencies via ModPaths
- LFO to OSC frequencies, especially OSC 1 when used as FM source
- Minimal Amp feedback for transient "oomph"
- Enable roll feature for velocity-sensitive ghost rolls

### Velocity-Controlled Snare Rolls

*Source: RobH (forum)*

Route velocity to control amp + filter envelope amounts via the mod screen. This produces highly expressive snare rolls where dynamics shape both volume and brightness.

---

## Hi-Hats, Shakers, Zaps

*Source: Stim's Recipes*

### Shakers

- **Foundation**: Band-passed white noise. Try "4K Resonant Noise" sample with pitch envelope modulation.
- **Filter**: 2-pole preferred for natural results
- **Roll**: Quantize to 16ths initially
- **Tuning mode**: 16 Tunings for pitch variation and playability
- Key-track the filter and pitch envelope for playability
- Assign to one voice with short MIDI delay (dotted 8ths) for shuffle

### Hi-Hats

- Set Amp attack to `0` immediately
- **Metallic tone**: OSC 1 Triangle wave, map OSC 1 frequency to noise source in ModPaths, increase amount to maximum
- Mix with small amount of noise from digital oscillators
- Add touch of Amp Feedback for metallic boost
- **Assign to one voice** so hats cut each other (realistic open/closed behavior)
- Map envelope decay to FX slider for open/closed hat variation

### Preserving Noise Tails (Hi-Hats/Cymbals)

*Source: idm (forum)*

- Set OSC 2 pulse wave to `0%` (creates silence)
- Use Aux envelope to increase pulse above 0% via decay and amount parameters
- Route Aux envelope to modulate its own decay via mod matrix for punch control
- Creates punchy clicks for resonant noise-based hats while preserving noise tail

**LFO On/Off Switch variant:**
- Set pulse wave to ~`50%`
- Route LFO 1 to OSC 2 pulse width with amount `-127`
- Set LFO to square wave with slow rate to avoid mid-cycle retriggering

### Dual LFO White Noise Swoosh

*Source: Forum tips collection*

- Long-decay hats with muting
- Dual LFO lowpass routing at rates ~`44` and `78`
- Creates "white noise swoosh" effects

### Zaps

- Crank resonance on 24dB filter, open cutoff with fast envelope = Kraftwerk-style percussion
- Apply LFO to filter for bubbly textures
- ADSR mode creates big disco whooshes (process through reverb)

---

## Claps

*Source: Stim's Recipes*

The essence: several sounds offset by tiny amounts, differing in volume, pitch, and nuance.

### Oscillator Setup
- Load "Resonant 4K Noise" sample into OSC 3
- Pitch down to `-12` semitones

### Staggered Envelope Configuration

| Envelope | Destination | Delay | Decay | Velocity Amount |
|---|---|---|---|---|
| Amp (primary) | VCA | `0` | ~`20` | `127` |
| Pitch Env (1st crack) | VCA level | `5` | `20` | ~`30` |
| Aux-1 (2nd crack) | -- | `8` | `25` | `40` |
| Aux-2 (final crack) | -- | `11` | `30` | `20` |

### Alternative Clap Method

*Source: Forum tips collection*

- Aux 1 & 2 envelopes on the VCA with short decays
- Set Delay to `6`-`8` and `12`-`16` respectively for offset effect

---

## Cowbells

*Source: Stim's Recipes*

| Parameter | Value |
|---|---|
| OSC 1 | Square wave, 50% pulse width, ~540 Hz (D#6) |
| OSC 2 | Square wave, ~800 Hz (G#6), slightly detuned |
| Wave Reset | OFF (both) |
| Key Follow | OFF (both) |
| OSC Mix | Start at 0/100, blend in OSC 1 |
| LFO1 -> Pulse Width | Rate ~`30`, Amount ~`30` |
| Amp Env Decay | `100` |
| Amp Env Amount | `100` |
| Velocity Amount | ~`10` |
| Resonance | `0` |
| Cutoff | Close down, then increase with envelope |

**Modulation:**
- Self-modulate Amp envelope decay with positive amount
- HP filter to cut lowest frequencies
- Optional Filter FM and Amp feedback for added beef
- Chromatic playback: use "Note Number" source in ModPaths for key tracking

---

## Bells and Alien Idiophones

*Source: Stim's Recipes*

| Parameter | Value |
|---|---|
| OSC 1 & 2 | Triangle waveform |
| Harmonic bells | OSC 2 at C4, OSC 1 at C5 (one octave higher) |
| Inharmonic/church bells | OSC 2 at D#1, work upward |
| OSC 2 Detune | ~`30` (increase for more clangorous tone) |
| Amp Env Mode | AD (Attack-Decay) |
| Attack | `0` |
| Decay | `60` |
| Amp Env Amount | `100` |
| Self-mod Amp Decay | Positive amount ~`30` |
| LFO1 -> OSC 2 Freq | Random shape, amount `1`-`2` |
| Filter Type | 4-pole |
| Cutoff | `120` |
| Resonance | `0` initially |

- Gradually increase Filter FM for analog variants and glitchy textures
- Modulate filter with both LFO1 and LFO2
- Essential effects: Chorus, Reverb, Compressor

---

## Sub-Bass

*Source: Stim's Recipes*

| Parameter | Value |
|---|---|
| OSC 3 | 130.81 Hz sine sample |
| Pitch | `-24` |
| Attack | `40` |
| Sustain | Full |
| Release | `40` |
| Env Amount | `64` |
| Velocity Sensitivity | ~`32` |
| Cutoff | Wide open |
| Resonance | `0` |
| Pitch Env Attack | `26` |
| Pitch Env Decay | `60` |
| Pitch Env Amount | `10` |

- Optional: FM modulation using OSC 1 at low frequency, mix 0/100, for added harmonics
- Optional: Feedback in fixed level mode
- Design rationale: pure sine = one harmonic (fundamental). Felt more than heard. Layer beneath kicks.

---

## Donk Bass

*Source: Stim's Recipes*

| Parameter | Value |
|---|---|
| OSC 2 | Square wave, mix 0/100 |
| OSC 1 | Square wave, one octave above OSC 2 |
| Filter Type | 12dB (2-pole) |
| Cutoff | `40` |
| Resonance | `30` |
| LP KEY>FREQ | `15` |
| Filter FM (Audio Mod) | ~halfway |
| Feedback | Small amount (Fixed level mode) |
| Filter Env Decay | `60` |
| Filter Env Amount | `20`-`30` |
| Filter Env Velocity | Modest |
| Amp Env Amount | `32` |
| Amp Env Velocity | `64` |
| Pitch Env | Short duration, barely noticeable amount |

A bouncy bass where harsher frequencies are filtered out through FM synthesis using integer frequency ratios.

---

## House Bass

*Source: RobH (forum)*

- Patch file: HouseBass.syx (shared on forum)
- Distortion: ~1/4 turn (`9 o'clock` position)
- Set LP filter on a slider for live tweaking

---

## SID Sounds and Arpeggios

*Source: Stim's Recipes*

### SID-Style Techniques
- Replace sine with square wave in kick drums; adjust pitch envelope downward
- Modulate oscillator frequency with square LFO at high rates/amounts for snare/tom-like sounds
- Use "Resonant 4K Noise" modulated through filter for hi-hat synthesis
- Map noise as modulation source on oscillator frequency via ModPaths

### Fake Chord Arpeggios

| Interval | Semitones | LFO Amount |
|---|---|---|
| 1 semitone | 1 | `8` |
| Tritone | 6 | `48` |
| Power chord (fifth) | 7 | `56` |
| 1 octave | 12 | `96` |
| Total range | 16 semitones | `128` (max) |

**Setup:**
- Single oscillator (triangle in OSC 1), ADSR mode
- Square wave LFO -> OSC 1 frequency
- Increase LFO rate and amount for classic arpeggio effect
- Modulate OSC 1/OSC 2 mix with LFOs for variation
- Modulate LFO rates with envelopes or velocity

### Stereo Width via LFO
- Square LFO -> voice pan at low amounts (~`10`)
- Increase rate until pleasing chorus effect emerges

---

## One-Voice Chords

*Source: Stim's Recipes*

Tune each of the 4 oscillators to a different pitch to create a chord from a single voice.

### Chord Reference (Semitone Intervals from Root)

| Chord | Intervals |
|---|---|
| Minor | 0, 3, 7 |
| Major | 0, 4, 7 |
| Diminished | 0, 3, 6 |
| Augmented | 0, 4, 8 |
| Major 7th | 0, 4, 7, 11 |
| Minor 7th | 0, 3, 7, 10 |

### Template Patch (Minor Chord)

| Oscillator | Tuning (semitones) |
|---|---|
| OSC 1 (analog) | +3 |
| OSC 2 (analog) | +10 (initially inaudible) |
| OSC 3 (digital, root) | +0 |
| OSC 4 (digital) | +7 |

- Digital oscillators are louder -- reduce to ~`50%` for balance
- Set envelope mode to ADSR with shortened decay
- Use **16 Tunings** mode so every key pressed plays the chord rooted at that note
- FX sliders control chord variations in real time: slider value of ~`4` = 1 semitone
- Use Slider 2 in bipolar mode to shift OSC 2 pitch +/- 1 semitone
- Note: FX sliders only work at note-on

---

## Pads and Drones

### Evolving Pad Technique

*Source: hardwarecore (forum)*

Use the delay parameter on each envelope to trigger assignable envelopes at different times. Combined with the 8 mod matrix slots, each delayed envelope can trigger several different parameters simultaneously. The mod matrix becomes a "painter's palette" for movement and nuance.

### Infinite Drones

*Source: Forum tips collection*

- Set amp envelope release to max
- Use Aux envelope on destination "Amp Env Release" with:
  - Decay: `127`
  - Amount: `-127`
  - Release: `127`

### Polyphonic Pad ("Pads of Patch")

*Source: RobH (forum)*

- Manually change LFOs to target VCA for sound variation
- Swap pan LFO to VCA duties
- Add slight reverb

---

## Mod Matrix Techniques

### Extended Filter Cutoff Range

*Source: AdamXAudio (forum)*

The LP filter knob has a limited range. To go beyond:
- Set LPF key tracking to `65`, turn cutoff fully down
- Route Aux Envelope (long peak time) to LP Filter Cutoff
- Or use ADSR with 0 attack, 0 decay, full sustain as a fine-tuning offset
- Achieves frequencies below the normal knob minimum

### Fake Compression

*Source: Forum tips collection*

Route Aux envelope to VCA level with **negative amount**. The envelope acts as an inverted ducking effect.

### Velocity-Controlled Sample Crossfade

*Source: Forum tips collection*

- OSC 3: Closed hi-hat sample
- OSC 4: Open hi-hat sample
- Route velocity to crossfade between them via mod matrix

### Aux Envelopes as Independent VCAs

*Source: Forum tips collection*

- Turn down OSC level first
- Use Aux envelope to control OSC level directly (it adds to the level parameter)
- Set different delays on each Aux envelope
- Modulate amounts with random LFOs for glitchy percussion

### Custom Arpeggiator via LFOs

*Source: Forum tips collection*

- Mix square LFOs at different rates routed to OSC pitch
- Synced to tempo subdivisions for rhythmic patterns

### Stereo Widening

*Source: Forum tips collection*

- LFO routed to pan at high rate (`120`+) creates a stereo widening effect

---

## FM Synthesis and Feedback

### UFO Takeoff / Self-Rising Filter

*Source: RobH (forum)*

**Variant 1 (pronounced):**

| Parameter | Value |
|---|---|
| OSC 1 | Pulse `91%` |
| OSC 2 | Off |
| Mix | 0/100 |
| LP Cutoff | `92` |
| Resonance | `88` |
| Audio Mod | `61` |
| HP Cutoff | `33` |
| Feedback Vol | `127` |
| Feedback | `109` |
| Amp Env | ADSR, maximum release |
| Best note | C1 |

**Variant 2 (psychedelic, lower notes):**

| Parameter | Value |
|---|---|
| LP Cutoff | `71` |
| Resonance | `64` |
| Audio Mod | `61` |
| HP Cutoff | `17` |
| Feedback Vol | `127` |
| Feedback | `95` |
| Best notes | C0, C1 |

The filter rises over time due to the interaction of audio modulation feedback and high-pass filtering.

---

## Humanization

### Random LFO Technique

*Source: RobH (forum)*

- Sync one LFO and set to note
- Set the random LFO clocked to quarters, 8ths, 16ths, or 32nds
- Route to pitch or VCA level
- Amount: `5` to `30` (keep it subtle)
- 8ths or 16ths sound best
- Use both LFOs simultaneously: one for pitch, one for volume
- Works especially well on hats, snares, and other frequent drums

---

## Troubleshooting: Clicks and Pops

### Causes
Clicks occur when a new note cuts off a previous waveform at a non-zero crossing point.

### Solutions

**muleskinner:** Adjust envelope release so the old note dies out before the new one triggers.

**LucidSFX:**
- Enable **Wave Reset** to ensure consistent zero-crossing starts
- Adjust filter envelope attack upward
- Lower filter envelope amount to smooth out the click

**RobH:** Slight attack values on envelopes usually removes any click. Confirms Wave Reset helps.

---

## Voice Assignment

*Source: InnerLoop / RobH (forum)*

**Problem:** Every 4th kick hit produces a wrong sound (e.g., triangle synth instead of kick).

**Solution:** Assign the kick drum pad to its own dedicated voice. Unassigned voices cause the Tempest's voice-stealing algorithm to rotate through voices unpredictably, causing artifacts.

---

## FX Slot Stacking

*Source: natrixgli (forum)*

Stack multiple drum sounds on different oscillators within a single voice:

- Snare on OSC 3
- Hi-hat on OSC 4
- Kick on OSC 1 (triangle wave with pitch envelope)
- Set all OSC levels to `0`
- Use FX1-3 sequencer slots to "trigger" each sound by controlling oscillator levels
- Frees remaining voices for synth/pad duties

**Caveat:** The 8-events-per-step limit is easily reached with this technique.

---

## Cymbal Creation

*Source: LucidSFX (forum)*

Dedicated thread with SYX files and samples available on the Dave Smith Instruments forum. Combines analog oscillators with sample layering for realistic metallic textures.

---

## Patch Collections

### Available Downloads (from forum thread)

| Collection | Description |
|---|---|
| Various Tempest Patches.zip | Comprehensive archive from old DSI forum (first post, login required) |
| TSDC_Final_Categories.zip | Tempest Sound Design Competition entries (2013) |
| SnareDesignRobH.syx | RobH's custom snare patch |
| HouseBass.syx | RobH's house bass with distortion |
| Burnt Neon & Funk Kit.syx | John the Savage's drum kits |
| Straight & Tight Kits.syx | John the Savage's drum kits |
| Yellow Rabbit "Vintage 1, 2, 3" | Classic synth patches (included in Various Tempest Patches.zip) |

### TR-606 / DR-110 Emulations

*Source: Leviathant (forum)*

Analyzed real TR-606 and DR-110 hardware, then emulated on Tempest. Documentation at: `http://bitrotten.com/tempest/`

### Factory Kits Worth Exploring
- Tight Kit
- Straight Kit
- Funk Kit
- TR808 clone (in archive)

---

## External Resources

### Stim's Tempest Recipes (redirected to noisylittlebugger.net)

1. [First Things First](http://noisylittlebugger.net/2012/02/19/tempest-recipes-first-things-first/)
2. [Bass Drums Part I](http://noisylittlebugger.net/2012/02/20/tempest-recipes-bass-drums-part-i/)
3. [Cowbells](http://noisylittlebugger.net/2012/02/21/tempest-recipes-cowbells/)
4. [SID Sounds](http://noisylittlebugger.net/2012/02/23/tempest-recipes-sid-sounds/)
5. [1-Voice Chords](http://noisylittlebugger.net/2012/02/26/tempest-recipes-1-voice-chords/)
6. [Hi-Hats, Shakers, Zaps](http://noisylittlebugger.net/2012/03/04/tempest-recipes-hi-hats-shakers-zaps/)
7. [Snare Drums](http://noisylittlebugger.net/2012/03/31/tempest-recipes-snare-drums/)
8. [Tom Toms](http://noisylittlebugger.net/2012/04/02/tempest-recipes-tom-toms/)
9. [Apito Whistle](http://noisylittlebugger.net/2013/01/14/tempest-recipes-apito-whistle/)
10. [Donk Bass](http://noisylittlebugger.net/2013/01/15/tempest-recipes-donk-bass/)
11. [Sub-Bass](http://noisylittlebugger.net/2013/01/16/tempest-recipes-sub-bass/)
12. [Bass Drums Part 2](http://noisylittlebugger.net/2013/01/18/tempest-recipes-bass-drums-part-2-2/)
13. [Congas](http://noisylittlebugger.net/2013/01/21/tempest-recipes-congas/)
14. [Tuned Woods / Sidesticks](http://noisylittlebugger.net/2013/02/01/tempest-recipes-tuned-woods-sidesticks/)
15. [Bells and Alien Idiophones](http://noisylittlebugger.net/2013/02/06/tempest-recipes-bells-and-alien-idiophones/)
16. [Claps](http://noisylittlebugger.net/2013/02/19/tempest-recipes-claps/)

### Forum Thread Pages

- [Page 1](https://forum.sequential.com/index.php?topic=34.0)
- [Page 2](https://forum.sequential.com/index.php?topic=34.20)
- [Page 3](https://forum.sequential.com/index.php?topic=34.40)
- [Page 4](https://forum.sequential.com/index.php?topic=34.60)

### Other Links

- [Leviathant's TR-606/DR-110 Emulations](http://bitrotten.com/tempest/)
- [John Bowen Solaris](http://www.johnbowen.com/solaris-overview.html) (answer to forum security question for old DSI forum access)

---

## Raw Tips from Forum First Post (Unofficial Forum)

*Source: DSI/Sequential forum topic 34, first post by user compiling community tips*

- **Wavetable sweep effect**: Turn OSC 2, 3, 4 off. Turn OSC Sync on. Use OSC1 frequency to change the timbre. OSC 2 continues to keep OSC1 in sync even when off.

- **Aux envs as additional VCAs for glitch**: Set up aux envs as additional VCAs, give them different delays, set amount to zero and modulate the amount with random LFOs. Instant glitchiness — works especially well with short sounds. Extra fun if you also modulate all the decays.

- **Controlling digital osc independently**: If you want medium/long decay for analog oscillators and only a quick click from digital ones, set main amp envelope decay to medium/long. Set aux envelope 1 or 2 destination to OSC 3 or 4 level with short decay.

- **Aux envelope controlling OSC level**: If using an Aux envelope to control Level of OSC 3 or 4, turn down the level of the OSC first, then use the Aux envelope to control it directly since it adds to the level parameter.

- **One-voice chords reminder**: With 4 oscillators, create a chord with one voice by tuning each osc to a different pitch.

- **Clap trick (staggered envelopes)**: Use aux 1 & 2 envelopes on VCA with short decays (also short decay on main AMP envelope). Set Delay parameter on Aux 1 to about 6-8, and 12-16 on Aux 2. Gives illusion of multiple slightly offset claps occurring a few ms apart.

- **Stereo widening via LFO**: Route an LFO to pan at high rate (120+) for a stereo widening effect. Can be extreme or soft. Use an envelope routed to the LFO amount for animated widening.

- **303-style slides**: Set synth voice to mono (assign to a voice). Write a cool sequence with short decay/percussive sound. Go into step edit mode and stick in extra notes set to reverse. They'll slide into the next note but immediately be cut off when the next note triggers.

- **DIY arpeggiator (the "Tangerine Dream" trick)**: Mix two square LFOs at different rates and different amounts to Osc All Pitch. Experiment with rates that are subdivisions of master tempo — like one at 16th note sync and the other at quarter note. Tune using amount for traditional arpeggiator/analog sequencer behavior. Route same LFOs to other parameters via the 8 mod paths — you get living, breathing sequences with all sorts of stuff changing in sync. Route slider positions to LFO amount for a pitch-playable arpeggiator.

- **Velocity crossfade between two samples**: Set OSC 3 and 4 to two different samples (e.g. closed hat, open hat). Set OSC 3 level to max, OSC 4 to off. Set Amp Env amount to max. In mod matrix: Velocity → +127 → Osc 4 Level, and Velocity → -127 → Osc 3 Level. In 16 Levels mode, pad 1 (min velocity) plays only OSC 3, pad 16 (max velocity) plays only OSC 4. Variation: use arp and LFOs to control the split.

- **White noise swoosh**: On a hat sound with long attack and long decay, set both LFO destinations to Lowpass and alternate the rates (e.g. 44 and 78). Go into Mute mode, with a beat playing turn your hi hats off. You get that "white noise swoosh" sound heard on many tracks.

## Raw Tips from Forum First Post (Official Forum)

- **Evolving pads with delayed envelopes**: Tempest's delay parameter for each envelope + deep mod assignment lets you trigger assignable envelopes at different times. Combine with 8 mod matrix slots — have each delayed envelope trigger several different parameters affecting other parameters. Have LFO amount/rate go random midway through, have LFO start modulating completely different parameters halfway through.

- **Fake per-sound compressor**: Set one aux env to modify VCA level by a negative amount. Use the mod matrix to change the compressor curve by modulating the env by itself.

- **Infinite drones (sound plays forever until retriggered)**: Set amp envelope how you'd like, set release to max. Use an aux envelope on destination Amp Env Release with settings: Decay 127, Amount -127, Release 127. Sound goes on forever until retriggered or interrupted by voice steal/choke. Works great on synth pads set to 1 voice. Make sure lowpass envelope doesn't close the filter — apply same routing to filter to keep it steady at release.

## Stim's Recipes Complete Link List

1. [First Things First](http://noisylittlebugger.net/2012/02/19/tempest-recipes-first-things-first/) — approaching drum synthesis
2. [Bass Drums Part 1](http://noisylittlebugger.net/2012/02/20/tempest-recipes-bass-drums-part-i/) — 808/909 guides
3. [Cowbells](http://noisylittlebugger.net/2012/02/21/tempest-recipes-cowbells/)
4. [SID Sounds](http://noisylittlebugger.net/2012/02/23/tempest-recipes-sid-sounds/) — crunchy arpeggiator
5. [1-Voice Chords](http://noisylittlebugger.net/2012/02/26/tempest-recipes-1-voice-chords/)
6. [Hi-Hats, Shakers, Zaps](http://noisylittlebugger.net/2012/03/04/tempest-recipes-hi-hats-shakers-zaps/)
7. [Snare Drums](http://noisylittlebugger.net/2012/03/31/tempest-recipes-snare-drums/)
8. [Tom Toms](http://noisylittlebugger.net/2012/04/02/tempest-recipes-tom-toms/)
9. [Apito Whistle](http://noisylittlebugger.net/2013/01/14/tempest-recipes-apito-whistle/)
10. [Donk Bass](http://noisylittlebugger.net/2013/01/15/tempest-recipes-donk-bass/)
11. [Sub-Bass](http://noisylittlebugger.net/2013/01/16/tempest-recipes-sub-bass/)
12. [Bass Drums Part 2](http://noisylittlebugger.net/2013/01/18/tempest-recipes-bass-drums-part-2-2/)
13. [Congas](http://noisylittlebugger.net/2013/01/21/tempest-recipes-congas/)
14. [Tuned Woods, Sticks and Clicks](http://noisylittlebugger.net/2013/02/01/tempest-recipes-tuned-woods-sidesticks/)
15. [Bells and Alien Idiophones](http://noisylittlebugger.net/2013/02/06/tempest-recipes-bells-and-alien-idiophones/)
16. [Claps](http://noisylittlebugger.net/2013/02/19/tempest-recipes-claps/)

---

## Maintenance Tips

*Source: CHROMATIC (forum)*

If sysex uploads fail after an OS update:
1. Update Tempest OS to latest firmware
2. Format the flash drive (empty it)
3. Calibrate pads
4. Calibrate oscillators
5. Then retry loading .syx files

**Sysex transfer tool**: Use Elektron's C6 sysex utility (recommended over MIDI-OX which can cause freezing on OS 1.4+).
