'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { featuredProjects as _featuredProjects, projects as _projects } from '@/lib/data'

const projectOverrides: Record<number, Partial<typeof _projects[0]>> = {
  1: { title: 'Démantèlement station GNC — Dépôt Paris Propreté', category: 'Démantèlement GNC', location: 'Ivry-sur-Seine (94)', year: 2026 },
  2: { title: 'Démantèlement & Transport — MIN Strasbourg', category: 'Démantèlement GNC', location: 'Strasbourg (67)', year: 2025 },
  3: { title: 'Remise en état de site — Morsbach', category: 'Remise en état', location: 'Morsbach (57)', year: 2026 },
  4: { title: 'Démantèlement station GNC — Dépôt Paris Propreté', category: 'Démantèlement GNC', location: 'Ivry-sur-Seine (94)', year: 2026 },
  5: { title: 'Démantèlement & Transport — MIN Strasbourg', category: 'Démantèlement GNC', location: 'Strasbourg (67)', year: 2025 },
  6: { title: 'Remise en état de site — Morsbach', category: 'Remise en état', location: 'Morsbach (57)', year: 2026 },
}
const projects = _projects.map(p => projectOverrides[p.id] ? { ...p, ...projectOverrides[p.id] } : p)
const featuredProjectOverrides: Record<number, Partial<typeof _featuredProjects[0]>> = {
  1: { title: 'Démantèlement station GNC — Dépôt Paris Propreté', category: 'Démantèlement GNC', location: 'Ivry-sur-Seine (94)', year: 2026 },
  2: { title: 'Démantèlement & Transport — MIN Strasbourg', category: 'Démantèlement GNC', location: 'Strasbourg (67)', year: 2025 },
  3: { title: 'Remise en état de site — Morsbach', category: 'Remise en état', location: 'Morsbach (57)', year: 2026 },
}
const featuredProjects = _featuredProjects.map(p => featuredProjectOverrides[p.id] ? { ...p, ...featuredProjectOverrides[p.id] } : p)
import { SectionTitle } from '@/components/ui/SectionTitle'

const projectImageMap: Record<number, string> = {
  1: '/ivry-compresseur.jpg',
  2: '/strasbourg-convoi.jpg',
  3: '/morsbach-fraisage.jpg',
  4: '/ivry-levage.jpg',
  5: '/strasbourg-grue.jpg',
  6: '/morsbach-terrain.jpg',
}


type ProjectGalleryProps = {
  limit?: number
  showLink?: boolean
}

const PlaceholderSvg = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-slate-400" aria-hidden="true">
    <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
    <circle cx="9" cy="9" r="2" />
    <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
  </svg>
)

/* Distinct gradient pairs per card index for the "second image" illusion */
const gradients = [
  { a: 'from-slate-300 via-slate-200 to-slate-300', b: 'from-slate-400 via-slate-300 to-slate-500' },
  { a: 'from-slate-200 via-slate-300 to-slate-200', b: 'from-slate-500 via-slate-400 to-slate-300' },
  { a: 'from-slate-300 to-slate-200',               b: 'from-slate-400 to-slate-500' },
  { a: 'from-slate-200 to-slate-300',               b: 'from-slate-500 to-slate-400' },
]

