export interface NavItem {
  id: string;
  label: string;
}

export const NAV_ITEMS: NavItem[] = [
  { id: 'identity',           label: '01 — Identity' },
  { id: 'voice',              label: '02 — Voice & Copy' },
  { id: 'logo',               label: '03 — Logo' },
  { id: 'color-bg',           label: '04 — Backgrounds' },
  { id: 'color-text',         label: '05 — Text Scale' },
  { id: 'product-colors',     label: '06 — Agent Colors' },
  { id: 'status-colors',      label: '07 — Status Colors' },
  { id: 'typography',         label: '08 — Typography' },
  { id: 'iconography',        label: '09 — Iconography' },
  { id: 'buttons',            label: '10 — Buttons & Links' },
  { id: 'cards',              label: '11 — Cards & Surfaces' },
  { id: 'badges',             label: '12 — Badges & Tags' },
  { id: 'forms',              label: '13 — Forms & Inputs' },
  { id: 'navigation',         label: '14 — Navigation' },
  { id: 'dataviz',            label: '15 — Data Visualization' },
  { id: 'motion',             label: '16 — Motion' },
  { id: 'layout',             label: '17 — Layout & Grid' },
  { id: 'code',               label: '18 — Code Reference' },
  { id: 'interaction-states', label: '19 — Interaction States' },
  { id: 'modals',             label: '20 — Modals & Overlays' },
  { id: 'loading',            label: '21 — Loading States' },
  { id: 'toasts',             label: '22 — Toasts & Alerts' },
  { id: 'tables',             label: '23 — Tables & Data' },
  { id: 'accessibility',      label: '24 — Accessibility' },
  { id: 'responsive',         label: '25 — Responsive' },
  { id: 'email',              label: '26 — Email Design' },
  { id: 'marketing',          label: '27 — Marketing Patterns' },
  { id: 'product-copy',       label: '28 — Product Copywriting' },
  { id: 'illustrations',      label: '29 — Illustration System' },
  { id: 'empty-states',       label: '30 — Empty States' },
  { id: 'glass',              label: '31 — Glass & Blur' },
  { id: 'compound',           label: '32 — Compound Components' },
  { id: 'api-docs',           label: '33 — API Doc Style' },
  { id: 'og-assets',          label: '34 — Social & OG Assets' },
  { id: 'tokens',             label: '35 — Design Tokens' },
  { id: 'numbers',            label: '36 — Number Formatting' },
  { id: 'search',             label: '37 — Search & Command' },
  { id: 'onboarding',         label: '38 — Onboarding Flows' },
  { id: 'charts-deep',        label: '39 — Charts Deep Dive' },
  { id: 'keyboard',           label: '40 — Keyboard & Focus' },
  { id: 'mobile',             label: '41 — Mobile Patterns' },
  { id: 'naming',             label: '42 — Naming Conventions' },
  { id: 'pricing',            label: '43 — Pricing & Plans UI' },
  { id: 'error-handling',     label: '44 — Error Handling' },
  { id: 'tables-adv',         label: '45 — Advanced Tables' },
  { id: 'drag-drop',          label: '46 — Drag & Drop' },
  { id: 'rich-text',          label: '47 — Rich Text & Markdown' },
  { id: 'permissions',        label: '48 — Permission States' },
  { id: 'print',              label: '49 — Print Styles' },
  { id: 'contributing',       label: '50 — Contributing & Handoff' },
];

/** The eleven sections that make up the abridged ("essentials") edition. */
export const ABRIDGED_IDS = new Set([
  'identity',
  'voice',
  'logo',
  'color-bg',
  'color-text',
  'product-colors',
  'status-colors',
  'typography',
  'buttons',
  'motion',
  'tokens',
]);

/** Hidden by CSS in abridged mode — exported for the `<style>` tag in the page. */
export const ABRIDGED_HIDE_SELECTOR = NAV_ITEMS.filter(
  (n) => !ABRIDGED_IDS.has(n.id),
)
  .map((n) => `#${n.id}`)
  .join(', ');
