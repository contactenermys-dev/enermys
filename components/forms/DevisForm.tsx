'use client'

import { useState, FormEvent } from 'react'
import { Send, CheckCircle2, AlertCircle, ChevronRight, ChevronLeft } from 'lucide-react'
import { Button } from '@/components/ui/Button'

type FormState = 'idle' | 'submitting' | 'success' | 'error'

const serviceOptions = [
  'Démantèlement de stations GNC',
  'Terrassement & VRD',
  "Transport d'équipements industriels",
  'Remise en état de site',
  'Accompagnement & Coordination',
  'Plusieurs services / Projet complet',
]

const budgetRanges = [
  'Moins de 20 000 €',
  'Entre 20 000 € et 100 000 €',
  'Entre 100 000 € et 500 000 €',
  'Plus de 500 000 €',
  'Je ne sais pas encore',
]

const timeframes = [
  'Dès que possible (urgent)',
  'Dans le mois',
  'Dans les 3 mois',
  'Dans les 6 mois',
  "Dans l'année",
  'En phase de réflexion',
]

type Step1 = { service: string; description: string }
type Step2 = { localisation: string; surface: string; budget: string; timeframe: string }
type Step3 = { name: string; email: string; phone: string; societe: string }

export function DevisForm() {
  const [step, setStep] = useState(1)
  const [state, setState] = useState<FormState>('idle')
  const [step1, setStep1] = useState<Step1>({ service: '', description: '' })
  const [step2, setStep2] = useState<Step2>({ localisation: '', surface: '', budget: '', timeframe: '' })
  const [step3, setStep3] = useState<Step3>({ name: '', email: '', phone: '', societe: '' })
  const [errors, setErrors] = useState<Record<string, string>>({})

  const validateStep1 = () => {
    const errs: Record<string, string> = {}
    if (!step1.service) errs.service = 'Veuillez sélectionner un service'
    if (step1.description.trim().length < 20) errs.description = 'Décrivez votre projet en au moins 20 caractères'
    setErrors(errs)
    return Object.keys(errs).length === 0
  }

  const validateStep2 = () => {
    const errs: Record<string, string> = {}
    if (!step2.localisation.trim()) errs.localisation = 'La localisation du site est requise'
    if (!step2.budget) errs.budget = 'Veuillez indiquer votre budget approximatif'
    if (!step2.timeframe) errs.timeframe = 'Veuillez indiquer le délai souhaité'
    setErrors(errs)
    return Object.keys(errs).length === 0
  }

  const validateStep3 = () => {
    const errs: Record<string, string> = {}
    if (!step3.name.trim()) errs.name = 'Votre nom est requis'
    if (!step3.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) errs.email = 'Adresse e-mail invalide'
    if (!step3.phone.trim()) errs.phone = 'Votre numéro de téléphone est requis'
    setErrors(errs)
    return Object.keys(errs).length === 0
  }

  const next = () => {
    if (step === 1 && validateStep1()) setStep(2)
    else if (step === 2 && validateStep2()) setStep(3)
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    if (!validateStep3()) return
    setState('submitting')

    try {
      const res = await fetch('https://formspree.io/f/mkoydzbk', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          Nom: step3.name,
          Société: step3.societe,
          Email: step3.email,
          Téléphone: step3.phone,
          Service: step1.service,
          Description: step1.description,
          'Site / Localisation': step2.localisation,
          'Surface / Quantité': step2.surface,
          Budget: step2.budget,
          Délai: step2.timeframe,
        }),
      })

      if (res.ok) {
        setState('success')
      } else {
        setState('error')
      }
    } catch {
      setState('error')
    }
  }

  const fieldClass = (name: string) =>
    `w-full px-4 py-3 rounded-xl border font-body text-sm text-slate-800 bg-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-orange/30 focus:border-brand-orange transition-colors duration-200 ${
      errors[name] ? 'border-red-400 bg-red-50' : 'border-black/10 hover:border-black/20'
    }`

  if (state === 'success') {
    return (
      <div className="flex flex-col items-center justify-center text-center py-16 px-8 bg-white rounded-2xl border border-brand-orange/20">
        <div className="w-20 h-20 rounded-full bg-brand-orange/10 flex items-center justify-center mb-5">
          <CheckCircle2 className="w-10 h-10 text-brand-orange" aria-hidden="true" />
        </div>
        <h3 className="font-heading font-bold text-brand-navy text-2xl mb-3">Demande reçue !</h3>
        <p className="font-body text-slate-500 max-w-sm leading-relaxed">
          Merci <strong>{step3.name}</strong>. Nous avons bien reçu votre demande et vous contacterons dans les <strong>24h</strong> pour analyser votre projet.
        </p>
      </div>
    )
  }

  if (state === 'error') {
    return (
      <div className="flex flex-col items-center justify-center text-center py-16 px-8 bg-white rounded-2xl border border-red-200">
        <h3 className="font-heading font-bold text-red-500 text-2xl mb-3">Une erreur est survenue</h3>
        <p className="font-body text-slate-500 max-w-sm leading-relaxed mb-6">
          Veuillez réessayer ou nous contacter directement par téléphone.
        </p>
        <button onClick={() => setState('idle')}
          className="text-black/50 font-body text-xs uppercase tracking-widest hover:text-black transition-colors duration-200">
          ← Réessayer
        </button>
      </div>
    )
  }

  return (
    <div>
      {/* Progress */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-3">
          {['Votre projet', 'Le chantier', 'Vos coordonnées'].map((label, i) => (
            <div key={label} className={`flex items-center gap-2 ${i < 2 ? 'flex-1' : ''}`}>
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center font-heading font-bold text-sm flex-shrink-0 transition-all duration-300 ${
                  i + 1 < step ? 'bg-brand-orange text-white'
                  : i + 1 === step ? 'bg-brand-orange text-white'
                  : 'bg-black/10 text-black/30'
                }`}
                aria-current={i + 1 === step ? 'step' : undefined}
              >
                {i + 1 < step ? <CheckCircle2 className="w-4 h-4" aria-hidden="true" /> : i + 1}
              </div>
              <span className={`text-xs font-heading font-semibold hidden sm:block ${i + 1 === step ? 'text-brand-orange' : 'text-black/30'}`}>
                {label}
              </span>
              {i < 2 && (
                <div className={`flex-1 h-0.5 mx-2 sm:mx-3 transition-colors duration-300 ${i + 1 < step ? 'bg-brand-orange' : 'bg-black/10'}`} aria-hidden="true" />
              )}
            </div>
          ))}
        </div>
      </div>

      <form onSubmit={handleSubmit} noValidate>
        {/* STEP 1 */}
        {step === 1 && (
          <fieldset className="space-y-5">
            <legend className="sr-only">Étape 1 : Votre projet</legend>
            <div>
              <label htmlFor="service" className="block text-sm font-heading font-semibold text-brand-navy mb-1.5">
                Type de prestation <span className="text-brand-orange">*</span>
              </label>
              <select id="service" value={step1.service}
                onChange={(e) => { setStep1((p) => ({ ...p, service: e.target.value })); if (errors.service) setErrors((p) => ({ ...p, service: '' })) }}
                className={`${fieldClass('service')} ${!step1.service ? 'text-slate-400' : ''}`}>
                <option value="" disabled>Sélectionnez un service…</option>
                {serviceOptions.map((s) => <option key={s} value={s}>{s}</option>)}
              </select>
              {errors.service && <p className="mt-1.5 text-xs text-red-500 flex items-center gap-1" role="alert"><AlertCircle className="w-3.5 h-3.5" />{errors.service}</p>}
            </div>
            <div>
              <label htmlFor="description" className="block text-sm font-heading font-semibold text-brand-navy mb-1.5">
                Description du projet <span className="text-brand-orange">*</span>
              </label>
              <textarea id="description" rows={5} value={step1.description}
                onChange={(e) => { setStep1((p) => ({ ...p, description: e.target.value })); if (errors.description) setErrors((p) => ({ ...p, description: '' })) }}
                placeholder="Décrivez votre projet : nature des travaux, contraintes réglementaires, délais, équipements concernés…"
                className={`${fieldClass('description')} resize-none`} />
              {errors.description && <p className="mt-1.5 text-xs text-red-500 flex items-center gap-1" role="alert"><AlertCircle className="w-3.5 h-3.5" />{errors.description}</p>}
            </div>
          </fieldset>
        )}

        {/* STEP 2 */}
        {step === 2 && (
          <fieldset className="space-y-5">
            <legend className="sr-only">Étape 2 : Le chantier</legend>
            <div>
              <label htmlFor="localisation" className="block text-sm font-heading font-semibold text-brand-navy mb-1.5">
                Site / Localisation du chantier <span className="text-brand-orange">*</span>
              </label>
              <input id="localisation" type="text" value={step2.localisation}
                onChange={(e) => { setStep2((p) => ({ ...p, localisation: e.target.value })); if (errors.localisation) setErrors((p) => ({ ...p, localisation: '' })) }}
                placeholder="Ville, département, pays"
                className={fieldClass('localisation')} />
              {errors.localisation && <p className="mt-1.5 text-xs text-red-500 flex items-center gap-1" role="alert"><AlertCircle className="w-3.5 h-3.5" />{errors.localisation}</p>}
            </div>
            <div>
              <label htmlFor="surface" className="block text-sm font-heading font-semibold text-brand-navy mb-1.5">
                Surface / Quantité approximative
              </label>
              <input id="surface" type="text" value={step2.surface}
                onChange={(e) => setStep2((p) => ({ ...p, surface: e.target.value }))}
                placeholder="ex : 500 m², 3 compresseurs, 10 tonnes…"
                className={fieldClass('surface')} />
            </div>
            <div>
              <label htmlFor="budget" className="block text-sm font-heading font-semibold text-brand-navy mb-1.5">
                Budget approximatif <span className="text-brand-orange">*</span>
              </label>
              <select id="budget" value={step2.budget}
                onChange={(e) => { setStep2((p) => ({ ...p, budget: e.target.value })); if (errors.budget) setErrors((p) => ({ ...p, budget: '' })) }}
                className={`${fieldClass('budget')} ${!step2.budget ? 'text-slate-400' : ''}`}>
                <option value="" disabled>Sélectionnez une fourchette…</option>
                {budgetRanges.map((b) => <option key={b} value={b}>{b}</option>)}
              </select>
              {errors.budget && <p className="mt-1.5 text-xs text-red-500 flex items-center gap-1" role="alert"><AlertCircle className="w-3.5 h-3.5" />{errors.budget}</p>}
            </div>
            <div>
              <label htmlFor="timeframe" className="block text-sm font-heading font-semibold text-brand-navy mb-1.5">
                Délai souhaité <span className="text-brand-orange">*</span>
              </label>
              <select id="timeframe" value={step2.timeframe}
                onChange={(e) => { setStep2((p) => ({ ...p, timeframe: e.target.value })); if (errors.timeframe) setErrors((p) => ({ ...p, timeframe: '' })) }}
                className={`${fieldClass('timeframe')} ${!step2.timeframe ? 'text-slate-400' : ''}`}>
                <option value="" disabled>Sélectionnez un délai…</option>
                {timeframes.map((t) => <option key={t} value={t}>{t}</option>)}
              </select>
              {errors.timeframe && <p className="mt-1.5 text-xs text-red-500 flex items-center gap-1" role="alert"><AlertCircle className="w-3.5 h-3.5" />{errors.timeframe}</p>}
            </div>
          </fieldset>
        )}

        {/* STEP 3 */}
        {step === 3 && (
          <fieldset className="space-y-5">
            <legend className="sr-only">Étape 3 : Vos coordonnées</legend>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="cname" className="block text-sm font-heading font-semibold text-brand-navy mb-1.5">
                  Nom & prénom <span className="text-brand-orange">*</span>
                </label>
                <input id="cname" type="text" autoComplete="name" value={step3.name}
                  onChange={(e) => { setStep3((p) => ({ ...p, name: e.target.value })); if (errors.name) setErrors((p) => ({ ...p, name: '' })) }}
                  placeholder="Jean Dupont" className={fieldClass('name')} />
                {errors.name && <p className="mt-1.5 text-xs text-red-500 flex items-center gap-1" role="alert"><AlertCircle className="w-3.5 h-3.5" />{errors.name}</p>}
              </div>
              <div>
                <label htmlFor="societe" className="block text-sm font-heading font-semibold text-brand-navy mb-1.5">
                  Société
                </label>
                <input id="societe" type="text" value={step3.societe}
                  onChange={(e) => setStep3((p) => ({ ...p, societe: e.target.value }))}
                  placeholder="Nom de votre société" className={fieldClass('societe')} />
              </div>
            </div>
            <div>
              <label htmlFor="cemail" className="block text-sm font-heading font-semibold text-brand-navy mb-1.5">
                Adresse e-mail <span className="text-brand-orange">*</span>
              </label>
              <input id="cemail" type="email" autoComplete="email" value={step3.email}
                onChange={(e) => { setStep3((p) => ({ ...p, email: e.target.value })); if (errors.email) setErrors((p) => ({ ...p, email: '' })) }}
                placeholder="jean@societe.fr" className={fieldClass('email')} />
              {errors.email && <p className="mt-1.5 text-xs text-red-500 flex items-center gap-1" role="alert"><AlertCircle className="w-3.5 h-3.5" />{errors.email}</p>}
            </div>
            <div>
              <label htmlFor="cphone" className="block text-sm font-heading font-semibold text-brand-navy mb-1.5">
                Téléphone <span className="text-brand-orange">*</span>
              </label>
              <input id="cphone" type="tel" autoComplete="tel" value={step3.phone}
                onChange={(e) => { setStep3((p) => ({ ...p, phone: e.target.value })); if (errors.phone) setErrors((p) => ({ ...p, phone: '' })) }}
                placeholder="06 00 00 00 00" className={fieldClass('phone')} />
              {errors.phone && <p className="mt-1.5 text-xs text-red-500 flex items-center gap-1" role="alert"><AlertCircle className="w-3.5 h-3.5" />{errors.phone}</p>}
            </div>
          </fieldset>
        )}

        {/* Navigation */}
        <div className="mt-8 flex items-center justify-between gap-4">
          {step > 1 ? (
            <button type="button" onClick={() => setStep((s) => s - 1)}
              className="flex items-center gap-2 text-black/40 hover:text-black font-heading font-semibold text-sm transition-colors duration-200">
              <ChevronLeft className="w-4 h-4" aria-hidden="true" />
              Retour
            </button>
          ) : <div />}

          {step < 3 ? (
            <Button type="button" onClick={next} size="lg">
              Continuer
              <ChevronRight className="w-5 h-5" aria-hidden="true" />
            </Button>
          ) : (
            <Button type="submit" size="lg" disabled={state === 'submitting'}>
              {state === 'submitting' ? (
                <span className="flex items-center gap-2">
                  <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                  </svg>
                  Envoi…
                </span>
              ) : (
                <>
                  Envoyer ma demande
                  <Send className="w-4 h-4" aria-hidden="true" />
                </>
              )}
            </Button>
          )}
        </div>

        <p className="mt-4 text-xs text-black/30 font-body text-center">
          Devis 100% gratuit · Sans engagement · Réponse sous 24h ouvrées
        </p>
      </form>
    </div>
  )
}
