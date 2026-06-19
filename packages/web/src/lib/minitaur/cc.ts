// Minitaur MIDI CC map — zone id -> CC number.
// Sourced from research/minitaur (midi.guide / the Minitaur MIDI implementation chart):
// every front-panel control except Fine Tune is a CC. 7-bit values 0-127.
export const ccMap: Record<string, number> = {
  // oscillators
  'osc-wave1': 70,     // VCO1 Wave (0-63 saw / 64-127 square)
  'osc-wave2': 71,     // VCO2 Wave
  'vco2-freq': 17,     // VCO2 Frequency
  // mixer
  'mix-vco1': 15,      // VCO1 Level
  'mix-vco2': 16,      // VCO2 Level
  // filter
  'filter-cutoff': 19, // Cutoff
  'filter-res': 21,    // Resonance
  'filter-eg': 22,     // EG Amount
  // filter envelope
  'env-fenv-attack': 23,   // VCF Attack
  'env-fenv-decay': 24,    // VCF Decay/Release
  'env-fenv-sustain': 25,  // VCF Sustain
  // amp envelope
  'env-aenv-attack': 28,   // VCA Attack
  'env-aenv-decay': 29,    // VCA Decay/Release
  'env-aenv-sustain': 30,  // VCA Sustain
  // mod / LFO
  'mod-lfo-rate': 3,   // LFO Rate
  'mod-vco-lfo': 13,   // LFO -> VCO Amount
  'mod-vcf-lfo': 12,   // LFO -> VCF Amount
  // master / glide / switches
  'vca-volume': 7,     // VCA Volume
  'glide-rate': 5,     // Glide Rate
  'glide-on': 65,      // Glide Switch (0 off / 127 on)
  'vca-release': 72,   // Release Switch
}
