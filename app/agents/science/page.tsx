import { MavNav } from '@/components/nav';
import { MavFooter } from '@/components/footer';
import { Section } from '@/components/section';
import { ClosingCTA } from '@/components/closing-cta';
import { ToolInventoryDemo } from '@/components/tool-inventory-demo';
import { ArrowRight, Check } from '@/components/icons';

const pipelineStages: [string, string, string][] = [
  ['01', 'Ingest', 'Raw signals, assays, time series, text corpora — typed on arrival'],
  ['02', 'Validate', 'Schema checks · range limits · drift tests · provenance attached'],
  ['03', 'Generate', 'GAN + LLM hybrid, differentially private, per-modality priors applied'],
  ['04', 'Evaluate', 'Harness runs 9 metrics: fidelity · diversity · distribution · leakage · bias · downstream task'],
  ['05', 'Train', 'Checkpointed runs · W&B integration · cost-tracked per epoch'],
  ['06', 'Register', 'Model weights signed · hashed · immutably logged'],
  ['07', 'Deploy', 'Inference endpoint · auto-rollback · drift alarm'],
];

const modalities: [string, string, string, string][] = [
  ['Time series', 'Operational · IoT · finance', 'Autoregressive · seasonal · regime-aware', 'loss: 0.084 · FID: 0.12'],
  ['Behavioral', 'Survey · panel · response data', 'Persona-conditioned · cohort-anchored', 'parity: ±2.8%'],
  ['Domain assays', 'Sensor · scientific · process', 'Physics-constrained · variance-matched', 'parity: ±3.2%'],
  ['Imaging', 'Latents for vision models', 'Latent-diffusion · domain-aware', 'FID: 8.4'],
  ['Tabular', 'Customer · transactional · ops data', 'SDV+CTGAN ensemble · k-anonymity', 'MCC: 0.88'],
  ['Text', 'Notes · abstracts · rationales', 'LLM-steered · style-anchored', 'ROUGE-L: 0.61'],
];

const evalMetrics: [string, string, string][] = [
  ['Fidelity',        '0.92',  'pass'],
  ['Diversity',       '0.74',  'pass'],
  ['Distribution',    '0.89',  'pass'],
  ['Leakage',         '0.018', 'pass'],
  ['Bias (8-subgroup)', '±2.1%', 'pass'],
  ['Downstream task', '0.88',  'pass'],
  ['Privacy (ε)',     '3.0',   'pass'],
  ['Fairness (DI)',   '0.91',  'warn'],
  ['Replicability',   '0.96',  'pass'],
];

const publications: [string, string, string][] = [
  ['2026', 'Differentially private synthetic assay generation with physics priors',      'Nature Machine Intelligence'],
  ['2026', 'OASIS: a benchmark for synthetic audience validation at population scale',    'NeurIPS Datasets & Benchmarks'],
  ['2025', 'Molecular design via LLM-steered latent optimization',                        'JCIM'],
  ['2025', 'Provenance as a first-class citizen in synthetic data pipelines',             'MLSys'],
  ['2025', 'Audit trails for autonomous agents: a privacy-preserving framework',          'IEEE S&P'],
  ['2024', 'Fidelity vs privacy tradeoffs in tabular synthesis at scale',                 'KDD'],
  ['2024', 'Counterfactual panel generation for consumer behavior modeling',              'KDD'],
];

const faqs: [string, string][] = [
  ['"Synthetic data just amplifies bias."',
    'Not if you measure it. The eval harness runs 8-subgroup bias tests on every generator; we publish the deltas and warn when they drift. The alternative — real data — almost always has worse subgroup coverage than disciplined synthetic.'],
  ['"How do you prevent test-data leakage?"',
    'Hold-out sets are hashed before ingestion; every downstream eval logs against the hash. We run a membership-inference attack as part of the harness — if it passes, we flag.'],
  ['"Can we run on-prem?"',
    'Yes. The generator + eval stack ships as a single binary. We support air-gapped deployments with offline license activation.'],
  ['"What about regulated environments?"',
    'HIPAA-ready, 21 CFR Part 11 alignment, ISO 42001 certified AI management. BAA on request.'],
  ['"Is this real ML or just an LLM prompt?"',
    'Real ML. GAN + LLM hybrid depending on modality. Training runs are checkpointed, W&B-tracked, and cost-attributed per epoch.'],
  ['"Who owns the synthetic data?"',
    'You do. Generator weights can stay on your infra. We retain only the audit metadata necessary to defend provenance — a signed hash, nothing else.'],
];

