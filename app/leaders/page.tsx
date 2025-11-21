import type { Metadata } from 'next'
import Leaders from '@/components/Leaders'
import { buildPageMetadata } from '@/lib/seoData'

export const metadata: Metadata = buildPageMetadata({
  title: 'Leadership Team | ONIX Group',
  description: 'Meet the ONIX Group leadership team guiding engineering, construction, and design programs across the GCC.',
  path: '/leaders'
})

export default function LeadersPage() {
  return <Leaders />
}
