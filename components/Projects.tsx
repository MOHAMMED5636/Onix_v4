'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useRef } from 'react'

export default function Projects() {
  const projects = [
    {
      slug: 'luxury-villa-residence',
      title: 'Luxury Villa Residence',
      category: 'Residential',
      description: 'A bespoke villa that blends sculpted concrete, warm timber, and glass to craft a serene private sanctuary with resort-level detailing.',
      image: 'https://res.cloudinary.com/dhq6qrrph/image/upload/v1763634074/qsikhhigbhyc4gg7lco3_ckbkne.webp',
      year: '2024'
    },
    {
      slug: 'loay-nasser-villa',
      title: 'Loay Nasser Signature Villa',
      category: 'Residential',
      description: 'Layered terraces, timber screens, and palm-lined courtyards give this villa a sculpted resort feel.',
      image: 'https://res.cloudinary.com/dhq6qrrph/image/upload/v1763634982/Villa_.MR.LOAY_NASSER___QAIS_MOHAMMAD_3__Page19_yfmxhp.png',
      year: '2025'
    },
    {
      slug: 'signature-courtyard-villa',
      title: 'Signature Courtyard Villa',
      category: 'Residential',
      description: 'Sunken lounges, cascading terraces, and a central courtyard define this sculpted family retreat.',
      image: 'https://res.cloudinary.com/dhq6qrrph/image/upload/v1763638862/2538_1_ancirv.jpg',
      year: '2025'
    },
    {
      slug: 'industrial-plant',
      title: 'Industrial Plant',
      category: 'Industrial',
      description: 'Precision-engineered manufacturing excellence, where advanced systems drive productivity and operational efficiency.',
      image: 'https://res.cloudinary.com/dhq6qrrph/image/upload/v1763634074/qsikhhigbhyc4gg7lco3_ckbkne.webp',
      year: '2022'
    }
  ]

  const projectVideo = {
    title: 'ONIX Group Signature Reel',
    description: 'A fast-paced overview of the design language, engineering capacity, and collaborative culture behind every ONIX commission.',
    src: 'https://player.cloudinary.com/embed/?cloud_name=dhq6qrrph&public_id=Onix_Group_Comp_vwvdir&profile=cld-default',
    poster: '/images/ONIX Engineering Consultancy White.webp',
    tag: 'Brand Film',
    duration: '1:12'
  }

  // Refs for animation items
  const projectItemsRef = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in')
          }
        })
      },
      { threshold: 0.3, rootMargin: '0px 0px -100px 0px' }
    )

    projectItemsRef.current.forEach((item) => {
      if (item) observer.observe(item)
    })

    return () => {
      projectItemsRef.current.forEach((item) => {
        if (item) observer.unobserve(item)
      })
    }
  }, [])

  return (
    <>
    <section id="projects" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto mb-16">
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 via-white/5 to-transparent p-1 shadow-2xl shadow-blue-500/20 backdrop-blur">
            <div className="relative rounded-[26px] bg-black p-4 sm:p-6">
              <div className="flex items-center justify-between mb-4 text-xs uppercase tracking-[0.2em] text-white/60">
                <span className="px-3 py-1 rounded-full border border-white/20">{projectVideo.tag}</span>
                <span className="text-white/70">{projectVideo.duration}</span>
              </div>
              <div className="relative aspect-[16/9] overflow-hidden rounded-2xl border border-white/10">
                <iframe
                  src={projectVideo.src}
                  className="h-full w-full"
                  allow="autoplay; fullscreen; encrypted-media; picture-in-picture"
                  allowFullScreen
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              </div>
              <div className="mt-6 space-y-2">
                <h3 className="text-2xl font-semibold text-white">{projectVideo.title}</h3>
                <p className="text-sm text-white/70">{projectVideo.description}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4 uppercase tracking-wide">Featured Projects</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explore our portfolio of successful engineering projects that showcase our expertise and innovation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {projects.map((project, index) => (
            <Link 
              key={index} 
              href={`/projects/${project.slug}`}
              className="bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl hover:shadow-blue-500/20 transition-all duration-300 border border-gray-700 hover:border-blue-500/50 hover:-translate-y-2 cursor-pointer group"
            >
              <div className="relative h-48 overflow-hidden">
                <Image 
                  src={project.image} 
                  alt={project.title}
                  width={400}
                  height={192}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-white text-gray-900 px-3 py-1 rounded-full text-sm font-medium z-10">
                  {project.category}
                </div>
                <div className="absolute top-4 right-4 bg-gray-900 text-white px-3 py-1 rounded-full text-sm font-medium z-10">
                  {project.year}
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors duration-300">{project.title}</h3>
                <p className="text-gray-300 group-hover:text-gray-200 transition-colors duration-300">{project.description}</p>
                <div className="mt-4 flex items-center text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-sm font-medium">View Details</span>
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-white text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-lg">
            View All Projects
          </button>
        </div>
      </div>
    </section>

    {/* Photo Gallery Section - Studio 54 Style */}
    <section className="py-20 bg-gray-900">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 uppercase tracking-wide">
            OUR PROJECTS & WORK
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Showcasing our engineering excellence
          </p>
        </div>
        
        {/* Studio 54 Style Animated Project Items */}
        <div className="space-y-24 md:space-y-32">
          {[
            {
              num: 1,
              title: 'ARCHITECTURAL INNOVATION REDEFINED',
              description: 'Where visionary design meets structural brilliance, creating iconic landmarks that transform skylines and inspire generations. Every curve, every angle, every detail is meticulously engineered to perfection.'
            },
            {
              num: 2,
              title: 'SUSTAINABLE FUTURE ENGINEERED',
              description: 'Pioneering green technology solutions that harmonize with nature while delivering uncompromising performance. This project represents our commitment to environmental stewardship and sustainable development.'
            },
            {
              num: 3,
              title: 'PRECISION IN EVERY DETAIL',
              description: 'Masterful engineering execution where complexity meets elegance. From concept to completion, we deliver projects that exceed expectations through meticulous planning and flawless implementation.'
            },
            {
              num: 4,
              title: 'CONNECTING COMMUNITIES THROUGH EXCELLENCE',
              description: 'Infrastructure projects that bridge distances and unite people. Our engineering solutions create vital connections that drive economic growth and enhance quality of life for communities.'
            },
            {
              num: 5,
              title: 'LUXURY LIVING ELEVATED',
              description: 'Residential masterpieces where sophisticated design meets cutting-edge technology. We craft living spaces that redefine comfort, elegance, and modern lifestyle aspirations.'
            },
            {
              num: 6,
              title: 'INDUSTRIAL EXCELLENCE UNLEASHED',
              description: 'State-of-the-art facilities engineered for peak performance and operational efficiency. Our industrial projects set new benchmarks in productivity, safety, and sustainable manufacturing.'
            },
            {
              num: 7,
              title: 'SMART INFRASTRUCTURE FOR TOMORROW',
              description: 'Intelligent systems seamlessly integrated into every aspect of design. This project showcases how technology and engineering converge to create adaptive, responsive, and future-ready infrastructure.'
            },
            {
              num: 8,
              title: 'LEGACY OF ENGINEERING MASTERY',
              description: 'Timeless projects that stand as monuments to engineering excellence. Built with uncompromising quality and visionary thinking, these structures will inspire and serve for generations to come.'
            }
          ].map((project, index) => (
            <div
              key={project.num}
              ref={(el) => { projectItemsRef.current[index] = el }}
              className={`project-item-animate flex flex-col lg:flex-row items-center gap-8 lg:gap-12 overflow-hidden ${
                index === 0 ? 'project-first-item' : index % 2 === 0 ? 'project-even-item' : ''
              }`}
            >
              {/* Text Container - Left Side */}
              <div className="project-text-container w-full lg:w-2/5 flex flex-col justify-center px-4 lg:px-8">
                <h3 className="text-3xl md:text-4xl lg:text-5xl font-light text-white mb-6 leading-tight">
                  {project.title}
                </h3>
                <p className="text-gray-300 text-base md:text-lg leading-relaxed mb-6 max-w-2xl">
                  {project.description}
                </p>
                <div className="flex items-center gap-4">
                  <span className="text-white text-sm font-medium uppercase tracking-wide border-b border-white/30 pb-1 hover:border-white transition-colors cursor-pointer">
                    View Project →
                  </span>
                </div>
              </div>
              
              {/* Image Container - Right Side */}
              <div className="project-image-container w-full lg:w-3/5 h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden">
                <Image
                  src={`/images/0${project.num}.webp`}
                  alt={`Project ${project.num}`}
                  width={800}
                  height={600}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    </>
  )
}
