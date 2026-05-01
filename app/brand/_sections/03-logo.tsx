'use client';
import { Section, H2, Mono, BRAND, MONO, SERIF, DoDont, Spec } from '../_lib/primitives';

export default function LogoSection() {
  return (
    <Section id="logo" label="03 — Logo">
      <H2 italicTail="lockup.">The mark and</H2>

      {/* Primary lockup on dark + light */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10, marginBottom: 24 }}>
        <div style={{
          padding: '52px 40px', borderRadius: 14,
          border: `1px solid ${BRAND.hairline}`, background: BRAND.bg,
          display: 'flex', alignItems: 'center', gap: 12,
        }}>
          <img src="/mavera-logo.webp" alt="" width={32} height={32} style={{ filter: 'invert(1)', opacity: 0.92 }} />
          <span style={{ fontSize: 22, fontWeight: 500, letterSpacing: '-0.035em', color: BRAND.text }}>
            Mavera<span style={{ color: BRAND.gold, fontFamily: SERIF, fontStyle: 'italic', fontWeight: 400 }}>.</span>
          </span>
        </div>
        <div style={{
          padding: '52px 40px', borderRadius: 14,
          border: '1px solid rgba(0,0,0,0.08)', background: '#f5f5f3',
          display: 'flex', alignItems: 'center', gap: 12,
        }}>
          <img src="/mavera-logo.webp" alt="" width={32} height={32} style={{ opacity: 0.92 }} />
          <span style={{ fontSize: 22, fontWeight: 500, letterSpacing: '-0.035em', color: '#0c0c0c' }}>
            Mavera<span style={{ color: '#7a4eff', fontFamily: SERIF, fontStyle: 'italic', fontWeight: 400 }}>.</span>
          </span>
        </div>
      </div>

      {/* Surface gradient demonstration */}
      <Mono label="On every surface" />
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 10, marginBottom: 32 }}>
        {[
          { bg: '#07080a', label: 'Page (ink-0)', invert: true, op: 0.92 },
          { bg: '#111418', label: 'Card (ink-2)', invert: true, op: 0.85 },
          { bg: '#181b21', label: 'Raised (ink-3)', invert: true, op: 0.80 },
          { bg: '#f5f5f3', label: 'On light', invert: false, op: 0.92 },
        ].map(v => (
          <div key={v.label} style={{
            padding: '30px 16px', borderRadius: 12,
            background: v.bg, border: `1px solid ${BRAND.hairline}`,
            display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 10,
          }}>
            <img src="/mavera-logo.webp" alt="" width={28} height={28}
              style={{ filter: v.invert ? 'invert(1)' : 'none', opacity: v.op }}
            />
            <p style={{
              fontFamily: MONO, fontSize: 9,
              color: v.invert ? BRAND.textLow : 'rgba(0,0,0,0.45)',
              letterSpacing: '0.06em', textAlign: 'center', margin: 0,
            }}>{v.label}</p>
          </div>
        ))}
      </div>

      <Mono label="Sizing & Minimums" />
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 10, marginBottom: 32 }}>
        {[
          { size: 16, note: 'min · favicon' },
          { size: 20, note: 'navbar' },
          { size: 28, note: 'hero lockup' },
          { size: 40, note: 'cover / about' },
          { size: 64, note: 'splash' },
        ].map(v => (
          <div key={v.size} style={{
            padding: 20, borderRadius: 10,
            border: `1px solid ${BRAND.hairline}`, background: BRAND.surface1,
            display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12, minHeight: 130, justifyContent: 'center',
          }}>
            <img src="/mavera-logo.webp" alt="" width={v.size} height={v.size} style={{ filter: 'invert(1)', opacity: 0.85 }} />
            <p style={{ fontFamily: MONO, fontSize: 10, color: BRAND.textMed, margin: 0 }}>{v.size}px · {v.note}</p>
          </div>
        ))}
      </div>

      <Mono label="Lockup Spec" />
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10, marginBottom: 32 }}>
        <Spec rows={[
          ['mark', 'pentagonal knot · /mavera-logo.webp'],
          ['mark width', '1.45 × wordmark size'],
          ['mark filter (dark)', 'invert(1) · opacity 0.85–0.92'],
          ['mark filter (light)', 'none · opacity 0.92'],
          ['gap', '0.45 × wordmark size'],
        ]} />
        <Spec rows={[
          ['wordmark font', 'Inter · weight 500'],
          ['wordmark tracking', '−0.035em'],
          ['terminal period', 'Instrument Serif italic · weight 400'],
          ['period color (dark)', 'gold #c8a8ff'],
          ['period color (light)', '#7a4eff'],
        ]} />
      </div>

      <Mono label="Usage Rules" />
      <DoDont items={[
        { do: true,  title: 'Invert on dark surfaces',     note: 'Apply filter: invert(1). Opacity 0.80–0.92 depending on the underlying ink layer.' },
        { do: true,  title: 'Native on light surfaces',    note: 'Use mark at full color, opacity 0.92. Period stays in a violet tone (#7a4eff) for AA contrast.' },
        { do: true,  title: 'Mark + wordmark in nav',      note: 'The lockup (mark + "Mavera." with serif period) is the standard for every navigation surface.' },
        { do: false, title: 'Never recolor the mark',       note: 'Do not apply gold, agent accents, gradients, or duotones to the knot itself. The mark is monochrome.' },
        { do: false, title: 'Never use on busy backgrounds',note: 'Always ensure ≥ 4.5:1 contrast against the underlying surface. If unsure, lay a translucent ink-1 plate first.' },
        { do: false, title: 'Never scale below 16px',       note: 'The pentagonal knot loses readability under 16px. Use the wordmark only in very tight spaces.' },
      ]} />
    </Section>
  );
}
