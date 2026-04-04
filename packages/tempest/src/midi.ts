/**
 * MIDI transport for communicating with the Tempest over USB.
 *
 * Uses node-midi (RtMidi) for cross-platform MIDI I/O.
 * Handles SysEx send/receive with the Tempest's expected protocol.
 */

import midi from 'midi'

const DSI_MANUFACTURER = 0x01
const TEMPEST_DEVICE = 0x28

// SysEx command bytes
const CMD_SOUND_DUMP = 0x60
const CMD_REQUEST_SOUND = 0x62

export interface MidiPort {
  name: string
  index: number
}

/** List available MIDI input ports */
export function listInputs(): MidiPort[] {
  const input = new midi.Input()
  const ports: MidiPort[] = []
  for (let i = 0; i < input.getPortCount(); i++) {
    ports.push({ name: input.getPortName(i), index: i })
  }
  input.closePort()
  return ports
}

/** List available MIDI output ports */
export function listOutputs(): MidiPort[] {
  const output = new midi.Output()
  const ports: MidiPort[] = []
  for (let i = 0; i < output.getPortCount(); i++) {
    ports.push({ name: output.getPortName(i), index: i })
  }
  output.closePort()
  return ports
}

/** Find a port by name substring (case-insensitive) */
function findPort(ports: MidiPort[], search: string): MidiPort | undefined {
  const lower = search.toLowerCase()
  return ports.find(p => p.name.toLowerCase().includes(lower))
}

export class TempestMidi {
  private input: InstanceType<typeof midi.Input>
  private output: InstanceType<typeof midi.Output>
  private inputPort: MidiPort
  private outputPort: MidiPort

  private constructor(
    input: InstanceType<typeof midi.Input>,
    output: InstanceType<typeof midi.Output>,
    inputPort: MidiPort,
    outputPort: MidiPort
  ) {
    this.input = input
    this.output = output
    this.inputPort = inputPort
    this.outputPort = outputPort
  }

  /**
   * Connect to the Tempest.
   * Auto-detects ports by name, or accepts explicit port names/indices.
   */
  static connect(opts?: { input?: string | number; output?: string | number }): TempestMidi {
    const inputs = listInputs()
    const outputs = listOutputs()

    let inPort: MidiPort | undefined
    let outPort: MidiPort | undefined

    if (opts?.input !== undefined) {
      inPort = typeof opts.input === 'number'
        ? inputs[opts.input]
        : findPort(inputs, opts.input)
    } else {
      inPort = findPort(inputs, 'tempest')
    }

    if (opts?.output !== undefined) {
      outPort = typeof opts.output === 'number'
        ? outputs[opts.output]
        : findPort(outputs, opts.output)
    } else {
      outPort = findPort(outputs, 'tempest')
    }

    if (!inPort) {
      const available = inputs.map(p => `  ${p.index}: ${p.name}`).join('\n')
      throw new Error(`Tempest MIDI input not found.\nAvailable inputs:\n${available}`)
    }

    if (!outPort) {
      const available = outputs.map(p => `  ${p.index}: ${p.name}`).join('\n')
      throw new Error(`Tempest MIDI output not found.\nAvailable outputs:\n${available}`)
    }

    const input = new midi.Input()
    const output = new midi.Output()

    // Enable SysEx, disable MIDI timing, disable active sensing
    input.ignoreTypes(false, true, true)

    input.openPort(inPort.index)
    output.openPort(outPort.index)

    return new TempestMidi(input, output, inPort, outPort)
  }

  get portNames() {
    return { input: this.inputPort.name, output: this.outputPort.name }
  }

  /** Send raw SysEx bytes to the Tempest */
  sendSysEx(data: Uint8Array | number[]): void {
    const arr = data instanceof Uint8Array ? Array.from(data) : data
    this.output.sendMessage(arr)
  }

  /**
   * Listen for a sound dump from the Tempest.
   * The Tempest cannot be queried — you must initiate the dump
   * from the hardware: Save/Load → Export, or edit a sound (sends 0x60).
   *
   * Accepts both RAM sounds (0x60) and flash sounds (0x63).
   */
  waitForSoundDump(timeoutMs = 30000): Promise<Uint8Array> {
    return new Promise((resolve, reject) => {
      const timer = setTimeout(() => {
        this.input.removeAllListeners('message')
        reject(new Error(
          `Timeout: no SysEx dump received after ${timeoutMs / 1000}s.\n` +
          `The Tempest cannot be queried — you must send the dump FROM the Tempest:\n` +
          `  Save/Load → choose sound → Export via MIDI/USB`
        ))
      }, timeoutMs)

      const sysexBuffer: number[] = []

      this.input.on('message', (_deltaTime: number, message: number[]) => {
        for (const byte of message) {
          if (byte === 0xF0) {
            sysexBuffer.length = 0
            sysexBuffer.push(byte)
          } else if (sysexBuffer.length > 0) {
            sysexBuffer.push(byte)
            if (byte === 0xF7) {
              if (
                sysexBuffer[1] === DSI_MANUFACTURER &&
                sysexBuffer[2] === TEMPEST_DEVICE &&
                (sysexBuffer[3] === CMD_SOUND_DUMP || sysexBuffer[3] === CMD_SOUND_FLASH)
              ) {
                clearTimeout(timer)
                this.input.removeAllListeners('message')
                resolve(new Uint8Array(sysexBuffer))
              }
            }
          }
        }
      })

      console.log('Waiting for SysEx dump from Tempest...')
      console.log('On the Tempest: Save/Load → select sound → Export via MIDI/USB')
    })
  }

  /** Close MIDI ports */
  close(): void {
    this.input.closePort()
    this.output.closePort()
  }
}
