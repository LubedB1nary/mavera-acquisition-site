# Document 2: Mavera Platform Capabilities & API Surface

> **Purpose:** Exhaustive reference of every feature, endpoint, and capability the Mavera platform offers today. This is the "what does it actually do" document.

---

## 1. Platform Architecture at a Glance

```
┌─────────────────────────────────────────────────────────────────┐
│                    MAVERA PLATFORM                               │
│                  app.mavera.io/api/v1                            │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────────────┐  │
│  │  Responses    │  │  Mave Agent  │  │  Personas (50+)      │  │
│  │  API          │  │  (Research)  │  │  + Custom Creation   │  │
│  │  1-5 credits  │  │  10-75 cr    │  │  300 cr to create    │  │
│  └──────────────┘  └──────────────┘  └──────────────────────┘  │
│                                                                  │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────────────┐  │
│  │  Focus        │  │  Video       │  │  News                │  │
│  │  Groups       │  │  Analysis    │  │  Intelligence        │  │
│  │  50-500+ cr   │  │  100-500 cr  │  │  0-20 cr             │  │
│  └──────────────┘  └──────────────┘  └──────────────────────┘  │
│                                                                  │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────────────┐  │
│  │  Brand        │  │  Content     │  │  Meetings            │  │
│  │  Voice        │  │  Generation  │  │  (Zoom/Meet/Teams)   │  │
│  │  50 cr        │  │  10-30 cr    │  │  Recording + AI      │  │
│  └──────────────┘  └──────────────┘  └──────────────────────┘  │
│                                                                  │
│  ┌──────────────┐  ┌──────────────┐                             │
│  │  Files &      │  │  Workspaces  │                             │
│  │  Folders      │  │  & Projects  │                             │
│  │  S3 Storage   │  │  Multi-tenant│                             │
│  └──────────────┘  └──────────────┘                             │
│                                                                  │
│  ┌──────────────────────────────────────────────────────────┐   │
│  │  SDKs: Python · JavaScript/TypeScript · Go               │   │
│  │  OpenAI SDK Compatible — just change base_url            │   │
│  └──────────────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────────────┘
```

---

## 2. Responses API — The Core Intelligence Endpoint

**Endpoint:** `POST /responses`  
**Cost:** 1-5 credits per response  
**SDK:** `client.responses.create()` — identical to OpenAI's Responses API

This is the primary endpoint. It's a persona-enhanced AI response system that's fully compatible with the OpenAI SDK. The key differentiator: every response can be shaped through a specific audience persona's lens — their values, language patterns, decision frameworks, and emotional triggers.

### 2.1 Core Capabilities

| Capability | Description |
|-----------|-------------|
| **Persona Intelligence** | Pass `persona_id` to shape responses through a specific audience segment's worldview |
| **Streaming** | Server-Sent Events with `response.created`, `response.output_text.delta`, `response.completed` |
| **Analysis Mode** | `analysis_mode: true` returns structured metrics: confidence (1-10), emotional valence/arousal/dominance, detected cognitive biases, key insights |
| **Structured Outputs** | JSON mode (`json_object`) or JSON Schema mode (`json_schema`) with strict typing |
| **Function Calling** | Flat tool format, custom functions + built-in server tools |
| **Vision/Image Input** | Analyze images via `input_image` content blocks (PNG, JPEG, GIF, WebP up to 20MB) |
| **Multi-turn Conversations** | Role-based message arrays for context continuity |

### 2.2 Built-in Server Tools

- **Tavily Search** — real-time web search
- **Tavily Extract** — structured data extraction from URLs
- **DALL-E Image Generation** — create images from text
- **Sora Video Generation** — create video from text
- **RunwayML** — advanced video generation

### 2.3 Advanced Parameters

| Parameter | Range | Purpose |
|-----------|-------|---------|
| `reasoning_effort` | low / medium / high | Controls depth of reasoning |
| `verbosity` | Configurable | Controls response length |
| `temperature` | 0-2 | Creativity vs. determinism |
| `max_output_tokens` | Configurable | Response length cap |
| `top_p` | 0-1 | Nucleus sampling |
| `frequency_penalty` | -2 to 2 | Reduce repetition |
| `presence_penalty` | -2 to 2 | Encourage topic diversity |
| `instructions` | String | Appended to persona system prompt |

### 2.4 Quick Example (Python)

```python
from openai import OpenAI

client = OpenAI(
    api_key="mvra_live_your_key_here",
    base_url="https://app.mavera.io/api/v1",
)

response = client.responses.create(
    model="mavera-1",
    input="How do millennials feel about remote work?",
    extra_body={"persona_id": "YOUR_PERSONA_ID"},
)

print(response.output[0].content[0].text)
print(f"Credits used: {response.usage.credits_used}")
```

