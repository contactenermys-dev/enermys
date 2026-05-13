import type { Metadata } from 'next'
import { Award, Users, MapPin, Shield } from 'lucide-react'
import { SectionTitle } from '@/components/ui/SectionTitle'
import { CTABanner } from '@/components/sections/CTABanner'
import { Stats } from '@/components/sections/Stats'

export const metadata: Metadata = {
  title: "À Propos — L'histoire d'ENERMYS",
  description:
    "Découvrez ENERMYS : 10 ans d'expertise dans le démantèlement industriel, le terrassement VRD et le transport d'équipements. Partenaire de grands comptes énergétiques.",
  alternates: { canonical: 'https://www.enermys.fr/a-propos' },
}

const values = [
  {
    icon: Award,
    title: "Qualité sans compromis",
    description: "Chaque chantier est traité avec le même niveau d'exigence : protocoles rigoureux, matériel adapté, équipes formées. La rigueur n'est pas une option.",
  },
  {
    icon: Shield,
    title: "Sécurité & conformité",
    description: "La sécurité de nos équipes et la conformité réglementaire sont au cœur de chaque intervention. Nous ne faisons aucun compromis sur ces points.",
  },
  {
    icon: Users,
    title: "Relation de confiance",
    description: "Un interlocuteur dédié, une communication transparente, un reporting documenté. Vous savez à tout moment où en est votre projet.",
  },
  {
    icon: MapPin,
    title: "Mobilité nationale",
    description: "Nos équipes se déplacent partout en France et à l'international. Vos chantiers n'ont pas de frontières — nos interventions non plus.",
  },
]

export default function AProposPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-white border-b border-black/10 pt-40 pb-14 overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          aria-hidden="true"
          style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")" }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-heading font-black text-brand-orange text-5xl sm:text-6xl lg:text-8xl leading-none tracking-tight uppercase">
            L&apos;expertise<br />industrielle<br />au service de<br />votre projet
          </h1>
        </div>
      </section>

      {/* Story */}
      <section className="bg-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <SectionTitle
                eyebrow="Notre histoire"
                title="10 ans à construire votre confiance"
                align="left"
              />
              <div className="mt-6 space-y-4 text-slate-600 font-body leading-relaxed">
                <p>
                  ENERMYS est né d&apos;une conviction simple : les projets industriels complexes méritent des partenaires à la hauteur. Fondée il y a plus de 10 ans par des professionnels issus du secteur Oil &amp; Gas, notre entreprise s&apos;est spécialisée dans les opérations de démantèlement, de terrassement et de transport industriel — des métiers exigeants, où la rigueur et la conformité ne sont pas négociables.
                </p>
                <p>
                  Aujourd&apos;hui, ENERMYS accompagne des <strong className="text-brand-navy">grands comptes énergétiques</strong> — ENGIE, TotalEnergies et bien d&apos;autres — sur des chantiers d&apos;envergure en France et à l&apos;international. Notre force repose sur des équipes spécialisées, un outillage adapté et une organisation structurée autour de la satisfaction client.
                </p>
                <p>
                  De la première analyse du besoin à la remise du dossier de clôture, nous pilotons chaque projet avec un chef de projet dédié, une communication transparente et un reporting complet. Plus de <strong className="text-brand-navy">50 projets réalisés</strong>, un taux de conformité à 100% et 98% de chantiers livrés dans les délais : notre bilan parle pour nous.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src="/apropos-equipe.png"
                alt="Chantier ENERMYS — levage industriel"
                className="rounded-2xl w-full object-cover aspect-[4/3]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <Stats />

      {/* Values */}
      <section className="bg-brand-cream py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <SectionTitle
              eyebrow="Nos valeurs"
              title="Ce qui nous anime chaque jour"
              align="center"
            />
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v) => (
              <div key={v.title} className="bg-white rounded-2xl p-7 text-center hover:shadow-card-hover transition-shadow duration-300">
                <div className="w-14 h-14 rounded-2xl bg-brand-orange/10 flex items-center justify-center mx-auto mb-5">
                  <v.icon className="w-7 h-7 text-brand-orange" aria-hidden="true" />
                </div>
                <h3 className="font-heading font-bold text-brand-navy text-lg mb-3">{v.title}</h3>
                <p className="font-body text-slate-500 text-sm leading-relaxed">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="font-body text-slate-400 text-xs uppercase tracking-widest mb-6">
            Partenaire de confiance des grands comptes énergétiques
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-40">
            {['ENGIE', 'TotalEnergies', 'Air Liquide', 'Schneider Electric', 'Veolia'].map((name) => (
              <span key={name} className="font-heading font-black text-brand-navy text-xl uppercase tracking-wide">
                {name}
              </span>
            ))}
          </div>
          <p className="mt-6 font-body text-slate-400 text-xs italic">
          </p>
        </div>
      </section>

      <CTABanner
        title="Prêt à confier votre projet à ENERMYS ?"
        subtitle="Un devis gratuit, une équipe à l'écoute et 10 ans d'expertise industrielle à votre service."
        primaryLabel="Commencer mon projet"
        primaryHref="/projet"
      />
    </>
  )
}
