'use client'

import { useSynth } from '@/lib/synth-context'

export function Legend() {
  const { legendItems, highlight, highlightedZone } = useSynth()

  return (
    <div
      className="flex flex-wrap gap-2 px-4 py-3"
      style={{
        background: '#1a1a1a',
        borderTop: '3px solid #1a1a1a',
      }}
    >
      {legendItems.map((item) => {
        const isActive = highlightedZone === item.id
        return (
          <button
            key={item.id}
            className="flex items-center gap-1.5 px-2 py-1 text-[10px] font-bold uppercase tracking-wider cursor-pointer"
            style={{
              background: isActive ? item.color : 'transparent',
              color: isActive ? '#1a1a1a' : item.color,
              border: `2px solid ${item.color}`,
              boxShadow: isActive ? `3px 3px 0 ${item.color}44` : 'none',
              transition: 'all 0.1s',
            }}
            onClick={() => highlight(isActive ? null : item.id)}
          >
            <span
              className="w-2 h-2 shrink-0"
              style={{ background: item.color }}
            />
            {item.label}
          </button>
        )
      })}
    </div>
  )
}
