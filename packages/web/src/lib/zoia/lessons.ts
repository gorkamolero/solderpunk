import type { SeedLesson } from '@/lib/shared-types'

// Tutorials authored from the ZOIA research corpus (research/zoia/claude.md + chatgpt.md).
// Zone ids referenced here match lib/zoia/zones.ts (groups: grid, screen, enc, util, foot, io;
// internals prefixed by their group, e.g. util-save, util-favorite, foot-bypass, enc-knob, io-1).
// ZOIA's real controls are the grid + footswitches + encoder, so most steps focus group ids.
// Every fact and setting here traces to the two research docs; nothing is added from general knowledge.

export const seedLessons: SeedLesson[] = [
  {
    title: 'Modular basics: your first patch',
    section_id: 'grid',
    tags: 'tutorial,beginner,basics,modular',
    content: {
      type: 'tutorial',
      steps: [
        {
          title: "What 'modular' means",
          body: "Most pedals and synths have fixed knobs that do fixed jobs. A **modular** is different: you build the instrument yourself out of building blocks (**modules** — an oscillator, a filter, a delay, an LFO…) and **wire them together** however you like. That's why the ZOIA can be a synth, a multi-effect, or a whole pedalboard — it's whatever you patch.\n\nIt sounds intimidating; it isn't, once you've made one connection."
        },
        {
          title: 'The grid is your canvas',
          focus: 'grid',
          body: "Each page is an [[grid|8×5 grid of buttons]]. A module takes up some buttons, and **each button is one part of it** — an input, an output, or a parameter — colour-coded by what it does. You place modules on the grid and connect their inputs/outputs."
        },
        {
          title: 'Build something in 3 moves',
          focus: 'enc',
          body: "Use the [[enc|encoder]] to add modules and make connections. A complete first patch: add an **Audio Input** → an **SV Filter** → an **Audio Output**, connect them in order, and patch an **LFO** to the filter's cutoff. You just built an auto-wah from scratch. That's the whole loop — add, connect, listen — and everything else is just more modules."
        }
      ]
    }
  },
  {
    title: 'Meet the ZOIA',
    section_id: 'grid',
    tags: 'tutorial,beginner,intro,modular,grid',
    content: {
      type: 'tutorial',
      steps: [
        {
          title: 'A modular synth in a pedal',
          body: "ZOIA is a grid-based modular environment in pedal form — Empress describes it as a *modular synthesizer*, *effects processor*, *MIDI controller*, and *virtual pedalboard* in one, with **over 90 modules** (the long-standing figure is \"80+\"). The [Euroburo](#) is its 34HP Eurorack/desktop twin running the **same firmware** since v2.20; the differences are physical I/O, not the patching model.\n\nYou build sound by placing modules onto pages and wiring them together. The single best learning path the docs recommend is **Manual → Module Index → Patchstorage deconstruction → community Tips & Tricks doc**."
        },
        {
          title: 'The grid is the canvas',
          focus: 'grid',
          body: "Each page is one full **8×5 [[grid|button grid]]** — **40 buttons**. Each module occupies one or more buttons, and each button is an **input, output, or parameter**, colored by signal type. A **patch** is the whole collection of pages, modules, connections, button values and page names in one internal slot.\n\nA patch holds up to **64 pages** (0–63), and you can store up to **64 patches** in internal memory. Connections can cross *pages* but **never cross patches**."
        },
        {
          title: 'The encoder and screen',
          focus: 'enc',
          body: "The [[enc|encoder]] is how you navigate and edit. Turn the [[enc-knob|knob]] to scroll modules/pages/values; **push-and-turn = fine**; **Shift + turn = super-fine** (the finest resolution there is — v2.40 reworked this feel). The [[screen|OLED]] shows the selected patch, module, parameter and value.\n\nYou make a connection by selecting a source block then a destination block (hold both buttons on the same page, or pick one, change pages, pick the other), then dial **connection strength** with the encoder. Click the encoder to toggle the readout — e.g. connection strength between **% and dB**, a Value between raw number and note name, LFO rate between Hz / seconds / BPM."
        },
        {
          title: 'Audio vs CV — two kinds of signal',
          focus: 'grid',
          body: "ZOIA has two signal worlds and they behave differently:\n\n• **Audio** flows output→input between modules; there is no manual bias on an audio input.\n• **CV (control)** uses a normalized **0→1** (or **−1→1**) range, and a CV input can be **biased even with no cable** plugged in — that manual offset is a real patch-design tool.\n\n**Analysis** modules bridge the two: Onset Detector, Env Follower and Pitch Detector convert audio *into* CV. ZOIA samples CV at **1/64 of 48 kHz = 750 Hz** (one CV sample every ~1.333 ms) — fast enough for modulation, not for audio-rate detail."
        },
        {
          title: 'It is mostly behaviors, not modules',
          focus: 'grid',
          body: "The biggest levers in ZOIA are **not modules at all** — they're behaviors most owners never discover: **connection strength** multiplies above 100% / divides below it, CV **sums at inputs** (add and subtract), a **Multiplier is a CV VCA**, `0.1 CV = 1 octave`, Performance Mode (Shift+Back), super-fine tuning, and the undo stack.\n\nMaster those and a handful of modules build patches that look impossible. The next tutorial covers the math directly."
        }
      ]
    }
  },
  {
    title: 'ZOIA math: the hidden language of CV',
    section_id: 'grid',
    tags: 'tutorial,cv,math,connection-strength,multiplier',
    content: {
      type: 'tutorial',
      steps: [
        {
          title: 'Connection strength = multiply / divide',
          focus: 'grid',
          body: "Every cable in ZOIA has a **strength**, and that strength is arithmetic, not just a volume fader:\n\n• **Below 100% divides** the source value.\n• **Above 100% multiplies** it.\n\nSo a CV at strength 50% is halved on arrival; at 200% it's doubled. This is the difference between \"turn it down\" and \"scale it.\" Click the [[enc|encoder]] to flip the readout between **% and dB** when you're judging gain on an audio cable instead."
        },
        {
          title: 'CV sums at inputs = add / subtract',
          focus: 'grid',
          body: "When **multiple CV cables land on the same input, ZOIA sums them.** Positive sources **add**; to **subtract**, make the source negative — either set a **Value** module to a negative number (its range can be −1→1) or pass a signal through **CV Invert**.\n\nThat's the whole trick behind offsets and centering: a Value at +0.3 summed onto a modulation input shifts everything up by 0.3; an inverted copy cancels an offset back out."
        },
        {
          title: 'Min / maxing modulation',
          focus: 'grid',
          body: "These two facts combine into precise modulation control:\n\n• **Bias the destination (or a Value) to set the modulation MINIMUM.**\n• **Set connection strength to define the RANGE / MAXIMUM.**\n\nWith a **−1→1 LFO** the bias becomes the **centerpoint** and the strength becomes the **spread** around it. This is how you dial a filter sweep that stays exactly between two cutoffs instead of slamming the rails."
        },
        {
          title: 'The Multiplier as a CV VCA',
          focus: 'grid',
          body: "Route a **CV source** and a **Value** module into a **Multiplier**, and the Value now acts as an adjustable **depth / connection-strength control** — one you can place anywhere, star, or modulate with an LFO/ADSR. It's a voltage-controlled amplifier for CV.\n\nTwo extensions from the docs:\n• Connect **one source to multiple inputs** of a Multiplier and you get **exponents** (Y × Y = Y²).\n• The Multiplier also *is* a logic **AND**; OR is just summing at a shared input; **NOT** is CV Invert plus a Value biased to 1 — you can build whole logic gates without the Logic Gate module."
        },
        {
          title: 'Pitch scaling: 0.1 CV = 1 octave',
          focus: 'grid',
          body: "Pitch in ZOIA follows one rule: **`0.1 CV = 1 octave`**. From that, a **5th ≈ .058** and a **4th ≈ .042**. To **drop** a pitch, pass it through **CV Invert**.\n\nThis is why a note CV from MIDI Notes In drives an Oscillator's frequency at 100%, and why a static Value offset can transpose an oscillator by a fixed interval. The Sample & Hold shortcut is worth knowing too: the **Random** module has a *\"new value only when triggered\"* option, giving you a sample-and-hold from random with fewer modules."
        }
      ]
    }
  },
  {
    title: 'Build a subtractive synth voice',
    section_id: 'grid',
    tags: 'tutorial,synth,subtractive,oscillator,filter,adsr',
    content: {
      type: 'tutorial',
      steps: [
        {
          title: 'The classic signal path',
          focus: 'grid',
          body: "This is the patch to build first — it teaches ZOIA's note-CV, oscillator, envelope, filter, VCA and output architecture in one go. The chain is:\n\n**MIDI Notes In → Oscillator → SV Filter → VCA → Audio Output**, with an **ADSR** opening the VCA, gated by the incoming note.\n\nDrop these modules onto the [[grid|grid]] one per cluster of buttons, leaving room for cables. Build it from memory once and you understand the whole instrument."
        },
        {
          title: 'Set up the modules',
          focus: 'grid',
          body: "Starting options from the research:\n\n• **MIDI Notes In:** channel 1, **1 voice**, expose note/gate/velocity/trigger, priority **newest**, greedy off.\n• **Oscillator:** **saw or square**, pitch from note CV, FM disabled for a first patch (enable duty-cycle only for PWM).\n• **ADSR:** **Attack 5 ms, Decay 150 ms, Sustain 0.65, Release 250 ms** as a general plucked/keyboard envelope (faster A/D and lower S for bass/pluck).\n• **SV Filter:** **low-pass output, cutoff ~0.25, resonance ~0.25–0.35**, \"instant\"/fast frequency behavior for tight envelope sweeps (added v2.30).\n• **VCA:** level bias 0, amplitude driven by the envelope."
        },
        {
          title: 'Wire it up',
          focus: 'grid',
          body: "Connections, with exact strengths from the docs:\n\n• MIDI Notes In **note → Oscillator frequency at 100%**.\n• MIDI Notes In **gate → ADSR gate at 100%**.\n• Oscillator **audio → SV Filter input at 0 dB**.\n• SV Filter **low-pass out → VCA input at 0 dB**.\n• ADSR **output → VCA level at 100%**.\n• VCA **output → [[io|Audio Output]] L/R at 0 dB or lower** (trim to avoid clipping).\n\nRemember: select source block, select destination block, dial strength on the [[enc-knob|encoder]]."
        },
        {
          title: 'Add motion and keyboard tracking',
          focus: 'grid',
          body: "Two optional cables turn a static tone into a playable voice:\n\n• **ADSR → SV Filter cutoff at 25–45%** for an envelope sweep on every note.\n• **MIDI note → SV Filter cutoff at 50–100%** for **keyboard tracking** — using note-CV connection strength to scale how much the cutoff follows pitch (smaller strength = less tracking, larger = more).\n\nThat second cable is the same `0.1 = octave` rule from the math tutorial, applied to a filter instead of an oscillator. Save with [[util-save|Save]] when it sings."
        }
      ]
    }
  },
  {
    title: 'Generative patch: "Space Race"',
    section_id: 'grid',
    tags: 'tutorial,generative,random,quantizer,lfo,sequencer',
    content: {
      type: 'tutorial',
      steps: [
        {
          title: 'Self-playing melody from random CV',
          focus: 'grid',
          body: "\"Space Race\" is a Patchstorage classic and the canonical ZOIA generative patch. The core is four modules:\n\n**Random CV → Quantizer (key of D) → Oscillator**, with a **square LFO clocking the Random** to issue a new note each pulse.\n\nThe Random throws out raw chaotic voltages; the **Quantizer** (its \"extended\" mode since v2.60 offers 40+ scales) snaps every value to the nearest note in D, so the result is always musical. The LFO decides *when* a new note happens."
        },
        {
          title: 'Clock the randomness',
          focus: 'grid',
          body: "Patch the **square LFO output → Random's trigger/clock input**. Each rising edge tells Random to grab a fresh value, which the Quantizer pitches and the Oscillator plays.\n\nClick the [[enc|encoder]] on the LFO to read its rate as **Hz / seconds / BPM** and slow it down — a *\"slow ass LFO\"* (the patch's own description) gives a lazy, drifting melody; faster gives a busy arpeggio. This is the Random module doing sample-and-hold duty: one value held until the next clock."
        },
        {
          title: 'Layer vibrato and alternating phrases',
          focus: 'grid',
          body: "Two more generative tricks from the original patch:\n\n• A **second, fast LFO → Oscillator frequency** adds **vibrato** — summed onto the pitch CV, so use a small connection strength so it sits *around* the note rather than swamping it (min/maxing modulation from the math tutorial).\n• Run **multiple Sequencers into an In Switch**, and cycle that switch with a **slow LFO**, so the patch alternates between pre-written phrases on its own.\n\nEverything is CV logic driving one audio oscillator — the whole point of ZOIA."
        },
        {
          title: 'Send it to space',
          focus: 'io',
          body: "Land the whole thing in a **Hall Reverb** before the [[io|Audio Output]] — that's what gives Space Race its drifting, cavernous tail.\n\nBecause Hall is one of the heavier effects, watch your CPU (next tutorial). If you need the headroom, the docs note **Reverb Lite** is the CPU-friendly substitute. Save the patch, enter Performance Mode (Shift+Back) so you don't disturb the generative state, and let it run."
        }
      ]
    }
  },
  {
    title: 'Performance: starring, MIDI & the Control Port',
    section_id: 'foot',
    tags: 'tutorial,performance,midi,starred,control-port,footswitches',
    content: {
      type: 'tutorial',
      steps: [
        {
          title: 'Star parameters for instant access',
          focus: 'util-favorite',
          body: "The **Starred Parameters** list is ZOIA's hidden performance layer. Press [[util-favorite|Star]] while a parameter or connection is selected to add it to the starred list; press [[util-favorite|Star]] with **nothing selected** to open the list for quick access.\n\nThis turns a sprawling multi-page patch into a tidy set of the controls that actually matter live — no hunting across pages mid-song."
        },
        {
          title: 'MIDI-learn a starred control',
          focus: 'util-favorite',
          body: "Press [[util-favorite|Star]] again on a starred item to assign **MIDI CC control**; the **\"learn\"** option listens for the next incoming CC and maps it automatically (turning left in the starred window reveals it). MIDI Learn has existed since v1.02.\n\n**Power move:** star a **Value** module *between* the controller and the destination instead of the parameter itself. The Value can then attenuate or invert the incoming CC, and can also drive a **MIDI CC Out** for feedback to a motorized controller — just set **MIDI Consume** to \"some\"/\"all\" so you don't create a feedback loop."
        },
        {
          title: 'Performance Mode locks the patch',
          focus: 'foot',
          body: "**Shift + Back** on the home screen enters **Performance Mode** — the **Back LED glows magenta**, and new connections/deletes are blocked so you can't wreck the patch by fat-fingering the grid while you play (added v1.13).\n\nBuild a front page with **UI Buttons, Pixels, Value modules and starred controls**, then drop into Performance Mode and treat it like a finished instrument. The [[foot-bypass|BYPASS]] and [[foot-select|SELECT]] / [[foot-scroll|SCROLL]] footswitches can also be reassigned inside a patch via the **Stompswitch** module — hold **Bypass + Scroll** (~1–2 s) to swap them between their normal duties and custom patch controls."
        },
        {
          title: 'MIDI ports and the Control Port',
          focus: 'io',
          body: "ZOIA's onboard 1/8\" MIDI is **TRS Type A** — *listen on TIP, send on RING* (same as Make Noise, Korg, Akai); 5-pin dongles are included. **Program Change recalls patches** starting at **patch 0**, so offset external PC lists that start at 1.\n\nThere are also device-level CCs on the configured channel: **CC 60** controls bypass (0 = bypass, 64 = toggle, 127 = engage), and **CC 61/62/63** emulate button press/release/rotary."
        },
        {
          title: 'Three jobs for one Control Port',
          focus: 'io',
          body: "The pedal's **¼\" TRS [[io|Control Port]]** is set in Config to one of: **MIDI**, an **expression pedal**, **CV (0–5V)**, or an **external switch**.\n\nFor expression, ZOIA expects **signal on TIP, 3.3V on RING, ground on SLEEVE** — a pedal wired with signal on the ring crams all its travel into the first ~10% (a wiring mismatch, not a calibration bug). If incoming CV/expression is jumpy, route it through a **Slew Limiter** first. Note: when the onboard MIDI ports are in use, the Control Port can only **send** MIDI out, not receive."
        }
      ]
    }
  },
  {
    title: 'CPU, module categories & the Euroburo',
    section_id: 'grid',
    tags: 'tutorial,cpu,dsp,modules,euroburo,advanced',
    content: {
      type: 'tutorial',
      steps: [
        {
          title: 'Five families of module',
          focus: 'grid',
          body: "Every ZOIA module falls into one of **five categories**, and knowing them tells you where to look:\n\n• **Interface** — Audio/MIDI/CV In & Out, Stompswitch, UI Button, Pixel, Pushbutton, Keyboard, Device Control.\n• **Analysis** — Onset Detector, Env Follower, Pitch Detector (audio → CV).\n• **Audio** — Oscillator, VCA, SV Filter, Multi-Filter, Delay Line, Granular, Looper, Sampler, and more.\n• **CV (Control)** — LFO, Sequencer, ADSR, Sample & Hold, Quantizer, Random, Multiplier, Logic Gate, etc.\n• **Effects** — Reverbs, delays, OD/Fuzz, Chorus, Phaser, Univibe, Reverse Delay…\n\nMany \"impossible\" patches are mostly **control modules driving a few audio modules** — the synth-voice and Space Race patches both prove it."
        },
        {
          title: 'Budget your CPU',
          focus: 'grid',
          body: "ZOIA has a fixed DSP budget, and you watch it on the **DSP Usage screen** in the Config menu (Shift + gear). It scrolls through the first 64 modules highlighting each — handy for *finding* an overlapping/hidden module too.\n\nThe rule of thumb from the docs: **keep live patches under ~70% CPU**. Savings tactics:\n• Use **Reverb Lite** instead of Plate/Hall.\n• Avoid **reverse/overdub on the Sampler** in performance-critical patches.\n• Prefer **SV Filter** over Multi-Filter when modulating in real time — SV is faster for coefficient changes, while a modulated Multi-Filter can spike CPU."
        },
        {
          title: 'Firmware changed the budget',
          focus: 'grid',
          body: "CPU headroom has grown over time, which matters when you load old patches:\n\n• **v2.00** cut CPU **~24%** on average across popular patches (and reworked the ADSR, added CV Mixer/attenuverter).\n• **v5.00** (Dec 10, 2024) improved overall CPU **~14%** and added **Reverse Delay** + **Univibe**.\n\nOne compatibility trap: **sequencer patches saved on firmware ≥4.20 won't load on earlier firmware** (the data footprint changed) — back up before updating, and note the firmware version when you share a sequencer patch."
        },
        {
          title: 'Pedal vs Euroburo',
          focus: 'io',
          body: "The **Euroburo** is the same instrument in **34HP Eurorack** form. Practical differences:\n\n• **No stompswitches** (the Stompswitch module was removed from its menu in v2.30); instead it adds **4 CV in + 4 CV out** (each switchable −5/+5V, 0/5V or 0/10V), **8 dedicated CV buttons**, **2 \"sticky\" pushbuttons**, stereo 3.5mm audio and a **headphone out**.\n• Its **CV inputs have clock filters** (Schmitt-trigger thresholds, engaged with Shift + pencil) to stop ADSRs false-triggering on noisy gates, plus **CV transpose A→C** for C-to-C gear.\n• A Euroburo patch opened on a pedal puts Euro-specific modules on a special **\"Euro Modules\" page** — you can connect and edit them but not move, copy or re-add them."
        },
        {
          title: 'Cards, firmware & SD hygiene',
          focus: 'io',
          body: "ZOIA has **no general-purpose USB** — firmware and patches move via the **microSD card**, which must be **FAT32** (not exFAT), single-partition. Pedal = **pins up**, Euroburo = **pins down**.\n\nWorkflow: back up via **Config → Patches to SD**, copy the `.bin` firmware to the card root, update (it can take a few minutes with a blank screen), then **delete the firmware file** so it doesn't re-flash every boot — or use **\"Hide Firmware?\"**. Patch files use a **three-digit numeric prefix** that sets the slot, so keep prefixes unique. And keep the card clean: hidden macOS/Spotlight files have been known to hang ZOIA on \"waveform updating.\""
        }
      ]
    }
  }
]
