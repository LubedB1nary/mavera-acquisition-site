'use client';
import { Section, H2, Mono, BRAND, MONO, SANS, Spec } from '../_lib/primitives';

export default function LoadingSection() {
  return (
    <Section id="loading" label="21 — Loading States">
      <H2 italicTail="states.">Loading &mdash; honest</H2>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 12, marginBottom: 32 }}>
        {/* Spinner */}
        <div style={{
          padding: 26, borderRadius: 12,
          border: `1px solid ${BRAND.hairline}`, background: BRAND.surface1,
          display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 14,
        }}>
          <div style={{
            width: 26, height: 26, borderRadius: 999,
            border: `2px solid ${BRAND.hairline}`,
            borderTopColor: BRAND.gold,
            animation: 'mav-spin-slow 0.9s linear infinite',
          }} />
          <p style={{ fontFamily: MONO, fontSize: 10, color: BRAND.textLow, margin: 0 }}>Spinner · 26px</p>
        </div>

        {/* Skeleton */}
        <div style={{
          padding: 22, borderRadius: 12,
          border: `1px solid ${BRAND.hairline}`, background: BRAND.surface1,
        }}>
          <p style={{ fontFamily: MONO, fontSize: 10, color: BRAND.textDim, letterSpacing: '0.10em', textTransform: 'uppercase', marginBottom: 14, margin: '0 0 14px' }}>Skeleton</p>
          <div style={{ height: 12, borderRadius: 4, background: 'linear-gradient(90deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.10) 50%, rgba(255,255,255,0.04) 100%)', backgroundSize: '200% 100%', animation: 'mav-shimmer 1.6s linear infinite', marginBottom: 8 }} />
          <div style={{ height: 12, borderRadius: 4, background: 'linear-gradient(90deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.10) 50%, rgba(255,255,255,0.04) 100%)', backgroundSize: '200% 100%', animation: 'mav-shimmer 1.6s linear infinite', width: '74%', marginBottom: 8 }} />
          <div style={{ height: 12, borderRadius: 4, background: 'linear-gradient(90deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.10) 50%, rgba(255,255,255,0.04) 100%)', backgroundSize: '200% 100%', animation: 'mav-shimmer 1.6s linear infinite', width: '52%' }} />
        </div>

        {/* Progress bar */}
        <div style={{
          padding: 26, borderRadius: 12,
          border: `1px solid ${BRAND.hairline}`, background: BRAND.surface1,
          display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 12,
        }}>
          <p style={{ fontFamily: MONO, fontSize: 10, color: BRAND.textDim, letterSpacing: '0.10em', textTransform: 'uppercase', margin: 0 }}>Progress · 47%</p>
          <div style={{ height: 4, borderRadius: 4, background: BRAND.hairline, overflow: 'hidden' }}>
            <div style={{ width: '47%', height: '100%', background: `linear-gradient(90deg, ${BRAND.gold}, ${BRAND.goldSoft})`, boxShadow: `0 0 12px ${BRAND.goldDim}` }} />
          </div>
          <p style={{ fontFamily: MONO, fontSize: 9.5, color: BRAND.textLow, margin: 0 }}>4 / 9 phases · Mave research</p>
        </div>
      </div>

      <Mono label="Loading buttons" />
      <div style={{
        display: 'flex', gap: 12, padding: '20px 24px', borderRadius: 12,
        border: `1px solid ${BRAND.hairline}`, background: BRAND.surface1,
        marginBottom: 24, alignItems: 'center',
      }}>
        <button disabled style={{
          padding: '12px 20px', borderRadius: 8,
          background: BRAND.gold, color: BRAND.bg,
          fontSize: 14, fontWeight: 500, border: 'none', cursor: 'wait',
          fontFamily: SANS,
          display: 'inline-flex', alignItems: 'center', gap: 10, opacity: 0.85,
        }}>
          <span style={{
            width: 12, height: 12, borderRadius: 999,
            border: `1.5px solid rgba(7,8,10,0.3)`,
            borderTopColor: BRAND.bg,
            animation: 'mav-spin-slow 0.85s linear infinite',
          }} />
          Spawning Outcome…
        </button>
        <button style={{
          padding: '12px 20px', borderRadius: 8,
          background: 'transparent', color: BRAND.textMed,
          fontSize: 14, fontWeight: 500, border: `1px solid ${BRAND.hairline}`,
          fontFamily: SANS,
          display: 'inline-flex', alignItems: 'center', gap: 10,
        }}>
          <span style={{
            width: 10, height: 10, borderRadius: 999,
            background: BRAND.green, animation: 'mav-pulse 1.4s ease-in-out infinite',
          }} />
          Live · 12 events / min
        </button>
      </div>

      <Spec rows={[
        ['spinner stroke',     '2px · top color var(--gold) · ring var(--line)'],
        ['spinner duration',   '0.85–0.9s linear · never bouncy'],
        ['skeleton bg',        'gradient W+4% → W+10% → W+4% · 200% bg-size · 1.6s shimmer'],
        ['skeleton radius',    '4px (text) · 8px (cards)'],
        ['progress height',    '4px (linear) · 6px (page-top scroll progress)'],
        ['progress fill',      'gradient gold → gold-soft · 12px outer glow'],
        ['button loading',     'lock width · spinner left of label · cursor wait · opacity 0.85'],
        ['skeleton lifespan',  'min 200ms · max 1200ms · then fade in real content over 220ms'],
      ]} />
    </Section>
  );
}
