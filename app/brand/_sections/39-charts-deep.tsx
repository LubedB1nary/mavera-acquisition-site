'use client';
import { Section, H2, Mono, BRAND, MONO, Spec } from '../_lib/primitives';

export default function ChartsDeepSection() {
  return (
    <Section id="charts-deep" label="39 — Charts Deep Dive">
      <H2 italicTail="receipts.">Charts &mdash; data with</H2>

      <Mono label="Sparkline · inline" />
      <div style={{
        padding: 22, borderRadius: 12,
        border: `1px solid ${BRAND.hairline}`, background: BRAND.surface1,
        display: 'grid', gridTemplateColumns: '1fr 200px', gap: 18, alignItems: 'center',
        marginBottom: 24,
      }}>
        <div>
          <p style={{ fontFamily: MONO, fontSize: 10, color: BRAND.textDim, letterSpacing: '0.13em', textTransform: 'uppercase', marginBottom: 8, margin: '0 0 8px' }}>
            Argus · Outreach acceptance · last 14d
          </p>
          <p style={{ fontSize: 26, fontWeight: 500, letterSpacing: '-0.030em', color: BRAND.gold, marginBottom: 4, margin: '0 0 4px' }}>32.4%</p>
          <p style={{ fontSize: 12, color: BRAND.textLow, margin: 0 }}>+8.1% vs prior period</p>
        </div>
        <svg viewBox="0 0 200 60" width="200" height="60">
          <path d="M0,46 C20,42 30,30 50,32 C70,34 80,18 100,20 C120,22 130,28 150,18 C170,8 180,12 200,10"
            fill="none" stroke={BRAND.gold} strokeWidth="2" strokeLinecap="round" />
          <circle cx="200" cy="10" r="3.5" fill={BRAND.gold} />
        </svg>
      </div>

      <Mono label="Heatmap (used in /agents/research · passages retained)" />
      <div style={{
        padding: 24, borderRadius: 12,
        border: `1px solid ${BRAND.hairline}`, background: BRAND.surface1,
        marginBottom: 24,
      }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(14, 1fr)', gap: 3, marginBottom: 12 }}>
          {Array.from({ length: 14 * 7 }).map((_, i) => {
            const intensity = Math.abs(Math.sin(i * 0.7) * 0.5 + 0.5);
            return (
              <div key={i} style={{
                aspectRatio: '1 / 1', borderRadius: 3,
                background: intensity > 0.85 ? BRAND.gold
                          : intensity > 0.55 ? `rgba(200,168,255,${intensity * 0.55})`
                          : intensity > 0.30 ? `rgba(200,168,255,${intensity * 0.25})`
                          : BRAND.hairline,
              }} />
            );
          })}
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <p style={{ fontFamily: MONO, fontSize: 9.5, color: BRAND.textLow, margin: 0 }}>14 weeks · 7 days</p>
          <div style={{ display: 'flex', gap: 4, alignItems: 'center' }}>
            <span style={{ fontFamily: MONO, fontSize: 9.5, color: BRAND.textLow }}>less</span>
            {[0.1, 0.3, 0.5, 0.7, 1].map(o => (
              <div key={o} style={{ width: 10, height: 10, borderRadius: 2, background: o === 1 ? BRAND.gold : `rgba(200,168,255,${o * 0.55})` }} />
            ))}
            <span style={{ fontFamily: MONO, fontSize: 9.5, color: BRAND.textLow }}>more</span>
          </div>
        </div>
      </div>

      <Spec rows={[
        ['sparkline width',     '180–220px · sits inline with the stat number'],
        ['sparkline stroke',    '2px gold · linecap round · last point dot 3.5px'],
        ['heatmap cell',        'aspect-ratio 1:1 · 3px gap · gold ramp on rgba alpha'],
        ['heatmap legend',      '5-step ramp · MONO 9.5 endpoint labels'],
        ['axis hidden',         'sparklines and heatmaps suppress axes — context lives in adjacent stat'],
        ['no tooltip',          'sparklines never show a tooltip · they\'re glance-charts only'],
        ['large chart palette', '1 series → gold · 2 → gold + green · 3+ → gold + agent accents from sec. 06'],
        ['gridline cadence',    '4–5 horizontal lines max · vertical only on time-series with > 12 points'],
        ['empty bin treatment', 'heatmaps show var(--line) — never fully transparent (loses grid rhythm)'],
      ]} />
    </Section>
  );
}
