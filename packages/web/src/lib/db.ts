import Database from 'better-sqlite3'
import path from 'path'
import { seedLessons } from '@/lib/tempest/lessons'

const DB_PATH = path.join(process.cwd(), 'solderpunk.db')

let _db: Database.Database | null = null

function getDb(): Database.Database {
  if (_db) return _db

  _db = new Database(DB_PATH)
  _db.pragma('journal_mode = WAL')
  _db.pragma('foreign_keys = ON')

  // Create tables
  _db.exec(`
    CREATE TABLE IF NOT EXISTS lessons (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      title TEXT NOT NULL,
      section_id TEXT NOT NULL,
      tags TEXT NOT NULL DEFAULT '',
      content TEXT NOT NULL,
      created_at TEXT NOT NULL DEFAULT (datetime('now')),
      updated_at TEXT NOT NULL DEFAULT (datetime('now'))
    );

    CREATE TABLE IF NOT EXISTS queries (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      query TEXT NOT NULL,
      response TEXT NOT NULL,
      created_at TEXT NOT NULL DEFAULT (datetime('now'))
    );
  `)

  // Seed lessons if empty
  const count = _db.prepare('SELECT COUNT(*) as count FROM lessons').get() as { count: number }
  if (count.count === 0) {
    const insert = _db.prepare(
      'INSERT INTO lessons (title, section_id, tags, content) VALUES (?, ?, ?, ?)'
    )

    const seedAll = _db.transaction(() => {
      for (const lesson of seedLessons) {
        insert.run(
          lesson.title,
          lesson.section_id,
          lesson.tags,
          JSON.stringify(lesson.content)
        )
      }
    })

    seedAll()
  }

  return _db
}

export const db = {
  get instance() {
    return getDb()
  },
}
