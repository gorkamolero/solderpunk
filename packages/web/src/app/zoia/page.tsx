'use client'

import { SynthProvider } from '@/lib/synth-context'
import { ExplorerLayout } from '@/components/explorer-layout'
import { zoiaConfig } from '@/lib/zoia/config'

export default function ZoiaPage() {
  return (
    <SynthProvider config={zoiaConfig}>
      <ExplorerLayout />
    </SynthProvider>
  )
}
