'use client'

import { useState, useRef, useEffect, useCallback } from 'react'
import { useSearchParams } from 'next/navigation'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'
import Link from 'next/link'
import { featuredProjects as _featuredProjects } from '@/lib/data'

/* ── Override projets 1 et 2 avec vraies données ── */
const projectOverrides: Record<number, Partial<typeof _featuredProjects[0]>> = {
  1: {
    title: 'Démantèlement station GNC — Dépôt Paris Propreté',
    category: 'Démantèlement GNC',
    location: 'Ivry-sur-Seine — 39 rue Bruneseau (94)',
    year: 2026,
    shortDesc: "Démantèlement complet de la station GNC du dépôt de véhicules de collecte Paris Propreté à Ivry-sur-Seine — pour le compte de la Ville de Paris.",
    paragraph1: "En avril 2026, ENERMYS est intervenu au 39 rue Bruneseau à Ivry-sur-Seine, sur le dépôt de la Direction de la Propreté et de l'Eau de la Ville de Paris. Ce site abrite la flotte de camions de collecte GNC de Paris Propreté. ENERMYS a réalisé le démantèlement complet de la station de compression GNC : déconnexion, dépose des compresseurs haute pression et évacuation de l'ensemble des équipements par camion grue, en site pleinement occupé par les véhicules en rotation.",
    paragraph2: "Le chantier s'est déroulé avec une contrainte forte : le dépôt restait en activité pendant l'intervention, avec des camions benne entrant et sortant en continu. ENERMYS a assuré la sécurisation du périmètre, la coordination des accès et le respect strict des horaires pour ne pas perturber l'exploitation. Résultat : une opération menée dans les temps, sans incident, pour le compte d'un donneur d'ordre public exigeant.",
    tags: ['Démantèlement', 'GNC', 'Ville de Paris', '#2026'],
    cards: [
      { subtitle: 'Dépose compresseur GNC haute pression', gradient: 'from-slate-700 via-slate-600 to-slate-700' },
      { subtitle: 'Levage et chargement sur camion plateau', gradient: 'from-slate-600 via-slate-700 to-slate-600' },
      { subtitle: 'Évacuation du site — vue générale', gradient: 'from-slate-700 to-slate-600' },
    ],
  },
  2: {
    title: 'Démantèlement & Transport — Marché MIN Strasbourg',
    category: 'Démantèlement GNC',
    location: 'Strasbourg (67) → Paris',
    year: 2025,
    shortDesc: "Dépose d'un compresseur GNC de 19 tonnes et transport d'équipements — Marché d'Intérêt National de Strasbourg, convoi exceptionnel.",
    paragraph1: "ENERMYS est intervenu sur le site du Marché d'Intérêt National (MIN) de Strasbourg pour réaliser le démantèlement d'une station GNC. La mission comprenait la dépose d'un compresseur de 19 tonnes, le démontage des aéroréfrigérants et des équipements associés. L'opération a nécessité la mobilisation d'une grue mobile pour le levage et le chargement des équipements sur camion plateau, avec classement en convoi exceptionnel pour l'acheminement.",
    paragraph2: "Une partie des équipements a été transportée jusqu'à Paris dans le cadre d'une logistique multi-sites coordonnée par ENERMYS. L'ensemble du chantier — de la déconnexion à la livraison finale — a été mené avec rigueur, dans le respect des délais et des contraintes propres à un site alimentaire en exploitation.",
    tags: ['Démantèlement', 'GNC', 'Convoi exceptionnel', '#2025'],
    cards: [
      { subtitle: 'Convoi exceptionnel — compresseur 19T en transit', gradient: 'from-zinc-700 via-zinc-600 to-zinc-700' },
      { subtitle: 'Levage par grue mobile', gradient: 'from-zinc-600 via-zinc-700 to-zinc-600' },
      { subtitle: 'Station GNC MIN Strasbourg avant dépose', gradient: 'from-zinc-700 to-zinc-600' },
    ],
  },
  3: {
    title: 'Remise en état de site — Morsbach (57)',
    category: 'Remise en état de site',
    location: 'Morsbach (57)',
    year: 2026,
    shortDesc: "Remise en état d'un terrain de 200 m² dégradé par une ancienne station — fraisage, nivellement et restitution d'un site propre au client.",
    paragraph1: "À Morsbach en Moselle, ENERMYS est intervenu pour remettre en état un terrain de 200 m² laissé dégradé suite à l'exploitation d'une ancienne station. Le site présentait des affaissements, des trous et des zones irrégulières rendant le terrain inutilisable. Nos équipes ont réalisé un fraisage complet de la surface, suivi d'un remblaiement et d'un nivellement pour retrouver un profil homogène et stable.",
    paragraph2: "L'ensemble des travaux a été réalisé dans un délai court, avec un matériel adapté aux contraintes du site. Le client a récupéré un terrain de 200 m² propre, nivelé et prêt pour une nouvelle utilisation. Une intervention qui demande précision et savoir-faire pour garantir un résultat durable.",
    tags: ['Remise en état', 'Morsbach', '#2026'],
    cards: [
      { subtitle: 'Fraisage et travail du sol en cours', gradient: 'from-amber-900 via-stone-700 to-stone-700' },
      { subtitle: 'Vue du site en cours de remise en état', gradient: 'from-stone-700 via-amber-900 to-stone-700' },
      { subtitle: 'Terrain nivelé — restitution au client', gradient: 'from-stone-700 to-amber-900' },
    ],
  },
}
const featuredProjects = _featuredProjects.filter(p => p.id <= 3).map(p =>
  projectOverrides[p.id] ? { ...p, ...projectOverrides[p.id] } : p
)

