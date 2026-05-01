'use client';
import { Section, H2, Mono, BRAND, MONO, SANS, SERIF, Spec } from '../_lib/primitives';

export default function OgAssetsSection() {
  return (
    <Section id="og-assets" label="34 — Social & OG Assets">
      <H2 italicTail="card.">OG &mdash; one template, infinite</H2>

      <Mono label="Default OG card · 1200 × 630" />
      <div style={{
        position: 'relative',
        aspectRatio: '1200 / 630', borderRadius: 14, overflow: 'hidden',
        border: `1px solid ${BRAND.hairline}`,
        background: `linear-gradient(135deg, #07080a, #0d1018)`,
        marginBottom: 24,
      }}>
        {/* Aurora */}
        <div style={{
          position: 'absolute', width: '60%', height: '60%', borderRadius: 999,
          top: '-15%', right: '-10%',
          background: `radial-gradient(circle, ${BRAND.gold}, transparent 60%)`,
          opacity: 0.4, filter: 'blur(80px)',
        }} />
        {/* Grid bg */}
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
          maskImage: 'radial-gradient(ellipse 60% 50% at 50% 50%, black, transparent 80%)',
          WebkitMaskImage: 'radial-gradient(ellipse 60% 50% at 50% 50%, black, transparent 80%)',
        }} />

        <div style={{
          position: 'relative', zIndex: 2,
          padding: '7% 8%', height: '100%',
          display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <img src="/mavera-logo.webp" alt="" width={28} height={28} style={{ filter: 'invert(1)', opacity: 0.92 }} />
            <span style={{ fontSize: 18, fontWeight: 500, letterSpacing: '-0.025em', color: BRAND.text, fontFamily: SANS }}>
              Mavera<span style={{ color: BRAND.gold, fontFamily: SERIF, fontStyle: 'italic', fontWeight: 400 }}>.</span>
            </span>
          </div>

          <div>
            <p style={{
              fontFamily: MONO, fontSize: 12, color: BRAND.textDim,
              letterSpacing: '0.16em', textTransform: 'uppercase', marginBottom: 18, margin: '0 0 18px',
            }}>/ section · 04</p>
            <h2 style={{
              fontFamily: SANS, fontSize: 52, fontWeight: 500, letterSpacing: '-0.030em',
              color: BRAND.text, lineHeight: 1.05, marginBottom: 14, margin: '0 0 14px', maxWidth: '90%',
            }}>
              Autonomous agents.{' '}
              <em style={{ fontFamily: SERIF, fontStyle: 'italic', fontWeight: 400, color: BRAND.gold, letterSpacing: '-0.02em' }}>
                Human intelligence.
              </em>
            </h2>
            <p style={{ fontSize: 18, fontWeight: 400, color: BRAND.textMed, lineHeight: 1.45, maxWidth: '85%', margin: 0 }}>
              Maven runs the full growth cycle so you close the deal.
            </p>
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <p style={{ fontFamily: MONO, fontSize: 11, color: BRAND.textLow, letterSpacing: '0.08em', margin: 0 }}>mavera.io</p>
            <p style={{ fontFamily: MONO, fontSize: 11, color: BRAND.gold, letterSpacing: '0.08em', margin: 0 }}>RECEIPTS, NOT VIBES.</p>
          </div>
        </div>
      </div>

      <Spec rows={[
        ['canvas',         '1200 × 630 (Twitter / X / OG default)'],
        ['safe area',      '60px from every edge — anything within may be cropped on Slack / Discord'],
        ['bg',             'gradient #07080a → #0d1018 + radial gold aurora top-right + grid mask'],
        ['lockup',         '28px mark · 18 wordmark · gold serif period · top-left'],
        ['eyebrow',        'MONO 12 · uppercase · tracking +0.16em · color --dim · "/ section · NN"'],
        ['headline',       'Sans 52 · weight 500 · with one italic-serif accent · max 3 lines'],
        ['lede',           '18 · weight 400 · color --dim · max 2 lines'],
        ['footer',         'mavera.io left · "RECEIPTS, NOT VIBES." right · MONO 11 gold'],
        ['rendering',      '@vercel/og runtime · same Inter / Instrument Serif / JetBrains Mono'],
        ['per-route',      'eyebrow + headline can be templated by route at build / request time'],
      ]} />
    </Section>
  );
}
