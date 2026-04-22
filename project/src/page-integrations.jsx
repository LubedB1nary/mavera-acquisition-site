// /integrations — MCP-first integrations page.
// Catalog of real public MCP servers Maven and the agent fleet can call.

function IntegrationsPage({ onNav }) {
  const [query, setQuery] = React.useState('');
  const [activeCat, setActiveCat] = React.useState('all');

  // Real public MCP servers — curated from the official registry + awesome lists.
  // Each entry: { name, vendor, category, auth, transport, tools, official, tag, desc }
  const servers = [
    // ─── Productivity & Knowledge ───
    { name:'Notion',        vendor:'notion',        category:'productivity', auth:'OAuth 2.1',   transport:'Remote SSE', tools:22, official:true,  tag:'official', desc:'Search, read, and write pages, databases, and comments across your workspace.' },
    { name:'Google Drive',  vendor:'google',        category:'productivity', auth:'OAuth 2.1',   transport:'Remote SSE', tools:14, official:true,  tag:'official', desc:'Docs, Sheets, Slides — find the Q3 plan and hand it to Maven.' },
    { name:'Google Calendar', vendor:'google',      category:'productivity', auth:'OAuth 2.1',   transport:'Remote SSE', tools:9,  official:true,  tag:'official', desc:'Schedule, reschedule, and reason over availability across people.' },
    { name:'SharePoint',    vendor:'microsoft',     category:'productivity', auth:'Entra ID',     transport:'Remote HTTP', tools:18, official:true,  tag:'official', desc:'Enterprise document libraries with permissions preserved.' },
    { name:'Dropbox',       vendor:'dropbox',       category:'productivity', auth:'OAuth 2.1',   transport:'Remote SSE', tools:11, official:true,  tag:'official', desc:'Files, folders, Paper docs. Attached as retrievable context.' },
    { name:'Box',           vendor:'box',           category:'productivity', auth:'OAuth 2.1',   transport:'Remote SSE', tools:16, official:true,  tag:'official', desc:'Intelligent content management — enterprise grade.' },
    { name:'Confluence',    vendor:'atlassian',     category:'productivity', auth:'OAuth 2.1',   transport:'Remote SSE', tools:12, official:true,  tag:'official', desc:'Read and update wiki pages and spaces.' },
    { name:'Obsidian',      vendor:'community',     category:'productivity', auth:'Local',       transport:'stdio',       tools:8,  official:false, tag:'community', desc:'Vault search, note read/write, link graph traversal.' },

    // ─── Communication ───
    { name:'Slack',         vendor:'slack',         category:'communication', auth:'OAuth 2.1',  transport:'Remote SSE', tools:24, official:true,  tag:'official', desc:'Post, read, summarize threads. "Catch me up on #revenue."' },
    { name:'Gmail',         vendor:'google',        category:'communication', auth:'OAuth 2.1',  transport:'Remote SSE', tools:17, official:true,  tag:'official', desc:'Read, compose, search — scoped by label.' },
    { name:'Microsoft Teams', vendor:'microsoft',   category:'communication', auth:'Entra ID',   transport:'Remote HTTP', tools:19, official:true,  tag:'official', desc:'Channels, chats, meetings, files.' },
    { name:'Discord',       vendor:'community',     category:'communication', auth:'Bot token',  transport:'stdio',        tools:12, official:false, tag:'community', desc:'Servers, channels, DMs. Good for bot workflows.' },
    { name:'Twilio',        vendor:'twilio',        category:'communication', auth:'API key',    transport:'stdio',        tools:7,  official:true,  tag:'official', desc:'Programmatic SMS and voice with number validation.' },
    { name:'Zoom',          vendor:'zoom',          category:'communication', auth:'OAuth 2.1',  transport:'Remote SSE', tools:10, official:true,  tag:'official', desc:'Meetings, recordings, transcripts — the raw material for meeting agents.' },

    // ─── Work management ───
    { name:'Linear',        vendor:'linear',        category:'work',          auth:'OAuth 2.1',  transport:'Remote SSE', tools:18, official:true,  tag:'official', desc:'Issues, cycles, projects. High-velocity product orgs.' },
    { name:'Jira',          vendor:'atlassian',     category:'work',          auth:'OAuth 2.1',  transport:'Remote SSE', tools:23, official:true,  tag:'official', desc:'Enterprise ticketing with full workflow state.' },
    { name:'Asana',         vendor:'asana',         category:'work',          auth:'OAuth 2.1',  transport:'Remote SSE', tools:14, official:true,  tag:'official', desc:'Tasks, projects, portfolios. Cross-team coordination.' },
    { name:'Monday',        vendor:'monday',        category:'work',          auth:'OAuth 2.1',  transport:'Remote SSE', tools:16, official:true,  tag:'official', desc:'Work OS — boards, items, updates.' },
    { name:'ClickUp',       vendor:'clickup',       category:'work',          auth:'API key',    transport:'Remote HTTP', tools:13, official:true,  tag:'official', desc:'Unified work management with hierarchy.' },
    { name:'Todoist',       vendor:'community',     category:'work',          auth:'API key',    transport:'stdio',        tools:8,  official:false, tag:'community', desc:'Natural-language task management for solo ops.' },

    // ─── CRM & Revenue ───
    { name:'Salesforce',    vendor:'salesforce',    category:'crm',           auth:'OAuth 2.1',  transport:'Remote SSE', tools:31, official:true,  tag:'official', desc:'Opportunities, accounts, contacts, custom objects. Read + write.' },
    { name:'HubSpot',       vendor:'hubspot',       category:'crm',           auth:'OAuth 2.1',  transport:'Remote SSE', tools:26, official:true,  tag:'official', desc:'Contacts, deals, marketing, service, ops hubs.' },
    { name:'Pipedrive',     vendor:'pipedrive',     category:'crm',           auth:'API key',    transport:'Remote HTTP', tools:15, official:true,  tag:'official', desc:'Deal pipelines, activities, and person records.' },
    { name:'Attio',         vendor:'attio',         category:'crm',           auth:'OAuth 2.1',  transport:'Remote SSE', tools:12, official:true,  tag:'official', desc:'Relational CRM with custom objects.' },
    { name:'Stripe',        vendor:'stripe',        category:'crm',           auth:'API key',    transport:'Remote HTTP', tools:19, official:true,  tag:'official', desc:'Charges, customers, subscriptions, revenue reports.' },
    { name:'PayPal',        vendor:'paypal',        category:'crm',           auth:'OAuth 2.1',  transport:'Remote HTTP', tools:14, official:true,  tag:'official', desc:'Transactions, invoices, payouts. Agent-safe scopes.' },
    { name:'Chargebee',     vendor:'chargebee',     category:'crm',           auth:'API key',    transport:'Remote HTTP', tools:11, official:true,  tag:'official', desc:'Subscription billing, dunning, and entitlements.' },
    { name:'Xero',          vendor:'xero',          category:'crm',           auth:'OAuth 2.1',  transport:'Remote SSE', tools:17, official:true,  tag:'official', desc:'Accounting data — invoices, ledgers, reports.' },

    // ─── Developer ───
    { name:'GitHub',        vendor:'github',        category:'developer',     auth:'OAuth 2.1',  transport:'Remote SSE', tools:38, official:true,  tag:'official', desc:'Repos, issues, PRs, code search, branches. Gold standard.' },
    { name:'GitLab',        vendor:'gitlab',        category:'developer',     auth:'OAuth 2.1',  transport:'Remote SSE', tools:24, official:true,  tag:'official', desc:'Repos, pipelines, MRs, runners.' },
    { name:'Sentry',        vendor:'sentry',        category:'developer',     auth:'OAuth 2.1',  transport:'Remote SSE', tools:20, official:true,  tag:'official', desc:'Errors, releases, performance. Triage incidents with context.' },
    { name:'CircleCI',      vendor:'circleci',      category:'developer',     auth:'API key',    transport:'Remote HTTP', tools:13, official:true,  tag:'official', desc:'Build failures → Maven pairs root-cause with the diff.' },
    { name:'Cloudflare',    vendor:'cloudflare',    category:'developer',     auth:'API token',  transport:'Remote HTTP', tools:29, official:true,  tag:'official', desc:'Workers, KV, R2, D1. Deploy and introspect.' },
    { name:'AWS',           vendor:'aws',           category:'developer',     auth:'IAM role',   transport:'stdio',        tools:45, official:true,  tag:'official', desc:'Documentation, cost analysis, Bedrock KB, CDK advisory.' },
    { name:'Azure',         vendor:'microsoft',     category:'developer',     auth:'Entra ID',   transport:'Remote HTTP', tools:41, official:true,  tag:'official', desc:'All Azure services behind a single unified MCP server.' },
    { name:'Vercel',        vendor:'vercel',        category:'developer',     auth:'OAuth 2.1',  transport:'Remote SSE', tools:12, official:true,  tag:'official', desc:'Projects, deployments, env vars, logs.' },
    { name:'Netlify',       vendor:'netlify',       category:'developer',     auth:'OAuth 2.1',  transport:'Remote HTTP', tools:11, official:true,  tag:'official', desc:'Sites, builds, functions, forms.' },
    { name:'Harness',       vendor:'harness',       category:'developer',     auth:'API key',    transport:'Remote HTTP', tools:16, official:true,  tag:'official', desc:'Pipelines, repos, artifact registries.' },
    { name:'Grafana',       vendor:'grafana',       category:'developer',     auth:'API key',    transport:'Remote HTTP', tools:14, official:true,  tag:'official', desc:'Dashboards, datasources, incident context.' },
    { name:'Rootly',        vendor:'rootly',        category:'developer',     auth:'API key',    transport:'Remote HTTP', tools:10, official:true,  tag:'official', desc:'Incident management with runbook automation.' },

    // ─── Data & analytics ───
    { name:'Snowflake',     vendor:'snowflake',     category:'data',          auth:'OAuth 2.1',  transport:'Remote SSE', tools:18, official:true,  tag:'official', desc:'SQL queries, schema introspection, data shares.' },
    { name:'Databricks',    vendor:'databricks',    category:'data',          auth:'OAuth 2.1',  transport:'Remote SSE', tools:22, official:true,  tag:'official', desc:'Delta Lake, SQL warehouses, ML pipelines.' },
    { name:'BigQuery',      vendor:'google',        category:'data',          auth:'OAuth 2.1',  transport:'Remote SSE', tools:15, official:true,  tag:'official', desc:'Datasets, queries, routines.' },
    { name:'PostgreSQL',    vendor:'modelcontextprotocol', category:'data',  auth:'Connection string', transport:'stdio', tools:6,  official:true,  tag:'reference', desc:'Read-only SQL with row-level governance. Reference implementation.' },
    { name:'ClickHouse',    vendor:'clickhouse',    category:'data',          auth:'Connection string', transport:'stdio', tools:8, official:true,  tag:'official', desc:'Query analytical workloads at scale.' },
    { name:'Supabase',      vendor:'supabase',      category:'data',          auth:'Service key', transport:'Remote HTTP', tools:14, official:true,  tag:'official', desc:'Postgres + edge functions + auth in one plane.' },
    { name:'Neon',          vendor:'neon',          category:'data',          auth:'API key',    transport:'Remote HTTP', tools:11, official:true,  tag:'official', desc:'Serverless Postgres branches for agent sandboxes.' },
    { name:'Pinecone',      vendor:'pinecone',      category:'data',          auth:'API key',    transport:'Remote HTTP', tools:9,  official:true,  tag:'official', desc:'Vector search over embeddings. Long-term memory substrate.' },
    { name:'Chroma',        vendor:'chroma',        category:'data',          auth:'Local',      transport:'stdio',        tools:8,  official:true,  tag:'official', desc:'Open-source embeddings and document storage.' },
    { name:'dbt',           vendor:'dbt',           category:'data',          auth:'API key',    transport:'Remote HTTP', tools:12, official:true,  tag:'official', desc:'Project metadata, model lineage, semantic layer.' },

    // ─── Design & creative ───
    { name:'Figma',         vendor:'figma',         category:'creative',      auth:'OAuth 2.1',  transport:'Remote SSE', tools:13, official:true,  tag:'official', desc:'Files, frames, dev-mode inspect, component library.' },
    { name:'Webflow',       vendor:'webflow',       category:'creative',      auth:'OAuth 2.1',  transport:'Remote SSE', tools:11, official:true,  tag:'official', desc:'Site CMS, collections, publishing.' },

    // ─── Web & research ───
    { name:'Brave Search',  vendor:'brave',         category:'web',           auth:'API key',    transport:'stdio',        tools:3,  official:true,  tag:'official', desc:'Web + local search indexed by an independent crawler.' },
    { name:'Exa',           vendor:'exa',           category:'web',           auth:'API key',    transport:'Remote HTTP', tools:5,  official:true,  tag:'official', desc:'Neural search engine designed for agents.' },
    { name:'Firecrawl',     vendor:'firecrawl',     category:'web',           auth:'API key',    transport:'Remote HTTP', tools:6,  official:true,  tag:'official', desc:'Crawl + scrape any site into clean agent-ready markdown.' },
    { name:'Bright Data',   vendor:'brightdata',    category:'web',           auth:'API key',    transport:'Remote HTTP', tools:9,  official:true,  tag:'official', desc:'Enterprise web data — public internet at scale.' },
    { name:'Browserbase',   vendor:'browserbase',   category:'web',           auth:'API key',    transport:'Remote HTTP', tools:8,  official:true,  tag:'official', desc:'Cloud browsers for autonomous navigation and scraping.' },
    { name:'Fetch',         vendor:'modelcontextprotocol', category:'web',    auth:'None',       transport:'stdio',        tools:1,  official:true,  tag:'reference', desc:'Reference server — fetch and convert a URL to markdown.' },

    // ─── Storage & primitives ───
    { name:'Filesystem',    vendor:'modelcontextprotocol', category:'primitives', auth:'Local paths', transport:'stdio', tools:11, official:true, tag:'reference', desc:'Read, write, and manage files within allow-listed directories.' },
    { name:'Git',           vendor:'modelcontextprotocol', category:'primitives', auth:'Local',      transport:'stdio', tools:12, official:true, tag:'reference', desc:'Clone, read, search, and manipulate Git repositories.' },
    { name:'Memory',        vendor:'modelcontextprotocol', category:'primitives', auth:'Local',      transport:'stdio', tools:8,  official:true, tag:'reference', desc:'Knowledge-graph persistent memory across sessions.' },
    { name:'Sequential Thinking', vendor:'modelcontextprotocol', category:'primitives', auth:'None', transport:'stdio', tools:1, official:true, tag:'reference', desc:'Dynamic, reflective multi-step problem solving primitive.' },
    { name:'Time',          vendor:'modelcontextprotocol', category:'primitives', auth:'None',      transport:'stdio', tools:4,  official:true, tag:'reference', desc:'Timezones, conversions, scheduling arithmetic.' },

    // ─── Mavera-specific (first-party) ───
    { name:'Mavera Personas', vendor:'mavera',      category:'mavera',        auth:'API key',    transport:'Remote HTTP', tools:9,  official:true,  tag:'first-party', desc:'Expose the 50+ built-in persona library + custom personas as a tool.' },
    { name:'Mavera Synthetic',vendor:'mavera',      category:'mavera',        auth:'API key',    transport:'Remote HTTP', tools:12, official:true,  tag:'first-party', desc:'Run focus groups, content tests, and video analysis from any MCP client.' },
    { name:'Mavera Outcomes', vendor:'mavera',      category:'mavera',        auth:'API key',    transport:'Remote HTTP', tools:7,  official:true,  tag:'first-party', desc:'Create, list, and progress long-running outcomes from outside the app.' },
    { name:'Mavera Evidence', vendor:'mavera',      category:'mavera',        auth:'API key',    transport:'Remote HTTP', tools:5,  official:true,  tag:'first-party', desc:'Query the evidence layer — sources, confidence, audit trail.' },
  ];

  const cats = [
    { id:'all',           label:'All',              hint:`${servers.length} servers` },
    { id:'mavera',        label:'Mavera native',    hint:'Expose Mavera as MCP' },
    { id:'productivity',  label:'Productivity',     hint:'Docs · pages · calendars' },
    { id:'communication', label:'Communication',    hint:'Email · chat · voice' },
    { id:'work',          label:'Work management',  hint:'Tickets · projects' },
    { id:'crm',           label:'CRM & revenue',    hint:'Deals · billing · finance' },
    { id:'developer',     label:'Developer',        hint:'Code · ops · cloud' },
    { id:'data',          label:'Data & analytics', hint:'SQL · warehouse · vector' },
    { id:'creative',      label:'Design',           hint:'Files · components' },
    { id:'web',           label:'Web & research',   hint:'Search · scrape · browse' },
    { id:'primitives',    label:'Primitives',       hint:'Reference · filesystem · memory' },
  ];

  const q = query.trim().toLowerCase();
  const filtered = servers.filter(s => {
    if (activeCat !== 'all' && s.category !== activeCat) return false;
    if (!q) return true;
    return (s.name + ' ' + s.desc + ' ' + s.vendor).toLowerCase().includes(q);
  });

  const groups = {};
  filtered.forEach(s => { (groups[s.category] = groups[s.category] || []).push(s); });
  const groupOrder = activeCat === 'all'
    ? ['mavera','productivity','communication','work','crm','developer','data','creative','web','primitives']
    : [activeCat];

  return (
    <div className="mav-root" style={{minHeight:'100%'}}>
      <MavNav active="integrations" onNav={onNav}/>

      {/* HERO */}
      <Section dense style={{padding:'120px 0 60px'}}>
        <div style={{maxWidth: 900}}>
          <div className="mav-eyebrow" style={{marginBottom: 20, display:'inline-flex', alignItems:'center', gap: 10}}>
            <span style={{width:18, height:1, background:'var(--gold)', display:'inline-block'}}/>
            Integrations · Model Context Protocol
          </div>
          <h1 style={{fontSize: 72, fontWeight: 300, letterSpacing:'-0.035em', lineHeight: 1.02, margin: 0, fontFamily:'var(--sans)'}}>
            Every tool your team <em style={{fontFamily:'var(--serif)', fontWeight: 400, color:'var(--gold)'}}>already uses</em> —<br/>
            now an agent tool.
          </h1>
          <p className="mav-lede" style={{marginTop: 32, maxWidth: 720}}>
            Mavera speaks <strong style={{color:'var(--text)'}}>MCP</strong> natively. Any of the {servers.length}+ public Model Context
            Protocol servers below can be attached to Maven or any specialized agent with one click — no custom glue, no vendor
            lock-in. Bring your own servers too: if it's stdio or Remote SSE, it works.
          </p>
          <div style={{marginTop: 36, display:'flex', gap: 24, alignItems:'center'}}>
            <div style={{display:'flex', alignItems:'center', gap: 10}}>
              <span style={{width: 8, height: 8, borderRadius: 999, background: 'var(--gold)'}}/>
              <span className="mav-code" style={{color:'var(--dim)', fontSize: 11, letterSpacing:'.06em'}}>MCP 2026-03-11 · spec-current</span>
            </div>
            <span style={{width: 1, height: 12, background:'var(--line)'}}/>
            <span className="mav-code" style={{color:'var(--dim)', fontSize: 11, letterSpacing:'.06em'}}>OAuth 2.1 · stdio · Remote SSE · HTTP</span>
            <span style={{width: 1, height: 12, background:'var(--line)'}}/>
            <span className="mav-code" style={{color:'var(--dim)', fontSize: 11, letterSpacing:'.06em'}}>SOC 2 audited per-tool scopes</span>
          </div>
        </div>
      </Section>

      {/* MCP EXPLAINER STRIP */}
      <Section dense style={{padding:'40px 0 60px', borderTop:'1px solid var(--line)', borderBottom:'1px solid var(--line)', background:'var(--ink1)'}}>
        <div style={{display:'grid', gridTemplateColumns:'repeat(4, 1fr)', gap: 48}}>
          {[
            ['Open standard', 'MCP is a Linux Foundation open protocol — no proprietary SDK. Your agents are portable between clients (Claude, ChatGPT, Cursor, Mavera).'],
            ['One-click attach', 'OAuth 2.1 flow or paste a token. Per-agent, per-tool scopes. Revoke at any time. Full audit trail lands in the evidence layer.'],
            ['Governed by policy', 'Set read-only by default. Require human approval for writes. Enforce data-residency and egress policies at the MCP proxy.'],
            ['Bring your own', 'Internal MCP servers work the same way. Register a URL, map scopes, attach to agents. Private servers stay on your network.'],
          ].map(([t, b]) => (
            <div key={t}>
              <div style={{fontSize: 15, fontWeight: 500, letterSpacing:'-0.01em', marginBottom: 8}}>{t}</div>
              <div style={{fontSize: 13, color:'var(--dim)', lineHeight: 1.55}}>{b}</div>
            </div>
          ))}
        </div>
      </Section>

      {/* SEARCH + CATEGORIES */}
      <Section eyebrow="Catalog">
        <div style={{display:'flex', alignItems:'center', justifyContent:'space-between', gap: 40, marginBottom: 32, flexWrap:'wrap'}}>
          <h2 className="mav-h2" style={{fontSize: 40, margin: 0}}>{filtered.length} servers · ready to attach</h2>
          <div style={{display:'flex', alignItems:'center', gap: 10, border:'1px solid var(--line)', borderRadius: 8, padding:'8px 14px', background:'var(--ink1)', minWidth: 320}}>
            <span className="mav-code" style={{color:'var(--muted)', fontSize: 11}}>⌕</span>
            <input
              value={query}
              onChange={e => setQuery(e.target.value)}
              placeholder="Search Notion, Slack, Postgres…"
              style={{flex: 1, background:'transparent', border: 0, outline: 'none', color:'var(--text)', fontSize: 13.5, fontFamily:'var(--sans)'}}
            />
            {query && <button onClick={() => setQuery('')} style={{background:'transparent', border: 0, color:'var(--muted)', cursor:'pointer'}}>×</button>}
          </div>
        </div>

        <div style={{display:'flex', gap: 8, flexWrap:'wrap', marginBottom: 48}}>
          {cats.map(c => (
            <button key={c.id} onClick={() => setActiveCat(c.id)} style={{
              padding:'9px 14px', fontSize: 12.5, borderRadius: 999,
              border:'1px solid var(--line)',
              background: activeCat === c.id ? 'var(--gold)' : 'transparent',
              color: activeCat === c.id ? 'var(--ink0)' : 'var(--dim)',
              cursor:'pointer', fontFamily:'var(--sans)',
              transition:'background .15s, color .15s',
              display:'inline-flex', alignItems:'center', gap: 10,
            }}>
              {c.label}
              <span style={{fontSize: 10, opacity: 0.7, fontFamily:'var(--mono)'}}>
                {c.id === 'all' ? servers.length : servers.filter(s => s.category === c.id).length}
              </span>
            </button>
          ))}
        </div>

        {groupOrder.map(catId => {
          const list = groups[catId];
          if (!list || list.length === 0) return null;
          const cat = cats.find(c => c.id === catId);
          return (
            <div key={catId} style={{marginBottom: 56}}>
              <div style={{display:'flex', alignItems:'baseline', gap: 16, marginBottom: 20, paddingBottom: 12, borderBottom:'1px solid var(--line)'}}>
                <h3 style={{fontSize: 22, fontWeight: 400, letterSpacing:'-0.02em', margin: 0, fontFamily:'var(--serif)'}}>{cat.label}</h3>
                <span className="mav-code" style={{color:'var(--muted)', fontSize: 11, letterSpacing:'.06em'}}>{cat.hint}</span>
                <span style={{flex: 1}}/>
                <span className="mav-code" style={{color:'var(--muted)', fontSize: 11}}>{list.length} · servers</span>
              </div>
              <div style={{display:'grid', gridTemplateColumns:'repeat(3, 1fr)', gap: 1, background:'var(--line)', border:'1px solid var(--line)', borderRadius: 12, overflow:'hidden'}}>
                {list.map(s => <ServerCard key={s.name + s.vendor} s={s}/>)}
                {/* fill trailing cells to keep the grid flush */}
                {Array.from({length: (3 - (list.length % 3)) % 3}).map((_,i) => (
                  <div key={`pad-${catId}-${i}`} style={{background:'var(--ink0)'}}/>
                ))}
              </div>
            </div>
          );
        })}

        {filtered.length === 0 && (
          <div style={{padding: 80, textAlign:'center', color:'var(--muted)', fontSize: 14}}>
            No servers match "{query}" in {activeCat === 'all' ? 'any category' : cats.find(c=>c.id===activeCat).label.toLowerCase()}.
          </div>
        )}
      </Section>

      {/* HOW IT WORKS */}
      <Section eyebrow="How attachment works" style={{background:'var(--ink1)', borderTop:'1px solid var(--line)', borderBottom:'1px solid var(--line)'}}>
        <div style={{display:'grid', gridTemplateColumns:'1fr 1.2fr', gap: 80, alignItems:'center'}}>
          <div>
            <h2 className="mav-h2">Attach once. Govern forever.</h2>
            <p className="mav-lede" style={{marginTop: 24}}>
              Connect an MCP server at the workspace level. Scope it per-agent. Every tool call gets logged with inputs, outputs,
              latency, and cost. Write-actions require approval until you choose otherwise.
            </p>
            <ul style={{listStyle:'none', padding: 0, margin: '32px 0 0', display:'flex', flexDirection:'column', gap: 14}}>
              {[
                ['Scopes', 'Grant `read:issues` without `write:issues`. Token-level and tool-level scopes enforced at proxy.'],
                ['Approvals', 'Mark certain tools as approval-required. Maven surfaces a request inline; human approves in Slack or web.'],
                ['Audit', 'Every invocation logged · replay any decision · diff before/after state for write actions.'],
                ['Residency', 'Route calls through your cloud region. Optional MCP proxy for private network egress.'],
              ].map(([k, v]) => (
                <li key={k} style={{borderLeft:'1.5px solid var(--gold)', paddingLeft: 16}}>
                  <div style={{fontSize: 14.5, fontWeight: 500}}>{k}</div>
                  <div style={{fontSize: 13, color:'var(--dim)', marginTop: 3, lineHeight: 1.55}}>{v}</div>
                </li>
              ))}
            </ul>
          </div>
          <AttachmentDemo/>
        </div>
      </Section>

      {/* MAVERA AS A SERVER */}
      <Section eyebrow="Reciprocal · Mavera is also an MCP server">
        <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap: 64, alignItems:'start'}}>
          <div>
            <h2 className="mav-h2" style={{fontSize: 44}}>Give Claude, ChatGPT, and Cursor <em>access to Maven.</em></h2>
            <p className="mav-lede" style={{marginTop: 24}}>
              Mavera exposes four first-party MCP servers. Any MCP-compatible client can call Maven for research, run a synthetic
              focus group, create an Outcome, or query the evidence layer. It's a two-way street.
            </p>
            <div style={{marginTop: 32, display:'flex', gap: 12, flexWrap:'wrap'}}>
              {['mcp.mavera.io/personas','mcp.mavera.io/synthetic','mcp.mavera.io/outcomes','mcp.mavera.io/evidence'].map(url => (
                <div key={url} style={{padding:'8px 12px', border:'1px solid var(--line)', borderRadius: 6, fontFamily:'var(--mono)', fontSize: 11.5, color:'var(--dim)', background:'var(--ink1)'}}>
                  {url}
                </div>
              ))}
            </div>
          </div>
          <div style={{padding: 20, background:'var(--ink1)', border:'1px solid var(--line)', borderRadius: 10, fontFamily:'var(--mono)', fontSize: 12.2, color:'var(--dim)', lineHeight: 1.7}}>
            <div style={{color:'var(--muted)', marginBottom: 10, fontSize: 10.5, letterSpacing:'.08em'}}>~/.claude/config.json</div>
            <div>{`{`}</div>
            <div>&nbsp;&nbsp;<span style={{color:'#c8a8ff'}}>"mcpServers"</span>: {`{`}</div>
            <div>&nbsp;&nbsp;&nbsp;&nbsp;<span style={{color:'#c8a8ff'}}>"mavera"</span>: {`{`}</div>
            <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style={{color:'#c8a8ff'}}>"url"</span>: <span style={{color:'#a3e6c4'}}>"https://mcp.mavera.io/personas"</span>,</div>
            <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style={{color:'#c8a8ff'}}>"transport"</span>: <span style={{color:'#a3e6c4'}}>"sse"</span>,</div>
            <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style={{color:'#c8a8ff'}}>"auth"</span>: {`{`} <span style={{color:'#c8a8ff'}}>"type"</span>: <span style={{color:'#a3e6c4'}}>"bearer"</span>, <span style={{color:'#c8a8ff'}}>"token"</span>: <span style={{color:'#a3e6c4'}}>"$MAVERA_KEY"</span> {`}`}</div>
            <div>&nbsp;&nbsp;&nbsp;&nbsp;{`}`}</div>
            <div>&nbsp;&nbsp;{`}`}</div>
            <div>{`}`}</div>
          </div>
        </div>
      </Section>

      <Section dense style={{padding: '120px 0'}}><ClosingCTA/></Section>
      <MavFooter onNav={onNav}/>
    </div>
  );
}

