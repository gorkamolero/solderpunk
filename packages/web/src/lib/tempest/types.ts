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

export interface Lesson {
  id: number
  title: string
  section_id: string
  tags: string
  content: string
  created_at: string
  updated_at: string
}
