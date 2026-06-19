import type { SeedLesson } from '@/lib/shared-types'

// Tutorials authored from the Hector research corpus (research/hector/claude.md + chatgpt.md).
// Zone ids referenced here match lib/hector/zones.ts. Valid ids: group ids screen / in / out / midi,
// the jacks in-1..in-6 / out-1..out-8 / midi-in / midi-out / midi-usb, and the on-screen module
// zones screen-chord / screen-seq / screen-mod / screen-delay / screen-filter / screen-lfo /
// screen-reverb / screen-mix. Modules without a dedicated zone (Macro Osc, Granular, Chaos
// Controller, NAM Amp, Loopler, mixers, etc.) are named in prose and focus the whole [[screen]].
// Hector exposes normalized 0–1 sliders with optional numeric entry, so the docs rarely publish
// exact ranges — none are invented here; thin/unverified areas are flagged as the research flags them.

export const seedLessons: SeedLesson[] = [
  {
    title: 'Modular basics: a rack on a screen',
    section_id: 'screen',
    tags: 'tutorial,beginner,basics,modular',
    content: {
      type: 'tutorial',
      steps: [
        {
          title: 'No cables, same idea',
          body: "A **modular** instrument is built from building blocks (modules) you wire together — normally with physical patch cables. Hector puts that whole idea **on a touchscreen**: you drop module blocks and draw the connections with your finger. Same power as a Eurorack rack, none of the cable spaghetti — and it's all reconfigurable in seconds."
        },
        {
          title: 'Drop modules, draw connections',
          focus: 'screen',
          body: "The [[screen|touchscreen]] is everything. Tap to add a module (a delay, filter, oscillator, reverb…), then connect one module's output to another's input. Signal flows along the wires you draw; control (CV) connections are shown in green. Any module can modulate any other — that flexibility is the point."
        },
        {
          title: 'Sound in, sound out — and start from a preset',
          focus: 'in',
          body: "Plug a guitar/synth/drum machine into the [[in|inputs]] and take the result from the [[out|outputs]] (all of them carry audio or CV). The easiest way in is to **load a preset** and tweak it — Hector ships with plenty, and there are hundreds more shared online. Once a preset makes sense, building your own is just the same add-and-connect loop. The deeper tutorials cover the CPU trick and the famous Mutable modules."
        }
      ]
    }
  },
  {
    title: 'Meet Hector',
    section_id: 'screen',
    tags: 'tutorial,beginner,intro,modular,presets',
    content: {
      type: 'tutorial',
      steps: [
        {
          title: 'One instrument in two bodies',
          body: "Hector is a 30 HP Eurorack touchscreen **virtual modular**. It runs the same firmware — **\"Beebo OS,\"** developed almost single-handedly by Loki Davison — as the Beebo pedal, with ~100 patchable **LV2 modules** under the hood. The two devices swap presets freely; Beebo even keeps footswitch modules purely for patch compatibility. So treat them as one platform: essentially all Beebo docs, tutorials and patches apply to Hector.\n\nUnder the surface it's an ARM Linux box — a fork of David Robillard's **Ingen** modular host, a QML/Qt + Python UI, and LV2 plugins for the DSP. That's why it feels like a real modular and not a fixed multi-effect."
        },
        {
          title: 'You patch it by touch',
          focus: 'screen',
          body: "The [[screen|touchscreen]] is the entire interface. Modules are blocks you place and wire: drop a [[screen-delay|Delay]], [[screen-filter|Filter]], [[screen-reverb|Reverb]], [[screen-seq|Sequencer]], [[screen-lfo|LFO]], [[screen-chord|Chord]], [[screen-mod|modulation source]] or [[screen-mix|Mixer]] and connect them.\n\nThe gestures: **hold a source** (e.g. an input) and **tap a destination** to connect (multi-touch). **Hold a module** to reveal copy / disconnect / delete. **Tap** to open its parameter view, **drag** to move it. Audio and control connections are colour-coded — **control (CV) signals are green**. Crucially, *any module can modulate any other* — that cross-control, not the individual effects, is the heart of the instrument. (Tip from owners: a fine-tipped ~5.5 mm capacitive stylus transforms the touchscreen.)"
        },
        {
          title: 'Everything is CV + audio, ±5V',
          focus: 'in',
          body: "Hector has **6 [[in|inputs]] and 8 [[out|outputs]]**, and every one is CV- *and* audio-capable. All I/O is **±5V** — including pitch — so to talk to 0–10V Eurorack you need a scaler (e.g. an Erica Pico MScale).\n\nThe DSP runs **32-bit float internally, 24-bit conversion, 48 kHz** on a **64-bit quad-core CPU** (remember \"48 kHz\" — it governs IRs and captures later). Any I/O pair doubles as an external **effects loop**: send [[out-3|out 3]] to a pedal and return to [[in-3|in 3]] — best on wet-only signals (delay/reverb tails) to dodge the device's fixed latency."
        },
        {
          title: 'MIDI, presets, and set lists',
          focus: 'midi',
          body: "[[midi|MIDI and USB]] live on the bottom panel. Hector's [[midi-in|MIDI in]] / [[midi-out|MIDI out]] are 3.5mm TRS **Type A**, opto-isolated with thru built in — no MIDI box needed. [[midi-usb|USB]] handles control plus firmware/content transfer.\n\nSave and load patches via the patch icon — since firmware 2.50 a preset exports as a **single file** (Patchstorage shares them as `.instr` Ingen graphs). Build a **set list** to fix the stepping order: that index is what **MIDI Program Change** recalls and what footswitch-pair stepping follows, so curate the set list first if you want deterministic live recall. Drive synth voices from a keyboard via the **Midi Note To Cv** / **Poly Note To Cv** modules."
        },
        {
          title: 'Quirks worth knowing on day one',
          body: "Hector is powerful but idiosyncratic, and the docs are genuinely thin — the manual lags the firmware and some modules (notably NAM Amp) aren't documented at all. Expect:\n\n• **Long boot** (30–40s) and a screen that can get sluggish with heavy patches.\n• **High fixed round-trip latency** — community-measured at ~15–18 ms (device-wide, not an official spec). Fine for ambient/wet/CV/synth duties; don't drop Hector mid-chain in a latency-critical guitar rig.\n• **Power quality matters a lot.** Hector draws +12V @ ~340 mA; instability and freezes usually trace to the supply first.\n• On-device docs beat the PDF: firmware 337 added **QR codes inside every module** that link to Poly's livestream videos."
        }
      ]
    }
  },
  {
    title: 'Parallelism: the master CPU skill',
    section_id: 'screen',
    tags: 'tutorial,cpu,performance,parallel,routing',
    content: {
      type: 'tutorial',
      steps: [
        {
          title: 'Branches, not a serial pedalboard',
          focus: 'screen',
          body: "This is the single most important performance lesson on Hector, and it's buried in §1.12 of the manual.\n\nThe CPU is **quad-core**, and it assigns **parallel chains to different cores**. The consequence is counter-intuitive: **four modules in parallel can cost about the same as one**, and roughly **a quarter of the cost of four in series**. So stop thinking like a pedalboard (one long chain) and think in **branches**: fan one input out to several parallel voices/effects, then recombine."
        },
        {
          title: 'The proof, from Loki himself',
          focus: 'screen',
          body: "On the ModWiggler mega-thread Loki Davison confirmed the headroom directly: *\"I can comfortably run 3× Rings + 3× Clouds + 1× Marbles with only 64% CPU used… if you see the patch with the 2 convolution reverbs at once it should use way more CPU than 3 Mutable modules.\"*\n\nA user-built generative example — a Euclidean sequencer + **4× Macro Osc** + **4× LFO** + a Quantizer + a Wet/Dry Stereo mixer — ran at only **~61% CPU**. The takeaway: instancing the Mutable ports several times in parallel is cheap; stacking convolution reverbs is what actually burns the budget."
        },
        {
          title: 'How to fan out and recombine',
          focus: 'screen-mix',
          body: "To recombine parallel branches, use a [[screen-mix|mixer]] module — **Matrix Mixer** (4-in / 3-out) or **Wet Dry Stereo**. Note there's no dedicated stereo *level* mixer (a long-standing community request); people use Wet Dry Stereo plus VCAs.\n\nWorked shapes from real patches:\n• **\"ThreeGrain\"** — three Granular (Clouds) instances in parallel on a stereo path = a lush granular delay/reverb hybrid.\n• **\"Delay Swarm\"** — six pan-modulated delay lines side by side.\n• **\"Delay VCA Swells\"** — four delays into LFO-controlled VCAs for polyrhythmic swells."
        },
        {
          title: 'Read the CPU meter',
          focus: 'screen',
          body: "The **CPU meter appears once usage passes 60%**. Treat 60–80% as your working ceiling.\n\nWhen the meter shows up or you cross ~80%:\n• **Re-route serial chains into parallel** (the move above).\n• **Replace CPU-hungry modules** — Granular Looping, multiple convolution reverbs, and the NAM Amp are the heavyweights — with lighter equivalents.\n• **Split work across I/O pairs / cores.**\n\nThe lesson is structural, not cosmetic: the same modules can fit or not fit depending purely on whether you wire them in parallel or in series."
        }
      ]
    }
  },
  {
    title: 'The Mutable Instruments ports',
    section_id: 'screen',
    tags: 'tutorial,mutable,plaits,clouds,rings,marbles',
    content: {
      type: 'tutorial',
      steps: [
        {
          title: 'A Eurorack-legend collection inside one module',
          focus: 'screen',
          body: "Hector's secret weapon is a suite of **Mutable Instruments ports** — many running the expanded \"Parasite\" firmware — that you can **instance multiple times** (and, per the parallelism lesson, cheaply). The headline four:\n\n• **Plaits → Macro Osc** (the synth voice)\n• **Clouds → Granular** (texture / granular)\n• **Rings → Multi Resonator** (resonator voice)\n• **Marbles → Chaos Controller** (random CV / generative brain)\n\nOne caveat from Loki: these aren't knob-for-knob clones — they're **re-UI'd** for the touchscreen, and labels can change per model. Learn the *Poly* UI, not just the original Mutable panel."
        },
        {
          title: 'Plaits → Macro Osc',
          focus: 'screen',
          body: "**Macro Osc** is the Plaits port: pick a synthesis **Model**, then shape it with the three macros **Harmonics / Timbre / Morph**, plus an internal LPG (**Color / Decay**) and a **V/oct** input. Firmware 3.7 added **per-model parameter names** so the macros relabel themselves to whatever the chosen model actually does.\n\nPitch caveat from the community: **CV pitch tracking into Macro Osc is finicky.** Always route external pitch CV through a **Pitch Cal In** module, and several users find **MIDI note input more reliable** than raw V/oct for in-tune results (one workaround: turn Macro Osc's Tone-tab Frequency slider fully down to get proper tracking range)."
        },
        {
          title: 'Clouds → Granular, and the Clouds family',
          focus: 'screen',
          body: "**Granular** is the Clouds (Parasite) port — Blend, Density, Size, Texture, Pitch, Position, Spread, Reverb, Reverse, Feedback, **Freeze**. Clouds actually spawns a whole family on Hector:\n\n• **Granular Looping** — a micro-loop variant (Tape Length / Pitch Windows / Diffusion / Filter); lush but **CPU-hungry**.\n• **Pitch Verb** — the Clouds \"Oliverb\": long, pitch-shifting, self-oscillating tails (Decay / Diffusion / Size / Modulation / Hold / Pitch / Pre-Delay).\n• **Resonestor** — the Parasite dual-voice resonator.\n\nThis is also where Hector earns its [[screen-reverb|reverb]] reputation beyond the plain algorithmic verbs."
        },
        {
          title: 'Rings → Multi Resonator',
          focus: 'screen',
          body: "**Multi Resonator** is the Rings port — a physical-modelling resonator voice. Controls: **Structure, Brightness, Damping, Position**, a **Polyphony** count, a **Resonator** model selector, and an **Internal Exciter** so it can self-sound without an external input.\n\nUse it two ways: as a **post-resonator** (feed it audio — e.g. Macro Osc or noise — and it rings/pitches it) or as a **direct voice** via the internal exciter. The \"Euclidean Resonators\" patch (a Euclidean sequencer driving **4× Rings**) is the canonical multi-instance example."
        },
        {
          title: 'Marbles → Chaos Controller',
          focus: 'screen-mod',
          body: "**Chaos Controller** is the Marbles port and the platform's best generative CV hub — a random source with **T / X / Y** sections, **Deja Vu** (the repetition-vs-newness control), distribution **bias** and **spread**, built-in **scales/quantization**, and external clock sync. Use its **X outputs** for pitch/random CV and **T outputs** for triggers. As a [[screen-mod|modulation source]] it's the brain that makes a patch play itself.\n\nThe broader port list goes further: **Tides → Looping Envelope** (Mode/Ramp/Range/Shape/Slope/Smoothness/Shift, 4 outputs + tempo out), **Warps → Bitmangle / Doppler Panner**, and **Grids → Drum Patterns** (Map X/Y, Chaos, per-voice density, Swing)."
        }
      ]
    }
  },
  {
    title: 'Deconstruct a patch: Cassette Tape Machine',
    section_id: 'screen',
    tags: 'tutorial,patch,lofi,tape,deconstruct',
    content: {
      type: 'tutorial',
      steps: [
        {
          title: 'A stereo lo-fi tape emulation, in stages',
          focus: 'screen',
          body: "The best way to learn Hector's branching mindset is to take apart a real shared patch. This one is **\"Cassette Tape Machine\"** by **go_outside** (on Patchstorage) — a full stereo tape emulation built entirely from stock modules in **four parallel-minded stages**: drive, warble, crinkle/dropout, and noise. Build it stage by stage and you'll understand both lo-fi tone *and* how Hector patches are structured."
        },
        {
          title: 'Stage 1 — Drive',
          focus: 'screen',
          body: "A simple front-end colour stage: a **Warmth** module into a **Saturator** (Pregain / Postgain). This is the \"tape running hot\" character before any motion is added — saturation and gentle high-end loss. Keep it tasteful; the movement stages do the rest."
        },
        {
          title: 'Stage 2 — Warble (wow & flutter)',
          focus: 'screen-mod',
          body: "Two **Vibratos per channel** (so four total, L+R). The first pair is driven by **one random [[screen-lfo|LFO]] routed through a Slew Limiter** — the slew *smooths* the randomness into believable warble rather than jitter. The second pair rides a **slow triangle LFO at low depth**.\n\nThe key trick: both channels are modulated **identically** (not independently). That mimics a real capstan's wow and **avoids the phase smearing** you'd get from decorrelated L/R pitch wobble. This is a [[screen-mod|modulation]] lesson as much as a tape one."
        },
        {
          title: 'Stage 3 — Crinkle / dropout',
          focus: 'screen-filter',
          body: "Independent **Tremolos + Low-Pass [[screen-filter|Filters]]**, each with **its own [[screen-lfo|LFO]]**. The tremolos thin the level and the filters dull the top end in irregular dips — the \"worn tape\" artifact.\n\nThe single performance control here: **raise each LFO's depth for more \"wear.\"** Low depth = a nearly pristine tape; high depth = heavily degraded. Because each has its own LFO, the dropouts are decorrelated and feel organic."
        },
        {
          title: 'Stage 4 — Noise / hiss',
          focus: 'screen-mix',
          body: "A separate path: **two slightly-detuned noise oscillators → VCAs**, with **one triangle LFO** modulating the VCAs so the hiss *flutters* like real tape noise. Set the hiss level in **each VCA's gain**; to kill noise entirely, **disconnect the VCA outputs**.\n\nFinally all four stages are recombined at the [[screen-mix|mixer]] — a textbook example of the branches-not-series philosophy from the parallelism lesson. (Numeric slider values aren't published for this patch; download the `.instr` from Patchstorage to inspect exact settings.)"
        }
      ]
    }
  },
  {
    title: 'Generative patch: Marbles → Plaits',
    section_id: 'screen',
    tags: 'tutorial,patch,generative,marbles,plaits',
    content: {
      type: 'tutorial',
      steps: [
        {
          title: 'The core generative recipe',
          focus: 'screen-mod',
          body: "The platform's signature self-playing patch combines three Mutable ports: **Chaos Controller (Marbles) → Quantizer → Macro Osc (Plaits)**. It's the recipe behind published ambient pieces (e.g. danielcpappas.com's \"generative waves\"), and Red Means Recording's Hector demo builds essentially the same Mutable-style voice inside one module.\n\nThe shape: a held **Macro Osc** drone for a bed, while the **Chaos Controller** generates random pitch and triggers a melody on top."
        },
        {
          title: 'Wire the brain to the voice',
          focus: 'screen',
          body: "Route it like this:\n• Chaos Controller **X output → Quantizer → Macro Osc V/oct** (random pitches snapped to a scale).\n• Chaos Controller **T output → Macro Osc trigger** (fires the notes / LPG).\n• A second Macro Osc held as a **drone** underneath for the pad bed.\n\nOptionally add **Multi Resonator (Rings)** as a post-resonator on the voice, and **Granular (Clouds)** as atmosphere/freeze smear. Because these are cheap Mutable instances, you can stack several in parallel without trouble (recall Loki's 3× Rings + 3× Clouds + Marbles at 64% CPU)."
        },
        {
          title: 'Make it evolve over minutes',
          focus: 'screen-mod',
          body: "The detail that makes it musical: add **very slow random [[screen-lfo|LFOs]]** — initially switched **off** — and have them modulate the **Chaos Controller's spread and bias** sliders. \"Switch them on\" minutes into the piece and the harmony slowly drifts and reshapes itself on its own.\n\nUseful sidebar — the **bipolar-LFO trick**: a unipolar LFO runs 0–1; set its level/offset to zero and it becomes bipolar (negative + positive), the documented way to get a *centered* modulation around a slider's current value. Exact slider numbers for generative patches are inferred starting points, not published — tune by ear."
        }
      ]
    }
  },
  {
    title: 'NAM amp capture (nano only)',
    section_id: 'screen',
    tags: 'tutorial,nam,amp,guitar,cpu',
    content: {
      type: 'tutorial',
      steps: [
        {
          title: 'A neural amp modeler on board',
          focus: 'screen',
          body: "Since firmware **331 beta** (play included models) → **333 beta** (import enabled) → **337** (full release), Hector has a **NAM Amp** module — a Neural Amp Modeler that loads guitar/amp *captures*.\n\nThe hard limit: it loads **only NAM \"nano\" captures** — the smallest WaveNet tier. Heavier tiers (Standard ≈13.8k params) won't run, because the NAM code runs on the **shared ARM CPU with no dedicated DSP** and can't keep up in real time. *(The module is undocumented in the manual — its exact on-screen control names are unverified; only nano-only + very-CPU-heavy + per-setting captures are confirmed.)*"
        },
        {
          title: 'Where captures come from',
          focus: 'screen',
          body: "Make or package captures at the companion site **ampcapture.polyeffects.com**. It offers two paths: **\"Capture an amp\"** and **\"Upload existing NAM for Beebo or Hector\"** (i.e. package a `.nam` file you already have). You enter amp metadata — brand, model, year, description, number of controls to capture, whether you're micing a cab.\n\nThe underlying NAM pipeline reamps a sweep (or a DI/wet pair) recorded as **24-bit / 48 kHz mono WAV**, with cloud training producing the `.nam` file. *(The site's exact on-page recording/training steps and the transfer mechanism are JS-rendered and couldn't be fully verified; transfer is via USB, consistent with all other content imports — flagged as unverified.)* You can also source pre-made nano models from the wider NAM ecosystem (Tone3000 / ToneHunt), but again **only the nano tier loads.**"
        },
        {
          title: 'The CPU reality — budget around it',
          focus: 'screen',
          body: "Even nano captures are, in Poly's own words, **\"very CPU heavy.\"** Poly states there's room for a **mono cab + a delay or two — but not a simultaneous reverb**. Each amp *setting* is a separate capture (one capture ≠ a full amp's worth of knobs).\n\nSo build the guitar chain lean: **NAM Amp → a single Cab → a Delay**, and skip the reverb to stay inside budget. Shape tone with Hector's own modules *around* NAM — **Mono Eq**, **Saturator**, and a gate — rather than expecting NAM to do everything. And remember the ~15–18 ms device latency: great for studio reamping, less so live mid-chain."
        }
      ]
    }
  },
  {
    title: 'Loading 48 kHz convolution IRs',
    section_id: 'screen',
    tags: 'tutorial,ir,convolution,reverb,cab',
    content: {
      type: 'tutorial',
      steps: [
        {
          title: 'Convolution reverbs and cabs',
          focus: 'screen-reverb',
          body: "Beyond the algorithmic [[screen-reverb|reverbs]], Hector has **convolution** modules that play back impulse responses (IRs): **Mono Reverb, Stereo Reverb, Mono Cab, Stereo Cab**, plus **Quad Ir Reverb / Quad Ir Cab** (those need special 4-channel IRs most users won't have). You can even load **non-reverb audio as an IR** for creative/destructive effects.\n\nStock content includes IRs like \"Emt 140 Dark\" reverbs and \"1x12Cab\" cabs, and the firmware shipped Hainbach / Edouard Morin-Fournier's \"Pool of the Black Star\" space IRs."
        },
        {
          title: 'The format rules (this is where 48 kHz matters)',
          focus: 'screen',
          body: "From the manual + FAQ, IR files must be:\n• **WAV**, **48 kHz** (the device's sample rate — non-48k files won't behave).\n• **Any bit depth.**\n• **Maximum 3.5 seconds**, trimmed **as short as possible** for performance.\n\nStay inside that and almost any reverb/cab IR works — users load Bricasti M7, EMT 140, real-room and famous-studio captures. (Two convolution reverbs at once is the patch that genuinely eats CPU — see the parallelism lesson.)"
        },
        {
          title: 'Copy them onto Hector',
          focus: 'midi-usb',
          body: "Transfer is via **FAT32 [[midi-usb|USB]]** like everything else:\n1. Put your WAVs into folders named **`reverbs`** and **`cabs`** on the drive.\n2. Insert it, then **Settings → Copy IRs**.\n3. Instance a convolution module and pick your IR from its list.\n\nPost-**407** wrinkle: the IR modules were **split into \"short\" and \"long\" variants** — short keeps the original 3.5s-style behavior and backward compatibility; long supports much longer IRs. After a 407 reflash you must **re-add IR modules** in old presets, choosing short or long deliberately."
        }
      ]
    }
  },
  {
    title: 'Looping with Loopler',
    section_id: 'screen',
    tags: 'tutorial,loopler,looping,sooperlooper,midi',
    content: {
      type: 'tutorial',
      steps: [
        {
          title: 'A SooperLooper/EDP-grade looper, built in',
          focus: 'screen',
          body: "**Loopler** (added in firmware 3.4) is Hector's looper, based on **SooperLooper / EDP** (LoopIII/IV) — a serious, deep looping engine, not a toy. You build it from modules: **Loop Common In/Out** (add two pairs for a stereo loop), **Loop Extra Midi** (for internal MIDI control), and **Loop Midi Out** (clock out).\n\nIt exposes the full EDP command set: **Record, Overdub, Multiply (+ MultiIncrease), Insert, Replace, Substitute, Reverse, Undo/Redo, Mute, Trigger, Oneshot, Pause, Solo, Delay Mode.** Commands bind per-loop, per-selected-loop, or all-loops."
        },
        {
          title: 'Binding control — the special path',
          focus: 'midi-in',
          body: "Loopler's control binding is unusual and convenient. You bind **directly from the Loopler screen**: tap the MIDI icon → choose **selected / all / a specific loop** → press the command → send the MIDI message from [[midi-in|MIDI in]]. No patch-view routing is needed for basic actions or MIDI-clock sync.\n\nFor **internal** control (a module driving Loopler rather than an external pedal), add the **Loop Extra Midi** module — that's what lets internal generators reach the looper."
        },
        {
          title: 'The self-recording trick (CV → MIDI → Loopler)',
          focus: 'screen-seq',
          body: "The community's best-documented recipe makes Hector record *itself*. The skeleton, from the r/polyeffects \"Loopler auto-record/stop\" thread:\n\n**Footswitch A → Product (A); LFO → Product (B); Product → step-trigger of a Euclidean / [[screen-seq|Step Sequencer]]; Footswitch → Sequencer Reset; the sequencer's \"Is The One\" output → CV To Midi Cc → Loop Extra Midi** — then **MIDI-learn Loopler's Play and Record as toggles**.\n\nThe refinement: **hold the step value high for only half the sequence** so recording stays on long enough to be useful, then stops automatically. One sequencer can run a metronome while another times the record window."
        }
      ]
    }
  }
]
