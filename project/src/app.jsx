// App shell: design canvas showing the single-direction homepage + the
// sales-agents subpage stacked beside it (both are navigable mini-sites).

const ARTBOARD_W = 1440;
const ARTBOARD_H = 2600;

function Artboard({ initialPage = 'home' }) {
  const [page, setPage] = React.useState(initialPage);
  const onNav = (id) => {
    setPage(id);
    setTimeout(() => {
      const scroller = document.querySelector(`#ab-${initialPage} .mav-scroll`);
      if (scroller) scroller.scrollTop = 0;
    }, 0);
  };

  let Page;
  if (page === 'home')               Page = <HomePageA onNav={onNav} heroVariant={window.__mavTweaks?.heroVariant || 'type'}/>;
  else if (page === 'sales-agents')     Page = <SalesAgentsPage onNav={onNav}/>;
  else if (page === 'agents')           Page = <AgentsIndexPage onNav={onNav}/>;
  else if (page === 'agents-assistant') Page = <AgentsAssistantPage onNav={onNav}/>;
  else if (page === 'agents-research')  Page = <AgentsResearchPage onNav={onNav}/>;
  else if (page === 'agents-content')   Page = <AgentsContentPage onNav={onNav}/>;
  else if (page === 'agents-meetings')  Page = <AgentsMeetingsPage onNav={onNav}/>;
  else if (page === 'agents-market')    Page = <AgentsMarketPage onNav={onNav}/>;
  else if (page === 'agents-focus')     Page = <AgentsFocusPage onNav={onNav}/>;
  else if (page === 'agents-ops')       Page = <AgentsOpsPage onNav={onNav}/>;
  else if (page === 'agents-science')   Page = <AgentsSciencePage onNav={onNav}/>;
  else if (page === 'synthetic')        Page = <SyntheticPage onNav={onNav}/>;
  else if (page === 'outcomes')         Page = <OutcomesPage onNav={onNav}/>;
  else if (page === 'integrations')     Page = <IntegrationsPage onNav={onNav}/>;
  else if (page === 'features')      Page = <FeaturesPage onNav={onNav}/>;
  else if (page === 'pricing')       Page = <PricingPage onNav={onNav}/>;
  else if (page === 'api')           Page = <ApiPage onNav={onNav}/>;
  else if (page === 'trust')         Page = <TrustPage onNav={onNav}/>;
  else if (page === 'about')         Page = <AboutPage onNav={onNav}/>;
  else                               Page = <HomePageA onNav={onNav}/>;

  const scrollRef = React.useRef(null);
  // Release wheel lock from parent canvas so the inner page actually scrolls.
  React.useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    const stop = (e) => e.stopPropagation();
    el.addEventListener('wheel', stop, { passive: true });
    el.addEventListener('touchmove', stop, { passive: true });
    return () => {
      el.removeEventListener('wheel', stop);
      el.removeEventListener('touchmove', stop);
    };
  }, []);

  return (
    <div id={`ab-${initialPage}`} style={{width:'100%', height:'100%', overflow:'hidden', position:'relative'}}>
      <div ref={scrollRef} className="mav-scroll" style={{width:'100%', height:'100%', overflow:'auto', background:'var(--ink0)', touchAction:'pan-y'}}>
        {Page}
      </div>
    </div>
  );
}

