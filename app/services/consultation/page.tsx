'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function ConsultationPage() {
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
            ENGINEERING <span className="text-orange-400">CONSULTATION</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8">
            Expert engineering advice and strategic guidance for your projects
          </p>
          <Link 
            href="#contact" 
            className="inline-block bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300"
          >
            Get Free Consultation
          </Link>
        </div>
      </section>

      {/* Consultation Services */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Consultation Services</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Professional engineering consultation services to help you make informed decisions and optimize your projects.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Feasibility Studies",
                description: "Comprehensive analysis of project viability, technical requirements, and economic considerations.",
                icon: "📊"
              },
              {
                title: "Design Review",
                description: "Independent review of engineering designs, drawings, and specifications for quality assurance.",
                icon: "🔍"
              },
              {
                title: "Technical Advisory",
                description: "Expert technical advice on complex engineering challenges and innovative solutions.",
                icon: "💡"
              },
              {
                title: "Code Compliance",
                description: "Ensuring projects meet local building codes, regulations, and international standards.",
                icon: "📋"
              },
              {
                title: "Value Engineering",
                description: "Cost optimization strategies while maintaining quality and performance standards.",
                icon: "💰"
              },
              {
                title: "Due Diligence",
                description: "Technical assessment of existing facilities, infrastructure, and property conditions.",
                icon: "🏢"
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

      {/* Consultation Process */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Consultation Process</h2>
            <p className="text-xl text-gray-400">
              A structured approach to delivering expert engineering consultation
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Initial Assessment",
                description: "Understanding your project requirements, challenges, and objectives",
                duration: "1-2 days"
              },
              {
                step: "02",
                title: "Technical Analysis",
                description: "Detailed engineering analysis and evaluation of technical aspects",
                duration: "3-5 days"
              },
              {
                step: "03",
                title: "Solution Development",
                description: "Developing comprehensive solutions and recommendations",
                duration: "2-4 days"
              },
              {
                step: "04",
                title: "Report & Presentation",
                description: "Detailed report delivery and presentation of findings",
                duration: "1-2 days"
              }
            ].map((step, index) => (
              <div key={index} className="bg-gray-800 p-6 rounded-lg text-center">
                <div className="text-4xl font-bold text-orange-400 mb-4">{step.step}</div>
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-gray-400 mb-4">{step.description}</p>
                <span className="inline-block bg-orange-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                  {step.duration}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise Areas */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Expertise Areas</h2>
            <p className="text-xl text-gray-400">
              Specialized knowledge across multiple engineering disciplines
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Structural Engineering",
                description: "Building design, seismic analysis, and structural integrity assessment",
                projects: "300+ Consultations"
              },
              {
                title: "Civil Engineering",
                description: "Infrastructure planning, transportation, and urban development",
                projects: "250+ Consultations"
              },
              {
                title: "MEP Engineering",
                description: "Mechanical, electrical, and plumbing system design and optimization",
                projects: "200+ Consultations"
              },
              {
                title: "Project Management",
                description: "Project planning, risk assessment, and delivery optimization",
                projects: "180+ Consultations"
              },
              {
                title: "Sustainability",
                description: "Green building design, energy efficiency, and environmental impact",
                projects: "150+ Consultations"
              },
              {
                title: "Technology Integration",
                description: "BIM implementation, digital transformation, and smart building solutions",
                projects: "120+ Consultations"
              }
            ].map((expertise, index) => (
              <div key={index} className="bg-gray-900 p-6 rounded-lg hover:bg-gray-800 transition-all duration-300">
                <h3 className="text-xl font-semibold mb-3">{expertise.title}</h3>
                <p className="text-gray-400 mb-4">{expertise.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-gray-500">Completed:</span>
                  <span className="text-orange-400 font-semibold">{expertise.projects}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Consultation */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Why Choose Our Consultation?</h2>
            <p className="text-xl text-gray-400">
              Proven expertise and commitment to delivering exceptional value
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6">Our Advantages</h3>
              <div className="space-y-6">
                {[
                  {
                    title: "25+ Years Experience",
                    description: "Decades of expertise in complex engineering projects across the Middle East"
                  },
                  {
                    title: "Multidisciplinary Team",
                    description: "Experts across all engineering disciplines working together"
                  },
                  {
                    title: "Local Knowledge",
                    description: "Deep understanding of UAE regulations, codes, and market conditions"
                  },
                  {
                    title: "International Standards",
                    description: "Compliance with international engineering standards and best practices"
                  }
                ].map((advantage, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-orange-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white font-bold">{index + 1}</span>
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold mb-2">{advantage.title}</h4>
                      <p className="text-gray-400">{advantage.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-gray-800 p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-6">Consultation Statistics</h3>
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Total Consultations</span>
                  <span className="text-3xl font-bold text-orange-400">1,200+</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Client Satisfaction</span>
                  <span className="text-3xl font-bold text-orange-400">98%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Project Success Rate</span>
                  <span className="text-3xl font-bold text-orange-400">95%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Average Response Time</span>
                  <span className="text-3xl font-bold text-orange-400">24hrs</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">Ready for Expert Consultation?</h2>
          <p className="text-xl text-gray-400 mb-8">
            Get professional engineering advice tailored to your specific project needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact" 
              className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300"
            >
              Get Free Consultation
            </Link>
            <a 
              href="tel:+97142838880" 
              className="border border-orange-600 text-orange-400 hover:bg-orange-600 hover:text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300"
            >
              Call +971 42 83 8880
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <Link href="/" className="text-orange-400 hover:text-orange-300 text-lg font-semibold">
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
