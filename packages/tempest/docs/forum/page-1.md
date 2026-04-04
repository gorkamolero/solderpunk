# Tempest Sound Design & Patch Exchange -- Sequential Forum

**Thread:** https://forum.sequential.com/index.php?topic=34.0  
**Page 1 (Posts 1-20)**

---

## Post 1: Yorgos Arabatzis (Moderator)
**Date:** September 26, 2015, 07:41:47 AM

Opening post establishing this as a community resource for sharing Tempest sound design secrets and patches. Yorgos references collecting patches over years from the unofficial DSI forum and notes that many were lost when that forum crashed.

### Stim's Tempest Recipes: Notes on drum synthesis

Links to a series of 16 blog posts covering:
1. Foundational drum synthesis approaches
2. Bass drum creation (Parts 1 & 2)
3. Cowbells, SID sounds, single-voice chords
4. Hi-hats, shakers, zaps; snare drums; tom toms
5. Apito (Samba whistle), donk bass, sub-bass
6. Congas, tuned woods/sticks/clicks
7. Bells and alien idiophones, claps

### Sound Design Tips & Tricks from Unofficial Forum

**Analog oscillator decay technique:** Set main amp envelope decay to medium/long, and auxiliary envelope 1 or 2 to OSC 3 or 4 level with short decay for quick clicks while maintaining longer analog tone.

**Wavetable sweep effect:** Disable OSC 2, 3, 4; enable OSC Sync; use OSC1 frequency to change oscillator timbre while OSC 2 maintains sync even when off.

**Glitchy modulation:** Use auxiliary envelopes as additional VCAs with different delays, set amount to zero, modulate amount with random LFOs for instant glitchiness. Modulate decay values for extra variation.

**OSC 3/4 level control:** Turn down the oscillator level first, then use auxiliary envelope to control it directly since it adds to the parameter.

**Chord creation:** Four oscillators can create chords on one voice by tuning each to different pitches.

**Clap technique:** Route auxiliary 1 & 2 envelopes to VCA with short decays. Set delay on Aux 1 to approximately 6-8 and Aux 2 to 12-16, creating multiple offset claps a few milliseconds apart.

**Stereo widening:** Route LFO to pan at high rates (120+) for cool stereo width effect. Modulate LFO amount with envelope for animated widening.

**Funky mono sequences:** Set voice to mono, create percussive sequence, use step edit to insert reverse notes that slide but get cut off by next trigger.

**Custom arpeggiator:** Mix two square LFOs at different rates routed to all pitch, using temposync subdivisions (16th notes, quarter notes, etc.). Route same LFOs to additional parameters via mod matrix. Route slider positions to LFO amounts for pitch-playable arpeggiator.

**Velocity-controlled sample switching:** Set OSC 3 and 4 to different samples (e.g., closed and open hat). Set OSC 3 level to max, OSC 4 to off. Create mod matrix slots: velocity (0-127) to OSC 4 level, and velocity (0 to -127) to OSC 3 level. Play pad at 16 velocity levels to switch between samples. Alternative: Use arpeggiator with LFOs controlling oscillator level split.

**Hat with swoosh effect:** Use hat sound with long attack and decay. Set both LFO settings to lowpass with alternating rates (e.g., 44 and 78). Mute hats during playback to create "white noise swoosh" sound.

### Sound Design Tips & Tricks from Official Forum

**Interesting pad sounds:** Utilize delay parameter on each envelope and deep mod assignment (8 slots in mod matrix) to trigger delayed envelopes at different times affecting multiple parameters. Have LFO amount or rate go random midway through patch, or LFO start modulating different parameters halfway through.

**Fake compressor:** Set auxiliary envelope to modify VCA level by negative amount. Use mod matrix to change compressor curve by modulating the envelope by itself.

**Drone/infinite sound:** Set amp envelope as desired with release at maximum. Use auxiliary envelope routed to amp env release with decay 127, amount -127, release 127 to maintain constant volume until voice steal or choke. Apply same routing to filter to keep it steady at release.

