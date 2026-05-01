'use client';
import { Section, H2, BRAND, MONO, Spec } from '../_lib/primitives';

const TOASTS = [
  { kind: 'success', icon: '✓', color: BRAND.green, bg: 'rgba(124,224,168,0.06)', border: 'rgba(124,224,168,0.22)',
    title: 'Outcome spawned',     body: 'Maven will run "Q2 enterprise pipeline" daily at 9am. First report tomorrow.' },
  { kind: 'error',   icon: '!', color: BRAND.rose,  bg: 'rgba(255,138,168,0.06)', border: 'rgba(255,138,168,0.22)',
    title: 'API key invalid',      body: 'mvra_live_… returned 401. Check the key in Settings → API.' },
  { kind: 'warn',    icon: '⚠', color: BRAND.amber, bg: 'rgba(255,184,124,0.06)', border: 'rgba(255,184,124,0.22)',
    title: 'Volatility · Q2 earnings', body: 'Monitor flagged 3 risk-elevated signals in the last 60s. Open Market intel?' },
  { kind: 'info',    icon: 'i', color: BRAND.blue,  bg: 'rgba(158,193,255,0.06)', border: 'rgba(158,193,255,0.22)',
    title: 'New focus group ready', body: '12 of 12 personas responded. Synthesis available in /agents/focus.' },
];

export default function ToastsSection() {
  return (
    <Section id="toasts" label="22 — Toasts & Alerts">
      <H2 italicTail="ephemeral.">Toasts &mdash;</H2>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginBottom: 24 }}>
        {TOASTS.map(t => (
          <div key={t.kind} style={{
            padding: '14px 16px', borderRadius: 12,
            background: 'rgba(11,13,16,0.96)', border: `1px solid ${t.border}`,
            backdropFilter: 'blur(16px)',
            display: 'grid', gridTemplateColumns: '28px 1fr 14px', gap: 12, alignItems: 'flex-start',
            boxShadow: '0 22px 40px -22px rgba(0,0,0,0.55)',
          }}>
            <div style={{
              width: 24, height: 24, borderRadius: 999,
              background: t.bg, border: `1px solid ${t.border}`,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              color: t.color, fontSize: 12, fontWeight: 600, fontFamily: MONO,
              marginTop: 1,
            }}>{t.icon}</div>
            <div>
              <p style={{ fontSize: 13.5, fontWeight: 500, color: BRAND.textHigh, marginBottom: 4, margin: '0 0 4px' }}>{t.title}</p>
              <p style={{ fontSize: 12.5, fontWeight: 400, color: BRAND.textMed, lineHeight: 1.55, margin: 0 }}>{t.body}</p>
            </div>
            <span style={{ fontSize: 13, color: BRAND.textLow, cursor: 'pointer' }}>×</span>
          </div>
        ))}
      </div>

      <Spec rows={[
        ['position',          'fixed · bottom-right · 20px from edges · z-index 100'],
        ['stack direction',   'newest on top · max 3 visible · older fade out'],
        ['width',             '360–420px (md) · responsive sm collapses to 92vw'],
        ['radius',            '12px'],
        ['bg',                'rgba(11,13,16,0.96) + blur(16px)'],
        ['border',            '1px · status color @22% alpha'],
        ['icon chip',         '24px round · status bg + 1px status border'],
        ['title',             '13.5 · weight 500 · --text'],
        ['body',              '12.5 · weight 400 · --dim · 1.55 line-height'],
        ['close · ×',         'top-right · always present · returns to focus origin'],
        ['enter',             'translateY(8px) + opacity 0 → 0 · 240ms --ease-out'],
        ['exit',              'translateX(20px) + opacity 0 · 200ms · auto after 5s (8s for errors)'],
        ['action button',     'optional · sits inline-right of the body · 12px gold link'],
      ]} />
    </Section>
  );
}
