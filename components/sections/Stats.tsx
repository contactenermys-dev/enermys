'use client'

import { useEffect, useRef, useState } from 'react'
import { stats } from '@/lib/data'

function Counter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0)
  const [started, setStarted] = useState(false)
  const ref = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting && !started) setStarted(true) },
      { threshold: 0.5 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [started])

  useEffect(() => {
    if (!started) return
    const duration = 1800
    const steps = 60
    const increment = target / steps
    let current = 0
    const timer = setInterval(() => {
      current += increment
      if (current >= target) { setCount(target); clearInterval(timer) }
      else setCount(Math.floor(current))
    }, duration / steps)
    return () => clearInterval(timer)
  }, [started, target])

  return (
    <span ref={ref} aria-label={`${target}${suffix}`}>
      {count}{suffix}
    </span>
  )
}

export function Stats() {
  return (
    <section className="bg-white border-y border-slate-100" aria-label="Chiffres clés Bonnivert">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-slate-100">
          {stats.map((stat) => (
            <div key={stat.label} className="relative px-6 py-10 text-center group">
              {/* Top accent line on hover */}
              <div className="absolute top-0 left-6 right-6 h-0.5 bg-brand-orange scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-full" aria-hidden="true" />

              <div className="font-heading font-black text-5xl sm:text-6xl text-brand-orange tabular-nums mb-2 leading-none">
                <Counter target={stat.value} suffix={stat.suffix} />
              </div>
              <div className="font-heading font-bold text-brand-navy text-sm sm:text-base uppercase tracking-wide mb-1">
                {stat.label}
              </div>
              <p className="text-slate-400 text-xs sm:text-sm font-body leading-snug hidden sm:block max-w-[160px] mx-auto">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
