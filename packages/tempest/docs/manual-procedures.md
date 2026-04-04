# DSI Tempest - Complete Operational Procedures Reference

Extracted from the Tempest Operation Manual v1.4 (Feb 2015).
Every step-by-step procedure, button press, knob interaction, and display state documented.

---

## 1. Navigation

### Switching Pad Function Modes

The six Pad Function modes determine what the 16 pads control. The four Pad Function buttons are arranged in a diamond:

| Button Combo | Mode |
|---|---|
| 16 BEATS (top-left) | Pads play 16 Beats in memory |
| 16 SOUNDS (bottom-left) | Pads play 16 Sounds in selected bank (A or B) |
| 16 TIME STEPS (top-right) | Pads represent 16 time steps for step programming |
| 16 MUTES (bottom-right) | Pads act as mute switches for 16 Sounds |
| 16 BEATS + 16 TIME STEPS (both top) | 16 TUNINGS - pads play selected sound at 16 tunings |
| 16 SOUNDS + 16 MUTES (both bottom) | 16 LEVELS - pads play a single Sound at 16 velocity levels |

**To enter 16 Tunings:** Press both 16 BEATS and 16 TIME STEPS simultaneously.
**To enter 16 Levels:** Press both 16 SOUNDS and 16 MUTES simultaneously.

### Switching Screen Modes

The Screens section has five keys arranged in a diamond plus center:

| Key | Display |
|---|---|
| PLAY LIST (top-left) | Play List screen - toggles Play List mode on/off |
| EVENTS (top-right) | Beat Events grid (if Play List off) or Play List Events (if Play List on) |
| PADS (left) | 2x8 matrix showing pad assignments - content varies by Pad Function mode |
| SOUNDS (right) | Sound parameter screens (16 screens, navigate with arrow keys) |
| MIXER (bottom, press PADS + SOUNDS together) | Mixer screens (4 screens, navigate with Page Up/Down) |

### Navigating Sound Parameter Screens

1. Press the SOUNDS key in the Screens section.
2. Use the four arrow keys (LEFT, RIGHT, UP, DOWN) to move between the 16 sound parameter screens.
3. The screens are arranged in a grid - arrows move between them spatially.

**Screen layout (navigated with arrow keys):**
- **Row 1:** OSC1 (Shape, 1/2 Mix, Frequency, Fine Freq) -> OSC1 (Glide, Sync 2>1) -> OSC1 (Glide Mode, Key Follow, Wave Reset)
- **Row 2:** OSC3 (Sample/Noise, Level, Frequency, Fine Freq) -> OSC3 (Glide, Reverse) -> OSC3 (Pre/Post Filter, Glide Mode, Key Follow)
- **Row 3:** Filters (LP Freq, Resonance, Audio Mod, HP Freq) -> Filters (LP Key>Freq) -> Filters (HP Key>Freq)
- **Row 4:** Fdbk/VCA (Volume, Feedback)
- **Row 5:** Pitch Env (Attack, Decay, Amount, Peak) -> Pitch Env (Sustain, Release, Vel Amt) -> Pitch Env (Delay, Destination)
- **Row 6:** LFO1 (Shape, Rate, Amount, Destination) -> LFO1 (Sync, Destination)
- **Row 7:** Mod Paths (Source, Amount, Destination for Mod1-Mod8)
- **Row 8:** Misc (Choke 1, Choke 2, Voice Assign, Pitchbend Amt)

### Navigating Mixer Screens

1. Press PADS and SOUNDS together (or select MIXER in the Screens section).
2. Use PAGE UP and PAGE DOWN keys to switch between the four mixer screens:
   - **Screen 1:** Volume, Pan, Mute, Solo for each sound pad
   - **Screen 2:** Delay Amount, Delay On/Off for each sound pad
   - **Screen 3:** Delay Repeats, Delay Time
   - **Screen 4:** Distortion, Compression (Comp/Dist)

### Navigating the Beat Events Screen

1. Press EVENTS key in the Screens section.
2. **Display:** 4x16 grid showing 4 Sounds (rows) x 16 time locations (columns). Rectangles indicate note events; height indicates velocity.
3. **Soft Knob 1 (Row):** Select which 4 sounds are displayed. Turn past top/bottom to scroll to reveal higher/lower sound pads.
4. **Soft Knob 2 (Column):** Select a time location. Shows bar.beat.tick in the Soft Knob 2 area.
5. **PAGE UP / PAGE DOWN:** View previous or next block of 16 time locations.
6. **SHIFT + Soft Knob 1 (Assign Row):** Reassign the selected row to any of the 32 sound pads.
7. **SHIFT + Soft Knob 2 (Loop Screen):** If on, the time steps shown on screen play in a loop (useful for fast editing). The circular Loop Screen icon appears.
8. **SHIFT + Soft Knobs 3&4 (Quantize & Swing):** Sets the time resolution of the grid (8th notes to 32nd triplets). Triplet values show 12 columns instead of 16.

### Selecting a Pad Without Hearing It

- Hold SHIFT and press the desired pad to select it silently (for editing without triggering sound).
- **Note:** System setting "Select Sound behavior" (Shift On + Pad vs. Shift Held + Pad) determines whether SHIFT must be held down or just toggled on.

### Using the SHIFT Key

SHIFT accesses alternate functions printed below many controls. Hold SHIFT while turning a knob or pressing a button to access the alternate function.

---

## 2. Sound Selection & Loading

### Selecting a Sound for Editing

1. Press 16 SOUNDS in the Pad Function section.
2. Press a pad to select and hear its Sound.
3. To select without hearing: Hold SHIFT + press pad.
4. The sound controls in the upper half of the panel now apply to the selected sound.

### Switching Sound Banks (A and B)

- Press SOUND BANK B in the Pad Options section to toggle between Bank A (pads A1-A16) and Bank B (pads B1-B16).
- Each Beat contains 32 Sounds total: 16 in Bank A, 16 in Bank B.

### Browsing Sounds by Category

1. In the PAD FUNCTION section, press 16 SOUNDS.
2. In the SCREENS section, press PADS.
3. Tap the pad to which you want to assign a sound.
4. **Display shows:** Quant, Swing, Sound Type (Soft Knob 3), Load Sound (Soft Knob 4).
5. Turn Soft Knob 4 (LOAD SOUND) to scroll through sounds in the current category.
6. Turn Soft Knob 3 (SOUND TYPE/SOUND FOLDER) to select a different category (Kick, Snare, HhOpn, TomHi, TomMid, TomLo, etc.).
7. Turn Soft Knob 4 (LOAD SOUND) again to select a specific sound within that category.
8. Repeat for additional pads as desired.

### Loading a Sound from the Pads Screen (Quick Load)

1. Press 16 SOUNDS, then press PADS in the Screens section.
2. Strike a pad to select it.
3. Turn the LOAD SOUND soft knob (Soft Knob 4) clockwise to load the first available Sound for the current Sound directory.
4. Continue scrolling through the list to audition different Sounds.
5. Use the SOUND DIRECTORY soft knob to change to a different directory of Sounds.
6. Press the REVERT soft key to revert to the saved Sound.

**Warning:** REVERT is available until another pad is struck in 16 Sounds mode, or any other Pad Function mode is selected. Once another Sound pad is struck, REVERT becomes unavailable. To return to saved settings, reload the file. REVERT SOUND always resets to the last loaded or saved setting of the Beat.

### Loading a Sound from Flash (Full Procedure)

1. In 16 SOUNDS mode, tap a pad to choose the destination Sound.
2. Press SAVE/LOAD, choose Load File (Sound/Beat/Project), and press the NEXT Soft Key.
3. Choose the Type (Sound), Folder, and File, and press the NEXT Soft Key.
4. The selected destination Beat and Sound are displayed, and can be changed if desired.
5. Press the LOAD NOW Soft Key.
6. Press the AGAIN Soft Key to load another file or SAVE/LOAD to exit.

**Warning:** The Sound is loaded into the destination pad. Any unsaved edits to the previous Sound will be lost. Press SAVE/LOAD again at any time prior to pressing LOAD NOW to cancel.

### Undo Sound / Revert Sound

- Press SHIFT + UNDO SND to restore the selected sound to its last loaded or saved status, undoing any edits since then.
- Alternatively: If both 16 SOUNDS (Pad Function) and SOUNDS (Screens) are selected, the soft key shows REVERT SND. Pressing it performs the same function as SHIFT + UNDO SND.

---

## 3. Beat Operations

### Selecting a Beat

1. Press 16 BEATS in the Pad Function section.
2. Press a pad (1-16) to select and start playing that Beat.
3. One beat pad is always selected (dimly lit). The playing beat pad is brightly lit.

### Starting and Stopping Playback

- Press PLAY to start playing the selected Beat.
- Press STOP to stop playback.
- While playing, press a different beat pad to switch to that Beat.

### Beat Quantize (Smooth Beat Switching)

- When switching between beat pads while playing, the transition can be quantized (delayed until the next bar, half note, etc.).
- In 16 BEATS mode with PADS screen lit: Turn Soft Knob 1 (BT QUANT) to set the quantize boundary.
- Options include: Off (immediate switch), or various note values.
- Set to "Off" for immediate beat switching.

### Adjusting Swing

- In 16 BEATS or 16 SOUNDS mode with PADS screen: Turn Soft Knob 2 (SWING).
- Range: 50% (straight 1/16s) to 66% (triplet swing) to 75% (extreme swing).
- 54-58% gives a relaxed 16th note feel.

### Beat Roll (Stutter Effect)

