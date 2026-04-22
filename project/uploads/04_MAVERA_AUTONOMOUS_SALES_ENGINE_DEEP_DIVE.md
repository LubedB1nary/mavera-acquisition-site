# Document 4: The Autonomous Sales Engine — Deep Technical & Product Dive

> **Purpose:** Everything about Mavera's autonomous sales capabilities — the Glengarry module, the 7 AI agents, the CRM, the scoring model, the automation engine, the demo mode, and how it all connects to the broader platform. This is the feature the new website should lead with.

---

## 1. Why Autonomous Sales Is the Lead Story

Every AI company in 2026 claims to "help with sales." Most of them mean: "we help you write emails faster" or "we enrich your lead data." That's copilot territory — the human still does the work, the AI just makes it slightly easier.

Mavera's Glengarry module is fundamentally different. It's a **fleet of specialized AI agents that execute the full sales cycle autonomously** — from signal detection through prospect research through outreach through qualification through meeting prep. The human closes the deal. Everything before that is handled by agents.

This is the "open the door to growth" story:
- You don't write prompts. You set growth goals.
- You don't manage sequences. Agents manage themselves.
- You don't research prospects. Agents research for you.
- You don't draft outreach. Agents draft, send, and handle replies.
- You show up to qualified meetings with a briefing doc already prepared.

The outcome is growth. The mechanism is autonomous agents. The evidence is traceable at every step.

---

## 2. The Full CRM — Not a Toy, a Pipedrive-Class System

The Glengarry module includes a complete CRM that rivals dedicated sales tools. This isn't a "we added a contact list" — it's a full pipeline management system with:

### 2.1 Core CRM Features

- **Dual pipelines:** Pre-lead (signal → researched → outreach) and Sales (engaged → qualified → discovery → proposal → closed)
- **7-stage funnel:** `new → researched → outreach_sent → engaged → qualified → discovery_call → proposal → closed_won/closed_lost`
- **Contacts & Organizations:** Full profiles with custom fields, CLIA metadata, lab-type taxonomy
- **Deals:** Stage tracking, value, probability, expected close date, activity history
- **Activities feed:** `email_sent`, `email_received`, `call`, `meeting`, `note`, `task`, `enrichment`, `document`
- **Kanban view:** Drag-and-drop deal management across pipeline stages
- **Search & filters:** Full-text search, filter by stage, score, type, date range
- **Bulk actions:** Multi-select and batch operations
- **Pinning:** Pin important deals/contacts for quick access

### 2.2 Live Integrations (Production-Wired)

| Integration | What It Does | Status |
|------------|-------------|--------|
| **CMS QCOR (CLIA)** | Real-time lookup by CLIA number → provider name, director, certificate type, address, phone | Live — production API |
| **IMAP/SMTP** | First-party email send and inbox sync — outreach without a third-party CRM | Live — Tauri-side wiring |
| **LinkedIn** | Profile and contact import | Live — import wired |
| **File ingestion** | Bulk CSV/Excel imports, attachments per deal/org | Live |
| **System profile** | Pulls user/team context for AI context injection | Live |

### 2.3 Industry-Specific Customization

The CRM is pre-configured for the diagnostics industry (the Ospri use case), but the taxonomy is configurable for any vertical:

**Lab types:** Hospital, ICL (Independent Clinical Lab), Urgent Care, OBGYN, Urology, Specialty, Reference

**PCR platform fingerprinting:** BioFire FilmArray, Cepheid GeneXpert, Roche cobas, Quest send-out, None (full send-out)

**Signal types:** CLIA filings, Hospital news, Payer LCD updates, Competitor lab moves, PE deals

This same pattern applies to any industry — swap the taxonomy, keep the architecture.

---

## 3. The 7 AI Sales Agents — Detailed Breakdown

Each agent is a real runtime with status tracking (`idle | running | error`), logged results, and activity recording. They operate on triggers and produce artifacts that feed the next agent in the chain.

### 3.1 Signal Scanner

**Trigger:** Every 6 hours (configurable)  
**What it does:**
- Scans multiple signal sources: regulatory filings (CLIA), hospital news, payer LCD/policy updates, competitor moves, PE/M&A activity
- Creates `CrmSignal` rows scored 0-100 by relevance
- Geo-tags each signal to relevant territories
- Categorizes by type: `clia`, `hospital`, `payer`, `competitor`, `pe`

**Output:** A prioritized feed of market signals that trigger downstream agents. High-relevance signals (≥80) automatically trigger the Prospect Researcher.

**Why it matters for the website:** This is the "always-on market radar" — your company never misses a signal that could mean a new customer, a competitive threat, or a market shift.

### 3.2 Prospect Researcher

**Trigger:** Deal stage change → `researched`; or auto-triggered by high-relevance signal  
**What it does:**
- Pulls company data from CMS QCOR (live CLIA lookup)
- Enriches with LabScope data (671K+ lab database) and LinkedIn profiles
- Estimates: send-out volume, revenue leakage, current PCR platform
- Builds a full prospect profile with pain points, opportunity sizing, and competitive context

