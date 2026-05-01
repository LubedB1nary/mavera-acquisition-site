'use client';
import { Section, H2, BRAND, MONO, Spec } from '../_lib/primitives';

const STATES = [
  { name: 'Resting',    bg: BRAND.surface1, border: 'rgba(255,255,255,0.08)',  shadow: 'none', desc: 'Default. No motion. The element waits.' },
  { name: 'Hover',      bg: 'rgba(255,255,255,0.035)', border: 'rgba(200,168,255,0.28)', shadow: '0 22px 40px -22px rgba(200,168,255,0.18)', desc: 'Lift translateY(−3px) · gold-tint border · soft gold shadow.' },
  { name: 'Active',     bg: 'rgba(200,168,255,0.06)', border: 'rgba(200,168,255,0.36)', shadow: 'inset 0 0 0 1px rgba(200,168,255,0.18)', desc: 'Pressed / clicked. translateY(0) · slight inner ring.' },
  { name: 'Focused',    bg: BRAND.surface1, border: 'rgba(200,168,255,0.50)', shadow: '0 0 0 3px rgba(200,168,255,0.18)', desc: '3px gold focus halo · keyboard-only via :focus-visible.' },
  { name: 'Disabled',   bg: BRAND.surface1, border: 'rgba(255,255,255,0.03)', shadow: 'none', desc: 'Opacity 0.45 · cursor not-allowed. Use sparingly &mdash; explain why instead.' },
  { name: 'Loading',    bg: BRAND.surface1, border: 'rgba(255,255,255,0.08)', shadow: 'none', desc: 'Width-locked · spinner replaces label · pointer-events none.' },
];

export default function InteractionStatesSection() {
  return (
    <Section id="interaction-states" label="19 — Interaction States">
      <H2 italicTail="state.">Every component, every</H2>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 10, marginBottom: 32 }}>
        {STATES.map(s => (
          <div key={s.name}>
            <div style={{
              padding: '20px 22px', borderRadius: 12,
              border: `1px solid ${s.border}`, background: s.bg, boxShadow: s.shadow,
              minHeight: 120, display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
              opacity: s.name === 'Disabled' ? 0.45 : 1,
              transform: s.name === 'Hover' ? 'translateY(-3px)' : 'none',
              transition: 'all .25s',
            }}>
              <p style={{
                fontFamily: MONO, fontSize: 9.5, color: BRAND.textDim,
                letterSpacing: '0.10em', textTransform: 'uppercase', marginBottom: 12, margin: '0 0 12px',
              }}>{s.name.toLowerCase()}</p>
              <p style={{ fontSize: 13, fontWeight: 500, color: BRAND.textHigh, margin: 0 }}>Card surface</p>
            </div>
            <p style={{ fontSize: 11.5, fontWeight: 400, color: BRAND.textLow, lineHeight: 1.65, marginTop: 10, margin: '10px 0 0' }}>{s.desc}</p>
          </div>
        ))}
      </div>

      <Spec rows={[
        ['focus halo',           '0 0 0 3px var(--gold-dim) · :focus-visible only'],
        ['hover lift',           'transform translateY(-3px) · .35s --ease-smooth'],
        ['hover border',         '--line → gold@28% · 1px width unchanged'],
        ['hover shadow',         '0 22px 40px -22px gold@18%'],
        ['active state',         'translateY(0) · inset 0 0 0 1px gold@18% · 100ms back to rest'],
        ['disabled opacity',     '0.45 · cursor: not-allowed · pointer-events: auto (so tooltip works)'],
        ['loading lock',         'width frozen · spinner 14px gold · pointer-events: none'],
        ['transition default',   'all .18s ease (buttons) · all .35s --ease-smooth (cards)'],
      ]} />
    </Section>
  );
}