/* ── Real image component ────────────────────────────── */
const projectImages: Record<number, string[]> = {
  1: ['/ivry-compresseur.jpg', '/ivry-levage.jpg', '/ivry-camion.jpg'],
  2: ['/strasbourg-convoi.jpg', '/strasbourg-grue.jpg', '/strasbourg-station.jpg'],
  3: ['/morsbach-fraisage.jpg', '/morsbach-site.jpg', '/morsbach-terrain.jpg'],
  4: ['/service-remise-etat.png', '/station-gnc-2.jpg', '/realisation-cuves-gnc.png'],
  5: ['/service-demantelement.png', '/realisation-station-avant-apres.png', '/service-transport.png'],
}

function PlaceholderImg({ gradient, className = '', projectId, cardIndex }: { gradient: string; className?: string; projectId?: number; cardIndex?: number }) {
  const src = projectId && cardIndex !== undefined ? projectImages[projectId]?.[cardIndex] : null
  if (src) {
    return <img src={src} alt="" className={`object-cover w-full h-full ${className}`} />
  }
  return (
    <div className={`bg-gradient-to-br ${gradient} flex items-center justify-center ${className}`}>
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none"
        stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"
        className="text-white/25" aria-hidden="true">
        <rect width="18" height="18" x="3" y="3" rx="2" />
        <circle cx="9" cy="9" r="2" />
        <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
      </svg>
    </div>
  )
}

/* ── Styled mixed-weight title ────────────────────── */
function StyledTitle({ title }: { title: string }) {
  const words = title.split(' ')
  const mid = Math.floor(words.length / 2)
  return (
    <h2 className="font-heading font-black text-white text-3xl sm:text-4xl lg:text-5xl leading-tight">
      {words.slice(0, mid).join(' ')}{' '}
      <span className="text-brand-orange">{words[mid]}</span>{' '}
      {words.slice(mid + 1).join(' ')}
    </h2>
  )
}

const GAP = 16 // px between carousel cards

