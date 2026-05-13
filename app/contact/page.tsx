'use client'

import { useState, FormEvent } from 'react'
import { Mail, Phone, MapPin, Clock, Plus, Minus, AlertCircle } from 'lucide-react'

const faqs = [
  {
    q: 'Comment obtenir un devis ?',
    a: 'Remplissez le formulaire ci-contre ou appelez-nous directement. Nous analysons votre besoin et vous revenons sous 24h avec une première approche tarifaire.',
  },
  {
    q: 'Quelle est votre zone d\'intervention ?',
    a: 'ENERMYS intervient sur l\'ensemble du territoire français et à l\'international. Nos équipes sont mobiles et se déplacent sur vos sites, où qu\'ils se trouvent.',
  },
  {
    q: 'Proposez-vous des devis gratuits ?',
    a: 'Oui, tous nos devis sont entièrement gratuits et sans engagement. Nous nous déplaçons sur site pour analyser vos contraintes avant toute proposition chiffrée.',
  },
  {
    q: 'Gérez-vous les aspects réglementaires ?',
    a: 'Absolument. Nous prenons en charge les démarches liées aux réglementations ICPE, les autorisations de transport exceptionnel, la gestion des BSD et l\'ensemble de la documentation réglementaire.',
  },
  {
    q: 'Intervenez-vous en urgence ?',
    a: 'Oui, nous disposons d\'une capacité de mobilisation rapide pour les situations urgentes. Contactez-nous directement par téléphone pour une prise en charge prioritaire.',
  },
]