- In 16 BEATS mode with PADS screen: Hold the ROLL key for a Beat Roll.
- Soft Knob 4 (BEAT ROLL) controls the duration: 8th note, etc.
- The beat stutters, looping a small portion of the beat loops.
- The Roll key is normally momentary (on while held). A quick press toggles between on and off states.

### Pad Hold

- In 16 BEATS mode with PADS screen: The soft key shows "Pad Hold: Off/On".
- If on, beats play only as long as you hold a beat pad. The PLAY key is also momentary.

### Creating a Beat (Real-Time Recording)

1. Press 16 SOUNDS to enter Sounds mode.
2. Press RECORD to arm recording (RECORD light comes on).
3. Press PLAY to start playback with recording active.
4. Play the pads in time with the beat. Notes are recorded at the velocity and timing you play.
5. The Quantize setting (Soft Knob 1 in 16 SOUNDS/PADS screen) determines how recorded notes are snapped to the grid (8th, 16th, etc.). Set to "Off" for unquantized recording.
6. Press RECORD again to stop recording (RECORD light goes off). Playback continues.
7. Press STOP to stop playback.

### Step Programming a Beat

1. Press 16 TIME STEPS in the Pad Function section.
2. Select the sound you want to program: Hold SHIFT + press the pad of the desired sound in the 16 SOUNDS screen. Or use the PADS screen and note the sound assignments.
3. The 16 pads now represent 16 time steps within the beat.
4. A lit pad indicates a note exists at that time step; an unlit pad means no note.
5. Press a pad to toggle a note on/off at that time step. The note is inserted at the velocity level at which the pad was struck.
6. **Display (PADS screen):** Shows time locations in Bar.Beat.Tick format for each of the 16 pads.
7. Soft Knob 1 (QUANTIZE) sets the Time Step size (8th notes through 32nd triplets).
8. Soft Knob 2 (SEE) scrolls through sequential time blocks within the beat.
9. **Tip:** View the Beat Events screen (press EVENTS) while step programming for more detail.

### Step Programming with the Beat Events Screen

1. Press EVENTS to display the Beat Events screen.
2. The grid shows 4 rows (Sounds) x 16 columns (time locations).
3. **Soft Knob 1 (Row):** Select the row/Sound.
4. **Soft Knob 2 (Column):** Select the time location.
5. **Soft Key (Insert/Delete):** If no note exists at the selected cell, pressing the soft key inserts a new note. If a note exists, pressing deletes it.
6. To edit a note's parameters: Use Soft Knob 3 (SELECT PARAM) to choose the parameter (Velocity, Duration, Tuning, FX1-FX4, Time Shift, Reverse).
7. Use Soft Knob 4 to edit the selected parameter's value.
8. The selected parameter's value appears in the Soft Knob 4 area of the display.

### Loading a Beat from Flash

1. In 16 BEATS mode, tap a pad to select the destination Beat.
2. Press SAVE/LOAD, choose Load File (Sound/Beat/Project), and press the NEXT Soft Key.
3. Choose the Type (Beat), Folder, and File, and press the NEXT Soft Key.
4. Choose the Beat Load Option:
   - **Normal** -- All Beat data loaded
   - **Sounds + Mixer** -- Only Sounds and mixer settings loaded
   - **Sounds Only** -- Only Sounds loaded (use any Beat file as a "sound kit")
   - **Sequencer + Note FX** -- Only sequence and Note FX loaded
   - **Beat FX** -- Only Beat FX settings loaded
5. The selected destination Beat is displayed, and can be changed if desired.
6. Press the LOAD NOW Soft Key.
7. Press the AGAIN Soft Key to load another file or SAVE/LOAD to exit.

**Warning:** Any unsaved edits to the previous Beat will be lost. Press SAVE/LOAD again at any time prior to pressing LOAD NOW to cancel.

**Note:** There are no separate "Sound Kit" or "Drum Kit" files. Instead, you can load only the sounds from any Beat file using the "Sounds Only" option. Any Beat file can serve as a sound kit file.

---

## 4. Project Management

### Loading a Project

1. Press SAVE/LOAD, choose Load File (Sound/Beat/Project), and press the NEXT Soft Key.
2. Choose the Folder and File, and press NEXT.
3. Press the LOAD NOW Soft Key to load the Project.
4. Press the AGAIN Soft Key to load another file or SAVE/LOAD to exit.

**Warning:** Loading a Project replaces all Sounds and Beats in RAM with the Sounds and Beats in the Project. Press SAVE/LOAD again at any time prior to pressing LOAD NOW to cancel.

**Note:** Only one Project can be loaded at a time. The last Project saved is loaded by default on power up.

### Saving a Project to Flash

1. Press SAVE/LOAD, choose Save Project, and press the NEXT Soft Key.
2. Select the destination Projects folder.
3. Enter the Project name using the EDIT FILENAME Soft Knob to choose characters and the LEFT and RIGHT cursor keys to move the cursor. Press the NEXT Soft Key.
4. Press the INSERT CHAR Soft Key to insert a blank space before the cursor. Press the DELETE CHAR Soft Key to delete the highlighted character.

**Warning:** If the Project file name already exists, you will be warned that you are about to overwrite the existing Project file.

5. Press the SAVE NOW Soft Key.

**Note:** Projects are saved to one of 10 Project folders in Tempest's flash memory. They can also be exported and saved as system exclusive MIDI data.

### Initializing a Project (Edit Function 12)

1. Hold ERASE + COPY to enter the Edit Function menu.
2. Turn Soft Knob 1 to select item 12: "Initialize Project."
3. Press the Soft Key to select it.
4. Press the INIT NOW soft key to perform the initialization.

**WARNING:** This initializes the entire Project in RAM memory, erasing all 16 Beats and all of their Sounds, and resetting them to default settings!

---

## 5. Recording

### Real-Time Recording

1. Press 16 SOUNDS in the Pad Function section.
2. Press RECORD to arm recording.
3. Press PLAY to start playback/recording.
4. Play the pads to record notes. Velocity and timing are captured.
5. Quantize setting (Soft Knob 1 in PADS screen) determines grid snapping.
6. Press RECORD again to stop recording. Playback continues.
7. Overdub: Keep RECORD on and play additional parts over the existing sequence.

### Recording with Count-In

- System Setting > General > "One bar count in": Off, On, Record Only.
- **On:** One bar of metronome clicks plays before recording or playback begins.
- **Record Only:** Count in only plays before recording.
- **Note:** Count in does not play when syncing to an external MIDI clock.

### Recording with Click (Metronome)

1. Press CLICK in the Rec/Edit section to toggle the metronome on/off.
2. Click volume is adjustable in System > General > "Click Level" (1-127).

**Note:** The Click uses one of the voices. After you have a couple of sounds recorded, you can turn it off if not needed.

### Undo Recording

- If the UNDO REC light is on, there is something to undo.
- Press UNDO REC to undo all recording changes made during the last recording pass (since the moment you started playing with REC on). The light turns off.
- Press UNDO REC a second time to REDO (restore what was removed). This is a single-level undo.
- SHIFT + UNDO REC invokes UNDO SOUND: restores the selected sound to its last loaded or saved status.

### Recording Note FX (Real-Time FX Sliders)

1. Select 16 SOUNDS pad function.
2. Press a sound pad repeatedly while moving your finger on one of the Real Time FX sliders.
3. The sound changes as you move the slider.
4. If PLAYBACK is on (Note FX mode), slider movements affect the notes of the selected sound pad that play back from the beat.
5. If RECORD is on while recording, the slider values at the moment the pad is played are recorded into the new note as Note FX parameters.
6. These parameter changes will be heard when the Beat plays back.

### Recording Reverse Notes

- While recording a Beat in 16 SOUNDS mode, turning REVERSE on will record and play notes in reverse.
- Reverse can also be programmed as a Note Event parameter in the Beat Events screen on a per-note basis.

### Erasing Notes While Playing

1. Press 16 SOUNDS.
2. Turn RECORD on and press PLAY.
3. Hold both SHIFT and ERASE, then during the time that the notes should be erased, also hold the sound pad for those notes.

---

## 6. Sound Editing

### Overview of Sound Parameters

There are 16 Sound parameter screens accessed via the SOUNDS key in the Screens section. Navigate with the four arrow keys. Each screen shows 4 parameters controlled by the 4 soft knobs.

### Oscillator 1 & 2 (Analog) Parameters

**Screen: OSC1 Main**
- Soft Knob 1: SHAPE (Osc Off, Sawtooth, Triangle, Saw-Tri, Pulse 0%...Pulse 99%)
- Soft Knob 2: OSC 1/2 MIX (100/0...0/100 -- mix of Osc 1 and 2)
- Soft Knob 3: FREQUENCY (C0...C10 -- base oscillator frequency in semitones, 10-octave range)
- Soft Knob 4: FINE FREQ (-50...+50 -- fine tune in cents, 50 cents = 1/2 semitone)

**Screen: OSC1 Extended**
- Soft Knob 1: SUB OSC (0...127 -- level of square wave one octave below Osc 1)
- Soft Knob 2: OSC SLOP (0...5 -- random oscillator frequency tuning slop)

**Screen: OSC1 Glide/Key**
- Soft Knob 1: GLIDE MODE (FixRate, FixRate A, FixTime, FixTime A)
- Soft Knob 2: KEY FOLLOW (Off, On -- keyboard tracking for oscillator)
- Soft Knob 3: WAVE RESET (Off, On -- when on, oscillator restarts at zero crossing each note)

**Sync 2>1:** Off, On -- hard sync, oscillator 2 resets force oscillator 1 to restart.

**Glide:** 0...127 -- portamento rate. Low values = faster.

### Oscillator 3 & 4 (Digital) Parameters

