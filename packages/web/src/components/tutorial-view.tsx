'use client'

import { useSynth } from '@/lib/synth-context'
import { Button } from '@/components/ui/button'
import { ScrollArea } from '@/components/ui/scroll-area'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'
import { useMemo, Fragment } from 'react'

/** Parse [[zone-id]] and [[zone-id|Label]] into interactive elements */
function TutorialBody({ text }: { text: string }) {
  const { zones, highlight, setHovered, highlightedZone } = useSynth()

  const zoneMap = useMemo(() => {
    const map = new Map<string, string>()
    for (const z of zones) map.set(z.id, z.label)
    return map
  }, [zones])

  const parts = useMemo(() => {
    const regex = /\[\[([^\]|]+?)(?:\|([^\]]+?))?\]\]/g
    const result: Array<{ type: 'text'; value: string } | { type: 'link'; id: string; label: string }> = []
    let lastIndex = 0
    let match: RegExpExecArray | null

    while ((match = regex.exec(text)) !== null) {
      if (match.index > lastIndex) {
        result.push({ type: 'text', value: text.slice(lastIndex, match.index) })
      }
      const id = match[1]
      const label = match[2] ?? zoneMap.get(id) ?? id
      result.push({ type: 'link', id, label })
      lastIndex = regex.lastIndex
    }

    if (lastIndex < text.length) {
      result.push({ type: 'text', value: text.slice(lastIndex) })
    }

    return result
  }, [text, zoneMap])

  return (
    <div className="text-sm leading-relaxed whitespace-pre-wrap">
      {parts.map((part, i) => {
        if (part.type === 'text') {
          return <RichText key={i} text={part.value} />
        }
        const isActive = highlightedZone === part.id
        return (
          <button
            key={i}
            className="inline-flex items-center gap-0.5 font-bold cursor-pointer"
            style={{
              color: isActive ? '#1a1a1a' : '#0af',
              background: isActive ? '#0af' : 'transparent',
              borderBottom: `2px solid #0af`,
              padding: '0 2px',
              transition: 'all 0.1s',
            }}
            onMouseEnter={() => setHovered(part.id)}
            onMouseLeave={() => setHovered(null)}
            onClick={() => highlight(isActive ? null : part.id)}
          >
            {part.label}
          </button>
        )
      })}
    </div>
  )
}

/** Render bold (**text**) and inline code (`text`) from markdown-like syntax */
function RichText({ text }: { text: string }) {
  const parts = useMemo(() => {
    const regex = /(\*\*(.+?)\*\*)|(`(.+?)`)/g
    const result: Array<{ type: 'plain' | 'bold' | 'code'; value: string }> = []
    let lastIndex = 0
    let match: RegExpExecArray | null

    while ((match = regex.exec(text)) !== null) {
      if (match.index > lastIndex) {
        result.push({ type: 'plain', value: text.slice(lastIndex, match.index) })
      }
      if (match[2]) {
        result.push({ type: 'bold', value: match[2] })
      } else if (match[4]) {
        result.push({ type: 'code', value: match[4] })
      }
      lastIndex = regex.lastIndex
    }

    if (lastIndex < text.length) {
      result.push({ type: 'plain', value: text.slice(lastIndex) })
    }

    return result
  }, [text])

  return (
    <>
      {parts.map((part, i) => {
        if (part.type === 'bold') {
          return <strong key={i} className="font-extrabold">{part.value}</strong>
        }
        if (part.type === 'code') {
          return (
            <code
              key={i}
              className="px-1 py-0.5 text-xs font-bold"
              style={{
                background: '#1a1a1a',
                color: '#0af',
                border: '1px solid #333',
              }}
            >
              {part.value}
            </code>
          )
        }
        return <Fragment key={i}>{part.value}</Fragment>
      })}
    </>
  )
}

export function TutorialView() {
  const { tutorial, currentStep, nextStep, prevStep, exitTutorial } = useSynth()

  if (!tutorial || !currentStep) return null

  const total = tutorial.lesson.content.steps.length
  const current = tutorial.stepIndex + 1
  const progress = (current / total) * 100

  return (
    <div className="flex flex-col h-full">
      {/* Header */}
      <div
        className="flex items-center justify-between px-4 py-2"
        style={{
          background: '#0af',
          borderBottom: '3px solid #1a1a1a',
        }}
      >
        <div className="flex items-center gap-2">
          <span className="text-xs font-extrabold uppercase tracking-wider" style={{ color: '#1a1a1a' }}>
            {tutorial.lesson.title}
          </span>
        </div>
        <button
          onClick={exitTutorial}
          className="p-1 cursor-pointer"
          style={{
            background: '#ff4d4d',
            border: '2px solid #1a1a1a',
            boxShadow: '2px 2px 0 #1a1a1a',
            color: '#1a1a1a',
          }}
        >
          <X size={14} strokeWidth={3} />
        </button>
      </div>

      {/* Progress bar */}
      <div className="w-full h-2" style={{ background: '#e8e3db', borderBottom: '2px solid #1a1a1a' }}>
        <div
          className="h-full transition-all duration-200"
          style={{
            width: `${progress}%`,
            background: '#0af',
          }}
        />
      </div>

      {/* Content */}
      <ScrollArea className="flex-1 overflow-auto">
        <div className="p-4 space-y-4">
          {currentStep.title && (
            <h3
              className="text-base font-extrabold uppercase tracking-wider"
              style={{ color: '#1a1a1a' }}
            >
              {currentStep.title}
            </h3>
          )}

          <TutorialBody text={currentStep.body} />
        </div>
      </ScrollArea>

      {/* Navigation */}
      <div
        className="flex items-center justify-between px-4 py-3"
        style={{
          borderTop: '3px solid #1a1a1a',
          background: '#e8e3db',
        }}
      >
        <Button
          variant="outline"
          size="sm"
          onClick={prevStep}
          disabled={tutorial.stepIndex === 0}
          className="gap-1"
          style={{
            background: tutorial.stepIndex === 0 ? '#ccc' : '#f5f0e8',
          }}
        >
          <ChevronLeft size={14} strokeWidth={3} />
          PREV
        </Button>

        <span className="text-xs font-bold uppercase tracking-wider" style={{ color: '#666' }}>
          {current} / {total}
        </span>

        <Button
          variant="outline"
          size="sm"
          onClick={nextStep}
          disabled={tutorial.stepIndex >= total - 1}
          className="gap-1"
          style={{
            background: tutorial.stepIndex >= total - 1 ? '#ccc' : '#0af',
            color: '#1a1a1a',
          }}
        >
          NEXT
          <ChevronRight size={14} strokeWidth={3} />
        </Button>
      </div>
    </div>
  )
}
