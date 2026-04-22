// /synthetic — dedicated page
function SyntheticPage({ onNav }) {
  return (
    <div className="mav-root" style={{minHeight:'100%'}}>
      <MavNav active="synthetic" onNav={onNav}/>

      <Section style={{paddingTop: 96, paddingBottom: 40}}>
        <div style={{display:'grid', gridTemplateColumns:'1fr 1.2fr', gap: 80, alignItems:'end', marginBottom: 48}}>
          <div>
            <div className="mav-eyebrow" style={{marginBottom: 20}}>Synthetic intelligence</div>
            <h1 className="mav-h1" style={{fontSize: 88}}>Data that <em>behaves</em> like the real thing<em style={{color:'var(--gold)'}}>.</em></h1>
          </div>
          <div>
            <p className="mav-lede" style={{fontSize: 20}}>
              Marketing panels, and scientific data. Math-valued, physics-aware, privacy-preserving. Not LLM hallucination with a sticker.
            </p>
            <div style={{marginTop: 28}}><CertBadges/></div>
          </div>
        </div>

        <div style={{display:'grid', gridTemplateColumns:'repeat(3, 1fr)', gap: 1, background:'var(--line)', border:'1px solid var(--line)', borderRadius: 14, overflow:'hidden'}}>
          {[
            ['Marketing synth','50+ built-in personas. 12 question types. 200-panel focus group in 12 minutes.'],
            ['Scientific synth','Time series, assay readouts, imaging manifolds, molecular structures — generated with domain-aware priors.'],
            ['Data augmentation','Rare-event datasets expanded with plausible variants. Physics preserved. Downstream models generalize.'],
          ].map(([h, p]) => (
            <div key={h} style={{background:'var(--ink0)', padding: 28, minHeight: 180}}>
              <div style={{fontSize: 17, fontWeight: 500, marginBottom: 10, letterSpacing:'-0.01em'}}>{h}</div>
              <div style={{fontSize: 14, color:'var(--dim)', lineHeight: 1.55}}>{p}</div>
            </div>
          ))}
        </div>
      </Section>

      <Section eyebrow="01 · How it's generated" style={{background:'var(--ink1)', borderTop:'1px solid var(--line)', borderBottom:'1px solid var(--line)'}}>
        <div style={{display:'grid', gridTemplateColumns:'1fr 1.2fr', gap: 72, alignItems:'start', marginBottom: 48}}>
          <h2 className="mav-h2">No single model. <em>A stack.</em></h2>
          <p className="mav-lede">
            Physics-aware priors, domain-specific generators (GAN, diffusion, SDE, graph), LLM personas — calibrated against held-out real data.
          </p>
        </div>
        <div style={{display:'grid', gridTemplateColumns:'repeat(4, 1fr)', gap: 1, background:'var(--line)', border:'1px solid var(--line)', borderRadius: 12, overflow:'hidden'}}>
          {[
            ['01','Prior','Domain-aware: physics, schema, behavioral model.'],
            ['02','Generate','GAN · diffusion · SDE · graph · LLM — chosen per surface.'],
            ['03','Privatize','DP-SGD or rejection-based privatization. Budget tracked per release.'],
            ['04','Calibrate','Marginal, joint, and conditional fidelity vs held-out real.'],
          ].map(([c, k, v]) => (
            <div key={k} style={{background:'var(--ink0)', padding: 20, minHeight: 180, display:'flex', flexDirection:'column', justifyContent:'space-between'}}>
              <span className="mav-code" style={{color:'var(--gold)', fontSize: 10.5, letterSpacing:'.12em'}}>{c}</span>
              <div>
                <div style={{fontSize: 15, fontWeight: 500, letterSpacing:'-0.01em'}}>{k}</div>
                <div style={{fontSize: 12.5, color:'var(--dim)', lineHeight: 1.5, marginTop: 6}}>{v}</div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section eyebrow="02 · Scientific surfaces">
        <div style={{display:'grid', gridTemplateColumns:'repeat(2, 1fr)', gap: 24}}>
          {[
            ['Time series · rare events','Augment a 12-failure-in-10,000 dataset with plausible variants. SDE-based generation preserves drift and volatility structure. Audit report compares autocorrelation and tail behavior to real.'],
            ['Assay readouts','Synthetic dose-response curves that preserve Hill-equation structure. Noise models learned per-instrument. FDA-discussed for digital twin studies.'],
            ['Imaging','Diffusion-based synthesis conditioned on anatomical priors. Downstream segmentation accuracy within 2 pts of real-data training.'],
            ['Molecular','Graph-based generation with property conditioning. QED, logP, SA within calibration. Novel structures flagged for wet-lab check.'],
            ['Tabular · cohorts','DP-preserved synthetic EHR cohorts for pre-study power analysis. Membership-inference attack AUC < 0.55.'],
            ['Behavioral · personas','Persona simulation for focus groups, pricing research, and user journey modeling. Validated against real panel responses at n=1,200.'],
          ].map(([h, p]) => (
            <div key={h} style={{padding: 28, border:'1px solid var(--line)', borderRadius: 12, background:'var(--ink0)'}}>
              <div style={{fontSize: 16, fontWeight: 500, marginBottom: 10, letterSpacing:'-0.01em'}}>{h}</div>
              <div style={{fontSize: 13.5, color:'var(--dim)', lineHeight: 1.55}}>{p}</div>
            </div>
          ))}
        </div>
      </Section>

      <Section eyebrow="03 · Privacy & IP" style={{background:'var(--ink1)', borderTop:'1px solid var(--line)', borderBottom:'1px solid var(--line)'}}>
        <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap: 72, alignItems:'start'}}>
          <div>
            <h2 className="mav-h2">Nothing leaves <em>without receipts.</em></h2>
            <p className="mav-lede" style={{marginTop: 24}}>
              Every generator runs under an explicit DP budget. Every release ships with a privacy audit. Raw data never enters shared weights.
            </p>
          </div>
          <div style={{padding: 24, border:'1px solid var(--line)', borderRadius: 12, background:'var(--ink0)', fontFamily:'var(--mono)', fontSize: 12.5, color:'var(--dim)'}}>
            <div style={{color:'var(--gold)', fontSize: 10.5, letterSpacing:'.12em', marginBottom: 14}}>PRIVACY AUDIT · q2-2026-r117</div>
            {[
              ['generator','time-series-sde-v4.2'],
              ['ε consumed','2.14 / 4.00'],
              ['δ','1e-6'],
              ['MIA attack AUC','0.521 (random: 0.500)'],
              ['attribute inf.','≤ 0.04 over prior'],
              ['marginal fidelity','0.962'],
              ['joint fidelity','0.891'],
              ['held-out KL','0.038'],
            ].map(([k,v]) => (
              <div key={k} style={{display:'flex', justifyContent:'space-between', padding:'6px 0', borderBottom:'1px solid var(--line-soft)'}}>
                <span>{k}</span><span style={{color:'var(--text)'}}>{v}</span>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section eyebrow="04 · Publish · replicate">
        <div style={{display:'grid', gridTemplateColumns:'1.1fr 1fr', gap: 64, alignItems:'center'}}>
          <div>
            <h2 className="mav-h2">Methods we <em>publish.</em></h2>
            <p className="mav-lede" style={{marginTop: 20}}>
              No black-box defense. Methods, calibration, and budgets are public. Replication partners welcome.
            </p>
          </div>
          <div style={{display:'flex', flexDirection:'column', gap: 12}}>
            {[
              ['Mavera Lab', 'Replication notes & calibration reports'],
              ['arXiv: 2604.11827', 'Physics-aware time-series synthesis'],
              ['arXiv: 2602.03401', 'DP budgets in GAN-LLM hybrids'],
              ['Zenodo: datasets', 'Released synthetic cohorts'],
            ].map(([k,v]) => (
              <div key={k} style={{display:'flex', justifyContent:'space-between', padding:'16px 20px', border:'1px solid var(--line)', borderRadius: 10, background:'var(--ink0)'}}>
                <div><div style={{fontSize: 14, fontWeight: 500}}>{k}</div><div style={{fontSize: 12, color:'var(--dim)', marginTop: 2}}>{v}</div></div>
                <ArrowUpRight size={14}/>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section dense style={{padding: '120px 0'}}><ClosingCTA/></Section>
      <MavFooter onNav={onNav}/>
    </div>
  );
}

window.SyntheticPage = SyntheticPage;
