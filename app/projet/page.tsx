import type { Metadata } from 'next'
import { CheckCircle2, Clock, Phone, Star } from 'lucide-react'
import { DevisForm } from '@/components/forms/DevisForm'

export const metadata: Metadata = {
  title: 'Demander un devis gratuit — Devis Gratuit | ENERMYS',
  description:
    'Démarrez votre projet industriel avec ENERMYS. Démantèlement GNC, terrassement VRD, transport d\'équipements. Devis gratuit, réponse sous 24h.',
  alternates: { canonical: 'https://www.enermys.fr/projet' },
}

const guarantees = [
  { icon: CheckCircle2, text: 'Devis 100% gratuit' },
  { icon: Clock,        text: 'Réponse sous 24h'  },
  { icon: Star,         text: '50+ projets réalisés' },
  { icon: CheckCircle2, text: 'Sans engagement'    },
]

const whyUs = [
  'Expertise Oil & Gas depuis 10 ans',
  'Conformité réglementaire ICPE garantie',
  'Devis détaillé et transparent',
  'Prix fermes, pas de surprise',
  '98% des chantiers livrés à temps',
  'Chef de projet dédié du début à la fin',
]

const servicesList = [
  'Démantèlement de stations GNC',
  'Terrassement & VRD',
  "Transport d'équipements industriels",
  'Remise en état de site',
  'Accompagnement & Coordination',
]

const PATTERN = "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")"

export default function ProjetPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-white border-b border-black/10 pt-40 pb-14 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04] pointer-events-none" aria-hidden="true"
          style={{ backgroundImage: PATTERN }} />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-heading font-black text-brand-orange text-5xl sm:text-6xl lg:text-8xl leading-none tracking-tight uppercase">
            Commencer<br />Mon Projet
          </h1>
          <p className="mt-6 font-body text-black/50 text-lg max-w-xl leading-relaxed">
            Décrivez votre projet en 3 étapes. Nous vous recontactons sous 24h pour analyser vos contraintes et vous proposer la meilleure approche.
          </p>
          <div className="flex flex-wrap gap-3 mt-8">
            {guarantees.map(({ icon: Icon, text }) => (
              <span key={text} className="flex items-center gap-2 border border-black/10 text-black/60 text-sm px-4 py-2 rounded-full font-body">
                <Icon className="w-3.5 h-3.5 text-brand-orange" aria-hidden="true" />
                {text}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Main */}
      <section className="bg-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">

            {/* Sidebar */}
            <aside className="space-y-5 order-2 lg:order-1">
              <div className="bg-brand-cream rounded-2xl p-6">
                <h2 className="font-heading font-bold text-brand-navy text-xs uppercase tracking-widest mb-5">
                  Pourquoi ENERMYS ?
                </h2>
                <ul className="space-y-3">
                  {whyUs.map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-brand-orange flex-shrink-0 mt-0.5" aria-hidden="true" />
                      <span className="font-body text-slate-600 text-sm leading-snug">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-brand-cream rounded-2xl p-6">
                <h2 className="font-heading font-bold text-brand-navy text-xs uppercase tracking-widest mb-5">
                  Nos services
                </h2>
                <ul className="space-y-2">
                  {servicesList.map((s) => (
                    <li key={s} className="flex items-center gap-2.5 text-slate-600 text-sm font-body">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-orange flex-shrink-0" aria-hidden="true" />
                      {s}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-brand-cream rounded-2xl p-6 text-center">
                <p className="font-body text-slate-500 text-sm mb-3">
                  Vous préférez nous appeler ?
                </p>
                <a href="tel:+33652143921"
                  className="flex items-center justify-center gap-2 text-brand-navy font-heading font-bold text-lg hover:text-brand-orange transition-colors duration-200">
                  <Phone className="w-5 h-5" aria-hidden="true" />
                  06 52 14 39 21
                </a>
                <p className="font-body text-slate-400 text-xs mt-1">Lun–Ven 8h–18h · Urgences disponibles</p>
              </div>
            </aside>

            {/* Form */}
            <div className="lg:col-span-2 bg-brand-cream rounded-2xl p-8 sm:p-10 order-1 lg:order-2">
              <div className="mb-8">
                <h2 className="font-heading font-black text-brand-navy text-2xl sm:text-3xl mb-2">
                  Décrivez votre projet
                </h2>
                <p className="font-body text-slate-500 text-sm">
                  Complétez les 3 étapes ci-dessous. Moins de 3 minutes.
                </p>
              </div>
              <DevisForm />
            </div>

          </div>
        </div>
      </section>
    </>
  )
}
