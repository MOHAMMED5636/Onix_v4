'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

const primaryLinks = [
  { label: 'About Us', href: '/about' },
  { label: 'Contacts', href: '/contact' },
  { label: 'Services', href: '/services' },
  { label: 'Career', href: '/careers' },
  { label: 'News', href: '/news' },
  { label: 'Projects', href: '/projects' }
]

const serviceCategories = [
  { label: 'Structural Engineering', href: '/services/structural-engineering' },
  { label: 'Civil Engineering', href: '/services/civil-engineering' },
  { label: 'MEP Engineering', href: '/services/mep-engineering' },
  { label: 'Project Management', href: '/services/project-management' },
  { label: 'Consultation', href: '/services/consultation' }
]

const offices = [
  {
    name: 'Dubai HQ',
    address: ['Mardoof Building, Gate B, Office 114', 'Sheikh Zayed Road, Al Safa 1, Dubai'],
    mapUrl:
      'https://www.google.com/maps?rlz=1C1GCEA_enAE1177AE1177&gs_lcrp=EgZjaHJvbWUqDwgBEC4YDRivARjHARiABDIGCAAQRRg5Mg8IARAuGA0YrwEYxwEYgAQyCQgCEAAYDRiABDIJCAMQABgNGIAEMgkIBBAAGA0YgAQyCAgFEAAYFhgeMggIBhAAGBYYHjIICAcQABgWGB4yCAgIEAAYFhge0gEINTg1NWowajeoAgCwAgA&um=1&ie=UTF-8&fb=1&gl=ae&sa=X&geocode=KVcQuMpQaV8-MeHYi41WSuhk&daddr=Mardoof+building+-+GATE+(B)+-OFFICE+114+Sheikh+Zayed+Rd+-+Al+Safa+-+Al+Safa+1+-+Dubai'
  },
  {
    name: 'Abu Dhabi Office',
    address: ['Omniah Tower, Al Hisn', 'Al Markaziyah West, Abu Dhabi'],
    mapUrl:
      'https://www.google.com/maps/dir/Onix+Engineering+Consultancy,+Omniah+Tower+-+Abu+Dhabi/Omniah+Tower+-+Al+Hisn+-+Al+Markaziyah+West+-+Abu+Dhabi/@24.4837925,54.3088263,13z/data=!3m1!4b1!4m13!4m12!1m5!1m1!1s0x3e5e67005e94375f:0x7d1b79275c7a4b73!2m2!1d54.3500259!2d24.48372!1m5!1m1!1s0x3e5e67005e94375f:0x7d1b79275c7a4b73!2m2!1d54.3500259!2d24.48372?entry=ttu'
  }
]

const socials = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/company/onix-engineering-consultancy/posts/?feedView=all' },
  { label: 'Instagram', href: 'https://www.instagram.com/onixgroup.ae/' },
  { label: 'Facebook', href: 'https://www.facebook.com/onixdubai/' },
  { label: 'Pinterest', href: 'https://www.pinterest.com/onixgroup' },
  { label: 'TikTok', href: 'https://www.tiktok.com/@onixgroup' }
]

export default function Footer() {
  const currentYear = new Date().getFullYear()
  const [activeOffice, setActiveOffice] = useState(offices[0])

  return (
    <footer className="relative overflow-hidden bg-[#050712] text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.18),_transparent_60%)]" aria-hidden />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,_rgba(124,58,237,0.22),_transparent_55%)]" aria-hidden />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-4 py-20">
        {/* CTA Banner */}
        <div className="mb-16 rounded-3xl border border-white/12 bg-white/5 px-8 py-10 backdrop-blur">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-[11px] uppercase tracking-[0.35em] text-blue-100/85">Let&apos;s Collaborate</p>
              <h3 className="mt-3 text-2xl font-semibold text-white sm:text-3xl">
                Planning your next landmark project?
              </h3>
              <p className="mt-3 text-sm text-gray-200/85 sm:text-base">
                ONIX delivers engineering, construction, and fit-out experiences that exceed expectations. Share your
                vision and we&apos;ll design the execution playbook.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <a
                href="tel:+97142838880"
                className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-gray-900 transition-transform duration-300 hover:scale-[1.02]"
              >
                Book a discovery call
              </a>
              <a
                href="mailto:info@onixengineering.com"
                className="inline-flex items-center justify-center rounded-full border border-white/35 px-6 py-3 text-sm font-semibold text-white transition-all hover:border-white hover:bg-white/10"
              >
                Email our team
              </a>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[200px_240px_280px_minmax(0,1fr)] lg:gap-16">
          {/* Navigation */}
          <div className="space-y-5">
            <h3 className="text-sm font-semibold uppercase tracking-[0.3em] text-gray-300">Navigation</h3>
            <ul className="space-y-2 text-sm text-gray-300/85">
              {primaryLinks.map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="transition-colors hover:text-white">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-5">
            <h3 className="text-sm font-semibold uppercase tracking-[0.3em] text-gray-300">Services</h3>
            <ul className="space-y-2 text-sm text-gray-300/85">
              {serviceCategories.map((service) => (
                <li key={service.label}>
                  <Link href={service.href} className="transition-colors hover:text-white">
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Visit Us */}
          <div className="space-y-5">
            <h3 className="text-sm font-semibold uppercase tracking-[0.3em] text-gray-300">Visit Us</h3>
            <div className="rounded-2xl border border-white/12 bg-white/5 p-5 backdrop-blur">
              <div className="flex flex-wrap gap-2">
                {offices.map((office) => {
                  const isActive = office.name === activeOffice.name
                  return (
                    <button
                      key={office.name}
                      onClick={() => setActiveOffice(office)}
                      className={`rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-wider transition-all ${
                        isActive
                          ? 'bg-white text-gray-900 shadow-lg shadow-white/20'
                          : 'border border-white/20 text-gray-200 hover:border-white/40 hover:bg-white/10'
                      }`}
                    >
                      {office.name}
                    </button>
                  )
                })}
              </div>

              <div className="mt-6 space-y-2 text-sm text-gray-200">
                {activeOffice.address.map((line) => (
                  <p key={line}>{line}</p>
                ))}
              </div>

              <a
                href={activeOffice.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-blue-200 hover:text-white transition-colors"
              >
                Open in Google Maps ↗
              </a>

              <div className="mt-6 space-y-1 text-sm text-gray-200/85">
                <p className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" aria-hidden />
                  +971 50 123 4567
                </p>
                <p>info@onixengineering.com</p>
              </div>
            </div>
          </div>

          {/* Brand Column */}
          <div className="space-y-6">
            <div className="space-y-4">
              <Image src="/images/ONIX GROUP 0002.png" width={240} height={240} alt="ONIX Group" className="h-20 w-auto sm:h-24" />
              <p className="text-sm text-gray-300/85">
                We deliver integrated engineering, construction, and design experiences—driven by innovation, disciplined
                execution, and a culture of relentless client focus.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3 text-sm text-gray-100/85">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-white/20 px-3 py-1 transition-colors hover:border-white hover:bg-white/10"
                >
                  {social.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 border-t border-white/12 pt-8">
          <div className="flex flex-col gap-4 text-sm text-gray-400/80 md:flex-row md:items-center md:justify-between">
            <p>© {currentYear} Onix Group of Companies. All rights reserved.</p>
            <div className="flex flex-wrap items-center gap-5">
              <Link href="/privacy" className="transition-colors hover:text-white">
                Privacy Policy
              </Link>
              <Link href="/terms" className="transition-colors hover:text-white">
                Terms of Service
              </Link>
              <Link href="/contact" className="transition-colors hover:text-white">
                Get Support
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
