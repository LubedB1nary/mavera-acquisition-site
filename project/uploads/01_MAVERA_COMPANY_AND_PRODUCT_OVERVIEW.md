# Document 1: Mavera — Company & Product Overview

> **Purpose:** Comprehensive background on Mavera, Inc., its products, its market position, and the ecosystem it operates in. This document is the foundation — read this first.

---

## 1. What Mavera Is

Mavera, Inc. is a Delaware C-Corp that built and operates an AI-powered marketing intelligence and customer research platform. The company transforms live market signals into defensible, evidence-backed decisions for enterprise teams — every recommendation comes with "receipts" (traceable reasoning, cited sources, and auditable evidence chains).

**Tagline on the current site:** *"Make high-stakes decisions with receipts."*

**Tagline on the acquired landing page:** *"Know what [matters] before the strategy is stale."*

**The core thesis:** Traditional research is too slow. Static personas are fiction. Mavera continuously listens to real people, distills what's true right now, and feeds it back into strategy and execution. Every major decision comes with receipts you can defend.

---

## 2. The Three Products Under the Mavera Umbrella

Mavera is not one product — it's an ecosystem of three interconnected products that share the same underlying intelligence layer:

### 2.1 The Mavera Platform (app.mavera.io)

The flagship SaaS product. A full web application where enterprise teams run synthetic audience research, test content, analyze video, monitor news, generate content, and conduct AI-powered research — all through the lens of configurable personas that represent real audience segments.

**Live at:** app.mavera.io  
**Auth:** Auth0 (email/password, Google, Apple sign-in)  
**Pricing:** Credit-based (Starter $300/mo, Professional Agency $3,500/mo, Enterprise custom)  
**Customers:** 9 paying enterprise accounts, ~$25,500 MRR  
**Pipeline:** Coinbase (MSA signed), S&P Global, PitchBook, Spotify, Hasbro, H&R Block

The platform's UI (visible in the mavera.io marketing site) shows:
- Left sidebar: Audience, Focus Groups, Assets, Custom Persona, Expert, Video, Meetings, Generate, Speak, News, Research
- Center: Chat interface with goal-setting and multi-tab views (New Chat, Summary, Matrix, Flags, Compare)
- Right sidebar: Configurations panel with Persona selection, Custom Persona, Mosaic Mode, Analysis toggle, Speak, News, Research

### 2.2 The Mavera API (docs.mavera.io)

A fully documented, OpenAI SDK-compatible API that exposes every capability of the platform programmatically. This is sold to both developers AND non-developers — the thesis is that tools like Claude Code, Cursor, and Codex have made APIs accessible to people who don't write code traditionally.

**Base URL:** `https://app.mavera.io/api/v1`  
**API Keys:** `mvra_live_` (production) / `mvra_test_` (sandbox)  
**Model:** `mavera-1`  
**SDK Compatibility:** Drop-in replacement for OpenAI — change `base_url`, add `persona_id`, use `client.responses.create()`  
**SDKs:** Python, JavaScript/TypeScript, Go  
**Docs:** Mintlify-hosted at docs.mavera.io (professional, dark theme, interactive examples)

### 2.3 Maven (the Desktop App — evam repo)

Maven is a native macOS desktop application (Tauri 2.x + SolidJS) that serves as an AI coworker. It integrates the Mavera API as one of its MCP (Model Context Protocol) tool servers, alongside iMessage, Apple Mail, contacts, credentials, and data sources. Maven is the "local-first, premium experience" layer — it can text you on iMessage, schedule autonomous tasks, track long-lived goals ("Outcomes"), and run AI agents that work while you sleep.

**Repo:** github.com/LubedB1nary/evam  
**Codebase:** 258,638 lines of production code, 619 source files, 12 applications  
**Architecture:** Thin experience layer over an agentic AI engine, packaged as a native app with sidecars  

Maven is the product that non-technical users interact with. The Mavera API is what powers the intelligence behind it. The Mavera Platform is the web-based version for teams who don't need the desktop app.

---

## 3. The Team

