'use client'

import { useState, useEffect } from 'react'
import { Phone, FileText, HardHat, CheckCircle2 } from 'lucide-react'
import { processSteps } from '@/lib/data'
import { SectionTitle } from '@/components/ui/SectionTitle'

const iconMap: Record<string, React.ElementType> = {
  Phone, FileText, HardHat, CheckCircle2,
}

const STEP_DURATION = 4000

export function Process() {
  const [active, setActive] = useState(0)
  const total = processSteps.length

  useEffect(() => {
    const t = setTimeout(() => {
      setActive((a) => (a + 1) % total)
    }, STEP_DURATION)
    return () => clearTimeout(t)
  }, [active, total])

  const step = processSteps[active]
  const Icon = iconMap[step.icon] ?? CheckCircle2

  return (
    <section className="bg-white py-24 lg:py-32" aria-labelledby="process-heading">
      {/* Inline keyframes */}
      <style>{`
        @keyframes stepFadeIn {
          from { opacity: 0; transform: translateY(12px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes progressFill {
          from { width: 0%; }
          to   { width: 100%; }
        }
        @keyframes softPing {
          0%, 100% { transform: scale(1);   opacity: .25; }
          50%       { transform: scale(1.6); opacity: 0;   }
        }
      `}</style>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="mb-16">
          <SectionTitle
            eyebrow="Comment ça marche"
            title="De votre idée à la livraison"
            subtitle="Un processus simple, transparent et éprouvé. Votre projet entre de bonnes mains dès le premier contact."
            align="center"
          />
        </div>

        {/* Stepper */}
        <div className="relative mb-10">
          {/* Track */}
          <div
            className="absolute top-8 h-px bg-slate-100"
            style={{ left: '12.5%', right: '12.5%' }}
            aria-hidden="true"
          />
          {/* Fill */}
          <div
            className="absolute top-8 h-px bg-brand-orange"
            style={{
              left: '12.5%',
              width: `${(active / (total - 1)) * 75}%`,
              transition: active === 0 ? 'none' : 'width 0.6s cubic-bezier(0.4,0,0.2,1)',
            }}
            aria-hidden="true"
          />

          {/* Circles */}
          <div className="grid grid-cols-4">
            {processSteps.map((s, i) => (
              <button
                key={s.number}
                onClick={() => setActive(i)}
                className="flex flex-col items-center gap-3 focus:outline-none"
                aria-label={`Étape ${s.number} : ${s.title}`}
                aria-current={i === active ? 'step' : undefined}
              >
                <div className={`relative w-16 h-16 rounded-full flex items-center justify-center font-heading font-black text-lg border-2 transition-all duration-500 ${
                  i < active
                    ? 'bg-brand-orange border-brand-orange text-white'
                    : i === active
                    ? 'bg-brand-orange border-brand-orange text-white scale-110 shadow-orange'
                    : 'bg-white border-slate-200 text-slate-400'
                }`}>
                  {i < active
                    ? <CheckCircle2 className="w-6 h-6" aria-hidden="true" />
                    : s.number
                  }
                  {i === active && (
                    <span
                      className="absolute inset-0 rounded-full bg-brand-orange/30"
                      style={{ animation: 'softPing 2s ease-in-out infinite' }}
                      aria-hidden="true"
                    />
                  )}
                </div>
                <span className={`text-[11px] font-heading font-bold uppercase tracking-wide text-center leading-tight hidden sm:block transition-colors duration-300 max-w-[90px] ${
                  i === active ? 'text-brand-navy' : i < active ? 'text-brand-orange/70' : 'text-slate-300'
                }`}>
                  {s.title}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Content card */}
        <div className="relative bg-slate-50 border border-slate-100 rounded-2xl overflow-hidden">
          {/* Progress bar */}
          <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-slate-100" aria-hidden="true" />
          <div
            key={active}
            className="absolute bottom-0 left-0 h-0.5 bg-brand-orange"
            style={{ animation: `progressFill ${STEP_DURATION}ms linear forwards` }}
            aria-hidden="true"
          />

          {/* Card content */}
          <div
            key={`content-${active}`}
            className="flex flex-col sm:flex-row items-start gap-6 p-8 lg:p-10"
            style={{ animation: 'stepFadeIn 0.4s ease forwards' }}
          >
            <div className="w-14 h-14 rounded-xl bg-brand-orange flex items-center justify-center flex-shrink-0 shadow-orange">
              <Icon className="w-7 h-7 text-white" aria-hidden="true" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-[10px] font-heading font-bold uppercase tracking-[0.25em] text-brand-orange mb-2">
                Étape {step.number} sur {total}
              </div>
              <h3 className="font-heading font-black text-brand-navy text-2xl sm:text-3xl uppercase tracking-tight mb-3">
                {step.title}
              </h3>
              <p className="font-body text-slate-500 text-base leading-relaxed">
                {step.description}
              </p>
            </div>
          </div>

          {/* Dot nav */}
          <div className="flex gap-2 px-8 pb-6 lg:px-10">
            {processSteps.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`rounded-full transition-all duration-300 focus:outline-none ${
                  i === active
                    ? 'w-6 h-2 bg-brand-orange'
                    : 'w-2 h-2 bg-slate-300 hover:bg-brand-orange/40'
                }`}
                aria-label={`Aller à l'étape ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