---

## 3. Personas — The Foundation of Everything

**Endpoints:** `GET /personas` (free), `POST /personas` (300 credits)

Personas are the atomic unit of Mavera's intelligence. Every other feature — Responses, Focus Groups, Content Testing, News Analysis, Roundtables — is enhanced by personas. They're not prompt templates; they're statistically validated behavioral models encoding demographics, psychographics, behavioral patterns, and communication style.

### 3.1 50+ Pre-Built Personas Across 5 Categories

| Category | Examples |
|----------|----------|
| **Generational** | Gen Z Consumer, Gen Z Professional, Millennial Consumer, Millennial Professional, Gen X, Boomer, Silent Generation |
| **Professional** | B2B Decision Maker, Startup Founder, Enterprise CTO, Marketing Director, Product Manager, SMB Owner |
| **Lifestyle** | Health-Conscious, Eco-Warrior, Budget Shopper, Luxury Consumer, Digital Nomad, Urban Professional |
| **Industry** | Healthcare, Finance, Tech, Education, Real Estate |
| **Expert** | Market Analyst, Brand Strategist, UX Researcher, Growth Marketer, Content Strategist |

### 3.2 Custom Persona Creation (3 Methods)

| Method | Input | AI Does | Cost |
|--------|-------|---------|------|
| **North Star** | Name + description only | Generates full profile from minimal input | 300 credits |
| **Intermediate** | Guided 3-step: goals, pain points, buying stage, decision role | Fills in psychographics and behavioral patterns | 300 credits |
| **Advanced** | Full control: psychographics, tech stack, channels, triggers, budget authority, company size | Validates and enriches | 300 credits |

### 3.3 What a Persona Contains

Each persona encodes:
- Demographics (age, income, education, location, family status)
- Psychographics (values, beliefs, lifestyle, personality traits)
- Behavioral patterns (media consumption, purchase triggers, decision process)
- Communication style (tone, vocabulary, formality, preferred channels)
- Goals and pain points
- Buying stage and decision role
- Technology stack and tool preferences

---

## 4. Mave Agent — Deep Research

**Endpoint:** `POST /mave/chat`  
**Cost:** 10-75 credits per query (follow-ups 30-50% cheaper)

Mave is Mavera's AI research agent. Unlike the Responses API (which gives quick, persona-shaped answers), Mave conducts multi-phase research with source attribution and fact-checking.

### 4.1 The 5-Phase Research Process

```
Triage → Planning → Research → Execution → Validation
```

1. **Triage** — Classifies the query complexity and determines which data sources to use
2. **Planning** — Creates a research plan with specific sub-questions
3. **Research** — Queries multiple data sources in parallel
4. **Execution** — Synthesizes findings into a coherent response
5. **Validation** — Fact-checks claims, scores confidence, flags hallucination risk

### 4.2 Data Sources

| Source | Provider | What It Covers |
|--------|----------|----------------|
| Web Search | Tavily | Real-time web pages, blogs, forums |
| News Search | Perigon | News articles, press releases, media coverage |
| SEO Data | SEMrush | Domain metrics, traffic estimates, keyword rankings |
| Knowledge Base | CircleMind | Your uploaded documents and proprietary data |

### 4.3 Validation Object (in every response)

```json
{
  "confidence_score": 0.87,
  "hallucination_risk": "low",
  "unsupported_claims": [],
  "sources": [
    { "title": "...", "url": "...", "relevance": 0.95 }
  ]
}
```

### 4.4 Thread Management

- `POST /mave/chat` — start or continue a thread (pass `thread_id` for follow-ups)
- `GET /mave/threads` — list all threads
- `GET /mave/threads/{id}` — get full thread with all messages
- `DELETE /mave/threads/{id}` — delete a thread

---

## 5. Focus Groups — Synthetic Audience Research at Scale

**Endpoint:** `POST /focus-groups`  
**Cost:** 50-500+ credits depending on complexity

Asynchronous synthetic audience research. Create a study, poll for results. Each respondent is a statistically modeled synthetic person drawn from the selected personas.

### 5.1 12 Question Types

| Type | Use Case |
|------|----------|
| **NPS** | Net Promoter Score (0-10 scale with promoter/passive/detractor breakdown) |
| **Likert** | Agreement scales (1-5 or 1-7) |
| **Multiple Choice** | Select one or many from options |
| **Open-Ended** | Free-text responses with thematic analysis |
| **Rating** | Numeric rating (configurable scale) |
| **Yes/No** | Binary questions |
| **Ranking** | Order items by preference |
| **Slider** | Continuous scale (e.g., 0-100) |
| **Matrix** | Multiple items rated on the same scale |
| **Semantic Differential** | Bipolar scales (e.g., "Modern ←→ Traditional") |
| **Conjoint** | Trade-off analysis between feature bundles |
| **MaxDiff** | Best-worst scaling |

