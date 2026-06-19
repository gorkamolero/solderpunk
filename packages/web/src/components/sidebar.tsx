'use client'

import { useSynth } from '@/lib/synth-context'
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Badge } from '@/components/ui/badge'
import { TutorialView } from './tutorial-view'
import { BookOpen, Disc3, ExternalLink, Heart, Download, PlayCircle } from 'lucide-react'
import { useEffect, useState } from 'react'
import type { SeedLesson, PatchLink, PatchSource } from '@/lib/shared-types'

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
          style={{ background: '#0af', color: '#1a1a1a', border: '2px solid #1a1a1a' }}
        >
          {stepCount} STEPS
        </span>
      </div>
      <div className="flex flex-wrap gap-1">
        {tags.map((tag) => (
          <Badge key={tag} variant="outline" className="text-[9px]">{tag.trim()}</Badge>
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
    <ScrollArea className="flex-1 min-h-0">
      <div className="p-4 space-y-6">
        {beginnerLessons.length > 0 && (
          <div className="space-y-3">
            <h3 className="text-xs font-extrabold uppercase tracking-widest px-1" style={{ color: '#ff4d4d' }}>
              {'/// Beginner'}
            </h3>
            {beginnerLessons.map((lesson) => (
              <LessonCard key={lesson.title} lesson={lesson} />
            ))}
          </div>
        )}
        {intermediateLessons.length > 0 && (
          <div className="space-y-3">
            <h3 className="text-xs font-extrabold uppercase tracking-widest px-1" style={{ color: '#0af' }}>
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

const cardStyle = {
  background: '#f5f0e8',
  border: '3px solid #1a1a1a',
  boxShadow: '4px 4px 0 #1a1a1a',
  transition: 'transform 0.1s, box-shadow 0.1s',
} as const

function lift(e: React.MouseEvent<HTMLElement>) {
  e.currentTarget.style.transform = 'translate(-1px, -1px)'
  e.currentTarget.style.boxShadow = '5px 5px 0 #1a1a1a'
}
function drop(e: React.MouseEvent<HTMLElement>) {
  e.currentTarget.style.transform = 'none'
  e.currentTarget.style.boxShadow = '4px 4px 0 #1a1a1a'
}

function LinkCard({ item }: { item: PatchLink }) {
  return (
    <a
      href={item.url}
      target="_blank"
      rel="noopener noreferrer"
      className="block p-3 no-underline"
      style={cardStyle}
      onMouseEnter={lift}
      onMouseLeave={drop}
    >
      <div className="flex items-center justify-between gap-2 mb-1">
        <div className="flex items-center gap-2 min-w-0">
          <h4 className="text-sm font-extrabold uppercase tracking-wider leading-tight truncate" style={{ color: '#1a1a1a' }}>
            {item.name}
          </h4>
          <ExternalLink size={12} strokeWidth={3} style={{ color: '#0af' }} className="shrink-0" />
        </div>
        {item.badge && (
          <span
            className="shrink-0 text-[9px] font-bold uppercase px-1.5 py-0.5"
            style={{ background: '#0af', color: '#1a1a1a', border: '2px solid #1a1a1a' }}
          >
            {item.badge}
          </span>
        )}
      </div>
      <p className="text-[11px] leading-relaxed" style={{ color: '#666' }}>{item.desc}</p>
    </a>
  )
}

/** Curated, link-verified external sources (synths not on Patchstorage). */
function CuratedLinks({ intro, groups }: { intro?: string; groups: { heading: string; color: string; items: PatchLink[] }[] }) {
  return (
    <div className="space-y-6">
      {intro && <p className="text-[11px] leading-relaxed px-1" style={{ color: '#666' }}>{intro}</p>}
      {groups.map((group) => (
        <div key={group.heading} className="space-y-3">
          <h3 className="text-xs font-extrabold uppercase tracking-widest px-1" style={{ color: group.color }}>
            {`/// ${group.heading}`}
          </h3>
          {group.items.map((item) => (
            <LinkCard key={item.url + item.name} item={item} />
          ))}
        </div>
      ))}
    </div>
  )
}

interface LivePatch {
  id: string
  title: string
  url: string
  author: string
  tags: string[]
  likes: number
  downloads: number
}

/** Live community feed (Patchstorage or midi.link), fetched from /api/patches. */
function LivePatchList({ endpoint, heading, browseUrl, browseLabel }: {
  endpoint: string; heading: string; browseUrl: string; browseLabel: string
}) {
  const [patches, setPatches] = useState<LivePatch[] | null>(null)
  const [error, setError] = useState(false)

  useEffect(() => {
    // endpoint is fixed per page; setState only runs in the async callbacks.
    let alive = true
    fetch(endpoint)
      .then((r) => (r.ok ? r.json() : Promise.reject()))
      .then((d) => { if (alive) setPatches(d.patches ?? []) })
      .catch(() => { if (alive) setError(true) })
    return () => { alive = false }
  }, [endpoint])

  return (
    <div className="space-y-3">
      <h3 className="text-xs font-extrabold uppercase tracking-widest px-1" style={{ color: '#ff4d4d' }}>
        {`/// ${heading}`}
      </h3>

      {!patches && !error && (
        <p className="text-[11px] px-1" style={{ color: '#666' }}>Loading community patches…</p>
      )}
      {error && (
        <p className="text-[11px] px-1" style={{ color: '#666' }}>Couldn&apos;t reach the feed — browse directly below.</p>
      )}

      {patches?.map((p) => (
        <a
          key={p.id}
          href={p.url || browseUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="block p-3 no-underline"
          style={cardStyle}
          onMouseEnter={lift}
          onMouseLeave={drop}
        >
          <div className="flex items-center justify-between gap-2 mb-1">
            <h4 className="text-sm font-extrabold uppercase tracking-wider leading-tight truncate" style={{ color: '#1a1a1a' }}>
              {p.title}
            </h4>
            <ExternalLink size={12} strokeWidth={3} style={{ color: '#0af' }} className="shrink-0" />
          </div>
          <p className="text-[11px] mb-2" style={{ color: '#666' }}>by {p.author}</p>
          <div className="flex flex-wrap items-center gap-2">
            {p.tags.slice(0, 3).map((t) => (
              <Badge key={t} variant="outline" className="text-[9px]">{t}</Badge>
            ))}
            {(p.likes > 0 || p.downloads > 0) && (
              <span className="flex items-center gap-1 text-[10px] font-bold ml-auto" style={{ color: '#1a1a1a' }}>
                <Heart size={10} strokeWidth={3} /> {p.likes}
                <Download size={10} strokeWidth={3} className="ml-1.5" /> {p.downloads}
              </span>
            )}
          </div>
        </a>
      ))}

      <a
        href={browseUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-1.5 p-2 no-underline text-[11px] font-bold uppercase tracking-wider"
        style={{ border: '3px solid #1a1a1a', color: '#0af', background: '#e8e3db' }}
      >
        {browseLabel} <ExternalLink size={12} strokeWidth={3} />
      </a>
    </div>
  )
}

function PatchSection({ source }: { source: PatchSource }) {
  if (source.type === 'patchstorage') {
    return (
      <LivePatchList
        endpoint={`/api/patches?platform=${source.platformId}`}
        heading="Most-loved on Patchstorage"
        browseUrl={source.platformUrl}
        browseLabel="Browse all on Patchstorage"
      />
    )
  }
  if (source.type === 'midilink') {
    return (
      <LivePatchList
        endpoint={`/api/patches?midilink=${source.instrumentPath}`}
        heading="Community patches on midi.link"
        browseUrl={source.browseUrl}
        browseLabel="Open midi.link"
      />
    )
  }
  return <CuratedLinks intro={source.intro} groups={source.groups} />
}

function PatchPanel() {
  const { config } = useSynth()
  const src = config.patchSource

  if (!src) {
    return (
      <div className="p-4">
        <p className="text-[11px]" style={{ color: '#666' }}>No patch sources catalogued for this instrument yet.</p>
      </div>
    )
  }
  const sources = Array.isArray(src) ? src : [src]
  return (
    <ScrollArea className="flex-1 min-h-0">
      <div className="p-4 space-y-8">
        {sources.map((s, i) => (
          <PatchSection key={i} source={s} />
        ))}
      </div>
    </ScrollArea>
  )
}

function MediaPanel() {
  const { config } = useSynth()
  if (!config.media || config.media.length === 0) {
    return (
      <div className="p-4">
        <p className="text-[11px]" style={{ color: '#666' }}>No learning media catalogued for this instrument yet.</p>
      </div>
    )
  }
  return (
    <ScrollArea className="flex-1 min-h-0">
      <div className="p-4">
        <CuratedLinks groups={config.media} />
      </div>
    </ScrollArea>
  )
}

export function Sidebar() {
  const { tutorial } = useSynth()

  if (tutorial) {
    return <TutorialView />
  }

  return (
    <Tabs defaultValue="tutorials" className="flex flex-col h-full">
      <div className="shrink-0 px-4 pt-3 pb-2" style={{ borderBottom: '3px solid #1a1a1a' }}>
        <TabsList variant="line" className="w-full">
          <TabsTrigger value="tutorials" className="flex-1 gap-1.5">
            <BookOpen size={13} strokeWidth={3} />
            Tutorials
          </TabsTrigger>
          <TabsTrigger value="patches" className="flex-1 gap-1.5">
            <Disc3 size={13} strokeWidth={3} />
            Patches
          </TabsTrigger>
          <TabsTrigger value="watch" className="flex-1 gap-1.5">
            <PlayCircle size={13} strokeWidth={3} />
            Watch
          </TabsTrigger>
        </TabsList>
      </div>

      <TabsContent value="tutorials" className="flex-1 flex flex-col overflow-hidden min-h-0">
        <LessonList />
      </TabsContent>

      <TabsContent value="patches" className="flex-1 flex flex-col overflow-hidden min-h-0">
        <PatchPanel />
      </TabsContent>

      <TabsContent value="watch" className="flex-1 flex flex-col overflow-hidden min-h-0">
        <MediaPanel />
      </TabsContent>
    </Tabs>
  )
}
