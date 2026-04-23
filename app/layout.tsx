import type { Metadata } from 'next';
import './globals.css';
import { ModeProvider } from '@/components/mode-context';

export const metadata: Metadata = {
  title: 'Mavera — Autonomous Intelligence for Growth',
  description: 'Autonomous agents that turn live market signals into growth — with an evidence chain on every decision.',
};

// Runs synchronously in <head> before hydration so the data-mode attribute is
// in place when CSS first paints — no flash of the wrong mode.
const NO_FLASH_SCRIPT = `
try {
  var m = localStorage.getItem('mav-mode');
  if (m !== 'ascii' && m !== 'classic') m = 'classic';
  document.documentElement.setAttribute('data-mode', m);
} catch (e) {
  document.documentElement.setAttribute('data-mode', 'classic');
}
`.trim();

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <script dangerouslySetInnerHTML={{ __html: NO_FLASH_SCRIPT }} />
      </head>
      <body>
        <ModeProvider>{children}</ModeProvider>
      </body>
    </html>
  );
}