function FaqItem({ q, a, defaultOpen = false }: { q: string; a: string; defaultOpen?: boolean }) {
  const [open, setOpen] = useState(defaultOpen)
  return (
    <div className="border-b border-black/10 last:border-0">
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-start justify-between gap-6 py-5 text-left"
        aria-expanded={open}
      >
        <span className="font-heading font-semibold text-black text-sm sm:text-base leading-snug">
          {q}
        </span>
        <span className="flex-shrink-0 mt-0.5 text-black/40">
          {open ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
        </span>
      </button>
      <div
        className="overflow-hidden transition-all duration-300"
        style={{ maxHeight: open ? '300px' : '0', opacity: open ? 1 : 0 }}
      >
        <p className="font-body text-black/50 text-sm leading-relaxed pb-5 pr-8">{a}</p>
      </div>
    </div>
  )
}

function InlineForm() {
  type State = 'idle' | 'submitting' | 'success' | 'error'
  const [state, setState] = useState<State>('idle')
  const [form, setForm] = useState({ name: '', email: '', phone: '', localisation: '', message: '' })
  const [errors, setErrors] = useState<Partial<typeof form>>({})

  const validate = () => {
    const e: Partial<typeof form> = {}
    if (!form.name.trim()) e.name = 'Requis'
    if (!form.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) e.email = 'E-mail invalide'
    if (form.message.trim().length < 10) e.message = 'Trop court'
    setErrors(e)
    return !Object.keys(e).length
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setForm((p) => ({ ...p, [name]: value }))
    setErrors((p) => ({ ...p, [name]: undefined }))
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    if (!validate()) return
    setState('submitting')
    await new Promise((r) => setTimeout(r, 1200))
    setState('success')
  }

  const inputCls = (err?: string) =>
    `w-full px-3 py-2.5 bg-transparent border-b font-body text-sm text-black placeholder:text-black/25 focus:outline-none transition-colors duration-200 ${
      err ? 'border-red-500/60' : 'border-black/15 focus:border-black/50'
    }`

  if (state === 'success') {
    return (
      <div className="flex flex-col items-start justify-center py-10">
        <p className="font-heading font-bold text-black text-lg mb-2">Message envoyé !</p>
        <p className="font-body text-black/45 text-sm mb-6">Nous vous répondrons sous 24h ouvrées.</p>
        <button
          onClick={() => { setState('idle'); setForm({ name: '', email: '', phone: '', localisation: '', message: '' }) }}
          className="text-black/50 font-body text-xs uppercase tracking-widest hover:text-black transition-colors duration-200"
        >
          Envoyer un autre message →
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} noValidate aria-label="Formulaire de contact">
      <p className="font-heading font-semibold text-black/50 text-xs uppercase tracking-widest mb-5">
        Passons à l&apos;action
      </p>

      <div className="mb-5">
        <label htmlFor="name" className="block font-body text-black/40 text-xs mb-1.5 uppercase tracking-wide">Nom</label>
        <input id="name" name="name" type="text" autoComplete="name"
          value={form.name} onChange={handleChange} placeholder="Votre nom"
          className={inputCls(errors.name)} />
        {errors.name && <p className="mt-1 text-xs text-red-400 flex items-center gap-1"><AlertCircle className="w-3 h-3" />{errors.name}</p>}
      </div>

      <div className="mb-5">
        <label htmlFor="phone" className="block font-body text-black/40 text-xs mb-1.5 uppercase tracking-wide">Numéro</label>
        <input id="phone" name="phone" type="tel" autoComplete="tel"
          value={form.phone} onChange={handleChange} placeholder="06 XX XX XX XX"
          className={inputCls()} />
      </div>

      <div className="mb-5">
        <label htmlFor="email" className="block font-body text-black/40 text-xs mb-1.5 uppercase tracking-wide">E-mail</label>
        <input id="email" name="email" type="email" autoComplete="email"
          value={form.email} onChange={handleChange} placeholder="nom@societe.fr"
          className={inputCls(errors.email)} />
        {errors.email && <p className="mt-1 text-xs text-red-400 flex items-center gap-1"><AlertCircle className="w-3 h-3" />{errors.email}</p>}
      </div>

      <div className="mb-5">
        <label htmlFor="localisation" className="block font-body text-black/40 text-xs mb-1.5 uppercase tracking-wide">Site / Localisation du chantier</label>
        <input id="localisation" name="localisation" type="text"
          value={form.localisation} onChange={handleChange} placeholder="Ville, département ou pays"
          className={inputCls()} />
      </div>

      <div className="mb-7">
        <label htmlFor="message" className="block font-body text-black/40 text-xs mb-1.5 uppercase tracking-wide">Message</label>
        <textarea id="message" name="message" rows={5}
          value={form.message} onChange={handleChange}
          placeholder="Décrivez votre projet ou besoin…"
          className={`${inputCls(errors.message)} resize-none`} />
        {errors.message && <p className="mt-1 text-xs text-red-400 flex items-center gap-1"><AlertCircle className="w-3 h-3" />{errors.message}</p>}
      </div>

      <button
        type="submit"
        disabled={state === 'submitting'}
        className="w-full py-3 bg-brand-orange text-white font-heading font-bold text-sm rounded-full shadow-orange hover:bg-brand-orange-bright hover:shadow-lg hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
      >
        {state === 'submitting' ? 'Envoi…' : 'Passons à l\'action'}
      </button>
    </form>
  )
}

export default function ContactPage() {
  return (
    <main className="bg-white text-black min-h-screen">

      <div className="relative border-b border-black/10 pt-36 pb-10 overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          aria-hidden="true"
          style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")" }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-heading font-black text-brand-orange text-5xl sm:text-6xl lg:text-8xl leading-none tracking-tight uppercase">
            Parlons de<br />Votre Projet
          </h1>
        </div>
      </div>

      <div className="border-b border-black/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 grid lg:grid-cols-2 gap-16 lg:gap-24">
          <div>
            <p className="font-body text-black/40 text-xs uppercase tracking-widest mb-5">• Contact</p>
            <h2 className="font-heading font-black text-black text-5xl sm:text-6xl leading-none uppercase mb-10">
              Nous<br />Joindre
            </h2>

            <div className="space-y-0">
              <a href="mailto:contact@enermys.fr"
                className="flex items-center gap-3 py-4 border-t border-black/10 text-black/50 hover:text-black transition-colors duration-200">
                <Mail className="w-4 h-4 flex-shrink-0 text-brand-orange" aria-hidden="true" />
                <span className="font-body text-sm">contact@enermys.fr</span>
              </a>
              <a href="tel:+33652143921"
                className="flex items-center gap-3 py-4 border-t border-black/10 text-black/50 hover:text-black transition-colors duration-200">
                <Phone className="w-4 h-4 flex-shrink-0 text-brand-orange" aria-hidden="true" />
                <span className="font-body text-sm">06 52 14 39 21</span>
              </a>
              <div className="flex items-center gap-3 py-4 border-t border-black/10 text-black/50">
                <MapPin className="w-4 h-4 flex-shrink-0 text-brand-orange" aria-hidden="true" />
                <span className="font-body text-sm">France · International</span>
              </div>
              <div className="flex items-center gap-3 py-4 border-t border-b border-black/10 text-black/50">
                <Clock className="w-4 h-4 flex-shrink-0 text-brand-orange" aria-hidden="true" />
                <span className="font-body text-sm">Lun–Ven : 8h–18h · Urgences disponibles</span>
              </div>
            </div>
          </div>

          <div className="lg:pt-[4.5rem]">
            <InlineForm />
          </div>
        </div>
      </div>

      <div className="bg-brand-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 grid lg:grid-cols-2 gap-16 lg:gap-24">
          <div>
            <p className="font-body text-black/40 text-xs uppercase tracking-widest mb-5">• FAQ</p>
            <h2 className="font-heading font-black text-black text-5xl sm:text-6xl leading-none uppercase">
              Questions<br />Rapides
            </h2>
          </div>
          <div>
            {faqs.map((faq, i) => (
              <FaqItem key={faq.q} q={faq.q} a={faq.a} defaultOpen={i === 0} />
            ))}
          </div>
        </div>
      </div>

      <div className="pb-16 bg-brand-cream" />
    </main>
  )
}
