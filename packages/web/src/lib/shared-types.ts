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
}
