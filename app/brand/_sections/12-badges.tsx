'use client';
import { Section, H2, BRAND, MONO, Spec } from '../_lib/primitives';

export default function BadgesSection() {
  return (
    <Section id="badges" label="12 — Badges & Tags">
      <H2 italicTail="tags.">Badges &amp;</H2>

      <div style={{
        padding: '28px 32px', borderRadius: 14,
        border: `1px solid ${BRAND.hairline}`, background: BRAND.surface1,
        marginBottom: 24,
      }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, alignItems: 'center' }}>
          {/* Status badges */}
          <span style={{
            display: 'inline-flex', alignItems: 'center', padding: '3px 10px',
            borderRadius: 999, fontSize: 11, fontWeight: 500, letterSpacing: '0.01em',
            color: BRAND.green,
            background: 'rgba(124,224,168,0.06)',
            border: '1px solid rgba(124,224,168,0.22)',
          }}>Confidence</span>
          <span style={{
            display: 'inline-flex', alignItems: 'center', padding: '3px 10px',
            borderRadius: 999, fontSize: 11, fontWeight: 500,
            color: BRAND.rose,
            background: 'rgba(255,138,168,0.06)',
            border: '1px solid rgba(255,138,168,0.22)',
          }}>Risk</span>
          <span style={{
            display: 'inline-flex', alignItems: 'center', padding: '3px 10px',
            borderRadius: 999, fontSize: 11, fontWeight: 500,
            color: BRAND.amber,
            background: 'rgba(255,184,124,0.06)',
            border: '1px solid rgba(255,184,124,0.22)',
          }}>Volatility</span>
          <span style={{
            display: 'inline-flex', alignItems: 'center', padding: '3px 10px',
            borderRadius: 999, fontSize: 11, fontWeight: 500,
            color: BRAND.textMed,
            background: BRAND.surface2,
            border: `1px solid ${BRAND.hairline}`,
          }}>Neutral</span>

          {/* Live chip */}
          <span style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            padding: '5px 12px 5px 10px', borderRadius: 999,
            background: BRAND.surface1, border: `1px solid ${BRAND.hairline}`,
            fontSize: 12, color: BRAND.textMed, fontFamily: MONO,
          }}>
            <span style={{
              width: 6, height: 6, borderRadius: 999, background: BRAND.green,
              boxShadow: '0 0 0 3px rgba(124,224,168,0.18)',
              animation: 'mav-pulse 1.8s ease-in-out infinite',
            }} />
            LIVE
          </span>

          {/* Eyebrow / category */}
          <span style={{
            fontFamily: MONO, fontSize: 10, letterSpacing: '0.13em',
            textTransform: 'uppercase', color: BRAND.textDim,
            background: BRAND.surface1, border: `1px solid ${BRAND.hairline}`,
            borderRadius: 4, padding: '3px 8px',
          }}>SECTION · 12</span>

          {/* Coming soon */}
          <span style={{
            display: 'inline-flex', alignItems: 'center', padding: '3px 10px',
            borderRadius: 999, fontSize: 10, fontWeight: 500,
            color: BRAND.gold,
            background: BRAND.goldDim,
            border: `1px solid ${BRAND.goldDim}`,
            letterSpacing: '0.04em', textTransform: 'uppercase',
            fontFamily: MONO,
          }}>Coming Soon</span>

          {/* Most popular */}
          <span style={{
            fontFamily: MONO, fontSize: 10, color: BRAND.gold,
            letterSpacing: '0.10em', textTransform: 'uppercase',
          }}>Most Popular</span>
        </div>
      </div>

      <Spec rows={[
        ['status badge padding',     '3px 10px'],
        ['status badge radius',      '999px (pill)'],
        ['status badge font',        '11 · weight 500 · letter-spacing 0.01em'],
        ['live chip pulse',          '6px dot · box-shadow 3px halo · 1.8s ease-in-out'],
        ['eyebrow / category font',  'MONO 10–11 · weight 500 · tracking +0.13em · UPPER'],
        ['eyebrow padding',          '3px 8px'],
        ['eyebrow radius',           '4px (sharp)'],
        ['"Coming soon"',            'gold-dim bg + gold text · MONO uppercase'],
        ['"Most Popular"',           'no surface · gold MONO upper · sits in card corner'],
      ]} />
    </Section>
  );
}
