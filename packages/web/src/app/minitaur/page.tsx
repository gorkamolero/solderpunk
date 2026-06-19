'use client'

import { SynthProvider } from '@/lib/synth-context'
import { ExplorerLayout } from '@/components/explorer-layout'
import { minitaurConfig } from '@/lib/minitaur/config'

export default function MinitaurPage() {
  return (
    <SynthProvider config={minitaurConfig}>
      <ExplorerLayout />
    </SynthProvider>
  )
}
