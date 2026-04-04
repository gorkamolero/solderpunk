/** Tetra NRPN MIDI engine — real-time parameter control.
 *  Unlike the Tempest (SysEx dump/modify/send), the Tetra responds
 *  to NRPN messages instantly. Every parameter is controllable live. */

import midi from 'midi'
import { PARAMS, LAYER_B_OFFSET, COMBO_OFFSETS, type TetraParam } from './params.js'

export class TetraMidi {
  private output: InstanceType<typeof midi.Output>
  private channel: number

  constructor(portIndex = 0, channel = 0) {
    this.output = new midi.Output()
    this.output.openPort(portIndex)
    this.channel = channel
  }

  sendNRPN(nrpn: number, value: number) {
    const msb = (nrpn >> 7) & 0x7F
    const lsb = nrpn & 0x7F
    const valMsb = (value >> 7) & 0x7F
    const valLsb = value & 0x7F

    this.output.sendMessage([0xB0 | this.channel, 99, msb])
    this.output.sendMessage([0xB0 | this.channel, 98, lsb])
    this.output.sendMessage([0xB0 | this.channel, 6, valMsb])
    this.output.sendMessage([0xB0 | this.channel, 38, valLsb])
  }

  set(paramName: string, value: number, layer: 'a' | 'b' = 'a') {
    const param = PARAMS[paramName]
    if (!param) throw new Error(`Unknown parameter: ${paramName}`)
    if (value < param.min || value > param.max) {
      throw new RangeError(`${paramName}: ${value} out of range [${param.min}, ${param.max}]`)
    }

    let nrpn = param.nrpn
    if (layer === 'b') nrpn += LAYER_B_OFFSET

    this.sendNRPN(nrpn, value)
  }

  setComboVoice(paramName: string, value: number, voice: 1 | 2 | 3 | 4) {
    const param = PARAMS[paramName]
    if (!param) throw new Error(`Unknown parameter: ${paramName}`)

    const offsets = [0, COMBO_OFFSETS.voice1, COMBO_OFFSETS.voice2, COMBO_OFFSETS.voice3, COMBO_OFFSETS.voice4]
    const nrpn = param.nrpn + offsets[voice]

    this.sendNRPN(nrpn, value)
  }

  noteOn(note: number, velocity = 100) {
    this.output.sendMessage([0x90 | this.channel, note, velocity])
  }

  noteOff(note: number) {
    this.output.sendMessage([0x80 | this.channel, note, 0])
  }

  setChannel(ch: number) {
    this.channel = Math.max(0, Math.min(15, ch))
  }

  close() {
    this.output.closePort()
  }
}

export function listPorts(): string[] {
  const output = new midi.Output()
  const ports: string[] = []
  for (let i = 0; i < output.getPortCount(); i++) {
    ports.push(output.getPortName(i))
  }
  output.closePort()
  return ports
}
