import type { Metadata } from 'next'

export const SITE_URL = 'https://onixgroup.ae'
export const OG_IMAGE_URL = `${SITE_URL}/og-image.webp`

type MetadataInput = {
  title: string
  description: string
  path: string
  image?: string
}

export const buildPageMetadata = ({ title, description, path, image = OG_IMAGE_URL }: MetadataInput): Metadata => {
  const absoluteUrl = `${SITE_URL}${path}`

  return {
    title,
    description,
    alternates: {
      canonical: absoluteUrl
    },
    openGraph: {
      title,
      description,
      url: absoluteUrl,
      siteName: 'Onix Engineering Consultancy',
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title
        }
      ],
      type: 'website',
      locale: 'en_US'
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [image]
    }
  }
}

type BasicSeoEntry = {
  title: string
  description: string
  image: string
  path: string
}

export const projectSeoMap: Record<string, BasicSeoEntry> = {
  'luxury-villa-residence': {
    title: 'Luxury Villa Residence | ONIX Group',
    description:
      'Textured concrete shells, palm courts, and custom interiors shape this Saih Shuaib residence into a serene resort-grade retreat.',
    image: 'https://res.cloudinary.com/dhq6qrrph/image/upload/v1763634069/qahvqhe2sar5hbfm5laa_njhlyp.webp',
    path: '/projects/luxury-villa-residence'
  },
  'loay-nasser-villa': {
    title: 'Loay Nasser Signature Villa | ONIX Group',
    description:
      'Layered terraces, timber fins, and palm-lined courtyards deliver a sculpted resort experience for the Loay Nasser residence.',
    image: 'https://res.cloudinary.com/dhq6qrrph/image/upload/v1763634982/Villa_.MR.LOAY_NASSER___QAIS_MOHAMMAD_3__Page19_yfmxhp.png',
    path: '/projects/loay-nasser-villa'
  },
  'signature-courtyard-villa': {
    title: 'Signature Courtyard Villa | ONIX Group',
    description:
      'A palm-lined courtyard anchors sunken lounges, cascading terraces, and warm timber details inside this private resort home.',
    image: 'https://res.cloudinary.com/dhq6qrrph/image/upload/v1763638862/2538_1_ancirv.jpg',
    path: '/projects/signature-courtyard-villa'
  },
  'industrial-plant': {
    title: 'Industrial Plant Delivery | ONIX Group',
    description:
      'High-performance manufacturing hub engineered with automated lines, advanced MEP, and data-driven safety systems.',
    image: 'https://res.cloudinary.com/dhq6qrrph/image/upload/v1763634074/qsikhhigbhyc4gg7lco3_ckbkne.webp',
    path: '/projects/industrial-plant'
  },
  'modern-office-complex': {
    title: 'Modern Office Complex | ONIX Group',
    description:
      'A 50-story commercial tower combining sustainable systems, smart automation, and biophilic interiors for enterprise tenants.',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80',
    path: '/projects/modern-office-complex'
  },
  'highway-bridge-project': {
    title: 'Highway Bridge Program | ONIX Group',
    description:
      'A 2.5 km regional bridge that improves connectivity with seismic protection, intelligent traffic systems, and architectural lighting.',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1200&q=80',
    path: '/projects/highway-bridge-project'
  },
  'residential-tower': {
    title: 'Residential Tower Delivery | ONIX Group',
    description:
      'Smart-home residences with rooftop amenities, concierge services, and wellness suites overlooking Dubai Marina.',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80',
    path: '/projects/residential-tower'
  }
}

export const leaderSeoMap: Record<string, BasicSeoEntry> = {
  'rameez-kaddour': {
    title: 'Ramez Kaddour | Founder & CEO, ONIX Group',
    description:
      'Ramez Kaddour directs the ONIX Group vision, combining 25+ years of engineering leadership with large-scale delivery expertise.',
    image: '/images/rameez-kaddour.webp',
    path: '/leader/rameez-kaddour'
  },
  'ahmed-al-kaddour': {
    title: 'Ahmed Al Kaddour | Chief Operating Officer',
    description:
      'Ahmed Al Kaddour leads operations and transformation initiatives that scale ONIX programs across the GCC.',
    image: '/images/ahmed_al_kaddour.webp',
    path: '/leader/ahmed-al-kaddour'
  },
  'kaddour-al-kaddour': {
    title: 'Kaddour Al Kaddour | General Manager, ONIX Engineering',
    description:
      'Kaddour Al Kaddour unifies structural, architectural, and MEP teams to deliver BIM-first excellence.',
    image: '/images/kaddour.webp',
    path: '/leader/kaddour-al-kaddour'
  },
  'nabil-al-kaddour': {
    title: 'Nabil Al Kaddour | General Manager, ONIX PLUS',
    description:
      'Nabil Al Kaddour oversees ONIX PLUS construction, fit-out, and landscaping, turning design intent into delivered assets.',
    image: '/images/nabil.webp',
    path: '/leader/nabil-al-kaddour'
  },
  'mamoun-al-hussien': {
    title: 'Mamoun Al Hussien | General Manager, ONIX Design Studio',
    description:
      'Mamoun Al Hussien coordinates multidisciplinary interior and architectural teams for signature spaces across the GCC.',
    image: 'https://res.cloudinary.com/dhq6qrrph/image/upload/v1763710496/mamoun_ut7ywy.jpg',
    path: '/leader/mamoun-al-hussien'
  },
  'anas-ali': {
    title: 'Anas Ali | General Manager, CRIMSON Steel Contracting',
    description:
      'Anas Ali leads CRIMSON’s steel contracting programs, focusing on industrial speed and precision fabrication.',
    image: '/images/Anas.webp',
    path: '/leader/anas-ali'
  },
  'obada-hamada': {
    title: 'Obada Saad Hamada | General Manager, ONIX Prime',
    description:
      'Obada Saad Hamada leads ONIX Prime’s trusted financial and tax advisory practice, blending transparency, accuracy, and innovation for every client.',
    image: '/images/Obada.webp',
    path: '/leader/obada-hamada'
  },
  'dia-zayoud': {
    title: 'Diaa Zayoud | General Manager, ONIX Engineering Abu Dhabi',
    description:
      'Diaa Zayoud drives Abu Dhabi’s structural and infrastructure delivery with a hands-on client approach.',
    image: '/images/Dia.webp',
    path: '/leader/dia-zayoud'
  }
}

export const getProjectSeo = (slug: string) => projectSeoMap[slug]
export const getLeaderSeo = (slug: string) => leaderSeoMap[slug]

