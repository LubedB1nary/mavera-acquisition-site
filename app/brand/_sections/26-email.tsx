'use client';
import { Section, H2, Mono, BRAND, MONO, SANS, SERIF, Spec } from '../_lib/primitives';

export default function EmailSection() {
  return (
    <Section id="email" label="26 — Email Design">
      <H2 italicTail="dark.">Email &mdash; defaults</H2>

      <Mono label="Notification email · Maven daily journal" />
      <div style={{
        padding: 32, borderRadius: 14,
        background: '#0a0c10', border: `1px solid ${BRAND.hairline}`,
        marginBottom: 32, maxWidth: 600, margin: '0 0 32px',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 9, marginBottom: 24 }}>
          <img src="/mavera-logo.webp" alt="" width={20} height={20} style={{ filter: 'invert(1)', opacity: 0.92 }} />
          <span style={{ fontSize: 14, fontWeight: 500, letterSpacing: '-0.025em', color: BRAND.text, fontFamily: SANS }}>
            Mavera<span style={{ color: BRAND.gold, fontFamily: SERIF, fontStyle: 'italic', fontWeight: 400 }}>.</span>
          </span>
        </div>
        <p style={{
          fontFamily: MONO, fontSize: 10, color: BRAND.textDim,
          letterSpacing: '0.13em', textTransform: 'uppercase', marginBottom: 14, margin: '0 0 14px',
        }}>Daily journal · Q2 enterprise pipeline</p>
        <h2 style={{
          fontFamily: SANS, fontSize: 26, fontWeight: 500, letterSpacing: '-0.025em',
          color: BRAND.text, lineHeight: 1.2, marginBottom: 16, margin: '0 0 16px',
        }}>
          Logistics is responding <em style={{ fontFamily: SERIF, fontStyle: 'italic', fontWeight: 400, color: BRAND.gold }}>2.4×</em> better than FinServ.
        </h2>
        <p style={{ fontSize: 14, fontWeight: 400, color: BRAND.textMed, lineHeight: 1.7, marginBottom: 22, margin: '0 0 22px' }}>
          Recommend shifting wave-2 to 60/40 toward Logistics. Tomorrow Maven will draft
          new ROI framing for the FinServ accounts that stalled at the qualifier stage.
        </p>
        <div style={{
          padding: '14px 18px', borderRadius: 10,
          border: `1px solid ${BRAND.hairlineSoft}`, background: BRAND.surface1, marginBottom: 22,
        }}>
          <p style={{ fontFamily: MONO, fontSize: 9.5, color: BRAND.textDim, marginBottom: 8, margin: '0 0 8px' }}>RECEIPTS</p>
          <p style={{ fontSize: 12, color: BRAND.textLow, lineHeight: 1.7, margin: 0 }}>
            8 outreach replies · sentiment +0.62 avg · 3 calls booked · sources: Argus run #4128
          </p>
        </div>
        <a style={{
          display: 'inline-block',
          padding: '10px 18px', borderRadius: 8,
          background: BRAND.gold, color: BRAND.bg,
          fontSize: 13, fontWeight: 500, fontFamily: SANS,
          textDecoration: 'none',
        }}>Open the journal →</a>
        <div style={{ height: 1, background: BRAND.hairline, margin: '28px 0 16px' }} />
        <p style={{
          fontFamily: MONO, fontSize: 9, color: BRAND.textGhost,
          letterSpacing: '0.04em', lineHeight: 1.7, margin: 0,
        }}>
          Mavera, Inc. · Delaware C-Corp · DBA in Illinois<br />
          Receipts, not vibes. — <span style={{ color: BRAND.textLow }}>Unsubscribe</span>
        </p>
      </div>

      <Spec rows={[
        ['width',           '600px max · responsive collapses to single-column at 480px'],
        ['bg',              '#0a0c10 (slightly lighter than --ink0 to clear Gmail dark-mode quirks)'],
        ['padding',         '32px container · 22–28px section'],
        ['type stack',      'system-ui fallback first · web fonts skipped (mail clients strip them)'],
        ['headline',        '26 · weight 500 · −0.025em · with one italic-serif accent (Georgia fallback)'],
        ['body',            '14 · weight 400 · color --dim · 1.7 line-height'],
        ['CTA',             'Single primary button · gold bg · NEVER more than one'],
        ['receipts block',  'Always present · 12px MONO body explaining the underlying evidence'],
        ['footer',          'MONO 9 · ghost text · entity address + tagline + unsubscribe'],
        ['no images',       'Zero hero images. Mark + wordmark only. Reduce render cost & spam-flag risk.'],
        ['preheader',       '90 chars max · echoes the headline minus formatting'],
      ]} />
    </Section>
  );
}
