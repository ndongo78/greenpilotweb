export const metadata = {
  title: "Suppression de compte – GreenPilot",
  description:
    "Demander la suppression de votre compte GreenPilot et des données associées.",
};

export default function DeleteAccountPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <section className="mx-auto max-w-3xl px-5 py-12 md:py-16">
        <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200 md:p-10">
          <p className="mb-3 text-sm font-medium text-emerald-700">
            GreenPilot
          </p>

          <h1 className="mb-6 text-3xl font-bold tracking-tight text-slate-950 md:text-4xl">
            Demande de suppression de compte
          </h1>

          <div className="space-y-6 text-base leading-7 text-slate-700">
            <p>
              Vous pouvez demander la suppression de votre compte GreenPilot et
              des données associées à tout moment.
            </p>

            <section>
              <h2 className="mb-3 text-xl font-semibold text-slate-950">
                Données supprimées
              </h2>
              <p>
                La suppression du compte peut entraîner la suppression des
                données liées à votre compte, notamment :
              </p>

              <ul className="mt-3 list-disc space-y-1 pl-6">
                <li>informations du compte utilisateur</li>
                <li>clients enregistrés</li>
                <li>interventions</li>
                <li>devis et factures</li>
                <li>paiements et dépenses</li>
                <li>rapports</li>
                <li>photos de chantier</li>
                <li>documents générés</li>
              </ul>
            </section>

            <section>
              <h2 className="mb-3 text-xl font-semibold text-slate-950">
                Comment faire la demande ?
              </h2>

              <p>
                Pour demander la suppression de votre compte, envoyez un email à :
              </p>

              <p className="mt-4 rounded-2xl bg-slate-50 p-4 text-slate-900 ring-1 ring-slate-200">
                <a
                  href="mailto:support@greenpilotpro.fr?subject=Demande%20de%20suppression%20de%20compte%20GreenPilot"
                  className="font-semibold text-emerald-700 underline"
                >
                  support@greenpilotpro.fr
                </a>
              </p>

              <p>
                Merci d’utiliser l’adresse email associée à votre compte
                GreenPilot afin que nous puissions identifier votre compte.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-xl font-semibold text-slate-950">
                Délai de traitement
              </h2>

              <p>
                Votre demande sera traitée dans les meilleurs délais. Une
                confirmation pourra vous être envoyée une fois la suppression
                effectuée.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-xl font-semibold text-slate-950">
                Données conservées
              </h2>

              <p>
                Certaines données peuvent être conservées temporairement si cela
                est nécessaire pour respecter des obligations légales,
                comptables, fiscales, de sécurité ou de prévention de la fraude.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-xl font-semibold text-slate-950">
                Contact
              </h2>

              <p>
                Pour toute question concernant la suppression de compte ou vos
                données personnelles, vous pouvez nous contacter à :
              </p>

              <p className="mt-4">
                <a
                  href="mailto:support@greenpilotpro.fr"
                  className="font-semibold text-emerald-700 underline"
                >
                  support@greenpilotpro.fr
                </a>
              </p>
            </section>
          </div>
        </div>
      </section>
    </main>
  );
}