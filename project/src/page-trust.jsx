// Trust page — certifications, sub-processors, data posture.
function TrustPage({ onNav }) {
  const certs = [
    { name:'SOC 2 Type II', org:'AICPA', status:'Audited · Q1 2026', desc:'Security, availability, and confidentiality controls, continuously audited.'},
    { name:'ISO 27001', org:'ISMS', status:'Certified', desc:'Information security management system covering people, process, and technology.'},
    { name:'ISO 42001', org:'AIMS', status:'Certified', desc:'AI management system — among the first AI companies globally to hold this certification.'},
    { name:'HIPAA', org:'Readiness', status:'BAA available', desc:'Technical and administrative safeguards ready for PHI-adjacent workloads.'},
  ];
  const posture = [
    ['Infrastructure','AWS · us-east-1 · us-west-2 · eu-west-1'],
    ['Authentication','Auth0 · SAML SSO on enterprise'],
    ['Encryption · in transit','TLS 1.3 only'],
    ['Encryption · at rest','AES-256'],
    ['Logging & audit','CloudTrail + app-level trail · 400-day retention'],
    ['Vulnerability mgmt','Continuous scans · quarterly pen-tests'],
    ['Backups','Cross-region · encrypted · 35-day PITR'],
    ['Access control','RBAC · least-privilege · break-glass audited'],
  ];
  const sps = [
    ['AWS','Core infrastructure'],
    ['Auth0','Identity'],
    ['Stripe','Payments'],
    ['Linear','Product development'],
    ['Slack','Internal comms'],
    ['Vercel','Marketing site'],
    ['Mintlify','Documentation hosting'],
    ['Resend','Transactional email'],
  ];
  return (
    <div className="mav-root" style={{minHeight:'100%'}}>
      <MavNav active="trust" onNav={onNav}/>

      <Section style={{paddingTop: 96}}>
        <div style={{maxWidth: 820}}>
          <div className="mav-eyebrow" style={{marginBottom: 20}}>Trust</div>
          <h1 className="mav-h1" style={{fontSize: 72}}>Enterprise-grade. <em>From day one.</em></h1>
          <p className="mav-lede" style={{marginTop: 28}}>
            Built for enterprise buying before we sold to enterprise. Without it, every deal stalls at legal.
          </p>
          <div style={{marginTop: 40}}><CertBadges/></div>
        </div>
      </Section>

      <Section eyebrow="Certifications">
        <div style={{display:'grid', gridTemplateColumns:'repeat(4, 1fr)', gap: 1, background:'var(--line)', border:'1px solid var(--line)', borderRadius: 14, overflow:'hidden'}}>
          {certs.map(c => (
            <div key={c.name} style={{background:'var(--ink0)', padding: 24, minHeight: 220, display:'flex', flexDirection:'column', justifyContent:'space-between'}}>
              <div style={{display:'flex', flexDirection:'column', gap: 4}}>
                <span className="mav-code" style={{color:'var(--gold)', fontSize: 11, letterSpacing:'.08em'}}>{c.org}</span>
                <h3 style={{fontSize: 20, fontWeight: 500, margin:0, letterSpacing:'-0.01em'}}>{c.name}</h3>
                <span className="mav-caption" style={{marginTop: 4, fontFamily:'var(--mono)'}}>{c.status}</span>
              </div>
              <p style={{fontSize: 13, color:'var(--dim)', lineHeight: 1.55, margin:0}}>{c.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section eyebrow="Data posture" style={{background:'var(--ink1)', borderTop:'1px solid var(--line)', borderBottom:'1px solid var(--line)'}}>
        <div style={{display:'grid', gridTemplateColumns:'1fr 1.3fr', gap: 80, alignItems:'start'}}>
          <div>
            <h2 className="mav-h2">Defensible by <em>default.</em></h2>
            <p className="mav-lede" style={{marginTop: 20, maxWidth: 440}}>
              Your data stays yours. We never train on customer inputs. Every action logged, every run replayable.
            </p>
          </div>
          <div className="mav-card" style={{padding: 0, overflow:'hidden'}}>
            {posture.map((p, idx) => (
              <div key={p[0]} style={{display:'grid', gridTemplateColumns:'1fr 1.4fr', padding:'14px 20px', borderBottom: idx === posture.length-1 ? 0 : '1px solid var(--line-soft)', fontSize: 13.5}}>
                <span className="mav-eyebrow" style={{color:'var(--dim)'}}>{p[0]}</span>
                <span style={{color:'var(--text)'}}>{p[1]}</span>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section eyebrow="Sub-processors">
        <div style={{display:'grid', gridTemplateColumns:'1fr 1.3fr', gap: 72, alignItems:'start'}}>
          <div>
            <h2 className="mav-h2">Always <em>visible.</em></h2>
            <p className="mav-lede" style={{marginTop: 20, maxWidth: 420}}>
              Every sub-processor is listed publicly. Customers are notified of additions or material changes 30 days in advance.
            </p>
          </div>
          <div className="mav-card" style={{padding: 24}}>
            <div style={{display:'grid', gridTemplateColumns:'repeat(2, 1fr)', gap: 1, background:'var(--line-soft)'}}>
              {sps.map(s => (
                <div key={s[0]} style={{background:'var(--ink1)', padding:'14px 16px', display:'flex', justifyContent:'space-between', alignItems:'center', fontSize: 13}}>
                  <span>{s[0]}</span>
                  <span style={{color:'var(--dim)', fontSize: 12}}>{s[1]}</span>
                </div>
              ))}
            </div>
            <a className="mav-btn mav-btn--ghost mav-btn--sm" style={{marginTop: 20}}>Subscribe to changes <ArrowUpRight/></a>
          </div>
        </div>
      </Section>

      <Section eyebrow="Customers & pipeline">
        <div style={{display:'flex', flexDirection:'column', gap: 36, alignItems:'center'}}>
          <h2 className="mav-h2" style={{textAlign:'center'}}>Nine enterprise customers. <em>Real contracts.</em></h2>
          <PipelineRow label="Including active pipeline with"/>
        </div>
      </Section>

      <Section dense style={{padding: '96px 0 120px'}}><ClosingCTA/></Section>
      <MavFooter onNav={onNav}/>
    </div>
  );
}
window.TrustPage = TrustPage;
