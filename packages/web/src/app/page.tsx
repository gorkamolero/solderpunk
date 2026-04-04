'use client'

import {
  ResizablePanelGroup,
  ResizablePanel,
  ResizableHandle,
} from '@/components/ui/resizable'
import { MessageBar } from '@/components/message-bar'
import { Panel } from '@/components/panel'
import { Sidebar } from '@/components/sidebar'

export default function Home() {
  return (
    <div className="flex flex-col h-screen overflow-hidden" style={{ background: '#f5f0e8' }}>
      <MessageBar />

      <div className="flex flex-1 overflow-hidden">
        <div className="flex-1 min-w-0 overflow-hidden">
          <Panel />
        </div>
        <div
          className="flex flex-col overflow-hidden"
          style={{
            width: '380px',
            minWidth: '300px',
            background: '#f5f0e8',
            borderLeft: '3px solid #1a1a1a',
          }}
        >
          <Sidebar />
        </div>
      </div>
    </div>
  )
}
