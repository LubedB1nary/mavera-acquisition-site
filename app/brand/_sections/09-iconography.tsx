'use client';
import { Section, H2, BRAND, MONO, DoDont } from '../_lib/primitives';

export default function IconographySection() {
  return (
    <Section id="iconography" label="09 — Iconography">
      <H2 sub="Mavera ships a small set of custom 1.5-stroke SVG icons in components/icons.tsx. We use Lucide React when an icon doesn't exist in-house. Icons are line-only (never filled) and inherit their color from currentColor.">
        Icons<em style={{ color: BRAND.gold, fontStyle: 'italic', fontFamily: 'var(--serif)', fontWeight: 400 }}> · </em>spare and consistent.
      </H2>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 10, marginBottom: 32 }}>
        {[
          { size: 12, use: 'Inline text · chips · tags · meta carets' },
          { size: 14, use: 'Buttons · sm · table headers' },
          { size: 16, use: 'Buttons · md · nav · list items' },
          { size: 20, use: 'Action icons · empty state hints' },
          { size: 24, use: 'Feature icons · agent cards' },
          { size: 32, use: 'Empty-state heroes · alert overlays' },
          { size: 48, use: 'Onboarding step heroes · marketing tiles' },
          { size: 64, use: 'Splash · login · cover plates only' },
        ].map(s => (
          <div key={s.size} style={{
            padding: 18, borderRadius: 10,
            border: `1px solid ${BRAND.hairline}`, background: BRAND.surface1,
          }}>
            <div style={{
              width: s.size, height: s.size, borderRadius: 4,
              border: `1.5px solid ${BRAND.gold}`, opacity: 0.85,
              marginBottom: 14, position: 'relative',
            }}>
              <span style={{
                position: 'absolute', inset: 0,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontFamily: MONO, fontSize: Math.max(7, s.size * 0.32),
                color: BRAND.gold, opacity: 0.55,
              }}>★</span>
            </div>
            <p style={{ fontFamily: MONO, fontSize: 11, color: BRAND.textHigh, marginBottom: 4, margin: '0 0 4px' }}>{s.size}px</p>
            <p style={{ fontSize: 11, fontWeight: 400, color: BRAND.textLow, lineHeight: 1.55, margin: 0 }}>{s.use}</p>
          </div>
        ))}
      </div>

      <DoDont items={[
        { do: true,  title: 'strokeWidth 1.5',           note: 'All icons render at strokeWidth={1.5}. Never 1, never 2 — those break the visual weight of the system.' },
        { do: true,  title: 'Inherit color',             note: 'currentColor only. Never hardcode icon hex values except for status icons (success/error/warn).' },
        { do: true,  title: 'Pair with text whenever possible', note: 'Icons reinforce meaning, they don\'t replace it. Tooltip-only icons are reserved for very tight UI.' },
        { do: false, title: 'Never use filled icons',    note: 'Filled variants break the visual language. If a Lucide icon only ships filled, draw a stroke version instead.' },
        { do: false, title: 'No emoji as UI iconography',note: 'Emoji break dark-mode contrast and never match line weight. Use SVG.' },
        { do: false, title: 'Never mix icon families',   note: 'Custom or Lucide. Do not pull in Heroicons, Phosphor, or Material in the same surface.' },
      ]} />
    </Section>
  );
}
