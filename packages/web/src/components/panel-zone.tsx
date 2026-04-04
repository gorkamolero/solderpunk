'use client'

import { useSynth } from '@/lib/synth-context'
import { Tooltip, TooltipTrigger, TooltipContent } from '@/components/ui/tooltip'
import { cn } from '@/lib/utils'
import type { Zone } from '@/lib/tempest/types'

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

export function PanelZone({ zone }: { zone: Zone }) {
  const { highlightedZone, hoveredZone, hoveredGroup, highlight, setHovered, showMessage } = useSynth()

  const isSmall = zone.group === 'knob' || zone.group === 'button'

  const isHighlighted = highlightedZone === zone.id
  const isHovered = hoveredZone === zone.id
  const isGroupHovered = hoveredGroup === zone.id
  const isActive = isHighlighted || isHovered || isGroupHovered

  const color = groupColors[zone.group ?? ''] ?? '#0af'

  const zIndex = isSmall ? 20 : 5

  return (
    <Tooltip>
      <TooltipTrigger
        className={cn(
          'absolute cursor-pointer transition-all duration-100',
          isSmall && 'rounded-full',
        )}
        style={{
          left: zone.rect[0],
          top: zone.rect[1],
          width: zone.rect[2],
          height: zone.rect[3],
          zIndex,
          borderWidth: isActive ? (isSmall ? '2px' : '3px') : '1px',
          borderStyle: 'solid',
          borderColor: isActive ? color : 'transparent',
          background: isActive ? `${color}22` : 'transparent',
          boxShadow: isHighlighted
            ? `0 0 12px ${color}, 4px 4px 0 ${color}44`
            : (isHovered || isGroupHovered)
              ? `0 0 8px ${color}88`
              : 'none',
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
