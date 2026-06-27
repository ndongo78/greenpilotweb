import Image from 'next/image';
import Link from 'next/link';
import { Container } from '@/components/common/Container';
import { appName } from '@/src/constants/brand';

type SubscribePageProps = {
  searchParams: Promise<{
    companyId?: string;
    email?: string;
    plan?: string;
  }>;
};

const planLabels = {
  business: {
    label: 'Business',
    price: '24,99 € / mois',
    summary: 'Pour les PME du paysage avec équipe, rôles et planning collaboratif.',
  },
  solo: {
    label: 'Solo',
    price: '9,99 € / mois',
    summary: 'Pour les jardiniers, paysagistes et auto-entrepreneurs qui travaillent seuls.',
  },
} as const;

function normalizePlan(plan: string | undefined): keyof typeof planLabels {
  return plan === 'business' ? 'business' : 'solo';
}

export default async function SubscribePage({ searchParams }: SubscribePageProps) {
  const params = await searchParams;
  const plan = normalizePlan(params.plan);
  const selectedPlan = planLabels[plan];
  const canSubscribe = Boolean(params.companyId && params.email);

  return (
    <main className="min-h-screen bg-gradient-to-b from-green-50 to-white py-8 sm:py-12">
      <Container className="max-w-3xl">
        <Link href="/" className="inline-flex items-center gap-2.5">
          <Image
            src="/logo.png"
            alt={`${appName} logo`}
            width={36}
            height={36}
            className="rounded-lg"
            priority
          />
          <span className="text-xl font-bold text-gray-900">{appName}</span>
        </Link>

        <section className="mt-10 overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-xl shadow-green-900/10">
          <div className="border-b border-gray-100 bg-green-50/70 px-6 py-5 sm:px-8">
            <p className="text-sm font-semibold uppercase tracking-wide text-green-700">
              Activation abonnement
            </p>
            <h1 className="mt-2 text-3xl font-bold text-gray-900">
              Continuer avec l’offre {selectedPlan.label}
            </h1>
            <p className="mt-3 text-gray-600">{selectedPlan.summary}</p>
          </div>

          <div className="px-6 py-6 sm:px-8">
            <div className="rounded-xl border border-green-100 bg-green-50 p-5">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <h2 className="text-lg font-bold text-gray-900">{selectedPlan.label}</h2>
                  <p className="mt-1 text-sm text-gray-600">
                    Paiement sécurisé par Stripe. Votre compte sera activé après validation du
                    paiement.
                  </p>
                </div>
                <p className="text-2xl font-bold text-green-700">{selectedPlan.price}</p>
              </div>
            </div>

            {canSubscribe ? (
              <form action="/api/stripe/checkout" method="post" className="mt-6">
                <input type="hidden" name="companyId" value={params.companyId} />
                <input type="hidden" name="email" value={params.email} />
                <input type="hidden" name="plan" value={plan} />
                <button
                  type="submit"
                  className="inline-flex w-full items-center justify-center rounded-xl bg-green-600 px-6 py-3.5 text-base font-semibold text-white shadow-sm shadow-green-600/20 transition-colors hover:bg-green-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-600 focus-visible:ring-offset-2"
                >
                  Aller au paiement
                </button>
              </form>
            ) : (
              <div className="mt-6 rounded-xl border border-red-100 bg-red-50 px-4 py-3 text-sm text-red-700">
                Paramètres manquants. Retournez dans GreenPilot puis cliquez à nouveau sur
                S’abonner.
              </div>
            )}

            <p className="mt-5 text-center text-sm text-gray-500">
              Vous pourrez revenir dans l’application après le paiement. Le statut sera mis à jour
              automatiquement.
            </p>
          </div>
        </section>
      </Container>
    </main>
  );
}
