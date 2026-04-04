# Tempest Patch Collection

424 total .syx files collected from free community sources.

## Directory Structure

### hardwarecore/ (2 .syx files)
- **Source:** https://forum.sequential.com/index.php?topic=334.0
- **Content:** 64 patches by Hardwarecore -- 16 pads, 16 bass, 16 leads/misc, 16 bass drums
- **Files:** `HWC_Lead_Effect_BD.syx`, `HWC_Pads_Bass.syx` (32 sounds each, loads as one Beat)
- **Status:** Downloaded successfully from forum attachments

### leviathant-606-110/ (1 .syx file)
- **Source:** https://www.bitrotten.com/tempest/
- **Content:** TR-606 and DR-110 analog drum emulations by Leviathant
- **Files:** `Leviathant Drums v1.syx` (extracted from `LeviathantDrumsV1.zip`)
- **Includes:** `readme.txt` with full sound list
- **Status:** Downloaded successfully

### polyrhythm-templates/ (18 .syx files)
- **Source:** https://forum.sequential.com/index.php/topic,4201.0.html
- **Content:** John the Savage's polyrhythm/polymeter beat templates
- **Files:**
  - 6 PolyMETER templates
  - 6 PolyRHYTHM templates
  - 5 PolyRYTM & METER templates
  - 1 Berlin School 16x2 template
  - 3 reference charts (.docx)
- **Status:** Downloaded successfully from forum attachments

### community/ (403 .syx files)
- **Source:** Yorgos Arabatzis's "Various Tempest Patches.zip" from https://forum.sequential.com/index.php?topic=34.0
- **Content:** The master community archive preserving patches from the defunct DSI Forum
- **Subdirectories:**
  - `CBMD AnalogDrums/` -- analog drum patches
  - `Chiptune/` -- chiptune/SID-style sounds
  - `DreamProbe Patches/` -- DreamProbe's contributions
  - `Future Classic KICKS Vol.1/` -- 16 kick drums + beat
  - `John the Savage - Polyrhythm templates/` -- earlier version of polyrhythm templates
  - `Puzzlegob Tempest_Patches/` -- Puzzlegob's patches
  - `Pym/` -- Pym's analog snares and 808-style kicks
  - `ST Patches/` -- Steven Morris synth patches (Rhodes, Tenshi, etc.)
  - `Sound Contest 1/` -- Tempest Sound Design Competition (414 sounds + beats + projects)
  - `Tempest CR-87/` -- CR-87 drum machine emulation
  - `Tempest Factory Projects & Sounds/` -- factory project backups
  - `Tempest_StimPack1/` -- Stim's compiled patch pack
  - Plus 30+ loose .syx files (808 Turbo, jazz organ/guitar, 303, pads, etc.)
- **Status:** Extracted from user's local copy (`/Users/gorkolas/Downloads/Various Tempest Patches.zip`)

### stim-recipes/ (empty)
- **Source:** https://noisylittlebugger.net/tempest-recipes/
- **Status:** FAILED -- Stim's recipe pages are text-based synthesis tutorials with audio demos (MP3/WAV) but no .syx patch downloads. The .syx links that existed historically (e.g., `stimchords.syx`) now return 404. Not available on Wayback Machine either. However, `StimByeBye.syx` and `Tempest_StimPack1/` in the community folder contain Stim's compiled patches.

## What Failed / Could Not Download

| Source | Reason |
|--------|--------|
| Stim's recipe .syx files | Links are dead (404). Site moved from stimresp.wordpress.com to noisylittlebugger.net and patches were lost. |
| TSDC_Final_Categories.zip (forum) | Forum attachment requires login -- returned HTML login page |
| Burnt Neon & Funk Kit.syx (forum) | Forum attachment requires login |
| Straight & Tight Kits.syx (forum) | Forum attachment requires login |
| RobH's SnareDesignRobH.syx (forum) | Forum attachment requires login |
| RobH's Pads of Patch.syx (forum) | Forum attachment requires login |
| RobH's HouseBass.syx (forum) | Forum attachment requires login |
| LucidSFX cymbal patches (forum) | Forum attachment requires login |
| PresetPatch.com patches | Requires free account + limited daily tokens |
| Deep Mind Dark Mopho conversion | Forum thread, availability unclear |

## Notes

- The Sound Contest folder in `community/` contains `TSDC_Final_ALL_414.syx` which is the same competition bank that failed to download separately -- it was already in Yorgos's archive.
- The `Tempest Factory Projects & Sounds/` folder contains factory sound backups -- these are NOT community patches but were preserved here for convenience.
- Total unique community .syx files (excluding factory): ~400+
- All patches are for DSI/Sequential Tempest. Load via SysEx Librarian (Mac) or Elektron C6 (cross-platform).

*Collected: 2026-04-03*
