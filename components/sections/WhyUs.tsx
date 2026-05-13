'use client'

import { useState } from 'react'
import { Shield, MapPin, Users, Clock, Banknote, Wrench, FileCheck, Zap, Building, BarChart2 } from 'lucide-react'
import { SectionTitle } from '@/components/ui/SectionTitle'

const tabs = [
  {
    id: 'industriels',
    label: 'Industriels',
    advantages: [
      { icon: Shield, title: 'Conformité réglementaire', description: "Interventions conformes aux réglementations ICPE, ATEX et normes pétrolières. Nous gérons les autorisations et la documentation réglementaire." },
      { icon: Wrench, title: 'Équipes spécialisées', description: 'Intervenants formés aux métiers du démantèlement industriel, du transport lourd et du terrassement en milieu contraignant.' },
      { icon: Users, title: 'Suivi dédié', description: 'Un chef de projet unique coordonne toutes les étapes du chantier. Vous disposez d\'un interlocuteur disponible et réactif.' },
      { icon: Clock, title: 'Délais maîtrisés', description: 'Planification rigoureuse et communication proactive en cas d\'aléas. 98% de nos chantiers sont livrés dans les temps annoncés.' },
      { icon: Banknote, title: 'Devis transparent', description: 'Détail poste par poste, prix fermes et sans mauvaises surprises. Notre offre est établie après analyse complète de vos contraintes.' },
      { icon: MapPin, title: 'Intervention nationale', description: "Mobilisation sur l'ensemble du territoire français et à l'international. Nos équipes se déplacent sur vos sites, partout." },
    ],
  },
  {
    id: 'grands-comptes',
    label: 'Grands comptes',
    advantages: [
      { icon: Building, title: 'Partenaire de référence', description: 'Expérience confirmée aux côtés de grands groupes énergétiques (ENGIE, TotalEnergies…). Nous connaissons vos exigences.' },
      { icon: FileCheck, title: 'Conformité totale', description: 'Respect strict des cahiers des charges, exigences HSE et référentiels réglementaires propres aux grands comptes.' },
      { icon: BarChart2, title: 'Reporting complet', description: 'Reporting documenté et traçabilité complète de chaque intervention. Tous vos indicateurs de performance à portée de main.' },
      { icon: Zap, title: 'Réactivité prouvée', description: 'Capacité de mobilisation rapide pour les projets urgents ou complexes. Disponibilité et agilité organisationnelle garanties.' },
      { icon: MapPin, title: 'Multi-sites', description: 'Gestion simultanée de plusieurs chantiers sur le territoire national. Coordination centralisée avec un pilote de compte dédié.' },
      { icon: FileCheck, title: 'Dossier clé en main', description: 'Fourniture de tous les documents administratifs : BSD, plans de récolement, certificats, PV de réception.' },
    ],
  },
]

export function WhyUs() {
  const [activeTab, setActiveTab] = useState('industriels')
  const current = tabs.find((t) => t.id === activeTab) ?? tabs[0]

  return (
    <section className="bg-white py-24 lg:py-32" aria-labelledby="whyus-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* Left: image + badges */}
          <div className="relative order-2 lg:order-1 lg:sticky lg:top-32">
            <img
              src="/whyus-chantier.jpg"
              alt="Équipe ENERMYS sur chantier industriel"
              className="rounded-2xl shadow-card w-full object-cover aspect-[4/3]"
            />
            <div className="absolute -bottom-5 -right-3 sm:-right-5 bg-brand-orange text-white px-5 py-4 rounded-2xl shadow-orange">
              <div className="font-heading font-black text-4xl leading-none">10</div>
              <div className="font-heading font-semibold text-xs leading-tight text-white/80 mt-0.5 uppercase tracking-wide">
                ans<br/>d&apos;exp.
              </div>
            </div>
            <div className="absolute -top-4 -left-3 sm:-left-5 bg-white border border-slate-100 px-5 py-3.5 rounded-2xl shadow-card">
              <div className="font-heading font-black text-3xl text-brand-navy leading-none">50+</div>
              <div className="font-body text-xs text-slate-400 mt-0.5 uppercase tracking-wide">projets réalisés</div>
            </div>
          </div>

          {/* Right: tabs + advantages */}
          <div className="order-1 lg:order-2">
            <SectionTitle
              eyebrow="Pourquoi nous choisir"
              title="Un partenaire industriel de confiance"
              subtitle="ENERMYS, c'est l'assurance d'une intervention rigoureuse, conforme et livrée dans les délais, par une équipe qui connaît vos enjeux."
              align="left"
            />

            {/* Tabs */}
            <div
              className="mt-10 mb-8 inline-flex items-center bg-slate-100 rounded-full p-1"
              role="tablist"
              aria-label="Type de client"
            >
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  role="tab"
                  aria-selected={activeTab === tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-5 py-2 rounded-full text-sm font-heading font-bold transition-all duration-200 ${
                    activeTab === tab.id
                      ? 'bg-brand-orange text-white shadow-sm'
                      : 'text-slate-500 hover:text-slate-700'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Advantage cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4" role="tabpanel">
              {current.advantages.map((adv) => {
                const Icon = adv.icon
                return (
                  <div
                    key={adv.title}
                    className="relative group bg-slate-50 border border-slate-100 rounded-xl p-5 hover:border-brand-orange/20 hover:bg-white hover:shadow-card transition-all duration-200 overflow-hidden"
                  >
                    <span className="absolute top-2.5 right-2.5 w-1.5 h-1.5 rounded-full bg-slate-200 group-hover:bg-brand-orange/40 transition-colors" aria-hidden="true" />
                    <span className="absolute bottom-2.5 left-2.5 w-1.5 h-1.5 rounded-full bg-slate-200 group-hover:bg-brand-orange/40 transition-colors" aria-hidden="true" />

                    <div className="w-9 h-9 rounded-lg bg-brand-orange/10 flex items-center justify-center mb-3 group-hover:bg-brand-orange/20 transition-colors">
                      <Icon className="w-5 h-5 text-brand-orange" aria-hidden="true" />
                    </div>
                    <h3 className="font-heading font-black text-brand-navy text-sm uppercase tracking-tight mb-1.5">
                      {adv.title}
                    </h3>
                    <p className="font-body text-slate-500 text-xs leading-relaxed">
                      {adv.description}
                    </p>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
