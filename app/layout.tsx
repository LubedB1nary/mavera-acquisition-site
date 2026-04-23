import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Mavera — Autonomous Intelligence for Growth',
  description: 'Autonomous agents that turn live market signals into growth — with an evidence chain on every decision.',
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