**Output:** A comprehensive prospect dossier that the Outreach Drafter uses to personalize messaging.

### 3.3 Outreach Drafter

**Trigger:** Deal stage change → `outreach_sent`  
**What it does:**
- Drafts personalized outreach using:
  - Your **brand voice** (extracted from your existing content via Brand Voice API)
  - The prospect's **persona** (e.g., Lab Director, Gatekeeper, CFO)
  - The specific **signal** that triggered the engagement
  - The **prospect research** from the previous agent
- Queues for human review or auto-sends (configurable)

**Output:** A ready-to-send email that sounds like your brand, speaks to the prospect's specific situation, and references the signal that makes the outreach timely.

### 3.4 Conversation Handler

**Trigger:** `email_received` (incoming reply)  
**What it does:**
- Scores reply sentiment: positive / neutral / negative
- Classifies intent: interested, objection, question, not interested, out of office
- Advances deal stage based on engagement
- Drafts contextual response that addresses the specific content of the reply

**Output:** A drafted response + deal stage update + activity log entry.

### 3.5 Qualifier

**Trigger:** Engagement threshold crossed  
**What it does:**
- Reviews full conversation history
- Scores prospect fit against your ideal customer profile
- Assesses: budget signals, authority level, need urgency, timeline indicators
- Creates a "schedule discovery call" task for the human closer

**Output:** A qualification assessment with fit score, key signals, and a recommended next action.

### 3.6 Re-engager

**Trigger:** Weekly scan for stalled deals (>30 days in stage)  
**What it does:**
- Identifies deals that have gone cold
- Generates a new angle for re-engagement:
  - Fresh ROI data relevant to the prospect
  - New customer success story from a similar company
  - Competitive positioning update
  - Second-angle pitch (different value prop than the original outreach)
- Sends the re-engagement or queues for review

**Output:** A re-engagement email + activity log + deal stage update.

### 3.7 Meeting Prepper

**Trigger:** Before calendar events with prospects  
**What it does:**
- Generates a comprehensive briefing document:
  - Prospect profile (refreshed with latest data)
  - Pain points and priorities
  - Talking points tailored to the prospect's persona
  - Competitive positioning (what they're using today, why you're better)
  - Relevant case studies from similar customers
  - Potential objections and responses
  - Recommended ask/next steps

**Output:** A meeting brief document attached to the deal, ready to review 30 minutes before the call.

---

## 4. The Lead Scoring Model

### 4.1 Architecture

Configurable, interpretable, 0-100 composite score. Weighted across 7 factors with user-tunable weights. Every score shows its contributing factors — no black boxes.

### 4.2 Default Scoring (Diagnostics Vertical)

| Factor | Weight | Scoring Logic |
|--------|--------|---------------|
| **Lab type** | Configurable | Hospital (90) > ICL (80) > Urgent care (70) > OBGYN (65) > Urology (60) > Specialty (55) > Reference (50) |
| **Send-out volume** | Configurable | ≥100K tests/yr → 100; ≥10K → 75; ≥1K → 50 |
| **Current PCR platform** | Configurable | Already on your platform → 0 (filtered); Closed system competitor → 90 (ripe to expand); Send-out only → 85 |
| **Revenue leakage** | Configurable | ≥$5M/yr → 100; ≥$1M → 80; ≥$500K → 60 |
| **Engagement** | Configurable | Proposal activity → 90; Meeting → 70; Reply → 40; Outreach sent → 20 |
| **Geographic density** | Configurable | ≥5 existing clients in same state → 90; ≥2 → 60 |
| **Recency** | Configurable | Last activity <7 days → 100; <30 → 70; <90 → 40; older → 10 |

### 4.3 Adaptability

The scoring model is not hardcoded to diagnostics. The same architecture works for any B2B vertical:
- **SaaS:** Company size, tech stack, growth rate, funding stage, engagement, geo
- **Financial services:** AUM, regulatory status, current vendor, compliance needs
- **Healthcare:** Bed count, specialty mix, payer mix, technology adoption
- **Any vertical:** Define your factors, set your weights, the scoring engine handles the rest

---

## 5. The Automation Rules Engine

### 5.1 Architecture

Generic trigger → condition → action system. Rules are authored in the UI (no code required) and execute in real-time.

### 5.2 Available Triggers

| Trigger | Fires When |
|---------|-----------|
| `deal_stage_change` | A deal moves to a new pipeline stage |
| `deal_rot` | A deal has been in the same stage for too long |
| `contact_created` | A new contact is added to the CRM |
| `email_received` | An incoming email is received from a prospect |
| `signal_detected` | The Signal Scanner finds a new market signal |
| `score_change` | A prospect's lead score crosses a threshold |

### 5.3 Available Actions

| Action | What It Does |
|--------|-------------|
| `create_task` | Creates a task for a team member |
| `send_email` | Sends an email (drafted by AI or from template) |
| `update_stage` | Moves a deal to a new pipeline stage |
| `run_agent` | Triggers one of the 7 AI agents |
| `notify` | Sends a notification (in-app, email, or iMessage) |

