'use client';
import { Section, H2, Mono, BRAND, MONO, SANS, Spec } from '../_lib/primitives';

const RESULTS = [
  { kind: 'Page',     name: 'Pricing',                       href: '/pricing',           hint: '⌘K · enter' },
  { kind: 'Agent',    name: 'Maven · generalized assistant', href: '/agents/maven',      hint: 'enter' },
  { kind: 'Agent',    name: 'Argus · 7-agent sales',         href: '/agents/sales',      hint: 'enter' },
  { kind: 'Action',   name: 'Open trust portal',             href: 'trust.mavera.io',    hint: '↗' },
  { kind: 'Section',  name: 'Brand · 35 Tokens',             href: '/brand#tokens',      hint: 'enter' },
];

const KIND_COLOR = {
  Page:    BRAND.gold,
  Agent:   BRAND.green,
  Action:  BRAND.amber,
  Section: BRAND.blue,
} as const;

export default function SearchSection() {
  return (
    <Section id="search" label="37 — Search & Command Palette">
      <H2 italicTail="palette.">⌘K &mdash; the command</H2>

      <div style={{
        position: 'relative', height: 420, borderRadius: 14,
        border: `1px solid ${BRAND.hairline}`, background: BRAND.bg, overflow: 'hidden',
        marginBottom: 24,
        backgroundImage:
          'radial-gradient(rgba(255,255,255,0.04) 1px, transparent 1px)',
        backgroundSize: '24px 24px',
      }}>
        <div style={{
          position: 'absolute', inset: 0,
          background: 'rgba(7,8,10,0.72)',
          backdropFilter: 'blur(8px)', WebkitBackdropFilter: 'blur(8px)',
        }} />
        <div style={{
          position: 'absolute', top: '40%', left: '50%', transform: 'translate(-50%, -50%)',
          width: 540, padding: 0, borderRadius: 14,
          border: `1px solid ${BRAND.hairline}`, background: 'rgba(11,13,16,0.97)',
          backdropFilter: 'blur(22px)',
          boxShadow: '0 40px 80px -32px rgba(0,0,0,0.7)',
          overflow: 'hidden',
        }}>
          <div style={{
            display: 'flex', alignItems: 'center', gap: 12,
            padding: '14px 18px', borderBottom: `1px solid ${BRAND.hairline}`,
          }}>
            <span style={{ fontFamily: MONO, fontSize: 12, color: BRAND.textLow }}>⌘K</span>
            <input
              readOnly defaultValue="trust"
              style={{
                flex: 1, background: 'transparent', border: 'none', outline: 'none',
                fontSize: 15, color: BRAND.text, fontFamily: SANS,
              }}
            />
            <kbd style={{
              fontFamily: MONO, fontSize: 10, color: BRAND.textLow,
              padding: '2px 6px', borderRadius: 4,
              background: BRAND.surface1, border: `1px solid ${BRAND.hairline}`,
            }}>esc</kbd>
          </div>
          <div>
            {RESULTS.map((r, i) => {
              const c = KIND_COLOR[r.kind as keyof typeof KIND_COLOR];
              const active = i === 0;
              return (
                <div key={r.name} style={{
                  display: 'grid', gridTemplateColumns: '78px 1fr auto',
                  gap: 14, alignItems: 'center', padding: '12px 18px',
                  background: active ? BRAND.goldDim : 'transparent',
                  borderBottom: i < RESULTS.length - 1 ? `1px solid ${BRAND.hairlineSoft}` : 'none',
                }}>
                  <span style={{
                    fontFamily: MONO, fontSize: 9.5, color: c,
                    letterSpacing: '0.10em', textTransform: 'uppercase',
                  }}>{r.kind}</span>
                  <span style={{
                    fontSize: 13.5, fontWeight: active ? 500 : 400,
                    color: active ? BRAND.text : BRAND.textHigh,
                  }}>{r.name}</span>
                  <span style={{ fontFamily: MONO, fontSize: 10, color: BRAND.textLow }}>{r.hint}</span>
                </div>
              );
            })}
          </div>
          <div style={{
            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
            padding: '10px 18px', borderTop: `1px solid ${BRAND.hairline}`, background: BRAND.surface1,
          }}>
            <span style={{ fontFamily: MONO, fontSize: 9.5, color: BRAND.textLow }}>↑ ↓ navigate · ⏎ select · esc to close</span>
            <span style={{ fontFamily: MONO, fontSize: 9.5, color: BRAND.textLow }}>5 results</span>
          </div>
        </div>
      </div>

      <Spec rows={[
        ['trigger',          '⌘K (mac) · Ctrl+K (win) · / from any input · button in nav'],
        ['width',            '540–620px (md) · full-screen sheet on sm'],
        ['kind chip',        'MONO 9.5 · uppercase · color-coded by group'],
        ['active row bg',    'gold-dim @ 14%'],
        ['source groups',    'Pages · Agents · Actions · Sections (within docs)'],
        ['result limit',     '8 visible · scroll for more · "5 results" footer indicator'],
        ['fuzzy match',      'cmdk default · case-insensitive · matches title and aliases'],
        ['keyboard',         '↑↓ navigate · ⏎ select · ⌘+enter open in new tab · esc close'],
        ['empty state',      '"No results for `…`. Try a category."'],
      ]} />
    </Section>
  );
}
