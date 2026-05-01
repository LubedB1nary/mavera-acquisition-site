'use client';
import { Section, H2, Mono, BRAND, MONO, Spec, CopyPair } from '../_lib/primitives';

export default function NamingSection() {
  return (
    <Section id="naming" label="42 — Naming Conventions">
      <H2 italicTail="things.">Names &mdash; for code and</H2>

      <Mono label="Component naming" />
      <Spec rows={[
        ['React component',     'PascalCase · descriptive noun · "ClosingCTA", "AgentSubPage", "TiltCard"'],
        ['Hook',                'camelCase · "use" prefix · "useTiltMotion", "useScrollProgress"'],
        ['Class names',         'kebab-case · "mav-" prefix · "mav-btn--primary", "mav-card"'],
        ['Variant modifiers',   'BEM-ish · double-dash · "--primary", "--ghost", "--sm"'],
        ['Utility classes',     '"mav-" prefix · single word · "mav-glow", "mav-shimmer", "mav-tilt"'],
        ['Animation keyframes', '"mav-" prefix · kebab · "mav-rise-soft", "mav-line-trace"'],
      ]} />

      <Mono label="File / route naming" />
      <Spec rows={[
        ['App route folder',    'kebab-case · "/api-docs", "/agents/sales", "/agents/maven"'],
        ['Component file',      'kebab-case · "agent-sub-page.tsx", "ascii-torus.tsx"'],
        ['Section file (brand)','two-digit prefix · "01-identity.tsx" · matches NAV_ITEMS order'],
        ['Token CSS vars',      'kebab · semantic · "--ink0" not "--bg-darkest" · "--gold" not "--accent-purple"'],
        ['Image assets',        'kebab · descriptive · "mavera-logo.webp", "apple-touch-icon.png"'],
        ['Test fixtures',       'snake_case · "fixtures/sandbox_run_4128.json"'],
      ]} />

      <Mono label="Product object names" />
      <Spec rows={[
        ['Outcome',     'Capitalized · "Outcome" not "outcome" · "spawn an Outcome"'],
        ['Maven',       'Always capitalized · refers to the agent · use "she" or "Maven", never "it"'],
        ['Argus',       'Capitalized · refers to the 7-agent sales module · "the Argus flywheel"'],
        ['Agent vs agent', 'lowercase "agent" for the noun · capitalized for proper agents (Maven, Argus)'],
        ['mavera-1',    'lowercase · hyphenated · the model name · MONO when in code, plain in prose'],
        ['Receipts',    'Capitalized when referring to the brand value; lowercase elsewhere'],
      ]} />

      <Mono label="Path & ID conventions" />
      <Spec rows={[
        ['URL paths',         'lowercase · kebab · no trailing slash'],
        ['anchor IDs',        'lowercase · kebab · stable forever (links break otherwise)'],
        ['env vars',          'UPPER_SNAKE · "MAVERA_API_KEY" · prefix with MAVERA_ for ours'],
        ['feature flags',     '"flag." prefix · kebab · "flag.argus-live-demo"'],
        ['analytics events',  '"verb_object" snake · "spawn_outcome" not "OutcomeSpawned"'],
      ]} />

      <Mono label="Voice in code comments" />
      <CopyPair
        bad="// TODO: implement this later"
        good="// TODO(alex): wire to /v1/research once auth ships · 2026-04-30"
      />
      <CopyPair
        bad="// just a hack"
        good="// CRM webhook payload nests the deal under 'data.relationships'.\n// Flatten before passing to Maven so the persona has linear context."
      />
    </Section>
  );
}
