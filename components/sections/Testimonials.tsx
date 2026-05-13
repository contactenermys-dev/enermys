'use client'

import { useState } from 'react'
import { Star, ChevronLeft, ChevronRight } from 'lucide-react'
import { testimonials } from '@/lib/data'
import { SectionTitle } from '@/components/ui/SectionTitle'

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5" aria-label={`Note : ${rating} sur 5`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`w-3.5 h-3.5 ${i < rating ? 'fill-brand-orange text-brand-orange' : 'text-slate-200 fill-slate-200'}`}
          aria-hidden="true"
        />
      ))}
    </div>
  )
}

function TestimonialCard({ t }: { t: typeof testimonials[0] }) {
  return (
    <article className="relative group bg-white border border-slate-100 rounded-2xl p-7 hover:border-brand-orange/20 hover:shadow-card transition-all duration-300 overflow-hidden flex flex-col h-full">
      {/* Corner dots */}
      <span className="absolute top-3.5 left-3.5 w-1.5 h-1.5 rounded-full bg-slate-150 group-hover:bg-brand-orange/40 transition-colors" aria-hidden="true" />
      <span className="absolute top-3.5 right-3.5 w-1.5 h-1.5 rounded-full bg-slate-150 group-hover:bg-brand-orange/40 transition-colors" aria-hidden="true" />
      <span className="absolute bottom-3.5 left-3.5 w-1.5 h-1.5 rounded-full bg-slate-150 group-hover:bg-brand-orange/40 transition-colors" aria-hidden="true" />
      <span className="absolute bottom-3.5 right-3.5 w-1.5 h-1.5 rounded-full bg-slate-150 group-hover:bg-brand-orange/40 transition-colors" aria-hidden="true" />

      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <StarRating rating={t.rating} />
        <span className="text-xs font-heading font-bold text-brand-orange bg-brand-orange/8 px-2.5 py-1 rounded-full uppercase tracking-wide">
          {t.service}
        </span>
      </div>

      {/* Comment */}
      <p className="font-body text-slate-600 text-sm leading-relaxed flex-1 mb-6 italic">
        "{t.comment}"
      </p>

      {/* Author */}
      <footer className="flex items-center gap-3 border-t border-slate-100 pt-5">
        <div className="w-9 h-9 rounded-full bg-brand-navy flex items-center justify-center flex-shrink-0">
          <span className="font-heading font-black text-white text-sm">{t.name.charAt(0)}</span>
        </div>
        <div>
          <div className="font-heading font-bold text-brand-navy text-sm">{t.name}</div>
          <div className="font-body text-slate-400 text-xs">{t.city} · {t.date}</div>
        </div>
      </footer>
    </article>
  )
}

export function Testimonials() {
  const [active, setActive] = useState(0)
  const total = testimonials.length

  const prev = () => setActive((a) => (a - 1 + total) % total)
  const next = () => setActive((a) => (a + 1) % total)

  return (
    <section className="bg-brand-cream py-24 lg:py-32" aria-labelledby="testimonials-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header row */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
          <SectionTitle
            eyebrow="Ils nous font confiance"
            title="Ce que disent nos clients"
            align="left"
          />
          <div className="flex items-center gap-6">
            {/* Rating summary */}
            <div className="text-center">
              <div className="font-heading font-black text-4xl text-brand-navy">4,9</div>
              <div className="flex justify-center mt-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-brand-orange text-brand-orange" aria-hidden="true" />
                ))}
              </div>
              <div className="text-slate-400 text-xs font-body mt-1">500+ avis</div>
            </div>
            {/* Nav arrows */}
            <div className="flex gap-2">
              <button
                onClick={prev}
                className="w-10 h-10 rounded-full border border-slate-200 bg-white flex items-center justify-center hover:bg-brand-navy hover:text-white hover:border-brand-navy transition-all duration-200"
                aria-label="Témoignage précédent"
              >
                <ChevronLeft className="w-4 h-4" aria-hidden="true" />
              </button>
              <button
                onClick={next}
                className="w-10 h-10 rounded-full border border-slate-200 bg-white flex items-center justify-center hover:bg-brand-navy hover:text-white hover:border-brand-navy transition-all duration-200"
                aria-label="Témoignage suivant"
              >
                <ChevronRight className="w-4 h-4" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>

        {/* Desktop: 3-column */}
        <div className="hidden lg:grid grid-cols-3 gap-5">
          {testimonials.slice(0, 3).map((t) => (
            <TestimonialCard key={t.name} t={t} />
          ))}
        </div>

        {/* Tablet: 2-column */}
        <div className="hidden sm:grid lg:hidden grid-cols-2 gap-5 mb-8">
          {testimonials.slice(active % 2, active % 2 + 2).map((t) => (
            <TestimonialCard key={t.name} t={t} />
          ))}
        </div>

        {/* Mobile: single */}
        <div className="sm:hidden mb-8">
          <TestimonialCard t={testimonials[active]} />
        </div>

        {/* Dots — mobile only */}
        <div className="flex justify-center gap-2 mt-8 lg:hidden" role="tablist">
          {testimonials.map((_, i) => (
            <button
              key={i}
              role="tab"
              aria-selected={i === active}
              aria-label={`Témoignage ${i + 1}`}
              onClick={() => setActive(i)}
              className={`h-1.5 rounded-full transition-all duration-200 ${
                i === active ? 'w-6 bg-brand-orange' : 'w-1.5 bg-slate-300'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