**Screen: OSC3 Main**
- Soft Knob 1: SAMPLE (Off, sample name 1, sample name 2, ... -- selects from hundreds of sampled sounds)
- Soft Knob 2: LEVEL (0...127 -- volume level of oscillator 3 or 4)
- Soft Knob 3: FREQUENCY / PITCH (-24...+24 -- pitch offset in semitones)
- Soft Knob 4: FINE FREQ (-50...+50 -- fine tune in cents)

**Screen: OSC3 Extended**
- Soft Knob 1: GLIDE (0...127)
- Soft Knob 2: REVERSE (reverses sampled waveform playback)

**Screen: OSC3 Filter/Glide**
- Soft Knob 1: PRE/POST FILTER (0...127 -- 0 = all through filters, 64 = equal mix, 127 = bypass filters entirely)
- Soft Knob 2: GLIDE MODE (FixRate, FixRate A, FixTime, FixTime A)
- Soft Knob 3: KEY FOLLOW (Off, On)

**Note:** Noise types are fixed pitch and do not transpose from the PITCH control, pads, or MIDI.

### Lowpass Filter Parameters

**Panel Controls:**
- FREQUENCY knob: 0...164 -- cutoff frequency, 13+ octave range, steps in semitones
- RESONANCE knob: 0...127 -- emphasis around cutoff. High resonance in 4-pole mode can self-oscillate.
- AUDIO MOD knob: 0...127 -- amount of Osc 1 audio modulating filter cutoff (for FM sounds)

**Display Parameters (Filters screen):**
- 4 POLE: On/Off toggle -- On = 4-pole (-24dB/oct), Off = 2-pole (-12dB/oct)
- KEY > FREQ: 0...127 -- keyboard tracking amount. 64 = semitone tracking.
- AUDIO MOD: 0...127 -- filter FM amount from Osc 1

**FM Sound Design Tip:** For filter-only audio, set 1/2 Mix to 0/100, Osc 2 Shape to Off, Osc 1 Shape to desired waveshape, then use Audio Mod.

### Highpass Filter Parameters

- FREQUENCY knob: 0...127 -- 2-pole highpass cutoff. 0 = passes all frequencies.
- KEY > FREQ: 0...127 -- keyboard tracking for highpass filter.

### Amp (VCA) Parameters

- FEEDBACK knob: 0...127 -- left audio output feeds back into signal path pre-filter. 0 = no feedback. High values = fuzzy distortion to squealing.
- VOLUME: 0...127 -- pre-mixer volume of the current sound.

**Warning:** The feedback loop is taken from the left output, so pan settings and modulation affect feedback behavior. Turn down monitors while tweaking feedback!

### Envelope Parameters

Tempest has five DAPDSR (delay/attack/peak hold/decay/sustain/release) envelope generators per voice.

**Envelope selector buttons:** Pitch, Lowpass, Amp, Aux1, Aux2

**AD Mode:** Off/On toggle. When on, only Attack and Decay portions are used (percussive mode).

**Parameters per envelope:**
- DELAY: 0...127 -- delay before attack begins
- ATTACK: 0...127 -- attack time
- PEAK: 0...127 -- peak hold time (holds at peak before decay begins, adds punch)
- DECAY: 0...127 -- decay time
- SUSTAIN: 0...127 -- sustain level (no effect in AD Mode)
- RELEASE: 0...127 -- release time (no effect in AD Mode)
- AMOUNT: -127...127 -- modulation amount to destination (negative = inverted). Amp envelope is 0-127 only.
- VELOCITY AMOUNT: 0...127 -- how much pad velocity modulates the envelope amount
- DESTINATION: Off, mod destination 1, 2, ... -- for Pitch, Aux1, Aux2 envelopes

**Important interaction between Amount and Velocity Amount:**
- If AMOUNT is 127, VELOCITY AMOUNT has no effect (already maxed out).
- For velocity-sensitive sounds, use VELOCITY AMOUNT routed to the Amp envelope. Set the Amp envelope's VELOCITY AMOUNT to 127 and AMOUNT to around 32 to set the minimum volume for soft hits.

### LFO 1 & 2 Parameters

- LFO2 button: Off/On -- toggles which LFO the panel controls edit. Off = LFO 1, On = LFO 2.
- SHAPE: Triangle, Reverse Sawtooth, Sawtooth, Square, Random
- RATE: 0...162 -- speed. Below 90 = Hz values (slow). At 90 = 8 Hz (C-2). Above 90 = semitone steps up to 162 (523 Hz, C4).
- AMOUNT: 0...127 -- modulation depth to destination.
- DESTINATION: Off, mod destination 1, 2, ... -- see Modulation Destinations list.
- SYNC: Off/On -- when on, LFO syncs to beat tempo.

**When SYNC is On, RATE displays musical values:**

| Display | Meaning |
|---|---|
| 32 Qrtr | One LFO cycle lasts 32 quarter notes |
| 16 Qrtr | One LFO cycle lasts 16 quarter notes |
| 8 Qrtr | One LFO cycle lasts 8 quarter notes |
| 6 Qrtr | One LFO cycle lasts 6 quarter notes |
| 4 Qrtr | One LFO cycle lasts 4 quarter notes |
| 3 Qrtr | One LFO cycle lasts 3 quarter notes |
| 1/2 Note | One LFO cycle lasts 2 quarter notes |
| Qrtr Dot | One LFO cycle lasts 1.5 quarter notes |
| 1 Qrtr | One LFO cycle lasts 1 quarter note |
| Qrtr Trip | Two LFO cycles every three quarter notes |
| 8th | Two LFO cycles per quarter note |
| 8th Trip | Three LFO cycles per quarter note |
| 1/16 | Four LFO cycles per quarter note |
| 16th Trip | Six LFO cycles per quarter note |
| 32nd | Eight LFO cycles per quarter note |
| 64th | Sixteen LFO cycles per quarter note |

### Setting Up Free-Running LFOs

By default, LFOs restart on each note/beat/play command. To make them free-running:

1. In the SCREENS section, press the SOUNDS button.
2. In the LFO 1&2 section, press the LFO2 button on or off to display the parameters for the LFO you want to edit.
3. Press the Page Right (right arrow) soft button to display the RESTART parameter for the LFO's wave cycle.
4. Turn Soft Knob 4 (RESTART) and set the chosen LFO's wave cycle to OFF.
   - Choosing NOTE, BEAT, or PLAY causes the LFO to restart each time it receives the selected trigger.

**Important:** To use free-running LFOs, you must assign a sound to a voice:
1. Press 16 SOUNDS, then press SOUNDS in Screens.
2. Tap a pad to select the sound you want to assign to a voice.
3. Press the MOD PATHS button in the LFO section, then press Page Down once.
4. Turn Soft Knob 3 to assign the voice.

### Modulation Paths

Tempest has 8 general-purpose modulation paths per sound.

**To view/edit modulation paths:**
1. Press MOD PATH to display the settings for the current sound.
2. **Screen displays:** Edit Mod 1 through Mod 8, each with Source, Amount, Destination.

**Parameters per mod path:**
- SOURCE: Off, mod source 1, 2, ... (see Modulation Sources list, page 78)
- AMOUNT: -127...127 -- modulation depth (positive or negative)
- DESTINATION: Off, mod destination 1, mod destination + 2, ... (see Modulation Destinations, page 79)

**Tip:** Use SOURCE to route external MIDI controllers to Tempest's mod destinations.

### Setting Choke Groups

1. In 16 SOUNDS pad mode and SOUNDS edit mode, press SHIFT then MOD PATHS, or repeatedly press the Page Down or DOWN key, to navigate to the Misc screen.
2. Tap any pad to select a Sound.
3. Use the CHOKE 1 Soft Knob to choose the Sound/pad that will be choked whenever this sound plays.
4. If desired, use CHOKE 2 to specify a second choke Sound/pad.

**Use case:** Set a pedaled hi-hat to choke when a closed hi-hat plays, or vice versa.

### Assigning a Sound to a Specific Voice

1. In 16 SOUNDS pad mode and SOUNDS edit mode, press SHIFT then MOD PATHS, or repeatedly press the Page Down or DOWN key, to navigate to the Misc screen.
2. Tap any pad to select a Sound.
3. Use the VOICE ASSIGN Soft Knob to choose one of the six voices.

**Notes on Voice Assign:**
- By default, Tempest uses dynamic voice allocation (voices assigned on the fly).
- Assigning a Sound to a specific voice guarantees that voice won't be stolen by dynamically allocated voices.
- Multiple Sounds can share a voice (but will steal from each other).
- Assigning to a voice also assigns that Sound to the corresponding individual voice output jack on the rear panel. Inserting a plug removes that voice from the main outputs.
- Sounds with longer decays (crash, ride cymbals) benefit from voice assignment so they don't get cut off.

### Beat-Wide Parameters

When Pad Function is 16 BEATS, only 8 panel controls are active, and they affect ALL sounds simultaneously:

**The 8 Beat-wide parameters:**
1. Oscillator Pitch
2. Lowpass Frequency
3. Lowpass Resonance
4. Audio Mod
5. Highpass Frequency
6. VCA Feedback
7. Envelope Attack
8. Envelope Decay

**Display (SOUNDS screen in 16 BEATS mode):**
- **Screen 1 (Beat FX 1):** OSC Pitch, LP Freq, LP Reson, Audio Mod
- **Screen 2 (Beat FX 2):** HP Freq, Feedback, Env Attack, Env Decay

**REVERT Soft Key:** After any Beat-wide parameter is changed, this soft key appears. Pressing it reverts the beat playback to its original state before any controls were changed.

---

## 7. Mixer & Effects

### Accessing the Mixer

