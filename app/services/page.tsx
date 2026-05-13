import type { Metadata } from 'next'
import Link from 'next/link'
import {
  Settings, Mountain, Truck, RefreshCw, Users, ArrowRight, CheckCircle2,
} from 'lucide-react'
import { services } from '@/lib/data'
import { SectionTitle } from '@/components/ui/SectionTitle'
import { CTABanner } from '@/components/sections/CTABanner'

export const metadata: Metadata = {
  title: 'Nos Services — Démantèlement, Terrassement & Transport Industriel',
  description:
    'Découvrez tous les services ENERMYS : démantèlement de stations GNC, terrassement VRD, transport d\'équipements industriels, remise en état de site. Devis gratuit.',
  alternates: { canonical: 'https://www.enermys.fr/services' },
}

const iconMap: Record<string, React.ElementType> = {
  Settings, Mountain, Truck, RefreshCw, Users,
}

export default function ServicesPage() {
  return (
    <>
      <section className="relative bg-white border-b border-black/10 pt-40 pb-14 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04] pointer-events-none" aria-hidden="true"
          style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")" }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-heading font-black text-brand-orange text-5xl sm:text-6xl lg:text-8xl leading-none tracking-tight uppercase">
            Nos<br />Services
          </h1>
        </div>
      </section>

      <section className="bg-brand-cream py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="sr-only">Liste de nos services</h2>
          <div className="space-y-8">
            {services.map((service, i) => {
              const Icon = iconMap[service.icon] ?? Settings
              return (
                <article key={service.slug} className="bg-white rounded-2xl shadow-card hover:shadow-card-hover border border-slate-100 overflow-hidden transition-all duration-300">
                  <div className="grid lg:grid-cols-2 gap-0">
                    <div className="p-8 lg:p-10 flex flex-col justify-center">
                      <div className="flex items-center gap-4 mb-5">
                        <div className="w-14 h-14 rounded-xl bg-brand-orange/10 flex items-center justify-center flex-shrink-0">
                          <Icon className="w-7 h-7 text-brand-orange" aria-hidden="true" />
                        </div>
                        <div>
                          <span className="text-xs font-heading font-semibold text-brand-orange uppercase tracking-widest">
                            Service {String(i + 1).padStart(2, '0')}
                          </span>
                          <h2 className="font-heading font-bold text-brand-navy text-2xl sm:text-3xl leading-tight">
                            {service.title}
                          </h2>
                        </div>
                      </div>
                      <p className="font-body text-slate-600 leading-relaxed mb-6">{service.description}</p>
                      <Link href={`/services/${service.slug}`}
                        className="inline-flex items-center gap-2 text-brand-orange font-heading font-semibold hover:gap-4 transition-all duration-200 group">
                        En savoir plus
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" aria-hidden="true" />
                      </Link>
                    </div>
                    <div className="bg-brand-stone p-8 lg:p-10">
                      <h3 className="font-heading font-bold text-brand-navy text-sm uppercase tracking-wide mb-4">
                        Nos prestations incluent :
                      </h3>
                      <ul className="space-y-3" role="list">
                        {service.features.map((feature) => (
                          <li key={feature} className="flex items-start gap-3">
                            <CheckCircle2 className="w-5 h-5 text-brand-orange flex-shrink-0 mt-0.5" aria-hidden="true" />
                            <span className="font-body text-slate-700 text-sm leading-relaxed">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="mt-6 pt-6 border-t border-slate-200">
                        <Link href="/projet"
                          className="inline-flex items-center gap-2 bg-brand-navy text-white px-5 py-2.5 rounded-lg font-heading font-semibold text-sm hover:bg-brand-navy-dark transition-colors duration-200">
                          Commencer un projet pour ce service
                        </Link>
                      </div>
                    </div>
                  </div>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      <CTABanner
        title="Un projet industriel en tête ?"
        subtitle="Contactez-nous pour une analyse gratuite de vos contraintes et un devis personnalisé."
      />
    </>
  )
}
