'use client'

import { createContext, useContext, useState, useCallback, useMemo, type ReactNode } from 'react'
import { zones, legendItems } from '@/lib/tempest/zones'
import { seedLessons } from '@/lib/tempest/lessons'
import type { Zone, SeedLesson, TutorialStep } from '@/lib/tempest/types'

interface TutorialState {
  lesson: SeedLesson
  stepIndex: number
}

interface SynthContextValue {
  zones: Zone[]
  legendItems: typeof legendItems
  lessons: SeedLesson[]
  highlightedZone: string | null
  hoveredZone: string | null
  hoveredGroup: string | null
  message: string
  tutorial: TutorialState | null
  currentStep: TutorialStep | null

  highlight: (id: string | null) => void
  setHovered: (id: string | null) => void
  showMessage: (text: string) => void
  clearHighlight: () => void

  startTutorial: (lesson: SeedLesson) => void
  nextStep: () => void
  prevStep: () => void
  exitTutorial: () => void
}

const SynthContext = createContext<SynthContextValue | null>(null)

export function SynthProvider({ children }: { children: ReactNode }) {
  const [highlightedZone, setHighlightedZone] = useState<string | null>(null)
  const [hoveredZone, setHoveredZone] = useState<string | null>(null)
  const [hoveredGroup, setHoveredGroup] = useState<string | null>(null)
  const [message, setMessage] = useState('DSI Tempest Explorer — hover over zones to learn, pick a tutorial to begin.')
  const [tutorial, setTutorial] = useState<TutorialState | null>(null)

  const highlight = useCallback((id: string | null) => {
    setHighlightedZone(id)
  }, [])

  const setHovered = useCallback((id: string | null) => {
    setHoveredZone(id)
    if (id) {
      // Derive parent group: osc-shape → osc, lpf-frequency → lpf, env-attack → env, etc.
      const zone = zones.find(z => z.id === id)
      if (zone && (zone.group === 'knob' || zone.group === 'button')) {
        const prefix = id.split('-')[0]
        // Find matching section zone
        const parent = zones.find(z => z.id === prefix && z.group !== 'knob' && z.group !== 'button')
        setHoveredGroup(parent?.id ?? null)
      } else {
        setHoveredGroup(null)
      }
    } else {
      setHoveredGroup(null)
    }
  }, [])

  const showMessage = useCallback((text: string) => {
    setMessage(text)
  }, [])

  const clearHighlight = useCallback(() => {
    setHighlightedZone(null)
  }, [])

  const startTutorial = useCallback((lesson: SeedLesson) => {
    setTutorial({ lesson, stepIndex: 0 })
    const step = lesson.content.steps[0]
    if (step?.focus) setHighlightedZone(step.focus)
    setMessage(`Tutorial: ${lesson.title} — Step 1 of ${lesson.content.steps.length}`)
  }, [])

  const nextStep = useCallback(() => {
    setTutorial(prev => {
      if (!prev) return null
      const next = prev.stepIndex + 1
      if (next >= prev.lesson.content.steps.length) return prev
      const step = prev.lesson.content.steps[next]
      if (step?.focus) setHighlightedZone(step.focus)
      setMessage(`Tutorial: ${prev.lesson.title} — Step ${next + 1} of ${prev.lesson.content.steps.length}`)
      return { ...prev, stepIndex: next }
    })
  }, [])

  const prevStep = useCallback(() => {
    setTutorial(prev => {
      if (!prev) return null
      const next = prev.stepIndex - 1
      if (next < 0) return prev
      const step = prev.lesson.content.steps[next]
      if (step?.focus) setHighlightedZone(step.focus)
      setMessage(`Tutorial: ${prev.lesson.title} — Step ${next + 1} of ${prev.lesson.content.steps.length}`)
      return { ...prev, stepIndex: next }
    })
  }, [])

  const exitTutorial = useCallback(() => {
    setTutorial(null)
    setHighlightedZone(null)
    setMessage('DSI Tempest Explorer — hover over zones to learn, pick a tutorial to begin.')
  }, [])

  const currentStep = useMemo(() => {
    if (!tutorial) return null
    return tutorial.lesson.content.steps[tutorial.stepIndex] ?? null
  }, [tutorial])

  const value = useMemo<SynthContextValue>(() => ({
    zones,
    legendItems,
    lessons: seedLessons,
    highlightedZone,
    hoveredZone,
    hoveredGroup,
    message,
    tutorial,
    currentStep,
    highlight,
    setHovered,
    showMessage,
    clearHighlight,
    startTutorial,
    nextStep,
    prevStep,
    exitTutorial,
  }), [highlightedZone, hoveredZone, hoveredGroup, message, tutorial, currentStep, highlight, setHovered, showMessage, clearHighlight, startTutorial, nextStep, prevStep, exitTutorial])

  return (
    <SynthContext.Provider value={value}>
      {children}
    </SynthContext.Provider>
  )
}

export function useSynth() {
  const ctx = useContext(SynthContext)
  if (!ctx) throw new Error('useSynth must be used within SynthProvider')
  return ctx
}
