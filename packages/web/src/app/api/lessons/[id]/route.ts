import { NextRequest, NextResponse } from 'next/server'
import { db } from '@/lib/db'

interface RouteParams {
  params: Promise<{ id: string }>
}

export async function GET(_request: NextRequest, { params }: RouteParams) {
  const { id } = await params
  const lesson = db.instance.prepare('SELECT * FROM lessons WHERE id = ?').get(id)

  if (!lesson) {
    return NextResponse.json({ error: 'Lesson not found' }, { status: 404 })
  }

  return NextResponse.json(lesson)
}

export async function PUT(request: NextRequest, { params }: RouteParams) {
  const { id } = await params
  const body = await request.json()
  const { title, section_id, tags, content } = body

  const existing = db.instance.prepare('SELECT * FROM lessons WHERE id = ?').get(id)
  if (!existing) {
    return NextResponse.json({ error: 'Lesson not found' }, { status: 404 })
  }

  db.instance.prepare(
    `UPDATE lessons SET
      title = COALESCE(?, title),
      section_id = COALESCE(?, section_id),
      tags = COALESCE(?, tags),
      content = COALESCE(?, content),
      updated_at = datetime('now')
    WHERE id = ?`
  ).run(
    title ?? null,
    section_id ?? null,
    tags ?? null,
    content ? (typeof content === 'string' ? content : JSON.stringify(content)) : null,
    id
  )

  const lesson = db.instance.prepare('SELECT * FROM lessons WHERE id = ?').get(id)
  return NextResponse.json(lesson)
}

export async function DELETE(_request: NextRequest, { params }: RouteParams) {
  const { id } = await params
  const existing = db.instance.prepare('SELECT * FROM lessons WHERE id = ?').get(id)
  if (!existing) {
    return NextResponse.json({ error: 'Lesson not found' }, { status: 404 })
  }

  db.instance.prepare('DELETE FROM lessons WHERE id = ?').run(id)
  return NextResponse.json({ ok: true })
}
