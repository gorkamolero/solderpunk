'use client'

import { MessageBar } from '@/components/message-bar'
import { Panel } from '@/components/panel'
import { Sidebar } from '@/components/sidebar'
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
    <div className="flex flex-col h-screen overflow-hidden" style={{ background: '#f5f0e8' }}>
      <MessageBar />
      <div className="flex flex-1 overflow-hidden">
        <div className="flex-1 min-w-0 overflow-hidden">
          <Panel />
        </div>
        <div
          className="w-[3px] cursor-col-resize hover:bg-[#0af] transition-colors shrink-0"
          style={{ background: dragging ? '#0af' : '#1a1a1a' }}
          onMouseDown={handleMouseDown}
        />
        <div
          className="flex flex-col overflow-hidden shrink-0"
          style={{
            width: sidebarWidth,
            background: '#f5f0e8',
          }}
        >
          <Sidebar />
        </div>
      </div>
    </div>
  )
}
