import Link from 'next/link'
import {
  Settings, Mountain, Truck, RefreshCw, Users, ArrowRight,
} from 'lucide-react'
import { services } from '@/lib/data'
import { SectionTitle } from '@/components/ui/SectionTitle'

const iconMap: Record<string, React.ElementType> = {
  Settings, Mountain, Truck, RefreshCw, Users,
}

export function ServicesOverview() {
  return (
    <section className="bg-brand-cream py-24 lg:py-32" aria-labelledby="services-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header row */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
          <SectionTitle
            eyebrow="Nos expertises"
            title="Des solutions complètes pour vos projets industriels"
            align="left"
          />
          <p className="text-slate-500 font-body text-base leading-relaxed max-w-sm lg:text-right lg:pb-2">
            Démanteler, construire, transporter — ENERMYS maîtrise l&apos;ensemble des opérations industrielles pour un accompagnement complet de A à Z.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, index) => {
            const Icon = iconMap[service.icon] ?? Settings
            const isFeatured = index === 0
            return (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className={`group relative rounded-2xl p-7 transition-all duration-300 hover:-translate-y-1 flex flex-col overflow-hidden ${
                  isFeatured
                    ? 'bg-brand-orange border border-brand-orange hover:shadow-orange hover:brightness-105'
                    : 'bg-white border border-slate-150 hover:border-brand-orange/20 hover:shadow-card-hover'
                }`}
              >
                {/* Corner dot decorators */}
                <span className={`absolute top-3.5 left-3.5 w-1.5 h-1.5 rounded-full transition-colors duration-300 ${isFeatured ? 'bg-white/25' : 'bg-slate-200 group-hover:bg-brand-orange/50'}`} aria-hidden="true" />
                <span className={`absolute top-3.5 right-3.5 w-1.5 h-1.5 rounded-full transition-colors duration-300 ${isFeatured ? 'bg-white/25' : 'bg-slate-200 group-hover:bg-brand-orange/50'}`} aria-hidden="true" />
                <span className={`absolute bottom-3.5 left-3.5 w-1.5 h-1.5 rounded-full transition-colors duration-300 ${isFeatured ? 'bg-white/25' : 'bg-slate-200 group-hover:bg-brand-orange/50'}`} aria-hidden="true" />
                <span className={`absolute bottom-3.5 right-3.5 w-1.5 h-1.5 rounded-full transition-colors duration-300 ${isFeatured ? 'bg-white/25' : 'bg-slate-200 group-hover:bg-brand-orange/50'}`} aria-hidden="true" />

                {/* Featured badge */}
                {isFeatured && (
                  <span className="absolute top-4 right-10 text-[10px] font-heading font-black uppercase tracking-[0.2em] text-white/60">
                    Spécialité
                  </span>
                )}

                {/* Icon */}
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-colors duration-300 ${
                  isFeatured ? 'bg-white/15 group-hover:bg-white/25' : 'bg-brand-orange/8 group-hover:bg-brand-orange/15'
                }`}>
                  <Icon className={`w-6 h-6 ${isFeatured ? 'text-white' : 'text-brand-orange'}`} aria-hidden="true" />
                </div>

                {/* Content */}
                <h3 className={`font-heading font-black text-lg uppercase tracking-tight mb-2 ${isFeatured ? 'text-white' : 'text-brand-navy'}`}>
                  {service.title}
                </h3>
                <p className={`text-sm font-body leading-relaxed flex-1 mb-6 ${isFeatured ? 'text-white/75' : 'text-slate-500'}`}>
                  {service.shortDesc}
                </p>

                {/* CTA */}
                <div className={`flex items-center gap-2 font-heading font-bold text-sm group-hover:gap-3 transition-all duration-200 ${isFeatured ? 'text-white' : 'text-brand-orange'}`}>
                  <span>Découvrir</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true" />
                </div>
              </Link>
            )
          })}
        </div>

        {/* Bottom link */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-slate-200">
          <p className="text-slate-500 font-body text-sm text-center sm:text-left">
            Vous avez un projet spécifique ? Nous trouverons la meilleure solution technique.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 text-brand-navy font-heading font-bold text-sm hover:text-brand-orange transition-colors duration-200 group"
          >
            Contactez-nous
            <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  )
}
