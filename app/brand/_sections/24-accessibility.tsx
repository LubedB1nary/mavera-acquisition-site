'use client';
import { Section, H2, BRAND, MONO, Spec, DoDont } from '../_lib/primitives';

export default function AccessibilitySection() {
  return (
    <Section id="accessibility" label="24 — Accessibility">
      <H2 italicTail="default.">Accessibility &mdash; on by</H2>

      <p style={{ fontSize: 14, fontWeight: 400, color: BRAND.textLow, lineHeight: 1.75, maxWidth: 620, marginBottom: 36 }}>
        Mavera ships dark-first, but every interactive element clears WCAG 2.1 AA in
        the dark theme by default. The text-opacity ladder is calibrated to that bar:
        a colorimetric audit of every level against the four ink layers exists in the
        contributing notes (sec. 50). When you add a new component, run the audit.
      </p>

      <Spec rows={[
        ['Body text contrast',     '≥ 4.5:1 against the deepest surface it sits on'],
        ['Eyebrow / muted',        '≥ 3:1 — never below; if it dips, raise opacity'],
        ['Interactive contrast',   '≥ 3:1 between resting border and bg'],
        ['Focus ring',             'Always visible · 0 0 0 3px gold@18% · :focus-visible only'],
        ['Touch target',           '≥ 44 × 44 CSS px on every clickable element'],
        ['Hit slop',               'Buttons & icons grow padding before they shrink type'],
        ['Motion',                 'prefers-reduced-motion disables all decorative loops'],
        ['Color independence',     'Status carries a label / icon — never color alone'],
        ['Heading order',          'No skipping · h1 once per page · h2 marks section · h3 marks panel'],
        ['Form labels',            'Always present · placeholder is never the label · errors live below'],
        ['Live regions',           'Toasts use role="status" · alerts use role="alert"'],
        ['Lang attribute',         '<html lang="en"> set in app/layout.tsx'],
        ['Skip link',              'First focus stop on every page · jumps to main content'],
        ['Image alts',             'Decorative imagery uses alt="" · semantic uses descriptive alt'],
      ]} />

      <DoDont items={[
        { do: true,  title: 'Pair color with shape or label',  note: 'Status uses an icon and tinted text — never tinted text alone. Charts label every series.' },
        { do: true,  title: 'Trap focus in modals + drawers',   note: 'On open, focus first interactive child. ESC closes. Return focus to the trigger on close.' },
        { do: true,  title: 'Use semantic HTML first',          note: '<button> for actions, <a> for navigation, <ul> for lists. ARIA is a fallback, not a starting point.' },
        { do: false, title: 'Never set tabindex > 0',           note: 'Positive tabindex breaks natural tab order. Use 0 for opt-in, −1 for programmatic-only.' },
        { do: false, title: 'Never disable browser zoom',       note: 'No user-scalable=no on viewport. Type scales need to remain usable up to 200%.' },
        { do: false, title: 'Never communicate state with motion alone', note: 'A spinner with no label is opaque to screen readers. Pair with aria-busy and a text status.' },
      ]} />

      <div style={{
        marginTop: 24, padding: '20px 24px', borderRadius: 12,
        border: `1px solid ${BRAND.hairline}`, background: BRAND.surface1,
      }}>
        <p style={{
          fontFamily: MONO, fontSize: 10, color: BRAND.textDim,
          letterSpacing: '0.13em', textTransform: 'uppercase', marginBottom: 12, margin: '0 0 12px',
        }}>Audit checklist · before merge</p>
        <ol style={{ paddingLeft: 18, margin: 0, color: BRAND.textMed, fontSize: 13, lineHeight: 1.85 }}>
          <li>Tab from page start &mdash; every interactive element receives focus, in visual order.</li>
          <li>Run axe (DevTools or CLI). Zero serious / critical issues.</li>
          <li>Toggle <span style={{ fontFamily: MONO, color: BRAND.gold }}>prefers-reduced-motion: reduce</span> &mdash; all decorative motion stops.</li>
          <li>Resize to 320px wide &mdash; no horizontal scroll. Resize browser zoom to 200% &mdash; nothing clipped.</li>
          <li>Read every label, error, and live region aloud with VoiceOver. The journey makes sense.</li>
        </ol>
      </div>
    </Section>
  );
}