- Press PADS and SOUNDS together in the Screens section, or press the area between them (MIXER).
- Use PAGE UP and PAGE DOWN to navigate between the 4 mixer screens.

### Mixer Screen 1: Volume, Pan, Mute, Solo

**Display:** Shows Volume, Pan, Mute (Off), Solo (Off), and Pan (C = center) for each sound pad using small indicators.

- Soft Knobs or panel Mixer controls adjust per-sound Volume, Pan.
- MUTE button: Toggle mute for individual sounds.
- SOLO button: Toggle solo for individual sounds.

### Mixer Screen 2: Delay Amount and Delay On/Off

- Shows Delay Amount (Amt) and Delay On/Off for each sound pad.
- **Note:** Sounds must be velocity-sensitive for the delayed notes to have volumes other than full.

### Mixer Screen 3: Delay Repeats and Delay Time

- DELAY REPEATS: Sets number of delay repeats.
- DELAY TIME: Sets the delay time (displayed as a dotted note value, e.g., "1/8 Dot").
- These are beat-level settings (apply to the entire beat, not per-sound).

### Mixer Screen 4: Distortion and Compression

- DISTORTION: 0-127, the beat's distortion amount. Corresponds to the panel DISTORT knob.
- COMPRESSION: 0-127, the beat's compression amount. Corresponds to the panel COMPRESS knob.

### The Delay Feature

The Delay is a digital audio delay that creates additional delayed notes (not delayed audio). It keeps the entire signal in the pure analog path.

### Compressor Envelope

**To display the Compressor parameters:**
1. Press the SHIFT button and turn the COMPRESS knob.
2. Press the Page Down button to display the ENV TRIGGER parameter.
3. Turn Soft Knob 4 to select the sound that will trigger the compressor envelope.
4. Press the Page Up button to re-display the Compressor parameters and adjust them as desired.

**Compressor Envelope parameters:**
- ATTACK: 0...127
- PEAK HOLD: 0...127
- DECAY: 0...127
- AMOUNT: -127...127 (modulation from envelope trigger to compressor)
- ENVELOPE TRIGGER: Off, Sound A1...A16, Sound B1...B16 (sidechain source)

### Real Time FX: Beat FX Mode

Beat FX mode is active when Pad Function is 16 BEATS. The Real Time FX sliders alter beat-wide sound parameters.

**Keys:**
- PLAYBACK key: Always on in Beat FX mode.
- SHIFT + PLAYBACK (ASSIGN): Shows the Beat FX Assign screen for viewing/editing.
- LATCH ON: When on, sliders remain active at their last touched positions. When off, sliders are only active while touched.
- SHIFT + left LATCH ON: Toggles the left slider between FX1 and FX3.
- SHIFT + right LATCH ON: Toggles the right slider between FX2 and FX4.

**Beat FX Assign Screen (SHIFT + PLAYBACK):**
- Soft Knob 1 (Select Row): Choose one of 8 Beat FX mod paths.
- Soft Knob 2 (Source): Position +/- (bipolar, 0 at center), Position+ (0 at bottom), Pressure (for FX Sliders 1-4).
- Soft Knob 3 (Amount): -127 to 127.
- Soft Knob 4 (Destination): All Beat-wide sound parameters (All Osc Freq, Feedback, Lowpass Cutoff, Resonance, Audio Mod, Highpass Cutoff, All Env Attack, All Env Decay, Beat Roll On/Off).

**Important:** Beat FX slider movements are for live performance only and cannot be recorded.

### Real Time FX: Note FX Mode

Note FX mode is active when Pad Function is NOT 16 BEATS. The sliders alter a single sound's parameters and CAN be recorded into the Beat.

**Keys:**
- PLAYBACK: When on, slider movements affect notes of the selected sound that play back from the beat. When recording, slider movements are recorded into the played notes.
- SHIFT + PLAYBACK (ASSIGN): Shows the Note FX Assign screen.
- LATCH ON: Same as Beat FX mode.
- SHIFT + left/right LATCH ON: Same toggling between FX1/FX3 and FX2/FX4.

**Note FX Assign Screen:**
- Soft Knob 1 (Select Row): Choose one of 4 Note FX channels (within each note event).
- Soft Knob 2 (Source): Slider FX1-4 Position (positive or bipolar) or Slider FX1-4 Pressure.
- Soft Knob 3 (Amount): Effect amount.
- Soft Knob 4 (Destination): Per-voice modulation destinations (Osc Pitch, LP Freq, LP Reson, Env Decay, etc.).

**Note:** Each of the beat's 32 sounds has a unique set of 4 Note FX assignments. The ones displayed apply only to the selected sound.

---

## 8. Performance

### 16 Mutes Mode

1. Press 16 MUTES in the Pad Function section.
2. A lit pad indicates the Sound's playback is ON; an unlit pad means OFF.
3. Press a pad to toggle between on and off states.
4. Useful for live arrangement: mute/unmute parts in real time while playing.

**Display (PADS screen):**
- Shows the assigned Sound Type for each of the 16 loaded Sounds.
- Beat & Sound info is shown. To change the selected sound, hold SHIFT while pressing the pad that holds the desired sound in the 16 SOUNDS screen.
- Soft Knob 2 (SWING): Varies the selected Beat's swing.
- Soft Knob 4 (BEAT ROLL): Hold ROLL for a beat stutter effect.
- Soft Key (ALL ON): Press to unmute all 16 Sounds in the active bank.

**Note:** When 16 MUTES is selected, the Real Time FX sliders and sound controls affect beat-wide effects, just as when 16 BEATS is selected.

### 16 Tunings Mode (Playing Melodies)

1. Press 16 BEATS + 16 TIME STEPS simultaneously to enter 16 Tunings.
2. The 16 pads now play the selected sound at 16 different tunings.
3. Useful for playing tuned parts like bass or melody lines.

**Display (PADS screen):**
- Shows the tuning for each pad (note names: C2, D2, E2, F2, etc.).
- Soft Knob 2 (OCTAVE): Shift the tunings up or down in octaves (+/- Octave).
- Soft Knob 3 (ROOT): Select the root note of the scale (Root: C2, etc.).
- Soft Knob 4 (SCALE): Select a scale (Major, Minor, Chromatic, etc.).

**Note:** To change which sound plays at the 16 tunings, hold SHIFT while pressing the pad that holds the desired sound in the 16 Sounds screen.

### 16 Levels Mode

1. Press 16 SOUNDS + 16 MUTES simultaneously to enter 16 Levels.
2. The 16 pads play a single Sound at 16 evenly spaced velocity levels (8, 16, 24, 32, 40, 48, 56, 64, 72, 80, 88, 96, 104, 112, 120, 127).
3. Alternative to using pad touch sensitivity for recording dynamics.

**Display (PADS screen):**
- Shows the velocity level for each of the 16 pads.
- Soft Knob 1 (QUANTIZE): Sets quantize for recording.
- Soft Knob 2 (SWING): Sets swing amount.

**Note:** To change the selected sound, hold SHIFT while pressing the pad that holds the desired sound in the 16 Sounds screen.

### Roll (Repeated Notes)

**When Pad Function = 16 Sounds, 16 Tunings, or 16 Levels:**
1. Press ROLL in the Pad Options section (it lights up).
2. While playing, hold a sound pad. Repeated notes are created at the Quantize rate.
3. Varying pad pressure varies the velocity level of the repeated notes.
4. Use 1/32 or 1/32 Triplet quantize for rolls, or 1/16 note quantize for natural-sounding hi-hat parts.
5. The ROLL key is normally momentary (on while held). A quick press toggles between on and off states.

**When Pad Function = 16 Beats:**
- If ROLL is held, the beat stutters, looping a short portion until released.
- The roll rate is set by the Beat Roll setting in the 16 Beats screen.

### Roll with Arpeggiation

1. In the PAD FUNCTION section, press the 16 TUNINGS button (or 16 SOUNDS or 16 LEVELS, depending on your purpose).
2. In the SCREENS section, press the PADS button.
3. In the PAD OPTIONS section, press the ROLL button.
4. Use Soft Knob 3 (MODE:ASSIGN) to set the arpeggiator mode:
   - **Retrig:** Retriggers the sound on the pressed pad (original roll behavior)
   - **Up:** Plays from the lowest-numbered pad to the highest
   - **Down:** Plays from highest to lowest
   - **Up + Down:** Plays lowest to highest and back to lowest
   - **Assign:** Plays in the order the pads were pressed
   - **Random:** Plays in random order
5. Use Soft Knob 4 (OCTAVES) to set the arpeggiator's octave range (0, 1, 2).
6. Hold down multiple pads and press the ROLL button. The arpeggiation rate is controlled by the BPM knob.

**Note:** RETRIG is the default arpeggiator mode and is Tempest's original Roll behavior.
**Note:** OCTAVE RANGE applies to arpeggiated synth sounds, not drum samples.

### Reverse Playback

- Press REVERSE in the Pad Options section.
- **In 16 Sounds mode:** When REVERSE is on and you play a pad, the Sound plays in reverse (envelopes are reversed, samples play backwards).
- **In 16 Beats mode:** REVERSE causes all Sounds in a Beat to play in reverse, but the Beat itself does not play in reverse.
- Reverse works on completely analog, non-sample-based Sounds by reversing the envelopes.
- Reverse can be recorded into a Beat on a per-note basis.
- Reverse can also be set as a Note Event parameter in the Beat Events screen (SELECT PARAM > Reverse).

### Fixed Level

- Press FIXED LEVEL in the Pad Options section.
- When on, sounds always play at a fixed velocity level (set in System > General > "Fixed Level Velocity": 2-128).
- When off, pads are touch-sensitive (play louder when hit harder).

