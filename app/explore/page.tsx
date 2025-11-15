'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'

export default function ExplorePage() {
  const [selectedIndustry, setSelectedIndustry] = useState('')
  const [selectedService, setSelectedService] = useState('')
  const [selectedProduct, setSelectedProduct] = useState('')
  const [isVideoLoaded, setIsVideoLoaded] = useState(false)
  const [videoError, setVideoError] = useState(false)

  // Sample data for dropdowns
  const industries = [
    'Construction',
    'Engineering',
    'Technology',
    'Manufacturing',
    'Healthcare',
    'Energy',
    'Infrastructure',
    'Consulting'
  ]

  const services = [
    'Project Management',
    'Technical Consulting',
    'Quality Assurance',
    'Risk Assessment',
    'Design & Engineering',
    'Implementation',
    'Maintenance',
    'Training'
  ]

  const products = [
    'Software Solutions',
    'Hardware Systems',
    'Digital Platforms',
    'Analytics Tools',
    'Automation Systems',
    'Monitoring Solutions',
    'Integration Services',
    'Custom Development'
  ]

  const handleSearch = () => {
    // Handle search logic here
    console.log('Searching with:', { selectedIndustry, selectedService, selectedProduct })
  }

  // Auto-fallback if video doesn't load within 5 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      if (!isVideoLoaded) {
        console.log('Video failed to load within 5 seconds, showing fallback')
        setVideoError(true)
      }
    }, 5000)

    return () => clearTimeout(timer)
  }, [isVideoLoaded])

  // Debug: Log current states
  useEffect(() => {
    console.log('Video states:', { isVideoLoaded, videoError })
  }, [isVideoLoaded, videoError])

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section with Video Background */}
      <section className="relative h-screen w-full overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0 overflow-hidden rounded-3xl">
          <iframe
            src="https://player.vimeo.com/video/1135633257?autoplay=1&loop=1&muted=1&controls=0&title=0&byline=0&portrait=0"
            title="ONIX Explore Background"
            className="pointer-events-none absolute top-1/2 left-1/2 min-h-[120vh] min-w-[120vw] -translate-x-1/2 -translate-y-1/2"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
            frameBorder="0"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900/70 via-gray-900/40 to-gray-900/90"></div>
        </div>

        {/* Navigation Header */}
        <div className="absolute top-0 left-0 right-0 z-20">
          <div className="flex items-center justify-between p-4 sm:p-6 lg:p-8">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-3">
              <Image 
                src="/images/ONIX_LOGO.png" 
                alt="ONIX Logo" 
                className="w-12 h-12 sm:w-16 sm:h-16 object-contain"
              />
              <div className="flex flex-col">
                <span className="text-lg sm:text-2xl font-bold text-white">ONIX</span>
                <span className="text-xs sm:text-sm text-gray-300 -mt-1">GROUP OF COMPANIES</span>
              </div>
            </Link>

            {/* Navigation Links */}
            <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
              <Link href="/#about" className="text-white hover:text-blue-400 font-medium transition-all duration-300 text-sm uppercase tracking-wide">
                ABOUT
              </Link>
              <Link href="/companies" className="text-white hover:text-blue-400 font-medium transition-all duration-300 text-sm uppercase tracking-wide">
                COMPANIES
              </Link>
              <Link href="/#news" className="text-white hover:text-blue-400 font-medium transition-all duration-300 text-sm uppercase tracking-wide">
                NEWS
              </Link>
              <Link href="/#contact" className="text-white hover:text-blue-400 font-medium transition-all duration-300 text-sm uppercase tracking-wide">
                CONNECT
              </Link>
              <Link href="/legacy" className="text-white hover:text-blue-400 font-medium transition-all duration-300 text-sm uppercase tracking-wide">
                LEGACY
              </Link>
            </nav>
          </div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 flex items-center justify-center min-h-screen">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: (isVideoLoaded || videoError) ? 1 : 0, y: (isVideoLoaded || videoError) ? 0 : 30 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-white mb-6 leading-tight">
                Efficient, Scalable, and Agile Digital Solutions
              </h1>
              
              <motion.p 
                className="text-lg sm:text-xl md:text-2xl text-gray-200 mb-8 font-light max-w-3xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: (isVideoLoaded || videoError) ? 1 : 0, y: (isVideoLoaded || videoError) ? 0 : 20 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Explore our group of companies driving innovation and digital transformation.
              </motion.p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Explore Our Companies Section */}
      <section className="bg-blue-900 py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              EXPLORE OUR COMPANIES
            </h2>
          </motion.div>

          {/* Filters and Search */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              {/* Industry Dropdown */}
              <div className="relative">
                <select
                  value={selectedIndustry}
                  onChange={(e) => setSelectedIndustry(e.target.value)}
                  className="w-full px-4 py-3 bg-white rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 appearance-none cursor-pointer"
                >
                  <option value="">Select Industry</option>
                  {industries.map((industry) => (
                    <option key={industry} value={industry}>
                      {industry}
                    </option>
                  ))}
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>

              {/* Service Dropdown */}
              <div className="relative">
                <select
                  value={selectedService}
                  onChange={(e) => setSelectedService(e.target.value)}
                  className="w-full px-4 py-3 bg-white rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 appearance-none cursor-pointer"
                >
                  <option value="">Select Service</option>
                  {services.map((service) => (
                    <option key={service} value={service}>
                      {service}
                    </option>
                  ))}
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>

              {/* Product Dropdown */}
              <div className="relative">
                <select
                  value={selectedProduct}
                  onChange={(e) => setSelectedProduct(e.target.value)}
                  className="w-full px-4 py-3 bg-white rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 appearance-none cursor-pointer"
                >
                  <option value="">Select Product</option>
                  {products.map((product) => (
                    <option key={product} value={product}>
                      {product}
                    </option>
                  ))}
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Search Button */}
            <div className="text-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleSearch}
                className="inline-flex items-center px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium text-sm uppercase tracking-wide rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                SEARCH
              </motion.button>
            </div>
          </motion.div>

          {/* Companies Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {/* Sample Company Cards */}
            {[
              {
                name: "Onix Engineering",
                description: "Advanced engineering solutions and project management",
                industry: "Engineering"
              },
              {
                name: "Onix Digital",
                description: "Digital transformation and technology consulting",
                industry: "Technology"
              },
              {
                name: "Onix Construction",
                description: "Infrastructure development and construction management",
                industry: "Construction"
              },
              {
                name: "Onix Energy",
                description: "Sustainable energy solutions and implementation",
                industry: "Energy"
              },
              {
                name: "Onix Healthcare",
                description: "Healthcare technology and medical solutions",
                industry: "Healthcare"
              },
              {
                name: "Onix Manufacturing",
                description: "Industrial manufacturing and automation",
                industry: "Manufacturing"
              }
            ].map((company, index) => (
              <motion.div
                key={company.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-3">{company.name}</h3>
                <p className="text-gray-600 mb-4">{company.description}</p>
                <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full">
                  {company.industry}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Link href="/" className="flex items-center justify-center space-x-3 mb-6">
              <Image 
                src="/images/ONIX_LOGO.png" 
                alt="ONIX Logo" 
                className="w-12 h-12 object-contain"
              />
              <div className="flex flex-col">
                <span className="text-xl font-bold text-white">ONIX</span>
                <span className="text-sm text-gray-400">GROUP OF COMPANIES</span>
              </div>
            </Link>
            <p className="text-gray-400 text-sm">
              © 2024 Onix Group of Companies. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
