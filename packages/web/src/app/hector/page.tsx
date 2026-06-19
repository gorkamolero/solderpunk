'use client'

import { SynthProvider } from '@/lib/synth-context'
import { ExplorerLayout } from '@/components/explorer-layout'
import { hectorConfig } from '@/lib/hector/config'

export default function HectorPage() {
  return (
    <SynthProvider config={hectorConfig}>
      <ExplorerLayout />
    </SynthProvider>
  )
}
