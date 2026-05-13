import type { Metadata } from 'next'
import { Suspense } from 'react'
import { RealisationsGallery } from '@/components/sections/RealisationsGallery'
import { CTABanner } from '@/components/sections/CTABanner'

export const metadata: Metadata = {
  title: 'Nos Réalisations — Portfolio Industriel ENERMYS',
  description:
    'Découvrez nos projets de démantèlement GNC, terrassement VRD et transport industriel. Portfolio de chantiers réalisés en France et à l\'international.',
  alternates: { canonical: 'https://www.enermys.fr/realisations' },
}

export default function RealisationsPage() {
  return (
    <>
      <section className="relative bg-white border-b border-black/10 pt-40 pb-14 overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          aria-hidden="true"
          style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")" }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-heading font-black text-brand-orange text-5xl sm:text-6xl lg:text-8xl leading-none tracking-tight uppercase">
            Nos<br />Réalisations
          </h1>
          <p className="mt-6 font-body text-black/50 text-lg max-w-2xl leading-relaxed">
            Le démantèlement au cœur de nos projets. Ces exemples illustrent concrètement notre savoir-faire, de l&apos;état initial jusqu&apos;au résultat final.
          </p>
        </div>
      </section>

      <Suspense fallback={null}>
        <RealisationsGallery />
      </Suspense>

      <CTABanner
        title="Votre projet sera notre prochaine réalisation"
        subtitle="Faites confiance à ENERMYS pour vos interventions industrielles. Devis gratuit, réponse sous 24h."
        primaryLabel="Commencer mon projet"
        primaryHref="/projet"
      />
    </>
  )
}
