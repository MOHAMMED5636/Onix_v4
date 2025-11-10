import type { Metadata } from 'next'
import './globals.css'
import Footer from '@/components/Footer'
import Chatbot from '@/components/Chatbot'

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
  metadataBase: new URL('https://onixengineering.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Onix Engineering Consultancy - Professional Engineering Solutions',
    description: 'Leading engineering consultancy providing innovative solutions for construction, infrastructure, and technical projects.',
    url: 'https://onixengineering.com',
    siteName: 'Onix Engineering Consultancy',
    images: [
      {
        url: '/og-image.jpg',
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
    images: ['/og-image.jpg'],
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
      </head>
      <body className="font-berlin-sans">
        {children}
        <Chatbot />
        <Footer />
      </body>
    </html>
  )
}