### 5.2 Parameters

- **Personas:** 1-10 per study
- **Questions:** 1-20 per study
- **Sample size:** 10-200+ respondents
- **Status lifecycle:** PENDING → PROCESSING → COMPLETED (30-120 seconds typical)

### 5.3 Results Include

- Aggregate statistics (NPS score, mean/median/std_dev, distributions)
- Individual respondent-level data with persona name, score, and reasoning
- Cross-segment analysis capability
- Thematic analysis for open-ended questions

---

## 6. Video Analysis — AI-Powered Creative Testing

**Endpoint:** `POST /video-analyses`  
**Cost:** 100-500 credits depending on video length

Comprehensive video/ad analysis with emotional, cognitive, behavioral, and technical metrics. Upload a video, get back a detailed performance breakdown.

### 6.1 Metrics Returned

| Metric | Description |
|--------|-------------|
| `overall_score` | 0-100 composite score |
| `emotional_impact` | How strongly the video triggers emotional response |
| `attention_score` | Predicted viewer attention/retention |
| `brand_recall_likelihood` | Probability viewers remember the brand |
| `cta_effectiveness` | How compelling the call-to-action is |

### 6.2 Per-Chunk Breakdown

Videos are analyzed in configurable chunks (e.g., 5-second segments), each with:
- Engagement score
- Emotional valence
- Key moments identification
- Specific recommendations

### 6.3 Chat About Results

`POST /video-analyses/{id}/chat` — ask natural-language questions about a completed analysis. The AI has full access to all metrics and can explain, compare, and recommend.

---

## 7. News Intelligence — Market Signal Monitoring

**Endpoints:**
- `GET /news/stories/trending` — by category (free/minimal)
- `GET /news/stories/personalized` — by your interests (free/minimal)
- `POST /news/stories/{id}/analyze` — multi-persona analysis (5-20 credits)
- `POST /news/stories/{id}/chat` — conversational analysis (1-5 credits)

Categories: technology, business, science, health, sports, entertainment, general.

The "Listen" layer of the platform — unified feed of breaking news, market shifts, cultural signals, and competitor moves, all filterable through your personas' lenses.

---

## 8. Brand Voice — Consistent Tone Across Everything

**Endpoint:** `POST /brand-voices`  
**Cost:** 50 credits to create

Create AI-generated tone/voice profiles from your existing content. Feed it URLs (website pages, blog posts) and/or uploaded documents (PDFs, Word docs), and Mavera extracts:

- `voice_summary` — overall description of the brand's voice
- `tone_adjectives` — words that describe the tone
- `tone_dos` / `tone_donts` — what to do and avoid
- `preferred_terms` / `avoid_terms` — vocabulary preferences
- `sentence_structure` — how the brand constructs sentences

Brand voices are then applied to Content Generation via the `brand_voice_id` parameter, ensuring every piece of generated content sounds like your brand.

---

## 9. Content Generation — Template-Based AI Content

**Endpoint:** `POST /generations`  
**Cost:** 10-30 credits per generation

Template-based content creation with optional brand voice styling.

### 9.1 Flow

1. `GET /generation-apps` — discover available templates and their required input fields
2. `POST /generations` — generate content with `app_id`, `input_data`, optional `brand_voice_id`

### 9.2 Common Templates

Blog posts, social media posts, email campaigns, product descriptions, ad copy, presentations, press releases, and more. Each template has specific required `input_data` fields (e.g., `topic`, `target_audience`, `tone`, `length`, `key_points`, `platform`).

---

## 10. Meetings — Full Meeting Intelligence

**Endpoints:** Full CRUD on `/meetings`  
**Supported Platforms:** Zoom, Google Meet, Microsoft Teams, Webex

### 10.1 Capabilities

| Feature | Description |
|---------|-------------|
| **Recording** | Bot joins via `meeting_url`, immediate or scheduled (`join_at`) |
| **Transcription** | 3 formats: `segments` (structured JSON with speaker attribution + word-level timing), `text` (plain), `srt` (subtitles) |
| **AI Analysis** | Summary, key takeaways, topics, sentiment, highlights (with quotes + timestamps), tasks (with owner/priority/due_date), decisions |
| **Coaching Metrics** | Talk ratio, questions asked, interruptions, next_step_confirmed, discovery_completeness_score |
| **Custom Schemas** | Define structured extraction templates for specific meeting types |

### 10.2 Custom Schemas

