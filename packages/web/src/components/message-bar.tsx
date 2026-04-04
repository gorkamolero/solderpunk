'use client'

import { useSynth } from '@/lib/synth-context'

export function MessageBar() {
  const { message } = useSynth()

  return (
    <div className="w-full px-4 py-1 text-sm font-bold uppercase tracking-wider bg-neo-charcoal text-neo-teal border-b-[3px] border-neo-border">
      <div className="flex items-center gap-3">
        <span className="text-neo-coral text-[0.65rem] leading-none">{'///'}</span>
        <span className="truncate">{message}</span>
        <span className="ml-auto shrink-0 text-neo-coral text-[0.65rem] leading-none">SOLDERPUNK</span>
      </div>
    </div>
  )
}
