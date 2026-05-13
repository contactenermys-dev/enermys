'use client'

import { useState, useEffect } from 'react'
import { Phone, ChevronRight, CheckCircle2 } from 'lucide-react'
import Link from 'next/link'

const animatedWords = ['DÉMANTÈLE,', 'CONSTRUIT,', 'TRANSPORTE,']

export function Hero() {
  const [index, setIndex] = useState(0)
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false)
      setTimeout(() => {
        setIndex((i) => (i + 1) % animatedWords.length)
        setVisible(true)
      }, 380)
    }, 2800)
    return () => clearInterval(interval)
  }, [])

  return (
    <section
      className="relative min-h-dvh flex flex-col justify-center overflow-hidden"
      style={{
        backgroundImage: "url('/hero-bg.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center top',
      }}
      aria-label="Présentation ENERMYS"
    >
      {/* Overlay directionnel */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(108deg, rgba(13,17,23,0.97) 0%, rgba(13,17,23,0.93) 38%, rgba(13,17,23,0.62) 60%, rgba(13,17,23,0.12) 100%)',
        }}
        aria-hidden="true"
      />

      {/* Contenu */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-28 pb-16">

        {/* Eyebrow */}
        <div className="flex items-center gap-3 mb-7">
          <span className="w-6 h-px rounded-full bg-brand-orange" aria-hidden="true" />
          <span className="text-brand-orange text-[11px] font-heading font-bold uppercase tracking-[0.28em]">
            Spécialiste Oil &amp; Gas &nbsp;·&nbsp; Intervention nationale
          </span>
        </div>

        {/* Heading */}
        <h1 className="font-heading font-black uppercase leading-[0.92] tracking-tight mb-8">
          <span className="block text-white text-5xl sm:text-6xl lg:text-7xl xl:text-[5.25rem]">
            Chez <span className="text-brand-orange">ENERMYS</span> on
          </span>

          <span
            className="block text-brand-orange text-5xl sm:text-6xl lg:text-7xl xl:text-[5.25rem]"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? 'translateY(0px)' : 'translateY(-10px)',
              transition: 'opacity 0.38s ease, transform 0.38s ease',
            }}
            aria-live="polite"
            aria-label={animatedWords[index]}
          >
            {animatedWords[index]}
          </span>
        </h1>

        {/* Description */}
        <p className="text-white/70 text-base sm:text-lg font-body leading-relaxed mb-7 max-w-lg">
          Un savoir-faire technique, un travail rigoureux et un accompagnement personnalisé de A à Z pour tous vos projets Oil &amp; Gas, de démantèlement et de transport d'équipements.
        </p>

        {/* Trust pills */}
        <div className="flex flex-wrap gap-2.5 mb-9">
          {['Devis gratuit', 'Conformité réglementaire', 'Intervention nationale'].map((item) => (
            <span
              key={item}
              className="flex items-center gap-1.5 border border-white/20 text-white/75 text-sm px-3.5 py-1.5 rounded-full font-body backdrop-blur-sm"
            >
              <CheckCircle2 className="w-3.5 h-3.5 text-brand-orange flex-shrink-0" aria-hidden="true" />
              {item}
            </span>
          ))}
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 mb-10">
          <Link
            href="/projet"
            className="inline-flex items-center gap-2 bg-brand-orange text-white font-heading font-black text-base px-7 py-4 rounded-full hover:bg-brand-orange-bright shadow-orange hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200"
          >
            Devis Gratuit
            <ChevronRight className="w-5 h-5" aria-hidden="true" />
          </Link>

          <a
            href="tel:+33652143921"
            className="flex items-center gap-3 group"
            aria-label="Appeler ENERMYS au 06 52 14 39 21"
          >
            <div className="w-11 h-11 rounded-full bg-brand-orange flex items-center justify-center flex-shrink-0 group-hover:bg-brand-orange-bright transition-colors duration-200 shadow-orange">
              <Phone className="w-4 h-4 text-white" aria-hidden="true" />
            </div>
            <div>
              <div className="text-white font-heading font-bold text-base group-hover:text-brand-orange transition-colors duration-200">
                06 52 14 39 21
              </div>
              <div className="text-white/45 text-xs font-body">Lun - Ven 8h–18h · Appel direct</div>
            </div>
          </a>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-8">
          {['Démantèlement', 'Terrassement & VRD', 'Transport industriel', 'Stations GNC'].map((tag) => (
            <span
              key={tag}
              className="text-white/35 text-[10px] font-heading font-bold uppercase tracking-[0.18em] border border-white/10 px-3 py-1 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Partenaire note + lien secondaire */}
        <div className="flex flex-col gap-3">
          <div className="flex flex-wrap gap-4">
            {['Partenaire de grands comptes énergétiques', 'Tout types de travaux possible !'].map((note) => (
              <span key={note} className="text-white/30 text-xs font-body italic">
                · {note}
              </span>
            ))}
          </div>
          <Link
            href="/realisations"
            className="inline-flex items-center gap-2.5 text-white/45 hover:text-white/75 text-[11px] font-heading font-bold uppercase tracking-[0.22em] transition-colors duration-200 group"
          >
            <span className="w-6 h-px bg-current" aria-hidden="true" />
            Nos réalisations
          </Link>
        </div>
      </div>
    </section>
  )
}
