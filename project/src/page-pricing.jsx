// Pricing page — detailed tier comparison + credit reference.
function PricingPage({ onNav }) {
  const tiers = [
    { name:'Starter', price:'$300', unit:'/mo', credits:'500', desc:'For early teams validating the approach.',
      feat:{ trial:'14-day free','credits':'500 / mo','overage':'$0.80 per credit','audio':'Included','storage':'50 GB S3','support':'Email · 48h','seats':'Up to 3','sso':false,'scim':false,'sla':false,'dpa':'On request','bv':true,'cp':false,'api':true,'templates':'50+' } },
    { name:'Professional', price:'$3,500', unit:'/mo', credits:'10,000', highlight: true, desc:'For agencies and growth teams running at volume.',
      feat:{ trial:'14-day free','credits':'10,000 / mo','overage':'$0.55 per credit','audio':'1,000 min','storage':'100 GB S3','support':'Priority · 12h','seats':'Up to 15','sso':true,'scim':false,'sla':false,'dpa':'Included','bv':true,'cp':true,'api':true,'templates':'200+' } },
    { name:'Enterprise', price:'Custom', credits:'Custom', desc:'For regulated industries and high-compliance buyers.',
      feat:{ trial:'Pilot','credits':'Custom','overage':'Custom','audio':'Custom','storage':'Custom','support':'Dedicated CSM','seats':'Unlimited','sso':true,'scim':true,'sla':'Uptime SLA','dpa':'BAA + DPA','bv':true,'cp':true,'api':true,'templates':'200+ · custom' } },
  ];
  const rows = [
    ['Free trial','trial'],['Monthly credits','credits'],['Overage rate','overage'],
    ['Audio transcription','audio'],['Object storage','storage'],['Support','support'],
    ['Team seats','seats'],['SSO','sso'],['SCIM provisioning','scim'],
    ['Uptime SLA','sla'],['DPA / BAA','dpa'],['Brand voice','bv'],
    ['Custom personas','cp'],['API access','api'],['Workflow templates','templates'],
  ];
  const render = v => {
    if (v === true) return <Check size={14}/>;
    if (v === false) return <span style={{color:'var(--faint)'}}>—</span>;
    return <span>{v}</span>;
  };

  const credits = [
    ['Responses API · chat','1–5 credits'],
    ['Maven · research','10–75 credits'],
    ['Focus Groups','50–500+ credits'],
    ['Video Analysis','100–500 credits'],
    ['Custom persona creation','300 credits (once)'],
    ['Brand voice creation','50 credits (once)'],
    ['Content generation','10–30 credits'],
    ['News analysis','5–20 credits'],
    ['Trending / personalized news','0–5 credits'],
    ['Persona listing','Free'],
  ];

  return (
    <div className="mav-root" style={{minHeight:'100%'}}>
      <MavNav active="pricing" onNav={onNav}/>

      <Section style={{paddingTop: 96}}>
        <div style={{maxWidth: 820, display:'flex', flexDirection:'column', gap: 24}}>
          <div className="mav-eyebrow">Pricing</div>
          <h1 className="mav-h1" style={{fontSize: 76}}>Credit-based. <em>Transparent.</em> No surprises.</h1>
          <p className="mav-lede">Every API response shows credits consumed. Every workflow shows estimated cost before it runs.</p>
        </div>
      </Section>

      <Section dense>
        <div style={{display:'grid', gridTemplateColumns:'repeat(3, 1fr)', gap: 16, marginBottom: 8}}>
          {tiers.map(t => (
            <div key={t.name} style={{
              background: t.highlight ? 'var(--ink2)' : 'var(--ink1)',
              border: `1px solid ${t.highlight ? 'var(--gold-dim)' : 'var(--line)'}`,
              borderRadius: 14, padding: 32, position:'relative',
            }}>
              {t.highlight && <span style={{position:'absolute', top: 20, right: 20, fontFamily:'var(--mono)', fontSize: 10, color:'var(--gold)', letterSpacing:'.1em'}}>MOST POPULAR</span>}
              <div className="mav-eyebrow" style={{marginBottom: 8}}>{t.name}</div>
              <div style={{display:'flex', alignItems:'baseline', gap: 4, marginBottom: 6}}>
                <span style={{fontSize: 48, letterSpacing:'-0.03em', fontWeight: 500}}>{t.price}</span>
                {t.unit && <span style={{fontSize: 14, color:'var(--muted)'}}>{t.unit}</span>}
              </div>
              <div style={{fontSize: 13, color:'var(--dim)', fontFamily:'var(--mono)', marginBottom: 16}}>{t.credits} credits · per month</div>
              <p style={{fontSize: 13.5, color:'var(--dim)', margin:'0 0 24px', lineHeight: 1.5}}>{t.desc}</p>
              <a className={`mav-btn ${t.highlight ? 'mav-btn--primary' : 'mav-btn--ghost'}`} style={{width:'100%', justifyContent:'center'}}>
                {t.name === 'Enterprise' ? 'Talk to sales' : 'Start free trial'}
              </a>
            </div>
          ))}
        </div>
      </Section>

      <Section dense>
        <div style={{border:'1px solid var(--line)', borderRadius: 14, overflow:'hidden'}}>
          <div style={{display:'grid', gridTemplateColumns:'1.3fr 1fr 1fr 1fr', padding:'18px 24px', background:'var(--ink1)', borderBottom:'1px solid var(--line)'}}>
            <span className="mav-eyebrow">Feature</span>
            {tiers.map(t => <span key={t.name} className="mav-eyebrow" style={{color: t.highlight ? 'var(--gold)' : 'var(--dim)'}}>{t.name}</span>)}
          </div>
          {rows.map((r, idx) => (
            <div key={r[0]} style={{
              display:'grid', gridTemplateColumns:'1.3fr 1fr 1fr 1fr',
              padding:'14px 24px', borderBottom: idx === rows.length-1 ? 0 : '1px solid var(--line-soft)',
              background: idx % 2 ? 'rgba(255,255,255,0.015)' : 'transparent',
              fontSize: 13.5,
            }}>
              <span style={{color:'var(--dim)'}}>{r[0]}</span>
              {tiers.map(t => <span key={t.name} style={{color: t.highlight ? 'var(--text)' : 'var(--dim)'}}>{render(t.feat[r[1]])}</span>)}
            </div>
          ))}
        </div>
      </Section>

      <Section eyebrow="Credit reference">
        <div style={{display:'grid', gridTemplateColumns:'1fr 1.2fr', gap: 72, alignItems:'start'}}>
          <div>
            <h2 className="mav-h2">Pay by the <em>unit of work.</em></h2>
            <p className="mav-lede" style={{marginTop: 24}}>
              Credits map to compute. Chat: 1–5. Research: 10–75. Focus group: 50–500+. Free in-tier, pay-as-you-go after.
            </p>
          </div>
          <div className="mav-card" style={{padding: 0, overflow:'hidden'}}>
            {credits.map(([k, v], idx) => (
              <div key={k} style={{display:'flex', justifyContent:'space-between', padding:'14px 20px', borderBottom: idx === credits.length-1 ? 0 : '1px solid var(--line-soft)'}}>
                <span style={{fontSize: 13.5, color:'var(--dim)'}}>{k}</span>
                <span style={{fontSize: 13, fontFamily:'var(--mono)', color:'var(--text)'}}>{v}</span>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section dense style={{padding: '96px 0 120px'}}><ClosingCTA/></Section>
      <MavFooter onNav={onNav}/>
    </div>
  );
}
window.PricingPage = PricingPage;
