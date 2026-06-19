/** Shared types used by all synth explorers */

export interface Zone {
  id: string
  label: string
  tip: string
  rect: [string, string, string, string]
  group?: string
}

export interface TutorialStep {
  title?: string
  focus?: string
  body: string
}

export interface TutorialData {
  type: 'tutorial'
  steps: TutorialStep[]
}

export interface SeedLesson {
  title: string
  section_id: string
  tags: string
  content: TutorialData
}

export interface LegendItem {
  id: string
  label: string
  color: string
}

/** A single verified external place to get sounds/patches for a synth. */
export interface PatchLink {
  name: string
  url: string
  desc: string
  /** Short tag, e.g. "Free", "Paid", "Forum", "Official". */
  badge?: string
}

/** One section of the Patches tab. A synth can combine several (e.g. a live feed + curated links). */
export type PatchSource =
  /** Live feed from the Patchstorage community API (ZOIA, Hector). */
  | { type: 'patchstorage'; platformId: number; platformUrl: string }
  /** Live feed from midi.link's public Firestore (Tempest). */
  | { type: 'midilink'; instrumentPath: string; browseUrl: string }
  /** Hand-curated, link-verified external sources. */
  | { type: 'links'; intro?: string; groups: { heading: string; color: string; items: PatchLink[] }[] }

export interface SynthConfig {
  id: string
  name: string
  description: string
  panelImage: string
  panelAspectRatio: string
  panelAlt: string
  defaultMessage: string
  zones: Zone[]
  legendItems: LegendItem[]
  lessons: SeedLesson[]
  /** Optional zone-id -> MIDI CC number map. Present for synths the explorer can drive
   *  over Web MIDI (Minitaur, Grandmother). When set, those zones become CC senders. */
  ccMap?: Record<string, number>
  /** Default MIDI channel (1-16) to send on. Defaults to 1. */
  midiChannel?: number
  /** Source(s) for the Patches tab: one section, or several rendered in order. */
  patchSource?: PatchSource | PatchSource[]
}