Includes downloadable file: "Various Tempest Patches.zip" (1780.6 kB, 2964 downloads)

---

## Post 2: Lera
**Date:** December 09, 2015, 12:52:05 PM

"Good stuff! Will be trying some of your ideas."

---

## Post 3: T-Punk
**Date:** December 11, 2015, 03:56:10 AM

Announces initiative to create an online Tempest sounds library on dsiforum.com and invites interested users to participate.

---

## Post 4: stereospread
**Date:** December 14, 2015, 07:59:13 PM

Expresses interest in the sounds library project. Questions whether DSI or users should organize it. Mentions personal goal of emulating various drum machines using the Tempest.

---

## Post 5: hardwarecore
**Date:** February 23, 2016, 10:21:48 AM

Emphasizes using the Tempest's delay parameter on envelopes combined with mod matrix slots to create interesting pad sounds by triggering different envelopes at different times, affecting multiple parameters. Suggests thinking of the mod matrix as a painter's palette for designing pads with movement and nuance.

---

## Post 6: Leviathant
**Date:** March 28, 2016, 07:22:16 PM

Shares analysis of TR-606 and DR-110 drum machines and effort to emulate their sounds on Tempest. References online resource at bitrotten.com/tempest/ containing analog kicks, snares, and handclaps.

---

## Post 7: bobwarn
**Date:** August 09, 2016, 12:46:26 PM

"Thanks Yorgos Arabatzis :-)"

---

## Post 8: Sontag
**Date:** August 15, 2016, 11:56:33 AM

References Yellow Rabbit synth sound patches available in another DSI forum thread (3 zip files labeled vintage 1, 2, 3) and recommends them as excellent resources.

---

## Post 9: LucidSFX
**Date:** October 07, 2016, 07:01:03 PM

Creates separate thread on cymbal creation with SYX files and samples linked to Dave Smith Instruments forum.

---

## Post 10: Cole
**Date:** October 23, 2016, 03:22:30 PM

Solicits classic synth sound submissions to take advantage of Tempest's six-voice poly keyboard capability.

---

## Post 11: gloss
**Date:** November 07, 2016, 11:51:02 PM

Notes that classic synth patches including Roland JUNO emulation are included in the original post's patch download.

---

## Post 12: bobbyquine
**Date:** November 09, 2016, 11:44:58 AM

Endorses Yellow Rabbit patches as excellent ("i think these are great").

---

## Post 13: Cole
**Date:** January 26, 2017, 03:51:39 PM

Brief acknowledgment of recommendation.

---

## Post 14: henryflowers
**Date:** January 28, 2017, 10:35:53 AM

Asks about status of DSI forum and reports issues with account activation and admin communication, expressing desire to obtain the Yellow Rabbit patches.

---

## Post 15: Sontag
**Date:** January 29, 2017, 11:44:03 PM

Directs henryflowers to Yellow Rabbit patches included in the "Various Tempest Patches.zip" from first post rather than pointing to external forum.

---

## Post 16: oliveralex
**Date:** February 04, 2017, 03:01:46 AM

Reports difficulty joining DSI forum and references encountering a registration question: "who made the solaris?" with inability to find answer via Google search.

---

## Post 17: Yorgos Arabatzis
**Date:** February 04, 2017, 04:29:02 AM

Provides answer: "John Bowen" and links to johnbowen.com/solaris-overview.html

---

## Post 18: victor
**Date:** February 05, 2017, 08:00:32 AM

Requests guidance on creating house and garage bass line sounds -- "big fat and subby" -- appealing to community for ideas.

---

## Post 19: Shea
**Date:** February 07, 2017, 07:19:59 PM

Asks victor to link an example, noting that the Tempest can make any sound a subtractive synthesizer can produce.

---

## Post 20: manoeuvre
**Date:** February 11, 2017, 04:53:24 PM

Reports difficulty finding Jazz drum sounds and mentions experimenting with redesigning presets. References sound designer who created work from modified DSI sounds. Expresses hope for Jazz drum sound sets and notes that getting "under the hood" of DSI patches reveals powerful sound design capabilities.
