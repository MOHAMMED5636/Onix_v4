import type { Metadata } from 'next'
import CompaniesOverview from '@/components/CompaniesOverview'
import { buildPageMetadata } from '@/lib/seoData'

export const metadata: Metadata = buildPageMetadata({
  title: 'ONIX Group of Companies | Portfolio Overview',
  description: 'Explore ONIX Engineering, ONIX PLUS, CRIMSON, ONIX Design Studio, and ONIX Prime—one ecosystem, multiple specialties.',
  path: '/companies'
})

export default function CompaniesPage() {
  return <CompaniesOverview />
}