| Person | Role | Background |
|--------|------|------------|
| **Alex Hassan** | CTO / Sole Technical Builder | Built the entire Maven platform. Invented the AIL (Automated Innovation Lab) architecture. Scales an offshore engineering team from 5-30 as needed. Currently also fractional CTO for Ospri Bio. |
| **Jill Axline** | CEO / Commercial Intelligence | PhD (Cornell). Former Morningstar marketing executive. Manages sales, marketing, client operations, enterprise relationships, public speaking, GTM. Only full-time employee. |

---

## 4. Certifications & Trust

Mavera holds enterprise-grade certifications that most AI startups at this stage do not:

- **SOC 2 Type II** — audited security controls
- **ISO 27001** — information security management
- **ISO 42001** — AI management system (one of the first companies to hold this)
- **Trust portal:** trust.mavera.io
- **Infrastructure:** AWS
- **Auth:** Auth0
- **Payments:** Stripe (production account with payment history)

---

## 5. Key Domains & Properties

| Domain | Purpose |
|--------|---------|
| **mavera.io** | Main marketing site |
| **app.mavera.io** | The SaaS platform (login, dashboard, all features) |
| **docs.mavera.io** | API documentation (Mintlify) |
| **insights.mavera.io** | Published research studies (52+ studies, 96% parity with traditional panels) |
| **trust.mavera.io** | Security & compliance trust portal |
| **status.mavera.io** | API status page |
| **auth.mavera.io** | Auth0 authentication |
| **mavera-landing.vercel.app** | Acquired landing page (separate design, premium minimal aesthetic) |

---

## 6. The Intelligence Layer — What Makes Mavera Different

Mavera's core differentiator is not "another AI wrapper." It's a multi-model synthetic intelligence architecture:

### 6.1 Multi-Model Swarm Architecture
- **Emotional model** — understands sentiment, emotional valence, arousal, dominance
- **Cognitive model** — detects cognitive biases, reasoning patterns, decision frameworks
- **LLM layer** — language generation and comprehension
- **GAN discriminator** — quality gate that validates outputs against real human behavior patterns

### 6.2 Synthetic Data Layer
- 50M+ annotated interactions
- 25M+ thought-to-behavior mappings
- 98% emotional accuracy on the OASIS benchmark (Harvard human subject study)
- This is what powers the persona system — personas aren't just prompts, they're statistically validated behavioral models

### 6.3 615 Environmental Intelligence
- 295K+ media sources
- 495K+ total sources
- Real-time signal detection
- Configurable for any industry vertical

### 6.4 AIL Architecture (Automated Innovation Lab)
- 50-page architecture conceived and written by Alex Hassan
- Production-ready in Maven as "Roundtable"
- Multi-persona debate with phases: Opening Statements → Cross-Examination → Free Discussion → Closing Arguments
- Dialectical fusion synthesis — personas don't just give opinions, they challenge each other and arrive at synthesized conclusions

---

## 7. Published Research & Validation

- **52+ published studies** at insights.mavera.io
- **96% parity** with traditional research panels (human subject studies)
- **98% emotional accuracy** on the OASIS benchmark
- This is the credibility layer — Mavera isn't claiming synthetic research works, they've proven it against real human panels and published the results

---

## 8. Current Pricing

### Platform Pricing (mavera.io/pricing)

| Tier | Price | Credits | Audio Transcription | S3 Storage | Support | Overages |
|------|-------|---------|---------------------|------------|---------|----------|
| **Starter** | $300/mo | 500 | Included | 50 GB | Email | $0.80/credit, $0.023/GB |
| **Professional Agency** | $3,500/mo | 10,000 | 1,000 min | 100 GB | Priority | $0.55/credit, $0.023/GB |
| **Enterprise** | Custom | Custom | Custom | Custom | Dedicated | Custom |

### API Credit Costs (from docs)

| Endpoint | Credits per Call |
|----------|-----------------|
| Responses API (chat) | 1-5 |
| Mave Agent (research) | 10-75 |
| Persona listing | 0 (free) |
| Custom persona creation | 300 (one-time) |
| Focus Groups | 50-500+ |
| Video Analysis | 100-500 |
| News trending/personalized | 0-5 |
| News story analysis | 5-20 |
| Brand Voice creation | 50 |
| Content Generation | 10-30 |

---

