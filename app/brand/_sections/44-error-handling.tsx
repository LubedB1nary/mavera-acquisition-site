'use client';
import { Section, H2, Mono, BRAND, MONO, SANS, SERIF, CopyPair } from '../_lib/primitives';

export default function ErrorHandlingSection() {
  return (
    <Section id="error-handling" label="44 — Error Handling">
      <H2 italicTail="failure.">Errors &mdash; useful even in</H2>

      <div style={{
        padding: 32, borderRadius: 14,
        border: `1px solid rgba(255,138,168,0.22)`, background: 'rgba(255,138,168,0.04)',
        marginBottom: 24,
      }}>
        <p style={{
          fontFamily: MONO, fontSize: 10, color: BRAND.rose,
          letterSpacing: '0.13em', textTransform: 'uppercase', marginBottom: 14, margin: '0 0 14px',
        }}>Error · 401 · invalid_api_key</p>
        <h3 style={{
          fontFamily: SANS, fontSize: 24, fontWeight: 500, letterSpacing: '-0.020em',
          color: BRAND.textHigh, marginBottom: 12, margin: '0 0 12px',
        }}>
          That key didn&rsquo;t <em style={{ fontFamily: SERIF, fontStyle: 'italic', color: BRAND.gold }}>work.</em>
        </h3>
        <p style={{ fontSize: 14, fontWeight: 400, color: BRAND.textMed, lineHeight: 1.7, marginBottom: 18, margin: '0 0 18px' }}>
          The API returned <span style={{ fontFamily: MONO, color: BRAND.rose }}>401</span> for the key
          starting <span style={{ fontFamily: MONO, color: BRAND.text }}>mvra_live_4f2a…</span>.
          Check that the key hasn&rsquo;t been rotated in <span style={{ color: BRAND.gold }}>Settings → API</span>.
        </p>
        <div style={{ display: 'flex', gap: 8, marginBottom: 16 }}>
          <button style={{
            padding: '9px 16px', borderRadius: 8, background: BRAND.gold,
            color: BRAND.bg, fontSize: 13, fontWeight: 500, border: 'none', fontFamily: SANS,
          }}>Open API settings</button>
          <button style={{
            padding: '9px 16px', borderRadius: 8, background: 'transparent',
            color: BRAND.textMed, border: `1px solid ${BRAND.hairline}`,
            fontSize: 13, fontWeight: 500, fontFamily: SANS,
          }}>Copy request ID</button>
        </div>
        <p style={{
          fontFamily: MONO, fontSize: 10, color: BRAND.textLow,
          padding: '8px 12px', background: BRAND.surface1, borderRadius: 6,
          border: `1px solid ${BRAND.hairlineSoft}`, margin: 0,
        }}>
          req_id · 01J1FAYW8B3NGEK · ts 2026-04-30T16:23:14Z · trace mavera-api-edge
        </p>
      </div>

      <Mono label="Error copy patterns" />
      <CopyPair
        bad="An unexpected error occurred. Please contact support."
        good="Maven couldn't reach the CRM. We saved the run; click Retry to try again, or open settings to swap the credential."
      />
      <CopyPair
        bad="Invalid input."
        good="Goal must be at least 5 words. The current draft is 3."
      />
      <CopyPair
        bad="Permission denied."
        good="Your role (Viewer) can read Outcomes but not spawn them. Ask Jill (workspace admin) to grant Editor."
      />

      <div style={{
        marginTop: 24, padding: '20px 24px', borderRadius: 12,
        border: `1px solid ${BRAND.hairline}`, background: BRAND.surface1,
      }}>
        <p style={{
          fontFamily: MONO, fontSize: 10, color: BRAND.textDim,
          letterSpacing: '0.13em', textTransform: 'uppercase', marginBottom: 12, margin: '0 0 12px',
        }}>Anatomy of a good error</p>
        <ol style={{ paddingLeft: 18, margin: 0, color: BRAND.textMed, fontSize: 13, lineHeight: 1.85 }}>
          <li><strong style={{ color: BRAND.text }}>Status chip</strong> — MONO uppercase code · rose · always copyable.</li>
          <li><strong style={{ color: BRAND.text }}>Headline</strong> — what failed, in the user&rsquo;s words.</li>
          <li><strong style={{ color: BRAND.text }}>Body</strong> — why, with the specific values that caused it.</li>
          <li><strong style={{ color: BRAND.text }}>Two CTAs</strong> — the recovery action + the secondary investigation action.</li>
          <li><strong style={{ color: BRAND.text }}>Receipt</strong> — request ID + timestamp + trace name in MONO. Always copyable.</li>
        </ol>
      </div>
    </Section>
  );
}
