'use client'

import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { Menu, X, Phone, ChevronDown } from 'lucide-react'

const navLinks = [
  { label: 'Accueil', href: '/' },
  {
    label: 'Nos Services',
    href: '/services',
    children: [
      { label: 'Démantèlement de stations GNC', href: '/services/demantelement-gnc' },
      { label: 'Terrassement & VRD', href: '/services/terrassement-vrd' },
      { label: 'Transport d\'équipements industriels', href: '/services/transport-industriel' },
      { label: 'Remise en état de site', href: '/services/remise-en-etat' },
      { label: 'Accompagnement & Coordination', href: '/services/accompagnement-coordination' },
    ],
  },
  { label: 'Réalisations', href: '/realisations' },
  { label: 'À Propos', href: '/a-propos' },
  { label: 'Contact', href: '/contact' },
]

function EnerMysLogo({ dark = false }: { dark?: boolean }) {
  return (
    <img
      src="/logo-flame.png"
      alt="ENERMYS"
      style={{ height: 96, width: 'auto', marginTop: -20, marginBottom: -20 }}
    />
  )
}

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  const lightBgPages = ['/realisations', '/services', '/contact', '/projet', '/a-propos']
  const forceDark = lightBgPages.some((p) => pathname.startsWith(p))

  const isDark = scrolled || forceDark

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isDark
          ? 'bg-white/97 backdrop-blur-md shadow-[0_1px_0_0_rgba(0,0,0,0.08)] py-2'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14">

          {/* Logo */}
          <Link href="/" aria-label="ENERMYS — Accueil" className="flex-shrink-0">
            <EnerMysLogo dark={isDark} />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-0.5" aria-label="Navigation principale">
            {navLinks.map((link) =>
              link.children ? (
                <div key={link.label} className="relative group">
                  <button
                    className={`flex items-center gap-1 px-3.5 py-2 text-sm font-heading font-semibold transition-colors duration-150 rounded-md ${
                      isDark ? 'text-slate-700 hover:text-brand-navy' : 'text-white/85 hover:text-white'
                    }`}
                    aria-haspopup="true"
                  >
                    {link.label}
                    <ChevronDown className="w-3 h-3 opacity-60 transition-transform duration-200 group-hover:rotate-180" aria-hidden="true" />
                  </button>
                  <div className="absolute top-full left-0 mt-3 w-72 bg-white rounded-xl shadow-[0_8px_32px_rgba(0,0,0,0.12)] border border-slate-100/80 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 -translate-y-1 group-hover:translate-y-0 z-50 overflow-hidden">
                    <ul className="py-1.5">
                      {link.children.map((child) => (
                        <li key={child.href}>
                          <Link
                            href={child.href}
                            className="flex items-center gap-2 px-4 py-2.5 text-sm text-slate-600 hover:text-brand-orange hover:bg-slate-50 font-body transition-colors duration-100 group/item"
                          >
                            <span className="w-1 h-1 rounded-full bg-brand-orange opacity-0 group-hover/item:opacity-100 transition-opacity flex-shrink-0" />
                            {child.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-3.5 py-2 text-sm font-heading font-semibold transition-colors duration-150 rounded-md ${
                    isDark ? 'text-slate-700 hover:text-brand-navy' : 'text-white/85 hover:text-white'
                  }`}
                >
                  {link.label}
                </Link>
              )
            )}
          </nav>

          {/* Desktop right */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:+33652143921"
              className={`flex items-center gap-1.5 text-sm font-heading font-semibold transition-colors duration-150 ${
                isDark ? 'text-slate-700 hover:text-brand-orange' : 'text-white/85 hover:text-white'
              }`}
            >
              <Phone className="w-3.5 h-3.5" aria-hidden="true" />
              06 52 14 39 21
            </a>
            <Link
              href="/projet"
              className="inline-flex items-center gap-1.5 bg-brand-orange text-white text-sm font-heading font-bold px-5 py-2.5 rounded-full hover:bg-brand-orange-bright shadow-orange hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200"
            >
              Devis Gratuit
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className={`lg:hidden p-2 rounded-lg transition-colors duration-200 ${
              isDark ? 'text-brand-navy' : 'text-white'
            }`}
            onClick={() => setMobileOpen((v) => !v)}
            aria-label={mobileOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile nav */}
      <div
        className={`lg:hidden transition-all duration-300 overflow-hidden ${
          mobileOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        }`}
        aria-hidden={!mobileOpen}
      >
        <div className="bg-white border-t border-slate-100 shadow-lg">
          <div className="px-4 pt-3 pb-1">
            <a
              href="tel:+33652143921"
              className="flex items-center gap-2 py-3 text-brand-navy font-heading font-semibold text-sm border-b border-slate-100"
            >
              <Phone className="w-4 h-4 text-brand-orange" aria-hidden="true" />
              06 52 14 39 21
            </a>
          </div>
          <nav className="px-4 py-2" aria-label="Navigation mobile">
            {navLinks.map((link) =>
              link.children ? (
                <div key={link.label}>
                  <Link
                    href={link.href}
                    className="block py-3 text-slate-800 font-heading font-bold text-sm border-b border-slate-100 uppercase tracking-wide"
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                  </Link>
                  <div className="pl-4 pb-1">
                    {link.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block py-2.5 text-sm text-slate-500 hover:text-brand-orange border-b border-slate-50 font-body"
                        onClick={() => setMobileOpen(false)}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block py-3 text-slate-800 font-heading font-bold text-sm border-b border-slate-100 uppercase tracking-wide"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
              )
            )}
          </nav>
          <div className="px-4 py-4">
            <Link
              href="/projet"
              className="flex w-full items-center justify-center gap-2 bg-brand-orange text-white font-heading font-bold text-base px-6 py-3.5 rounded-full shadow-orange"
              onClick={() => setMobileOpen(false)}
            >
              Devis Gratuit
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}
