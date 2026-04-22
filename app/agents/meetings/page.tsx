import { AgentSubPage } from '@/components/agent-sub-page';

export default function MeetingsPage() {
  return (
    <AgentSubPage
      eyebrow="meetings"
      name="Meetings"
      tagline={<>Record. Extract. <em>Remember.</em></>}
      lede="Meetings records, transcribes, extracts structured output — action items, decisions, blockers — and preps you 30 minutes before every call. No bot in the room unless you ask."
      metrics={[
        ['< 3s', 'Post-call to full transcript'],
        ['9', 'Output types extracted'],
        ['30 min', 'Pre-call brief lead time'],
        ['100%', 'On-device option available'],
      ]}
      sections={[
        {
          title: 'Structured output',
          body: (
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 60 }}>
              <div>
                <h2 className="mav-h2" style={{ fontSize: 44 }}>Not just <em>transcripts.</em></h2>
                <p className="mav-lede" style={{ marginTop: 20 }}>
                  Transcripts get you 20% of the value. Structured extraction gets the rest: action items tagged by owner,
                  decisions with rationale, blockers with severity, follow-ups with due dates.
                </p>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                {[
                  'Action items · tagged by owner + due date',
                  'Decisions · rationale + dissent + approvers',
                  'Blockers · severity + proposed resolution',
                  'Follow-ups · threaded back into CRM notes',
                  'Sentiment arc · who turned when',
                  'Direct quotes · precision-cut for sales ops',
                  'Topics covered vs. agenda · coverage report',
                  'Next meeting agenda · auto-proposed',
                ].map(t => (
                  <div key={t} style={{ fontSize: 13.5, color: 'var(--dim)', borderBottom: '1px dashed var(--line-soft)', paddingBottom: 10 }}>
                    {t}
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
