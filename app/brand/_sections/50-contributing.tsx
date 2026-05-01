'use client';
import { Section, H2, Mono, BRAND, MONO } from '../_lib/primitives';

const STEPS = [
  { n: '1', t: 'Identify the gap',           d: 'Search this document first. Many "new" patterns are renames of an existing one. Two patterns describing the same thing is a bigger problem than no documentation.' },
  { n: '2', t: 'Write the spec first',        d: 'Draft the rule in prose before building it. A pattern that can\'t be written clearly in two sentences isn\'t ready to ship.' },
  { n: '3', t: 'Build the demo in this doc',  d: 'Add a live JSX demo using the same primitives the rest of the doc uses (Section / H2 / Mono / Spec / DoDont). No external CSS, no Tailwind classes — the doc is the spec.' },
  { n: '4', t: 'Add to NAV_ITEMS',            d: 'Sequential numbering only. Never renumber. New section gets the next integer. Update _lib/nav.ts and add the matching _sections/{NN-slug}.tsx file.' },
  { n: '5', t: 'Update the cover badge',      d: 'The cover renders ["Version", "Month YEAR", "Dark-first", "{N} Sections"]. The footer echoes "{N} Sections". Both must equal NAV_ITEMS.length.' },
  { n: '6', t: 'Get sign-off',                d: 'Visual changes — color values, spacing, type sizes, motion durations — require a designer signoff. Token renames require a changelog entry below.' },
];

const VERSIONS = [
  { v: 'v1.0', date: 'April 2026', note: 'Initial release. 50 sections covering identity through handoff. Adapted from the foundation laid in mavera-landing-new.' },
  { v: 'v0.9', date: 'April 2026', note: 'Internal review draft. Acquisition-site tokens applied (gold accent, ink scale, italic-serif accent pattern).' },
];

const OWNERS = [
  { role: 'Lead Designer',  resp: 'Final sign-off on visual changes. Token additions / renames. Quarterly audit of every section against shipped product.' },
  { role: 'Frontend Lead',  resp: 'CSS-token-to-React mapping. Component API stability. Ensures every spec in this doc is reachable from a primitive.' },
  { role: 'Brand / Copy',   resp: 'Voice & Copy sections. Product copywriting examples. Marketing patterns. Reviews every italic-serif accent before merge.' },
];

export default function ContributingSection() {
  return (
    <Section id="contributing" label="50 — Contributing & Handoff">
      <H2 italicTail="document.">Contributing to this</H2>

      <p style={{ fontSize: 14, fontWeight: 400, color: BRAND.textLow, lineHeight: 1.75, maxWidth: 620, marginBottom: 36 }}>
        This document is a living spec maintained at <span style={{ fontFamily: MONO, color: BRAND.gold }}>/app/brand/page.tsx</span>.
        It is the single source of truth for Mavera&rsquo;s design system.
        Every component referenced in it ships in <span style={{ fontFamily: MONO, color: BRAND.gold }}>/components/</span>.
        Drift between the two is a bug; the doc wins.
      </p>

      <Mono label="Contribution process" />
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginBottom: 32 }}>
        {STEPS.map(s => (
          <div key={s.n} style={{
            display: 'flex', gap: 18, padding: '18px 22px', borderRadius: 10,
            border: `1px solid ${BRAND.hairline}`, background: BRAND.surface1,
          }}>
            <span style={{
              fontFamily: MONO, fontSize: 14, color: BRAND.gold,
              flexShrink: 0, width: 22, textAlign: 'right',
            }}>{s.n}</span>
            <div>
              <p style={{ fontSize: 13.5, fontWeight: 500, color: BRAND.textHigh, marginBottom: 6, margin: '0 0 6px' }}>{s.t}</p>
              <p style={{ fontSize: 12.5, fontWeight: 400, color: BRAND.textLow, lineHeight: 1.7, margin: 0 }}>{s.d}</p>
            </div>
          </div>
        ))}
      </div>

      <Mono label="Figma handoff" />
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 8, marginBottom: 32 }}>
        {[
          { t: 'Component library', d: 'Every primitive in this doc has a Figma component named identically (Section, ClosingCTA, AgentSubPage, etc.).' },
          { t: 'Token sync',        d: 'Figma variables map 1:1 to CSS tokens — the names match: --gold ↔ "accent/gold". A weekly sync job catches drift.' },
          { t: 'Handoff checklist', d: 'Before handing a frame to engineering: every fill is a token, every text is a defined style, every component is undetached unless spec\'d.' },
        ].map(f => (
          <div key={f.t} style={{
            padding: 18, borderRadius: 10,
            border: `1px solid ${BRAND.hairline}`, background: BRAND.surface1,
          }}>
            <p style={{ fontSize: 13, fontWeight: 500, color: BRAND.textHigh, marginBottom: 8, margin: '0 0 8px' }}>{f.t}</p>
            <p style={{ fontSize: 11.5, fontWeight: 400, color: BRAND.textLow, lineHeight: 1.7, margin: 0 }}>{f.d}</p>
          </div>
        ))}
      </div>

      <Mono label="Version history" />
      <div style={{ display: 'flex', flexDirection: 'column', gap: 6, marginBottom: 32 }}>
        {VERSIONS.map(v => (
          <div key={v.v} style={{
            display: 'grid', gridTemplateColumns: '60px 110px 1fr',
            alignItems: 'center', padding: '12px 16px', borderRadius: 8,
            border: `1px solid ${BRAND.hairline}`, gap: 16, background: BRAND.surface1,
          }}>
            <p style={{ fontFamily: MONO, fontSize: 11, color: BRAND.gold, margin: 0 }}>{v.v}</p>
            <p style={{ fontFamily: MONO, fontSize: 10, color: BRAND.textLow, margin: 0 }}>{v.date}</p>
            <p style={{ fontSize: 12.5, fontWeight: 400, color: BRAND.textMed, lineHeight: 1.5, margin: 0 }}>{v.note}</p>
          </div>
        ))}
      </div>

      <Mono label="Document owners" />
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 8 }}>
        {OWNERS.map(o => (
          <div key={o.role} style={{
            padding: '18px 20px', borderRadius: 10,
            border: `1px solid ${BRAND.hairline}`, background: BRAND.surface1,
          }}>
            <p style={{
              fontFamily: MONO, fontSize: 10, color: BRAND.gold,
              letterSpacing: '0.10em', textTransform: 'uppercase', marginBottom: 10, margin: '0 0 10px',
            }}>{o.role}</p>
            <p style={{ fontSize: 12, fontWeight: 400, color: BRAND.textMed, lineHeight: 1.65, margin: 0 }}>{o.resp}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