function HeroViz() {
  return (
    <div className="mav-card" style={{ padding: 24, overflow: 'hidden', background: 'var(--ink0)' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 18 }}>
        <span className="mav-eyebrow">Run · 2026-04-22 · tabular-gen-v4</span>
        <span className="mav-chip"><span className="mav-chip-dot mav-chip-dot--live" />epoch 42 / 60</span>
      </div>
      <svg viewBox="0 0 600 220" width="100%" height="220" style={{ display: 'block' }}>
        {/* grid */}
        {[0, 1, 2, 3, 4].map(i => (
          <line key={i} x1="40" y1={20 + i * 40} x2="580" y2={20 + i * 40} stroke="rgba(255,255,255,0.05)" strokeWidth="0.5" />
        ))}
        {/* train loss */}
        <path d="M40,40 C100,80 160,120 220,140 C280,155 340,165 400,170 C460,175 520,177 580,178"
          fill="none" stroke="var(--gold)" strokeWidth="1.8" />
        {/* val loss */}
        <path d="M40,50 C100,95 160,135 220,155 C280,170 340,175 400,180 C460,183 520,186 580,188"
          fill="none" stroke="#b8c5ff" strokeWidth="1.5" opacity="0.75" strokeDasharray="4 3" />
        {/* synth fidelity */}
        <path d="M40,190 C100,170 160,150 220,130 C280,115 340,100 400,85 C460,72 520,65 580,58"
          fill="none" stroke="#a3e6c4" strokeWidth="1.5" opacity="0.75" />
      </svg>
      <div style={{ display: 'flex', gap: 22, marginTop: 14, fontSize: 11.5, color: 'var(--dim)', fontFamily: 'var(--mono)' }}>
        <span><span style={{ color: 'var(--gold)' }}>—</span> train loss · 0.084</span>
        <span><span style={{ color: '#b8c5ff' }}>--</span> val loss · 0.091</span>
        <span><span style={{ color: '#a3e6c4' }}>—</span> synth fidelity · 0.92</span>
      </div>
    </div>
  );
}

function ProvenanceGraph() {
  const nodes: [string, number, number, string][] = [
    ['raw data',       60,  60, 'source'],
    ['generator',      220, 60, 'model'],
    ['training set',   380, 60, 'artifact'],
    ['training run',   220, 140, 'run'],
    ['evals',          380, 140, 'artifact'],
    ['model weights',  540, 100, 'output'],
  ];
  return (
    <svg viewBox="0 0 620 200" width="100%" height="200" style={{ display: 'block' }}>
      {/* edges */}
      {[
        [60, 60, 220, 60],
        [220, 60, 380, 60],
        [380, 60, 220, 140],
        [220, 140, 380, 140],
        [380, 140, 540, 100],
        [380, 60, 540, 100],
      ].map(([x1, y1, x2, y2], i) => (
        <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="var(--line)" strokeWidth="1" />
      ))}
      {nodes.map(([label, x, y, kind]) => (
        <g key={label} transform={`translate(${x}, ${y})`}>
          <rect x="-56" y="-14" width="112" height="28" rx="4"
            fill="var(--ink1)" stroke={kind === 'output' ? 'var(--gold)' : 'var(--line)'} strokeWidth="1" />
          <text x="0" y="5" textAnchor="middle" fontFamily="var(--mono)" fontSize="11"
            fill={kind === 'output' ? 'var(--gold)' : 'var(--text)'}>{label}</text>
        </g>
      ))}
    </svg>
  );
}

