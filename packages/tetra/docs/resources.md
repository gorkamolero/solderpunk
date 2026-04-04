# DSI Tetra Resources

Comprehensive collection of resources for the Dave Smith Instruments / Sequential Tetra 4-voice analog synthesizer.

---

## Official Sequential Resources

### Documentation
- **Tetra Operation Manual v1.3 (PDF)** - [sequential.com](https://sequential.com/downloads/tetra/doc/Tetra_Manual_v.1.3.pdf)
  - Downloaded locally: `docs/Tetra_Manual_v1.3.pdf`
- **Factory Programs List (TXT)** - [sequential.com](https://sequential.com/downloads/tetra/programs/Tetra_Factory_Programs_list.txt)
- **Support Downloads Page** - [sequential.com/support/download](https://sequential.com/support/download/) (Tetra section)
- **Video Tutorials** - [YouTube Playlist](https://www.youtube.com/watch?v=w3jSd8tb1II&list=PLWqwHdIVExP0d_tsZzLX9UWlXIgfG5uOl)

### Official OS (Stable)
- **Main OS 1.5 + Voice OS 1.2** - [Download ZIP](https://sequential.com/wp-content/uploads/2014/09/Tetra_OS_M1.5_V1.2.zip)
  - Downloaded locally: `patches/Tetra_Main_1.5.syx`, `patches/Tetra_Voice_1.2.syx`
  - Must update via 5-pin MIDI IN (not USB)

### Factory Patches
- **Factory Programs + Combos 1.0** - [Download ZIP](https://sequential.com/wp-content/uploads/2014/09/Tetra_Programs+ReadMe.zip)
  - Downloaded locally: `patches/Tetra_ProgramsCombos_1.0.syx`
- **Factory Sounds Page** - [sequential.com/tetra-factory-sounds](https://sequential.com/tetra-factory-sounds/)

---

## Beta Firmware (Pym / Chris Hector)

### Tetra Main 1.6.19 + Voice 1.5.12 Beta
- **Forum thread** - [forum.sequential.com/index.php?topic=681.0](https://forum.sequential.com/index.php?topic=681.0)
- Files: `Tetra_Main_1.6.19.syx` (146 kB) + `Tetra_Voice_1.5.12.syx` (146 kB) -- requires forum login to download
- **Discussion thread** - [forum.sequential.com/index.php?topic=398.0](https://forum.sequential.com/index.php?topic=398.0) (comparing OS 1.15 vs 1.6.19 beta)

### Beta Changelog Highlights (1.6.19)
- Arpeggiator relatch mode (NRPN 415)
- Enhanced unison and combo mode handling
- Multi-mode NRPN support for voice selection and program queries
- USB program transfer corruption fixes
- NRPN bug fix preventing newest globals from being recognized
- Voice 1.5.12: Fixed sequencer bug causing audio artifacts (squeak on notes with rest when slew active)

### Installation Notes
- **MUST use hard MIDI IN port** (MIDI over USB not functional for OS updates)
- **Mac:** SysEx Librarian -- pause 1 second, transmit speed 80%
- **Windows:** SendSX (beta 1.30) or MIDI-OX v7.0.0.365
- **WARNING:** Serial numbers ~1992-2138 may freeze during updates (microprocessor timing issue). Contact support@davesmithinstruments.com
- **Avoid:** NI Maschine, Digidesign Mbox/Mbox2/001/002, CME U2MIDI as MIDI interfaces

### Pym's Dev Blog
- **Blog** - [tetradev.blogspot.com](http://tetradev.blogspot.com/)
- NRPNs Part 1: The Basics
- NRPNs Part 2: Filtering NRPNs in Ableton with M4L
- NRPNs Part 3: Ableton/M4L JavaScript techniques
- Tools: `nrpn_filter.js`, `nrpn_to_cc.js` (Max for Live)
- Earlier beta releases: Tetra Main 1.2.3 + Voice 1.2.0

---

## GitHub Repositories

### Editors & Controllers

| Repo | Language | Description |
|------|----------|-------------|
| [eclab/edisyn](https://github.com/eclab/edisyn) | Java | Synthesizer patch editor (669 stars). Supports DSI Tetra (Single + Combo modes), Prophet '08, Mopho family, Prophet 12, Prophet Rev2 |
| [valentijnnieman/dsi-tetra-controller](https://github.com/valentijnnieman/dsi-tetra-controller) | C++ | Controller software for Tetra. Currently CC mode only, NRPN planned |
| [hanshuebner/tetra-web](https://github.com/hanshuebner/tetra-web) | JavaScript/Lisp | Web-based Tetra control interface (part of ControllerJSm project). Includes `tetra-parameters.txt` parameter definition file |
| [LucasVanHeldon/Mopho-Tetra-Utilities](https://github.com/LucasVanHeldon/Mopho-Tetra-Utilities) | Python | Small utilities for Mopho/Tetra programming. Includes editor, patch management, pattern generation, sequencer tools. Contains .syx program files |
| [vp1/dsi_tetra_pd](https://github.com/vp1/dsi_tetra_pd) | PureData | PureData patch to control Tetra via NRPN. Main patch: `TETRA_multi.pd` |
| [vp1/dsi_tetra_bcr2000](https://github.com/vp1/dsi_tetra_bcr2000) | - | Behringer BCR2000 mappings for DSI Tetra |

### SysEx & MIDI Tools

| Repo | Language | Description |
|------|----------|-------------|
| [dubeaud/SysExLibrarian](https://github.com/dubeaud/SysExLibrarian) | - | Cross-platform SysEx Librarian for MIDI devices |
| [RomanKubiak/ctrlr](https://github.com/RomanKubiak/ctrlr) | C++ | Ctrlr MIDI controller panel framework (657 stars). ctrlr.org now redirects to GitHub |

### Sample Libraries

| Repo | Description |
|------|-------------|
| [publicsamples/DSI-Tetra](https://github.com/publicsamples/DSI-Tetra) | Multi-format sample library (EXS24, Kontakt, SFZ) |

---

## Commercial Editors

### Patch Base (Mac/iPad) -- RECOMMENDED
- [coffeeshopped.com/patch-base/editor/dave-smith-instruments/tetra](https://coffeeshopped.com/patch-base/editor/dave-smith-instruments/tetra)
- Full parameter editing, patch organization, randomization
- Best current editor/librarian for Tetra

### SoundTower Tetra Editor (Standalone)
- [soundtower.com/tetra](https://www.soundtower.com/tetra/tetra_sa.html)
- Downloads: [soundtower.com/tetra/tetra_downloads.html](https://www.soundtower.com/tetra/tetra_downloads.html)
- Official editor referenced by Sequential's support page

### codeKnobs Tetra Program Editor (VST/AU)
- [codeknobs.com](https://codeknobs.com/products.php?id=16) -- 49 EUR
- VST/AU plugin, v3.34 (last updated Jan 2024)
- Also: [SYNTHET](https://codeknobs.com/synthet.html) -- universal synth patch editor with Tetra layout
  - [Forum thread](https://forum.sequential.com/index.php?topic=1983.0)

---

## Max for Live Devices

| Device | Author | Description |
|--------|--------|-------------|
| [Tetra Master Controller v1.02 (Push support)](https://maxforlive.com/library/device/8164/tetra-master-controller-with-push-support) | pea | MIDI effect with Ableton Push mapping. Copy/enhancement of atari5200's original |
| [Tetra Master Controller v1.01](https://www.maxforlive.com/library/device/1360/tetra-master-controller) | atari5200 | Original M4L Tetra controller |
| [Search: "tetra" on maxforlive.com](https://www.maxforlive.com/library/index.php?by=any&q=tetra) | Various | All Tetra-related M4L devices |

---

## Max/MSP & Cycling '74

- **DSI Tetr4 Editor** - [cycling74.com/projects/dsi-tetr4-editor](https://cycling74.com/projects/dsi-tetr4-editor)
  - Full editor for Tetra in Max. Program mode mapped in MIDI NRPN. Features for sequencers and pattern editing
- **Forum: SysEx to NRPN in M4L** - [cycling74.com thread](https://cycling74.com/forums/how-to-get-sysex-into-max-for-live-device-and-decode-to-nprn-data)

---

## Ctrlr Panels

The Ctrlr project has moved entirely to GitHub ([RomanKubiak/ctrlr](https://github.com/RomanKubiak/ctrlr)). The old ctrlr.org site now redirects there. DSI-related panels existed (tagged `dsi` and `dave-smith-instruments`) but the panel hosting is in transition. Check the GitHub repo's releases and issues for available panels.

- **DSI Mopho Panel** - [ctrlr.org/dsi-mopho](https://ctrlr.org/dsi-mopho/) (may redirect to GitHub)
- Note: Mopho and Tetra share the same voice architecture, so Mopho panels can be adapted

---

## Hardware Controllers

- **mxpand Controller Overlay** - [mxpand.com](https://www.mxpand.com/en/controller-overlays/dsi-tetra/) -- physical overlay for hardware controllers mapped to Tetra
- **BCR2000 Mappings** - [vp1/dsi_tetra_bcr2000](https://github.com/vp1/dsi_tetra_bcr2000) on GitHub
- **Faderfox EC4** - NRPN mapping discussed on [Sequential forum](https://forum.sequential.com/index.php?board=11.0)

---

## Free Patches

### eXode Banks (HIGHLY RECOMMENDED)
- **Forum thread** - [forum.sequential.com/index.php?topic=95.0](https://forum.sequential.com/index.php?topic=95.0)
- `eXode_Banks.zip` (17.24 kB) -- 2,646 downloads
- Two banks (C and D). Also compatible with Prophet '08 and Mopho (with conversion)
- Community consensus: superior to factory banks and many paid alternatives

### Noisy Machines (Gumroad)
- **Collections 1 (FREE)** - [noisymachines.gumroad.com/l/bpWbV](https://noisymachines.gumroad.com/l/bpWbV) -- 10 .t4p patches, $0
- **Collections 2** - [noisymachines.gumroad.com/l/MLPdD](https://noisymachines.gumroad.com/l/MLPdD) -- $5
- **Classic Juno 60 sounds** - [Matrixsynth coverage](https://www.matrixsynth.com/2021/04/dsi-tetra-free-download-patches-classic.html) -- free download, Juno-style patches

### PresetPatch.com
- **Tetra section** - [presetpatch.com/synth/dsi-tetra](https://www.presetpatch.com/synth/dsi-tetra) (free account required)
- Banks: `eXode_Bank_C.syx`, `eXode_Bank_D.syx`, `Tetra_ProgramsCombos_1.0.syx`
- Individual .t4p patches by Crumbman, danielraizer, and others (bass, lead, percussion, piano)

### SynthLib
- [synthlib.com/brands/dsi-sequential/instruments/dsi-sequential-tetra](https://synthlib.com/brands/dsi-sequential/instruments/dsi-sequential-tetra)
- Community patch sharing (sysex and audio files)

### Synth-Patches.com (Paid)
- [synth-patches.com/dsi-tetra](https://synth-patches.com/dsi-tetra/) -- 110 patches for $14+VAT
- Boards of Canada / Tycho / Tame Impala style ambient patches

---

## Paid Patches

- **synth-patches.com** - 110 patches, $14 -- ambient/BoC style
- **codeKnobs** - bundles with their editor
- **Noisy Machines Collections 2** - $5 on Gumroad

---

## NRPN & MIDI Resources

### NRPN Parameter Map
The Tetra uses NRPNs for all parameter control. The complete map is in the manual (Appendix, pp. 87+). Key resources:
- **Manual Appendix** - `docs/Tetra_Manual_v1.3.pdf` (local copy)
- **Pym's NRPN tutorials** - [tetradev.blogspot.com](http://tetradev.blogspot.com/) (3-part series)
- **hanshuebner/tetra-web** - `tetra-parameters.txt` contains a parseable parameter definition file
- **midi.guide** - [midi.guide](https://midi.guide/) -- general NRPN database (Tetra not yet mapped here as of 2026)

### Key NRPN Ranges
- Parameters 0-99: Voice parameters (per-voice in multi-mode)
- Parameters 100-119: Sequencer
- Parameters 120-167: Additional voice params
- Parameter 384+: Global parameters
- Parameter 415: Arpeggiator relatch mode (beta firmware only)

---

## Community & Forums

- **Sequential Official Forum (Tetra)** - [forum.sequential.com/index.php?board=11.0](https://forum.sequential.com/index.php?board=11.0)
- **Gearspace DSI Patches USER-LIBRARY** - [gearspace.com thread](https://gearspace.com/board/electronic-music-instruments-and-electronic-music-production/525937-dave-smith-instruments-patches-user-library-thread.html)
- **Gearspace Tetra Questions & Issues** - [gearspace.com thread](https://gearspace.com/board/electronic-music-instruments-and-electronic-music-production/489037-dsi-tetra-questions-issues-os-editor.html)
- **Gearspace "Tetra manageable without editor?"** - [gearspace.com thread](https://gearspace.com/board/electronic-music-instruments-and-electronic-music-production/1129267-dsi-tetra-manageable-without-computer-editor.html)
- **Matrixsynth** - [matrixsynth.com](https://www.matrixsynth.com/) -- Tetra-related posts

---

## Downloaded Files

### docs/
- `Tetra_Manual_v1.3.pdf` -- Official operation manual

### patches/
- `Tetra_ProgramsCombos_1.0.syx` -- Factory programs and combos
- `Tetra_Main_1.5.syx` -- Official stable OS (Main)
- `Tetra_Voice_1.2.syx` -- Official stable OS (Voice)

### Not Yet Downloaded (Requires Manual Action)
- `Tetra_Main_1.6.19.syx` + `Tetra_Voice_1.5.12.syx` -- Beta firmware from Sequential forum (requires login)
- `eXode_Banks.zip` -- From Sequential forum attachment (requires login)
- Noisy Machines Collections 1 -- From Gumroad (requires account, even though free)
