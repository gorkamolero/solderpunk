# Tempest Sound Design & Patch Exchange -- Sequential Forum

**Thread:** https://forum.sequential.com/index.php?topic=34.15  
**Page 2 (Posts 21-40)**

---

## Post 21: John the Savage
**Date:** February 11, 2017, 10:05:54 PM

Recommends checking the Dave Smith Instruments website for factory Tempest projects. Suggests downloading "Tight Kit," "Straight Kit," and "Funk Kit" from the Sounds page as good starting points for acoustic drum-set renditions.

---

## Post 22: manoeuvre
**Date:** February 12, 2017, 06:42:09 AM

Brief acknowledgment thanking John the Savage for the recommendations, indicating they will serve as a good starting point.

---

## Post 23: adsrchris
**Date:** February 13, 2017, 11:14:12 PM

Reports issues transferring sysex files to Tempest running OS 1.4. States that factory sounds transferred successfully via MIDI-OX over USB, but custom patches from "Various Tempest Patches.zip" cause the device to freeze on "Receiving sound file" message, requiring a power cycle to recover.

---

## Post 24: Yorgos Arabatzis
**Date:** February 14, 2017, 01:52:37 AM

Suggests using "Elektron's C6 sysex utility" for sysex transfers instead of MIDI-OX.

---

## Post 25: adsrchris
**Date:** February 14, 2017, 02:10:06 AM

Follows up asking whether the Tempest requires a specific mode for receiving files from previous OS versions, noting that factory sounds worked but custom patches do not.

---

## Post 26: Yorgos Arabatzis
**Date:** February 14, 2017, 02:17:28 AM

Proposes that storage capacity may be the issue, suggesting the user is "running out of space."

---

## Post 27: idm
**Date:** February 14, 2017, 02:20:03 AM

Describes volume control workarounds for oscillators lacking dedicated volume knobs. Explains using pulse wave at 0% for silence, then employing an Aux envelope to control decay and amount. Details using LFO modulation of pulse width as an on/off switch method with negative amounts for control.

---

## Post 28: RobH
**Date:** March 13, 2017, 03:21:09 PM

Reports encountering unwanted clicks/clips at sound start despite adjusting attack. Asks for professional tips to achieve clean sounds similar to Simmons drum machines, questioning whether this is inherent Tempest character.

---

## Post 29: Yorgos Arabatzis
**Date:** March 13, 2017, 04:33:51 PM

References a "Tips & Tricks" thread discussing inconsistency issues that may address the clicking problem.

---

## Post 30: RobH
**Date:** March 13, 2017, 05:51:39 PM

Thanks Yorgos for guidance, acknowledging he searched the manual first before posting.

---

## Post 31: RobH
**Date:** March 25, 2017, 01:34:31 PM

Asks the community about their favorite Tempest sound design features. Shares that using velocity to modulate amp and filter envelope amounts via the mod screen creates excellent snare rolls, crediting Stim's guide.

---

## Post 32: natrixgli
**Date:** March 25, 2017, 05:58:47 PM

Describes using FX1-4 sequencer slots to layer multiple drum sounds on one voice. Details placing snare on oscillator 3, hi-hat on oscillator 4, and kick on oscillator 1, then controlling levels via sequencer events. Notes the 8-event-per-step limit as a constraint.

---

## Post 33: RobH
**Date:** March 25, 2017, 06:42:18 PM

Responds to natrixgli noting that pulse width modulation provides waveform variation and expresses interest in trying the "one voice challenge" technique.

---

## Post 34: AdamXAudio
**Date:** March 28, 2017, 08:15:29 AM

Describes using the Mod Matrix to extend parameter ranges. Explains setting LPF key tracking to 65 and routing an Aux Envelope to LP Filter Cutoff to achieve lower frequencies. Details using ADSR mode with 0 attack/decay and full sustain as fine-tuner for self-resonating kicks, with sustain acting as secondary control.

---

## Post 35: RobH
**Date:** March 28, 2017, 09:52:26 AM

Requests examples of resonant kick sounds, mentions owning a favorite preset called "Tiegkick" from page 1 sysex files, and asks AdamXAudio to share audio examples.

---

## Post 36: dslsynth
**Date:** March 28, 2017, 10:32:02 AM

Suggests Pym's sound design tips from the old forum should be copied to the current forum.

---

## Post 37: Yorgos Arabatzis
**Date:** March 28, 2017, 10:39:39 AM

Confirms having already included Pym's tips in the first post of the thread.

---

## Post 38: AdamXAudio
**Date:** March 28, 2017, 10:55:10 AM

Indicates the Tempest is new to him (one week ownership) and he's been exploring sound design. Mentions working on video tutorials for emulating 808 kicks and snares, with eventual plans to upload custom presets.

---

## Post 39: RobH
**Date:** April 2, 2017, 03:09:09 PM

Shares a custom snare sound patch file named "SnareDesignRobH.syx" created through deeper sound design exploration, inviting community feedback.

---

## Post 40: RobH
**Date:** April 12, 2017, 11:45:20 AM

Documents self-oscillating FM sounds created using highpass filter and feedback. Provides complete patch parameters for two configurations:

### Configuration 1 (UFO rising)

- OSC1: Pulse 91%, OSC2: OFF at 0/100
- LP: 71, RES: 64, AUDIO MOD: 61
- HP: 17, Feedback Vol: 127, FB: 95
- Recommends ADSR with maximum release, testing C0 and C1 for psychedelic space sounds

### Configuration 2 (UFO takeoff)

- OSC1: Pulse 91%, OSC2: OFF
- LP: 92, RES: 88, AUDIO MOD: 61
- HP: 33, Feedback Vol: 127, FB: 109
- Recommends C1 for takeoff effect

Notes the filter rises over time due to the feedback and highpass interaction.
