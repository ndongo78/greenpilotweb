import { Suspense } from 'react';
import { BillingReturnPanel } from '@/components/billing/BillingReturnPanel';
import { Container } from '@/components/common/Container';

export default function BillingSuccessPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-green-50 to-white py-12">
      <Container className="max-w-2xl">
        <Suspense>
          <BillingReturnPanel
            buttonVariant="primary"
            message="Merci. Votre abonnement GreenPilot est en cours d’activation. Vous allez être redirigé vers votre espace."
            status="success"
            title="Paiement validé"
          />
        </Suspense>
      </Container>
    </main>
  );
}
