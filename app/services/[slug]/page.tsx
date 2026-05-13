import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import {
  Settings, Mountain, Truck, RefreshCw, Users,
  CheckCircle2, ArrowRight, Phone,
} from 'lucide-react'
import { services } from '@/lib/data'
import { SectionTitle } from '@/components/ui/SectionTitle'
import { CTABanner } from '@/components/sections/CTABanner'
import { Button } from '@/components/ui/Button'

type Props = { params: { slug: string } }

const iconMap: Record<string, React.ElementType> = {
  Settings, Mountain, Truck, RefreshCw, Users,
}

export async function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const service = services.find((s) => s.slug === params.slug)
  if (!service) return {}
  return {
    title: service.metaTitle,
    description: service.metaDescription,
    keywords: service.keywords,
    alternates: { canonical: `https://www.enermys.fr/services/${service.slug}` },
  }
}

const faqBySlug: Record<string, Array<{ q: string; a: string }>> = {
  'demantelement-gnc': [
    { q: "Intervenez-vous sur des sites en activité ?", a: "Absolument. Nous avons l'expérience des interventions en site occupé ou partiellement en activité, avec des protocoles de sécurité adaptés (co-activité, zone ATEX, consignation des réseaux)." },
    { q: "Comment sont gérés les déchets industriels issus du démantèlement ?", a: "Chaque déchet est identifié, caractérisé et orienté vers une filière de traitement agréée. Nous fournissons la traçabilité complète via les Bordereaux de Suivi de Déchets (BSD)." },
  ],
  'terrassement-vrd': [
    { q: "Travaillez-vous sur des sites industriels contraignants ?", a: "Oui, nos équipes sont formées pour intervenir dans des environnements industriels complexes : zones classées, sols pollués, sites avec co-activité. Le matériel est adapté à chaque configuration." },
    { q: "Prenez-vous en charge l'étude géotechnique préalable ?", a: "Nous pouvons coordonner les études géotechniques avec des bureaux partenaires, ou intégrer les résultats de vos études existantes dans notre offre." },
    { q: "Réalisez-vous les raccordements aux réseaux existants ?", a: "Oui, nos équipes réalisent les tranchées, la pose et le raccordement de réseaux enterrés (gaz, eau industrielle, électricité, eaux pluviales) selon les normes en vigueur." },
  ],
  'transport-industriel': [
    { q: "Quels types d'équipements pouvez-vous transporter ?", a: "Nous transportons tout type d'équipements industriels lourds ou hors-gabarit : modules process, compresseurs, cuves, transformateurs, structures métalliques, convoyeurs, échangeurs." },
    { q: "Gérez-vous les convois exceptionnels et les autorisations ?", a: "Oui, ENERMYS coordonne l'ensemble des autorisations de transport exceptionnel (préfectures, DREAL, gestionnaires de voirie) et organise les escortes nécessaires." },
    { q: "Intervenez-vous à l'international ?", a: "Oui, nous organisons des transports internationaux avec coordination douanière, documents de transit et partenaires logistiques en Europe et au-delà." },
  ],
}

const genericFaq = [
  { q: "Intervenez-vous sur tout le territoire français ?", a: "Oui, ENERMYS intervient sur l'ensemble du territoire français et à l'international. Contactez-nous pour vérifier notre disponibilité pour votre projet." },
  { q: "Quelles sont vos certifications et assurances ?", a: "Nos équipes sont habilitées pour les travaux en milieux industriels (habilitations électriques, travaux en hauteur, espaces confinés selon les prestations). Nous disposons des assurances RC professionnelle adaptées." },
  { q: "Combien de temps faut-il pour obtenir un devis ?", a: "Nous répondons à toutes les demandes sous 24h. Le devis détaillé est remis dans les 5 jours ouvrés suivant notre analyse du site, sans frais ni engagement." },
]

