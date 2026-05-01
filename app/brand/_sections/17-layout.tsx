'use client';
import { Section, H2, Mono, BRAND, MONO, Spec } from '../_lib/primitives';

const ZONES = [
  { zone: 'Sticky Nav',   h: 32, bg: 'rgba(255,255,255,0.05)', desc: '64px tall · blur(22px) · scroll-progress gold gradient on bottom edge' },
  { zone: 'Hero',         h: 90, bg: 'rgba(255,255,255,0.02)', desc: '120px top pad · headline + lede + CTA row + 4-stat bar · aurora bg' },
  { zone: 'Trusted by',   h: 36, bg: 'rgba(255,255,255,0.01)', desc: 'PipelineRow marquee · 32s loop · 7 customer logos with edge-mask' },
  { zone: 'Section · 02', h: 80, bg: 'rgba(255,255,255,0.02)', desc: 'eyebrow + h2 + lede grid · interactive demo · cross-link to /agents' },
  { zone: 'Section · 03', h: 80, bg: 'rgba(255,255,255,0.01)', desc: 'ink-1 surface · OutcomesCalendar · cadence narrative' },
  { zone: 'Section · 04', h: 80, bg: 'rgba(255,255,255,0.02)', desc: 'h2 + lede · synthetic-intelligence panel demo · stat list' },
  { zone: 'Section · 05', h: 80, bg: 'rgba(255,255,255,0.01)', desc: '5-phase research card · 4 evidence-row points · ink-1 surface' },
  { zone: 'Section · 06', h: 70, bg: 'rgba(255,255,255,0.02)', desc: 'Platform tiles · 6 tiles · 3-col grid · sheen on hover' },
  { zone: 'Section · 07', h: 80, bg: 'rgba(255,255,255,0.01)', desc: 'Developers · OpenAI-compatible code card · ink-1 surface' },
  { zone: 'Section · 08', h: 70, bg: 'rgba(255,255,255,0.02)', desc: 'Trust posture · cert badges + live trust portal panel' },
  { zone: 'Section · 09', h: 80, bg: 'rgba(255,255,255,0.02)', desc: 'Pricing preview · 3 tiered cards with TiltCard motion' },
  { zone: 'Closing CTA',  h: 48, bg: 'rgba(255,255,255,0.02)', desc: 'Per-page customizable headline + 2-button CTA · radial gold glow' },
  { zone: 'Footer',       h: 40, bg: 'rgba(255,255,255,0.01)', desc: 'CertBadges · 4 link columns · "Receipts, not vibes." rail' },
];

export default function LayoutSection() {
  return (
    <Section id="layout" label="17 — Layout & Grid">
      <H2 italicTail="rhythm.">Spacing &amp;</H2>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10, marginBottom: 32 }}>
        <Spec rows={[
          ['.mav-container',  'max-width 1200px · padding 0 64px'],
          ['nav height',      '64px'],
          ['hero top pad',    '120px'],
          ['hero bottom pad', '100px'],
          ['Section pad',     '80–120px vertical (Section / dense)'],
          ['card gap',        '8–16px (tight) · 24px (rare)'],
          ['card pad',        '22–28px (default) · 32–40px (featured)'],
          ['feature card',    '36–40px pad · gold-dim border on hover'],
        ]} />
        <Spec rows={[
          ['card radius',         '14px (default)'],
          ['feature card radius', '16px'],
          ['dropdown radius',     '12px'],
          ['input radius',        '10px'],
          ['badge radius',        '999px (pill)'],
          ['eyebrow radius',      '4px (sharp)'],
          ['modal radius',        '18px'],
          ['breakpoint sm · md · lg', '640 · 768 · 1024 · 1280'],
        ]} />
      </div>

      <Mono label="Page template — Homepage" />
      <div style={{
        borderRadius: 14, border: `1px solid ${BRAND.hairline}`, overflow: 'hidden', marginBottom: 32,
      }}>
        {ZONES.map((z, i) => (
          <div key={z.zone} style={{
            display: 'grid', gridTemplateColumns: '160px 1fr',
            gap: 0, borderBottom: i < ZONES.length - 1 ? `1px solid ${BRAND.hairlineSoft}` : 'none',
            height: z.h,
          }}>
            <div style={{
              background: z.bg, display: 'flex', alignItems: 'center', padding: '0 18px',
              borderRight: `1px solid ${BRAND.hairlineSoft}`,
            }}>
              <p style={{ fontFamily: MONO, fontSize: 10, color: BRAND.textMed, letterSpacing: '0.04em', margin: 0 }}>{z.zone}</p>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', padding: '0 22px' }}>
              <p style={{ fontSize: 11.5, fontWeight: 400, color: BRAND.textLow, lineHeight: 1.55, margin: 0 }}>{z.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <Mono label="Container behavior" />
      <div style={{
        padding: '20px 24px', borderRadius: 12,
        border: `1px solid ${BRAND.hairline}`, background: BRAND.surface1,
      }}>
        <p style={{ fontSize: 13, fontWeight: 400, color: BRAND.textMed, lineHeight: 1.75, margin: 0 }}>
          Every section sits inside <span style={{ color: BRAND.gold, fontFamily: MONO, fontSize: 12 }}>.mav-container</span> &mdash;
          <span style={{ color: BRAND.gold, fontFamily: MONO, fontSize: 12 }}> max-width 1200</span> with
          <span style={{ color: BRAND.gold, fontFamily: MONO, fontSize: 12 }}> 64px gutters</span>. Hero
          and CTA sections add their own ambient layers (aurora, grid, particles) absolutely positioned
          inside the container. Never break out of the container without a structural reason &mdash; full-bleed
          surfaces are reserved for the marquee row and the in-page footer.
        </p>
      </div>
    </Section>
  );
}
