'use client';
import { Section, H2, Mono, BRAND, MONO, Spec } from '../_lib/primitives';

export default function GlassSection() {
  return (
    <Section id="glass" label="31 — Glass & Blur">
      <H2 italicTail="screen.">Glass &mdash; depth without</H2>

      <p style={{ fontSize: 14, fontWeight: 400, color: BRAND.textLow, lineHeight: 1.75, maxWidth: 600, marginBottom: 32 }}>
        Mavera uses backdrop-filter sparingly. Glass is reserved for surfaces that
        sit <em>over</em> moving content (sticky nav, dropdowns, toasts, modals).
        Never apply blur to a card that sits on flat ink — it costs paint cycles
        and adds no information.
      </p>

      <div style={{
        position: 'relative',
        height: 280, borderRadius: 14, overflow: 'hidden',
        border: `1px solid ${BRAND.hairline}`,
        background: `linear-gradient(135deg, ${BRAND.bg}, #0d1018, #111418)`,
        marginBottom: 24,
      }}>
        {/* Decorative aurora behind the glass */}
        <div style={{
          position: 'absolute', width: 280, height: 280, borderRadius: 999,
          top: '20%', left: '20%', background: `radial-gradient(circle, ${BRAND.gold}, transparent 60%)`,
          opacity: 0.5, filter: 'blur(60px)',
        }} />
        <div style={{
          position: 'absolute', width: 220, height: 220, borderRadius: 999,
          bottom: '10%', right: '15%', background: `radial-gradient(circle, ${BRAND.green}, transparent 60%)`,
          opacity: 0.35, filter: 'blur(50px)',
        }} />
        {/* Glass card sits on top */}
        <div style={{
          position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
          width: '70%', padding: 28, borderRadius: 14,
          background: 'rgba(11,13,16,0.55)',
          backdropFilter: 'blur(22px) saturate(1.2)',
          WebkitBackdropFilter: 'blur(22px) saturate(1.2)',
          border: `1px solid ${BRAND.hairline}`,
          boxShadow: '0 22px 40px -22px rgba(0,0,0,0.55)',
        }}>
          <p style={{
            fontFamily: MONO, fontSize: 10, color: BRAND.textDim,
            letterSpacing: '0.13em', textTransform: 'uppercase', marginBottom: 12, margin: '0 0 12px',
          }}>Glass surface · sticky nav variant</p>
          <p style={{ fontSize: 13.5, fontWeight: 400, color: BRAND.textHigh, lineHeight: 1.7, margin: 0 }}>
            Backdrop blur 22px · saturate 1.2 · bg rgba(11,13,16,0.55).
            Border 1px hairline. Outer shadow grounds the surface so it feels lifted, not floating.
          </p>
        </div>
      </div>

      <Spec rows={[
        ['scrolled nav',  'rgba(7,8,10,0.85) + blur(22px) saturate(1.5) · 1px var(--line) bottom'],
        ['unscrolled nav','rgba(7,8,10,0.55) + blur(14px) saturate(1.2) · transparent border'],
        ['dropdown',      'rgba(11,13,16,0.96) + blur(20px) · 1px var(--line)'],
        ['toast',         'rgba(11,13,16,0.96) + blur(16px) · 1px status@22%'],
        ['modal',         'rgba(11,13,16,0.96) + blur(22px) · 1px var(--line) + inset 1px gold@5%'],
        ['drawer',        'same as modal · slides from right'],
        ['tooltip',       'rgba(11,13,16,0.95) + blur(16px) · 1px var(--line)'],
        ['hard ban',      'never blur a static card on ink-1; never blur images; never blur non-overlay elements'],
      ]} />
    </Section>
  );
}
