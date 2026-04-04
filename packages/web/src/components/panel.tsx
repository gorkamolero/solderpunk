'use client'

import { useSynth } from '@/lib/synth-context'
import { PanelZone } from './panel-zone'
import { Legend } from './legend'

export function Panel() {
  const { config, zones, clearHighlight } = useSynth()

  return (
    <div className="flex flex-col h-full overflow-hidden">
      <div
        className="flex-1 flex items-center justify-center overflow-hidden p-3"
        style={{ background: '#e8e3db' }}
      >
        <div
          className="relative max-w-full max-h-full"
          style={{ aspectRatio: config.panelAspectRatio }}
        >
          <img
            src={config.panelImage}
            alt={config.panelAlt}
            className="w-full h-full object-contain select-none"
            style={{
              border: '4px solid #1a1a1a',
              boxShadow: '8px 8px 0 #1a1a1a',
            }}
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
