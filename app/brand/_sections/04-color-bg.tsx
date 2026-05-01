'use client';
import { Section, H2, Mono, BRAND, MONO, Swatch } from '../_lib/primitives';

export default function ColorBgSection() {
  return (
    <Section id="color-bg" label="04 — Color · Backgrounds">
      <H2 italicTail="ink scale.">Backgrounds &mdash; the</H2>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 10, marginBottom: 32 }}>
        <Swatch color="#07080a" name="Ink 0"   variable="--ink0"      note="Page canvas. The default surface for every route." />
        <Swatch color="#0b0d10" name="Ink 1"   variable="--ink1"      note="Cards on canvas. Barely lifted &mdash; signals grouping without weight." />
        <Swatch color="#111418" name="Ink 2"   variable="--ink2"      note="Panels, code blocks, tier highlights. Default container surface." />
        <Swatch color="#181b21" name="Ink 3"   variable="--ink3"      note="Raised surfaces, hover states, the Maven highlight tier." />
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 10, marginBottom: 32 }}>
        <Swatch color="rgba(255,255,255,0.08)"
          name="Hairline"      variable="--line"
          note="Standard 1px hairline between sections, table rows, card edges."
        />
        <Swatch color="rgba(255,255,255,0.04)"
          name="Hairline · soft" variable="--line-soft"
          note="Hairline inside cards, between dense rows, dashed dividers."
        />
      </div>

      <Mono label="Surface Layering Principle" />
      <div style={{
        padding: '26px 30px', borderRadius: 14,
        border: `1px solid ${BRAND.hairline}`, background: BRAND.surface1,
        marginBottom: 24,
      }}>
        <div style={{ display: 'flex', alignItems: 'flex-end', marginBottom: 22, gap: 2 }}>
          {[
            { bg: '#07080a', label: 'ink-0', h: 36 },
            { bg: '#0b0d10', label: 'ink-1', h: 50 },
            { bg: '#111418', label: 'ink-2', h: 64 },
            { bg: '#181b21', label: 'ink-3', h: 80 },
          ].map(l => (
            <div key={l.label} style={{ flex: 1 }}>
              <div style={{
                height: l.h, background: l.bg,
                borderRadius: '4px 4px 0 0',
                border: '1px solid rgba(255,255,255,0.08)',
              }} />
              <p style={{
                fontFamily: MONO, fontSize: 9, color: BRAND.textLow,
                textAlign: 'center', marginTop: 6, letterSpacing: '0.06em', margin: '6px 0 0',
              }}>{l.label}</p>
            </div>
          ))}
        </div>
        <p style={{ fontSize: 13, fontWeight: 400, color: BRAND.textMed, lineHeight: 1.75, margin: 0 }}>
          Each elevation step is roughly +4 lightness. Never skip more than one
          level between adjacent surfaces &mdash; the eye needs gradual steps to
          perceive hierarchy on a near-black canvas. Modal backdrops are the only
          exception (they jump from ink-0 to ink-3 with a backdrop-blur layer).
        </p>
      </div>

      <Mono label="Alpha Surfaces · for hover, glass, overlays" />
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 8 }}>
        {[
          { color: 'rgba(255,255,255,0.02)', name: 'Card resting',       hex: 'W + 2%' },
          { color: 'rgba(255,255,255,0.035)',name: 'Card hover',         hex: 'W + 3.5%' },
          { color: 'rgba(255,255,255,0.05)', name: 'Active / selected',  hex: 'W + 5%' },
          { color: 'rgba(255,255,255,0.08)', name: 'Popover / glass',    hex: 'W + 8%' },
        ].map(s => (
          <div key={s.name} style={{
            padding: 14, borderRadius: 10,
            border: `1px solid ${BRAND.hairline}`,
          }}>
            <div style={{
              height: 44, borderRadius: 6,
              background: s.color,
              border: '1px solid rgba(255,255,255,0.05)',
              marginBottom: 10,
            }} />
            <p style={{ fontSize: 11.5, fontWeight: 500, color: BRAND.textHigh, marginBottom: 3, margin: '0 0 3px' }}>{s.name}</p>
            <p style={{ fontFamily: MONO, fontSize: 10, color: BRAND.textLow, margin: 0 }}>{s.hex}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
