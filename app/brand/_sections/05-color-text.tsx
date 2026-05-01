'use client';
import { Section, H2, BRAND, MONO } from '../_lib/primitives';

const ROWS = [
  { level: 'Primary',   color: '#edece6',                   v: '--text',  hex: '#EDECE6',  sample: 'Autonomous agents.',                         use: 'H1 / hero · primary product names · key stats' },
  { level: 'High',      color: 'rgba(237,236,230,0.88)',    v: '—',       hex: 'W + 88%',  sample: 'Maven orchestrates research.',                use: 'Section H2 · body emphasis · primary callouts' },
  { level: 'Body',      color: 'rgba(237,236,230,0.72)',    v: '—',       hex: 'W + 72%',  sample: 'Pick a goal, hand it to Maven.',              use: 'Lead paragraphs in dense surfaces' },
  { level: 'Dim',       color: 'rgba(237,236,230,0.62)',    v: '--dim',   hex: 'W + 62%',  sample: 'Source-attributed across 295K+ feeds.',      use: 'Standard body copy · descriptions' },
  { level: 'Muted',     color: 'rgba(237,236,230,0.38)',    v: '--muted', hex: 'W + 38%',  sample: 'Updated · 2 minutes ago',                     use: 'Captions · meta · contextual notes' },
  { level: 'Faint',     color: 'rgba(237,236,230,0.22)',    v: '--faint', hex: 'W + 22%',  sample: '/ section · 04',                              use: 'Eyebrow labels · numeric prefixes' },
  { level: 'Disabled',  color: 'rgba(237,236,230,0.16)',    v: '—',       hex: 'W + 16%',  sample: 'Optional field',                              use: 'Disabled inputs · empty placeholders' },
  { level: 'Ghost',     color: 'rgba(237,236,230,0.10)',    v: '—',       hex: 'W + 10%',  sample: '— —',                                         use: 'Decorative dividers · watermark text' },
];

export default function ColorTextSection() {
  return (
    <Section id="color-text" label="05 — Color · Text Scale">
      <H2 italicTail="ladder.">Text — opacity</H2>

      <p style={{ fontSize: 14, fontWeight: 400, color: BRAND.textLow, lineHeight: 1.75, maxWidth: 600, marginBottom: 36 }}>
        All text is built from the same warm-white anchor (#edece6) at varying alpha.
        That single source means contrast adapts automatically as the underlying ink
        layer shifts — and it keeps the palette honest. Never invent new text colors;
        always pick from this ladder.
      </p>

      <div style={{
        display: 'flex', flexDirection: 'column', gap: 0,
        borderRadius: 14, border: `1px solid ${BRAND.hairline}`, overflow: 'hidden',
      }}>
        {ROWS.map((r, i) => (
          <div key={r.level} style={{
            display: 'grid', gridTemplateColumns: '90px 1fr 90px 240px',
            gap: 18, alignItems: 'center', padding: '14px 22px',
            background: i % 2 === 0 ? BRAND.surface1 : 'transparent',
            borderBottom: i < ROWS.length - 1 ? `1px solid ${BRAND.hairlineSoft}` : 'none',
          }}>
            <p style={{ fontFamily: MONO, fontSize: 10, color: BRAND.textLow, letterSpacing: '0.06em', margin: 0 }}>{r.level}</p>
            <p style={{ fontSize: 14.5, fontWeight: 400, letterSpacing: '-0.012em', color: r.color, margin: 0 }}>{r.sample}</p>
            <p style={{ fontFamily: MONO, fontSize: 10, color: BRAND.textLow, textAlign: 'right', margin: 0 }}>{r.hex}</p>
            <p style={{ fontSize: 11.5, fontWeight: 400, color: BRAND.textLow, lineHeight: 1.55, margin: 0 }}>
              {r.v !== '—' && <span style={{ fontFamily: MONO, color: BRAND.gold }}>{r.v}</span>}
              {r.v !== '—' && <span style={{ color: BRAND.textGhost }}>  ·  </span>}
              {r.use}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
}
