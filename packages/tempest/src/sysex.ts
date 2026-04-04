/**
 * Tempest SysEx sound engine.
 *
 * Handles bit-level packing and unpacking of the 157-byte sound SysEx message.
 * The Tempest uses 7-bit SysEx bytes with parameters scattered across
 * non-contiguous bit positions — this class abstracts that complexity.
 */

import { PARAMS, type ParamDef } from './params.js'

const SYSEX_LENGTH = 157
const HEADER = [0xF0, 0x01, 0x28, 0x60] // F0=SysEx, 01=DSI, 28=Tempest, 60=Sound
const FOOTER = 0xF7

// Known fixed bytes
const FIXED_BYTES: Record<number, number> = {
  112: 0x18,
}

export class TempestSound {
  /** The raw 157-byte SysEx message buffer */
  private data: Uint8Array

  private constructor(data: Uint8Array) {
    this.data = data
  }

  /** Create a blank/init sound (header + footer + fixed bytes, all params at 0) */
  static init(): TempestSound {
    const data = new Uint8Array(SYSEX_LENGTH)
    // Header
    data[0] = HEADER[0]
    data[1] = HEADER[1]
    data[2] = HEADER[2]
    data[3] = HEADER[3]
    // Footer
    data[SYSEX_LENGTH - 1] = FOOTER
    // Fixed bytes
    for (const [idx, val] of Object.entries(FIXED_BYTES)) {
      data[Number(idx)] = val
    }
    return new TempestSound(data)
  }

  /** Parse a TempestSound from a raw SysEx byte array */
  static fromBytes(bytes: Uint8Array | number[]): TempestSound {
    const data = bytes instanceof Uint8Array ? bytes.slice() : new Uint8Array(bytes)
    if (data.length !== SYSEX_LENGTH) {
      throw new Error(`Expected ${SYSEX_LENGTH} bytes, got ${data.length}`)
    }
    if (data[0] !== 0xF0 || data[data.length - 1] !== 0xF7) {
      throw new Error('Invalid SysEx: missing F0 header or F7 footer')
    }
    return new TempestSound(data)
  }

  /** Get the raw SysEx bytes (copy) */
  toBytes(): Uint8Array {
    return this.data.slice()
  }

  /** Read a parameter value by name */
  get(name: string): number {
    const param = this.resolveParam(name)
    return this.readParam(param)
  }

  /** Write a parameter value by name */
  set(name: string, value: number): void {
    const param = this.resolveParam(name)
    if (value < param.min || value > param.max) {
      throw new RangeError(
        `${name}: value ${value} out of range [${param.min}, ${param.max}]`
      )
    }
    this.writeParam(param, value)
  }

  /** Get all parameter values as a flat object */
  getAll(): Record<string, number> {
    const result: Record<string, number> = {}
    for (const name of Object.keys(PARAMS)) {
      result[name] = this.get(name)
    }
    return result
  }

  /** Set multiple parameters at once */
  setAll(values: Record<string, number>): void {
    for (const [name, value] of Object.entries(values)) {
      this.set(name, value)
    }
  }

  /** Get a display-formatted value (applies offset) */
  getDisplay(name: string): number {
    const param = this.resolveParam(name)
    const raw = this.readParam(param)
    return raw + (param.displayOffset ?? 0)
  }

  // ─── Private ───────────────────────────────────

  private resolveParam(name: string): ParamDef {
    const param = PARAMS[name]
    if (!param) {
      throw new Error(`Unknown parameter: ${name}`)
    }
    return param
  }

  /**
   * Read a parameter's value by gathering its scattered bits.
   *
   * For each param bit (0=LSB to N=MSB), read the corresponding
   * byte.bit location and assemble the integer value.
   */
  private readParam(param: ParamDef): number {
    let value = 0
    for (let i = 0; i < param.bits.length; i++) {
      const loc = param.bits[i]
      const byteVal = this.data[loc.byte]
      const bitVal = (byteVal >> loc.bit) & 1
      value |= bitVal << i
    }
    return value
  }

  /**
   * Write a parameter's value by scattering its bits to their locations.
   *
   * For each param bit, set or clear the corresponding byte.bit
   * without disturbing other bits in that byte.
   */
  private writeParam(param: ParamDef, value: number): void {
    for (let i = 0; i < param.bits.length; i++) {
      const loc = param.bits[i]
      const bitVal = (value >> i) & 1
      if (bitVal) {
        this.data[loc.byte] |= (1 << loc.bit)
      } else {
        this.data[loc.byte] &= ~(1 << loc.bit)
      }
    }
  }
}
