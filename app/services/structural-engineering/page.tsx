'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function StructuralEngineeringPage() {
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
            title="ONIX Structural Background"
            className="pointer-events-none absolute top-1/2 left-1/2 min-h-[120vh] min-w-[120vw] -translate-x-1/2 -translate-y-1/2"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
            frameBorder="0"
          />
          <div className="absolute inset-0 bg-black/55" />
        </div>
        
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            STRUCTURAL <span className="text-blue-400">ENGINEERING</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8">
            Building the foundation of tomorrow with precision, innovation, and excellence
          </p>
          <Link 
            href="#contact" 
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300"
          >
            Get Consultation
          </Link>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Structural Engineering Services</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              We provide comprehensive structural engineering solutions that ensure safety, durability, and efficiency in every project.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Building Design & Analysis",
                description: "Complete structural design and analysis for residential, commercial, and industrial buildings.",
                icon: "🏗️"
              },
              {
                title: "Seismic Engineering",
                description: "Earthquake-resistant design and retrofitting solutions for enhanced safety.",
                icon: "🌍"
              },
              {
                title: "Foundation Engineering",
                description: "Deep and shallow foundation design, soil analysis, and geotechnical solutions.",
                icon: "🏢"
              },
              {
                title: "Steel Structure Design",
                description: "Advanced steel frame design, connections, and fabrication drawings.",
                icon: "🔧"
              },
              {
                title: "Concrete Structure Design",
                description: "Reinforced concrete design, precast elements, and construction methodology.",
                icon: "🧱"
              },
              {
                title: "Structural Assessment",
                description: "Condition assessment, load testing, and structural health monitoring.",
                icon: "📊"
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

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Why Choose ONIX for Structural Engineering?</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="space-y-8">
                {[
                  {
                    title: "25+ Years Experience",
                    description: "Decades of expertise in complex structural engineering projects across the UAE and Middle East."
                  },
                  {
                    title: "Advanced Technology",
                    description: "State-of-the-art software and analysis tools for accurate and efficient design solutions."
                  },
                  {
                    title: "Certified Engineers",
                    description: "Licensed professional engineers with international certifications and continuous training."
                  },
                  {
                    title: "Quality Assurance",
                    description: "Rigorous quality control processes ensuring compliance with international standards."
                  }
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white font-bold">{index + 1}</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                      <p className="text-gray-400">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-gray-800 p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-6">Project Statistics</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Ongoing Projects</span>
                  <span className="text-2xl font-bold text-blue-400">500+</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Years of Experience</span>
                  <span className="text-2xl font-bold text-blue-400">25+</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Certified Engineers</span>
                  <span className="text-2xl font-bold text-blue-400">50+</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Client Satisfaction</span>
                  <span className="text-2xl font-bold text-blue-400">98%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">Ready to Start Your Project?</h2>
          <p className="text-xl text-gray-400 mb-8">
            Contact our structural engineering experts for a consultation and detailed project proposal.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact" 
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300"
            >
              Get Free Consultation
            </Link>
            <a 
              href="tel:+97142838880" 
              className="border border-blue-600 text-blue-400 hover:bg-blue-600 hover:text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300"
            >
              Call +971 42 83 8880
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <Link href="/" className="text-blue-400 hover:text-blue-300 text-lg font-semibold">
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