export default function ServicePage({ params }: Props) {
  const service = services.find((s) => s.slug === params.slug)
  if (!service) notFound()

  const Icon = iconMap[service.icon] ?? Settings
  const faq = faqBySlug[params.slug] ?? genericFaq
  const relatedServices = services.filter((s) => s.slug !== params.slug).slice(0, 3)

  return (
    <>
      <section className="relative bg-white border-b border-black/10 pt-40 pb-14 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04] pointer-events-none" aria-hidden="true"
          style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")" }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav aria-label="Fil d'Ariane" className="mb-8">
            <ol className="flex items-center gap-2 text-black/40 text-sm font-body">
              <li><Link href="/" className="hover:text-black transition-colors">Accueil</Link></li>
              <li aria-hidden="true">/</li>
              <li><Link href="/services" className="hover:text-black transition-colors">Services</Link></li>
              <li aria-hidden="true">/</li>
              <li className="text-black/70 font-semibold" aria-current="page">{service.title}</li>
            </ol>
          </nav>
          <h1 className="font-heading font-black text-brand-orange text-5xl sm:text-6xl lg:text-8xl leading-none tracking-tight uppercase">
            {service.title}
          </h1>
          <p className="mt-6 font-body text-black/50 text-lg max-w-2xl leading-relaxed">{service.description}</p>
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <Button href="/projet" size="lg">
              Commencer un Projet
              <ArrowRight className="w-5 h-5" aria-hidden="true" />
            </Button>
            <a href="tel:+33652143921"
              className="flex items-center gap-2 text-black/60 font-heading font-semibold hover:text-black transition-colors duration-200">
              <Phone className="w-5 h-5" aria-hidden="true" />
              06 52 14 39 21
            </a>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2 space-y-12">
              <div>
                <SectionTitle eyebrow="Notre approche" title={`Notre expertise en ${service.title.toLowerCase()}`} align="left" />
                <div className="mt-8 space-y-5 text-slate-600 font-body leading-relaxed">
                  <p>Chez ENERMYS, chaque intervention en <strong className="text-brand-navy">{service.title.toLowerCase()}</strong> est conduite avec le même niveau d'exigence : protocoles de sécurité rigoureux, conformité réglementaire totale et suivi documenté à chaque étape.</p>
                  <p>Nos équipes spécialisées interviennent sur des sites industriels exigeants — zones ATEX, sites classés ICPE, co-activité — avec le matériel et les habilitations adaptés. Chaque projet fait l'objet d'une analyse préalable et d'un devis détaillé, remis gratuitement.</p>
                  <p>Nous accompagnons des acteurs majeurs de l'énergie, de la pétrochimie et de l'industrie depuis plus de 10 ans. Notre réactivité et notre rigueur font de nous un partenaire de confiance pour vos projets les plus complexes.</p>
                </div>
                <div className="mt-8">
                  <img
                    src={
                      params.slug === 'demantelement-gnc' ? '/ivry-compresseur.jpg' :
                      params.slug === 'terrassement-vrd' ? '/morsbach-fraisage.jpg' :
                      params.slug === 'transport-industriel' ? '/strasbourg-convoi.jpg' :
                      params.slug === 'remise-en-etat' ? '/morsbach-terrain.jpg' :
                      '/service-coordination.png'
                    }
                    alt={`Chantier ${service.title}`}
                    className="w-full rounded-xl object-cover aspect-video"
                  />
                </div>
              </div>

              <div>
                <h2 className="font-heading font-bold text-brand-navy text-2xl mb-6">Nos prestations</h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {service.features.map((f) => (
                    <div key={f} className="flex items-start gap-3 bg-white p-4 rounded-xl shadow-card border border-slate-100">
                      <CheckCircle2 className="w-5 h-5 text-brand-orange flex-shrink-0 mt-0.5" aria-hidden="true" />
                      <span className="font-body text-slate-700 text-sm leading-relaxed">{f}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="font-heading font-bold text-brand-navy text-2xl mb-6">Questions fréquentes</h2>
                <div className="space-y-4">
                  {faq.map((item) => (
                    <details key={item.q} className="group bg-white rounded-xl shadow-card border border-slate-100 overflow-hidden">
                      <summary className="flex items-center justify-between px-6 py-4 cursor-pointer font-heading font-semibold text-brand-navy hover:text-brand-orange transition-colors duration-200 list-none">
                        {item.q}
                        <ArrowRight className="w-4 h-4 flex-shrink-0 transition-transform duration-200 group-open:rotate-90" aria-hidden="true" />
                      </summary>
                      <div className="px-6 pb-5 text-slate-600 font-body text-sm leading-relaxed border-t border-slate-100 pt-4">
                        {item.a}
                      </div>
                    </details>
                  ))}
                </div>
              </div>
            </div>

            <aside className="space-y-6">
              <div className="bg-brand-cream rounded-2xl p-7 text-center shadow-card lg:sticky lg:top-28">
                <div className="w-12 h-12 rounded-xl bg-brand-orange/10 flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-6 h-6 text-brand-orange" aria-hidden="true" />
                </div>
                <h3 className="font-heading font-bold text-brand-navy text-lg mb-2">
                  Devis gratuit pour ce service
                </h3>
                <p className="text-slate-500 text-sm font-body mb-5">Réponse sous 24h, sans engagement.</p>
                <Button href="/projet" fullWidth size="lg">Commencer un Projet</Button>
                <a href="tel:+33652143921"
                  className="mt-3 flex items-center justify-center gap-2 text-slate-500 hover:text-brand-navy font-body text-sm transition-colors duration-200">
                  <Phone className="w-4 h-4" aria-hidden="true" />
                  06 52 14 39 21
                </a>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-card border border-slate-100">
                <h3 className="font-heading font-bold text-brand-navy text-sm uppercase tracking-wide mb-4">Nos engagements</h3>
                <ul className="space-y-3">
                  {['Conformité réglementaire totale', 'Équipes habilitées et formées', 'Reporting documenté complet', 'Délais contractuellement engagés'].map((c) => (
                    <li key={c} className="flex items-center gap-2.5 text-sm font-body text-slate-700">
                      <span className="w-5 h-5 rounded-full bg-orange-100 flex items-center justify-center flex-shrink-0">
                        <CheckCircle2 className="w-3 h-3 text-brand-orange" aria-hidden="true" />
                      </span>
                      {c}
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading font-bold text-brand-navy text-2xl mb-8">Nos autres services</h2>
          <div className="grid sm:grid-cols-3 gap-5">
            {relatedServices.map((s) => {
              const RelIcon = iconMap[s.icon] ?? Settings
              return (
                <Link key={s.slug} href={`/services/${s.slug}`}
                  className="group flex items-start gap-4 p-5 bg-brand-cream rounded-2xl hover:bg-brand-orange/5 border border-transparent hover:border-brand-orange/20 transition-all duration-200">
                  <div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center flex-shrink-0 shadow-sm group-hover:bg-brand-orange/10 transition-colors duration-200">
                    <RelIcon className="w-5 h-5 text-brand-navy group-hover:text-brand-orange transition-colors duration-200" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-brand-navy text-sm group-hover:text-brand-orange transition-colors duration-200">{s.title}</h3>
                    <p className="text-slate-500 text-xs font-body mt-1 line-clamp-2">{s.shortDesc}</p>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      <CTABanner
        title={`Votre projet de ${service.title.toLowerCase()} commence ici`}
        subtitle="Devis gratuit, réponse sous 24h. Faites confiance à ENERMYS pour vos projets industriels."
      />
    </>
  )
}
