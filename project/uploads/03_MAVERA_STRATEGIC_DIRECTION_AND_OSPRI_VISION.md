# Document 3: Strategic Direction — Where Mavera Is Heading

> **Purpose:** The forward-looking vision for Mavera. This covers the Ospri AI acquisition thesis, the diagnostics intelligence platform, the synthetic data play, and how the commercial intelligence product evolves. This is the "where are we going and why" document.

---

## 1. The Big Picture: From Marketing Intelligence to Autonomous Growth Platform

Mavera started as a marketing intelligence and customer research platform. That's what the current site sells. But the technology underneath — multi-model synthetic intelligence, persona-driven behavioral modeling, autonomous agent execution, and enterprise-grade API infrastructure — is far more general than marketing.

The strategic direction is to evolve Mavera from "a tool marketers use to test content" into **an autonomous growth platform that companies use to understand their market, reach their customers, and close revenue — with AI agents doing the work.**

The key shift in framing:
- **Old:** "Test your content against synthetic personas" (tool-oriented, prompt-oriented)
- **New:** "Open the door to growth" (outcome-oriented, growth-oriented)

The product doesn't ask you to write better prompts. It asks you what outcome you want — more customers, better retention, higher conversion, faster research — and then deploys autonomous agents to get there.

---

## 2. The Ospri AI Thesis — Why This Matters

Mavera is in active acquisition discussions with Ospri Bio, a vertically integrated molecular diagnostics company (40,000+ tests/day, 20 states, 80+ PCR assays, 250+ pathogens). The acquisition would create **Ospri AI** — a diagnostics intelligence platform that converts Ospri from a reagent manufacturer into the Tempus AI of infectious disease.

### 2.1 Why This Validates the Platform

The Ospri deal proves that Mavera's technology is not limited to marketing. The same infrastructure that powers "test your ad copy against a Gen Z persona" also powers:

- **Synthetic audience simulation for clinical scenarios** — test how a Lab Director persona reacts to a new panel proposal
- **Autonomous sales agents** — AI agents that scan CLIA filings, research prospects, draft outreach, handle responses, qualify leads, and book meetings
- **Market intelligence** — monitor competitor moves, payer policy changes, regulatory shifts
- **Content generation** — produce authority content (Bloomberg-style industry reports) calibrated to specific professional audiences
- **Meeting intelligence** — record, transcribe, and extract structured data from sales calls and clinical consultations

The technology is the same. The application changes. The architecture doesn't.

### 2.2 The Market Opportunity

| Company | What They Did | Result |
|---------|---------------|--------|
| **Tempus AI** | Built an AI layer on top of genomic sequencing data | $1.27B revenue in 2025, 83% YoY growth |
| **Benchling** | Cloud bioinformatics for life sciences R&D | $6.1B valuation |
| **diagnostics.ai** | AI analysis engine for PCR curve interpretation | CE-IVDR certified, used by Quest/NHS |

The AI for Clinical & Molecular Diagnostics market: $845M in 2026, projected $1.57B by 2032 (10.76% CAGR). The broader AI diagnostics market: $1.97B in 2025, projected $9.68B by 2033 (21.74% CAGR).

### 2.3 What This Means for the Website

The new website needs to serve **two audiences simultaneously:**

1. **The existing Mavera customer** — enterprise marketing/research teams who use the platform for content testing, focus groups, persona research, and market intelligence. These customers care about: speed, accuracy, evidence, ROI.

2. **The emerging Mavera customer** — companies in regulated industries (diagnostics, healthcare, finance, legal) who need autonomous AI agents that understand their domain, reach their customers, and produce defensible outputs. These customers care about: compliance, autonomy, domain expertise, measurable outcomes.

The website should not choose between these audiences. It should present a unified vision: **Mavera is the platform that turns market intelligence into autonomous growth** — whether you're a marketer testing ad copy or a diagnostics company deploying AI sales agents.

---

## 3. The Autonomous Sales Engine (Glengarry)

This is the most significant new capability and the one the website should lean into hardest. Mavera has built a complete autonomous sales system — not a chatbot, not a copilot, but a fleet of AI agents that execute the full sales cycle independently.

### 3.1 The 7 AI Sales Agents

