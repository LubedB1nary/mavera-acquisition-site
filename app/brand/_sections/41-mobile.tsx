'use client';
import { Section, H2, BRAND, MONO, Spec, DoDont } from '../_lib/primitives';

export default function MobileSection() {
  return (
    <Section id="mobile" label="41 — Mobile Patterns">
      <H2 italicTail="thumbs.">Mobile &mdash; built for</H2>

      <Spec rows={[
        ['min target',        '44 × 44 CSS px on every interactive element'],
        ['gutter (sm)',       '20px — tight enough to keep a 13.5 lede readable on 360w'],
        ['nav (sm)',          'Logo + hamburger only · CTAs collapse into the sheet'],
        ['nav sheet',         'Full-screen · slides from right · same blur(22px) backdrop'],
        ['hero (sm)',         'h1 88 → 44 · maintain −0.035em tracking · headline lines never < 2'],
        ['stat bar (sm)',     '4 stats wrap to 2×2 · count-up still fires · top border preserved'],
        ['CTA row (sm)',      'Stacks vertically · primary first · full-width buttons (radius unchanged)'],
        ['cards (sm)',        'Single column · gap drops to 12px · hover lift becomes active state'],
        ['table (sm)',        'Stacks each row vertically · cell labels prefix in MONO uppercase'],
        ['modal (sm)',        'Becomes a bottom-sheet · slides up · 24px top inset · 90vh max-height'],
        ['dropdown (sm)',     'Same bottom-sheet treatment · scrolls inside · sticky actions footer'],
        ['toasts (sm)',       'Bottom-center · 92vw width · same auto-dismiss timing'],
        ['focus group demo',  'Stacks · personas list scrolls horizontally with snap-points'],
      ]} />

      <DoDont items={[
        { do: true,  title: 'Increase tap targets, not type',     note: 'If a button feels small, add padding before changing the type size. Type stays predictable.' },
        { do: true,  title: 'Use position: sticky for primary CTA', note: 'On long forms or pricing pages, the primary CTA sticks to the bottom inside a translucent strip.' },
        { do: true,  title: 'Test with thumbs, not fingers',      note: 'The thumb arc covers the bottom 60% of the screen. Place destructive actions OUT of the arc.' },
        { do: false, title: 'Never disable native scroll',        note: 'No bounce-locking, no overscroll preventions, no scroll-jacking. iOS users will revolt.' },
        { do: false, title: 'Never trigger on hover only',        note: 'Hover-only menus (mega-nav) collapse to taps with explicit chevrons on small screens.' },
        { do: false, title: 'Never use viewport-fixed pseudo-modals', note: 'Use real <dialog> or focus-trapped portals. Fixed positioning fights iOS Safari URL bar.' },
      ]} />
    </Section>
  );
}
