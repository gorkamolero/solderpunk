'use client'

import { MessageBar } from '@/components/message-bar'
import { Panel } from '@/components/panel'
import { Sidebar } from '@/components/sidebar'
import { MidiBar } from '@/components/midi-bar'
import { MidiProvider } from '@/lib/use-midi'
import { useState, useCallback } from 'react'

export function ExplorerLayout() {
  const [sidebarWidth, setSidebarWidth] = useState(380)
  const [dragging, setDragging] = useState(false)

  const handleMouseDown = useCallback(() => {
    setDragging(true)
    const onMove = (e: MouseEvent) => {
      const newWidth = window.innerWidth - e.clientX
      setSidebarWidth(Math.max(280, Math.min(600, newWidth)))
    }
    const onUp = () => {
      setDragging(false)
      document.removeEventListener('mousemove', onMove)
      document.removeEventListener('mouseup', onUp)
      document.body.style.cursor = ''
      document.body.style.userSelect = ''
    }
    document.addEventListener('mousemove', onMove)
    document.addEventListener('mouseup', onUp)
    document.body.style.cursor = 'col-resize'
    document.body.style.userSelect = 'none'
  }, [])

  return (
    <MidiProvider>
      <div className="flex flex-col h-screen overflow-hidden bg-neo-cream">
        <MessageBar />
        <div className="flex flex-1 overflow-hidden">
          <div className="flex-1 min-w-0 overflow-hidden flex flex-col">
            <MidiBar />
            <div className="flex-1 min-h-0 overflow-hidden">
              <Panel />
            </div>
          </div>
          <div
            className={`w-[3px] cursor-col-resize hover:bg-neo-teal transition-colors shrink-0 ${dragging ? 'bg-neo-teal' : 'bg-neo-charcoal'}`}
            onMouseDown={handleMouseDown}
          />
          <div
            className="flex flex-col overflow-hidden shrink-0 bg-neo-cream"
            style={{ width: sidebarWidth }}
          >
            <Sidebar />
          </div>
        </div>
      </div>
    </MidiProvider>
  )
}
