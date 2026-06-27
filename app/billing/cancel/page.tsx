import Link from 'next/link';
import { Container } from '@/components/common/Container';
import { registerUrl } from '@/src/constants/brand';

export default function BillingCancelPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-green-50 to-white py-12">
      <Container className="max-w-2xl text-center">
        <div className="rounded-2xl border border-gray-200 bg-white px-6 py-10 shadow-xl shadow-green-900/10">
          <p className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-gray-100 text-2xl font-bold text-gray-500">
            ×
          </p>
          <h1 className="mt-6 text-3xl font-bold text-gray-900">Paiement annulé</h1>
          <p className="mt-4 text-gray-600">
            Aucun paiement n’a été enregistré. Vous pouvez reprendre l’abonnement depuis
            GreenPilot quand vous êtes prêt.
          </p>
          <Link
            href={registerUrl.replace('/register', '/login')}
            className="mt-8 inline-flex items-center justify-center rounded-xl border-2 border-green-600 bg-white px-6 py-3 font-semibold text-green-700 transition-colors hover:bg-green-50"
          >
            Retour à GreenPilot
          </Link>
        </div>
      </Container>
    </main>
  );
}
