import type { Metadata } from 'next'
import Legacy from '@/components/Legacy'
import { buildPageMetadata } from '@/lib/seoData'

export const metadata: Metadata = buildPageMetadata({
  title: 'Legacy & Story | ONIX Group',
  description: 'Step into the ONIX legacy, discover our culture, and explore the stories that shaped our engineering group.',
  path: '/legacy'
})

export default function LegacyPage() {
  return <Legacy />
}

