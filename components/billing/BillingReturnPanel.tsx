'use client';

import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { useEffect, useMemo } from 'react';

type BillingReturnPanelProps = {
  buttonVariant: 'primary' | 'secondary';
  message: string;
  status: 'cancel' | 'success';
  title: string;
};

const defaultReturnUrl = 'https://www.app.greenpilotpro.fr';

function safeReturnUrl(value: string | null): string {
  if (!value) {
    return defaultReturnUrl;
  }

  try {
    const url = new URL(value);
    if (url.protocol === 'nd-jardins-manager:' || url.protocol === 'https:') {
      return value;
    }
  } catch {
    return defaultReturnUrl;
  }

  return defaultReturnUrl;
}

export function BillingReturnPanel({
  buttonVariant,
  message,
  status,
  title,
}: BillingReturnPanelProps) {
  const searchParams = useSearchParams();
  const returnUrl = useMemo(
    () => safeReturnUrl(searchParams.get('returnUrl')),
    [searchParams],
  );

  useEffect(() => {
    if (status !== 'success') {
      return;
    }

    const timeout = window.setTimeout(() => {
      window.location.href = returnUrl;
    }, 1800);

    return () => window.clearTimeout(timeout);
  }, [returnUrl, status]);

  const buttonClasses =
    buttonVariant === 'primary'
      ? 'bg-green-600 text-white hover:bg-green-700'
      : 'border-2 border-green-600 bg-white text-green-700 hover:bg-green-50';

  return (
    <div className="rounded-2xl border border-gray-200 bg-white px-6 py-10 text-center shadow-xl shadow-green-900/10">
      <p
        className={`mx-auto flex h-12 w-12 items-center justify-center rounded-full text-2xl font-bold ${
          status === 'success'
            ? 'bg-green-100 text-green-700'
            : 'bg-gray-100 text-gray-500'
        }`}
      >
        {status === 'success' ? '✓' : '×'}
      </p>
      <h1 className="mt-6 text-3xl font-bold text-gray-900">{title}</h1>
      <p className="mt-4 text-gray-600">{message}</p>
      {status === 'success' ? (
        <p className="mt-3 text-sm text-gray-500">
          Redirection automatique vers GreenPilot…
        </p>
      ) : null}
      <Link
        href={returnUrl}
        className={`mt-8 inline-flex items-center justify-center rounded-xl px-6 py-3 font-semibold transition-colors ${buttonClasses}`}
      >
        Retour à GreenPilot
      </Link>
    </div>
  );
}
