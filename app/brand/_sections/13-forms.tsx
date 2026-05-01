'use client';
import { Section, H2, Mono, BRAND, MONO, SANS, Spec } from '../_lib/primitives';

export default function FormsSection() {
  return (
    <Section id="forms" label="13 — Forms & Inputs">
      <H2 italicTail="inputs.">Forms &amp;</H2>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24, marginBottom: 32 }}>
        <div>
          <Mono label="Text Input" />
          <input readOnly defaultValue="acme-corp" style={{
            width: '100%', padding: '11px 14px', borderRadius: 10,
            border: `1px solid ${BRAND.hairline}`, background: BRAND.surface1,
            color: BRAND.textHigh, fontSize: 14, fontWeight: 400, outline: 'none',
            fontFamily: SANS, marginBottom: 8,
          }} />
          <input readOnly placeholder="Goal — e.g. close 12 enterprise meetings…" style={{
            width: '100%', padding: '11px 14px', borderRadius: 10,
            border: `1px solid ${BRAND.gold}`, background: BRAND.surface1,
            color: BRAND.textHigh, fontSize: 14, fontWeight: 400, outline: 'none',
            fontFamily: SANS, boxShadow: `0 0 0 3px ${BRAND.goldDim}`,
          }} />
          <p style={{ fontFamily: MONO, fontSize: 9.5, color: BRAND.textLow, marginTop: 8, margin: '8px 0 0' }}>
            Top: resting · Bottom: focused
          </p>
        </div>
        <div>
          <Mono label="Input spec" />
          <Spec rows={[
            ['padding',         '11px 14px'],
            ['border-radius',   '10px'],
            ['border (rest)',   '1px var(--line)'],
            ['border (focus)',  '1px var(--gold)'],
            ['background',      'rgba(255,255,255,0.02)'],
            ['focus ring',      '0 0 0 3px var(--gold-dim)'],
            ['font',            '14 · weight 400 · Inter'],
            ['placeholder',     'rgba(237,236,230,0.32)'],
            ['transition',      'all .18s ease'],
          ]} />
        </div>
      </div>

      <Mono label="Select / Dropdown" />
      <div style={{
        padding: '11px 14px', borderRadius: 10,
        border: `1px solid ${BRAND.hairline}`, background: BRAND.surface1,
        color: BRAND.textMed, fontSize: 14, fontWeight: 400,
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        marginBottom: 8, cursor: 'pointer', maxWidth: 320, fontFamily: SANS,
      }}>
        <span>Pick an agent</span>
        <span style={{ fontSize: 10, color: BRAND.textLow }}>▾</span>
      </div>
      <div style={{
        borderRadius: 12, border: `1px solid ${BRAND.hairline}`,
        background: 'rgba(11,13,16,0.97)', backdropFilter: 'blur(20px)',
        overflow: 'hidden', maxWidth: 320, marginBottom: 24,
      }}>
        {[
          { name: 'Maven · generalist',   active: true },
          { name: 'Argus · 7-agent sales',active: false },
          { name: 'Research · 5-phase',   active: false },
          { name: 'Content · brand voice',active: false },
        ].map((item, i) => (
          <div key={item.name} style={{
            padding: '10px 14px',
            background: item.active ? 'rgba(200,168,255,0.08)' : 'transparent',
            borderBottom: i < 3 ? `1px solid ${BRAND.hairlineSoft}` : 'none',
            fontSize: 13, fontWeight: 400,
            color: item.active ? BRAND.gold : BRAND.textMed,
            display: 'flex', alignItems: 'center', gap: 10,
          }}>
            {item.active && <span style={{
              width: 5, height: 5, borderRadius: 999, background: BRAND.gold,
            }} />}
            {!item.active && <span style={{ width: 5 }} />}
            <span style={{ fontFamily: SANS }}>{item.name}</span>
          </div>
        ))}
      </div>

      <Spec rows={[
        ['dropdown bg',         'rgba(11,13,16,0.97) + blur(20px)'],
        ['dropdown radius',     '12px'],
        ['dropdown border',     '1px var(--line)'],
        ['item padding',        '10px 14px'],
        ['item hover bg',       'rgba(255,255,255,0.04)'],
        ['active item',         'gold@8% bg · gold text · 5px gold dot'],
        ['item font',           '13 · weight 400 · Inter'],
      ]} />
    </Section>
  );
}
