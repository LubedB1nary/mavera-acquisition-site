'use client';
import { Section, H2, Mono, BRAND, MONO, SANS, SERIF, Spec } from '../_lib/primitives';

export default function EmptyStatesSection() {
  return (
    <Section id="empty-states" label="30 — Empty States">
      <H2 italicTail="invitations.">Empty states &mdash; useful</H2>

      <div style={{
        padding: '64px 48px', borderRadius: 14,
        border: `1px solid ${BRAND.hairline}`, background: BRAND.surface1,
        textAlign: 'center', marginBottom: 32, position: 'relative', overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute', inset: 0,
          background: `radial-gradient(ellipse 600px 300px at 50% 30%, ${BRAND.goldDim}, transparent 60%)`,
          pointerEvents: 'none',
        }} />
        <div style={{ position: 'relative', zIndex: 2 }}>
          <div style={{
            width: 56, height: 56, margin: '0 auto 24px',
            borderRadius: 14, border: `1.5px solid ${BRAND.gold}`,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            opacity: 0.85,
          }}>
            <span style={{ fontFamily: SERIF, fontStyle: 'italic', fontSize: 28, color: BRAND.gold }}>M</span>
          </div>
          <h3 style={{
            fontFamily: SANS, fontSize: 24, fontWeight: 500, letterSpacing: '-0.02em',
            color: BRAND.text, marginBottom: 12, margin: '0 0 12px',
          }}>
            No outcomes <em style={{ fontFamily: SERIF, fontStyle: 'italic', fontWeight: 400, color: BRAND.gold }}>yet.</em>
          </h3>
          <p style={{
            fontSize: 14.5, fontWeight: 400, color: BRAND.textMed, lineHeight: 1.7,
            maxWidth: 420, margin: '0 auto 28px',
          }}>
            Hand Maven a goal &mdash; "close 12 enterprise meetings", "audit our Q2 narrative" &mdash; and she&rsquo;ll plan the work, run it on cadence, and report back.
          </p>
          <button style={{
            padding: '12px 22px', borderRadius: 8,
            background: BRAND.gold, color: BRAND.bg,
            fontSize: 14, fontWeight: 500, border: 'none', fontFamily: SANS,
          }}>Spawn your first outcome</button>
        </div>
      </div>

      <Mono label="Anatomy" />
      <Spec rows={[
        ['surface',         'card variant · 64px vertical padding · radial gold-glow bg layer'],
        ['icon',            '56px · 1.5px gold border · serif italic letter or single Lucide glyph'],
        ['headline',        '24 · weight 500 · with optional italic-serif accent on the noun'],
        ['body',            '14.5 · weight 400 · max 420px · explains what to do and what will happen'],
        ['primary CTA',     'always present · single primary button · matches the next-action verb'],
        ['secondary',       'optional · ghost link below the primary · "See how it works ↗"'],
      ]} />

      <div style={{
        marginTop: 24, padding: '20px 24px', borderRadius: 12,
        border: `1px solid ${BRAND.hairline}`, background: BRAND.surface1,
      }}>
        <p style={{
          fontFamily: MONO, fontSize: 10, color: BRAND.textDim,
          letterSpacing: '0.13em', textTransform: 'uppercase', marginBottom: 12, margin: '0 0 12px',
        }}>Empty-state principles</p>
        <p style={{ fontSize: 13, fontWeight: 400, color: BRAND.textMed, lineHeight: 1.75, margin: 0 }}>
          Empty is a teaching moment, not a failure. Every empty state names the next
          concrete action and explains the outcome of taking it. Never use generic
          stock illustrations. Never say &ldquo;Nothing to see here.&rdquo; The first
          interaction in a feature is the most important type-setting moment we have.
        </p>
      </div>
    </Section>
  );
}
