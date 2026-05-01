'use client';
import { Section, H2, Mono, BRAND, MONO, SANS, Spec } from '../_lib/primitives';

export default function PricingSection() {
  return (
    <Section id="pricing" label="43 — Pricing & Plans UI">
      <H2 italicTail="ladder.">Pricing &mdash; the four-tier</H2>

      <div style={{
        display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 12, marginBottom: 32,
      }}>
        {[
          { name: 'Starter',      price: '$300',   credits: '500 / mo',  popular: false },
          { name: 'Basic Agency', price: '$2,000', credits: '5,000 / mo',popular: false },
          { name: 'Professional', price: '$3,500', credits: '10,000 / mo', popular: true },
          { name: 'Enterprise',   price: 'Custom', credits: 'Custom',    popular: false },
        ].map(t => (
          <div key={t.name} style={{
            position: 'relative', padding: 24, borderRadius: 14,
            background: t.popular ? BRAND.surface2 : BRAND.surface1,
            border: `1px solid ${t.popular ? BRAND.gold : BRAND.hairline}`,
          }}>
            {t.popular && (
              <span style={{
                position: 'absolute', top: 14, right: 14,
                fontFamily: MONO, fontSize: 9.5, color: BRAND.gold,
                letterSpacing: '0.10em', textTransform: 'uppercase',
              }}>Most Popular</span>
            )}
            <p style={{
              fontFamily: MONO, fontSize: 10, color: BRAND.textDim,
              letterSpacing: '0.13em', textTransform: 'uppercase', marginBottom: 14, margin: '0 0 14px',
            }}>{t.name}</p>
            <p style={{
              fontFamily: SANS, fontSize: 36, fontWeight: 500, letterSpacing: '-0.030em',
              color: BRAND.text, marginBottom: 4, margin: '0 0 4px',
            }}>{t.price}</p>
            <p style={{ fontFamily: MONO, fontSize: 11, color: BRAND.textLow, marginBottom: 18, margin: '0 0 18px' }}>{t.credits}</p>
            <div style={{ height: 1, background: BRAND.hairlineSoft, marginBottom: 18 }} />
            <p style={{ fontSize: 12.5, color: BRAND.textLow, lineHeight: 1.7, margin: 0 }}>
              No per-seat pricing. Move tier when credits run out, not when seats grow.
            </p>
          </div>
        ))}
      </div>

      <Spec rows={[
        ['tier card padding',    '24–28px'],
        ['tier card radius',     '14px'],
        ['popular tier border',  '1px var(--gold) instead of var(--line)'],
        ['popular tier bg',      'var(--ink2) (lifted) instead of var(--ink1)'],
        ['"Most Popular" label', 'top-right · MONO 9.5 · color --gold · uppercase · tracking +0.10em · no surface'],
        ['price font',           'Sans 36 · weight 500 · −0.030em · color --text'],
        ['credits',              'MONO 11 · color --muted · directly under price'],
        ['feature list',         'Check icon (.text---success) + 13 body · 12px row gap'],
        ['CTA',                  'Primary on popular tier · ghost on others · always sm size · w-100%'],
        ['comparison table',     '4-col grid below tier cards · sticky header · zebra striping'],
        ['Coming-soon API tier', 'Same card · gold-dim "COMING SOON" eyebrow · no checkout CTA · "Talk to us"'],
      ]} />
    </Section>
  );
}
