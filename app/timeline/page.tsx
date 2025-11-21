import Timeline from '@/components/Timeline'
import { buildPageMetadata } from '@/lib/seoData'

export const metadata = buildPageMetadata({
  title: 'ONIX Timeline | Milestones & Expansion',
  description: 'Follow ONIX Group milestones—from digital transformation to regional growth across engineering, design, and prime services.',
  path: '/timeline'
})

export default function TimelinePage() {
  return <Timeline />
}
