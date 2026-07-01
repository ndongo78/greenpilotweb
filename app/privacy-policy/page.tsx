export const metadata = {
  title: "Politique de confidentialité – GreenPilot",
  description:
    "Politique de confidentialité de GreenPilot, application de gestion pour artisans, jardiniers et paysagistes.",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <section className="mx-auto max-w-4xl px-5 py-12 md:py-16">
        <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200 md:p-10">
          <p className="mb-3 text-sm font-medium text-emerald-700">
            Dernière mise à jour : 1 juillet 2026
          </p>

          <h1 className="mb-6 text-3xl font-bold tracking-tight text-slate-950 md:text-4xl">
            Politique de confidentialité – GreenPilot
          </h1>

          <div className="space-y-8 text-base leading-7 text-slate-700">
            <p>
              GreenPilot est une application de gestion destinée aux artisans,
              jardiniers, paysagistes et petites entreprises de services.
            </p>

            <p>
              La présente politique de confidentialité explique quelles données
              nous collectons, pourquoi nous les utilisons, comment elles sont
              protégées et quels sont vos droits.
            </p>

            <section>
              <h2 className="mb-3 text-xl font-semibold text-slate-950">
                1. Responsable du traitement
              </h2>
              <p>L’application GreenPilot est éditée par :</p>
              <p className="mt-3">
                <strong>ND Jardins & Paysages / GreenPilot</strong>
                <br />
                Contact :{" "}
                <a
                  href="mailto:support@greenpilotpro.fr"
                  className="font-medium text-emerald-700 underline"
                >
                  support@greenpilotpro.fr
                </a>
                <br />
                Site web :{" "}
                <a
                  href="https://www.greenpilotpro.fr"
                  className="font-medium text-emerald-700 underline"
                >
                  https://www.greenpilotpro.fr
                </a>
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-xl font-semibold text-slate-950">
                2. Données collectées
              </h2>

              <p>
                Lors de l’utilisation de GreenPilot, nous pouvons collecter les
                données suivantes :
              </p>

              <h3 className="mt-5 font-semibold text-slate-900">
                Données de compte utilisateur
              </h3>
              <ul className="mt-2 list-disc space-y-1 pl-6">
                <li>nom et prénom</li>
                <li>adresse email</li>
                <li>numéro de téléphone si renseigné</li>
                <li>nom de l’entreprise</li>
                <li>informations de connexion</li>
              </ul>

              <h3 className="mt-5 font-semibold text-slate-900">
                Données liées à l’activité professionnelle
              </h3>
              <ul className="mt-2 list-disc space-y-1 pl-6">
                <li>clients enregistrés dans l’application</li>
                <li>adresses de chantier</li>
                <li>numéros de téléphone et emails des clients</li>
                <li>interventions</li>
                <li>devis</li>
                <li>factures</li>
                <li>paiements</li>
                <li>dépenses</li>
                <li>rapports</li>
                <li>photos de chantier avant / après</li>
                <li>documents PDF générés</li>
              </ul>

              <h3 className="mt-5 font-semibold text-slate-900">
                Données techniques
              </h3>
              <ul className="mt-2 list-disc space-y-1 pl-6">
                <li>identifiant utilisateur</li>
                <li>données de connexion</li>
                <li>
                  informations nécessaires au bon fonctionnement de
                  l’application
                </li>
                <li>journaux techniques et erreurs éventuelles</li>
              </ul>
            </section>

            <section>
              <h2 className="mb-3 text-xl font-semibold text-slate-950">
                3. Utilisation des données
              </h2>
              <p>Les données collectées sont utilisées pour :</p>
              <ul className="mt-2 list-disc space-y-1 pl-6">
                <li>créer et gérer votre compte utilisateur</li>
                <li>permettre la gestion de vos clients</li>
                <li>créer des devis, factures, rapports et documents</li>
                <li>planifier et suivre vos interventions</li>
                <li>suivre les paiements et dépenses</li>
                <li>améliorer le fonctionnement de l’application</li>
                <li>assurer la sécurité du service</li>
                <li>répondre aux demandes de support</li>
              </ul>
              <p className="mt-4">
                Nous n’utilisons pas vos données personnelles pour les vendre à
                des tiers.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-xl font-semibold text-slate-950">
                4. Partage des données
              </h2>
              <p>
                Certaines données peuvent être traitées par des services
                techniques nécessaires au fonctionnement de GreenPilot, par
                exemple :
              </p>
              <ul className="mt-2 list-disc space-y-1 pl-6">
                <li>hébergement de l’application et de la base de données</li>
                <li>services d’authentification</li>
                <li>génération ou stockage de documents</li>
                <li>paiement en ligne si cette fonctionnalité est utilisée</li>
                <li>
                  outils techniques de suivi d’erreurs ou de performance
                </li>
              </ul>
              <p className="mt-4">
                Ces prestataires traitent les données uniquement dans le cadre
                du fonctionnement du service.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-xl font-semibold text-slate-950">
                5. Paiements
              </h2>
              <p>
                GreenPilot peut proposer des abonnements ou fonctionnalités
                payantes.
              </p>
              <p className="mt-4">
                Les paiements peuvent être traités par un prestataire de
                paiement sécurisé. GreenPilot ne stocke pas directement les
                informations complètes de carte bancaire.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-xl font-semibold text-slate-950">
                6. Photos et fichiers
              </h2>
              <p>
                L’utilisateur peut ajouter des photos de chantier ou générer des
                documents PDF.
              </p>
              <p className="mt-4">
                Ces fichiers sont utilisés uniquement pour permettre la gestion
                des chantiers, le suivi des interventions, la création de
                rapports et le partage avec les clients lorsque l’utilisateur le
                décide.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-xl font-semibold text-slate-950">
                7. Conservation des données
              </h2>
              <p>
                Les données sont conservées tant que le compte utilisateur est
                actif ou aussi longtemps que nécessaire pour fournir le service.
              </p>
              <p className="mt-4">
                L’utilisateur peut demander la suppression de son compte et de
                ses données en nous contactant à l’adresse suivante :{" "}
                <a
                  href="mailto:support@greenpilotpro.fr"
                  className="font-medium text-emerald-700 underline"
                >
                  support@greenpilotpro.fr
                </a>
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-xl font-semibold text-slate-950">
                8. Sécurité
              </h2>
              <p>
                Nous mettons en place des mesures techniques raisonnables pour
                protéger les données contre l’accès non autorisé, la perte, la
                modification ou la divulgation.
              </p>
              <p className="mt-4">
                Cependant, aucun système informatique ne peut garantir une
                sécurité absolue.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-xl font-semibold text-slate-950">
                9. Droits des utilisateurs
              </h2>
              <p>
                Conformément à la réglementation applicable, vous pouvez
                demander :
              </p>
              <ul className="mt-2 list-disc space-y-1 pl-6">
                <li>l’accès à vos données</li>
                <li>la rectification de vos données</li>
                <li>la suppression de vos données</li>
                <li>la limitation du traitement</li>
                <li>l’opposition au traitement</li>
                <li>la portabilité de vos données lorsque cela est applicable</li>
              </ul>
              <p className="mt-4">
                Pour exercer vos droits, vous pouvez nous contacter à :{" "}
                <a
                  href="mailto:support@greenpilotpro.fr"
                  className="font-medium text-emerald-700 underline"
                >
                  support@greenpilotpro.fr
                </a>
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-xl font-semibold text-slate-950">
                10. Suppression du compte
              </h2>
              <p>
                Si vous souhaitez supprimer votre compte GreenPilot, vous pouvez
                nous contacter à :{" "}
                <a
                  href="mailto:support@greenpilotpro.fr"
                  className="font-medium text-emerald-700 underline"
                >
                  support@greenpilotpro.fr
                </a>
              </p>
              <p className="mt-4">
                Votre demande sera traitée dans les meilleurs délais.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-xl font-semibold text-slate-950">
                11. Modifications
              </h2>
              <p>
                Cette politique de confidentialité peut être mise à jour afin de
                tenir compte des évolutions de GreenPilot, des obligations
                légales ou des services utilisés.
              </p>
              <p className="mt-4">
                La date de dernière mise à jour sera indiquée en haut de cette
                page.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-xl font-semibold text-slate-950">
                12. Contact
              </h2>
              <p>
                Pour toute question concernant cette politique de confidentialité
                ou l’utilisation de vos données, vous pouvez nous contacter :
              </p>
              <p className="mt-4">
                Email :{" "}
                <a
                  href="mailto:support@greenpilotpro.fr"
                  className="font-medium text-emerald-700 underline"
                >
                  support@greenpilotpro.fr
                </a>
                <br />
                Site web :{" "}
                <a
                  href="https://www.greenpilotpro.fr"
                  className="font-medium text-emerald-700 underline"
                >
                  https://www.greenpilotpro.fr
                </a>
              </p>
            </section>
          </div>
        </div>
      </section>
    </main>
  );
}