import Image from "next/image"

export default function Companies() {
  const companies = [
    {
      name: 'ONIX ENGINEERING CONSULTANCY',
      description: 'Leading engineering solutions provider specializing in comprehensive structural and infrastructure development.',
      services: [
        'Structural Design',
        'Infrastructure Development', 
        'MEP Systems',
        'Construction Management',
        'Quality Assurance', 
        'Project Planning'
      ],
      logo: '/images/Onix.webp'
    },
    {
      name: 'ONIX PRIME',
      description: 'Professional accounting and tax consultancy services providing comprehensive financial solutions.',
      tagline: 'Accounting & Tax Consultancy LLC',
      services: [
        'Tax Consultancy',
        'Financial Planning', 
        'Accounting Services',
        'Audit Services',
        'Business Advisory',
        'Compliance Management'
      ],
      logo: '/images/Onix Prime Logo White[1].webp'
    },
    {
      name: 'ONIX DESIGN STUDIO',
      description: 'Creative design solutions for interior and exterior spaces with innovative architectural concepts.',
      services: [
        'Interior Design',
        'Exterior Design',
        'Architectural Design', 
        'Space Planning',
        '3D Visualization',
        'Design Consultation' 
      ],
      logo: '/images/onix-design-studio-logo.png'
    },
    {
      name: 'ONIX PLUS',
      description: 'CONSTRUCTION | FIT-OUT | LANDSCAPING — Onix Plus turns design and engineering into reality. We bring concepts to life through construction, fit-out, and landscaping with uncompromising quality and attention to detail.',
      services: [
        'Construction',
        'Interior Fit-Out',
        'Landscaping',
        'Quality Assurance',
        'Project Delivery',
        'Site Coordination'
      ],
      logo: '/images/onix-plus-logo.png'
    },
    {
      name: 'CRIMSON',
      description: 'Specialized steel containing and metal fabrication services for industrial and construction projects.',
      services: [
        'Steel Fabrication',
        'Metal Containers',
        'Industrial Storage',
        'Custom Fabrication',
        'Quality Control',
        'Project Delivery'
      ],
      logo: '/images/CRIMSON 001[1].webp'
    }
  ]

  return (
    <>
    {/* Companies Section */}
    <section id="companies" className="py-12 sm:py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-20">
          <div className="inline-block bg-white/10 backdrop-blur-sm rounded-full px-4 sm:px-6 py-2 mb-4 sm:mb-6">
            <span className="text-xs sm:text-sm font-medium text-white uppercase tracking-wider">Our Companies</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6 uppercase tracking-wide">
            <span className="text-red-500">ONIX</span> GROUP OF COMPANIES
          </h2>
          <div className="w-16 sm:w-24 h-1 bg-white mx-auto mb-6 sm:mb-8"></div>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-4xl mx-auto">
            A diverse portfolio of specialized companies delivering excellence across multiple industries 
            with innovative solutions and professional expertise.
          </p>
        </div>

        {/* Companies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4 sm:gap-6 lg:gap-8">
          {companies.map((company, index) => (
            <div
              key={index}
              className={`bg-gray-900/80 backdrop-blur-sm rounded-2xl p-4 sm:p-6 lg:p-8 shadow-2xl border border-white/10 hover:shadow-3xl transition-all duration-300 hover:scale-105 group lg:col-span-2 ${index === 3 ? 'lg:col-start-2' : ''} ${index === 4 ? 'lg:col-start-4' : ''}`}
            >
              {/* Company Header */}
              <div className="text-center mb-4 sm:mb-6">
                {['ONIX PRIME', 'ONIX DESIGN STUDIO', 'ONIX ENGINEERING CONSULTANCY', 'ONIX PLUS', 'CRIMSON'].includes(company.name) ? (
                  <>
                    <div className={`mx-auto mb-2 sm:mb-3 flex items-center justify-center ${
                      company.name === 'ONIX PRIME'
                        ? 'w-28 h-28 sm:w-36 sm:h-36'
                        : company.name === 'ONIX DESIGN STUDIO'
                        ? 'w-24 h-24 sm:w-32 sm:h-32'
                        : company.name === 'ONIX ENGINEERING CONSULTANCY'
                        ? 'w-24 h-24 sm:w-32 sm:h-32'
                        : 'w-24 h-24 sm:w-32 sm:h-32'
                    }`}>
                      <Image
                        src={company.logo}
                        alt={`${company.name} Logo`}
                        width={144}
                        height={144}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    {company.tagline && (
                      <p className="text-[10px] sm:text-xs uppercase tracking-widest text-blue-200 mb-2">
                        {company.tagline}
                      </p>
                    )}
                  </>
                ) : (
                  <div className="rounded-xl flex items-center justify-center mx-auto mb-2 sm:mb-3 shadow-lg group-hover:scale-110 transition-transform duration-300 border border-white/10 bg-transparent w-20 h-20 sm:w-24 sm:h-24 p-2">
                    <Image
                      src={company.logo}
                      alt={`${company.name} Logo`}
                      width={96}
                      height={96}
                      className="w-full h-full object-contain"
                    />
                  </div>
                )}
                <h3 className="text-base sm:text-lg lg:text-xl font-bold text-white mb-2 group-hover:text-white/90 transition-colors duration-300">
                  {company.name}
                </h3>
                <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
                  {company.description}
                </p>
              </div>

              {/* Services List */}
              <div className="space-y-2 sm:space-y-3">
                <h4 className="text-xs sm:text-sm font-semibold text-white uppercase tracking-wide mb-2 sm:mb-3">
                  Services
                </h4>
                <div className="grid grid-cols-1 gap-1 sm:gap-2">
                  {company.services.map((service, serviceIndex) => (
                    <div key={serviceIndex} className="flex items-center text-xs sm:text-sm text-gray-300 hover:text-white transition-colors duration-200">
                      <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white rounded-full mr-2 sm:mr-3 flex-shrink-0"></div>
                      <span>{service}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Company Badge */}
              <div className="mt-4 sm:mt-6 pt-3 sm:pt-4 border-t border-white/20">
                <div className="text-center">
                  <span className="inline-block bg-white/10 text-white text-xs font-medium px-2 sm:px-3 py-1 rounded-full">
                    ONIX GROUP
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
    </>
  )
}