export function RealisationsGallery() {
  const searchParams = useSearchParams()
  const [activeIndex, setActiveIndex] = useState(() => {
    const id = searchParams.get('projet')
    if (id) {
      const idx = featuredProjects.findIndex((p) => p.id === Number(id))
      return idx >= 0 ? idx : 0
    }
    return 0
  })
  const [fading, setFading] = useState(false)
  const [cardPx, setCardPx] = useState(0)
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)
  const carouselRef = useRef<HTMLDivElement>(null)

  const active = featuredProjects[activeIndex]

  /* ── Calculate card width from container (76% of it) ── */
  const calcCard = useCallback(() => {
    if (carouselRef.current) {
      setCardPx(Math.floor(carouselRef.current.offsetWidth * 0.76))
    }
  }, [])

  useEffect(() => {
    calcCard()
    window.addEventListener('resize', calcCard)
    return () => window.removeEventListener('resize', calcCard)
  }, [calcCard])

  const translateX = cardPx > 0 ? activeIndex * -(cardPx + GAP) : 0

  /* ── Navigate between projects ── */
  const goTo = useCallback((index: number) => {
    if (index === activeIndex) return
    setFading(true)
    setTimeout(() => {
      setActiveIndex(index)
      setFading(false)
    }, 180)
  }, [activeIndex])

  /* ── Swipe touch support ── */
  const touchStartX = useRef<number | null>(null)

  const onTouchStart = useCallback((e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX
  }, [])

  const onTouchEnd = useCallback((e: React.TouchEvent) => {
    if (touchStartX.current === null) return
    const diff = touchStartX.current - e.changedTouches[0].clientX
    if (Math.abs(diff) > 50) {
      if (diff > 0) goTo(Math.min(featuredProjects.length - 1, activeIndex + 1))
      else goTo(Math.max(0, activeIndex - 1))
    }
    touchStartX.current = null
  }, [activeIndex, goTo])

  /* ── Close lightbox on Escape ── */
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setLightboxIndex(null) }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  return (
    <>
      {/* ════════════════════════════════════════
          SECTION 1 — Selecteur (fond blanc)
      ════════════════════════════════════════ */}
      <section className="bg-white pt-32 pb-16" aria-label="Selecteur de realisation">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 overflow-x-hidden lg:overflow-x-visible">

          {/* Eyebrow */}
          <div className="flex items-center gap-3 mb-10">
            <span className="text-slate-400 text-xs font-mono tabular-nums">{active.index}</span>
            <span className="w-px h-4 bg-slate-200" aria-hidden="true" />
            <span className="text-slate-400 text-xs font-body uppercase tracking-widest">Notre Expertise</span>
          </div>

          {/* Two-column main grid */}
          <div className="grid lg:grid-cols-[42%_58%] gap-8 lg:gap-16 items-start">

            {/* ── LEFT : titre + info projet + flèches ── */}
            <div className="flex flex-col lg:min-h-[clamp(320px,38vw,480px)]">

              {/* Titre mobile */}
              <h1 className="lg:hidden font-heading font-black text-brand-navy text-3xl leading-tight tracking-tight">
                Des projets qui<br />temoignent de<br />notre savoir-faire
              </h1>
              {/* Titre desktop */}
              <h1 className="hidden lg:block font-heading font-black text-brand-navy text-[3.1rem] leading-none tracking-tight">
                Des projets qui temoignent de notre savoir-faire
              </h1>

              {/* Active project info — slide vers le bas du col */}
              <div
                className="mt-auto pt-10"
                style={{ opacity: fading ? 0 : 1, transition: 'opacity 0.18s ease' }}
              >
                <p className="font-heading font-bold text-brand-navy text-base leading-snug">
                  {active.title}
                </p>
                <p className="font-body text-slate-400 text-sm mt-1">
                  {active.location}&nbsp;&middot;&nbsp;{active.year}
                </p>
              </div>

              {/* Flèches + lien — sous l'info projet */}
              <div className="flex items-center gap-3 mt-5">
                <button
                  onClick={() => goTo(Math.max(0, activeIndex - 1))}
                  disabled={activeIndex === 0}
                  className="w-9 h-9 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 hover:border-brand-orange hover:text-brand-orange disabled:opacity-25 disabled:cursor-not-allowed transition-all duration-200"
                  aria-label="Projet precedent"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={() => goTo(Math.min(featuredProjects.length - 1, activeIndex + 1))}
                  disabled={activeIndex >= featuredProjects.length - 1}
                  className="w-9 h-9 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 hover:border-brand-orange hover:text-brand-orange disabled:opacity-25 disabled:cursor-not-allowed transition-all duration-200"
                  aria-label="Projet suivant"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* ── RIGHT : liste projets (haut) + carousel (bas) ── */}
            <div className="flex flex-col gap-6">

              {/* Liste des 5 projets — desktop seulement, alignée à droite */}
              <div className="hidden lg:flex flex-col items-end gap-1 overflow-hidden w-full">
                {featuredProjects.map((p, i) => (
                  <button
                    key={p.id}
                    onClick={() => goTo(i)}
                    className={`font-heading font-semibold text-base py-1 transition-all duration-300 leading-snug text-right truncate max-w-full ${
                      i === activeIndex
                        ? 'text-brand-navy'
                        : 'text-slate-300 hover:text-slate-500'
                    }`}
                  >
                    {p.title}
                  </button>
                ))}
              </div>

              {/* Carousel — 1 image visible + aperçu de la suivante */}
              <div
                ref={carouselRef}
                className="overflow-hidden rounded-2xl"
                style={{ height: 'clamp(200px, 22vw, 300px)' }}
                onTouchStart={onTouchStart}
                onTouchEnd={onTouchEnd}
              >
                <div
                  className="flex h-full"
                  style={{
                    gap: `${GAP}px`,
                    transform: `translateX(${translateX}px)`,
                    transition: 'transform 0.55s cubic-bezier(0.4, 0, 0.2, 1)',
                  }}
                >
                  {featuredProjects.map((p, i) => (
                    <button
                      key={p.id}
                      onClick={() => goTo(i)}
                      className="relative flex-shrink-0 rounded-2xl overflow-hidden cursor-pointer"
                      style={{ width: cardPx > 0 ? `${cardPx}px` : '76%', height: '100%' }}
                      aria-label={p.title}
                      aria-current={i === activeIndex ? true : undefined}
                    >
                      <PlaceholderImg gradient={p.cards[0].gradient} className="absolute inset-0" projectId={p.id} cardIndex={0} />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                      <div className="absolute bottom-0 inset-x-0 p-4">
                        <span className="text-[10px] font-heading font-black uppercase tracking-widest text-brand-orange block mb-0.5">
                          {p.category}
                        </span>
                        <p className="font-heading font-bold text-white text-xs leading-snug">
                          {p.title}
                        </p>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ========================
          SECTION 2 — Detail
      ======================== */}
      <section
        className="bg-brand-cream py-20 lg:py-28"
        style={{ opacity: fading ? 0 : 1, transition: 'opacity 0.18s ease' }}
        aria-label="Detail du projet"
        aria-live="polite"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Eyebrow */}
          <div className="flex items-center gap-3 mb-12">
            <span className="text-slate-400 text-xs font-mono tabular-nums">{active.index}</span>
            <span className="w-px h-4 bg-slate-300" aria-hidden="true" />
            <span className="text-slate-400 text-xs font-body uppercase tracking-widest">Notre Realisation</span>
          </div>

          {/* Title left | Paragraph 1 right */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 mb-10">
            <div>
              <h2 className="font-heading font-black text-brand-navy text-3xl sm:text-4xl lg:text-5xl leading-tight">
                {active.title}
              </h2>
            </div>
            <div className="flex items-start">
              <p className="font-body text-slate-500 text-base leading-relaxed">{active.paragraph1}</p>
            </div>
          </div>

          {/* Three photo cards — title only, click to enlarge */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.8fr_1fr_1fr] gap-4">

            {/* Card 1 */}
            <article
              className="relative rounded-2xl overflow-hidden cursor-pointer group/card"
              style={{ minHeight: '420px' }}
              onClick={() => setLightboxIndex(0)}
              aria-label={`Agrandir: ${active.cards[0].subtitle}`}
            >
              <PlaceholderImg gradient={active.cards[0].gradient} className="absolute inset-0 transition-transform duration-500 group-hover/card:scale-105" projectId={active.id} cardIndex={0} />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />
              <div className="absolute bottom-0 inset-x-0 p-6">
                <h3 className="font-heading font-bold text-white text-base leading-snug">
                  {active.cards[0].subtitle}
                </h3>
              </div>
            </article>

            {/* Card 2 */}
            <article
              className="relative rounded-2xl overflow-hidden cursor-pointer group/card"
              style={{ minHeight: '420px' }}
              onClick={() => setLightboxIndex(1)}
              aria-label={`Agrandir: ${active.cards[1].subtitle}`}
            >
              <PlaceholderImg gradient={active.cards[1].gradient} className="absolute inset-0 transition-transform duration-500 group-hover/card:scale-105" projectId={active.id} cardIndex={1} />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />
              <div className="absolute bottom-0 inset-x-0 p-5">
                <h3 className="font-heading font-bold text-white text-sm leading-snug">
                  {active.cards[1].subtitle}
                </h3>
              </div>
            </article>

            {/* Card 3 — hidden on mobile */}
            <article
              className="relative rounded-2xl overflow-hidden hidden sm:block cursor-pointer group/card"
              style={{ minHeight: '420px' }}
              onClick={() => setLightboxIndex(2)}
              aria-label={`Agrandir: ${active.cards[2].subtitle}`}
            >
              <PlaceholderImg gradient={active.cards[2].gradient} className="absolute inset-0 transition-transform duration-500 group-hover/card:scale-105" projectId={active.id} cardIndex={2} />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />
              <div className="absolute bottom-0 inset-x-0 p-5">
                <h3 className="font-heading font-bold text-white text-sm leading-snug">
                  {active.cards[2].subtitle}
                </h3>
              </div>
            </article>

          </div>

          {/* Paragraph 2 left | Button right */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 mt-10">
            <p className="font-body text-slate-500 text-base leading-relaxed max-w-xl">{active.paragraph2}</p>
            <Link
              href="/projet"
              className="flex-shrink-0 border border-slate-300 text-slate-600 hover:border-brand-orange hover:text-brand-navy text-sm font-heading font-semibold px-6 py-3 rounded-full transition-all duration-200"
            >
              Demander un devis gratuit
            </Link>
          </div>

        </div>
      </section>

      {/* ========================
          LIGHTBOX
      ======================== */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 backdrop-blur-md"
          onClick={() => setLightboxIndex(null)}
          role="dialog"
          aria-modal="true"
          aria-label="Photo agrandie"
        >
          <button
            className="absolute top-5 right-5 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors duration-200"
            onClick={() => setLightboxIndex(null)}
            aria-label="Fermer"
          >
            <X className="w-5 h-5" />
          </button>
          <div
            className="relative w-full max-w-4xl mx-4 rounded-2xl overflow-hidden shadow-2xl"
            style={{
              aspectRatio: '16/9',
              animation: 'lightboxIn 0.25s cubic-bezier(0.4, 0, 0.2, 1) forwards',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <PlaceholderImg
              gradient={active.cards[lightboxIndex].gradient}
              projectId={active.id}
              cardIndex={lightboxIndex}
              className="absolute inset-0"
            />
            <div className="absolute bottom-0 inset-x-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
              <h3 className="font-heading font-bold text-white text-lg">
                {active.cards[lightboxIndex].subtitle}
              </h3>
              <p className="font-body text-white/50 text-sm mt-1">
                {active.location}&nbsp;&middot;&nbsp;{active.year}
              </p>
            </div>
          </div>
          <style>{`
            @keyframes lightboxIn {
              from { opacity: 0; transform: scale(0.88); }
              to   { opacity: 1; transform: scale(1); }
            }
          `}</style>
        </div>
      )}
    </>
  )
}
