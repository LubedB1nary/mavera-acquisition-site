'use client';
import { Section, H2, H3, Mono, BRAND, MONO, SANS, SERIF } from '../_lib/primitives';

const SCALE = [
  { role: 'Display',    size: 88,  weight: 500, tracking: '-0.035em', cls: '.mav-h1',     family: SANS,  sample: 'Autonomous agents.' },
  { role: 'Hero',       size: 76,  weight: 500, tracking: '-0.030em', cls: 'inline',      family: SANS,  sample: 'Reality, distilled.' },
  { role: 'Section',    size: 56,  weight: 500, tracking: '-0.028em', cls: '.mav-h2',     family: SANS,  sample: 'Hand Maven a goal.' },
  { role: 'H3',         size: 28,  weight: 500, tracking: '-0.020em', cls: '.mav-h3',     family: SANS,  sample: 'Receipts, not vibes.' },
  { role: 'Lede',       size: 19,  weight: 400, tracking: '-0.005em', cls: '.mav-lede',   family: SANS,  sample: 'Maven runs the full growth cycle.' },
  { role: 'Body',       size: 15,  weight: 400, tracking: '0',        cls: '.mav-body',   family: SANS,  sample: 'Every action is logged. Every source is cited.' },
  { role: 'Caption',    size: 13,  weight: 400, tracking: '0',        cls: '.mav-caption',family: SANS,  sample: 'Updated · 2 minutes ago' },
  { role: 'Eyebrow',    size: 11,  weight: 500, tracking: '+0.14em',  cls: '.mav-eyebrow',family: MONO,  sample: 'SECTION · 08' },
  { role: 'Code / mono',size: 13,  weight: 400, tracking: '0',        cls: '.mav-code',   family: MONO,  sample: 'mavera-1 · 295K+ sources' },
  { role: 'Italic accent', size: 56, weight: 400, tracking: '-0.020em', cls: 'em',         family: SERIF, sample: 'human intelligence.' },
];

export default function TypographySection() {
  return (
    <Section id="typography" label="08 — Typography">
      <H2 italicTail="ladder.">Type — the</H2>

      <div style={{
        borderRadius: 12, border: `1px solid ${BRAND.hairline}`, overflow: 'hidden',
        marginBottom: 36,
      }}>
        <div style={{
          display: 'grid', gridTemplateColumns: '110px 1fr 60px 60px 90px 110px',
          gap: 12, padding: '12px 22px',
          borderBottom: `1px solid ${BRAND.hairline}`,
        }}>
          {['Role', 'Sample', 'Size', 'Weight', 'Tracking', 'Class'].map(h => (
            <p key={h} style={{
              fontFamily: MONO, fontSize: 9, color: BRAND.textDim,
              letterSpacing: '0.10em', textTransform: 'uppercase', margin: 0,
            }}>{h}</p>
          ))}
        </div>
        {SCALE.map((r, i) => (
          <div key={r.role} style={{
            display: 'grid', gridTemplateColumns: '110px 1fr 60px 60px 90px 110px',
            gap: 12, alignItems: 'center', padding: '14px 22px',
            background: i % 2 === 0 ? BRAND.surface1 : 'transparent',
            borderBottom: i < SCALE.length - 1 ? `1px solid ${BRAND.hairlineSoft}` : 'none',
          }}>
            <p style={{ fontFamily: MONO, fontSize: 9, color: BRAND.textLow, letterSpacing: '0.04em', margin: 0 }}>{r.role}</p>
            <p style={{
              fontFamily: r.family,
              fontStyle: r.role === 'Italic accent' ? 'italic' : 'normal',
              fontSize: Math.min(24, r.size),
              fontWeight: r.weight, letterSpacing: r.tracking,
              color: r.role === 'Italic accent' ? BRAND.gold : BRAND.textHigh,
              overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis',
              margin: 0,
            }}>{r.sample}</p>
            <p style={{ fontFamily: MONO, fontSize: 9, color: BRAND.textLow, textAlign: 'right', margin: 0 }}>{r.size}px</p>
            <p style={{ fontFamily: MONO, fontSize: 9, color: BRAND.textLow, textAlign: 'right', margin: 0 }}>{r.weight}</p>
            <p style={{ fontFamily: MONO, fontSize: 9, color: BRAND.textLow, margin: 0 }}>{r.tracking}</p>
            <p style={{ fontFamily: MONO, fontSize: 9, color: BRAND.textDim, margin: 0 }}>{r.cls}</p>
          </div>
        ))}
      </div>

      <H3>Italic-Serif Accent — the brand signature</H3>
      <div style={{
        padding: '40px 44px', borderRadius: 14,
        border: `1px solid ${BRAND.hairline}`, background: BRAND.surface1,
        marginBottom: 32,
      }}>
        <p style={{
          fontFamily: MONO, fontSize: 10, color: BRAND.textDim,
          letterSpacing: '0.13em', textTransform: 'uppercase', marginBottom: 18,
        }}>HERO · IN CONTEXT</p>
        <h2 style={{
          fontFamily: SANS, fontSize: 56, fontWeight: 500, letterSpacing: '-0.030em',
          lineHeight: 1.02, color: BRAND.text, marginBottom: 20, margin: '0 0 20px',
        }}>
          Hand Maven <em style={{ fontFamily: SERIF, fontStyle: 'italic', fontWeight: 400, color: BRAND.gold, letterSpacing: '-0.02em' }}>a goal.</em>
          <br />Not a prompt.
        </h2>
        <p style={{ fontSize: 17, fontWeight: 400, color: BRAND.textMed, lineHeight: 1.55, maxWidth: 540, margin: 0 }}>
          One italic-serif accent per headline maximum. Place it on the noun that
          carries emotional weight &mdash; never on a connective word, never on a
          verb. The accent is the tonal pivot, not decoration.
        </p>
      </div>

      <H3>Number Formatting</H3>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 8 }}>
        {[
          { n: '98%',    sub: 'OASIS agreement',    rule: 'Whole percentages. No decimals on hero stats.' },
          { n: '4M+',    sub: 'interactions',       rule: 'M / K abbreviation. Use + for "at least".' },
          { n: '< 60s',  sub: 'signal latency',     rule: 'Use < / > with a space before the unit.' },
          { n: '295K+',  sub: 'sources',            rule: 'Comma-separated for raw counts above 9999.' },
        ].map(n => (
          <div key={n.n} style={{
            padding: 18, borderRadius: 10,
            border: `1px solid ${BRAND.hairline}`, background: BRAND.surface1,
          }}>
            <p style={{
              fontSize: 32, fontWeight: 500, letterSpacing: '-0.030em',
              color: BRAND.gold, lineHeight: 1, marginBottom: 6, margin: '0 0 6px',
            }}>{n.n}</p>
            <p style={{ fontFamily: MONO, fontSize: 9.5, color: BRAND.textLow, marginBottom: 10, margin: '0 0 10px' }}>{n.sub}</p>
            <p style={{ fontSize: 11, fontWeight: 400, color: BRAND.textLow, lineHeight: 1.65, margin: 0 }}>{n.rule}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
