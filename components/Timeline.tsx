'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import ScrollSection from './ScrollSection'
import Image from 'next/image'

export default function Timeline() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Show loading screen for 2 seconds
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  const timelineEvents = [
    {
      number: '01',
      title: 'Digital Transformation and Innovation Leadership',
      description: 'In 2021, Onix Group embraced digital transformation, implementing cutting-edge technologies and innovative solutions across all our companies. We launched our digital-first approach to engineering and construction, setting new industry standards.',
      image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      year: '2021'
    },
    {
      number: '02',
      title: 'Sustainable Engineering Excellence',
      description: '2022 marked our commitment to sustainable engineering practices. We integrated green technologies and eco-friendly solutions into all our projects, leading the industry in environmental responsibility and sustainable development.',
      image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      year: '2022'
    },
    {
      number: '03',
      title: 'Global Expansion and Strategic Partnerships',
      description: 'In 2023, Onix Group expanded its global footprint, establishing strategic partnerships with international companies. We opened new offices and launched projects across multiple continents, solidifying our position as a global engineering leader.',
      image: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      year: '2023'
    },
    {
      number: '04',
      title: 'AI and Smart Technology Integration',
      description: '2024 brought revolutionary AI integration into our engineering processes. We implemented smart construction technologies, automated project management systems, and AI-powered design solutions, revolutionizing how we approach complex engineering challenges.',
      image: 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      year: '2024'
    },
    {
      number: '05',
      title: 'Future-Ready Engineering Solutions',
      description: 'As we look toward 2025, Onix Group continues to pioneer the future of engineering. We are developing next-generation solutions, investing in emerging technologies, and preparing for the challenges and opportunities of tomorrow.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      year: '2025'
    }
  ]

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
          title="ONIX Timeline Background"
          className="pointer-events-none absolute top-1/2 left-1/2 min-h-[120vh] min-w-[120vw] -translate-x-1/2 -translate-y-1/2"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
          frameBorder="0"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/90 via-gray-900/70 to-gray-900"></div>
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

      {/* Onix Logo - Top Center */}
      <div className="pt-6 pb-6 text-center relative z-20">
        <div className="flex items-center justify-center mb-2">
          <Image 
            src="/images/ONIX GROUP 0002.png" 
            alt="ONIX Logo" 
            className="w-48 h-48 object-contain"
          />
        </div>
      </div>

      {/* Main Headline */}
      <div className="text-center py-6 px-4 relative z-20">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-white mb-2 tracking-wide">
          OUR STORY
        </h2>
        <p className="text-lg text-gray-300">
          Growing up with a Glorious Nation
        </p>
      </div>

      {/* Introductory Story Section - Above Timeline */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-20">
        <div className="relative min-h-screen flex items-center">
          <div className="relative z-20 w-full">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
              {/* Left Side - Text Content with Scroll Animation */}
              <ScrollSection direction="right">
                <div className="space-y-6">
                  {/* Main Title */}
                  <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                    Growing up with a Glorious Nation
                  </h3>
                  
                  {/* Description */}
                  <div className="space-y-6">
                    <p className="text-lg text-gray-300 leading-relaxed">
                      This story dates back to the 1990s, to that moment in time destined to forevermore be marked in the history of the world. 
                      Engineering and construction had first been discovered as the backbone of development in the UAE in 1995.
                    </p>
                    
                    <p className="text-lg text-gray-300 leading-relaxed">
                      Around the same time, there was another story in the making - the story of two young men with big dreams. 
                      The founders of Onix Group, who had a vision to revolutionize the engineering and construction industry, 
                      wanted to build something extraordinary together.
                    </p>
                    
                    <p className="text-lg text-gray-300 leading-relaxed">
                      And so the Onix Group came into being, built on the aspirations of visionary leaders and an unwavering 
                      commitment to excellence in engineering and construction services.
                    </p>
                  </div>
                </div>
              </ScrollSection>
              
              {/* Right Side - Blue and Red Logo with Scroll Animation */}
              <ScrollSection direction="left">
                <div className="relative">
                  <div className="w-full h-96 lg:h-[500px] rounded-full overflow-hidden border-4 border-white/20 shadow-2xl bg-gradient-to-br from-blue-600 via-blue-800 to-red-600 flex items-center justify-center">
                    {/* Blue and Red Logo Design */}
                    <div className="relative">
                      {/* Blue Circle */}
                      <div className="w-32 h-32 lg:w-48 lg:h-48 bg-blue-500 rounded-full flex items-center justify-center shadow-2xl">
                        {/* Red Circle Inside */}
                        <div className="w-20 h-20 lg:w-32 lg:h-32 bg-red-500 rounded-full flex items-center justify-center">
                          {/* White ONIX Text */}
                          <div className="text-white font-bold text-2xl lg:text-4xl">
                            O
                          </div>
                        </div>
                      </div>
                      
                      {/* Blue Ring Around */}
                      <div className="absolute inset-0 w-32 h-32 lg:w-48 lg:h-48 border-4 border-blue-300 rounded-full animate-pulse"></div>
                    </div>
                  </div>
                  
                  {/* Decorative Elements */}
                  <div className="absolute -top-4 -right-4 w-8 h-8 bg-blue-500 rounded-full opacity-60"></div>
                  <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-red-500 rounded-full opacity-60"></div>
                  <div className="absolute top-1/2 -left-8 w-4 h-4 bg-blue-400 rounded-full opacity-60"></div>
                </div>
              </ScrollSection>
            </div>
          </div>
        </div>
      </div>

      {/* Timeline Header */}
      <div className="text-center py-8 px-4">
        <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
          Take a walk down history to see what transpired over the years
        </h3>
        <p className="text-lg text-gray-300">
          Into making the Group what it is today
        </p>
      </div>

      {/* Timeline Section - Al Shirawi Style */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="space-y-16">
          {timelineEvents.map((event, index) => (
            <div key={index} className="relative min-h-screen flex items-center">
              {/* Large Number Background */}
              <div className="absolute top-0 right-0 text-9xl md:text-[12rem] font-bold text-white/10 z-0">
                {event.number}
              </div>
              
              <div className="relative z-20 w-full">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
                  {/* Left Side - Text Content with Scroll Animation */}
                  <ScrollSection direction="right">
                    <div className="space-y-6">
                      {/* Oval Text Box */}
                      <div className="bg-white/5 backdrop-blur-sm rounded-full px-8 py-4 border border-white/20">
                        <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-tight">
                          {event.title}
                        </h3>
                      </div>
                      
                      {/* Description */}
                      <div className="space-y-4">
                        <p className="text-lg text-gray-300 leading-relaxed">
                          {event.description}
                        </p>
                        
                        {/* Year Badge */}
                        <div className="inline-block bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                          {event.year}
                        </div>
                      </div>
                    </div>
                  </ScrollSection>
                  
                  {/* Right Side - Image with Scroll Animation */}
                  <ScrollSection direction="left">
                    <div className="relative">
                      <div className="w-full h-96 lg:h-[500px] rounded-full overflow-hidden border-4 border-white/20 shadow-2xl">
                        <Image 
                          src={event.image} 
                          alt={event.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      
                      {/* Decorative Elements */}
                      <div className="absolute -top-4 -right-4 w-8 h-8 bg-blue-500 rounded-full opacity-60"></div>
                      <div className="absolute top-1/2 -left-8 w-4 h-4 bg-red-500 rounded-full opacity-60"></div>
                    </div>
                  </ScrollSection>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 text-center">
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-white mb-4">Explore Our Leaders</h3>
          <p className="text-gray-300 mb-6">Meet the visionaries who have shaped our journey</p>
          <Link 
            href="/leaders" 
            className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-105"
          >
            <span className="mr-2">Meet Our Leaders</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>

      {/* Contact Section */}
      <section className="py-12 sm:py-20 bg-gray-800 relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 uppercase tracking-wide">
              STEP INTO THE WORLD OF ONIX GROUP OF COMPANIES
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
              Ready to start your next project?<br />
              Contact us for a consultation.<br />
              Let's discuss how our group of companies can help.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Contact Information */}
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-white text-lg">123 Engineering Street, Business District, City 12345</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <p className="text-white text-lg">+1 (555) 123-4567</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-white text-lg">Info@onixengineering.com</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-white text-lg">Monday - Friday: 8:00 AM - 6:00 PM</p>
                  <p className="text-white text-lg">Saturday: 9:00 AM - 2:00 PM</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-gray-900 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-white mb-6">Send us a Message</h3>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="AE (+971) 50 123 4567"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-white text-gray-900 font-semibold py-3 px-6 rounded-lg hover:bg-gray-100 transition-colors duration-200"
                >
                  Request a manager's consultation
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* WhatsApp Floating Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <a 
          href="https://wa.me/97142838880?text=Hello%20ONIX%20Group%2C%20I%20would%20like%20to%20know%20more%20about%20your%20services"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 whatsapp-blink"
        >
          <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
          </svg>
        </a>
      </div>

      {/* Footer Spacing */}
      <div className="h-12"></div>
    </div>
  )
}
