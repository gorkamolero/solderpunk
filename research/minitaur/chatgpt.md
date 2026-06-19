# Moog Minitaur Master Reference: learning and mastering the analog bass synthesizer

**Coverage target:** Minitaur hardware with firmware 2.x/2.2.x and the Minitaur Editor/Librarian 3.x. This is a best-effort internet research reference built from official Moog/inMusic documents first, then community and third-party sources. It should be treated as a living document: Moog/inMusic support pages currently expose some version information that is inconsistent, especially around firmware **2.2.2**.

**Primary sources used throughout:** the [official Minitaur User Manual PDF](https://cdn.inmusicbrands.com/Moog/Minitaur/Minitaur_Manual.pdf), the [official Minitaur v2.2 Addendum PDF](https://cdn.inmusicbrands.com/Moog/Minitaur/Minitaurv2.2_Addendum.pdf), the [Minitaur Editor User Manual PDF](https://files.kraftmusic.com/media/ownersmanual/Moog_Minitaur_Editor_Users_Manual.pdf), the current [Moog Minitaur downloads page](https://www.moogmusic.com/downloads/?product=Minitaur), and the official inMusic/Moog [Minitaur troubleshooting/support article](https://support.inmusicstore.com/en/support/solutions/articles/69000840566-moog-minitaur-general-troubleshooting).

---

## Version and contradiction map

| Topic | What the sources say | Practical interpretation |
|---|---|---|
| Firmware 2.2.0 / 2.2.1 | The current [Moog downloads page](https://www.moogmusic.com/downloads/?product=Minitaur) lists Minitaur firmware **v2.2.0** and **v2.2.1**, plus Editor PC **v3.3.0** and Editor Mac **v3.3.3**. The Moog forum post for [firmware 2.2.1](https://forum.moogmusic.com/t/mtr-minitaur-firmware-v2-2-1-released/19443) says 2.2.1 fixed two post-2.2.0 bugs. | Treat **2.2.1** as the latest fully release-noted public firmware found in Moog community/download sources. |
| Firmware 2.2.2 | The official support article’s firmware-reload procedure explicitly references `Minitaur_Firmware_v2_2_2.syx` as the file to send in bootloader mode ([Moog/inMusic troubleshooting](https://support.inmusicstore.com/en/support/solutions/articles/69000840566-moog-minitaur-general-troubleshooting)). A Reddit thread reports new units and Editor sessions showing **2.2.2**, while users note that Moog’s download page still exposes **2.2.1** as latest ([Reddit 2.2.2 thread](https://www.reddit.com/r/synthesizers/comments/1kvo3b6/minitaur_firmware_222/)). | **2.2.2 appears support-referenced but undocumented.** I found no official 2.2.2 release notes. Check the Editor Settings page’s displayed firmware version before downgrading or reinstalling. |
| Preset count | The v2.1-era release notes said Minitaur could store/load up to **128** presets and came loaded with around **94** presets ([Moog forum v2.1 release](https://forum.moogmusic.com/t/minitaur-v3-0-editor-and-v2-1-firmware-released/14671)). The support restore procedure references `all_presets_100_v2.syx` ([Moog/inMusic troubleshooting](https://support.inmusicstore.com/en/support/solutions/articles/69000840566-moog-minitaur-general-troubleshooting)). The v2.2 addendum says the free Editor/Librarian can store up to **128** presets and that presets are selected with MIDI Program Change ([v2.2 Addendum](https://cdn.inmusicbrands.com/Moog/Minitaur/Minitaurv2.2_Addendum.pdf)). | Hardware/editor preset slots are **128**. Factory-content counts vary by source and restore file; do not assume every unit ships with the same filled bank. |
| Notes above C5 | The original manual says MIDI note values **0–72** are recognized and notes **73+** are ignored; the highest oscillator pitch is C5/523.25 Hz ([Minitaur User Manual](https://cdn.inmusicbrands.com/Moog/Minitaur/Minitaur_Manual.pdf)). Later v2.x documents add **Top Octave Wrap**, where notes above C5 play equivalent notes in the top octave rather than simply exceeding the range ([v2.2 Addendum](https://cdn.inmusicbrands.com/Moog/Minitaur/Minitaurv2.2_Addendum.pdf)). | Behavior differs by firmware/global setting. For bass use, keep sequences in the documented C4-and-down/C5 oscillator range; enable Top Octave Wrap only when you deliberately want lead/SFX behavior. |
| MultiDrive | The Minitaur manual and editor docs describe oscillator/mixer level clipping into the filter, but they do **not** document a Sub 37-style **MultiDrive** parameter ([Minitaur User Manual](https://cdn.inmusicbrands.com/Moog/Minitaur/Minitaur_Manual.pdf); [Editor Manual](https://files.kraftmusic.com/media/ownersmanual/Moog_Minitaur_Editor_Users_Manual.pdf)). Community discussions distinguish Minitaur drive from Sub-series MultiDrive and suggest external feedback/pedals if that sound is desired ([Elektronauts feedback/drive discussion](https://www.elektronauts.com/t/moog-minitaur-drive-fb-mod/70861), [Reddit Sub37 vs Minitaur discussion](https://www.reddit.com/r/synthesizers/comments/5xu6b1/is_the_moog_sub_37_worth_it_when_i_already_have_a/)). | “MultiDrive” is not an official Minitaur feature. The Minitaur’s native drive trick is **mixer/filter overload**; external feedback or pedals are optional workarounds. |
| Tap tempo | Official Minitaur docs document **MIDI-clock LFO sync** and clock division, not a front-panel tap-tempo feature ([Minitaur User Manual](https://cdn.inmusicbrands.com/Moog/Minitaur/Minitaur_Manual.pdf), [v2.2 Addendum](https://cdn.inmusicbrands.com/Moog/Minitaur/Minitaurv2.2_Addendum.pdf)). | Tap tempo is only practical if an external controller/DAW generates MIDI clock from a tap-tempo source; Minitaur itself syncs to MIDI clock. |
| NRPN | The official manual’s implementation is CC/SysEx-oriented, v2.2 adds RPN 2 coarse tuning, and the [MIDI.guide raw Minitaur CSV](https://raw.githubusercontent.com/pencilresearch/midi/main/Moog/Minitaur.csv) has blank NRPN fields. | I found no reliable public NRPN chart. Use CC, 14-bit CC pairs, RPN 2, SysEx dumps/globals, and MIDI Tuning Standard SysEx. |

---

# 1. Hidden features & editor-only parameters most owners never use

## 1.1 Shift-panel functions added by later firmware

Firmware 2.x turned the Minitaur from a panel-only bass module into a much deeper programmable instrument. Firmware 2.2 uses **GLIDE as a shift key** for many under-panel features ([v2.2 Addendum](https://cdn.inmusicbrands.com/Moog/Minitaur/Minitaurv2.2_Addendum.pdf)). These are easy to miss because the front panel labels do not show them.

| Hidden/shift function | Front-panel action | What it does | Source |
|---|---:|---|---|
| Next preset | Hold **GLIDE + OSC 1 WAVE** | Increment preset slot. | [v2.2 Addendum](https://cdn.inmusicbrands.com/Moog/Minitaur/Minitaurv2.2_Addendum.pdf) |
| Previous preset | Hold **GLIDE + OSC 2 WAVE** | Decrement preset slot. | [v2.2 Addendum](https://cdn.inmusicbrands.com/Moog/Minitaur/Minitaurv2.2_Addendum.pdf) |
| Save current preset | Hold **GLIDE + RELEASE** for about 1 second | Saves the active preset into the current slot. | [v2.2 Addendum](https://cdn.inmusicbrands.com/Moog/Minitaur/Minitaurv2.2_Addendum.pdf) |
| Select modulation source | Hold **GLIDE + LFO RATE** | Selects the v2.2 modulation source: triangle, square, ramp/saw down, saw up, sample-and-hold, or Filter EG. | [v2.2 Addendum](https://cdn.inmusicbrands.com/Moog/Minitaur/Minitaurv2.2_Addendum.pdf) |
| Hard Sync | Hold **GLIDE + VCO 2 LEVEL** | Enables/disables VCO2 hard sync to VCO1. | [v2.2 Addendum](https://cdn.inmusicbrands.com/Moog/Minitaur/Minitaurv2.2_Addendum.pdf) |
| VCO2 Mod Only | Hold **GLIDE + VCO LFO AMT** | Sends pitch modulation to VCO2 only; especially useful with hard sync. | [v2.2 Addendum](https://cdn.inmusicbrands.com/Moog/Minitaur/Minitaurv2.2_Addendum.pdf); [Editor Manual](https://files.kraftmusic.com/media/ownersmanual/Moog_Minitaur_Editor_Users_Manual.pdf) |
| VCO2 Beat | Hold **GLIDE + VCO 2 FREQ** | Fine detunes VCO2 against VCO1. | [v2.2 Addendum](https://cdn.inmusicbrands.com/Moog/Minitaur/Minitaurv2.2_Addendum.pdf); [Minitaur User Manual](https://cdn.inmusicbrands.com/Moog/Minitaur/Minitaur_Manual.pdf) |
| External input level | Hold **GLIDE + VCO 1 LEVEL** | Sets external-audio input level before the filter. | [v2.2 Addendum](https://cdn.inmusicbrands.com/Moog/Minitaur/Minitaurv2.2_Addendum.pdf); [Minitaur User Manual](https://cdn.inmusicbrands.com/Moog/Minitaur/Minitaur_Manual.pdf) |
| Envelope trigger mode | Hold **GLIDE + AMP EG ATTACK** | Selects Legato On, Legato Off, or EG Reset behavior. | [v2.2 Addendum](https://cdn.inmusicbrands.com/Moog/Minitaur/Minitaurv2.2_Addendum.pdf); [Editor Manual](https://files.kraftmusic.com/media/ownersmanual/Moog_Minitaur_Editor_Users_Manual.pdf) |
| Filter EG delay | Hold **GLIDE + FILTER EG ATTACK** | Sets delay before the filter envelope begins. | [v2.2 Addendum](https://cdn.inmusicbrands.com/Moog/Minitaur/Minitaurv2.2_Addendum.pdf) |
| Filter EG hold | Hold **GLIDE + FILTER EG DECAY/RELEASE** | Holds the filter envelope at peak before decay. | [v2.2 Addendum](https://cdn.inmusicbrands.com/Moog/Minitaur/Minitaurv2.2_Addendum.pdf) |
| Amp EG hold | Hold **GLIDE + AMP EG DECAY/RELEASE** | Holds the amp envelope at peak before decay. | [v2.2 Addendum](https://cdn.inmusicbrands.com/Moog/Minitaur/Minitaurv2.2_Addendum.pdf) |
| Drone / latch gate | Hold **GLIDE + AMP SUSTAIN**, turn min→max | Opens the gate continuously for drones or external audio processing. Turn max→min to disable. | [v2.2 Addendum](https://cdn.inmusicbrands.com/Moog/Minitaur/Minitaurv2.2_Addendum.pdf); [Moog latch-gate support](https://support.inmusicstore.com/en/support/solutions/articles/69000840568-moog-minitaur-sirin-how-do-i-latch-the-gate-on-a-minitaur-or-sirin-) |
| Top Octave Wrap | Hold **GLIDE + GLIDE RATE** | Changes behavior above C5 so notes wrap into Minitaur’s top octave. | [v2.2 Addendum](https://cdn.inmusicbrands.com/Moog/Minitaur/Minitaurv2.2_Addendum.pdf) |
| Panic / All Notes Off | Hold **GLIDE + AMP SUSTAIN**, turn to zero | Sends panic/all-notes-off behavior from the panel. | [v2.2 Addendum](https://cdn.inmusicbrands.com/Moog/Minitaur/Minitaurv2.2_Addendum.pdf); [Minitaur User Manual](https://cdn.inmusicbrands.com/Moog/Minitaur/Minitaur_Manual.pdf) |
| Independent Decay/Release mode | Hold **RELEASE** for about 1 second | Toggles linked Decay/Release mode versus independent release editing; LED blinks once or twice to indicate mode. | [v2.2 Addendum](https://cdn.inmusicbrands.com/Moog/Minitaur/Minitaurv2.2_Addendum.pdf); [Moog forum release-mode discussion](https://forum.moogmusic.com/t/minitaur-vca-envelope-release-time-is-very-short/13623) |

## 1.2 Editor-only and under-the-hood parameters

The Editor/Librarian exposes parameters that are not visible on the base panel; the Editor Manual explicitly calls the **Under The Hood** layout a way to access parameters otherwise controllable only by MIDI or software ([Editor Manual](https://files.kraftmusic.com/media/ownersmanual/Moog_Minitaur_Editor_Users_Manual.pdf)). The following are the most important ones.

| Parameter | Why it matters | Practical use | Source |
|---|---|---|---|
| VCO2 Beat | Fine detune around unison, separate from coarse VCO2 frequency. The manual describes it as a small detune around VCO1; the Editor Manual describes a hertz-style beat control. | Use tiny offsets for huge subs, reese movement, and analog beating without changing musical interval. | [Minitaur User Manual](https://cdn.inmusicbrands.com/Moog/Minitaur/Minitaur_Manual.pdf); [Editor Manual](https://files.kraftmusic.com/media/ownersmanual/Moog_Minitaur_Editor_Users_Manual.pdf) |
| Note Sync | Starts both oscillators simultaneously for consistent attack energy. | Turn **on** for punchy kick/sub patches; turn **off** for organic phase variation. | [Minitaur User Manual](https://cdn.inmusicbrands.com/Moog/Minitaur/Minitaur_Manual.pdf); [Editor Manual](https://files.kraftmusic.com/media/ownersmanual/Moog_Minitaur_Editor_Users_Manual.pdf) |
| Hard Sync | Resets VCO2 waveform at VCO1 frequency, creating extra overtones when VCO2 pitch is swept. | Use with VCO2 Mod Only for ripping sync basses and pseudo-FM metallic sweeps. | [v2.2 Addendum](https://cdn.inmusicbrands.com/Moog/Minitaur/Minitaurv2.2_Addendum.pdf); [Editor Manual](https://files.kraftmusic.com/media/ownersmanual/Moog_Minitaur_Editor_Users_Manual.pdf) |
| VCO2 Mod Only | Routes modulation only to VCO2. | With hard sync, keep VCO1 pitch stable while sweeping VCO2 for harmonics rather than out-of-tune wobble. | [v2.2 Addendum](https://cdn.inmusicbrands.com/Moog/Minitaur/Minitaurv2.2_Addendum.pdf); [Editor Manual](https://files.kraftmusic.com/media/ownersmanual/Moog_Minitaur_Editor_Users_Manual.pdf) |
| LFO Shape | v2.2 adds triangle, square, ramp/saw-down, saw-up, sample-and-hold, and Filter EG as modulation sources. | S&H for rhythmic random bass, ramp for one-direction acid movement, Filter EG as pitch/filter-mod source. | [v2.2 Addendum](https://cdn.inmusicbrands.com/Moog/Minitaur/Minitaurv2.2_Addendum.pdf); [Gearspace v2.2 release notes](https://gearspace.com/board/electronic-music-instruments-and-electronic-music-production/1165752-now-available-minitaur-firmware-v2-2-amp-minitaur-editor-librarian-v3-2-a.html) |
| LFO MIDI Sync and Clock Divide | Syncs LFO to MIDI clock with musical divisions. | Tempo-locked wobble, pumping filter motion, stepped S&H grooves. | [Minitaur User Manual](https://cdn.inmusicbrands.com/Moog/Minitaur/Minitaur_Manual.pdf); [Moog Ableton sync support](https://support.inmusicstore.com/en/support/solutions/articles/69000840567-moog-minitaur-sirin-how-can-i-get-minitaur-sirin-to-sync-to-ableton-) |
| LFO Key Trigger | Restarts LFO per note. | Use with S&H or ramp for repeatable percussive modulation; v2.2.1 fixed a no-clock edge case. | [Minitaur User Manual](https://cdn.inmusicbrands.com/Moog/Minitaur/Minitaur_Manual.pdf); [Moog v2.2.1 forum post](https://forum.moogmusic.com/t/mtr-minitaur-firmware-v2-2-1-released/19443) |
| Filter Keyboard Tracking | Ranges from no tracking to heavy tracking; default is about 50%. | Higher tracking preserves brightness across bass lines; 0% keeps sub/kick patches consistent note to note. | [Minitaur User Manual](https://cdn.inmusicbrands.com/Moog/Minitaur/Minitaur_Manual.pdf); [Editor Manual](https://files.kraftmusic.com/media/ownersmanual/Moog_Minitaur_Editor_Users_Manual.pdf) |
| Filter Velocity and VCA Velocity | Separately route MIDI velocity to filter envelope amount and amplitude. | Essential for 303-style accents, dynamic plucks, and expressive sequencer patterns. | [Minitaur User Manual](https://cdn.inmusicbrands.com/Moog/Minitaur/Minitaur_Manual.pdf) |
| Glide Type | Linear constant rate, linear constant time, or exponential. | EXP for classic synth glide; LCT for tempo-consistent programmed slides; legato-only for 303-ish overlaps. | [Minitaur User Manual](https://cdn.inmusicbrands.com/Moog/Minitaur/Minitaur_Manual.pdf); [Editor Manual](https://files.kraftmusic.com/media/ownersmanual/Moog_Minitaur_Editor_Users_Manual.pdf) |
| Legato Glide | Applies glide only to overlapping notes. | Sequence overlapping notes for slides without smearing every step. | [Minitaur User Manual](https://cdn.inmusicbrands.com/Moog/Minitaur/Minitaur_Manual.pdf) |
| EG Trigger Mode | Legato On, Legato Off, or EG Reset. The Editor Manual says EG Reset can loop envelopes after their full cycle, letting EGs behave as multi-stage modulation sources. | Use Legato On for acid lines; Legato Off for every-note plucks; EG Reset for repeating envelope modulation experiments. | [Editor Manual](https://files.kraftmusic.com/media/ownersmanual/Moog_Minitaur_Editor_Users_Manual.pdf) |
| Independent Release | Separates decay and release stages in the Extended layout. | Real basses often need short decay but longer note release; enable Mode 2 and edit independent VCF/VCA release. | [v2.2 Addendum](https://cdn.inmusicbrands.com/Moog/Minitaur/Minitaurv2.2_Addendum.pdf); [Editor Manual](https://files.kraftmusic.com/media/ownersmanual/Moog_Minitaur_Editor_Users_Manual.pdf) |
| Filter EG Delay/Hold and Amp EG Hold | Adds timing stages beyond the visible ADSR-style panel behavior. | Create delayed filter bite, held punch before decay, or gated percussion shapes. | [v2.2 Addendum](https://cdn.inmusicbrands.com/Moog/Minitaur/Minitaurv2.2_Addendum.pdf) |
| Key Priority | Low, High, or Last note priority. | Low priority for vintage bass-line discipline; Last priority for modern sequencer predictability. | [Editor Manual](https://files.kraftmusic.com/media/ownersmanual/Moog_Minitaur_Editor_Users_Manual.pdf) |
| Pitch-bend up/down ranges | Separate up/down pitch-bend ranges. | 2–3 semitones for bass realism, 12/24 semitones for lead/SFX drops. | [Minitaur User Manual](https://cdn.inmusicbrands.com/Moog/Minitaur/Minitaur_Manual.pdf); [Editor Manual](https://files.kraftmusic.com/media/ownersmanual/Moog_Minitaur_Editor_Users_Manual.pdf) |
| Top Octave Wrap | Later firmware can wrap notes above C5 back into the top octave. | Useful for lead-like playing from a normal keyboard; disable if you want strict bass-range behavior. | [v2.2 Addendum](https://cdn.inmusicbrands.com/Moog/Minitaur/Minitaurv2.2_Addendum.pdf) |
| Pitch CV / Volume CV / Gate CV remapping | Later firmware/editor can remap CV inputs to parameters; CV-to-MIDI is limited to 0 to +5 V. | Use modular or expression pedals to control cutoff, resonance, LFO rate, waveshape, etc.; avoid negative or over-5V voltages. | [v2.2 Addendum](https://cdn.inmusicbrands.com/Moog/Minitaur/Minitaurv2.2_Addendum.pdf); [Editor Manual](https://files.kraftmusic.com/media/ownersmanual/Moog_Minitaur_Editor_Users_Manual.pdf) |
| Poly Voice Number / Poly Max | Allows poly-chaining up to 16 compatible Moog synths. | Use multiple Minitaurs/Sirins/Phattys for assigned monophonic voices; do not set voice number higher than max, or that unit may not play. | [Editor Manual](https://files.kraftmusic.com/media/ownersmanual/Moog_Minitaur_Editor_Users_Manual.pdf) |
| Knob Mode | Snap, Pass Through, or Relative. | Prevent jumps when loading presets; Relative/Pass Through are safer for performance. | [Editor Manual](https://files.kraftmusic.com/media/ownersmanual/Moog_Minitaur_Editor_Users_Manual.pdf) |
| Load Preset Volume / Load Preset Mod Wheel | Determines whether preset recalls stored volume/mod-wheel values. | Turn on for exact patch recall; leave off for performance consistency. | [Editor Manual](https://files.kraftmusic.com/media/ownersmanual/Moog_Minitaur_Editor_Users_Manual.pdf); [Moog v2.1 release](https://forum.moogmusic.com/t/minitaur-v3-0-editor-and-v2-1-firmware-released/14671) |
| MIDI CC Filter | Ignores incoming CCs. | Stop rogue controllers or DAW automation from changing a live patch. | [Editor Manual](https://files.kraftmusic.com/media/ownersmanual/Moog_Minitaur_Editor_Users_Manual.pdf) |
| Echo DIN USB / Echo MIDI | Changes MIDI merge/echo behavior between DIN, USB, DAW, and plugin. | Critical for plugin control and for routing external hardware through USB; the original manual says DIN In is not normally passed to USB Out. | [Minitaur User Manual](https://cdn.inmusicbrands.com/Moog/Minitaur/Minitaur_Manual.pdf); [Editor Manual](https://files.kraftmusic.com/media/ownersmanual/Moog_Minitaur_Editor_Users_Manual.pdf) |
| SysEx ID | Sets device identity for SysEx communication. | Useful when multiple Moog units are connected or when using dedicated librarian/editor setups. | [Editor Manual](https://files.kraftmusic.com/media/ownersmanual/Moog_Minitaur_Editor_Users_Manual.pdf) |

## 1.3 Hidden power moves

**Oscillator Note Sync is a bass-consistency weapon.** With Note Sync on, both oscillators start together on each note, giving more repeatable attack energy; with it off, oscillator phase drift gives more organic motion ([Minitaur User Manual](https://cdn.inmusicbrands.com/Moog/Minitaur/Minitaur_Manual.pdf)). For studio bass that must sit under a kick consistently, start with Note Sync on; for a reese or live-feeling Taurus patch, turn it off.

**VCO2-only modulation plus Hard Sync is the Minitaur’s “extra synth.”** v2.2 added hard sync and VCO2-only modulation, and the Editor Manual specifically points to using VCO2-only modulation with hard sync ([v2.2 Addendum](https://cdn.inmusicbrands.com/Moog/Minitaur/Minitaurv2.2_Addendum.pdf); [Editor Manual](https://files.kraftmusic.com/media/ownersmanual/Moog_Minitaur_Editor_Users_Manual.pdf)). This gives aggressive harmonic motion while the perceived pitch remains anchored by VCO1.

**External audio is silent unless the VCA is opened.** The manual says external audio enters before the mixer/filter but still needs a MIDI note or Gate/CV event to open the synth; the support article shows the latch-gate method for keeping the gate open ([Minitaur User Manual](https://cdn.inmusicbrands.com/Moog/Minitaur/Minitaur_Manual.pdf); [Moog latch-gate support](https://support.inmusicstore.com/en/support/solutions/articles/69000840568-moog-minitaur-sirin-how-do-i-latch-the-gate-on-a-minitaur-or-sirin-)). For permanent filter-box mode, use Drone/Latch Gate and set both oscillator levels to zero.

**Mixer level is the native drive circuit.** The manual says VCO levels begin to clip the filter around 2 o’clock, adding aggressive harmonics ([Minitaur User Manual](https://cdn.inmusicbrands.com/Moog/Minitaur/Minitaur_Manual.pdf)). This is not Sub-series MultiDrive; it is analog level into the ladder filter. The cleanest sub tones usually keep resonance low and avoid excessive overdrive, a community point echoed in a Gearspace sub-bass thread ([Gearspace Minitaur sub-bass discussion](https://gearspace.com/board/electronic-music-instruments-and-electronic-music-production/772701-minitaur-sub-bass.html)).

**Self-oscillating filter can be a sine/kick source.** The manual and Editor Manual document filter self-oscillation at high resonance, and MusicRadar’s review notes the Minitaur can produce sine/kick-style sounds with oscillators down and resonance up ([Minitaur User Manual](https://cdn.inmusicbrands.com/Moog/Minitaur/Minitaur_Manual.pdf); [MusicRadar Minitaur review](https://www.musicradar.com/reviews/tech/moog-minitaur-530857)).

**14-bit CC matters.** The manual says all parameters send 7-bit CC but knob parameters can receive 7-bit or 14-bit high-resolution CC, using MSB as the normal CC and LSB as fine resolution ([Minitaur User Manual](https://cdn.inmusicbrands.com/Moog/Minitaur/Minitaur_Manual.pdf)). If you automate cutoff, resonance, VCO2 frequency, or envelope times from a DAW, use the 14-bit pairs whenever your sequencer supports them.

**The Editor’s CV remapping turns the four analog jacks into a mini-modulation matrix.** v2.2 and the Editor Manual document Pitch CV, Volume CV, and Gate CV remapping, with 0 to +5V limits for CV-to-MIDI conversion ([v2.2 Addendum](https://cdn.inmusicbrands.com/Moog/Minitaur/Minitaurv2.2_Addendum.pdf); [Editor Manual](https://files.kraftmusic.com/media/ownersmanual/Moog_Minitaur_Editor_Users_Manual.pdf)). A safe modular performance trick is mapping Volume CV to cutoff or VCO2 frequency and using an expression pedal or attenuated LFO.

---

# 2. Firmware evolution & current full feature set

## 2.1 Analog architecture and base instrument

The Minitaur is a monophonic analog bass synthesizer with a **100% analog audio path**, derived from Taurus-style Moog bass architecture; its sound engine is two VCOs into a mixer, then a Moog low-pass ladder filter, then VCA, with separate filter and amp envelopes plus LFO modulation ([Minitaur User Manual](https://cdn.inmusicbrands.com/Moog/Minitaur/Minitaur_Manual.pdf)).

**Signal path:** VCO1, VCO2, and external audio input feed the mixer; the mixed signal enters the low-pass filter, whose cutoff can be modulated by its envelope, LFO, keyboard tracking, velocity, and CV; the VCA is then controlled by the amp envelope, velocity, output level, and Volume CV, then goes to line/headphone outputs ([Minitaur User Manual](https://cdn.inmusicbrands.com/Moog/Minitaur/Minitaur_Manual.pdf)).

**Oscillators:** both oscillators offer sawtooth or square wave, VCO1 is the master oscillator, and VCO2 can be tuned around or offset from VCO1; oscillator pitch is affected by MIDI note, glide, VCO2 frequency/beat, pitch CV, fine tune, and LFO modulation ([Minitaur User Manual](https://cdn.inmusicbrands.com/Moog/Minitaur/Minitaur_Manual.pdf)). The documented oscillator range is six octaves with a highest oscillator pitch of C5/523.25 Hz, and the original manual recognizes MIDI notes 0–72 ([Minitaur User Manual](https://cdn.inmusicbrands.com/Moog/Minitaur/Minitaur_Manual.pdf)).

**Mixer/filter:** VCO levels are continuous; high mixer levels clip the ladder filter around 2 o’clock for more aggressive harmonics, and the external audio input has no dedicated panel knob but is adjustable by MIDI/editor up to 200% with unity around the midpoint ([Minitaur User Manual](https://cdn.inmusicbrands.com/Moog/Minitaur/Minitaur_Manual.pdf)). The ladder filter is a classic 24 dB/octave Moog low-pass design with resonance that can self-oscillate at high settings ([Minitaur User Manual](https://cdn.inmusicbrands.com/Moog/Minitaur/Minitaur_Manual.pdf); [Editor Manual](https://files.kraftmusic.com/media/ownersmanual/Moog_Minitaur_Editor_Users_Manual.pdf)).

**Envelopes:** Minitaur has separate Minimoog-style ADSR-ish filter and amp envelopes, each triggered by MIDI Note On or the Gate jack; attack and decay/release times range from about 1 ms to 30 seconds in the official manual ([Minitaur User Manual](https://cdn.inmusicbrands.com/Moog/Minitaur/Minitaur_Manual.pdf)). Later firmware/editor modes add independent release editing and envelope trigger modes ([v2.2 Addendum](https://cdn.inmusicbrands.com/Moog/Minitaur/Minitaurv2.2_Addendum.pdf); [Editor Manual](https://files.kraftmusic.com/media/ownersmanual/Moog_Minitaur_Editor_Users_Manual.pdf)).

**LFO:** the base manual documents LFO rate, VCO amount, VCF amount, MIDI sync, clock division, and key trigger; v2.2 adds multiple LFO shapes and Filter EG as a modulation source ([Minitaur User Manual](https://cdn.inmusicbrands.com/Moog/Minitaur/Minitaur_Manual.pdf); [Gearspace v2.2 release notes](https://gearspace.com/board/electronic-music-instruments-and-electronic-music-production/1165752-now-available-minitaur-firmware-v2-2-amp-minitaur-editor-librarian-v3-2-a.html)).

**CV/Gate:** Pitch, Filter, Volume, and Gate jacks accept 0 to +5V-style control or Moog EP-2-style pedals where appropriate; Pitch and Filter CVs use approximately 1V/octave scaling, Gate is +5V, and MIDI plus CV can be used simultaneously though combinations may be unpredictable ([Minitaur User Manual](https://cdn.inmusicbrands.com/Moog/Minitaur/Minitaur_Manual.pdf)). Later firmware/editor supports remapping Pitch CV, Volume CV, and Gate CV to other parameters and converting 0 to +5V CV into MIDI messages ([v2.2 Addendum](https://cdn.inmusicbrands.com/Moog/Minitaur/Minitaurv2.2_Addendum.pdf); [Editor Manual](https://files.kraftmusic.com/media/ownersmanual/Moog_Minitaur_Editor_Users_Manual.pdf)).

## 2.2 Firmware timeline

| Era/version | Feature changes and notes | Sources |
|---|---|---|
| Early 1.x | Early firmware already supported CC control and SysEx-style current-state dumps. A Moog forum user documents that in firmware **1.0.7**, sending `F0 04 08 1B 00 00 F7` makes Minitaur transmit its current settings as MIDI CCs; the same thread reports older switch-value quirks. | [Moog forum Minitaur dump thread](https://forum.moogmusic.com/t/minitaur-dump/11696) |
| Rev 2 / early 2.x | Community and Moog-forum discussion describe Rev 2 as adding internal preset memory and Program Change behavior. Amos from Moog explains that Program Change works only for valid programs and that presets must first be loaded into internal memory from the Editor. | [Moog forum Rev 2 thread](https://forum.moogmusic.com/t/minitaur-rev-2/12132); [Gearspace Rev2 discussion](https://gearspace.com/board/electronic-music-instruments-and-electronic-music-production/1057092-thoughts-moog-minitaur-5.html) |
| Firmware 2.0.32 / pre-2.1 | Moog forum posts describe firmware 2.0.32 as a near-final test release that would become 2.1.0 and include new features plus Local Control Off documentation. | [Moog forum Jan 2014 editor/preset discussion](https://forum.moogmusic.com/t/minitaur-editor-update-and-presets-discussion-jan2014/14193) |
| Firmware 2.1 + Editor 3.0 | Moog announced a rebuilt free Editor for standalone and plug-in formats, requiring firmware 2.1, with every under-the-hood feature accessible/automatable/recallable from DAW projects. Firmware 2.1 added front-panel preset saving, polychain, custom tuning scales, Program Change improvements, MIDI note transposition, and options to load stored mod-wheel and volume positions with presets. | [Moog forum v2.1 release](https://forum.moogmusic.com/t/minitaur-v3-0-editor-and-v2-1-firmware-released/14671); [Sweetwater v2.1 announcement](https://www.sweetwater.com/insync/moog-minitaur-editor-v3-firmware-v2-1/) |
| Firmware 2.1.10 beta + Editor 3.2.0 beta | Moog beta notes describe Editor VST3/VST3-VI support, installer improvements, stability fixes, single-instance plugin protection, MIDI-port-handler improvements, faster GUI response, and the Windows USB driver path for simultaneous DAW/editor access. | [Moog forum Editor 3.2.0b4 / FW 2.1.10](https://forum.moogmusic.com/t/mtr-minitaur-editor-3-2-0b4-and-firmware-2-1-10-available/18477) |
| Firmware 2.2.0 + Editor 3.2 | Release notes say 2.2.0 added **RPN 2 Coarse Tuning**, multiple LFO modes, **VCO2 Hard Sync**, **VCO2 Only**, new shifted panel controls, and a fix for LFO Key Reset when MIDI Sync is active. Synthtopia and MusicRadar summarize the same update as adding multiple modulation sources, hard sync, VCO2-only modulation, and Editor 3.2 improvements. | [Gearspace v2.2 release notes](https://gearspace.com/board/electronic-music-instruments-and-electronic-music-production/1165752-now-available-minitaur-firmware-v2-2-amp-minitaur-editor-librarian-v3-2-a.html); [Synthtopia v2.2 article](https://www.synthtopia.com/content/2017/07/22/moog-updates-minitaur-firmware-editor/); [MusicRadar v2.2 article](https://www.musicradar.com/news/moog-minitaur-gets-multiple-lfo-waveforms-in-latest-firmware-update) |
| Firmware 2.2.1 | The Moog forum 2.2.1 post says it fixed two issues: LFO Key Trigger not functioning when MIDI Sync was on but no clock was present, and envelope release controls stopping under independent Env Release Mode when Release was on and the Glide button was pressed. | [Moog forum FW 2.2.1](https://forum.moogmusic.com/t/mtr-minitaur-firmware-v2-2-1-released/19443) |
| Firmware 2.2.2 | The official support firmware-reload instructions refer to `Minitaur_Firmware_v2_2_2.syx`, but the current downloads page lists 2.2.0 and 2.2.1 and I found no official 2.2.2 release notes. Reddit users report some newer units showing 2.2.2. | [Moog/inMusic troubleshooting](https://support.inmusicstore.com/en/support/solutions/articles/69000840566-moog-minitaur-general-troubleshooting); [Moog downloads page](https://www.moogmusic.com/downloads/?product=Minitaur); [Reddit 2.2.2 thread](https://www.reddit.com/r/synthesizers/comments/1kvo3b6/minitaur_firmware_222/) |

## 2.3 Current full feature set, assuming 2.2.x + Editor 3.x

- Two analog VCOs, each saw or square, mixed into a 24 dB/octave Moog ladder filter and VCA; audio path remains analog ([Minitaur User Manual](https://cdn.inmusicbrands.com/Moog/Minitaur/Minitaur_Manual.pdf)).
- VCO2 coarse/frequency offset, VCO2 beat/fine detune, oscillator note sync, VCO2 hard sync, and VCO2-only modulation ([Minitaur User Manual](https://cdn.inmusicbrands.com/Moog/Minitaur/Minitaur_Manual.pdf); [v2.2 Addendum](https://cdn.inmusicbrands.com/Moog/Minitaur/Minitaurv2.2_Addendum.pdf)).
- Mixer levels for VCO1, VCO2, and external input; external input enters pre-filter and can be used as a filter/VCA processing path when the gate is held open ([Minitaur User Manual](https://cdn.inmusicbrands.com/Moog/Minitaur/Minitaur_Manual.pdf); [Moog latch-gate support](https://support.inmusicstore.com/en/support/solutions/articles/69000840568-moog-minitaur-sirin-how-do-i-latch-the-gate-on-a-minitaur-or-sirin-)).
- Filter cutoff, resonance/self-oscillation, filter envelope amount including negative amounts, keyboard tracking, filter velocity sensitivity, and Filter CV ([Minitaur User Manual](https://cdn.inmusicbrands.com/Moog/Minitaur/Minitaur_Manual.pdf)).
- Independent filter and amp envelopes with attack/decay/sustain/release behavior, release switch, later independent release mode, envelope trigger modes, and delay/hold behavior available through shifted/editor controls ([Minitaur User Manual](https://cdn.inmusicbrands.com/Moog/Minitaur/Minitaur_Manual.pdf); [v2.2 Addendum](https://cdn.inmusicbrands.com/Moog/Minitaur/Minitaurv2.2_Addendum.pdf); [Editor Manual](https://files.kraftmusic.com/media/ownersmanual/Moog_Minitaur_Editor_Users_Manual.pdf)).
- LFO rate, VCO amount, VCF amount, key trigger, MIDI sync, clock divider, multiple LFO shapes, and Filter EG as mod source ([Minitaur User Manual](https://cdn.inmusicbrands.com/Moog/Minitaur/Minitaur_Manual.pdf); [Gearspace v2.2 release notes](https://gearspace.com/board/electronic-music-instruments-and-electronic-music-production/1165752-now-available-minitaur-firmware-v2-2-amp-minitaur-editor-librarian-v3-2-a.html)).
- Glide on/off, glide rate, glide type, legato-only glide, key priority, separate pitch-bend up/down ranges, and RPN 2 coarse tuning in v2.2 ([Minitaur User Manual](https://cdn.inmusicbrands.com/Moog/Minitaur/Minitaur_Manual.pdf); [Gearspace v2.2 release notes](https://gearspace.com/board/electronic-music-instruments-and-electronic-music-production/1165752-now-available-minitaur-firmware-v2-2-amp-minitaur-editor-librarian-v3-2-a.html)).
- 128 preset slots, MIDI Program Change support, front-panel preset navigation/saving, editor/librarian bank import/export, and hardware-preset drag/drop management ([v2.2 Addendum](https://cdn.inmusicbrands.com/Moog/Minitaur/Minitaurv2.2_Addendum.pdf); [Editor Manual](https://files.kraftmusic.com/media/ownersmanual/Moog_Minitaur_Editor_Users_Manual.pdf)).
- DAW plug-in integration with automation/CC/SysEx recall, plus Windows driver support for simultaneous DAW/editor use when needed ([Editor Manual](https://files.kraftmusic.com/media/ownersmanual/Moog_Minitaur_Editor_Users_Manual.pdf); [Moog/inMusic troubleshooting](https://support.inmusicstore.com/en/support/solutions/articles/69000840566-moog-minitaur-general-troubleshooting)).
- CV remapping, CV-to-MIDI, pitch-CV calibration, note calibration, global settings, polychain, custom tuning scales, and MIDI echo/filter utilities ([v2.2 Addendum](https://cdn.inmusicbrands.com/Moog/Minitaur/Minitaurv2.2_Addendum.pdf); [Editor Manual](https://files.kraftmusic.com/media/ownersmanual/Moog_Minitaur_Editor_Users_Manual.pdf); [Moog v2.1 release](https://forum.moogmusic.com/t/minitaur-v3-0-editor-and-v2-1-firmware-released/14671)).

---

# 3. MIDI / CC / NRPN control tricks (full chart)

## 3.1 MIDI behavior fundamentals

**MIDI channel:** the Minitaur defaults to MIDI channel 1. The manual says to set the receive channel by holding all four panel switches and sending any MIDI message on the desired channel; the setting is remembered after power-down ([Minitaur User Manual](https://cdn.inmusicbrands.com/Moog/Minitaur/Minitaur_Manual.pdf)).

**Recognized note range:** the original manual documents MIDI note values 0–72 and says note values 73+ are ignored, while later v2.x Top Octave Wrap changes high-note behavior when enabled ([Minitaur User Manual](https://cdn.inmusicbrands.com/Moog/Minitaur/Minitaur_Manual.pdf); [v2.2 Addendum](https://cdn.inmusicbrands.com/Moog/Minitaur/Minitaurv2.2_Addendum.pdf)).

**MIDI clock:** the LFO can sync to MIDI clock when LFO MIDI Sync is enabled; in Ableton, Moog’s support instructions say to enable Sync for both Minitaur MIDI ports and turn MIDI Sync on in the Editor plugin ([Minitaur User Manual](https://cdn.inmusicbrands.com/Moog/Minitaur/Minitaur_Manual.pdf); [Moog Ableton sync support](https://support.inmusicstore.com/en/support/solutions/articles/69000840567-moog-minitaur-sirin-how-can-i-get-minitaur-sirin-to-sync-to-ableton-)).

**CC resolution:** the manual says all parameters send normal 7-bit CC messages, while knob parameters can receive either 7-bit CC or 14-bit CC, where the main CC is MSB and its paired lower CC is LSB fine resolution; switches are 7-bit only ([Minitaur User Manual](https://cdn.inmusicbrands.com/Moog/Minitaur/Minitaur_Manual.pdf)).

**Local Control:** the manual documents Local Control Off as CC122, useful when the front panel should transmit MIDI without directly changing the sound engine, especially in DAW feedback setups ([Minitaur User Manual](https://cdn.inmusicbrands.com/Moog/Minitaur/Minitaur_Manual.pdf)).

**NRPN status:** I found no official public NRPN chart. The [MIDI.guide Minitaur CSV](https://raw.githubusercontent.com/pencilresearch/midi/main/Moog/Minitaur.csv) lists CCs and empty NRPN fields, while official release notes mention **RPN 2 Coarse Tuning** rather than NRPN ([Gearspace v2.2 release notes](https://gearspace.com/board/electronic-music-instruments-and-electronic-music-production/1165752-now-available-minitaur-firmware-v2-2-amp-minitaur-editor-librarian-v3-2-a.html)).

## 3.2 Complete MIDI CC chart

The chart below consolidates the official manual, v2.2 addendum, editor manual, and MIDI.guide’s Minitaur CSV ([Minitaur User Manual](https://cdn.inmusicbrands.com/Moog/Minitaur/Minitaur_Manual.pdf), [v2.2 Addendum](https://cdn.inmusicbrands.com/Moog/Minitaur/Minitaurv2.2_Addendum.pdf), [Editor Manual](https://files.kraftmusic.com/media/ownersmanual/Moog_Minitaur_Editor_Users_Manual.pdf), [MIDI.guide raw CSV](https://raw.githubusercontent.com/pencilresearch/midi/main/Moog/Minitaur.csv)). Values are 0–127 unless noted. For 14-bit parameters, the LSB CC is listed where documented by the manual/MIDI.guide data.

| Section | Parameter | CC | 14-bit LSB CC | Values / range | Default / notes |
|---|---|---:|---:|---|---|
| Performance | Mod Wheel | 1 | 33 | 0–127 | Master amount after MIDI Mod Wheel is received; panel VCO/VCF LFO amounts set maxima. |
| LFO | LFO Rate | 3 | 35 | 0.01–100 Hz when unsynced | Tempo-division when MIDI sync is on. |
| Glide | Glide Rate | 5 | — | 0–127 | Portamento/glide time. |
| VCA | Output Level / MIDI Volume | 7 | 39 | 0–127 | Separate from physical master volume; affects output/headphone level. |
| LFO | VCF LFO Amount | 12 | 44 | 0–127 | Manual describes up to ±5 octaves equivalent cutoff modulation. |
| LFO | VCO LFO Amount | 13 | 45 | 0–127 | Manual describes up to ±1 octave pitch modulation. |
| Mixer | VCO1 Level | 15 | 47 | 0–127 | Around 2 o’clock and above can clip the filter. |
| Mixer | VCO2 Level | 16 | 48 | 0–127 | Around 2 o’clock and above can clip the filter. |
| Oscillator | VCO2 Frequency | 17 | 49 | 0–127; center ≈ unison | Coarse offset, about ±1 octave. |
| Oscillator | VCO2 Beat | 18 | 50 | 0–127; center ≈ no beat | Fine detune around VCO1. Note: LSB CC numbering overlaps in some charts; do not send LSB alone. |
| Filter | Cutoff | 19 | 51 | 0–127 | About 20 Hz–20 kHz. |
| Filter | Keyboard Tracking | 20 | 54 | 0–127 | Default about 32/50% tracking in manual. |
| Filter | Resonance | 21 | 53 | 0–127 | High values self-oscillate. |
| Filter EG | Filter EG Amount | 22 | 50 | 0–127 | Negative to positive amount around midpoint in practical use; manual describes positive/negative sweep behavior. |
| Filter EG | VCF Attack | 23 | 55 | 0–127 | About 1 ms–30 s. |
| Filter EG | VCF Decay/Release | 24 | 56 | 0–127 | Decay or release depending mode/switch. |
| Filter EG | VCF Sustain | 25 | 57 | 0–127 | Sustain level. |
| Mixer | External Input Level | 27 | 59 | 0–127 | Unity around midpoint; up to ~200%; no panel knob except shift/editor. |
| Amp EG | VCA Attack | 28 | 60 | 0–127 | About 1 ms–30 s. |
| Amp EG | VCA Decay/Release | 29 | 61 | 0–127 | Decay or release depending mode/switch. |
| Amp EG | VCA Sustain | 30 | 62 | 0–127 | Sustain level. |
| Glide | Glide Switch | 65 | — | 0–63 off, 64–127 on | Panel Glide switch. |
| Oscillator | VCO1 Wave | 70 | — | 0–63 saw, 64–127 square | Panel VCO1 Wave switch. |
| Oscillator | VCO2 Wave | 71 | — | 0–63 saw, 64–127 square | Panel VCO2 Wave switch. |
| Envelopes | Release Switch | 72 | — | 0–63 off, 64–127 on | Enables release segment; later mode can edit independent release. |
| Envelopes | EG Trigger Mode | 73 | — | 0–42 Legato On; 43–85 Legato Off; 86–127 EG Reset | Editor/manual under-the-hood parameter. |
| Oscillator | Hard Sync | 80 | — | 0–63 off, 64–127 on | v2.2 feature. |
| Oscillator | Note Sync | 81 | — | 0–63 off, 64–127 on | Synchronizes oscillator starts for consistent attacks. |
| LFO | LFO Key Trigger | 82 | — | 0–63 off, 64–127 on | v2.2.1 fixed a MIDI-sync/no-clock edge case. |
| Glide | Legato Glide | 83 | — | 0–63 always, 64–127 legato only | Use overlapped notes for slides. |
| LFO | LFO Shape / Mod Source | 85 | — | 0–21 triangle; 22–43 square; 44–65 saw/ramp down; 66–87 saw up; 88–109 sample & hold; 110–127 Filter EG | v2.2 feature. |
| LFO | LFO Clock Divide | 86 | — | Musical division table below | Active when MIDI Sync is on. |
| LFO | LFO MIDI Sync | 87 | — | 0–63 internal; 64–127 MIDI clock | Enable for DAW/hardware clock sync. |
| Filter | Filter Velocity Sensitivity | 89 | — | 0–127 | Default around 64. |
| VCA | VCA Velocity Sensitivity | 90 | — | 0–127 | Default around 64. |
| Keyboard | Key Priority | 91 | — | 0–42 low; 43–85 high; 86–127 last | Default last in MIDI.guide/Editor info. |
| Glide | Glide Type | 92 | — | 0–42 LCR; 43–85 LCT; 86–127 EXP | Linear constant rate, linear constant time, exponential. |
| Pitch Bend | Bend Up Range | 107 | — | 0–15 off; 16–31 2 st; 32–47 3 st; 48–63 4 st; 64–79 5 st; 80–95 7 st; 96–111 12 st; 112–127 24 st | Separate up range. |
| Pitch Bend | Bend Down Range | 108 | — | Same ranges as Bend Up | Separate down range. |
| LFO | VCO2 Mod Only | 112 | — | 0–63 off, 64–127 on | v2.2 feature; use with Hard Sync. |
| Control | All Sounds Off | 120 | — | Any value | Panic-style control. |
| Control | Local Control Off/On | 122 | — | 0 off, 127 on in manual-style implementation | Disconnects panel from engine while still transmitting MIDI; setting is remembered. |
| Control | All Notes Off | 123 | — | Any value | Panic-style control. |

## 3.3 LFO clock-divider values

This table follows the official manual’s CC86 division table and MIDI.guide’s CSV mapping ([Minitaur User Manual](https://cdn.inmusicbrands.com/Moog/Minitaur/Minitaur_Manual.pdf); [MIDI.guide raw CSV](https://raw.githubusercontent.com/pencilresearch/midi/main/Moog/Minitaur.csv)).

| CC86 value range | Division |
|---:|---|
| 0–6 | 4 whole notes |
| 7–12 | 3 whole notes |
| 13–18 | 2 whole notes |
| 19–24 | Whole + half |
| 25–30 | Whole note |
| 31–36 | Dotted half |
| 37–42 | Whole-note triplet |
| 43–48 | Half note |
| 49–54 | Dotted quarter triplet / dotted-triplet region as listed in manual-style chart |
| 55–60 | Half-note triplet |
| 61–67 | Quarter note |
| 68–73 | Dotted eighth |
| 74–79 | Quarter-note triplet |
| 80–85 | Eighth note |
| 86–91 | Dotted sixteenth |
| 92–97 | Eighth-note triplet |
| 98–103 | Sixteenth note |
| 104–109 | Sixteenth-note triplet |
| 110–115 | Thirty-second note |
| 116–121 | Thirty-second-note triplet |
| 122–127 | Sixty-fourth-note triplet |

## 3.4 RPN, SysEx, global settings, and utility commands

**RPN:** Firmware 2.2 release notes add **RPN 2 Coarse Tuning**, spanning -64 to +63 semitones ([Gearspace v2.2 release notes](https://gearspace.com/board/electronic-music-instruments-and-electronic-music-production/1165752-now-available-minitaur-firmware-v2-2-amp-minitaur-editor-librarian-v3-2-a.html)). This is the documented high-level tuning protocol addition I found; I did not find a public NRPN chart.

**SysEx current-state dump:** A Moog forum thread documents that sending `F0 04 08 1B 00 00 F7` to firmware 1.0.7 causes Minitaur to output the current patch as MIDI CC messages, with caveats about switch values in older firmware ([Moog forum Minitaur dump thread](https://forum.moogmusic.com/t/minitaur-dump/11696)). Treat this as a community/legacy utility, not a replacement for the Editor’s supported preset functions.

**SysEx restore/reset:** The official troubleshooting article describes a global reset by sending `Minitaur_Factory_Restore.syx`, `reset_Pitch_CV_Calibration.syx`, and `all_presets_100_v2.syx` using SysEx Librarian on macOS or Bome SendSX on Windows; it also describes slower transfer speed as a fix if the transfer fails ([Moog/inMusic troubleshooting](https://support.inmusicstore.com/en/support/solutions/articles/69000840566-moog-minitaur-general-troubleshooting)).

**Pot calibration SysEx:** The official troubleshooting page gives a supported low/high/center pot calibration procedure using downloaded SysEx files (`Minitaur_Pot_Calibration_Low.syx`, `Minitaur_Pot_Calibration_High.syx`, and `Minitaur_Pot_Calibration_Center.syx`) ([Moog/inMusic troubleshooting](https://support.inmusicstore.com/en/support/solutions/articles/69000840566-moog-minitaur-general-troubleshooting)). A Moog forum thread documents raw older commands—`F0 04 08 14 00 00 F7`, `F0 04 08 14 01 00 F7`, and `F0 04 08 15 00 00 F7`—but the official support file procedure is safer for normal users ([Moog forum VCO2 calibration discussion](https://forum.moogmusic.com/t/minitaur-vco-2/13036)).

**Firmware reload:** Official support says to enter bootloader by holding both oscillator wave buttons while powering on, press Release so only the Release LED remains on, send `Minitaur_Firmware_Erase.syx`, then send the firmware file named in that article; the same article currently names `Minitaur_Firmware_v2_2_2.syx` ([Moog/inMusic troubleshooting](https://support.inmusicstore.com/en/support/solutions/articles/69000840566-moog-minitaur-general-troubleshooting)). Because this conflicts with the downloads page’s listed firmware versions, verify with Moog support before overwriting a working 2.2.2 unit.

**Custom tuning scales:** The v2.1 release notes describe custom tuning scales as a firmware addition, and the Editor Manual covers global tuning-related setup ([Moog forum v2.1 release](https://forum.moogmusic.com/t/minitaur-v3-0-editor-and-v2-1-firmware-released/14671); [Editor Manual](https://files.kraftmusic.com/media/ownersmanual/Moog_Minitaur_Editor_Users_Manual.pdf)). The Minitaur supports MIDI Tuning Standard-style workflows in the v2.x era according to the v2.1 feature documentation cited by Moog-community release material ([Moog forum v2.1 release](https://forum.moogmusic.com/t/minitaur-v3-0-editor-and-v2-1-firmware-released/14671)).

## 3.5 MIDI/CC power-user tricks

**Smooth filter automation:** Use 14-bit Cutoff CC19+LSB51, Resonance CC21+LSB53, envelope times, oscillator frequency, and mixer levels where your DAW or sequencer supports 14-bit MIDI; the manual explicitly says knob parameters can receive 14-bit CC while switches are 7-bit only ([Minitaur User Manual](https://cdn.inmusicbrands.com/Moog/Minitaur/Minitaur_Manual.pdf)).

**DAW feedback-safe setup:** Use Local Control Off when the front panel should send MIDI into a DAW and the DAW should echo/record/automate back to the synth; the manual identifies this use case for CC122 ([Minitaur User Manual](https://cdn.inmusicbrands.com/Moog/Minitaur/Minitaur_Manual.pdf)).

**Ableton sync setup:** Moog’s Ableton sync support page says to enable sync for the Minitaur MIDI ports in Ableton preferences and turn MIDI Sync on in the Editor plugin ([Moog Ableton sync support](https://support.inmusicstore.com/en/support/solutions/articles/69000840567-moog-minitaur-sirin-how-can-i-get-minitaur-sirin-to-sync-to-ableton-)). The separate Ableton connection support article also warns about monitoring/feedback and recommends distinct MIDI channels when using multiple instruments ([Moog Ableton connection support](https://support.inmusicstore.com/en/support/solutions/articles/69000840569-moog-minitaur-sirin-connecting-the-minitaur-sirin-to-ableton)).

**Program Change with Editor GUI follow:** Moog’s support article says to use the VST/AU Instrument Editor on a MIDI track, turn Echo MIDI on, and send Program Changes from clips on the same track via the Minitaur MIDI port if you want the Editor GUI to follow program changes ([Moog program-change support](https://support.inmusicstore.com/en/support/solutions/articles/69000840785-moog-minitaur-how-do-i-make-the-editor-gui-follow-program-changes-sent-to-minitaur-)).

**Hardware sequencer automation:** Elektronauts users discuss sequencing Minitaur with Digitakt MIDI CCs and Program Changes; this is a good real-world pattern because Digitakt-style parameter locks map well to Minitaur’s CC-heavy implementation ([Elektronauts Digitakt/Minitaur thread](https://www.elektronauts.com/t/controlling-the-minitaur-with-midi-cc-from-digitakt/100949)).

**CC implementation remapping:** A Moog forum thread on editing Minitaur’s CC implementation indicates that normal CC assignments are not user-reassignable in firmware 2.x, apart from using controllers/translators or unofficial SysEx workarounds ([Moog forum CC implementation thread](https://forum.moogmusic.com/t/can-you-edit-minitaurs-cc-implementation/20788)). Use a MIDI translator, controller mapping layer, or DAW device rack if your hardware sends fixed CCs.

**CV-to-MIDI control:** v2.2 and Editor docs let Pitch CV, Volume CV, and Gate CV be remapped and converted to MIDI, but v2.2 explicitly warns that only 0 to +5V is accepted for CV-to-MIDI, not negative voltage or more than +5V ([v2.2 Addendum](https://cdn.inmusicbrands.com/Moog/Minitaur/Minitaurv2.2_Addendum.pdf); [Editor Manual](https://files.kraftmusic.com/media/ownersmanual/Moog_Minitaur_Editor_Users_Manual.pdf)).

**Polychain versus layering:** Polychain assigns monophonic voices across multiple Moog synths; the Editor Manual says up to 16 synths can be chained and warns not to set a unit’s voice number higher than the maximum number of voices, or it may not play ([Editor Manual](https://files.kraftmusic.com/media/ownersmanual/Moog_Minitaur_Editor_Users_Manual.pdf)). For stacked bass layering, deliberately send the same MIDI to multiple units instead of using polychain voice assignment.

---

# 4. Sound-design techniques that exploit the analog architecture

## 4.1 General calibration for the recipes

The exact values below use **0–127 MIDI/Editor values** where possible. Analog synth tolerances, calibration, gain staging, speaker/headphone response, and firmware/editor versions will change results. The recipes are intended as precise starting points, not immutable factory presets.

Before dialing patches, let the Minitaur warm up for at least **15 minutes** and keep it in the manual’s recommended operating range; the official manual says tuning stability can suffer outside normal temperature conditions and warns against direct sunlight ([Minitaur User Manual](https://cdn.inmusicbrands.com/Moog/Minitaur/Minitaur_Manual.pdf)).

## 4.2 Recipe: clean Taurus-style fundamental sub

This patch exploits the Taurus-derived two-VCO architecture and the manual’s note that sawtooth waves produce the Taurus-family bass tone ([Minitaur User Manual](https://cdn.inmusicbrands.com/Moog/Minitaur/Minitaur_Manual.pdf)). It avoids excessive resonance because community sub-bass users report that the best deep subs are often made without cranking resonance ([Gearspace Minitaur sub-bass discussion](https://gearspace.com/board/electronic-music-instruments-and-electronic-music-production/772701-minitaur-sub-bass.html)).

| Parameter | Setting |
|---|---:|
| VCO1 Wave | Saw |
| VCO2 Wave | Saw |
| VCO2 Frequency | 64, unison |
| VCO2 Beat | 64 or 65 for tiny movement |
| Note Sync | On for consistent studio attack; Off for organic phase motion |
| VCO1 Level | 86 |
| VCO2 Level | 74 |
| External Input Level | 0 |
| Cutoff | 55 |
| Resonance | 6–10 |
| Filter EG Amount | 18–25 |
| Filter Keyboard Tracking | 32 |
| VCF Attack / Decay / Sustain | 0 / 38 / 40 |
| VCA Attack / Decay / Sustain | 0 / 70 / 110 |
| Release | Off for tight bass; On with VCA Release 35 for legato tails |
| Glide | Off, or On Rate 10–18 for Taurus slur |
| LFO | Off or triangle VCF Amount 3–5 |

**Tweak:** if the patch disappears on small speakers, raise cutoff to 65 or switch one oscillator to square. If it overwhelms a mix, reduce VCO2 Level before reducing overall volume; the interference between two low oscillators can create large peaks.

## 4.3 Recipe: 808-style self-oscillating filter kick/sub

The manual documents filter self-oscillation at high resonance, and MusicRadar notes that turning oscillators off and pushing resonance can produce sine/kick-style Minitaur sounds ([Minitaur User Manual](https://cdn.inmusicbrands.com/Moog/Minitaur/Minitaur_Manual.pdf); [MusicRadar Minitaur review](https://www.musicradar.com/reviews/tech/moog-minitaur-530857)). PresetPatch’s `Filter_EG_Style_Kick_2.syx` also describes a super-kick using the filter envelope and low octave range ([PresetPatch Minitaur patches](https://www.presetpatch.com/synth/moog-minitaur)).

| Parameter | Setting |
|---|---:|
| VCO1 Level | 0 |
| VCO2 Level | 0 |
| External Input Level | 0 |
| Cutoff | 34–42; tune by ear to kick fundamental |
| Resonance | 123–127 |
| Filter EG Amount | 80–100 |
| Filter Keyboard Tracking | 0 for one tuned kick; 64–127 if you want pitch tracking |
| VCF Attack / Decay / Sustain | 0 / 62–82 / 0 |
| VCA Attack / Decay / Sustain | 0 / 58–78 / 0 |
| EG Trigger Mode | EG Reset or Legato Off |
| Release | Off |
| Note range | C0–C1-style low notes; tune cutoff, not just MIDI pitch |

**Tweak:** for a longer 808 boom, reduce Filter EG Amount to 55–70, lower cutoff, and extend VCA Decay/Release. For a sharper click, add a tiny VCO1 square at Level 5–12.

## 4.4 Recipe: long 808-style oscillator bass

This version uses an oscillator as the main low sine-ish/rounded source rather than pure filter self-oscillation. It uses low cutoff and almost no resonance for a stable fundamental, consistent with the manual’s ladder-filter architecture and community sub-bass advice not to rely on high resonance for every sub patch ([Minitaur User Manual](https://cdn.inmusicbrands.com/Moog/Minitaur/Minitaur_Manual.pdf); [Gearspace Minitaur sub-bass discussion](https://gearspace.com/board/electronic-music-instruments-and-electronic-music-production/772701-minitaur-sub-bass.html)).

| Parameter | Setting |
|---|---:|
| VCO1 Wave | Square |
| VCO1 Level | 90–100 |
| VCO2 Level | 0 |
| Note Sync | On |
| Cutoff | 38–46 |
| Resonance | 0–8 |
| Filter EG Amount | 35–50 |
| Filter Keyboard Tracking | 0–32 |
| VCF Attack / Decay / Sustain | 0 / 40–55 / 0 |
| VCA Attack / Decay / Sustain | 0 / 95–115 / 0 |
| Release Mode | Independent if available |
| VCA Release | 70–95 if independent release is enabled |
| Velocity | VCA Velocity 0–20 for consistent programmed 808 hits |

**Tweak:** automate MIDI Volume CC7 rather than the physical master volume if you want DAW recall; the manual distinguishes output level CC from the physical master volume ([Minitaur User Manual](https://cdn.inmusicbrands.com/Moog/Minitaur/Minitaur_Manual.pdf)).

## 4.5 Recipe: reese bass / beating dual saw

This patch uses two saws, VCO2 fine detune, and optionally unsynced oscillator phase. The manual documents VCO2 beat/frequency, Note Sync, and the mixer/filter clipping behavior that gives this patch weight ([Minitaur User Manual](https://cdn.inmusicbrands.com/Moog/Minitaur/Minitaur_Manual.pdf)).

| Parameter | Setting |
|---|---:|
| VCO1 Wave | Saw |
| VCO2 Wave | Saw |
| VCO2 Frequency | 64 |
| VCO2 Beat | 74 for slow beating; 84 for wider movement; 44 for opposite-direction detune |
| Note Sync | Off for phase motion; On for controlled attacks |
| VCO1 Level | 96 |
| VCO2 Level | 96 |
| Cutoff | 70–82 |
| Resonance | 8–18 |
| Filter EG Amount | 5–15 |
| Filter Keyboard Tracking | 32–60 |
| VCA Attack / Decay / Sustain | 0 / 80 / 127 |
| LFO Shape | Triangle |
| LFO Rate | 6–12 unsynced or 1/2-note synced |
| VCO LFO Amount | 2–5 |
| VCF LFO Amount | 5–12 |

**Tweak:** for a dirtier reese, raise both VCO levels beyond 110 so the mixer hits the filter harder; for a purer sub/reese, keep both under 100 and use external saturation later.

## 4.6 Recipe: 303-ish acid bass

A Minitaur is not a TB-303, but community users report that a single Moog saw or pulse, resonance just before self-oscillation, envelope movement, and proper glide can be convincingly “303-ish” when sequenced ([Gearspace Moog vs TB-303 discussion](https://gearspace.com/board/electronic-music-instruments-and-electronic-music-production/1356265-moog-vs-tb-303-a.html)). A Moog forum user also demonstrated Minitaur tracking x0xb0x/TB-style pitch slides well in a 303-slide context ([Moog forum x0xb0x/Minitaur slide discussion](https://forum.moogmusic.com/t/controlling-little-phatty-stage-ii-with-tb-303/12927)).

| Parameter | Setting |
|---|---:|
| VCO1 Wave | Saw for classic acid; Square for rounder acid |
| VCO1 Level | 90–105 |
| VCO2 Level | 0 or 25 for thickness |
| Cutoff | 42–58 |
| Resonance | 92–110, just below uncontrolled self-oscillation |
| Filter EG Amount | 88–112 |
| Filter Keyboard Tracking | 20–40 |
| Filter Velocity | 90–115 for accent behavior |
| VCF Attack / Decay / Sustain | 0 / 34–52 / 0 |
| VCA Attack / Decay / Sustain | 0 / 45–65 / 120–127 |
| Glide | On |
| Glide Rate | 20–32 |
| Glide Type | EXP |
| Legato Glide | On |
| Key Priority | Last |
| Sequence method | Overlap notes for slides; use higher velocity for accents |

**Tweak:** use only one oscillator for the most 303-like clarity. Add VCO2 only if you want Moog weight more than strict acid accuracy.

## 4.7 Recipe: hard-sync growl / pseudo-FM metallic bass

Firmware 2.2 added hard sync and VCO2-only modulation, and the Editor Manual says hard sync adds overtones and that VCO2-only modulation is ideal with hard sync ([v2.2 Addendum](https://cdn.inmusicbrands.com/Moog/Minitaur/Minitaurv2.2_Addendum.pdf); [Editor Manual](https://files.kraftmusic.com/media/ownersmanual/Moog_Minitaur_Editor_Users_Manual.pdf)). This is the Minitaur’s most underused aggressive sound-design zone.

| Parameter | Setting |
|---|---:|
| VCO1 Wave | Saw |
| VCO2 Wave | Square or Saw |
| Hard Sync | On |
| VCO2 Mod Only | On |
| VCO2 Frequency | 88–110 |
| VCO2 Beat | 64 |
| VCO1 Level | 75–90 |
| VCO2 Level | 95–115 |
| Cutoff | 62–78 |
| Resonance | 18–32 |
| Filter EG Amount | 30–50 |
| LFO Shape | Filter EG for envelope sweep, or Triangle for wobble |
| LFO Key Trigger | On |
| VCO LFO Amount | 50–85 |
| VCF LFO Amount | 10–20 |
| VCF Attack / Decay / Sustain | 0 / 42–60 / 0 |
| VCA Attack / Decay / Sustain | 0 / 60 / 127 |

**Automation move:** record a 14-bit automation sweep of VCO2 Frequency from 64 to 120 while hard sync and VCO2 Mod Only are on. The pitch center remains anchored while harmonics tear upward.

## 4.8 Recipe: S&H rhythmic hard-sync bass

This recipe combines v2.2 S&H modulation with hard sync. PresetPatch’s `SH_Rhythm_Bass.syx` is described as using hard sync and sample-and-hold on the second oscillator, validating the technique as a known Minitaur patch concept ([PresetPatch Minitaur patches](https://www.presetpatch.com/synth/moog-minitaur)).

| Parameter | Setting |
|---|---:|
| Start from | Hard-sync growl recipe above |
| LFO Shape | Sample & Hold |
| LFO MIDI Sync | On |
| LFO Clock Divide | 61–67 for quarter notes, 80–85 for eighth notes, 98–103 for sixteenth notes |
| VCO LFO Amount | 35–55 |
| VCF LFO Amount | 8–20 |
| LFO Key Trigger | On for repeatable rhythmic hits; Off for continuous random movement |
| VCO2 Mod Only | On |
| Cutoff | 55–75 |
| Resonance | 15–35 |

**Tweak:** use DAW automation to switch LFO Shape between S&H and Filter EG for fills; CC85 ranges are listed in the MIDI chart.

## 4.9 Recipe: percussive bass pluck

This patch uses fast envelopes, Note Sync, filter envelope snap, and moderate velocity sensitivity. The manual documents fast envelope ranges, filter velocity sensitivity, VCA velocity sensitivity, Note Sync, and the ladder filter response used here ([Minitaur User Manual](https://cdn.inmusicbrands.com/Moog/Minitaur/Minitaur_Manual.pdf)).

| Parameter | Setting |
|---|---:|
| VCO1 Wave | Square |
| VCO2 Wave | Saw |
| VCO2 Frequency | 32–45 for sub-octave feel, or 64 for unison |
| VCO2 Beat | 64 |
| Note Sync | On |
| VCO1 Level | 70 |
| VCO2 Level | 86 |
| Cutoff | 36–50 |
| Resonance | 28–42 |
| Filter EG Amount | 85–110 |
| Filter Velocity | 60–90 |
| VCF Attack / Decay / Sustain | 0 / 22–34 / 0 |
| VCA Attack / Decay / Sustain | 0 / 26–40 / 0 |
| EG Trigger Mode | Legato Off or EG Reset |
| Release | Off |

**Tweak:** for slap-bass style, set VCO1 to saw, VCO2 to square, raise cutoff to 60, and set VCA Velocity to 70–100.

## 4.10 Recipe: driven ladder growl without MultiDrive

The manual says the VCO mixer levels begin clipping the filter around 2 o’clock, and this is the official drive path available on Minitaur ([Minitaur User Manual](https://cdn.inmusicbrands.com/Moog/Minitaur/Minitaur_Manual.pdf)). Community discussions about Minitaur versus Sub-series synths distinguish this from Sub-series MultiDrive and suggest feedback/pedals only as external workarounds ([Elektronauts Minitaur drive/feedback thread](https://www.elektronauts.com/t/moog-minitaur-drive-fb-mod/70861); [Reddit Sub37 vs Minitaur thread](https://www.reddit.com/r/synthesizers/comments/5xu6b1/is_the_moog_sub_37_worth_it_when_i_already_have_a/)).

| Parameter | Setting |
|---|---:|
| VCO1 Wave | Saw |
| VCO2 Wave | Square |
| VCO2 Frequency | 64 |
| VCO2 Beat | 68–76 |
| VCO1 Level | 112–127 |
| VCO2 Level | 105–127 |
| Cutoff | 58–72 |
| Resonance | 18–32 |
| Filter EG Amount | 40–65 |
| Filter Keyboard Tracking | 32–60 |
| VCF Attack / Decay / Sustain | 0 / 38–55 / 20 |
| VCA Attack / Decay / Sustain | 0 / 70 / 127 |
| Optional external feedback | Headphone out into EXT IN at very low monitoring level; EXT IN Level 15–45; monitor carefully |

**Warning:** external feedback can get loud and unstable quickly. Start with physical master volume low, External Input Level low, and a limiter downstream.

## 4.11 Recipe: external audio filter/VCA processor

The manual says the external audio input is routed into the mixer and filter, but the synth must receive a MIDI Note or +5V Gate to open the VCA; Moog’s support article gives the latch-gate shortcut for continuous drone/external-audio processing ([Minitaur User Manual](https://cdn.inmusicbrands.com/Moog/Minitaur/Minitaur_Manual.pdf); [Moog latch-gate support](https://support.inmusicstore.com/en/support/solutions/articles/69000840568-moog-minitaur-sirin-how-do-i-latch-the-gate-on-a-minitaur-or-sirin-)).

| Parameter | Setting |
|---|---:|
| VCO1 Level | 0 |
| VCO2 Level | 0 |
| External Input Level | 64 for unity; 90–110 for more drive |
| Gate | Latch Gate on, sustained MIDI note, or +5V Gate |
| VCA Attack / Sustain | 0 / 127 for static processing |
| Cutoff | 40–90 depending source |
| Resonance | 0–70; higher for obvious filter tone |
| Filter EG Amount | 0 for static filter; 40–100 if triggering rhythmic filter sweeps |
| LFO MIDI Sync | On for tempo-locked filter movement |
| VCF LFO Amount | 10–50 |

**Tweak:** use the Gate CV remap or external sequencer gate to rhythmically chop the external input, then automate cutoff/resonance with 14-bit CC.

## 4.12 Recipe: lead/SFX despite bass-range limits

The Minitaur is intentionally bass-range limited, but v2.x Top Octave Wrap, pitch-bend range, hard sync, and Filter EG modulation make it usable for leads, sirens, and effects. MusicRadar noted early on that self-oscillation and resonance tricks can create R2D2-like bleeps, while Matrixsynth discussed the practical range limitation and transposition workarounds before later firmware features addressed some of that behavior ([MusicRadar Minitaur review](https://www.musicradar.com/reviews/tech/moog-minitaur-530857); [Matrixsynth Minitaur review](https://www.matrixsynth.com/2012/10/exclusive-moog-minitaur-review-all-bass.html); [v2.2 Addendum](https://cdn.inmusicbrands.com/Moog/Minitaur/Minitaurv2.2_Addendum.pdf)).

| Parameter | Setting |
|---|---:|
| Top Octave Wrap | On |
| VCO1 Wave | Square |
| VCO2 Wave | Saw |
| Hard Sync | On for sync lead; Off for Moog whistle |
| VCO2 Frequency | 90–120 |
| VCO2 Mod Only | On if Hard Sync is on |
| Cutoff | 75–110 |
| Resonance | 40–95 |
| Filter Keyboard Tracking | 80–127 |
| LFO Shape | Saw Up, Saw Down, or Filter EG |
| LFO Rate | 20–50 unsynced, or 1/8–1/16 synced |
| Pitch Bend Range | 12 or 24 semitones for SFX |
| VCA Sustain | 127 for lead; 0 for blips |

**Tweak:** if notes behave unexpectedly above the top range, confirm the Top Octave Wrap setting and MIDI Note Transpose global in the Editor.

---

# 5. Every preset bank / patch resource available

The resources below are the legitimate patch/preset resources found during this research pass. Avoid pirated reposts of commercial banks; use the official vendor or community page when possible.

| Resource | Free/paid | What it contains | Notes / caveats | Source |
|---|---|---|---|---|
| Official Moog factory restore bank | Free/support | Restore files include `all_presets_100_v2.syx` in the support reset procedure. | Use official support instructions; this is a reset/repair path, not a sound-design bank page. | [Moog/inMusic troubleshooting](https://support.inmusicstore.com/en/support/solutions/articles/69000840566-moog-minitaur-general-troubleshooting) |
| Moog “Minitaur v2.2 Video Presets” | Free/official download listing | Official v2.2-era video preset resource listed on Moog downloads. | The downloads page currently requires interacting with Moog’s download UI. | [Moog downloads page](https://www.moogmusic.com/downloads/?product=Minitaur) |
| PresetPatch Minitaur library | Free community patches plus links to commercial banks | PresetPatch lists 53 free Minitaur patches, including `303ish.syx`, `Filter_EG_Style_Kick_2.syx`, `SH_Rhythm_Bass.syx`, `AM_Dread_Bass.syx`, sync/S&H patches, drum-like patches, and firmware/editor uploads. | Good for individual `.syx` experiments. Use Moog official sources for firmware even if mirrored by users. | [PresetPatch Minitaur page](https://www.presetpatch.com/synth/moog-minitaur) |
| UP TORO by UltimatePreset | Paid | 48 Minitaur bass presets; Complete version adds 48 MIDI files and 48 rendered loops at 125 BPM. | Product page states firmware **v2.2.1** and Editor **v3.3.3** requirements. | [UltimatePreset UP TORO](https://www.ultimatepreset.com/product/up-toro-moog-minitaur-bass-presets/) |
| UltimatePreset Analog Bass / related Minitaur banks | Paid | PresetPatch links to an UltimatePreset “Analog Bass” bank with 64 custom patches for electronic genres. | Verify compatibility/version on the vendor page before buying. | [PresetPatch Minitaur page](https://www.presetpatch.com/synth/moog-minitaur) |
| Arty Party Funky Basses | Paid | PresetPatch links to a 35-patch funky bass bank. | Vendor details should be checked from the linked product page before purchase. | [PresetPatch Minitaur page](https://www.presetpatch.com/synth/moog-minitaur) |
| Robust American Patches Volume I | Paid | 60 original patches including basses, drums/percussion, leads, brass, strings, oscillator sync, and effects; supplied as a bank `.syx` and individual patch files. | Product page says it was created with the official Minitaur Editor/Librarian and can be loaded with the editor or SysEx tools. | [Robust American Patches Volume I](https://www.robustamericanpatches.com/products/volume-i-for-the-moog-minitaur) |
| Anton Anru / LFO Store “Analog Tones” | Paid | 100 presets for Minitaur/Sirin: 30 basses, 30 leads, 30 plucks, and 10 chords. | Designed for Minitaur and Sirin; remember Minitaur range limitations versus Sirin. | [LFO Store Analog Tones](https://lfo.store/shop/hardware-synths/moog-minitaursirin/moog-minitaursirin-analog-tones-100-presets-by-anton-anru/) |
| Anton Anru Sellfy mirror | Paid | Same Anton Anru Minitaur/Sirin Analog Tones concept sold through Sellfy. | Use either official storefront; avoid third-party reposts. | [Anton Anru Sellfy Analog Tones](https://antonanru.sellfy.store/p/minitaur-analog-tones/) |
| Electra One Minitaur preset/control surface | Free/community controller preset | Electra One forum preset includes patch select/save plus deeper control pages such as LFO, EG Mod Matrix, and Resonance Compensation in the author’s mapping. | Community preset states firmware **2.2.2** must be installed for the preset to work; that requirement conflicts with Moog’s public download visibility. | [Electra One Minitaur preset thread](https://forum.electra.one/t/preset-moog-minitaur-v3-patch-select-save-lfo-eg-mod-matrix-reso-compensation/1716); [Electra One preset page](https://app.electra.one/preset/rjwedht303La4a2lonm4) |
| Renoise Guru definition | Free/community tool definition | Community Renoise Guru mapping for Minitaur hidden parameters. | Useful for Renoise users; forum notes quirks around MIDI-clock LFO behavior and host transport. | [Renoise Guru thread](https://forum.renoise.com/t/new-tool-2-8-guru/35934?page=21) |
| Sound Quest Midi Quest Minitaur editor/librarian | Paid/commercial ecosystem | Midi Quest supports Minitaur as an editor/librarian with DAW plug-in formats and SysEx data types. | Alternative to Moog’s editor/librarian for large studio librarian workflows. | [Sound Quest Minitaur page](https://squest.com/Products/MidiQuest13/Instruments/MoogMinitaur/index.html) |

---

# 6. The editor & integration ecosystem

## 6.1 Official Minitaur Editor/Librarian

The official Editor/Librarian can load/save presets, access under-the-hood parameters, automate parameters from a DAW, and update/support firmware workflows; the manual explicitly says the Editor can be used as standalone software or plug-in and can access features beyond the front panel ([Minitaur User Manual](https://cdn.inmusicbrands.com/Moog/Minitaur/Minitaur_Manual.pdf); [Editor Manual](https://files.kraftmusic.com/media/ownersmanual/Moog_Minitaur_Editor_Users_Manual.pdf)). The current Moog downloads page lists Editor PC **v3.3.0** and Editor Mac **v3.3.3** ([Moog downloads page](https://www.moogmusic.com/downloads/?product=Minitaur)).

The Editor provides three major layouts: **Panel**, **Under The Hood**, and **Extended**. Panel mirrors front-panel behavior; Under The Hood exposes software/MIDI-only parameters; Extended combines both and exposes individual release-stage controls ([Editor Manual](https://files.kraftmusic.com/media/ownersmanual/Moog_Minitaur_Editor_Users_Manual.pdf)).

Preset management features include bank import/export, category tagging, search, GET/SEND/AUTO SEND, drag-and-drop hardware preset slot management, individual SysEx patch sharing, and visual edited-state indicators ([Editor Manual](https://files.kraftmusic.com/media/ownersmanual/Moog_Minitaur_Editor_Users_Manual.pdf)). In practical use, **GET** pulls the current hardware state into the editor, **SEND** pushes the editor state to the synth, and **AUTO SEND** makes editor edits immediately affect the hardware.

The Editor Settings page shows firmware version, MIDI input/output selection, CV mapping, CV calibration, note calibration, global settings, SysEx ID, MIDI In/Out channels, Program Change send/receive, triplets enable, MIDI note transpose, MIDI CC filter, 14-bit MIDI, Echo DIN USB, and Echo MIDI ([Editor Manual](https://files.kraftmusic.com/media/ownersmanual/Moog_Minitaur_Editor_Users_Manual.pdf)).

## 6.2 DAW integration

The Editor Manual says the editor can run as an effect or virtual instrument plug-in, with DAW automation, CC, and SysEx embedded and recalled from a DAW project ([Editor Manual](https://files.kraftmusic.com/media/ownersmanual/Moog_Minitaur_Editor_Users_Manual.pdf)). On Windows, the manual and support article warn that the DAW and editor cannot both access the same USB MIDI ports unless the Minitaur USB driver is installed, and official support says that driver path requires firmware v2.2.0 or later ([Editor Manual](https://files.kraftmusic.com/media/ownersmanual/Moog_Minitaur_Editor_Users_Manual.pdf); [Moog/inMusic troubleshooting](https://support.inmusicstore.com/en/support/solutions/articles/69000840566-moog-minitaur-general-troubleshooting)).

Moog’s Ableton connection article gives separate workflows for direct MIDI/audio routing and plugin/editor routing, and it warns about monitoring feedback by keeping audio-track monitor settings under control ([Moog Ableton connection support](https://support.inmusicstore.com/en/support/solutions/articles/69000840569-moog-minitaur-sirin-connecting-the-minitaur-sirin-to-ableton)). Moog’s Program Change GUI-follow article adds that Echo MIDI should be on when using the plugin/editor to follow Program Changes from clips ([Moog program-change support](https://support.inmusicstore.com/en/support/solutions/articles/69000840785-moog-minitaur-how-do-i-make-the-editor-gui-follow-program-changes-sent-to-minitaur-)).

## 6.3 Firmware updating and recovery

Official support recommends SysEx Librarian for macOS and Bome SendSX for Windows, with reduced transfer speed if SysEx transfer fails ([Moog/inMusic troubleshooting](https://support.inmusicstore.com/en/support/solutions/articles/69000840566-moog-minitaur-general-troubleshooting)). The same support page includes global reset, pot calibration, and bootloader firmware-reload procedures, including the v2.2.2 filename conflict documented above ([Moog/inMusic troubleshooting](https://support.inmusicstore.com/en/support/solutions/articles/69000840566-moog-minitaur-general-troubleshooting)).

The official “Hardware Disconnected” support page says to reselect MIDI ports, verify versions in the lower-right Editor area, connect directly rather than through a hub, and on Windows remove/reinstall driver files if necessary; it specifically mentions driver versions **3.30** and **2.23** plus Editor **3.2** in that recovery context ([Moog hardware-disconnected support](https://support.inmusicstore.com/en/support/solutions/articles/69000840787-moog-minitaur-why-does-the-editor-say-hardware-disconnected-and-or-cannot-be-controlled-by-hardwa)).

For legacy Windows XP/Vista, Moog support says Editor v3.2 was not officially supported/tested on XP/Vista but should work if the proper 32-bit driver is installed; this is mainly relevant to old studio computers ([Moog XP/Vista support](https://support.inmusicstore.com/en/support/solutions/articles/69000840853-moog-minitaur-does-the-minitaur-editor-v3-2-work-in-xp-and-vista-)).

## 6.4 CV/Gate integration

The base manual documents Pitch, Filter, Volume, and Gate CV jacks, with 0 to +5V ranges and +5V Gate behavior; Pitch and Filter CVs are approximately 1V/oct, and Gate can trigger the envelopes while pitch/modulation still come from MIDI ([Minitaur User Manual](https://cdn.inmusicbrands.com/Moog/Minitaur/Minitaur_Manual.pdf)). Later firmware/editor remaps Pitch CV, Volume CV, and Gate CV to other destinations and supports CV-to-MIDI conversion limited to 0 to +5V ([v2.2 Addendum](https://cdn.inmusicbrands.com/Moog/Minitaur/Minitaurv2.2_Addendum.pdf); [Editor Manual](https://files.kraftmusic.com/media/ownersmanual/Moog_Minitaur_Editor_Users_Manual.pdf)).

The Editor Manual includes Pitch CV calibration at +1V and +4V plus note calibration from the lowest to highest notes ([Editor Manual](https://files.kraftmusic.com/media/ownersmanual/Moog_Minitaur_Editor_Users_Manual.pdf)). If CV pitch feels wrong, run note calibration first after warm-up, then CV calibration using stable reference voltages.

## 6.5 Third-party integrations

**Sound Quest Midi Quest** provides an alternate editor/librarian and DAW plug-in ecosystem for Minitaur, including AU/VST/AAX-style formats and SysEx preset/bank/global management ([Sound Quest Minitaur page](https://squest.com/Products/MidiQuest13/Instruments/MoogMinitaur/index.html)). This is useful for studios that standardize on Midi Quest across many synths.

**Electra One** has a community Minitaur v3 controller preset with patch select/save and deep parameter pages; the preset author states firmware 2.2.2 is required, which should be treated carefully because public Moog release notes for 2.2.2 were not found ([Electra One Minitaur thread](https://forum.electra.one/t/preset-moog-minitaur-v3-patch-select-save-lfo-eg-mod-matrix-reso-compensation/1716)).

**Renoise Guru** has a community Minitaur device definition for hidden parameters, useful if Renoise is the center of the studio ([Renoise Guru thread](https://forum.renoise.com/t/new-tool-2-8-guru/35934?page=21)).

**Elektron/Digitakt-style sequencing** maps well to the Minitaur because Minitaur exposes so many sound controls as CC; Elektronauts users discuss direct MIDI CC/program-change control in that context ([Elektronauts Digitakt/Minitaur thread](https://www.elektronauts.com/t/controlling-the-minitaur-with-midi-cc-from-digitakt/100949)).

---

# 7. Community resources & forums

## 7.1 Official and semi-official starting points

- [Moog Minitaur downloads page](https://www.moogmusic.com/downloads/?product=Minitaur) — official manuals, firmware, editor installers, USB driver, SysEx command resources, and v2.2 presets/downloads.
- [Minitaur User Manual PDF](https://cdn.inmusicbrands.com/Moog/Minitaur/Minitaur_Manual.pdf) — base architecture, panel, signal path, MIDI implementation, CV/audio I/O, tuning/care.
- [Minitaur v2.2 Addendum PDF](https://cdn.inmusicbrands.com/Moog/Minitaur/Minitaurv2.2_Addendum.pdf) — shifted panel controls, v2.2 modulation/hard-sync/CV remap features.
- [Minitaur Editor User Manual PDF](https://files.kraftmusic.com/media/ownersmanual/Moog_Minitaur_Editor_Users_Manual.pdf) — editor layouts, under-the-hood parameters, global settings, DAW integration, CV calibration, preset management.
- [Moog/inMusic Minitaur troubleshooting](https://support.inmusicstore.com/en/support/solutions/articles/69000840566-moog-minitaur-general-troubleshooting) — official reset, pot calibration, firmware reload, driver/editor troubleshooting.
- [Moog Ableton sync support](https://support.inmusicstore.com/en/support/solutions/articles/69000840567-moog-minitaur-sirin-how-can-i-get-minitaur-sirin-to-sync-to-ableton-) — specific instructions for syncing Minitaur/Sirin LFO to Ableton MIDI clock.
- [Moog Ableton connection support](https://support.inmusicstore.com/en/support/solutions/articles/69000840569-moog-minitaur-sirin-connecting-the-minitaur-sirin-to-ableton) — audio/MIDI routing and monitoring guidance.
- [Moog latch-gate support](https://support.inmusicstore.com/en/support/solutions/articles/69000840568-moog-minitaur-sirin-how-do-i-latch-the-gate-on-a-minitaur-or-sirin-) — official drone/external-audio gate-latch shortcut.
- [Moog Program Change GUI-follow support](https://support.inmusicstore.com/en/support/solutions/articles/69000840785-moog-minitaur-how-do-i-make-the-editor-gui-follow-program-changes-sent-to-minitaur-) — plugin/editor setup for Program Change recall.
- [Moog Hardware Disconnected support](https://support.inmusicstore.com/en/support/solutions/articles/69000840787-moog-minitaur-why-does-the-editor-say-hardware-disconnected-and-or-cannot-be-controlled-by-hardwa) — troubleshooting editor connection problems.

## 7.2 Firmware and release-note trail

- [Moog forum: Minitaur v3.0 Editor and v2.1 firmware released](https://forum.moogmusic.com/t/minitaur-v3-0-editor-and-v2-1-firmware-released/14671) — primary community announcement for v2.1 and Editor 3.0 features.
- [Sweetwater: Moog Minitaur Editor v3 / Firmware v2.1](https://www.sweetwater.com/insync/moog-minitaur-editor-v3-firmware-v2-1/) — retailer news summary of the v2.1 release.
- [Moog forum: Editor update and presets discussion Jan 2014](https://forum.moogmusic.com/t/minitaur-editor-update-and-presets-discussion-jan2014/14193) — pre-v2.1/2.0.32 development notes and Local Control discussion.
- [Moog forum: Editor 3.2.0b4 and firmware 2.1.10](https://forum.moogmusic.com/t/mtr-minitaur-editor-3-2-0b4-and-firmware-2-1-10-available/18477) — beta notes for Editor 3.2, VST3, driver, and firmware workflow.
- [Moog forum: Minitaur Editor 3.2.0RC17 / Firmware 2.2.0RC11](https://forum.moogmusic.com/t/mtre-minitaur-editor-release-is-3-2-0rc17-2-2-0rc11/19083) — release-candidate breadcrumb for v2.2.
- [Gearspace: Now available Minitaur firmware v2.2 and Editor/Librarian v3.2](https://gearspace.com/board/electronic-music-instruments-and-electronic-music-production/1165752-now-available-minitaur-firmware-v2-2-amp-minitaur-editor-librarian-v3-2-a.html) — most complete public v2.2 release-note text found.
- [Synthtopia: Moog updates Minitaur firmware/editor](https://www.synthtopia.com/content/2017/07/22/moog-updates-minitaur-firmware-editor/) — news summary of v2.2 LFO, hard-sync, editor, and preset improvements.
- [MusicRadar: Minitaur gets multiple LFO waveforms](https://www.musicradar.com/news/moog-minitaur-gets-multiple-lfo-waveforms-in-latest-firmware-update) — news summary of v2.2 features.
- [Moog forum: Firmware v2.2.1 released](https://forum.moogmusic.com/t/mtr-minitaur-firmware-v2-2-1-released/19443) — v2.2.1 bug-fix details.
- [Reddit: Minitaur firmware 2.2.2](https://www.reddit.com/r/synthesizers/comments/1kvo3b6/minitaur_firmware_222/) — community reports about 2.2.2 units and missing release notes; not an official release note.

## 7.3 Sound-design and usage discussions

- [PresetPatch Minitaur patch library](https://www.presetpatch.com/synth/moog-minitaur) — free patches, many with descriptive patch names that reveal Minitaur techniques such as filter-envelope kick, S&H hard sync, 303-ish bass, jungle dread bass, and interval lead patches.
- [Gearspace: Minitaur sub bass](https://gearspace.com/board/electronic-music-instruments-and-electronic-music-production/772701-minitaur-sub-bass.html) — community sub-bass discussion, including the practical warning that great sub does not always require high resonance.
- [Gearspace: Moog vs TB-303](https://gearspace.com/board/electronic-music-instruments-and-electronic-music-production/1356265-moog-vs-tb-303-a.html) — community advice for 303-ish Moog patching: single oscillator, controlled drive, resonance, envelope, and glide.
- [Moog forum: x0xb0x/TB-style controller into Minitaur](https://forum.moogmusic.com/t/controlling-little-phatty-stage-ii-with-tb-303/12927) — example of Minitaur tracking 303-style slides from x0xb0x-style gear.
- [MusicRadar Minitaur review](https://www.musicradar.com/reviews/tech/moog-minitaur-530857) — early review noting filter self-oscillation, sine/kick/SFX possibilities, and range limitations.
- [Matrixsynth Minitaur review](https://www.matrixsynth.com/2012/10/exclusive-moog-minitaur-review-all-bass.html) — detailed early review focused on the bass range limitation and transposition workarounds.
- [Gearspace: Thoughts on Moog Minitaur](https://gearspace.com/board/electronic-music-instruments-and-electronic-music-production/1057092-thoughts-moog-minitaur-5.html) — long community thread with Rev2, external input, preset, and range discussions.
- [Reddit: Minitaur hidden alternate panel functions cheat sheet](https://www.reddit.com/r/synthesizers/comments/r69fd8/moog_minitaur_cheat_sheet_for_alternate_panel/) — community reminder that many v2.x functions are hidden behind alternate panel operations.
- [Reddit: Minitaur firmware/editor reliability discussion](https://www.reddit.com/r/synthesizers/comments/6jegvk/how_bad_is_the_moog_minitaur_firmware_and/) — mixed anecdotal reports about editor/firmware reliability, useful for understanding why some users prefer standalone operation or hardware sequencer workflows.
- [Brossman Gizmos: How do I use my Moog Minitaur?](https://brossmangizmos.wordpress.com/2017/08/19/how-do-i-use-my-moog-minitaur/) — community resource page with links to manuals, forums, SysEx threads, and learning resources.

## 7.4 Calibration, tuning stability, and known quirks/workarounds

**Warm-up and environment:** the manual says to allow 15 minutes of warm-up and keep the synth within the specified temperature range, because out-of-range temperature can reduce tuning stability ([Minitaur User Manual](https://cdn.inmusicbrands.com/Moog/Minitaur/Minitaur_Manual.pdf)).

**Note calibration:** the Editor Manual includes note calibration from lowest to highest note and Pitch CV calibration at +1V and +4V; use these after warm-up if pitch tracking is off ([Editor Manual](https://files.kraftmusic.com/media/ownersmanual/Moog_Minitaur_Editor_Users_Manual.pdf)).

**Pot calibration:** official support provides pot calibration SysEx files and a three-step low/high/center procedure; the center step specifically sets Fine Tune, VCO2 Frequency, and Filter EG Amount to center while other knobs remain minimum in the support procedure ([Moog/inMusic troubleshooting](https://support.inmusicstore.com/en/support/solutions/articles/69000840566-moog-minitaur-general-troubleshooting)).

**External audio “no sound” confusion:** if external audio seems broken, open the gate with a MIDI note, +5V Gate, or the latch-gate panel shortcut; the manual and support article both state the VCA/gate requirement ([Minitaur User Manual](https://cdn.inmusicbrands.com/Moog/Minitaur/Minitaur_Manual.pdf); [Moog latch-gate support](https://support.inmusicstore.com/en/support/solutions/articles/69000840568-moog-minitaur-sirin-how-do-i-latch-the-gate-on-a-minitaur-or-sirin-)).

**Windows editor/driver conflicts:** the Editor Manual and official support note that Windows may require the Minitaur USB driver for simultaneous DAW/editor access; the Hardware Disconnected support article gives a reinstall path and advises connecting directly instead of using a hub ([Editor Manual](https://files.kraftmusic.com/media/ownersmanual/Moog_Minitaur_Editor_Users_Manual.pdf); [Moog hardware-disconnected support](https://support.inmusicstore.com/en/support/solutions/articles/69000840787-moog-minitaur-why-does-the-editor-say-hardware-disconnected-and-or-cannot-be-controlled-by-hardwa)).

**LFO sync problems:** official Ableton guidance requires enabling MIDI Sync in Ableton and the Editor/plugin; older forum reports of LFO sync confusion often involve whether the controller/host is actually sending MIDI clock, not just tempo data or tap-tempo state ([Moog Ableton sync support](https://support.inmusicstore.com/en/support/solutions/articles/69000840567-moog-minitaur-sirin-how-can-i-get-minitaur-sirin-to-sync-to-ableton-); [Moog forum LFO sync discussion](https://forum.moogmusic.com/t/lfo-does-not-sync-to-tempo/12322)).

**Program Change only recalls stored slots:** Moog forum discussion around Rev2 says Program Change works only for valid programs and that presets must be loaded into internal memory first ([Moog forum Rev 2 thread](https://forum.moogmusic.com/t/minitaur-rev-2/12132)). If Program Changes appear to do nothing, confirm the target slot contains a preset and Program Change receive is enabled in globals.

**Preset save can surprise live performers:** old firmware-discussion threads report possible interaction between shifted preset saving and panel switch states, which is one reason to verify patch-save behavior on your firmware before using panel-save live ([Moog forum firmware-request thread](https://forum.moogmusic.com/t/minitaur-firmware-update-soon-your-requests-here-please/12819?page=17)). For critical live sets, save from the Editor and test recall.

---

# Annotated sources

## Official manuals, downloads, and support

1. [Moog Minitaur User Manual PDF](https://cdn.inmusicbrands.com/Moog/Minitaur/Minitaur_Manual.pdf) — Base panel, signal path, analog architecture, MIDI CC implementation, CV/audio I/O, tuning and care.
2. [Moog Minitaur v2.2 Addendum PDF](https://cdn.inmusicbrands.com/Moog/Minitaur/Minitaurv2.2_Addendum.pdf) — Shift-panel features, hard sync, VCO2-only modulation, new LFO sources, CV remapping, preset navigation/saving.
3. [Moog Minitaur Editor User Manual PDF](https://files.kraftmusic.com/media/ownersmanual/Moog_Minitaur_Editor_Users_Manual.pdf) — Official Editor/Librarian, layouts, under-the-hood parameters, presets, global settings, CV calibration, DAW integration.
4. [Moog Minitaur downloads page](https://www.moogmusic.com/downloads/?product=Minitaur) — Current official hub for firmware, editor installers, driver, manuals, SysEx files, and v2.2 preset downloads.
5. [Moog/inMusic Minitaur general troubleshooting](https://support.inmusicstore.com/en/support/solutions/articles/69000840566-moog-minitaur-general-troubleshooting) — Official reset, pot calibration, firmware reload, SysEx tool recommendations, Windows driver/editor notes.
6. [Moog Ableton MIDI sync support](https://support.inmusicstore.com/en/support/solutions/articles/69000840567-moog-minitaur-sirin-how-can-i-get-minitaur-sirin-to-sync-to-ableton-) — Official Ableton LFO/MIDI-clock sync setup.
7. [Moog latch-gate support](https://support.inmusicstore.com/en/support/solutions/articles/69000840568-moog-minitaur-sirin-how-do-i-latch-the-gate-on-a-minitaur-or-sirin-) — Official drone/gate-latch method for Minitaur/Sirin.
8. [Moog Ableton connection support](https://support.inmusicstore.com/en/support/solutions/articles/69000840569-moog-minitaur-sirin-connecting-the-minitaur-sirin-to-ableton) — Official Ableton MIDI/audio/editor integration guidance.
9. [Moog Program Change GUI-follow support](https://support.inmusicstore.com/en/support/solutions/articles/69000840785-moog-minitaur-how-do-i-make-the-editor-gui-follow-program-changes-sent-to-minitaur-) — Official setup for plugin GUI following hardware Program Changes.
10. [Moog Hardware Disconnected support](https://support.inmusicstore.com/en/support/solutions/articles/69000840787-moog-minitaur-why-does-the-editor-say-hardware-disconnected-and-or-cannot-be-controlled-by-hardwa) — Official editor connection and Windows driver troubleshooting.
11. [Moog Editor download links support page](https://moogmusic-help.freshdesk.com/en/support/solutions/articles/69000840601-moog-editor-download-links) — Alternate official support page for editor downloads.
12. [Moog XP/Vista Editor support page](https://support.inmusicstore.com/en/support/solutions/articles/69000840853-moog-minitaur-does-the-minitaur-editor-v3-2-work-in-xp-and-vista-) — Legacy Windows compatibility note.

## Firmware and release-note trail

13. [Moog forum: Minitaur dump](https://forum.moogmusic.com/t/minitaur-dump/11696) — Community-documented SysEx current-state dump command and early firmware behavior.
14. [Moog forum: Minitaur Rev 2](https://forum.moogmusic.com/t/minitaur-rev-2/12132) — Rev2-era internal preset and Program Change discussion with Moog staff comments.
15. [Gearspace: Thoughts on Moog Minitaur, page 5](https://gearspace.com/board/electronic-music-instruments-and-electronic-music-production/1057092-thoughts-moog-minitaur-5.html) — Community Rev2/addendum discussion, external input and range commentary.
16. [Moog forum: Editor update and presets discussion Jan 2014](https://forum.moogmusic.com/t/minitaur-editor-update-and-presets-discussion-jan2014/14193) — Pre-v2.1 firmware/editor discussion and Local Control documentation context.
17. [Moog forum: Minitaur v3.0 Editor and firmware v2.1 released](https://forum.moogmusic.com/t/minitaur-v3-0-editor-and-v2-1-firmware-released/14671) — v2.1 and Editor 3.0 feature announcement.
18. [Sweetwater: Moog Minitaur Editor v3 / Firmware v2.1](https://www.sweetwater.com/insync/moog-minitaur-editor-v3-firmware-v2-1/) — v2.1 release summary.
19. [Moog forum: Editor 3.2.0b4 and firmware 2.1.10](https://forum.moogmusic.com/t/mtr-minitaur-editor-3-2-0b4-and-firmware-2-1-10-available/18477) — Beta release notes for Editor 3.2/FW 2.1.10 and Windows driver flow.
20. [Moog forum: Editor 3.2.0RC17 / Firmware 2.2.0RC11](https://forum.moogmusic.com/t/mtre-minitaur-editor-release-is-3-2-0rc17-2-2-0rc11/19083) — v2.2 release-candidate breadcrumb.
21. [Gearspace: Minitaur firmware v2.2 and Editor/Librarian v3.2](https://gearspace.com/board/electronic-music-instruments-and-electronic-music-production/1165752-now-available-minitaur-firmware-v2-2-amp-minitaur-editor-librarian-v3-2-a.html) — Public v2.2 release-note content including RPN 2, LFO modes, hard sync, VCO2-only, shifted controls, and bug fix.
22. [Synthtopia: Moog updates Minitaur firmware/editor](https://www.synthtopia.com/content/2017/07/22/moog-updates-minitaur-firmware-editor/) — News summary of v2.2 features and Editor v3.2.
23. [MusicRadar: Minitaur gets multiple LFO waveforms](https://www.musicradar.com/news/moog-minitaur-gets-multiple-lfo-waveforms-in-latest-firmware-update) — News summary of v2.2 features.
24. [Moog forum: Firmware v2.2.1 released](https://forum.moogmusic.com/t/mtr-minitaur-firmware-v2-2-1-released/19443) — v2.2.1 bug-fix notes.
25. [Reddit: Minitaur firmware 2.2.2](https://www.reddit.com/r/synthesizers/comments/1kvo3b6/minitaur_firmware_222/) — Community reports about units/editor showing 2.2.2 and missing public release notes.

## MIDI, control, editor, and integration references

26. [MIDI.guide: Moog Minitaur](https://midi.guide/d/moog/minitaur/) — Third-party CC reference page.
27. [MIDI.guide raw Minitaur CSV](https://raw.githubusercontent.com/pencilresearch/midi/main/Moog/Minitaur.csv) — Raw CC mapping used to cross-check CC numbers/value ranges; NRPN fields are blank.
28. [Moog forum: Can you edit Minitaur’s CC implementation?](https://forum.moogmusic.com/t/can-you-edit-minitaurs-cc-implementation/20788) — Community discussion indicating fixed CC implementation and translation-layer workarounds.
29. [Moog forum: Minitaur VCO2 calibration](https://forum.moogmusic.com/t/minitaur-vco-2/13036) — Legacy/community pot-calibration SysEx command discussion; official support procedure is preferred.
30. [Sound Quest Midi Quest Minitaur page](https://squest.com/Products/MidiQuest13/Instruments/MoogMinitaur/index.html) — Third-party editor/librarian support for Minitaur.
31. [Electra One Minitaur v3 preset thread](https://forum.electra.one/t/preset-moog-minitaur-v3-patch-select-save-lfo-eg-mod-matrix-reso-compensation/1716) — Community hardware controller preset with patch select/save and deep pages.
32. [Electra One preset page](https://app.electra.one/preset/rjwedht303La4a2lonm4) — Preset referenced by the Electra One forum thread.
33. [Renoise Guru thread](https://forum.renoise.com/t/new-tool-2-8-guru/35934?page=21) — Renoise community device/control definition discussion.
34. [Elektronauts: Controlling Minitaur with Digitakt MIDI CC](https://www.elektronauts.com/t/controlling-the-minitaur-with-midi-cc-from-digitakt/100949) — Hardware-sequencer CC/Program Change workflow discussion.

## Patch banks and sound resources

35. [PresetPatch Minitaur library](https://www.presetpatch.com/synth/moog-minitaur) — Free user patches and links to commercial banks.
36. [UltimatePreset UP TORO](https://www.ultimatepreset.com/product/up-toro-moog-minitaur-bass-presets/) — Commercial 48-preset bass bank with optional MIDI/loop content; version requirements stated on product page.
37. [Robust American Patches Volume I](https://www.robustamericanpatches.com/products/volume-i-for-the-moog-minitaur) — Commercial 60-patch Minitaur bank with `.syx` bank and individual files.
38. [LFO Store: Minitaur/Sirin Analog Tones by Anton Anru](https://lfo.store/shop/hardware-synths/moog-minitaursirin/moog-minitaursirin-analog-tones-100-presets-by-anton-anru/) — Commercial 100-preset Minitaur/Sirin bank.
39. [Anton Anru Sellfy: Minitaur Analog Tones](https://antonanru.sellfy.store/p/minitaur-analog-tones/) — Alternate official storefront for the Anton Anru bank.

## Community technique and review sources

40. [MusicRadar Minitaur review](https://www.musicradar.com/reviews/tech/moog-minitaur-530857) — Review noting self-oscillation, kick/SFX possibilities, and bass-range design.
41. [Matrixsynth Minitaur review](https://www.matrixsynth.com/2012/10/exclusive-moog-minitaur-review-all-bass.html) — Detailed review discussing range limitation and transposition/layering workarounds.
42. [Resident Advisor Minitaur review](https://ra.co/reviews/11499) — Early review discussing no-preset era, CV inputs, and bass-focused architecture.
43. [Gearspace: Minitaur sub bass](https://gearspace.com/board/electronic-music-instruments-and-electronic-music-production/772701-minitaur-sub-bass.html) — Community sub-bass patching discussion.
44. [Gearspace: Best hardware synth for sub bass](https://gearspace.com/board/electronic-music-instruments-and-electronic-music-production/924272-best-hardware-synth-sub-bass.html) — Community recommendations and downstream sub-processing discussion.
45. [Gearspace: Moog vs TB-303](https://gearspace.com/board/electronic-music-instruments-and-electronic-music-production/1356265-moog-vs-tb-303-a.html) — Acid/303-style Moog patching discussion.
46. [Moog forum: Controlling Moog with TB-303/x0xb0x-style gear](https://forum.moogmusic.com/t/controlling-little-phatty-stage-ii-with-tb-303/12927) — Community evidence of Minitaur tracking 303-style slides.
47. [Elektronauts: Minitaur drive/feedback modification discussion](https://www.elektronauts.com/t/moog-minitaur-drive-fb-mod/70861) — Community discussion around feedback/drive alternatives to Sub-series MultiDrive.
48. [Reddit: Sub37 versus Minitaur discussion](https://www.reddit.com/r/synthesizers/comments/5xu6b1/is_the_moog_sub_37_worth_it_when_i_already_have_a/) — Community comparison noting Minitaur lacks Sub37-style features such as MultiDrive.
49. [Reddit: Minitaur alternate panel cheat sheet](https://www.reddit.com/r/synthesizers/comments/r69fd8/moog_minitaur_cheat_sheet_for_alternate_panel/) — Community cheat-sheet thread for hidden panel functions.
50. [Reddit: Minitaur firmware/editor reliability discussion](https://www.reddit.com/r/synthesizers/comments/6jegvk/how_bad_is_the_moog_minitaur_firmware_and/) — Mixed user experiences with firmware/editor reliability.
51. [Moog forum: VCA envelope release time thread](https://forum.moogmusic.com/t/minitaur-vca-envelope-release-time-is-very-short/13623) — Historical discussion that illustrates why independent release mode matters.
52. [Moog forum: Firmware update requests thread](https://forum.moogmusic.com/t/minitaur-firmware-update-soon-your-requests-here-please/12819?page=17) — Historical firmware-request discussion and panel-save/knob-mode observations.
53. [Moog forum: LFO does not sync to tempo](https://forum.moogmusic.com/t/lfo-does-not-sync-to-tempo/12322) — Older LFO MIDI-clock confusion; useful when diagnosing tap-tempo versus actual MIDI clock.
54. [Brossman Gizmos: How do I use my Moog Minitaur?](https://brossmangizmos.wordpress.com/2017/08/19/how-do-i-use-my-moog-minitaur/) — Community link roundup for Minitaur manuals, forums, SysEx, and learning resources.

---

## Final practical checklist

1. Update/check firmware from the Editor Settings page before assuming a feature exists; **2.2.1** is the latest release-note-backed firmware found, while **2.2.2** is support-referenced but not release-note-documented.
2. Use the Editor’s Under The Hood and Extended layouts immediately; many of the best Minitaur features are invisible on the printed panel.
3. Use 14-bit CC for smooth automation of cutoff, VCO2 frequency, levels, resonance, and envelope times.
4. For sub bass, start with low resonance, controlled mixer levels, and Note Sync on; for movement, detune VCO2 or turn Note Sync off.
5. For aggressive modern bass, use Hard Sync + VCO2 Mod Only + Filter EG/S&H modulation.
6. For external audio, open the gate with a MIDI note, +5V Gate, or latch-gate/drone mode.
7. For DAW work, configure Local Control, Echo MIDI, MIDI Sync, and Windows multi-client driver behavior before blaming the synth.
8. For live use, test Program Change, preset saving, and hidden shift functions on your exact firmware before relying on them onstage.
