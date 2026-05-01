'use client';
import { Section, H2, Mono, BRAND, MONO, SANS, SERIF, Spec } from '../_lib/primitives';

export default function RichTextSection() {
  return (
    <Section id="rich-text" label="47 — Rich Text & Markdown">
      <H2 italicTail="receipts.">Rich text &mdash; for journals and</H2>

      <Mono label="Maven journal entry · markdown rendered" />
      <div style={{
        padding: 32, borderRadius: 14,
        border: `1px solid ${BRAND.hairline}`, background: BRAND.surface1,
        marginBottom: 32, fontFamily: SANS, color: BRAND.textHigh,
      }}>
        <h3 style={{
          fontFamily: SANS, fontSize: 22, fontWeight: 500, letterSpacing: '-0.020em',
          color: BRAND.text, marginBottom: 16, margin: '0 0 16px',
        }}>
          Daily journal &mdash; <em style={{ fontFamily: SERIF, fontStyle: 'italic', color: BRAND.gold }}>Q2 enterprise pipeline</em>
        </h3>
        <p style={{ fontSize: 14.5, fontWeight: 400, color: BRAND.textMed, lineHeight: 1.75, marginBottom: 14, margin: '0 0 14px' }}>
          Logistics is responding <strong style={{ color: BRAND.text, fontWeight: 600 }}>2.4×</strong> better
          than FinServ. Recommend shifting wave-2 to 60/40 toward Logistics.
        </p>
        <p style={{ fontSize: 14.5, fontWeight: 400, color: BRAND.textMed, lineHeight: 1.75, marginBottom: 14, margin: '0 0 14px' }}>
          Notable signals from the last 24h:
        </p>
        <ul style={{ paddingLeft: 22, color: BRAND.textMed, fontSize: 14, lineHeight: 1.85, margin: '0 0 14px' }}>
          <li>Northwind Logistics raised <strong style={{ color: BRAND.text }}>$48M Series B</strong> &mdash; Argus already drafted outreach.</li>
          <li>Quest Manufacturing CFO posted on supply-chain inflation &mdash; surfaced as a <em style={{ color: BRAND.gold, fontFamily: SERIF }}>warm-thread</em>.</li>
          <li>Sea Coast Bio paused replies for 4d &mdash; Re-engager queued a fresh angle for Monday.</li>
        </ul>
        <blockquote style={{
          margin: '20px 0', padding: '14px 20px', borderLeft: `2px solid ${BRAND.gold}`,
          background: BRAND.surface2, borderRadius: '0 8px 8px 0',
          fontFamily: SERIF, fontStyle: 'italic', fontSize: 15, color: BRAND.textHigh, lineHeight: 1.6,
        }}>
          "We were budgeting Q3 for this. Send the deck."
          <cite style={{
            display: 'block', marginTop: 6, fontFamily: SANS, fontStyle: 'normal',
            fontSize: 12, color: BRAND.textLow,
          }}>— Sarah Park · VP Ops · Northwind</cite>
        </blockquote>
        <p style={{ fontSize: 14.5, fontWeight: 400, color: BRAND.textMed, lineHeight: 1.75, marginBottom: 0, margin: 0 }}>
          Tomorrow: draft a wave-2 ROI framing for FinServ accounts.
          See the underlying receipts in <a style={{ color: BRAND.gold, borderBottom: `1px solid ${BRAND.goldDim}` }}>Argus run #4128</a>.
        </p>
      </div>

      <Spec rows={[
        ['headings',         'h1 · h2 · h3 follow the type ladder (sec. 08) · italic-serif accent allowed once per heading'],
        ['paragraphs',       '14.5 · weight 400 · line-height 1.75 · color --dim'],
        ['strong',           'color --text · weight 600 · never weight 700 (too heavy on dark)'],
        ['em (italic)',      'fontFamily Instrument Serif · color gold · weight 400'],
        ['links',            'color gold · 1px gold-dim border-bottom · hover lifts to gold-soft'],
        ['lists',            '22px left-pad · 1.85 line-height · disc / decimal stay default'],
        ['blockquotes',      '2px gold left border · ink-2 bg · serif italic body · cite line in --muted'],
        ['inline code',      'background gold-dim · color gold · MONO 11 · 1px 6px padding · radius 3'],
        ['code block (pre)', 'see sec. 18 — wraps in card surface · max-height with scroll on overflow'],
        ['horizontal rule',  '<hr> = 1px var(--line) · margin 32px 0 · never decorative'],
      ]} />
    </Section>
  );
}
