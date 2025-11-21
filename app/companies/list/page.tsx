import type { Metadata } from 'next'
import Companies from '@/components/Companies'
import { buildPageMetadata } from '@/lib/seoData'

export const metadata: Metadata = buildPageMetadata({
  title: 'Company Directory | ONIX Group',
  description: 'Browse the ONIX Group company directory, including design, engineering, construction, and advisory divisions.',
  path: '/companies/list'
})

export default function CompaniesListPage() {
  return <Companies />
}

