// Grandmother MIDI CC map — zone id -> CC number.
// Sourced from research/grandmother (the manual's MIDI CC list). NOTE: unlike the
// Minitaur, most Grandmother panel knobs are analog-only and have NO CC — only the
// handful below are MIDI-controllable, so this map is intentionally sparse.
export const ccMap: Record<string, number> = {
  'mod-rate': 3,         // CC3  Mod (LFO) Rate
  'osc-osc2-freq': 12,   // CC12 Oscillator 2 Frequency
  'osc-osc1-octave': 74, // CC74 Osc 1 octave
  'osc-osc2-octave': 75, // CC75 Osc 2 octave
  'osc-sync': 77,        // CC77 Oscillator 2 Sync
  'arp-rate': 8,         // CC8  Arp/Seq Rate
  'arp-direction': 92,   // CC92 Arp/Seq Direction / Pattern
}
