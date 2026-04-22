// Features page — deep dive on platform capabilities.
function FeaturesPage({ onNav }) {
  const areas = [
    { code:'01', title:'Autonomous Sales Agents', tag:'Glengarry',
      desc:'Seven specialized agents that execute the full sales cycle on their own. Signal detection through meeting prep.',
      bullets:['Signal Scanner · 6-hour sweeps','Prospect Researcher · CMS QCOR + LabScope + LinkedIn','Outreach Drafter · brand voice + persona','Conversation Handler · sentiment & intent','Qualifier · explainable ICP scoring','Re-engager · stalled-deal recovery','Meeting Prepper · briefing docs'] },
    { code:'02', title:'Synthetic Intelligence', tag:'Personas',
      desc:'50+ built-in personas. Custom-trained on your own audience. Statistically validated at 98% accuracy.',
      bullets:['Generational, professional, lifestyle, industry, expert','Custom persona creation from your data','Mosaic mode · audience composites','Persona Check · validate before you ship','96% parity with traditional panels'] },
    { code:'03', title:'Focus Groups', tag:'Research',
      desc:'Synthesized focus groups in minutes instead of weeks. Twelve question types. Structured output.',
      bullets:['12 question types · open · ranked · forced-choice','Synthesis engine · themes, tensions, pull-quotes','Moderator co-pilot','Export to slides · decks · CSV'] },
    { code:'04', title:'Video Analysis', tag:'Creative',
      desc:'Creative testing with attention, clarity, emotion, and CTA scores per second of footage.',
      bullets:['Per-second scoring across four axes','Attention drop-off heatmaps','A/B cuts compared against personas','Recommended edits'] },
    { code:'05', title:'News Intelligence', tag:'Market',
      desc:'295K+ sources under continuous monitoring. Persona-calibrated trending and personalized feeds.',
      bullets:['Trending · personalized · watches','Alerts when thresholds cross','Persona-aware story framing','Feeds the Signal Scanner'] },
    { code:'06', title:'Maven', tag:'Research',
      desc:'5-phase research with source attribution, confidence scoring, and hallucination-risk flags.',
      bullets:['Scope · Search · Synthesize · Attribute · Audit','Per-claim confidence','Hallucination-risk scoring','Replay any reasoning step'] },
    { code:'07', title:'Brand Voice', tag:'Content',
      desc:'Extracted from your existing content. Not a template — your actual voice.',
      bullets:['Learned from URLs, docs, emails','Used across outreach, content, social','Tone guardrails','Versioned per workspace'] },
    { code:'08', title:'Meeting Intelligence', tag:'Meetings',
      desc:'Record, transcribe, and structure every call. BANT · MEDDIC · custom schemas.',
      bullets:['Zoom · Meet · Teams · desktop','Custom extraction schemas','Coaching metrics for reps','Feeds prospect dossiers'] },
  ];
  return (
    <div className="mav-root" style={{minHeight:'100%'}}>
      <MavNav active="features" onNav={onNav}/>

      <Section style={{paddingTop: 96}}>
        <div style={{maxWidth: 820, display:'flex', flexDirection:'column', gap: 24}}>
          <div className="mav-eyebrow">Platform</div>
          <h1 className="mav-h1" style={{fontSize: 76}}>One platform. <em>Eleven capabilities.</em></h1>
          <p className="mav-lede">From market intelligence to autonomous sales — every Mavera capability shares the same synthetic layer, the same evidence chain, and the same OpenAI-compatible API.</p>
        </div>
      </Section>

      <Section dense style={{paddingTop: 16}}>
        <div style={{display:'flex', flexDirection:'column', gap: 1, background:'var(--line)', border:'1px solid var(--line)', borderRadius: 14, overflow:'hidden'}}>
          {areas.map((a, idx) => (
            <div key={a.code} style={{
              background:'var(--ink0)', padding: '40px 44px',
              display:'grid', gridTemplateColumns:'110px 1.2fr 1.4fr', gap: 40, alignItems:'start',
            }}>
              <div style={{display:'flex', flexDirection:'column', gap: 6}}>
                <span className="mav-code" style={{color:'var(--gold)', fontSize: 11, letterSpacing:'.1em'}}>{a.code}</span>
                <span className="mav-code" style={{color:'var(--muted)', fontSize: 10.5, letterSpacing:'.08em', textTransform:'uppercase'}}>{a.tag}</span>
              </div>
              <div>
                <h3 style={{fontSize: 26, fontWeight: 500, letterSpacing:'-0.02em', margin:0}}>{a.title}</h3>
                <p style={{fontSize: 15, color:'var(--dim)', lineHeight: 1.55, margin:'14px 0 0', maxWidth: 400}}>{a.desc}</p>
              </div>
              <ul style={{listStyle:'none', padding:0, margin:0, display:'grid', gridTemplateColumns:'1fr 1fr', gap: '10px 24px'}}>
                {a.bullets.map(b => (
                  <li key={b} style={{fontSize: 13, color:'var(--dim)', display:'flex', gap: 10}}><Check size={13}/>{b}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      <Section eyebrow="Live demo · Glengarry"><AgentDemo/></Section>

      <Section dense style={{padding: '120px 0'}}><ClosingCTA/></Section>
      <MavFooter onNav={onNav}/>
    </div>
  );
}
window.FeaturesPage = FeaturesPage;
