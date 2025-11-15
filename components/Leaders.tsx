'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function Leaders() {
  const [isLoading, setIsLoading] = useState(true)
  const [showSamiProfile, setShowSamiProfile] = useState(false)

  useEffect(() => {
    // Show loading screen for 2 seconds
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  const leaders = [
    {
      name: 'Rameez Kaddour',
      title: 'Founder',
      description:
        'Founder of ONIX, specialized in Architecture and Civil Engineering with 15+ years of hands-on experience delivering high-impact projects.',
      image: '/images/rameez-kaddour.webp',
      slug: 'rameez-kaddour',
      achievements: [
        '15+ years across architecture and civil engineering',
        'Delivered multi-disciplinary projects from concept to completion',
        'Built a culture focused on quality, innovation, and client success',
      ],
    },
    {
      name: 'Ahmed Al Kaddour',
      title: 'Managing Director',
      description:
        "Civil Engineer with 25+ years of experience in Dubai. Ahmed leads ONIX Group with a delivery-first mindset, combining technical depth and proven leadership to drive growth across engineering and construction.",
      image: '/images/ahmed_al_kaddour.webp',
      slug: 'ahmed-al-kaddour',
      achievements: [
        '25+ years delivering civil engineering projects in Dubai',
        'Led multidisciplinary teams across major developments',
        'Built long-term client relationships through quality and trust',
      ],
    },
    {
      name: 'Kaddour Al Kaddour',
      title: 'Head of Design Department',
      description:
        'Architect with 10+ years of experience leading design across residential and commercial projects, driving concept-to-detail excellence at ONIX.',
      image: '/images/kaddour.webp',
      slug: 'kaddour-al-kaddour',
      achievements: [
        '10+ years in architectural design leadership',
        'Delivered award‑winning residential and commercial concepts',
        'Championed high standards in detailing and client experience',
      ],
    },
    {
      name: 'Nabil Al Kaddour',
      title: 'Head of ONIX PLUS',
      description:
        'Leads ONIX PLUS (Construction, Fit‑Out, and Landscaping). Focused on turning design and engineering strategies into reality with precision, quality, and on‑time delivery within budget.',
      image: '/images/nabil.webp',
      slug: 'nabil-al-kaddour',
      achievements: [
        'Delivered multi‑scope construction, fit‑out, and landscape projects',
        'Built execution frameworks for quality and cost control',
        'Consistently achieved on‑time, on‑budget outcomes',
      ],
    },
  ]

  // Static leaders data used without CMS


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
          <source src="/videos/ONIX GROUP LOADING.mp4" type="video/mp4" />
          {/* Fallback for browsers that don't support video */}
          <div className="flex items-center justify-center h-full">
            <img 
              src="/images/ONIX GROUP 0002.png" 
              alt="ONIX GROUP Loading" 
              className="object-contain animate-pulse w-[120px] sm:w-[160px] md:w-[200px] lg:w-[240px] h-auto"
            />
          </div>
        </video>
      </div>
    )
  }

  return (
    <div className="min-h-screen relative">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <iframe
          src="https://player.vimeo.com/video/1135633257?autoplay=1&loop=1&muted=1&controls=0&title=0&byline=0&portrait=0"
          title="ONIX Leaders Background"
          className="pointer-events-none absolute top-1/2 left-1/2 min-h-[120vh] min-w-[120vw] -translate-x-1/2 -translate-y-1/2"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
          frameBorder="0"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/80 via-gray-900/60 to-gray-900/95"></div>
      </div>
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
            src="/images/ONIX GROUP 0002.png" 
            alt="ONIX Logo" 
            className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 object-contain"
          />
        </div>
      </div>

      {/* Main Headline */}
      <div className="text-center py-6 px-4 relative z-20">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-white mb-2 tracking-wide">
          OUR LEADERS
        </h2>
        <p className="text-lg text-gray-300">
          Meet the visionaries who guide our journey
        </p>
      </div>

      {/* Leaders Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {leaders.map((leader, index) => (
            <div key={index} className="group">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl">
                {/* Leader Photo */}
                <div className="mb-4">
                  <div className="w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-white/30 shadow-xl">
                    <img 
                      src={leader.image} 
                      alt={leader.name}
                      className="w-full h-full object-cover object-top transform group-hover:scale-110 transition-transform duration-500"
                      style={{ objectPosition: index === 0 ? '50% 20%' : index === 2 ? '50% 20%' : index === 3 ? '50% 20%' : '50% 50%' }}
                    />
                  </div>
                </div>

                {/* Leader Info */}
                <div className="text-center">
                  <h3 className="text-xl font-bold text-white mb-1">{leader.name}</h3>
                  <p className="text-sm text-blue-300 mb-3 font-medium">{leader.title}</p>
                  <p className="text-gray-300 leading-relaxed mb-4 text-sm">{leader.description}</p>
                  
                  {/* Achievements */}
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-white mb-2">Key Achievements:</h4>
                    <ul className="text-xs text-gray-300 space-y-1">
                      {leader.achievements.map((achievement, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="text-blue-400 mr-2">•</span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Job Positions Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 text-center relative z-20">
        <div className="mt-12">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-6 text-center">KEY POSITIONS & PROFILES</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white/5 rounded-lg p-6">
                <h4 className="text-lg font-semibold text-blue-400 mb-3">Structural Engineers</h4>
                <p className="text-gray-300 text-sm mb-4">
                  Our structural engineering team specializes in designing and analyzing building structures, bridges, and infrastructure projects.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center text-sm text-gray-400">
                    <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
                    Senior Structural Engineers: 8
                  </div>
                  <div className="flex items-center text-sm text-gray-400">
                    <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
                    Junior Structural Engineers: 12
                  </div>
                  <div className="flex items-center text-sm text-gray-400">
                    <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
                    CAD Specialists: 6
                  </div>
                </div>
              </div>

              <div className="bg-white/5 rounded-lg p-6">
                <h4 className="text-lg font-semibold text-green-400 mb-3">Project Managers</h4>
                <p className="text-gray-300 text-sm mb-4">
                  Experienced project managers overseeing construction and engineering projects from conception to completion.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center text-sm text-gray-400">
                    <span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>
                    Senior Project Managers: 5
                  </div>
                  <div className="flex items-center text-sm text-gray-400">
                    <span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>
                    Project Coordinators: 8
                  </div>
                  <div className="flex items-center text-sm text-gray-400">
                    <span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>
                    Site Supervisors: 10
                  </div>
                </div>
              </div>

              <div className="bg-white/5 rounded-lg p-6">
                <h4 className="text-lg font-semibold text-purple-400 mb-3">Design Specialists</h4>
                <p className="text-gray-300 text-sm mb-4">
                  Creative professionals specializing in architectural design, interior design, and 3D visualization.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center text-sm text-gray-400">
                    <span className="w-2 h-2 bg-purple-400 rounded-full mr-2"></span>
                    Architects: 6
                  </div>
                  <div className="flex items-center text-sm text-gray-400">
                    <span className="w-2 h-2 bg-purple-400 rounded-full mr-2"></span>
                    Interior Designers: 4
                  </div>
                  <div className="flex items-center text-sm text-gray-400">
                    <span className="w-2 h-2 bg-purple-400 rounded-full mr-2"></span>
                    3D Visualizers: 3
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 text-center">
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-white mb-4">Explore Our Story</h3>
          <p className="text-gray-300 mb-6">Discover the timeline of our journey and achievements</p>
          <Link 
            href="/timeline" 
            className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-105"
          >
            <span className="mr-2">View Timeline</span>
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
              STEP INTO THE WORLD OF ONIX GROUP OF COMPANIES
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
                  <p className="text-white text-lg">123 Engineering Street, Business District, City 12345</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <p className="text-white text-lg">+1 (555) 123-4567</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-white text-lg">Info@onixengineering.com</p>
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
                  <p className="text-white text-lg">Saturday: 9:00 AM - 2:00 PM</p>
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

      {/* Sami Ibrahim Profile Modal */}
      {showSamiProfile && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-8">
              {/* Header */}
              <div className="flex justify-between items-start mb-6">
                <div className="flex items-center space-x-4">
                  <img 
                    src="/images/SAMMY.png" 
                    alt="Sami Ibrahim" 
                    className="w-20 h-20 rounded-full object-cover object-top"
                  />
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900">Sami Ibrahim</h2>
                    <p className="text-lg text-blue-600 font-semibold">Structural Engineer</p>
                    <p className="text-sm text-gray-600">ONIX Engineering Consultancy</p>
                  </div>
                </div>
                <button 
                  onClick={() => setShowSamiProfile(false)}
                  className="text-gray-400 hover:text-gray-600 transition-colors"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Qualifications */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Qualifications</h3>
                <div className="bg-blue-50 rounded-lg p-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                      <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Bachelor of Technology (BTech)</p>
                      <p className="text-gray-600">Civil Engineering</p>
                      <p className="text-sm text-gray-500">Graduated with Honors</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Professional Experience */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Professional Experience</h3>
                <div className="space-y-4">
                  <div className="border-l-4 border-blue-500 pl-4">
                    <h4 className="font-semibold text-gray-900">Structural Engineer</h4>
                    <p className="text-blue-600 font-medium">ONIX Engineering Consultancy</p>
                    <p className="text-sm text-gray-600">2020 - Present</p>
                    <p className="text-sm text-gray-700 mt-2">
                      Specializing in structural analysis, design of reinforced concrete and steel structures, 
                      and project coordination for major construction projects.
                    </p>
                  </div>
                </div>
              </div>

              {/* Skills & Expertise */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Skills & Expertise</h3>
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-gray-50 rounded-lg p-3 text-center">
                    <span className="text-sm font-medium text-gray-700">Structural Analysis</span>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-3 text-center">
                    <span className="text-sm font-medium text-gray-700">AutoCAD</span>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-3 text-center">
                    <span className="text-sm font-medium text-gray-700">ETABS</span>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-3 text-center">
                    <span className="text-sm font-medium text-gray-700">SAP2000</span>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-3 text-center">
                    <span className="text-sm font-medium text-gray-700">Project Management</span>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-3 text-center">
                    <span className="text-sm font-medium text-gray-700">Building Codes</span>
                  </div>
                </div>
              </div>

              {/* Contact Information */}
              <div className="border-t pt-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Contact Information</h3>
                <div className="space-y-2">
                  <div className="flex items-center space-x-3">
                    <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <span className="text-sm text-gray-700">sami.ibrahim@onixengineering.com</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <span className="text-sm text-gray-700">+971 50 123 4567</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

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
