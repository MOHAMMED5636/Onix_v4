'use client'

import { useEffect, useRef } from 'react'

export default function Projects() {
  const projects = [
    {
      title: 'Modern Office Complex',
      category: 'Commercial',
      description: '50-story mixed-use development with sustainable design features.',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      year: '2023'
    },
    {
      title: 'Highway Bridge Project',
      category: 'Infrastructure',
      description: 'Suspension bridge connecting two major cities with advanced engineering.',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      year: '2022'
    },
    {
      title: 'Residential Tower',
      category: 'Residential',
      description: 'Luxury residential complex with smart building technologies.',
      image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      year: '2023'
    },
    {
      title: 'Industrial Plant',
      category: 'Industrial',
      description: 'Manufacturing facility with advanced MEP systems integration.',
      image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      year: '2022'
    }
  ]

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
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4 uppercase tracking-wide">Featured Projects</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explore our portfolio of successful engineering projects that showcase our expertise and innovation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-gray-700">
              <div className="relative h-48">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4 bg-white text-gray-900 px-3 py-1 rounded-full text-sm font-medium">
                  {project.category}
                </div>
                <div className="absolute top-4 right-4 bg-gray-900 text-white px-3 py-1 rounded-full text-sm font-medium">
                  {project.year}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
                <p className="text-gray-300">{project.description}</p>
              </div>
            </div>
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
          {[1, 2, 3, 4, 5, 6, 7, 8].map((num, index) => (
            <div
              key={num}
              ref={(el) => { projectItemsRef.current[index] = el }}
              className={`project-item-animate flex flex-col lg:flex-row items-center gap-8 lg:gap-12 overflow-hidden ${
                index === 0 ? 'project-first-item' : index % 2 === 0 ? 'project-even-item' : ''
              }`}
            >
              {/* Text Container - Left Side */}
              <div className="project-text-container w-full lg:w-2/5 flex flex-col justify-center px-4 lg:px-8">
                <h3 className="text-3xl md:text-4xl lg:text-5xl font-light text-white mb-6 leading-tight">
                  EXCEPTIONAL ENGINEERING EXCELLENCE
                </h3>
                <p className="text-gray-300 text-base md:text-lg leading-relaxed mb-6 max-w-2xl">
                  This project showcases our commitment to quality, innovation, and delivering outstanding results. We combine technical expertise with creative vision to create spaces that exceed expectations and stand the test of time.
                </p>
                <div className="flex items-center gap-4">
                  <span className="text-white text-sm font-medium uppercase tracking-wide border-b border-white/30 pb-1 hover:border-white transition-colors cursor-pointer">
                    View Project →
                  </span>
                </div>
              </div>
              
              {/* Image Container - Right Side */}
              <div className="project-image-container w-full lg:w-3/5 h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden">
                <img
                  src={`/images/0${num}.webp`}
                  alt={`Project ${num}`}
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
