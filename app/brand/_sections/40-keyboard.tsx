'use client';
import { Section, H2, Mono, BRAND, MONO, Spec } from '../_lib/primitives';

const SHORTCUTS = [
  { keys: ['⌘', 'K'], action: 'Open command palette',                where: 'global' },
  { keys: ['/'],      action: 'Focus search (when not in input)',    where: 'global' },
  { keys: ['Esc'],    action: 'Close modal / drawer / palette',      where: 'global' },
  { keys: ['?'],      action: 'Open keyboard shortcuts overlay',     where: 'global' },
  { keys: ['G', 'A'], action: 'Go to /agents',                       where: 'global' },
  { keys: ['G', 'P'], action: 'Go to /pricing',                      where: 'global' },
  { keys: ['G', 'T'], action: 'Go to /trust',                        where: 'global' },
  { keys: ['⏎'],      action: 'Spawn outcome / submit form',         where: 'forms' },
  { keys: ['⌘', '⏎'], action: 'Submit + open in new tab',           where: 'forms' },
  { keys: ['Tab'],    action: 'Move to next focusable element',      where: 'global · standard' },
  { keys: ['↑', '↓'], action: 'Navigate list / palette results',     where: 'lists' },
];

function Kbd({ children }: { children: React.ReactNode }) {
  return (
    <kbd style={{
      fontFamily: MONO, fontSize: 11,
      padding: '3px 7px', borderRadius: 5,
      background: BRAND.surface1, color: BRAND.textHigh,
      border: `1px solid ${BRAND.hairline}`,
      boxShadow: 'inset 0 -1px 0 rgba(0,0,0,0.4)',
      lineHeight: 1.2,
    }}>{children}</kbd>
  );
}

export default function KeyboardSection() {
  return (
    <Section id="keyboard" label="40 — Keyboard & Focus">
      <H2 italicTail="default.">Keyboard &mdash; first-class by</H2>

      <div style={{
        borderRadius: 14, border: `1px solid ${BRAND.hairline}`, overflow: 'hidden', marginBottom: 32,
      }}>
        <div style={{
          display: 'grid', gridTemplateColumns: '180px 1fr 100px',
          gap: 16, padding: '12px 22px',
          background: BRAND.surface1, borderBottom: `1px solid ${BRAND.hairline}`,
        }}>
          {['Keys', 'Action', 'Scope'].map(h => (
            <p key={h} style={{
              fontFamily: MONO, fontSize: 9.5, color: BRAND.textDim,
              letterSpacing: '0.10em', textTransform: 'uppercase', margin: 0,
            }}>{h}</p>
          ))}
        </div>
        {SHORTCUTS.map((s, i) => (
          <div key={i} style={{
            display: 'grid', gridTemplateColumns: '180px 1fr 100px',
            gap: 16, alignItems: 'center', padding: '14px 22px',
            background: i % 2 === 0 ? BRAND.surface1 : 'transparent',
            borderBottom: i < SHORTCUTS.length - 1 ? `1px solid ${BRAND.hairlineSoft}` : 'none',
          }}>
            <div style={{ display: 'flex', gap: 4, alignItems: 'center' }}>
              {s.keys.map((k, j) => (
                <span key={j} style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                  <Kbd>{k}</Kbd>
                  {j < s.keys.length - 1 && <span style={{ fontFamily: MONO, fontSize: 10, color: BRAND.textLow }}>then</span>}
                </span>
              ))}
            </div>
            <p style={{ fontSize: 13, fontWeight: 400, color: BRAND.textHigh, margin: 0 }}>{s.action}</p>
            <p style={{ fontFamily: MONO, fontSize: 10, color: BRAND.textLow, margin: 0 }}>{s.where}</p>
          </div>
        ))}
      </div>

      <Mono label="Focus rules" />
      <Spec rows={[
        ['focus-visible',     'All focus rings are :focus-visible only — no rings on click, full rings on Tab'],
        ['focus ring',        '0 0 0 3px var(--gold-dim) · radius matches the element\'s'],
        ['skip link',         'First focus stop on every page · "Skip to main content" · jumps to <main>'],
        ['focus trap',        'Modals + drawers + palette · ESC always exits · returns focus to trigger'],
        ['scroll-into-view',  'On focus, programmatically scroll if element is off-screen · smooth · 60ms'],
        ['focus order',       'Visual = DOM = focus. If they diverge, the layout is wrong, not the tabindex.'],
        ['initial focus',     'Modals → primary CTA · forms → first invalid field on submit · palette → input'],
      ]} />
    </Section>
  );
}
