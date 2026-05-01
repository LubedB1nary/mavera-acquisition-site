'use client';
import { Section, H2, Mono, BRAND, MONO, SANS, SERIF, Spec } from '../_lib/primitives';

export default function ModalsSection() {
  return (
    <Section id="modals" label="20 — Modals & Overlays">
      <H2 italicTail="overlays.">Modals &amp;</H2>

      <Mono label="Modal · centered · standard" />
      <div style={{
        position: 'relative', height: 380, borderRadius: 14,
        background: BRAND.bg, border: `1px solid ${BRAND.hairline}`,
        overflow: 'hidden', marginBottom: 32,
        backgroundImage:
          'radial-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), radial-gradient(rgba(255,255,255,0.04) 1px, transparent 1px)',
        backgroundSize: '24px 24px',
      }}>
        {/* Backdrop */}
        <div style={{
          position: 'absolute', inset: 0,
          background: 'rgba(7,8,10,0.72)',
          backdropFilter: 'blur(8px)', WebkitBackdropFilter: 'blur(8px)',
        }} />
        {/* Modal */}
        <div style={{
          position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
          width: 460, padding: 32, borderRadius: 18,
          border: `1px solid ${BRAND.hairline}`, background: 'rgba(11,13,16,0.96)',
          backdropFilter: 'blur(22px)',
          boxShadow: '0 40px 80px -32px rgba(0,0,0,0.7), 0 0 0 1px rgba(200,168,255,0.05)',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 14 }}>
            <p style={{
              fontFamily: MONO, fontSize: 10, color: BRAND.gold,
              letterSpacing: '0.13em', textTransform: 'uppercase', margin: 0,
            }}>Confirm action</p>
            <span style={{ fontSize: 14, color: BRAND.textLow, cursor: 'pointer' }}>×</span>
          </div>
          <h3 style={{
            fontFamily: SANS, fontSize: 24, fontWeight: 500, letterSpacing: '-0.02em',
            color: BRAND.text, marginBottom: 10, margin: '0 0 10px',
          }}>
            Spawn an Outcome<em style={{ fontFamily: SERIF, fontStyle: 'italic', color: BRAND.gold }}>?</em>
          </h3>
          <p style={{ fontSize: 13.5, fontWeight: 400, color: BRAND.textMed, lineHeight: 1.65, marginBottom: 22, margin: '0 0 22px' }}>
            Maven will plan the work, run it on cadence, and surface a daily journal.
            You can pause the Outcome any time from the Outcomes index.
          </p>
          <div style={{ display: 'flex', gap: 8, justifyContent: 'flex-end' }}>
            <button style={{
              padding: '9px 16px', borderRadius: 8, background: 'transparent',
              color: BRAND.textMed, border: `1px solid ${BRAND.hairline}`,
              fontSize: 13, fontWeight: 500, fontFamily: SANS,
            }}>Cancel</button>
            <button style={{
              padding: '9px 16px', borderRadius: 8, background: BRAND.gold,
              color: BRAND.bg, fontSize: 13, fontWeight: 500, fontFamily: SANS, border: 'none',
            }}>Spawn outcome</button>
          </div>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10, marginBottom: 32 }}>
        <Spec rows={[
          ['backdrop bg',     'rgba(7,8,10,0.72)'],
          ['backdrop blur',   'blur(8px)'],
          ['modal width',     '420–520px (sm) · 640–760 (md) · 880 (lg)'],
          ['modal radius',    '18px'],
          ['modal bg',        'rgba(11,13,16,0.96) + blur(22px)'],
          ['modal padding',   '32px (md) · 40px (lg)'],
          ['modal shadow',    '0 40px 80px -32px rgba(0,0,0,0.7)'],
          ['modal border',    '1px var(--line) + inset 1px gold@5%'],
        ]} />
        <Spec rows={[
          ['eyebrow',         'MONO 10 · gold · uppercase · tracking +0.13em'],
          ['title',           '24 · weight 500 · −0.02em · with optional serif accent'],
          ['body',            '13.5 · weight 400 · color --dim · 1.65 line-height'],
          ['footer btns',     'right-aligned · 8px gap · ghost + primary'],
          ['close · ×',       '14px · color --muted · top-right · always present'],
          ['entrance',        'opacity 0 + scale 0.96 → 1 · 220ms --ease-out'],
          ['exit',            'opacity 0 + scale 0.98 · 160ms --ease-out'],
          ['focus trap',      'first focusable on open · ESC to close'],
        ]} />
      </div>

      <Mono label="Drawer (right slide) · Maven journal" />
      <div style={{
        padding: '18px 22px', borderRadius: 12,
        border: `1px solid ${BRAND.hairline}`, background: BRAND.surface1,
      }}>
        <p style={{ fontSize: 13, fontWeight: 400, color: BRAND.textMed, lineHeight: 1.75, margin: 0 }}>
          Drawers slide in from the <span style={{ color: BRAND.gold }}>right</span> at 480px width
          (md) / 720px (lg). Same backdrop spec as the modal. Use drawers for stateful inspection
          surfaces &mdash; the Maven daily journal, the Argus run timeline, the Outcomes
          edit-detail. Modals interrupt; drawers augment.
        </p>
      </div>
    </Section>
  );
}
