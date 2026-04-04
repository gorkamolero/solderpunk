'use client'

import { useSynth } from '@/lib/synth-context'
import { Tooltip, TooltipTrigger, TooltipContent } from '@/components/ui/tooltip'
import { cn } from '@/lib/utils'
import type { Zone } from '@/lib/shared-types'

export function PanelZone({ zone }: { zone: Zone }) {
  const { highlightedZone, hoveredZone, hoveredGroup, highlight, setHovered, showMessage } = useSynth()

  const isSmall = zone.group === 'knob' || zone.group === 'button'
  const isHighlighted = highlightedZone === zone.id
  const isHovered = hoveredZone === zone.id
  const isGroupHovered = hoveredGroup === zone.id
  const isActive = isHighlighted || isHovered || isGroupHovered

  return (
    <Tooltip>
      <TooltipTrigger
        className={cn(
          'absolute cursor-pointer transition-all duration-100',
          isSmall ? 'z-20 rounded-full' : 'z-[5]',
          isActive && 'border-neo-teal bg-neo-teal/10 shadow-[0_0_8px_var(--color-neo-teal)]',
          isHighlighted && 'shadow-[0_0_12px_var(--color-neo-teal),4px_4px_0_var(--color-neo-teal)/30]',
          !isActive && 'border-transparent',
          isActive ? (isSmall ? 'border-2' : 'border-[3px]') : 'border',
        )}
        style={{
          left: zone.rect[0],
          top: zone.rect[1],
          width: zone.rect[2],
          height: zone.rect[3],
        }}
        onMouseEnter={() => {
          setHovered(zone.id)
          showMessage(`${zone.label} — ${zone.tip}`)
        }}
        onMouseLeave={() => setHovered(null)}
        onClick={() => highlight(isHighlighted ? null : zone.id)}
      >
        {isActive && !isSmall && (
          <span className="absolute -top-6 left-0 px-1 py-0.5 text-[10px] font-bold uppercase tracking-wider whitespace-nowrap pointer-events-none bg-neo-teal text-neo-charcoal border-2 border-neo-charcoal shadow-[2px_2px_0_var(--color-neo-charcoal)]">
            {zone.label}
          </span>
        )}
      </TooltipTrigger>
      <TooltipContent side="top" sideOffset={8}>
        <div className="max-w-xs">
          <div className="font-bold uppercase text-xs text-neo-teal">{zone.label}</div>
          <div className="text-[11px] mt-0.5">{zone.tip}</div>
        </div>
      </TooltipContent>
    </Tooltip>
  )
}
