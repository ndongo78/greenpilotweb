import Link from 'next/link';
import { Container } from '@/components/common/Container';
import { registerUrl } from '@/src/constants/brand';

export default function BillingSuccessPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-green-50 to-white py-12">
      <Container className="max-w-2xl text-center">
        <div className="rounded-2xl border border-green-100 bg-white px-6 py-10 shadow-xl shadow-green-900/10">
          <p className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-100 text-2xl font-bold text-green-700">
            ✓
          </p>
          <h1 className="mt-6 text-3xl font-bold text-gray-900">Paiement validé</h1>
          <p className="mt-4 text-gray-600">
            Merci. Votre abonnement GreenPilot est en cours d’activation. Vous pouvez retourner
            dans l’application et actualiser votre compte.
          </p>
          <Link
            href={registerUrl.replace('/register', '/login')}
            className="mt-8 inline-flex items-center justify-center rounded-xl bg-green-600 px-6 py-3 font-semibold text-white transition-colors hover:bg-green-700"
          >
            Retour à GreenPilot
          </Link>
        </div>
      </Container>
    </main>
  );
}
