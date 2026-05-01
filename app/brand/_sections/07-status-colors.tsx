'use client';
import { Section, H2, BRAND, MONO, Spec } from '../_lib/primitives';

const STATUS = [
  { name: 'Confidence (success)', text: 'rgba(124,224,168,0.92)', bg: 'rgba(124,224,168,0.06)', border: 'rgba(124,224,168,0.22)',
    sample: 'High confidence · 0.92', use: 'Verified data · confirmed signals · pass results from the eval harness' },
  { name: 'Risk (error)',         text: 'rgba(255,138,168,0.92)', bg: 'rgba(255,138,168,0.06)', border: 'rgba(255,138,168,0.22)',
    sample: 'Drift detected · supply chain', use: 'Failures · contradicted signals · blocking errors · destructive confirmations' },
  { name: 'Volatility (warn)',    text: 'rgba(255,184,124,0.92)', bg: 'rgba(255,184,124,0.06)', border: 'rgba(255,184,124,0.22)',
    sample: 'Elevated volatility · Q2 earnings', use: 'Soft warnings · model uncertainty · subgroup bias warnings' },
  { name: 'Neutral (info)',       text: 'rgba(158,193,255,0.92)', bg: 'rgba(158,193,255,0.06)', border: 'rgba(158,193,255,0.22)',
    sample: 'Reviewing · 12 personas responding', use: 'Processing · in-progress · informational meta · live status' },
];

export default function StatusColorsSection() {
  return (
    <Section id="status-colors" label="07 — Status Colors">
      <H2 italicTail="meaning.">Status &mdash; semantic</H2>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 12, marginBottom: 32 }}>
        {STATUS.map(s => (
          <div key={s.name} style={{
            borderRadius: 12, overflow: 'hidden',
            border: `1px solid ${BRAND.hairline}`,
          }}>
            <div style={{ padding: '20px 22px', background: s.bg, borderBottom: `1px solid ${s.border}` }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <span style={{
                  width: 6, height: 6, borderRadius: 999,
                  background: s.text,
                  boxShadow: `0 0 0 4px ${s.bg}`,
                  display: 'inline-block',
                }} />
                <p style={{ fontSize: 13, fontWeight: 500, color: s.text, letterSpacing: '0.01em', margin: 0 }}>{s.sample}</p>
              </div>
            </div>
            <div style={{ padding: '18px 22px', background: BRAND.surface1 }}>
              <p style={{ fontSize: 13.5, fontWeight: 500, color: BRAND.textHigh, marginBottom: 8, margin: '0 0 8px' }}>{s.name}</p>
              <p style={{ fontSize: 11.5, fontWeight: 400, color: BRAND.textLow, lineHeight: 1.65, marginBottom: 12, margin: '0 0 12px' }}>{s.use}</p>
              <Spec rows={[['text', s.text], ['bg', s.bg], ['border', s.border]]} />
            </div>
          </div>
        ))}
      </div>

      <div style={{
        padding: '20px 24px', borderRadius: 12,
        border: `1px solid ${BRAND.hairline}`, background: BRAND.surface1,
      }}>
        <p style={{
          fontFamily: MONO, fontSize: 10, color: BRAND.textDim,
          letterSpacing: '0.13em', textTransform: 'uppercase', marginBottom: 12,
        }}>Live indicator</p>
        <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
          <span className="mav-chip" style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            padding: '5px 12px 5px 10px', borderRadius: 999,
            background: BRAND.surface1, border: `1px solid ${BRAND.hairline}`,
            fontSize: 12, color: BRAND.textMed, fontFamily: MONO,
          }}>
            <span style={{
              width: 6, height: 6, borderRadius: 999,
              background: BRAND.green,
              boxShadow: `0 0 0 3px rgba(124,224,168,0.18)`,
              animation: 'mav-pulse 1.8s ease-in-out infinite',
            }} />
            LIVE · trust.mavera.io
          </span>
          <p style={{ fontSize: 12, color: BRAND.textLow, lineHeight: 1.6, margin: 0 }}>
            Live indicators use the mint-green pulse on a chip surface. Reserved
            for actively-running services (trust portal, focus group in progress, etc.).
            Never decorative.
          </p>
        </div>
      </div>
    </Section>
  );
}
