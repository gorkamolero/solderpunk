'use client'

import { SynthProvider } from '@/lib/synth-context'
import { ExplorerLayout } from '@/components/explorer-layout'
import { grandmotherConfig } from '@/lib/grandmother/config'

export default function GrandmotherPage() {
  return (
    <SynthProvider config={grandmotherConfig}>
      <ExplorerLayout />
    </SynthProvider>
  )
}
