import type { Metadata } from 'next'
import { Poppins, Inter } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--font-poppins',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://www.enermys.fr'),
  title: {
    default: "ENERMYS — Démantèlement, Terrassement & Transport Industriel",
    template: '%s | ENERMYS',
  },
  description:
    "ENERMYS, spécialiste du démantèlement de stations GNC, du terrassement VRD et du transport d'équipements industriels. Interventions nationales et internationales. Devis gratuit.",
  keywords: [
    'démantèlement station GNC',
    'décommissionnement industriel',
    'transport équipements lourds',
    'terrassement VRD industriel',
    'remise en état site industriel',
    'Oil & Gas France',
    'convoi exceptionnel',
    'dépollution site',
    'ICPE',
    'coordination projet industriel',
  ],
  authors: [{ name: 'ENERMYS', url: 'https://www.enermys.fr' }],
  creator: 'ENERMYS',
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: 'https://www.enermys.fr',
    siteName: 'ENERMYS',
    title: "ENERMYS — Démantèlement, Terrassement & Transport Industriel",
    description:
      "Spécialiste Oil & Gas : démantèlement de stations GNC, terrassement VRD, transport industriel. Intervention nationale et internationale.",
    images: [
      {
        url: '/opengraph-image',
        width: 1200,
        height: 630,
        alt: 'ENERMYS — Démantèlement, Terrassement & Transport Industriel',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ENERMYS — Démantèlement & Transport Industriel',
    description: "Spécialiste Oil & Gas, intervention nationale et internationale. Devis gratuit.",
  },
  icons: {
    icon: '/logo-flame.png',
    apple: '/logo-flame.png',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
}

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'ENERMYS',
  description: "Spécialiste du démantèlement de stations GNC, du terrassement VRD et du transport d'équipements industriels.",
  url: 'https://www.enermys.fr',
  telephone: '+33652143921',
  email: 'contact@enermys.fr',
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'FR',
  },
  areaServed: ['France', 'International'],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Services industriels ENERMYS',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Démantèlement de stations GNC' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Terrassement & VRD' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: "Transport d'équipements industriels" } },
    ],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" className={`${poppins.variable} ${inter.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body className="font-body antialiased">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:bg-brand-orange focus:text-white focus:px-4 focus:py-2 focus:rounded-lg focus:font-heading focus:font-semibold"
        >
          Aller au contenu principal
        </a>
        <Header />
        <main id="main-content" tabIndex={-1}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
