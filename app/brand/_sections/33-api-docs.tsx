'use client';
import { Section, H2, Mono, BRAND, MONO, SANS, Pre, Spec } from '../_lib/primitives';

export default function ApiDocsSection() {
  return (
    <Section id="api-docs" label="33 — API Doc Style">
      <H2 italicTail="endpoint.">API docs &mdash; one card per</H2>

      <Mono label="Endpoint card" />
      <div style={{
        padding: 26, borderRadius: 14,
        border: `1px solid ${BRAND.hairline}`, background: BRAND.surface1,
        marginBottom: 24,
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 14 }}>
          <span style={{
            padding: '3px 10px', borderRadius: 4,
            background: BRAND.goldDim, color: BRAND.gold,
            fontFamily: MONO, fontSize: 10, fontWeight: 600, letterSpacing: '0.10em',
          }}>POST</span>
          <span style={{ fontFamily: MONO, fontSize: 14, color: BRAND.text, fontWeight: 500 }}>/v1/research</span>
          <span style={{ fontFamily: MONO, fontSize: 11, color: BRAND.textLow, marginLeft: 'auto' }}>10–50 credits</span>
        </div>
        <p style={{ fontSize: 13.5, fontWeight: 400, color: BRAND.textMed, lineHeight: 1.7, marginBottom: 18, margin: '0 0 18px' }}>
          5-phase research with cited sources and per-claim confidence scores.
          Returns a structured report with full audit trail.
        </p>
        <Pre>{`curl https://api.mavera.io/v1/research \\
  -H "Authorization: Bearer $MAVERA_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "question": "Which logistics enterprises announced Series B in last 30d?",
    "depth": "deep",
    "max_sources": 20
  }'`}</Pre>
      </div>

      <Spec rows={[
        ['method chip',     'sharp 4px radius · MONO 10 · uppercase · gold-dim bg + gold text'],
        ['path',            'JetBrains Mono · 14 · weight 500 · color --text'],
        ['credit annotation','MONO 11 · color --muted · right-aligned · always present'],
        ['description',     '13.5 · weight 400 · color --dim · 1.7 line-height · 1–2 sentences max'],
        ['code block',      '.mav-code surface · padding 22px · syntax: gold for keys, --text for strings'],
        ['multi-language',  'Tabs across the top: cURL · Python · Node · Go · all sharing the same height'],
        ['response',        'Adjacent card · "Response" eyebrow · same code-block treatment'],
        ['streaming',       'Show SSE example for /v1/responses · annotate the [DONE] sentinel'],
      ]} />

      <Mono label="Code highlighting palette" />
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 8, marginTop: 14 }}>
        {[
          { name: 'Keyword',  color: BRAND.gold,  sample: 'curl, POST, GET' },
          { name: 'String',   color: BRAND.green, sample: '"Bearer $TOK"' },
          { name: 'Number',   color: BRAND.amber, sample: '20 · 0.92' },
          { name: 'Comment',  color: BRAND.textLow, sample: '// note' },
        ].map(c => (
          <div key={c.name} style={{
            padding: 14, borderRadius: 10,
            border: `1px solid ${BRAND.hairline}`, background: BRAND.surface1,
          }}>
            <p style={{ fontFamily: MONO, fontSize: 13, color: c.color, marginBottom: 8, margin: '0 0 8px' }}>{c.sample}</p>
            <p style={{ fontFamily: MONO, fontSize: 9.5, color: BRAND.textLow, margin: 0 }}>{c.name}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
