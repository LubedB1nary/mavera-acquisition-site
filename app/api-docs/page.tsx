import { MavNav } from '@/components/nav';
import { MavFooter } from '@/components/footer';
import { Section } from '@/components/section';
import { ClosingCTA } from '@/components/closing-cta';
import { CodeCard } from '@/components/code-card';
import { Check, ArrowRight } from '@/components/icons';

const endpoints: [string, string, string][] = [
  ['/v1/responses',        'Persona-enhanced response (OpenAI-compatible)',  '1–3'],
  ['/v1/research',         '5-phase research · cited · confidence-scored',   '8–14'],
  ['/v1/focus',            'Synthetic focus group · 12 question types',      '4–40'],
  ['/v1/content/test',     'Pre-test content against a panel',               '3–12'],
  ['/v1/meetings',         'Transcribe + extract · structured output',       '6'],
  ['/v1/voice',            'Brand voice extraction + generation',            '2–5'],
  ['/v1/signals',          'Live signal scan over 295K+ sources',            '0.1/hr'],
  ['/v1/agents/sales',     'Run the Argus pipeline on a signal',             '18–30'],
  ['/v1/synthetic',        'Generate synthetic data · all modalities',       '3–8'],
  ['/v1/outcomes',         'Spawn an outcome · schedule · wake-up',          '3/wake'],
  ['/v1/crm',              'Query the owned-CRM surface',                    '1'],
];