function ProjectCard({
  project,
  className = '',
  index = 0,
}: {
  project: (typeof featuredProjects)[0]
  className?: string
  index?: number
}) {
  const { a, b } = gradients[index % gradients.length]

  return (
    <article
      className={`group relative overflow-hidden rounded-2xl cursor-pointer ${className}`}
      aria-label={project.title}
    >
      {/* Layer 1 — primary image (zooms out on hover, fades out) */}
      <div
        className={`absolute inset-0 bg-gradient-to-br ${a} flex items-center justify-center
          scale-110 group-hover:scale-100
          opacity-100 group-hover:opacity-0
          transition-all duration-700 ease-out`}
        aria-hidden="true"
      >
        <img 
                  src={projectImageMap[project.id] || '/service-demantelement.png'}
                  alt={project.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
      </div>

      {/* Layer 2 — secondary image (zooms in from small, fades in) */}
      <div
        className={`absolute inset-0 bg-gradient-to-tl ${b} flex items-center justify-center
          scale-95 group-hover:scale-100
          opacity-0 group-hover:opacity-100
          transition-all duration-700 ease-out`}
        aria-hidden="true"
      >
        <img 
                  src={projectImageMap[project.id] || '/service-demantelement.png'}
                  alt={project.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
      </div>

      {/* Persistent bottom gradient + label */}
      <div className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-black/70 via-black/30 to-transparent pointer-events-none z-10" aria-hidden="true" />
      <div className="absolute inset-x-0 bottom-0 p-4 z-20 translate-y-1 group-hover:translate-y-0 transition-transform duration-300">
        <span className="inline-block text-[10px] font-heading font-black uppercase tracking-[0.18em] text-brand-orange/90 mb-1">
          {project.category}
        </span>
        <h3 className="font-heading font-bold text-white text-sm leading-snug">
          {project.title}
        </h3>
      </div>

      {/* Full-card clickable link */}
      <Link
        href={`/realisations?projet=${project.id}`}
        className="absolute inset-0 z-30"
        aria-label={`Voir le projet : ${project.title}`}
      />
    </article>
  )
}

export function ProjectGallery({ limit = 6, showLink = true }: ProjectGalleryProps) {
  const displayed = featuredProjects.slice(0, Math.min(limit, 4))

  return (
    <section className="bg-white py-20 lg:py-28" aria-labelledby="gallery-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-10">
          <SectionTitle
            eyebrow="Nos réalisations"
            title="Des projets qui parlent d'eux-mêmes"
            align="left"
          />
        </div>

        {/* Featured asymmetric grid — desktop */}
        <div className="hidden lg:grid grid-cols-3 gap-3" style={{ height: '560px' }}>

          {/* Left — tall featured */}
          {displayed[0] && (
            <ProjectCard
              project={displayed[0]}
              index={0}
              className="col-span-1 row-span-2 h-full"
            />
          )}

          {/* Top right — wide */}
          {displayed[1] && (
            <ProjectCard
              project={displayed[1]}
              index={1}
              className="col-span-2 h-[272px]"
            />
          )}

          {/* Bottom right left */}
          {displayed[2] && (
            <ProjectCard
              project={displayed[2]}
              index={2}
              className="col-span-1 h-[272px]"
            />
          )}

          {/* Bottom right right — CTA card or 4th project */}
          {showLink ? (
            <div className="relative col-span-1 h-[272px] rounded-2xl border-2 border-dashed border-slate-200 bg-slate-50 flex flex-col items-center justify-center gap-4 group hover:border-brand-orange/30 hover:bg-brand-orange/4 transition-all duration-300">
              <div className="w-12 h-12 rounded-full bg-white border border-slate-200 group-hover:bg-brand-orange group-hover:border-brand-orange flex items-center justify-center transition-all duration-300 shadow-sm">
                <ArrowRight className="w-5 h-5 text-slate-400 group-hover:text-white transition-colors duration-300" aria-hidden="true" />
              </div>
              <div className="text-center px-4">
                <p className="font-heading font-black text-brand-navy text-sm uppercase tracking-tight mb-1 group-hover:text-brand-orange transition-colors duration-200">
                  Voir tous nos projets
                </p>
                <p className="font-body text-slate-400 text-xs">
                  +{projects.length - 3} autres projets
                </p>
              </div>
              <Link href="/realisations" className="absolute inset-0" aria-label="Voir toutes nos réalisations" />
            </div>
          ) : (
            displayed[3] && (
              <ProjectCard
                project={displayed[3]}
                index={3}
                className="col-span-1 h-[272px]"
              />
            )
          )}
        </div>

        {/* Mobile/tablet — simple grid */}
        <div className="lg:hidden grid grid-cols-1 sm:grid-cols-2 gap-4">
          {displayed.map((project, i) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={i}
              className={`h-56 ${i === 0 ? 'sm:col-span-2 h-72' : ''}`}
            />
          ))}
          {showLink && (
            <div className="sm:col-span-2 pt-2 flex justify-center">
              <Link
                href="/realisations"
                className="inline-flex items-center gap-2 text-brand-orange font-heading font-semibold hover:gap-3 transition-all duration-200"
              >
                Voir tous nos projets
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Link>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
