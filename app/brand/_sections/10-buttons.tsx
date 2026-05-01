'use client';
import { Section, H2, H3, Mono, BRAND, MONO, SANS, SERIF, Spec } from '../_lib/primitives';

export default function ButtonsSection() {
  return (
    <Section id="buttons" label="10 — Buttons & Links">
      <H2 italicTail="hierarchy.">Buttons &mdash; clear</H2>

      <div style={{
        display: 'flex', gap: 12, marginBottom: 24, flexWrap: 'wrap', alignItems: 'center',
        padding: '28px 32px', borderRadius: 14,
        border: `1px solid ${BRAND.hairline}`, background: BRAND.surface1,
      }}>
        <button style={{
          padding: '12px 20px', borderRadius: 8, background: BRAND.gold, color: BRAND.bg,
          fontSize: 14, fontWeight: 500, border: 'none', cursor: 'pointer', fontFamily: SANS,
          letterSpacing: '-0.005em',
        }}>Primary</button>
        <button style={{
          padding: '12px 20px', borderRadius: 8, background: 'transparent', color: BRAND.text,
          fontSize: 14, fontWeight: 500, border: `1px solid ${BRAND.hairline}`, cursor: 'pointer', fontFamily: SANS,
          letterSpacing: '-0.005em',
        }}>Ghost</button>
        <button style={{
          padding: '8px 14px', borderRadius: 8, background: BRAND.gold, color: BRAND.bg,
          fontSize: 13, fontWeight: 500, border: 'none', cursor: 'pointer', fontFamily: SANS,
        }}>Primary · sm</button>
        <button style={{
          padding: '8px 14px', borderRadius: 8, background: 'transparent', color: BRAND.text,
          fontSize: 13, fontWeight: 500, border: `1px solid ${BRAND.hairline}`, cursor: 'pointer', fontFamily: SANS,
        }}>Ghost · sm</button>
        <button disabled style={{
          padding: '12px 20px', borderRadius: 8, background: 'transparent', color: BRAND.textGhost,
          fontSize: 14, fontWeight: 500, border: `1px solid rgba(255,255,255,0.04)`, cursor: 'not-allowed',
          fontFamily: SANS,
        }}>Disabled</button>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 10, marginBottom: 32 }}>
        <div>
          <p style={{ fontSize: 13, fontWeight: 500, color: BRAND.textHigh, marginBottom: 10, margin: '0 0 10px' }}>Primary &mdash; <span style={{ color: BRAND.textLow }}>.mav-btn--primary</span></p>
          <Spec rows={[
            ['background', 'var(--gold)  ·  #c8a8ff'],
            ['color', 'var(--ink0)  ·  #07080a'],
            ['padding', '12px 20px'],
            ['border-radius', '8px'],
            ['font-size · weight', '14 · 500'],
            ['letter-spacing', '−0.005em'],
            ['hover', 'translateY(−1px) + box-shadow gold@45%'],
            ['shimmer', '::before sweep on hover (.mav-shimmer)'],
          ]} />
        </div>
        <div>
          <p style={{ fontSize: 13, fontWeight: 500, color: BRAND.textHigh, marginBottom: 10, margin: '0 0 10px' }}>Ghost &mdash; <span style={{ color: BRAND.textLow }}>.mav-btn--ghost</span></p>
          <Spec rows={[
            ['background', 'transparent'],
            ['color', 'var(--text)  ·  #edece6'],
            ['padding', '12px 20px'],
            ['border', '1px solid var(--line)'],
            ['border-radius', '8px'],
            ['hover bg', 'rgba(255,255,255,0.03)'],
            ['hover border', 'rgba(255,255,255,0.18)'],
            ['transition', 'all .18s ease'],
          ]} />
        </div>
      </div>

      <H3>Links</H3>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 10 }}>
        {[
          { type: 'Nav link',     sample: 'Pricing',             spec: '13.5 · weight 400 · color --dim · hover bg rgba(255,255,255,0.04)' },
          { type: 'Inline link',  sample: 'docs.mavera.io ↗',    spec: '14 · weight 400 · color --gold · border-bottom 1px gold-dim' },
          { type: 'Card CTA',     sample: 'See the flywheel →',  spec: '13 · weight 500 · color --gold · arrow grows on hover' },
        ].map(l => (
          <div key={l.type} style={{
            padding: '18px 20px', borderRadius: 10,
            border: `1px solid ${BRAND.hairline}`, background: BRAND.surface1,
          }}>
            <p style={{
              fontFamily: MONO, fontSize: 10, color: BRAND.textDim,
              letterSpacing: '0.10em', textTransform: 'uppercase', marginBottom: 10, margin: '0 0 10px',
            }}>{l.type}</p>
            <p style={{
              fontSize: 14, fontWeight: 500, color: BRAND.gold, marginBottom: 10,
              borderBottom: `1px solid ${BRAND.goldDim}`, paddingBottom: 2, display: 'inline-block', margin: '0 0 10px',
            }}>{l.sample}</p>
            <p style={{ fontFamily: MONO, fontSize: 9.5, color: BRAND.textLow, lineHeight: 1.7, margin: 0 }}>{l.spec}</p>
          </div>
        ))}
      </div>

      <Mono label="Behavior Rules" />
      <div style={{
        padding: '18px 22px', borderRadius: 12,
        border: `1px solid ${BRAND.hairline}`, background: BRAND.surface1,
      }}>
        <p style={{ fontSize: 13, fontWeight: 400, color: BRAND.textMed, lineHeight: 1.75, margin: 0 }}>
          All interactive elements have a <span style={{ color: BRAND.gold, fontFamily: MONO, fontSize: 12 }}>≥ 44 × 44px</span> hit target.
          Hover lifts (translateY(−1px)), never recolors the label. Loading replaces the
          label with a spinner and locks the width. Disabled is rare &mdash; explain why
          something is unavailable in plain text instead of greying it out without context.
          Primary buttons live alone; never two primaries in the same row.
        </p>
      </div>
    </Section>
  );
}
