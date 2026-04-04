'use client'

import { useSynth } from '@/lib/synth-context'
import { Tooltip, TooltipTrigger, TooltipContent } from '@/components/ui/tooltip'
import type { Zone } from '@/lib/tempest/types'

interface PanelZoneProps {
  zone: Zone
}

const groupColors: Record<string, string> = {
  synth: '#0af',
  mod: '#4a6b1a',
  mix: '#2a5a8a',
  nav: '#005555',
  utility: '#555',
  fx: '#a8307a',
  pads: '#d4880a',
  rec: '#662222',
  knob: '#0af',
  button: '#0af',
}

export function PanelZone({ zone }: PanelZoneProps) {
  const { highlightedZone, hoveredZone, highlight, setHovered, showMessage } = useSynth()

  const isHighlighted = highlightedZone === zone.id
  const isHovered = hoveredZone === zone.id
  const isActive = isHighlighted || isHovered
  const color = groupColors[zone.group ?? ''] ?? '#0af'

  const isSmall = zone.group === 'knob' || zone.group === 'button'

  return (
    <Tooltip>
      <TooltipTrigger
        className="absolute cursor-pointer"
        style={{
          left: zone.rect[0],
          top: zone.rect[1],
          width: zone.rect[2],
          height: zone.rect[3],
          border: isActive ? `3px solid ${color}` : '2px solid transparent',
          background: isActive ? `${color}22` : 'transparent',
          boxShadow: isHighlighted ? `0 0 12px ${color}, 4px 4px 0 ${color}44` : isHovered ? `0 0 8px ${color}88` : 'none',
          zIndex: isActive ? 20 : 10,
          transition: 'border 0.1s, background 0.1s, box-shadow 0.15s',
        }}
        onMouseEnter={() => {
          setHovered(zone.id)
          showMessage(`${zone.label} — ${zone.tip}`)
        }}
        onMouseLeave={() => {
          setHovered(null)
        }}
        onClick={() => {
          highlight(isHighlighted ? null : zone.id)
        }}
      >
        {isActive && !isSmall && (
          <span
            className="absolute -top-6 left-0 px-1 py-0.5 text-[10px] font-bold uppercase tracking-wider whitespace-nowrap pointer-events-none"
            style={{
              background: color,
              color: '#1a1a1a',
              border: '2px solid #1a1a1a',
              boxShadow: '2px 2px 0 #1a1a1a',
            }}
          >
            {zone.label}
          </span>
        )}
      </TooltipTrigger>
      <TooltipContent side="top" sideOffset={8}>
        <div className="max-w-xs">
          <div className="font-bold uppercase text-xs" style={{ color }}>{zone.label}</div>
          <div className="text-[11px] mt-0.5">{zone.tip}</div>
        </div>
      </TooltipContent>
    </Tooltip>
  )
}
