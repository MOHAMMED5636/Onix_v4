import type { Metadata } from 'next'
import './globals.css'
import Footer from '@/components/Footer'
import Chatbot from '@/components/Chatbot'
import { OG_IMAGE_URL, SITE_URL } from '@/lib/seoData'

export const metadata: Metadata = {
  title: 'Onix Engineering Consultancy - Professional Engineering Solutions',
  description: 'Leading engineering consultancy providing innovative solutions for construction, infrastructure, and technical projects. Expert engineering services with cutting-edge technology.',
  keywords: 'engineering consultancy, construction engineering, infrastructure, technical solutions, professional engineering',
  authors: [{ name: 'Onix Engineering Consultancy' }],
  creator: 'Onix Engineering Consultancy',
  publisher: 'Onix Engineering Consultancy',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(SITE_URL),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Onix Engineering Consultancy - Professional Engineering Solutions',
    description: 'Leading engineering consultancy providing innovative solutions for construction, infrastructure, and technical projects.',
    url: SITE_URL,
    siteName: 'Onix Engineering Consultancy',
    images: [
      {
        url: OG_IMAGE_URL,
        width: 1200,
        height: 630,
        alt: 'Onix Engineering Consultancy',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Onix Engineering Consultancy - Professional Engineering Solutions',
    description: 'Leading engineering consultancy providing innovative solutions for construction, infrastructure, and technical projects.',
    images: [OG_IMAGE_URL],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

const structuredData = [
  {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'ONIX Group of Companies',
    url: SITE_URL,
    logo: `${SITE_URL}/images/ONIX_LOGO.png`,
    sameAs: [
      'https://www.linkedin.com/company/onix-engineering-consultancy/',
      'https://www.instagram.com/onixgroup_ae/'
    ],
    contactPoint: [
      {
        '@type': 'ContactPoint',
        contactType: 'Customer Service',
        telephone: '+971-4-283-8880',
        email: 'info@onixgroup.ae',
        areaServed: 'AE',
        availableLanguage: ['English', 'Arabic']
      }
    ],
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Mardoof Building, Gate B, Office 114, Sheikh Zayed Road, Al Safa 1',
      addressLocality: 'Dubai',
      addressCountry: 'AE'
    }
  },
  {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Onix Engineering Consultancy',
    url: SITE_URL,
    potentialAction: {
      '@type': 'SearchAction',
      target: `${SITE_URL}/?q={search_term_string}`,
      'query-input': 'required name=search_term_string'
    }
  }
]

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className="font-berlin-sans">
        {children}
        <Chatbot />
        <Footer />
      </body>
    </html>
  )
}
