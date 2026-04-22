import { AgentSubPage } from '@/components/agent-sub-page';

export default function MavenPage() {
  return (
    <AgentSubPage
      eyebrow="maven"
      name="Maven"
      tagline={<>Meet <em>Maven.</em></>}
      lede="One generalized assistant that wields every tool in the platform. Point her at a goal and she'll compose the specialists, spawn child sessions, ask when stuck, and report back when done."
      metrics={[
        ['12', 'Tools in Maven\'s hand'],
        ['7', 'Specialist agents she composes'],
        ['∞', 'Outcomes running in parallel'],
        ['0', 'Prompt engineering required'],
      ]}
      tools={[
        { id: 'websearch', name: 'Web search', cat: 'Research', desc: 'Live web + news + academic corpus.' },
        { id: 'research', name: 'Deep research', cat: 'Research', desc: '5-phase · sourced · auditable.' },
        { id: 'crm', name: 'CRM', cat: 'Sales', desc: 'Pipeline · contacts · deals.' },
        { id: 'email', name: 'Email', cat: 'Sales', desc: 'IMAP/SMTP · threaded replies.' },
        { id: 'calendar', name: 'Calendar', cat: 'Schedule', desc: 'Book · reschedule · brief.' },
        { id: 'panel', name: 'Synthetic panel', cat: 'Data', desc: '12 question types · 50+ personas.' },
        { id: 'meetings', name: 'Meeting intel', cat: 'Meetings', desc: 'Record · transcribe · extract.' },
        { id: 'docs', name: 'Documents', cat: 'Files', desc: 'Read · write · cite.' },
        { id: 'code', name: 'Code', cat: 'Build', desc: 'Run scripts · query data.' },
        { id: 'outcomes', name: 'Outcomes', cat: 'Goals', desc: 'Spawn children · schedule wake-ups.' },
        { id: 'notify', name: 'Notify', cat: 'User', desc: 'Push · iMessage · native alerts.' },
        { id: 'vault', name: 'Credential vault', cat: 'Connect', desc: 'Per-workspace or global.' },
      ]}
      scripts={[
        { title: '"Find me 5 accounts ready to buy this week"', steps: ['websearch', 'research', 'panel', 'crm', 'email'] },
        { title: '"Run a 200-persona focus group on this hero copy"', steps: ['panel', 'research', 'docs', 'notify'] },
        { title: '"Watch for CLIA filings and alert me"', steps: ['websearch', 'research', 'outcomes', 'notify'] },
        { title: '"Prep me for my 3pm with Quest"', steps: ['meetings', 'research', 'crm', 'docs', 'notify'] },
      ]}
      sections={[
        {
          title: 'How she works',
          body: (
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48 }}>
              <div>
                <h2 className="mav-h2" style={{ fontSize: 44 }}>Compose, don't <em>re-engineer.</em></h2>
                <p className="mav-lede" style={{ marginTop: 20 }}>
                  Maven is a strategy agent. She rarely does detail work herself — she spawns child sessions for specific
                  tasks and keeps her own context lean. That's how she stays sharp across days and weeks.
                </p>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                {[
                  ['Strategy session', 'One parent session plans · coordinates · owns the long-term context.'],
                  ['Child sessions', 'Spawned for focused tasks · run in parallel · fold results back.'],
                  ['Wake-up loop', 'Cadence-driven · picks up where she left off · resumes context.'],
                  ['User collaboration', 'Asks structured questions · assigns tasks back · notifies on macOS & iMessage.'],
                ].map(([k, v]) => (
                  <div key={k} style={{ borderLeft: '1.5px solid var(--gold)', paddingLeft: 16 }}>
                    <div style={{ fontSize: 14.5, fontWeight: 500 }}>{k}</div>
                    <div style={{ fontSize: 13, color: 'var(--dim)', marginTop: 3 }}>{v}</div>
                  </div>
                ))}
              </div>
            </div>
          ),
        },
      ]}
    />
  );
}
