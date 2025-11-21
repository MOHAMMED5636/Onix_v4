import type { Metadata } from 'next'
import Loading from '@/components/Loading'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Companies from '@/components/Companies'
import Services from '@/components/Services'
import Projects from '@/components/Projects'
import Contact from '@/components/Contact'
import { buildPageMetadata } from '@/lib/seoData'

export const metadata: Metadata = buildPageMetadata({
  title: 'ONIX Group | Integrated Engineering & Construction',
  description:
    'ONIX Group delivers architecture, engineering, construction, and project management programs across the GCC with a design-led mindset.',
  path: '/'
})

export default function Home() {
  return (
    <>
      <Loading />
      <main>
        <Hero />
        <About />
        <Services />
        <Companies />
        <Projects />
        <Contact />
      </main>
    </>
  )
}
