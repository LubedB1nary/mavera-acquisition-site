// Mavera shared primitives: logo, nav, footer, Section, LogoRow, common icons.

const MavLogo = ({ size = 20 }) => (
  <span style={{
    display:'inline-flex', alignItems:'baseline', gap: 2,
    fontFamily: 'var(--sans)', fontSize: size, fontWeight: 500,
    letterSpacing: '-0.035em', color: 'var(--text)',
  }}>
    <span>Mavera</span>
    <span style={{color:'var(--gold)', fontFamily:'var(--serif)', fontStyle:'italic', fontWeight: 400}}>.</span>
  </span>
);

const MavNav = ({ active = 'home', onNav }) => {
  const [menuOpen, setMenuOpen] = React.useState(null); // 'platform' | null
  const items = [
    { id: 'platform', label: 'Platform', menu: true },
    { id: 'pricing', label: 'Pricing' },
    { id: 'trust', label: 'Trust' },
    { id: 'about', label: 'About' },
  ];
  const platformCols = [
    { title: 'Agents', items: [
      ['agents',            'Index · all agents'],
      ['agents-assistant',  'Maven · generalized assistant'],
      ['sales-agents',      'Sales · 7-agent flywheel'],
      ['agents-research',   'Research · deep 5-phase'],
      ['agents-content',    'Content · brand-voice writing'],
      ['agents-meetings',   'Meetings · record · extract'],
      ['agents-market',     'Market intel · signals'],
      ['agents-focus',      'Focus groups · synthetic panels'],
      ['agents-ops',        'Ops · CRM · automations'],
      ['agents-science',    'Science · ML training'],
    ]},
    { title: 'Data', items: [
      ['synthetic',         'Synthetic · marketing & science'],
      ['trust',             'Privacy & evidence layer'],
    ]},
    { title: 'Surfaces', items: [
      ['outcomes',          'Outcomes · long-running goals'],
      ['integrations',      'Integrations · 60+ MCP servers'],
      ['features',          'Platform overview'],
      ['api',               'API · OpenAI-compatible'],
    ]},
  ];
  return (
    <header style={{
      position: 'sticky', top: 0, zIndex: 40,
      backdropFilter: 'blur(18px) saturate(1.3)', WebkitBackdropFilter: 'blur(18px) saturate(1.3)',
      background: 'rgba(7,8,10,0.72)',
      borderBottom: '1px solid var(--line)',
    }} onMouseLeave={() => setMenuOpen(null)}>
      <div className="mav-container" style={{display:'flex', alignItems:'center', justifyContent:'space-between', height: 64}}>
        <a onClick={() => onNav && onNav('home')} style={{cursor:'pointer'}}>
          <MavLogo size={18} />
        </a>
        <nav style={{display:'flex', alignItems:'center', gap: 4}}>
          {items.map(it => (
            <a key={it.id}
               onClick={() => it.menu ? setMenuOpen(menuOpen === it.id ? null : it.id) : (onNav && onNav(it.id))}
               onMouseEnter={() => it.menu && setMenuOpen(it.id)}
               style={{
                 cursor:'pointer', padding: '8px 14px', fontSize: 13.5, borderRadius: 6,
                 color: active === it.id ? 'var(--text)' : 'var(--dim)',
                 background: (active === it.id || (it.menu && menuOpen === it.id)) ? 'rgba(255,255,255,0.04)' : 'transparent',
                 transition: 'color .15s, background .15s',
                 display:'inline-flex', alignItems:'center', gap: 6,
               }}>
               {it.label}
               {it.menu && <span style={{fontSize: 9, color:'var(--muted)'}}>▾</span>}
            </a>
          ))}
        </nav>
        <div style={{display:'flex', alignItems:'center', gap: 8}}>
          <a className="mav-btn mav-btn--ghost mav-btn--sm">Sign in</a>
          <a className="mav-btn mav-btn--primary mav-btn--sm">Start free<ArrowRight size={12}/></a>
        </div>
      </div>

      {menuOpen === 'platform' && (
        <div style={{position:'absolute', top:'100%', left:0, right:0, background:'rgba(7,8,10,0.96)', backdropFilter:'blur(18px)', borderBottom:'1px solid var(--line)'}}>
          <div className="mav-container" style={{padding:'28px 0 32px', display:'grid', gridTemplateColumns:'1.4fr 1fr 1fr', gap: 56}}>
            {platformCols.map(col => (
              <div key={col.title}>
                <div className="mav-eyebrow" style={{marginBottom: 14}}>{col.title}</div>
                <ul style={{listStyle:'none', padding:0, margin:0, display:'flex', flexDirection:'column', gap: 2}}>
                  {col.items.map(([id, label]) => (
                    <li key={id}>
                      <a onClick={() => { onNav && onNav(id); setMenuOpen(null); }}
                         style={{display:'block', padding:'7px 10px', margin:'0 -10px', fontSize: 13.5, color: active === id ? 'var(--text)' : 'var(--dim)', cursor:'pointer', borderRadius: 6}}
                         onMouseEnter={e => e.currentTarget.style.background='rgba(255,255,255,0.04)'}
                         onMouseLeave={e => e.currentTarget.style.background='transparent'}>
                        {label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

const Section = ({ eyebrow, children, style, id, dense }) => (
  <section id={id} style={{padding: dense ? '72px 0' : '120px 0', position:'relative', ...style}}>
    <div className="mav-container">
      {eyebrow && <div className="mav-eyebrow" style={{marginBottom: 24, display:'flex', alignItems:'center', gap: 10}}>
        <span style={{width:18, height:1, background:'var(--gold)', display:'inline-block'}}/>{eyebrow}
      </div>}
      {children}
    </div>
  </section>
);

// Simple inline icons
const ArrowRight = ({ size = 14 }) => (
  <svg width={size} height={size} viewBox="0 0 16 16" fill="none" aria-hidden>
    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="square"/>
  </svg>
);
const ArrowUpRight = ({ size = 12 }) => (
  <svg width={size} height={size} viewBox="0 0 16 16" fill="none" aria-hidden>
    <path d="M5 11L11 5M6 5h5v5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="square"/>
  </svg>
);
const Check = ({ size = 14 }) => (
  <svg width={size} height={size} viewBox="0 0 16 16" fill="none" aria-hidden>
    <path d="M3 8.5l3 3 7-7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" fill="none"/>
  </svg>
);
const Dot = ({ size = 4, color = 'currentColor' }) => (
  <span style={{display:'inline-block', width:size, height:size, borderRadius:999, background:color}}/>
);

// Pipeline logo row — SVG wordmarks, greyscale
// NOTE: These are neutral text wordmarks (not copied brand lockups) used under
// "in active pipeline" framing, as requested.
const PipelineRow = ({ label = 'In active enterprise pipeline' }) => {
  const logos = [
    { name: 'Coinbase', w: 92 },
    { name: 'S&P Global', w: 86 },
    { name: 'PitchBook', w: 88 },
    { name: 'Spotify', w: 78 },
    { name: 'Hasbro', w: 78 },
    { name: 'H&R Block', w: 92 },
  ];
  return (
    <div style={{display:'flex', flexDirection:'column', gap: 14, alignItems:'center'}}>
      <div className="mav-eyebrow" style={{display:'flex', alignItems:'center', gap: 10}}>
        <Dot size={5} color="var(--gold)" />
        {label}
      </div>
      <div style={{display:'flex', gap: 48, alignItems:'center', flexWrap:'wrap', justifyContent:'center', opacity: 0.62}}>
        {logos.map(l => (
          <div key={l.name} style={{
            fontFamily:'var(--serif)', fontSize: 22, letterSpacing: '-0.01em',
            color: 'var(--dim)', fontStyle:'italic'
          }}>{l.name}</div>
        ))}
      </div>
    </div>
  );
};

const CertBadges = ({ small }) => {
  const certs = ['SOC 2 Type II', 'ISO 27001', 'ISO 42001', 'HIPAA-ready'];
  return (
    <div style={{display:'flex', gap: small ? 8 : 12, flexWrap:'wrap'}}>
      {certs.map(c => (
        <div key={c} style={{
          display:'inline-flex', alignItems:'center', gap: 8,
          padding: small ? '5px 10px' : '7px 12px',
          border: '1px solid var(--line)', borderRadius: 6,
          fontFamily: 'var(--mono)', fontSize: small ? 10.5 : 11,
          color: 'var(--dim)', letterSpacing: '0.04em', textTransform: 'uppercase',
        }}>
          <span style={{width:5, height:5, borderRadius:999, background:'var(--gold)'}}/>
          {c}
        </div>
      ))}
    </div>
  );
};

// Placeholder product panel (striped bg) — used where real product shots would go
const ImagePlaceholder = ({ label, height = 420, tone = 'dark' }) => (
  <div style={{
    width:'100%', height, borderRadius: 14, overflow:'hidden',
    background: tone === 'dark' ? 'var(--ink1)' : 'rgba(255,255,255,0.02)',
    border: '1px solid var(--line)', position:'relative',
    backgroundImage: 'repeating-linear-gradient(135deg, transparent 0 12px, rgba(255,255,255,0.025) 12px 13px)',
    display:'flex', alignItems:'center', justifyContent:'center',
  }}>
    <span className="mav-code" style={{color:'var(--muted)', letterSpacing:'0.04em'}}>{label}</span>
  </div>
);

const MavFooter = ({ onNav }) => (
  <footer style={{borderTop:'1px solid var(--line)', padding:'72px 0 32px', marginTop: 64}}>
    <div className="mav-container">
      <div style={{display:'grid', gridTemplateColumns: '1.6fr 1fr 1fr 1fr 1fr', gap: 56, marginBottom: 72}}>
        <div>
          <MavLogo size={18} />
          <p className="mav-body" style={{maxWidth: 280, marginTop: 20, color:'var(--muted)', fontSize: 13.5}}>
            The intelligence layer between companies and their growth. Built with evidence you can defend.
          </p>
          <div style={{marginTop: 24}}>
            <CertBadges small />
          </div>
        </div>
        {[
          { title: 'Platform', items: [['Autonomous agents','features'],['Synthetic intelligence','features'],['Evidence layer','features'],['Meetings','features'],['Brand voice','features']] },
          { title: 'Developers', items: [['API overview','api'],['Documentation','api'],['SDKs','api'],['Status','api'],['Changelog','api']] },
          { title: 'Company', items: [['About','about'],['Research','about'],['Pricing','pricing'],['Trust','trust'],['Contact','about']] },
          { title: 'Legal', items: [['Privacy','trust'],['Terms','trust'],['DPA','trust'],['Security','trust']] },
        ].map(col => (
          <div key={col.title}>
            <div className="mav-eyebrow" style={{marginBottom: 16}}>{col.title}</div>
            <ul style={{listStyle:'none', padding:0, margin:0, display:'flex', flexDirection:'column', gap: 10}}>
              {col.items.map(([label, to]) => (
                <li key={label}><a onClick={() => onNav && onNav(to)} style={{fontSize: 13.5, color:'var(--dim)', cursor:'pointer'}}>{label}</a></li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', paddingTop: 24, borderTop:'1px solid var(--line)'}}>
        <span className="mav-caption">© 2026 Mavera, Inc. All rights reserved.</span>
        <span className="mav-caption" style={{fontFamily:'var(--mono)', letterSpacing:'0.04em'}}>Receipts, not vibes.</span>
      </div>
    </div>
  </footer>
);

Object.assign(window, {
  MavLogo, MavNav, MavFooter, Section, ArrowRight, ArrowUpRight, Check, Dot,
  PipelineRow, CertBadges, ImagePlaceholder,
});
