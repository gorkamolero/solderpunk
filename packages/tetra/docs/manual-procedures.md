# DSI Tetra - Complete Operational Procedures

Extracted from Tetra Operation Manual v1.3 (September 2010).

---

## 1. Navigation -- Modes, Programs, Combos

### 1.1 Power Up

1. Plug in the power supply (13-15 VDC 450 mA; label may say "Evolver" -- same supply used across DSI products).
2. Connect outputs 1/Left and 2/Right (stereo) to mixer/sound system.
3. Tetra boots into **Program Mode**. LCD shows program number (1-128), bank (1-4), and name.

### 1.2 Switch Between Program Mode and Combo Mode

1. Press the **Mode** button (labeled PROGRAM/COMBO/GLOBAL).
2. Each press toggles between Program Mode and Combo Mode.
3. **Program Mode**: PROGRAM LED lit. LCD shows `Program XX BankY` / `ProgramName`.
4. **Combo Mode**: COMBO LED lit. LCD shows combo name and number.

### 1.3 Browse Programs

- Turn **SELECT** knob to scroll through programs (1-128 within current bank).
- Press **increment (+)** or **decrement (-)** to step one program at a time.
- **Change banks**: Hold increment (+) briefly to jump to the next higher bank. Hold decrement (-) briefly to jump to the next lower bank.
- There are **4 banks of 128 programs** each (Banks 1 and 2 are Prophet '08 factory programs).

> **Warning**: When changing banks via increment/decrement hold, be careful not to tap the button briefly or it will save the current program to the current location. Hold until you see the bank change on the display.

### 1.4 Browse Combos

1. Enter Combo Mode (press Mode until COMBO LED lights).
2. Use **SELECT** or **increment/decrement** to step through 128 combos.
3. There is only **one bank** of combos.

### 1.5 Access Global Menu

1. **Press and hold** the Mode button briefly until the **GLOBAL LED** lights.
2. Use **SELECT** to scroll through Global parameters.
3. Use **increment (+)** and **decrement (-)** to change values.
4. To exit: press Mode button once to return to Program or Combo Mode.
5. Global settings are remembered when the synth is turned off.

### 1.6 Enter Edit Mode (Program)

1. While in Program Mode, turn any knob or press Assign Params.
2. Tetra enters **Edit Mode**. LCD top line shows the stored (programmed) value; bottom line shows the edited value.
3. To exit Edit Mode and return to Program Mode: press the **Mode** button.

### 1.7 Switch Between Layer A and Layer B

1. While in Program Mode, press **EDIT B/COMBO**.
2. Front panel controls now edit **Layer B** parameters.
3. Press EDIT B/COMBO again to return to Layer A.
4. Each program has two layers (A and B), each a complete patch.
5. Layers are used with KeyMode (Stack or Split) for stacked or split programs.

> **Note**: The four Assignable Parameters knobs have the same assignments for both layers. Only the hard-wired knobs (Pitch, Cutoff, Resonance, Attack, Decay/Release) switch layers.

> **Note**: In Combo Mode or when Multi Mode is on in Global, Layer B is ignored.

### 1.8 Mode Lock (Prevent Accidental Mode Switches)

1. Enter Global menu (hold Mode).
2. Navigate to **Mode Lock** using SELECT.
3. Set to `Prog`, `Combo`, or `Off` using increment/decrement.
4. When locked, the Mode button will not switch between Program and Combo mode.

---

## 2. Sound Editing -- All Program Parameters

### 2.1 Edit a Program Using Assignable Parameters

1. In Program Mode, press **ASSIGN PARAMS** button. The ASSIGN PARAMETERS LED lights.
2. Turn any of the four **Assignable Parameters** knobs (1-4). The LCD shows the parameter name and current value.
3. Turn the knob to scroll through the parameter list.
4. When you find the parameter you want to assign, press **ASSIGN PARAMS** again (LED turns off).
5. Now turning that knob edits the selected parameter's value.
6. You can also use **SELECT** or **increment (+)/decrement (-)** to change the value while Assign Params is on.

### 2.2 Edit Using Hard-Wired Knobs

The bottom row of knobs always controls:
- **PITCH** -- Base frequency of both oscillators (relative interval maintained)
- **CUTOFF** -- Filter cutoff frequency
- **RESONANCE** -- Filter resonance
- **ATTACK** -- Attack time of filter, amplifier, and Envelope 3 simultaneously
- **DECAY/RELEASE** -- Decay and release of filter, amplifier, and Envelope 3 simultaneously

Simply turn any of these knobs to enter Edit Mode and change the value.

### 2.3 Pot Modes (How Knobs Behave)

Set in Global menu under **PotMode**:
- **Relative**: Changes are relative to stored value. Full range not available until pot reaches min/max physical limit.
- **Passthru**: Pot has no effect until edited value equals stored value ("passes through"), then tracks normally.
- **Jump**: Value jumps immediately to match the pot's physical position.

> **Note**: PotMode applies only to Cutoff, Resonance, and Volume. Master Volume is not programmable.

### 2.4 Oscillator Parameters

| Parameter | Range | Notes |
|-----------|-------|-------|
| Osc Freq | C0 - C10 | Semitone steps, 10-octave range (8 Hz to 8 kHz). C3 = middle C |
| Fine Freq | -50 to +50 | Cents (50 cents = 1/2 semitone) |
| Shape | Off, Sawtooth, Triangle, Saw-Tri, Pulse xx | Pulse width 0-99; turns off at extremes; square wave at Pulse 50 |
| Glide | 0-127 | Portamento rate per oscillator. Low = faster |
| Keyboard | On/Off | Keyboard tracking on/off |
| Sub Osc 1 | 1-127 | Square wave one octave below Osc 1 |
| Sub Osc 2 | 1-127 | Square wave two octaves below Osc 2 |

### 2.5 Miscellaneous Oscillator Parameters

| Parameter | Range | Notes |
|-----------|-------|-------|
| Sync 2->1 | Off/On | Hard sync: Osc 2 reset forces Osc 1 reset |
| Glide Mode | FixRate, FixRate A, FixTime, FixTime A | "A" variants = legato only (auto glide) |
| Osc Slop | 0-5 | Random frequency drift for analog character |
| Pitch Wheel Range | 0-12 | Semitones in positive or negative direction |

### 2.6 Mixer Parameters

| Parameter | Range | Notes |
|-----------|-------|-------|
| Osc Mix | 0-127 | 0 = 100% Osc1, 64 = 50/50, 127 = 100% Osc2 |
| Noise Level | 0-127 | White noise into filter |

### 2.7 Feedback Parameters

| Parameter | Range | Notes |
|-----------|-------|-------|
| Feedback Volume | 0-127 | Amount of left audio output fed back pre-filter per voice |
| Feedback Gain | 0-127 | Boosts feedback signal. No effect if Feedback Volume = 0 |

> **Tip**: Start with Feedback Gain turned down. Small amounts of feedback give pleasing overdrive. Higher levels get "squirrelly and rude."

### 2.8 Low-Pass Filter Parameters

| Parameter | Range | Notes |
|-----------|-------|-------|
| Frequency | 0-164 | Cutoff in semitone steps, 13+ octaves |
| Resonance | 0-127 | Self-oscillates only in 4-pole mode |
| Keyboard Amount | 0-127 | 64 = one semitone per note tracking |
| Audio Mod | 0-127 | Osc 1 audio modulates filter cutoff (FM sounds) |
| Config | 2 Pole / 4 Pole | 2-pole or 4-pole operation |
| Envelope Amount | -127 to +127 | Positive or negative envelope control |
| Envelope Velocity | 0-127 | Velocity controls filter envelope level |
| Delay | 0-127 | Delay before filter envelope attack begins |
| Attack | 0-127 | Filter ADSR attack |
| Decay | 0-127 | Filter ADSR decay |
| Sustain | 0-127 | Filter ADSR sustain |
| Release | 0-127 | Filter ADSR release |

> **Tip for FM/bell sounds**: Set Osc Mix to 127, Osc 2 Shape to Off, Osc 1 Shape to desired wave, then use Audio Mod to modulate filter cutoff with Osc 1's audio.

### 2.9 VCA Parameters

| Parameter | Range | Notes |
|-----------|-------|-------|
| VCA Level | 0-127 | Base VCA level. Set > 0 for drone patches (bypass envelope) |
| Env Amount | 0-127 | VCA envelope depth |
| Env Velocity | 0-127 | Velocity sensitivity of VCA envelope |
| Delay | 0-127 | Delay before VCA envelope attack |
| Attack | 0-127 | VCA ADSR attack |
| Decay | 0-127 | VCA ADSR decay |
| Sustain | 0-127 | VCA ADSR sustain |
| Release | 0-127 | VCA ADSR release |
| Pan Spread | 0-127 | 0 = all center; higher = voices spread across stereo field |
| Program Volume | 0-127 | Per-program volume matching |

> **Note**: If VCA Level is on full, Envelope Amount has no effect. For drones, set VCA Level > 0. For normal sounds, keep VCA Level at 0.

> **Warning**: Clipping distortion may occur at high gain settings. Lower Voice Volume, VCA Envelope Amount, or VCA Velocity Amount.

### 2.10 LFO Parameters (x4 LFOs)

| Parameter | Range | Notes |
|-----------|-------|-------|
| Frequency | 0-150 (unsynced), sync values | 0-150 = 30 sec to 261 Hz. Above 150 = sync divisions |
| Shape | Triangle, Rev Saw, Sawtooth, Square, Random | Random = sample-and-hold |
| Amount | 0-100 | Depth of modulation |
| Key Sync | Off/On | Restart LFO on each new note |
| Destination | (see Mod Destinations table) | Any mod destination |

**LFO Sync speeds** (above 150):
- 151 = 32 Steps, 152 = 16 Steps, 153 = 8 Steps, 154 = 6 Steps, 155 = 4 Steps
- 156 = 3 Steps, 157 = 2 Steps, 158 = 1.5 Steps, 159 = 1 Step
- 160 = 2/3 Step, 161 = 1/2 Step, 162 = 1/3 Step, 163 = 1/4 Step
- 164 = 1/6 Step, 165 = 1/8 Step, 166 = 1/16 Step

> **Note**: Some analog functions may not respond well to the fastest LFO speeds due to control voltage slew, but they will generate interesting sounds.

### 2.11 Envelope 3 Parameters

| Parameter | Range | Notes |
|-----------|-------|-------|
| Destination | (see Mod Destinations) | Auxiliary envelope destination |
| Amount | -127 to +127 | Bipolar amount |
| Env Velocity | 0-127 | Velocity sensitivity |
| Delay | 0-127 | Pre-attack delay |
| Attack | 0-127 | Attack time |
| Decay | 0-127 | Decay time |
| Sustain | 0-127 | Sustain level |
| Release | 0-127 | Release time |
| Repeat | Off/On | Loops DADSR as long as envelope is gated (pseudo-LFO) |

### 2.12 Modulation Parameters (4 Mod Slots + MIDI Controllers)

**General-purpose Mod Slots (Mod 1-4):**
| Parameter | Range |
|-----------|-------|
| Source | (see Mod Sources table) |
| Amount | -127 to +127 |
| Destination | (see Mod Destinations table) |

**MIDI Controller Mod Routing:**
| Controller | Amount Range | Destination |
|------------|-------------|-------------|
| Mod Wheel | -127 to +127 | Any mod destination |
| Pressure (Aftertouch) | -127 to +127 | Any mod destination |
| Breath (CC 2) | -127 to +127 | Any mod destination |
| Velocity | -127 to +127 | Any mod destination |
| Foot (CC 4) | -127 to +127 | Any mod destination |

### 2.13 Unison Parameters

| Parameter | Range | Notes |
|-----------|-------|-------|
| Unison Mode | 1 Voice, All Voices, AllDetune1-3 | 1 Voice = classic mono. All Voices = stacked. Detune = stacked with detuning |
| Unison Assign | Low Note, LowRetrig, HighNote, HighRetrig, LastNote, LastRetrig | Note priority and re-trigger behavior |
| Unison | On/Off | Master unison on/off |

### 2.14 Push It Switch Parameters

| Parameter | Range | Notes |
|-----------|-------|-------|
| Note | C0-C10 | Note triggered by Push It button |
| Velocity | 0-127 | MIDI velocity of Push It note |
| Mode | Normal / Toggle | Normal = momentary. Toggle = on/off with successive presses |

### 2.15 Keyboard Mode Parameters (Program Mode, Layer A only)

| Parameter | Range | Notes |
|-----------|-------|-------|
| Key Mode | Normal, Stack, Split | Normal = Layer A full range. Stack = both layers full range. Split = layers split at Split Point |
| Split Point | C0-C10 | Layer A below, Layer B above (inclusive) |

> **Note**: Key Mode and Split Point do not appear in Combo Mode.

### 2.16 Load a Basic (Init) Patch

1. In Program Mode, press **WRITE**.
2. The display shows "Basic Patch" option.
3. This loads a basic/init patch into the edit buffer.
4. The patch is NOT written to memory unless you explicitly save it with WRITE again.

---

## 3. Sequencer -- Programming Steps, Destinations, Reset/Rest

### 3.1 About the Sequencer

- Four 16-step sequences play in parallel, each routable to any mod destination.
- It is a **gated sequencer** -- requires a note to be playing (via MIDI or Push It) to run.
- No dedicated start/stop button. Use Push It in Toggle mode as start/stop.
- Can sync to external MIDI clock (no start/stop/continue response, but syncs tempo).
- Each voice has its own sequencer.

### 3.2 Program a Sequence Step by Step

1. Set **Sequencer On/Off** = On.
2. Play a note to start the sequence (or use Push It in Toggle mode).
   - **Tip**: Set Push It Mode to Toggle. Use Push It to start/stop. Adjust Push It Note, BPM, and Clock Divide as needed.
3. Choose a **destination** for each sequence track (Seq 1 Dest, Seq 2 Dest, Seq 3 Dest, Seq 4 Dest).
4. Set step values for each track:
   - Turn on **ASSIGN PARAMS**, use one of the Assignable Parameters knobs to select the sequence step.
   - Use SELECT knob to choose the step number.
   - Use increment (+)/decrement (-) to change the step value.
5. Values are displayed as both note values (in quarter tones with + for quarter-tone sharp) and numeric (0-125).
6. As the sequence loops, you will hear your edits in real time.
7. Follow the same steps for all four sequence tracks.
8. **Save**: Press WRITE, then increment (+) to save the program and its sequences.

### 3.3 Set Sequence Length (Using Reset)

- Sequences can be 1-16 steps long.
- Set a step to **Reset** (the highest value after the normal range) to make the sequence loop back to step 1 from that point.
- Reset must be set at the **same step in all four sequences** to shorten them equally.
- Example: Setting step 9 to Reset in all four tracks creates an 8-step sequence.
- Sequences of 16 steps reset automatically (no explicit Reset needed).

> **Tip**: When programming a melodic line, start by shortening the sequence (e.g., 4 steps), set those steps, then gradually move the Reset point to lengthen.

### 3.4 Use Rest Steps

- Set a step to **Rest** (value after Reset in the list) to insert a rest.
- Rest prevents envelopes from being gated on that step.
- Rests in Sequence 1 affect **all four sequences** at the corresponding step.
- If sequences are different lengths, rests in Seq 1 create shifting patterns against the other tracks.

### 3.5 Sequencer Trigger Modes

| Display | Behavior |
|---------|----------|
| Normal | Plays from step 1 on key press, resets to step 1 on each new note. Envelopes retrigger per step. |
| No Reset | Same as Normal but does NOT reset to step 1 on new notes. |
| No Gate | Keyboard triggers envelopes; sequence steps do not retrigger envelopes. |
| NoGateNR | No gate + no reset on new notes. |
| Key Step | Each key strike advances the sequence one step. |

### 3.6 Slew (Portamento Between Sequence Steps)

- **Seq 2 Dest = Slew** controls the slew rate of Sequence 1.
- **Seq 4 Dest = Slew** controls the slew rate of Sequence 3.
- Slew creates smooth transitions between step values (like portamento/lag).
- Higher Slew value = slower transition.
- Can be different per step.

> **Warning**: If Slew value is high enough, the affected parameter may not reach its target value before the next step fires. Reduce Slew if steps sound flat or sharp.

### 3.7 Sync an LFO to the Sequencer

1. Set LFO Frequency to a sync value (e.g., `16 Steps` = one LFO cycle per 16 sequence steps).
2. Route the LFO to desired destination (e.g., filter cutoff).
3. Choose Triangle wave for smooth sweeps.
4. This creates a perfectly synced modulation sweep over the sequence length.

---

## 4. Combo/Multi Mode -- Setting Up 4-Voice Multitimbral Patches

### 4.1 Enter Combo Mode

1. Press **Mode** until COMBO LED lights.
2. LCD shows combo name and number.
3. Use SELECT or increment/decrement to browse 128 combos.

### 4.2 Create a Combo from Scratch

1. Enter Combo Mode.
2. Press **EDIT B/COMBO** to enter combo editing. LCD shows:
   ```
   Combo 1 Prt1 V1
   JungleBumble
   ```
   Top line: combo number, program slot (Prt1), voice (V1). Bottom line: assigned program name.
3. Use **SELECT** or **increment/decrement** to choose a program for Voice 1.
   - Programs come from regular program banks or from other combos.
   - To access regular banks: hold increment briefly until bank display changes.
   - Display format for cross-bank: `C 19 P 26 B2 V1` (Combo 19, Program 26, Bank 2, Voice 1).
4. Press **EDIT B/COMBO** again to move to **Voice 2**. Repeat program selection.
5. Press **EDIT B/COMBO** again for **Voice 3**, again for **Voice 4**.
6. Press **EDIT B/COMBO** once more to exit editing and play the combo.

> **Note**: Programs assigned in combos are *copies*. Edits made to the source program in Program Mode will NOT propagate to the combo, and vice versa.

### 4.3 Edit Individual Voice Parameters in a Combo

1. In Combo Mode, press EDIT B/COMBO to enter single-voice edit.
2. Each press cycles: V1 -> V2 -> V3 -> V4 -> exit.
3. The four **Assignable Parameters** knobs each control one voice: knob 1 = V1, knob 2 = V2, etc.
4. Bottom row knobs (Pitch, Cutoff, etc.) affect **all four programs** simultaneously.
5. Use **Push It** or a MIDI controller to audition voice 1 changes.

### 4.4 Set Voice Volumes in a Combo

1. Press EDIT B/COMBO to enter single-voice edit mode.
2. The **VOLUME** knob controls the **Voice Volume** parameter for the current voice.
3. Press EDIT B/COMBO to cycle through voices and set each one.

### 4.5 Name a Combo

- Use **Edit Name** via Assignable Parameter 1, only when EDIT B/COMBO is turned off (not in voice edit mode).
- Assignable Parameter knob changes character position.
- SELECT changes position.
- Increment/decrement changes the character.

### 4.6 Reassign Assignable Parameters in a Combo

1. While editing a combo voice, press **ASSIGN PARAMS**.
2. Choose desired parameters, same procedure as Program Mode.
3. This does NOT affect the original program's assignments.

### 4.7 Combo Unison and Polyphonic Playback

- **Unison Off** (voice 1): Combo plays polyphonically -- one voice per note, up to 4 notes.
- **Unison On** (voice 1): All four voices stack on one note. Push It cycles through voices.
- For **multitimbral sequence playback**: Set Unison On (voice 1), Push It Mode to Toggle, Sequencer On for all four voices, Audio Out to Quad.
- Push It in Toggle mode latches notes for polyphonic combos.

### 4.8 Combos and Multi Mode

- Combos can "cue up" programs for Multi Mode.
- With Multi Mode on (Global menu), each voice responds to a separate MIDI channel.
- Voice 1 = base channel, Voice 2 = base+1, etc.
- Base MIDI channel must be 13 or lower (4 consecutive channels needed).
- Use combos to pre-load different programs per voice, then switch via MIDI program changes on each channel.

---

## 5. MIDI & NRPN -- Parameter Control, Channel Setup, Poly Chain

### 5.1 Set MIDI Channel

1. Enter Global menu (hold Mode).
2. Navigate to **MIDI Channel** with SELECT.
3. Use increment/decrement to set: ALL (receives on all channels), or 1-16.

### 5.2 Set MIDI Clock Source

1. Enter Global menu.
2. Navigate to **Clock**.
3. Options:
   - `Internal` -- No MIDI clock sent or received
   - `V1 Master` -- Voice 1 provides master clock for all 4 voices in Combo mode
   - `MIDI Out` -- MIDI clock is sent
   - `MIDI In` -- MIDI clock is received
   - `Midi In/Out` -- MIDI clock received and retransmitted

### 5.3 Set MIDI Parameter Send Mode

1. Enter Global menu.
2. Navigate to **MIDI Parameter Send**.
3. Options: `NRPN`, `CC`, `Off`.
4. NRPN is preferred (covers all parameters). CC only handles main parameters.

### 5.4 Set MIDI Parameter Receive Mode

1. Enter Global menu.
2. Navigate to **MIDI Parameter Receive**.
3. Options: `All` (NRPN + CC), `NRPN`, `CC`, `Off`.

### 5.5 Send an NRPN Message to Tetra

Send four CC messages in sequence on Tetra's MIDI channel:
1. **CC 99** (NRPN MSB) -- Parameter number MSB
2. **CC 98** (NRPN LSB) -- Parameter number LSB
3. **CC 6** (Data Entry MSB) -- Value MSB
4. **CC 38** (Data Entry LSB) -- Value LSB

Parameter numbers and ranges are listed in the NRPN tables below.

> **Note**: Once an NRPN is selected, the synth also responds to NRPN Data Increment and Decrement commands, and RPN/NRPN Reset.

### 5.6 Continuous Controller (CC) Mapping

| Parameter | CC# |
|-----------|-----|
| OSC 1 FREQ | 20 |
| OSC 1 FREQ FINE | 21 |
| OSC 1 SHAPE | 22 |
| GLIDE 1 | 23 |
| OSC 2 FREQ | 24 |
| OSC 2 FREQ FINE | 25 |
| OSC 2 SHAPE | 26 |
| GLIDE 2 | 27 |
| OSC MIX | 28 |
| NOISE LEVEL | 29 |
| SUB OSC 1 LEVEL | 30 |
| SUB OSC 2 LEVEL | 31 |
| FEEDBACK VOLUME | 52 |
| FEEDBACK GAIN | 53 |
| FILTER FREQ | 102 |
| RESONANCE | 103 |
| FIL KEY AMT | 104 |
| FIL AUDIO MOD | 105 |
| FILTER ENV AMT | 106 |
| FIL ENV VEL AMT | 107 |
| FIL DEL | 108 |
| FIL ATT | 109 |
| FIL DEC | 110 |
| FIL SUS | 111 |
| FIL REL | 112 |
| VCA LEVEL | 113 |
| OUTPUT PAN | 114 |
| VCA ENV AMOUNT | 115 |
| AMP ENV VEL AMT | 116 |
| VCA DEL | 117 |
| VCA ATT | 118 |
| VCA DEC | 119 |
| VCA SUS | 75 |
| VCA REL | 76 |
| ENV3 DEST | 85 |
| ENV3 AMT | 86 |
| ENV 3 VEL AMT | 87 |
| ENV 3 DELAY | 88 |
| ENV3 ATT | 89 |
| ENV3 DEC | 90 |
| ENV3 SUS | 77 |
| ENV3 REL | 78 |
| TEMPO | 14 |
| TIME SIG | 15 |

**Special received CCs:**
| CC# | Function |
|-----|----------|
| 1 | Mod Wheel (directly assignable) |
| 2 | Breath Controller (directly assignable) |
| 4 | Foot Controller (directly assignable) |
| 7 | Volume -- combined with Master Volume and Voice Volume |
| 11 | Expression Controller (directly assignable) |
| 32 | Bank Select (0-3 for banks 1-4) |
| 64 | Damper Pedal -- holds envelopes in Sustain |
| 74 | Brightness -- added to low-pass filter cutoff |
| 121 | Reset All Controllers |
| 123 | All Notes Off |

### 5.7 Enable/Disable MIDI Controllers

1. Enter Global menu.
2. Navigate to **MIDI Control**.
3. Set to On or Off. Controls Pitch Wheel, Mod Wheel, Pedal, Breath, Volume, Expression.

### 5.8 Enable/Disable MIDI SysEx

1. Enter Global menu.
2. Navigate to **MIDI SysEx**.
3. Set to On or Off.

### 5.9 Set MIDI Out as MIDI Thru

1. Enter Global menu.
2. Navigate to **MIDI Out Select**.
3. Set to `Out` (normal) or `Thru` (mirrors MIDI In).

### 5.10 Enable Local Control Off

1. Enter Global menu.
2. Navigate to **Local Control**.
3. Set to Off to prevent front panel from directly affecting sound (controls still send MIDI).
4. Useful for avoiding MIDI loops with external sequencers.

### 5.11 Enable Multi Mode

1. Enter Global menu.
2. Navigate to **Multi Mode**.
3. Set to On. Each of the 4 voices now responds to a separate consecutive MIDI channel.
4. Base channel must be 13 or lower.
5. Voice 1 = base channel, Voice 2 = base+1, Voice 3 = base+2, Voice 4 = base+3.

---

## 6. Save/Load -- Storing Programs, Combos, SysEx Dumps

### 6.1 Save a Program to Current Location

1. Press **WRITE**.
2. Press **increment (+)** to confirm.
3. Program is saved to the current location.

### 6.2 Save a Program to a Different Location

1. Press **WRITE**.
2. Use **SELECT** to choose the destination program number.
3. Use **increment/decrement** (hold) to change the destination bank.
4. Press **increment (+)** to execute the write.

### 6.3 Cancel a Write

- Press **WRITE** again, **decrement (-)**, or the **Mode** button.

### 6.4 Save a Combo

1. In Combo Mode, press **WRITE**.
2. Use **SELECT** to choose the target combo number.
3. Press **increment (+)** to confirm. (Only one bank of combos.)

### 6.5 Load a Basic/Init Patch

1. In Program Mode, press **WRITE**.
2. Select **Basic Patch** from the display.
3. This loads an init patch into the edit buffer only -- does NOT overwrite stored program.

### 6.6 SysEx Dump (Backup via MIDI)

1. Enter Global menu (hold Mode).
2. Navigate to **MIDI SysEx Dump** with SELECT.
3. Use increment/decrement to select what to dump:

| Display | What Gets Dumped |
|---------|------------------|
| `Current Program` | Current program |
| `Current Prog Bank` | All 128 programs in current bank |
| `All Progrm Banks` | All programs in all 4 banks |
| `Current Combo` | Current combo |
| `Combo Bank` | All 128 combos |
| `All Progs Combos` | All program banks + all combos |
| `Current Prog P08` | Current program in Prophet '08 format |
| `CurrentProgMopho` | Current program in Mopho format |
| `Program Bank P08` | Current bank in Prophet '08 format |
| `Prog Bank Mopho` | Current bank in Mopho format |

4. Press **WRITE** to start the dump transmission via MIDI Out.
5. Dumps include Program and Bank numbers, so received data is stored in the same location.

> **Note**: When exporting in Mopho or Prophet '08 format, unsupported features are stripped. Mopho does not support layers (only Layer A exported). Prophet '08 lacks feedback and sub-oscillators.

### 6.7 Program Copy Utility (Copy Layers Between Programs)

1. Enter Global menu.
2. Navigate to **Program Copy Utility**.
3. Use increment/decrement to choose the source layer (A or B) of a program.
4. Top line shows current bank and program.
5. Use **SELECT** to choose the destination bank, program, and layer.
6. Use increment/decrement to change values.

### 6.8 Reset Globals to Factory Defaults

1. Enter Global menu.
2. Navigate to **Reset Globals**.
3. Press **WRITE** to reset all Global parameters to factory defaults.

---

## 7. System -- Calibration, Global Settings, Firmware, Troubleshooting

### 7.1 Run Calibration

1. Hold down **ASSIGN PARAMS** and press the **Mode** switch.
2. Tetra calibrates the low-pass filter and analog oscillator waveshapes.
3. This should not be necessary for normal operation -- only if oscillators or filter sound out of tune/strange.

### 7.2 Check Firmware Version

- Power on Tetra. The startup screen shows the Main and Voice firmware versions.

### 7.3 Troubleshooting: Sequencer Stopped Running

- Check Global menu: set **Clock** to `Internal`.

### 7.4 Troubleshooting: Programs Sound Different

- Check Mod Wheel position (Mod Wheel affects many factory programs significantly).
- Check Clock setting in Global menu (some programs use sequencer to shape sound).

### 7.5 Troubleshooting: Ground Hum

- USB can cause ground loops. Try MIDI instead (opto-isolated).

### 7.6 Troubleshooting: Erratic Behavior

- Almost always a MIDI data loop. Turn off MIDI Thru on all connected devices/software.
- Disconnect all MIDI/USB cables and test.
- Monitor MIDI traffic with MIDI Monitor (Mac) or MIDI-OX (Windows).

### 7.7 USB Setup (Mac)

- Tetra appears as a MIDI port automatically.
- Configure via Audio MIDI Setup (Applications/Utilities).

### 7.8 USB Setup (Windows)

- Tetra appears as "USB Audio Device" (may show as "USB Audio Device(2)" etc. if other class-compliant USB devices exist).
- To identify which USB Audio Device is Tetra:
  1. Open System Control Panel.
  2. Hardware tab -> Device Manager.
  3. Expand "Sound, video, and game controllers."
  4. Right-click USB Audio Device -> Properties.
  5. Location should read "Location n (DSI Tetra)."

> **Warning**: Do not use MIDI In and USB simultaneously -- overlapping messages cause unpredictable behavior. MIDI Out and USB can be used together. Poly Chain Out is independent.

### 7.9 USB Resync (Windows)

- If you unplug/replug USB while software has the port open, go to USB Audio Device Properties and click OK to resync.
- If Tetra disappears from Device Manager, power cycle Tetra while connected via USB.

---

## 8. Arpeggiator -- Modes, Tempo, Latch

### 8.1 Enable the Arpeggiator

1. Navigate to **Arpeggiator On/Off** parameter.
2. Set to **On**. (Turning on the arpeggiator turns off the Sequencer if it is on.)
3. Play notes on a MIDI keyboard or use Push It.

> **Warning**: If the arpeggiator does not work, check Global menu **Clock** setting. If set to an external clock source, Tetra must be receiving MIDI clock. Set to `Internal` for standalone use.

### 8.2 Set Arpeggiator Mode

| Mode | Behavior |
|------|----------|
| Up | Low to high |
| Down | High to low |
| Up Down | Low to high and back |
| Assign | Order keys were pressed |
| Random | Random |
| 2oct Up/Down/UpDown/Assign/Random | Same patterns over 2 octaves |
| 3oct Up/Down/UpDown/Assign/Random | Same patterns over 3 octaves |

### 8.3 Set Arpeggiator Tempo and Clock Division

- **BPM**: 30-250 (shared with Sequencer).
- **Clock Divide**: Half, Quarter, Eighth, 8half, 8swing, 8trip, 16th, 16half, 16swing, 16trip, 32nd, 32trip, 64trip.
- These parameters are shared with the Sequencer.

### 8.4 Latch the Arpeggiator

1. Set **Push It Mode** to **Toggle**.
2. Press **Push It** to start the arpeggiator on a single note that latches.
3. Press Push It again to stop.
4. Alternatively, use a MIDI keyboard with damper pedal (CC 64) to hold notes.

---

## 9. Poly Chain -- Expanding Polyphony

### 9.1 Chain Two Tetras (8 Voices)

1. Connect **Poly Chain Out** of master Tetra to **MIDI In** of slave Tetra.
2. On master: Global menu -> **Poly Chain** = `Out 4`.
3. On slave: Global menu -> **Poly Chain** = `In End`.
4. Load the same programs on both (use SysEx dump from master to slave).
5. Master controls both units as one 8-voice synth.

### 9.2 Chain Three Tetras (12 Voices)

1. Master: Poly Chain = `Out 8`.
2. Middle: Poly Chain = `InOut4`.
3. Last: Poly Chain = `In End`.
4. Connect: Master Poly Chain Out -> Middle MIDI In. Middle Poly Chain Out -> Last MIDI In.

### 9.3 Chain Four Tetras (16 Voices)

1. Master: Poly Chain = `Out 12`.
2. Second: Poly Chain = `InOut8`.
3. Third: Poly Chain = `InOut4`.
4. Last: Poly Chain = `In End`.

### 9.4 Chain Tetra + Mopho (5 Voices)

1. Tetra: Poly Chain = `Out 1`.
2. Connect Tetra Poly Chain Out -> Mopho MIDI In.

> **Note**: Mopho has no layered programs. When Tetra plays a stacked or split program, only Tetra's 4 voices play the stacked sound; Mopho plays in normal keyboard mode only.

### 9.5 Chain Tetra(s) + Prophet '08

- Use Prophet '08 as master with appropriate Poly Chain Out setting.
- See diagram in manual page 38 for configurations.

### 9.6 Syncing with External MIDI Clock in Poly Chain

1. On master: set MIDI Clock (Global) to `MIDI In/Out`.
2. On intermediate units: set to `MIDI In/Out`.
3. On last unit: set to `MIDI In`.

> **Note**: When Poly Chain is Off, the Poly Chain Out jack simply duplicates the MIDI Out jack.

---

## 10. Complete NRPN Parameter Reference

### 10.1 Global Parameters (NRPN)

| NRPN | Range | Description |
|------|-------|-------------|
| 384 | 0-24 | Master Transpose: 0 = -12 semitones, 12 = 0 (centered), 24 = +12 |
| 385 | 0-100 | Master Fine Tune: 0 = -50 cents, 50 = centered, 100 = +50 cents |
| 386 | 0-16 | MIDI Channel: 0 = ALL, 1-16 = channel |
| 387 | 0-7 | Poly Chain: 0=Off, 1=Out1, 2=Out4, 3=Out8, 4=Out12, 5=InEnd, 6=InOut4, 7=InOut8 |
| 388 | 0-4 | MIDI Clock Source: 0=Internal, 1=V1Master, 2=MIDIOut, 3=MIDIIn, 4=MIDIIn/Out |
| 389 | 0-1 | Local Control: Off/On |
| 390 | 0-2 | Parameter Send: 0=NRPN, 1=CC, 2=Off |
| 391 | 0-3 | Parameter Receive: 0=All, 1=NRPN, 2=CC, 3=Off |
| 394 | 0-1 | MIDI Controller Send/Receive: Off/On |
| 395 | 0-1 | MIDI SysEx Send/Receive: Off/On |
| 400 | 0-3 | Audio Out: 0=Stereo, 1=Mono, 2=Quad, 3=Q LR34 |
| 403 | 0-13 | Balance Tweak: 0=-7, 7=0, 13=7 |
| 404 | 0-2 | Pot Mode: Relative, Passthru, Jump |
| 406 | 0-1 | MIDI Out Select: 0=MIDI Out, 1=MIDI Thru |
| 407 | 0-1 | Multi Mode: Off/On |
| 411 | 0-1 | Select Layer: A(0) or B(1) |
| 412 | 0-1 | Select Mode: Program(0) or Combo(1) |
| 413 | 0-4 | Select Voice: 0=All, 1=V1, 2=V2, 3=V3, 4=V4 |

### 10.2 Program Parameters (NRPN)

The table uses three columns: **Parm** (parameter dump position), **A** (Layer A NRPN), **B** (Layer B NRPN).

| Parm | A | B | Range | Description |
|------|---|---|-------|-------------|
| 0 | 0 | 200 | 0-120 | Oscillator 1 Frequency (semitones, 10-octave range) |
| 1 | 1 | 201 | 0-100 | Oscillator 1 Fine Tune (0=-50 cents, 50=center, 100=+50) |
| 2 | 2 | 202 | 0-103 | Oscillator 1 Shape (0=Off, 1=Saw, 2=Tri, 3=Saw-Tri, 4-103=Pulse 0-99) |
| 3 | 3 | 203 | 0-127 | Oscillator 1 Glide |
| 4 | 4 | 204 | 0-1 | Oscillator 1 Keyboard Off/On |
| 5 | 5 | 314 | 0-127 | Sub Oscillator 1 Level |
| 6 | 5 | 205 | 0-120 | Oscillator 2 Frequency |
| 7 | 6 | 206 | 0-100 | Oscillator 2 Fine Tune |
| 8 | 7 | 207 | 0-103 | Oscillator 2 Shape |
| 9 | 8 | 208 | 0-127 | Oscillator 2 Glide |
| 10 | 9 | 209 | 0-1 | Oscillator 2 Keyboard Off/On |
| 11 | 10 | 315 | 0-127 | Sub Oscillator 2 Level |
| 12 | 10 | 210 | 0-1 | Sync Off/On |
| 13 | 11 | 211 | 0-3 | Glide Mode (0=FixRate, 1=FixRateA, 2=FixTime, 3=FixTimeA) |
| 14 | 12 | 212 | 0-5 | Oscillator Slop |
| 15 | 93 | 293 | 0-12 | Pitch Bend Range |
| 16 | 13 | 213 | 0-127 | Oscillator 1-2 Mix |
| 17 | 14 | 214 | 0-127 | Noise Level |
| 18 | 18 | 316 | 0-127 | Feedback Volume |
| 19 | 19 | 310 | 0-127 | Feedback Gain |
| 20 | 15 | 215 | 0-164 | Filter Frequency (semitones) |
| 21 | 16 | 216 | 0-127 | Resonance |
| 22 | 17 | 217 | 0-127 | Filter Keyboard Amount |
| 23 | 18 | 218 | 0-127 | Filter Audio Modulation |
| 24 | 19 | 219 | 0-1 | Filter Poles (0=2-pole, 1=4-pole) |
| 25 | 20 | 220 | 0-254 | Filter Envelope Amount (-127 to +127) |
| 26 | 21 | 221 | 0-127 | Filter Envelope Velocity Amount |
| 27 | 22 | 222 | 0-127 | Filter Envelope Delay |
| 28 | 23 | 223 | 0-127 | Filter Envelope Attack |
| 29 | 24 | 224 | 0-127 | Filter Envelope Decay |
| 30 | 25 | 225 | 0-127 | Filter Envelope Sustain |
| 31 | 26 | 226 | 0-127 | Filter Envelope Release |
| 32 | 27 | 227 | 0-127 | VCA Initial Level |
| 33 | 30 | 230 | 0-127 | VCA Envelope Amount |
| 34 | 31 | 231 | 0-127 | VCA Envelope Velocity Amount |
| 35 | 32 | 232 | 0-127 | VCA Envelope Delay |
| 36 | 33 | 233 | 0-127 | VCA Envelope Attack |
| 37 | 34 | 234 | 0-127 | VCA Envelope Decay |
| 38 | 35 | 235 | 0-127 | VCA Envelope Sustain |
| 39 | 36 | 236 | 0-127 | VCA Envelope Release |
| 40 | 28 | 228 | 0-127 | Output Spread (Pan) |
| 41 | 29 | 229 | 0-127 | Voice Volume |
| 42 | 37 | 237 | 0-166 | LFO 1 Frequency (0-150 unsynced, 151-166 sync divisions) |
| 43 | 38 | 238 | 0-4 | LFO 1 Shape (0=Tri, 1=RevSaw, 2=Saw, 3=Square, 4=Random) |
| 44 | 39 | 239 | 0-127 | LFO 1 Amount |
| 45 | 40 | 240 | 0-43 | LFO 1 Mod Destination (see Mod Destination list) |
| 46 | 41 | 241 | 0-1 | LFO 1 Key Sync Off/On |
| 47 | 42 | 242 | 0-166 | LFO 2 Frequency |
| 48 | 43 | 243 | 0-4 | LFO 2 Shape |
| 49 | 44 | 244 | 0-127 | LFO 2 Amount |
| 50 | 45 | 245 | 0-43 | LFO 2 Mod Destination |
| 51 | 46 | 246 | 0-1 | LFO 2 Key Sync |
| 52 | 47 | 247 | 0-166 | LFO 3 Frequency |
| 53 | 48 | 248 | 0-4 | LFO 3 Shape |
| 54 | 49 | 249 | 0-127 | LFO 3 Amount |
| 55 | 50 | 250 | 0-43 | LFO 3 Mod Destination |
| 56 | 51 | 251 | 0-1 | LFO 3 Key Sync |
| 57 | 52 | 252 | 0-166 | LFO 4 Frequency |
| 58 | 53 | 253 | 0-4 | LFO 4 Shape |
| 59 | 54 | 254 | 0-127 | LFO 4 Amount |
| 60 | 55 | 255 | 0-43 | LFO 4 Mod Destination |
| 61 | 56 | 256 | 0-1 | LFO 4 Key Sync |
| 62 | 57 | 257 | 0-43 | Envelope 3 Mod Destination |
| 63 | 58 | 258 | 0-254 | Envelope 3 Amount (-127 to +127) |
| 64 | 59 | 259 | 0-127 | Envelope 3 Velocity Amount |
| 65 | 60 | 260 | 0-127 | Envelope 3 Delay |
| 66 | 61 | 261 | 0-127 | Envelope 3 Attack |
| 67 | 62 | 262 | 0-127 | Envelope 3 Decay |
| 68 | 63 | 263 | 0-127 | Envelope 3 Sustain |
| 69 | 64 | 264 | 0-127 | Envelope 3 Release |
| 70 | 98 | 298 | 0-1 | Envelope 3 Repeat Mode Off/On |
| 71 | 65 | 265 | 0-20 | Mod 1 Source (see Mod Source list) |
| 72 | 66 | 266 | 0-254 | Mod 1 Amount (-127 to +127) |
| 73 | 67 | 267 | 0-47 | Mod 1 Destination |
| 74 | 68 | 268 | 0-20 | Mod 2 Source |
| 75 | 69 | 269 | 0-254 | Mod 2 Amount |
| 76 | 70 | 270 | 0-47 | Mod 2 Destination |
| 77 | 71 | 271 | 0-20 | Mod 3 Source |
| 78 | 72 | 272 | 0-254 | Mod 3 Amount |
| 79 | 73 | 273 | 0-47 | Mod 3 Destination |
| 80 | 74 | 274 | 0-20 | Mod 4 Source |
| 81 | 75 | 275 | 0-254 | Mod 4 Amount |
| 82 | 76 | 276 | 0-47 | Mod 4 Destination |
| 83 | 77 | 281 | 0-254 | Mod Wheel Amount (-127 to +127) |
| 84 | 78 | 282 | 0-47 | Mod Wheel Destination |
| 85 | 79 | 283 | 0-254 | Pressure Amount |
| 86 | 80 | 284 | 0-47 | Pressure Destination |
| 87 | 81 | 285 | 0-254 | Breath Amount |
| 88 | 82 | 286 | 0-47 | Breath Destination |
| 89 | 83 | 287 | 0-254 | Velocity Amount |
| 90 | 84 | 288 | 0-47 | Velocity Destination |
| 91 | 85 | 289 | 0-254 | Foot Control Amount |
| 92 | 86 | 290 | 0-47 | Foot Control Destination |
| 93 | 93 | 296 | 0-4 | Unison Mode (0=1voice, 1=All, 2=AllDetune1, 3=AllDetune2, 4=AllDetune3) |
| 94 | 94 | 295 | 0-5 | Unison Assign (0=LowNote, 1=LowRetrig, 2=HighNote, 3=HighRetrig, 4=LastNote, 5=LastRetrig) |
| 95 | 95 | 299 | 0-1 | Unison On/Off |
| 96 | 96 | 311 | 0-127 | Push It Note (C0 to C10) |
| 97 | 97 | 312 | 0-127 | Push It Velocity |
| 98 | 98 | 313 | 0-1 | Push It Mode (Normal/Toggle) |
| 99 | 99 | X | 0-127 | Split Point (60 = C3) |
| 100 | 100 | X | 0-2 | Keyboard Mode (0=Normal, 1=Stack, 2=Split) |
| 101 | 91 | 291 | 30-250 | BPM Tempo |
| 102 | 92 | 292 | 0-12 | Clock Divide |
| 103 | 97 | 297 | 0-14 | Arpeggiator Mode (0=Up through 14=3oct Random) |
| 104 | 100 | 300 | 0-1 | Arpeggiator Off/On |
| 105 | 94 | 294 | 0-4 | Sequencer Trigger (0=Normal, 1=NoReset, 2=NoGate, 3=NoGateNR, 4=KeyStep) |
| 106 | 101 | 301 | 0-1 | Gated Sequencer Off/On |
| 107 | 77 | 277 | 0-47 | Sequence 1 Destination |
| 108 | 78 | 278 | 0-47 | Sequence 2 Destination |
| 109 | 79 | 279 | 0-47 | Sequence 3 Destination |
| 110 | 80 | 280 | 0-47 | Sequence 4 Destination |
| 111-114 | 105-108 | X | 0-183 | Assignable Parameters 1-4 |
| 117 | 117 | X | -- | Editor Byte |
| 120-135 | 120-135 | 320-335 | 0-127 | Sequence Track 1, Steps 1-16 (126=Reset, 127=Rest) |
| 136-151 | 136-151 | 336-351 | 0-126 | Sequence Track 2, Steps 1-16 (126=Reset) |
| 152-167 | 152-167 | 352-367 | 0-127 | Sequence Track 3, Steps 1-16 (126=Reset, 127=Rest) |
| 168-183 | 168-183 | 368-383 | 0-126 | Sequence Track 4, Steps 1-16 (126=Reset) |
| 184-199 | 184-199 | X | 32-127 | Name Characters 1-16 (ASCII) |

### 10.3 Modulation Destination Values

| Value | Destination |
|-------|-------------|
| 0 | Off |
| 1 | Osc 1 Freq |
| 2 | Osc 2 Freq |
| 3 | Osc 1 and 2 Freq |
| 4 | Osc Mix |
| 5 | Noise Level |
| 6 | Osc 1 Pulse Width |
| 7 | Osc 2 Pulse Width |
| 8 | Osc 1 and 2 Pulse Width |
| 9 | Filter Frequency |
| 10 | Resonance |
| 11 | Filter Audio Mod Amount |
| 12 | VCA Level |
| 13 | Pan Spread |
| 14 | LFO 1 Freq |
| 15 | LFO 2 Freq |
| 16 | LFO 3 Freq |
| 17 | LFO 4 Freq |
| 18 | All LFO Freq |
| 19 | LFO 1 Amt |
| 20 | LFO 2 Amt |
| 21 | LFO 3 Amt |
| 22 | LFO 4 Amt |
| 23 | All LFO Amt |
| 24 | Filter Env Amt |
| 25 | Amp Env Amt |
| 26 | Env 3 Amt |
| 27 | All Env Amounts |
| 28 | Env 1 Attack |
| 29 | Env 2 Attack |
| 30 | Env 3 Attack |
| 31 | All Env Attack |
| 32 | Env 1 Decay |
| 33 | Env 2 Decay |
| 34 | Env 3 Decay |
| 35 | All Env Decay |
| 36 | Env 1 Release |
| 37 | Env 2 Release |
| 38 | Env 3 Release |
| 39 | All Env Release |
| 40 | Mod 1 Amt |
| 41 | Mod 2 Amt |
| 42 | Mod 3 Amt |
| 43 | Mod 4 Amt |
| 44 | Feedback Volume |
| 45 | Sub Osc 1 Level |
| 46 | Sub Osc 2 Level |
| 47 | Feedback Gain |
| 48 | Slew* (Seq 2 and 4 Dest only) |

### 10.4 Modulation Source Values

| Value | Source |
|-------|--------|
| 0 | Off |
| 1 | Sequence Track 1 |
| 2 | Sequence Track 2 |
| 3 | Sequence Track 3 |
| 4 | Sequence Track 4 |
| 5 | LFO 1 |
| 6 | LFO 2 |
| 7 | LFO 3 |
| 8 | LFO 4 |
| 9 | Filter Envelope |
| 10 | Amp Envelope |
| 11 | Envelope 3 |
| 12 | Pitch Bend |
| 13 | Mod Wheel |
| 14 | Pressure (Aftertouch) |
| 15 | MIDI Breath |
| 16 | MIDI Foot |
| 17 | MIDI Expression |
| 18 | Velocity |
| 19 | Key Number |
| 20 | Noise |

### 10.5 Combo Parameters (NRPN)

Combo Mode uses its own NRPN set. Each voice (V1-V4) has separate NRPNs. The parameter number columns are: **Parm** (base), **V1**, **V2**, **V3**, **V4**, **Quad** (all voices).

Ranges are the same as Program Parameters. See the full Combo NRPN table in the manual (pages 59-62) for all voice-specific NRPN numbers.

Key combo-specific NRPNs:

| Parm | V1 | V2 | V3 | V4 | Description |
|------|----|----|----|----|-------------|
| 41 | 541 | X(A) | X(B) | X | Preset Volume |
| 93 | 607 | X | X | X | Unison Mode |
| 94 | 608 | 864 | 1120 | 1376/1632 | Unison Assign |
| 95 | 611/867 | 1123 | 1379 | 1635 | Unison On/Off |
| 97 | 609 | X | X | X | Arp Mode |
| 104 | 612 | X | X | X | Arp On/Off |
| 106 | 613/869 | 1125 | 1381 | 1637 | Seq On/Off |
| 696-712 | -- | X | X | X | Combo Name (ASCII) |

---

## 11. SysEx Message Reference

### 11.1 Device Inquiry

**Request**: `F0 7E 7F 06 01 F7`

**Response**: `F0 7E 00 06 02 01 26 01 00 00 <version> 00 00 F7`
- DSI ID = 01
- Tetra ID = 26 (0x26 = 38 decimal, but labeled as Family LS in manual; the key byte is `0010 0110`)
- Version bytes encode Main software version

### 11.2 Request Program Dump

```
F0 01 26 05 <bank 0-3> <program 0-127> F7
```

### 11.3 Request Program Edit Buffer Dump

```
F0 01 26 06 F7
```

### 11.4 Request Global Parameter Dump

```
F0 01 26 0E F7
```

### 11.5 Request Combo Dump

```
F0 01 26 09 <combo 0-127> F7
```

### 11.6 Request Combo Edit Buffer Dump

```
F0 01 26 0C F7
```

### 11.7 Program Data Dump Format

```
F0 01 26 02 <bank 0-3> <program 0-127> <384 bytes packed to 446> F7
```

### 11.8 Program Edit Buffer Data Dump Format

```
F0 01 26 03 <384 bytes packed to 446> F7
```

### 11.9 Combo Data Dump Format

```
F0 01 26 0A <combo 0-127> <1024 bytes packed to 1177> F7
```

### 11.10 Combo Edit Buffer Data Dump Format

```
F0 01 26 0B <1024 bytes packed to 1177> F7
```

### 11.11 Global Parameters Data Dump Format

```
F0 01 26 0F <20 nibbles for 10 params> F7
```
(LS then MS nibble for each parameter; parameters listed starting on NRPN 384.)

> **Note**: Global Parameters Data Dump is not recognized when received. Use NRPNs to change Globals.

### 11.12 Mode Change: Program Mode

```
F0 01 26 10 F7
```

### 11.13 Mode Change: Combo Mode

```
F0 01 26 11 F7
```

### 11.14 Packed Data Format

Data is packed in 8-byte packets: 7 parameter bytes have their MS bit stripped and packed into an 8th byte at the start of each packet. This is why 384 program bytes become 446 MIDI bytes (384/7 = 55 packets = 55*8 = 440, plus remainder).

---

## 12. Hidden Functions

### 12.1 Calibration Routine

- **Hold ASSIGN PARAMS** + **press Mode** to calibrate the low-pass filter and analog oscillator waveshapes.
- Not necessary for normal operation. Use only if filter or oscillators sound out of tune.

---

## Appendix A: Complete Parameter List (Alphabetical for Quick Reference)

Osc 1 Frequency, Osc 1 Fine Freq, Oscillator 1 Shape, Oscillator 1 Glide, Osc 1 Key Track, Sub Osc 1 Level, Osc 2 Frequency, Osc 2 Fine Freq, Oscillator 2 Shape, Oscillator 2 Glide, Osc 2 Key Track, Sub Osc 2 Level, Osc Hard Sync, Glide Mode, Oscillator Slop, Pitch Wheel Range, Oscillator Mix, Noise Level, Feedback Volume, Feedback Gain, Filter Cutoff Freq, Filter Resonance, Filter Keyboard Amt, Filter Audio Mod, Filter Config/Mode, Filter Env Amount, Filter Env Velocity, Filter Env Delay, Filter Env Attack, Filter Env Decay, Filter Env Sustain, Filter Env Release, VCA Level, VCA Env Amount, VCA Env Velocity, VCA Env Delay, VCA Env Attack, VCA Env Decay, VCA Env Sustain, VCA Env Release, Pan Spread, Program Volume, LFO 1-4 Frequency, LFO 1-4 Shape, LFO 1-4 Amount, LFO 1-4 Destination, LFO 1-4 Key Sync, Env 3 Destination, Envelope 3 Amount, Envelope 3 Velocity, Envelope 3 Delay, Envelope 3 Attack, Envelope 3 Decay, Envelope 3 Sustain, Envelope 3 Release, Envelope 3 Repeat, Mod 1-4 Source, Mod 1-4 Amount, Mod 1-4 Destination, Mod Wheel Amount, Mod Wheel Dest, Pressure Amount, Pressure Destination, Breath Amount, Breath Destination, Velocity Amount, Velocity Destination, Foot Control Amt, Foot Control Dest, Unison Mode, Unison Assign, Unison On/Off, Push It Note, Push It Velocity, Push It Mode, Split Point (Layer A only), Key Mode (Layer A only), Clock BPM, Clock Divide, Arpeggiator Mode, Arpeggiator On/Off, Sequence Trigger, Sequencer On/Off, Seq 1-4 Destination, Seq 1-4 Steps 1-16, Edit Name.

---

## Appendix B: Audio Output Routing Quick Reference

| Mode | Outputs 1/Left + 2/Right | Output 3 | Output 4 |
|------|--------------------------|----------|----------|
| Stereo | Stereo mix of all 4 voices | Voice 3 direct (mono) | Voice 4 direct (mono) |
| Mono | Mono mix (pan defeated) | Voice 3 direct | Voice 4 direct |
| Quad | Voice 1+2 direct | Voice 3 direct | Voice 4 direct |
| Q LR34 | Voices 1+2 + stereo of 3+4 | Voice 3 direct | Voice 4 direct |

> **Note**: Outputs 3 and 4 are noticeably louder than 1/2 because they are mono direct outs (no headroom needed for mixing 4 voices). Compensate in your mixer.