// ───── Tweaks panel ─────
function TweaksPanel({ tweaks, setTweaks, onClose }) {
  const set = (k, v) => setTweaks(t => ({...t, [k]: v}));
  const hueOptions = [
    ['violet', '#c8a8ff'],
    ['blue',   '#b8c5ff'],
    ['sage',   '#a3e6c4'],
    ['amber',  '#ff9c6b'],
    ['mono',   '#e9e7e1'],
  ];
  return (
    <div style={{
      position:'fixed', bottom: 20, right: 20, zIndex: 100,
      width: 300, background:'var(--ink1)', border:'1px solid var(--line)', borderRadius: 12,
      color: 'var(--text)', fontFamily:'var(--sans)', boxShadow:'0 20px 60px rgba(0,0,0,0.5)',
    }} className="mav-root">
      <div style={{display:'flex', alignItems:'center', justifyContent:'space-between', padding:'12px 16px', borderBottom:'1px solid var(--line)'}}>
        <span className="mav-eyebrow">Tweaks</span>
        <button onClick={onClose} style={{background:'transparent', border:0, color:'var(--muted)', cursor:'pointer', fontSize: 16, lineHeight: 1}}>×</button>
      </div>
      <div style={{padding: 16, display:'flex', flexDirection:'column', gap: 18}}>
        <div>
          <div className="mav-caption" style={{marginBottom: 8}}>Home hero variant</div>
          <div style={{display:'flex', gap: 4}}>
            {['type','product','portal'].map(v => (
              <button key={v} onClick={() => set('heroVariant', v)} style={{
                flex: 1, padding:'8px 10px', fontSize: 11.5, textTransform:'capitalize',
                background: tweaks.heroVariant === v ? 'var(--gold)' : 'transparent',
                color: tweaks.heroVariant === v ? 'var(--ink0)' : 'var(--dim)',
                border:'1px solid var(--line)', borderRadius: 6, cursor:'pointer', fontFamily:'inherit',
              }}>{v}</button>
            ))}
          </div>
        </div>
        <div>
          <div className="mav-caption" style={{marginBottom: 8}}>Accent hue</div>
          <div style={{display:'flex', gap: 6}}>
            {hueOptions.map(([name, color]) => (
              <button key={name} onClick={() => set('accent', color)} title={name} style={{
                width: 32, height: 28, borderRadius: 6,
                background: color, border: tweaks.accent === color ? '2px solid #fff' : '1px solid var(--line)',
                cursor:'pointer',
              }}/>
            ))}
          </div>
        </div>
        <div>
          <div className="mav-caption" style={{marginBottom: 8}}>Grain overlay</div>
          <label style={{display:'flex', alignItems:'center', gap: 8, fontSize: 12, color:'var(--dim)', cursor:'pointer'}}>
            <input type="checkbox" checked={tweaks.grain} onChange={e => set('grain', e.target.checked)}/>
            <span>Film grain on artboards</span>
          </label>
        </div>
        <div style={{fontSize: 11, color:'var(--muted)', lineHeight: 1.5, paddingTop: 8, borderTop:'1px solid var(--line)'}}>
          Hero variant applies to the Home artboard. Sales Agents has its own hero.
        </div>
      </div>
    </div>
  );
}

function TweaksToggle({ onOpen }) {
  return (
    <button onClick={onOpen} style={{
      position:'fixed', bottom: 20, right: 20, zIndex: 99,
      background:'var(--ink1)', color:'var(--gold)', border:'1px solid var(--line)',
      borderRadius: 999, padding:'10px 18px', cursor:'pointer',
      fontFamily:'var(--mono)', fontSize: 11.5, letterSpacing:'.1em',
      boxShadow:'0 12px 30px rgba(0,0,0,0.4)',
    }} className="mav-root">
      ✱ TWEAKS
    </button>
  );
}