export default function ApiPage() {
  return (
    <>
      <MavNav />
      <section style={{ padding: '120px 0 60px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 900px 500px at 70% 0%, rgba(200,168,255,0.1), transparent 60%)' }} />
        <div className="mav-container" style={{ position: 'relative', zIndex: 2 }}>
          <div className="mav-eyebrow" style={{ marginBottom: 20 }}>/ api</div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: 72, alignItems: 'center' }}>
            <div>
              <h1 className="mav-h1" style={{ fontSize: 76 }}><em>OpenAI-compatible.</em><br />Change one line.</h1>
              <p className="mav-lede" style={{ maxWidth: 520, marginTop: 28 }}>
                Drop-in for the Responses API. Add a <span style={{ color: 'var(--text)', fontFamily: 'var(--mono)' }}>persona_id</span> and the model becomes a calibrated respondent.
              </p>
              <ul style={{ listStyle: 'none', padding: 0, margin: '28px 0 0', display: 'flex', flexDirection: 'column', gap: 10 }}>
                {[
                  '200+ workflow templates · ready-to-run',
                  'Credit-based pricing · every response shows cost',
                  'Built for non-developers using Claude Code, Cursor, Codex',
                  'model: mavera-1 · 11 feature areas exposed',
                ].map(t => (
                  <li key={t} style={{ fontSize: 14, color: 'var(--dim)', display: 'flex', gap: 10 }}><Check size={14} />{t}</li>
                ))}
              </ul>
              <div style={{ display: 'flex', gap: 12, marginTop: 36, flexWrap: 'wrap' }}>
                <a href="#" className="mav-btn mav-btn--primary">Get API key · free <ArrowRight /></a>
                <a href="/pricing#api" className="mav-btn mav-btn--ghost">See API pricing</a>
                <a href="#" className="mav-btn mav-btn--ghost">docs.mavera.io</a>
              </div>
            </div>
            <CodeCard />
          </div>
        </div>
      </section>

      <Section eyebrow="Endpoints">
        <div className="mav-card" style={{ padding: 0, overflow: 'hidden' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '260px 1fr 120px', padding: '16px 22px', borderBottom: '1px solid var(--line)', fontFamily: 'var(--mono)', fontSize: 11, color: 'var(--muted)', letterSpacing: '.08em', textTransform: 'uppercase' }}>
            <span>Path</span><span>What it does</span><span style={{ textAlign: 'right' }}>Credits</span>
          </div>
          {endpoints.map(([path, desc, credits]) => (
            <div key={path} style={{ display: 'grid', gridTemplateColumns: '260px 1fr 120px', padding: '14px 22px', borderBottom: '1px solid var(--line-soft)', alignItems: 'center' }}>
              <span className="mav-code" style={{ color: 'var(--gold)' }}>{path}</span>
              <span style={{ fontSize: 13.5, color: 'var(--dim)' }}>{desc}</span>
              <span className="mav-code" style={{ textAlign: 'right', color: 'var(--dim)' }}>{credits}</span>
            </div>
          ))}
        </div>
      </Section>

      <Section eyebrow="API plans">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }}>
          {[
            { name: 'Developer', price: '$0',   unit: '/mo', credits: '100 credits / month',    blurb: 'Free forever. Build, prototype, share.',           cta: 'Get API key · free' },
            { name: 'Build',     price: '$99',  unit: '/mo', credits: '2,000 credits / month',  blurb: 'For production apps and indie shipping.',          cta: 'Start Build trial', highlight: true },
            { name: 'Scale',     price: '$999', unit: '/mo', credits: '25,000 credits / month', blurb: 'For revenue-generating products at volume.',       cta: 'Start Scale trial' },
          ].map(t => (
            <div key={t.name} style={{
              background: t.highlight ? 'var(--ink2)' : 'var(--ink1)',
              border: `1px solid ${t.highlight ? 'var(--gold-dim)' : 'var(--line)'}`,
              borderRadius: 14, padding: 24, position: 'relative',
            }}>
              {t.highlight && <span style={{ position: 'absolute', top: 14, right: 14, fontFamily: 'var(--mono)', fontSize: 10, color: 'var(--gold)', letterSpacing: '.1em' }}>RECOMMENDED</span>}
              <div className="mav-eyebrow" style={{ marginBottom: 8 }}>{t.name}</div>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: 4 }}>
                <span style={{ fontSize: 36, letterSpacing: '-0.03em', fontWeight: 500 }}>{t.price}</span>
                <span style={{ fontSize: 13, color: 'var(--muted)' }}>{t.unit}</span>
              </div>
              <div style={{ fontSize: 12.5, color: 'var(--dim)', marginTop: 4, fontFamily: 'var(--mono)' }}>{t.credits}</div>
              <div style={{ fontSize: 12.5, color: 'var(--muted)', marginTop: 6, lineHeight: 1.5 }}>{t.blurb}</div>
              <a href="/pricing#api" className={`mav-btn ${t.highlight ? 'mav-btn--primary mav-shimmer' : 'mav-btn--ghost'} mav-btn--sm`} style={{ marginTop: 18, width: '100%', justifyContent: 'center' }}>
                {t.cta}
              </a>
            </div>
          ))}
        </div>
        <div style={{ marginTop: 16, fontSize: 12.5, color: 'var(--muted)', textAlign: 'center', fontFamily: 'var(--mono)', letterSpacing: '.04em' }}>
          full plan details, overage rates, and rate limits → <a href="/pricing#api" style={{ color: 'var(--gold)', borderBottom: '1px solid var(--gold-dim)' }}>/pricing#api</a>
        </div>
      </Section>

      <Section eyebrow="Templates · non-developer path" style={{ background: 'var(--ink1)', borderTop: '1px solid var(--line)', borderBottom: '1px solid var(--line)' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'center' }}>
          <div>
            <h2 className="mav-h2">200+ <em>templates.</em> Call them by name.</h2>
            <p className="mav-lede" style={{ marginTop: 20 }}>
              Don't want to build a pipeline? Invoke a template. Templates are composed workflows — they call multiple endpoints,
              handle state, and return a single structured output.
            </p>
            <ul style={{ listStyle: 'none', padding: 0, margin: '28px 0 0', display: 'flex', flexDirection: 'column', gap: 10 }}>
              {[
                'market_watch · monitor + alert',
                'adp_feedback · persona-calibrated creative test',
                'exec_outbound · signal → letter',
                'meeting_brief · transcript → brief',
                'competitor_move · signal → reply draft',
              ].map(t => <li key={t} className="mav-code" style={{ fontSize: 13, color: 'var(--dim)' }}>→ {t}</li>)}
            </ul>
          </div>
          <div className="mav-card" style={{ background: 'var(--ink0)', padding: 0, overflow: 'hidden' }}>
            <div style={{ padding: '12px 16px', borderBottom: '1px solid var(--line)', fontFamily: 'var(--mono)', fontSize: 11.5, color: 'var(--muted)' }}>template · adp_feedback</div>
            <pre style={{ margin: 0, padding: 20, fontFamily: 'var(--mono)', fontSize: 12.5, color: 'var(--text)', lineHeight: 1.65 }}>
{`POST /v1/templates/adp_feedback
{
  "creative": "…mp4…",
  "cohorts": ["gen_z_urban", "cfo_midmkt"],
  "return": "structured"
}`}
            </pre>
          </div>
        </div>
      </Section>

      <Section dense style={{ padding: '120px 0' }}>
        <ClosingCTA />
      </Section>
      <MavFooter />
    </>
  );
}
