import type { Metadata } from 'next'
import { Hero } from '@/components/sections/Hero'
import { Stats } from '@/components/sections/Stats'
import { ServicesOverview } from '@/components/sections/ServicesOverview'
import { WhyUs } from '@/components/sections/WhyUs'
import { Process } from '@/components/sections/Process'
import { ProjectGallery } from '@/components/sections/ProjectGallery'
import { Testimonials } from '@/components/sections/Testimonials'
import { CTABanner } from '@/components/sections/CTABanner'

export const metadata: Metadata = {
  title: "ENERMYS — Démantèlement, Terrassement & Transport Industriel",
  description:
    'Spécialiste Oil & Gas depuis 10 ans : démantèlement de stations GNC, terrassement VRD, transport d\'équipements industriels, remise en état de sites. Devis gratuit.',
  alternates: {
    canonical: 'https://www.enermys.fr',
  },
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <Stats />
      <ServicesOverview />
      <WhyUs />
      <Process />
      <ProjectGallery limit={6} showLink />
      <Testimonials />
      <CTABanner />
    </>
  )
}
