import type { Metadata } from 'next';
import './globals.css';
import { appDescription, appName } from '@/src/constants/brand';

export const metadata: Metadata = {
  title: appName,
  description: appDescription,
  icons: {
    icon: '/favicon.svg',
  },
  openGraph: {
    title: appName,
    description: appDescription,
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body className="min-h-screen bg-white font-sans text-gray-900 antialiased">
        {children}
      </body>
    </html>
  );
}
