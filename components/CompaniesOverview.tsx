'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function CompaniesOverview() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Show loading screen for 2 seconds
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

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
          <source src="/videos/ONIX GROUP LOADING.mp4" type="video/mp4" />
          {/* Fallback for browsers that don't support video */}
          <div className="flex items-center justify-center h-full">
            <Image
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
    <div className="min-h-screen relative">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <iframe
          src="https://player.vimeo.com/video/1135633257?autoplay=1&loop=1&muted=1&controls=0&title=0&byline=0&portrait=0"
          title="ONIX Companies Background"
          className="pointer-events-none absolute top-1/2 left-1/2 min-h-[120vh] min-w-[120vw] -translate-x-1/2 -translate-y-1/2"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
          frameBorder="0"
        />
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      {/* Back Button */}
      <div className="fixed top-8 left-8 z-50 relative">
        <Link href="/" className="inline-flex items-center text-white hover:text-blue-400 transition-colors duration-300">
          <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          <span className="text-sm uppercase tracking-wide">Back</span>
        </Link>
      </div>

      {/* Hero Section - Al Shirawi Style */}
      <div className="relative min-h-screen">

        {/* Content Overlay */}
        <div className="relative z-10 min-h-screen flex flex-col justify-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Main Title - Enhanced with Animation */}
            <div className="text-center mb-8 sm:mb-12 md:mb-16 px-2 sm:px-4">
              <div className="relative">
                <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-3 sm:mb-4 uppercase tracking-wide animate-fade-in-up leading-tight">
                  EXPLORE OUR COMPANIES
                </h1>
                {/* ONIX GROUP Subtitle */}
                <div className="mb-4 sm:mb-6">
                  <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-white">
                    <span className="text-red-500">ONIX</span> <span className="underline">GROUP</span>
                  </h2>
                </div>
                {/* Decorative Line */}
                <div className="w-12 sm:w-16 md:w-24 h-1 bg-gradient-to-r from-transparent via-white to-transparent mx-auto mb-4 sm:mb-6 md:mb-8 animate-pulse"></div>
              </div>
            </div>

            {/* Search Section - Enhanced Design */}
            <div className="max-w-5xl mx-auto mb-12 sm:mb-16 px-2 sm:px-4">
              <div className="bg-white/15 backdrop-blur-md rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 border border-white/30 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105">
                <div className="text-center mb-4 sm:mb-6 md:mb-8">
                  <h3 className="text-base sm:text-lg md:text-xl font-semibold text-white mb-2">Find Your Perfect Solution</h3>
                  <p className="text-xs sm:text-sm md:text-base text-gray-300">Filter our companies by industry, product, and service</p>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6 mb-4 sm:mb-6 md:mb-8">
                  {/* Select Industry */}
                  <div className="relative group">
                    <label className="block text-xs sm:text-sm font-medium text-white mb-1 sm:mb-2">Industry</label>
                    <select className="w-full bg-white/25 border border-white/40 rounded-lg sm:rounded-xl px-3 sm:px-4 py-2.5 sm:py-3 md:py-4 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-300 hover:bg-white/30 text-xs sm:text-sm md:text-base">
                      <option value="" className="text-gray-900">Select Industry</option>
                      <option value="engineering" className="text-gray-900">Engineering</option>
                      <option value="construction" className="text-gray-900">Construction</option>
                      <option value="design" className="text-gray-900">Design</option>
                      <option value="consulting" className="text-gray-900">Consulting</option>
                    </select>
                    <div className="absolute right-3 sm:right-4 top-1/2 transform -translate-y-1/2 pointer-events-none">
                      <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white group-hover:text-blue-300 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>

                  {/* Select Product */}
                  <div className="relative group">
                    <label className="block text-xs sm:text-sm font-medium text-white mb-1 sm:mb-2">Product</label>
                    <select className="w-full bg-white/25 border border-white/40 rounded-lg sm:rounded-xl px-3 sm:px-4 py-2.5 sm:py-3 md:py-4 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-300 hover:bg-white/30 text-xs sm:text-sm md:text-base">
                      <option value="" className="text-gray-900">Select Product</option>
                      <option value="structural" className="text-gray-900">Structural Design</option>
                      <option value="mep" className="text-gray-900">MEP Systems</option>
                      <option value="interior" className="text-gray-900">Interior Design</option>
                      <option value="consulting" className="text-gray-900">Consulting Services</option>
                    </select>
                    <div className="absolute right-3 sm:right-4 top-1/2 transform -translate-y-1/2 pointer-events-none">
                      <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white group-hover:text-blue-300 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>

                  {/* Select Service */}
                  <div className="relative group sm:col-span-2 lg:col-span-1">
                    <label className="block text-xs sm:text-sm font-medium text-white mb-1 sm:mb-2">Service</label>
                    <select className="w-full bg-white/25 border border-white/40 rounded-lg sm:rounded-xl px-3 sm:px-4 py-2.5 sm:py-3 md:py-4 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-300 hover:bg-white/30 text-xs sm:text-sm md:text-base">
                      <option value="" className="text-gray-900">Select Service</option>
                      <option value="design" className="text-gray-900">Design Services</option>
                      <option value="construction" className="text-gray-900">Construction</option>
                      <option value="management" className="text-gray-900">Project Management</option>
                      <option value="maintenance" className="text-gray-900">Maintenance</option>
                    </select>
                    <div className="absolute right-3 sm:right-4 top-1/2 transform -translate-y-1/2 pointer-events-none">
                      <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white group-hover:text-blue-300 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Enhanced Search Button */}
                <div className="text-center">
                  <button className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-6 sm:px-8 md:px-12 py-2.5 sm:py-3 md:py-4 rounded-lg sm:rounded-xl font-semibold transition-all duration-300 hover:scale-105 shadow-xl hover:shadow-2xl flex items-center justify-center mx-auto text-xs sm:text-sm md:text-base w-full sm:w-auto">
                    <svg className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 mr-1.5 sm:mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                    <span className="hidden sm:inline">SEARCH COMPANIES</span>
                    <span className="sm:hidden">Q SEARCH</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Enhanced Download Brochure Button */}
            <div className="text-center mb-12 sm:mb-16 px-2 sm:px-4">
              <button className="inline-flex items-center bg-white/20 backdrop-blur-sm text-white border-2 border-white/50 px-4 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4 rounded-lg sm:rounded-xl font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300 hover:scale-105 shadow-xl hover:shadow-2xl group text-xs sm:text-sm md:text-base">
                <svg className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 mr-1.5 sm:mr-2 group-hover:animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <span className="hidden sm:inline">Download Brochure</span>
                <span className="sm:hidden">Download</span>
              </button>
            </div>

            {/* Floating Elements for Visual Appeal */}
            <div className="absolute top-1/4 left-10 w-4 h-4 bg-blue-400 rounded-full opacity-60 animate-pulse"></div>
            <div className="absolute top-1/3 right-16 w-6 h-6 bg-white/30 rounded-full opacity-40 animate-ping"></div>
          </div>
        </div>
      </div>

      {/* Content Section - White Background */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-8">
              OUR COMPANIES IN MULTIPLE SECTORS
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-12">
              Since our inception, we have been at the forefront of excellence in a variety of sectors. 
              Today, our industrial outreach expands to multiple sectors, each pledged to contribute to the UAE's development.
            </p>

            {/* View Companies Button */}
            <Link 
              href="/companies/list"
              className="inline-flex items-center bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300 hover:scale-105 shadow-lg"
            >
              <span className="mr-2">VIEW OUR COMPANIES</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </div>

      {/* Footer Spacing */}
      <div className="h-12"></div>

      {/* Contact Section */}
      <section className="py-12 sm:py-20 bg-gray-900 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 uppercase tracking-wide">
              STEP INTO THE WORLD OF ONIX GROUP OF COMPANIES
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
              Ready to start your next project?<br />
              Contact us for a consultation.<br />
              Let's discuss how our group of companies can help.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Contact Information */}
            <div>
              <h3 className="text-xl font-semibold text-white mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center mr-4">
                    <span className="text-white">📍</span>
                  </div>
                  <div>
                    <p className="text-white font-medium">Address</p>
                    <p className="text-gray-300">123 Engineering Street, Business District, City 12345</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center mr-4">
                    <span className="text-white">📞</span>
                  </div>
                  <div>
                    <p className="text-white font-medium">Phone</p>
                    <p className="text-gray-300">+1 (555) 123-4567</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center mr-4">
                    <span className="text-white">✉️</span>
                  </div>
                  <div>
                    <p className="text-white font-medium">Email</p>
                    <p className="text-gray-300">info@onixengineering.com</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center mr-4">
                    <span className="text-white">🕒</span>
                  </div>
                  <div>
                    <p className="text-white font-medium">Business Hours</p>
                    <p className="text-gray-300">Monday - Friday: 8:00 AM - 6:00 PM</p>
                    <p className="text-gray-300">Saturday: 9:00 AM - 2:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h3 className="text-xl font-semibold text-white mb-6">Send us a Message</h3>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Your Name *</label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 border border-gray-600 bg-gray-700 text-white rounded-lg focus:ring-2 focus:ring-white focus:border-transparent"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Phone Number *</label>
                  <input
                    type="tel"
                    required
                    className="w-full px-4 py-3 border border-gray-600 bg-gray-700 text-white rounded-lg focus:ring-2 focus:ring-white focus:border-transparent"
                    placeholder="AE (+971) 50 123 4567"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-white text-gray-900 py-3 px-6 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-lg"
                >
                  Request a manager's consultation
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Custom CSS for Animations */}
      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 1s ease-out forwards;
        }
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  )
}
