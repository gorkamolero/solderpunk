'use client'

import { useRef, useState, type PointerEvent } from 'react'
import { useSynth } from '@/lib/synth-context'
import { useMidi } from '@/lib/use-midi'
import { Tooltip, TooltipTrigger, TooltipContent } from '@/components/ui/tooltip'
import { cn } from '@/lib/utils'
import type { Zone } from '@/lib/shared-types'

export function PanelZone({ zone }: { zone: Zone }) {
  const { config, highlightedZone, hoveredZone, hoveredGroup, highlight, setHovered, showMessage } = useSynth()
  const midi = useMidi()
  const cc = config.ccMap?.[zone.id]
  const midiActive = midi.enabled && cc !== undefined

  const isSmall = zone.group === 'knob' || zone.group === 'button'
  const isHighlighted = highlightedZone === zone.id
  const isHovered = hoveredZone === zone.id
  const isGroupHovered = hoveredGroup === zone.id
  const isActive = isHighlighted || isHovered || isGroupHovered

  const [value, setValue] = useState(64)
  const valueRef = useRef(64)
  const draggingRef = useRef(false)
  const lastYRef = useRef(0)
  const movedRef = useRef(false)

  function onPointerDown(e: PointerEvent<HTMLButtonElement>) {
    if (!midiActive) return
    draggingRef.current = true
    movedRef.current = false
    lastYRef.current = e.clientY
    e.currentTarget.setPointerCapture(e.pointerId)
  }
  function onPointerMove(e: PointerEvent<HTMLButtonElement>) {
    if (!draggingRef.current || cc === undefined) return
    const dy = lastYRef.current - e.clientY // drag up = increase
    if (dy !== 0) movedRef.current = true
    lastYRef.current = e.clientY
    const nv = Math.max(0, Math.min(127, valueRef.current + dy))
    valueRef.current = nv
    setValue(nv)
    midi.sendCC(cc, nv)
  }
  function onPointerUp(e: PointerEvent<HTMLButtonElement>) {
    if (!draggingRef.current) return
    draggingRef.current = false
    e.currentTarget.releasePointerCapture(e.pointerId)
  }

  return (
    <Tooltip>
      <TooltipTrigger
        className={cn(
          'absolute transition-all duration-100',
          isSmall ? 'z-20 rounded-full' : 'z-[5]',
          midiActive ? 'cursor-ns-resize' : 'cursor-pointer',
          isActive && 'border-neo-teal bg-neo-teal/10 shadow-[0_0_8px_var(--color-neo-teal)]',
          isHighlighted && 'shadow-[0_0_12px_var(--color-neo-teal),4px_4px_0_var(--color-neo-teal)/30]',
          // MIDI mode: outline every CC-mapped zone so the user sees what's draggable
          midiActive && !isActive && 'border-2 border-neo-teal/50',
          !isActive && !midiActive && 'border-transparent',
          isActive ? (isSmall ? 'border-2' : 'border-[3px]') : !midiActive ? 'border' : '',
        )}
        style={{
          left: zone.rect[0],
          top: zone.rect[1],
          width: zone.rect[2],
          height: zone.rect[3],
          touchAction: midiActive ? 'none' : undefined,
        }}
        onMouseEnter={() => {
          setHovered(zone.id)
          showMessage(`${zone.label} — ${zone.tip}${midiActive ? ` · CC ${cc}` : ''}`)
        }}
        onMouseLeave={() => setHovered(null)}
        onClick={() => {
          if (movedRef.current) {
            movedRef.current = false
            return
          }
          highlight(isHighlighted ? null : zone.id)
        }}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
      >
        {isActive && !isSmall && (
          <span className="absolute -top-6 left-0 px-1 py-0.5 text-[10px] font-bold uppercase tracking-wider whitespace-nowrap pointer-events-none bg-neo-teal text-neo-charcoal border-2 border-neo-charcoal shadow-[2px_2px_0_var(--color-neo-charcoal)]">
            {zone.label}
          </span>
        )}
        {midiActive && isActive && (
          <span className="absolute -bottom-5 left-1/2 -translate-x-1/2 px-1 text-[9px] font-bold tabular-nums rounded pointer-events-none bg-neo-teal text-neo-charcoal">
            {value}
          </span>
        )}
      </TooltipTrigger>
      <TooltipContent side="top" sideOffset={8}>
        <div className="max-w-xs">
          <div className="font-bold uppercase text-xs text-neo-teal">
            {zone.label}
            {midiActive ? ` · CC ${cc}` : ''}
          </div>
          <div className="text-[11px] mt-0.5">{zone.tip}</div>
        </div>
      </TooltipContent>
    </Tooltip>
  )
}
