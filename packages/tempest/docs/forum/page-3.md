# Tempest Sound Design & Patch Exchange -- Sequential Forum

**Thread:** https://forum.sequential.com/index.php?topic=34.30  
**Page 3 (Posts 41-60)**

---

## Post 41: RobH
**Date:** April 19, 2017, 03:15:31 AM

Shared a house bass patch. The technique involves applying distortion around the 9 o'clock position and assigning a low-pass filter to a slider for live performance tweaking. Requested feedback on the sound. Attached patch file: "HouseBass.syx" (0.15 kB, 2199 downloads).

---

## Post 42: RobH
**Date:** June 01, 2017, 07:05:50 PM

Shared a humanization technique using LFO settings. The method involves syncing one LFO to note mode, assigning a random LFO clocked to quarter notes, eighth notes, sixteenth notes, or thirty-second notes (typically eighth or sixteenth work best), and modulating pitch or VCA level with subtle amounts between 5-30. This technique works on drum sounds, particularly hats and snares. A second LFO can be used simultaneously for pitch and volume modulation to simulate live drummer characteristics.

---

## Post 43: elpianolero
**Date:** June 06, 2017, 05:42:28 PM

Requested that sysex patches be posted elsewhere, noting the DSI forum had become non-functional.

---

## Post 44: Yorgos Arabatzis
**Date:** June 06, 2017, 11:16:30 PM

Moderator clarified this thread serves as the patch upload location and referenced "Various Tempest Patches" collection available at the first post's conclusion.

---

## Post 45: muleskinner
**Date:** June 07, 2017, 12:12:23 AM

Explained clicking sounds often result from waveform amplitude issues rather than attack envelope problems. When a previous note's waveform remains above zero crossing amplitude, triggering a new note causes a click. Solution: adjust release time so the previous note decays completely before the new note initiates. This is a physics-based issue common across all synthesizers.

---

## Post 46: LucidSFX
**Date:** June 07, 2017, 08:00:08 AM

Suggested wave reset and filter envelope adjustments to eliminate clicks, noting that lowering filter envelope amount smooths the sound. Discussed creating project-specific sounds rather than modifying existing patches. Workflow: designing bass and clap sounds based on tutorials from Yorgos and AdamX, using sample-based hi-hats, and layering analog and sampled sounds together.

---

## Post 47: RobH
**Date:** June 07, 2017, 08:39:27 AM

Confirmed slight envelope attacks and wave reset eliminate clicking. Agreed with the approach of using samples for hi-hats and hybrid techniques for kick drums and claps. Noted the Tempest performs best when utilizing all available options without prejudice between sampled and analog oscillator sources. Expressed desire for a 909-style hi-hat and more powerful kick drum options.

---

## Post 48: InnerLoop
**Date:** June 12, 2017, 07:02:53 AM

Reported a consistent issue where every fourth pad strike produces a triangle synthesizer sound instead of the intended kick drum when following the 909-type kick tutorial. All other parameters and the mod matrix appeared neutral.

---

## Post 49: InnerLoop
**Date:** June 12, 2017, 06:04:15 PM

Resolved the issue by assigning the kick drum pad to its own dedicated voice.

---

## Post 50: Yorgos Arabatzis
**Date:** June 13, 2017, 12:35:47 AM

Directed users to external forum reference and mentioned that the reported behavior resulted from voice architecture issues -- specifically having a cable patched into an individual voice without assigning a sound to it.

---

## Post 51: InnerLoop
**Date:** June 13, 2017, 03:28:42 AM

Sought clarification on why the issue occurred since only a kick pad was played with no other voices interfering. Questioned whether it related to envelope triggering and had only connected the stereo main output left channel.

---

## Post 52: RobH
**Date:** June 13, 2017, 04:34:59 AM

Asked if the user had the envelope set to AD or ADSR mode, noting ADSR responds to hold duration while AD maintains consistent decay. Also suggested checking for programmed kicks in the sequence that might play simultaneously with pad triggers, creating a flam effect, resolved by choking the pad with its own assignment.

---

## Post 53: Yorgos Arabatzis
**Date:** June 13, 2017, 05:07:31 AM

Requested users post technical problems as new topics and reiterated this thread focuses on patch sharing and ideas. Emphasized the referenced forum post thoroughly explains Tempest voice architecture.

---

## Post 54: InnerLoop
**Date:** June 13, 2017, 06:10:20 PM

Apologized for off-topic discussion and thanked RobH for assistance.

---

## Post 55: RobH
**Date:** June 14, 2017, 08:04:41 AM

Acknowledged the thanks.

---

## Post 56: Pidcin
**Date:** July 10, 2017, 01:09:24 PM

Posted a request for sound designers to create two drum kits and a bass synth sound emulating specific tracks (Drake's "No Tellin'" and Deadmau5's "Professional Griefers"), offering financial compensation via email money transfer in exchange for video tutorials and patch files demonstrating the design process.

---

## Post 57: abstrx
**Date:** October 01, 2017, 09:47:19 AM

Requested reposting of broken links to "Tempest Sound Design Competition" patch collections from 2013 (either the categorized version or the all-patches version containing 414 sounds). Files originally: "tsdc_final_categories.zip" or "TSDC_Final_ALL_414.syx".

---

## Post 58: RobH
**Date:** October 01, 2017, 04:36:34 PM

Indicated the requested patches appear in the opening post and are maintained by Yorgos.

---

## Post 59: abstrx
**Date:** October 01, 2017, 05:56:00 PM

Thanked RobH, clarified they couldn't locate the competition banks in the various patches collection, and noted they successfully retrieved the files from the archived DSI forum to share.

---

## Post 60: abstrx
**Date:** October 01, 2017, 05:59:50 PM

Attached "TSDC_Final_Categories.zip" (38.93 kB, 2360 downloads) for community access to the Tempest Sound Design Competition patches.