### 5.4 Default Rules (Shipped with Demo)

1. **"Schedule discovery call when deal qualifies"** — `deal_stage_change → qualified` triggers `create_task` (3 days out)
2. **"Re-engage rotting outreach with follow-up"** — `deal_rot` (≥14 days) triggers `send_email` + `create_task`
3. **"Auto-research high-relevance signals"** — `signal_detected` (≥80 relevance) triggers `run_agent: prospect_researcher`
4. **"Notify on prospect score >80"** — `score_change` crossing 80 triggers `notify`

---

## 6. The Glengarry Demo Mode

A 12-step narrated walkthrough that uses **real CRM operations** against a sandboxed dataset. This isn't a video — it's a live, interactive demo where the prospect can take the wheel mid-flight.

### 6.1 How It Works

- **Narrator card** explains each step in plain language
- **Blue-pulsing spotlight overlay** highlights the relevant UI element
- **Floating sub-content** shows the actual artifact being produced (drafted email, AI reasoning, research findings)
- **Real operations** — the demo creates real CRM records, runs real agent logic, produces real artifacts

### 6.2 The 12 Steps

1. Signal arrives (new CLIA filing detected)
2. Signal scored and categorized
3. Prospect auto-created from signal
4. Prospect researched (CLIA lookup + enrichment)
5. Full prospect profile assembled
6. Outreach drafted in brand voice against prospect persona
7. Outreach sent (or queued for review)
8. Reply received and sentiment scored
9. Deal advanced based on engagement
10. Prospect qualified against ICP
11. Discovery call task created for human closer
12. Meeting brief generated

### 6.3 Why This Matters for the Website

The demo mode is the proof that this isn't vaporware. Every step produces a real artifact. The website should reference this capability — "see it work in real-time" — and ideally embed a version of the demo flow as an interactive walkthrough.

---

## 7. How the Sales Engine Connects to the Broader Platform

The autonomous sales engine doesn't exist in isolation. It's powered by and feeds back into every other Mavera capability:

### 7.1 Persona Intelligence → Sales

- Outreach is drafted against **specific personas** (Lab Director, Gatekeeper, CFO, etc.)
- Each persona has statistically validated behavioral patterns — the outreach isn't just "personalized," it's calibrated to how that type of person actually thinks and decides
- Content testing validates messaging before it goes out at scale

### 7.2 Mave Agent → Sales

- Prospect research uses Mave's multi-source research engine (web, news, SEO, knowledge base)
- Every research finding comes with sources and confidence scores
- Follow-up research on specific prospects is cheaper (thread context reuse)

### 7.3 News Intelligence → Sales

- Signal Scanner feeds from the same news intelligence pipeline
- Trending stories and personalized feeds surface opportunities
- Persona-based story analysis helps craft timely, relevant outreach

### 7.4 Brand Voice → Sales

- Outreach Drafter uses your Brand Voice profile to ensure every email sounds like your company
- Brand voice is extracted from your existing content — not a template, your actual voice

### 7.5 Meeting Intelligence → Sales

- Meeting recordings are transcribed and analyzed
- Custom schemas extract structured data (BANT, MEDDIC, etc.)
- Coaching metrics help reps improve
- Meeting insights feed back into the CRM and prospect profiles

### 7.6 Content Generation → Sales

- Authority content (blog posts, whitepapers, case studies) is generated and tested against prospect personas
- Content that resonates becomes ammunition for the Re-engager and Meeting Prepper agents

### 7.7 The Flywheel

```
Signals detected
    → Prospects researched
    → Outreach sent (persona-calibrated, brand-voiced)
    → Replies handled
    → Deals qualified
    → Meetings prepped
    → Deals closed
    → Customer data feeds back into intelligence layer
    → Better signals, better research, better outreach
    → More deals closed
```

This is the growth flywheel the website should communicate. Not "we help you write emails" — **"we run your growth engine while you focus on closing."**

---

## 8. The Broader Autonomous Agent Vision

The 7 sales agents are the first vertical implementation. The same agent architecture supports:

### 8.1 Autonomous Research Agents
- Market research that runs continuously, not on-demand
- Competitive intelligence that updates daily
- Trend detection that surfaces opportunities before they're obvious

### 8.2 Autonomous Content Agents
- Content calendars that execute themselves
- Social media that posts, monitors, and responds
- Authority content that's always fresh and always tested against your audience

### 8.3 Autonomous Operations Agents
- Meeting follow-ups that happen automatically
- Task management that self-organizes
- Reporting that generates itself

### 8.4 Industry-Specific Agent Fleets
- **Diagnostics:** CLIA monitoring, panel optimization, claims intelligence, regulatory surveillance
- **Finance:** Market surveillance, compliance monitoring, client reporting
- **Healthcare:** Patient engagement, referral management, outcomes tracking
- **Legal:** Case research, document review, client communication

The architecture is the same. The agents are specialized. The outcomes are measurable. This is the platform play.