function App() {
  const [tweaks, setTweaks] = React.useState({ heroVariant: 'type', accent: '#c8a8ff', grain: false });
  const [tweaksOpen, setTweaksOpen] = React.useState(false);
  React.useEffect(() => { window.__mavTweaks = tweaks; }, [tweaks]);

  React.useEffect(() => {
    const stylesEl = document.getElementById('mav-tweak-overrides') || (() => {
      const s = document.createElement('style'); s.id = 'mav-tweak-overrides'; document.head.appendChild(s); return s;
    })();
    const hex = tweaks.accent.replace('#','');
    const r = parseInt(hex.substring(0,2),16);
    const g = parseInt(hex.substring(2,4),16);
    const b = parseInt(hex.substring(4,6),16);
    stylesEl.textContent = `
      .mav-root {
        --gold: ${tweaks.accent} !important;
        --gold-soft: ${tweaks.accent}cc !important;
        --gold-dim: rgba(${r},${g},${b},0.14) !important;
      }
    `;
  }, [tweaks.accent]);

  return (
    <>
      <DesignCanvas>
        <DCSection id="mavera-home" title="Mavera · Homepage" subtitle="Editorial dark · type-led · three hero variants in Tweaks">
          <DCArtboard id="home" label="Home · mavera.io" width={ARTBOARD_W} height={ARTBOARD_H}>
            <Artboard initialPage="home" key={`home-${tweaks.heroVariant}-${tweaks.accent}`}/>
          </DCArtboard>
        </DCSection>

        <DCSection id="mavera-agents" title="Mavera · /agents" subtitle="Index of all nine agents · Maven featured · links to sub-pages">
          <DCArtboard id="agents" label="/agents · index" width={ARTBOARD_W} height={ARTBOARD_H}>
            <Artboard initialPage="agents" key={`agents-${tweaks.accent}`}/>
          </DCArtboard>
          <DCArtboard id="agents-assistant" label="/agents/maven" width={ARTBOARD_W} height={ARTBOARD_H}>
            <Artboard initialPage="agents-assistant" key={`assist-${tweaks.accent}`}/>
          </DCArtboard>
          <DCArtboard id="sales-agents" label="/agents/sales" width={ARTBOARD_W} height={ARTBOARD_H}>
            <Artboard initialPage="sales-agents" key={`sales-${tweaks.accent}`}/>
          </DCArtboard>
          <DCArtboard id="agents-science" label="/agents/science" width={ARTBOARD_W} height={ARTBOARD_H}>
            <Artboard initialPage="agents-science" key={`sci-${tweaks.accent}`}/>
          </DCArtboard>
        </DCSection>

        <DCSection id="mavera-synthetic" title="Mavera · /synthetic" subtitle="Marketing + scientific synthetic data · privacy audits · published methods">
          <DCArtboard id="synthetic" label="/synthetic" width={ARTBOARD_W} height={ARTBOARD_H}>
            <Artboard initialPage="synthetic" key={`synth-${tweaks.accent}`}/>
          </DCArtboard>
        </DCSection>

        <DCSection id="mavera-outcomes" title="Mavera · /outcomes" subtitle="Long-running AI-managed goals with calendar · anatomy cards · always-on">
          <DCArtboard id="outcomes" label="/outcomes" width={ARTBOARD_W} height={ARTBOARD_H}>
            <Artboard initialPage="outcomes" key={`outc-${tweaks.accent}`}/>
          </DCArtboard>
        </DCSection>

        <DCSection id="mavera-integrations" title="Mavera · /integrations" subtitle="60+ real public MCP servers · search · categorize · Mavera as a server">
          <DCArtboard id="integrations" label="/integrations" width={ARTBOARD_W} height={ARTBOARD_H}>
            <Artboard initialPage="integrations" key={`intg-${tweaks.accent}`}/>
          </DCArtboard>
        </DCSection>

        <DCPostIt top={60} left={40} rotate={-3} width={220}>
          Both artboards are navigable — click any nav item inside to visit Features, API, Pricing, Trust, About.
        </DCPostIt>
        <DCPostIt top={60} right={40} rotate={2} width={220}>
          Accent is now soft violet. Tweaks panel swaps hero variants (Home only) + accent hue.
        </DCPostIt>
      </DesignCanvas>

      {tweaksOpen
        ? <TweaksPanel tweaks={tweaks} setTweaks={setTweaks} onClose={() => setTweaksOpen(false)}/>
        : <TweaksToggle onOpen={() => setTweaksOpen(true)}/>}
    </>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App/>);
