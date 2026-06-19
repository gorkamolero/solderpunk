'use client'

import { useMidi } from '@/lib/use-midi'
import { useSynth } from '@/lib/synth-context'

export function MidiBar() {
  const { config } = useSynth()
  const { enabled, outputs, outputId, channel, status, enable, disable, setOutputId, setChannel } = useMidi()

  // Only synths with a CC map can be driven over MIDI.
  if (!config.ccMap) return null

  const ccCount = Object.keys(config.ccMap).length

  return (
    <div className="flex items-center gap-3 px-4 py-2 bg-neo-charcoal border-b-2 border-neo-charcoal text-[11px] font-bold uppercase tracking-wider">
      <span className="text-neo-teal">{'◈'} MIDI OUT</span>

      {!enabled ? (
        <>
          <button
            onClick={() => void enable()}
            className="px-2 py-1 bg-neo-teal text-neo-charcoal border-2 border-neo-charcoal shadow-[2px_2px_0_var(--color-neo-teal)] hover:translate-x-[-1px] hover:translate-y-[-1px] transition-transform cursor-pointer"
          >
            Connect
          </button>
          <span className="text-neutral-400 normal-case tracking-normal">
            Drive your real {config.name} from the panel ({ccCount} CC-mapped controls)
          </span>
        </>
      ) : (
        <>
          <label className="flex items-center gap-1 text-neutral-400">
            Out
            <select
              value={outputId ?? ''}
              onChange={(e) => setOutputId(e.target.value)}
              className="bg-black text-neo-teal border border-neo-teal px-1 py-0.5 max-w-[180px]"
            >
              {outputs.length === 0 && <option value="">none</option>}
              {outputs.map((o) => (
                <option key={o.id} value={o.id}>
                  {o.name}
                </option>
              ))}
            </select>
          </label>
          <label className="flex items-center gap-1 text-neutral-400">
            Ch
            <select
              value={channel}
              onChange={(e) => setChannel(Number(e.target.value))}
              className="bg-black text-neo-teal border border-neo-teal px-1 py-0.5"
            >
              {Array.from({ length: 16 }, (_, i) => i + 1).map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
          </label>
          <span className="text-neutral-400 normal-case tracking-normal">drag a glowing knob ↕ to send CC</span>
          <button onClick={disable} className="text-neutral-500 hover:text-neo-coral cursor-pointer ml-auto">
            disconnect
          </button>
        </>
      )}

      {status && <span className="text-neutral-500 normal-case tracking-normal ml-auto">{status}</span>}
    </div>
  )
}
