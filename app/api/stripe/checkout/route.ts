import { NextResponse } from 'next/server';
import { z } from 'zod';

const checkoutSchema = z.object({
  companyId: z.string().uuid(),
  email: z.string().email(),
  plan: z.enum(['solo', 'business']).default('solo'),
  returnUrl: z.string().url().optional(),
});

const stripePriceByPlan = {
  business: process.env.STRIPE_PRICE_BUSINESS,
  solo: process.env.STRIPE_PRICE_SOLO,
} as const;

const checkoutBaseUrl =
  process.env.NEXT_PUBLIC_CHECKOUT_BASE_URL?.replace(/\/$/, '') ||
  process.env.CHECKOUT_BASE_URL?.replace(/\/$/, '') ||
  'https://greenpilotpro.fr';

const defaultReturnUrl =
  process.env.NEXT_PUBLIC_WEB_DASHBOARD_URL?.trim() ||
  process.env.WEB_DASHBOARD_URL?.trim() ||
  'https://www.app.greenpilotpro.fr';

function resolveReturnUrl(value: string | undefined): string {
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

function missingConfigResponse(key: string) {
  return NextResponse.json(
    { error: `Configuration manquante: ${key}` },
    { status: 500 },
  );
}

async function parseCheckoutInput(request: Request) {
  const contentType = request.headers.get('content-type') || '';

  if (contentType.includes('application/json')) {
    return checkoutSchema.safeParse(await request.json());
  }

  const formData = await request.formData();
  return checkoutSchema.safeParse({
    companyId: formData.get('companyId'),
    email: formData.get('email'),
    plan: formData.get('plan') || 'solo',
    returnUrl: formData.get('returnUrl') || undefined,
  });
}

export async function POST(request: Request) {
  const parsed = await parseCheckoutInput(request);

  if (!parsed.success) {
    return NextResponse.json(
      { error: 'Paramètres d’abonnement invalides' },
      { status: 400 },
    );
  }

  const stripeSecretKey = process.env.STRIPE_SECRET_KEY;
  if (!stripeSecretKey) {
    return missingConfigResponse('STRIPE_SECRET_KEY');
  }

  const priceId = stripePriceByPlan[parsed.data.plan];
  if (!priceId) {
    return missingConfigResponse(
      parsed.data.plan === 'business' ? 'STRIPE_PRICE_BUSINESS' : 'STRIPE_PRICE_SOLO',
    );
  }

  const returnUrl = resolveReturnUrl(parsed.data.returnUrl);
  const encodedReturnUrl = encodeURIComponent(returnUrl);

  const body = new URLSearchParams({
    cancel_url: `${checkoutBaseUrl}/billing/cancel?returnUrl=${encodedReturnUrl}`,
    client_reference_id: parsed.data.companyId,
    customer_email: parsed.data.email,
    mode: 'subscription',
    success_url: `${checkoutBaseUrl}/billing/success?session_id={CHECKOUT_SESSION_ID}&returnUrl=${encodedReturnUrl}`,
    'line_items[0][price]': priceId,
    'line_items[0][quantity]': '1',
    'metadata[companyId]': parsed.data.companyId,
    'metadata[email]': parsed.data.email,
    'metadata[plan]': parsed.data.plan,
    'subscription_data[metadata][companyId]': parsed.data.companyId,
    'subscription_data[metadata][email]': parsed.data.email,
    'subscription_data[metadata][plan]': parsed.data.plan,
  });

  const response = await fetch('https://api.stripe.com/v1/checkout/sessions', {
    body,
    headers: {
      Authorization: `Bearer ${stripeSecretKey}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    method: 'POST',
  });

  const data = (await response.json()) as { error?: { message?: string }; url?: string };

  if (!response.ok || !data.url) {
    return NextResponse.json(
      { error: data.error?.message || 'Impossible de créer la session Stripe' },
      { status: 502 },
    );
  }

  return NextResponse.redirect(data.url, { status: 303 });
}
