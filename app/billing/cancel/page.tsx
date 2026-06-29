import { Suspense } from 'react';
import { BillingReturnPanel } from '@/components/billing/BillingReturnPanel';
import { Container } from '@/components/common/Container';

export default function BillingCancelPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-green-50 to-white py-12">
      <Container className="max-w-2xl">
        <Suspense>
          <BillingReturnPanel
            buttonVariant="secondary"
            message="Aucun paiement n’a été enregistré. Vous pouvez reprendre l’abonnement depuis GreenPilot quand vous êtes prêt."
            status="cancel"
            title="Paiement annulé"
          />
        </Suspense>
      </Container>
    </main>
  );
}
