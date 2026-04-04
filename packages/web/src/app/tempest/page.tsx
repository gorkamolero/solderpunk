'use client'

import { SynthProvider } from '@/lib/synth-context'
import { ExplorerLayout } from '@/components/explorer-layout'
import { tempestConfig } from '@/lib/tempest/config'

export default function TempestPage() {
  return (
    <SynthProvider config={tempestConfig}>
      <ExplorerLayout />
    </SynthProvider>
  )
}
