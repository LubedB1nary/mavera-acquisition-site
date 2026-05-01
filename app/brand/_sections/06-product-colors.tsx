'use client';
import { Section, H2, Mono, BRAND, MONO, DoDont } from '../_lib/primitives';

const AGENTS = [
  { name: 'Maven',         role: 'Generalist',   accent: '#c8a8ff', family: 'Gold (brand)' },
  { name: 'Argus · Sales', role: 'Pipeline',     accent: '#c8a8ff', family: 'Gold (brand)' },
  { name: 'Research',      role: 'Deep · 5-phase',accent: '#9ec1ff', family: 'Periwinkle' },
  { name: 'Content',       role: 'Brand voice',  accent: '#ff8aa8', family: 'Rose' },
  { name: 'Meetings',      role: 'Record · extract', accent: '#7ce0a8', family: 'Mint' },
  { name: 'Market intel',  role: 'Live signals', accent: '#ffb87c', family: 'Amber' },
  { name: 'Focus groups',  role: 'Synthetic panels', accent: '#c8a8ff', family: 'Gold (brand)' },
  { name: 'Ops · CRM',     role: 'Pipeline + automation', accent: '#b8c5ff', family: 'Slate' },
  { name: 'Science',       role: 'ML training · provenance', accent: '#a3e6c4', family: 'Sage' },
];

export default function ProductColorsSection() {
  return (
    <Section id="product-colors" label="06 — Agent Colors">
      <H2 sub="The brand color is gold (#c8a8ff). When agent UI needs to differentiate inside a single screen — for charts, status cards, or hover glows — each of the nine agents may carry a secondary accent. Never use accent fills above 12% alpha on large surfaces. One accent per surface, ever.">
        Nine agents<em style={{ color: BRAND.gold, fontStyle: 'italic', fontFamily: 'var(--serif)', fontWeight: 400 }}>,</em> nine moods.
      </H2>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 8, marginBottom: 32 }}>
        {AGENTS.map(a => (
          <div key={a.name} style={{
            padding: '16px 18px', borderRadius: 10,
            border: `1px solid ${BRAND.hairline}`, background: BRAND.surface1,
            display: 'flex', alignItems: 'center', gap: 14,
          }}>
            <div style={{
              width: 38, height: 38, borderRadius: 8,
              background: a.accent, opacity: 0.88,
              flexShrink: 0,
              border: '1px solid rgba(255,255,255,0.06)',
            }} />
            <div style={{ flex: 1, minWidth: 0 }}>
              <p style={{ fontSize: 13.5, fontWeight: 500, color: BRAND.textHigh, marginBottom: 2, margin: '0 0 2px' }}>{a.name}</p>
              <p style={{ fontFamily: MONO, fontSize: 9.5, color: BRAND.textLow, letterSpacing: '0.04em', margin: 0 }}>
                {a.accent.toUpperCase()} · {a.family}
              </p>
              <p style={{ fontSize: 11, color: BRAND.textLow, marginTop: 4, margin: '4px 0 0' }}>{a.role}</p>
            </div>
          </div>
        ))}
      </div>

      <Mono label="Accent Application Rules" />
      <DoDont items={[
        { do: true,  title: 'Stats and key numbers',         note: 'Use the accent on the primary stat number on agent cards (font-size 32+, weight 500, letter-spacing −0.03em).' },
        { do: true,  title: 'Hover glow (box-shadow)',       note: 'On card hover: box-shadow: 0 22px 40px −22px [accent] · 18% alpha. Use the accent\'s 14% hex form.' },
        { do: true,  title: 'Hover border tint',             note: 'On card hover: border-color shifts from --line to [accent] at 28% alpha. Always 1px, never thicker.' },
        { do: false, title: 'Never solid fill on cards',     note: 'Never use an accent as a solid background above 12% alpha on card surfaces. The page should still feel monochrome.' },
        { do: false, title: 'Never mix accents on one card', note: 'One accent per product, one accent per UI surface. If two agents share a frame, default both to gold.' },
        { do: false, title: 'Never reassign an accent',      note: 'Agent → color is a permanent 1:1 mapping. The accents above ARE the agents\' identity inside the product.' },
      ]} />
    </Section>
  );
}
