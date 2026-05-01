'use client';
import { Section, H2, Mono, BRAND, MONO, Spec } from '../_lib/primitives';

export default function IllustrationsSection() {
  return (
    <Section id="illustrations" label="29 — Illustration System">
      <H2 italicTail="diagrams.">Illustration &mdash; structural</H2>

      <p style={{ fontSize: 14, fontWeight: 400, color: BRAND.textLow, lineHeight: 1.75, maxWidth: 620, marginBottom: 36 }}>
        Mavera's illustration language is not character art &mdash; it is structural diagrams.
        ASCII tori, evidence-graph SVGs, scrolling code blocks, marquee logo reels.
        Every illustration is animated subtly to demonstrate that the platform is
        running. Decoration without information is forbidden.
      </p>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginBottom: 32 }}>
        {/* ASCII demo */}
        <div style={{
          padding: 28, borderRadius: 14,
          border: `1px solid ${BRAND.hairline}`, background: BRAND.bg,
          fontFamily: MONO, fontSize: 10, color: BRAND.gold,
          letterSpacing: '0.05em', lineHeight: 1.2, whiteSpace: 'pre',
          textAlign: 'center', overflow: 'hidden',
        }}>
{`     . - ~ ~ ~ - .
   .'  .. : : ; .  '.
  /  .  : ; ; ; ;  .  \\
 /  .  ; ; ; ;  ;  .   \\
;   .  : ; ; ; ; .  ;   ;
;   .  : ; ; ; ; .  ;   ;
 \\  .  ; ; ; ; ;  .  /
  \\  .  : ; ; ; ;  /
   '. .. : : ; .'
     ' - _ - '`}
        </div>
        <Spec rows={[
          ['Where used',     'Argus orbit · /agents/sales hero · 70 × 26 cell torus'],
          ['Render',         'Per-frame ASCII rasterizer (components/ascii-torus.tsx)'],
          ['Type',           'JetBrains Mono · 10–12px · letter-spacing 0.05em'],
          ['Color',          'Gradient mask: gold center → text edges'],
          ['Update rate',    '24fps · pauses on hover'],
          ['Motion',         '3 satellites orbit at variable speeds · rotation × × rotation Z'],
          ['Reduced motion', 'Frame frozen at the most legible orientation'],
        ]} />
      </div>

      <Mono label="Evidence graph (SVG · /agents/science)" />
      <div style={{
        padding: 32, borderRadius: 14,
        border: `1px solid ${BRAND.hairline}`, background: BRAND.surface1,
        marginBottom: 24,
      }}>
        <svg viewBox="0 0 620 200" width="100%" height="200" style={{ display: 'block' }}>
          {[
            [60, 60, 220, 60], [220, 60, 380, 60], [380, 60, 220, 140],
            [220, 140, 380, 140], [380, 140, 540, 100], [380, 60, 540, 100],
          ].map(([x1, y1, x2, y2], i) => (
            <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke={BRAND.hairline} strokeWidth="1" />
          ))}
          {[
            ['raw data',      60,  60, false],
            ['generator',     220, 60, false],
            ['training set',  380, 60, false],
            ['training run',  220, 140, false],
            ['evals',         380, 140, false],
            ['model weights', 540, 100, true],
          ].map(([label, x, y, output]) => (
            <g key={label as string} transform={`translate(${x}, ${y})`}>
              <rect x="-58" y="-14" width="116" height="28" rx="5"
                fill={BRAND.bg}
                stroke={output ? BRAND.gold : BRAND.hairline}
                strokeWidth="1" />
              <text x="0" y="5" textAnchor="middle"
                fontFamily="var(--mono)" fontSize="11"
                fill={output ? BRAND.gold : BRAND.textMed}>{label}</text>
            </g>
          ))}
        </svg>
        <p style={{ fontFamily: MONO, fontSize: 10, color: BRAND.textLow, marginTop: 14, textAlign: 'center', margin: '14px 0 0' }}>
          every node hashed · every edge timestamped · auditor walks the graph
        </p>
      </div>

      <Spec rows={[
        ['Diagram surface', 'var(--ink0) bg · var(--line) edges · accent only on outputs'],
        ['Node fill',       'var(--ink0) · 1px var(--line) (or accent for outputs)'],
        ['Node label',      'JetBrains Mono · 11 · color --text (or accent for outputs)'],
        ['Edge stroke',     '1px var(--line)'],
        ['Edge animation',  'optional · stroke-dashoffset draw-in over 4.5s · once per scroll-into-view'],
        ['Caption',         'centered MONO 10 · color --muted · explains the diagram in one line'],
      ]} />
    </Section>
  );
}
