'use client'

import { useSynth } from '@/lib/synth-context'

export function MessageBar() {
  const { message } = useSynth()

  return (
    <div
      className="w-full px-4 py-2 text-sm font-bold uppercase tracking-wider"
      style={{
        background: '#1a1a1a',
        color: '#0af',
        borderBottom: '3px solid #1a1a1a',
        fontFamily: 'var(--font-jetbrains), monospace',
        letterSpacing: '0.08em',
      }}
    >
      <div className="flex items-center gap-3">
        <span
          style={{
            color: '#ff4d4d',
            fontSize: '0.65rem',
            lineHeight: 1,
          }}
        >
          {'///'}
        </span>
        <span className="truncate">{message}</span>
        <span
          className="ml-auto shrink-0"
          style={{
            color: '#ff4d4d',
            fontSize: '0.65rem',
            lineHeight: 1,
          }}
        >
          SOLDERPUNK
        </span>
      </div>
    </div>
  )
}
