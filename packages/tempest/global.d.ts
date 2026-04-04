declare module 'midi' {
  class Input {
    getPortCount(): number
    getPortName(index: number): string
    openPort(index: number): void
    closePort(): void
    ignoreTypes(sysex: boolean, timing: boolean, activeSensing: boolean): void
    on(event: 'message', callback: (deltaTime: number, message: number[]) => void): void
    removeAllListeners(event: string): void
  }

  class Output {
    getPortCount(): number
    getPortName(index: number): string
    openPort(index: number): void
    closePort(): void
    sendMessage(message: number[]): void
  }

  const _default: { Input: typeof Input; Output: typeof Output }
  export default _default
}
