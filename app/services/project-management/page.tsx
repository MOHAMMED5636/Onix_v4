'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function ProjectManagementPage() {
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
          <iframe
            src="https://player.vimeo.com/video/1135633257?autoplay=1&loop=1&muted=1&controls=0&title=0&byline=0&portrait=0"
            title="ONIX Project Management Background"
            className="pointer-events-none absolute top-1/2 left-1/2 min-h-[120vh] min-w-[120vw] -translate-x-1/2 -translate-y-1/2"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
            frameBorder="0"
          />
          <div className="absolute inset-0 bg-black/55" />
        </div>
        
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            PROJECT <span className="text-purple-400">MANAGEMENT</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8">
            Delivering projects on time, within budget, and exceeding expectations
          </p>
          <Link 
            href="#contact" 
            className="inline-block bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300"
          >
            Get Consultation
          </Link>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Project Management Services</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Comprehensive project management solutions from conception to completion, ensuring successful project delivery.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Project Planning & Scheduling",
                description: "Detailed project planning, timeline development, and resource allocation strategies.",
                icon: "📋"
              },
              {
                title: "Cost Management",
                description: "Budget planning, cost control, and financial monitoring throughout project lifecycle.",
                icon: "💰"
              },
              {
                title: "Quality Assurance",
                description: "Quality control processes, inspections, and compliance monitoring.",
                icon: "✅"
              },
              {
                title: "Risk Management",
                description: "Risk identification, assessment, and mitigation strategies for project success.",
                icon: "⚠️"
              },
              {
                title: "Stakeholder Management",
                description: "Communication, coordination, and relationship management with all project stakeholders.",
                icon: "🤝"
              },
              {
                title: "Contract Administration",
                description: "Contract management, procurement, and vendor coordination.",
                icon: "📄"
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

      {/* Project Phases */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Project Management Process</h2>
            <p className="text-xl text-gray-400">
              A systematic approach to project delivery across all phases
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                phase: "01",
                title: "Initiation",
                description: "Project charter, stakeholder identification, and initial planning",
                activities: ["Project Charter", "Stakeholder Analysis", "Initial Risk Assessment"]
              },
              {
                phase: "02", 
                title: "Planning",
                description: "Detailed planning, scheduling, and resource allocation",
                activities: ["Work Breakdown Structure", "Schedule Development", "Budget Planning"]
              },
              {
                phase: "03",
                title: "Execution",
                description: "Project implementation and team coordination",
                activities: ["Team Management", "Progress Monitoring", "Quality Control"]
              },
              {
                phase: "04",
                title: "Closure",
                description: "Project completion, handover, and lessons learned",
                activities: ["Final Deliverables", "Project Handover", "Post-Project Review"]
              }
            ].map((phase, index) => (
              <div key={index} className="bg-gray-800 p-6 rounded-lg">
                <div className="text-4xl font-bold text-purple-400 mb-4">{phase.phase}</div>
                <h3 className="text-xl font-semibold mb-3">{phase.title}</h3>
                <p className="text-gray-400 mb-4">{phase.description}</p>
                <ul className="space-y-2">
                  {phase.activities.map((activity, actIndex) => (
                    <li key={actIndex} className="text-sm text-gray-300 flex items-center">
                      <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mr-2"></div>
                      {activity}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Types */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Project Types We Manage</h2>
            <p className="text-xl text-gray-400">
              Expertise across various construction and engineering project types
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Residential Projects",
                description: "Apartments, villas, and residential communities",
                value: "AED 500M+",
                duration: "12-36 months"
              },
              {
                title: "Commercial Buildings",
                description: "Office towers, retail centers, and mixed-use developments",
                value: "AED 1B+",
                duration: "18-48 months"
              },
              {
                title: "Infrastructure Projects",
                description: "Roads, bridges, utilities, and public facilities",
                value: "AED 2B+",
                duration: "24-60 months"
              },
              {
                title: "Industrial Facilities",
                description: "Manufacturing plants, warehouses, and industrial complexes",
                value: "AED 800M+",
                duration: "15-42 months"
              },
              {
                title: "Healthcare Facilities",
                description: "Hospitals, clinics, and medical centers",
                value: "AED 600M+",
                duration: "20-54 months"
              },
              {
                title: "Educational Projects",
                description: "Schools, universities, and training facilities",
                value: "AED 300M+",
                duration: "12-30 months"
              }
            ].map((project, index) => (
              <div key={index} className="bg-gray-900 p-6 rounded-lg hover:bg-gray-800 transition-all duration-300">
                <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-500">Project Value:</span>
                    <span className="text-purple-400 font-semibold">{project.value}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Duration:</span>
                    <span className="text-purple-400 font-semibold">{project.duration}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology & Tools */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Technology & Tools</h2>
            <p className="text-xl text-gray-400">
              Advanced project management software and methodologies
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6">Project Management Software</h3>
              <div className="space-y-4">
                {[
                  "Microsoft Project & Project Online",
                  "Primavera P6 Enterprise",
                  "BIM 360 & Autodesk Construction Cloud",
                  "Procore Construction Management",
                  "Oracle Primavera Cloud",
                  "Smartsheet & Monday.com"
                ].map((tool, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                    <span className="text-gray-300">{tool}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-gray-800 p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-6">Certifications & Standards</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">PMP Certification</span>
                  <span className="text-purple-400 font-semibold">Certified</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">PMI Standards</span>
                  <span className="text-purple-400 font-semibold">Followed</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">ISO 21500</span>
                  <span className="text-purple-400 font-semibold">Compliant</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Agile Methodology</span>
                  <span className="text-purple-400 font-semibold">Trained</span>
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
            Contact our project management experts for a consultation and detailed project proposal.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact" 
              className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300"
            >
              Get Free Consultation
            </Link>
            <a 
              href="tel:+97142838880" 
              className="border border-purple-600 text-purple-400 hover:bg-purple-600 hover:text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300"
            >
              Call +971 42 83 8880
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <Link href="/" className="text-purple-400 hover:text-purple-300 text-lg font-semibold">
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
