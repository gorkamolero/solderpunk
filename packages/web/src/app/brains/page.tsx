'use client'

import { SynthProvider } from '@/lib/synth-context'
import { ExplorerLayout } from '@/components/explorer-layout'
import { brainsConfig } from '@/lib/brains/config'

export default function BrainsPage() {
  return (
    <SynthProvider config={brainsConfig}>
      <ExplorerLayout />
    </SynthProvider>
  )
}
