'use client';
import { Section, H2, Mono, BRAND, MONO, SANS, SERIF, Spec } from '../_lib/primitives';

export default function NavigationSection() {
  return (
    <Section id="navigation" label="14 — Navigation">
      <H2 italicTail="navigation.">Site &amp; product</H2>

      <Mono label="Top navigation bar · sticky" />
      <div style={{
        borderRadius: 14, border: `1px solid ${BRAND.hairline}`,
        background: 'rgba(7,8,10,0.85)', backdropFilter: 'blur(22px) saturate(1.5)',
        padding: '0 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        height: 64, marginBottom: 16, position: 'relative', overflow: 'hidden',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 9 }}>
          <img src="/mavera-logo.webp" alt="" width={22} height={22} style={{ filter: 'invert(1)', opacity: 0.9 }} />
          <span style={{ fontSize: 15, fontWeight: 500, letterSpacing: '-0.025em', color: BRAND.text, fontFamily: SANS }}>
            Mavera<span style={{ color: BRAND.gold, fontFamily: SERIF, fontStyle: 'italic', fontWeight: 400 }}>.</span>
          </span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
          {['Platform ▾', 'Pricing', 'Trust', 'About'].map(l => (
            <span key={l} style={{
              padding: '8px 14px', fontSize: 13.5, fontWeight: 400,
              color: l === 'Trust' ? BRAND.text : BRAND.textMed,
              borderRadius: 6,
              background: l === 'Trust' ? 'rgba(255,255,255,0.04)' : 'transparent',
              fontFamily: SANS,
            }}>{l}</span>
          ))}
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <span style={{
            padding: '8px 14px', borderRadius: 8, background: 'transparent',
            color: BRAND.text, border: `1px solid ${BRAND.hairline}`,
            fontSize: 13, fontWeight: 500, fontFamily: SANS,
          }}>Sign in</span>
          <span style={{
            padding: '8px 14px', borderRadius: 8, background: BRAND.gold,
            color: BRAND.bg, fontSize: 13, fontWeight: 500, fontFamily: SANS,
          }}>Start free →</span>
        </div>
        <div style={{
          position: 'absolute', left: 0, right: 0, bottom: -1, height: 2,
          background: `linear-gradient(90deg, ${BRAND.gold} 0%, ${BRAND.goldSoft} 100%)`,
          transform: 'scaleX(0.42)', transformOrigin: '0 50%',
          boxShadow: `0 0 18px ${BRAND.goldDim}`,
        }} />
      </div>
      <Spec rows={[
        ['height',          '64px'],
        ['background',      'rgba(7,8,10,0.85) + blur(22px) saturate(1.5) · scrolled state'],
        ['border-bottom',   '1px var(--line) · scrolled state · transparent before'],
        ['progress bar',    '2px gold gradient · scaleX(scroll progress) · gold-glow shadow'],
        ['logo size',       '22px mark · 15px wordmark · gold serif italic period'],
        ['nav link rest',   'fontSize 13.5 · weight 400 · color var(--dim)'],
        ['nav link active', 'color var(--text) · bg rgba(255,255,255,0.04)'],
        ['nav link gap',    '4px (tight) — UI is rhythmic, not airy'],
        ['CTA',             'Ghost (Sign in) + Primary sm (Start free)'],
      ]} />

      <Mono label="Platform mega-menu · on hover" />
      <div style={{
        borderRadius: 14, border: `1px solid ${BRAND.hairline}`,
        background: 'rgba(7,8,10,0.96)', backdropFilter: 'blur(18px)',
        padding: 28, marginBottom: 16,
        display: 'grid', gridTemplateColumns: '1.4fr 1fr 1fr', gap: 56,
      }}>
        {[
          { title: 'Agents', items: ['Index · all agents', 'Maven · generalist', 'Argus · sales 7-agent', 'Research · 5-phase', 'Content · brand voice', 'Meetings · record · extract', 'Market intel · signals', 'Focus groups · panels', 'Ops · CRM', 'Science · ML training'] },
          { title: 'Data',     items: ['Synthetic', 'Trust & evidence layer'] },
          { title: 'Surfaces', items: ['Outcomes · long-running goals', 'Integrations · 50+ MCP', 'Platform overview', 'API · OpenAI-compatible'] },
        ].map(col => (
          <div key={col.title}>
            <p style={{
              fontFamily: MONO, fontSize: 11, color: BRAND.textDim,
              letterSpacing: '0.14em', textTransform: 'uppercase', marginBottom: 14, margin: '0 0 14px',
            }}>{col.title}</p>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 4 }}>
              {col.items.map((item, i) => (
                <li key={item} style={{
                  padding: '7px 10px', margin: '0 -10px', borderRadius: 6,
                  background: i === 0 ? 'rgba(255,255,255,0.04)' : 'transparent',
                  fontSize: 13.5, color: i === 0 ? BRAND.text : BRAND.textMed, fontFamily: SANS,
                }}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <Spec rows={[
        ['mega-menu bg',     'rgba(7,8,10,0.96) + blur(18px)'],
        ['column gap',       '56px'],
        ['column header',    'MONO 11 · uppercase · tracking +0.14em · --dim'],
        ['row padding',      '7px 10px'],
        ['row hover bg',     'rgba(255,255,255,0.04)'],
        ['row font',         '13.5 · weight 400 · Inter'],
        ['active row',       'color var(--text)'],
      ]} />
    </Section>
  );
}
