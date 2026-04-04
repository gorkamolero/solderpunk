# DSI Tetra Patches

Downloaded 2026-04-03. Organized by source.

---

## Successfully Downloaded

### exode/ -- eXode Banks (Community Favorite)
- **Source:** [Sequential Forum](https://forum.sequential.com/index.php?topic=95.0) (attachment download, no login required)
- `eXode_Bank_C.syx` (57,980 bytes) -- 128 programs, Bank C
- `eXode_Bank_D.syx` (57,980 bytes) -- 128 programs, Bank D
- `eXode_Banks.zip` -- original archive (2,647 downloads at time of fetch)
- Community consensus: superior to factory banks. Also compatible with Prophet '08 and Mopho (with conversion).

### sequential-factory/ -- Official Sequential Downloads
- **Source:** [sequential.com/support/download](https://sequential.com/support/download/)
- `Tetra_ProgramsCombos_1.0.syx` (379,008 bytes) -- All factory programs + combos (512 programs + 128 combos)
- `Tetra_Programs+ReadMe.zip` -- original archive
- `Tetra Programs ReadMe.txt` -- patch list and loading instructions
- `Tetra_Factory_Programs_list.txt` -- complete factory program names
- `Tetra_OS_M1.5_V1.2.zip` / `Tetra_OS_M1.5_V1.2/` -- Official stable firmware
  - `Tetra_Main_1.5.syx`
  - `Tetra_Voice_1.2.syx`
  - Installation readme files

### sequential-forum/ -- Beta Firmware (Pym / Chris Hector)
- **Source:** [Sequential Forum](https://forum.sequential.com/index.php?topic=681.0) (attachment download worked without login)
- `Tetra_Main_1.6.19.syx` (149,895 bytes) -- Beta main OS
- `Tetra_Voice_1.5.12.syx` (149,895 bytes) -- Beta voice OS
- Verified: both files start with `F0 01 26` (valid DSI Tetra SysEx)
- Adds: sequencer slew, expanded arpeggiator, front-panel Multi editing, Mode Lock, individual voice volume
- **MUST install via 5-pin MIDI IN** (not USB). Serial numbers ~1992-2138 may freeze during update.

### lucasvanheldon/ -- Individual Program Dumps (GitHub)
- **Source:** [LucasVanHeldon/Mopho-Tetra-Utilities](https://github.com/LucasVanHeldon/Mopho-Tetra-Utilities) (Tetra/ directory)
- 384 individual `.syx` files (one per program slot)
- Naming convention: `data_b{bank}p{program}.syx` (e.g., `data_b0p64.syx` = Bank 0, Program 64)
- Verified: headers start with `F0 01 26` (Tetra SysEx manufacturer ID)
- Useful for programmatic access and individual patch analysis

---

## Failed / Requires Manual Action

### Noisy Machines (Gumroad)
- **Collections 1 (FREE):** https://noisymachines.gumroad.com/l/bpWbV -- 10 .t4p patches, $0
  - Requires Gumroad checkout (enter $0 + email). No direct download link available.
  - Juno 6/60/106 emulation patches
- **Classic Juno 60 sounds:** Referenced at https://www.matrixsynth.com/2021/04/dsi-tetra-free-download-patches-classic.html
  - Links back to the same Gumroad storefront
- **Collections 2:** https://noisymachines.gumroad.com/l/MLPdD -- $5 (paid)

### PresetPatch.com
- **URL:** https://www.presetpatch.com/synth/dsi-tetra
- Requires free account registration + daily download token system
- Available patches (not downloaded):
  - `eXode_Bank_C.syx`, `eXode_Bank_D.syx` (duplicates of what we already have)
  - `Tron_Drum_C@.t4p` -- percussion (Crumbman)
  - `Tetr4_Piano_C@.t4p` -- piano (Crumbman)
  - `Opera_Singer_C@.t4p` (Crumbman)
  - `in_SanE_C@.t4p` (Crumbman)
  - `Happy_People_C@.t4p` -- lead (Crumbman)
  - `DR_NU_DISCO_BASS_2.t4p` -- bass (danielraizer)
  - `DR_LUV_IS_AROUND_BASS.t4p` -- bass (danielraizer)
  - `DR_IM_DEEP_HORN.t4p` -- brass (danielraizer)
  - `NU_DISCO_BASS.t4p` -- bass (danielraizer)
  - `Tetra_ProgramsCombos_1.0.syx` (duplicate)

### Gearspace DSI User Library
- **URL:** https://gearspace.com/board/electronic-music-instruments-and-electronic-music-production/525937-dave-smith-instruments-patches-user-library-thread.html
- Returns HTTP 403 -- blocks all automated/CLI access
- Described as "the richest free source" with years of accumulated patches in .syx and .t4p formats
- **Requires login** and manual browsing to download attachments

### SynthLib
- **URL:** https://synthlib.com/brands/dsi-sequential/instruments/dsi-sequential-tetra
- Timed out during fetch -- site may be slow or down

---

## Patch Cross-Compatibility Notes

Tetra, Prophet '08, and Mopho patches are largely interchangeable (same Curtis filter voice architecture). The Tetra can export programs in Mopho/P'08 SysEx formats from its Global menu. Prophet '08 patches play with 4 voices on Tetra and may need tweaking.

## File Formats

- `.syx` -- Standard MIDI SysEx dump. Load via SysEx Librarian (Mac) or MIDI-OX (Windows).
- `.t4p` -- Tetra single program file (used by SoundTower editor and PresetPatch).
- Tetra SysEx manufacturer ID: `F0 01 26` (DSI product ID `26` = Tetra)
