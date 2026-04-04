'use client'

import { useSynth } from '@/lib/synth-context'
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Badge } from '@/components/ui/badge'
import { TutorialView } from './tutorial-view'
import { BookOpen, Disc3 } from 'lucide-react'
import type { SeedLesson } from '@/lib/tempest/types'

function LessonCard({ lesson }: { lesson: SeedLesson }) {
  const { startTutorial } = useSynth()
  const tags = lesson.tags.split(',')
  const stepCount = lesson.content.steps.length

  return (
    <button
      className="w-full text-left p-3 cursor-pointer"
      style={{
        background: '#f5f0e8',
        border: '3px solid #1a1a1a',
        boxShadow: '4px 4px 0 #1a1a1a',
        transition: 'transform 0.1s, box-shadow 0.1s',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translate(-1px, -1px)'
        e.currentTarget.style.boxShadow = '5px 5px 0 #1a1a1a'
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'none'
        e.currentTarget.style.boxShadow = '4px 4px 0 #1a1a1a'
      }}
      onClick={() => startTutorial(lesson)}
    >
      <div className="flex items-start justify-between gap-2 mb-2">
        <h4 className="text-sm font-extrabold uppercase tracking-wider leading-tight" style={{ color: '#1a1a1a' }}>
          {lesson.title}
        </h4>
        <span
          className="shrink-0 text-[10px] font-bold px-1.5 py-0.5"
          style={{
            background: '#0af',
            color: '#1a1a1a',
            border: '2px solid #1a1a1a',
          }}
        >
          {stepCount} STEPS
        </span>
      </div>

      <div className="flex flex-wrap gap-1">
        {tags.map((tag) => (
          <Badge key={tag} variant="outline" className="text-[9px]">
            {tag.trim()}
          </Badge>
        ))}
      </div>
    </button>
  )
}

function LessonList() {
  const { lessons } = useSynth()

  const beginnerLessons = lessons.filter(l => l.tags.includes('beginner'))
  const intermediateLessons = lessons.filter(l => l.tags.includes('intermediate'))

  return (
    <ScrollArea className="flex-1 overflow-auto">
      <div className="p-4 space-y-6">
        {beginnerLessons.length > 0 && (
          <div className="space-y-3">
            <h3
              className="text-xs font-extrabold uppercase tracking-widest px-1"
              style={{ color: '#ff4d4d' }}
            >
              {'/// Beginner'}
            </h3>
            {beginnerLessons.map((lesson) => (
              <LessonCard key={lesson.title} lesson={lesson} />
            ))}
          </div>
        )}

        {intermediateLessons.length > 0 && (
          <div className="space-y-3">
            <h3
              className="text-xs font-extrabold uppercase tracking-widest px-1"
              style={{ color: '#0af' }}
            >
              {'/// Intermediate'}
            </h3>
            {intermediateLessons.map((lesson) => (
              <LessonCard key={lesson.title} lesson={lesson} />
            ))}
          </div>
        )}
      </div>
    </ScrollArea>
  )
}

export function Sidebar() {
  const { tutorial } = useSynth()

  // If a tutorial is active, show the tutorial view instead
  if (tutorial) {
    return <TutorialView />
  }

  return (
    <Tabs defaultValue="tutorials" className="flex flex-col h-full">
      <div
        className="shrink-0 px-4 pt-3 pb-2"
        style={{ borderBottom: '3px solid #1a1a1a' }}
      >
        <TabsList variant="line" className="w-full">
          <TabsTrigger value="tutorials" className="flex-1 gap-1.5">
            <BookOpen size={13} strokeWidth={3} />
            Tutorials
          </TabsTrigger>
          <TabsTrigger value="patches" className="flex-1 gap-1.5">
            <Disc3 size={13} strokeWidth={3} />
            Patches
          </TabsTrigger>
        </TabsList>
      </div>

      <TabsContent value="tutorials" className="flex-1 overflow-hidden">
        <LessonList />
      </TabsContent>

      <TabsContent value="patches" className="flex-1 overflow-hidden">
        <div className="flex items-center justify-center h-full p-8">
          <div
            className="text-center p-6"
            style={{
              border: '3px dashed #ccc',
            }}
          >
            <Disc3 size={32} className="mx-auto mb-3" style={{ color: '#ccc' }} />
            <p className="text-xs font-bold uppercase tracking-wider" style={{ color: '#999' }}>
              Patch browser coming soon
            </p>
          </div>
        </div>
      </TabsContent>
    </Tabs>
  )
}
