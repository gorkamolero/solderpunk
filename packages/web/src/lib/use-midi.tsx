'use client'

import { createContext, useContext, useState, useCallback, useMemo, type ReactNode } from 'react'

// Minimal Web MIDI typing (avoids a @types/webmidi dependency and `any`).
interface MIDIOutputLike {
  id: string
  name?: string
  send(data: number[]): void
}
interface MIDIAccessLike {
  outputs: {
    forEach(cb: (o: MIDIOutputLike) => void): void
    get(id: string): MIDIOutputLike | undefined
  }
  onstatechange: (() => void) | null
}
type RequestMIDIAccess = (opts?: { sysex?: boolean }) => Promise<MIDIAccessLike>

interface MidiOutputInfo {
  id: string
  name: string
}

interface MidiContextValue {
  supported: boolean
  enabled: boolean
  outputs: MidiOutputInfo[]
  outputId: string | null
  channel: number
  status: string
  enable: () => Promise<void>
  disable: () => void
  setOutputId: (id: string) => void
  setChannel: (ch: number) => void
  /** Send a Control Change (cc 0-127, value 0-127) to the selected output/channel. */
  sendCC: (cc: number, value: number) => void
}

const MidiContext = createContext<MidiContextValue | null>(null)

function getRequestMIDIAccess(): RequestMIDIAccess | undefined {
  if (typeof navigator === 'undefined') return undefined
  return (navigator as unknown as { requestMIDIAccess?: RequestMIDIAccess }).requestMIDIAccess
}

export function MidiProvider({ children }: { children: ReactNode }) {
  const [supported] = useState(() => getRequestMIDIAccess() !== undefined)
  const [access, setAccess] = useState<MIDIAccessLike | null>(null)
  const [enabled, setEnabled] = useState(false)
  const [outputs, setOutputs] = useState<MidiOutputInfo[]>([])
  const [outputId, setOutputIdState] = useState<string | null>(null)
  const [channel, setChannel] = useState(1)
  const [status, setStatus] = useState('')

  const refreshOutputs = useCallback((acc: MIDIAccessLike) => {
    const outs: MidiOutputInfo[] = []
    acc.outputs.forEach((o) => outs.push({ id: o.id, name: o.name ?? o.id }))
    setOutputs(outs)
    setOutputIdState((prev) => prev ?? outs[0]?.id ?? null)
    setStatus(outs.length ? `${outs.length} MIDI output${outs.length > 1 ? 's' : ''}` : 'No MIDI outputs found')
  }, [])

  const enable = useCallback(async () => {
    const req = getRequestMIDIAccess()
    if (!req) {
      setStatus('Web MIDI not supported (use Chrome/Edge)')
      return
    }
    try {
      const acc = await req({ sysex: false })
      setAccess(acc)
      refreshOutputs(acc)
      acc.onstatechange = () => refreshOutputs(acc)
      setEnabled(true)
    } catch {
      setStatus('MIDI access denied')
    }
  }, [refreshOutputs])

  const disable = useCallback(() => {
    setEnabled(false)
    setStatus('')
  }, [])

  const setOutputId = useCallback((id: string) => setOutputIdState(id), [])

  const sendCC = useCallback(
    (cc: number, value: number) => {
      if (!access || !outputId) return
      const out = access.outputs.get(outputId)
      if (!out) return
      const v = Math.max(0, Math.min(127, Math.round(value)))
      out.send([0xb0 | ((channel - 1) & 0x0f), cc & 0x7f, v])
    },
    [access, outputId, channel],
  )

  const value = useMemo<MidiContextValue>(
    () => ({ supported, enabled, outputs, outputId, channel, status, enable, disable, setOutputId, setChannel, sendCC }),
    [supported, enabled, outputs, outputId, channel, status, enable, disable, setOutputId, sendCC],
  )

  return <MidiContext.Provider value={value}>{children}</MidiContext.Provider>
}

export function useMidi() {
  const ctx = useContext(MidiContext)
  if (!ctx) throw new Error('useMidi must be used within MidiProvider')
  return ctx
}
