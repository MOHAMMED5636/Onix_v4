'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function MEPEngineeringPage() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000)
    return () => clearTimeout(timer)
  }, [])

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
          <source src="/videos/ONIX GROUP LOADING.mp4" type="video/mp4" />
          <div className="flex items-center justify-center h-full">
            <Image
              src="/images/ONIX GROUP 0002.png" 
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
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <iframe
            src="https://player.vimeo.com/video/1135633257?autoplay=1&loop=1&muted=1&controls=0&title=0&byline=0&portrait=0"
            title="ONIX MEP Background"
            className="pointer-events-none absolute top-1/2 left-1/2 min-h-[120vh] min-w-[120vw] -translate-x-1/2 -translate-y-1/2"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
            frameBorder="0"
          />
          <div className="absolute inset-0 bg-black/55" />
        </div>
        
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            MEP <span className="text-yellow-400">ENGINEERING</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8">
            Mechanical, Electrical & Plumbing solutions for modern buildings and infrastructure
          </p>
          <Link 
            href="#contact" 
            className="inline-block bg-yellow-600 hover:bg-yellow-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300"
          >
            Get Consultation
          </Link>
        </div>
      </section>

      {/* MEP Services Overview */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our MEP Engineering Services</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Complete Mechanical, Electrical, and Plumbing solutions for residential, commercial, and industrial projects.
            </p>
          </div>

          {/* Mechanical Engineering */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold mb-8 text-center">Mechanical Engineering</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "HVAC Systems",
                  description: "Heating, ventilation, and air conditioning design for optimal comfort and energy efficiency.",
                  icon: "❄️"
                },
                {
                  title: "Fire Protection",
                  description: "Fire suppression systems, sprinkler design, and life safety systems.",
                  icon: "🔥"
                },
                {
                  title: "Plumbing Systems",
                  description: "Water supply, drainage, and waste management system design.",
                  icon: "🚰"
                }
              ].map((service, index) => (
                <div key={index} className="bg-gray-900 p-6 rounded-lg hover:bg-gray-800 transition-all duration-300">
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h4 className="text-xl font-semibold mb-3">{service.title}</h4>
                  <p className="text-gray-400">{service.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Electrical Engineering */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold mb-8 text-center">Electrical Engineering</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "Power Distribution",
                  description: "Electrical power systems, distribution panels, and load calculations.",
                  icon: "⚡"
                },
                {
                  title: "Lighting Design",
                  description: "Interior and exterior lighting design for energy efficiency and aesthetics.",
                  icon: "💡"
                },
                {
                  title: "Security Systems",
                  description: "CCTV, access control, and integrated security system design.",
                  icon: "🔒"
                }
              ].map((service, index) => (
                <div key={index} className="bg-gray-900 p-6 rounded-lg hover:bg-gray-800 transition-all duration-300">
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h4 className="text-xl font-semibold mb-3">{service.title}</h4>
                  <p className="text-gray-400">{service.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Plumbing Engineering */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold mb-8 text-center">Plumbing Engineering</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "Water Supply Systems",
                  description: "Cold and hot water distribution, pressure systems, and water treatment.",
                  icon: "🚿"
                },
                {
                  title: "Drainage Systems",
                  description: "Waste water collection, storm water management, and sewage systems.",
                  icon: "🌊"
                },
                {
                  title: "Gas Systems",
                  description: "Natural gas distribution, safety systems, and gas appliance connections.",
                  icon: "⛽"
                }
              ].map((service, index) => (
                <div key={index} className="bg-gray-900 p-6 rounded-lg hover:bg-gray-800 transition-all duration-300">
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h4 className="text-xl font-semibold mb-3">{service.title}</h4>
                  <p className="text-gray-400">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Specializations */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Specializations</h2>
            <p className="text-xl text-gray-400">
              Expertise across various building types and project scales
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Residential Buildings",
                description: "Apartments, villas, and residential complexes",
                projects: "200+ Projects"
              },
              {
                title: "Commercial Buildings",
                description: "Offices, retail spaces, and mixed-use developments",
                projects: "150+ Projects"
              },
              {
                title: "Healthcare Facilities",
                description: "Hospitals, clinics, and medical centers",
                projects: "50+ Projects"
              },
              {
                title: "Industrial Facilities",
                description: "Manufacturing plants and industrial complexes",
                projects: "80+ Projects"
              }
            ].map((specialization, index) => (
              <div key={index} className="bg-gray-800 p-6 rounded-lg text-center">
                <h3 className="text-xl font-semibold mb-3">{specialization.title}</h3>
                <p className="text-gray-400 mb-4">{specialization.description}</p>
                <span className="inline-block bg-yellow-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                  {specialization.projects}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology & Standards */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Technology & Standards</h2>
            <p className="text-xl text-gray-400">
              Advanced tools and compliance with international standards
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6">Design Software & Tools</h3>
              <div className="space-y-4">
                {[
                  "AutoCAD & Revit MEP",
                  "BIM 360 & Navisworks",
                  "Energy Modeling Software",
                  "Load Calculation Tools",
                  "3D Coordination & Clash Detection",
                  "Project Management Software"
                ].map((tool, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                    <span className="text-gray-300">{tool}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-gray-900 p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-6">Compliance & Certifications</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">UAE Fire & Life Safety Code</span>
                  <span className="text-yellow-400 font-semibold">Compliant</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">IEC Standards</span>
                  <span className="text-yellow-400 font-semibold">Followed</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">ASHRAE Guidelines</span>
                  <span className="text-yellow-400 font-semibold">Applied</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Energy Efficiency</span>
                  <span className="text-yellow-400 font-semibold">LEED Certified</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-gray-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">Ready to Start Your MEP Project?</h2>
          <p className="text-xl text-gray-400 mb-8">
            Contact our MEP engineering experts for a consultation and detailed project proposal.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact" 
              className="bg-yellow-600 hover:bg-yellow-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300"
            >
              Get Free Consultation
            </Link>
            <a 
              href="tel:+97142838880" 
              className="border border-yellow-600 text-yellow-400 hover:bg-yellow-600 hover:text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300"
            >
              Call +971 42 83 8880
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <Link href="/" className="text-yellow-400 hover:text-yellow-300 text-lg font-semibold">
            ← Back to Home
          </Link>
          <p className="text-gray-400 mt-4">
            © 2025 ONIX Group of Companies. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}