// ─── Server card ───
function ServerCard({ s }) {
  const badgeColor = s.tag === 'first-party' ? 'var(--gold)' : s.tag === 'reference' ? '#a3e6c4' : s.tag === 'community' ? '#ff9c6b' : 'var(--dim)';
  return (
    <div style={{background:'var(--ink0)', padding: 22, display:'flex', flexDirection:'column', gap: 12, minHeight: 180, position:'relative'}}>
      <div style={{display:'flex', alignItems:'flex-start', justifyContent:'space-between', gap: 12}}>
        <div style={{display:'flex', alignItems:'center', gap: 12}}>
          <VendorMark name={s.name} vendor={s.vendor}/>
          <div>
            <div style={{fontSize: 15, fontWeight: 500, letterSpacing:'-0.01em', fontFamily:'var(--sans)'}}>{s.name}</div>
            <div className="mav-code" style={{fontSize: 10.5, color:'var(--muted)', letterSpacing:'.04em', marginTop: 2}}>{s.vendor}</div>
          </div>
        </div>
        <span className="mav-code" style={{fontSize: 9.5, color: badgeColor, letterSpacing:'.1em', textTransform:'uppercase', padding:'3px 7px', border:`1px solid ${s.tag === 'first-party' ? 'var(--gold)' : 'var(--line)'}`, borderRadius: 3, whiteSpace:'nowrap'}}>
          {s.tag}
        </span>
      </div>
      <p style={{fontSize: 12.8, color:'var(--dim)', margin: 0, lineHeight: 1.5, flex: 1}}>{s.desc}</p>
      <div style={{display:'flex', gap: 12, alignItems:'center', paddingTop: 10, borderTop:'1px solid var(--line)', fontFamily:'var(--mono)', fontSize: 10.5, color:'var(--muted)', letterSpacing:'.04em'}}>
        <span>{s.tools} tools</span>
        <span>·</span>
        <span>{s.auth}</span>
        <span>·</span>
        <span>{s.transport}</span>
      </div>
    </div>
  );
}

