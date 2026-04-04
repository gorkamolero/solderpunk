import type { SeedLesson } from './types'

export const seedLessons: SeedLesson[] = [
  {
    title: 'Understand Your Tempest',
    section_id: 'display',
    tags: 'tutorial,beginner,intro,overview',
    content: {
      type: 'tutorial',
      steps: [
        {
          title: 'So you got a Tempest.',
          body: 'Congratulations. You now own a drum machine designed by Dave Smith and Roger Linn \u2014 two absolute legends who apparently decided that 90 knobs, 50 buttons, and zero MIDI CC control was a perfectly reasonable thing to ship.\n\nThis beautiful beast has **6 analog voices**, each with 4 oscillators, 2 filters, 5 envelopes, 2 LFOs, and 8 mod slots. It\'s a full polysynth disguised as a drum machine.\n\nLet\'s figure out what everything does before you accidentally overwrite your factory presets.'
        },
        {
          title: 'The two halves',
          focus: 'osc',
          body: 'The panel splits into two worlds:\n\n**Top half** = sound design. This is where you sculpt what each pad sounds like. Two rows of knobs: [[osc|Oscillators]], [[lpf|Lowpass]], [[hpf|Highpass]], [[amp|Amp]] on top. [[env|Envelopes]], [[lfo|LFO]], [[mixer|Mixer]] below.\n\n**Bottom half** = performance. [[pad-1|Pads]], [[pad-function|Pad Function]] modes, [[fx-sliders|FX sliders]], [[transport|Transport]].\n\nThe [[display|OLED display]] on the right bridges both \u2014 it shows 16 different parameter screens depending on context.'
        },
        {
          title: 'The 90 knobs situation',
          focus: 'osc-shape',
          body: 'Don\'t panic. The knobs are organized left-to-right by signal flow:\n\n**Row 1:** [[osc-shape|Shape]] \u2192 [[osc-mix|Mix]] \u2192 [[osc-pitch|Pitch]] \u2192 [[osc-fine|Fine]] \u2192 [[lpf-frequency|Filter Freq]] \u2192 [[lpf-resonance|Reso]] \u2192 [[lpf-audio-mod|Audio Mod]] \u2192 [[hpf-frequency|HPF]] \u2192 [[amp-feedback|Feedback]]\n\n**Row 2:** [[env-attack|Attack]] \u2192 [[env-decay|Decay]] \u2192 [[env-amount|Amount]] \u2192 [[env-velamt|Vel Amt]] \u2192 [[lfo-rate|LFO Rate]] \u2192 [[lfo-amount|LFO Amt]] \u2192 [[mixer-level|Level]] \u2192 [[mixer-pan|Pan]] \u2192 [[mixer-delay-send|Delay Send]]\n\nThat\'s it. Left to right = signal flow. Sound source \u2192 filter \u2192 amplifier \u2192 modulation \u2192 mix.'
        },
        {
          title: 'The 4 oscillators',
          focus: 'osc',
          body: 'Each voice has 4 oscillators, but they\'re not equal:\n\n**Osc 1 & 2** are pure analog \u2014 sawtooth, triangle, pulse waves. They go through the [[lpf|lowpass]] and [[hpf|highpass]] filters. Classic subtractive synthesis.\n\n**Osc 3 & 4** are digital \u2014 464 samples of noise, drums, percussion, Prophet VS waves. They can bypass the filters entirely via Pre/Post Filter.\n\nThis hybrid design is why the Tempest can do things no other drum machine can. Layer an analog kick with a digital attack sample. Mix noise through a resonant filter. Pure chaos.'
        },
        {
          title: '5 envelopes. Yes, five.',
          focus: 'env',
          body: 'Most synths give you 2 or 3 envelopes. The Tempest gives you 5:\n\n\u2022 **Pitch** \u2014 hardwired to oscillator frequency (the classic pitch-drop kick trick)\n\u2022 **Lowpass** \u2014 hardwired to filter cutoff (wah effects, brightness sweeps)\n\u2022 **Amp** \u2014 hardwired to volume (attack, decay, sustain, release)\n\u2022 **Aux 1** \u2014 freely assignable to ANY of 58 destinations\n\u2022 **Aux 2** \u2014 freely assignable to ANY of 58 destinations\n\nSelect which one you\'re editing with [[env-pitch-btn|Pitch]] [[env-lowpass-btn|Lowpass]] [[env-amp-btn|Amp]] [[env-aux1-btn|Aux1]] [[env-aux2-btn|Aux2]]\n\nAll 5 are DAPDSR: Delay \u2192 Attack \u2192 Peak \u2192 Decay \u2192 Sustain \u2192 Release. Hit [[env-admode-btn|AD Mode]] to simplify to Attack-Decay only (perfect for drums).'
        },
        {
          title: 'The mod matrix \u2014 8 cables of chaos',
          focus: 'screens-sounds-btn',
          body: 'The mod matrix is the Tempest\'s secret weapon. 8 slots, each connecting:\n\n**Source** (23 options) \u2192 **Amount** \u2192 **Destination** (58 options)\n\nSources include all 5 envelopes, both LFOs, velocity, note number, noise, random, pad pressure, sliders, foot pedals, and MIDI controllers.\n\nDestinations include every oscillator parameter, both filters, VCA, pan, all LFO/envelope amounts, attack, decay, release... even other mod slot amounts.\n\nAccess it through [[screens-sounds-btn|Sounds]] screen \u2192 navigate to Mod Paths.\n\nThe wildest trick: an envelope can modulate its own decay. Self-modulation creates curved envelopes from the linear ones the Tempest gives you.'
        },
        {
          title: 'The elephant in the room',
          focus: 'display',
          body: 'Here\'s what DSI never told you on the box: **the Tempest has no MIDI parameter control**. No CCs. No NRPNs. You cannot automate a single knob from your DAW.\n\nThis was literally the #1 complaint from 2011 to 2023 when Sequential finally discontinued it. They promised it. They never shipped it.\n\nSo how do you program it from a computer? **SysEx**. Dump a sound as 157 bytes, modify the bits, send it back. That\'s what this Explorer tool does.\n\nBut honestly? The Tempest was designed to be played from the front panel. Those 90 knobs exist for a reason. Learn them.'
        },
        {
          title: 'The 4 soft knobs',
          focus: 'soft-knob-1',
          body: 'The [[soft-knob-1|4 knobs]] above the [[display|OLED display]] are context-dependent \u2014 they control whatever the screen says they control.\n\nThis is how you access the *other* 80% of parameters that don\'t have dedicated knobs: envelope delay, peak, sustain, release, LFO shape, sync, destination, mod matrix routing, mixer settings, system config...\n\nPress [[screens-sounds-btn|Sounds]] and use the arrow keys to navigate 16 different parameter screens. The soft knobs change function on every screen.\n\nThis is both the Tempest\'s deepest feature and its biggest learning curve. But you\'ve got this Explorer now. Start clicking around.'
        },
      ]
    }
  },
  {
    title: 'Exploring Songs & Beats',
    section_id: 'pad-function',
    tags: 'tutorial,beginner,beats,projects',
    content: {
      type: 'tutorial',
      steps: [
        {
          title: 'The hierarchy: Project > Beat > Sound',
          body: 'The Tempest organizes everything in three levels:\n\n**Project** = your song (contains 16 beats + 32 sounds + 4 playlists)\n**Beat** = a pattern (up to 8 bars, with sequences for each sound)\n**Sound** = what one pad plays (all synthesis parameters)\n\nThe Tempest holds 16 Projects, 64 Beats, and 928 Sounds in memory.'
        },
        {
          title: 'Switch between beats',
          focus: 'padfn-16beats-btn',
          body: 'Press [[padfn-16beats-btn|16 Beats]]. Now each of the 16 pads selects a different beat.\n\nTap any pad \u2014 the beat switches at the next bar boundary (controlled by Beat Quantize).\n\nThe lit pad shows which beat is currently selected.'
        },
        {
          title: 'Browse the sounds in a beat',
          focus: 'padfn-16sounds-btn',
          body: 'Press [[padfn-16sounds-btn|16 Sounds]]. Now each pad plays one of the 16 sounds in Bank A.\n\nHit the pads to hear what\'s loaded. The display shows the sound name for each pad.'
        },
        {
          title: 'Access Sound Bank B',
          focus: 'padopt-bankb-btn',
          body: 'Each beat has **32 sounds** \u2014 16 in Bank A, 16 in Bank B.\n\nPress [[padopt-bankb-btn|Sound Bank B]] to toggle. Now the pads play sounds B1-B16.\n\nPress it again to go back to Bank A.'
        },
        {
          title: 'Load a sound from flash',
          focus: 'system-saveload-btn',
          body: 'To load a saved sound onto a pad:\n\n1. In [[padfn-16sounds-btn|16 Sounds]] mode, tap the pad you want to replace\n2. Press [[system-saveload-btn|Save/Load]]\n3. Turn [[soft-knob-1|Soft Knob 1]] to select **Load File**, then press the soft key below the display (it shows "Next" on screen)\n4. Choose Type (Sound), Folder, and File using the [[soft-knob-1|soft knobs]], press the soft key again\n5. The destination Beat and Sound are shown \u2014 change if needed\n6. Press the soft key (now shows **Load Now**)\n\nThe sound loads into RAM on that pad. Unsaved edits to the previous sound are lost.'
        },
        {
          title: 'Load a beat or project',
          focus: 'system-saveload-btn',
          body: 'Loading beats and projects works the same way \u2014 through **Load File**:\n\n1. Press [[system-saveload-btn|Save/Load]], select **Load File**, press Next\n2. Set the **Type** to Beat or Project using the soft knobs\n3. Choose the Folder and File, press Next\n4. For Beats, choose a Load Option:\n   \u2022 **Normal** \u2014 loads everything\n   \u2022 **Sounds + Mixer** \u2014 just the kit, no sequence\n   \u2022 **Sounds Only** \u2014 just the sounds\n   \u2022 **Sequencer + Note FX** \u2014 just the pattern\n5. Press **Load Now**\n\n**Important:** Edits in RAM are NOT saved automatically! Press [[system-saveload-btn|Save/Load]] and choose **Save** before loading something new, or your changes are gone.'
        },
      ]
    }
  },
  {
    title: 'Your First Sound Edit',
    section_id: 'osc',
    tags: 'tutorial,beginner,sound-design',
    content: {
      type: 'tutorial',
      steps: [
        {
          title: 'Select a sound to edit',
          focus: 'padfn-16sounds-btn',
          body: 'Press [[padfn-16sounds-btn|16 Sounds]], then tap a pad to select a sound.\n\nAll the knobs on the top rows now control that sound\'s parameters. You\'ll hear changes in real time as you play.'
        },
        {
          title: 'Change the oscillator shape',
          focus: 'osc-shape',
          body: 'Turn [[osc-shape|Shape]] to sweep through waveforms:\n\n**Off \u2192 Saw \u2192 Triangle \u2192 Saw-Tri \u2192 Pulse 0-99%**\n\nSawtooth is bright and buzzy. Triangle is softer. Pulse width at 50% is a square wave \u2014 narrower values get thinner and more nasal.'
        },
        {
          title: 'Open the filter',
          focus: 'lpf-frequency',
          body: 'Turn [[lpf-frequency|Frequency]] clockwise to open the lowpass filter. This is the most dramatic sound change you can make.\n\nThe range is 0-164 (13+ octaves). Try sweeping it slowly while hitting the pad.\n\nTurn up [[lpf-resonance|Resonance]] to add a peak at the cutoff \u2014 at high values in 4-pole mode, the filter self-oscillates.'
        },
        {
          title: 'Shape the amplitude envelope',
          focus: 'env-attack',
          body: 'The envelope controls how the sound evolves over time.\n\nFirst make sure you\'re editing the **Amp** envelope: press [[env-amp-btn|Amp]] in the envelope select strip.\n\nNow try:\n- [[env-attack|Attack]]: 0 for instant hit, higher for slow fade-in\n- [[env-decay|Decay]]: how fast it dies. Short = punchy, long = sustained\n- Hold Shift + turn [[env-decay|Decay]] to set **Sustain Level**'
        },
        {
          title: 'Add some pitch movement',
          focus: 'env-pitch-btn',
          body: 'Press [[env-pitch-btn|Pitch]] to switch to the pitch envelope.\n\nTurn [[env-amount|Amount]] to the right for a pitch drop (classic kick sound) or left for a rise.\n\nSet [[env-decay|Decay]] short (~20-30) for a snappy pitch transient, or longer for laser zaps.\n\nThis is the secret behind every analog kick drum \u2014 a fast pitch sweep from high to low.'
        },
      ]
    }
  },
  {
    title: 'The Mod Matrix',
    section_id: 'mixer',
    tags: 'tutorial,intermediate,modulation',
    content: {
      type: 'tutorial',
      steps: [
        {
          title: 'What is the mod matrix?',
          body: 'The Tempest has **8 modulation slots**. Each connects a **Source** (what controls) to a **Destination** (what gets controlled) with an **Amount** (how much).\n\nThis is accessed on screen \u2014 press [[screens-sounds-btn|Sounds]], then navigate with the arrow keys to the **Mod Paths** screen.'
        },
        {
          title: 'Open the Mod Paths screen',
          focus: 'screens-sounds-btn',
          body: 'Press [[screens-sounds-btn|Sounds]] in the Screens section.\n\nUse the [[nav-down-btn|Down]] and [[nav-right-btn|Right]] arrow keys to navigate to the **Mod Paths** screen. It shows all 8 mod slots with Source, Amount, and Destination for each.'
        },
        {
          title: 'Route an LFO to the filter',
          focus: 'soft-knob-2',
          body: 'On the Mod Paths screen, select Mod slot 1 with [[soft-knob-1|Soft Knob 1]].\n\nSet the **Source** to LFO 1 using [[soft-knob-2|Soft Knob 2]].\nSet the **Amount** with [[soft-knob-3|Soft Knob 3]] (try +40).\nSet the **Destination** to Lowpass Filter using [[soft-knob-4|Soft Knob 4]].\n\nNow the LFO wobbles the filter cutoff. Go to the LFO section and adjust [[lfo-rate|Rate]] and [[lfo-amount|Amount]] to taste.'
        },
        {
          title: '23 sources, 58 destinations',
          body: 'The mod matrix is incredibly flexible:\n\n**Sources:** Envelopes (5), LFOs (2), Velocity, Note Number, Noise, Random, Pad Pressure, Sliders (4), Foot Pedals (2), MIDI (Pitch Bend, Mod Wheel, Breath, Expression)\n\n**Destinations:** All Osc Frequencies, Mix, Levels, Pulse Widths, Sub Osc, Feedback, LPF, Resonance, HPF, VCA, Pan, LFO Freq/Amount, all Envelope Amounts/Attack/Decay/Release, and even other Mod slot Amounts.\n\nYou can make envelopes modulate their own decay (self-modulation) for curved envelopes, or route velocity to filter for expressive playing.'
        },
      ]
    }
  },
  {
    title: 'Your First Beat',
    section_id: 'pad-function',
    tags: 'tutorial,beginner,recording,beat,sequencer',
    content: {
      type: 'tutorial',
      steps: [
        {
          title: 'Save your current project',
          focus: 'system-saveload-btn',
          body: 'The Tempest holds one project at a time in RAM. Before we start fresh, let\'s save what you have.\n\n1. Press [[system-saveload-btn|Save/Load]]\n2. Turn [[soft-knob-1|Soft Knob 1]] until the display shows **Save Project**\n3. Press the soft key below the display (shows "Next")\n4. Use [[soft-knob-1|Soft Knob 1]] to pick one of the 10 project folders\n5. Use the **Edit Filename** soft knob to name it \u2014 turn to pick characters, use Left/Right arrows to move the cursor\n6. Press the soft key (shows **Save Now**)\n\nDone. Your project is safe in flash \u2014 all 16 beats and their sounds. You can reload it anytime through Save/Load \u2192 Load File \u2192 Type: Project.'
        },
        {
          title: 'Start a fresh project',
          focus: 'recedit-erase-btn',
          body: 'Now let\'s clear RAM and start from zero.\n\n1. Hold [[recedit-erase-btn|Erase]] + [[recedit-copy-btn|Copy]] together \u2014 the Edit menu appears\n2. Turn [[soft-knob-1|Soft Knob 1]] to item 12: **Initialize Project**\n3. Press the soft key, then press **Init Now**\n\nRAM is now clean \u2014 16 empty beats, all sounds reset to defaults. This is your blank canvas.\n\nYour saved project is still in flash, untouched. The Tempest has 10 project folder slots in flash storage, so you can have multiple projects saved and switch between them.'
        },
        {
          title: 'Build your kit \u2014 pick the kick',
          focus: 'padfn-16sounds-btn',
          body: 'Press [[padfn-16sounds-btn|16 Sounds]]. Each pad now plays one of the 16 sounds in this beat.\n\nLet\'s load a kick drum onto pad 1:\n\n1. Press [[screens-pads-btn|Pads]] in the Screens section\n2. Tap [[pad-1|Pad 1]]\n3. Turn [[soft-knob-3|Soft Knob 3]] to select the **Kick** category\n4. Turn [[soft-knob-4|Soft Knob 4]] to scroll through kick sounds \u2014 you\'ll hear each one as you turn\n5. Stop when you find one you like\n\nThe Tempest has 928 factory sounds organized into categories: Kick, Snare, HhOpn, HhCls, TomHi, TomMid, TomLo, Tamb, Claps, Ride, Crash, Splash, Block, Cowbl, and more.'
        },
        {
          title: 'Fill out the kit',
          focus: 'screens-pads-btn',
          body: 'Now do the same for the rest of your kit. With [[screens-pads-btn|Pads]] screen showing:\n\n1. Tap [[pad-2|Pad 2]] \u2192 [[soft-knob-3|Soft Knob 3]] to **Snare** \u2192 [[soft-knob-4|Soft Knob 4]] to browse\n2. Tap [[pad-3|Pad 3]] \u2192 category **HhCls** (closed hi-hat)\n3. Tap [[pad-4|Pad 4]] \u2192 category **HhOpn** (open hi-hat)\n4. Tap [[pad-5|Pad 5]] \u2192 category **Claps**\n5. Keep going \u2014 [[pad-6|Pad 6]] through [[pad-16|Pad 16]] for toms, percussion, whatever you want\n\nTap each pad to audition. The sound loads instantly as you turn the knob \u2014 no confirm needed.\n\nPress [[padopt-bankb-btn|Sound Bank B]] to access 16 more sound slots (B1-B16) for a total of 32 sounds per beat.'
        },
        {
          title: 'Set the tempo',
          focus: 'bpm-knob',
          body: 'Turn the [[bpm-knob|BPM/Swing]] knob to set your tempo.\n\nThe display shows the current BPM at the bottom. A typical starting point is 100-120 BPM.\n\nYou can also tap tempo: hold **Shift** and press [[transport-play-btn|PLAY]] repeatedly in rhythm.'
        },
        {
          title: 'Record in real time',
          focus: 'transport-rec-btn',
          body: 'The most natural way to make a beat:\n\n1. Make sure you\'re in [[padfn-16sounds-btn|16 Sounds]] mode\n2. Press [[recedit-click-btn|Click]] to turn on the metronome (it uses a voice \u2014 turn it off later)\n3. Press [[transport-rec-btn|REC]] to arm recording \u2014 the REC light comes on\n4. Press [[transport-play-btn|PLAY]] \u2014 the beat starts with the metronome\n5. **Play the pads** in time! Hit the kick, snare, hats as the beat plays\n6. Press [[transport-rec-btn|REC]] again to stop recording \u2014 playback continues\n7. **Overdub:** leave REC on and keep adding \u2014 each pass layers on top\n\nThe Quantize setting snaps your timing. Turn [[soft-knob-1|Soft Knob 1]] (on the Pads screen) to set the grid: 16th notes for tight, 8th for loose, Off for raw unquantized feel.'
        },
        {
          title: 'Fix mistakes',
          focus: 'recedit-undorec-btn',
          body: 'Played something wrong? No panic:\n\n**Undo last pass:** Press [[recedit-undorec-btn|Undo Rec]] \u2014 removes everything from the last recording pass. Press again to redo.\n\n**Erase one sound:** In [[padfn-16sounds-btn|16 Sounds]] mode, hold [[recedit-erase-btn|Erase]] and tap the pad whose notes you want to delete.\n\n**Erase notes while playing:** Press [[transport-rec-btn|REC]] + [[transport-play-btn|PLAY]] to start, then hold both **Shift** + [[recedit-erase-btn|Erase]] while also holding the pad \u2014 notes are erased as the beat passes them.'
        },
        {
          title: 'Step program instead',
          focus: 'padfn-16timesteps-btn',
          body: 'Prefer precision over feel? Use step programming:\n\n1. Press [[padfn-16timesteps-btn|16 Time Steps]]\n2. Select which sound to program: hold **Shift** and tap the sound\'s pad\n3. Now the 16 pads represent 16 time steps in the beat\n4. **Tap a pad to place a note**, tap again to remove it \u2014 lit = note exists\n5. Notes are entered at the velocity you hit the pad\n\n[[soft-knob-1|Soft Knob 1]] sets the step size (8th, 16th, etc.). [[soft-knob-2|Soft Knob 2]] scrolls through time blocks if your beat is longer than 16 steps.\n\nPress [[transport-play-btn|PLAY]] to hear your pattern while you edit. This is great for precise hi-hat patterns and kick placement.'
        },
        {
          title: 'Use the Beat Events grid',
          focus: 'screens-events-btn',
          body: 'For the full picture, press [[screens-events-btn|Events]] to see the Beat Events grid.\n\nThe display shows a 4\u00d716 grid: 4 sounds (rows) \u00d7 16 time positions (columns). Each rectangle is a note \u2014 taller = louder.\n\n[[soft-knob-1|Soft Knob 1]] selects the row (sound). [[soft-knob-2|Soft Knob 2]] selects the time column. The soft key inserts or deletes a note at the cursor.\n\nUse **Shift + [[soft-knob-1|Soft Knob 1]]** to reassign which sound each row shows. This lets you see any 4 of your 32 sounds at once.'
        },
        {
          title: 'Add some swing',
          focus: 'soft-knob-2',
          body: 'A straight quantized beat can sound robotic. Add swing:\n\nIn [[padfn-16sounds-btn|16 Sounds]] or [[padfn-16beats-btn|16 Beats]] mode with the Pads screen showing, turn [[soft-knob-2|Soft Knob 2]] (Swing).\n\n**50%** = straight 16th notes\n**54-58%** = relaxed, jazzy feel\n**66%** = triplet swing (shuffle)\n**75%** = extreme, almost dotted\n\nSwing is per-beat, so different beats in your project can have different feels.'
        },
        {
          title: 'Save your beat!',
          focus: 'system-saveload-btn',
          body: '**Edits live in RAM only.** If you switch beats or power off without saving, your work is gone.\n\n1. Press [[system-saveload-btn|Save/Load]]\n2. Turn [[soft-knob-1|Soft Knob 1]] to select **Save Beat**, press the soft key (Next)\n3. The current beat is shown \u2014 press Next again\n4. Select a destination folder\n5. Name it with the Edit Filename soft knob\n6. Press the **Save Now** soft key\n\nGet in the habit of saving often. The Tempest will NOT prompt you before overwriting RAM.'
        },
      ]
    }
  },
  {
    title: 'Outrun Beat from Scratch',
    section_id: 'osc',
    tags: 'tutorial,intermediate,synthwave,outrun,kavinsky,80s',
    content: {
      type: 'tutorial',
      steps: [
        {
          title: 'The vibe: neon, chrome, 100 BPM',
          body: 'We\'re building a Kavinsky / Drive soundtrack style beat. Dark, pulsing, analog.\n\nThe ingredients:\n- **Booming 808 kick** \u2014 long, sub-heavy\n- **Gated snare** \u2014 tight crack, big space\n- **16th hi-hats** \u2014 mechanical, cold\n- **Arpeggiated bass** \u2014 minor key, pulsing\n- **Synth pad chord** \u2014 saw waves, filtered, dreamy\n\nStart with an empty beat. Set your tempo to **100 BPM** using the [[bpm-knob|BPM]] knob. Outrun lives between 96-110.'
        },
        {
          title: 'Sound 1: The 808 kick',
          focus: 'osc-shape',
          body: 'Select [[pad-1|Pad 1]]. Press [[screens-sounds-btn|Sounds]] to edit it.\n\n**Oscillators:**\n- [[osc-shape|Shape]]: Triangle (not sine \u2014 the Tempest\'s triangle is rounder)\n- [[osc-mix|1/2 Mix]]: all the way left (100% Osc 1)\n- [[osc-pitch|Pitch]]: C2 (low, around value `24`)\n\n**Filter:**\n- [[lpf-frequency|LPF Freq]]: `80`\n- [[lpf-resonance|Resonance]]: `20` (subtle warmth)\n- [[lpf-4pole-btn|4 Pole]]: ON\n\n**Amp Envelope** (press [[env-amp-btn|Amp]]):\n- [[env-attack|Attack]]: `0`\n- [[env-decay|Decay]]: `90` (long boom)\n- [[env-amount|Amount]]: `127`\n\n**Pitch Envelope** (press [[env-pitch-btn|Pitch]]):\n- [[env-amount|Amount]]: `-84` (pitch drops down)\n- [[env-decay|Decay]]: `20` (fast transient)\n\nThis gives you that sub-heavy 808 thump that defines outrun.'
        },
        {
          title: 'Sound 2: Gated snare',
          focus: 'osc-shape',
          body: 'Select [[pad-2|Pad 2]]. Press [[screens-sounds-btn|Sounds]].\n\n**Oscillators:**\n- Osc 1 [[osc-shape|Shape]]: Triangle\n- [[osc-pitch|Pitch]]: around A2 (`45`)\n- Navigate to Osc 3 screen: load a **White Noise** or **Pink Noise** sample\n- Osc 3 Level: `80`\n\n**Filter:**\n- [[lpf-frequency|LPF Freq]]: `100`\n- [[lpf-resonance|Resonance]]: `0`\n- [[hpf-frequency|HPF Freq]]: `30` (cuts the mud)\n\n**Amp Envelope** (press [[env-amp-btn|Amp]]):\n- [[env-attack|Attack]]: `0`\n- [[env-decay|Decay]]: `35` (tight, gated \u2014 the 80s sound)\n- [[env-amount|Amount]]: `127`\n\n**Pitch Envelope** (press [[env-pitch-btn|Pitch]]):\n- [[env-amount|Amount]]: `20`\n- [[env-decay|Decay]]: `8` (tiny pitch snap)\n\nThe short decay is key \u2014 outrun snares are gated, not ringy. You\'ll add reverb externally.'
        },
        {
          title: 'Sound 3: Closed hi-hat',
          focus: 'osc-shape',
          body: 'Select [[pad-3|Pad 3]]. Press [[screens-sounds-btn|Sounds]].\n\nHi-hats are noise shaped by the amp envelope.\n\n**Oscillators:**\n- Osc 1 [[osc-shape|Shape]]: Triangle\n- Navigate to Osc 3: load **White Noise** sample, Level `100`\n- Osc 1 [[osc-mix|Mix]]: mostly noise (turn towards Osc 2 side, or turn down Osc 1/2 mix and rely on Osc 3)\n\n**Filter:**\n- [[lpf-frequency|LPF Freq]]: `120`\n- [[hpf-frequency|HPF Freq]]: `60` (thin it out \u2014 hats are high frequency only)\n\n**Amp Envelope:**\n- [[env-attack|Attack]]: `0`\n- [[env-decay|Decay]]: `12` (very tight tick)\n- [[env-amount|Amount]]: `100`\n\nFor the metallic sheen: route Osc 1 frequency to the Noise source in the mod matrix. Amount `127`. This adds a pitched metallic tone to the noise.'
        },
        {
          title: 'Sound 4: Open hi-hat',
          body: 'Select [[pad-4|Pad 4]]. Copy the closed hat and modify:\n\n1. Hold [[recedit-copy-btn|Copy]], tap [[pad-3|Pad 3]] (source), tap [[pad-4|Pad 4]] (destination)\n2. Now edit: increase Amp Decay to `70`\n3. Assign both hats to the **same voice** \u2014 go to Sounds screen, navigate to the Misc page, set Voice Assign to the same number\n\nThis way the open hat gets cut off by the closed hat, just like real hi-hats. Classic technique.'
        },
        {
          title: 'Sound 5: Arpeggio bass',
          focus: 'lfo-rate',
          body: 'This is the outrun secret weapon. Select [[pad-5|Pad 5]].\n\n**Oscillators:**\n- Osc 1 [[osc-shape|Shape]]: Saw\n- Osc 2 [[osc-shape|Shape]]: Saw (detune Fine +3 cents for thickness)\n- [[osc-mix|Mix]]: `64` (50/50)\n- [[osc-pitch|Pitch]]: C2 (`24`)\n\n**Filter:**\n- [[lpf-frequency|LPF Freq]]: `60`\n- [[lpf-resonance|Resonance]]: `40`\n- [[lpf-4pole-btn|4 Pole]]: ON\n\n**LFO Arpeggio trick:**\n- Go to the LFO section. Set Shape to **Square** (on the Sounds screen)\n- [[lfo-rate|Rate]]: sync to **16th notes** (value `94`)\n- Set LFO Destination to **Osc All Frequency**\n- [[lfo-amount|Amount]]: `56` (= 7 semitones = a fifth)\n\nThis creates a pulsing arpeggio bouncing between the root and the fifth. Classic synthwave bass. Use **16 Tunings** mode to change root note.'
        },
        {
          title: 'Sound 6: Synthwave pad',
          focus: 'osc-shape',
          body: 'The dreamy background. Select [[pad-6|Pad 6]].\n\nWe\'ll use the **one-voice chord** trick \u2014 all 4 oscillators tuned to different notes:\n\n**Oscillators** (navigate with Osc Select):\n- Osc 1: Saw, Pitch C3 (`36`) \u2014 root\n- Osc 2: Saw, Pitch Eb3 (`39`) \u2014 minor third (+3)\n- Osc 3 screen: load a **Saw VS** wave, Freq `+7` \u2014 fifth\n- Osc 4: load **Saw VS** wave, Freq `+12` \u2014 octave\n\n**Filter:**\n- [[lpf-frequency|LPF Freq]]: `55` (warm, not bright)\n- [[lpf-resonance|Resonance]]: `15`\n- LFO 1: Triangle wave, Rate `30`, Destination LPF, Amount `25` \u2014 slow filter sweep\n\n**Amp Envelope:**\n- [[env-attack|Attack]]: `40` (slow fade in)\n- [[env-decay|Decay]]: `127`\n- Sustain: `110` (hold Shift + Decay knob)\n- Release: `80` (hold Shift + Amount knob)\n\nOne pad hit = a full minor chord. Use **16 Tunings** to transpose it.'
        },
        {
          title: 'Program the beat',
          focus: 'padfn-16timesteps-btn',
          body: 'Press [[padfn-16timesteps-btn|16 Time Steps]] for step programming.\n\n**Kick** (hold Shift + tap [[pad-1|Pad 1]] to select):\n- Steps 1, 5, 9, 13 \u2014 four on the floor\n\n**Snare** (Shift + [[pad-2|Pad 2]]):\n- Steps 5, 13 \u2014 on beats 2 and 4\n\n**Closed hat** (Shift + [[pad-3|Pad 3]]):\n- All 16 steps \u2014 straight 16ths\n- Vary the velocity: softer on off-beats for groove\n\n**Open hat** (Shift + [[pad-4|Pad 4]]):\n- Steps 4, 12 \u2014 on the & of 2 and 4\n\nPress [[transport-play-btn|PLAY]] to hear it. Add a touch of [[soft-knob-2|Swing]] \u2014 try `54%` for that slight push.'
        },
        {
          title: 'Record the bass and pad live',
          focus: 'transport-rec-btn',
          body: 'The bass and pad are best recorded in real time.\n\n1. Press [[padfn-16sounds-btn|16 Sounds]]\n2. Press [[transport-rec-btn|REC]] then [[transport-play-btn|PLAY]]\n3. Hit [[pad-5|Pad 5]] (bass) on the beat \u2014 try a root-note pulse every beat, or a rhythmic pattern\n4. Press [[transport-rec-btn|REC]] to stop recording\n5. Record the pad: [[transport-rec-btn|REC]] again, hit [[pad-6|Pad 6]] once and let it ring\n\nFor melodic bass: press [[padfn-16beats-btn|16 Beats]] + [[padfn-16timesteps-btn|16 Time Steps]] together for **16 Tunings** mode. Now each pad plays the bass at a different pitch \u2014 record a bass line!'
        },
        {
          title: 'Polish and save',
          focus: 'mixer-level',
          body: 'Mix it down:\n\n- [[mixer-level|Level]] \u2014 kick loud, snare cutting through, hats quiet, bass filling the low end, pad behind everything\n- [[mixer-pan|Pan]] \u2014 hats slightly right, pad slightly left for width\n- Stereo widening: on the pad sound, route a square LFO to Pan, amount `10`\n- [[mixer-delay-send|Delay Send]] \u2014 a touch on the snare for space\n\nTurn off [[recedit-click-btn|Click]] if it\'s still on.\n\nSave: [[system-saveload-btn|Save/Load]] \u2192 Save Beat \u2192 name it \u2192 Save Now.\n\nRun the Tempest through external reverb and you\'re cruising down a neon highway.'
        },
      ]
    }
  },
]
