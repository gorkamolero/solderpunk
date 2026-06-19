import { NextRequest, NextResponse } from 'next/server'

/** Proxy + reshape community patch feeds (no CORS, so it must go server-side).
 *  GET /api/patches?platform=<numeric id>      -> Patchstorage, top by likes
 *  GET /api/patches?midilink=<instrument path> -> midi.link Firestore community patches
 *  Both return { patches: [{ id, title, url, author, tags[], likes, downloads }] }. */

type Json = Record<string, unknown>

interface OutPatch {
  id: string
  title: string
  url: string
  author: string
  tags: string[]
  likes: number
  downloads: number
}

async function fromPatchstorage(platform: string): Promise<OutPatch[] | null> {
  const upstream = `https://patchstorage.com/api/beta/patches?platforms=${platform}&per_page=30&orderby=like_count&order=desc`
  const res = await fetch(upstream, { next: { revalidate: 3600 } })
  if (!res.ok) return null
  const raw: unknown = await res.json()
  const list = Array.isArray(raw) ? (raw as Json[]) : []
  return list.map((p) => {
    const author = (p.author as Json | null) ?? null
    const cats = Array.isArray(p.categories) ? (p.categories as Json[]) : []
    return {
      id: String(p.id),
      title: (p.title as string) ?? 'Untitled',
      url: (p.url as string) ?? '',
      author: (author?.name as string) ?? (author?.slug as string) ?? 'Unknown',
      tags: cats.map((c) => c.name as string).filter(Boolean),
      likes: (p.like_count as number) ?? 0,
      downloads: (p.download_count as number) ?? 0,
    }
  })
}

// midi.link is an Angular app on a world-readable Firestore; the `patches` collection
// is the only public one. Filtered by instrument.path (e.g. "tempest").
const ML_PROJECT = 'midi-link-5614f'
const ML_KEY = 'AIzaSyDR_bE5XZ93SLASPDjoz96qQ8dVk3_taWk'

async function fromMidiLink(instrumentPath: string): Promise<OutPatch[] | null> {
  const url = `https://firestore.googleapis.com/v1/projects/${ML_PROJECT}/databases/(default)/documents:runQuery?key=${ML_KEY}`
  const body = {
    structuredQuery: {
      from: [{ collectionId: 'patches' }],
      where: {
        fieldFilter: {
          field: { fieldPath: 'instrument.path' },
          op: 'EQUAL',
          value: { stringValue: instrumentPath },
        },
      },
    },
  }
  const res = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
    next: { revalidate: 3600 },
  })
  if (!res.ok) return null
  const raw: unknown = await res.json()
  const rows = Array.isArray(raw) ? (raw as Json[]) : []
  const str = (f: unknown) => ((f as Json | undefined)?.stringValue as string) ?? ''
  return rows
    .filter((r) => r.document)
    .map((r) => {
      const doc = r.document as Json
      const fields = (doc.fields as Json) ?? {}
      const tagVals = (((fields.tags as Json)?.arrayValue as Json)?.values as Json[]) ?? []
      const userFields = (((fields.user as Json)?.mapValue as Json)?.fields as Json) ?? {}
      return {
        id: String(doc.name).split('/').pop() ?? '',
        title: str(fields.name) || 'Untitled',
        url: '',
        author: str(userFields.username) || 'midi.link',
        tags: tagVals.map((t) => str(t)).filter(Boolean),
        likes: 0,
        downloads: 0,
      }
    })
}

export async function GET(request: NextRequest) {
  const sp = request.nextUrl.searchParams
  const midilink = sp.get('midilink')
  const platform = sp.get('platform')

  let patches: OutPatch[] | null
  try {
    if (midilink && /^[a-z0-9_-]+$/i.test(midilink)) {
      patches = await fromMidiLink(midilink)
    } else if (platform && /^\d+$/.test(platform)) {
      patches = await fromPatchstorage(platform)
    } else {
      return NextResponse.json({ error: 'provide "platform" (numeric) or "midilink" (instrument path)' }, { status: 400 })
    }
  } catch {
    return NextResponse.json({ error: 'upstream unreachable' }, { status: 502 })
  }

  if (patches === null) return NextResponse.json({ error: 'upstream error' }, { status: 502 })
  return NextResponse.json({ patches })
}
