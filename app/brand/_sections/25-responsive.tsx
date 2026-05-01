'use client';
import { Section, H2, BRAND, MONO, Spec } from '../_lib/primitives';

const BREAKPOINTS = [
  { name: 'sm',  px: '0 → 640',    use: 'Phones · single-column · stacked nav · 16–20px gutters' },
  { name: 'md',  px: '641 → 1024', use: 'Tablets · 2-up grids · condensed nav · 24–32px gutters' },
  { name: 'lg',  px: '1025 → 1280',use: 'Laptops · 3-up grids · full nav · 48–56px gutters' },
  { name: 'xl',  px: '1281+',      use: 'Desktop · 4-up grids · max .mav-container 1200 · 64px gutters' },
];

export default function ResponsiveSection() {
  return (
    <Section id="responsive" label="25 — Responsive">
      <H2 italicTail="ladder.">Breakpoints &mdash; the four-step</H2>

      <Spec rows={BREAKPOINTS.map(b => [`@ ${b.name}  ·  ${b.px}px`, b.use])} />

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 10, marginTop: 32, marginBottom: 32 }}>
        {[
          { name: 'sm · 360px',  w: 60,  cols: 1 },
          { name: 'md · 768px',  w: 72,  cols: 2 },
          { name: 'lg · 1080px', w: 88,  cols: 3 },
          { name: 'xl · 1200px', w: 100, cols: 4 },
        ].map(d => (
          <div key={d.name} style={{
            padding: 18, borderRadius: 10,
            border: `1px solid ${BRAND.hairline}`, background: BRAND.surface1,
          }}>
            <p style={{ fontFamily: MONO, fontSize: 10, color: BRAND.textDim, letterSpacing: '0.10em', textTransform: 'uppercase', marginBottom: 14, margin: '0 0 14px' }}>{d.name}</p>
            <div style={{
              border: `1px dashed ${BRAND.hairline}`, borderRadius: 4, padding: 6,
              width: `${d.w}%`, marginBottom: 10,
            }}>
              <div style={{ display: 'grid', gridTemplateColumns: `repeat(${d.cols}, 1fr)`, gap: 4 }}>
                {Array.from({ length: d.cols }).map((_, i) => (
                  <div key={i} style={{ height: 22, borderRadius: 3, background: BRAND.goldDim }} />
                ))}
              </div>
            </div>
            <p style={{ fontFamily: MONO, fontSize: 9.5, color: BRAND.textLow, margin: 0 }}>{d.cols} {d.cols === 1 ? 'column' : 'columns'}</p>
          </div>
        ))}
      </div>

      <Spec rows={[
        ['gutter (sm)',         '16–20px sides'],
        ['gutter (md)',         '24–32px sides'],
        ['gutter (lg / xl)',    '48–64px sides'],
        ['hero scale-down',     'h1 88 → 56 (md) → 44 (sm) · maintain −0.035em tracking'],
        ['nav (md)',            'Platform mega-menu collapses to vertical sheet · Sign in / Start free remain'],
        ['nav (sm)',            'Hamburger · full-screen sheet · sections stack with hairline dividers'],
        ['stat bar (sm)',       '4 stats → 2 columns × 2 rows'],
        ['table (sm)',          'Cells stack inside each row · cell label appears as MONO uppercase prefix'],
        ['modal (sm)',          'Becomes full-bleed sheet · slides up from bottom · 24px top inset'],
        ['focus group demo',    'Side-by-side at lg+ · stacks at md and below'],
      ]} />
    </Section>
  );
}
