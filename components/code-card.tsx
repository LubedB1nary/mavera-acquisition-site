'use client';
import { useState, ReactNode } from 'react';

const samples: Record<string, string> = {
  python: `from openai import OpenAI

client = OpenAI(
    api_key="mvra_live_…",
    base_url="https://app.mavera.io/api/v1",
)

response = client.responses.create(
    model="mavera-1",
    input="How do Gen Z consumers feel about remote work?",
    extra_body={"persona_id": "gen_z_consumer"},
)`,
  javascript: `import OpenAI from "openai";

const client = new OpenAI({
  apiKey: "mvra_live_…",
  baseURL: "https://app.mavera.io/api/v1",
});

const response = await client.responses.create({
  model: "mavera-1",
  input: "How do Gen Z consumers feel about remote work?",
  extra_body: { persona_id: "gen_z_consumer" },
});`,
  go: `client := openai.NewClient(
    option.WithAPIKey("mvra_live_…"),
    option.WithBaseURL("https://app.mavera.io/api/v1"),
)

res, err := client.Responses.Create(ctx, openai.ResponseNewParams{
    Model: "mavera-1",
    Input: "How do Gen Z consumers feel about remote work?",
    ExtraBody: map[string]any{"persona_id": "gen_z_consumer"},
})`,
};

const output = [
  { sym: '▸', text: 'POST /api/v1/responses', color: 'var(--gold)' },
  { sym: ' ', text: 'model: mavera-1 · persona: gen_z_consumer', color: 'var(--dim)' },
  { sym: '✓', text: '200 OK · 412 ms · credits: 3', color: '#7ce0a8' },
  { sym: ' ', text: '', color: 'var(--muted)' },
  { sym: ' ', text: '"Remote work feels non-negotiable to my', color: 'var(--text)' },
  { sym: ' ', text: ' generation. Return-to-office reads as', color: 'var(--text)' },
  { sym: ' ', text: ' distrust — and a reason to leave. (92%', color: 'var(--text)' },
  { sym: ' ', text: ' resonance across Gen Z urban cohort.)"', color: 'var(--text)' },
  { sym: ' ', text: '', color: 'var(--muted)' },
  { sym: ' ', text: 'sources: 4 · confidence: 0.89 · halluc: low', color: 'var(--muted)' },
];

function colorizeCode(src: string): ReactNode[] {
  const parts: ReactNode[] = [];
  const regex = /(".*?"|'.*?'|\/\/.*|#[^\n]*|\b(?:from|import|await|const|client|response|model|base_url|baseURL|extra_body|ExtraBody|ctx|err|struct|package|options?|Options?|func|return)\b|\b[A-Z][A-Za-z]+\b)/g;
  let last = 0;
  let m: RegExpExecArray | null;
  let i = 0;
  while ((m = regex.exec(src))) {
    if (m.index > last) parts.push(<span key={i++} style={{ color: 'var(--text)' }}>{src.slice(last, m.index)}</span>);
    const tok = m[0];
    let color = 'var(--text)';
    if (/^["']/.test(tok)) color = '#d8b48a';
    else if (/^(\/\/|#)/.test(tok)) color = 'var(--muted)';
    else if (/^[A-Z]/.test(tok)) color = '#c8d4e8';
    else color = '#e09a7b';
    parts.push(<span key={i++} style={{ color }}>{tok}</span>);
    last = m.index + tok.length;
  }
  if (last < src.length) parts.push(<span key={i++} style={{ color: 'var(--text)' }}>{src.slice(last)}</span>);
  return parts;
}

export function CodeCard({ customSamples, customOutput }: { customSamples?: typeof samples; customOutput?: typeof output }) {
  const [lang, setLang] = useState('python');
  const usedSamples = customSamples || samples;
  const usedOutput = customOutput || output;
  const langs: [string, string][] = [['python', 'Python'], ['javascript', 'JavaScript'], ['go', 'Go']];

  return (
    <div className="mav-card" style={{ overflow: 'hidden', background: 'var(--ink0)' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '12px 16px', borderBottom: '1px solid var(--line)' }}>
        <div style={{ display: 'flex', gap: 6, alignItems: 'center' }}>
          <span style={{ width: 10, height: 10, borderRadius: 999, background: 'rgba(255,255,255,0.08)' }} />
          <span style={{ width: 10, height: 10, borderRadius: 999, background: 'rgba(255,255,255,0.08)' }} />
          <span style={{ width: 10, height: 10, borderRadius: 999, background: 'rgba(200,168,255,0.4)' }} />
          <span className="mav-code" style={{ color: 'var(--muted)', marginLeft: 10 }}>
            mavera.{lang === 'python' ? 'py' : lang === 'javascript' ? 'ts' : 'go'}
          </span>
        </div>
        <div style={{ display: 'flex', gap: 2 }}>
          {langs.map(([k, l]) => (
            <button key={k} onClick={() => setLang(k)} style={{
              background: lang === k ? 'rgba(255,255,255,0.04)' : 'transparent',
              color: lang === k ? 'var(--gold)' : 'var(--muted)',
              border: 0, padding: '4px 10px', borderRadius: 4, cursor: 'pointer',
              fontFamily: 'var(--mono)', fontSize: 11, letterSpacing: '.04em',
            }}>{l}</button>
          ))}
        </div>
      </div>
      <pre style={{ margin: 0, padding: '20px 22px', fontFamily: 'var(--mono)', fontSize: 12.5, color: 'var(--text)', lineHeight: 1.65, overflow: 'auto' }}>
        <code>{colorizeCode(usedSamples[lang] || '')}</code>
      </pre>
      <div style={{ borderTop: '1px solid var(--line)', padding: '16px 22px', background: 'rgba(255,255,255,0.015)' }}>
        <div className="mav-code" style={{ fontSize: 10.5, color: 'var(--muted)', letterSpacing: '.1em', marginBottom: 8 }}>LIVE OUTPUT</div>
        <div style={{ fontFamily: 'var(--mono)', fontSize: 12, lineHeight: 1.55 }}>
          {usedOutput.map((ln, i) => (
            <div key={i} style={{ color: ln.color, display: 'flex', gap: 8 }}>
              <span style={{ width: 12, color: ln.color, opacity: 0.7 }}>{ln.sym}</span>
              <span>{ln.text || ' '}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
