'use client';
import { Section, H2, BRAND, MONO, SERIF } from '../_lib/primitives';

const VALUES = [
  { word: 'Defensible',  icon: '◎', def: 'Every claim traces to a source, a confidence score, an audit trail. If we can\'t defend it, we call it a draft.' },
  { word: 'Autonomous',  icon: '↻', def: 'Agents act on the authority you grant. Boundaries are explicit. Escalations are structured.' },
  { word: 'Outcome-led', icon: '→', def: 'We hand goals, not prompts. Maven composes the work, asks when stuck, reports back on its own cadence.' },
  { word: 'Dense',       icon: '▤', def: 'Maximum information, minimum visual noise. Every pixel earns its place.' },
  { word: 'Confident',   icon: '↗', def: 'Direct voice. No hedging. Lead with the answer, then the evidence.' },
  { word: 'Premium',     icon: '◻', def: 'Generous spacing, restrained color, italic-serif accents — signals quality without shouting.' },
];

const SECONDARY = [
  'Maven runs the full growth cycle so you close the deal.',
  'Every action is logged. Every source is cited.',
  'Autonomous agents. Human intelligence. Evidence on every decision.',
];

export default function IdentitySection() {
  return (
    <Section id="identity" label="01 — Brand Identity">
      <H2 italicTail="defensible.">We are</H2>

      <div style={{
        padding: '26px 30px', borderRadius: 14,
        border: `1px solid ${BRAND.hairline}`, background: BRAND.surface1,
        marginBottom: 40,
      }}>
        <p style={{
          fontFamily: MONO, fontSize: 10, color: BRAND.textDim,
          letterSpacing: '0.13em', textTransform: 'uppercase', marginBottom: 16,
        }}>Manifesto</p>
        <p style={{
          fontSize: 19, fontWeight: 400, letterSpacing: '-0.012em',
          color: BRAND.textHigh, lineHeight: 1.6, maxWidth: 680, margin: 0,
        }}>
          Decisions made on vibes fail. Mavera exists to make every important growth
          decision <em style={{ fontFamily: SERIF, fontStyle: 'italic', color: BRAND.gold }}>defensible</em> &mdash;
          traced to evidence, grounded in real audience understanding, and fast enough to matter.
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 10, marginBottom: 40 }}>
        {VALUES.map(v => (
          <div key={v.word} style={{
            padding: 22, borderRadius: 12,
            border: `1px solid ${BRAND.hairline}`, background: BRAND.surface1,
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
              <span style={{ fontSize: 14, color: BRAND.gold }}>{v.icon}</span>
              <p style={{ fontSize: 15, fontWeight: 500, letterSpacing: '-0.015em', color: BRAND.textHigh, margin: 0 }}>{v.word}</p>
            </div>
            <p style={{ fontSize: 12.5, fontWeight: 400, color: BRAND.textLow, lineHeight: 1.7, margin: 0 }}>{v.def}</p>
          </div>
        ))}
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
        <div style={{
          padding: '26px 30px', borderRadius: 12,
          border: `1px solid ${BRAND.hairline}`, background: BRAND.surface1,
        }}>
          <p style={{
            fontFamily: MONO, fontSize: 10, color: BRAND.textDim,
            letterSpacing: '0.13em', textTransform: 'uppercase', marginBottom: 12,
          }}>Primary Footer Tagline</p>
          <p style={{
            fontSize: 30, fontWeight: 500, letterSpacing: '-0.035em',
            color: BRAND.text, marginBottom: 8, marginTop: 0,
          }}>
            Receipts<span style={{ color: BRAND.gold, fontFamily: SERIF, fontStyle: 'italic', fontWeight: 400 }}>,</span> not vibes
            <span style={{ color: BRAND.gold, fontFamily: SERIF, fontStyle: 'italic', fontWeight: 400 }}>.</span>
          </p>
          <p style={{ fontSize: 12.5, fontWeight: 400, color: BRAND.textLow, lineHeight: 1.65, margin: 0 }}>
            The canonical footer line. Always with terminal period (gold serif italic).
            Sentence case. Never &ldquo;Receipts Not Vibes&rdquo; or &ldquo;Vibes vs. Receipts.&rdquo;
          </p>
        </div>
        <div style={{
          padding: '26px 30px', borderRadius: 12,
          border: `1px solid ${BRAND.hairline}`, background: BRAND.surface1,
        }}>
          <p style={{
            fontFamily: MONO, fontSize: 10, color: BRAND.textDim,
            letterSpacing: '0.13em', textTransform: 'uppercase', marginBottom: 12,
          }}>Secondary Lines</p>
          {SECONDARY.map(t => (
            <p key={t} style={{
              fontSize: 13.5, fontWeight: 400, color: BRAND.textMed, lineHeight: 1.6,
              marginBottom: 8, paddingLeft: 12, borderLeft: `1px solid ${BRAND.hairline}`,
            }}>{t}</p>
          ))}
        </div>
      </div>
    </Section>
  );
}