### Tap Tempo

- Default behavior: Hold SHIFT and press PLAY to tap the tempo.
- System setting "Tap Tempo behavior" can change this:
  - **Shift Held + Play:** Must hold SHIFT and tap PLAY (default).
  - **Shift On + Play:** SHIFT can be toggled on, then tap PLAY.

### Play Lists (Live Performance)

See section 3 (Beat Operations) for creating Play Lists. During performance:

1. Press PLAY LIST to turn on Play List mode.
2. Press PLAY to start the Play List.
3. The beats will play in the programmed sequence.
4. Play Lists can loop back to any step or stop at the end (set with the END soft knob).

---

## 9. System Setup

### Accessing System Settings

1. Press the SYSTEM button (below the OLED display).
2. **Display:** Shows a scrolling list of parameters with Select Line, Offset, and Category.
3. Use Soft Knob 4 to select the Category (General, Foot Pedals, MIDI Remote Pad Play, MIDI Polyphonic Keyboard Play, MIDI Clock, MIDI System Exclusive, BPM/Swing/Comp/Dist Sources, UI Preferences, System Actions).
4. Use Soft Knob 1 to select the Line (parameter) within the category.
5. Use Soft Knob 3 to adjust the Parameter Value (shown in the Offset column).

### System: General Settings

| # | Parameter | Range | Description |
|---|---|---|---|
| 1 | Master Transpose | -12...+12 | Transposes pitch of all voices in half-step increments |
| 2 | Fine Tune | -50...+50 | Transposes pitch in 1-cent increments (quarter tone = +/-50) |
| 3 | Click Level | 1...127 | Metronome click volume |
| 4 | One bar count in | Off, On, Record Only | Count-in bar before playback/recording |
| 5 | Fixed Level Velocity | 2...128 | Velocity used when Fixed Level is on |
| 6 | Pad Velocity Curve | 1...4 | Velocity response curve for the pads |
| 7 | Local Control | Off, On | On = pads trigger internal sounds. Off = pads only send MIDI |

### System: Foot Pedals

| # | Parameter | Range | Description |
|---|---|---|---|
| 1 & 3 | Pedal 1/2 Mode | Controller, Switch: Norm Closed, Switch: Norm Open | Input device type |
| 2 & 4 | Pedal 1/2 Assignment | See table | Function assignment |

**Pedal Assignments:**

| Assignment | Controller Use | Footswitch Use |
|---|---|---|
| Mod Source Pedal 1/2 | Expression pedal as mod source | Sequencer Start/Stop |
| Master Volume | Expression pedal controls master volume | Sequencer Start |

### System: MIDI Remote Pad Play

| # | Parameter | Range | Description |
|---|---|---|---|
| 1 | Remote Pad IN Channel | All, 1...16 | Incoming MIDI channel for pad triggering |
| 2 | Remote Pad OUT Channel | Off, 1...16 | Outgoing MIDI channel for pad data |
| 3 | Pad to Note Mode | Follow Pad Func, Sounds, Beats, Mutes | How incoming MIDI notes affect pads |
| 4-35 | MIDI Note: Pad A1-B16 | Any MIDI key | Assign MIDI note numbers to pads |

**Default MIDI Note mapping follows General MIDI standard drum mapping:**

| Note | MIDI Note | GM Instrument |
|---|---|---|
| A4 | 69 | Cabasa |
| F#3 | 54 | Tamborine |
| E2 | 40 | Electric Snare |
| D2 | 38 | Acoustic Snare |
| A#3 | 46 | Open Hi Hat |
| D3 | 50 | High Tom |
| B2 | 47 | Low Mid Tom |
| G2 | 43 | High Floor Tom |
| F5 | 77 | Low Wood Block |
| D#2 | 39 | Hand Clap |
| C#2 | 37 | Side Stick |
| C2 | 36 | Bass Drum |
| F#2 | 42 | Closed Hi Hat |
| D#3 | 51 | Ride Cymbal 1 |
| C#3 | 49 | Crash Cymbal 1 |
| G3 | 55 | Splash Cymbal |

**Important:** A MIDI note can only be assigned to a single pad. If you try to assign a note already in use, the display shows "Used:Pad ??" and shows where it's assigned.

### System: MIDI Polyphonic Keyboard Play

Tempest can function as a 6-voice polyphonic analog keyboard synthesizer.

| # | Parameter | Range | Description |
|---|---|---|---|
| 1 | MIDI: Synth IN Channel | Off, 1...16 | MIDI channel for polyphonic keyboard input |
| 2 | MIDI: Synth Sound | A1...A16, B1...B16 | Which pad/sound plays on the synth channel |
| 3 | MIDI: Synth Root Note | C0...C10 | Root note mapping (so pad matches keyboard pitch) |
| 4 | MIDI: Sequencer Out Channel | Off, 1...16 | Channel for sequencer MIDI output |
| 5 | MIDI: Sequencer Sound | A1...A16, B1...B16 | Sound that plays on sequencer out channel |

**IMPORTANT:** The MIDI: Synth IN Channel must be set to a DIFFERENT channel than Remote Pad: IN Channel. If they are the same, the note-to-pad mapping under Remote Pad IN Channel overrides the Synth functionality.

**Note:** Notes played via MIDI are prioritized higher than sequencer notes, so the sequencer should not steal voices from MIDI keyboard playing. However, pad-played notes have the same priority as MIDI notes and can steal voices.

### System: MIDI Clock

| # | Parameter | Range | Description |
|---|---|---|---|
| 1 | MIDI: Clock Mode | Off, Master, Slave, Slave Thru | Clock master/slave configuration |
| 2 | MIDI: Clock IN Cable | None, MIDI Port, USB | Source for incoming MIDI clock |
| 3 | MIDI: Clock OUT Cable | None, MIDI Port, USB, MIDI+USB, MIDI | Destination for outgoing MIDI clock |

**Clock Mode details:**
- **Master:** Tempest transmits MIDI clock and start/stop/continue messages.
- **Slave:** Tempest syncs to incoming MIDI clock and responds to start/stop/continue.
- **Slave Thru:** Same as Slave but also forwards incoming MMC and clock to MIDI Out.

**Warning:** In Slave and Slave Thru modes, if no MIDI clock is present at the selected input, Tempest will not play.

**Note:** When slaved to external MIDI clock, Tempest's BPM display is preceded by "EXT." The displayed BPM may differ slightly from the master due to rounding.

### System: MIDI System Exclusive

| # | Parameter | Range | Description |
|---|---|---|---|
| 1 | MIDI: Sysex IN-OUT Cable | None, MIDI Port, USB | Port for SysEx data transfers |

**Note:** USB Sysex transfers are only supported with Mac OSX and Windows 7.

### System: BPM/Swing/Comp/Dist Sources

| # | Parameter | Range | Description |
|---|---|---|---|
| 1 | BPM Source | Project, Beat | Whether tempo follows the Project or individual Beat settings |
| 2 | Swing Source | Project, Beat | Whether swing follows Project or Beat |
| 3 | Compression Source | Project, Beat, Pot Position | Compression setting source |
| 4 | Distortion Source | Project, Beat, Pot Position | Distortion setting source |

**Details:**
- **Beat** (factory default for BPM and Swing): Each Beat has its own tempo/swing. Switching Beats changes the tempo/swing.
- **Project:** Tempo/swing stays the same regardless of which Beat is playing.
- **Pot Position:** For Compression/Distortion only. The knob position always determines the value.
- Saving a Beat with BPM Source set to Beat saves the current BPM with the Beat. Saving with BPM Source set to Project saves the BPM with the Project.

### System: UI Preferences

| # | Parameter | Range | Description |
|---|---|---|---|
| 1 | Solo/Mute behavior | Seq+Live, Seq Only | How Solo/Mute affects sounds |
| 2 | Sounds slider mode | Step, Realtime | How Note FX sliders record data |
| 3 | Touch Slider Latch Mode | Active Only, All | Latch behavior when switching FX/sounds |
| 4 | Latch Button behavior | Normal, Shift Switched, Disabled | Latch On button behavior |
| 5 | Envelope Amount Encoder behavior | Normal, Shift Switched | Amount/Velocity Amount knob behavior |
| 6 | Select Sound behavior | Shift On + Pad, Shift Held + Pad | How SHIFT selects sounds silently |
| 7 | Tap Tempo behavior | Shift On + Play, Shift Held + Play | How tap tempo is accessed |

**Solo/Mute behavior:**
- **Seq+Live:** Solo and Mute affect a pad that is physically pressed as well as its sequenced data.
- **Seq Only:** Solo and Mute only affect sequenced data, allowing you to trigger a sound by pressing its pad even when muted.

**Sounds slider mode:**
- **Step:** Note FX data is recorded per step (quantized). Does not allow smooth sweeps.
- **Realtime:** The two sound sliders affect Note FX in realtime during performance (fluid, non-stepped control).

### System: System Actions

| # | Action | Description |
|---|---|---|
| 1 | Calibrate Analog Oscillators and Filters | Factory calibrated. Only recalibrate if experiencing problems. |
| 2 | Calibrate Slider 1 and 2 Position | Factory calibrated. Only if experiencing problems. |
| 3 | Calibrate Drumpads | Factory calibrated. Only if experiencing problems. |
| 4 | Reset System Parameters | Resets all system parameters to factory defaults. |
| 5 | Show System Information | Displays current OS version. |

---

## 10. Save/Load

### Understanding RAM vs. Flash