9 field types: text, long_text, enum, multi_select, number, boolean, list, person, date. Evidence quoting supported. Pre-built categories: sales_discovery, qualification, objection_competitor, cs_health, product_feedback, custom.

Example: Define a BANT schema, run it against a sales call transcript, get back structured Budget/Authority/Need/Timeline data with supporting quotes.

---

## 11. Files, Folders & Workspaces

- **Files:** Upload, list, search, filter by type. S3-backed storage.
- **Folders:** Organize files within workspaces.
- **Workspaces:** Multi-tenant project containers. All resources (personas, focus groups, brand voices, etc.) are scoped to a workspace.

---

## 12. Rate Limits

| Plan | Requests/Minute | Requests/Day |
|------|-----------------|--------------|
| Free | 10 | 100 |
| Pro | 60 | 5,000 |
| Business | 300 | 50,000 |
| Enterprise | Custom | Custom |

---

## 13. The 200+ Workflow Templates (from docs)

The documentation includes over 200 production-ready workflow patterns organized by domain. These are not just ideas — they're step-by-step integration guides with full code samples in Python and JavaScript:

### By Domain

| Domain | # of Templates | Examples |
|--------|---------------|----------|
| Creative & Visual | 12 | Image generation feedback loops, ad A/B testing, logo concepts, packaging mockups |
| Copy & Messaging | 14 | Headline variants, email subjects, social captions, PPC ad copy |
| Sales & Outreach | 8 | Cold emails, call scripts, elevator pitches, crisis comms |
| Product & UX | 10 | Feature naming, onboarding copy, error messages, chatbot flows |
| Content & Marketing | 11 | Blog outlines, press releases, whitepapers, video scripts |
| Brand & Strategy | 5 | Positioning, competitor analysis, tone guidelines |
| Internal & Operations | 4 | Job descriptions, internal comms, support articles |
| Sales B2B/Enterprise | 10 | Discovery scripts, battle cards, RFP responses, champion enablement |
| Finance & Investing | 8 | Earnings call review, investment memos, IR copy |
| Human Intelligence | 13 | Census pre-testing, ballot language, vaccine hesitancy messaging |
| Healthcare | 7 | Patient education, clinical trial recruitment, discharge instructions |
| Government & Civic | 8 | Voter guides, disaster messaging, benefits explainers |
| Legal/Compliance | 7 | ToS readability, privacy policy testing, compliance training |
| Education | 7 | Syllabus clarity, financial aid letters, course descriptions |
| Real Estate/Insurance | 5 | Listing descriptions, claims process explainers |
| Nonprofit | 5 | Donor appeals, grant reports, volunteer recruitment |

### Integration Patterns (48 templates)

Salesforce, HubSpot, Slack/Teams, Zendesk/Intercom, Notion/Airtable, Zapier/Make/n8n, Stripe, GitHub/Jira/Linear, Google Analytics/Mixpanel — each with full code showing how to pipe Mavera intelligence into the tool.

### The Common Pattern

```
Generate content with GPT/other AI
    → Analyze with Mavera personas
    → Filter/iterate based on scores
    → Ship the winner
```

This "generate → test → iterate → ship" loop is the core value proposition of the API.

---

## 14. Maven Desktop App — Additional Capabilities via MCP

When the Mavera API is accessed through the Maven desktop app (rather than directly), additional capabilities become available through the MCP (Model Context Protocol) integration layer:

### 14.1 Mavera MCP Tools (available in Maven)

All of the above API endpoints, plus:
- **Roundtable discussions** — 2-8 personas debate a topic with phases (Opening → Cross-Examination → Free Discussion → Closing)
- **Content testing** — test content against multiple personas with structured engagement scores
- **Audience polls** — large-scale simulation (up to 500 respondents per persona)
- **Interview practice** — practice pitches, sales calls, negotiations with personas who push back
- **Persona conversations** — multi-turn ongoing conversations with memory
- **Persona dossiers** — rich comparison profiles
- **Cowork artifact packs** — UX audit packs, content lab packs, roundtable packs that generate multiple rich visual artifacts

### 14.2 User Context MCP Tools (Maven-specific)

- iMessage search, send, thread management
- Apple Mail search and read
- Contacts search
- Outcome management (goal tracking, todos, learnings, child sessions, schedules)
- Brand guidelines
- Work profile
- System profile
- Knowledge graph (long-term memory)
- Document parsing (PDF/DOCX via Reducto AI)
- Podcast generation from notebooks

### 14.3 Credential Vault MCP

- Secure credential storage and retrieval (OS keychain backed)
- Site preferences

### 14.4 Messaging Connectors

- Slack, Telegram, WhatsApp via opencode-router
- iMessage via dedicated bridge sidecar
