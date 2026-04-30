import { MavNav } from '@/components/nav';
import { MavFooter } from '@/components/footer';
import { Section } from '@/components/section';
import { ClosingCTA } from '@/components/closing-cta';
import { ArrowRight } from '@/components/icons';

const generationStack: [string, string][] = [
  ['Priors', 'Modality-specific physics, distributions, style anchors — applied before generation.'],
  ['Generators', 'GAN, diffusion, LLM-steered — selected per modality. Hybrid by default.'],
  ['Privacy', 'Differential privacy (ε ≤ 3.0), k-anonymity for tabular, MIA-tested each run.'],
  ['Eval', '9 metrics per checkpoint: fidelity, diversity, leakage, bias, downstream task.'],
  ['Provenance', 'Every node hashed, every edge timestamped, every report signed.'],
  ['Retention', 'Generator weights → you. Audit hashes → us. Nothing else leaves.'],
];

const scientific: [string, string][] = [
  ['Time series', 'Operational, IoT, finance — seasonal and regime-aware.'],
  ['Tabular records', 'SDV + CTGAN ensemble with k-anonymity by default. Customer, transactional, behavioral.'],
  ['Behavioral panels', 'Synthetic respondent populations matched to real survey distributions.'],
  ['Imaging latents', 'Vision-model-friendly latents with domain-aware feature anchors.'],
  ['Text / narrative', 'Notes, summaries, rationales — style-anchored, redacted, source-attributed.'],
  ['Domain assays', 'Physics-constrained generation with variance matching for scientific use cases.'],
];

export default function SyntheticPage() {
  return (
    <>
      <MavNav />
      <section style={{ padding: '120px 0 60px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 900px 500px at 50% 0%, rgba(200,168,255,0.1), transparent 60%)' }} />
        <div className="mav-container" style={{ position: 'relative', zIndex: 2 }}>
          <div className="mav-eyebrow" style={{ marginBottom: 20 }}>/ synthetic</div>
          <h1 className="mav-h1" style={{ fontSize: 76, maxWidth: 980 }}>
            Synthetic data <em>that holds up.</em>
          </h1>
          <p className="mav-lede" style={{ maxWidth: 640, marginTop: 26 }}>
            Behavioral panels, tabular records, time series, text and imaging latents — generated under privacy budgets,
            evaluated on nine metrics per run, shipped with a provenance graph you can defend.
          </p>
          <div style={{ display: 'flex', gap: 12, marginTop: 36 }}>
            <a href="https://calendly.com/jill-mavera/discovery-call" target="_blank" rel="noopener noreferrer" className="mav-btn mav-btn--primary">Request pilot dataset <ArrowRight /></a>
            <a href="https://docs.mavera.io" target="_blank" rel="noopener noreferrer" className="mav-btn mav-btn--ghost">See the platform docs</a>
          </div>
        </div>
      </section>

      <Section eyebrow="Generation stack">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 1, background: 'var(--line)', border: '1px solid var(--line)', borderRadius: 14, overflow: 'hidden' }}>
          {generationStack.map(([k, v]) => (
            <div key={k} style={{ background: 'var(--ink0)', padding: 28, minHeight: 170, display: 'flex', flexDirection: 'column', gap: 10 }}>
              <div style={{ fontSize: 16, fontWeight: 500, letterSpacing: '-0.01em' }}>{k}</div>
              <div style={{ fontSize: 13, color: 'var(--dim)', lineHeight: 1.55 }}>{v}</div>
            </div>
          ))}
        </div>
      </Section>

      <Section eyebrow="Scientific surfaces" style={{ background: 'var(--ink1)', borderTop: '1px solid var(--line)', borderBottom: '1px solid var(--line)' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }}>
          {scientific.map(([k, v]) => (
            <div key={k} className="mav-card" style={{ padding: 24 }}>
              <div style={{ fontSize: 16, fontWeight: 500, marginBottom: 10 }}>{k}</div>
              <div style={{ fontSize: 13, color: 'var(--dim)', lineHeight: 1.55 }}>{v}</div>
            </div>
          ))}
        </div>
      </Section>

      <Section eyebrow="Privacy audit">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48, alignItems: 'center' }}>
          <div>
            <h2 className="mav-h2">What stays. <em>What leaves.</em></h2>
            <p className="mav-lede" style={{ marginTop: 24 }}>
              Differential privacy is applied at generation time. Membership inference is tested on every checkpoint.
              Subgroup bias is measured across 8 dimensions. Nothing silent.
            </p>
          </div>
          <div className="mav-card" style={{ padding: 28, background: 'var(--ink1)' }}>
            <div className="mav-eyebrow" style={{ marginBottom: 18 }}>Posture</div>
            {[
              ['Privacy budget (ε)', '3.0', 'pass'],
              ['Membership inference AUC', '0.52 (chance)', 'pass'],
              ['Subgroup bias (max Δ)', '±2.1%', 'pass'],
              ['K-anonymity (tabular)', 'k ≥ 5', 'pass'],
              ['Synthetic → real leakage', '< 1.8%', 'pass'],
              ['Raw data exfiltration surface', '0 egress paths', 'pass'],
            ].map(([k, v, s]) => (
              <div key={k} style={{ display: 'grid', gridTemplateColumns: '1fr 120px 60px', padding: '11px 0', borderBottom: '1px dashed var(--line-soft)', alignItems: 'center' }}>
                <span style={{ fontSize: 13.5 }}>{k}</span>
                <span className="mav-code" style={{ color: 'var(--dim)', fontSize: 12 }}>{v}</span>
                <span className="mav-code" style={{ fontSize: 10, letterSpacing: '.1em', color: '#7ce0a8' }}>{s.toUpperCase()}</span>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section dense style={{ padding: '120px 0' }}>
        <ClosingCTA
          headline={<>Synthetic intelligence, <em className="mav-gradient-text">defensibly</em> built.</>}
          lede="Bring a question. We'll spin up a calibrated panel, run a focus group against it, and walk you through the evidence."
          primaryLabel="Run a pilot focus group"
          secondaryLabel="See the methods"
          secondaryHref="/agents/science"
        />
      </Section>
      <MavFooter />
    </>
  );
}
