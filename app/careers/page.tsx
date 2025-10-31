'use client'

import { useState } from 'react'

export default function CareersPage() {
  const [selectedRole, setSelectedRole] = useState<string>('')

  const roles = [
    {
      title: 'Structural Engineer',
      location: 'Dubai, UAE',
      type: 'Full-time',
      summary:
        'Design and analyze reinforced concrete and steel structures. Coordinate with multidisciplinary teams and ensure compliance with codes.',
      tags: ['ETABS', 'SAP2000', 'STAAD', 'ACI/BS/AISC'],
    },
    {
      title: 'Project Manager (Construction)',
      location: 'Dubai, UAE',
      type: 'Full-time',
      summary:
        'Lead construction projects end-to-end. Plan, track budget and schedule, manage vendors and ensure quality and safety onsite.',
      tags: ['PMP', 'Scheduling', 'Cost Control', 'QA/QC'],
    },
    {
      title: 'Interior Fit-out Engineer',
      location: 'Dubai, UAE',
      type: 'Full-time',
      summary:
        'Deliver interior fit-out works from shop drawings to handover. Coordinate with suppliers and ensure finishes meet specifications.',
      tags: ['AutoCAD', 'Joinery', 'Finishes', 'Handover'],
    },
    {
      title: 'Landscape Supervisor',
      location: 'Dubai, UAE',
      type: 'Full-time',
      summary:
        'Supervise landscaping works, irrigation and soft/hardscape implementation with attention to quality and detail.',
      tags: ['Landscaping', 'Irrigation', 'Site Supervision'],
    },
  ]

  return (
    <div className="min-h-screen relative">
      {/* Header */}
      <div className="relative h-[44vh] sm:h-[52vh]">
        <video className="absolute inset-0 w-full h-full object-cover" autoPlay muted loop playsInline>
          <source src="/videos/OG Reel.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 h-full flex items-center justify-center text-center px-4">
          <div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-wide mb-3">Careers at ONIX</h1>
            <p className="text-gray-200 text-sm sm:text-base md:text-lg max-w-3xl mx-auto">
              Join a delivery-first team shaping the future of engineering, construction, fit-out and landscaping across the
              UAE.
            </p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Open Positions */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">Open Positions</h2>
            <div className="space-y-5">
              {roles.map((role) => (
                <div key={role.title} className="bg-white/10 backdrop-blur-sm rounded-2xl border border-white/10 p-5 sm:p-6">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-2">
                    <div>
                      <h3 className="text-white text-lg sm:text-xl font-semibold">{role.title}</h3>
                      <p className="text-gray-300 text-sm">
                        {role.location} • {role.type}
                      </p>
                    </div>
                    <button
                      onClick={() => setSelectedRole(role.title)}
                      className="inline-flex items-center justify-center px-4 py-2 rounded-lg bg-white text-gray-900 font-medium hover:bg-gray-100 transition-colors"
                    >
                      Apply
                    </button>
                  </div>
                  <p className="text-gray-200 text-sm mb-3">{role.summary}</p>
                  <div className="flex flex-wrap gap-2">
                    {role.tags.map((t) => (
                      <span key={t} className="text-xs text-blue-200 bg-blue-500/20 border border-blue-400/30 px-2 py-1 rounded-full">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Submit CV */}
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">Submit Your CV</h2>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl border border-white/10 p-5 sm:p-6">
              <form
                className="space-y-4"
                action="mailto:info@onixengineering.com"
                method="POST"
                encType="multipart/form-data"
                onSubmit={() => {
                  /* no-op to allow mailto fallback */
                }}
              >
                <div>
                  <label className="block text-sm text-gray-300 mb-1">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    required
                    className="w-full px-4 py-2 rounded-lg bg-gray-900 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-white"
                    placeholder="Your name"
                  />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm text-gray-300 mb-1">Email</label>
                    <input
                      type="email"
                      name="email"
                      required
                      className="w-full px-4 py-2 rounded-lg bg-gray-900 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-white"
                      placeholder="you@example.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-300 mb-1">Phone</label>
                    <input
                      type="tel"
                      name="phone"
                      className="w-full px-4 py-2 rounded-lg bg-gray-900 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-white"
                      placeholder="AE (+971) 50 000 0000"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm text-gray-300 mb-1">Position</label>
                  <select
                    name="position"
                    value={selectedRole}
                    onChange={(e) => setSelectedRole(e.target.value)}
                    className="w-full px-4 py-2 rounded-lg bg-gray-900 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-white"
                  >
                    <option value="">Select a role</option>
                    {roles.map((r) => (
                      <option key={r.title} value={r.title} className="text-gray-900">
                        {r.title}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm text-gray-300 mb-1">Upload CV (PDF/DOC)</label>
                  <input
                    type="file"
                    name="cv"
                    accept=".pdf,.doc,.docx"
                    className="w-full text-gray-300 file:mr-3 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-medium file:bg-white file:text-gray-900 hover:file:bg-gray-100"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-3 rounded-lg bg-white text-gray-900 font-semibold hover:bg-gray-100 transition-colors"
                >
                  Send Application
                </button>
                <p className="text-xs text-gray-400 mt-2">
                  Note: Submitting opens your email client via mailto. If it does not work, please email your CV to
                  <span className="text-gray-200"> info@onixengineering.com</span> with the role in the subject.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}




