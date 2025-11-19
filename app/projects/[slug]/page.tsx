'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import Image from 'next/image'

export default function ProjectPage() {
  const [isLoading, setIsLoading] = useState(true)
  const [project, setProject] = useState<any>(null)
  const params = useParams()

  useEffect(() => {
    // Show loading screen for 2 seconds
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    // Project data based on slug
    const projectsData = {
      'modern-office-complex': {
        title: 'Modern Office Complex',
        category: 'Commercial',
        year: '2023',
        description: 'A soaring architectural masterpiece where innovation meets sustainability, redefining the future of corporate workspaces.',
        fullDescription: 'Rising 50 stories above the city skyline, this architectural masterpiece represents the convergence of visionary design and sustainable engineering. Every element—from the intelligent building systems to the biophilic interiors—has been meticulously crafted to create an environment that inspires productivity while honoring our commitment to environmental stewardship. This isn\'t just an office building; it\'s a statement about the future of corporate architecture.',
        image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        location: 'Dubai, UAE',
        client: 'Confidential',
        size: '2.5 million sq ft',
        features: [
          'LEED Platinum Certified',
          'Smart building automation systems',
          'Solar panel integration',
          'Advanced HVAC systems',
          'Water recycling systems',
          'Green roof implementation'
        ],
        services: [
          'Structural Engineering',
          'MEP Engineering',
          'Project Management',
          'Sustainable Design Consulting'
        ],
        timeline: '36 months',
        status: 'Completed'
      },
      'highway-bridge-project': {
        title: 'Highway Bridge Project',
        category: 'Infrastructure',
        year: '2022',
        description: 'An engineering marvel that bridges communities, transforming regional connectivity with cutting-edge structural design.',
        fullDescription: 'Spanning 2.5 kilometers of challenging terrain, this suspension bridge stands as a testament to engineering excellence and human ambition. More than just a transportation link, it represents the seamless connection between two vibrant cities, enabling economic growth and cultural exchange. With its elegant design and robust construction, this infrastructure marvel will serve generations, becoming an iconic symbol of regional progress and connectivity.',
        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        location: 'Abu Dhabi, UAE',
        client: 'Department of Transport',
        size: '2.5 km span',
        features: [
          'Advanced seismic resistance',
          'Smart traffic management systems',
          'LED lighting integration',
          'Weather monitoring systems',
          'Emergency response infrastructure',
          'Pedestrian walkways'
        ],
        services: [
          'Civil Engineering',
          'Structural Engineering',
          'Traffic Engineering',
          'Project Management'
        ],
        timeline: '48 months',
        status: 'Completed'
      },
      'residential-tower': {
        title: 'Residential Tower',
        category: 'Residential',
        year: '2023',
        description: 'Elevated living reimagined—where luxury meets intelligent design, creating an unparalleled residential experience.',
        fullDescription: 'Where the sky meets sophistication, this residential tower elevates the concept of modern living to extraordinary heights. Each residence is a sanctuary of intelligent design, where cutting-edge automation seamlessly integrates with luxurious finishes. From the infinity pool that seems to merge with the horizon to the private wellness spaces, every detail has been curated to create an environment where residents don\'t just live—they thrive in an atmosphere of refined elegance and technological innovation.',
        image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        location: 'Dubai Marina, UAE',
        client: 'Premium Developers',
        size: '1.8 million sq ft',
        features: [
          'Smart home automation',
          'Rooftop infinity pool',
          'Private gym and spa',
          'Concierge services',
          'EV charging stations',
          'High-speed fiber internet'
        ],
        services: [
          'Architectural Design',
          'MEP Engineering',
          'Smart Systems Integration',
          'Project Management'
        ],
        timeline: '42 months',
        status: 'Completed'
      },
      'industrial-plant': {
        title: 'Industrial Plant',
        category: 'Industrial',
        year: '2022',
        description: 'Precision-engineered manufacturing excellence, where advanced systems drive productivity and operational efficiency.',
        fullDescription: 'In the heart of industrial innovation, this manufacturing facility stands as a beacon of precision engineering and operational excellence. Every system has been meticulously designed to maximize efficiency while prioritizing worker safety and environmental responsibility. The seamless integration of advanced MEP systems creates a production environment where technology and human expertise converge, resulting in unparalleled quality output and sustainable operations that set new benchmarks for the industry.',
        image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        location: 'Sharjah, UAE',
        client: 'Industrial Group',
        size: '500,000 sq ft',
        features: [
          'Advanced HVAC systems',
          'Automated production lines',
          'Energy-efficient lighting',
          'Waste management systems',
          'Safety monitoring systems',
          'Quality control laboratories'
        ],
        services: [
          'Industrial Engineering',
          'MEP Engineering',
          'Process Engineering',
          'Project Management'
        ],
        timeline: '30 months',
        status: 'Completed'
      }
    }

    const slug = params?.slug as string
    if (slug && projectsData[slug as keyof typeof projectsData]) {
      setProject(projectsData[slug as keyof typeof projectsData])
    }
  }, [params])

  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-black z-[9999] flex items-center justify-center">
        <video
          className="object-contain w-[260px] sm:w-[320px] md:w-[420px] lg:w-[520px] xl:w-[600px] h-auto"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
        >
          <source src="/videos/ONIX_GROUP_LOADING.mp4" type="video/mp4" />
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

  if (!project) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Project Not Found</h1>
          <Link href="/#projects" className="text-blue-400 hover:text-blue-300">
            ← Back to Projects
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* Back Button */}
      <div className="fixed top-8 left-8 z-50">
        <Link href="/#projects" className="inline-flex items-center text-white hover:text-blue-400 transition-colors duration-300 bg-black/30 backdrop-blur-sm px-4 py-2 rounded-lg">
          <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          <span className="text-sm uppercase tracking-wide">Back to Projects</span>
        </Link>
      </div>

      {/* Hero Section */}
      <div className="relative h-[60vh] overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/80 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 p-8 lg:p-12 z-10">
          <div className="max-w-7xl mx-auto">
            <div className="inline-block bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-4">
              <span className="text-sm font-medium text-white uppercase tracking-wider">{project.category}</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">{project.title}</h1>
            <p className="text-xl text-gray-200 max-w-3xl">{project.description}</p>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-white mb-4">Project Overview</h2>
              <p className="text-lg text-gray-300 leading-relaxed">{project.fullDescription}</p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-white mb-4">Key Features</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {project.features.map((feature: string, index: number) => (
                  <div key={index} className="flex items-start bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10">
                    <svg className="w-6 h-6 text-blue-400 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-white mb-4">Services Provided</h2>
              <div className="flex flex-wrap gap-3">
                {project.services.map((service: string, index: number) => (
                  <span key={index} className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                    {service}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 sticky top-8">
              <h3 className="text-xl font-bold text-white mb-6">Project Details</h3>
              <div className="space-y-4">
                <div>
                  <span className="text-gray-400 text-sm uppercase tracking-wide">Location</span>
                  <p className="text-white font-medium">{project.location}</p>
                </div>
                <div>
                  <span className="text-gray-400 text-sm uppercase tracking-wide">Client</span>
                  <p className="text-white font-medium">{project.client}</p>
                </div>
                <div>
                  <span className="text-gray-400 text-sm uppercase tracking-wide">Size</span>
                  <p className="text-white font-medium">{project.size}</p>
                </div>
                <div>
                  <span className="text-gray-400 text-sm uppercase tracking-wide">Timeline</span>
                  <p className="text-white font-medium">{project.timeline}</p>
                </div>
                <div>
                  <span className="text-gray-400 text-sm uppercase tracking-wide">Status</span>
                  <p className="text-white font-medium">{project.status}</p>
                </div>
                <div>
                  <span className="text-gray-400 text-sm uppercase tracking-wide">Year</span>
                  <p className="text-white font-medium">{project.year}</p>
                </div>
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

