'use client';
import { Section, H2, Mono, BRAND, MONO, Code, Pre } from '../_lib/primitives';

export default function MotionSection() {
  return (
    <Section id="motion" label="16 — Motion">
      <H2 italicTail="information.">Motion serves</H2>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24, marginBottom: 32 }}>
        <div>
          <Mono label="Easing curves" />
          {[
            { name: '--ease-out',    css: 'cubic-bezier(0.16, 1, 0.3, 1)',     use: 'UI entrances. Fast out, gentle land.', color: BRAND.gold },
            { name: '--ease-smooth', css: 'cubic-bezier(0.2, 0.7, 0.2, 1)',    use: 'Reveal-on-scroll, hover lifts, cards.', color: BRAND.green },
            { name: '--ease-in-out', css: 'cubic-bezier(0.4, 0, 0.2, 1)',      use: 'Looping, reversible, idle animations.', color: BRAND.blue },
            { name: '--ease-spring', css: 'cubic-bezier(0.34, 1.56, 0.64, 1)', use: 'Playful — used sparingly on CTAs.',     color: BRAND.amber },
          ].map(e => (
            <div key={e.name} style={{
              paddingBottom: 14, marginBottom: 14, borderBottom: `1px solid ${BRAND.hairlineSoft}`,
            }}>
              <p style={{ fontFamily: MONO, fontSize: 11, color: e.color, marginBottom: 4, margin: '0 0 4px' }}>{e.name}</p>
              <p style={{ fontFamily: MONO, fontSize: 10, color: BRAND.textLow, marginBottom: 6, margin: '0 0 6px' }}>{e.css}</p>
              <p style={{ fontSize: 12, fontWeight: 400, color: BRAND.textLow, lineHeight: 1.6, margin: 0 }}>{e.use}</p>
            </div>
          ))}
        </div>
        <div>
          <Mono label="Duration scale" />
          {[
            { name: '--dur-fast',  v: '180ms', u: 'Hover, color, opacity, focus rings.' },
            { name: '--dur-base',  v: '350ms', u: 'Cards, panels, tooltips, dropdowns.' },
            { name: '--dur-slow',  v: '600ms', u: 'Reveal-on-scroll, page sections.' },
            { name: '--dur-cinematic', v: '900ms', u: 'Hero entrance, word reveals, marquees.' },
            { name: '--dur-loop-aurora', v: '16–28s', u: 'Background aurora drift in hero / CTA.' },
          ].map(d => (
            <div key={d.name} style={{
              display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start',
              paddingBottom: 14, marginBottom: 14,
              borderBottom: `1px solid ${BRAND.hairlineSoft}`, gap: 12,
            }}>
              <div>
                <p style={{ fontFamily: MONO, fontSize: 11, color: BRAND.textHigh, marginBottom: 4, margin: '0 0 4px' }}>{d.name}</p>
                <p style={{ fontSize: 12, fontWeight: 400, color: BRAND.textLow, lineHeight: 1.6, margin: 0 }}>{d.u}</p>
              </div>
              <p style={{ fontFamily: MONO, fontSize: 13, color: BRAND.gold, whiteSpace: 'nowrap', margin: 0 }}>{d.v}</p>
            </div>
          ))}
        </div>
      </div>

      <Mono label="Acquisition-site keyframes" />
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 8, marginBottom: 24 }}>
        {[
          { name: 'mav-rise-soft',  detail: 'opacity 0 + y 14 → 0 · 1s --ease-smooth · used on lede + stats bar' },
          { name: 'mav-word-in',    detail: 'opacity 0 + y 40% + skewY 4 + blur 8 → 0 · staggered hero word reveal' },
          { name: 'mav-aurora',     detail: '16s loop · scale + translate · driving the hero gradient bloom' },
          { name: 'mav-grid-pan',   detail: '18s linear · animates the 64px line grid bg in the hero' },
          { name: 'mav-shimmer',    detail: '1.1s on hover · sweeps a 110° gradient across primary buttons' },
          { name: 'mav-pulse',      detail: '1.6–1.8s ease-in-out · live status dots, ring overlays' },
          { name: 'mav-marquee',    detail: '32s linear · the "Trusted by" customer reel' },
          { name: 'mav-line-trace', detail: '4.5s ease-out · stroke-dashoffset on the hero SVG paths' },
        ].map(k => (
          <div key={k.name} style={{
            padding: '14px 18px', borderRadius: 10,
            border: `1px solid ${BRAND.hairline}`, background: BRAND.surface1,
          }}>
            <p style={{ fontFamily: MONO, fontSize: 11.5, color: BRAND.gold, marginBottom: 6, margin: '0 0 6px' }}>@keyframes {k.name}</p>
            <p style={{ fontSize: 12, color: BRAND.textLow, lineHeight: 1.6, margin: 0 }}>{k.detail}</p>
          </div>
        ))}
      </div>

      <Mono label="Reveal-on-scroll pattern" />
      <Pre>{`<Reveal stagger style={...}>            // adds .mav-reveal + .mav-stagger
  {items.map(item => (
    <Card key={item.id}>...</Card>      // children get staggered transition-delays
  ))}
</Reveal>

// Once visible, .mav-reveal.is-in flips:
// opacity 0 → 1, transform → none, filter blur(4px) → 0
// over .9s --ease-smooth.  once: true — never animate twice.`}</Pre>

      <div style={{
        marginTop: 24, padding: '20px 24px', borderRadius: 12,
        border: `1px solid ${BRAND.hairline}`, background: BRAND.surface1,
      }}>
        <p style={{
          fontFamily: MONO, fontSize: 10, color: BRAND.textDim,
          letterSpacing: '0.13em', textTransform: 'uppercase', marginBottom: 12, margin: '0 0 12px',
        }}>Motion principles</p>
        <p style={{ fontSize: 13, fontWeight: 400, color: BRAND.textMed, lineHeight: 1.75, margin: 0 }}>
          All animation reveals hierarchy, confirms a state change, or guides attention. Never decorate.
          Use <Code>once: true</Code> on every scroll-triggered reveal &mdash; sections animate in once and
          stay. Never animate <Code>color</Code>; only <Code>opacity</Code>, <Code>transform</Code>,
          <Code>filter</Code>. All ambient loops respect <Code>prefers-reduced-motion</Code> via the
          global override in <Code>globals.css</Code>.
        </p>
      </div>
    </Section>
  );
}
