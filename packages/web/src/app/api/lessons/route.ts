import { NextRequest, NextResponse } from 'next/server'
import { db } from '@/lib/db'

export async function GET(request: NextRequest) {
  const { searchParams } = request.nextUrl
  const search = searchParams.get('q')
  const tag = searchParams.get('tag')

  let query = 'SELECT * FROM lessons'
  const conditions: string[] = []
  const params: string[] = []

  if (search) {
    conditions.push('(title LIKE ? OR content LIKE ?)')
    params.push(`%${search}%`, `%${search}%`)
  }

  if (tag) {
    conditions.push('tags LIKE ?')
    params.push(`%${tag}%`)
  }

  if (conditions.length > 0) {
    query += ' WHERE ' + conditions.join(' AND ')
  }

  query += ' ORDER BY id ASC'

  const lessons = db.instance.prepare(query).all(...params)
  return NextResponse.json(lessons)
}

export async function POST(request: NextRequest) {
  const body = await request.json()
  const { title, section_id, tags, content } = body

  if (!title || !section_id || !content) {
    return NextResponse.json(
      { error: 'title, section_id, and content are required' },
      { status: 400 }
    )
  }

  const result = db.instance.prepare(
    'INSERT INTO lessons (title, section_id, tags, content) VALUES (?, ?, ?, ?)'
  ).run(title, section_id, tags ?? '', typeof content === 'string' ? content : JSON.stringify(content))

  const lesson = db.instance.prepare('SELECT * FROM lessons WHERE id = ?').get(result.lastInsertRowid)
  return NextResponse.json(lesson, { status: 201 })
}
