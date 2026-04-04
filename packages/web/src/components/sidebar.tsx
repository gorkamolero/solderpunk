'use client'

import { useSynth } from '@/lib/synth-context'
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Badge } from '@/components/ui/badge'
import { TutorialView } from './tutorial-view'
import { BookOpen, Disc3, ExternalLink, Download } from 'lucide-react'
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

const patchCollections = [
  { name: 'Hardwarecore Soundset', count: 64, desc: 'Pads, bass, leads, kicks', file: 'hardwarecore/' },
  { name: 'Leviathant TR-606/DR-110', count: 32, desc: 'Analog drum emulations from a year of sound design', file: 'leviathant-606-110/' },
  { name: 'Tim Mantle / Psalm37', count: 288, desc: '128 synth + 160 drum sounds — pads, leads, bass, percussion', file: 'tim-mantle/' },
  { name: 'Deep Mind Dark', count: 512, desc: '256 synth + 256 percussion by Peter Jaczewski', file: 'deep-mind-dark/' },
  { name: 'Deep Mind Dark Mopho', count: 384, desc: 'Mopho presets ported to Tempest — includes BladeRunner patch', file: 'deep-mind-dark-mopho/' },
  { name: 'Sylvain Moreau BD1', count: 41, desc: 'Expertly designed kick drums with programming notes', file: 'sylvain-moreau-bd1/' },
  { name: 'Polyrhythm Templates', count: 18, desc: 'Every polyrhythm/polymeter combo + Berlin School', file: 'polyrhythm-templates/' },
  { name: 'Community Archive', count: 403, desc: '808 Turbo, CBMD Analog Drums, Sound Contest 414, StimPack, Chiptune', file: 'community/' },
]

const resources = [
  { name: 'Sequential Forum Thread', url: 'https://forum.sequential.com/index.php?topic=34.0', desc: 'Community patches & tips (72+ replies, 216K views)' },
  { name: "Stim's Tempest Recipes", url: 'http://noisylittlebugger.net/', desc: '16 synthesis tutorials with exact values' },
  { name: 'PresetPatch.com', url: 'https://www.presetpatch.com/synth/dsi-tempest', desc: 'Individual .syx downloads' },
  { name: 'Leviathant Drums', url: 'https://www.bitrotten.com/tempest/', desc: 'TR-606 & DR-110 emulations (donation-ware)' },
  { name: 'Hardwarecore', url: 'https://hardwarecore.wordpress.com/2015/06/01/dsi-tempest-soundset-hardwarecore-1/', desc: '64 patches, originally $10, now free' },
  { name: 'Tim Mantle / Psalm37', url: 'https://timmantle.com', desc: '288 patches — pro sound designer (paid, \u00A35\u201310)' },
  { name: 'Deep Mind Dark', url: 'https://gumroad.com', desc: '512 sounds by Peter Jaczewski ($17)' },
  { name: 'Deep Mind Dark Mopho', url: 'https://bandcamp.com', desc: '384 Mopho ports incl. BladeRunner ($17)' },
  { name: 'Sylvain Moreau BD1', url: 'https://sylvainmoreau.com', desc: '41 expertly designed kick drums' },
  { name: 'HelloSamples', url: 'https://hellosamples.com', desc: '4,000+ WAV one-shots, unprocessed (\u20AC22\u201334)' },
  { name: 'Sound Randomizer', url: 'https://forum.sequential.com/index.php?topic=34.0', desc: 'Free online random patch generator' },
  { name: 'midi.link Exchange', url: 'https://forum.sequential.com/index.php?topic=34.0', desc: '288 new community sounds' },
]

function PatchList() {
  return (
    <ScrollArea className="flex-1 min-h-0">
      <div className="p-4 space-y-6">
        <div className="space-y-3">
          <h3 className="text-xs font-extrabold uppercase tracking-widest px-1" style={{ color: '#ff4d4d' }}>
            {'/// Patch Collections'}
          </h3>
          {patchCollections.map((col) => (
            <div
              key={col.name}
              className="p-3"
              style={{ background: '#f5f0e8', border: '3px solid #1a1a1a', boxShadow: '4px 4px 0 #1a1a1a' }}
            >
              <div className="flex items-start justify-between gap-2 mb-1">
                <h4 className="text-sm font-extrabold uppercase tracking-wider leading-tight" style={{ color: '#1a1a1a' }}>
                  {col.name}
                </h4>
                <span
                  className="shrink-0 text-[10px] font-bold px-1.5 py-0.5"
                  style={{ background: '#0af', color: '#1a1a1a', border: '2px solid #1a1a1a' }}
                >
                  {col.count} SYX
                </span>
              </div>
              <p className="text-[11px] mb-2" style={{ color: '#666' }}>{col.desc}</p>
              <div className="flex items-center gap-1 text-[10px] font-bold uppercase" style={{ color: '#0af' }}>
                <Download size={10} strokeWidth={3} />
                {col.file}
              </div>
            </div>
          ))}
        </div>

        <div className="space-y-3">
          <h3 className="text-xs font-extrabold uppercase tracking-widest px-1" style={{ color: '#0af' }}>
            {'/// Resources'}
          </h3>
          {resources.map((res) => (
            <a
              key={res.name}
              href={res.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block p-3 no-underline"
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
            >
              <div className="flex items-center gap-2 mb-1">
                <h4 className="text-sm font-extrabold uppercase tracking-wider leading-tight" style={{ color: '#1a1a1a' }}>
                  {res.name}
                </h4>
                <ExternalLink size={12} strokeWidth={3} style={{ color: '#0af' }} />
              </div>
              <p className="text-[11px]" style={{ color: '#666' }}>{res.desc}</p>
            </a>
          ))}
        </div>
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
        </TabsList>
      </div>

      <TabsContent value="tutorials" className="flex-1 flex flex-col overflow-hidden min-h-0">
        <LessonList />
      </TabsContent>

      <TabsContent value="patches" className="flex-1 flex flex-col overflow-hidden min-h-0">
        <PatchList />
      </TabsContent>
    </Tabs>
  )
}
