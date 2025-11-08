"use client"

import Link from "next/link"
import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"

export default function CareersPage() {
  const router = useRouter()
  const [selectedRole, setSelectedRole] = useState<string>("")
  const [showMobileMenu, setShowMobileMenu] = useState(false)
  const [showCompaniesDropdown, setShowCompaniesDropdown] = useState(false)
  const [showMobileCompanies, setShowMobileCompanies] = useState(false)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement
      if (!target.closest(".mobile-menu-container")) {
        setShowMobileMenu(false)
      }
      if (!target.closest(".companies-dropdown-container")) {
        setShowCompaniesDropdown(false)
      }
    }

    document.addEventListener("click", handleClickOutside)
    return () => {
      document.removeEventListener("click", handleClickOutside)
    }
  }, [])

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
    <div className="relative min-h-screen overflow-hidden">
      <video
        className="fixed inset-0 h-full w-full object-cover -z-20"
        src="/videos/landscape.mp4"
        autoPlay
        muted
        loop
        playsInline
      />
      <div className="fixed inset-0 bg-gradient-to-b from-black/30 via-black/60 to-black/85 -z-10" />

      {/* Header borrowed from main hero */}
      <div className="absolute top-0 left-0 right-0 z-50">
        <div className="bg-white/5 backdrop-blur-md border-b border-white/10 shadow-lg">
          <div className="w-full px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16 sm:h-20">
              <Link href="/" className="flex flex-col justify-center leading-tight gap-1 -mt-2 sm:-mt-3">
                <span className="text-white/80 text-[10px] sm:text-xs md:text-sm font-light tracking-wider">
                  ENGINEERING | CONSTRUCTION | TECHNOLOGY
                </span>
                <img
                  src="/images/ONIX GROUP 0002.png"
                  alt="ONIX Logo"
                  className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 lg:w-40 lg:h-40 object-contain"
                />
              </Link>

              <div className="flex items-center space-x-4 sm:space-x-6">
                <nav className="hidden md:flex lg:hidden items-center space-x-3">
                  <button
                    className="text-white/90 hover:text-white font-medium transition-all duration-300 text-xs uppercase tracking-wide cursor-pointer relative group bg-transparent border-none px-3 py-2 rounded-lg hover:bg-white/10"
                    onClick={(e) => {
                      e.preventDefault()
                      document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })
                    }}
                  >
                    ABOUT
                  </button>
                  <div className="relative companies-dropdown-container">
                    <button
                      className="text-white/90 hover:text-white font-medium transition-all duration-300 text-xs uppercase tracking-wide cursor-pointer relative group px-3 py-2 rounded-lg hover:bg-white/10 flex items-center gap-1"
                      onClick={(e) => {
                        e.preventDefault()
                        e.stopPropagation()
                        setShowCompaniesDropdown((v) => !v)
                      }}
                      aria-haspopup="menu"
                      aria-expanded={showCompaniesDropdown}
                    >
                      COMPANIES
                      <svg className={`w-3 h-3 transition-transform ${showCompaniesDropdown ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    {showCompaniesDropdown && (
                      <div className="absolute right-0 mt-2 w-56 bg-black/70 backdrop-blur-md border border-white/10 rounded-lg shadow-xl z-[60] py-2">
                        <Link href="/companies" className="block px-4 py-2 text-white/90 hover:text-white hover:bg-white/10 transition-colors">
                          Overview
                        </Link>
                        <Link href="/companies/list" className="block px-4 py-2 text-white/90 hover:text-white hover:bg-white/10 transition-colors">
                          All Companies
                        </Link>
                      </div>
                    )}
                  </div>
                  <button
                    className="text-white/90 hover:text-white font-medium transition-all duration-300 text-xs uppercase tracking-wide cursor-pointer relative group bg-transparent border-none px-3 py-2 rounded-lg hover:bg-white/10"
                    onClick={(e) => {
                      e.preventDefault()
                      document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })
                    }}
                  >
                    PORTFOLIO
                  </button>
                  <a
                    href="/careers"
                    className="text-white/90 hover:text-white font-medium transition-all duration-300 text-xs uppercase tracking-wide cursor-pointer relative group px-3 py-2 rounded-lg hover:bg-white/10"
                  >
                    CAREERS
                  </a>
                  <button
                    className="text-white/90 hover:text-white font-medium transition-all duration-300 text-xs uppercase tracking-wide cursor-pointer relative group bg-transparent border-none px-3 py-2 rounded-lg hover:bg-white/10"
                    onClick={(e) => {
                      e.preventDefault()
                      router.push("/leaders")
                    }}
                  >
                    LEADERS
                  </button>
                  <button
                    className="text-white/90 hover:text-white font-medium transition-all duration-300 text-xs uppercase tracking-wide cursor-pointer relative group bg-transparent border-none px-3 py-2 rounded-lg hover:bg-white/10"
                    onClick={(e) => {
                      e.preventDefault()
                      router.push("/legacy")
                    }}
                  >
                    LEGACY
                  </button>
                </nav>

                <nav className="hidden lg:flex items-center space-x-4 xl:space-x-6">
                  <button
                    className="text-white/90 hover:text-white font-medium transition-all duration-300 text-sm uppercase tracking-wide cursor-pointer relative group bg-transparent border-none px-3 py-2 rounded-lg hover:bg-white/10"
                    onClick={(e) => {
                      e.preventDefault()
                      document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })
                    }}
                  >
                    <span className="relative">
                      ABOUT
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
                    </span>
                  </button>

                  <div className="relative companies-dropdown-container">
                    <button
                      className="text-white/90 hover:text-white font-medium transition-all duration-300 text-sm uppercase tracking-wide cursor-pointer relative group px-3 py-2 rounded-lg hover:bg-white/10 flex items-center gap-1"
                      onClick={(e) => {
                        e.preventDefault()
                        e.stopPropagation()
                        setShowCompaniesDropdown((v) => !v)
                      }}
                      aria-haspopup="menu"
                      aria-expanded={showCompaniesDropdown}
                    >
                      <span className="relative">
                        COMPANIES
                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
                      </span>
                      <svg className={`w-3 h-3 transition-transform ${showCompaniesDropdown ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    {showCompaniesDropdown && (
                      <div className="absolute right-0 mt-2 w-64 bg-black/70 backdrop-blur-md border border-white/10 rounded-lg shadow-xl z-[60] py-2">
                        <Link href="/companies" className="block px-4 py-2 text-white/90 hover:text-white hover:bg-white/10 transition-colors">
                          Overview
                        </Link>
                        <Link href="/companies/list" className="block px-4 py-2 text-white/90 hover:text-white hover:bg-white/10 transition-colors">
                          All Companies
                        </Link>
                        <div className="my-2 h-px bg-white/10"></div>
                        <span className="block px-4 py-2 text-white/60 text-xs uppercase tracking-wide">Highlighted</span>
                        <Link href="/companies" className="block px-4 py-2 text-white/90 hover:text-white hover:bg-white/10 transition-colors">
                          Onix Engineering Consultancy
                        </Link>
                        <Link href="/companies" className="block px-4 py-2 text-white/90 hover:text-white hover:bg-white/10 transition-colors">
                          Onix Prime
                        </Link>
                        <Link href="/companies" className="block px-4 py-2 text-white/90 hover:text-white hover:bg-white/10 transition-colors">
                          Onix Design Studio
                        </Link>
                        <Link href="/companies" className="block px-4 py-2 text-white/90 hover:text-white hover:bg-white/10 transition-colors">
                          Onix Plus
                        </Link>
                        <Link href="/companies" className="block px-4 py-2 text-white/90 hover:text-white hover:bg-white/10 transition-colors">
                          Crimson
                        </Link>
                      </div>
                    )}
                  </div>

                  <button
                    className="text-white/90 hover:text-white font-medium transition-all duration-300 text-sm uppercase tracking-wide cursor-pointer relative group bg-transparent border-none px-3 py-2 rounded-lg hover:bg-white/10"
                    onClick={(e) => {
                      e.preventDefault()
                      document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })
                    }}
                  >
                    <span className="relative">
                      PORTFOLIO
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
                    </span>
                  </button>
                  <button
                    className="text-white/90 hover:text-white font-medium transition-all duration-300 text-sm uppercase tracking-wide cursor-pointer relative group bg-transparent border-none px-3 py-2 rounded-lg hover:bg-white/10"
                    onClick={(e) => {
                      e.preventDefault()
                      document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })
                    }}
                  >
                    <span className="relative">
                      NEWS
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
                    </span>
                  </button>
                  <a
                    href="/careers"
                    className="text-white/90 hover:text-white font-medium transition-all duration-300 text-sm uppercase tracking-wide cursor-pointer relative group px-3 py-2 rounded-lg hover:bg-white/10"
                  >
                    <span className="relative">
                      CAREERS
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
                    </span>
                  </a>
                  <button
                    className="text-white/90 hover:text-white font-medium transition-all duration-300 text-sm uppercase tracking-wide cursor-pointer relative group bg-transparent border-none px-3 py-2 rounded-lg hover:bg-white/10"
                    onClick={(e) => {
                      e.preventDefault()
                      document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
                    }}
                  >
                    <span className="relative">
                      CONNECT
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
                    </span>
                  </button>
                  <button
                    className="text-white/90 hover:text-white font-medium transition-all duration-300 text-sm uppercase tracking-wide cursor-pointer relative group bg-transparent border-none px-3 py-2 rounded-lg hover:bg-white/10"
                    onClick={(e) => {
                      e.preventDefault()
                      router.push("/leaders")
                    }}
                  >
                    <span className="relative">
                      LEADERS
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
                    </span>
                  </button>
                  <button
                    className="text-white/90 hover:text-white font-medium transition-all duration-300 text-sm uppercase tracking-wide cursor-pointer relative group bg-transparent border-none px-3 py-2 rounded-lg hover:bg-white/10"
                    onClick={(e) => {
                      e.preventDefault()
                      router.push("/legacy")
                    }}
                  >
                    <span className="relative">
                      LEGACY
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
                    </span>
                  </button>
                  <div className="inline-flex items-center justify-center w-8 h-8 text-white/90 hover:text-white cursor-pointer transition-transform duration-300 hover:scale-110 rounded-lg hover:bg-white/10 align-middle">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </div>
                </nav>

                <div className="lg:hidden relative z-50 mobile-menu-container">
                  <button
                    onClick={(e) => {
                      e.preventDefault()
                      e.stopPropagation()
                      setShowMobileMenu(!showMobileMenu)
                    }}
                    className="text-white/90 hover:text-white transition-colors duration-200 p-2 rounded-lg hover:bg-white/10"
                    aria-label="Toggle mobile menu"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {showMobileMenu && (
          <>
            <div
              className="lg:hidden fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
              onClick={() => setShowMobileMenu(false)}
            ></div>

            <div className="lg:hidden fixed top-0 right-0 h-full w-80 md:w-96 bg-white/10 backdrop-blur-md z-50 mobile-menu-container transform transition-all duration-300 ease-out border-l border-white/20 shadow-2xl">
              <div className="p-8 h-full flex flex-col">
                <div className="flex items-center justify-between mb-12">
                  <div className="flex items-center space-x-3">
                    <img src="/images/ONIX GROUP 0002.png" alt="ONIX GROUP Logo" className="h-14 w-auto object-contain" />
                    <div className="flex flex-col">
                      <span className="text-white font-bold text-lg tracking-wide">ONIX GROUP</span>
                      <span className="text-white/70 text-xs font-light tracking-wider">ENGINEERING | CONSTRUCTION</span>
                    </div>
                  </div>
                  <button
                    onClick={() => setShowMobileMenu(false)}
                    className="w-8 h-8 flex items-center justify-center text-white/70 hover:text-white transition-colors duration-200 rounded-lg hover:bg-white/10"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>

                <nav className="flex-1 space-y-2">
                  <button
                    onClick={() => {
                      setShowMobileMenu(false)
                      document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })
                    }}
                    className="w-full text-left py-4 px-4 text-white/90 hover:text-white transition-colors duration-200 rounded-lg hover:bg-white/10 border border-white/10 hover:border-white/20"
                  >
                    ABOUT
                  </button>

                  <div className="mobile-menu-container">
                    <button
                      onClick={() => setShowMobileCompanies((v) => !v)}
                      className="w-full text-left py-4 px-4 text-white/90 hover:text-white transition-colors duration-200 rounded-lg hover:bg-white/10 border border-white/10 hover:border-white/20 flex items-center justify-between"
                      aria-expanded={showMobileCompanies}
                      aria-controls="mobile-companies-submenu"
                    >
                      <span>COMPANIES</span>
                      <svg className={`w-4 h-4 transition-transform ${showMobileCompanies ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    {showMobileCompanies && (
                      <div id="mobile-companies-submenu" className="mt-2 ml-2 space-y-2">
                        <Link href="/companies" onClick={() => setShowMobileMenu(false)} className="block w-full text-left py-3 px-4 text-white/90 hover:text-white transition-colors rounded-lg hover:bg-white/10 border border-white/10">
                          Overview
                        </Link>
                        <Link href="/companies/list" onClick={() => setShowMobileMenu(false)} className="block w-full text-left py-3 px-4 text-white/90 hover:text-white transition-colors rounded-lg hover:bg-white/10 border border-white/10">
                          All Companies
                        </Link>
                      </div>
                    )}
                  </div>

                  <button
                    onClick={() => {
                      setShowMobileMenu(false)
                      document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })
                    }}
                    className="w-full text-left py-4 px-4 text-white/90 hover:text-white transition-colors duration-200 rounded-lg hover:bg-white/10 border border-white/10 hover:border-white/20"
                  >
                    PORTFOLIO
                  </button>

                  <button
                    onClick={() => {
                      setShowMobileMenu(false)
                      document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })
                    }}
                    className="w-full text-left py-4 px-4 text-white/90 hover:text-white transition-colors duration-200 rounded-lg hover:bg-white/10 border border-white/10 hover:border-white/20"
                  >
                    NEWS
                  </button>
                  <a
                    href="/careers"
                    onClick={() => setShowMobileMenu(false)}
                    className="block w-full text-left py-4 px-4 text-white/90 hover:text-white transition-colors duration-200 rounded-lg hover:bg-white/10 border border-white/10 hover:border-white/20"
                  >
                    CAREERS
                  </a>

                  <button
                    onClick={() => {
                      setShowMobileMenu(false)
                      document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
                    }}
                    className="w-full text-left py-4 px-4 text-white/90 hover:text-white transition-colors duration-200 rounded-lg hover:bg-white/10 border border-white/10 hover:border-white/20"
                  >
                    CONNECT
                  </button>

                  <button
                    onClick={() => {
                      setShowMobileMenu(false)
                      router.push("/leaders")
                    }}
                    className="w-full text-left py-4 px-4 text-white/90 hover:text-white transition-colors duration-200 rounded-lg hover:bg-white/10 border border-white/10 hover:border-white/20"
                  >
                    LEADERS
                  </button>
                  <button
                    onClick={() => {
                      setShowMobileMenu(false)
                      router.push("/legacy")
                    }}
                    className="w-full text-left py-4 px-4 text-white/90 hover:text-white transition-colors duration-200 rounded-lg hover:bg-white/10 border border-white/10 hover:border-white/20"
                  >
                    LEGACY
                  </button>
                </nav>

                <div className="mt-auto pt-8 border-t border-white/20">
                  <p className="text-white/70 text-sm mb-4">+971 42 83 8880</p>
                  <div className="flex space-x-4">
                    <a
                      href="https://wa.me/97142838880"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white/70 hover:text-white transition-colors duration-200 p-2 rounded-lg hover:bg-white/10"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
                      </svg>
                    </a>
                    <a
                      href="https://www.linkedin.com/company/onix-engineering-consultancy/posts/?feedView=all"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white/70 hover:text-white transition-colors duration-200 p-2 rounded-lg hover:bg-white/10"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                      </svg>
                    </a>
                    <a
                      href="https://www.instagram.com/onixgroup.ae/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white/70 hover:text-white transition-colors duration-200 p-2 rounded-lg hover:bg-white/10"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>

      <div className="relative z-10 pt-20 sm:pt-24 lg:pt-28 pb-16 sm:pb-24">
        {/* Header */}
        <div className="text-center px-4 max-w-4xl mx-auto mb-12 sm:mb-16">
          <div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-wide mb-3">Careers at ONIX</h1>
            <p className="text-gray-200 text-sm sm:text-base md:text-lg max-w-3xl mx-auto">
              Join a delivery-first team shaping the future of engineering, construction, fit-out and landscaping across the
              UAE.
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" id="open-positions">
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
    </div>
  )
}




