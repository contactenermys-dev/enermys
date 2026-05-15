import Link from 'next/link'
import { Phone, Mail, MapPin, Clock } from 'lucide-react'

const serviceLinks = [
  { label: 'Démantèlement de stations GNC', href: '/services/demantelement-gnc' },
  { label: 'Terrassement & VRD', href: '/services/terrassement-vrd' },
  { label: 'Transport industriel', href: '/services/transport-industriel' },
  { label: 'Remise en état de site', href: '/services/remise-en-etat' },
  { label: 'Accompagnement & Coordination', href: '/services/accompagnement-coordination' },
]

const quickLinks = [
  { label: 'Nos Réalisations', href: '/realisations' },
  { label: 'À Propos', href: '/a-propos' },
  { label: 'Contact', href: '/contact' },
  { label: 'Commencer un Projet', href: '/projet' },
]

function FooterLogo() {
  return (
    <img
      src="/logo-flame.png"
      alt="ENERMYS"
      style={{ height: 72, width: 'auto' }}
    />
  )
}

export function Footer() {
  return (
    <footer className="bg-brand-navy-dark text-white" aria-label="Pied de page">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-flex mb-5" aria-label="ENERMYS — Accueil">
              <FooterLogo />
            </Link>
            <p className="text-white/55 text-sm leading-relaxed font-body">
              Spécialistes du démantèlement, du terrassement et du transport industriel. Votre partenaire de confiance pour tous vos projets Oil & Gas en France et à l&apos;international.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-heading font-black text-white mb-5 text-xs uppercase tracking-[0.2em]">
              Nos Services
            </h3>
            <ul className="space-y-2">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/50 hover:text-brand-orange text-sm transition-colors duration-150 font-body flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-brand-orange opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" aria-hidden="true" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-heading font-black text-white mb-5 text-xs uppercase tracking-[0.2em]">
              Navigation
            </h3>
            <ul className="space-y-2 mb-8">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/50 hover:text-brand-orange text-sm transition-colors duration-150 font-body flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-brand-orange opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" aria-hidden="true" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="space-y-1.5">
              {['Conformité réglementaire', 'Partenaire grands comptes', 'Intervention nationale'].map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-orange flex-shrink-0" aria-hidden="true" />
                  <span className="text-white/60 text-xs font-body">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-heading font-black text-white mb-5 text-xs uppercase tracking-[0.2em]">
              Contact
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-brand-orange mt-0.5 flex-shrink-0" aria-hidden="true" />
                <div>
                  <a href="tel:+33652143921" className="text-white hover:text-brand-orange text-sm font-heading font-semibold transition-colors duration-150">
                    06 52 14 39 21
                  </a>
                  <p className="text-white/40 text-xs mt-0.5 font-body">Appel direct</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-brand-orange mt-0.5 flex-shrink-0" aria-hidden="true" />
                <div>
                  <a href="mailto:contact@enermys.fr" className="text-white hover:text-brand-orange text-sm font-body transition-colors duration-150 break-all">
                    contact@enermys.fr
                  </a>
                  <p className="text-white/40 text-xs mt-0.5 font-body">Réponse sous 24h</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-brand-orange mt-0.5 flex-shrink-0" aria-hidden="true" />
                <div>
                  <p className="text-white/75 text-sm font-body">France · International</p>
                  <p className="text-white/40 text-xs mt-0.5 font-body">Intervention nationale et à l'étranger</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-brand-orange mt-0.5 flex-shrink-0" aria-hidden="true" />
                <div>
                  <p className="text-white/75 text-sm font-body">Lun–Ven : 8h–18h</p>
                  <p className="text-white/40 text-xs mt-0.5 font-body">Urgences disponibles</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/35 text-xs font-body text-center sm:text-left">
            © {new Date().getFullYear()} ENERMYS — Tous droits réservés
          </p>
          <div className="flex items-center gap-4 text-xs text-white/30">
            <Link href="/mentions-legales" className="hover:text-white/60 transition-colors duration-150">
              Mentions légales
            </Link>
            <span aria-hidden="true">·</span>
            <Link href="/politique-de-confidentialite" className="hover:text-white/60 transition-colors duration-150">
              Politique de confidentialité
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
