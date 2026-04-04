'use client'

import Image from 'next/image'
import { useSynth } from '@/lib/synth-context'
import { PanelZone } from './panel-zone'
import { Legend } from './legend'

export function Panel() {
  const { zones, clearHighlight } = useSynth()

  return (
    <div className="flex flex-col h-full">
      <div
        className="relative flex-1 flex items-center justify-center overflow-auto"
        style={{ background: '#e8e3db', padding: '8px' }}
      >
        <div
          className="relative shrink-0"
          style={{
            width: 'min(100%, 1000px)',
            aspectRatio: '1200 / 799',
          }}
        >
          {/* Panel image */}
          <img
            src="/panel-nobg.png"
            alt="DSI Tempest front panel"
            className="w-full h-full block select-none"
            style={{
              border: '4px solid #1a1a1a',
              boxShadow: '8px 8px 0 #1a1a1a',
            }}
            draggable={false}
            onClick={(e) => {
              if (e.target === e.currentTarget) clearHighlight()
            }}
          />

          {/* Zone overlays */}
          {zones.map((zone) => (
            <PanelZone key={zone.id} zone={zone} />
          ))}
        </div>
      </div>

      {/* Legend below panel */}
      <Legend />
    </div>
  )
}
