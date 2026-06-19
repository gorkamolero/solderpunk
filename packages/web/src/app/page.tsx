'use client'

import Link from 'next/link'

const synths = [
  {
    id: 'tempest',
    name: 'DSI Tempest',
    subtitle: 'Drum Machine / Synthesizer',
    description: 'Six-voice analog drum machine and synthesizer by Dave Smith and Roger Linn. Touch-sensitive pads, analog oscillators, digital samples, dual filters, and a deep sequencer.',
    color: '#0af',
    href: '/tempest',
    specs: ['6 Voices', '2 Analog Osc + Samples', 'OLED Display', '16 Velocity Pads'],
  },
  {
    id: 'tetra',
    name: 'DSI Tetra',
    subtitle: '4-Voice Analog Synthesizer',
    description: 'Desktop powerhouse with 1,024 program slots, per-voice feedback loops, sub-oscillators, and 4-part multitimbrality. The Prophet \'08\'s wilder, more compact sibling.',
    color: '#ff4d4d',
    href: '/tetra',
    specs: ['4 Voices', '2 Osc + 2 Sub-Osc', 'Feedback Loop', '4 Individual Outs'],
  },
  {
    id: 'minitaur',
    name: 'Moog Minitaur',
    subtitle: 'Analog Bass Synthesizer',
    description: 'Two-oscillator analog bass monosynth on the Moog Taurus engine. 24 dB Moog ladder filter, Note Sync punch, and a deep hidden MIDI-CC / editor parameter layer under a deceptively simple panel.',
    color: '#e8a33d',
    href: '/minitaur',
    specs: ['2 Analog VCO', '24 dB Ladder', 'MIDI CC + CV', 'Mono Bass'],
  },
  {
    id: 'grandmother',
    name: 'Moog Grandmother',
    subtitle: 'Semi-Modular Analog Synth',
    description: 'Patch-anything semi-modular with a 24 dB Moog ladder filter, real spring reverb, arpeggiator/256-step sequencer, and a 41-point patchbay that lets you break every internal normal.',
    color: '#3a9e6e',
    href: '/grandmother',
    specs: ['Semi-Modular', '41 Patch Points', 'Spring Reverb', 'Arp + Sequencer'],
  },
  {
    id: 'brains',
    name: 'Behringer Brains',
    subtitle: 'Multi-Engine Macro-Oscillator',
    description: 'A Plaits-derived Eurorack voice with 20+ synthesis engines — virtual analog, FM, granular, chords, speech, drums, plus DX7 and TB-303 modes — under three macro knobs and CV control.',
    color: '#c0392b',
    href: '/brains',
    specs: ['20+ Engines', 'Plaits-Derived', 'OLED Scope', 'CV Control'],
  },
  {
    id: 'zoia',
    name: 'Empress ZOIA',
    subtitle: 'Grid-Based Modular Pedal',
    description: 'A modular synth, effects processor, and virtual pedalboard on an 8×5 button grid. 80+ modules, deep CV math, and a patch format the community reverse-engineered. The Euroburo is its Eurorack twin.',
    color: '#5b8def',
    href: '/zoia',
    specs: ['80+ Modules', '8×5 Grid', 'MIDI + CV', 'Virtual Pedalboard'],
  },
  {
    id: 'hector',
    name: 'Poly Effects Hector',
    subtitle: 'Touchscreen Virtual-Modular',
    description: 'A quad-core touchscreen Eurorack module with ~100 LV2 modules — Mutable ports, granular, NAM amp capture, and the Loopler looper — patched on screen, with 6 in / 8 out all CV + audio.',
    color: '#e0732a',
    href: '/hector',
    specs: ['~100 Modules', 'Touchscreen', '6 In / 8 Out', 'NAM Capture'],
  },
]

const steps = [
  {
    n: '01',
    title: 'Pick a synth',
    desc: 'Choose any instrument from the rack below — from the Tempest to the ZOIA grid.',
    color: '#5b8def',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
        <rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" />
        <rect x="3" y="14" width="7" height="7" /><rect x="14" y="14" width="7" height="7" />
      </svg>
    ),
  },
  {
    n: '02',
    title: 'Hover to learn',
    desc: 'Every knob, jack, and button on the real panel is annotated. Hover any control to see exactly what it does.',
    color: '#0af',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
        <path d="M4 4l7 16 2.5-6.5L20 11z" /><path d="M14 14l5 5" />
      </svg>
    ),
  },
  {
    n: '03',
    title: 'Follow tutorials',
    desc: 'Guided lessons walk you through real patches — from your first sound to the tricks buried in the manual.',
    color: '#e8a33d',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
        <path d="M3 5a2 2 0 012-2h6v16H5a2 2 0 00-2 2zM21 5a2 2 0 00-2-2h-6v16h6a2 2 0 012 2z" />
      </svg>
    ),
  },
  {
    n: '04',
    title: 'Plug in & ask',
    desc: 'Drive supported synths live over MIDI, and ask the built-in AI anything — answers grounded in cited research.',
    color: '#ff4d4d',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
        <line x1="4" y1="8" x2="20" y2="8" /><circle cx="9" cy="8" r="2.5" fill="currentColor" />
        <line x1="4" y1="16" x2="20" y2="16" /><circle cx="15" cy="16" r="2.5" fill="currentColor" />
      </svg>
    ),
  },
]

