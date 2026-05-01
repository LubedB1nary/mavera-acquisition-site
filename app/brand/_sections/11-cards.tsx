'use client';
import { Section, H2, H3, Mono, BRAND, MONO, Spec } from '../_lib/primitives';

export default function CardsSection() {
  return (
    <Section id="cards" label="11 — Cards & Surfaces">
      <H2 italicTail="surfaces.">Cards &mdash; layered</H2>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginBottom: 32 }}>
        {/* Live agent-card demo */}
        <div style={{
          padding: 26, borderRadius: 14,
          border: `1px solid rgba(200,168,255,0.28)`,
          background: BRAND.surface2,
          boxShadow: '0 22px 40px -22px rgba(200,168,255,0.18)',
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 18 }}>
            <span style={{
              fontFamily: MONO, fontSize: 10, letterSpacing: '0.12em',
              textTransform: 'uppercase', color: BRAND.textDim,
            }}>AGENT · 02</span>
            <span style={{
              width: 6, height: 6, borderRadius: 999, background: BRAND.gold, opacity: 0.85,
              display: 'inline-block', marginTop: 3,
            }} />
          </div>
          <div style={{
            height: 60, background: BRAND.goldDim, borderRadius: 8, marginBottom: 18,
            border: '1px solid rgba(200,168,255,0.16)',
          }} />
          <div style={{ height: 1, background: BRAND.hairlineSoft, marginBottom: 18 }} />
          <p style={{
            fontSize: 30, fontWeight: 500, letterSpacing: '-0.030em',
            color: BRAND.gold, lineHeight: 1, marginBottom: 6, margin: '0 0 6px',
          }}>295K+</p>
          <p style={{ fontFamily: MONO, fontSize: 10, color: BRAND.textDim, marginBottom: 16, margin: '0 0 16px' }}>media sources monitored</p>
          <p style={{ fontSize: 13, fontWeight: 400, color: BRAND.textMed, lineHeight: 1.65, margin: 0 }}>
            Live signal scoring across funding news, executive hires, regulatory filings,
            competitor moves &mdash; deduped, scored 0&ndash;100, routed to the right agent.
          </p>
          <div style={{ marginTop: 18, display: 'flex', justifyContent: 'flex-end' }}>
            <span style={{ fontSize: 12, color: BRAND.gold }}>See market intel →</span>
          </div>
        </div>

        <div>
          <Mono label="Agent card · resting + hover" />
          <Spec rows={[
            ['border-radius', '14px'],
            ['border (rest)', '1px solid var(--line)'],
            ['bg (rest)', 'var(--ink1)'],
            ['border (hover)', 'rgba(200,168,255,0.28)'],
            ['bg (hover)', 'var(--surface2)  ·  W+3.5%'],
            ['box-shadow (hover)', '0 22px 40px -22px gold@18%'],
            ['transition', 'all .35s cubic-bezier(.2,.7,.2,1)'],
            ['translate (hover)', '−3px'],
            ['padding', '24–28px'],
            ['stat font · weight', '30 · 500'],
            ['stat color', 'var(--gold)'],
            ['inner divider', '1px var(--line-soft)'],
          ]} />
        </div>
      </div>

      <H3>Surface elevation map</H3>
      <div style={{ borderRadius: 14, overflow: 'hidden', border: `1px solid ${BRAND.hairline}` }}>
        <div style={{
          display: 'grid', gridTemplateColumns: '120px 1fr 120px 1fr',
          gap: 12, padding: '12px 22px',
          borderBottom: `1px solid ${BRAND.hairline}`, background: BRAND.surface1,
        }}>
          {['Layer', 'Background', 'Border', 'Shadow'].map(h => (
            <p key={h} style={{
              fontFamily: MONO, fontSize: 9, color: BRAND.textDim,
              letterSpacing: '0.10em', textTransform: 'uppercase', margin: 0,
            }}>{h}</p>
          ))}
        </div>
        {[
          { layer: '0 · Page',     bg: 'var(--ink0)  ·  #07080a', border: 'none',                       shadow: 'none' },
          { layer: '1 · Card',     bg: 'var(--ink1)  ·  #0b0d10', border: '1px var(--line)',            shadow: 'none' },
          { layer: '2 · Panel',    bg: 'var(--ink2)  ·  #111418', border: '1px var(--line)',            shadow: '0 8px 24px -16px rgba(0,0,0,0.5)' },
          { layer: '3 · Raised',   bg: 'var(--ink3)  ·  #181b21', border: '1px var(--gold-dim)',        shadow: '0 22px 40px -22px gold@18%' },
          { layer: '4 · Modal',    bg: 'rgba(7,8,10,0.95) + blur(22px)', border: '1px var(--line)',     shadow: '0 32px 64px -28px rgba(0,0,0,0.65)' },
        ].map((r, i) => (
          <div key={r.layer} style={{
            display: 'grid', gridTemplateColumns: '120px 1fr 120px 1fr',
            gap: 12, alignItems: 'center', padding: '14px 22px',
            background: i % 2 === 0 ? BRAND.surface1 : 'transparent',
            borderBottom: i < 4 ? `1px solid ${BRAND.hairlineSoft}` : 'none',
          }}>
            <p style={{ fontSize: 12.5, fontWeight: 500, color: BRAND.textHigh, margin: 0 }}>{r.layer}</p>
            <p style={{ fontFamily: MONO, fontSize: 10.5, color: BRAND.textMed, margin: 0 }}>{r.bg}</p>
            <p style={{ fontFamily: MONO, fontSize: 10.5, color: BRAND.textMed, margin: 0 }}>{r.border}</p>
            <p style={{ fontFamily: MONO, fontSize: 10.5, color: BRAND.textLow, margin: 0 }}>{r.shadow}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
