'use client';
import { Section, H2, Mono, BRAND, MONO } from '../_lib/primitives';

const STEPS = [
  { n: '01', t: 'Connect',     d: 'Drop your API key in. We never persist it; OAuth where possible. Confirmation toast on success.' },
  { n: '02', t: 'Pick a goal', d: 'Choose from 12 templated outcomes (Q-pipeline, narrative audit, brand-voice extraction…) or write one in plain English.' },
  { n: '03', t: 'Approve scope', d: 'Maven proposes a 5–10 step plan. You can edit, remove, or add. No work runs until you approve.' },
  { n: '04', t: 'First run',   d: 'Maven kicks off. You see live receipts as each step completes. Approx-time + credits surfaced as the run progresses.' },
  { n: '05', t: 'Daily journal', d: 'Tomorrow at 9am, the first journal lands in your inbox + iMessage. Mood · highlights · blockers · plan.' },
];

export default function OnboardingSection() {
  return (
    <Section id="onboarding" label="38 — Onboarding Flows">
      <H2 italicTail="run.">Onboarding &mdash; from key to first</H2>

      <div style={{
        borderRadius: 14, border: `1px solid ${BRAND.hairline}`, overflow: 'hidden', marginBottom: 32,
      }}>
        {STEPS.map((s, i) => (
          <div key={s.n} style={{
            display: 'grid', gridTemplateColumns: '60px 200px 1fr',
            gap: 24, alignItems: 'center', padding: '22px 28px',
            background: i % 2 === 0 ? BRAND.surface1 : 'transparent',
            borderBottom: i < STEPS.length - 1 ? `1px solid ${BRAND.hairlineSoft}` : 'none',
          }}>
            <span style={{
              fontFamily: MONO, fontSize: 18, color: BRAND.gold, letterSpacing: '0.04em',
            }}>{s.n}</span>
            <p style={{ fontSize: 16, fontWeight: 500, color: BRAND.textHigh, margin: 0 }}>{s.t}</p>
            <p style={{ fontSize: 13.5, fontWeight: 400, color: BRAND.textMed, lineHeight: 1.65, margin: 0 }}>{s.d}</p>
          </div>
        ))}
      </div>

      <Mono label="Onboarding principles" />
      <div style={{
        padding: '20px 24px', borderRadius: 12,
        border: `1px solid ${BRAND.hairline}`, background: BRAND.surface1,
      }}>
        <p style={{ fontSize: 13, fontWeight: 400, color: BRAND.textMed, lineHeight: 1.75, margin: 0 }}>
          The first session ends with a real artifact &mdash; never a tutorial.
          Maven&rsquo;s first run is sandboxed but uses real inference against
          a real corpus. Receipts are surfaced from minute one. Skip-buttons
          are visible on every step (we never trap users in our flow), and the
          escape hatch lands them in the empty-state for that surface, not in
          a generic dashboard.
        </p>
      </div>
    </Section>
  );
}