- **RAM:** Working memory. The current Sound, Beat, and Project are always loaded into RAM for playback and editing. RAM is volatile -- contents are lost when power is cycled.
- **Flash:** Permanent non-volatile storage. Saved files persist through power cycles.
- **Critical:** Tempest does NOT prompt you to save changes. If you switch Beats, load a file, or power down without saving, unsaved edits in RAM are lost.
- Beats include all Sounds used in them. Projects include all Beats (which include all Sounds).

### Saving a Sound to Flash

1. In 16 SOUNDS mode, tap a pad to choose the Sound to save.
2. Press SAVE/LOAD, choose Save Sound, and press the NEXT Soft Key.
3. The current source Beat and Sound are displayed and can be changed, if desired. Press the NEXT Soft Key.
4. Select the destination Sound folder.
5. Enter the name using the EDIT FILENAME Soft Knob to choose characters and the LEFT and RIGHT cursor keys to move the cursor.
6. Press the INSERT CHAR Soft Key to insert a blank space before the cursor. Press the DELETE CHAR Soft Key to delete the character highlighted by the cursor.
7. Press the SAVE NOW Soft Key.

Sounds are saved to one of several folders in Tempest's flash memory.

### Saving a Beat to Flash

1. In 16 BEATS mode, tap a pad to choose the Beat to save.
2. Press SAVE/LOAD, choose Save Beat, and press the NEXT Soft Key.
3. The current source Beat is displayed and can be changed, if desired. Press the NEXT Soft Key.
4. Select the destination Beat folder.
5. Enter the name using the EDIT FILENAME Soft Knob to choose characters and the LEFT and RIGHT cursor keys to move the cursor.
6. Press the INSERT CHAR Soft Key to insert a blank space before the cursor. Press the DELETE CHAR Soft Key to delete the character highlighted by the cursor.
7. Press the SAVE NOW Soft Key.

Beats are saved to one of 10 Beats folders in Tempest's flash memory.

### Saving a Project to Flash

1. Press SAVE/LOAD, choose Save Project, and press the NEXT Soft Key.
2. Select the destination Projects folder.
3. Enter the Project name using the EDIT FILENAME Soft Knob to choose characters and the LEFT and RIGHT cursor keys to move the cursor. Press the NEXT Soft Key.
4. Press the INSERT CHAR Soft Key to insert a blank space before the cursor. Press the DELETE CHAR Soft Key to delete the highlighted character.
5. Press the SAVE NOW Soft Key.

**Warning:** If the Project file name already exists, you will be warned that you are about to overwrite the existing Project file.

### Saving a Sound via the Copy Key (Quick Save After Copy)

The copied sound is NOT permanently saved until you save the Beat:
1. Press SAVE/LOAD.
2. Use Soft Knob 1 to scroll to item 2 (SAVE BEAT).
3. Press the NEXT soft key.
4. Use Soft Knob 1 to select the Beat to save.

### Loading a Sound from Flash

1. In 16 SOUNDS mode, tap a pad to choose the destination Sound.
2. Press SAVE/LOAD, choose Load File (Sound/Beat/Project), and press the NEXT Soft Key.
3. Choose the Type, Folder, and File, and press the NEXT Soft Key.
4. The selected destination Beat and Sound are displayed, but can be changed, if desired.
5. Press the LOAD NOW Soft Key.
6. Press the AGAIN Soft Key to load another file or SAVE/LOAD to exit.

**Warning:** Any unsaved edits to the previous Sound will be lost. Press SAVE/LOAD again at any time prior to pressing LOAD NOW to cancel.

### Loading a Beat from Flash

1. In 16 BEATS mode, tap a pad to select the destination Beat.
2. Press SAVE/LOAD, choose Load File (Sound/Beat/Project), and press the NEXT Soft Key.
3. Choose the Type, Folder, and File, and press the NEXT Soft Key.
4. Choose the Beat Load Option: Normal, Sounds + Mixer, Sounds Only, Sequencer + Note FX, or Beat FX.
5. The selected destination Beat is displayed, but can be changed, if desired.
6. Press the LOAD NOW Soft Key.
7. Press the AGAIN Soft Key to load another file or SAVE/LOAD to exit.

### Loading a Project from Flash

1. Press SAVE/LOAD, choose Load File (Sound/Beat/Project), and press the NEXT Soft Key.
2. Choose the Folder and File, and press NEXT.
3. Press the LOAD NOW Soft Key to load the Project.
4. Press the AGAIN Soft Key to load another file or SAVE/LOAD to exit.

**Note:** Only one Project can be loaded at a time. The last Project saved is loaded by default on power up.

### Load Beat Options (Including Loading Sound Kits)

When loading a Beat, there are five options to determine what data gets loaded:

| Option | What Loads |
|---|---|
| Normal | All Beat data |
| Sounds + Mixer | Only Sounds and mixer settings |
| Sounds Only | Only the Sounds (use any Beat file as a "sound kit") |
| Sequencer + Note FX | Only the sequence and Note FX settings |
| Beat FX | Only the Beat FX settings |

**Display shows:** Load Options, Dest Beat, Beat Load Options, Dest Beat Pad to Replace.

**Saving and Loading Sound Kits:** Tempest doesn't use separate sound kit files. Instead, load only the sounds from any Beat file using the "Sounds Only" option. Any Beat file can serve as a sound kit.

### Exporting a Sound from RAM over MIDI

1. Connect Tempest to the receiving device using USB or MIDI cable (Tempest's MIDI Out to device's MIDI In).
2. In 16 SOUNDS mode, tap a pad to choose the Sound to export.
3. Press SAVE/LOAD, choose Export Sound in RAM over MIDI, and press the NEXT Soft Key.
4. The current source Beat and Sound are displayed and can be changed, if desired.
5. Choose the destination (MIDI and/or USB).
6. Enable the receiving device to receive and record SysEx.
7. Press the EXPORT NOW Soft Key.
8. The device records the SysEx data, which can then be named and saved for backup and importing into Tempest.
9. Press the AGAIN Soft Key to export another file or SAVE/LOAD to exit.

### Exporting a Beat from RAM over MIDI

1. Connect Tempest to the receiving device using USB or MIDI cable.
2. In 16 BEATS mode, tap a pad to choose the Beat to export.
3. Press SAVE/LOAD, choose Export Beat in RAM over MIDI, and press the NEXT Soft Key.
4. The current source Beat is displayed and can be changed, if desired.
5. Choose the destination (MIDI and/or USB).
6. Enable the receiving device to receive and record SysEx.
7. Press the EXPORT NOW Soft Key.
8. The device records the SysEx data.
9. Press the AGAIN Soft Key to export another file or SAVE/LOAD to exit.

### Exporting a Project from RAM over MIDI

1. In 16 BEATS mode, press SAVE/LOAD, choose Export Project in RAM over MIDI, and press the NEXT Soft Key.
2. Since there can only be one Project in RAM at a time, there is no source to choose. Choose the destination (MIDI and/or USB).
3. Enable the receiving device to receive and record SysEx.
4. Press the EXPORT NOW Soft Key.
5. The device records the SysEx data.
6. Press the AGAIN Soft Key to export another file or SAVE/LOAD to exit.

### Exporting a Sound/Beat/Project from Flash over MIDI

1. Connect Tempest to the receiving device using USB or MIDI cable.
2. Press SAVE/LOAD, choose Export Saved File over MIDI (Sound/Beat/Project), and press the NEXT Soft Key.
3. Choose the Type, Folder, and File to export.
4. Choose the destination (MIDI and/or USB).
5. Enable the receiving device to receive and record SysEx.
6. Press the EXPORT NOW Soft Key.
7. The device records the SysEx data.
8. Press the AGAIN Soft Key to export another file or SAVE/LOAD to exit.

### Exporting from One Tempest to Another over MIDI

1. Connect MIDI Out on the master to MIDI In on the slave. (Tempest is incapable of acting as a USB host, so transfers must use a MIDI cable.)
2. Set both Tempests to the same mode:
   - For Sounds: Both in 16 SOUNDS mode. Tap a pad on the master for the source, tap a pad on the slave for the destination.
   - For Beats: Both in 16 BEATS mode. Tap pads similarly.
   - For Projects: Both in 16 BEATS mode. Only one Project in RAM at a time.
3. On the master, press SAVE/LOAD and choose Export Sound/Beat/Project in RAM over MIDI or Export Saved File over MIDI.
4. The slave does not need to be enabled to receive. Just press EXPORT NOW on the master.
   - Exports from RAM load into the slave's RAM.
   - Exports from flash load into the slave's flash.
5. Press the AGAIN Soft Key to export another file or SAVE/LOAD to exit.

### Exporting Tempest's Entire File Contents for Backup

1. Connect Tempest to the receiving device using USB or MIDI cable.
2. Press the SAVE/LOAD button.
3. Use Soft Knob 1 to select item 8, "EXPORT FILE OVER MIDI."
4. Press the NEXT Soft Key.
5. Use Soft Knob 4 to select "ALL."
6. Press the NEXT Soft Key again.
7. Use Soft Knob 3 to select the appropriate MIDI port (MIDI or USB).
8. Press the EXPORT NOW Soft Key.

### Importing Sounds, Beats, and Projects

1. Connect the transmitting device to Tempest via USB or MIDI (one MIDI cable from the device's MIDI Out to Tempest's MIDI In).
2. Open and play the SysEx files from a MIDI sequencer or SysEx utility.
3. The display will give you the status of the process and let you know when the file has been successfully saved.

**Import behavior:**
- Files exported from RAM load into the current Sound/Beat/Project in RAM.
- Files exported from flash load into flash in the same folder location from which they were originally exported.

