'use client';
import { Section, H2, H3, Mono, BRAND, MONO, CopyPair } from '../_lib/primitives';

const PRINCIPLES = [
  { n: '01', t: 'Lead with the answer', d: 'State the result first, then the evidence. "98% agreement with the OASIS study — here\'s how." Not "After running our benchmark across multiple panels, we found that…"' },
  { n: '02', t: 'Be the expert, not the salesperson', d: 'Use technical vocabulary without apology. Never dumb down. Buyers know AI is a category — they need to know what makes us defensible.' },
  { n: '03', t: 'Specifics beat superlatives', d: '"295K+ media sources under continuous monitoring" beats "industry-leading market intelligence." Always.' },
  { n: '04', t: 'Short over long', d: 'If a sentence can be two words, make it two words. Fragments are fine. Confidence reads short. Long sentences hedge.' },
];

const USE_WORDS = [
  'traces to', 'sourced from', 'inspectable', 'calibrated', 'structured', 'extracted',
  'defensible', 'grounded in', 'evidence', 'signal', 'benchmark', 'persona',
  'validated', 'scored', 'receipts', 'autonomous', 'orchestrate', 'compose',
];
const AVOID_WORDS = [
  'AI-powered', 'game-changing', 'revolutionary', 'unlock', 'leverage', 'harness',
  'cutting-edge', 'seamlessly', 'robust', 'intuitive', 'powerful', 'innovative',
  'paradigm', 'synergy', 'world-class', 'disrupt', 'next-gen', 'best-in-class',
];

export default function VoiceSection() {
  return (
    <Section id="voice" label="02 — Voice & Copy">
      <H2 italicTail="receipts.">Write like a human who keeps</H2>

      <H3>Writing Principles</H3>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10, marginBottom: 40 }}>
        {PRINCIPLES.map(p => (
          <div key={p.n} style={{
            padding: '20px 22px', borderRadius: 12,
            border: `1px solid ${BRAND.hairline}`, background: BRAND.surface1,
          }}>
            <span style={{
              fontFamily: MONO, fontSize: 10, color: BRAND.gold,
              letterSpacing: '0.12em', marginBottom: 8, display: 'block',
            }}>{p.n}</span>
            <p style={{ fontSize: 14, fontWeight: 500, color: BRAND.textHigh, marginBottom: 6, marginTop: 0 }}>{p.t}</p>
            <p style={{ fontSize: 12.5, fontWeight: 400, color: BRAND.textLow, lineHeight: 1.7, margin: 0 }}>{p.d}</p>
          </div>
        ))}
      </div>

      <H3>Vocabulary</H3>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10, marginBottom: 32 }}>
        <div style={{ padding: '18px 20px', borderRadius: 12, border: '1px solid rgba(124,224,168,0.22)', background: 'rgba(124,224,168,0.03)' }}>
          <span style={{ fontFamily: MONO, fontSize: 10, color: BRAND.green, letterSpacing: '0.10em', marginBottom: 12, display: 'block' }}>✓  USE</span>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
            {USE_WORDS.map(w => (
              <span key={w} style={{
                fontSize: 12, color: BRAND.textHigh,
                padding: '3px 10px', borderRadius: 100,
                background: 'rgba(124,224,168,0.08)',
                border: '1px solid rgba(124,224,168,0.15)',
              }}>{w}</span>
            ))}
          </div>
        </div>
        <div style={{ padding: '18px 20px', borderRadius: 12, border: '1px solid rgba(255,138,168,0.20)', background: 'rgba(255,138,168,0.03)' }}>
          <span style={{ fontFamily: MONO, fontSize: 10, color: BRAND.rose, letterSpacing: '0.10em', marginBottom: 12, display: 'block' }}>✕  AVOID</span>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
            {AVOID_WORDS.map(w => (
              <span key={w} style={{
                fontSize: 12, color: BRAND.textMed,
                padding: '3px 10px', borderRadius: 100,
                background: 'rgba(255,138,168,0.06)',
                border: '1px solid rgba(255,138,168,0.15)',
                textDecoration: 'line-through', textDecorationColor: BRAND.rose,
              }}>{w}</span>
            ))}
          </div>
        </div>
      </div>

      <Mono label="Voice Examples" />
      <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
        <CopyPair
          bad="Harness the power of AI to unlock audience insights."
          good="Ask your audience anything. Get a sourced answer in seconds."
        />
        <CopyPair
          bad="Our cutting-edge platform revolutionizes audience research."
          good="Replace a 6-week study with a 90-second focus group."
        />
        <CopyPair
          bad="Seamlessly integrate Mavera into your workflow."
          good="OpenAI-compatible API. Drop in mavera-1, ship today."
        />
        <CopyPair
          bad="Our intelligent agents leverage data to drive growth."
          good="Maven runs the full growth cycle so you close the deal."
        />
      </div>
    </Section>
  );
}
