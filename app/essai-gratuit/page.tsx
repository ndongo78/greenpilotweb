import { Suspense } from 'react';
import { TrialSignupFlow } from '@/components/trial/TrialSignupFlow';

export default function FreeTrialPage() {
  return (
    <Suspense>
      <TrialSignupFlow />
    </Suspense>
  );
}
