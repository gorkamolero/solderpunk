'use client'

import { SynthProvider } from '@/lib/synth-context'
import { ExplorerLayout } from '@/components/explorer-layout'
import { tetraConfig } from '@/lib/tetra/config'

export default function TetraPage() {
  return (
    <SynthProvider config={tetraConfig}>
      <ExplorerLayout />
    </SynthProvider>
  )
}
