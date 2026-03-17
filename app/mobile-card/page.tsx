import type { Metadata } from 'next'
import Image from 'next/image'
import { buildPageMetadata } from '@/lib/seoData'

export const metadata: Metadata = buildPageMetadata({
  title: 'ONIX GROUP | Mobile Card',
  description: 'Quick access to ONIX Group companies and contact links.',
  path: '/mobile-card',
})

const companies = [
  {
    name: 'ONIX GROUP',
    imageSrc: '/images/ONIX_GROUP_0002.png',
    imageAlt: 'ONIX GROUP',
  },
  {
    name: 'ONIX Engineering Consultancy',
    imageSrc: '/images/ONIX Engineering Consultancy White.webp',
    imageAlt: 'ONIX Engineering Consultancy',
  },
  {
    name: 'ONIX PLUS',
    imageSrc: '/images/onix-plus-logo.png',
    imageAlt: 'ONIX PLUS',
  },
  {
    name: 'ONIX PRIME',
    imageSrc: '/images/Onix Prime Logo White[1].webp',
    imageAlt: 'ONIX PRIME',
  },
  {
    name: 'ONIX Design Studio',
    imageSrc: '/images/onix-design-studio-logo.png',
    imageAlt: 'ONIX Design Studio',
  },
  {
    name: 'CRIMSON Steel Contracting',
    imageSrc: '/images/CRIMSON 001[1].webp',
    imageAlt: 'CRIMSON Steel Contracting',
  },
]

const actions = [
  { label: 'Website', href: 'https://onixgroup.ae' },
  { label: 'Company Profile', href: '/company-profile.pdf' },
  { label: 'Instagram', href: 'https://www.instagram.com/onixgroup.ae/' },
  { label: 'Email', href: 'mailto:info@onixgroup.ae' },
  { label: 'Call', href: 'tel:+97142838880' },
  { label: 'WhatsApp', href: 'https://wa.me/97142838880' },
  {
    label: 'Location',
    href: 'https://www.google.com/maps?rlz=1C1GCEA_enAE1177AE1177&gs_lcrp=EgZjaHJvbWUqDwgBEC4YDRivARjHARiABDIGCAAQRRg5Mg8IARAuGA0YrwEYxwEYgAQyCQgCEAAYDRiABDIJCAMQABgNGIAEMgkIBBAAGA0YgAQyCAgFEAAYFhgeMggIBhAAGBYYHjIICAcQABgWGB4yCAgIEAAYFhge0gEINTg1NWowajeoAgCwAgA&um=1&ie=UTF-8&fb=1&gl=ae&sa=X&geocode=KVcQuMpQaV8-MeHYi41WSuhk&daddr=Mardoof+building+-+GATE+(B)+-OFFICE+114+Sheikh+Zayed+Rd+-+Al+Safa+-+Al+Safa+1+-+Dubai',
  },
]

export default function MobileCardPage() {
  return (
    <main className="min-h-[calc(100vh-1px)] bg-[#050712] text-white">
      <div className="mx-auto max-w-xl px-4 pb-16 pt-10 sm:px-6">
        <header className="mb-8 text-center">
          <p className="text-[11px] uppercase tracking-[0.35em] text-blue-100/85">Company Links</p>
          <h1 className="mt-3 text-2xl font-semibold sm:text-3xl">ONIX GROUP</h1>
        </header>

        <section className="space-y-4">
          {companies.map((company) => (
            <div
              key={company.name}
              className="rounded-3xl border border-white/12 bg-white/5 p-5 backdrop-blur"
            >
              <div className="flex items-center justify-center">
                <Image
                  src={company.imageSrc}
                  alt={company.imageAlt}
                  width={520}
                  height={220}
                  className="h-16 w-auto object-contain sm:h-20"
                  priority={company.name === 'ONIX GROUP'}
                />
              </div>
            </div>
          ))}
        </section>

        <section className="mt-10">
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
            {actions.map((action) => (
              <a
                key={action.label}
                href={action.href}
                target={action.href.startsWith('http') || action.href.endsWith('.pdf') ? '_blank' : undefined}
                rel={action.href.startsWith('http') || action.href.endsWith('.pdf') ? 'noopener noreferrer' : undefined}
                className="inline-flex items-center justify-center rounded-full border border-white/25 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition-all hover:border-white/50 hover:bg-white/10"
              >
                {action.label}
              </a>
            ))}
          </div>
        </section>
      </div>
    </main>
  )
}

