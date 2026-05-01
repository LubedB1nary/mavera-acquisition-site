'use client';
import { Section, H2, Mono, BRAND, MONO, Pre, Spec } from '../_lib/primitives';

export default function PrintSection() {
  return (
    <Section id="print" label="49 — Print Styles">
      <H2 italicTail="paper.">Print &mdash; ink on</H2>

      <p style={{ fontSize: 14, fontWeight: 400, color: BRAND.textLow, lineHeight: 1.75, maxWidth: 620, marginBottom: 32 }}>
        Mavera reports and this brand book both support print-to-PDF. The print
        stylesheet inverts the canvas to white-on-near-black-text (ink on paper,
        not paper on ink), removes navigation chrome, and tightens layout for
        A4 / Letter output. The "Export PDF" button in the sidebar triggers the
        browser print dialog with the right defaults.
      </p>

      <Mono label="Print CSS · the canonical block" />
      <Pre>{`@media print {
  /* Remove all chrome */
  .no-print { display: none !important; }

  /* Reset layout for print */
  .brand-content { margin-left: 0 !important; }

  /* Ink on paper */
  body {
    background: #ffffff !important;
    color: #1a1a1a !important;
  }

  /* Force backgrounds */
  *, *::before, *::after {
    -webkit-print-color-adjust: exact !important;
    print-color-adjust: exact !important;
  }

  /* Page breaks */
  section          { page-break-inside: avoid; break-inside: avoid; }
  h1, h2, h3       { page-break-after:  avoid; break-after:  avoid; }
  pre              { page-break-inside: avoid; white-space: pre-wrap; }

  /* Page geometry */
  @page {
    size: A4;
    margin: 18mm 16mm 14mm;
  }
}`}</Pre>

      <Mono label="Print spec" />
      <Spec rows={[
        ['page size',        'A4 (210 × 297mm) · margin 18mm top · 16mm sides · 14mm bottom'],
        ['canvas',           '#ffffff (white)'],
        ['body color',       '#1a1a1a (near-black for legibility)'],
        ['hidden elements',  '.no-print class — sidebar · export controls · sticky chrome'],
        ['page breaks',      'page-break-inside: avoid on every <section> · same on h1/h2/h3'],
        ['code blocks',      'Light gray bg (#f6f4ee) · MONO preserved · whitespace pre-wrap'],
        ['inline links',     'Show URL via content: " (" attr(href) ")" — auditable on paper'],
        ['document footer',  '@page bottom margin · MONO 9 · "Mavera · v1.0 · {section count}"'],
        ['images',           'max-width 100% · invert filter removed (logo prints native dark)'],
        ['accent color',     'gold #c8a8ff prints as a violet — that\'s expected · still readable'],
      ]} />

      <Mono label="Print trigger UX" />
      <Pre>{`function printDoc() {
  setExporting(true);
  setTimeout(() => {
    window.print();
    const restore = () => {
      setExporting(false);
      window.removeEventListener('afterprint', restore);
    };
    window.addEventListener('afterprint', restore);
    setTimeout(() => setExporting(false), 4000);  // safety fallback
  }, 150);  // let the button label flip first
}`}</Pre>
    </Section>
  );
}
