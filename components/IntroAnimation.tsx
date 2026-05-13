'use client'

import { useEffect, useState } from 'react'

export function IntroAnimation() {
  const [phase, setPhase] = useState<'hidden' | 'visible' | 'exiting' | 'done'>('hidden')

  useEffect(() => {
    setPhase('visible')
    const t1 = setTimeout(() => setPhase('exiting'), 3600)
    const t2 = setTimeout(() => setPhase('done'), 4500)
    return () => { clearTimeout(t1); clearTimeout(t2) }
  }, [])

  if (phase === 'hidden' || phase === 'done') return null

  return (
    <>
      <style>{`
        @keyframes flameRise {
          0%   { transform: scaleY(0) translateY(20px); opacity: 0; }
          60%  { transform: scaleY(1.1) translateY(-4px); opacity: 1; }
          100% { transform: scaleY(1) translateY(0); opacity: 1; }
        }
        @keyframes flamePulse {
          0%, 100% { transform: scaleY(1) scaleX(1); }
          50%       { transform: scaleY(1.06) scaleX(0.97); }
        }
        @keyframes slideText {
          from { opacity: 0; transform: translateX(24px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(8px); }
          to   { opacity: 0.45; transform: translateY(0); }
        }
        @keyframes progress {
          from { width: 0%; }
          to   { width: 100%; }
        }
        @keyframes gridIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        @keyframes curtainUp {
          from { clip-path: inset(0 0 0 0); }
          to   { clip-path: inset(0 0 100% 0); }
        }
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50%       { opacity: 0; }
        }

        .intro-flame-1 {
          transform-origin: bottom center;
          animation: flameRise 0.9s cubic-bezier(0.4, 0, 0.2, 1) 0.3s both,
                     flamePulse 2s ease-in-out 1.2s infinite;
        }
        .intro-flame-2 {
          transform-origin: bottom center;
          animation: flameRise 0.9s cubic-bezier(0.4, 0, 0.2, 1) 0.55s both,
                     flamePulse 2.3s ease-in-out 1.4s infinite;
        }
        .intro-text {
          opacity: 0;
          animation: slideText 0.7s ease 1.6s forwards;
        }
        .intro-tagline {
          opacity: 0;
          animation: fadeUp 0.6s ease 2.2s forwards;
        }
        .intro-progress-bar {
          animation: progress 3s cubic-bezier(0.4, 0, 0.2, 1) 0.3s forwards;
        }
        .intro-grid {
          animation: gridIn 0.8s ease 0.1s forwards;
          opacity: 0;
        }
        .intro-cursor {
          animation: blink 1s step-end infinite;
        }
        .intro-curtain {
          animation: curtainUp 0.9s cubic-bezier(0.76, 0, 0.24, 1) forwards;
        }
      `}</style>

      <div
        className={`fixed inset-0 z-[9999] bg-[#0D1117] flex flex-col items-center justify-center overflow-hidden ${phase === 'exiting' ? 'intro-curtain' : ''}`}
        aria-hidden="true"
      >
        {/* Grid background */}
        <div
          className="absolute inset-0 intro-grid pointer-events-none"
          style={{
            backgroundImage: `
              linear-gradient(rgba(234,88,12,0.06) 1px, transparent 1px),
              linear-gradient(90deg, rgba(234,88,12,0.06) 1px, transparent 1px)
            `,
            backgroundSize: '48px 48px',
          }}
        />

        {/* Corner marks */}
        {[
          'top-8 left-8',
          'top-8 right-8 rotate-90',
          'bottom-8 left-8 -rotate-90',
          'bottom-8 right-8 rotate-180',
        ].map((pos, i) => (
          <svg key={i} className={`absolute ${pos} opacity-20`} width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M0 10 L0 0 L10 0" stroke="#EA580C" strokeWidth="1.5" />
          </svg>
        ))}

        {/* Main content */}
        <div className="relative flex flex-col items-center gap-8">

          {/* Flame logo mark */}
          <div className="flex items-end gap-3" style={{ height: 80 }}>
            {/* Flame 1 — main */}
            <svg className="intro-flame-1" width="38" height="72" viewBox="0 0 38 72" fill="none">
              <path
                d="M19 2C19 2 6 18 6 35C6 49.5 11.5 58 19 58C26.5 58 32 49.5 32 35C32 18 19 2 19 2Z"
                fill="url(#flame1a)"
              />
              <path
                d="M19 30C19 30 13 38 13 44C13 50 15.5 54 19 54C22.5 54 25 50 25 44C25 38 19 30 19 30Z"
                fill="url(#flame1b)"
              />
              <defs>
                <linearGradient id="flame1a" x1="19" y1="2" x2="19" y2="58" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stopColor="#F97316" />
                  <stop offset="100%" stopColor="#EA580C" />
                </linearGradient>
                <linearGradient id="flame1b" x1="19" y1="30" x2="19" y2="54" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stopColor="#FED7AA" stopOpacity="0.9" />
                  <stop offset="100%" stopColor="#FDBA74" stopOpacity="0.7" />
                </linearGradient>
              </defs>
            </svg>

            {/* Flame 2 — smaller, offset */}
            <svg className="intro-flame-2" width="28" height="56" viewBox="0 0 28 56" style={{ marginBottom: 8 }} fill="none">
              <path
                d="M14 2C14 2 4 14 4 27C4 38 8.5 45 14 45C19.5 45 24 38 24 27C24 14 14 2 14 2Z"
                fill="url(#flame2a)"
              />
              <path
                d="M14 23C14 23 10 29 10 34C10 39 11.8 42 14 42C16.2 42 18 39 18 34C18 29 14 23 14 23Z"
                fill="url(#flame2b)"
              />
              <defs>
                <linearGradient id="flame2a" x1="14" y1="2" x2="14" y2="45" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stopColor="#FB923C" />
                  <stop offset="100%" stopColor="#C2410C" />
                </linearGradient>
                <linearGradient id="flame2b" x1="14" y1="23" x2="14" y2="42" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stopColor="#FED7AA" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#FDBA74" stopOpacity="0.5" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          {/* ENERMYS text */}
          <div className="intro-text">
            <span
              className="font-heading font-black uppercase tracking-[0.22em] text-white"
              style={{ fontSize: 32, letterSpacing: '0.22em' }}
            >
              ENERMYS
            </span>
          </div>

          {/* Tagline */}
          <p className="intro-tagline font-body text-xs uppercase tracking-[0.3em] text-[#EA580C]">
            Oil & Gas · Démantèlement · Transport
          </p>
        </div>

        {/* Progress bar */}
        <div className="absolute bottom-10 left-10 right-10">
          <div className="flex items-center justify-between mb-2">
            <span className="font-mono text-[10px] text-[#EA580C]/40 uppercase tracking-widest">
              Chargement
            </span>
            <span className="font-mono text-[10px] text-[#EA580C]/40">
              <span className="intro-cursor">_</span>
            </span>
          </div>
          <div className="h-px bg-[#EA580C]/15 w-full overflow-hidden rounded">
            <div
              className="intro-progress-bar h-full bg-[#EA580C] rounded"
              style={{ width: 0 }}
            />
          </div>
        </div>
      </div>
    </>
  )
}
