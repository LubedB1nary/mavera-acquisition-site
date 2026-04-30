import { AgentSubPage } from '@/components/agent-sub-page';

export default function FocusPage() {
  return (
    <AgentSubPage
      eyebrow="focus"
      name="Focus groups"
      tagline={<>Ask your audience <em>before</em> you spend.</>}
      lede="Synthetic focus groups with statistically validated personas. Twelve question types. Synthesis in minutes. 98% agreement with the Harvard OASIS human-subject study."
      metrics={[
        ['50+', 'Built-in personas'],
        ['12', 'Question types'],
        ['98%', 'Agreement with the Harvard OASIS human-subject study'],
        ['min', 'Synthesis turnaround'],
      ]}
      sections={[
        {
          title: 'Question types',
          body: (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 12 }}>
              {[
                'Reaction', 'Association', 'Preference', 'Ranking',
                'Likelihood', 'Clarity', 'Distinction', 'Persuasion',
                'Objection', 'Alternatives', 'Price sensitivity', 'Free-form',
              ].map(q => (
                <div key={q} className="mav-card" style={{ padding: 18, textAlign: 'center' }}>
                  <div style={{ fontSize: 14, fontWeight: 500 }}>{q}</div>
                </div>
              ))}
            </div>
          ),
        },
      ]}
    />
  );
}
