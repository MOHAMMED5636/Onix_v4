'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import Image from 'next/image'

export default function LeaderPage() {
  const [isLoading, setIsLoading] = useState(true)
  const [leader, setLeader] = useState<any>(null)
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0)
  const params = useParams()

  // Videos for background rotation
  const backgroundVideos = [
    '/videos/Get ready for something spectacular! _ Onix Engineering Consultancy _ DXB.mp4',
    '/videos/Get to know the brilliant minds and hands at Onix! _ Onix Engineering Consultancy _ DXB.mp4'
  ]

  useEffect(() => {
    // Show loading screen for 2 seconds
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    // Leader data based on slug
    const leadersData = {
      'rameez-kaddour': {
        name: 'Rameez Kaddour',
        title: 'Chief Executive Officer',
        description: 'A visionary leader with over 25 years of experience in engineering and construction, Rameez has been instrumental in shaping Onix Group into a powerhouse of innovation and excellence.',
        image: '/images/rameez-kaddour.webp',
        achievements: [
          'Led company growth from startup to industry leader',
          'Pioneered sustainable construction practices',
          'Established international partnerships'
        ],
        bio: 'Rameez Kaddour brings over 25 years of exceptional leadership experience to Onix Group. His visionary approach and deep understanding of the engineering and construction industry have been instrumental in transforming the company from a startup into a recognized industry leader.',
        experience: [
          '25+ years in engineering and construction',
          'Led 500+ successful projects',
          'Established operations in 15+ countries',
          'Mentored 200+ professionals'
        ],
        education: 'Master of Engineering, Construction Management',
        certifications: ['PMP Certified', 'LEED Accredited Professional', 'Chartered Engineer']
      },
      'ahmed-al-kaddour': {
        name: 'Ahmed Al Kaddour',
        title: 'Chief Operating Officer',
        description: 'With a strategic mindset and exceptional operational expertise, Ahmed has driven the company\'s growth across multiple sectors, ensuring excellence in every project undertaken.',
        image: '/images/ahmed_al_kaddour.webp',
        achievements: [
          'Optimized operational efficiency by 40%',
          'Managed over 200 successful projects',
          'Developed innovative project management systems'
        ],
        bio: 'Ahmed Al Kaddour is a strategic leader with exceptional operational expertise. His systematic approach to project management and his ability to optimize processes have resulted in significant efficiency improvements across all company operations.',
        experience: [
          '20+ years in operations management',
          'Managed 200+ successful projects',
          'Improved operational efficiency by 40%',
          'Led digital transformation initiatives'
        ],
        education: 'Master of Business Administration, Operations Management',
        certifications: ['Six Sigma Black Belt', 'Project Management Professional', 'Operations Excellence Certified']
      },
      'kaddour-al-kaddour': {
        name: 'Kaddour Al Kaddour',
        title: 'General Manager, ONIX Engineering',
        description: 'As General Manager of ONIX Engineering, Kaddour leads multi-disciplinary design and delivery teams, ensuring every project meets the firm’s standards for innovation and technical excellence.',
        image: '/images/kaddour.webp',
        achievements: [
          'Scaled ONIX Engineering operations across the GCC',
          'Delivered award-winning residential and hospitality projects',
          'Championed BIM-first collaboration and QA discipline'
        ],
        bio: 'Kaddour Al Kaddour directs ONIX Engineering’s day-to-day operations, combining architectural vision with engineering rigor. His leadership aligns concept development, design detailing, and site execution so that clients experience seamless delivery from brief to handover.',
        experience: [
          '12+ years leading multi-disciplinary engineering teams',
          'Oversaw 150+ design-and-build programs',
          'Implemented BIM coordination across 100% of projects',
          'Mentors the next generation of technical leads'
        ],
        education: 'Bachelor of Architecture, Specialized in Integrated Design',
        certifications: ['Chartered Architect', 'BIM Management Certified', 'Project Leadership Program']
      },
      'nabil-al-kaddour': {
        name: 'Nabil Al Kaddour',
        title: 'General Manager, ONIX PLUS',
        description: 'Nabil heads ONIX PLUS, unifying contracting, fit-out, and landscaping into a seamless execution arm that delivers turnkey packages from groundworks to final handover.',
        image: '/images/nabil.webp',
        achievements: [
          'Delivered multi-scope construction, fit-out, and landscape projects',
          'Built execution frameworks for quality and cost control',
          'Consistently achieved on-time, on-budget outcomes'
        ],
        bio: 'As General Manager of ONIX PLUS, Nabil Al Kaddour leads multidisciplinary delivery teams, ensuring every project aligns design intent with flawless execution. His focus on process discipline and client coordination keeps complex scopes moving with precision.',
        experience: [
          '15+ years in design-build and turnkey project management',
          'Scaled integrated fit-out and landscaping crews across the GCC',
          'Implemented cross-functional QA/QC playbooks',
          'Managed portfolio of hospitality, residential, and civic projects'
        ],
        education: 'Bachelor of Civil Engineering, Construction Management focus',
        certifications: ['PMP Certified', 'Lean Construction Practitioner', 'Integrated Project Delivery (IPD) Certification']
      }
    }

    const slug = params?.slug as string
    if (slug && leadersData[slug as keyof typeof leadersData]) {
      setLeader(leadersData[slug as keyof typeof leadersData])
    }
  }, [params])

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

  if (!leader) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Leader Not Found</h1>
          <Link href="/leaders" className="text-blue-400 hover:text-blue-300">
            ← Back to Leaders
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen relative">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <video
          key={currentVideoIndex}
          className="w-full h-full object-cover"
          autoPlay
          muted
          loop={false}
          playsInline
          preload="auto"
          onEnded={() => setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % backgroundVideos.length)}
        >
          <source src={backgroundVideos[currentVideoIndex]} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Back Button */}
      <div className="fixed top-8 left-8 z-50 relative">
        <Link href="/leaders" className="inline-flex items-center text-white hover:text-blue-400 transition-colors duration-300">
          <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          <span className="text-sm uppercase tracking-wide">Back</span>
        </Link>
      </div>

      {/* Onix Logo - Top Center */}
      <div className="pt-6 pb-6 text-center relative z-20">
        <div className="flex items-center justify-center mb-2">
          <Image 
            src="/images/ONIX_LOGO.png" 
            alt="ONIX Logo" 
            width={64}
            height={64}
            className="w-16 h-16 object-contain"
          />
        </div>
        <h1 className="text-2xl font-bold text-white">ONIX</h1>
        <p className="text-xs text-gray-300">GROUP OF COMPANIES</p>
      </div>

      {/* Leader Profile */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 relative z-20">
        <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 lg:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Left Side - Photo and Basic Info */}
            <div className="text-center lg:text-left">
              <div className="w-48 h-48 mx-auto lg:mx-0 rounded-full overflow-hidden border-4 border-white/30 shadow-2xl mb-6">
                <Image 
                  src={leader.image} 
                  alt={leader.name}
                  width={192}
                  height={192}
                  className="w-full h-full object-cover object-top"
                />
              </div>
              
              <h1 className="text-3xl lg:text-4xl font-bold text-white mb-2">{leader.name}</h1>
              <p className="text-xl text-blue-300 mb-4 font-medium">{leader.title}</p>
              <p className="text-gray-300 leading-relaxed">{leader.description}</p>
            </div>

            {/* Right Side - Detailed Info */}
            <div className="space-y-6">
              {/* Bio */}
              <div>
                <h3 className="text-xl font-bold text-white mb-3">Biography</h3>
                <p className="text-gray-300 leading-relaxed">{leader.bio}</p>
              </div>

              {/* Experience */}
              <div>
                <h3 className="text-xl font-bold text-white mb-3">Experience</h3>
                <ul className="space-y-2">
                  {leader.experience.map((exp: string, index: number) => (
                    <li key={index} className="flex items-start text-gray-300">
                      <span className="text-blue-400 mr-3">•</span>
                      <span>{exp}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Education */}
              <div>
                <h3 className="text-xl font-bold text-white mb-3">Education</h3>
                <p className="text-gray-300">{leader.education}</p>
              </div>

              {/* Certifications */}
              <div>
                <h3 className="text-xl font-bold text-white mb-3">Certifications</h3>
                <div className="flex flex-wrap gap-2">
                  {leader.certifications.map((cert: string, index: number) => (
                    <span key={index} className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm">
                      {cert}
                    </span>
                  ))}
                </div>
              </div>

              {/* Key Achievements */}
              <div>
                <h3 className="text-xl font-bold text-white mb-3">Key Achievements</h3>
                <ul className="space-y-2">
                  {leader.achievements.map((achievement: string, index: number) => (
                    <li key={index} className="flex items-start text-gray-300">
                      <span className="text-green-400 mr-3">✓</span>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Spacing */}
      <div className="h-12"></div>
    </div>
  )
}
