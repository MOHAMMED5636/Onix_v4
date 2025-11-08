'use client'

import { useState, useEffect } from 'react'

export default function About() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.5 }
    )

    const element = document.getElementById('about')
    if (element) {
      observer.observe(element)
    }

    return () => {
      if (element) {
        observer.unobserve(element)
      }
    }
  }, [])

  const AnimatedNumber = ({ end, suffix = '', duration = 2000 }: { end: number; suffix?: string; duration?: number }) => {
    const [count, setCount] = useState(0)

    useEffect(() => {
      if (!isVisible) return

      let startTime: number | undefined
      const animate = (currentTime: number) => {
        if (!startTime) startTime = currentTime
        const progress = Math.min((currentTime - startTime) / duration, 1)
        
        const easeOutQuart = 1 - Math.pow(1 - progress, 4)
        setCount(Math.floor(easeOutQuart * end))

        if (progress < 1) {
          requestAnimationFrame(animate)
        }
      }

      requestAnimationFrame(animate)
    }, [isVisible, end, duration])

    return <span>{count}{suffix}</span>
  }

  return (
    <>
      {/* Who We Are Section */}
      <section id="about" className="py-12 sm:py-24 relative overflow-hidden min-h-screen flex flex-col justify-start">
        {/* Video Background for Who We Are Section */}
        <div className="absolute inset-0 w-full h-full overflow-hidden">
          <div className="absolute inset-y-0 left-0 w-1/2">
            <video 
              autoPlay 
              loop 
              muted 
              playsInline
              className="w-full h-full object-cover"
            >
              <source src="/videos/Get ready for something spectacular! _ Onix Engineering Consultancy _ DXB.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 via-gray-900/40 to-transparent"></div>
          </div>

          <div className="absolute inset-y-0 right-0 w-1/2">
            <video 
              autoPlay 
              loop 
              muted 
              playsInline
              className="w-full h-full object-cover object-top"
            >
              <source src="/videos/Get to know the brilliant minds and hands at Onix! _ Onix Engineering Consultancy _ DXB.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-gradient-to-l from-gray-900/80 via-gray-900/40 to-transparent"></div>
          </div>

          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/80 to-transparent"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-30 w-full pt-8 sm:pt-16 pb-16 sm:pb-20">
          <div className="text-center">
            {/* Header */}
            <div className="mb-8 sm:mb-12">
              <div className="inline-block bg-white/40 backdrop-blur-sm rounded-full px-4 sm:px-6 py-2 sm:py-3 mb-6 sm:mb-8 shadow-2xl">
                <span className="text-sm sm:text-base font-medium text-white uppercase tracking-wider">Who We Are</span>
              </div>
              <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 sm:mb-8 uppercase tracking-wide drop-shadow-2xl">
                Onix Group of Companies
              </h2>
              <div className="w-24 sm:w-40 h-1 bg-white mx-auto shadow-lg"></div>
            </div>

            {/* Main content */}
            <div className="max-w-6xl mx-auto mb-12 sm:mb-16">
              <p className="text-xl sm:text-2xl md:text-3xl text-white leading-relaxed drop-shadow-2xl font-semibold">
                With over a decade of experience, Onix Group of Companies delivers innovative solutions.<br />
                Our diverse portfolio serves clients across engineering, technology, and construction.<br />
                We are committed to quality, excellence, and exceeding expectations.
              </p>
            </div>
            
            {/* Statistics */}
            <div className="grid grid-cols-2 gap-8 sm:gap-12 md:gap-16 max-w-5xl mx-auto">
              <div className="text-center group">
                <div className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-3 sm:mb-4 group-hover:text-white/90 transition-colors duration-300 drop-shadow-2xl">
                  <AnimatedNumber end={500} suffix="+" duration={2500} />
                </div>
                <div className="text-white/90 font-semibold uppercase tracking-wide text-base sm:text-lg drop-shadow-lg">Ongoing Projects</div>
              </div>
              <div className="text-center group">
                <div className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-3 sm:mb-4 group-hover:text-white/90 transition-colors duration-300 drop-shadow-2xl">
                  <AnimatedNumber end={15} suffix="+" duration={2000} />
                </div>
                <div className="text-white/90 font-semibold uppercase tracking-wide text-base sm:text-lg drop-shadow-lg">Years Experience</div>
              </div>
              <div className="text-center group">
                <div className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-3 sm:mb-4 group-hover:text-white/90 transition-colors duration-300 drop-shadow-2xl">
                  <AnimatedNumber end={10} suffix="+" duration={1500} />
                </div>
                <div className="text-white/90 font-semibold uppercase tracking-wide text-base sm:text-lg drop-shadow-lg">Companies</div>
              </div>
              <div className="text-center group">
                <div className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-3 sm:mb-4 group-hover:text-white/90 transition-colors duration-300 drop-shadow-2xl">
                  <AnimatedNumber end={100} suffix="%" duration={2000} />
                </div>
                <div className="text-white/90 font-semibold uppercase tracking-wide text-base sm:text-lg drop-shadow-lg">Client Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section id="leadership" className="py-12 sm:py-24 relative overflow-hidden min-h-screen flex flex-col justify-start">
        {/* Construction Video Background for Leadership - Full Fit */}
        <div className="absolute inset-0 w-full h-full overflow-hidden">
          <video 
            autoPlay 
            loop 
            muted 
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="/videos/OG Reel.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/80 to-transparent"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-8 sm:pt-16 pb-16 sm:pb-20">
          <div className="text-center mb-12 sm:mb-20">
            <div className="inline-block bg-white/10 backdrop-blur-sm rounded-full px-4 sm:px-6 py-2 mb-4 sm:mb-6">
              <span className="text-xs sm:text-sm font-medium text-white uppercase tracking-wider">Leadership</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6 uppercase tracking-wide">
              Our Leadership Team
            </h2>
            <div className="w-16 sm:w-24 h-1 bg-white mx-auto"></div>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="space-y-6 sm:space-y-8 text-center mb-12">
              <p className="text-base sm:text-lg md:text-xl text-gray-200 leading-relaxed">
                Our leadership team brings together decades of experience across engineering and construction.<br />
                Each leader is committed to driving innovation and delivering exceptional results.<br />
                Under their guidance, Onix Group has grown into a diversified conglomerate with excellence.
              </p>
            </div>

            {/* Leadership Team Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
              {[
                {
                  name: 'Ahmed Al Kaddour',
                  title: 'Managing Director',
                  description: 'Civil Engineer with 25+ years of experience in Dubai. Ahmed leads ONIX Group with a delivery-first mindset, combining technical depth and proven leadership to drive growth across engineering and construction.',
                  image: '/images/ahmed al kaddour.png',
                  achievements: [
                    '25+ years delivering civil engineering projects in Dubai',
                    'Led multidisciplinary teams across major developments',
                    'Built long-term client relationships through quality and trust'
                  ]
                },
                {
                  name: 'Rameez Kaddour',
                  title: 'Founder',
                  description: 'Founder of ONIX, specialized in Architecture and Civil Engineering with 15+ years of hands-on experience delivering high-impact projects.',
                  image: '/images/rameez-kaddour.png',
                  achievements: [
                    '15+ years across architecture and civil engineering',
                    'Delivered multi-disciplinary projects from concept to completion',
                    'Built a culture focused on quality, innovation, and client success'
                  ]
                },
                {
                  name: 'Kaddour Al Kaddour',
                  title: 'Head of Design Department',
                  description: 'Architect with 10+ years of experience leading design across residential and commercial projects, driving concept-to-detail excellence at ONIX.',
                  image: '/images/kaddour.png',
                  achievements: [
                    '10+ years in architectural design leadership',
                    'Delivered award‑winning residential and commercial concepts',
                    'Championed high standards in detailing and client experience'
                  ]
                },
                {
                  name: 'Nabil Al Kaddour',
                  title: 'Head of ONIX PLUS',
                  description: 'Leads ONIX PLUS (Construction, Fit‑Out, and Landscaping). Focused on turning design and engineering strategies into reality with precision, quality, and on‑time delivery within budget.',
                  image: '/images/nabil.png',
                  achievements: [
                    'Delivered multi‑scope construction, fit‑out, and landscape projects',
                    'Built execution frameworks for quality and cost control',
                    'Consistently achieved on‑time, on‑budget outcomes'
                  ]
                }
              ].map((leader, index) => (
                <div key={index} className="group">
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl">
                    {/* Leader Photo */}
                    <div className="mb-4">
                      <div className="w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-white/30 shadow-xl">
                        <img 
                          src={leader.image} 
                          alt={leader.name}
                          className="w-full h-full object-cover object-top transform group-hover:scale-110 transition-transform duration-500"
                          style={{ objectPosition: index === 0 ? '50% 20%' : index === 1 ? '50% 10%' : index === 2 ? '50% 20%' : index === 3 ? '50% 20%' : '50% 50%' }}
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
        </div>
      </section>

      {/* Sustainability Section */}
      <section id="sustainability" className="py-12 sm:py-24 relative overflow-hidden min-h-screen flex flex-col justify-start">
        {/* Video Background for Sustainability Section */}
        <div className="absolute inset-0 w-full h-full overflow-hidden">
          <video 
            autoPlay 
            loop 
            muted 
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="/videos/Discover the art of living in our exquisite villa _ Onix Engineering Consultancy _ DXB.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-t from-blue-900/70 via-gray-900/70 to-transparent"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-8 sm:pt-16 pb-16 sm:pb-20">
          <div className="text-center mb-12 sm:mb-20">
            <div className="inline-block bg-white/10 backdrop-blur-sm rounded-full px-4 sm:px-6 py-2 mb-4 sm:mb-6">
              <span className="text-xs sm:text-sm font-medium text-white uppercase tracking-wider">Sustainability</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6 uppercase tracking-wide">
              Sustainable Engineering Solutions
            </h2>
            <div className="w-16 sm:w-24 h-1 bg-white mx-auto"></div>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-6 sm:space-y-8 text-center">
              <p className="text-base sm:text-lg md:text-xl text-gray-200 leading-relaxed">
                At Onix Group, sustainability is at the core of our engineering solutions.<br />
                We integrate environmentally conscious practices into every project.<br />
                Our commitment drives innovation in green technologies and energy efficiency.
              </p>
            </div>
          </div>
        </div>
      </section>

    </>
  )
}
