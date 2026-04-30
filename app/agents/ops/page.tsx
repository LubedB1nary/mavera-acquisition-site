import { AgentSubPage } from '@/components/agent-sub-page';

export default function OpsPage() {
  return (
    <AgentSubPage
      eyebrow="ops"
      name="Ops · CRM"
      tagline={<>The CRM <em>you own.</em></>}
      lede="Full pipeline with your own IMAP/SMTP — no third-party CRM in the middle. Automation graph. Signal-driven workflows. Every agent action surfaces here."
      metrics={[
        ['0', 'Third-party CRMs required'],
        ['IMAP', 'Your own email'],
        ['∞', 'Automation triggers'],
        ['1', 'Source of truth'],
      ]}
      sections={[
        {
          title: 'What it does',
          body: (
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48 }}>
              <div>
                <h2 className="mav-h2" style={{ fontSize: 44 }}>Pipeline. <em>Automation. You.</em></h2>
                <p className="mav-lede" style={{ marginTop: 20 }}>
                  Most sales orgs glue together 6-10 SaaS products. Ops replaces the critical layer &mdash; CRM plus automation &mdash;
                  and keeps your data in your own environment.
                </p>
                <p className="mav-body" style={{ marginTop: 16, color: 'var(--gold)', fontSize: 14, fontWeight: 500 }}>
                  Your data stays in your environment. No Salesforce. No HubSpot dependency.
                </p>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                {[
                  ['Contacts · companies · deals', 'Standard objects — stages configurable per workspace.'],
                  ['Owned IMAP/SMTP', 'Your Gmail or Outlook or exchange. Threads in the CRM.'],
                  ['Automation graph', 'Signal → lead → agent → touch. Visual, editable.'],
                  ['Calendar', 'Native calendar surface. Book, reschedule, brief.'],
                  ['Tasks', 'Assignable across humans and agents. SLA-trackable.'],
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
