# ZOIA / ZOIA Euroburo Master Reference

Compiled on 2026-06-19. Firmware baseline: official ZOIA / Euroburo firmware **5.32** as published on the official Empress firmware page and changelog ([latest firmware page](https://empresseffects.com/blogs/support-zoia/updating-firmware-on-the-zoia-and-euroburo-latest-version), [official changelog text](https://cdn.shopify.com/s/files/1/0028/5462/files/zoia_changelog_74aa73a7-3b95-425b-ba10-baf85de31592.txt?v=1770216051)).

This is written as a learning and patch-design reference, not just as a feature list. The official manuals, module index, and changelog are treated as the ground truth for operating model, module names, parameter ranges, DSP/CPU cost, MIDI, CV, SD-card workflow, and ZOIA-vs-Euroburo differences ([ZOIA user manual PDF](https://empresseffects.com/cdn/shop/files/ZOIA_User_Manual_rev02_web.pdf?v=9116714327727882529), [Euroburo manual PDF](https://images.equipboard.com/uploads/item/manual/97410/empress-zoia-euroburo-manual.pdf), [official module index page](https://empresseffects.com/blogs/support-zoia/zoia-module-index), [official live module-index spreadsheet](https://docs.google.com/spreadsheets/d/1a9q2OCo_Sd_IbWsH99wlFvjcTIN20e7wb5Qgn5fLxms/edit?usp=sharing)). Community advice is separated from official behavior and attributed to the community manual, Reddit, Patchstorage, YouTube, or GitHub sources where available ([community tips document](https://docs.google.com/document/u/0/d/1bDqMHjLc4GCYtf2yGNHgjkDqQJ6zrRVuCZohJdKkWWc/mobilebasic), [r/ZOIA](https://www.reddit.com/r/ZOIA/), [Patchstorage ZOIA platform](https://patchstorage.com/platform/zoia/), [ZOIA Librarian](https://github.com/meanmedianmoge/zoia_lib)).

Important limitation: the official module-index spreadsheet is a live Google Sheet with the complete per-module block, option, connection, and average-DSP data; it is the canonical reference for exact ranges and CPU/DSP values for every firmware-5 module ([official live module-index spreadsheet](https://docs.google.com/spreadsheets/d/1a9q2OCo_Sd_IbWsH99wlFvjcTIN20e7wb5Qgn5fLxms/edit?usp=sharing)). This reference summarizes and reorganizes that material for learning, and it links back to the official sheet whenever exact per-block or per-option values are needed. Community-maintained cheat sheets and older CSVs are useful, but they are historical and should be cross-checked against the official firmware-5 module index ([ZOIA Cheatsheet repository](https://github.com/sensai7/ZOIACheatsheet), [ZOIA Cheatsheet CSV](https://raw.githubusercontent.com/sensai7/ZOIACheatsheet/master/zoiaCSV.csv)).

## Contradictions and version flags to keep in mind

- **Stompswitch auxiliary-mode hold time differs by source.** The official ZOIA manual says to hold **Bypass + Scroll** for about **one second** to switch the stompswitches between scroll/bypass duties and auxiliary/custom-module duties ([ZOIA manual](https://empresseffects.com/cdn/shop/files/ZOIA_User_Manual_rev02_web.pdf?v=9116714327727882529)). The community tips document and official module-index row text say to hold the pair for about **two seconds** ([community tips document](https://docs.google.com/document/u/0/d/1bDqMHjLc4GCYtf2yGNHgjkDqQJ6zrRVuCZohJdKkWWc/mobilebasic), [official module-index spreadsheet](https://docs.google.com/spreadsheets/d/1a9q2OCo_Sd_IbWsH99wlFvjcTIN20e7wb5Qgn5fLxms/edit?usp=sharing)). In practice, hold until the Shift/auxiliary indication changes; document this as “about 1-2 seconds.”
- **Sampler folder limits differ between official documents.** The ZOIA 4.0 Sampler/Sequencer Guide says samples should be on a FAT32 microSD card, WAV files can be mono or stereo and up to 10 minutes, the sampler works internally at 48 kHz while a converter can load other sample rates, and folders/samples per folder are limited to 64 ([ZOIA 4.0 Sampler/Sequencer Guide](https://cdn.shopify.com/s/files/1/0028/5462/files/ZOIA_4.0_Sequencer_Sampler_Guide_rev3.pdf?v=1727875139)). The firmware-4.00 changelog says sample handling was changed so waveform-peak generation happens when a sample loads, a sample-rate converter was added, and nested folders/samples-per-folder handling was expanded ([official changelog text](https://cdn.shopify.com/s/files/1/0028/5462/files/zoia_changelog_74aa73a7-3b95-425b-ba10-baf85de31592.txt?v=1770216051)). When preparing public sample packs, follow the current user-facing sampler guide and test on the target firmware.
- **The old community module list is not the firmware-5 module list.** The historical ZOIA Cheatsheet CSV is valuable because it exposes a broad module inventory in a simple text form, but it predates later additions such as Sampler, Logic Gate, Reverse Delay, Univibe, and newer Euroburo/factory-firmware changes ([ZOIA Cheatsheet CSV](https://raw.githubusercontent.com/sensai7/ZOIACheatsheet/master/zoiaCSV.csv), [official changelog text](https://cdn.shopify.com/s/files/1/0028/5462/files/zoia_changelog_74aa73a7-3b95-425b-ba10-baf85de31592.txt?v=1770216051), [official module-index spreadsheet](https://docs.google.com/spreadsheets/d/1a9q2OCo_Sd_IbWsH99wlFvjcTIN20e7wb5Qgn5fLxms/edit?usp=sharing)).
- **Reddit’s FAQ link is stale.** The community tips document links to an r/ZOIA FAQ, but the current Reddit wiki page reports that the wiki is disabled by the moderators ([community tips document](https://docs.google.com/document/u/0/d/1bDqMHjLc4GCYtf2yGNHgjkDqQJ6zrRVuCZohJdKkWWc/mobilebasic), [r/ZOIA FAQ page](https://www.reddit.com/r/ZOIA/wiki/faq)).
- **Sequencer patches saved on firmware 4.20+ have backward-compatibility risk.** The official changelog says sequencer patch data was reduced in firmware 4.20 and that sequencer patches saved on 4.20+ will not load properly on older firmware ([official changelog text](https://cdn.shopify.com/s/files/1/0028/5462/files/zoia_changelog_74aa73a7-3b95-425b-ba10-baf85de31592.txt?v=1770216051)).
- **Patch editing outside the pedal is now possible but still experimental in places.** ZOIA Librarian 2.0/2.1 added patch editing, creation, supermodules, starred MIDI CC export, grid view, page-name editing, and module search, but the project changelog explicitly warns that externally edited patches are not guaranteed to run smoothly on hardware CPU until tested on the device ([ZOIA Librarian changelog](https://raw.githubusercontent.com/meanmedianmoge/zoia_lib/refs/heads/master/documentation/Changelog.txt), [ZOIA Librarian repository](https://github.com/meanmedianmoge/zoia_lib)).

---

## 1. Hidden features most owners never discover

### 1.1 The operating model, in patch-designer terms

ZOIA is a grid-based modular environment running on a pedal: the product page describes it as a “modular synthesizer,” “effects processor,” “MIDI controller,” and “virtual pedalboard,” with more than 90 modules and 20+ prebuilt effects modules ([official ZOIA product page](https://empresseffects.com/products/zoia?srsltid=AfmBOopGu0RJkIuTR7WCOjkBtV9VwQ0OszEEVvCCBKRtNIjo7_X0OvkC)). Euroburo is the Eurorack/desktop sibling that runs the ZOIA patching concept with eurorack-style CV/audio interface modules and a dedicated headphone output ([Euroburo manual PDF](https://images.equipboard.com/uploads/item/manual/97410/empress-zoia-euroburo-manual.pdf)).

A **module** is a building block with one or more visible blocks on the 8x5 grid; the ZOIA manual says modules may be interface, audio, control, analysis, or effects modules, and directs users to the module index for the complete module descriptions ([ZOIA user manual PDF](https://empresseffects.com/cdn/shop/files/ZOIA_User_Manual_rev02_web.pdf?v=9116714327727882529), [official module-index spreadsheet](https://docs.google.com/spreadsheets/d/1a9q2OCo_Sd_IbWsH99wlFvjcTIN20e7wb5Qgn5fLxms/edit?usp=sharing)). A **patch** is the collection of pages, modules, connections, button values, and page names stored in one internal slot; saving a patch writes it to internal memory, and exporting to SD is a separate Config-menu operation ([ZOIA user manual PDF](https://empresseffects.com/cdn/shop/files/ZOIA_User_Manual_rev02_web.pdf?v=9116714327727882529)).

The grid has **40 physical buttons per page** arranged 8 columns by 5 rows, and the page system can contain up to **64 pages** in a patch; pages can be named, listed, copied, moved, deleted, and imported from other patches, while page import preserves connections inside the imported page and connections between pages imported together ([ZOIA user manual PDF](https://empresseffects.com/cdn/shop/files/ZOIA_User_Manual_rev02_web.pdf?v=9116714327727882529)). This matters because ZOIA patch design is not only “module wiring”; it is also interface design, page layout, and CPU budgeting.

Audio and control signals are intentionally different. The manual describes audio as an internal signal normally interpreted as audio, while CV/control values use a normalized 0-to-1 or -1-to-1 range depending on module behavior; CV inputs can be biased even without incoming connections, while audio connections do not have an equivalent manual bias control ([ZOIA user manual PDF](https://empresseffects.com/cdn/shop/files/ZOIA_User_Manual_rev02_web.pdf?v=9116714327727882529)). The Euroburo manual maps its CV inputs and outputs to eurorack voltage ranges, including unipolar and bipolar CV behavior ([Euroburo manual PDF](https://images.equipboard.com/uploads/item/manual/97410/empress-zoia-euroburo-manual.pdf)).

A connection is made by selecting source and destination blocks, then adjusting connection strength with the encoder; same-page connections can be made by holding both buttons at once, and cross-page connections are made by selecting one endpoint, changing pages, and selecting the other endpoint ([ZOIA user manual PDF](https://empresseffects.com/cdn/shop/files/ZOIA_User_Manual_rev02_web.pdf?v=9116714327727882529)). ZOIA displays connection strength as either percent or dB depending on context, and the manual says clicking the encoder toggles between those views where applicable ([ZOIA user manual PDF](https://empresseffects.com/cdn/shop/files/ZOIA_User_Manual_rev02_web.pdf?v=9116714327727882529)). Connections can cross pages but cannot cross patch slots ([ZOIA user manual PDF](https://empresseffects.com/cdn/shop/files/ZOIA_User_Manual_rev02_web.pdf?v=9116714327727882529)).

The encoder supports coarse, fine, and super-fine editing: the manual describes rotating the encoder for values, pressing while rotating for fine editing, and Shift+encoder for super-fine editing ([ZOIA user manual PDF](https://empresseffects.com/cdn/shop/files/ZOIA_User_Manual_rev02_web.pdf?v=9116714327727882529)). Firmware 2.40 specifically changed encoder sensitivity and added push+twist fine control and Shift+rotary super-fine control, so some older tutorial gestures may predate the current feel ([official changelog text](https://cdn.shopify.com/s/files/1/0028/5462/files/zoia_changelog_74aa73a7-3b95-425b-ba10-baf85de31592.txt?v=1770216051)).

### 1.2 Starred parameters are a hidden performance layer

The **Starred Parameters** list is one of ZOIA’s most important performance features: pressing Star while a parameter or connection is selected adds it to the starred list, and pressing Star when nothing is selected opens the starred list for quick access ([ZOIA user manual PDF](https://empresseffects.com/cdn/shop/files/ZOIA_User_Manual_rev02_web.pdf?v=9116714327727882529)). The manual also says pressing Star again on a starred item lets you assign MIDI CC control, and the “learn” option listens for the next incoming MIDI CC message to assign control automatically ([ZOIA user manual PDF](https://empresseffects.com/cdn/shop/files/ZOIA_User_Manual_rev02_web.pdf?v=9116714327727882529)). ZOIA Librarian 2.1 added support for starred parameters with MIDI CC in exported patches, which makes starred controls more portable between app-edited and pedal-edited patches ([ZOIA Librarian changelog](https://raw.githubusercontent.com/meanmedianmoge/zoia_lib/refs/heads/master/documentation/Changelog.txt)).

Community trick: use **Value** modules as intermediaries for starred MIDI mappings and external feedback. The community tips document explains that module parameters do not automatically act as CC sources, so if a value must both respond to a CC and be sent back out as MIDI feedback, a Value module can sit between the physical/external control and the destination parameter; the Value is starred and MIDI-learned, and its output drives both the destination and a MIDI CC Out module ([community tips document](https://docs.google.com/document/u/0/d/1bDqMHjLc4GCYtf2yGNHgjkDqQJ6zrRVuCZohJdKkWWc/mobilebasic)). The same community section warns to change MIDI Consume settings when using external feedback to avoid loops ([community tips document](https://docs.google.com/document/u/0/d/1bDqMHjLc4GCYtf2yGNHgjkDqQJ6zrRVuCZohJdKkWWc/mobilebasic)).

### 1.3 Undo exists now, but older references can be misleading

Current ZOIA has a real Undo button and undo stack behavior, but this became much more useful in firmware 2.10. The official changelog says firmware 2.10 added undo levels on the patch screen and made connection add/delete, module delete/move, star/unstar, and randomization undoable; it also lists actions that clear the undo stack, such as adding/copying/editing modules, copying a page, or deleting a patch ([official changelog text](https://cdn.shopify.com/s/files/1/0028/5462/files/zoia_changelog_74aa73a7-3b95-425b-ba10-baf85de31592.txt?v=1770216051)). The official manual documents Undo as a utility button in the current operating model ([ZOIA user manual PDF](https://empresseffects.com/cdn/shop/files/ZOIA_User_Manual_rev02_web.pdf?v=9116714327727882529)).

There is no separately documented official UI feature named “Buffer” in the current manual sources reviewed; “1 Buffer Delay” is a module name in the historical module list, while undo behavior is documented in the manual/changelog ([ZOIA user manual PDF](https://empresseffects.com/cdn/shop/files/ZOIA_User_Manual_rev02_web.pdf?v=9116714327727882529), [ZOIA Cheatsheet CSV](https://raw.githubusercontent.com/sensai7/ZOIACheatsheet/master/zoiaCSV.csv), [official changelog text](https://cdn.shopify.com/s/files/1/0028/5462/files/zoia_changelog_74aa73a7-3b95-425b-ba10-baf85de31592.txt?v=1770216051)). If older forum posts refer to undo as if it did nothing, treat them as pre-2.10 context unless firmware is stated.

### 1.4 Performance Mode hides the patch-editor surface

Shift+Back enters **Performance Mode**, and the manual says Back lights magenta in that state ([ZOIA user manual PDF](https://empresseffects.com/cdn/shop/files/ZOIA_User_Manual_rev02_web.pdf?v=9116714327727882529)). Firmware 1.13 added Performance Mode, so patches or tutorials from earlier firmware may not mention it ([official changelog text](https://cdn.shopify.com/s/files/1/0028/5462/files/zoia_changelog_74aa73a7-3b95-425b-ba10-baf85de31592.txt?v=1770216051)). The practical patch-design lesson is to build a front page with UI Buttons, Pixels, Value modules, and starred controls, then enter Performance Mode to avoid accidentally editing modules while playing.

### 1.5 Page import is the secret to personal libraries

The manual says page import can import a page from another patch and will preserve connections within a page, as well as connections between imported pages when multiple connected pages are imported together ([ZOIA user manual PDF](https://empresseffects.com/cdn/shop/files/ZOIA_User_Manual_rev02_web.pdf?v=9116714327727882529)). This makes reusable “utility pages” practical: MIDI hub pages, tap-tempo pages, flexi-switch pages, quantizer/sequencer pages, or mixer/output pages can be maintained as a personal library. Christopher H. M. Jacques published “Utility Pages 1” on Patchstorage as a set of reusable ZOIA pages, including bypass-with-trails utilities, and the community tips document links his Patreon/community work as a reference point ([Utility Pages 1 on Patchstorage](https://patchstorage.com/utility-pages-1/), [community tips document](https://docs.google.com/document/u/0/d/1bDqMHjLc4GCYtf2yGNHgjkDqQJ6zrRVuCZohJdKkWWc/mobilebasic)).

### 1.6 Stompswitch modules become custom controls in auxiliary mode

ZOIA’s physical stompswitches normally handle bypass/scroll behavior, but the Stompswitch interface module can expose them as patch controls. The manual says holding Bypass+Scroll switches the stompswitches between their normal duties and auxiliary/custom-module duties, and the module index describes the Stompswitch module as a patch control that can operate from onboard or external switches ([ZOIA user manual PDF](https://empresseffects.com/cdn/shop/files/ZOIA_User_Manual_rev02_web.pdf?v=9116714327727882529), [official module-index spreadsheet](https://docs.google.com/spreadsheets/d/1a9q2OCo_Sd_IbWsH99wlFvjcTIN20e7wb5Qgn5fLxms/edit?usp=sharing)). Community examples use Stompswitch modules for flexi-switches, momentary/latching hybrids, loopers, freeze buttons, tap tempo, record/play toggles, and page-local controls ([community tips document](https://docs.google.com/document/u/0/d/1bDqMHjLc4GCYtf2yGNHgjkDqQJ6zrRVuCZohJdKkWWc/mobilebasic)).

### 1.7 Device Control is a patchable way to control the device itself

Firmware 2.20 added a **Device Control** module, and the module index describes it as a CV-controlled interface module that can control device behaviors such as audio bypass, Performance Mode, and stompswitch auxiliary mode ([official changelog text](https://cdn.shopify.com/s/files/1/0028/5462/files/zoia_changelog_74aa73a7-3b95-425b-ba10-baf85de31592.txt?v=1770216051), [official module-index spreadsheet](https://docs.google.com/spreadsheets/d/1a9q2OCo_Sd_IbWsH99wlFvjcTIN20e7wb5Qgn5fLxms/edit?usp=sharing)). This is underused because it looks like a utility module, but it lets a patch reconfigure the pedal’s own performance state in response to CV, MIDI, sequencers, or UI controls.

### 1.8 “Old module” behavior exists for patch compatibility

Firmware 2.00 introduced optimized modules while preserving earlier module behavior in existing patches; the changelog says older saved modules can behave as versioned “old” modules so old patches do not break automatically ([official changelog text](https://cdn.shopify.com/s/files/1/0028/5462/files/zoia_changelog_74aa73a7-3b95-425b-ba10-baf85de31592.txt?v=1770216051)). This explains why two patches that appear to contain the same module type may not always behave identically after firmware updates: one may contain an older module version preserved for compatibility, while a newly added module uses the current implementation ([official changelog text](https://cdn.shopify.com/s/files/1/0028/5462/files/zoia_changelog_74aa73a7-3b95-425b-ba10-baf85de31592.txt?v=1770216051)).

### 1.9 Page-left/page-right pulses are routable Euroburo-era utilities

Firmware 2.20 added Page Left and Page Right pulse outputs to support inter-page connections and Euroburo workflow, and the Euroburo manual describes dedicated page-left/page-right controls in the hardware interface ([official changelog text](https://cdn.shopify.com/s/files/1/0028/5462/files/zoia_changelog_74aa73a7-3b95-425b-ba10-baf85de31592.txt?v=1770216051), [Euroburo manual PDF](https://images.equipboard.com/uploads/item/manual/97410/empress-zoia-euroburo-manual.pdf)). Treat these as patch navigation and interface-design signals, not just menu buttons.

### 1.10 Mac hidden files can break sampler/waveform workflows

The official support article says ZOIA can get stuck on “waveform updating” under firmware 3.0 when hidden macOS files or Spotlight metadata are present on the SD card; the official workaround is to show hidden files on the card and delete unwanted hidden files before using the card in ZOIA ([official waveform-updating support article](https://empresseffects.com/blogs/support-zoia/zoia-gets-stuck-on-waveform-updating-when-running-firmware-3-0)). A Reddit PSA reports the same class of hidden-file issue from the community side, so this is a useful SD-card hygiene rule even if you are not on firmware 3.0 ([Reddit hidden-files PSA](https://www.reddit.com/r/ZOIA/comments/1e47gsd/psa_if_your_zoia_wont_boot_with_certain_sd_cards/)).

### 1.11 The official module universe, organized as a learning checklist

The official module-index spreadsheet is the primary source for exact module options, block labels, ranges, connection suggestions, and average DSP/CPU values on firmware 5 ([official module-index spreadsheet](https://docs.google.com/spreadsheets/d/1a9q2OCo_Sd_IbWsH99wlFvjcTIN20e7wb5Qgn5fLxms/edit?usp=sharing)). The table below is a learning checklist assembled from the official module-index categories, the historical ZOIA Cheatsheet module inventory, and firmware changelog additions; cross-check exact ranges and DSP in the official sheet before publishing patch recipes or CPU budgets ([official module-index spreadsheet](https://docs.google.com/spreadsheets/d/1a9q2OCo_Sd_IbWsH99wlFvjcTIN20e7wb5Qgn5fLxms/edit?usp=sharing), [ZOIA Cheatsheet CSV](https://raw.githubusercontent.com/sensai7/ZOIACheatsheet/master/zoiaCSV.csv), [official changelog text](https://cdn.shopify.com/s/files/1/0028/5462/files/zoia_changelog_74aa73a7-3b95-425b-ba10-baf85de31592.txt?v=1770216051)).

| Category | Modules to learn | Why the category matters |
|---|---|---|
| Interface / I/O | Audio Input, Audio Output, MIDI Notes In, MIDI Pitch Bend, MIDI CC In, MIDI Pressure, MIDI Clock In, MIDI CC Out, MIDI PC Out, MIDI Note Out, MIDI Clock Out, Stompswitch, Pixel, UI Button, Pushbutton, Device Control, Keyboard, CPort Exp/CV In, CPort CV Out, Euroburo CV In, Euroburo CV Out, Euroburo integrated Audio/CV/Pushbutton/Headphone interface blocks | These modules connect the patch to the outside world, the grid, MIDI, expression/CV, stomps, page controls, and Euroburo jacks; the official sheet gives exact block counts, options, and DSP costs ([official module-index spreadsheet](https://docs.google.com/spreadsheets/d/1a9q2OCo_Sd_IbWsH99wlFvjcTIN20e7wb5Qgn5fLxms/edit?usp=sharing), [Euroburo manual PDF](https://images.equipboard.com/uploads/item/manual/97410/empress-zoia-euroburo-manual.pdf)). |
| Audio building blocks | Oscillator, VCA, SV Filter, Multi-Filter, Delay Line, Delay Line in Tap Tempo mode, Audio Panner, Pitch Shifter, Audio Balance, stereo Audio Balance, Audio Mixer, Inverter, Audio In Switch, Audio Out Switch, All Pass Filter, Noise, Audio Multiply, Bit Crusher, Aliaser, 1 Buffer Delay, Looper, Granular, Stereo Spread/Haas, Stereo Spread/Mid-Side, Bit Modulator, Diffuser, Sampler, Reverse Delay | These are the “patch from first principles” modules for synths, modulation effects, loopers, delays, granular processors, routing, feedback, and sample playback; older cheat-sheet names should be cross-checked against the current official sheet and changelog ([ZOIA Cheatsheet CSV](https://raw.githubusercontent.com/sensai7/ZOIACheatsheet/master/zoiaCSV.csv), [official changelog text](https://cdn.shopify.com/s/files/1/0028/5462/files/zoia_changelog_74aa73a7-3b95-425b-ba10-baf85de31592.txt?v=1770216051), [official module-index spreadsheet](https://docs.google.com/spreadsheets/d/1a9q2OCo_Sd_IbWsH99wlFvjcTIN20e7wb5Qgn5fLxms/edit?usp=sharing)). |
| Control / logic / sequencing | LFO, Sequencer, ADSR, Sample and Hold, CV Invert, CV Rectify, Value, Trigger, CV Flip Flop, CV Delay, CV Loop, CV Filter, Slew Limiter, separated-rise/fall Slew Limiter, Clock Divider, Comparator, CV In Switch, CV Out Switch, Quantizer, Steps, Multiplier, Random, Rhythm, Tap to CV, Logic Gate, CV Mixer, Attenuverter | These modules create patch logic, gestures, clocking, memory, note quantization, envelope shape, modulation shape, and state; many of ZOIA’s “impossible” patches are mostly control modules driving a few audio modules ([ZOIA Cheatsheet CSV](https://raw.githubusercontent.com/sensai7/ZOIACheatsheet/master/zoiaCSV.csv), [official changelog text](https://cdn.shopify.com/s/files/1/0028/5462/files/zoia_changelog_74aa73a7-3b95-425b-ba10-baf85de31592.txt?v=1770216051), [community tips document](https://docs.google.com/document/u/0/d/1bDqMHjLc4GCYtf2yGNHgjkDqQJ6zrRVuCZohJdKkWWc/mobilebasic)). |
| Analysis | Onset Detector, Envelope Follower, Pitch Detector | These convert incoming audio into control signals for auto-wah, triggered envelopes, pitch-tracked synths, harmonizers, envelope-driven modulation, and audio-to-MIDI work ([ZOIA Cheatsheet CSV](https://raw.githubusercontent.com/sensai7/ZOIACheatsheet/master/zoiaCSV.csv), [community tips document](https://docs.google.com/document/u/0/d/1bDqMHjLc4GCYtf2yGNHgjkDqQJ6zrRVuCZohJdKkWWc/mobilebasic)). |
| Prebuilt effects | Tone Control, Delay w/Mod, Ping Pong Delay, OD & Distortion, Fuzz, Compressor, Gate, Plate Reverb, Hall Reverb, Room Reverb, Ghostverb, Reverb Lite, Phaser, Chorus, Vibrato, Flanger, Tremolo, Env Filter, Ring Modulator, Cabinet Sim, Reverse Delay, Univibe | These are complete effect modules that can save CPU and patching time compared with building effects from primitives, while still allowing ZOIA-style modulation and control routing ([ZOIA Cheatsheet CSV](https://raw.githubusercontent.com/sensai7/ZOIACheatsheet/master/zoiaCSV.csv), [official changelog text](https://cdn.shopify.com/s/files/1/0028/5462/files/zoia_changelog_74aa73a7-3b95-425b-ba10-baf85de31592.txt?v=1770216051), [official module-index spreadsheet](https://docs.google.com/spreadsheets/d/1a9q2OCo_Sd_IbWsH99wlFvjcTIN20e7wb5Qgn5fLxms/edit?usp=sharing)). |

Officially visible firmware-5 module-index examples confirm the level of exact detail available in the canonical sheet: Audio Output exposes channel/gain options and output gain ranges; MIDI Notes In exposes note, gate, velocity, trigger, voice count, priority, greedy allocation, low/high note, and trigger-pulse options; Oscillator exposes waveform/FM/duty/upsampling options and frequency mapping; Euroburo CV modules expose unipolar/bipolar voltage ranges and clock-filter/transpose behavior ([official module-index spreadsheet](https://docs.google.com/spreadsheets/d/1a9q2OCo_Sd_IbWsH99wlFvjcTIN20e7wb5Qgn5fLxms/edit?usp=sharing)).

### 1.12 ZOIA vs Euroburo: the practical differences

ZOIA is a pedal-format device with stereo audio I/O, 1/8-inch TRS MIDI, a Control Port for MIDI/expression/CV/external switch modes, stompswitches, SD-card patch/firmware workflow, and internal patch slots ([ZOIA user manual PDF](https://empresseffects.com/cdn/shop/files/ZOIA_User_Manual_rev02_web.pdf?v=9116714327727882529), [official ZOIA product page](https://empresseffects.com/products/zoia?srsltid=AfmBOopGu0RJkIuTR7WCOjkBtV9VwQ0OszEEVvCCBKRtNIjo7_X0OvkC)). Euroburo is a eurorack module or desktop unit with eurorack power/optional desktop enclosure, dedicated CV inputs/outputs, two pushbuttons, integrated interface modules near the I/O jacks, a headphone output cloned from the main output, and Euroburo-specific CV voltage mappings ([Euroburo manual PDF](https://images.equipboard.com/uploads/item/manual/97410/empress-zoia-euroburo-manual.pdf)).

Firmware 2.20 made Euroburo compatibility official and added Euroburo factory presets, Euro module access on ZOIA, page-left/page-right pulses for inter-page connections, Device Control, Euroburo bypass behavior, and CV-output clipping fixes ([official changelog text](https://cdn.shopify.com/s/files/1/0028/5462/files/zoia_changelog_74aa73a7-3b95-425b-ba10-baf85de31592.txt?v=1770216051)). The Euroburo manual says integrated interface modules are permanently located near the jacks and can be edited or connected but not treated like ordinary movable modules ([Euroburo manual PDF](https://images.equipboard.com/uploads/item/manual/97410/empress-zoia-euroburo-manual.pdf)). On Euroburo, Shift+Audio I/O toggles bypass according to the Euroburo manual and firmware notes ([Euroburo manual PDF](https://images.equipboard.com/uploads/item/manual/97410/empress-zoia-euroburo-manual.pdf), [official changelog text](https://cdn.shopify.com/s/files/1/0028/5462/files/zoia_changelog_74aa73a7-3b95-425b-ba10-baf85de31592.txt?v=1770216051)).

USB is not documented as a patch-transfer, firmware-update, MIDI, or SD-replacement workflow in the official manual sources reviewed; the official user workflows are microSD for patch/firmware/sample files and 1/8-inch TRS/Control-Port MIDI for MIDI communication ([ZOIA user manual PDF](https://empresseffects.com/cdn/shop/files/ZOIA_User_Manual_rev02_web.pdf?v=9116714327727882529), [latest firmware page](https://empresseffects.com/blogs/support-zoia/updating-firmware-on-the-zoia-and-euroburo-latest-version), [official MIDI type support article](https://empresseffects.com/blogs/support-zoia/whats-the-midi-type-that-our-pedals-use)).

---

## 2. Firmware notes & version gems

### 2.1 Update workflow and safety rules

The official firmware page says to back up internal patches first through **Config Menu > Patches to SD Card**, then copy the `eezoXXXX.bin` firmware file to the root of a FAT32-formatted high-capacity microSD card ([latest firmware page](https://empresseffects.com/blogs/support-zoia/updating-firmware-on-the-zoia-and-euroburo-latest-version)). The official page also says the SD card goes into ZOIA with pins facing up and into Euroburo with pins facing down, and that SD-card extenders should not be used because they can make the update slower or unreliable ([latest firmware page](https://empresseffects.com/blogs/support-zoia/updating-firmware-on-the-zoia-and-euroburo-latest-version)). The same page says the update can take up to three minutes, the screen may be blank for up to five minutes, and the firmware file should be deleted from the SD card after the device boots to avoid repeated updates ([latest firmware page](https://empresseffects.com/blogs/support-zoia/updating-firmware-on-the-zoia-and-euroburo-latest-version)).

The ZOIA manual says firmware files go on the root of the SD card and patch files must use a three-digit number prefix and `.bin` extension; it also says the card must be SDHC/SDXC, FAT32, and single-partition ([ZOIA user manual PDF](https://empresseffects.com/cdn/shop/files/ZOIA_User_Manual_rev02_web.pdf?v=9116714327727882529)). The manual’s SD-card workflow means patch file identity is filename-sensitive: the numeric prefix determines the internal patch slot when importing, and duplicate prefixes inside a folder create ambiguity; community import instructions echo this by recommending unique three-digit prefixes for all patches in a folder ([ZOIA user manual PDF](https://empresseffects.com/cdn/shop/files/ZOIA_User_Manual_rev02_web.pdf?v=9116714327727882529), [Reddit Patchstorage import thread](https://www.reddit.com/r/ZOIA/comments/ut2f96/uploading_patchstorage_patches_to_zoia/)).

### 2.2 Firmware 5.32 / 5.31 / 5.30 gems

Firmware 5.32, dated 2025-12-15 in the official changelog, fixed bank-preset UI bypass behavior, a startup hang when start patch was 0, and startup bypass-state issues ([official changelog text](https://cdn.shopify.com/s/files/1/0028/5462/files/zoia_changelog_74aa73a7-3b95-425b-ba10-baf85de31592.txt?v=1770216051)). Firmware 5.31 fixed a MIDI bug where CC value 127 was not processed, which matters for controllers that use full-range CC values or use 127 as an “on” state ([official changelog text](https://cdn.shopify.com/s/files/1/0028/5462/files/zoia_changelog_74aa73a7-3b95-425b-ba10-baf85de31592.txt?v=1770216051)). Firmware 5.30 fixed a CV Mixer bug and expanded Granular behavior with 4-second and 16-second grain sizes, plus new behavior where grain parameters update at the end of silence and density at zero produces no output ([official changelog text](https://cdn.shopify.com/s/files/1/0028/5462/files/zoia_changelog_74aa73a7-3b95-425b-ba10-baf85de31592.txt?v=1770216051)).

Patch-design implication: use firmware 5.30+ for extreme granular freeze, long grains, and “cloud-to-silence” patches, and use firmware 5.31+ if your MIDI controller sends CC 127 as a meaningful state ([official changelog text](https://cdn.shopify.com/s/files/1/0028/5462/files/zoia_changelog_74aa73a7-3b95-425b-ba10-baf85de31592.txt?v=1770216051)).

### 2.3 Firmware 5.20 / 5.00: Reverse Delay, Univibe, CPU, and factory patches

Firmware 5 introduced or finalized new factory content and new effect modules, including Reverse Delay and Univibe, and the changelog notes a CPU performance improvement of about 14% ([official changelog text](https://cdn.shopify.com/s/files/1/0028/5462/files/zoia_changelog_74aa73a7-3b95-425b-ba10-baf85de31592.txt?v=1770216051)). The official firmware page says firmware 5 has new factory patches for ZOIA only, while Euroburo users can download the patches separately, and it notes that Groovebox and Grand Piano require sample files on microSD ([latest firmware page](https://empresseffects.com/blogs/support-zoia/updating-firmware-on-the-zoia-and-euroburo-latest-version)). The official factory-patches page identifies newer patches such as **NebUniVibe**, **Groovebox**, **Grand Piano**, **Duskwalker**, **Marco Polo**, **Autocell**, and **Promethium** as deconstruction targets for modulation, sampling, sequencing, and generative design ([official factory patches page](https://empresseffects.com/pages/zoia-factory-patches)).

### 2.4 Firmware 4.x: sampler/sequencer era

Firmware 4.00 added the Sampler workflow and major Sequencer upgrades, including CV step behavior, CV ramp output, key input, per-step programming, and sequencer pages above 32 steps ([official changelog text](https://cdn.shopify.com/s/files/1/0028/5462/files/zoia_changelog_74aa73a7-3b95-425b-ba10-baf85de31592.txt?v=1770216051), [ZOIA 4.0 Sampler/Sequencer Guide](https://cdn.shopify.com/s/files/1/0028/5462/files/ZOIA_4.0_Sequencer_Sampler_Guide_rev3.pdf?v=1727875139)). The Sampler/Sequencer Guide says the Sequencer can use up to 8 pages of 32 steps for a 256-step sequence, and it describes CV step-selection behavior, key input behavior, and CV ramp interpolation between values ([ZOIA 4.0 Sampler/Sequencer Guide](https://cdn.shopify.com/s/files/1/0028/5462/files/ZOIA_4.0_Sequencer_Sampler_Guide_rev3.pdf?v=1727875139)).

Firmware 4.20 reduced sequencer patch data size and fixed several stability issues, but the official changelog says sequencer patches saved on 4.20+ will not load properly on older firmware ([official changelog text](https://cdn.shopify.com/s/files/1/0028/5462/files/zoia_changelog_74aa73a7-3b95-425b-ba10-baf85de31592.txt?v=1770216051)). This is a real release-management issue for shared Patchstorage patches: include the firmware version in patch notes when using Sampler, Logic Gate, multi-page Sequencer, CV Ramp, or 4.20+ sequencer data ([official changelog text](https://cdn.shopify.com/s/files/1/0028/5462/files/zoia_changelog_74aa73a7-3b95-425b-ba10-baf85de31592.txt?v=1770216051), [Patchstorage ZOIA platform](https://patchstorage.com/platform/zoia/)).

### 2.5 Firmware 3.x: sampler beta, Logic Gate, and sample-file gotchas

Firmware 3.00 introduced Sampler beta and Logic Gate according to the official changelog, and firmware 3.01 added extra WAV support ([official changelog text](https://cdn.shopify.com/s/files/1/0028/5462/files/zoia_changelog_74aa73a7-3b95-425b-ba10-baf85de31592.txt?v=1770216051)). The official support article about “waveform updating” says hidden macOS files could make ZOIA hang while preparing sample waveforms under firmware 3.0, so sample users should keep microSD cards clean and remove hidden metadata files when problems appear ([official waveform-updating support article](https://empresseffects.com/blogs/support-zoia/zoia-gets-stuck-on-waveform-updating-when-running-firmware-3-0)).

### 2.6 Firmware 2.x: the “serious patcher” foundation

Firmware 2.00 delivered an average CPU optimization of about 24% across popular PatchStorage patches, added track-and-hold behavior to Sample and Hold, improved Delay Line linear CV behavior, added CV Filter rise/fall options, added CV Mixer and Attenuverter behavior, added alternate views, and introduced versioned module compatibility for older patches ([official changelog text](https://cdn.shopify.com/s/files/1/0028/5462/files/zoia_changelog_74aa73a7-3b95-425b-ba10-baf85de31592.txt?v=1770216051)). Firmware 2.10 added the meaningful Undo stack described above ([official changelog text](https://cdn.shopify.com/s/files/1/0028/5462/files/zoia_changelog_74aa73a7-3b95-425b-ba10-baf85de31592.txt?v=1770216051)). Firmware 2.20 made Euroburo compatibility official and added Device Control, Euroburo factory presets, Euro-specific modules, page-left/page-right pulses, and related fixes ([official changelog text](https://cdn.shopify.com/s/files/1/0028/5462/files/zoia_changelog_74aa73a7-3b95-425b-ba10-baf85de31592.txt?v=1770216051)).

Firmware 2.30 added MIDI CC Setup in the Config menu, adjusted note displays for MIDI Note Out and oscillator/ring-mod ranges, changed SV Filter frequency behavior, and removed the stompswitch module from the Euroburo module menu where it did not make sense ([official changelog text](https://cdn.shopify.com/s/files/1/0028/5462/files/zoia_changelog_74aa73a7-3b95-425b-ba10-baf85de31592.txt?v=1770216051)). Firmware 2.40 changed encoder sensitivity and added fine/super-fine gestures, while firmware 2.50 made the patch list wrap around from 63 to 0 ([official changelog text](https://cdn.shopify.com/s/files/1/0028/5462/files/zoia_changelog_74aa73a7-3b95-425b-ba10-baf85de31592.txt?v=1770216051)). Firmware 2.60 expanded Quantizer scales and changed page-list import/copy CPU behavior, and firmware 2.70 restored Delay Line tap-tempo CV behavior ([official changelog text](https://cdn.shopify.com/s/files/1/0028/5462/files/zoia_changelog_74aa73a7-3b95-425b-ba10-baf85de31592.txt?v=1770216051)).

### 2.7 Firmware 1.13: the overlooked MIDI/control upgrade

Firmware 1.13 added RoundRobin behavior to MIDI Notes In, expanded the note scale, added an all-notes-off panic, added MIDI Clock Out at 24 PPQN with transport/song-position behavior, improved MIDI Clock In multipliers, added MIDI Pitch Bend, added Tap to CV, expanded Clock Divider divisor/dividend behavior to 1-32, improved linear CV behavior for LFO/ADSR, added Performance Mode, and changed boot/status behavior such as firmware-version display and screen saver timing ([official changelog text](https://cdn.shopify.com/s/files/1/0028/5462/files/zoia_changelog_74aa73a7-3b95-425b-ba10-baf85de31592.txt?v=1770216051)). If a tutorial predates firmware 1.13, assume MIDI clocking, tap-to-CV, and Performance Mode workflows may be incomplete compared with current ZOIA ([official changelog text](https://cdn.shopify.com/s/files/1/0028/5462/files/zoia_changelog_74aa73a7-3b95-425b-ba10-baf85de31592.txt?v=1770216051)).

### 2.8 Old firmware and hardware compatibility

The official old-firmware page lists old firmware downloads and warns that firmware 1.05 and lower will not work on ZOIAs with serial numbers around 2000 and higher ([official old firmware page](https://empresseffects.com/blogs/support-zoia/old-firmware-versions-for-the-zoia)). This matters if you inherit old patches, try to reproduce early forum behavior, or downgrade to test a legacy bug; do not assume every firmware can run on every hardware unit ([official old firmware page](https://empresseffects.com/blogs/support-zoia/old-firmware-versions-for-the-zoia)).

---

## 3. MIDI / CV / control tricks

### 3.1 Physical MIDI, MIDI type, and patch changes

ZOIA uses 1/8-inch TRS MIDI and the official support article says Empress MIDI pedals use **MIDI Type A**, the same TRS wiring used by Korg and Make Noise ([official MIDI type support article](https://empresseffects.com/blogs/support-zoia/whats-the-midi-type-that-our-pedals-use)). Another official support article says ZOIA listens on the tip and sends on the ring, and that ZOIA includes an optocoupler for broad compatibility; if MIDI problems occur with splitters or marginal wiring, Empress suggests trying an active MIDI splitter ([official MIDI troubleshooting article](https://empresseffects.com/blogs/support-zoia/midi-is-not-working-with-zoia-but-works-with-everything-else)).

The ZOIA manual says MIDI Program Change messages select patches beginning at patch 0, so external program-change lists that start at 1 must be offset or labeled carefully ([ZOIA user manual PDF](https://empresseffects.com/cdn/shop/files/ZOIA_User_Manual_rev02_web.pdf?v=9116714327727882529)). The manual also says the Control Port can be configured for MIDI, expression, CV, or external switch behavior, but when the dedicated onboard MIDI ports are in use the Control Port can only send MIDI out rather than act as another receive path ([ZOIA user manual PDF](https://empresseffects.com/cdn/shop/files/ZOIA_User_Manual_rev02_web.pdf?v=9116714327727882529)).

### 3.2 Built-in MIDI CC remote-control map

The official MIDI CC article gives device-level CCs that are separate from per-patch MIDI modules and starred parameters ([official MIDI CC article](https://empresseffects.com/blogs/support-zoia/controlling-the-zoia-and-euroburo-via-midi-cc-control-change-values)). On the configured MIDI channel, **CC 60** controls bypass with values 0 = bypass, 64 = toggle, and 127 = engage ([official MIDI CC article](https://empresseffects.com/blogs/support-zoia/controlling-the-zoia-and-euroburo-via-midi-cc-control-change-values)). **CC 61** emulates button press and **CC 62** emulates button release; values 0-39 correspond to the 40 grid buttons, 40/41 to Page Left/Page Right, 42 to Back, 43 to Shift, 44-45 to Euroburo pushbuttons, 46-49 to CV inputs, 50-53 to CV outputs, 54-55 to audio inputs, 56-57 to audio outputs, 58 to headphone, 124/125/126 to right/middle/left stomp, and 127 to the rotary switch ([official MIDI CC article](https://empresseffects.com/blogs/support-zoia/controlling-the-zoia-and-euroburo-via-midi-cc-control-change-values)). **CC 63** emulates rotary movement, where value minus 64 equals the number of turns; for example 65 is one clockwise step and 63 is one counterclockwise step ([official MIDI CC article](https://empresseffects.com/blogs/support-zoia/controlling-the-zoia-and-euroburo-via-midi-cc-control-change-values)).

Firmware 4.00 reserved MIDI CC 61-63 for buttons, stomps, and rotary control, so old custom MIDI templates that used those CCs for ordinary patch control should be revised ([official changelog text](https://cdn.shopify.com/s/files/1/0028/5462/files/zoia_changelog_74aa73a7-3b95-425b-ba10-baf85de31592.txt?v=1770216051), [official MIDI CC article](https://empresseffects.com/blogs/support-zoia/controlling-the-zoia-and-euroburo-via-midi-cc-control-change-values)).

### 3.3 MIDI modules: exact behavior to exploit

The official module index gives exact per-module behavior, options, and average DSP for all MIDI interface modules ([official module-index spreadsheet](https://docs.google.com/spreadsheets/d/1a9q2OCo_Sd_IbWsH99wlFvjcTIN20e7wb5Qgn5fLxms/edit?usp=sharing)). MIDI Notes In can expose note, gate, velocity, and trigger outputs; it supports up to 8 voices, channel selection, voice priority modes such as newest/oldest/highest/lowest/round-robin, greedy allocation, low/high note limits, and trigger-pulse options ([official module-index spreadsheet](https://docs.google.com/spreadsheets/d/1a9q2OCo_Sd_IbWsH99wlFvjcTIN20e7wb5Qgn5fLxms/edit?usp=sharing)). MIDI Clock In exposes clock/reset/running outputs and beat multipliers/dividers such as 1, 2, 3, 4, 6, 12, 1/2, 1/3, 1/4, 1/6, and 1/12 according to the official sheet ([official module-index spreadsheet](https://docs.google.com/spreadsheets/d/1a9q2OCo_Sd_IbWsH99wlFvjcTIN20e7wb5Qgn5fLxms/edit?usp=sharing)). MIDI Clock Out can generate MIDI clock from CV or tap, and exposes send/run/reset/song-position behavior according to the official sheet and changelog ([official module-index spreadsheet](https://docs.google.com/spreadsheets/d/1a9q2OCo_Sd_IbWsH99wlFvjcTIN20e7wb5Qgn5fLxms/edit?usp=sharing), [official changelog text](https://cdn.shopify.com/s/files/1/0028/5462/files/zoia_changelog_74aa73a7-3b95-425b-ba10-baf85de31592.txt?v=1770216051)).

Community trick: for MIDI note output, the tips document’s basic recipe is MIDI Notes In or Keyboard into MIDI Note Out, with gate connected to gate and note connected to note; the same section uses note CV connection strength as keyboard tracking, where smaller or larger connection strengths produce less or more pitch-related change in a destination such as filter cutoff ([community tips document](https://docs.google.com/document/u/0/d/1bDqMHjLc4GCYtf2yGNHgjkDqQJ6zrRVuCZohJdKkWWc/mobilebasic)).

### 3.4 Control Port, expression, CV, and external switch

The ZOIA manual’s Config menu lets the Control Port be set to expression, CV, MIDI, or external switch behavior, and the Control Port CV mode uses 0-5 V behavior ([ZOIA user manual PDF](https://empresseffects.com/cdn/shop/files/ZOIA_User_Manual_rev02_web.pdf?v=9116714327727882529)). The official expression-pedal support article says ZOIA expects expression signal on the **tip**, 3.3 V on the **ring**, and ground on the **sleeve**; it lists compatible expression pedals such as Mission EP-1/EP-2, M-Audio EX-P, Roland EV-5, Lead Foot LFX-1, Boss FV-500L, Boss EV-30, and Moog EP-2 ([official expression pedal article](https://empresseffects.com/blogs/support-zoia/what-expression-pedals-can-i-use)). A second official support article explains that expression pedals wired with signal on the ring may compress all useful motion into roughly the first 10% of travel, which is a wiring/pinout mismatch rather than a ZOIA calibration problem ([official expression troubleshooting article](https://empresseffects.com/blogs/support-zoia/my-expression-pedal-only-controls-effect-in-the-first-10-of-its-travel-whats-going-on)).

Community trick: when an expression pedal or external CV is jumpy, route it through a **Slew Limiter** before the destination; for recordable expression automation, the community tips document recommends routing Control Port CV/Exp into a Value module, the Value output to the destination and a CV Looper, then using a pushbutton or stompswitch to record/play back the automation ([community tips document](https://docs.google.com/document/u/0/d/1bDqMHjLc4GCYtf2yGNHgjkDqQJ6zrRVuCZohJdKkWWc/mobilebasic)).

### 3.5 Euroburo CV: treat voltage ranges as module options, not assumptions

The Euroburo manual maps CV inputs/outputs to eurorack voltages and explains the difference between unipolar and bipolar normalized CV ranges ([Euroburo manual PDF](https://images.equipboard.com/uploads/item/manual/97410/empress-zoia-euroburo-manual.pdf)). The official module index gives exact options for Euroburo CV In/Out, including 0-10 V, 0-5 V, 0-to-1 and -1-to-1 normalized ranges, clock-filter options, and transpose behavior ([official module-index spreadsheet](https://docs.google.com/spreadsheets/d/1a9q2OCo_Sd_IbWsH99wlFvjcTIN20e7wb5Qgn5fLxms/edit?usp=sharing)). Firmware 2.20 specifically fixed Euroburo CV-output clipping behavior and changed default transpose behavior in beta notes, so older beta-era Euroburo patch notes should be treated carefully ([official changelog text](https://cdn.shopify.com/s/files/1/0028/5462/files/zoia_changelog_74aa73a7-3b95-425b-ba10-baf85de31592.txt?v=1770216051)).

### 3.6 CV is summing, so offset cancellation is a patch-design tool

ZOIA sums CV connections at inputs, which is powerful but can surprise users when automation or expression control leaves an offset behind; the community tips document gives an offset-cancellation pattern using a Value module, Sample and Hold, CV Invert modules, and a stompswitch so that automation starts from the current parameter value rather than jumping ([community tips document](https://docs.google.com/document/u/0/d/1bDqMHjLc4GCYtf2yGNHgjkDqQJ6zrRVuCZohJdKkWWc/mobilebasic)). The same document applies this to expression recording and CV looper automation, which is a useful general technique for patch macros and performance controls ([community tips document](https://docs.google.com/document/u/0/d/1bDqMHjLc4GCYtf2yGNHgjkDqQJ6zrRVuCZohJdKkWWc/mobilebasic)).

---

## 4. Patch-design techniques that exploit ZOIA's architecture, with exact starter settings

The settings below are practical starting points. Exact module block names, per-option labels, and CPU/DSP costs should be checked in the official module-index spreadsheet before publication or performance use ([official module-index spreadsheet](https://docs.google.com/spreadsheets/d/1a9q2OCo_Sd_IbWsH99wlFvjcTIN20e7wb5Qgn5fLxms/edit?usp=sharing)). Where a recipe comes from the community document, it is marked as such and linked to the source ([community tips document](https://docs.google.com/document/u/0/d/1bDqMHjLc4GCYtf2yGNHgjkDqQJ6zrRVuCZohJdKkWWc/mobilebasic)).

### 4.1 Mono subtractive synth voice from first principles

Purpose: learn ZOIA’s note-CV, oscillator, envelope, filter, VCA, and output architecture. MIDI Notes In exposes note/gate/velocity/trigger outputs, Oscillator exposes waveform/FM/duty/frequency behavior, VCA controls level, and SV Filter provides a fast modulated synth filter path according to the official module index and community synth notes ([official module-index spreadsheet](https://docs.google.com/spreadsheets/d/1a9q2OCo_Sd_IbWsH99wlFvjcTIN20e7wb5Qgn5fLxms/edit?usp=sharing), [community tips document](https://docs.google.com/document/u/0/d/1bDqMHjLc4GCYtf2yGNHgjkDqQJ6zrRVuCZohJdKkWWc/mobilebasic)).

Modules and starting options:

- MIDI Notes In: channel 1, 1 voice, note/gate/velocity/trigger outputs, priority newest, greedy off unless you need legato-style note capture ([official module-index spreadsheet](https://docs.google.com/spreadsheets/d/1a9q2OCo_Sd_IbWsH99wlFvjcTIN20e7wb5Qgn5fLxms/edit?usp=sharing)).
- Oscillator: saw or square waveform, default pitch controlled by note CV, duty-cycle block enabled only if using square/PWM, FM disabled for a first patch ([official module-index spreadsheet](https://docs.google.com/spreadsheets/d/1a9q2OCo_Sd_IbWsH99wlFvjcTIN20e7wb5Qgn5fLxms/edit?usp=sharing)).
- ADSR: attack 5 ms, decay 150 ms, sustain 0.65, release 250 ms as a general plucked/keyboard envelope; use faster attack/decay and lower sustain for bass/pluck patches ([community tips document](https://docs.google.com/document/u/0/d/1bDqMHjLc4GCYtf2yGNHgjkDqQJ6zrRVuCZohJdKkWWc/mobilebasic)).
- SV Filter: low-pass output, cutoff around 0.25 normalized, resonance around 0.25-0.35, “instant”/fast behavior preferred for tight envelope sweeps where available in firmware notes ([community tips document](https://docs.google.com/document/u/0/d/1bDqMHjLc4GCYtf2yGNHgjkDqQJ6zrRVuCZohJdKkWWc/mobilebasic), [official changelog text](https://cdn.shopify.com/s/files/1/0028/5462/files/zoia_changelog_74aa73a7-3b95-425b-ba10-baf85de31592.txt?v=1770216051)).
- VCA: level bias 0, envelope-driven amplitude ([official module-index spreadsheet](https://docs.google.com/spreadsheets/d/1a9q2OCo_Sd_IbWsH99wlFvjcTIN20e7wb5Qgn5fLxms/edit?usp=sharing)).
- Audio Output: stereo or mono as needed, output gain trimmed to avoid clipping; Audio Output gain options and channel behavior are listed in the official module index ([official module-index spreadsheet](https://docs.google.com/spreadsheets/d/1a9q2OCo_Sd_IbWsH99wlFvjcTIN20e7wb5Qgn5fLxms/edit?usp=sharing)).

Connections:

- MIDI Notes In note -> Oscillator frequency at 100%.
- MIDI Notes In gate -> ADSR gate at 100%.
- Oscillator audio -> SV Filter input at 0 dB.
- SV Filter low-pass output -> VCA input at 0 dB.
- ADSR output -> VCA level at 100%.
- VCA output -> Audio Output L/R at 0 dB or lower.
- Optional: ADSR output -> SV Filter cutoff at 25-45% for envelope sweep.
- Optional: MIDI note -> SV Filter cutoff at 50-100% for keyboard tracking; the community tips document discusses keyboard tracking by using note CV connection strength to scale destination movement ([community tips document](https://docs.google.com/document/u/0/d/1bDqMHjLc4GCYtf2yGNHgjkDqQJ6zrRVuCZohJdKkWWc/mobilebasic)).

### 4.2 Pitch-tracked guitar/input synth or harmonizer

Purpose: convert incoming audio pitch and amplitude into a synth voice. The community tips document describes a pitch-detector-to-oscillator approach and notes that a Value module can offset the oscillator to create intervals such as a fifth ([community tips document](https://docs.google.com/document/u/0/d/1bDqMHjLc4GCYtf2yGNHgjkDqQJ6zrRVuCZohJdKkWWc/mobilebasic)).

Modules and settings:

- Audio Input: mono input from instrument.
- Pitch Detector: tracks incoming pitch; use a gate or envelope threshold before relying on the pitch output for clean tracking ([community tips document](https://docs.google.com/document/u/0/d/1bDqMHjLc4GCYtf2yGNHgjkDqQJ6zrRVuCZohJdKkWWc/mobilebasic)).
- Envelope Follower: follows input level.
- Oscillator: sine/triangle for cleaner tracking, saw/square for synth tone.
- Value: interval offset; for a perfect fifth, set the offset so the oscillator tracks seven semitones above the input by ear or by note-CV calibration in the official module-index note scale ([official module-index spreadsheet](https://docs.google.com/spreadsheets/d/1a9q2OCo_Sd_IbWsH99wlFvjcTIN20e7wb5Qgn5fLxms/edit?usp=sharing), [community tips document](https://docs.google.com/document/u/0/d/1bDqMHjLc4GCYtf2yGNHgjkDqQJ6zrRVuCZohJdKkWWc/mobilebasic)).
- VCA: level controlled by Envelope Follower.
- Optional SV Filter: cutoff controlled by Envelope Follower for synth-wah behavior.

Connections:

- Audio Input -> Pitch Detector input.
- Pitch Detector pitch -> Oscillator frequency at 100%.
- Value -> Oscillator frequency as a static offset for interval/harmony.
- Audio Input -> Envelope Follower input.
- Envelope Follower -> VCA level at 100%.
- Oscillator -> VCA -> Audio Output.
- Optional: dry Audio Input -> Audio Balance input A, synth VCA -> Audio Balance input B.

### 4.3 Granular freeze and “Decepticon” near-dry granular trick

Purpose: exploit Granular as an ambience freezer, time smearing engine, or pseudo-dry granular transformer. The community tips document recommends connecting a stomp or pushbutton to Granular freeze and using high density/texture with grain size around 200-400 ms and position around 400-600 ms for freeze-style pads ([community tips document](https://docs.google.com/document/u/0/d/1bDqMHjLc4GCYtf2yGNHgjkDqQJ6zrRVuCZohJdKkWWc/mobilebasic)). Firmware 5.30 expanded Granular with 4-second and 16-second grain sizes, which changes the ceiling for extreme freeze designs ([official changelog text](https://cdn.shopify.com/s/files/1/0028/5462/files/zoia_changelog_74aa73a7-3b95-425b-ba10-baf85de31592.txt?v=1770216051)).

Freeze recipe:

- Audio Input -> Granular -> Audio Output.
- Stompswitch or Pushbutton momentary -> Granular freeze at 100%.
- Density: maximum or near maximum.
- Texture: maximum or near maximum.
- Grain size: 200-400 ms for classic freeze; test 4 s/16 s on firmware 5.30+ for giant smeared freezes ([official changelog text](https://cdn.shopify.com/s/files/1/0028/5462/files/zoia_changelog_74aa73a7-3b95-425b-ba10-baf85de31592.txt?v=1770216051), [community tips document](https://docs.google.com/document/u/0/d/1bDqMHjLc4GCYtf2yGNHgjkDqQJ6zrRVuCZohJdKkWWc/mobilebasic)).
- Position: 400-600 ms as a starting point.
- Mix: route through Audio Balance or VCA if you want dry-through control.

“Decepticon” near-dry granular trick:

- Grains: 8.
- Grain size: maximum.
- Position: minimum.
- Density: maximum.
- Texture: maximum.

The community tips document says this combination approximates the dry signal through Granular, which can be used to morph between ordinary sound and granular freeze without a separate dry path ([community tips document](https://docs.google.com/document/u/0/d/1bDqMHjLc4GCYtf2yGNHgjkDqQJ6zrRVuCZohJdKkWWc/mobilebasic)).

### 4.4 Delay-line feedback network with filtering and safe feedback gain

Purpose: build delays, choruses, flangers, Karplus-Strong-like resonators, and reverb pre-delays from the primitive Delay Line module. The community tips document emphasizes that Delay Line has no built-in dry or repeats control, so repeats are created by routing the delay output back into its input, often through VCA/filter modules ([community tips document](https://docs.google.com/document/u/0/d/1bDqMHjLc4GCYtf2yGNHgjkDqQJ6zrRVuCZohJdKkWWc/mobilebasic)).

Modules and starting settings:

- Audio Input.
- Delay Line: 350-600 ms for a normal delay; 20-80 ms for pre-delay before reverb; 0-20 ms for vibrato/chorus/flanger families ([community tips document](https://docs.google.com/document/u/0/d/1bDqMHjLc4GCYtf2yGNHgjkDqQJ6zrRVuCZohJdKkWWc/mobilebasic)).
- VCA in feedback loop: start around -12 dB to -9 dB equivalent or 25-35% connection strength; reduce if it self-oscillates.
- SV Filter or Multi-Filter in feedback loop: low-pass around 3-6 kHz, resonance low.
- Audio Balance or Audio Mixer for dry/wet.

Connections:

- Audio Input -> Audio Balance dry input.
- Audio Input -> Delay Line input.
- Delay Line output -> VCA -> filter -> Delay Line input for repeats.
- Delay Line output -> Audio Balance wet input.
- Audio Balance -> Audio Output.

Design note: the tips document recommends inserting filters or processors inside the feedback path for tone-shaping repeats and adding a VCA in the loop that opens slowly for evolving delay textures ([community tips document](https://docs.google.com/document/u/0/d/1bDqMHjLc4GCYtf2yGNHgjkDqQJ6zrRVuCZohJdKkWWc/mobilebasic)).

### 4.5 Delay time controlled by tap tempo and uncommon ratios

Purpose: create tempo-synced delays from primitive Delay Line modules. The community tips document says Delay Line has a tap-tempo mode and can be driven by a Stompswitch through a Clock Divider; it also says unusual ratios can be created by chaining Clock Dividers, such as multiplying by 4 and then dividing by 3 to create a 2/3-type relationship in the described patch logic ([community tips document](https://docs.google.com/document/u/0/d/1bDqMHjLc4GCYtf2yGNHgjkDqQJ6zrRVuCZohJdKkWWc/mobilebasic)).

Starter module chain:

- Stompswitch momentary -> Clock Divider tap input.
- Clock Divider output -> Delay Line tap-tempo input.
- Optional second Clock Divider in series for dotted, triplet, or uncommon divisions.
- Optional Value -> Clock Divider divisor/dividend or Delay Line time modulation if exposed in the current module option set.

Firmware note: firmware 1.13 expanded Clock Divider divisor/dividend behavior, and firmware 2.70 restored Delay Line tap-tempo CV behavior, so older patch notes may differ ([official changelog text](https://cdn.shopify.com/s/files/1/0028/5462/files/zoia_changelog_74aa73a7-3b95-425b-ba10-baf85de31592.txt?v=1770216051)).

### 4.6 64-second delay and hold buffer from multiple delay lines

Purpose: exceed a single Delay Line’s maximum delay time and make an audio hold/loop buffer without using Looper. The community tips document says delay time beyond 16 seconds can be achieved by placing multiple Delay Lines in series and feeding the last delay back to the first; four 16-second lines produce a 64-second delay path ([community tips document](https://docs.google.com/document/u/0/d/1bDqMHjLc4GCYtf2yGNHgjkDqQJ6zrRVuCZohJdKkWWc/mobilebasic)).

64-second recipe:

- Delay Line 1 = 16 s.
- Delay Line 2 = 16 s.
- Delay Line 3 = 16 s.
- Delay Line 4 = 16 s.
- Audio Input -> Delay 1 -> Delay 2 -> Delay 3 -> Delay 4 -> Audio Output.
- Delay 4 output -> feedback VCA -> Delay 1 input.
- Add one modulated delay line if you want motion; the community document suggests modulating one line inside the long chain ([community tips document](https://docs.google.com/document/u/0/d/1bDqMHjLc4GCYtf2yGNHgjkDqQJ6zrRVuCZohJdKkWWc/mobilebasic)).

Hold-buffer recipe from the community document:

- Audio Input -> VCA 1 -> Delay Line -> Audio Output.
- Delay Line output -> VCA 2 -> Delay Line input.
- Latching Stompswitch -> VCA 1 so “high” records new input.
- Latching Stompswitch -> Comparator with negative/complement logic -> VCA 2 so “low” recirculates the current buffer.
- Replace the comparator with a CV Switch if you want decay or a third state after release ([community tips document](https://docs.google.com/document/u/0/d/1bDqMHjLc4GCYtf2yGNHgjkDqQJ6zrRVuCZohJdKkWWc/mobilebasic)).

### 4.7 Build chorus, vibrato, flanger, and thru-zero flanger from Delay Line

Purpose: understand modulation effects as delay-time modulation instead of black-box effects. The community tips document gives starting delay-time ranges for classic time-based effects ([community tips document](https://docs.google.com/document/u/0/d/1bDqMHjLc4GCYtf2yGNHgjkDqQJ6zrRVuCZohJdKkWWc/mobilebasic)).

- **Vibrato:** Audio Input -> Delay Line -> Audio Output; set Delay Line around 0-20 ms and modulate delay time with a slow LFO; no dry path ([community tips document](https://docs.google.com/document/u/0/d/1bDqMHjLc4GCYtf2yGNHgjkDqQJ6zrRVuCZohJdKkWWc/mobilebasic)).
- **Chorus:** Audio Input dry plus Audio Input -> Delay Line wet; set delay around 10-30 ms and modulate with a slow LFO; use Audio Balance/Mixer for wet/dry ([community tips document](https://docs.google.com/document/u/0/d/1bDqMHjLc4GCYtf2yGNHgjkDqQJ6zrRVuCZohJdKkWWc/mobilebasic)).
- **Doubler:** same as chorus but use roughly 35-45 ms and less obvious modulation ([community tips document](https://docs.google.com/document/u/0/d/1bDqMHjLc4GCYtf2yGNHgjkDqQJ6zrRVuCZohJdKkWWc/mobilebasic)).
- **Flanger:** use 0-10 ms delay, add feedback Delay Line output -> VCA -> Delay Line input, and keep feedback conservative ([community tips document](https://docs.google.com/document/u/0/d/1bDqMHjLc4GCYtf2yGNHgjkDqQJ6zrRVuCZohJdKkWWc/mobilebasic)).
- **Slapback/comb variant:** use 50-100 ms for a longer metallic/slap effect ([community tips document](https://docs.google.com/document/u/0/d/1bDqMHjLc4GCYtf2yGNHgjkDqQJ6zrRVuCZohJdKkWWc/mobilebasic)).
- **Thru-zero flanger:** use two short Delay Lines around 2-10 ms, modulated with opposite/bipolar LFO movement so one path crosses the other in time; mix paths carefully to avoid harsh level peaks ([community tips document](https://docs.google.com/document/u/0/d/1bDqMHjLc4GCYtf2yGNHgjkDqQJ6zrRVuCZohJdKkWWc/mobilebasic)).

### 4.8 Low-pass gate emulation

Purpose: create Buchla-style amplitude/timbre coupling from ordinary modules. The community tips document says to emulate a low-pass gate by routing audio through a VCA and filter modulated by the same envelope, and it recommends VCA -> filter order with the SV Filter set to fast/instant behavior where possible ([community tips document](https://docs.google.com/document/u/0/d/1bDqMHjLc4GCYtf2yGNHgjkDqQJ6zrRVuCZohJdKkWWc/mobilebasic)).

Starter settings:

- Oscillator or Audio Input -> VCA -> SV Filter low-pass -> Audio Output.
- ADSR: attack 1-5 ms, decay 200-800 ms, sustain 0, release 100-400 ms.
- ADSR -> VCA level at 100%.
- ADSR -> SV Filter cutoff at 40-70%.
- SV Filter cutoff bias low, around 0.1-0.2 normalized.
- Resonance low, around 0.1-0.3.
- Optional Multi-Filter high-pass after the LPG to reduce rumble/leakage, with resonance around 0.1-0.4 as the community document suggests ([community tips document](https://docs.google.com/document/u/0/d/1bDqMHjLc4GCYtf2yGNHgjkDqQJ6zrRVuCZohJdKkWWc/mobilebasic)).

CPU warning: the community document notes that Multi-Filter can sound cleaner at lower resonance but may spike CPU when modulated in real time, while SV Filter is faster for coefficient changes ([community tips document](https://docs.google.com/document/u/0/d/1bDqMHjLc4GCYtf2yGNHgjkDqQJ6zrRVuCZohJdKkWWc/mobilebasic)).

### 4.9 Big Muff-style tone stack from two filters

Purpose: create a familiar tilt/tone control from primitives. The community tips document describes a Big Muff-style tone stack using a low-pass path and a high-pass path mixed by Audio Balance, and it recommends low resonance, around 0.5 or lower ([community tips document](https://docs.google.com/document/u/0/d/1bDqMHjLc4GCYtf2yGNHgjkDqQJ6zrRVuCZohJdKkWWc/mobilebasic)).

Recipe:

- Audio Input -> Multi-Filter low-pass -> Audio Balance input A.
- Audio Input -> Multi-Filter high-pass -> Audio Balance input B.
- Low-pass cutoff: start around 800 Hz-1.2 kHz if the filter view exposes Hz, or around mid-low normalized range if using normalized view.
- High-pass cutoff: start around 800 Hz-1.2 kHz if the filter view exposes Hz, or around mid-low normalized range.
- Resonance/Q: <= 0.5 on both paths.
- Value module -> Audio Balance position for a single “tone” knob.
- Audio Balance -> optional distortion/fuzz/cabinet path or directly to output.

### 4.10 Flexi-switch: momentary tap, latched hold

Purpose: make one footswitch behave like momentary on a tap and latching on a hold. The community tips document gives two versions; the “official community schematic” version uses a momentary Stompswitch, Inverter, two-channel CV In Switch, ADSR with very short attack/decay, Trigger on release, Comparator, and Flip-Flop ([community tips document](https://docs.google.com/document/u/0/d/1bDqMHjLc4GCYtf2yGNHgjkDqQJ6zrRVuCZohJdKkWWc/mobilebasic)).

Community schematic settings:

- Stompswitch: momentary.
- ADSR: shortest attack and decay; Hold Attack/Decay ON; Immediate Release OFF; Retrigger OFF; Hold Attack around 150 ms to define hold threshold ([community tips document](https://docs.google.com/document/u/0/d/1bDqMHjLc4GCYtf2yGNHgjkDqQJ6zrRVuCZohJdKkWWc/mobilebasic)).
- Comparator: threshold set so the ADSR hold state crosses it only on long presses.
- Flip-Flop: toggles latched state.
- CV Switch: selects momentary or latched behavior depending on hold logic.

Doug Krieger’s five-module community variant uses a Stompswitch/Pushbutton, single-channel Out Switch, CV Delay, CV Flip-Flop, and CV Invert; the community tips document links this as the “Switcheroo” style approach ([community tips document](https://docs.google.com/document/u/0/d/1bDqMHjLc4GCYtf2yGNHgjkDqQJ6zrRVuCZohJdKkWWc/mobilebasic)).

### 4.11 Looper bypass/overdub hack

Purpose: make the Looper feel like a performance pedal with clean record/play behavior. The community tips document describes a bypass-overdub workaround where a Stompswitch controls record, an Inverter feeds a two-step one-shot Sequencer gate, the second track triggers Looper playback, and reset uses a CV Delay of about 30 ms ([community tips document](https://docs.google.com/document/u/0/d/1bDqMHjLc4GCYtf2yGNHgjkDqQJ6zrRVuCZohJdKkWWc/mobilebasic)).

Starter graph:

- Stompswitch -> Looper record.
- Stompswitch -> CV Invert -> two-step Sequencer gate.
- Sequencer track 2 -> Trigger -> Looper playback.
- Stompswitch/CV Invert -> Trigger -> CV Delay around 30 ms -> Sequencer reset.
- Audio Input -> Looper -> Audio Output.

### 4.12 Chromatic sample playback using Looper/Sampler pitch-speed behavior

The community tips document says that when using a normal keyboard to play a sampled/looped source chromatically, a pitch/speed offset around **-0.325** can center playback around C4 and prevent excessively high “bird shriek” transposition ([community tips document](https://docs.google.com/document/u/0/d/1bDqMHjLc4GCYtf2yGNHgjkDqQJ6zrRVuCZohJdKkWWc/mobilebasic)). The official Sampler/Sequencer Guide says Sampler speed/pitch ranges from 3.1% to 3200%, corresponding to -60 to +60 semitones, and describes using keyboard note/gate behavior for sample playback ([ZOIA 4.0 Sampler/Sequencer Guide](https://cdn.shopify.com/s/files/1/0028/5462/files/ZOIA_4.0_Sequencer_Sampler_Guide_rev3.pdf?v=1727875139)).

Starter Sampler keyboard recipe:

- Sampler: trigger or gate playback, reverse off, sample loaded from microSD.
- Keyboard or MIDI Notes In note -> Sampler speed/pitch at the documented pitch-control input.
- Keyboard/MIDI gate or trigger -> Sampler trigger/gate.
- Set base pitch/speed offset around -0.325 if reproducing the community Looper/sample trick, then tune by ear or with a tuner ([community tips document](https://docs.google.com/document/u/0/d/1bDqMHjLc4GCYtf2yGNHgjkDqQJ6zrRVuCZohJdKkWWc/mobilebasic), [ZOIA 4.0 Sampler/Sequencer Guide](https://cdn.shopify.com/s/files/1/0028/5462/files/ZOIA_4.0_Sequencer_Sampler_Guide_rev3.pdf?v=1727875139)).

### 4.13 Automatic shift register / Turing-machine sequencer

Purpose: build generative melodies and pseudo-random looping sequences from control modules. The community tips document describes an automatic shift-register/Turing-machine patch by chaining Sample and Hold modules with a common clock, then using a CV Switch to inject new values from Random or recirculate the last value; it also notes that later firmware added track-and-hold options to Sample and Hold ([community tips document](https://docs.google.com/document/u/0/d/1bDqMHjLc4GCYtf2yGNHgjkDqQJ6zrRVuCZohJdKkWWc/mobilebasic), [official changelog text](https://cdn.shopify.com/s/files/1/0028/5462/files/zoia_changelog_74aa73a7-3b95-425b-ba10-baf85de31592.txt?v=1770216051)).

Eight-step starter settings:

- 8 x Sample and Hold: all clocked by the same LFO square or Clock Divider output.
- Random -> CV Switch input A.
- Last Sample and Hold output -> CV Switch input B.
- Value “mutation” control -> CV Switch select; low values favor recirculation, high values inject random.
- CV Switch output -> S&H 1 input.
- S&H 1 -> S&H 2 -> S&H 3 -> ... -> S&H 8.
- Select one or more S&H outputs into a Quantizer, then into Oscillator frequency or MIDI Note Out.
- Clock: start at 1/8-note or 1/16-note equivalent if clocked from MIDI Clock In; use Clock Divider for slower melodic rates ([official module-index spreadsheet](https://docs.google.com/spreadsheets/d/1a9q2OCo_Sd_IbWsH99wlFvjcTIN20e7wb5Qgn5fLxms/edit?usp=sharing), [community tips document](https://docs.google.com/document/u/0/d/1bDqMHjLc4GCYtf2yGNHgjkDqQJ6zrRVuCZohJdKkWWc/mobilebasic)).

### 4.14 Firmware-4 Sequencer pages: up to 256 steps and CV ramp

Purpose: exploit firmware-4 sequencing beyond the visible 32-step page. The Sampler/Sequencer Guide says the Sequencer can have up to 8 pages of 32 steps for 256 steps, and that holding a step while pressing Shift+Page Left/Right navigates sequencer pages ([ZOIA 4.0 Sampler/Sequencer Guide](https://cdn.shopify.com/s/files/1/0028/5462/files/ZOIA_4.0_Sequencer_Sampler_Guide_rev3.pdf?v=1727875139)). The same guide says CV step selection divides incoming CV by the number of steps, so in a 4-step sequence values 0-.25 select step 1, .25-.5 step 2, .5-.75 step 3, and .75-1 step 4 ([ZOIA 4.0 Sampler/Sequencer Guide](https://cdn.shopify.com/s/files/1/0028/5462/files/ZOIA_4.0_Sequencer_Sampler_Guide_rev3.pdf?v=1727875139)). The CV Ramp output linearly interpolates between step values based on timing, which can turn a step sequencer into a slope/sequenced-LFO source ([ZOIA 4.0 Sampler/Sequencer Guide](https://cdn.shopify.com/s/files/1/0028/5462/files/ZOIA_4.0_Sequencer_Sampler_Guide_rev3.pdf?v=1727875139)).

Patch idea:

- Sequencer: 64-256 steps across pages.
- Track 1: pitch values -> Quantizer -> Oscillator frequency.
- Track 2: gate values -> ADSR gate.
- Track 3: CV Ramp -> filter cutoff or delay time.
- Key input: use MIDI Notes In or Keyboard to select/edit active steps or transpose depending on Sequencer option set ([ZOIA 4.0 Sampler/Sequencer Guide](https://cdn.shopify.com/s/files/1/0028/5462/files/ZOIA_4.0_Sequencer_Sampler_Guide_rev3.pdf?v=1727875139)).

### 4.15 Tap-to-CV as a universal time/rate macro

Purpose: control any time-like parameter with either taps or a knob. The community tips document explains that Tap to CV is especially useful when the destination has a known min/max time range, and gives a ping-pong-delay-style example range of 62.5 ms to 2 s; it also describes a hybrid encoder/tap recipe using Value, Comparators, Sample and Hold, Clock Divider, Tap-to-CV, Multiplier, and a two-channel CV Switch ([community tips document](https://docs.google.com/document/u/0/d/1bDqMHjLc4GCYtf2yGNHgjkDqQJ6zrRVuCZohJdKkWWc/mobilebasic)).

Starter approach:

- Tap Stompswitch -> Tap-to-CV input.
- Tap-to-CV min = destination minimum; max = destination maximum.
- For ping-pong delay, start min 62.5 ms and max 2 s if reproducing the community example ([community tips document](https://docs.google.com/document/u/0/d/1bDqMHjLc4GCYtf2yGNHgjkDqQJ6zrRVuCZohJdKkWWc/mobilebasic)).
- Tap-to-CV -> destination time/rate parameter.
- Optional Value module -> two-channel CV Switch alternate input so a knob can override tap-derived CV.
- Optional Clock Divider between tap and destination for rhythmic divisions.

### 4.16 Onset Detector is powerful but easy to over-trigger

The community tips document warns that Onset Detector can be too sensitive, and that raising the threshold can add delay before the analysis output fires ([community tips document](https://docs.google.com/document/u/0/d/1bDqMHjLc4GCYtf2yGNHgjkDqQJ6zrRVuCZohJdKkWWc/mobilebasic)). Practical patch rule: put a Gate, Comparator, Envelope Follower threshold, or careful gain staging before onset-driven recorders, freeze effects, and rhythmic triggers so incidental string noise does not retrigger the patch ([community tips document](https://docs.google.com/document/u/0/d/1bDqMHjLc4GCYtf2yGNHgjkDqQJ6zrRVuCZohJdKkWWc/mobilebasic)).

### 4.17 Deconstruct these factory/community patches first

The official factory page is a learning curriculum in disguise. Deconstruct **Loop Forest** for multi-looper modulation, **Frosti** for granular freeze/sustain, **NebUniVibe** for the Univibe module, **Octave Reverse** for Reverse Delay + pitch shifting, **Loophole** for Frippertronics-style looping, **Promethium** for generative behavior, **Duskwalker** for shift-register sequencing, **Marco Polo** for random walk logic, **Autocell** for cellular-automaton sequencing, **Groovebox** for sampler/sequencer drum programming, and **Grand Piano** for sample-based instrument workflow ([official factory patches page](https://empresseffects.com/pages/zoia-factory-patches), [latest firmware page](https://empresseffects.com/blogs/support-zoia/updating-firmware-on-the-zoia-and-euroburo-latest-version)).

Community patches worth studying include **1978 Plate V2** for a famous plate-reverb sound, **Instrument to MIDI** for audio-to-MIDI translation, **ZS-40** for polysynth architecture, **Parts** for macro/micro looper design, **Feedbacker v2** for drone/feedback design, and **Utility Pages 1** for reusable page architecture ([1978 Plate V2 on Patchstorage](https://patchstorage.com/1978-plate-a-b-two-takes-on-a-famous-reverb-sound/), [Instrument to MIDI on Patchstorage](https://patchstorage.com/instrument-to-midi-a-patch-for-translating-instruments-to-midi/), [ZS-40 on Patchstorage](https://patchstorage.com/zs-40-a-polysynth-patch-inspired-by-a-legend/), [Parts on Patchstorage](https://patchstorage.com/parts-a-macro-micro-looper/), [Feedbacker v2 on Patchstorage](https://patchstorage.com/feedbacker-v2-an-updated-feedback-drone-machine/), [Utility Pages 1 on Patchstorage](https://patchstorage.com/utility-pages-1/)).

---

## 5. Every patch/sample resource available: hubs, banks, packs, and deconstruction targets

### 5.1 Official factory patches and firmware-5 factory banks

The official factory-patches page lists the ZOIA factory patch set by number, name, category, author, description, stomp functions, and expression-pedal behavior ([official factory patches page](https://empresseffects.com/pages/zoia-factory-patches)). It includes classic effects, granular/sustain patches, looping patches, synths, generative patches, sample patches, MIDI/CV utilities, reverse effects, and experimental patches, so it should be treated as the first structured patch bank to study ([official factory patches page](https://empresseffects.com/pages/zoia-factory-patches)).

The official “ZOIA 5 new factory patches” page provides a ZIP of the new firmware-5 factory presets for users who want the new patches without doing a factory reset ([ZOIA 5 factory patches page](https://empresseffects.com/blogs/support-zoia/zoia-5-new-factory-patches)). The official firmware page says Groovebox and Grand Piano require sample files to be present on the microSD card, and that older ZOIA users can download samples and older factory-patch ZIPs from the update page ([latest firmware page](https://empresseffects.com/blogs/support-zoia/updating-firmware-on-the-zoia-and-euroburo-latest-version)).

### 5.2 Patchstorage: the public community archive

Patchstorage is the main public repository for ZOIA/Euroburo community patches, and the official ZOIA manual points users to Patchstorage for sharing and downloading patches ([ZOIA user manual PDF](https://empresseffects.com/cdn/shop/files/ZOIA_User_Manual_rev02_web.pdf?v=9116714327727882529), [Patchstorage ZOIA platform](https://patchstorage.com/platform/zoia/)). Patchstorage is also integrated into ZOIA Librarian, which can browse, search, download, upload, import, export, and manage local/SD patch folders using Patchstorage metadata ([ZOIA Librarian repository](https://github.com/meanmedianmoge/zoia_lib)).

Patchstorage-specific resources surfaced during the sweep:

- [Patchstorage ZOIA platform](https://patchstorage.com/platform/zoia/) - the main browse/search hub for ZOIA and Euroburo patches.
- [Utility Pages 1](https://patchstorage.com/utility-pages-1/) - reusable page utilities such as bypass-with-trails and patch-building utility pages.
- [ZOIA MIDI Controller Patch Navigation System](https://patchstorage.com/zoia-midi-controller-patch-navigation-system/) - patch navigation using an external MIDI foot controller.
- [Piano-esque](https://patchstorage.com/piano-esque-the-patch-from-my-tutorial-video/) - low-cost piano-like/generative patch from a tutorial context.
- [Instrument to MIDI](https://patchstorage.com/instrument-to-midi-a-patch-for-translating-instruments-to-midi/) - translates instruments to MIDI and exposes MIDI modules on the front page.
- [1978 Plate V2](https://patchstorage.com/1978-plate-a-b-two-takes-on-a-famous-reverb-sound/) - revised plate-reverb design inspired by a famous 1978 plate sound.
- [Degenerate Gain](https://patchstorage.com/degenerate-gain-a-naggingly-familiar-stereo-lo-fi-generator/) - stereo lo-fi/gain texture patch.
- [Feedbacker v2](https://patchstorage.com/feedbacker-v2-an-updated-feedback-drone-machine/) - feedback/drone machine patch.
- [ZS-40](https://patchstorage.com/zs-40-a-polysynth-patch-inspired-by-a-legend/) - polysynth patch inspired by a classic synth architecture.
- [Parts](https://patchstorage.com/parts-a-macro-micro-looper/) - macro/micro looper concept.
- [Nightly](https://patchstorage.com/nightly/) - community patch page surfaced in the sweep.
- [Rec Center](https://patchstorage.com/rec-center/) - firmware-5.30-era patch page surfaced in the sweep.

Patchstorage itself is dynamic and contains far more individual patches than should be manually reproduced here; for exhaustive browsing and local curation, use the Patchstorage platform plus ZOIA Librarian’s Patchstorage browser and SD-folder management ([Patchstorage ZOIA platform](https://patchstorage.com/platform/zoia/), [ZOIA Librarian repository](https://github.com/meanmedianmoge/zoia_lib)).

### 5.3 GitHub patch collections and reverse-engineered patch resources

The `eclab/zoia` GitHub repository contains ZOIA patches and documentation, including synthesis and reverb-oriented patch material such as Hammond/Leslie-style organ ideas and reverb patch experiments ([eclab/zoia repository](https://github.com/eclab/zoia)). The `mdouchement/zoia` repository is a Go-based parser/reverse-engineering project for ZOIA patch files and documents aspects of the binary format such as grid position values and firmware-era structural differences, but it is explicitly unofficial and incomplete relative to all current modules ([mdouchement/zoia repository](https://github.com/mdouchement/zoia)). ZOIA Librarian includes its own binary-format and file-structure documentation in its documentation directory, and its changelog credits community work on binary-format updates ([ZOIA Librarian documentation folder](https://github.com/meanmedianmoge/zoia_lib/tree/master/documentation), [ZOIA Librarian changelog](https://raw.githubusercontent.com/meanmedianmoge/zoia_lib/refs/heads/master/documentation/Changelog.txt)).

Officially documented patch-file workflow is simpler than the reverse-engineered internal format: patch files are `.bin` files with a three-digit prefix for slot position, copied to/from SD through the Config menu ([ZOIA user manual PDF](https://empresseffects.com/cdn/shop/files/ZOIA_User_Manual_rev02_web.pdf?v=9116714327727882529)). The internal binary structure is not presented as an official authoring API by Empress in the user manual; use reverse-engineered tools for curation and editing, then test all edited patches on hardware ([ZOIA user manual PDF](https://empresseffects.com/cdn/shop/files/ZOIA_User_Manual_rev02_web.pdf?v=9116714327727882529), [ZOIA Librarian changelog](https://raw.githubusercontent.com/meanmedianmoge/zoia_lib/refs/heads/master/documentation/Changelog.txt)).

### 5.4 Sample resources and sample-card workflow

The official Sampler/Sequencer Guide says samples live on microSD, should be WAV files, can be mono or stereo, can be up to 10 minutes, and are loaded through the Sampler module workflow ([ZOIA 4.0 Sampler/Sequencer Guide](https://cdn.shopify.com/s/files/1/0028/5462/files/ZOIA_4.0_Sequencer_Sampler_Guide_rev3.pdf?v=1727875139)). The official firmware page says specific firmware-5 factory patches such as Groovebox and Grand Piano require sample files on the microSD card ([latest firmware page](https://empresseffects.com/blogs/support-zoia/updating-firmware-on-the-zoia-and-euroburo-latest-version)). ZOIA Librarian added sample-folder and export-to-SD features in earlier releases and added sample downloads from Patchstorage-related workflows in later releases, making it the practical companion for sample-based patch curation ([ZOIA Librarian changelog](https://raw.githubusercontent.com/meanmedianmoge/zoia_lib/refs/heads/master/documentation/Changelog.txt), [ZOIA Librarian repository](https://github.com/meanmedianmoge/zoia_lib)).

---

## 6. The editor / companion ecosystem

### 6.1 ZOIA Librarian

ZOIA Librarian is the main modern companion app for ZOIA and Euroburo patch management. Its GitHub README describes it as a patch manager/librarian with Patchstorage integration and local/SD patch workflows ([ZOIA Librarian repository](https://github.com/meanmedianmoge/zoia_lib)). The README says prebuilt Mac and Windows releases are available, and source builds require Python 3.11+ ([ZOIA Librarian repository](https://github.com/meanmedianmoge/zoia_lib)).

ZOIA Librarian’s features include browsing Patchstorage and local patches, searching/sorting, downloading/uploading patches, importing local/SD patches, version-control style patch merging, patch editing, a visualizer, an expander view, patch notes, custom tags/categories, SD-folder management, drag-and-drop ZOIA-readable folders, sample-file organization, help panes, and themes ([ZOIA Librarian repository](https://github.com/meanmedianmoge/zoia_lib)). Version 2.1, published in March 2026 according to the repository release metadata/changelog, added supermodules, global custom module defaults, unit display, starred parameters with MIDI CC in exported patches, module search/add, drag/drop, duplication, Expander routing, grid-view all-pages support, page names, and moving modules ([ZOIA Librarian changelog](https://raw.githubusercontent.com/meanmedianmoge/zoia_lib/refs/heads/master/documentation/Changelog.txt), [ZOIA Librarian repository](https://github.com/meanmedianmoge/zoia_lib)).

Version 2.0 added patch editing/creation beta, module-index updates, Granular 5.3 max-grain support, sample-associated patches, and round-trip encoder/decoder fixes; the changelog warns that patches edited in the app are not guaranteed to run smoothly on hardware CPU until tested ([ZOIA Librarian changelog](https://raw.githubusercontent.com/meanmedianmoge/zoia_lib/refs/heads/master/documentation/Changelog.txt)). Older versions added Reverse Delay/Univibe support, Patchstorage API modification, sample downloads, Sampler/Logic Gate support, sample-folder and SD export support, Expander view, Euroburo/Zebu support, JSON decoding, a visualizer, and binary parsing improvements ([ZOIA Librarian changelog](https://raw.githubusercontent.com/meanmedianmoge/zoia_lib/refs/heads/master/documentation/Changelog.txt)).

### 6.2 Official module index and unofficial cheat sheets

The official module index is a live Google Sheet maintained by Empress and described by the official support page as striving to be fully informative and up to date ([official module-index page](https://empresseffects.com/blogs/support-zoia/zoia-module-index), [official module-index spreadsheet](https://docs.google.com/spreadsheets/d/1a9q2OCo_Sd_IbWsH99wlFvjcTIN20e7wb5Qgn5fLxms/edit?usp=sharing)). The Sensai7 ZOIA Cheatsheet is an interactive web-based reference generated from CSV data, and its repository explains that it was built as a portable reference from a CSV representation of module information ([ZOIA Cheatsheet repository](https://github.com/sensai7/ZOIACheatsheet), [ZOIA Cheatsheet live site](https://sensai7.github.io/ZOIACheatsheet/)). Because the CSV is older than later firmware additions, use it for quick lookup or historical comparison and verify exact details against the official module index ([ZOIA Cheatsheet CSV](https://raw.githubusercontent.com/sensai7/ZOIACheatsheet/master/zoiaCSV.csv), [official module-index spreadsheet](https://docs.google.com/spreadsheets/d/1a9q2OCo_Sd_IbWsH99wlFvjcTIN20e7wb5Qgn5fLxms/edit?usp=sharing)).

A Reddit thread documents an older community attempt to make a printable PDF of the module index, but search results indicate that link rot affected later access, so this is best treated as archival rather than a current source ([Reddit printable module-index thread](https://www.reddit.com/r/ZOIA/comments/bqkiug/printable_pdf_of_zoia_module_index/)).

### 6.3 Binary patch-format tools

The official user manual documents patch files only at workflow level: `.bin` files, three-digit filename prefixes, and SD-card import/export via Config Menu ([ZOIA user manual PDF](https://empresseffects.com/cdn/shop/files/ZOIA_User_Manual_rev02_web.pdf?v=9116714327727882529)). Community tools go deeper: `mdouchement/zoia` reverse-engineers and parses ZOIA patch binaries, while ZOIA Librarian parses, visualizes, edits, exports, and round-trips patch data with ongoing binary-format updates ([mdouchement/zoia repository](https://github.com/mdouchement/zoia), [ZOIA Librarian repository](https://github.com/meanmedianmoge/zoia_lib), [ZOIA Librarian documentation folder](https://github.com/meanmedianmoge/zoia_lib/tree/master/documentation)). Treat these as practical tools, not official guarantees; always save backups and test on the hardware/firmware target ([latest firmware page](https://empresseffects.com/blogs/support-zoia/updating-firmware-on-the-zoia-and-euroburo-latest-version), [ZOIA Librarian changelog](https://raw.githubusercontent.com/meanmedianmoge/zoia_lib/refs/heads/master/documentation/Changelog.txt)).

---

## 7. Community resources & forums

### 7.1 Official Empress resources

Start with the official product/manual/module/firmware/support stack: the product page gives feature overview, the manual documents operation, the Euroburo manual documents Eurorack-specific operation, the module index gives exact modules/parameters/DSP, the firmware page gives update process and current firmware links, and the changelog gives version-specific behavior ([official ZOIA product page](https://empresseffects.com/products/zoia?srsltid=AfmBOopGu0RJkIuTR7WCOjkBtV9VwQ0OszEEVvCCBKRtNIjo7_X0OvkC), [ZOIA user manual PDF](https://empresseffects.com/cdn/shop/files/ZOIA_User_Manual_rev02_web.pdf?v=9116714327727882529), [Euroburo manual PDF](https://images.equipboard.com/uploads/item/manual/97410/empress-zoia-euroburo-manual.pdf), [official module-index page](https://empresseffects.com/blogs/support-zoia/zoia-module-index), [official module-index spreadsheet](https://docs.google.com/spreadsheets/d/1a9q2OCo_Sd_IbWsH99wlFvjcTIN20e7wb5Qgn5fLxms/edit?usp=sharing), [latest firmware page](https://empresseffects.com/blogs/support-zoia/updating-firmware-on-the-zoia-and-euroburo-latest-version), [official changelog text](https://cdn.shopify.com/s/files/1/0028/5462/files/zoia_changelog_74aa73a7-3b95-425b-ba10-baf85de31592.txt?v=1770216051)).

Official support articles worth bookmarking include the MIDI CC control article, MIDI Type A article, MIDI troubleshooting article, expression pedal compatibility article, expression travel/pinout article, old firmware archive, waveform-updating SD-card article, Sampler/Sequencer Guide, ZOIA 5 factory-patch ZIP page, and official factory-patches page ([official MIDI CC article](https://empresseffects.com/blogs/support-zoia/controlling-the-zoia-and-euroburo-via-midi-cc-control-change-values), [official MIDI type support article](https://empresseffects.com/blogs/support-zoia/whats-the-midi-type-that-our-pedals-use), [official MIDI troubleshooting article](https://empresseffects.com/blogs/support-zoia/midi-is-not-working-with-zoia-but-works-with-everything-else), [official expression pedal article](https://empresseffects.com/blogs/support-zoia/what-expression-pedals-can-i-use), [official expression troubleshooting article](https://empresseffects.com/blogs/support-zoia/my-expression-pedal-only-controls-effect-in-the-first-10-of-its-travel-whats-going-on), [official old firmware page](https://empresseffects.com/blogs/support-zoia/old-firmware-versions-for-the-zoia), [official waveform-updating support article](https://empresseffects.com/blogs/support-zoia/zoia-gets-stuck-on-waveform-updating-when-running-firmware-3-0), [ZOIA 4.0 Sampler/Sequencer Guide](https://cdn.shopify.com/s/files/1/0028/5462/files/ZOIA_4.0_Sequencer_Sampler_Guide_rev3.pdf?v=1727875139), [ZOIA 5 factory patches page](https://empresseffects.com/blogs/support-zoia/zoia-5-new-factory-patches), [official factory patches page](https://empresseffects.com/pages/zoia-factory-patches)).

### 7.2 Community manual / tips document

The community “Tips, Tricks, and Explanations” document describes itself as a repository for useful approaches and non-obvious ZOIA capabilities, and it links to Patchstorage, the module index, module rundown videos, ZOIA Bootcamp, ZOIA Librarian, Facebook, Reddit, and Discord ([community tips document](https://docs.google.com/document/u/0/d/1bDqMHjLc4GCYtf2yGNHgjkDqQJ6zrRVuCZohJdKkWWc/mobilebasic)). It is the single richest text source for power-user recipes such as flexi-switches, expression automation, delay-line effects, granular freeze, low-pass gates, tone stacks, looper tricks, shift-register sequencers, Tap-to-CV tricks, and MIDI feedback mappings ([community tips document](https://docs.google.com/document/u/0/d/1bDqMHjLc4GCYtf2yGNHgjkDqQJ6zrRVuCZohJdKkWWc/mobilebasic)).

The original Reddit thread for the tips document says the author created the Google Doc/archive to gather useful approaches, and it records early collaboration/editing problems that explain why the document became a curated community resource rather than a fully open wiki ([Reddit tips-document thread](https://www.reddit.com/r/ZOIA/comments/bpvhio/google_docarchive_empress_zoia_tips_tricks_and/)).

### 7.3 Reddit, Facebook, Discord

The r/ZOIA subreddit remains a useful discovery surface for new patches, ZOIA Librarian releases, help threads, and community patch notes ([r/ZOIA](https://www.reddit.com/r/ZOIA/)). The current r/ZOIA wiki/FAQ page reports that the wiki is disabled, so use subreddit search, pinned posts, the community tips document, and direct Patchstorage/GitHub links rather than relying on the old FAQ link ([r/ZOIA FAQ page](https://www.reddit.com/r/ZOIA/wiki/faq)). The community tips document and ZOIA Librarian README both link to the Facebook group and Discord server as community endpoints ([community tips document](https://docs.google.com/document/u/0/d/1bDqMHjLc4GCYtf2yGNHgjkDqQJ6zrRVuCZohJdKkWWc/mobilebasic), [ZOIA Librarian repository](https://github.com/meanmedianmoge/zoia_lib), [Facebook ZOIA Users group](https://www.facebook.com/groups/EmpressZOIAUsers/), [ZOIA Discord invite](https://discord.gg/HG5GesY)).

### 7.4 YouTube / tutorial curriculum

Christopher H. M. Jacques’ module rundown videos are central community learning material: the community tips document links “Module Rundowns” and YouTube playlists, and the videos cover interface/control, audio modules, and control modules ([community tips document](https://docs.google.com/document/u/0/d/1bDqMHjLc4GCYtf2yGNHgjkDqQJ6zrRVuCZohJdKkWWc/mobilebasic), [Interface/control module rundown](https://www.youtube.com/watch?v=IkeonhyZjak), [Audio module rundown](https://www.youtube.com/watch?v=ti3t8VcRCL8), [Control module rundown](https://www.youtube.com/watch?v=RJqeoTl6zMs), [Module-rundown playlist](https://www.youtube.com/playlist?list=PLIetTwVphMAkMTWUOAvqeedi8dZpWe1EM)). Other useful video resources include a beginner guide, utility-page video, time-based effects tutorial, firmware-5 overview, firmware-5 factory-patch discussion, and Euroburo overview ([beginner guide](https://www.youtube.com/watch?v=5RfCLHHYRac), [Utility Pages video](https://www.youtube.com/watch?v=RC3Nyky2B3I), [time-based effects video](https://youtu.be/zIutv-oEL0E), [Firmware 5 overview](https://www.youtube.com/watch?v=E79Vc8YSr5w), [Firmware 5 factory-patch video](https://www.youtube.com/watch?v=YZbVB4f1Gos), [Euroburo video](https://www.youtube.com/watch?v=jT5HGKiCZdk)).

### 7.5 News/blog context

News/blog coverage is useful for historical context but should not override official docs. Gearnews covered the ZOIA pedal/synth concept and later firmware context, while Engadget covered the 2.0 firmware update era; use these for narrative/history rather than parameter-level facts ([Gearnews ZOIA article](https://www.gearnews.com/empress-effects-zoia-pedal-synth/), [Engadget firmware-2.0 article](https://www.engadget.com/empress-effects-zoia-2-0-firmware-update-modular-guitar-effects-pedal-181549446.html)).

---

# Annotated Sources

## Official Empress / primary sources

- [Official ZOIA product page](https://empresseffects.com/products/zoia?srsltid=AfmBOopGu0RJkIuTR7WCOjkBtV9VwQ0OszEEVvCCBKRtNIjo7_X0OvkC) - product overview, hardware description, module-count marketing, SD/patch/Control Port/MIDI/audio specs.
- [ZOIA user manual PDF](https://empresseffects.com/cdn/shop/files/ZOIA_User_Manual_rev02_web.pdf?v=9116714327727882529) - official operating model: grid, buttons, encoder gestures, connections, pages, patches, Config menu, starring, SD workflow, MIDI, Control Port.
- [Euroburo manual PDF](https://images.equipboard.com/uploads/item/manual/97410/empress-zoia-euroburo-manual.pdf) - official Euroburo-specific hardware, eurorack power, CV voltage behavior, integrated modules, headphone output, bypass/control differences.
- [Official module-index page](https://empresseffects.com/blogs/support-zoia/zoia-module-index) - official support page linking the canonical module index and describing it as the up-to-date module reference.
- [Official live module-index spreadsheet](https://docs.google.com/spreadsheets/d/1a9q2OCo_Sd_IbWsH99wlFvjcTIN20e7wb5Qgn5fLxms/edit?usp=sharing) - canonical firmware-5 module list with names, categories, block counts, parameters, options, connection suggestions, and average DSP.
- [Latest firmware page](https://empresseffects.com/blogs/support-zoia/updating-firmware-on-the-zoia-and-euroburo-latest-version) - current firmware-update workflow, download links, backup warning, SD-card orientation, browser download warnings, firmware-5 factory/samples notes.
- [Official changelog text](https://cdn.shopify.com/s/files/1/0028/5462/files/zoia_changelog_74aa73a7-3b95-425b-ba10-baf85de31592.txt?v=1770216051) - version-by-version firmware changes through 5.32, including modules, CPU changes, bug fixes, Sampler/Sequencer details, Euroburo support, MIDI changes, and compatibility notes.
- [Official old firmware page](https://empresseffects.com/blogs/support-zoia/old-firmware-versions-for-the-zoia) - archive of older firmware versions and warning about firmware 1.05-and-lower compatibility with later hardware serial ranges.
- [Official MIDI CC article](https://empresseffects.com/blogs/support-zoia/controlling-the-zoia-and-euroburo-via-midi-cc-control-change-values) - device-level CC 60-63 mapping for bypass, grid/buttons, Euroburo controls, stomps, and rotary emulation.
- [Official MIDI type support article](https://empresseffects.com/blogs/support-zoia/whats-the-midi-type-that-our-pedals-use) - official statement that Empress MIDI pedals use TRS MIDI Type A.
- [Official MIDI troubleshooting article](https://empresseffects.com/blogs/support-zoia/midi-is-not-working-with-zoia-but-works-with-everything-else) - tip/ring MIDI behavior, optocoupler note, active splitter suggestion.
- [Official expression pedal article](https://empresseffects.com/blogs/support-zoia/what-expression-pedals-can-i-use) - Control Port expression pinout and known-compatible expression pedal models.
- [Official expression troubleshooting article](https://empresseffects.com/blogs/support-zoia/my-expression-pedal-only-controls-effect-in-the-first-10-of-its-travel-whats-going-on) - explains ring-signal expression pedals causing usable travel to appear in the first 10%.
- [Official waveform-updating support article](https://empresseffects.com/blogs/support-zoia/zoia-gets-stuck-on-waveform-updating-when-running-firmware-3-0) - hidden macOS/Spotlight SD-card file issue that can hang sample waveform updating.
- [ZOIA 4.0 Sampler/Sequencer Guide PDF](https://cdn.shopify.com/s/files/1/0028/5462/files/ZOIA_4.0_Sequencer_Sampler_Guide_rev3.pdf?v=1727875139) - official Sampler/Sequencer workflow, sample format guidance, speed/pitch range, recording modes, CV outputs, 256-step sequencer pages, CV step/ramp behavior.
- [ZOIA 5 factory patches page](https://empresseffects.com/blogs/support-zoia/zoia-5-new-factory-patches) - official ZIP for new firmware-5 factory patches without factory reset.
- [Official factory patches page](https://empresseffects.com/pages/zoia-factory-patches) - annotated official factory patch list with categories, descriptions, authors, stomp/expression behavior, and deconstruction targets.

## Community manuals, forums, and discussions

- [Community Tips, Tricks, and Explanations document](https://docs.google.com/document/u/0/d/1bDqMHjLc4GCYtf2yGNHgjkDqQJ6zrRVuCZohJdKkWWc/mobilebasic) - major community manual covering non-obvious ZOIA techniques, patch recipes, module abuse, MIDI feedback, CV automation, delay-line effects, granular freeze, low-pass gates, tone stacks, loopers, and generative patching.
- [Reddit tips-document thread](https://www.reddit.com/r/ZOIA/comments/bpvhio/google_docarchive_empress_zoia_tips_tricks_and/) - origin/context for the community tips document and its curated archive approach.
- [r/ZOIA subreddit](https://www.reddit.com/r/ZOIA/) - ongoing subreddit for ZOIA help, patch announcements, ZOIA Librarian posts, and community discussion.
- [r/ZOIA FAQ page](https://www.reddit.com/r/ZOIA/wiki/faq) - current wiki/FAQ endpoint; presently reports the wiki is disabled, making it a useful stale-link flag.
- [Reddit Patchstorage import thread](https://www.reddit.com/r/ZOIA/comments/ut2f96/uploading_patchstorage_patches_to_zoia/) - community explanation of Patchstorage-to-SD import workflow and numeric-prefix behavior.
- [Reddit hidden-files PSA](https://www.reddit.com/r/ZOIA/comments/1e47gsd/psa_if_your_zoia_wont_boot_with_certain_sd_cards/) - community report matching the official hidden SD-card file issue.
- [Reddit printable module-index thread](https://www.reddit.com/r/ZOIA/comments/bqkiug/printable_pdf_of_zoia_module_index/) - archival thread about a community printable module-index PDF; useful historically but affected by link rot.
- [Facebook ZOIA Users group](https://www.facebook.com/groups/EmpressZOIAUsers/) - private/social community endpoint linked by community and companion-app resources.
- [ZOIA Discord invite](https://discord.gg/HG5GesY) - Discord endpoint linked by community resources and ZOIA Librarian.

## Patchstorage / patch resources

- [Patchstorage ZOIA platform](https://patchstorage.com/platform/zoia/) - main public hub for ZOIA/Euroburo patch downloads and discovery.
- [Utility Pages 1](https://patchstorage.com/utility-pages-1/) - reusable utility-page collection including bypass-with-trails-style building blocks.
- [ZOIA MIDI Controller Patch Navigation System](https://patchstorage.com/zoia-midi-controller-patch-navigation-system/) - external MIDI foot-controller patch-navigation system.
- [Piano-esque](https://patchstorage.com/piano-esque-the-patch-from-my-tutorial-video/) - low-cost piano-like patch associated with a tutorial/generative context.
- [Instrument to MIDI](https://patchstorage.com/instrument-to-midi-a-patch-for-translating-instruments-to-midi/) - patch translating instrument input into MIDI output.
- [1978 Plate V2](https://patchstorage.com/1978-plate-a-b-two-takes-on-a-famous-reverb-sound/) - revised plate-reverb community patch.
- [Degenerate Gain](https://patchstorage.com/degenerate-gain-a-naggingly-familiar-stereo-lo-fi-generator/) - stereo lo-fi/gain texture patch.
- [Feedbacker v2](https://patchstorage.com/feedbacker-v2-an-updated-feedback-drone-machine/) - feedback/drone patch for deconstructing feedback routing.
- [ZS-40](https://patchstorage.com/zs-40-a-polysynth-patch-inspired-by-a-legend/) - polysynth patch inspired by a classic synthesizer.
- [Parts](https://patchstorage.com/parts-a-macro-micro-looper/) - macro/micro looper patch concept.
- [Nightly](https://patchstorage.com/nightly/) - community patch page surfaced during the sweep.
- [Rec Center](https://patchstorage.com/rec-center/) - firmware-5.30-era patch page surfaced during the sweep.

## Editors, tools, and reverse-engineering

- [ZOIA Librarian repository](https://github.com/meanmedianmoge/zoia_lib) - main companion app for Patchstorage browsing, local/SD patch management, patch editing, visualization, sample organization, and metadata workflows.
- [ZOIA Librarian changelog](https://raw.githubusercontent.com/meanmedianmoge/zoia_lib/refs/heads/master/documentation/Changelog.txt) - version history through 2.1, including patch editing, supermodules, starred MIDI CC export, sample support, Reverse Delay/Univibe, Euroburo/Zebu support, and binary parsing improvements.
- [ZOIA Librarian documentation folder](https://github.com/meanmedianmoge/zoia_lib/tree/master/documentation) - user manual, binary-format/file-structure documentation, changelog, and companion-app docs.
- [eclab/zoia repository](https://github.com/eclab/zoia) - GitHub patch/documentation collection with synth/reverb patch material and community patch experiments.
- [mdouchement/zoia repository](https://github.com/mdouchement/zoia) - Go parser and unofficial reverse-engineering notes for ZOIA patch binary structure.
- [ZOIA Cheatsheet repository](https://github.com/sensai7/ZOIACheatsheet) - web-based community reference generator for ZOIA module lookup.
- [ZOIA Cheatsheet live site](https://sensai7.github.io/ZOIACheatsheet/) - interactive community cheat sheet.
- [ZOIA Cheatsheet CSV](https://raw.githubusercontent.com/sensai7/ZOIACheatsheet/master/zoiaCSV.csv) - historical CSV module inventory used by the cheat sheet; useful but older than firmware 5.

## Video / tutorial sources

- [Beginner guide](https://www.youtube.com/watch?v=5RfCLHHYRac) - introductory video tutorial for learning the ZOIA workflow.
- [Interface/control module rundown](https://www.youtube.com/watch?v=IkeonhyZjak) - Christopher H. M. Jacques module-rundown video focused on interface/control modules.
- [Audio module rundown](https://www.youtube.com/watch?v=ti3t8VcRCL8) - Christopher H. M. Jacques module-rundown video focused on audio modules.
- [Control module rundown](https://www.youtube.com/watch?v=RJqeoTl6zMs) - Christopher H. M. Jacques module-rundown video focused on control modules.
- [Module-rundown playlist](https://www.youtube.com/playlist?list=PLIetTwVphMAkMTWUOAvqeedi8dZpWe1EM) - playlist for module-rundown curriculum.
- [ZOIA tutorial playlist](https://www.youtube.com/playlist?list=PLIetTwVphMAn0psmNmQVdP4gq_sjLWgDJ) - tutorial playlist referenced in community resources.
- [Utility Pages video](https://www.youtube.com/watch?v=RC3Nyky2B3I) - video companion for reusable utility pages.
- [Time-based effects video](https://youtu.be/zIutv-oEL0E) - video linked by the community tips document for delay-line time-based effects.
- [Firmware 5 overview](https://www.youtube.com/watch?v=E79Vc8YSr5w) - video overview of firmware-5 context.
- [Firmware 5 factory-patch video](https://www.youtube.com/watch?v=YZbVB4f1Gos) - video discussing firmware-5 factory patch material.
- [Euroburo video](https://www.youtube.com/watch?v=jT5HGKiCZdk) - video resource for Euroburo context.

## News / historical context

- [Gearnews ZOIA article](https://www.gearnews.com/empress-effects-zoia-pedal-synth/) - music-tech news context for ZOIA as a pedal/modular-synth device.
- [Engadget firmware-2.0 article](https://www.engadget.com/empress-effects-zoia-2-0-firmware-update-modular-guitar-effects-pedal-181549446.html) - historical coverage of the firmware-2.0 era and its significance.

---

# Practical mastery roadmap

1. Read the ZOIA manual once with the pedal in front of you, then read only the Config, pages, connections, starring, and SD-card sections again ([ZOIA user manual PDF](https://empresseffects.com/cdn/shop/files/ZOIA_User_Manual_rev02_web.pdf?v=9116714327727882529)).
2. Keep the official module-index spreadsheet open whenever adding modules; it is the canonical range/DSP/option reference ([official module-index spreadsheet](https://docs.google.com/spreadsheets/d/1a9q2OCo_Sd_IbWsH99wlFvjcTIN20e7wb5Qgn5fLxms/edit?usp=sharing)).
3. Build the mono synth recipe, the delay-line feedback recipe, the granular freeze recipe, and the Turing-machine recipe from this document without downloading any patches; this teaches audio, CV, state, clock, UI, feedback, and performance control.
4. Deconstruct at least ten official factory patches from the official list, especially Frosti, Loophole, Promethium, Duskwalker, Marco Polo, Autocell, Groovebox, Grand Piano, NebUniVibe, and Octave Reverse ([official factory patches page](https://empresseffects.com/pages/zoia-factory-patches)).
5. Install ZOIA Librarian for Patchstorage browsing, local backups, SD organization, visual analysis, and careful patch editing/testing ([ZOIA Librarian repository](https://github.com/meanmedianmoge/zoia_lib)).
6. When sharing patches publicly, include firmware version, whether samples are required, whether Euroburo-specific modules are used, whether sequencer data needs firmware 4.20+, and whether the patch was edited externally in ZOIA Librarian ([official changelog text](https://cdn.shopify.com/s/files/1/0028/5462/files/zoia_changelog_74aa73a7-3b95-425b-ba10-baf85de31592.txt?v=1770216051), [ZOIA Librarian changelog](https://raw.githubusercontent.com/meanmedianmoge/zoia_lib/refs/heads/master/documentation/Changelog.txt)).