| Agent | What It Does Autonomously |
|-------|--------------------------|
| **Signal Scanner** | Scans market signals every 6 hours — regulatory filings, competitor moves, payer policy changes, industry news. Scores each signal 0-100 by relevance. |
| **Prospect Researcher** | Builds full prospect profiles from public data — company info, decision makers, current technology stack, estimated revenue, pain points. |
| **Outreach Drafter** | Writes personalized outreach calibrated to the prospect's persona, your brand voice, and the specific signal that triggered the engagement. |
| **Conversation Handler** | Reads incoming replies, scores sentiment, advances the deal through pipeline stages, drafts contextual responses. |
| **Qualifier** | Reviews conversation history, scores prospect fit against your ideal customer profile, creates tasks for human closers when deals are ready. |
| **Re-engager** | Finds stalled deals, generates new angles (ROI data, customer stories, competitive positioning), re-initiates contact. |
| **Meeting Prepper** | Before every meeting, generates a briefing doc: prospect profile, pain points, talking points, competitive positioning, relevant case studies. |

### 3.2 The Lead Scoring Model

Configurable, interpretable, 0-100 scoring across 7 weighted factors:

- **Company type** — scored by fit with your ideal customer profile
- **Volume/size** — estimated business volume
- **Current platform** — what they're using today (opportunity to displace)
- **Revenue leakage** — estimated money they're leaving on the table
- **Engagement** — how they've interacted with your outreach
- **Geographic density** — proximity to existing customers (reference power)
- **Recency** — how recently they've engaged

Every score on a prospect card shows the contributing factors — explainable AI that field sales actually trusts.

### 3.3 The Automation Rules Engine

Generic trigger → action system sitting on top of the agents:

- **Triggers:** deal stage change, deal rot (stalled too long), contact created, email received, signal detected, score change
- **Actions:** create task, send email, update stage, run agent, notify
- Users author new rules without code via the settings UI

### 3.4 Why This Is the Website's Lead Story

The autonomous sales engine is what makes Mavera different from every other "AI marketing tool." Most competitors help you write better emails. Mavera's agents **find the prospect, research them, write the email, send it, handle the reply, qualify the lead, and prep you for the meeting** — autonomously, 24/7.

This is the "open the door to growth" story. You don't prompt Mavera. You tell it your growth goal, and it works toward it while you sleep.

---

## 4. The Synthetic Data Platform

Beyond marketing and sales, Mavera's synthetic intelligence layer has a third major application: synthetic data generation for regulated industries.

### 4.1 What's Been Proven

The team reverse-engineered QuantStudio 12K Flex instrument files (opaque binary format, zero documentation) and produced 10 validated synthetic copies containing 3.4 million synthetic data points. These passed statistical validation against real clinical PCR runs.

### 4.2 Why It Matters

- **FDA is accepting synthetic data** as supportive evidence in regulatory submissions (January 2026 guidance)
- **98% accuracy** on the OASIS benchmark means Mavera's synthetic personas are statistically indistinguishable from real human panels
- **Privacy-preserving** — synthetic data with differential privacy guarantees can be shared without PHI concerns
- **Edge case generation** — oversample rare scenarios that real datasets miss (the cases that matter most clinically)

### 4.3 Cross-Domain Applications

The same synthetic data pipeline applies to:
- **Diagnostics:** PCR validation, panel design, QC model training
- **Finance:** Fraud detection training data, stress testing, risk modeling
- **Healthcare:** Clinical trial augmentation, patient education testing
- **Any regulated industry** where real data is scarce, expensive, or privacy-restricted

---

## 5. The Maven Desktop App — The AI Coworker

Maven is the local-first, premium experience layer. While the Mavera platform is a web app for teams, Maven is a native macOS app that acts as a personal AI coworker.

### 5.1 Key Differentiators

- **iMessage integration** — Maven can text you, respond to texts, and manage conversations over iMessage
- **Outcomes** — long-lived goal-tracking workspaces where Maven remembers context, schedules wake-ups, asks you questions, and reports progress
- **MCP tool ecosystem** — connects to iMessage, Apple Mail, contacts, credentials, data sources, and the full Mavera API
- **Messaging connectors** — Slack, Telegram, WhatsApp
- **Cloud workers** — hosted runtime destinations for running agents 24/7
- **Hot-reloadable** — agents, skills, commands, and config update while sessions are running

