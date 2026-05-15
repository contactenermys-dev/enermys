import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Politique de confidentialité — ENERMYS',
  description: 'Politique de confidentialité et protection des données personnelles du site enermys.fr',
  alternates: { canonical: 'https://www.enermys.fr/politique-de-confidentialite' },
}

export default function PolitiqueConfidentialitePage() {
  return (
    <main className="bg-white text-black min-h-screen">
      <div className="relative border-b border-black/10 pt-36 pb-10 overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-heading font-black text-brand-orange text-4xl sm:text-5xl lg:text-7xl leading-none tracking-tight uppercase">
            Politique de<br />Confidentialité
          </h1>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12 font-body text-black/70 text-sm leading-relaxed">

        <section>
          <h2 className="font-heading font-black text-black text-2xl uppercase mb-4">Responsable du traitement</h2>
          <p>
            Le responsable du traitement des données personnelles collectées sur le site <strong>www.enermys.fr</strong> est la société ENERMYS, SAS au capital variable, immatriculée au RCS de Paris sous le numéro 995 261 567, dont le siège social est situé au 60 Rue François Ier, 75008 Paris.
          </p>
          <p className="mt-3">
            Pour toute question relative à vos données personnelles : <a href="mailto:contact@enermys.fr" className="text-brand-orange hover:underline">contact@enermys.fr</a>
          </p>
        </section>

        <section>
          <h2 className="font-heading font-black text-black text-2xl uppercase mb-4">Données collectées</h2>
          <p>Dans le cadre de l'utilisation de notre site, nous collectons les données suivantes :</p>
          <ul className="mt-3 space-y-1.5 list-disc list-inside">
            <li>Nom et prénom</li>
            <li>Adresse e-mail</li>
            <li>Numéro de téléphone</li>
            <li>Société (optionnel)</li>
            <li>Localisation du chantier / site</li>
            <li>Description du projet et informations relatives à votre demande</li>
          </ul>
          <p className="mt-3">
            Ces données sont collectées uniquement lorsque vous remplissez un formulaire de contact ou de demande de devis sur notre site.
          </p>
        </section>

        <section>
          <h2 className="font-heading font-black text-black text-2xl uppercase mb-4">Finalité du traitement</h2>
          <p>Les données collectées sont utilisées exclusivement pour :</p>
          <ul className="mt-3 space-y-1.5 list-disc list-inside">
            <li>Répondre à vos demandes de contact et de devis</li>
            <li>Vous recontacter dans le cadre de votre projet</li>
            <li>Assurer le suivi commercial de votre demande</li>
          </ul>
          <p className="mt-3">Vos données ne sont en aucun cas utilisées à des fins de prospection commerciale sans votre consentement préalable.</p>
        </section>

        <section>
          <h2 className="font-heading font-black text-black text-2xl uppercase mb-4">Durée de conservation</h2>
          <p>
            Vos données personnelles sont conservées pendant la durée nécessaire au traitement de votre demande, et au maximum <strong>3 ans</strong> à compter du dernier contact.
          </p>
        </section>

        <section>
          <h2 className="font-heading font-black text-black text-2xl uppercase mb-4">Destinataires des données</h2>
          <p>
            Vos données sont destinées exclusivement à l'équipe ENERMYS. Elles peuvent être transmises à notre prestataire technique <strong>Formspree</strong> (formspree.io) dans le cadre du traitement des formulaires en ligne. Formspree agit en tant que sous-traitant et s'engage à respecter la réglementation applicable en matière de protection des données.
          </p>
          <p className="mt-3">Vos données ne sont ni vendues, ni louées, ni cédées à des tiers.</p>
        </section>

        <section>
          <h2 className="font-heading font-black text-black text-2xl uppercase mb-4">Vos droits</h2>
          <p>Conformément au Règlement Général sur la Protection des Données (RGPD) et à la loi Informatique et Libertés, vous disposez des droits suivants :</p>
          <ul className="mt-3 space-y-1.5 list-disc list-inside">
            <li><strong>Droit d'accès</strong> : obtenir une copie de vos données</li>
            <li><strong>Droit de rectification</strong> : corriger vos données inexactes</li>
            <li><strong>Droit à l'effacement</strong> : demander la suppression de vos données</li>
            <li><strong>Droit à la limitation</strong> : limiter le traitement de vos données</li>
            <li><strong>Droit d'opposition</strong> : vous opposer au traitement de vos données</li>
            <li><strong>Droit à la portabilité</strong> : recevoir vos données dans un format structuré</li>
          </ul>
          <p className="mt-3">
            Pour exercer ces droits, contactez-nous à : <a href="mailto:contact@enermys.fr" className="text-brand-orange hover:underline">contact@enermys.fr</a>
          </p>
          <p className="mt-3">
            Vous avez également le droit d'introduire une réclamation auprès de la <strong>CNIL</strong> (Commission Nationale de l'Informatique et des Libertés) — <a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer" className="text-brand-orange hover:underline">www.cnil.fr</a>.
          </p>
        </section>

        <section>
          <h2 className="font-heading font-black text-black text-2xl uppercase mb-4">Cookies</h2>
          <p>
            Le site <strong>www.enermys.fr</strong> n'utilise pas de cookies de traçage ou de publicité. Seuls des cookies techniques strictement nécessaires au bon fonctionnement du site peuvent être utilisés.
          </p>
        </section>

        <section>
          <h2 className="font-heading font-black text-black text-2xl uppercase mb-4">Sécurité</h2>
          <p>
            ENERMYS met en œuvre les mesures techniques et organisationnelles appropriées pour protéger vos données personnelles contre tout accès non autorisé, perte, destruction ou divulgation. Le site est hébergé sur une infrastructure sécurisée (Vercel Inc.).
          </p>
        </section>

        <p className="text-xs text-black/30 pt-4 border-t border-black/10">
          Dernière mise à jour : mai 2026
        </p>
      </div>
    </main>
  )
}
