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

      <ResizablePanelGroup orientation="horizontal" className="flex-1">
        <ResizablePanel defaultSize={65} minSize={40}>
          <Panel />
        </ResizablePanel>

        <ResizableHandle withHandle />

        <ResizablePanel defaultSize={35} minSize={20} maxSize={50}>
          <div
            className="h-full flex flex-col overflow-hidden"
            style={{
              background: '#f5f0e8',
              borderLeft: '3px solid #1a1a1a',
            }}
          >
            <Sidebar />
          </div>
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  )
}