**Warnings:**
- Importing data exported from RAM replaces the current Sound, Beat, or Project in RAM. If edits to the current data have not been saved to flash or exported, they will be lost.
- Files imported into RAM need to be saved to flash or they will be lost when the power is cycled.
- Files imported into flash need to be loaded into RAM in order to play or edit them.
- Importing a Sound/Beat/Project to flash with the same name as one already in flash will overwrite the file. Always back up your work before importing.
- You must have a minimum one-second pause between SysEx files transmitted to the unit. Otherwise you will get errors from the flash system. SysEx Librarian and MIDI-OX can both be configured to add a pause or delay.
- SysEx files for Projects can be large and take twenty seconds or more to load. Press the CANCEL Soft Key to stop a SysEx import.

### Renaming Files in Flash

1. Press SAVE/LOAD, choose Move/Rename File (Sound/Beat/Project) and press the NEXT Soft Key.
2. Choose the Type, Folder, and File to rename and press NEXT.
3. Use SELECT CHAR (Soft Knob 3) and EDIT CHAR (Soft Knob 4) to select and edit characters. Use INSERT CHAR (Page Up key) to insert a space before the cursor. Use DELETE CHAR (UP ARROW key) to delete the selected character.
4. When the name is complete, press RENAME NOW.
5. Press AGAIN to rename another file or SAVE/LOAD to exit.

### Deleting Files from Flash

1. Press SAVE/LOAD, choose Delete File (Sound/Beat/Project) and press the NEXT Soft Key.
2. Choose the Type, Folder, and File to delete and press NEXT.
3. Press DELETE NOW to delete the file.
4. Press AGAIN to delete another file or SAVE/LOAD to exit.

**WARNING:** Deleted files cannot be recovered. To cancel a delete operation, press SAVE/LOAD again prior to step 3.

### RAM vs. Flash Export Differences

- **Exporting from RAM:** The exported data contains no information about its source or destination. If later imported, it loads into RAM and must be saved to flash or it will be lost when power is cycled.
- **Exporting from Flash:** The exported data remembers its flash folder location. If later imported, it loads directly into flash in the same folder from which it was exported. It does not need to be saved, but it does need to be loaded into RAM to play or edit.

---

## 11. Edit Functions

### Accessing the Edit Menu

Hold ERASE and COPY together. The display shows the Edit Function menu:

| # | Function |
|---|---|
| 1 | Copy Sound |
| 2 | Initialize Sound |
| 3 | Rename Sound |
| 4 | Copy Beat |
| 5 | Initialize Beat |
| 6 | Rename Beat |
| 7 | Copy Bars |
| 8 | Insert Bars Into Beat |
| 9 | Delete Bars from Beat |
| 10 | Change Time Signature of Beat |
| 11 | Rename Project |
| 12 | Initialize Project |
| 13 | Rename Playlist |
| 14 | Copy Playlist |
| 15 | Initialize Playlist |

Turn Soft Knob 1 to select the function, then press the Soft Key to enter it. Each screen contains up to 4 fields edited using the 4 soft knobs.

### 1. Copy Sound

Copies a Sound (in any Beat) over another Sound within the same or a different Beat.
1. Enter the Source Beat and Sound.
2. Enter the Destination Beat and Sound.
3. Press the COPY NOW soft key.

**Note:** While Pad Function is set to anything other than 16 Beats, the COPY key (in Rec/Edit) can also be used to copy one Sound pad over another.

### 2. Initialize Sound

Initializes any Sound (in any Beat) to default settings.
1. Enter the Source Beat and Sound to initialize.
2. Press the INIT NOW soft key.

### 3. Rename Sound

Renames a Sound (in any Beat).
1. Select the Beat and Sound to rename.
2. Use the SELECT CHAR and EDIT CHAR soft knobs to enter the new name.
3. Press the RENAME NOW soft key.

**While this screen is active:**
- Page Up key becomes INSERT CHAR (inserts a new character into the name).
- Cursor Up key becomes DELETE CHAR (deletes a character from the name).

### 4. Copy Beat

Copies any Beat over any other Beat.
1. Enter the Source and Destination Beats.
2. Press COPY NOW.

**Note:** If Pad Function is set to 16 Beats, the COPY key can also be used to do the same thing.

### 5. Initialize Beat

Initializes any Beat to default settings at the specified time signature, erasing any previous contents.
1. Enter the Beat to initialize, the Time Signature, and Number of Bars.
2. Press the INIT NOW soft key.

### 6. Rename Beat

Renames both the long and short names of any beat.
1. Enter the Beat to rename.
2. Use the SELECT CHAR and EDIT CHAR soft knobs to edit the Name and/or Short Name (the name that appears in the 2x8 matrix of 16 Beats screen).
3. Press the RENAME NOW soft key.

**While this screen is active:**
- Page Up key becomes INSERT CHAR.
- Cursor Up key becomes DELETE CHAR.

### 7. Copy Bars

Copies a range of bars from one Beat to the same or a different Beat, either inserting into or replacing the destination Beat's bars. Two screen pages.

**Screen 1:**
1. Enter the Source Beat and First Bars and Last Bars to copy.
2. Press the NEXT soft key.

**Screen 2:**
1. Enter the Destination Beat and set the Copy Mode to either Replaces, Insert Before, or Insert After.
2. The middle parameter specifies either the First Bar to Replace, the Bar to Insert Before, or the Bar to Insert After.
3. Press the COPY NOW soft key.

### 8. Insert Bars Into Beat

Inserts blank bars into a Beat, using the Beat's time signature.
1. Enter the Beat.
2. Enter the Blank Bars to Insert and the Bar to Insert Before.
3. Press the INSERT NOW soft key.

### 9. Delete Bars from Beat

Deletes bars from a Beat.
1. Enter the Beat.
2. Enter the First Bar and Last Bar to delete.
3. Press the DELETE NOW soft key.

### 10. Change Time Signature of Beat

Changes the time signature of all measures within a beat.
1. Enter the Beat, new time signature, and number of bars.
2. Press the SET SIG NOW soft key.

**Behavior:**
- If the new time signature is shorter, notes at the end of each bar will be truncated.
- If the new time signature is longer, notes at the beginning of each bar will be copied to fill the new space.
- You can also change the number of bars: If the new number is greater, notes in earlier bars are copied to new bars at the end. If lesser, ending bars are deleted entirely.

### 11. Rename Project

Renames the currently loaded project.
1. Use the SELECT CHAR and EDIT CHAR soft knobs to edit the name.
2. Press the RENAME NOW soft key.

**While this screen is active:**
- Page Up key becomes INSERT CHAR.
- Cursor Up key becomes DELETE CHAR.

### 12. Initialize Project

**WARNING:** This initializes the entire Project in RAM memory, erasing all 16 Beats and all their Sounds, and resetting them to default settings!

1. Press the INIT NOW soft key to perform the initialization.

### 13. Rename Playlist

Names or renames one of the four Play Lists.
1. Select the Playlist number.
2. Use the SELECT CHAR and EDIT CHAR soft knobs to edit the Name.
3. Press the RENAME NOW soft key.

### 14. Copy Playlist

Copies one of the four Play Lists to another, in order to rearrange the order or to edit an existing Playlist.
1. Select Source Playlist and Destination Playlist.
2. Press COPY NOW.

### 15. Initialize Playlist

Initializes the selected Playlist to the default (blank) settings, allowing you to create a new Playlist.
1. Select the Playlist to initialize.
2. Press INIT NOW.

### Selective Copy (Using the Copy Key)

#### Copying a Sound Selectively

1. In the PAD FUNCTION section, press the 16 SOUNDS button.
2. In the SCREENS section, press the SOUNDS button.
3. In the REC/EDIT section, press and hold the COPY button.
4. Use the 4 soft knobs above the display to select the elements to copy:
   - **Soft Knob 1 (Sound):** On/Off -- copy the sound's program parameters
   - **Soft Knob 2 (Sequence):** On/Off -- copy the sequence associated with the sound
   - **Soft Knob 3 (NoteFX):** On/Off -- copy the Note FX associated with the sound
   - **Soft Knob 4 (Mixer):** On/Off -- copy the mixer settings associated with the sound
5. Tap the pad you want to copy FROM.
6. Tap the pad you want to copy TO.
7. Release the COPY button.

**Display shows:** "Hit pad to select sound to copy..." with COPY FROM and COPY TO fields, and "Mode: Copy" / "Copy Sound" labels.

**Tip:** When choosing a destination for a copied Sound, tapping the same pad twice swaps Sound layers A+B.

**Warning:** The copied sound is not permanently saved in memory until you save the Beat. To save: press SAVE/LOAD, use Soft Knob 1 to select item 2 (SAVE BEAT), press NEXT, then use Soft Knob 1 to select the Beat to save.

#### Copying a Beat Selectively

1. In the PAD FUNCTION section, press the 16 BEATS button.
2. In the SCREENS section, press the SOUNDS button.
3. In the REC/EDIT section, press and hold the COPY button.
4. Use the 4 soft knobs above the display to select the elements to copy:
   - **Soft Knob 1 (Kits):** On/Off -- copy the Kit (all sounds) associated with the Beat
   - **Soft Knob 2 (Sequence):** On/Off -- copy the sequence
   - **Soft Knob 3 (Params):** On/Off -- copy the parameters associated with the Beat
   - **Soft Knob 4 (BeatFX):** On/Off -- copy the Beat FX associated with the Beat
5. Tap the pad you want to copy FROM.
6. Tap the pad you want to copy TO.
7. Release the COPY button.

### Turn All Notes Off (Panic)

If a stuck note occurs, press LEFT SHIFT + RIGHT SHIFT + STOP to force all the voices off.

---

## 12. Tips & Warnings

