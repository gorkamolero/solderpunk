// Re-export shared types for backward compatibility
export type { Zone, TutorialStep, TutorialData, SeedLesson, LegendItem } from '@/lib/shared-types'

export interface Lesson {
  id: number
  title: string
  section_id: string
  tags: string
  content: string
  created_at: string
  updated_at: string
}