export default function SciencePage() {
  return (
    <>
      <MavNav />
      <section style={{ padding: '120px 0 60px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 900px 500px at 70% 0%, rgba(163,230,196,0.08), transparent 70%)' }} />
        <div className="mav-container" style={{ position: 'relative', zIndex: 2 }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1.1fr 1fr', gap: 72, alignItems: 'center' }}>
            <div>
              <div className="mav-eyebrow" style={{ marginBottom: 20 }}>/ agents / science</div>
              <h1 className="mav-h1" style={{ fontSize: 76 }}>Synthetic data. <em>Real ML.</em></h1>
              <p className="mav-lede" style={{ maxWidth: 540, marginTop: 28 }}>
                Scientific synthetic data with physics priors, training runs you can audit,
                evaluation harnesses that check leakage and bias on every checkpoint.
              </p>
              <div style={{ display: 'flex', gap: 12, marginTop: 36 }}>
                <a href="#" className="mav-btn mav-btn--primary">Schedule a science session <ArrowRight /></a>
                <a href="#" className="mav-btn mav-btn--ghost">Read the provenance spec</a>
              </div>
            </div>
            <HeroViz />
          </div>
        </div>
      </section>

      <Section dense>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 28, padding: '32px 0', borderTop: '1px solid var(--line)', borderBottom: '1px solid var(--line)' }}>
          {[
            ['n = 40', 'Variance falls 18%'],
            ['ε = 3.0', 'Differential privacy budget'],
            ['±2.1%', '8-subgroup bias tolerance'],
            ['0.018', 'Max leakage under MIA'],
            ['9', 'Metrics per eval run'],
          ].map(([k, v]) => (
            <div key={k}>
              <div style={{ fontFamily: 'var(--serif)', fontSize: 40, fontStyle: 'italic', color: 'var(--gold)', letterSpacing: '-0.02em', lineHeight: 1 }}>{k}</div>
              <div className="mav-caption" style={{ marginTop: 8 }}>{v}</div>
            </div>
          ))}
        </div>
      </Section>

      <Section eyebrow="Why scientific synthesis is hard">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 40 }}>
          {[
            ['Not enough data', 'Small-n studies can\'t train reliable models. Raw synthetic makes variance worse, not better — unless you apply modality-specific priors and measure distribution drift.'],
            ['No provenance', 'Most "synthetic" pipelines lose the chain of custody. When the regulator asks "how was this trained?", you need a signed graph, not slides.'],
            ['No trust', 'Downstream teams won\'t touch synthetic without membership-inference tests, subgroup bias metrics, and the ability to replay every decision.'],
          ].map(([k, v]) => (
            <div key={k}>
              <h3 className="mav-h3">{k}</h3>
              <p className="mav-body" style={{ marginTop: 14, color: 'var(--dim)' }}>{v}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section eyebrow="Training pipeline" style={{ background: 'var(--ink1)', borderTop: '1px solid var(--line)', borderBottom: '1px solid var(--line)' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: 1, background: 'var(--line)', border: '1px solid var(--line)', borderRadius: 14, overflow: 'hidden' }}>
          {pipelineStages.map(([n, name, desc]) => (
            <div key={n} style={{ background: 'var(--ink0)', padding: 20, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', minHeight: 180 }}>
              <span className="mav-code" style={{ color: 'var(--gold)', fontSize: 11, letterSpacing: '.1em' }}>{n}</span>
              <div>
                <div style={{ fontSize: 14, fontWeight: 500, marginBottom: 6 }}>{name}</div>
                <div style={{ fontSize: 11.5, color: 'var(--dim)', lineHeight: 1.5 }}>{desc}</div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section eyebrow="Modalities">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }}>
          {modalities.map(([name, domain, method, metric]) => (
            <div key={name} className="mav-card" style={{ padding: 24 }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 14 }}>
                <div style={{ fontSize: 18, fontWeight: 500, letterSpacing: '-0.01em' }}>{name}</div>
                <span className="mav-code" style={{ fontSize: 10, color: '#a3e6c4', padding: '3px 8px', border: '1px solid rgba(163,230,196,0.3)', borderRadius: 999 }}>{metric}</span>
              </div>
              <div style={{ fontSize: 12, color: 'var(--muted)', fontFamily: 'var(--mono)', marginBottom: 8 }}>{domain}</div>
              <div style={{ fontSize: 13, color: 'var(--dim)', lineHeight: 1.5 }}>{method}</div>
            </div>
          ))}
        </div>
      </Section>

      <Section eyebrow="Evaluation harness" style={{ background: 'var(--ink1)', borderTop: '1px solid var(--line)', borderBottom: '1px solid var(--line)' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1.1fr 1fr', gap: 48, alignItems: 'center' }}>
          <div className="mav-card" style={{ background: 'var(--ink0)', padding: 0, overflow: 'hidden' }}>
            <div style={{ padding: '14px 20px', borderBottom: '1px solid var(--line)', display: 'flex', justifyContent: 'space-between' }}>
              <span className="mav-eyebrow">Eval report · tabular-gen-v4 · run #1428</span>
              <span className="mav-code" style={{ fontSize: 11, color: '#7ce0a8' }}>8 pass · 1 warn</span>
            </div>
            <div>
              {evalMetrics.map(([k, v, status]) => (
                <div key={k} style={{ display: 'grid', gridTemplateColumns: '1fr 90px 60px', padding: '12px 20px', borderBottom: '1px solid var(--line-soft)', alignItems: 'center' }}>
                  <span style={{ fontSize: 13, color: 'var(--text)' }}>{k}</span>
                  <span className="mav-code" style={{ color: 'var(--dim)', fontSize: 12 }}>{v}</span>
                  <span className="mav-code" style={{
                    fontSize: 10, letterSpacing: '.1em',
                    color: status === 'pass' ? '#7ce0a8' : status === 'warn' ? '#ff9c6b' : '#e09a7b',
                  }}>{status.toUpperCase()}</span>
                </div>
              ))}
            </div>
            <div style={{ padding: '14px 20px', fontFamily: 'var(--mono)', fontSize: 11, color: 'var(--muted)' }}>signed by · eval-harness@mavera · hash 0xaf3c…</div>
          </div>
          <div>
            <h2 className="mav-h2" style={{ fontSize: 44 }}>Every checkpoint <em>tested.</em></h2>
            <p className="mav-lede" style={{ marginTop: 20 }}>
              Nine metrics. Thresholds. Signed report per run. Regressions don't ship. Warnings are surfaced to the researcher
              — never auto-squashed.
            </p>
            <div style={{ marginTop: 28, display: 'flex', flexDirection: 'column', gap: 12 }}>
              {['Membership-inference attack on every checkpoint', 'Fairness DI across 8 subgroups', 'Downstream-task replication vs. real-data baseline', 'Reports cryptographically signed per run'].map(t => (
                <div key={t} style={{ display: 'flex', gap: 10, fontSize: 13.5, color: 'var(--dim)' }}><Check size={14} />{t}</div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      <Section eyebrow="Provenance graph">
        <div className="mav-card" style={{ padding: 32, background: 'var(--ink1)' }}>
          <ProvenanceGraph />
          <div style={{ fontFamily: 'var(--mono)', fontSize: 11, color: 'var(--muted)', marginTop: 20, letterSpacing: '.02em', textAlign: 'center' }}>
            every node hashed · every edge timestamped · auditor can walk the graph
          </div>
        </div>
      </Section>

      <Section eyebrow="Publications" style={{ background: 'var(--ink1)', borderTop: '1px solid var(--line)', borderBottom: '1px solid var(--line)' }}>
        <div className="mav-card" style={{ padding: 0, overflow: 'hidden' }}>
          {publications.map(([year, title, venue]) => (
            <div key={title} style={{ display: 'grid', gridTemplateColumns: '80px 1fr 260px', padding: '18px 24px', borderBottom: '1px solid var(--line-soft)', alignItems: 'center', gap: 24 }}>
              <span className="mav-code" style={{ color: 'var(--muted)', fontSize: 13 }}>{year}</span>
              <span style={{ fontSize: 14, color: 'var(--text)' }}>{title}</span>
              <span style={{ fontFamily: 'var(--serif)', fontStyle: 'italic', fontSize: 14, color: 'var(--dim)' }}>{venue}</span>
            </div>
          ))}
        </div>
      </Section>

      <Section eyebrow="FAQ">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
          {faqs.map(([q, a]) => (
            <div key={q} className="mav-card" style={{ padding: 24 }}>
              <div style={{ fontSize: 15, fontWeight: 500, letterSpacing: '-0.01em', marginBottom: 10 }}>{q}</div>
              <div style={{ fontSize: 13.5, color: 'var(--dim)', lineHeight: 1.6 }}>{a}</div>
            </div>
          ))}
        </div>
      </Section>

      <Section eyebrow="Toolbelt" style={{ background: 'var(--ink1)', borderTop: '1px solid var(--line)', borderBottom: '1px solid var(--line)' }}>
        <ToolInventoryDemo
          tools={[
            { id: 'notebooks', name: 'Notebooks', cat: 'Build', desc: 'Jupyter · VS Code · remote kernels.' },
            { id: 'generators', name: 'Generators', cat: 'Data', desc: 'GAN · diffusion · LLM-steered.' },
            { id: 'evals', name: 'Eval harness', cat: 'Test', desc: '9 metrics per run · signed reports.' },
            { id: 'vault', name: 'Credential vault', cat: 'Connect', desc: 'S3, W&B, HF, AWS, GCP.' },
            { id: 'compute', name: 'Compute', cat: 'Infra', desc: 'Spot · reserved · on-prem option.' },
            { id: 'research', name: 'Deep research', cat: 'Research', desc: 'Citations · arXiv · preprints.' },
            { id: 'deploy', name: 'Deploy', cat: 'Ops', desc: 'Endpoint · canary · rollback.' },
            { id: 'registry', name: 'Registry', cat: 'Ops', desc: 'Model + dataset lineage.' },
          ]}
          scripts={[
            { title: '"Generate 10k synthetic transactional records matched to region"', steps: ['research', 'generators', 'evals', 'registry'] },
            { title: '"Fine-tune a forecasting model on our last 18 months of demand data"', steps: ['notebooks', 'vault', 'compute', 'evals', 'deploy'] },
            { title: '"Audit the bias deltas on our last 3 model checkpoints"', steps: ['evals', 'research', 'registry'] },
          ]}
        />
      </Section>

      <Section dense style={{ padding: '120px 0' }}>
        <ClosingCTA />
      </Section>
      <MavFooter />
    </>
  );
}