export default function Home() {
  return (
    <div
      className="min-h-screen flex flex-col"
      style={{ background: '#f5f0e8' }}
    >
      {/* Header */}
      <header
        className="w-full px-6 py-4"
        style={{
          background: '#1a1a1a',
          borderBottom: '4px solid #1a1a1a',
        }}
      >
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span
              style={{
                color: '#ff4d4d',
                fontSize: '0.7rem',
                lineHeight: 1,
              }}
            >
              {'///'}
            </span>
            <h1
              className="text-lg font-extrabold uppercase tracking-[0.15em]"
              style={{ color: '#0af' }}
            >
              SOLDERPUNK
            </h1>
          </div>
          <span
            className="text-[10px] font-bold uppercase tracking-widest"
            style={{ color: '#666' }}
          >
            Synth Explorers
          </span>
        </div>
      </header>

      {/* Hero */}
      <div className="max-w-6xl mx-auto w-full px-6 pt-12 pb-8">
        <div className="space-y-3">
          <p
            className="text-xs font-bold uppercase tracking-[0.2em]"
            style={{ color: '#ff4d4d' }}
          >
            {'/// Interactive Hardware Exploration'}
          </p>
          <h2
            className="text-3xl sm:text-4xl font-extrabold uppercase tracking-wider leading-tight"
            style={{ color: '#1a1a1a' }}
          >
            Learn Your Synth.<br />
            Every Knob. Every Secret.
          </h2>
          <p
            className="text-sm max-w-xl leading-relaxed"
            style={{ color: '#666' }}
          >
            Hover over panel zones, follow guided tutorials, and discover hidden features
            you never knew existed. Pick a synth to begin.
          </p>
        </div>
      </div>

      {/* How it works */}
      <div className="max-w-6xl mx-auto w-full px-6 pb-12">
        <p
          className="text-xs font-bold uppercase tracking-[0.2em] mb-5"
          style={{ color: '#1a1a1a' }}
        >
          {'/// How it works'}
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {steps.map((step) => (
            <div
              key={step.n}
              className="flex flex-col gap-3 p-5"
              style={{
                background: '#f5f0e8',
                border: '4px solid #1a1a1a',
                boxShadow: '6px 6px 0 #1a1a1a',
              }}
            >
              <div className="flex items-center justify-between" style={{ color: step.color }}>
                {step.icon}
                <span className="text-2xl font-extrabold tracking-wider">{step.n}</span>
              </div>
              <h3
                className="text-base font-extrabold uppercase tracking-wider"
                style={{ color: '#1a1a1a' }}
              >
                {step.title}
              </h3>
              <p className="text-xs leading-relaxed" style={{ color: '#666' }}>
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Synth Cards */}
      <div className="max-w-6xl mx-auto w-full px-6 pb-16 flex-1">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {synths.map((synth) => (
            <Link
              key={synth.id}
              href={synth.href}
              className="group block no-underline"
            >
              <div
                className="h-full flex flex-col p-0 cursor-pointer"
                style={{
                  background: '#f5f0e8',
                  border: '4px solid #1a1a1a',
                  boxShadow: '8px 8px 0 #1a1a1a',
                  transition: 'transform 0.15s, box-shadow 0.15s',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translate(-3px, -3px)'
                  e.currentTarget.style.boxShadow = '11px 11px 0 #1a1a1a'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'none'
                  e.currentTarget.style.boxShadow = '8px 8px 0 #1a1a1a'
                }}
              >
                {/* Card Header */}
                <div
                  className="px-5 py-4"
                  style={{
                    background: synth.color,
                    borderBottom: '4px solid #1a1a1a',
                  }}
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <h3
                        className="text-xl font-extrabold uppercase tracking-wider"
                        style={{ color: '#1a1a1a' }}
                      >
                        {synth.name}
                      </h3>
                      <p
                        className="text-xs font-bold uppercase tracking-widest mt-0.5"
                        style={{ color: '#1a1a1a', opacity: 0.7 }}
                      >
                        {synth.subtitle}
                      </p>
                    </div>
                    <span
                      className="text-2xl font-extrabold transition-transform group-hover:translate-x-1"
                      style={{ color: '#1a1a1a' }}
                    >
                      {'\u2192'}
                    </span>
                  </div>
                </div>

                {/* Card Body */}
                <div className="px-5 py-4 flex-1 flex flex-col gap-4">
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: '#1a1a1a' }}
                  >
                    {synth.description}
                  </p>

                  {/* Specs */}
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {synth.specs.map((spec) => (
                      <span
                        key={spec}
                        className="text-[10px] font-bold uppercase tracking-wider px-2 py-1"
                        style={{
                          border: '2px solid #1a1a1a',
                          boxShadow: '2px 2px 0 #1a1a1a',
                          color: '#1a1a1a',
                        }}
                      >
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card Footer */}
                <div
                  className="px-5 py-3"
                  style={{
                    borderTop: '3px solid #1a1a1a',
                    background: '#e8e3db',
                  }}
                >
                  <span
                    className="text-xs font-bold uppercase tracking-widest"
                    style={{ color: synth.color }}
                  >
                    Explore {'\u2192'}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer
        className="w-full px-6 py-3"
        style={{
          background: '#1a1a1a',
          borderTop: '4px solid #1a1a1a',
        }}
      >
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <span
            className="text-[10px] font-bold uppercase tracking-widest"
            style={{ color: '#666' }}
          >
            SOLDERPUNK /// Open-Source Synth Explorers
          </span>
          <span
            className="text-[10px] font-bold uppercase tracking-widest"
            style={{ color: '#ff4d4d' }}
          >
            {'///'}
          </span>
        </div>
      </footer>
    </div>
  )
}
