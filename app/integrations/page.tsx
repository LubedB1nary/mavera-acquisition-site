'use client';
import { useState, useMemo, useEffect } from 'react';
import { MavNav } from '@/components/nav';
import { MavFooter } from '@/components/footer';
import { Section } from '@/components/section';
import { ClosingCTA } from '@/components/closing-cta';
import { ArrowRight } from '@/components/icons';

interface Server { name: string; cat: string; desc: string; vendor: string; official?: boolean }

const servers: Server[] = [
  // Productivity
  { name: 'Notion',         cat: 'Productivity', vendor: 'notion',     desc: 'Read and write pages, databases, blocks.', official: true },
  { name: 'Linear',         cat: 'Productivity', vendor: 'linear',     desc: 'Issues, projects, cycles, roadmap ops.', official: true },
  { name: 'Asana',          cat: 'Productivity', vendor: 'asana',      desc: 'Tasks, projects, teams, workflows.' },
  { name: 'ClickUp',        cat: 'Productivity', vendor: 'clickup',    desc: 'Spaces, docs, goals, time tracking.' },
  { name: 'Monday.com',     cat: 'Productivity', vendor: 'monday',     desc: 'Boards, items, status updates.' },
  { name: 'Todoist',        cat: 'Productivity', vendor: 'todoist',    desc: 'Tasks, projects, labels, filters.' },
  // Communication
  { name: 'Slack',          cat: 'Communication', vendor: 'slack',     desc: 'Channels, DMs, threads, reactions.', official: true },
  { name: 'Discord',        cat: 'Communication', vendor: 'discord',   desc: 'Servers, channels, bots.' },
  { name: 'Microsoft Teams', cat: 'Communication', vendor: 'teams',    desc: 'Channels, chats, meetings.' },
  { name: 'Gmail',          cat: 'Communication', vendor: 'gmail',     desc: 'Read, send, label, draft.' },
  { name: 'Outlook',        cat: 'Communication', vendor: 'outlook',   desc: 'Mail and calendar via Microsoft Graph.' },
  { name: 'Twilio',         cat: 'Communication', vendor: 'twilio',    desc: 'SMS, WhatsApp, voice.' },
  // Work
  { name: 'Google Drive',   cat: 'Work', vendor: 'gdrive',             desc: 'Files, folders, comments.', official: true },
  { name: 'Dropbox',        cat: 'Work', vendor: 'dropbox',            desc: 'Files, Paper docs, shared spaces.' },
  { name: 'Google Docs',    cat: 'Work', vendor: 'gdocs',              desc: 'Documents, comments, suggestions.' },
  { name: 'Google Sheets',  cat: 'Work', vendor: 'gsheets',            desc: 'Spreadsheets with real formulas.' },
  { name: 'Box',            cat: 'Work', vendor: 'box',                desc: 'Enterprise file collaboration.' },
  { name: 'Confluence',     cat: 'Work', vendor: 'confluence',         desc: 'Spaces, pages, attachments.' },
  // CRM
  { name: 'Salesforce',     cat: 'CRM', vendor: 'salesforce',          desc: 'Accounts, opportunities, SOQL queries.' },
  { name: 'HubSpot',        cat: 'CRM', vendor: 'hubspot',             desc: 'Contacts, deals, marketing hub.' },
  { name: 'Pipedrive',      cat: 'CRM', vendor: 'pipedrive',           desc: 'Pipeline, deals, activities.' },
  { name: 'Zoho CRM',       cat: 'CRM', vendor: 'zoho',                desc: 'Leads, deals, automations.' },
  // Developer
  { name: 'GitHub',         cat: 'Developer', vendor: 'github',        desc: 'Repos, PRs, issues, actions.', official: true },
  { name: 'GitLab',         cat: 'Developer', vendor: 'gitlab',        desc: 'Repos, MRs, pipelines.' },
  { name: 'Sentry',         cat: 'Developer', vendor: 'sentry',        desc: 'Issues, releases, performance.', official: true },
  { name: 'Vercel',         cat: 'Developer', vendor: 'vercel',        desc: 'Deploys, projects, env vars.' },
  { name: 'Cloudflare',     cat: 'Developer', vendor: 'cloudflare',    desc: 'Workers, R2, Pages, KV.' },
  { name: 'Docker Hub',     cat: 'Developer', vendor: 'docker',        desc: 'Repositories, tags, image metadata.' },
  // Data
  { name: 'PostgreSQL',     cat: 'Data', vendor: 'postgres',           desc: 'Query, schema introspection.', official: true },
  { name: 'Snowflake',      cat: 'Data', vendor: 'snowflake',          desc: 'Warehouses, databases, SQL.' },
  { name: 'BigQuery',       cat: 'Data', vendor: 'bigquery',           desc: 'Tables, queries, scheduled jobs.' },
  { name: 'Databricks',     cat: 'Data', vendor: 'databricks',         desc: 'Notebooks, clusters, MLflow.' },
  { name: 'MongoDB',        cat: 'Data', vendor: 'mongo',              desc: 'Collections, documents, aggregations.' },
  { name: 'Redis',          cat: 'Data', vendor: 'redis',              desc: 'Keys, streams, pub/sub.' },
  // Creative
  { name: 'Figma',          cat: 'Creative', vendor: 'figma',          desc: 'Files, frames, comments.' },
  { name: 'Canva',          cat: 'Creative', vendor: 'canva',          desc: 'Designs, brand assets.' },
  { name: 'Adobe Express',  cat: 'Creative', vendor: 'adobe',          desc: 'Assets, exports, brands.' },
  // Web
  { name: 'Brave Search',   cat: 'Web', vendor: 'brave',               desc: 'Live web search with citations.' },
  { name: 'Exa',            cat: 'Web', vendor: 'exa',                 desc: 'Neural search with semantic results.' },
  { name: 'Tavily',         cat: 'Web', vendor: 'tavily',              desc: 'Live web · news · research.' },
  { name: 'Browserbase',    cat: 'Web', vendor: 'browserbase',         desc: 'Headless browser automation.' },
  // Primitives
  { name: 'Filesystem',     cat: 'Primitives', vendor: 'fs',           desc: 'Read, write, list on the local disk.', official: true },
  { name: 'Shell',          cat: 'Primitives', vendor: 'shell',        desc: 'Run commands in a sandbox.' },
  { name: 'Memory',         cat: 'Primitives', vendor: 'memory',       desc: 'Long-lived scratchpad for the agent.', official: true },
  { name: 'Fetch',          cat: 'Primitives', vendor: 'fetch',        desc: 'HTTP with redirect handling + caching.', official: true },
  { name: 'Puppeteer',      cat: 'Primitives', vendor: 'puppeteer',    desc: 'Scripted browser automation.', official: true },
  // Mavera
  { name: 'Mavera · CRM',   cat: 'Mavera', vendor: 'mavera',           desc: 'Pipeline, contacts, deals — owned by you.', official: true },
  { name: 'Mavera · Meetings', cat: 'Mavera', vendor: 'mavera',        desc: 'Record, transcript, structured extraction.', official: true },
  { name: 'Mavera · Panels',   cat: 'Mavera', vendor: 'mavera',        desc: '50+ personas, 12 question types.', official: true },
  { name: 'Mavera · Outcomes', cat: 'Mavera', vendor: 'mavera',        desc: 'Long-running AI-managed goals.', official: true },
];

