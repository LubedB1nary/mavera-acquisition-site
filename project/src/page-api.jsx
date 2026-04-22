// API page — developer-facing, OpenAI-compat story, endpoints, SDKs, non-dev angle.
function ApiPage({ onNav }) {
  const [lang, setLang] = React.useState('python');
  const samples = {
    python: `from openai import OpenAI

client = OpenAI(
    api_key="mvra_live_…",
    base_url="https://app.mavera.io/api/v1",
)

# Same Responses API. Add a persona.
response = client.responses.create(
    model="mavera-1",
    input="How does this campaign read to a CFO?",
    extra_body={"persona_id": "cfo_mid_market"},
)

print(response.output_text)
print(response.usage.credits)  # → 4`,
    javascript: `import OpenAI from "openai";

const client = new OpenAI({
  apiKey: "mvra_live_…",
  baseURL: "https://app.mavera.io/api/v1",
});

// Same Responses API. Add a persona.
const response = await client.responses.create({
  model: "mavera-1",
  input: "How does this campaign read to a CFO?",
  extra_body: { persona_id: "cfo_mid_market" },
});

console.log(response.output_text);
console.log(response.usage.credits); // → 4`,
    go: `client := openai.NewClient(
    option.WithAPIKey("mvra_live_…"),
    option.WithBaseURL("https://app.mavera.io/api/v1"),
)

res, err := client.Responses.Create(ctx, openai.ResponseNewParams{
    Model: "mavera-1",
    Input: "How does this campaign read to a CFO?",
    ExtraBody: map[string]any{"persona_id": "cfo_mid_market"},
})
if err != nil { log.Fatal(err) }
fmt.Println(res.OutputText)`,
  };

  const endpoints = [
    ['POST /responses','Persona-enhanced chat','1–5'],
    ['POST /research','Maven · 5-phase','10–75'],
    ['GET /personas','List built-ins','0'],
    ['POST /personas','Create custom persona','300 (once)'],
    ['POST /focus-groups','Synthesized group','50–500+'],
    ['POST /video/analyze','Attention·clarity·emotion·CTA','100–500'],
    ['GET /news/trending','Monitored sources','0–5'],
    ['POST /news/analyze','Story analysis','5–20'],
    ['POST /brand-voice','Extract voice','50 (once)'],
    ['POST /content','Generate content','10–30'],
    ['POST /agents/run','Run an autonomous agent','varies'],
  ];

  return (
    <div className="mav-root" style={{minHeight:'100%'}}>
      <MavNav active="api" onNav={onNav}/>

      <Section style={{paddingTop: 96}}>
        <div style={{display:'grid', gridTemplateColumns:'1fr 1.1fr', gap: 72, alignItems:'center'}}>
          <div>
            <div className="mav-eyebrow" style={{marginBottom: 20}}>API</div>
            <h1 className="mav-h1" style={{fontSize: 72}}>If you know <em>OpenAI,</em> you know Mavera.</h1>
            <p className="mav-lede" style={{marginTop: 28}}>
              Change your <span className="mav-code" style={{color:'var(--text)'}}>base_url</span>. Add a
              <span className="mav-code" style={{color:'var(--text)'}}> persona_id</span>. Your existing
              code works. Nothing else changes.
            </p>
            <div style={{display:'flex', gap: 12, marginTop: 36}}>
              <a className="mav-btn mav-btn--primary">Get an API key <ArrowRight/></a>
              <a className="mav-btn mav-btn--ghost">docs.mavera.io <ArrowUpRight/></a>
            </div>
            <div style={{marginTop: 40, display:'grid', gridTemplateColumns:'repeat(3, 1fr)', gap: 24}}>
              {[['Python','pip install openai'],['JavaScript','npm i openai'],['Go','go get openai-go']].map(([l, c]) => (
                <div key={l}>
                  <div className="mav-eyebrow">{l}</div>
                  <code style={{fontFamily:'var(--mono)', fontSize: 12, color:'var(--dim)', marginTop: 6, display:'block'}}>{c}</code>
                </div>
              ))}
            </div>
          </div>
          <CodeCard lang={lang} setLang={setLang} samples={samples}/>
        </div>
      </Section>

      <Section eyebrow="Not just for developers" style={{background:'var(--ink1)', borderTop:'1px solid var(--line)', borderBottom:'1px solid var(--line)'}}>
        <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap: 72, alignItems:'center'}}>
          <div>
            <h2 className="mav-h2">You don't have to write code <em>anymore.</em></h2>
            <p className="mav-lede" style={{marginTop: 24}}>
              Claude Code, Cursor, Codex — APIs are accessible to anyone now. No ticket, no sprint.
            </p>
            <ul style={{listStyle:'none', padding:0, margin:'28px 0 0', display:'flex', flexDirection:'column', gap: 10}}>
              {['200+ workflow templates · ready to clone','Natural-language prompts mapped to endpoints','Every response shows credit cost up front','Sandbox keys (mvra_test_) · zero-cost testing'].map(t => (
                <li key={t} style={{fontSize: 14, color:'var(--dim)', display:'flex', gap: 10}}><Check size={14}/>{t}</li>
              ))}
            </ul>
          </div>
          <div className="mav-card" style={{padding: 0, overflow:'hidden'}}>
            <div style={{padding:'14px 18px', borderBottom:'1px solid var(--line)', display:'flex', alignItems:'center', gap: 10}}>
              <span style={{width:10, height:10, borderRadius:999, background:'rgba(255,255,255,0.08)'}}/>
              <span style={{width:10, height:10, borderRadius:999, background:'rgba(255,255,255,0.08)'}}/>
              <span className="mav-code" style={{color:'var(--muted)', marginLeft: 6}}>claude · mavera template</span>
            </div>
            <div style={{padding: 22, display:'flex', flexDirection:'column', gap: 14, fontSize: 13.5, lineHeight: 1.55}}>
              <div style={{display:'flex', gap: 10, alignItems:'flex-start'}}>
                <span className="mav-code" style={{color:'var(--gold)', fontSize: 11, letterSpacing:'.1em', marginTop: 2}}>YOU</span>
                <span style={{color:'var(--text)'}}>Test my Q2 campaign against three customer personas and flag anything that reads poorly to finance-oriented buyers.</span>
              </div>
              <div style={{display:'flex', gap: 10, alignItems:'flex-start'}}>
                <span className="mav-code" style={{color:'var(--dim)', fontSize: 11, letterSpacing:'.1em', marginTop: 2}}>CODE</span>
                <span style={{color:'var(--dim)', fontFamily:'var(--mono)', fontSize: 12}}>→ uses mavera.focus_groups.create(...)<br/>→ 3 personas · 12 questions · 42 credits<br/>→ synthesis in 18s</span>
              </div>
              <div style={{display:'flex', gap: 10, alignItems:'flex-start'}}>
                <span className="mav-code" style={{color:'var(--gold)', fontSize: 11, letterSpacing:'.1em', marginTop: 2}}>OUT</span>
                <span style={{color:'var(--dim)'}}>CFO persona flagged two claims as unsubstantiated. Marketing and ops personas resonated. Recommended rewrite attached.</span>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section eyebrow="Endpoints">
        <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap: 72, alignItems:'start'}}>
          <div>
            <h2 className="mav-h2">Eleven feature areas. <em>One surface.</em></h2>
            <p className="mav-lede" style={{marginTop: 20, maxWidth: 440}}>
              Every platform capability is an endpoint. Credit cost is transparent and shown per call.
            </p>
            <div style={{marginTop: 28, display:'flex', flexDirection:'column', gap: 10, fontSize: 13.5, color:'var(--dim)'}}>
              <div><span className="mav-code" style={{color:'var(--gold)'}}>mvra_live_</span> · production</div>
              <div><span className="mav-code" style={{color:'var(--gold)'}}>mvra_test_</span> · sandbox</div>
              <div>Base URL · <span className="mav-code" style={{color:'var(--text)'}}>https://app.mavera.io/api/v1</span></div>
              <div>Model · <span className="mav-code" style={{color:'var(--text)'}}>mavera-1</span></div>
            </div>
          </div>
          <div className="mav-card" style={{padding: 0, overflow:'hidden'}}>
            <div style={{display:'grid', gridTemplateColumns:'1.5fr 1.3fr 80px', padding:'14px 20px', borderBottom:'1px solid var(--line)', background:'var(--ink2)'}}>
              <span className="mav-eyebrow">Endpoint</span><span className="mav-eyebrow">Purpose</span><span className="mav-eyebrow" style={{textAlign:'right'}}>Credits</span>
            </div>
            {endpoints.map((e, idx) => (
              <div key={e[0]} style={{display:'grid', gridTemplateColumns:'1.5fr 1.3fr 80px', padding:'12px 20px', borderBottom: idx === endpoints.length-1 ? 0 : '1px solid var(--line-soft)', fontSize: 12.5}}>
                <span style={{fontFamily:'var(--mono)', color:'var(--text)'}}>{e[0]}</span>
                <span style={{color:'var(--dim)'}}>{e[1]}</span>
                <span style={{fontFamily:'var(--mono)', color:'var(--gold)', textAlign:'right'}}>{e[2]}</span>
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
window.ApiPage = ApiPage;
