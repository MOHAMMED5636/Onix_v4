"use client"

import Link from "next/link"

const newsItems = [
  {
    title: "ONIX Engineering wins flagship mixed-use development contract",
    date: "October 28, 2025",
    summary:
      "The ONIX Group has been awarded the design and construction management of a 1.2 million sq.ft. mixed-use development in Dubai, featuring sustainable residential, retail, and hospitality spaces.",
    category: "Awards & Contracts",
    link: "#",
  },
  {
    title: "ONIX Prime launches regional finance excellence hub",
    date: "September 19, 2025",
    summary:
      "ONIX Prime expands its advisory footprint with a new hub supporting cross-border tax, audit, and compliance for strategic partners in the GCC.",
    category: "Business Expansion",
    link: "#",
  },
  {
    title: "Sustainable engineering spotlight: ONIX Design Studio delivers net-zero villa prototype",
    date: "August 7, 2025",
    summary:
      "The ONIX Design Studio team unveils a net-zero luxury villa concept integrating passive cooling, solar harvesting, and modular construction.",
    category: "Innovation",
    link: "#",
  },
]

export default function NewsPage() {
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
      <div className="fixed inset-0 bg-gradient-to-b from-black/70 via-black/75 to-black/90 -z-10" />

      <div className="relative z-10 pt-24 sm:pt-32 pb-20 sm:pb-24">
        <div className="text-center px-4 max-w-3xl mx-auto mb-16">
          <span className="text-xs sm:text-sm uppercase tracking-[0.4em] text-white/70">Newsroom</span>
          <h1 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-wide">Inside the ONIX Group</h1>
          <p className="mt-4 text-gray-200 text-sm sm:text-base md:text-lg">
            Discover the latest updates, project milestones, and thought leadership from across ONIX Engineering Consultancy, ONIX Prime,
            ONIX Design Studio, ONIX Plus, and Crimson.
          </p>
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8">
            {newsItems.map((item) => (
              <article
                key={`${item.title}-${item.date}`}
                className="bg-white/10 backdrop-blur-md border border-white/10 rounded-2xl p-6 sm:p-8 shadow-2xl transition-transform duration-300 hover:-translate-y-1 hover:shadow-3xl"
              >
                <div className="flex flex-wrap items-center justify-between gap-3 text-xs sm:text-sm uppercase tracking-wide text-white/70">
                  <span className="px-3 py-1 rounded-full bg-white/10 border border-white/15 text-white/80">{item.category}</span>
                  <span>{item.date}</span>
                </div>
                <h2 className="mt-4 text-2xl sm:text-3xl font-semibold text-white">{item.title}</h2>
                <p className="mt-4 text-gray-200 text-sm sm:text-base leading-relaxed">{item.summary}</p>
                <div className="mt-6 flex items-center justify-between">
                  <Link
                    href={item.link}
                    className="inline-flex items-center text-blue-200 hover:text-white transition-colors"
                  >
                    Read more
                    <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                  <span className="text-white/50 text-xs sm:text-sm">ONIX GROUP</span>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Link
              href="/"
              className="inline-flex items-center px-6 py-3 sm:px-8 sm:py-4 border-2 border-white text-white font-medium text-xs sm:text-sm uppercase tracking-wide hover:bg-white hover:text-gray-900 transition-all duration-300"
            >
              Back to home
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