const cats = ['All', 'Productivity', 'Communication', 'Work', 'CRM', 'Developer', 'Data', 'Creative', 'Web', 'Primitives', 'Mavera'];

function VendorMark({ vendor }: { vendor: string }) {
  // Deterministic hash → hue
  let h = 0;
  for (let i = 0; i < vendor.length; i++) h = (h * 31 + vendor.charCodeAt(i)) >>> 0;
  const hue = h % 360;
  const bg = `linear-gradient(135deg, hsl(${hue} 60% 22%), hsl(${(hue + 40) % 360} 55% 14%))`;
  const letter = vendor.substring(0, 2).toUpperCase();
  return (
    <div style={{
      width: 36, height: 36, borderRadius: 8, background: bg,
      border: '1px solid var(--line)', display: 'flex', alignItems: 'center', justifyContent: 'center',
      fontFamily: 'var(--mono)', fontSize: 13, color: 'var(--text)', letterSpacing: '.05em', flexShrink: 0,
    }}>{letter}</div>
  );
}

function AttachmentDemo() {
  const steps: [string, string][] = [
    ['Discover', 'mcp.linear.app advertises its tools via /.well-known'],
    ['Handshake', 'OAuth via PKCE — credential lands in the vault'],
    ['Inventory', 'Maven receives the tool schema for this integration'],
    ['Compose', 'Maven\'s next plan can now call Linear alongside CRM + email'],
  ];
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setIdx(i => (i + 1) % steps.length), 1800);
    return () => clearInterval(t);
  }, [steps.length]);
  return (
    <div className="mav-card" style={{ padding: 24, background: 'var(--ink1)' }}>
      <div className="mav-eyebrow" style={{ marginBottom: 18 }}>Attachment flow</div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 12 }}>
        {steps.map(([k, v], i) => {
          const active = i === idx;
          const done = i < idx;
          return (
            <div key={k} style={{
              padding: 16, borderRadius: 10,
              border: `1px solid ${active ? 'var(--gold)' : 'var(--line)'}`,
              background: active ? 'var(--gold-dim)' : 'transparent',
              transition: 'all .25s', opacity: done ? 0.75 : 1,
            }}>
              <div className="mav-code" style={{ fontSize: 10, color: active ? 'var(--gold)' : 'var(--muted)', letterSpacing: '.12em' }}>
                STEP {i + 1}
              </div>
              <div style={{ fontSize: 14, fontWeight: 500, marginTop: 6, marginBottom: 4 }}>{k}</div>
              <div style={{ fontSize: 12, color: 'var(--dim)', lineHeight: 1.5 }}>{v}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function ServerCard({ s }: { s: Server }) {
  return (
    <div className="mav-card" style={{ padding: 16, display: 'grid', gridTemplateColumns: '36px 1fr', gap: 14, alignItems: 'start' }}>
      <VendorMark vendor={s.vendor} />
      <div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 4 }}>
          <div style={{ fontSize: 14, fontWeight: 500, letterSpacing: '-0.01em' }}>{s.name}</div>
          {s.official && <span className="mav-code" style={{ fontSize: 9, color: 'var(--gold)', padding: '1px 6px', border: '1px solid var(--gold-dim)', borderRadius: 3 }}>OFFICIAL</span>}
        </div>
        <div style={{ fontSize: 12, color: 'var(--muted)', fontFamily: 'var(--mono)', marginBottom: 6 }}>{s.cat}</div>
        <div style={{ fontSize: 13, color: 'var(--dim)', lineHeight: 1.5 }}>{s.desc}</div>
      </div>
    </div>
  );
}

export default function IntegrationsPage() {
  const [query, setQuery] = useState('');
  const [cat, setCat] = useState('All');

  const filtered = useMemo(() => {
    const q = query.toLowerCase();
    return servers.filter(s => {
      if (cat !== 'All' && s.cat !== cat) return false;
      if (!q) return true;
      return s.name.toLowerCase().includes(q) || s.desc.toLowerCase().includes(q);
    });
  }, [query, cat]);

  return (
    <>
      <MavNav />
      <section style={{ padding: '120px 0 60px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 900px 500px at 50% 0%, rgba(200,168,255,0.1), transparent 60%)' }} />
        <div className="mav-container" style={{ position: 'relative', zIndex: 2 }}>
          <div className="mav-eyebrow" style={{ marginBottom: 20 }}>/ integrations</div>
          <h1 className="mav-h1" style={{ fontSize: 76, maxWidth: 1000 }}>
            Every tool Maven can reach. <em>And be reached through.</em>
          </h1>
          <p className="mav-lede" style={{ maxWidth: 640, marginTop: 26 }}>
            Mavera speaks the Model Context Protocol. Attach any public server in one OAuth handshake; Maven composes them into
            her plans. Mavera itself is also an MCP server — Claude, Cursor, ChatGPT can call us back.
          </p>
          <div style={{ display: 'flex', gap: 12, marginTop: 36 }}>
            <a href="#" className="mav-btn mav-btn--primary">Attach a server <ArrowRight /></a>
            <a href="#" className="mav-btn mav-btn--ghost">Read the MCP spec</a>
          </div>
        </div>
      </section>

      <Section dense>
        <AttachmentDemo />
      </Section>

      <Section eyebrow="Directory">
        <div style={{ display: 'flex', gap: 16, alignItems: 'center', flexWrap: 'wrap', marginBottom: 24 }}>
          <input
            value={query}
            onChange={e => setQuery(e.target.value)}
            placeholder="Search 50+ MCP servers..."
            style={{
              flex: 1, minWidth: 260, background: 'var(--ink1)', border: '1px solid var(--line)',
              borderRadius: 8, padding: '10px 14px', fontSize: 13.5, color: 'var(--text)',
              fontFamily: 'var(--sans)',
            }}
          />
          <div style={{ display: 'flex', gap: 4, flexWrap: 'wrap' }}>
            {cats.map(c => (
              <button key={c} onClick={() => setCat(c)} style={{
                padding: '6px 12px', borderRadius: 6, fontFamily: 'var(--mono)', fontSize: 11.5, letterSpacing: '.04em',
                border: `1px solid ${cat === c ? 'var(--gold-dim)' : 'var(--line)'}`,
                background: cat === c ? 'var(--gold-dim)' : 'transparent',
                color: cat === c ? 'var(--gold)' : 'var(--dim)',
                cursor: 'pointer',
              }}>{c}</button>
            ))}
          </div>
        </div>
        <div style={{ fontSize: 12, color: 'var(--muted)', fontFamily: 'var(--mono)', letterSpacing: '.04em', marginBottom: 14 }}>
          {filtered.length} {filtered.length === 1 ? 'server' : 'servers'}
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }}>
          {filtered.map(s => <ServerCard key={s.name} s={s} />)}
        </div>
      </Section>

      <Section eyebrow="Reciprocal · Mavera as a server" style={{ background: 'var(--ink1)', borderTop: '1px solid var(--line)', borderBottom: '1px solid var(--line)' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 72, alignItems: 'center' }}>
          <div>
            <h2 className="mav-h2">Call <em>us</em> from anywhere.</h2>
            <p className="mav-lede" style={{ marginTop: 20 }}>
              Add <span style={{ color: 'var(--gold)', fontFamily: 'var(--mono)' }}>mcp.mavera.io</span> to Claude, Cursor, or ChatGPT. Maven's tools become theirs.
            </p>
            <div style={{ marginTop: 28, display: 'flex', flexDirection: 'column', gap: 10 }}>
              {[
                'mavera_focus_group · 50+ personas',
                'mavera_research · 5-phase · cited',
                'mavera_crm_lookup · pipeline-aware',
                'mavera_synthetic_generate · all modalities',
                'mavera_outcome_spawn · fire-and-follow-up',
              ].map(t => (
                <div key={t} className="mav-code" style={{ fontSize: 12.5, color: 'var(--dim)' }}>→ {t}</div>
              ))}
            </div>
          </div>
          <div className="mav-card" style={{ background: 'var(--ink0)', padding: 0, overflow: 'hidden' }}>
            <div style={{ padding: '12px 16px', borderBottom: '1px solid var(--line)', fontFamily: 'var(--mono)', fontSize: 11.5, color: 'var(--muted)' }}>claude · ~/.config/claude/mcp.json</div>
            <pre style={{ margin: 0, padding: 20, fontFamily: 'var(--mono)', fontSize: 12.5, color: 'var(--text)', lineHeight: 1.65 }}>
{`{
  "mcpServers": {
    "mavera": {
      "url": "https://mcp.mavera.io/v1",
      "auth": { "bearer": "mvra_live_…" }
    }
  }
}`}
            </pre>
          </div>
        </div>
      </Section>

      <Section dense style={{ padding: '120px 0' }}>
        <ClosingCTA
          headline={<>Every tool, in <em className="mav-gradient-text">one credential vault.</em></>}
          lede="Attach the servers Maven should reach. Or attach Mavera to Claude, Cursor, or ChatGPT. The protocol is the same — the credentials stay yours."
          primaryLabel="Attach a server"
          secondaryLabel="Read the MCP spec"
        />
      </Section>
      <MavFooter />
    </>
  );
}
