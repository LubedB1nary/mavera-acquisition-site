import type { Metadata, Viewport } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: {
    default: 'Mavera — Autonomous agents. Human intelligence. Evidence on every decision.',
    template: '%s · Mavera',
  },
  description:
    'Maven runs the full growth cycle — sales, research, content, meetings — so you close the deal. Every action is logged. Every source is cited.',
  applicationName: 'Mavera',
  authors: [{ name: 'Mavera, Inc.' }],
  metadataBase: new URL('https://mavera.io'),
  openGraph: {
    title: 'Mavera — Autonomous agents. Human intelligence. Evidence on every decision.',
    description:
      'Maven runs the full growth cycle so you close the deal. Every action is logged. Every source is cited.',
    siteName: 'Mavera',
    url: 'https://mavera.io',
    type: 'website',
    images: [{ url: '/mavera-logo.webp', width: 2048, height: 1895, alt: 'Mavera' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mavera — Autonomous agents. Human intelligence. Evidence on every decision.',
    description:
      'Maven runs the full growth cycle so you close the deal. Every action is logged. Every source is cited.',
    images: ['/mavera-logo.webp'],
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: '#07080a',
  colorScheme: 'dark',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body>{children}</body>
    </html>
  );
}
