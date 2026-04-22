// /agents/science — bespoke deep-dive on the Science squad.
// Purpose-built, not scaffold-based.

function AgentsSciencePageV2({ onNav }) {
  return (
    <div className="mav-root" style={{minHeight:'100%'}}>
      <MavNav active="agents-science" onNav={onNav}/>

      {/* HERO */}
      <Section style={{paddingTop: 80, paddingBottom: 48, position:'relative', overflow:'hidden'}}>
        <div style={{marginBottom: 20}}>
          <a onClick={() => onNav && onNav('agents')} style={{fontSize: 12, color:'var(--muted)', fontFamily:'var(--mono)', letterSpacing:'.08em', cursor:'pointer'}}>← ALL AGENTS</a>
        </div>
        <div style={{display:'grid', gridTemplateColumns:'1.15fr 1fr', gap: 80, alignItems:'start'}}>
          <div>
            <div className="mav-eyebrow" style={{marginBottom: 20, display:'inline-flex', alignItems:'center', gap: 10}}>
              <span style={{width:18, height:1, background:'var(--gold)', display:'inline-block'}}/>
              Agent · 08 · ML training platform
            </div>
            <h1 style={{fontSize: 112, fontWeight: 300, letterSpacing:'-0.04em', lineHeight: 0.96, margin: 0, fontFamily:'var(--sans)'}}>
              Science<em style={{fontFamily:'var(--serif)', fontWeight: 400, color:'var(--gold)'}}>.</em>
            </h1>
            <p className="mav-lede" style={{marginTop: 32, fontSize: 22, maxWidth: 560}}>
              A training platform for teams who need <em style={{fontFamily:'var(--serif)', color:'var(--gold)'}}>real models</em> — not prompts dressed as models. Train on your data, augment with scientific synthetic, evaluate systematically, deploy with a provenance trail.
            </p>
            <div style={{marginTop: 40, display:'flex', gap: 28, alignItems:'center', flexWrap:'wrap'}}>
              <span className="mav-code" style={{fontSize: 11, color:'var(--dim)', letterSpacing:'.08em'}}>● 52 PUBLISHED METHODS</span>
              <span style={{width:1, height:12, background:'var(--line)'}}/>
              <span className="mav-code" style={{fontSize: 11, color:'var(--dim)', letterSpacing:'.08em'}}>● 7 PEER-REVIEWED PAPERS IN 2025</span>
              <span style={{width:1, height:12, background:'var(--line)'}}/>
              <span className="mav-code" style={{fontSize: 11, color:'var(--dim)', letterSpacing:'.08em'}}>● OPEN CALIBRATION REPORTS</span>
            </div>
          </div>
          <ScienceHeroViz/>
        </div>
      </Section>

      {/* METRICS STRIP */}
      <Section dense style={{background:'var(--ink1)', borderTop:'1px solid var(--line)', borderBottom:'1px solid var(--line)', padding:'48px 0'}}>
        <div style={{display:'grid', gridTemplateColumns:'repeat(5, 1fr)', gap: 1, background:'var(--line)'}}>
          {[
            ['12×','Effective dataset size after augmentation','on 10K-sample biological assay benchmarks'],
            ['±4%','Synthetic-vs-real fidelity','measured on held-out distribution moments'],
            ['0.91','Downstream model transfer score','real-only → synth-augmented'],
            ['100%','Provenance coverage','every row · every model · every eval'],
            ['ε ≤ 2.0','Differential privacy budget','enforced per generator release'],
          ].map(([v, l, s]) => (
            <div key={l} style={{background:'var(--ink1)', padding: 32, display:'flex', flexDirection:'column', gap: 12}}>
              <div style={{fontFamily:'var(--serif)', fontSize: 56, letterSpacing:'-0.03em', color:'var(--gold)', lineHeight: 1}}>{v}</div>
              <div style={{fontSize: 13, color:'var(--text)', fontWeight: 500, lineHeight: 1.3}}>{l}</div>
              <div style={{fontSize: 11, color:'var(--muted)', fontFamily:'var(--mono)', letterSpacing:'.03em'}}>{s}</div>
            </div>
          ))}
        </div>
      </Section>

      {/* WHAT IT SOLVES */}
      <Section eyebrow="What Science solves">
        <div style={{display:'grid', gridTemplateColumns:'1fr 1.3fr', gap: 80}}>
          <h2 className="mav-h2" style={{fontSize: 52, letterSpacing:'-0.025em'}}>
            Three problems that kill applied-ML teams <em>before they ship.</em>
          </h2>
          <div style={{display:'flex', flexDirection:'column', gap: 4}}>
            {[
              ['Not enough data','"We have 180 positives. The rest of the distribution is hypothesis." Scientific synthetic generates plausible variants grounded in physics and prior literature — not hallucinated rows.'],
              ['No provenance','"Which model made this prediction? Trained on what? Evaluated how?" Every artifact carries an immutable chain of custody — data → generator → run → eval → deployed weights.'],
              ['No trust','"The model works in the lab, fails in production." Calibration reports, distributional drift alarms, counterfactual evaluation suites, and open methods. Reviewers can replicate.'],
            ].map(([k, v], i) => (
              <div key={k} style={{padding:'28px 0', borderBottom: i < 2 ? '1px solid var(--line)' : 0, display:'grid', gridTemplateColumns:'56px 1fr', gap: 24}}>
                <span className="mav-code" style={{color:'var(--gold)', fontSize: 12, letterSpacing:'.1em'}}>{String(i+1).padStart(2,'0')}</span>
                <div>
                  <h3 style={{fontSize: 22, fontWeight: 400, letterSpacing:'-0.015em', margin:'0 0 8px', fontFamily:'var(--serif)'}}>{k}</h3>
                  <p style={{fontSize: 14.5, color:'var(--dim)', lineHeight: 1.6, margin: 0}}>{v}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* PIPELINE */}
      <Section eyebrow="The training pipeline" style={{background:'var(--ink1)', borderTop:'1px solid var(--line)', borderBottom:'1px solid var(--line)'}}>
        <h2 className="mav-h2" style={{marginBottom: 56}}>Seven stages. <em>All auditable. All reproducible.</em></h2>
        <TrainingPipeline/>
      </Section>

      {/* SYNTHETIC MODALITIES */}
      <Section eyebrow="Scientific synthetic — six modalities">
        <div style={{display:'grid', gridTemplateColumns:'repeat(3, 1fr)', gap: 1, background:'var(--line)', border:'1px solid var(--line)', borderRadius: 12, overflow:'hidden'}}>
          {[
            { name:'Time series',        prior:'State-space · latent dynamics', use:'Manufacturing runs · vital signs · market microstructure', detail:'Learned VAR/SSM priors. Preserves autocorrelation structure and rare-event frequency.' },
            { name:'Molecular',          prior:'SMILES + reaction templates',   use:'Drug discovery · materials · reaction planning', detail:'Constrained to valid chemistry. Filtered by ADMET predictions and reaction feasibility.' },
            { name:'Assay readouts',     prior:'Physics-aware noise model',    use:'Diagnostic labs · QC batches · bioassays', detail:'Forward-simulates instrument response with calibrated baseline and dynamic range.' },
            { name:'Imaging manifolds',  prior:'Diffusion on domain manifold',  use:'Pathology · remote sensing · cell morphology', detail:'Preserves class manifold geometry. Augments minority classes without mode collapse.' },
            { name:'Tabular medical',    prior:'Copula + causal DAG',          use:'EHR · claims · registry data', detail:'Causal-faithful augmentation. Preserves conditional independence structure.' },
            { name:'Text narratives',    prior:'Style-conditioned LM',          use:'Clinical notes · incident reports · qualitative coding', detail:'Entity-preserving. PHI stripped pre-generation, validated by membership-inference tests.' },
          ].map(m => (
            <div key={m.name} style={{background:'var(--ink0)', padding: 28, minHeight: 240, display:'flex', flexDirection:'column', gap: 14}}>
              <div style={{display:'flex', alignItems:'center', justifyContent:'space-between'}}>
                <h3 style={{fontSize: 18, fontWeight: 500, letterSpacing:'-0.015em', margin: 0}}>{m.name}</h3>
                <ModalitySparkline seed={m.name}/>
              </div>
              <div>
                <div className="mav-caption" style={{color:'var(--gold)', marginBottom: 4}}>PRIOR</div>
                <div style={{fontSize: 12.5, color:'var(--text)', fontFamily:'var(--mono)'}}>{m.prior}</div>
              </div>
              <div>
                <div className="mav-caption" style={{marginBottom: 4}}>USE CASES</div>
                <div style={{fontSize: 12, color:'var(--dim)', lineHeight: 1.5}}>{m.use}</div>
              </div>
              <div style={{fontSize: 11.5, color:'var(--muted)', lineHeight: 1.55, paddingTop: 10, borderTop:'1px solid var(--line)', marginTop:'auto'}}>
                {m.detail}
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* EVALUATION HARNESS */}
      <Section eyebrow="Evaluation harness · built-in" style={{background:'var(--ink1)', borderTop:'1px solid var(--line)', borderBottom:'1px solid var(--line)'}}>
        <div style={{display:'grid', gridTemplateColumns:'1fr 1.3fr', gap: 80, alignItems:'start'}}>
          <div>
            <h2 className="mav-h2" style={{fontSize: 48}}>Evaluate like a <em>reviewer</em> would.</h2>
            <p className="mav-lede" style={{marginTop: 24}}>
              Every training run ships with a full evaluation report. We don't let you deploy a model with just an F1 score.
            </p>
            <p style={{fontSize: 13.5, color:'var(--muted)', marginTop: 20, lineHeight: 1.6}}>
              Slice-based accuracy. Calibration (ECE, Brier, reliability curves). Counterfactual fairness. Distributional drift.
              Worst-subgroup performance. Hallucination rate (for generative). Every one plotted, every one with a pass/fail
              threshold you set at training time.
            </p>
          </div>
          <EvalReport/>
        </div>
      </Section>

      {/* PROVENANCE */}
      <Section eyebrow="Provenance · the chain of custody">
        <h2 className="mav-h2" style={{marginBottom: 40}}>Every artifact, <em>every ancestor.</em></h2>
        <ProvenanceGraph/>
        <p style={{fontSize: 13, color:'var(--muted)', marginTop: 32, lineHeight: 1.6, maxWidth: 800}}>
          When an auditor asks "where did this prediction come from?", Mavera answers with a DAG — not a shrug. Every row of
          training data, every synthetic generator, every hyperparameter, every eval, every weight checkpoint: linked, hashed,
          immutable. Export to SBOM-style JSON or sign with Sigstore.
        </p>
      </Section>

      {/* PUBLICATIONS */}
      <Section eyebrow="Publications · replication welcomed" style={{background:'var(--ink1)', borderTop:'1px solid var(--line)', borderBottom:'1px solid var(--line)'}}>
        <div style={{display:'grid', gridTemplateColumns:'1fr 2fr', gap: 64, alignItems:'start'}}>
          <div>
            <h2 className="mav-h2" style={{fontSize: 44}}>We publish our methods.</h2>
            <p className="mav-lede" style={{marginTop: 20, fontSize: 18}}>
              52 methods open-sourced. 7 peer-reviewed papers in 2025. If you can't replicate us, we haven't done our job.
            </p>
            <a style={{marginTop: 24, display:'inline-block', fontSize: 13, color:'var(--gold)', fontFamily:'var(--mono)', letterSpacing:'.06em', cursor:'pointer'}}>
              → Visit insights.mavera.io
            </a>
          </div>
          <div style={{display:'flex', flexDirection:'column', gap: 2}}>
            {[
              ['2025', 'Calibrated synthetic data for rare-event classification in diagnostic assays', 'Nature Machine Intelligence · Aug 2025', 'NMI'],
              ['2025', 'Causal-faithful augmentation of EHR tabular data under differential privacy', 'JAMIA · Jun 2025', 'JAMIA'],
              ['2025', 'Replication report: 12× effective-size gains on CLIA assay benchmarks', 'Mavera Insights · Jun 2025', 'MI'],
              ['2025', 'Manifold-preserving diffusion priors for histopathology class imbalance', 'MICCAI · May 2025', 'MICCAI'],
              ['2025', 'Open calibration harness: a taxonomy of evaluation slices that actually matter', 'ML Reproducibility Journal · Mar 2025', 'MLRJ'],
              ['2025', 'Membership-inference budgets under composition: practical guidance', 'PETS · Feb 2025', 'PETS'],
              ['2024', 'Benchmarking scientific synthetic against held-out real: 48 studies, 7 domains', 'NeurIPS Datasets · Dec 2024', 'NeurIPS'],
            ].map(([yr, title, venue, short], i) => (
              <div key={i} style={{display:'grid', gridTemplateColumns:'60px 1fr 110px', gap: 24, padding:'20px 0', borderBottom:'1px solid var(--line)', alignItems:'center'}}>
                <span className="mav-code" style={{color:'var(--muted)', fontSize: 11, letterSpacing:'.08em'}}>{yr}</span>
                <div>
                  <div style={{fontSize: 14.5, color:'var(--text)', letterSpacing:'-0.005em', marginBottom: 4}}>{title}</div>
                  <div style={{fontSize: 12, color:'var(--dim)', fontFamily:'var(--mono)'}}>{venue}</div>
                </div>
                <span style={{fontSize: 10, color:'var(--gold)', fontFamily:'var(--mono)', letterSpacing:'.08em', textAlign:'right', padding:'4px 10px', border:'1px solid var(--gold-dim)', borderRadius: 4, justifySelf:'end'}}>{short}</span>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* TOOLS THIS AGENT USES */}
      <Section eyebrow="Tools this agent uses">
        <div style={{display:'grid', gridTemplateColumns:'repeat(4, 1fr)', gap: 1, background:'var(--line)', border:'1px solid var(--line)', borderRadius: 12, overflow:'hidden'}}>
          {[
            ['notebook','Notebooks','Python · R · Julia · training + analysis'],
            ['generators','Generators','6 modality-specific synthetic libraries'],
            ['evals','Eval harness','Calibration · fairness · drift · robustness'],
            ['vault','Provenance vault','Signed DAG of every artifact'],
            ['compute','Training compute','Spot · reserved · dedicated GPU pools'],
            ['research','Literature grounding','40+ source types · per-claim confidence'],
            ['deploy','Deploy','Shadow · canary · full · auto-rollback'],
            ['registry','Model registry','Checkpoints · cards · lineage'],
          ].map(t => (
            <div key={t[0]} style={{background:'var(--ink0)', padding: 20, minHeight: 120, display:'flex', flexDirection:'column', justifyContent:'space-between'}}>
              <span className="mav-code" style={{fontSize: 10, color:'var(--gold)', letterSpacing:'.12em'}}>{t[0].toUpperCase()}</span>
              <div>
                <div style={{fontSize: 14, fontWeight: 500, letterSpacing:'-0.01em'}}>{t[1]}</div>
                <div style={{fontSize: 12, color:'var(--dim)', marginTop: 4, lineHeight: 1.45}}>{t[2]}</div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* FAQ */}
      <Section eyebrow="For the skeptical scientist">
        <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap: 48}}>
          {[
            ['"Synthetic data just amplifies existing bias."','True if done naively. We report worst-subgroup performance and conditional-independence preservation on every release. If a generator amplifies bias, it fails the harness and doesn\'t ship.'],
            ['"How do I know your augmentation didn\'t leak test data?"','Every generator publishes a membership-inference audit. We attack our own generators with SOTA methods and report the leakage rate as a headline metric.'],
            ['"What if my domain has no physics prior?"','You bring the prior. The platform is modular — plug in a domain-specific generator (kinetics, economics, survey response models). We provide the eval and provenance layer.'],
            ['"Can I run this on-prem?"','Yes. The training layer, generators, and provenance vault all ship as a reference deployment on Kubernetes. Your data never leaves your cluster.'],
            ['"How do you score fidelity?"','Four orthogonal measures: distributional moments, downstream transfer, classifier two-sample tests, and human expert review. All four reported, all four must clear thresholds.'],
            ['"What about regulatory audit?"','Provenance is 21 CFR Part 11-compatible. SBOM export. Sigstore-signed artifacts. HIPAA, GDPR, and EU AI Act alignment documented per tenant.'],
          ].map(([q, a], i) => (
            <div key={i} style={{padding: 24, background:'var(--ink1)', border:'1px solid var(--line)', borderRadius: 10}}>
              <div style={{fontSize: 15, fontWeight: 500, fontFamily:'var(--serif)', fontStyle:'italic', color:'var(--text)', marginBottom: 12, lineHeight: 1.4}}>{q}</div>
              <div style={{fontSize: 13, color:'var(--dim)', lineHeight: 1.6}}>{a}</div>
            </div>
          ))}
        </div>
      </Section>

      <Section dense style={{padding:'120px 0'}}><ClosingCTA/></Section>
      <MavFooter onNav={onNav}/>
    </div>
  );
}

// ── Hero viz: abstracted generator plot (real synth sampled from a 2D prior)
function ScienceHeroViz() {
  return (
    <div style={{padding: 28, background:'var(--ink1)', border:'1px solid var(--line)', borderRadius: 14, fontFamily:'var(--mono)', fontSize: 11}}>
      <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom: 16}}>
        <span className="mav-eyebrow">Training run · live</span>
        <span style={{color:'var(--gold)', fontSize: 10.5, letterSpacing:'.08em'}}>● EPOCH 42 / 100</span>
      </div>
      <svg viewBox="0 0 400 260" style={{width:'100%', height: 240}}>
        <defs>
          <linearGradient id="loss" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="var(--gold)" stopOpacity="0.35"/>
            <stop offset="1" stopColor="var(--gold)" stopOpacity="0"/>
          </linearGradient>
        </defs>
        {/* grid */}
        {[40, 90, 140, 190].map(y => <line key={y} x1="30" y1={y} x2="390" y2={y} stroke="var(--line)" strokeWidth="0.5"/>)}
        {[80, 160, 240, 320].map(x => <line key={x} x1={x} y1="30" y1="30" x2={x} y2="220" stroke="var(--line)" strokeWidth="0.5"/>)}
        {/* train loss */}
        <path d="M 30 60 Q 80 70 120 95 T 200 130 T 280 160 T 390 180" fill="none" stroke="var(--gold)" strokeWidth="1.5"/>
        <path d="M 30 60 Q 80 70 120 95 T 200 130 T 280 160 T 390 180 L 390 220 L 30 220 Z" fill="url(#loss)"/>
        {/* val loss */}
        <path d="M 30 75 Q 80 90 120 110 T 200 145 T 280 172 T 390 190" fill="none" stroke="#a3e6c4" strokeWidth="1.2" strokeDasharray="3,3"/>
        {/* synth fidelity */}
        <path d="M 30 150 Q 80 130 120 120 T 200 100 T 280 85 T 390 75" fill="none" stroke="#c8a8ff" strokeWidth="1.2"/>
        {/* axes */}
        <line x1="30" y1="220" x2="390" y2="220" stroke="var(--muted)" strokeWidth="0.75"/>
        <line x1="30" y1="30"  x2="30"  y2="220" stroke="var(--muted)" strokeWidth="0.75"/>
        {/* labels */}
        <text x="40"  y="50"  fill="var(--gold)"   fontSize="9" fontFamily="var(--mono)">train loss · 0.184</text>
        <text x="40"  y="200" fill="#a3e6c4"        fontSize="9" fontFamily="var(--mono)">val loss · 0.211</text>
        <text x="260" y="85"  fill="#c8a8ff"        fontSize="9" fontFamily="var(--mono)">synth fidelity · 0.94</text>
      </svg>
      <div style={{display:'grid', gridTemplateColumns:'repeat(4, 1fr)', gap: 8, marginTop: 14, paddingTop: 14, borderTop:'1px solid var(--line)'}}>
        {[['lr','3e-4'],['batch','128'],['gpu','4× A100'],['wall','2h 14m']].map(([k,v]) => (
          <div key={k}>
            <div style={{color:'var(--muted)', fontSize: 9.5, letterSpacing:'.08em'}}>{k.toUpperCase()}</div>
            <div style={{color:'var(--text)', fontSize: 12, marginTop: 2}}>{v}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ── Training pipeline: 7 stages, horizontal
function TrainingPipeline() {
  const stages = [
    ['01','Ingest',      'Your raw data. Schema inferred, PHI flagged, access scoped.'],
    ['02','Profile',     'Distributional fingerprint. Class imbalance, missingness, outlier map.'],
    ['03','Generate',    'Pick a modality. Generator trained on real, constrained by domain prior.'],
    ['04','Augment',     'Blend real + synth. Ratio optimized for downstream loss.'],
    ['05','Train',       'Your model. Any framework. Hyperparameter sweep, tracked.'],
    ['06','Evaluate',    'Full harness: slice · calibrate · fairness · drift · robust.'],
    ['07','Deploy',      'Shadow → canary → full. Provenance signed at every boundary.'],
  ];
  return (
    <div style={{display:'grid', gridTemplateColumns:`repeat(${stages.length}, 1fr)`, gap: 1, background:'var(--line)', border:'1px solid var(--line)', borderRadius: 12, overflow:'hidden'}}>
      {stages.map(([n, t, d], i) => (
        <div key={n} style={{background:'var(--ink0)', padding: 24, minHeight: 220, display:'flex', flexDirection:'column', justifyContent:'space-between', position:'relative'}}>
          <div>
            <span className="mav-code" style={{color:'var(--gold)', fontSize: 11, letterSpacing:'.1em'}}>{n}</span>
            {i > 0 && <span style={{position:'absolute', left: -8, top: 34, color:'var(--muted)', fontFamily:'var(--mono)', fontSize: 10}}>→</span>}
          </div>
          <div>
            <div style={{fontSize: 16, fontWeight: 500, letterSpacing:'-0.015em', marginBottom: 8, fontFamily:'var(--serif)'}}>{t}</div>
            <div style={{fontSize: 11.5, color:'var(--dim)', lineHeight: 1.55}}>{d}</div>
          </div>
        </div>
      ))}
    </div>
  );
}

// ── Small modality sparkline; deterministic from seed
function ModalitySparkline({ seed }) {
  let h = 0; for (let i=0;i<seed.length;i++) h = ((h<<5)-h) + seed.charCodeAt(i);
  const rng = (n) => { h = (h * 9301 + 49297) % 233280; return (h/233280) * n; };
  const pts = Array.from({length: 14}).map((_,i) => `${i*5},${20 - rng(18)}`);
  return (
    <svg viewBox="0 0 70 22" style={{width: 70, height: 22}}>
      <polyline points={pts.join(' ')} fill="none" stroke="var(--gold)" strokeWidth="1"/>
    </svg>
  );
}

// ── Eval report card
function EvalReport() {
  const rows = [
    ['Accuracy · overall',           '0.923', 'pass', '≥ 0.90'],
    ['Accuracy · worst-subgroup',    '0.847', 'pass', '≥ 0.82'],
    ['Calibration · ECE',            '0.031', 'pass', '≤ 0.05'],
    ['Calibration · Brier',          '0.089', 'pass', '≤ 0.10'],
    ['Fairness · demographic parity','0.942', 'pass', '≥ 0.90'],
    ['Drift · training vs prod',     '0.021', 'pass', '≤ 0.05'],
    ['Robustness · adversarial',     '0.78',  'warn', '≥ 0.80'],
    ['Hallucination rate',           '1.4%',  'pass', '≤ 3%'],
    ['Membership-inference leakage', 'ε=1.82','pass', 'ε ≤ 2.0'],
  ];
  return (
    <div style={{background:'var(--ink0)', border:'1px solid var(--line)', borderRadius: 12, overflow:'hidden'}}>
      <div style={{padding:'14px 20px', borderBottom:'1px solid var(--line)', display:'flex', justifyContent:'space-between', alignItems:'center'}}>
        <span className="mav-eyebrow">Eval report · run #4217</span>
        <span style={{fontSize: 10.5, color:'#a3e6c4', fontFamily:'var(--mono)', letterSpacing:'.08em'}}>● 8 PASS · 1 WARN · 0 FAIL</span>
      </div>
      <div>
        {rows.map(([m, v, status, th], i) => {
          const color = status === 'pass' ? '#a3e6c4' : status === 'warn' ? '#ff9c6b' : '#ff7a7a';
          return (
            <div key={i} style={{display:'grid', gridTemplateColumns:'2fr 1fr 1fr 80px', gap: 16, padding:'12px 20px', borderBottom: i<rows.length-1 ? '1px solid var(--line-soft)' : 0, alignItems:'center'}}>
              <span style={{fontSize: 13, color:'var(--text)'}}>{m}</span>
              <span style={{fontSize: 13, color:'var(--text)', fontFamily:'var(--mono)'}}>{v}</span>
              <span style={{fontSize: 11, color:'var(--muted)', fontFamily:'var(--mono)'}}>{th}</span>
              <span style={{fontSize: 10, color, fontFamily:'var(--mono)', letterSpacing:'.1em', textAlign:'right'}}>● {status.toUpperCase()}</span>
            </div>
          );
        })}
      </div>
      <div style={{padding:'12px 20px', fontFamily:'var(--mono)', fontSize: 10.5, color:'var(--muted)', letterSpacing:'.04em', borderTop:'1px solid var(--line)'}}>
        signed · SHA-256 · 2026-04-18T14:22Z · by prover@mavera.io
      </div>
    </div>
  );
}

// ── Provenance DAG (static art of a typical lineage)
function ProvenanceGraph() {
  return (
    <div style={{padding: 40, background:'var(--ink1)', border:'1px solid var(--line)', borderRadius: 14, overflow:'hidden'}}>
      <svg viewBox="0 0 1200 340" style={{width:'100%', height: 320}}>
        {/* nodes */}
        {[
          { x: 80,   y: 80,  w: 160, h: 48, k:'DATA', t:'raw_assay_v3.parquet', hash:'a1f…9c2' },
          { x: 80,   y: 210, w: 160, h: 48, k:'DATA', t:'literature_corpus.v14', hash:'b02…ef5' },
          { x: 320,  y: 145, w: 180, h: 48, k:'GEN',  t:'timeseries_gen_v2.pt',  hash:'ff3…1d0' },
          { x: 560,  y: 80,  w: 180, h: 48, k:'SET',  t:'blend_0.6real_0.4synth', hash:'7cc…b41' },
          { x: 560,  y: 210, w: 180, h: 48, k:'SET',  t:'heldout_real_only',      hash:'3de…9a7' },
          { x: 800,  y: 145, w: 180, h: 48, k:'RUN',  t:'training_run_4217',      hash:'22a…08e' },
          { x: 1040, y: 80,  w: 140, h: 48, k:'EVAL', t:'eval_report_4217',       hash:'c4b…5f9' },
          { x: 1040, y: 210, w: 140, h: 48, k:'MODEL',t:'weights_v1.3.safetensors',hash:'8aa…22c' },
        ].map((n, i) => (
          <g key={i}>
            <rect x={n.x} y={n.y} width={n.w} height={n.h} rx="4"
              fill={n.k === 'MODEL' ? 'rgba(200,168,255,0.08)' : 'var(--ink0)'}
              stroke={n.k === 'MODEL' ? 'var(--gold)' : 'var(--line)'}/>
            <text x={n.x+12} y={n.y+18} fill={n.k === 'MODEL' ? 'var(--gold)' : 'var(--muted)'} fontSize="9" fontFamily="var(--mono)" letterSpacing="1">{n.k}</text>
            <text x={n.x+12} y={n.y+34} fill="var(--text)" fontSize="11.5" fontFamily="var(--mono)">{n.t}</text>
            <text x={n.x+n.w-12} y={n.y+18} fill="var(--muted)" fontSize="9" fontFamily="var(--mono)" textAnchor="end">{n.hash}</text>
          </g>
        ))}
        {/* edges */}
        {[
          [240, 104, 320, 169], [240, 234, 320, 169],
          [500, 169, 560, 104], [500, 169, 560, 234],
          [740, 104, 800, 169], [740, 234, 800, 169],
          [980, 169, 1040, 104], [980, 169, 1040, 234],
        ].map((c, i) => (
          <path key={i} d={`M ${c[0]} ${c[1]} C ${c[0]+30} ${c[1]}, ${c[2]-30} ${c[3]}, ${c[2]} ${c[3]}`}
            fill="none" stroke="var(--line)" strokeWidth="1"/>
        ))}
      </svg>
    </div>
  );
}

window.AgentsSciencePage = AgentsSciencePageV2;