// ─── Vendor mark: monogram with tinted background ───
function VendorMark({ name, vendor }) {
  // Deterministic hue from vendor name so marks feel distinct but unified
  let hash = 0;
  for (let i = 0; i < vendor.length; i++) hash = ((hash << 5) - hash) + vendor.charCodeAt(i);
  const hue = Math.abs(hash) % 360;
  const initials = name.split(/[\s&]+/).filter(Boolean).slice(0, 2).map(w => w[0]).join('').toUpperCase();
  return (
    <div style={{
      width: 34, height: 34, borderRadius: 7,
      background: `hsl(${hue}, 40%, 14%)`,
      border: `1px solid hsl(${hue}, 30%, 22%)`,
      display:'flex', alignItems:'center', justifyContent:'center',
      fontFamily:'var(--serif)', fontSize: 13, fontWeight: 500,
      color: `hsl(${hue}, 60%, 75%)`, letterSpacing:'-0.02em',
    }}>
      {initials}
    </div>
  );
}

// ─── Attachment demo: animated OAuth → scope → invocation ───
function AttachmentDemo() {
  const [step, setStep] = React.useState(0);
  React.useEffect(() => {
    const id = setInterval(() => setStep(s => (s + 1) % 4), 2400);
    return () => clearInterval(id);
  }, []);
  const steps = [
    { code:'01 · AUTH',     title:'OAuth 2.1 with PKCE',  body:'User approves scopes in vendor UI.' },
    { code:'02 · SCOPES',   title:'Scope selection',       body:'read:pages, read:databases. Writes require approval.' },
    { code:'03 · ATTACH',   title:'Attach to Maven',       body:'Now available as tools: notion.search, notion.read_page, …' },
    { code:'04 · INVOKE',   title:'Audited invocation',    body:'Every call logged · latency · cost · content hash.' },
  ];
  return (
    <div className="mav-card" style={{padding: 0, background:'var(--ink0)', overflow:'hidden'}}>
      <div style={{padding:'12px 16px', borderBottom:'1px solid var(--line)', display:'flex', alignItems:'center', justifyContent:'space-between'}}>
        <span className="mav-eyebrow">Attachment flow · Notion</span>
        <span className="mav-code" style={{fontSize: 10.5, color:'var(--muted)'}}>animated</span>
      </div>
      <div style={{padding: 20, display:'flex', flexDirection:'column', gap: 2}}>
        {steps.map((s, i) => {
          const done = i < step;
          const active = i === step;
          return (
            <div key={i} style={{
              display:'grid', gridTemplateColumns:'80px 1fr', gap: 14, padding:'14px 12px',
              opacity: done || active ? 1 : 0.32,
              borderLeft: `2px solid ${active ? 'var(--gold)' : done ? 'rgba(200,168,255,0.3)' : 'transparent'}`,
              background: active ? 'rgba(200,168,255,0.04)' : 'transparent',
              transition:'all .3s',
            }}>
              <span className="mav-code" style={{color: active ? 'var(--gold)' : 'var(--muted)', fontSize: 10.5, letterSpacing:'.08em', alignSelf:'center'}}>{s.code}</span>
              <div>
                <div style={{fontSize: 13.5, fontWeight: 500, letterSpacing:'-0.01em'}}>{s.title}</div>
                <div style={{fontSize: 12, color:'var(--dim)', marginTop: 3}}>{s.body}</div>
              </div>
            </div>
          );
        })}
      </div>
      <div style={{padding:'12px 16px', borderTop:'1px solid var(--line)', fontFamily:'var(--mono)', fontSize: 10.5, color:'var(--muted)', letterSpacing:'.03em'}}>
        POST /v1/agents/maven/tools · scope notion:read · 200 OK · 142ms
      </div>
    </div>
  );
}

window.IntegrationsPage = IntegrationsPage;
