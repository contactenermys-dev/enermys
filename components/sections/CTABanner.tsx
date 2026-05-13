import { Phone, ArrowRight } from 'lucide-react'
import Link from 'next/link'

type CTABannerProps = {
  title?: string
  subtitle?: string
  primaryLabel?: string
  primaryHref?: string
  showPhone?: boolean
}

export function CTABanner({
  title = 'Votre projet industriel mérite les meilleurs experts',
  subtitle = 'Contactez-nous pour un devis gratuit et une analyse de vos contraintes. Réponse garantie sous 24h.',
  primaryLabel = 'Demander un devis gratuit',
  primaryHref = '/projet',
  showPhone = true,
}: CTABannerProps) {
  return (
    <section className="relative bg-white overflow-hidden" aria-label="Appel à l'action">
      <div className="bg-brand-orange py-24 lg:py-28 relative overflow-hidden">
        <style>{`
          @keyframes diagonalReveal {
            0%   { clip-path: polygon(0% 0%, 0% 0%,    0% 0%,     0% 0%,     0% 0%,    0% 0%); }
            50%  { clip-path: polygon(0% 0%, 100% 0%,  100% 0%,   0% 100%,   0% 100%,  0% 0%); }
            100% { clip-path: polygon(0% 0%, 100% 0%,  100% 100%, 100% 100%, 0% 100%,  0% 0%); }
          }
        `}</style>
        <div
          className="absolute inset-0 opacity-[0.07]"
          aria-hidden="true"
          style={{ animation: 'diagonalReveal 3s ease-in-out infinite alternate' }}
        >
          <div className="absolute inset-0" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")" }} />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2.5 mb-6 justify-center">
            <span className="w-5 h-0.5 rounded-full bg-white/50" aria-hidden="true" />
            <span className="text-[11px] font-heading font-bold uppercase tracking-[0.22em] text-white/70">
              Gratuit & sans engagement
            </span>
          </div>

          <h2 className="font-heading font-black uppercase text-white text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-none tracking-tight text-center mb-6">
            {title}
          </h2>

          <p className="font-body text-white/70 text-base sm:text-lg text-center max-w-xl mx-auto mb-10">
            {subtitle}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href={primaryHref}
              className="inline-flex items-center gap-2 bg-white text-brand-orange font-heading font-black text-base px-8 py-4 rounded-full hover:-translate-y-0.5 hover:shadow-lg transition-all duration-200"
            >
              {primaryLabel}
              <ArrowRight className="w-5 h-5" aria-hidden="true" />
            </Link>
            {showPhone && (
              <a
                href="tel:+33652143921"
                className="inline-flex items-center gap-2.5 text-white font-heading font-semibold text-base hover:text-white/80 transition-colors duration-200 group"
              >
                <div className="w-10 h-10 rounded-full border-2 border-white/30 group-hover:border-white flex items-center justify-center transition-colors duration-200">
                  <Phone className="w-4 h-4" aria-hidden="true" />
                </div>
                06 52 14 39 21
              </a>
            )}
          </div>

          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {['Devis 100% gratuit', 'Sans engagement', 'Réponse sous 24h', 'Conformité garantie'].map((item) => (
              <span key={item} className="flex items-center gap-1.5 text-white/70 text-xs font-body">
                <span className="w-1 h-1 rounded-full bg-white/50" aria-hidden="true" />
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