### Critical Data Loss Scenarios

1. **Unsaved edits are lost when switching Beats or loading files.** Tempest does NOT prompt you to save. Get in the habit of saving your work often.

2. **Unsaved edits are lost when powering down.** RAM contents are volatile. Always save to flash before turning off.

3. **Initialize Project erases EVERYTHING.** Edit Function 12 (Initialize Project) wipes all 16 Beats and all their Sounds in RAM. Make sure you've saved to flash or exported via MIDI first.

4. **Loading a Project replaces everything in RAM.** The current Project's Beats and Sounds are replaced. Save first.

5. **Importing SysEx data replaces current RAM contents.** If you import a Sound/Beat/Project from SysEx, it overwrites what's in RAM without warning.

6. **Importing to flash overwrites files with the same name.** Always back up before importing a file if you're not certain of its contents.

7. **Deleted flash files cannot be recovered.** Press SAVE/LOAD before confirming deletion to cancel.

8. **Play List RT Record overwrites existing steps.** With RT REC set to On, starting to record a live beat arrangement overwrites any existing steps in the play list. Keep RT REC set to Off when not actively recording play lists.

9. **One-second minimum pause between SysEx imports.** Sending SysEx files to flash too quickly will cause flash system errors. Configure your SysEx utility to add delays between files.

### OS Version Compatibility

- Projects and Beats made on a previous OS version will load and play correctly on OS 1.4.
- If Projects and Beats made on a pre-1.4 OS are modified and saved, or exported from a Tempest with OS 1.4, they will NOT be compatible with a pre-1.4 OS.
- If Projects and Beats made on a pre-1.4 OS are NOT modified and saved or exported, they will still be compatible with pre-1.4 OS (useful if you downgrade).

### Voice Stealing Behavior

- Tempest has 6 voices. By default, voices are dynamically allocated.
- When all 6 voices are in use, new notes will steal a voice from one of the playing Sounds, causing it to be cut off.
- Assigning a Sound to a specific voice (via Voice Assign) guarantees that voice won't be stolen by dynamically allocated voices. However, multiple Sounds assigned to the same voice will still steal from each other.
- Sounds with long decays (crashes, rides) benefit from voice assignment to prevent cut-off.
- Consider the balance between dedicated and dynamically allocated voices carefully.

### Feedback Warning

The feedback loop takes audio from the left output. Pan settings and modulation will affect feedback behavior and level. **Turn down your monitors/headphones while adjusting feedback** -- high values can cause squealing and widespread pandemonium.

### Clipping and Distortion

Volume levels can be set or affected by modulation at several points in the signal path. Clipping distortion may occur if levels and/or modulation amounts are set high. If clipping is undesirable, simply turn the level and/or mod amount down until it stops clipping.

### Click Uses a Voice

The metronome click uses one of the six voices. After recording a couple of sounds, turn it off if you don't need it to free up a voice.

### Beat Length Limit

Tempest allows you to record up to 128 sixteenth notes (8 bars in 4/4 time).

### Quantize "Off" Tip

Setting Quantize to "Off" disables quantization for real-time recording, giving fully unquantized timing. This is useful for natural feel but can make edits harder.

### MIDI Synth Channel vs. Remote Pad Channel

The MIDI: Synth IN Channel MUST be set to a different channel than Remote Pad: IN Channel. If they are the same, the note-to-pad mapping under "Remote Pad: IN Channel" overrides the MIDI: Synth functionality. This is a common source of confusion.

### Count-In and External Clock

The count-in feature does not play when syncing to an external MIDI clock.

### REVERT SOUND Availability

REVERT is available in 16 Sounds mode only until another pad is struck or a different Pad Function mode is selected. Once another Sound pad is struck, REVERT becomes unavailable. REVERT SOUND always resets the sound to the last loaded or saved setting of its Beat.

### Saving and Loading Sound Kits

Tempest doesn't have separate "Sound Kit" or "Drum Kit" files. Instead, use the "Sounds Only" Load Beat Option to load only the sounds from any Beat file. This means any Beat file can serve as a sound kit file.

---

## Play List Procedures

### Creating a Play List by Manually Entering Steps

1. Press PLAY LIST to turn on Play List mode. Display the Play List screen by pressing the EVENTS key.
2. If the play list contains steps, either:
   a) Delete all steps one at a time (SHIFT + soft key), or
   b) Select a different, empty play list (SHIFT + Soft Knob 3), or
   c) From the EDIT menu, initialize the entire play list.
3. Using the STEP soft knob, select step 1.
4. Using the BEAT soft knob, select the beat you wish to play during this step.
5. Using the BARS soft knob, select the number of bars you want this step to play within the play list.
6. Using the STEP soft knob, select the next higher step.
7. Repeat steps 4 through 6 for each additional step you wish to add to the play list.
8. Using the END soft knob, select either:
   a) STOP, or
   b) LOOP TO STEP X (any step in the play list).
9. Press PLAY to play your new play list.

**Play List Screen Soft Knobs:**
- Soft Knob 1 (Step): Select which step is highlighted for editing. Also scrolls the screen.
- Soft Knob 2 (Beat): Select the beat number (1-16) for the selected step. The pad for the selected beat illuminates.
- Soft Knob 3 (Bars): Set the number of bars that step's beat will play.
- Soft Knob 4 (End): Set what happens at the end: Stop or Loop to Step X.
- Soft Key (Insert): Inserts a new step before the selected step. All subsequent steps move down.

**With SHIFT on:**
- Soft Knob 3 (Select List): Select one of the four Play Lists.
- Soft Knob 4 (RT Rec): On/Off -- enables real-time recording of play lists.
- Soft Key (Delete Step): Deletes the selected step. All subsequent steps move up.

### Creating a Play List by Recording a Live Beat Arrangement

1. Press 16 BEATS.
2. Press PLAY LIST to turn on Play List mode. Display the Play List screen by pressing the EVENTS key.
3. Set Soft Knob 4 (END) to LOOP TO STEP 1 so that when the new play list plays past its end, it will automatically loop back to step 1.
4. With SHIFT on, set Soft Knob 4 (RT REC) to ON, then turn SHIFT off.

**IMPORTANT:** With RT REC set to ON, when you start recording your live beat arrangement, any existing steps in the play list will be overwritten! If you're not creating a play list, keep this set to OFF to avoid accidentally erasing your play list steps.

5. Press the beat pad you want your play list to start with.
6. Press the RECORD button to turn Record mode on.
7. Press PLAY to start recording your live beat arrangement into the play list. The selected beat will automatically be entered into step 1 of the play list.
8. When you want to hear a different beat, press a new beat pad. The previous step's BARS duration is now set to the number of bars that beat played, and the next step's BEAT field is filled with the new beat you just selected.

**Note:** The new beat will start playing at the next Beat Quantize boundary. When recording live beat arrangements into play lists, if Beat Quantize is set to anything shorter than BAR, it is internally forced to BAR. This is because play lists can change between beats only at bar boundaries.

9. Repeat step 8 for each additional beat change you want to contain.

10. During the last bar of your beat arrangement, do one of the following:
    - Press STOP, then press RECORD to turn Record mode off. Press PLAY and your newly created play list will start playing from the beginning.
    - Press RECORD to turn Record mode off. At the next Bar boundary, your newly recorded play list will loop back to step 1.

---

## Miscellaneous Procedures

### Setting the BPM (Tempo)

- Turn the BPM knob on the panel to adjust tempo.
- **Tap Tempo:** Hold SHIFT and press PLAY repeatedly to tap the tempo (default behavior). The tempo is calculated from the interval between taps.
- BPM Source (System > BPM/Swing/Comp/Dist Sources) determines whether the tempo follows the Project or individual Beat settings.

### Adjusting Distortion

- Turn the DISTORT knob on the Main Out section.
- The distortion is stereo analog distortion applied to the main output.
- Distortion Source (System setting) determines whether it follows Project, Beat, or Pot Position.

### Adjusting Compression

- Turn the COMPRESS knob on the Main Out section.
- To access the Compressor Envelope: Press SHIFT + COMPRESS knob.
- Compression Source (System setting) determines whether it follows Project, Beat, or Pot Position.

### Adjusting Main Volume

- Turn the VOLUME knob on the Main Out section.

### Pitchbend Amount

- In the Misc screen (navigate from Sound screens): PITCHBEND AMT is set in semitones (e.g., 4 Semitones).
- This controls the range of pitchbend from an external MIDI controller.

### Selecting an Oscillator to Edit

The Oscillators section has a SELECT area with 4 buttons:
- **1 Ana 2:** Selects Analog Oscillator 1 or 2 for panel control editing.
- **3 Digi 4:** Selects Digital Oscillator 3 or 4 for panel control editing.
- Press the button repeatedly or use the adjacent toggle to switch between the two oscillators in each pair.

### Selecting an Envelope to Edit

The Envelopes section has selector buttons:
- **Pitch, Lowpass, Amp, Aux1, Aux2:** Press to select which envelope the panel controls edit.
- AD Mode toggle is shared across all five envelopes.

### Selecting an LFO to Edit

- In the LFO 1&2 section, the LFO2 button toggles between LFO 1 and LFO 2 for editing.
- Off = LFO 1 is being edited. On = LFO 2 is being edited.

---

## Factory Content

- **928 factory Sounds**
- **64 factory Beats**
- **16 factory Projects**
- **Sound folders** in flash for organizing saved sounds
- **10 Beat folders** in flash
- **10 Project folders** in flash
- **Hundreds of samples** including noise types, acoustic and electronic percussion, classic analog and digital drum machine sounds, effects, and Prophet VS single-cycle waves (16-bit, 44.1kHz, mono)