### 5.2 The "AI Coworker" Positioning

Maven isn't a chatbot you prompt. It's a coworker that:
- Remembers what you're working on (Outcomes)
- Checks in on progress (scheduled wake-ups)
- Asks you questions when it's blocked (pending questions → push notifications)
- Assigns you tasks only a human can do (user tasks)
- Works autonomously on everything else (child sessions)
- Reports back with results (progress log)

This is the embodiment of "outcomes, not prompts."

---

## 6. The Revenue Model — Where Growth Comes From

### 6.1 Current Revenue Streams

| Stream | Model | Current |
|--------|-------|---------|
| Platform subscriptions | $300-$3,500/mo | ~$25,500 MRR |
| Credit overages | $0.55-$0.80/credit | Included in MRR |
| Enterprise contracts | Custom | Pipeline (Coinbase, S&P, etc.) |

### 6.2 Emerging Revenue Streams

| Stream | Model | Potential |
|--------|-------|-----------|
| Autonomous sales agents (SaaS) | Per-seat or per-agent pricing | High — every company needs sales |
| Synthetic data services | Per-dataset or per-project | High — regulated industries are data-starved |
| Industry-specific deployments | White-label + custom | Very high — Ospri deal is the template |
| API consumption (non-developer users via tools) | Credit-based | Growing — Claude Code/Cursor/Codex users |
| Maven desktop app | Subscription | Future — premium tier |

### 6.3 The Ospri-Specific Revenue Projection (Year 2)

| Revenue Line | Model | Estimated Annual |
|-------------|-------|-----------------|
| AI platform bundled with assay contracts | Included — increases contract value 15-25% | $2-4M |
| Ospri AI SaaS (standalone to non-Ospri labs) | $2,500-5,000/month per lab | $3-6M |
| Panel redesign consulting (data-driven) | $15,000-50,000 per engagement | $1-3M |
| "State of PCR" data products | Subscription reports | $500K-1M |
| AI sales rep infrastructure | Internal cost savings | $1-2M |
| Synthetic data services | Per-project | $500K-1M |
| **Total** | | **$8-17M** |

---

## 7. Competitive Positioning

### 7.1 In Marketing Intelligence

| Competitor | What They Do | Mavera's Advantage |
|-----------|-------------|-------------------|
| Qualtrics | Survey platform | Mavera's synthetic personas are faster, cheaper, and 96% as accurate as real panels |
| SurveyMonkey | Survey platform | Same — plus Mavera adds AI analysis, not just data collection |
| Brandwatch | Social listening | Mavera adds synthetic simulation on top of signal monitoring |
| Crayon | Competitive intelligence | Mavera's signal intelligence is persona-aware and action-oriented |

### 7.2 In AI Sales Automation

| Competitor | What They Do | Mavera's Advantage |
|-----------|-------------|-------------------|
| Apollo.io | Lead database + sequences | Mavera's agents are autonomous, not just automated sequences |
| Outreach | Sales engagement | Mavera's agents research, qualify, and adapt — not just send templates |
| 11x.ai | AI SDR | Mavera's agents are persona-aware and backed by synthetic intelligence |
| Clay | Data enrichment | Mavera enriches AND acts — full cycle, not just data |

### 7.3 In Diagnostics AI (Post-Ospri)

| Competitor | What They Do | Mavera/Ospri's Advantage |
|-----------|-------------|--------------------------|
| Tempus AI | Oncology genomics AI | Ospri owns the chemistry — Tempus doesn't manufacture tests |
| diagnostics.ai | PCR curve interpretation | Single-point solution — Ospri covers the full chain |
| OpenAI for Science | Horizontal science AI | Will never go vertical enough for diagnostics workflows |

---

## 8. The Unified Vision Statement

Mavera is building the intelligence layer between companies and their growth. The platform listens to the market, simulates audience reactions, deploys autonomous agents, and measures outcomes — all with evidence you can defend.

Whether you're a marketer testing a campaign, a sales team scaling outreach, a diagnostics company redesigning panels, or a regulated enterprise generating synthetic training data — Mavera's synthetic intelligence, autonomous agents, and evidence-backed outputs are the same underlying capability applied to your specific growth challenge.

**The door to growth is open. Mavera's agents walk through it for you.**
