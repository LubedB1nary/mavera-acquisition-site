// About page — team, mission, research, company.
function AboutPage({ onNav }) {
  return (
    <div className="mav-root" style={{minHeight:'100%'}}>
      <MavNav active="about" onNav={onNav}/>

      <Section style={{paddingTop: 96}}>
        <div style={{maxWidth: 860}}>
          <div className="mav-eyebrow" style={{marginBottom: 20}}>About</div>
          <h1 className="mav-h1" style={{fontSize: 76}}>We're building the intelligence layer between companies and their <em>growth.</em></h1>
          <p className="mav-lede" style={{marginTop: 32}}>
            Traditional research is too slow. Static personas are fiction. We listen continuously, distill what's true now, and feed it back — every decision with receipts.
          </p>
        </div>
      </Section>

      <Section eyebrow="Team">
        <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap: 24}}>
          {[
            { name:'Alex Hassan', role:'Co-founder · CTO', bio:'Built the entire Mavera platform. Invented the AIL architecture. Scales an offshore engineering team from 5 to 30 as needed. Fractional CTO for Ospri Bio.' },
            { name:'Jill Axline', role:'Co-founder · CEO', bio:'PhD, Cornell. Former Morningstar marketing executive. Runs sales, marketing, client operations, enterprise relationships, public speaking, and GTM.' },
          ].map(p => (
            <div key={p.name} className="mav-card" style={{padding: 28, display:'flex', gap: 20}}>
              <div style={{width: 64, height: 64, borderRadius: 999, background:'linear-gradient(135deg, var(--gold), #6b5a42)', flexShrink: 0, display:'flex', alignItems:'center', justifyContent:'center', fontFamily:'var(--serif)', fontSize: 22, color:'var(--ink0)'}}>
                {p.name.split(' ').map(n => n[0]).join('')}
              </div>
              <div>
                <div style={{fontSize: 18, fontWeight: 500, letterSpacing:'-0.01em'}}>{p.name}</div>
                <div className="mav-caption" style={{fontFamily:'var(--mono)', marginTop: 2}}>{p.role}</div>
                <p style={{fontSize: 13.5, color:'var(--dim)', margin:'14px 0 0', lineHeight: 1.55}}>{p.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section eyebrow="Research" style={{background:'var(--ink1)', borderTop:'1px solid var(--line)', borderBottom:'1px solid var(--line)'}}>
        <div style={{display:'grid', gridTemplateColumns:'1fr 1.2fr', gap: 72, alignItems:'center'}}>
          <div>
            <h2 className="mav-h2">We <em>publish.</em></h2>
            <p className="mav-lede" style={{marginTop: 20}}>
              52 peer-reviewed studies. 96% parity with human panels. 98% on OASIS.
            </p>
            <a className="mav-btn mav-btn--ghost" style={{marginTop: 28}}>Read the research <ArrowUpRight/></a>
          </div>
          <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap: 12}}>
            {[
              ['OASIS','98% emotional accuracy on Harvard benchmark'],
              ['Panel parity','96% agreement vs. real human panels (n=52 studies)'],
              ['Behavioral corpus','50M+ annotated interactions'],
              ['Environment','295K+ media sources · 495K+ total'],
            ].map(([k, v]) => (
              <div key={k} className="mav-card" style={{padding: 20}}>
                <div className="mav-code" style={{color:'var(--gold)', fontSize: 11, letterSpacing:'.1em'}}>{k}</div>
                <div style={{fontSize: 13, color:'var(--dim)', marginTop: 8, lineHeight: 1.5}}>{v}</div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section eyebrow="Principles">
        <div style={{display:'grid', gridTemplateColumns:'repeat(3, 1fr)', gap: 24}}>
          {[
            ['Receipts over vibes','Every recommendation ships with sources, confidence, and a trail you can replay. No black boxes.'],
            ['Outcomes over prompts','We ask what growth you want. The platform figures out the prompts.'],
            ['Autonomy, not automation','Agents that think, research, and decide — not templates that run faster.'],
          ].map(([k, v]) => (
            <div key={k} style={{paddingLeft: 20, borderLeft:'1.5px solid var(--gold)'}}>
              <h3 style={{fontSize: 18, fontWeight: 500, margin:0, letterSpacing:'-0.01em'}}>{k}</h3>
              <p style={{fontSize: 13.5, color:'var(--dim)', margin:'12px 0 0', lineHeight: 1.55}}>{v}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section eyebrow="Company" style={{background:'var(--ink1)', borderTop:'1px solid var(--line)', borderBottom:'1px solid var(--line)'}}>
        <div style={{display:'grid', gridTemplateColumns:'repeat(4, 1fr)', gap: 40}}>
          {[
            ['Incorporated','Delaware C-Corp'],
            ['Infrastructure','AWS · multi-region'],
            ['Certifications','SOC 2 · ISO 27001 · ISO 42001'],
            ['Contact','hello@mavera.io'],
          ].map(([k, v]) => (
            <div key={k}>
              <div className="mav-eyebrow">{k}</div>
              <div style={{fontSize: 15, marginTop: 8}}>{v}</div>
            </div>
          ))}
        </div>
      </Section>

      <Section dense style={{padding: '96px 0 120px'}}><ClosingCTA/></Section>
      <MavFooter onNav={onNav}/>
    </div>
  );
}
window.AboutPage = AboutPage;
