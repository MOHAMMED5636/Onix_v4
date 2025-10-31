'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function CivilEngineeringPage() {
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
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <video
            className="w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
          >
            <source src="/videos/OG Reel.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        </div>
        
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            CIVIL <span className="text-green-400">ENGINEERING</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8">
            Shaping infrastructure for sustainable development and community growth
          </p>
          <Link 
            href="#contact" 
            className="inline-block bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300"
          >
            Get Consultation
          </Link>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Civil Engineering Services</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Comprehensive civil engineering solutions for infrastructure development, transportation, and urban planning.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Road & Highway Design",
                description: "Complete road network design, traffic analysis, and transportation planning solutions.",
                icon: "🛣️"
              },
              {
                title: "Water & Wastewater Systems",
                description: "Water supply networks, sewage systems, and wastewater treatment plant design.",
                icon: "💧"
              },
              {
                title: "Bridge Engineering",
                description: "Bridge design, analysis, inspection, and rehabilitation for all types of structures.",
                icon: "🌉"
              },
              {
                title: "Urban Planning",
                description: "Master planning, zoning analysis, and sustainable urban development strategies.",
                icon: "🏙️"
              },
              {
                title: "Site Development",
                description: "Land development, grading, drainage, and utility coordination for projects.",
                icon: "🏗️"
              },
              {
                title: "Environmental Engineering",
                description: "Environmental impact assessment, sustainability consulting, and green infrastructure.",
                icon: "🌱"
              }
            ].map((service, index) => (
              <div key={index} className="bg-gray-900 p-6 rounded-lg hover:bg-gray-800 transition-all duration-300">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-400">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Types */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Project Types We Handle</h2>
            <p className="text-xl text-gray-400">
              From small residential developments to large-scale infrastructure projects
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Residential Communities",
                description: "Master-planned communities, housing developments, and residential infrastructure.",
                projects: "150+ Projects"
              },
              {
                title: "Commercial Developments",
                description: "Shopping centers, office complexes, and mixed-use developments.",
                projects: "80+ Projects"
              },
              {
                title: "Industrial Facilities",
                description: "Manufacturing plants, warehouses, and industrial infrastructure.",
                projects: "60+ Projects"
              },
              {
                title: "Public Infrastructure",
                description: "Government buildings, schools, hospitals, and public facilities.",
                projects: "120+ Projects"
              }
            ].map((type, index) => (
              <div key={index} className="bg-gray-800 p-6 rounded-lg text-center">
                <h3 className="text-xl font-semibold mb-3">{type.title}</h3>
                <p className="text-gray-400 mb-4">{type.description}</p>
                <span className="inline-block bg-green-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                  {type.projects}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology & Innovation */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Technology & Innovation</h2>
            <p className="text-xl text-gray-400">
              Leveraging cutting-edge technology for superior project outcomes
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-6">Advanced Design Tools</h3>
              <div className="space-y-4">
                {[
                  "3D Modeling & BIM Integration",
                  "GIS Mapping & Spatial Analysis", 
                  "Traffic Simulation Software",
                  "Hydraulic & Hydrologic Modeling",
                  "Environmental Impact Assessment Tools",
                  "Project Management Software"
                ].map((tool, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span className="text-gray-300">{tool}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-gray-900 p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-6">Quality Standards</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">ISO 9001:2015</span>
                  <span className="text-green-400 font-semibold">Certified</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">UAE Standards</span>
                  <span className="text-green-400 font-semibold">Compliant</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">International Codes</span>
                  <span className="text-green-400 font-semibold">Followed</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Sustainability</span>
                  <span className="text-green-400 font-semibold">LEED Certified</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-gray-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">Ready to Start Your Project?</h2>
          <p className="text-xl text-gray-400 mb-8">
            Contact our civil engineering experts for a consultation and detailed project proposal.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact" 
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300"
            >
              Get Free Consultation
            </Link>
            <a 
              href="tel:+97142838880" 
              className="border border-green-600 text-green-400 hover:bg-green-600 hover:text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300"
            >
              Call +971 42 83 8880
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <Link href="/" className="text-green-400 hover:text-green-300 text-lg font-semibold">
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
