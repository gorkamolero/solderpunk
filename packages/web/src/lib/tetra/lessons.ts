import type { SeedLesson } from '@/lib/shared-types'

export const seedLessons: SeedLesson[] = [
  {
    title: 'Understand Your Tetra',
    section_id: 'basics',
    tags: 'beginner,architecture,hidden features',
    content: {
      type: 'tutorial',
      steps: [
        {
          title: 'The 1,024-Program Secret',
          focus: 'mode',
          body: `The Tetra's most underappreciated feature is hiding in plain sight. You have **1,024 program slots** — not the 512 you think.

The 512 Programs stored inside the 128 [[btn-combo|Combos]] are completely independent from the 512 Programs in Program mode. You can mangle and save Combo programs without touching your Program mode patches.

Most multitimbral synths derive their multi/combo sounds from the main program banks, propagating edits everywhere — the Tetra does **not**. Treat Combo mode as a second complete bank of 512 sounds you can freely experiment with.`
        },
        {
          title: 'Outputs 3 and 4 Are Always Active',
          focus: 'connections',
          body: `Here's something the manual barely mentions: [[connections|Outputs 3 and 4]] are always active, even when the Tetra is set to Mono or Stereo output mode.

Voices 3 and 4 continuously feed those jacks, and they're **noticeably louder** than outputs 1 and 2 because they don't need headroom for summing multiple voices.

Critically, tapping outputs 3 and 4 does **not** remove those voices from the main stereo mix — they appear in multiple outputs simultaneously. This enables creative parallel processing chains: run the main stereo out through your mixer clean, and process outputs 3-4 through effects separately.`
        },
        {
          title: 'Hidden Calibration',
          focus: 'mode',
          body: `A **hidden calibration function** is buried in the manual's appendix: hold the Assign Parameter switch and hit the [[btn-program|Mode switch]] to calibrate the low-pass filter and analog oscillator waveshapes.

If your Tetra sounds slightly out of tune or the filter tracking feels off, this is the first thing to try. The calibration routine adjusts for component drift that naturally occurs in analog circuits over time.

**Important MIDI note**: The official MIDI implementation chart contains a swap error — Unison Mode has NRPN number 95 and Key Mode has NRPN number 96, reversed from what the chart states.`
        },
        {
          title: 'Poly Chain Out = Second MIDI Out',
          focus: 'connections',
          body: `The [[connections|Poly Chain Out jack]] doubles as a second MIDI Out when not being used for poly chaining. This is incredibly useful for routing MIDI to other gear in your setup.

In Combo mode, the 4 assignable parameter encoders map one per voice: [[ap1-knob|AP1]] controls Voice 1, AP2 controls Voice 2, etc. This gives you real-time hardware control over one parameter per voice — not obvious from the interface at all.

You can also switch between Program and Combo mode remotely via SysEx (\`F0 01 26 31 F7\`), essential for DAW integration since Program Change messages only work within the current mode.`
        },
        {
          title: 'The Beta Firmware',
          focus: 'display',
          body: `DSI engineer Chris Hector ("Pym") developed beta firmware that dramatically expands capabilities. The latest beta is **Main 1.6.19 / Voice 1.5.12**.

Key additions:
- **Sequencer Slew**: Per-step portamento control via [[seq|Sequences 2 and 4]]
- **Expanded arpeggiator**: Up, Down, Up/Down, Assign, Random across 1-3 octaves
- **Full Multi Mode front-panel editing**: [[edit-knob|Edit B]] cycles through voices 1-4
- **Mode Lock**: Boot directly into Combo mode
- **Individual voice volume control**

**Warning**: Serial numbers ~1992-2138 may freeze during updates. Those units must be sent to DSI. All firmware updates require 5-pin MIDI IN, not USB.`
        },
        {
          title: 'NRPN Offsets for Deep Control',
          focus: 'connections',
          body: `The [[connections|MIDI implementation]] hides significant power behind NRPN offsets.

To control **Layer B** parameters, offset the NRPN parameter number by **+200**. For Combo mode voices:
- Voice 1: **+512**
- Voice 2: **+768**
- Voice 3: **+1024**
- Voice 4: **+1280**

So if OSC 1 Fine Tune is NRPN 1 for Layer A, it becomes NRPN 201 for Layer B and NRPN 1025 for Combo Voice 3.

Many parameters — including all LFO functions — are **only accessible via NRPN**, not standard CC. The filter cutoff range is 0-164 (not 0-127), which also requires NRPN. Get a BCR2000 or Novation Remote SL if you want full control.

Or better yet: a **Prophet '08** functions as the ultimate hardware editor when poly-chained — its front panel maps directly to almost all Tetra parameters.`
        },
      ]
    }
  },
  {
    title: 'The Feedback Secret',
    section_id: 'feedback',
    tags: 'intermediate,sound design,feedback',
    content: {
      type: 'tutorial',
      steps: [
        {
          title: 'What Makes the Tetra Special',
          focus: 'vca',
          body: `The feedback loop — absent from the Prophet '08 — is what makes the Tetra sonically distinct.

At low settings ([[volume-knob|Feedback Volume]]: 10-30, [[volume-knob|Gain]]: moderate), feedback subtly **"beefs up" the oscillator sound** and reduces the characteristic brassy Curtis filter tone. It adds harmonic complexity that the Prophet '08 simply cannot achieve.

At higher settings, it produces everything from pleasing distortion to what Dave Smith himself describes as "harmonic weirdness."

Both Feedback Volume and Feedback Gain are **modulation destinations**. Route LFOs, sequencer tracks, envelopes, or the mod wheel to dynamically animate feedback intensity.`
        },
        {
          title: 'Dynamic Feedback Routing',
          focus: 'lfo',
          body: `The real power of feedback emerges when you modulate it. Try these routings:

**Pulsing distortion**: Route a slow [[lfo|LFO]] (0.5-2 Hz, triangle wave) to Feedback Volume. The sound breathes with organic distortion.

**Rhythmic grit**: Use a [[seq|sequencer track]] routed to Feedback Volume with varied step values. Different amounts of crunch on each step create rhythmic texture.

**Velocity-controlled dirt**: Route velocity to Feedback Gain via the mod matrix. Hit harder = more distortion. Natural and expressive.

**Envelope-driven snarl**: Route [[env|Envelope 3]] to Feedback Volume with a fast attack and medium decay. The beginning of each note gets a burst of harmonics that decays to a cleaner sustain.

Remember: if [[volume-knob|Feedback Volume]] is at zero, [[volume-knob|Feedback Gain]] has no effect — there's no signal to amplify.`
        },
        {
          title: 'Sub-Oscillators: The Prophet Can\'t Do This',
          focus: 'osc',
          body: `Each voice has two sub-oscillators exclusive to the Tetra/Mopho family:

- [[osc|Sub Osc 1]]: Square wave **one octave** below Osc 1
- [[osc|Sub Osc 2]]: Square wave **two octaves** below Osc 2

For massive bass: set Sub Osc 1 to ~100 and Sub Osc 2 to ~60. Combined with moderate feedback, the bass presence is extraordinary — earth-shaking low-end that the Prophet '08 literally cannot produce.

Sub-oscillator levels are modulation destinations. Route envelopes or LFOs to dynamically bring sub-bass in and out.

**Organ tones**: Use sub-oscillators at varying levels to simulate drawbar registrations. Triangle waves on the main oscillators + sub-oscillator squares = Hammond-like character.

**Vintage strings**: Combine sub-oscillators with multiple LFO pitch modulations, subtle feedback, and a 4-pole filter without resonance.`
        },
        {
          title: 'Drum Synthesis with Feedback',
          focus: 'vca',
          body: `The feedback circuit excels at creating analog drums. The Tetra in Multi mode with 4 channels on separate [[connections|outputs]] becomes a complete analog drum kit.

**Kick drum recipe**:
- Osc 1: Triangle, pitch around C1
- [[env|Pitch envelope]]: Fast attack, short decay, high amount (pitch drops quickly)
- VCA envelope: Fast attack, medium decay, no sustain
- [[volume-knob|Feedback]]: 40-60 for body
- [[cutoff-knob|Filter]]: Low cutoff, moderate envelope amount

**Snare recipe**:
- Osc 1: Triangle (body), [[osc|Noise]] mixed in (snap)
- Short envelopes on everything
- [[volume-knob|Feedback]]: 70+ for bite and crunch
- [[resonance-knob|Resonance]]: Medium, for that analog ring

**Hi-hat recipe**:
- [[osc|Noise]] only (oscillators off)
- Very short VCA envelope
- [[cutoff-knob|Filter]] cutoff high, audio-rate modulation for shimmer
- High [[resonance-knob|resonance]] in 2-pole mode`
        },
        {
          title: 'Voice Stacking: Wall of Sound',
          focus: 'mode',
          body: `In Program Mode with Unison On, all 4 voices stack on a single note: **8 oscillators + 4 sub-oscillators + 4 feedback loops** firing simultaneously.

**The fattest mono lead**:
- Both oscillators: sawtooth
- [[osc|Osc 2 Fine]]: +3 to +7 for detuning
- Both [[osc|sub oscillators]] enabled
- Osc Slop: 3-5 for analog drift
- Moderate [[volume-knob|feedback]]
- [[assign|Pan Spread]] for stereo width

**Pseudo-chorus in Combo mode**: Create 4 slightly different versions of the same patch with subtle variations in [[cutoff-knob|filter cutoff]], [[lfo|LFO rate]], and oscillator tuning. Stack them in a Combo. The result simulates the organic character of vintage polysynths like the Oberheim 4-Voice — where each voice was a separate instrument.

In Combo Mode with Unison, you can assign 4 different programs to the 4 voices, creating stacked patches where each voice has its own oscillator configuration, filter settings, LFO rates, and [[seq|sequencer patterns]].`
        },
        {
          title: 'Filter Self-Oscillation Tricks',
          focus: 'filter',
          body: `The Curtis low-pass [[filter|filter]] self-oscillates in 4-pole mode at high [[resonance-knob|resonance]], producing a **sine wave that tracks the keyboard** — effectively an additional oscillator.

This is incredibly useful for:
- **Percussion synthesis**: Kicks, toms, and pitched percussion using the filter as a sine oscillator
- **Whistling leads**: Pure sine with the warmth of the analog filter circuit

Self-oscillation does **not** work in 2-pole mode.

At high resonance, the filter exhibits significant bass drop-off, effectively acting as a **high-pass filter** — critical since the Tetra has no dedicated HPF.

**Cymbal trick**: Audio-rate modulation of [[cutoff-knob|filter cutoff]] produces interesting high-frequency content useful for cymbal and hi-hat synthesis.

**Tone character**: 2-pole mode sounds particularly elegant for pads and brass. 4-pole is more aggressive for screaming leads and bass.`
        },
      ]
    }
  },
]
