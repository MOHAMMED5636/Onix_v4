'use client'

import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log('Form submitted:', formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <section id="contact" className="py-12 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 uppercase tracking-wide">STEP INTO THE WORLD OF <span className="text-red-500">ONIX</span> GROUP OF COMPANIES</h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to start your next project?<br />
            Contact us for a consultation.<br />
            Let's discuss how our group of companies can help.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
          {/* Contact Information */}
          <div>
            <h3 className="text-xl sm:text-2xl font-semibold text-white mb-4 sm:mb-6">Contact Information</h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center">
                    <span className="text-primary-600">📍</span>
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium text-white">Address</h4>
                  <p className="text-gray-300">Mardoof Building, Gate B, Office 114<br />Sheikh Zayed Road, Al Safa 1, Dubai</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center">
                    <span className="text-primary-600">📞</span>
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium text-white">Phone</h4>
                  <p className="text-gray-300">+971 4 283 8880</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center">
                    <span className="text-primary-600">✉️</span>
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium text-white">Email</h4>
                  <p className="text-gray-300">info@onixgroup.ae</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center">
                    <span className="text-primary-600">🕒</span>
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium text-white">Business Hours</h4>
                  <p className="text-gray-300">Monday - Friday: 8:00 AM - 6:00 PM<br />Saturday: 9:00 AM - 2:00 PM</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h3 className="text-2xl font-semibold text-white mb-6">Send us a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Your Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-600 bg-gray-700 text-white rounded-lg focus:ring-2 focus:ring-white focus:border-transparent"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
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
  )
}