## 9. Capital Structure (from Carta)

10,000,000 authorized shares of Common Stock. 8,860,000 currently outstanding.

| Holder | Shares | % |
|--------|--------|---|
| Alex Hassan (CS-1) | 4,000,000 | 45.1% |
| Jill Axline (CS-3 + CS-16 via The Axline Collective, LLC) | 4,000,000 | 45.1% |
| William P. Hickman (CS-15, separated Feb 2026) | 700,000 | 7.9% |
| Richard Stoddart (CS-17, advisory, vesting through Oct 2027) | 50,000 | 0.6% |
| Jenna Rose Koppinger (CS-4, pending dilution) | 100,000 | ~1% |
| SHEHARYAR, LLC (CS-5, pending cancellation) | 10,000 | 0.1% |

**Convertible Note:** $500,000 from Double Star Technology (Joseph Signorelli). 1% simple interest. Matures December 1, 2031. Converts to 10% on $1M qualified financing. Change of control: principal + accrued + 25% premium, or conversion (investor's choice). Perpetual IP license to RCM Technology LLC (agreed to terminate).

---

## 10. The Current Website (mavera.io) — Section-by-Section

The current mavera.io marketing site follows this structure:

1. **Hero:** Dark theme with data-visualization particle background. Floating testimonial card (Julia R., Product Manager @ ScaleUp). "Coming soon: Mave Agent" badge. Headline: "Make high-stakes decisions with receipts." Sub: "Mavera transforms live signals into market proof so teams can think and act faster." CTAs: START FOR FREE / WATCH DEMO.

2. **App Preview:** Screenshot of the full platform UI showing the sidebar navigation, chat interface, and configuration panel.

3. **01 Listen — "Stream signals that impact your success."** News intelligence feature. Trending News + For You personalized feed. "Don't miss a signal" — custom news watches with alerts.

4. **02 Upload — "Make past work current."** File upload for old studies/transcripts. Mavera refreshes them with today's signals.

5. **03 POV Builder — "Turn signals into guidance."** Construct data-backed arguments from sources (Market Report, Customer Survey, Competitor Analysis). Evidence tagging (Customer Request, Market Data).

6. **04 Study Launcher — "Research in real-time."** Choose research method: Personas, Focus Groups, Video Tests. "98% agreement with Harvard's OASIS human subject study."

7. **05 Persona Check — "Audience-calibrated."** Content validation against synthetic personas. Shows approval/flagging by different stakeholder types (CFO approved, Marketing flagged).

8. **06 Video Metrics — Performance analysis.** Attention, Clarity, Emotion, CTA scores with progress bars.

9. **07 Trace the work.** Transparent reasoning and traceable evidence for every recommendation.

10. **08 Impact Summary — "Outcomes, not vibes."** Before/After comparison table (Speed +36%, Cost -22%, Outcome +17%).

11. **Integrations grid:** Notion, GitHub, Google Analytics, LinkedIn, Instagram, X(Twitter). Categories: Communication & collaboration, Data & analytics stack.

12. **Blog/Articles:** "Inference vs. Evidence: How to Know If Your AI Output Is Defensible" and similar thought leadership.

13. **Footer:** Sitemap (Pricing, Cookbooks, Blog, About Mavera, Features, FAQ), Legal (Trust, Privacy, Terms & Conditions), Social (LinkedIn). Tagline: "Intelligence with receipts for high stakes decisions." © 2025.

---

## 11. The Acquired Landing Page (mavera-landing.vercel.app)

A separate, purchased landing page with a distinctly different design language:

- **Much more minimal and premium** — dark theme throughout, particle/star-field background
- **Headline:** "Know what [rotating text] before the strategy is stale."
- **CTAs:** "Start 14-day trial" (filled button) / "Enter the loop" (outline button)
- **Role selector:** "HOW DO YOU VIEW THE MARKET?" with cards for Founder ("Evidence before every board conversation and every big swing") and Marketer ("Know if your message lands before you spend")
- **Typography:** Large, elegant, thin-weight headings
- **Overall feel:** More Stripe/Linear than the current mavera.io

This landing page represents a design direction that could inform the new website — it's cleaner, more confident, and more outcome-oriented than the current site.
