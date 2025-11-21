'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Timeline() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Show loading screen for 2 seconds
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  const timelineEvents = [
    {
      number: '01',
      title: 'Digital Transformation and Innovation Leadership',
      description:
        'In 2021, Onix Group embraced digital transformation across every company. Founder & CEO Rameez Kaddour set the mandate for automation, data fluency, and client portals that keep decisions moving in real time.',
      image: '/images/rameez-kaddour.webp',
      person: 'Rameez Kaddour',
      role: 'Founder & CEO',
      year: '2021',
      stats: ['40+ digital initiatives launched', 'Client portal adoption 95%', 'Execution velocity +32%']
    },
    {
      number: '02',
      title: 'Engineering Excellence Led by Kaddour Al Kaddour',
      description:
        'In 2022, Kaddour Al Kaddour stepped in as General Manager of ONIX Engineering, unifying structural, architectural, and MEP teams around BIM-first delivery. His integrated leadership accelerated design sprints and raised quality benchmarks across every sector.',
      image: '/images/kaddour.webp',
      person: 'Kaddour Al Kaddour',
      role: 'General Manager, ONIX Engineering',
      year: '2022',
      stats: ['27 flagship concepts delivered', 'Design QA time -45%', 'BIM coordination across 100% projects']
    },
    {
      number: '03',
      title: 'Onix Plus Construction Expansion',
      description:
        'With the launch of ONIX PLUS in 2023, Nabil Al Kaddour unified contracting, fit-out, and landscaping into one execution engine. The team now delivers turnkey packages from groundworks to final handover.',
      image: '/images/nabil.webp',
      person: 'Nabil Al Kaddour',
      role: 'General Manager, ONIX PLUS',
      year: '2023',
      stats: ['18 multi-scope projects delivered', 'Average delivery time -28%', 'Integrated fit-out & landscaping crews']
    },
    {
      number: '04',
      title: 'Design Innovation – ONIX Design Studio',
      description:
        'Under General Manager Mamoun Al Hussien, ONIX Design Studio rolled out integrated concept labs across the GCC, combining interior, architectural, and experiential design into one interdisciplinary workflow.',
      image: '/images/mamoun.webp',
      person: 'Mamoun Al Hussien',
      role: 'General Manager, ONIX Design Studio',
      year: '2024',
      stats: ['Signature design labs launched', 'Turnaround time -22%', 'Cross-discipline ops teams synced']
    },
    {
      number: '05',
      title: 'Crimson Steel Contracting Expansion',
      description:
        'Anas Ali, General Manager of CRIMSON, scaled the specialized steel contracting division with rapid-delivery containerized solutions and high-precision fabrication for GCC infrastructure.',
      image: '/images/Anas.webp',
      person: 'Anas Ali',
      role: 'General Manager, CRIMSON Steel Contracting',
      year: '2025',
      stats: ['Express container builds delivered', 'Fabrication lead time -30%', 'Integrated QA dashboards across yards']
    },
    {
      number: '06',
      title: 'ONIX Engineering Abu Dhabi Expansion',
      description:
        'Diaa Zayoud, General Manager of ONIX Engineering Abu Dhabi, launched a dedicated delivery office to coordinate structural, infrastructure, and MEP programs across the capital, accelerating client approvals and site execution.',
      image: '/images/Dia.webp',
      person: 'Diaa Zayoud',
      role: 'General Manager, ONIX Engineering Abu Dhabi',
      year: '2025',
      stats: ['Dedicated Abu Dhabi delivery hub', 'Permitting cycle time -18%', 'Cross-discipline teams deployed citywide']
    },
    {
      number: '07',
      title: 'ONIX Prime Digitization',
      description:
        'Obadam Saad Hamada, General Manager of ONIX Prime, modernized accounting and tax consultancy operations with cloud-native workflows, AI-assisted compliance checks, and data-rich client dashboards.',
      image: '/images/Obada.webp',
      person: 'Obadam Saad Hamada',
      role: 'General Manager, ONIX Prime',
      year: '2025',
      stats: ['AI-led tax compliance reviews', 'Client dashboards launched', 'Month-end close time -28%']
    }
  ]

  const timelineRef = useRef<HTMLDivElement>(null)
  const [visibleCards, setVisibleCards] = useState<boolean[]>(() =>
    new Array(timelineEvents.length).fill(false)
  )

  useEffect(() => {
    const cards = timelineRef.current?.querySelectorAll<HTMLDivElement>('[data-timeline-card]')
    if (!cards?.length) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute('data-index'))
            setVisibleCards((prev) => {
              if (prev[index]) return prev
              const next = [...prev]
              next[index] = true
              return next
            })
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.25 }
    )

    cards.forEach((card) => observer.observe(card))

    return () => observer.disconnect()
  }, [timelineEvents.length])

  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-black z-[9999] flex items-center justify-center">
        {/* ONIX GROUP LOADING Video */}
        <video
          className="object-contain w-[260px] sm:w-[320px] md:w-[420px] lg:w-[520px] xl:w-[600px] h-auto"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          webkit-playsinline="true"
          x5-video-player-type="h5"
          x5-video-player-fullscreen="true"
          x5-video-orientation="portraint"
        >
          <source src="/videos/ONIX_GROUP_LOADING.mp4" type="video/mp4" />
          {/* Fallback for browsers that don't support video */}
          <div className="flex items-center justify-center h-full">
            <Image
              src="/images/ONIX_GROUP_0002.png"
              alt="ONIX GROUP Loading"
              width={240}
              height={240}
              className="object-contain animate-pulse w-[120px] sm:w-[160px] md:w-[200px] lg:w-[240px] h-auto"
            />
          </div>
        </video>
      </div>
    )
  }

  return (
    <div className="min-h-screen relative">
      {/* Background */}
      <div className="absolute inset-0 w-full h-full bg-gradient-to-b from-gray-900 via-gray-900/95 to-gray-900/80"></div>
      {/* Back Button */}
      <div className="fixed top-8 left-8 z-50 relative">
        <Link href="/" className="inline-flex items-center text-white hover:text-blue-400 transition-colors duration-300">
          <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          <span className="text-sm uppercase tracking-wide">Back</span>
        </Link>
      </div>

      {/* Onix Logo - Top Center */}
      <div className="pt-6 pb-6 text-center relative z-20">
        <div className="flex items-center justify-center mb-2">
          <img 
            src="/images/ONIX_GROUP_0002.png"
            alt="ONIX Logo"
            className="w-48 h-48 object-contain"
          />
        </div>
      </div>

      {/* Main Headline */}
      <div className="text-center py-6 px-4 relative z-20">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-white mb-2 tracking-wide">
          OUR STORY
        </h2>
        <p className="text-lg text-gray-300">
          Growing up with a Glorious Nation
        </p>
      </div>

      {/* Introductory Story Section - Above Timeline */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-20">
        <div className="relative min-h-screen flex items-center">
          <div className="relative z-20 w-full">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
              {/* Left Side - Text Content with Scroll Animation */}
                <div className="space-y-6">
                  {/* Main Title */}
                  <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                  Founders Built With Engineering Grit
                  </h3>

                  {/* Description */}
                  <div className="space-y-6">
                    <p className="text-lg text-gray-300 leading-relaxed">
                    Our story began in 2020, when founder Ahmed Al Kaddour channelled two decades of engineering expertise into launching a new kind of consultancy. His goal: build a group of companies capable of delivering complex projects with uncompromising precision and speed.
                    </p>

                    <p className="text-lg text-gray-300 leading-relaxed">
                    What started as a boutique consultancy quickly expanded under Ahmed’s leadership into a family of specialists covering engineering, construction, fit-out, landscaping, and smart technology. Each step was driven by the conviction that the region deserves partners who think bigger and execute faster.
                    </p>

                    <p className="text-lg text-gray-300 leading-relaxed">
                    Today, Onix Group stands as a young yet proven leader—engineered by Ahmed Al Kaddour’s vision, five years strong, future-ready, and committed to reshaping skylines across the UAE and beyond.
                  </p>
                        </div>
                      </div>

              {/* Right Side - Featured Leader Photo */}
              <div className="relative">
                <div className="w-full h-96 lg:h-[520px] rounded-[36px] overflow-hidden border-4 border-white/20 shadow-2xl">
                  <img 
                    src="/images/ahmed_al_kaddour.webp"
                    alt="Ahmed Al Kaddour"
                    className="w-full h-full object-cover object-top"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-gray-900/5 to-transparent"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Timeline Header */}
      <div className="text-center py-12 px-4 relative z-20">
        <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 drop-shadow-lg">
          Take a walk down history to see what transpired over the years
        </h3>
        <p className="text-xl md:text-2xl text-gray-200 font-medium">
          Into making the Group what it is today
        </p>
      </div>

      {/* Roadmap Timeline */}
      <div className="relative z-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20" ref={timelineRef}>
        <div className="relative md:pt-6">
          <div className="absolute left-[1.25rem] top-0 h-full w-px bg-gradient-to-b from-blue-500/60 via-blue-500/20 to-transparent md:left-1/2 md:-translate-x-1/2" />
          <div className="space-y-12 md:space-y-20">
            {timelineEvents.map((event, index) => {
              const isEven = index % 2 === 0
              const isVisible = visibleCards[index]

              return (
            <div
                  key={event.title}
                  className="relative md:flex md:items-center md:justify-between"
                >
                  <span className="absolute left-[1.25rem] top-6 z-10 flex h-4 w-4 -translate-x-1/2 items-center justify-center md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2">
                    <span className="absolute h-6 w-6 rounded-full bg-blue-500/20 animate-ping" />
                    <span className="relative flex h-4 w-4 items-center justify-center rounded-full border-2 border-blue-300 bg-slate-950 shadow-lg shadow-blue-500/30">
                      <span className="h-2 w-2 rounded-full bg-blue-400" />
                    </span>
                  </span>

                  <div
                    data-timeline-card
                    data-index={index}
                    className={[
                      'group relative mt-10 overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 shadow-lg backdrop-blur-md transition-all duration-500 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-blue-500/30 md:mt-0 md:w-[48%]',
                      isEven ? 'md:ml-auto md:text-right' : 'md:mr-auto md:text-left',
                      isVisible
                        ? 'translate-y-0 opacity-100'
                        : 'translate-y-6 opacity-85 md:opacity-70 md:translate-y-10'
                    ].join(' ')}
                  >
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-purple-500/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                    <div className="pointer-events-none absolute inset-0 border border-white/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className={`flex items-center gap-4 ${isEven ? 'md:flex-row-reverse' : ''}`}>
                      {event.image ? (
                        <div className="h-20 w-20 flex-shrink-0 overflow-hidden rounded-3xl border border-white/10 shadow-inner shadow-blue-500/20">
                          <img
                            src={event.image}
                            alt={event.title}
                            className="h-full w-full object-cover object-top"
                          />
                        </div>
                      ) : (
                        <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-blue-500/20 text-lg font-semibold text-blue-200 shadow-inner shadow-blue-500/30">
                {event.number}
              </div>
                      )}
                      <div className={`text-left ${isEven ? 'md:text-right' : ''}`}>
                        <span className="text-xs font-semibold uppercase tracking-[0.35em] text-blue-300">
                          {event.year}
                        </span>
                        {event.person && (
                          <h4 className="mt-1 text-lg font-semibold text-white">{event.person}</h4>
                        )}
                        {event.role && (
                          <p className="text-sm uppercase tracking-[0.25em] text-blue-200/80">
                            {event.role}
                          </p>
                        )}
                      </div>
                    </div>

                    <h3 className="mt-6 text-2xl font-semibold text-white">{event.title}</h3>
                    <p className="mt-3 text-base leading-relaxed text-gray-200">
                      {event.description}
                    </p>

                    {event.stats && (
                      <div className="mt-6 flex flex-wrap gap-2">
                        {event.stats.map((stat, statIndex) => (
                          <span
                            key={statIndex}
                            className="rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs font-medium text-gray-100 shadow-sm shadow-blue-500/10"
                          >
                            {stat}
                          </span>
                        ))}
                      </div>
                    )}
                    </div>
                </div>
              )
            })}
            </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 text-center">
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-white mb-4">Explore Our Leaders</h3>
          <p className="text-gray-300 mb-6">Meet the visionaries who have shaped our journey</p>
          <Link
            href="/leaders"
            className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-105"
          >
            <span className="mr-2">Meet Our Leaders</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>

      {/* Contact Section */}
      <section className="py-12 sm:py-20 bg-gray-800 relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 uppercase tracking-wide">
              STEP INTO THE WORLD OF <span className="text-red-500">ONIX</span> GROUP OF COMPANIES
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
              Ready to start your next project?<br />
              Contact us for a consultation.<br />
              Let's discuss how our group of companies can help.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Contact Information */}
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-white text-lg">Mardoof Building, Gate B, Office 114<br />Sheikh Zayed Road, Al Safa 1, Dubai</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <p className="text-white text-lg">04 283 8880</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-white text-lg">info@onixgroup.ae</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-white text-lg">Monday - Friday: 8:00 AM - 6:00 PM</p>
                  <p className="text-white text-lg">Saturday: 9:00 AM - 6:00 PM</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-gray-900 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-white mb-6">Send us a Message</h3>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="AE (+971) 50 123 4567"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-white text-gray-900 font-semibold py-3 px-6 rounded-lg hover:bg-gray-100 transition-colors duration-200"
                >
                  Request a manager's consultation
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* WhatsApp Floating Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <a
          href="https://wa.me/97142838880?text=Hello%20ONIX%20Group%2C%20I%20would%20like%20to%20know%20more%20about%20your%20services"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 whatsapp-blink"
        >
          <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
          </svg>
        </a>
      </div>

      {/* Footer Spacing */}
      <div className="h-12"></div>
    </div>
  )
}
