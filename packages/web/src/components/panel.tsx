'use client'

import { useSynth } from '@/lib/synth-context'
import { PanelZone } from './panel-zone'
import { Legend } from './legend'

export function Panel() {
  const { config, zones, clearHighlight } = useSynth()

  return (
    <div className="flex flex-col h-full overflow-hidden">
      <div className="flex-1 flex items-center justify-center overflow-hidden bg-neo-charcoal">
        <div
          className="relative max-w-full max-h-full aspect-[1200/799]"
        >
          <img
            src={config.panelImage}
            alt={config.panelAlt}
            className="w-full h-full object-contain select-none border-none"
            draggable={false}
            onClick={(e) => {
              if (e.target === e.currentTarget) clearHighlight()
            }}
          />

          {zones.map((zone) => (
            <PanelZone key={zone.id} zone={zone} />
          ))}
        </div>
      </div>

      <Legend />
    </div>
  )
}
