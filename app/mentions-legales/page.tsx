import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Mentions légales — ENERMYS',
  description: 'Mentions légales du site enermys.fr',
  alternates: { canonical: 'https://www.enermys.fr/mentions-legales' },
}

export default function MentionsLegalesPage() {
  return (
    <main className="bg-white text-black min-h-screen">
      <div className="relative border-b border-black/10 pt-36 pb-10 overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-heading font-black text-brand-orange text-5xl sm:text-6xl lg:text-8xl leading-none tracking-tight uppercase">
            Mentions<br />Légales
          </h1>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12 font-body text-black/70 text-sm leading-relaxed">

        <section>
          <h2 className="font-heading font-black text-black text-2xl uppercase mb-4">Éditeur du site</h2>
          <p>Le site <strong>www.enermys.fr</strong> est édité par la société :</p>
          <ul className="mt-3 space-y-1.5">
            <li><strong>Raison sociale :</strong> ENERMYS</li>
            <li><strong>Forme juridique :</strong> Société par Actions Simplifiée (SAS)</li>
            <li><strong>SIREN :</strong> 995 261 567</li>
            <li><strong>SIRET (siège) :</strong> 995 261 567 00011</li>
            <li><strong>Numéro de TVA intracommunautaire :</strong> FR68995261567</li>
            <li><strong>RCS :</strong> 995 261 567 R.C.S. Paris</li>
            <li><strong>Siège social :</strong> 60 Rue François Ier, 75008 Paris</li>
            <li><strong>Date de création :</strong> 17 décembre 2025</li>
            <li><strong>Activité :</strong> Ingénierie, études techniques</li>
          </ul>
          <p className="mt-3"><strong>Contact :</strong> <a href="mailto:contact@enermys.fr" className="text-brand-orange hover:underline">contact@enermys.fr</a></p>
        </section>

        <section>
          <h2 className="font-heading font-black text-black text-2xl uppercase mb-4">Hébergement</h2>
          <ul className="space-y-1.5">
            <li><strong>Hébergeur :</strong> Vercel Inc.</li>
            <li><strong>Adresse :</strong> 440 N Barranca Ave #4133, Covina, CA 91723, États-Unis</li>
            <li><strong>Site :</strong> <a href="https://vercel.com" target="_blank" rel="noopener noreferrer" className="text-brand-orange hover:underline">vercel.com</a></li>
          </ul>
        </section>

        <section>
          <h2 className="font-heading font-black text-black text-2xl uppercase mb-4">Propriété intellectuelle</h2>
          <p>
            L'ensemble des contenus présents sur le site <strong>www.enermys.fr</strong> (textes, images, logos, graphismes, etc.) sont la propriété exclusive d'ENERMYS ou de leurs auteurs respectifs et sont protégés par les lois françaises et internationales relatives à la propriété intellectuelle.
          </p>
          <p className="mt-3">
            Toute reproduction, représentation, modification, publication ou adaptation de tout ou partie des éléments du site, quel que soit le moyen ou le procédé utilisé, est interdite sans autorisation écrite préalable d'ENERMYS.
          </p>
        </section>

        <section>
          <h2 className="font-heading font-black text-black text-2xl uppercase mb-4">Limitation de responsabilité</h2>
          <p>
            ENERMYS s'efforce d'assurer l'exactitude et la mise à jour des informations diffusées sur ce site. Toutefois, ENERMYS ne peut garantir l'exactitude, la précision ou l'exhaustivité des informations mises à disposition sur ce site et décline toute responsabilité pour toute imprécision, inexactitude ou omission.
          </p>
        </section>

        <section>
          <h2 className="font-heading font-black text-black text-2xl uppercase mb-4">Liens hypertextes</h2>
          <p>
            Le site <strong>www.enermys.fr</strong> peut contenir des liens vers d'autres sites internet. ENERMYS n'est pas responsable du contenu de ces sites externes et ne saurait être tenu responsable des dommages résultant de leur consultation.
          </p>
        </section>

        <section>
          <h2 className="font-heading font-black text-black text-2xl uppercase mb-4">Droit applicable</h2>
          <p>
            Les présentes mentions légales sont soumises au droit français. En cas de litige, les tribunaux français seront seuls compétents.
          </p>
        </section>

        <p className="text-xs text-black/30 pt-4 border-t border-black/10">
          Dernière mise à jour : mai 2026
        </p>
      </div>
    </main>
  )
}
