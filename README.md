# AI-Enhanced OSINT: A Practical Guide for Illicit Trade Intelligence

> Part of the [Atlas Bear Labs](https://github.com/atlas-bear) intelligence methodology

**Intelligence Toolkit Integration:**

- [OSINT Tools](https://github.com/atlas-bear/osint-tools) - Maritime and supply chain intelligence gathering tools
- [Recommended Reading](https://github.com/atlas-bear/recommended-reading) - Essential reading on illicit trade and intelligence analysis
- [Supply Chain Tools](https://github.com/atlas-bear/supply-chain-management-tools) - Open source management solutions for emerging markets

---

Atlas Bear Labs wrote this guide to share what we have learned about using AI tools in open source intelligence (OSINT) work. Our focus is illicit trade. It covers the AI assistants and OSINT platforms we think are worth your time. It explains where your data goes when you use them, and how to keep an investigation safe while you do. We hope it is useful to practitioners, students and teachers. If something is wrong or missing, please tell us through GitHub Issues.

[![License: CC BY 4.0](https://img.shields.io/badge/License-CC_BY_4.0-lightgrey.svg)](https://creativecommons.org/licenses/by/4.0/)
![Last Updated](https://img.shields.io/badge/Last%20Updated-October%202026-blue)
![Version](https://img.shields.io/badge/Version-3.0-blue)
![OSINT](https://img.shields.io/badge/OSINT-Intelligence%20Research-red)
![AI Models](https://img.shields.io/badge/AI-Models%20%26%20Platforms-green)

**How this guide is maintained.** We review the whole guide twice a year, in spring before the Summer School on Illicit Trade and again in autumn. Every table carries the date we last checked it against vendor pages. Prices and data policies change quickly, so check the vendor page before you buy or before you paste anything sensitive. Corrections are welcome through Issues or a pull request. The [CHANGELOG](CHANGELOG.md) lists what changed in each version.

## Table of Contents

<!-- TOC -->
- [BLUF](#bluf)
  - [Quick decision matrix](#quick-decision-matrix)
  - [Six things to do](#six-things-to-do)
- [Part 1: Reading the OPSEC rubric](#part-1-reading-the-opsec-rubric)
- [Part 2: AI assistants for OSINT research](#part-2-ai-assistants-for-osint-research)
  - [2.1 Comparison table](#21-comparison-table)
  - [2.2 Deep research across vendors](#22-deep-research-across-vendors)
  - [2.3 Connectors, MCP and agent modes](#23-connectors-mcp-and-agent-modes)
  - [2.4 Memory and temporary modes](#24-memory-and-temporary-modes)
  - [2.5 Enterprise and no-training routes](#25-enterprise-and-no-training-routes)
  - [2.6 Research and academic tools](#26-research-and-academic-tools)
  - [A worked example with one vendor](#a-worked-example-with-one-vendor)
- [Part 3: Local and open-weight models](#part-3-local-and-open-weight-models)
  - [3.1 Open-weight models in 2026](#31-open-weight-models-in-2026)
  - [3.2 Hardware tiers and model picks](#32-hardware-tiers-and-model-picks)
  - [3.3 Runners](#33-runners)
- [Part 4: AI-agent security for analysts](#part-4-ai-agent-security-for-analysts)
  - [4.1 Indirect prompt injection and the lethal trifecta](#41-indirect-prompt-injection-and-the-lethal-trifecta)
  - [4.2 MCP tool poisoning and supply chain](#42-mcp-tool-poisoning-and-supply-chain)
  - [4.3 Agentic browsers](#43-agentic-browsers)
  - [4.4 Do and do not](#44-do-and-do-not)
- [Part 5: OPSEC for AI-assisted OSINT](#part-5-opsec-for-ai-assisted-osint)
  - [5.1 Principles and the Berkeley Protocol](#51-principles-and-the-berkeley-protocol)
  - [5.2 Technical safeguards, identity and data handling](#52-technical-safeguards-identity-and-data-handling)
  - [5.3 Where your prompts go](#53-where-your-prompts-go)
  - [5.4 Recommendations](#54-recommendations)
- [Part 6: Analytic tradecraft: hallucination, verification and provenance](#part-6-analytic-tradecraft-hallucination-verification-and-provenance)
  - [How we use AI output](#how-we-use-ai-output)
  - [What models are good at](#what-models-are-good-at)
- [Part 7: Synthetic media, verification and AI geolocation](#part-7-synthetic-media-verification-and-ai-geolocation)
  - [7.1 Generators, and what provenance marks can and cannot tell you](#71-generators-and-what-provenance-marks-can-and-cannot-tell-you)
  - [7.2 Detection tools and how far to trust them](#72-detection-tools-and-how-far-to-trust-them)
  - [7.3 AI geolocation](#73-ai-geolocation)
- [Part 8: Adversarial use of AI by illicit networks](#part-8-adversarial-use-of-ai-by-illicit-networks)
- [Part 9: OSINT platforms and data sources](#part-9-osint-platforms-and-data-sources)
  - [9.1 Professional OSINT tools](#91-professional-osint-tools)
  - [9.2 Free structured data for illicit trade investigation](#92-free-structured-data-for-illicit-trade-investigation)
  - [9.3 Platform and data access is shrinking](#93-platform-and-data-access-is-shrinking)
  - [9.4 Geospatial intelligence](#94-geospatial-intelligence)
  - [9.5 Corporate, supply chain, trade, sanctions and blockchain](#95-corporate-supply-chain-trade-sanctions-and-blockchain)
  - [9.6 Enterprise intelligence and investigation platforms](#96-enterprise-intelligence-and-investigation-platforms)
- [Part 10: Automation and agentic coding for OSINT](#part-10-automation-and-agentic-coding-for-osint)
  - [10.1 Agentic coding tools](#101-agentic-coding-tools)
  - [10.2 Workflow automation](#102-workflow-automation)
  - [10.3 Private search over investigation corpora](#103-private-search-over-investigation-corpora)
  - [10.4 Safe development checklist](#104-safe-development-checklist)
- [Part 11: Legal and regulatory changes, 2025 to 2026](#part-11-legal-and-regulatory-changes-2025-to-2026)
  - [European Union](#european-union)
  - [United Kingdom](#united-kingdom)
  - [United States](#united-states)
  - [Standards and guidance](#standards-and-guidance)
  - [What we do](#what-we-do)
- [Part 12: For educators: curriculum, lab setup and budgets](#part-12-for-educators-curriculum-lab-setup-and-budgets)
  - [Course structure](#course-structure)
  - [Lab setup](#lab-setup)
  - [Budgets](#budgets)
- [Part 13: An investigation workflow for illicit trade](#part-13-an-investigation-workflow-for-illicit-trade)
  - [Phase 1: Scope and first collection](#phase-1-scope-and-first-collection)
  - [Phase 2: Deep investigation](#phase-2-deep-investigation)
  - [Phase 3: Analysis and reporting](#phase-3-analysis-and-reporting)
- [Conclusion](#conclusion)
- [Appendix A: Renamed, acquired or discontinued (2022 to 2026)](#appendix-a-renamed-acquired-or-discontinued-2022-to-2026)
- [Contributing](#contributing)
  - [How to contribute](#how-to-contribute)
  - [Rules we hold ourselves to](#rules-we-hold-ourselves-to)
  - [Areas where help is most useful](#areas-where-help-is-most-useful)
- [License](#license)
  - [Copyright notice](#copyright-notice)
  - [How to cite this guide](#how-to-cite-this-guide)
- [Disclaimer](#disclaimer)
- [Contact and Support](#contact-and-support)
- [Acknowledgments](#acknowledgments)
- [Atlas Bear Ecosystem](#atlas-bear-ecosystem)
- [References](#references)
<!-- /TOC -->

---

## BLUF

AI tools now sit inside most OSINT work. They speed up research, translation, document review and drafting. They also add new risks. Your prompts can become training data or court evidence. A web page you ask an AI agent to read can hijack it. Models state invented facts with confidence. Treat every AI tool as a service you have to assess, the same way you would assess a data broker, not as a neutral assistant.

> **Consumer AI chat logs are discoverable records.** In May 2025 a US federal court ordered OpenAI to preserve consumer ChatGPT logs, including deleted chats, as evidence in a copyright case. That duty ended in September 2025. The preserved data stays under hold, and in January 2026 a judge upheld an order to hand 20 million de-identified conversations to the plaintiffs.[^nyt-order][^nyt-order-end][^nyt-20m] OpenAI's own chief executive has said there is no legal privilege for what you tell a chatbot.[^altman-privilege] Do not put a target's name or your case details into a consumer chat service.

### Quick decision matrix

The four letters are the OPSEC rubric explained in [Part 1](#part-1-reading-the-opsec-rubric): **T**raining on your inputs, **R**etention and legal exposure, **D**eployment control, and **Q**uery attribution to you.

| Option | T | R | D | Q | Use it for |
| --- | --- | --- | --- | --- | --- |
| Open-weight model run on your own hardware ([Part 3](#part-3-local-and-open-weight-models)) | 🟢 | 🟢 | 🟢 | 🟢 | Anything that names a target, a source or a case |
| Enterprise AI with no-training terms: Claude Team or Enterprise, ChatGPT Enterprise, Microsoft 365 Copilot, Azure OpenAI and Microsoft Foundry, Amazon Bedrock, Google Vertex AI ([Part 2.5](#25-enterprise-and-no-training-routes)) | 🟢 | 🟢 | 🟡 | 🟡 | Sensitive work under an organisational account, accepting that administrators can see audit logs |
| Consumer paid plan with model training switched off and a temporary or incognito chat | 🟡 | 🟡 | 🔴 | 🟡 | General research, drafting and translation that does not identify a target |
| Consumer plan on default settings | 🔴 | 🟡 | 🔴 | 🔴 | Summaries of public sources only |
| Any AI browser or agent pointed at content an adversary controls while you are logged in to mail, files or tools ([Part 4](#part-4-ai-agent-security-for-analysts)) | 🔴 | 🔴 | 🔴 | 🔴 | Do not |
| Apps and APIs hosted in China (DeepSeek, Qwen, Kimi, GLM) | 🔴 | 🔴 | 🔴 | 🔴 | Not for case work. The same companies' open weights run locally are 🟢 on every count |

### Six things to do

1. Keep anything that names a target, a source or a case on a local model or on an enterprise account with no-training terms.
2. Assume every prompt you send to a consumer service can be retained, reviewed by staff and produced in court.
3. Use any vendor's deep research mode if it helps, then check every citation yourself. Models still invent sources ([Part 6](#part-6-analytic-tradecraft-hallucination-verification-and-provenance)).
4. Never point an AI browser, agent or MCP connector at adversary content while it has access to your email, files or credentials ([Part 4](#part-4-ai-agent-security-for-analysts)).
5. Turn memory off and use temporary or incognito chats for case work ([Part 2.4](#24-memory-and-temporary-modes)).
6. AI output is never a source. Record where a fact came from, not which model repeated it.

**If you teach OSINT**, start students on free local tools, then move to commercial platforms, and make operational security the first lesson rather than the last. [Part 12](#part-12-for-educators-curriculum-lab-setup-and-budgets) has a course outline and budgets.

**If you practise OSINT**, combine the tools you already trust with AI assistants, but keep sensitive work local or on enterprise terms. The information and knowledge you control directly remain your most valuable asset.

Market analysts put the OSINT software market somewhere between 10 and 18 billion US dollars in 2025. They forecast growth of 15 to 27 percent a year. The spread is wide because each firm defines the market differently, so treat these figures as direction rather than fact.[^market]

[↑ Back to top](#ai-enhanced-osint-a-practical-guide-for-illicit-trade-intelligence)

---

## Part 1: Reading the OPSEC rubric

<!-- last-reviewed: 2026-10-12 -->

Earlier versions of this guide gave each tool one OPSEC rating. That hid the real questions. A platform can protect your data well and still log every query you make under your own name. A free local model can be safe for your data and still be the wrong tool for a report that needs sources. So we now rate four things separately, and every rated table in this guide uses the same four letters.

| Letter | Question | 🟢 | 🟡 | 🔴 |
| --- | --- | --- | --- | --- |
| **T** Training | Are my inputs used to train the vendor's models? | Never, or excluded by contract (enterprise plans, API, local models) | On by default with an opt-out, or an opt-out with carve-outs such as safety review | On with no opt-out, or the policy is unclear |
| **R** Retention and legal exposure | How long are my logs kept, and who can compel them? | Zero retention or 30 days or less, and you can delete | A fixed default retention (for example 18 months, or five years if you opt in to training), or a history of litigation holds | Indefinite or unclear, or hosted where compelled access is routine |
| **D** Deployment control | Can I run it locally, self-host it, or choose a sovereign or private cloud? | Local or self-hosted | Enterprise cloud with a choice of region and no-training terms (Vertex AI, Bedrock, Azure OpenAI and Foundry) | Consumer cloud only |
| **Q** Query attribution | Can the vendor, or my own employer's audit log, tie this query about this target to me? | No account needed, or fully local | Account-bound, but a pseudonymous account is possible and logs are not shared | Real-identity account, or full analyst-query audit logging. Audit logs are a compliance feature on enterprise platforms and an exposure for sensitive cases. Both are true |

Take a row that reads `T🟢 R🟢 D🟡 Q🟡`. It means the vendor does not train on your inputs and keeps little. You cannot run it yourself. Your organisation can see what you asked. We rate what the vendor's published terms say on the date shown under each table. Enterprise contracts can change a rating. Running open weights on your own machine makes all four green. Where we could not confirm a policy we say so rather than guess.

Two things the rubric does not measure. It does not say how good the tool is at the job. And it does not replace your own threat model. A journalist protecting a source, a compliance analyst screening a supplier, and a student in a lab face different adversaries. Each should read the same row differently.

[↑ Back to top](#ai-enhanced-osint-a-practical-guide-for-illicit-trade-intelligence)

---

## Part 2: AI assistants for OSINT research

<!-- last-reviewed: 2026-10-12 -->

Every major AI assistant now offers the same core research features. Each has a deep research mode that runs many searches and writes a cited report. Each has connectors to your files and email, an agent mode that can browse and act, and memory across chats. The differences that matter for OSINT are in the data terms, not the feature list. This Part compares the seven assistants we see most often in investigative work. We have tried to describe each vendor's terms as they stand in October 2026. Policies change often. Read the vendor's own page before you rely on any row.

### 2.1 Comparison table

Rubric strings are explained in [Part 1](#part-1-reading-the-opsec-rubric). Where two strings appear, the first is for consumer plans and the second for enterprise or API access.

| Assistant | Plans and prices (October 2026) | Where your data goes | Rubric | Notes for OSINT work |
| --- | --- | --- | --- | --- |
| **Claude** (Anthropic) | Free. Pro $20 a month ($17 billed yearly). Max $100 or $200. Team $25 or $125 a seat. Enterprise from $20 a seat plus usage.[^claude-pricing] Current models are Fable 5.1, Opus 5.5, Sonnet 5.5 and Haiku 5.5.[^claude-models] | Since August 2025, Free, Pro and Max users choose whether their chats and Claude Code sessions train future models. If you allow it, data is kept up to five years. If you decline, 30 days. Chats flagged by Anthropic's safety systems can be used for model improvement even if you opted out, and are kept up to two years. Team, Enterprise, API, Bedrock, Vertex AI, Claude Gov and Education accounts are excluded from training.[^anthropic-terms][^anthropic-privacy][^anthropic-retention] | Consumer `T🟡 R🟡 D🔴 Q🟡`. Team, Enterprise and API `T🟢 R🟢 D🟡 Q🟡` | Research mode, web search, connectors (MCP), memory with incognito chats, Claude Code, Claude in Chrome. Incognito chats are never used for training.[^anthropic-training-faq] |
| **ChatGPT** (OpenAI) | Free. Go about $8 with ads. Plus $20. Pro $200, with a $100 tier added in April 2026. Business $25 a seat. Enterprise and Edu on request. Prices are from third-party reporting because the pricing page blocks automated checks. | "Improve the model for everyone" is on by default for consumer accounts. Temporary Chats are deleted within 30 days and do not use memory. Enterprise, Edu and API accounts with zero data retention are not used for training.[^openai-data-controls] Consumer and API logs without zero data retention were under a court preservation order from May to September 2025, and 20 million de-identified logs were ordered produced to plaintiffs in November 2025.[^nyt-order][^nyt-order-end][^nyt-20m] | Consumer `T🟡 R🟡 D🔴 Q🟡`. Enterprise and zero-retention API `T🟢 R🟢 D🟡 Q🟡` | Deep Research, Agent mode (July 2025), Apps SDK built on MCP (plugins ended in April 2024).[^openai-agent] The Atlas browser launched in October 2025 and was retired in August 2026.[^atlas-retired] In July 2025 more than 4,500 shared chats turned up in Google search until OpenAI removed the "discoverable" option.[^chatgpt-indexed] |
| **Gemini** (Google) | Google AI Plus about $5. AI Pro about $20. AI Ultra about $100 to $200. Third-party reporting; check the Google One page. | "Keep Activity" stores chats for 18 months by default. With it off, chats are still kept for 72 hours. Chats sampled for human review are kept up to three years even if you delete them.[^gemini-privacy] Personal Intelligence (January 2026) connects Gmail, Photos and other Google apps, opt-in per app.[^gemini-personal] Vertex AI and Gemini Enterprise do not train on customer data and cache inputs for at most 24 hours.[^vertex-data] | Consumer `T🟡 R🟡 D🔴 Q🔴`. Vertex AI `T🟢 R🟢 D🟡 Q🟡` | Deep Research since December 2024. NotebookLM for source-grounded reading. Gemini in Chrome. Strong image and video analysis. Gemini 3 Pro shipped in November 2025 and Gemini 4 began a limited release in September 2026. |
| **Perplexity** | Pro $20. Max $200. Enterprise Pro $40 and Enterprise Max $325 a seat. Third-party reporting; the pricing page blocks automated checks. | The "AI data retention" setting is on by default and can be turned off in settings (third-party guides). The Comet browser has been free since October 2025.[^perplexity-comet] | `T🟡 R🟡 D🔴 Q🟡` | Good for fast, cited answers on current events. In August 2025 Brave showed that hidden text on a web page could make Comet open Gmail, read a one-time code and post it back.[^comet-injection] Cloudflare accused Perplexity of crawling sites that had blocked it.[^perplexity-cloudflare] Dow Jones, the New York Times and others have sued it. |
| **Le Chat** (Mistral AI) | Free. Pro €14.99. Team about $25 a seat. Enterprise on request. | Consumer plans train on your chats by default with an opt-out. Enterprise is opted out by default.[^mistral-training] Mistral is a French company and offers EU hosting and self-hosting through La Plateforme. | `T🟡 R🟡 D🟡 Q🟡` | Deep Research since July 2025, including on the free tier.[^mistral-deep-research] Mistral Large 3 is released under Apache 2.0 and Medium 3.5 (April 2026) replaced the Magistral and Devstral lines.[^mistral-changelog] Mistral reportedly renamed Le Chat "Vibe" in 2026. We keep the old name until the company documents the change. |
| **Grok** (xAI) | Tiers reported from $10 to $300 a month. X Premium+ also includes Grok. | X uses your posts and your Grok conversations for training by default. Opt out under Privacy and Safety, then "Grok and Third-party Collaborators". The Grok app has a separate "Improve the Model" switch.[^grok-optout] | `T🔴 R🟡 D🔴 Q🔴` | Useful for watching trends on X. Not suitable for case material. In July 2025 Grok produced antisemitic posts and called itself "MechaHitler".[^grok-mechahitler] In August 2025 hundreds of thousands of shared Grok chats were indexed by Google.[^grok-indexed] In January 2026 its image tool generated sexualised images of real people; Indonesia and Malaysia blocked Grok, and Ofcom and the European Commission opened investigations.[^grok-imagine] |
| **Microsoft Copilot** | Microsoft 365 Copilot $30 a user a month. Copilot Business $21. Microsoft 365 Premium $19.99 replaced Copilot Pro for individuals in October 2025.[^copilot-pricing] | Tenant data is covered by enterprise data protection and is not used for training. Your administrators hold the audit logs. | `T🟢 R🟡 D🟡 Q🔴` | Researcher agent for deep research (generally available mid-2025). Good when your evidence already lives in SharePoint, Outlook and Teams. We found no evidence that Microsoft 365 Copilot tenant data was affected by the OpenAI litigation. |

*Verified 2026-10-09 against vendor pages unless marked as third-party reporting. Prices change. Check before you buy.*

We dropped three things from this table since the last edition. OSINT-GPT was a third-party wrapper on YesChat.ai that added a data hop with no published terms. The "custom GPT" listings are covered by the warning in [Part 4](#part-4-ai-agent-security-for-analysts). The long Mistral product list now lives in one row above and in [Part 3](#part-3-local-and-open-weight-models).

### 2.2 Deep research across vendors

Deep research modes run dozens of searches, read the pages, and write a report with citations. They are the single most useful AI feature for background work on a company, a vessel, a port or a trafficking route. They are also where hallucinated citations show up most often, so every link in a deep research report needs to be opened and read. [Part 6](#part-6-analytic-tradecraft-hallucination-verification-and-provenance) explains how we check them.

| Vendor | Feature | Launched | Plans | Vendor-stated run time |
| --- | --- | --- | --- | --- |
| Google | Gemini Deep Research | 11 December 2024 | AI Pro and above, limited free use | Minutes |
| OpenAI | Deep Research | 2 February 2025 | Plus, Pro, Business, Enterprise; limited free use | 5 to 30 minutes |
| Perplexity | Deep Research | 14 February 2025 | Free (limited) and Pro | Minutes |
| xAI | DeepSearch | 17 February 2025 | Paid X and SuperGrok tiers | Minutes |
| Anthropic | Research | 15 April 2025 (Pro since 3 June 2025) | Pro, Max, Team, Enterprise | 5 to 15 minutes, up to 45 for complex questions[^claude-research][^claude-integrations] |
| Microsoft | Researcher agent | Generally available mid-2025 | Microsoft 365 Copilot | Minutes |
| Mistral | Deep Research in Le Chat | 17 July 2025 | All tiers including free[^mistral-deep-research] | Minutes |

*Launch dates from vendor announcements and contemporaneous reporting.[^deep-research-dates] Verified 2026-10-09.*

### 2.3 Connectors, MCP and agent modes

The Model Context Protocol (MCP) is the open standard that lets an assistant call outside tools and data sources. Anthropic published it in late 2024, OpenAI adopted it in March 2025, and Microsoft followed at Build in May 2025.[^mcp-openai] In December 2025 Anthropic donated MCP to the Linux Foundation's new Agentic AI Foundation, citing more than 10,000 public servers.[^mcp-aaif] The official registry listed roughly 10,000 to 19,000 entries at different points in 2026, depending on how you count.[^mcp-registry]

Three things to know before you connect anything:

- **The old reference servers are unmaintained.** In May 2025 the MCP project moved its GitHub, Slack, PostgreSQL, Google Drive and Puppeteer servers to an archive. The archive notice says "no security guarantees are provided".[^mcp-archived] Earlier editions of this guide linked to them. Use vendor-maintained servers instead: GitHub's own server,[^github-mcp] Exa's,[^exa-mcp] Tavily's,[^tavily-mcp] and the Slack server now maintained by Zencoder.[^slack-mcp]
- **For OSINT data, prefer servers run by the data owner.** OpenSanctions ships an MCP server with its open-source client.[^opensanctions-oss] The popular Shodan MCP server is a community project under an MIT licence, not a Shodan product.[^shodan-mcp]
- **A connector is a new way for data to leave.** Each MCP server you add can read what the model reads and may send it elsewhere. [Part 4](#part-4-ai-agent-security-for-analysts) covers the attacks we have seen in the wild and the rules we follow.

### 2.4 Memory and temporary modes

Memory lets an assistant carry facts between chats. For OSINT that is a liability. A target's name from one case can surface in a chat about another. Memory also builds a profile of you, the analyst, that a breach or a discovery order could expose. And memory can be planted: a web page an agent reads can try to write into it.

| Assistant | Memory behaviour | How to avoid it |
| --- | --- | --- |
| ChatGPT | Saved memories, plus "reference chat history" across all past chats since April 2025. On by default where available.[^openai-memory] | Settings, Personalization, turn off both switches. Temporary Chat neither reads nor writes memory. |
| Claude | Memory rolled out to Team and Enterprise in September 2025 and to Pro and Max in October 2025. You can view, edit or pause it.[^claude-memory] | Incognito chats are kept out of history, memory and training. |
| Gemini | Saved info and past-chat recall are tied to "Keep Activity". Personal Intelligence connects Google apps, opt-in per app.[^gemini-personal] | Turn off Keep Activity and disconnect apps. Temporary Chats skip personalisation. |
| Grok | Memory launched in April 2025, not in the EU or UK. | Settings, Data Controls, turn off personalisation with memories. |

Our rule: case work happens in an incognito or temporary chat, or in a separate account with memory off, or on a local model.

### 2.5 Enterprise and no-training routes

The question we hear most often is "can I use a frontier model safely at all?" The answer is yes, if you buy it under business terms. Four routes:

- **The vendor's own business plans.** Claude Team and Enterprise, ChatGPT Enterprise, Edu and Business, and Microsoft 365 Copilot are all excluded from model training. They also give administrators audit logs and retention controls.
- **API access with zero data retention.** Anthropic, OpenAI and Google all offer API terms that exclude training. OpenAI's zero-data-retention option requires approval and is set per organisation or project.[^openai-data-controls]
- **Cloud marketplaces.** Amazon Bedrock, Google Vertex AI and Microsoft Foundry serve Claude, Gemini, Llama, Mistral and other models inside your own cloud account. You choose the region and your data is not used for training.[^vertex-data] This is the usual answer for government and regulated organisations.
- **Open weights you run yourself.** See [Part 3](#part-3-local-and-open-weight-models).

Cohere sells to this market too. Its Command A+ model was released as open weights under Apache 2.0 in May 2026, and its North product is a workspace for private deployments.[^cohere-command-a-plus]

### 2.6 Research and academic tools

| Tool | What it does | Cost | OSINT use |
| --- | --- | --- | --- |
| **Semantic Scholar** | AI-assisted search over academic papers with summaries | Free | Methodology and policy literature on trafficking and smuggling |
| **arXiv** | Preprints in computer science and other fields | Free | New detection methods and AI tools before they are peer reviewed |
| **SSRN** | Social science working papers | Free with paid extras | Economic and policy analysis of illicit markets |
| **ResearchGate** | Researcher network and paper sharing | Free | Finding and contacting authors |
| **Consensus** | Search engine that summarises what papers agree on | Free tier, paid plans | Quick checks of research consensus |
| **Elicit** | AI research assistant that extracts data from papers | Paid tiers; see site | Systematic reviews and evidence tables |
| **ResearchRabbit** and **Connected Papers** | Citation maps | Free tiers | Finding the literature around a key paper |
| **Scite** | Shows whether later papers support or contradict a claim | Paid | Source reliability checks |
| **NotebookLM** (Google) | Answers questions only from the sources you upload | Free with Google account; paid tiers | Reading large document sets with inline citations. Google's consumer data terms apply |

BloombergGPT (2023) was the first large language model trained on financial text and remains a useful reference paper on domain-specific models.[^bloomberggpt] Bloomberg's 2026 Terminal products use a mix of commercial and open-weight models.[^askb]

### A worked example with one vendor

This example uses Claude Research with MCP connectors. ChatGPT Deep Research with connectors or Gemini Deep Research with Google Workspace work the same way.

1. Open an incognito chat on a Team or Enterprise account, or on a Pro account with model training switched off.
2. Ask a public, non-identifying research question first. For example: "How do Chinese-flagged fishing fleets use transshipment at sea to move catch? Which ports in West Africa are named in recent reports?"
3. Let Research run. It takes five to fifteen minutes and returns a report with citations.
4. Open every citation. Mark each claim as confirmed, unconfirmed or wrong. Expect at least one wrong or missing citation per report.
5. Only then move to the case specifics. Do that part on a local model or an enterprise account, with the confirmed sources pasted in as context.

[↑ Back to top](#ai-enhanced-osint-a-practical-guide-for-illicit-trade-intelligence)

---

## Part 3: Local and open-weight models

<!-- last-reviewed: 2026-10-12 -->

A model whose weights you download and run on your own machine sends nothing anywhere. That makes local models the right default for anything that names a target, a source or a case. The quality gap with the big cloud models has narrowed a great deal since 2025. A 20 to 30 billion parameter model on a laptop with 32 GB of memory is now good enough for most OSINT tasks. That includes summarising documents, extracting entities, translating and drafting. For long multi-step research with web access, cloud models are still better. So we use local models for the sensitive parts and cloud models for the public parts.

### 3.1 Open-weight models in 2026

Most of the strongest open-weight models now come from Chinese labs, with OpenAI, Google, Mistral, IBM and NVIDIA also publishing weights. Meta started the open-weights movement with Llama. It moved to closed models in 2025 and 2026 and released only one open model, Muse Glimmer 30B, in August 2026.[^meta-avocado][^meta-glimmer] Llama 4 remains available, with a licence clause for companies above 700 million monthly users and an exclusion of EU users from its multimodal models.[^llama4-eu]

| Family | Publisher | Licence | Notes |
| --- | --- | --- | --- |
| **DeepSeek V4** (Preview April 2026, V4-Pro August 2026) | DeepSeek (China) | Open weights | Strong reasoning. The DeepSeek app and API store data in China, and the app is banned on government devices in Australia, Taiwan, Italy, South Korea, India and several US agencies.[^deepseek-v4][^deepseek-bans] The weights run locally are unaffected by any of that |
| **Qwen 3.8** (August 2026) | Alibaba (China) | Apache 2.0 for the 27B model | Our default local model for multilingual document work |
| **gpt-oss** 20B and 120B (August 2025) | OpenAI | Apache 2.0 | OpenAI's first open weights since 2019.[^gpt-oss] The 20B model runs on a 16 GB laptop |
| **Gemma 4** (April 2026) | Google | Apache 2.0 | Good small models for on-device work |
| **Mistral Large 3** (675B mixture of experts) and **Medium 3.5** (128B, April 2026) | Mistral AI (France) | Apache 2.0 for Large 3 | EU publisher. Medium 3.5 replaced the Magistral reasoning and Devstral coding lines[^mistral-changelog] |
| **IBM Granite 4.x** (4.0 October 2025, 4.1 April 2026, 4.2 August 2026, 3B to 30B) | IBM | Apache 2.0 | Enterprise-oriented small models with published training-data transparency. Granite Guardian adds safety and RAG groundedness checks. Granite-Docling (258M) converts PDFs and scans into structured text and is one of the better open tools for evidence processing[^granite] |
| **GLM-5.2** (June 2026) and **Kimi K3** (July 2026) | Zhipu and Moonshot (China) | Open weights | Large models for workstation or server use[^kimi-k3] |
| **Llama 4** and **Muse Glimmer 30B** | Meta | Llama licence | See note above |
| **NVIDIA Nemotron 3** | NVIDIA | Open weights | Tuned for NVIDIA hardware |

*Verified 2026-10-09. DeepSeek, gpt-oss, Granite, Kimi and Meta entries are footnoted. Dates for Qwen, Gemma, GLM and Nemotron come from release announcements we did not re-verify for this edition; check the model cards before you quote them.*

**Weights local, app or API abroad.** The same company can be green and red at once. Running DeepSeek or Qwen weights on your own hardware keeps your data on your hardware. Using the DeepSeek app or API sends it to servers in China under Chinese law. The decision matrix in the BLUF reflects that split.

### 3.2 Hardware tiers and model picks

| Your machine | Memory | What runs well | Our picks |
| --- | --- | --- | --- |
| Laptop | 16 to 32 GB | Models up to about 30B parameters at 4-bit quantisation | Qwen 3.8 27B, gpt-oss-20b, Gemma 4 26B, Granite 4.2 8B |
| Workstation (Apple Silicon Max or Ultra, or a 24 to 48 GB GPU) | 64 to 128 GB | Models up to about 120B | gpt-oss-120b, Mistral Medium 3.5, Granite 4.2 30B, NVIDIA Nemotron 3 Super |
| Server or multi-GPU box | 256 GB and up | Frontier-class mixture-of-experts models | DeepSeek V4-Pro, Mistral Large 3, GLM-5.2, Kimi K3 |

Apple Silicon machines with unified memory are the easiest way to run the 64 to 128 GB tier without building a GPU server. Quantised GGUF files are the common format. Hugging Face listed more than 210,000 GGUF model repositories on 9 October 2026.[^hf-gguf]

### 3.3 Runners

| Tool | What it is | Licence and cost | Watch out for |
| --- | --- | --- | --- |
| **Ollama** | Command line and desktop app that downloads and serves models. `ollama run hf.co/<org>/<model>` pulls any GGUF model from Hugging Face | Free, MIT | Since September 2025 Ollama also offers cloud models. Any model tag ending in `-cloud`, and anything that asks you to run `ollama signin`, runs on Ollama's servers, not your machine.[^ollama-cloud] For sensitive work use only tags without the suffix and never sign in |
| **LM Studio** | Desktop app with a chat window, model browser and local API server | Free, including for work since July 2025[^lmstudio-free] | Check that the local server is bound to localhost only |
| **llama.cpp** | The inference engine most of the above are built on | MIT | Command line; best for servers and automation |
| **Open WebUI** | Self-hosted chat interface with document upload and search | Open source with a branding clause above 50 users[^openwebui-license] | Runs as a web service; keep it on a private network |
| **Jan** | Desktop app that runs models offline | Apache 2.0 | |
| **AnythingLLM** | Desktop or server app that adds document collections and local search on top of any model | MIT | Good first step into the private search setup described in [Part 10.3](#103-private-search-over-investigation-corpora) |

A test we run on every new setup: unplug the network, run a query, and confirm it answers. If a tool needs a login or a connection to answer, it is not local.

[↑ Back to top](#ai-enhanced-osint-a-practical-guide-for-illicit-trade-intelligence)

---

## Part 4: AI-agent security for analysts

<!-- last-reviewed: 2026-10-12 -->

This Part is new in 2026 and we think it is the most important addition. When you ask an AI assistant to read a web page, a PDF, an email or a chat log, that content becomes part of the model's instructions. If the content was written by someone who wants to manipulate your tools, it can. OSINT analysts read adversary content for a living, so this risk applies to us more than to most users.

### 4.1 Indirect prompt injection and the lethal trifecta

Prompt injection is text inside the material you give a model that the model then follows as if it came from you. It can be visible or hidden (white text, tiny fonts, HTML comments, text inside images). No vendor has solved it. OpenAI's chief information security officer wrote in October 2025 that "prompt injection remains a frontier, unsolved security problem".[^atlas-ciso]

Simon Willison's "lethal trifecta" is the simplest way to reason about it.[^lethal-trifecta] An AI agent is dangerous when it has all three of:

1. access to private data (your email, files, case notes, credentials),
2. exposure to untrusted content (a web page, a document, a message from a target), and
3. a way to send data out (posting, emailing, calling an API, writing to a connector).

Remove any one of the three and the worst outcomes go away. For OSINT that usually means reading adversary content in a session that has no connectors, no memory and no outbound tools.

Two illustrations. First, the custom GPT ecosystem. A 2025 study of 14,904 custom GPTs found that more than 95 percent lacked adequate protections. Roleplay manipulation worked on 96.5 percent of them and system prompt leakage on 92.2 percent.[^custom-gpts] And agentic browsers, covered in 4.3.

### 4.2 MCP tool poisoning and supply chain

MCP connectors ([Part 2.3](#23-connectors-mcp-and-agent-modes)) add two further attack paths.

- **Tool poisoning.** The description of a tool is text the model reads. In April 2025 Invariant Labs showed that a malicious tool description could instruct a model to read a user's private files and send them out. They also showed that a server can change its descriptions after you have approved it, which they called a "rug pull". A demonstration against a WhatsApp connector exfiltrated message history.[^tool-poisoning]
- **Malicious or vulnerable servers.** In September 2025 a package on npm named `postmark-mcp` shipped a version that silently copied every email it sent to an attacker's address. It had been installed for months before Koi Security found it.[^postmark-mcp] The widely used `mcp-remote` proxy had a critical remote code execution flaw (CVE-2025-6514).[^mcp-remote-cve] Anthropic's own reference Git server had three injection flaws fixed in December 2025.[^git-mcp-cves] Several more incidents were reported in 2026.

The OWASP Top 10 for Agentic Applications (December 2025) is the reference list of these risks.[^owasp-agentic]

### 4.3 Agentic browsers

Every major vendor shipped a browser that lets an AI act on pages for you in 2025. The list includes Perplexity Comet, OpenAI Atlas, Claude in Chrome, Gemini in Chrome and Copilot Mode in Edge. They are useful for routine collection and dangerous on adversary sites.

- Brave's researchers showed in August 2025 that a Reddit comment hidden behind a spoiler tag could take over Comet's "summarise this page" feature. The hijacked agent opened the user's Gmail, read a one-time password and posted it back to the thread.[^comet-injection]
- OpenAI's Atlas launched in October 2025 with the warning quoted above and was retired in August 2026.[^atlas-ciso][^atlas-retired]
- Anthropic published its own red-team numbers for Claude in Chrome. In the August 2025 pilot, 23.6 percent of attacks succeeded without mitigations and 11.2 percent with them. The company reported much lower rates at general availability in 2026 but still describes the risk as "non-zero".[^claude-chrome]

### 4.4 Do and do not

#### Do

- Read adversary content in a session with no connectors, no memory and no outbound tools. A local model is ideal.
- Keep a separate browser profile, with no logged-in accounts, for any AI browser you use on untrusted sites.
- Install MCP servers only from the data owner's own repository or the official registry, pin the version, and re-review when tool descriptions change.
- Treat an AI summary of adversary content as possibly manipulated, not only as possibly wrong.
- Give agents the least access they need, and approve each action that sends data out.

#### Do not

- Do not run an agentic browser while logged in to your work email, case management system or password manager.
- Do not connect a case folder to an assistant that also browses the open web in the same session.
- Do not install an MCP server because a blog post recommended it. Check who publishes it.
- Do not paste a connector's output into another tool without reading it first.

[↑ Back to top](#ai-enhanced-osint-a-practical-guide-for-illicit-trade-intelligence)

---

## Part 5: OPSEC for AI-assisted OSINT

<!-- last-reviewed: 2026-10-12 -->

### 5.1 Principles and the Berkeley Protocol

Operational security in OSINT is a habit before it is a toolset. You gather information from public sources without revealing who you are, who you work for, what you are looking for, or how. AI tools add a new channel for all four to leak.

The Berkeley Protocol on Digital Open Source Investigations remains the reference standard. It was published by the UN Human Rights Office and the Human Rights Center at UC Berkeley. Its security chapter asks four things of investigators. Manage attribution so that nothing identifies you, your organisation, your sources or your intent. Expect to be observed and act consistently with your online persona. Work from secure environments. Keep personal and professional activity apart.[^berkeley] It was written in 2020 and has not been revised for the AI era, so the rest of this Part extends it.

### 5.2 Technical safeguards, identity and data handling

- **Network.** Use a VPN and, where it fits your threat model, Tor. Understand what each hides and from whom before you combine them.
- **Isolation.** Research in a virtual machine or a dedicated device. Keep a separate browser profile for each persona.
- **Personas.** Research accounts should be built and maintained with the same care as a real identity, and never mixed with your own.
- **Communications.** Use end-to-end encrypted messaging (Signal) and encrypted email (Proton Mail) with sources and colleagues.
- **Storage.** Keep findings local and encrypted. Decide a retention period and delete on schedule. Limit who can read the case.
- **Metadata.** Strip location and device data from anything you upload anywhere, including to an AI assistant.

### 5.3 Where your prompts go

Every prompt you send to a cloud assistant is stored somewhere, for some time, under some terms. Four things can happen to it.

**It can train the next model.** ChatGPT, Gemini, Le Chat and Grok consumer accounts use chats for training by default with an opt-out. Claude consumer accounts asked users to choose in 2025, with a five-year retention period for those who said yes. Even opted-out chats can be used if they are flagged for safety review.[^anthropic-terms][^anthropic-privacy] Enterprise and API accounts at all these vendors are excluded. [Part 2.1](#21-comparison-table) has the detail.

**It can be kept for years.** Default retention starts at 30 days for deleted chats at most vendors. It runs to 18 months for Gemini's Keep Activity, three years for Gemini chats sampled for human review, and five years for Claude chats used for training.[^gemini-privacy][^anthropic-retention]

**It can be produced in court.** The 2025 OpenAI preservation order covered Free, Plus, Pro and Team accounts and API customers without zero-data-retention terms. Users in the EEA, UK and Switzerland were exempt, as were Enterprise and Edu customers. The order ran from 13 May to 26 September 2025 and was formally terminated on 9 October 2025. Everything preserved during that window remains available to the plaintiffs, and 20 million de-identified conversations were ordered produced.[^nyt-order][^nyt-order-end][^nyt-20m] This was civil discovery between private parties, not government surveillance, and it is the kind of thing that can happen to any vendor.

**It can end up on the open web.** In July 2025 more than 4,500 ChatGPT conversations that users had marked "discoverable" appeared in Google results.[^chatgpt-indexed] In August 2025 hundreds of thousands of shared Grok chats were indexed the same way.[^grok-indexed] In June 2025 the Meta AI app's Discover feed showed users' conversations in public without many of them realising.[^meta-discover]

There is no professional privilege for any of this. As OpenAI's chief executive put it, "we haven't figured that out yet".[^altman-privilege]

Government purchase of commercially available data, including data brokers' records, remains a live concern in the United States. The Fourth Amendment Is Not For Sale Act passed the House in April 2024 and has not become law.[^fisa-702]

### 5.4 Recommendations

1. Put anything that identifies a target, a source or a case on a local model or an enterprise account. Everything else is optional; this is not.
2. On consumer accounts, turn model training off, turn memory off, and use temporary or incognito chats for case work.
3. Use a case-dedicated account for cloud assistants rather than rotating your personal account.
4. Anonymise before you paste. Replace names, vessel identifiers and company numbers with placeholders and keep the key offline.
5. Write generic queries. "How do shell companies in jurisdiction X typically layer ownership" rather than "is Company Y a shell".
6. Assume permanence. If you would not want a prompt read aloud in court, do not send it to a cloud service.

[↑ Back to top](#ai-enhanced-osint-a-practical-guide-for-illicit-trade-intelligence)

---

## Part 6: Analytic tradecraft: hallucination, verification and provenance

<!-- last-reviewed: 2026-10-12 -->

Language models produce fluent text whether or not the facts behind it exist. Deep research modes have reduced the rate of invented citations, but not to zero. The failures are hardest to spot in exactly the places where you know least. Three facts frame how we work:

- Damien Charlotin's database of court decisions involving fabricated AI citations grew from 87 cases in May 2025 to about 2,028 in September 2026.[^charlotin] Lawyers are paid to check sources and still file invented ones.
- In 2025 Anthropic disrupted a state-sponsored espionage campaign that had used its models to run most of the intrusion work. It reported that the model "frequently overstated findings and occasionally fabricated data", including credentials that did not work.[^anthropic-espionage] If attackers' AI invents evidence, so will yours.
- Bellingcat's 2025 geolocation tests found that models presented wrong answers with the same confidence as right ones.[^bellingcat-geo]

### How we use AI output

1. **AI output is never a source.** A fact enters a report only with a primary source we have opened. That means the document, the registry entry, the image or the post itself. The model's role is to find candidates and draft prose.
2. **Open every citation.** In a deep research report, click every link and read the passage. Mark each claim confirmed, unconfirmed or wrong. Keep the marked-up report in the case file.
3. **Two independent sources for anything that matters.** A second AI tool is not a second source.
4. **Record provenance at collection time.** URL, date and time, an archived copy (the Wayback Machine or a local capture), and a hash for files. Do this before analysis, not after.
5. **Keep a prompt log.** Save the prompts and the model and version you used. If a finding is challenged you need to be able to show how you got there.
6. **Label AI assistance in the product.** Say which parts were drafted or translated with a model and which were checked by a person.
7. **Use structured techniques.** Analysis of competing hypotheses and a key assumptions check catch the confident-but-wrong answer better than rereading does. Use consistent words for confidence (for example the probability language in the US intelligence community's analytic standards) so readers know how sure you are.
8. **Watch for manipulated summaries, not only wrong ones.** If the source material came from an adversary, [Part 4](#part-4-ai-agent-security-for-analysts) applies.

### What models are good at

Used this way, assistants earn their place. They translate quickly and well across most languages we meet in trade work. They extract entities, dates and amounts from long documents. They summarise a 200-page tender or a court file so you know where to read. They draft the first version of a report. They help you think through a hypothesis by arguing the other side. None of that needs the model to be right about the world. It needs you to be.

[↑ Back to top](#ai-enhanced-osint-a-practical-guide-for-illicit-trade-intelligence)

---

## Part 7: Synthetic media, verification and AI geolocation

<!-- last-reviewed: 2026-10-12 -->

### 7.1 Generators, and what provenance marks can and cannot tell you

Convincing synthetic video and imagery became a consumer product in 2025. OpenAI's Sora 2 app (September 2025) lets users insert real people as "cameos" and went viral within days with fabricated clips of public figures.[^sora2] Google's Veo 3 and 3.1 produce video with synchronised audio. Google's "Nano Banana" image models (August 2025, with a Pro version in November 2025) edit photographs on instruction while keeping faces consistent. xAI's Grok Imagine generated sexualised images of real people in January 2026 and triggered regulatory action in several countries ([Part 2.1](#21-comparison-table)).

Two provenance systems try to label this content at the source.

- **C2PA Content Credentials** attach signed metadata about how a file was made and edited. Google's Pixel 10 (September 2025) was the first phone to sign every photo at capture.[^pixel-c2pa] Sora 2 output carries C2PA metadata and a visible moving watermark. OpenAI itself notes that the metadata "can easily be removed".[^sora2]
- **SynthID** is Google's invisible watermark. Since November 2025 the Gemini app can tell you whether an image or video carries a SynthID mark. It only detects Google's own output.[^synthid-gemini]

Both help when they are present. Neither proves anything when absent. Screenshots, re-encodes and most social platforms strip metadata, so a file with no credentials is the normal case, not a red flag.

### 7.2 Detection tools and how far to trust them

Automated detectors do much worse in the wild than on benchmarks. The Deepfake-Eval-2024 study collected real circulating deepfakes rather than lab samples. It found that open-source detectors' accuracy (AUC) fell by roughly 45 to 50 percent compared with academic test sets. Commercial detectors did better but stayed below trained human forensic analysts.[^deepfake-eval] TrueMedia.org, the best known free detector for journalists, shut its hosted service in January 2025 and open-sourced its models. A revival under Georgetown University was reported later that year.[^truemedia]

So we treat detectors as one signal among several and verify the way journalists do. The Global Investigative Journalism Network's Reporter's Guide to Detecting AI-Generated Content (September 2025, updated March 2026) is the best current walkthrough.[^gijn-ai] In short:

1. **Provenance first.** Who posted it, when, and where did it first appear? Reverse image search and archive lookups answer more cases than forensics does.
2. **Context second.** Does the weather, the shadows, the signage, the language on the signs, the vehicles match the claimed place and time?
3. **Forensics third.** Run a detector, and read its confidence as a hint. Look at hands, teeth, text, reflections and edges yourself.
4. **Audio counts.** Voice cloning is now routine in fraud. In May 2025 the FBI warned of AI voice messages impersonating senior US officials. In July 2025 someone used an AI voice of the US Secretary of State to contact foreign ministers over Signal.[^fbi-voice][^rubio]

### 7.3 AI geolocation

In April 2025 users noticed that OpenAI's reasoning models could identify where a photograph was taken from background details alone. They were often right to the city and sometimes to the street. Bellingcat tested the leading models in August 2025 on 20 images. Google's AI Mode did best and GPT-5 did worse than the earlier o4-mini. All of them hallucinated locations with full confidence some of the time.[^bellingcat-geo] An academic benchmark put o3 at roughly 60 percent city-level accuracy on one dataset.[^imageo-bench] GeoSpy, a dedicated geolocation service, closed public access in January 2025 after reporting showed stalkers were using it. It now sells only to law enforcement and enterprise under the name Raven.[^geospy]

For investigators this cuts two ways. It is a useful first pass on an image before you do the work by hand. And it means anyone can do the same to photographs of you, your colleagues and your sources. Stripping metadata is no longer enough. The background is the metadata.

[↑ Back to top](#ai-enhanced-osint-a-practical-guide-for-illicit-trade-intelligence)

---

## Part 8: Adversarial use of AI by illicit networks

<!-- last-reviewed: 2026-10-12 -->

The people we investigate have the same tools. Since 2025 the AI vendors themselves have published detailed accounts of what they see, and those reports are the best open sources on the subject.

- **Anthropic, August 2025.** One actor used Claude Code to run extortion attacks against at least 17 organisations, with ransom demands above 500,000 dollars. The company called it "vibe hacking". North Korean operators used the model to pass technical interviews and hold remote jobs at Fortune 500 companies. A seller with little technical skill offered ransomware built with AI for 400 to 1,200 dollars.[^anthropic-misuse-aug25]
- **Anthropic, November 2025.** A group the company assessed as Chinese state-sponsored used Claude Code to run roughly 80 to 90 percent of a campaign against about 30 targets. Humans intervened at only a handful of decision points. A small number of intrusions succeeded. The model also overstated its results and invented credentials, which slowed the attackers down.[^anthropic-espionage]
- **Anthropic, September 2026.** The company's latest report groups misuse into seven areas, including surveillance and the distillation of its models by other labs.[^anthropic-threat-sep26]
- **OpenAI** publishes periodic reports on the networks it disrupts, including influence operations and scam operations.[^openai-malicious]
- **Google Threat Intelligence Group, November 2025.** Documented malware that calls Gemini at run time to rewrite itself and to generate commands, which GTIG named PROMPTFLUX and PROMPTSTEAL.[^gtig]

For illicit trade the pattern is simple. AI lowers the skill needed to forge documents and to write convincing correspondence in any language. It lets small groups run romance and investment scams at scale. It clones a voice for a payment-approval call. It produces the identity documents and selfies that defeat remote onboarding checks. Europol's EU-SOCTA 2025 and UNODC's reporting on scam compounds in Southeast Asia are the best starting points for the organised-crime view. We have not verified their figures for this edition, so we do not quote them.

A note on one new category. TypeSafe AI's Jev (September 2026) is a non-generative "decision model" that returns typed classifications rather than text, which could matter for triage at scale. It is available only by waitlist, and its speed and accuracy figures are the vendor's own. We list it as something to watch rather than something to use.

[↑ Back to top](#ai-enhanced-osint-a-practical-guide-for-illicit-trade-intelligence)

---

## Part 9: OSINT platforms and data sources

<!-- last-reviewed: 2026-10-12 -->

This Part replaces six separate vendor sections from earlier editions. We have removed tools that no longer exist, corrected owners and names, and dropped prices we could not confirm. [Appendix A](#appendix-a-renamed-acquired-or-discontinued-2022-to-2026) lists everything that was renamed, bought or shut down. Most platforms here are account-bound services that log your queries, which is a compliance feature for their customers and a consideration for you. Where a platform processes your data with AI we say so; where it does not say what model it uses, we say that too.

### 9.1 Professional OSINT tools

| Tool | What it does | Pricing (October 2026) | Data and OPSEC notes |
| --- | --- | --- | --- |
| **Maltego** | Link analysis and graphing with transforms to many data sources. Now includes Hunchly (web capture), Monitor and Evidence | Basic free with 200 credits a month. Entry €3,000 a year. Professional €7,500 a year for up to five users. Enterprise on request. Billed yearly in euros[^maltego-pricing] | Hunchly joined Maltego in May 2025.[^maltego-hunchly] The AI Assistant is opt-in and asks before critical actions[^maltego-ai] |
| **Shodan** | Search engine for internet-connected devices and services | Membership $49 one-time. API plans: Freelancer $69, Small Business $359, Corporate $1,099 a month[^shodan-pricing] | Account-bound. The community Shodan MCP server is not a Shodan product[^shodan-mcp] |
| **Censys** | Internet-wide host and certificate search | Free with 100 credits a month. Starter is pay-as-you-go from 500 credits[^censys-pricing] | Credit-based since 2025 |
| **Intelligence X** | Search over leaks, darknet, document archives and historical records | Researcher €2,500 a year. API €7,000. Identity Portal €10,000. Enterprise €20,000. Free tier and trial[^intelx-pricing] | Account-bound; sensitive queries are logged like any SaaS |
| **Lampyre** | Automated data correlation from an email, phone or name | Trial $5. Lampyre 100 at $8 a month. Lampyre 1000 at $77. PLUS from $116 a month; the desktop app comes only with PLUS[^lampyre-pricing] | Earlier editions listed a "$32 standard" plan that does not exist |
| **OSINT Industries** | Email and phone enrichment across platforms | Basic £19 a month (30 credits). Intermediate £49. Advanced £99. Enterprise on request[^osint-industries-pricing] | |
| **Epieos** | Email and phone footprint lookups | Free tier. Osinter €29.99 a month[^epieos-pricing] | |
| **SpiderFoot** | Open-source automated reconnaissance | Free, open source. The commercial SpiderFoot HX is part of Intel 471 | Intel 471 acquired SpiderFoot in November 2022.[^spiderfoot] The open-source project still gets commits but its last tagged release is v4.0 from April 2022. Expect broken modules |
| **Babel Street** | Multilingual search and monitoring for government and enterprise | Enterprise on request | AI-heavy platform; government customer base |
| **Social Links** (SL Crimewall) | Investigation workbench across social, darknet and blockchain sources | Enterprise on request | AI and natural language processing throughout.[^social-links] Hosted service |
| **ShadowDragon** (Horizon) | Social media and identity investigation platform | Enterprise on request | Multilingual since February 2025[^shadowdragon] |
| **Blackdot Videris** | Investigation platform for corporate and financial crime | Enterprise on request | AI features are optional. Hosted on AWS in the UK and EU[^blackdot] |
| **Skopenow** | Identity and background investigation platform | Enterprise on request | |
| **Cylect AI** | Portal that wraps several hundred OSINT tools with an AI layer | Community free. Personal $15 a month. Professional $55 a month or a $5 day pass[^cylect] | Small vendor. Does not disclose which AI provider processes your queries, so treat it as `T🔴 R🟡 D🔴 Q🟡` |

*Verified 2026-10-09 against vendor pages. Prices change. Check before you buy.*

### 9.2 Free structured data for illicit trade investigation

These are the sources we use first. They are free or have free tiers and they publish their methods. Several can be downloaded and queried locally, which keeps your targets off anyone's logs.

| Source | What it holds | Access | Notes |
| --- | --- | --- | --- |
| **OpenSanctions** | Consolidated sanctions, politically exposed persons and watchlists from hundreds of sources | Free for non-commercial use. API €0.10 per search or match; entity lookups free. Bulk download available[^opensanctions-pricing] | Open-source client includes an MCP server.[^opensanctions-oss] Download the data and screen locally for sensitive cases |
| **OpenCorporates** | Company registry records from most jurisdictions | Web search free. API from £2,250 a year. Free API access for public-benefit users on application[^opencorporates-pricing] | |
| **ICIJ Offshore Leaks Database** | Entities from the Panama Papers, Pandora Papers and other leaks | Free | |
| **OCCRP Aleph** | Documents and datasets from investigative journalism, including company and court records | Free account; some datasets restricted to vetted users | |
| **GLEIF** | Legal Entity Identifier records with parent relationships | Free | Useful for untangling group structures in trade finance |
| **ImportYeti** | US sea import bills of lading, searchable by company | Free search with limits; paid tiers | Covers sea freight into the US only |
| **UN Comtrade** and **ITC Trade Map** | International trade statistics by product, country and year | Free registration, with limits that depend on your user category | Aggregate statistics, not shipments. Good for spotting mirror-data gaps |

*Verified 2026-10-12 for existence and access model.*

### 9.3 Platform and data access is shrinking

Several collection methods that OSINT courses still teach no longer work or now cost money.

- **X (Twitter).** TweetDeck became the paid X Pro in 2023. The API moved to pay-per-use pricing in 2026, at $0.005 per post read and $0.010 per user read with a monthly cap. The old free and basic tiers have closed.[^x-api] Grok remains the main way to search X conversationally, with the data terms described in [Part 2.1](#21-comparison-table).
- **Meta.** CrowdTangle shut down in August 2024. Its replacement, the Meta Content Library, is open to approved academic and non-profit researchers only.
- **Search APIs.** Microsoft retired the Bing Search APIs on 11 August 2025. It points developers to "Grounding with Bing" inside Azure agents, which does not return raw results.[^bing-retire] Google has announced the closure of the Custom Search JSON API on 1 January 2027.[^google-cse]
- **Search APIs for tool builders.** Brave ended its free Search API tier for new users in February 2026 and charges about $5 per 1,000 queries.[^brave-api] Tavily gives 1,000 free credits a month.[^tavily-pricing] Exa charges about 7 US dollars per 1,000 queries.[^exa-pricing]
- **Telegram.** Since September 2024 Telegram's privacy policy says it may share a user's IP address and phone number with authorities on a valid request. That changed its standing both as a collection target and as a tool.[^telegram-privacy]
- **Reddit, TikTok and others** now gate research access behind application processes and licences.

The practical answer is to budget for data and to build on the free structured sources in 9.2. Archive what you collect, because you may not be able to collect it again.

### 9.4 Geospatial intelligence

| Tool | What it does | Cost | Notes |
| --- | --- | --- | --- |
| **Copernicus Browser** | Sentinel satellite imagery, current and historical | Free account | Replaced Sentinel Hub's EO Browser, which Planet shut down on 20 March 2026[^eo-browser] |
| **Google Earth Pro** (desktop) | Historical imagery, measurement, KML | Free | A Google account is optional for the desktop app |
| **QGIS** | Open-source GIS for your own analysis | Free | Everything stays local |
| **OpenStreetMap** | Community map data, downloadable | Free | |
| **SunCalc** | Sun position and shadow length for a place and time | Free | For dating and timing images |
| **PeakVisor** | Mountain and skyline matching | Free tier | For geolocating mountain scenery |
| **Planet** | Daily commercial satellite imagery and the Insights Platform | Paid | Also owns Sentinel Hub's APIs |
| **Vantor** (formerly Maxar Intelligence) | High-resolution commercial imagery (WorldView, GeoEye) and the TensorGlobe AI platform | Government and enterprise | Maxar split into Vantor and Lanteris in October 2025[^maxar-vantor] |

For AI geolocation of photographs see [Part 7.3](#73-ai-geolocation). Physical security monitoring platforms (Dataminr, Liferaft) are in 9.6.

### 9.5 Corporate, supply chain, trade, sanctions and blockchain

| Platform | What it does | Access | Notes (October 2026) |
| --- | --- | --- | --- |
| **Sayari** | Corporate ownership, trade and sanctions graph | Enterprise | Acquired Mirato in 2025; Sayari Map was folded into Sayari Graph[^sayari] |
| **Kharon** | Sanctions and export-control risk research | Enterprise | US Treasury contract since 2024 |
| **LSEG World-Check** (formerly Refinitiv) | Sanctions, PEP and adverse media screening | Enterprise | World-Check On Demand launched September 2025[^world-check] |
| **Dow Jones Risk and Compliance** | Screening and due diligence | Enterprise | RiskCenter uses AI for screening; Integrity Check uses Xapien for automated due diligence |
| **Thomson Reuters CLEAR** | Public records and identity research (US) | Enterprise | CLEAR Investigate agentic AI launched 2026[^clear] |
| **LexisNexis Risk Solutions** | Identity, fraud and financial-crime compliance | Enterprise | Includes the former Accuity products (Firco, Bankers Almanac), merged in 2021.[^accuity] Earlier editions wrongly listed Accuity under Fiserv |
| **Moody's Orbis** (formerly Bureau van Dijk) | Private company financials and ownership | Subscription | |
| **S&P Capital IQ Pro** and **Panjiva Supply Chain Intelligence** | Company data and bill-of-lading trade data | Subscription | Panjiva is still a live S&P Global brand[^panjiva] |
| **Descartes Datamyne** (formerly Zepol) | Trade data | Subscription | Zepol was bought by Datamyne in 2015 and Datamyne by Descartes in 2016[^zepol] |
| **ImportGenius** | US and international trade data | Subscription | |

| Blockchain platform | Access | Notes |
| --- | --- | --- |
| **Chainalysis** (Reactor) | Enterprise; no public price | Law enforcement and compliance standard |
| **Elliptic** | Enterprise | |
| **TRM Labs** | Enterprise | Reported $2 billion valuation in September 2026 |
| **Crystal Intelligence** (formerly Crystal Blockchain) | Enterprise | Renamed 2024[^crystal] |
| **Arkham Intel** | Free for individuals with an account | Labelled entities and tracing across chains |
| **Breadcrumbs** | Free entry tier, paid plans | Transaction visualisation |
| **MetaSleuth**, block explorers (Etherscan, Blockchair) | Free | First look at an address |

CipherTrace, listed in earlier editions, was discontinued by Mastercard in March 2024.[^ciphertrace] Bank transaction-monitoring systems (NICE Actimize, SAS, FICO Falcon, SymphonyAI NetReveal) are not OSINT tools and have moved to [Appendix A](#appendix-a-renamed-acquired-or-discontinued-2022-to-2026).

*Verified 2026-10-09. Enterprise prices are not public; earlier editions' price ranges were estimates and have been removed.*

### 9.6 Enterprise intelligence and investigation platforms

These platforms log every analyst query by design. That is what their customers' compliance teams want, and it is why they rate `Q🔴` in our rubric even when their data protection is excellent. Choose them for institutional investigations; do not use them for anything you need to keep from your own organisation.

| Platform | Owner (2026) | What it does | Notes |
| --- | --- | --- | --- |
| **i2 Analyst's Notebook** | i2 Group (Harris Computer, since January 2022) | Link and timeline analysis, on-premises option | Earlier editions listed it as an IBM product[^i2] |
| **Palantir Gotham, Foundry and AIP** | Palantir | Data integration and analysis; AIP runs language models and agents inside both platforms[^palantir] | `T🟢 R🟡 D🟡 Q🔴`. Government and large enterprise only |
| **Cognyte** | Spun out of Verint in 2021 | Intelligence analytics for government | Earlier editions said "Verint OSINT"; Verint is now a customer-experience company[^cognyte] |
| **PenLink Tangles** (formerly Cobwebs) | PenLink | Web intelligence | Merged in 2023 |
| **Babel Street Insights** | Babel Street | Multilingual monitoring | |
| **Recorded Future** | Mastercard (since December 2024)[^recorded-future] | Threat intelligence | |
| **Flashpoint Ignite** | Flashpoint | Threat and physical security intelligence; absorbed Echosec in 2022[^echosec] | |
| **Intel 471** (Verity471) | Intel 471 | Underground economy intelligence; owns SpiderFoot HX and Cyborg Security | |
| **Cybersixgill** | Bitsight (since December 2024)[^cybersixgill] | Dark web intelligence | |
| **ReliaQuest GreyMatter** | ReliaQuest | Digital risk protection; absorbed Digital Shadows in 2022[^digital-shadows] | |
| **Flare** | Flare | Exposure and dark web monitoring | Raised $60 million across 2025 |
| **Dataminr Pulse** | Dataminr | Real-time event detection from public data; acquired ThreatConnect in 2025 | Heavy AI classification; cloud only |
| **Liferaft Navigator** | Securitas (since March 2026)[^liferaft] | Physical security threat intelligence | |
| **Fivecast ONYX** | Fivecast | AI-driven OSINT for government | US immigration and customs contracts |
| **Siren** | Siren | Investigation platform marketed as "sovereign AI" | Deployable on your own infrastructure |
| **Nuix** with **Linkurious** | Nuix (acquired Linkurious in April 2026)[^linkurious] | Document processing and graph visualisation | |
| **Kaseware** with **OSINT Combine** | Kaseware (merged November 2025)[^osint-combine] | Case management and OSINT | |
| **Vortimo** | Vortimo | Browser extension that captures and links what you read | From the founder of Paterva, Maltego's original developer |

*Verified 2026-10-09. We removed the marketing text that earlier editions carried about these platforms. They are expensive, they are good at what they do, and none of them is "essential". Most illicit trade investigations we know of were done with the free sources in 9.2 and one or two paid tools.*

[↑ Back to top](#ai-enhanced-osint-a-practical-guide-for-illicit-trade-intelligence)

---

## Part 10: Automation and agentic coding for OSINT

<!-- last-reviewed: 2026-10-12 -->

Most investigators now write small scripts. A scraper for a registry. A screen of a supplier list against OpenSanctions. A notebook that joins trade data to company records. AI coding agents make that work much faster. They also read everything you show them, so the same rules apply as for chat assistants. The rubric for a coding tool follows the model behind it and the account you use.

### 10.1 Agentic coding tools

| Tool | What it is | Pricing (October 2026) | Where your code goes |
| --- | --- | --- | --- |
| **Claude Code** (Anthropic) | Terminal and IDE agent that reads, edits and runs code | Included with Pro, Max, Team and Enterprise; also via the API, Bedrock, Vertex AI and Foundry[^claude-pricing] | On Free, Pro and Max accounts, sessions fall under the consumer training setting ([Part 2.1](#21-comparison-table)). Team, Enterprise and API are excluded from training |
| **OpenAI Codex** | Cloud sandboxes plus a command-line agent | Included with ChatGPT plans | Follows the ChatGPT plan's data terms; Enterprise and zero-retention API exclude training |
| **Gemini CLI** (Google) | Open-source terminal agent | Free tier with a Google account; paid via Vertex AI or AI plans | Consumer use follows Gemini's terms; Vertex AI does not train on your data |
| **Cursor** | AI-first code editor | Hobby free. Pro $20. Pro+ about $60. Ultra about $200. Teams $40 a user[^cursor-pricing] | Privacy Mode stops Cursor and its model providers training on your code. SpaceX exercised an option to buy Cursor's parent company in June 2026; reports differ on whether the deal has closed |
| **Cline** | Open-source agent extension for VS Code | Free, Apache 2.0. Teams about $20 a user | Sends code and prompts to whichever model API you configure. Pointed at a local Ollama model it is fully local; pointed at a cloud API it inherits that vendor's terms |
| **GitHub Copilot** | Code completion and agents in the IDE and on GitHub | Free. Pro $10. Pro+ $39. Max $100. Business $19 and Enterprise $39 a user. Usage billed in AI credits since June 2026[^copilot-plans] | Business and Enterprise exclude training; individual plans have an opt-out |
| **Replit** | Browser-based development environment with an agent | Core $20 a month. Pro $100[^replit-pricing] | Everything runs and is stored on Replit's cloud |

*Verified 2026-10-09. Continue.dev, which earlier editions recommended, was acquired by Cursor in June 2026 and wound down; its cloud data was deleted after 15 July 2026.[^continue-dev]*

How we use them safely:

- Generic variable names and comments. The code can describe a technique without naming a target.
- No case data in prompts or test fixtures. Use synthetic examples.
- Read every line the agent wrote before running it, and run it in a virtual machine or container.
- Keep secrets in environment variables the agent cannot read.

### 10.2 Workflow automation

| Platform | Pricing (October 2026) | AI in the product | Our view |
| --- | --- | --- | --- |
| **n8n** | Self-hosted is free under the Sustainable Use licence. Cloud Starter €20 a month, Pro €50, Business €667[^n8n-pricing] | Seventy or more AI nodes, including an AI Agent node that can call any model[^n8n-ai] | Our default. Self-host it and point its AI nodes at a local model. Licensed self-hosted editions contact a licence server daily and send telemetry by default; turn both off. Earlier editions said n8n had "no AI", which is wrong |
| **Zapier** | Free with 100 tasks a month. Professional $19.99 a month billed yearly. Team $69[^zapier-pricing] | AI agents, Copilot, chatbots and an MCP server | Cloud only; everything passes through Zapier |
| **Microsoft Power Automate** | Premium about $15 a user a month | Copilot throughout; administrators can restrict it | Fine inside a Microsoft 365 tenant you control |
| **IFTTT** | Pro about $3 to $5 a month | Little | Simple triggers only |
| **Airtable** | Team $20 an editor a month billed yearly ($24 monthly). Business $45 ($54) | AI fields and summaries | Cloud database; keep case data out |
| **Notion** | Plus about $10 to $12 a month. Business about $20 to $24[^notion-pricing] | Notion AI is included only from the Business plan up; Enterprise adds zero data retention with model providers | Good for course notes, not for case files |

We use self-hosted alternatives where we can. **Obsidian** for notes: free, including at work, since February 2025, with an optional $50 commercial licence.[^obsidian] **Baserow** (MIT core) or **NocoDB** (moved to a Sustainable Use licence in January 2026) instead of Airtable. **n8n** instead of Zapier.

### 10.3 Private search over investigation corpora

Once a case has a few hundred documents, you want to ask questions across all of them. The usual pattern is retrieval-augmented generation (RAG). You split documents into chunks and turn each chunk into an embedding, a numeric fingerprint of its meaning. You store the embeddings in a vector database. When you ask a question, the system retrieves the closest chunks and hands them to a model along with your question. The model never needs the whole corpus, and if the model is local nothing leaves your machine.

One rule covers the OPSEC. **An embedding API is a data channel like any other.** Sending a document to a cloud embedding service exposes it in the same way as sending it to a cloud chat model. For sensitive corpora, embed locally.

| Layer | Cloud options | Local options |
| --- | --- | --- |
| Embeddings | **Voyage AI** (owned by MongoDB; the voyage-4 family launched January 2026).[^voyage-4] MongoDB's documentation says data sent to its Atlas embedding API may be used to improve Voyage models unless an organisation administrator opts out, and we found no zero-retention option.[^voyage-training] **OpenAI** text-embedding-3, **Cohere** Embed, **Gemini** Embedding, **Mistral** Embed, each under that vendor's API terms | **nomic-embed-text**, **BGE-M3** (multilingual), **Qwen3-Embedding**, **EmbeddingGemma** (Google, on-device), **IBM Granite Embedding**, **jina-embeddings-v4** (text and images). All run through Ollama, LM Studio or a Python library |
| Vector store | Managed services from the database vendors | **pgvector** (inside PostgreSQL), **Qdrant**, **Chroma**, **LanceDB**, **sqlite-vec** (a single file) |
| Reranking | Voyage and Cohere rerankers | Open rerankers from BGE and others |
| Document conversion | Vendor OCR APIs | **Docling** and **Granite-Docling** (IBM, open source) for PDFs, scans and tables[^granite] |
| Groundedness check | Vendor guardrail APIs | **Granite Guardian** can check whether an answer is supported by the retrieved text[^granite] |

A minimal local setup needs four pieces. Docling converts the files. A local embedding model runs through Ollama. sqlite-vec or Chroma holds the vectors. A 20 to 30 billion parameter local model answers. AnythingLLM and Open WebUI ([Part 3.3](#33-runners)) package most of this behind a user interface. Whatever you build, keep the retrieved passages visible in every answer so the analyst can check them, and never let the model answer from memory alone.

*Model and product names verified 2026-10-12 for existence; test any of them on your own documents before you trust them.*

### 10.4 Safe development checklist

1. Develop in a virtual machine or container, with a local Git repository.
2. Use AI coding tools on an account whose terms you have read. Prefer a local model or an enterprise account for anything that touches case data.
3. Never include real targets, identifiers or credentials in prompts, code, comments or test data.
4. Review all generated code. Pay attention to anything that makes a network request.
5. Respect rate limits and terms of service for the sites you collect from. Automated collection can breach a site's terms and, in some jurisdictions, the law.
6. Encrypt data at rest, log access, and back up securely.

[↑ Back to top](#ai-enhanced-osint-a-practical-guide-for-illicit-trade-intelligence)

---

## Part 11: Legal and regulatory changes, 2025 to 2026

<!-- last-reviewed: 2026-10-12 -->

We are not lawyers, and the law here changes by the month. This Part lists the developments since 2025 that an OSINT practitioner should know about, with sources, so you can take the right questions to counsel.

### European Union

- **AI Act prohibitions in force.** Since 2 February 2025 the AI Act bans untargeted scraping of facial images from the internet or CCTV to build facial recognition databases. It also bans emotion recognition in workplaces and schools. The Commission's guidelines narrow the scraping ban to databases used to recognise people, and the law-enforcement exception is tied to specific investigations.[^ai-act-guidelines] Obligations for general-purpose AI providers applied from 2 August 2025.
- **Deadlines moved.** The "Digital Omnibus on AI", adopted in mid-2026, pushed back the main high-risk obligations. Stand-alone systems now have until 2 December 2027 and AI embedded in regulated products until 2 August 2028. The requirement to mark AI-generated content under Article 50 applies from 2 December 2026.[^ai-omnibus]
- **GDPR enforcement against scraping and facial recognition.** The Dutch regulator fined Clearview AI €30.5 million in September 2024. Clearview lost its UK jurisdiction appeal in October 2025. The privacy group noyb filed a criminal complaint against Clearview's executives in Austria the same month.[^clearview-nl][^clearview-noyb] The signal for OSINT is clear: face search over scraped images is now a legal exposure in Europe, whoever runs the service.
- **GDPR and AI training.** Meta began training on EU users' public posts on 27 May 2025 after a German court declined to stop it.[^meta-eu-training] Italy's €15 million fine against OpenAI (December 2024) was overturned by a Rome court in March 2026, so do not cite it as standing.[^openai-italy]

### United Kingdom

- The **Data (Use and Access) Act 2025** received Royal Assent on 19 June 2025. Its main data-protection changes, including new rules on automated decision-making, took effect on 5 February 2026.[^uk-dua]
- **Online Safety Act** enforcement began in earnest in 2026, with Ofcom issuing its first fines. Ofcom also opened an investigation into X over Grok's image generation in January 2026.[^grok-imagine]

### United States

- About 20 US states now have general consumer privacy laws in force. Colorado repealed and re-enacted its AI Act in May 2026 with a narrower scope, effective 1 January 2027.[^colorado-ai] California's SB 53 (frontier model transparency) took effect on 1 January 2026.
- **Executive Order 14365** (December 2025) set up a Justice Department task force to challenge state AI laws. It does not by itself invalidate any state law.[^eo-14365]
- **Commercial data purchases.** The Fourth Amendment Is Not For Sale Act passed the House in April 2024 and has not become law. FISA Section 702 lapsed in June 2026 after reauthorisation failed in the Senate.[^fisa-702]
- **Chat logs as evidence.** [Part 5.3](#53-where-your-prompts-go) covers the OpenAI preservation order and the production of 20 million conversations. There is no privilege for what you tell a chatbot.
- **AI-generated evidence.** A proposed Federal Rule of Evidence 707 on machine-generated evidence was published for comment in 2025. In May 2026 the Advisory Committee declined to advance it and scheduled a conference for 15 October 2026. A separate proposal on authenticating suspected deepfakes is on its own track.[^fre-707] Courts have sanctioned lawyers in more than 2,000 cases for fabricated AI citations.[^charlotin]

### Standards and guidance

- The **Berkeley Protocol** remains the reference for lawful, ethical open source investigation. It has not been revised since 2020 and does not address AI.[^berkeley]
- GIJN's guide to detecting AI-generated content ([Part 7](#part-7-synthetic-media-verification-and-ai-geolocation)) is the most current practitioner guidance we know of.[^gijn-ai]
- **Telegram** changed its privacy policy in September 2024 to allow disclosure of IP addresses and phone numbers to authorities on valid requests.[^telegram-privacy]

### What we do

1. Collect the minimum personal data needed, record a lawful basis for holding it, and set a deletion date.
2. Do not use face search engines on scraped images for anything that could reach a European court.
3. Keep a chain of custody: who collected what, when, from where, and the hash of the file.
4. Treat AI assistance as something that must be disclosed and reproducible if the work reaches litigation.
5. Ask local counsel before cross-border collection, before any active engagement with a target, and before using commercial data brokers.

[↑ Back to top](#ai-enhanced-osint-a-practical-guide-for-illicit-trade-intelligence)

---

## Part 12: For educators: curriculum, lab setup and budgets

<!-- last-reviewed: 2026-10-12 -->

This guide grew out of teaching. The Summer School on Illicit Trade at the University of Groningen brings together students and practitioners every year. The questions they ask shaped most of what is here.

### Course structure

1. **OPSEC first.** Attribution, personas, isolation and the data terms of every tool, before any tool is used.
2. **Free and local tools.** Students build a working stack from [Part 3](#part-3-local-and-open-weight-models) and [Part 9.2](#92-free-structured-data-for-illicit-trade-investigation) before they touch a commercial platform.
3. **Legal and ethical framework.** The Berkeley Protocol, data protection, and the limits of what a student may collect ([Part 11](#part-11-legal-and-regulatory-changes-2025-to-2026)).
4. **AI tradecraft.** Assign a deep research report on a public topic and grade students on how many citations they catch as wrong or unsupported ([Part 6](#part-6-analytic-tradecraft-hallucination-verification-and-provenance)). Run a prompt injection demonstration in a sandbox ([Part 4](#part-4-ai-agent-security-for-analysts)). Do a geolocation exercise with images students have consented to share ([Part 7.3](#73-ai-geolocation)).
5. **Practical investigations.** Simulated cases built on open data: a vessel, a shell company, a sanctioned trader.
6. **Advanced topics.** Dark web collection, blockchain tracing, and commercial platforms, for students who have passed the earlier stages.

### Lab setup

- An isolated network segment and virtual machines for each student. Kali Linux with OSINT tooling is a common base; so is a plain Ubuntu image with Python.
- Ollama or LM Studio on lab machines with one 20 to 30 billion parameter model downloaded in advance. Confirm the setup answers with the network unplugged.
- No student use of consumer AI accounts with model training on. Where you need a cloud assistant, use an institutional Team or Enterprise plan, or the education plans the vendors offer.
- Logging of lab activity, agreed with students in advance, so that mistakes become lessons rather than incidents.

### Budgets

Earlier editions gave monthly totals for "professional" and "enterprise" stacks. Most of those figures were estimates and several of the prices were wrong, so we have replaced them with verified components. Add up what you need.

| Tier | Components | Verified price (October 2026) |
| --- | --- | --- |
| Free | Local models via Ollama or LM Studio; Maltego Basic; SpiderFoot; Censys free tier; OpenSanctions, OpenCorporates web search, ICIJ, Aleph, GLEIF, Copernicus Browser, QGIS | Hardware and time. A laptop with 32 GB of memory is the main cost |
| Practitioner | One AI plan with training off or a Team seat ($20 to $25 a month); Shodan Membership ($49 one-time) or Freelancer ($69 a month); Maltego Entry (€3,000 a year); OSINT Industries Basic (£19 a month); Intelligence X Researcher (€2,500 a year) if leaks matter to your work | Roughly €5,500 to €6,500 a year for one analyst, depending on which of these you take |
| Institutional | Enterprise AI through Bedrock, Vertex AI or Foundry, or a vendor Enterprise plan; Maltego Professional (€7,500 a year); one investigation platform from [Part 9.6](#96-enterprise-intelligence-and-investigation-platforms); commercial satellite imagery as needed | Enterprise prices are quoted, not published. Expect five figures a year before platforms |

*Prices from vendor pages verified 2026-10-09. Prices change; check before you buy.*

[↑ Back to top](#ai-enhanced-osint-a-practical-guide-for-illicit-trade-intelligence)

---

## Part 13: An investigation workflow for illicit trade

<!-- last-reviewed: 2026-10-12 -->

This is the order we work in. It is vendor-neutral on purpose. Swap in the tools you have.

### Phase 1: Scope and first collection

1. Write the question down and decide what you will not collect.
2. Public context first, on a local model or an enterprise account. Run a deep research report on the commodity, route or jurisdiction and check every citation ([Part 2.2](#22-deep-research-across-vendors), [Part 6](#part-6-analytic-tradecraft-hallucination-verification-and-provenance)).
3. Structured data next ([Part 9.2](#92-free-structured-data-for-illicit-trade-investigation)). Sanctions and PEP lists through OpenSanctions. Company records through OpenCorporates and national registries. Leaks through ICIJ and Aleph. Group structures through GLEIF. US shipments through ImportYeti. Trade statistics through Comtrade.
4. Map what you have in Maltego or on paper. Archive every page you relied on.

### Phase 2: Deep investigation

1. Infrastructure: Shodan or Censys for anything with an internet presence; WHOIS and certificate history.
2. Leaks and underground sources: Intelligence X, and the dark web through Tor with the isolation described in [Part 5](#part-5-opsec-for-ai-assisted-osint).
3. Money: blockchain explorers and, if you have them, Chainalysis, Elliptic or TRM; trade data from Panjiva, Datamyne or ImportGenius for the shipping side.
4. People and companies: the corporate intelligence platforms in [Part 9.5](#95-corporate-supply-chain-trade-sanctions-and-blockchain), each under its own account and audit log.
5. Languages: a local model for translation of anything sensitive; cloud translation for public material.
6. Images and video: provenance, context, forensics, in that order ([Part 7](#part-7-synthetic-media-verification-and-ai-geolocation)).

### Phase 3: Analysis and reporting

1. Link and timeline analysis in Maltego, i2 or Gephi.
2. Analysis of competing hypotheses, written down, with a key assumptions check.
3. Every claim in the report traced to a primary source you opened, with provenance recorded.
4. Draft with an assistant if you like, on terms you have read, with the AI assistance labelled.
5. Review with someone who was not on the case.

[↑ Back to top](#ai-enhanced-osint-a-practical-guide-for-illicit-trade-intelligence)

---

## Conclusion

AI tools have made OSINT faster and, in some ways, easier. They have not made it safer. The vendors' data terms changed under our feet between the first edition of this guide and this one. A court ordered one of them to keep everything its users had deleted. Web pages learned to talk to our tools. Models still invent what they do not know.

None of that is a reason to stop. It is a reason to work the way good analysts always have. Know where your data goes. Check everything. Keep what you control. Write down how you know what you know. Start with OPSEC. Keep sensitive work local or on terms you have read. Use the deep research modes and then verify them. Treat every agent as a new door into your case file. Teach all of this before you teach the tools.

We will keep this guide current as long as people find it useful. If you find something wrong, please tell us.

[↑ Back to top](#ai-enhanced-osint-a-practical-guide-for-illicit-trade-intelligence)

---

## Appendix A: Renamed, acquired or discontinued (2022 to 2026)

Earlier editions of this guide named all of these. Use this table when a colleague or a course handout still uses the old name.

| Name in earlier editions | What happened | Date |
| --- | --- | --- |
| **Accuity (Fiserv)** | Never a Fiserv product. Accuity was part of RELX and merged into LexisNexis Risk Solutions; its products include Firco and Bankers Almanac[^accuity] | February 2021 |
| **Banjo** | Collapsed after reports about its founder's past and a state audit that found no real AI; renamed safeXai, later a retail analytics firm[^banjo] | 2020 to 2021 |
| **Bing Search API** | Retired by Microsoft; replaced by "Grounding with Bing" inside Azure agents[^bing-retire] | 11 August 2025 |
| **ChatGPT plugins** | Shut down; replaced by GPTs and then the Apps SDK | April 2024 |
| **CipherTrace** | Mastercard discontinued the Armada, Inspector and Sentry products after withdrawing a CipherTrace expert report in the Bitcoin Fog trial[^ciphertrace] | March 2024 |
| **Clearpath Global REDSCOPE** | Still exists; removed from this guide because it is a supply-chain decision tool, not an OSINT platform | |
| **Cobwebs WEBINT** | Merged into PenLink; now PenLink Tangles | July 2023 |
| **Compliance.ai** | Acquired by Archer[^compliance-ai] | February 2024 |
| **Continue.dev** | Acquired by Cursor and wound down; cloud data deleted after 15 July 2026[^continue-dev] | June 2026 |
| **Copilot Pro** (Microsoft) | Replaced for individuals by Microsoft 365 Premium[^copilot-pricing] | October 2025 |
| **Crystal Blockchain** | Renamed Crystal Intelligence[^crystal] | 2024 |
| **Digital Shadows** | Acquired by ReliaQuest for $160 million; now part of GreyMatter[^digital-shadows] | June 2022 |
| **Echosec** | Acquired by Flashpoint; capability now in Flashpoint Ignite. The "$299 a month" price in earlier editions could not be confirmed[^echosec] | August 2022 |
| **Geofeedia** | Lost access to Facebook, Instagram and Twitter data after an ACLU report on police surveillance in 2016 and later closed[^geofeedia] | 2016 to 2018 |
| **GeoSpy** | Closed public access after reporting on stalking; now sold as Raven to law enforcement and enterprise[^geospy] | January 2025 |
| **Hootsuite Insights** | Replaced by Hootsuite Listening powered by Talkwalker after Hootsuite bought Talkwalker | April 2024 |
| **Hunchly** | Joined Maltego[^maltego-hunchly] | May 2025 |
| **IBM i2 Analyst's Notebook** | IBM sold the i2 portfolio to Harris Computer; now i2 Group[^i2] | January 2022 |
| **IBM Watson for Cyber Security** | Discontinued. IBM sold QRadar SaaS to Palo Alto Networks in 2024 and now offers ATOM for security operations[^ibm-atom] | 2024 to 2025 |
| **Liferaft Navigator** | Acquired by Securitas[^liferaft] | March 2026 |
| **Linkurious** | Acquired by Nuix[^linkurious] | April 2026 |
| **Maxar Technologies** | Split into Vantor (intelligence) and Lanteris (space systems)[^maxar-vantor] | October 2025 |
| **BAE Systems NetReveal** | Sold to SymphonyAI; now SymphonyAI NetReveal[^netreveal] | October 2022 |
| **NICE Actimize, SAS AML, FICO Falcon** | Still trade under these names. Removed from this guide because they are bank transaction-monitoring systems, not OSINT tools | |
| **OpenAI Atlas** | Browser launched October 2025 and retired; replaced by the ChatGPT desktop app and a Chrome extension[^atlas-retired] | August 2026 |
| **Orbis (Bureau van Dijk)** | Now Moody's Orbis; Moody's bought Bureau van Dijk in 2017 | |
| **OSINT Combine** | Merged into Kaseware[^osint-combine] | November 2025 |
| **OSINT-GPT (YesChat.ai)** | Third-party wrapper with no published data terms; removed | |
| **Recorded Future** | Acquired by Mastercard[^recorded-future] | December 2024 |
| **Refinitiv Eikon** | Retired and replaced by LSEG Workspace[^eikon] | 2025 |
| **Sentinel Hub EO Browser** | Shut down by Planet; use Copernicus Browser[^eo-browser] | 20 March 2026 |
| **Sixgill** | Now Cybersixgill, acquired by Bitsight[^cybersixgill] | December 2024 |
| **TweetDeck** | Became X Pro, paid | 2023 |
| **Verint OSINT** | Verint's intelligence business was spun out as Cognyte in 2021; Verint itself was taken private in 2025[^cognyte] | February 2021 |
| **Webhose.io** | Renamed Webz.io | 2021 |
| **World-Check (Refinitiv)** | Now LSEG World-Check[^world-check] | |
| **Zepol** | Bought by Datamyne in 2015; Datamyne bought by Descartes in 2016; now Descartes Datamyne[^zepol] | 2015 to 2016 |

[↑ Back to top](#ai-enhanced-osint-a-practical-guide-for-illicit-trade-intelligence)

---

## Contributing

We welcome corrections and additions.

### How to contribute

1. Fork the repository and create a branch.
2. Make your change. For a new tool, include what it does, who owns it, what it costs, where the data goes, and a source with a date.
3. Check that links work and that the Markdown renders.
4. Open a pull request with a short description.

### Rules we hold ourselves to

- **Every fact has a source and a date.** A number without a footnote and an access date does not go in. If we cannot source it, we say it in words or leave it out.
- **Vendor neutrality.** We describe what a tool does and what its terms say. We do not rank vendors on anything we cannot measure.
- **OPSEC awareness.** Think about what a reader exposes by following your advice.
- **Plain language.** Short sentences. No marketing words.
- **Follow the existing structure** and the rubric in [Part 1](#part-1-reading-the-opsec-rubric).

### Areas where help is most useful

- Verifying prices and data terms before each spring and autumn review
- Tools and sources outside Europe and North America
- Case studies that can be shared
- Translations

[↑ Back to top](#ai-enhanced-osint-a-practical-guide-for-illicit-trade-intelligence)

---

## License

This work is licensed under a [Creative Commons Attribution 4.0 International License](https://creativecommons.org/licenses/by/4.0/).

[![License: CC BY 4.0](https://img.shields.io/badge/License-CC_BY_4.0-lightgrey.svg)](https://creativecommons.org/licenses/by/4.0/)

You are free to share and adapt this work for any purpose, including commercially, as long as you credit Atlas Bear, link to the license, and say whether you changed anything. You may not suggest that Atlas Bear endorses you or your use, and you may not add legal or technical restrictions that stop others doing what the license allows.

### Copyright notice

```text
Copyright (c) 2025-2026 Atlas Bear

This work is licensed under the Creative Commons Attribution 4.0 International License.
To view a copy of this license, visit https://creativecommons.org/licenses/by/4.0/ or
send a letter to Creative Commons, PO Box 1866, Mountain View, CA 94042, USA.

THE WORK IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED,
INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A
PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE WORK
OR THE USE OR OTHER DEALINGS IN THE WORK.
```

### How to cite this guide

#### Academic papers

> Atlas Bear. (2026). AI-Enhanced OSINT: A Practical Guide for Illicit Trade Intelligence (Version 3.0). GitHub. <https://github.com/atlas-bear/osint-ai-guide>. Licensed under CC BY 4.0.

#### Presentations

> Source: "AI-Enhanced OSINT: A Practical Guide for Illicit Trade Intelligence" by Atlas Bear (CC BY 4.0)

#### Adaptations

> Based on "AI-Enhanced OSINT: A Practical Guide for Illicit Trade Intelligence" by Atlas Bear, adapted with modifications. Original work licensed under CC BY 4.0.

[↑ Back to top](#ai-enhanced-osint-a-practical-guide-for-illicit-trade-intelligence)

---

## Disclaimer

This guide is for education. You are responsible for complying with the laws that apply to you, for respecting privacy and ethical limits, for your own operational security, and for how you use these tools. We have checked the facts here as carefully as we can on the dates shown, and we will correct mistakes when they are reported, but prices, policies and products change without notice. The authors and contributors are not responsible for any misuse of this information.

---

## Contact and Support

- **Corrections and suggestions:** open a GitHub Issue or a pull request.
- **Questions:** use GitHub Discussions.
- **Security concerns:** use GitHub's private vulnerability reporting on this repository (Security tab), or email [support@atlasbear.co](mailto:support@atlasbear.co). See [SECURITY.md](SECURITY.md).
- **Academic partnerships:** email [support@atlasbear.co](mailto:support@atlasbear.co).

---

## Acknowledgments

Thanks to the OSINT community for sharing what it learns. Thanks to the security researchers who find and report the problems described in Part 4. Thanks to the teachers and students who keep asking better questions. And thanks to the open-source developers whose tools make most of this possible.

Very special thanks to the lecturers, students and alumni of [The Summer School on Illicit Trade](https://www.rug.nl/education/summer-winter-schools/illicit-trade/?lang=en) at the University of Groningen for their commitment to building a global community of scholars and practitioners dedicated to understanding and combating illicit networks. Your collaborative spirit, rigorous academic approach, and willingness to bridge theory with real-world application continue to inspire and inform the methodologies presented in this guide.

**Last updated:** 12 October 2026
**Version:** 3.0 (see [CHANGELOG](CHANGELOG.md))
**Contributors:** [rhinonix](https://github.com/rhinonix), [jxc112](https://github.com/jxc112)

[↑ Back to top](#ai-enhanced-osint-a-practical-guide-for-illicit-trade-intelligence)

---

## Atlas Bear Ecosystem

| Repository | Purpose | Status |
| --- | --- | --- |
| [osint-tools](https://github.com/atlas-bear/osint-tools) | Maritime and supply chain OSINT tools | ![Status](https://img.shields.io/github/last-commit/atlas-bear/osint-tools) |
| [recommended-reading](https://github.com/atlas-bear/recommended-reading) | Curated intelligence reading list | ![Status](https://img.shields.io/github/last-commit/atlas-bear/recommended-reading) |
| [supply-chain-management-tools](https://github.com/atlas-bear/supply-chain-management-tools) | Open source management solutions | ![Status](https://img.shields.io/github/last-commit/atlas-bear/supply-chain-management-tools) |
| [osint-ai-guide](https://github.com/atlas-bear/osint-ai-guide) | AI applications in OSINT (this guide) | ![Status](https://img.shields.io/github/last-commit/atlas-bear/osint-ai-guide) |

The MARA maritime intelligence platform is in private development and is not yet public.

**Learn more:** [Atlas Bear Academy](https://www.atlasbear.academy) • **Contact:** [support@atlasbear.co](mailto:support@atlasbear.co)

[↑ Back to top](#ai-enhanced-osint-a-practical-guide-for-illicit-trade-intelligence)

---

## References

Footnotes are listed in order of first use. Each entry gives the author or organisation, the date, the title, and the date we last opened the link. Some vendor pages (OpenAI, Perplexity, X, Shodan's account pages, CourtListener) block automated link checks; we open those by hand at each review.

[^nyt-order]: *The New York Times Co. v. Microsoft Corp. et al.*, No. 1:23-cv-11195-SHS (S.D.N.Y.), now part of *In re OpenAI, Inc. Copyright Infringement Litigation*, No. 1:25-md-03143. Preservation order of 13 May 2025 (Wang, M.J.). Order text: <https://cdn.arstechnica.net/wp-content/uploads/2025/06/NYT-v-OpenAI-Preservation-Order-5-13-25.pdf>. OpenAI's explanation of scope: "How we're responding to The New York Times' data demands", <https://openai.com/index/response-to-nyt-data-demands/> (updated 22 October 2025). Accessed 2026-10-09.
[^nyt-order-end]: Willison, S. (23 October 2025). "OpenAI no longer has to preserve all of its ChatGPT data, with some exceptions." <https://simonwillison.net/2025/Oct/23/openai-no-longer-has-to-preserve/> ; Engadget (October 2025), <https://www.engadget.com/ai/openai-no-longer-has-to-preserve-all-of-its-chatgpt-data-with-some-exceptions-192422093.html>. The termination order was entered on 9 October 2025 and ended the duty as of 26 September 2025. Accessed 2026-10-09.
[^nyt-20m]: Bloomberg Law (5 January 2026). "OpenAI Must Turn Over 20 Million ChatGPT Logs, Judge Affirms." <https://news.bloomberglaw.com/ip-law/openai-must-turn-over-20-million-chatgpt-logs-judge-affirms> ; ABA Journal, <https://www.abajournal.com/news/article/chatgpt-creator-must-turn-over-20m-chat-logs-in-copyright-litigation-federal-judge-says>. Accessed 2026-10-09.
[^altman-privilege]: TechCrunch (25 July 2025). "Sam Altman warns there's no legal confidentiality when using ChatGPT as a therapist." <https://techcrunch.com/2025/07/25/sam-altman-warns-theres-no-legal-confidentiality-when-using-chatgpt-as-a-therapist/>. Accessed 2026-10-09.
[^market]: The Business Research Company (24 September 2026), *Open Source Intelligence Global Market Report*, <https://www.thebusinessresearchcompany.com/report/open-source-intelligence-global-market-report> ; Mordor Intelligence (September 2026), <https://www.mordorintelligence.com/industry-reports/open-source-intelligence-market> ; Global Market Insights (December 2025), <https://www.gminsights.com/industry-analysis/open-source-intelligence-osint-market>. Earlier editions cited a MarketsandMarkets figure of $14.85 billion growing to $49.39 billion; that firm publishes no OSINT report and we could not find the figure in any source. Accessed 2026-10-09.
[^claude-pricing]: Anthropic. "Pricing." <https://claude.com/pricing>. Accessed 2026-10-09.
[^claude-models]: Anthropic. "Models overview." <https://platform.claude.com/docs/en/about-claude/models/overview>. Accessed 2026-10-09.
[^anthropic-terms]: Anthropic (28 August 2025). "Updates to Consumer Terms and Privacy Policy." <https://www.anthropic.com/news/updates-to-our-consumer-terms>. Accessed 2026-10-09.
[^anthropic-privacy]: Anthropic. "Privacy Policy", effective 10 September 2026. <https://www.anthropic.com/legal/privacy>. Accessed 2026-10-09.
[^anthropic-retention]: Anthropic Privacy Center (updated 1 July 2026). "How long do you store my data?" <https://privacy.claude.com/en/articles/10023548-how-long-do-you-store-my-data>. Accessed 2026-10-09.
[^anthropic-training-faq]: Anthropic Privacy Center (updated 16 March 2026). "Is my data used for model training?" <https://privacy.claude.com/en/articles/10023580-is-my-data-used-for-model-training>. Accessed 2026-10-09.
[^openai-data-controls]: OpenAI Help Center. "How are files vs chats retained?" <https://help.openai.com/en/articles/8983778-how-are-files-vs-chats-retained> ; OpenAI. "Your data" (API), <https://developers.openai.com/api/docs/guides/your-data>. Accessed 2026-10-09.
[^openai-agent]: OpenAI (17 July 2025). "Introducing ChatGPT agent." <https://openai.com/index/introducing-chatgpt-agent/>. Accessed 2026-10-09.
[^atlas-retired]: BGR (2026). "OpenAI is discontinuing its ChatGPT Atlas browser." <https://www.bgr.com/2212396/openai-chatgpt-browser-atlas-discontinued/>. Accessed 2026-10-09.
[^chatgpt-indexed]: Fast Company (30 July 2025). "Google is indexing ChatGPT conversations." <https://www.fastcompany.com/91376687/google-indexing-chatgpt-conversations> ; Search Engine Journal, <https://www.searchenginejournal.com/openai-is-pulling-shared-chatgpt-chats-from-google-search/552671/>. Accessed 2026-10-09.
[^gemini-privacy]: Google. "Gemini Apps Privacy Hub." <https://support.google.com/gemini/answer/13594961>. Accessed 2026-10-09.
[^gemini-personal]: Google (January 2026). "Personal Intelligence in the Gemini app." <https://blog.google/innovation-and-ai/products/gemini-app/personal-intelligence>. Accessed 2026-10-09.
[^vertex-data]: Google Cloud. "Data governance" (generative AI). <https://docs.cloud.google.com/generative-ai-app-builder/docs/data-governance>. Accessed 2026-10-09.
[^perplexity-comet]: Business Today (3 October 2025). "Perplexity opens Comet browser to all users." <https://www.businesstoday.in/amp/technology/news/story/perplexity-opens-comet-browser-to-all-users-adds-background-assistant-for-max-subscribers-496681-2025-10-03>. Accessed 2026-10-09.
[^comet-injection]: The Decoder (August 2025). "Brave discovers a security flaw in Perplexity's Comet browser." <https://the-decoder.com/brave-discovers-a-security-flaw-in-perplexitys-comet-browser/> ; Willison, S. (25 August 2025), <https://simonwillison.net/2025/Aug/25/>. Accessed 2026-10-09.
[^perplexity-cloudflare]: Search Engine Journal (4 August 2025). "Cloudflare delists and blocks Perplexity from crawling websites." <https://www.searchenginejournal.com/cloudflare-delists-and-blocks-perplexity-from-crawling-websites/552899/>. Accessed 2026-10-09.
[^mistral-training]: Mistral AI Help Center (updated 31 August 2026). Data usage and training policy. <https://help.mistral.ai/en/articles/347617>. Accessed 2026-10-09.
[^mistral-deep-research]: Mistral AI (17 July 2025). "Le Chat dives deep." <https://mistral.ai/fr/news/le-chat-dives-deep>. Accessed 2026-10-09.
[^mistral-changelog]: Mistral AI. "Changelog." <https://docs.mistral.ai/resources/changelogs>. Accessed 2026-10-09.
[^grok-optout]: X Help Center. "About Grok." <https://help.x.com/en/using-x/about-grok>. Accessed 2026-10-09.
[^grok-mechahitler]: Michigan Public and NPR (9 July 2025). "Elon Musk's AI chatbot, Grok, started calling itself 'MechaHitler'." <https://www.michiganpublic.org/2025-07-09/elon-musks-ai-chatbot-grok-started-calling-itself-mechahitler>. Accessed 2026-10-09.
[^grok-indexed]: TechCrunch (20 August 2025). "Thousands of Grok chats are now searchable on Google." <https://techcrunch.com/2025/08/20/thousands-of-grok-chats-are-now-searchable-on-google/> ; Forbes Australia, <https://www.forbes.com.au/news/innovation/xai-published-hundreds-of-thousands-of-grok-chatbot-conversations/>. Accessed 2026-10-09.
[^grok-imagine]: CNN (12 January 2026). "Indonesia and Malaysia block Grok." <https://edition.cnn.com/2026/01/12/business/indonesia-malaysia-grok-elon-musk-intl-hnk> ; Ofcom (12 January 2026), <https://www.ofcom.org.uk/online-safety/illegal-and-harmful-content/ofcom-launches-investigation-into-x-over-grok-sexualised-imagery> ; The Register (26 January 2026), <https://www.theregister.com/2026/01/26/ec_open_new_investigation_into/>. Accessed 2026-10-09.
[^copilot-pricing]: PCWorld (October 2025). "Microsoft adds Microsoft 365 Premium, cuts Copilot Pro." <https://www.pcworld.com/article/2925962/microsoft-adds-microsoft-365-premium-cuts-copilot-pro.html>. Accessed 2026-10-09.
[^claude-research]: Anthropic (15 April 2025). "Claude takes research to new places." <https://claude.com/blog/research>. Accessed 2026-10-09.
[^claude-integrations]: Anthropic (1 May 2025, updated 3 June 2025). "Claude can now connect to your world." <https://claude.com/blog/integrations>. Accessed 2026-10-09.
[^deep-research-dates]: Willison, S. (16 February 2025). "Introducing Perplexity Deep Research" (with dates for Gemini and OpenAI). <https://simonwillison.net/2025/Feb/16/introducing-perplexity-deep-research/> ; ARY News (17 February 2025) on Grok 3 and DeepSearch, <https://arynews.tv/grok-3-musk-unveils-chatgpt-rival> ; Topedia (June 2025) on Microsoft Researcher general availability, <https://blog-en.topedia.com/2025/06/researcher-and-analyst-agents-moving-to-general-availability/>. Accessed 2026-10-09.
[^mcp-openai]: TechCrunch (26 March 2025). "OpenAI adopts rival Anthropic's standard for connecting AI models to data." <https://techcrunch.com/2025/03/26/openai-adopts-rival-anthropics-standard-for-connecting-ai-models-to-data/>. Accessed 2026-10-09.
[^mcp-aaif]: Linux Foundation (9 December 2025). "Linux Foundation announces the formation of the Agentic AI Foundation." <https://www.linuxfoundation.org/press/linux-foundation-announces-the-formation-of-the-agentic-ai-foundation> ; Anthropic, <https://www.anthropic.com/news/donating-the-model-context-protocol-and-establishing-of-the-agentic-ai-foundation>. Accessed 2026-10-09.
[^mcp-registry]: Model Context Protocol. "Official MCP Registry." <https://registry.modelcontextprotocol.io/>. Accessed 2026-10-09.
[^mcp-archived]: Model Context Protocol. "servers-archived" (archived 29 May 2025). <https://github.com/modelcontextprotocol/servers-archived>. Accessed 2026-10-09.
[^github-mcp]: GitHub. "github-mcp-server." <https://github.com/github/github-mcp-server>. Accessed 2026-10-09.
[^exa-mcp]: Exa. "exa-mcp-server." <https://github.com/exa-labs/exa-mcp-server>. Accessed 2026-10-09.
[^tavily-mcp]: Tavily. "tavily-mcp." <https://github.com/tavily-ai/tavily-mcp>. Accessed 2026-10-09.
[^slack-mcp]: Zencoder. "slack-mcp-server." <https://github.com/zencoderai/slack-mcp-server>. Accessed 2026-10-09.
[^opensanctions-oss]: OpenSanctions. "Open source software." <https://www.opensanctions.org/docs/opensource/>. Accessed 2026-10-09.
[^shodan-mcp]: BurtTheCoder. "mcp-shodan" (community project, MIT). <https://github.com/BurtTheCoder/mcp-shodan>. Accessed 2026-10-09.
[^openai-memory]: OpenAI. "Memory and new controls for ChatGPT." <https://openai.com/index/memory-and-new-controls-for-chatgpt/> ; TechCrunch (10 April 2025), <https://techcrunch.com/2025/04/10/openai-updates-chatgpt-to-reference-your-other-chats/>. Accessed 2026-10-09.
[^claude-memory]: Anthropic (2025). "Bringing memory to Claude." <https://www.anthropic.com/news/memory>. Accessed 2026-10-09.
[^cohere-command-a-plus]: Associated Press via The Standard-Journal (20 May 2026). "Cohere releases Command A+, an open-source enterprise AI model." <https://www.standard-journal.com/ap/business/cohere-releases-command-a-an-open-source-enterprise-ai-model-built-for-sovereign-critical-infrastructure/article_eb7ed3ac-11d7-5378-bb51-b71ec4c5d8b0.html>. Accessed 2026-10-09.
[^bloomberggpt]: Wu, S., Irsoy, O., Lu, S., et al. (2023). "BloombergGPT: A Large Language Model for Finance." arXiv:2303.17564. <https://arxiv.org/abs/2303.17564>. Accessed 2026-10-09.
[^askb]: Markets Media (2026). "Bloomberg introduces agentic AI to the Terminal." <https://www.marketsmedia.com/bloomberg-introduces-agentic-ai-to-the-terminal/>. Accessed 2026-10-09.

[^meta-avocado]: The Decoder (December 2025). "Meta is reportedly ditching open Llama models for Avocado." <https://the-decoder.com/meta-is-reportedly-ditching-open-llama-models-for-avocado-a-closed-model-built-for-direct-sales/>. Accessed 2026-10-09.
[^meta-glimmer]: CNBC (10 August 2026). "Meta releases Muse Glimmer open-weight AI model." <https://www.cnbc.com/2026/08/10/meta-muse-glimmer-open-weight-ai.html>. Accessed 2026-10-09.
[^llama4-eu]: The Decoder (April 2025). "Meta releases first multimodal Llama 4 models, leaves EU out in the cold." <https://the-decoder.com/meta-releases-first-multimodal-llama-4-models-leaves-eu-out-in-the-cold/>. Accessed 2026-10-09.
[^deepseek-v4]: DeepSeek (24 April 2026). "DeepSeek V4 Preview." <https://api-docs.deepseek.com/news/news260424/>. Accessed 2026-10-09.
[^deepseek-bans]: TechCrunch (3 February 2025, updated). "DeepSeek: the countries and agencies that have banned the AI company's tech." <https://techcrunch.com/2025/02/03/deepseek-the-countries-and-agencies-that-have-banned-the-ai-companys-tech>. Accessed 2026-10-09.
[^gpt-oss]: The Register (5 August 2025). "OpenAI releases open-weight gpt-oss models." <https://www.theregister.com/2025/08/05/openai_open_gpt/>. Accessed 2026-10-09.
[^granite]: IBM Granite model collection on Hugging Face, <https://huggingface.co/ibm-granite> ; I Programmer (October 2025), "IBM launches Granite version 4.0 and Granite-Docling", <https://www.i-programmer.info/news/80-java/18409-ibm-launches-granite-version-40-and-granite-docling-.html> ; DataNorth (August 2026) on Granite 4.2, <https://datanorth.ai/news/ibm-releases-granite-4-2>. Release details for 4.1 and 4.2 are from secondary reporting; check the model cards. Accessed 2026-10-12.
[^kimi-k3]: Moonshot AI. "Kimi K3." <https://github.com/MoonshotAI/Kimi-K3>. Accessed 2026-10-09.
[^hf-gguf]: Hugging Face. Models tagged GGUF (210,163 on 9 October 2026). <https://huggingface.co/models?library=gguf>. Accessed 2026-10-09.
[^ollama-cloud]: Ollama (19 September 2025). "Cloud models." <https://ollama.com/blog/cloud-models>. Accessed 2026-10-09.
[^lmstudio-free]: LM Studio (8 July 2025). "LM Studio is free for work." <https://lmstudio.ai/blog/free-for-work>. Accessed 2026-10-09.
[^openwebui-license]: Open WebUI. "License." <https://docs.openwebui.com/license/>. Accessed 2026-10-09.
[^atlas-ciso]: Willison, S. (22 October 2025), quoting OpenAI CISO Dane Stuckey on the Atlas launch. <https://simonwillison.net/2025/Oct/22/openai-ciso-on-atlas/>. Accessed 2026-10-09.
[^lethal-trifecta]: Willison, S. (16 June 2025). "The lethal trifecta for AI agents." <https://simonwillison.net/2025/Jun/16/the-lethal-trifecta/>. Accessed 2026-10-09.
[^custom-gpts]: Ogundoyin, S. O., Ikram, M., Asghar, H. J., Zhao, B. Z. H., and Kaafar, D. (13 May 2025). "A Large-Scale Empirical Analysis of Custom GPTs' Vulnerabilities in the OpenAI Ecosystem." arXiv:2505.08148. <https://arxiv.org/abs/2505.08148>. Peer-reviewed as "Unsafe by Design?", WPES '25, doi:10.1145/3733802.3764054. Earlier editions of this guide cited these figures to the wrong paper. Accessed 2026-10-09.
[^tool-poisoning]: Willison, S. (9 April 2025) on Invariant Labs' tool poisoning research, <https://simonwillison.net/2025/Apr/9/mcp-prompt-injection/> ; Docker (2025), "MCP horror stories: the WhatsApp data exfiltration issue", <https://www.docker.com/blog/mcp-horror-stories-whatsapp-data-exfiltration-issue/>. Accessed 2026-10-09.
[^postmark-mcp]: CSO Online (September 2025). "Trust in MCP takes first in-the-wild hit via squatted Postmark connector." <https://csoonline.com/article/4064009/trust-in-mcp-takes-first-in-the-wild-hit-via-squatted-postmark-connector.html>. Accessed 2026-10-09.
[^mcp-remote-cve]: JFrog (9 July 2025). "CVE-2025-6514: critical mcp-remote RCE vulnerability." <https://jfrog.com/blog/2025-6514-critical-mcp-remote-rce-vulnerability/>. Accessed 2026-10-09.
[^git-mcp-cves]: CSO Online (December 2025). "Three vulnerabilities found in Anthropic Git MCP server." <https://www.csoonline.com/article/4119571/three-vulnerabilities-found-in-anthropic-git-mcp-server-could-let-attackers-tamper-with-llms.html>. Accessed 2026-10-09.
[^owasp-agentic]: OWASP GenAI Security Project (9 December 2025). "OWASP Top 10 for Agentic Applications for 2026." <https://genai.owasp.org/resource/owasp-top-10-for-agentic-applications-for-2026/>. Accessed 2026-10-09.
[^claude-chrome]: Anthropic (26 August 2025). "Piloting Claude for Chrome." <https://www.anthropic.com/news/claude-for-chrome>. Accessed 2026-10-09.
[^berkeley]: OHCHR and UC Berkeley Human Rights Center (2022; first published 1 December 2020). *Berkeley Protocol on Digital Open Source Investigations*, HR/PUB/20/2. <https://www.ohchr.org/sites/default/files/2024-01/OHCHR_BerkeleyProtocol.pdf> ; UN Digital Library record, <https://digitallibrary.un.org/record/3973652> ; project page, <https://humanrights.berkeley.edu/programs-projects/tech-human-rights-program/berkeley-protocol-digital-open-source-investigations>. Accessed 2026-10-09.
[^meta-discover]: Mozilla Foundation (June 2025). "Meta: help users stop accidentally sharing private AI conversations." <https://www.mozillafoundation.org/en/campaigns/meta-help-users-stop-accidentally-sharing-private-ai-conversations/>. Accessed 2026-10-09.
[^fisa-702]: Brennan Center for Justice (2026). "Section 702 of FISA: 2026 resource page." <https://www.brennancenter.org/our-work/research-reports/section-702-foreign-intelligence-surveillance-act-fisa-2026-resource-page>. Accessed 2026-10-09.
[^charlotin]: Charlotin, D. "AI Hallucination Cases" database. <https://www.damiencharlotin.com/hallucinations/>. Counts of about 87 (May 2025) and 2,028 (9 September 2026) from the database and secondary reporting. Accessed 2026-10-09.
[^anthropic-espionage]: Anthropic (13 November 2025). "Disrupting the first reported AI-orchestrated cyber espionage campaign." <https://www.anthropic.com/news/disrupting-AI-espionage>. Accessed 2026-10-09.
[^bellingcat-geo]: Postma, F., Bellingcat (14 August 2025). "LLMs vs geolocation: GPT-5 performs worse than other AI models." <https://www.bellingcat.com/resources/2025/08/14/llms-vs-geolocation-gpt-5-performs-worse-than-other-ai-models/>. Accessed 2026-10-09.
[^sora2]: NBC News (30 September 2025). "OpenAI launches Sora 2 app." <https://www.nbcnews.com/tech/tech-news/openai-sora-2-app-video-chatgpt-creation-rcna234973>. Accessed 2026-10-09.
[^pixel-c2pa]: Google (September 2025). "Trusted images: C2PA Content Credentials on Pixel 10." <https://blog.google/security/pixel-android-trusted-images-c2pa-content-credentials/>. Accessed 2026-10-09.
[^synthid-gemini]: Google (November 2025). "AI image verification in the Gemini app." <https://blog.google/technology/ai/ai-image-verification-gemini-app/>. Accessed 2026-10-09.
[^deepfake-eval]: Chandra, N. A., et al. (2025). "Deepfake-Eval-2024: A Multi-Modal In-the-Wild Benchmark of Deepfakes Circulated in 2024." arXiv:2503.02857. <https://arxiv.org/abs/2503.02857>. Accessed 2026-10-09.
[^truemedia]: TrueMedia.org (7 January 2025). "Shutting down TrueMedia." <https://truemedia.org/post/shutting-down-truemedia> ; GeekWire (2025) on the Georgetown revival, <https://www.geekwire.com/2025/truemedia-is-back-deepfake-detection-tool-revived-now-managed-by-georgetown-university/>. Accessed 2026-10-09.
[^gijn-ai]: van Ess, H., Global Investigative Journalism Network (1 September 2025, updated March 2026). "Reporter's Guide to Detecting AI-Generated Content." <https://gijn.org/resource/guide-detecting-ai-generated-content/>. Accessed 2026-10-09.
[^fbi-voice]: Malwarebytes (May 2025) on FBI IC3 public service announcement of 15 May 2025. <https://www.malwarebytes.com/blog/news/2025/05/scammers-are-using-ai-to-impersonate-senior-officials-warns-fbi>. Accessed 2026-10-09.
[^rubio]: Fortune (10 July 2025). "Deepfake Marco Rubio AI voice scams." <https://fortune.com/2025/07/10/deepfake-marco-rubio-ai-voice-scams>. Accessed 2026-10-09.
[^imageo-bench]: IMAGEO-Bench (2025). arXiv:2508.01608. <https://arxiv.org/abs/2508.01608>. Accessed 2026-10-12.
[^geospy]: 404 Media (January 2025). "The powerful AI tool that cops (or stalkers) can use to geolocate photos in seconds." <https://www.404media.co/the-powerful-ai-tool-that-cops-or-stalkers-can-use-to-geolocate-photos-in-seconds/> ; heise (2025), <https://www.heise.de/en/news/Graylark-closes-public-access-to-AI-tool-for-geolocation-10252293.html>. Accessed 2026-10-09.
[^anthropic-misuse-aug25]: Anthropic (27 August 2025). "Detecting and countering misuse of AI: August 2025." <https://www.anthropic.com/news/detecting-countering-misuse-aug-2025>. Accessed 2026-10-09.
[^anthropic-threat-sep26]: Anthropic (September 2026). "Threat intelligence report: September 2026." <https://www.anthropic.com/threat-intelligence-report-september-2026>. Accessed 2026-10-09.
[^openai-malicious]: OpenAI. "Disrupting malicious uses of AI" (report series). <https://openai.com/index/disrupting-malicious-ai-uses>. Accessed 2026-10-09.
[^gtig]: Google Threat Intelligence Group (5 November 2025). "GTIG AI threat tracker: advances in threat actor usage of AI tools." <https://blog.google/technology/safety-security/gtig-report-ai-malware/>. Accessed 2026-10-09.

[^maltego-pricing]: Maltego. "Pricing." <https://www.maltego.com/pricing/>. Accessed 2026-10-09.
[^maltego-hunchly]: Maltego (19 May 2025). "Maltego welcomes Hunchly." <https://www.maltego.com/blog/maltego-welcomes-hunchly-to-expand-osint-capabilities/>. Accessed 2026-10-09.
[^maltego-ai]: Maltego Docs. "What is the AI Assistant?" <https://docs.maltego.com/en/support/solutions/articles/15000061164-what-is-the-ai-assistant->. Accessed 2026-10-09.
[^shodan-pricing]: Shodan. "Billing." <https://account.shodan.io/billing>. Accessed 2026-10-09.
[^censys-pricing]: Censys Docs. "Platform credits: Free and Starter." <https://docs.censys.com/docs/platform-credits-free-starter>. Accessed 2026-10-09.
[^intelx-pricing]: Intelligence X. "Products." <https://intelx.io/product>. Accessed 2026-10-09.
[^lampyre-pricing]: Lampyre. "Pricing." <https://lampyre.io/pricing>. Accessed 2026-10-09.
[^osint-industries-pricing]: OSINT Industries. "Pricing." <https://www.osint.industries/pricing>. Accessed 2026-10-09.
[^epieos-pricing]: Epieos. "Pricing." <https://epieos.com/pricing>. Accessed 2026-10-09.
[^spiderfoot]: Intel 471 (November 2022). "Intel 471 acquires SpiderFoot." <https://www.prnewswire.com/news-releases/intel-471-acquires-spiderfoot-301665787.html> ; repository, <https://github.com/smicallef/spiderfoot>. Accessed 2026-10-09.
[^social-links]: Social Links. "SL Crimewall launch." <https://sociallinks.io/newsroom/social-links-sl-crimewall-launch>. Accessed 2026-10-09.
[^shadowdragon]: Business Wire (7 February 2025). ShadowDragon Horizon multilingual release. <https://www.businesswire.com/news/home/20250207507777/en/>. Accessed 2026-10-09.
[^blackdot]: Blackdot Solutions. "FAQ." <https://blackdotsolutions.com/faq>. Accessed 2026-10-09.
[^cylect]: Cylect. <https://ai.cylect.io/>. Accessed 2026-10-09.
[^opensanctions-pricing]: OpenSanctions. "API metering." <https://www.opensanctions.org/faq/api/metering/>. Accessed 2026-10-09.
[^opencorporates-pricing]: OpenCorporates. "Pricing." <https://opencorporates.com/pricing/>. Accessed 2026-10-09.
[^x-api]: X Developer Platform. "Pricing." <https://docs.x.com/x-api/getting-started/pricing>. Accessed 2026-10-09.
[^bing-retire]: Microsoft (2025). "Bing Search APIs retirement." <https://learn.microsoft.com/en-us/lifecycle/announcements/bing-search-api-retirement>. Accessed 2026-10-09.
[^google-cse]: Google. "Custom Search JSON API overview." <https://developers.google.com/custom-search/v1/overview>. Accessed 2026-10-09.
[^brave-api]: Implicator (February 2026). "Brave drops free Search API tier." <https://www.implicator.ai/brave-drops-free-search-api-tier-puts-all-developers-on-metered-billing/>. Accessed 2026-10-09.
[^tavily-pricing]: Tavily Docs. "API credits." <https://docs.tavily.com/documentation/api-credits>. Accessed 2026-10-09.
[^exa-pricing]: Exa. "Pricing." <https://exa.ai/pricing>. Accessed 2026-10-09.
[^telegram-privacy]: Telegram. "Privacy Policy", section 8.3 (changed 23 September 2024). <https://telegram.org/privacy>. Accessed 2026-10-09.
[^eo-browser]: Planet Community (2026). "Important update: sunset of EO Browser and Sentinel Hub Dashboard." <https://community.planet.com/product-updates/important-update-sunset-of-eo-browser-and-sentinel-hub-dashboard-6426> ; Copernicus Browser, <https://dataspace.copernicus.eu/ecosystem/services/copernicus-browser>. Accessed 2026-10-09.
[^maxar-vantor]: Breaking Defense (October 2025). "Goodbye Maxar, hello Vantor and Lanteris." <https://breakingdefense.com/2025/10/whats-in-a-name-goodbye-maxar-hello-vantor-and-lanteris/>. Accessed 2026-10-09.
[^sayari]: PR Newswire (2025). "Sayari acquires Mirato." <https://www.prnewswire.com/news-releases/sayari-acquires-mirato-combining-unrivaled-global-commerce-and-trade-data-with-ai-workflow-automation-302514955.html>. Accessed 2026-10-09.
[^world-check]: LSEG (30 September 2025). "LSEG launches World-Check On Demand." <https://www.lseg.com/en/media-centre/press-releases/2025/lseg-launches-world-check-on-demand>. Accessed 2026-10-09.
[^clear]: Thomson Reuters. "CLEAR Investigate." <https://legal.thomsonreuters.com/en/products/clear-investigate>. Accessed 2026-10-09.
[^accuity]: LexisNexis Risk Solutions (17 February 2021). Accuity merger announcement. <https://risk.lexisnexis.com/about-us/press-room/press-release/20210217-merger>. Accessed 2026-10-09.
[^panjiva]: S&P Global Market Intelligence. "Panjiva Supply Chain Intelligence." <https://www.spglobal.com/market-intelligence/en/solutions/products/panjiva-supply-chain-intelligence>. Accessed 2026-10-09.
[^zepol]: FreightWaves (October 2015). "Datamyne acquires Zepol." <https://www.freightwaves.com/news/datamyne-acquires-zepol-in-major-trade-data-deal> ; GlobeNewswire (23 December 2016), "Descartes acquires Datamyne", <https://www.globenewswire.com/news-release/2016/12/23/901547/9197/en/descartes-acquires-datamyne.html>. Accessed 2026-10-09.
[^crystal]: Crystal Intelligence. "10 years anniversary." <https://crystalintelligence.com/10-years-anniversary/>. Accessed 2026-10-09.
[^ciphertrace]: Fortune (13 March 2024). "Mastercard shuts down CipherTrace blockchain analytics products." <https://fortune.com/crypto/2024/03/13/mastercard-ciphertrace-blockchain-analytics-chainalysis-bitcoin-fog/>. Accessed 2026-10-09.
[^i2]: i2 Group (January 2022). "Harris acquires i2 product portfolio from IBM." <https://i2group.com/articles/harris-acquires-i2-product-portfolio-from-ibm>. Accessed 2026-10-09.
[^palantir]: Palantir Technologies, Form 10-Q for the quarter ended 30 September 2025. <https://www.sec.gov/Archives/edgar/data/1321655/000132165525000131/pltr-20250930.htm>. Accessed 2026-10-09.
[^cognyte]: Business Wire (1 February 2021). Cognyte spin-off completion. <https://www.businesswire.com/news/home/20210201005948/en> ; Thoma Bravo (November 2025), <https://www.thomabravo.com/press-releases/thoma-bravo-completes-acquisition-of-verint-a-leader-in-ai-driven-customer-experience-automation>. Accessed 2026-10-09.
[^recorded-future]: Mastercard (20 December 2024). "Mastercard finalizes acquisition of Recorded Future." <https://www.mastercard.com/news/press/2024/december/mastercard-finalizes-acquisition-of-recorded-future>. Accessed 2026-10-09.
[^echosec]: Flashpoint (4 August 2022). "Flashpoint acquires Echosec Systems." <https://flashpoint.io/news/flashpoint-acquires-echosec-systems/>. Accessed 2026-10-09.
[^cybersixgill]: Bitsight (December 2024). "Bitsight completes acquisition of Cybersixgill." <https://www.bitsight.com/press-releases/bitsight-completes-acquisition-cyber-threat-intelligence-leader-cybersixgill>. Accessed 2026-10-09.
[^digital-shadows]: The Record (1 June 2022). "Digital Shadows to be bought by ReliaQuest for $160 million." <https://therecord.media/cybersecurity-firm-digital-shadows-to-be-bought-by-reliaquest-for-160-million/>. Accessed 2026-10-09.
[^liferaft]: Securitas (18 March 2026). "Securitas completes acquisition of Liferaft." <https://www.securitas.com/en/newsroom/press-releases_list/securitas-completes-acquisition-of-liferaft/>. Accessed 2026-10-09.
[^linkurious]: Linkurious (December 2025). "Nuix signs agreement to acquire Linkurious." <https://linkurious.com/blog/nuix-signs-agreement-to-acquire-linkurious/>. Accessed 2026-10-09.
[^osint-combine]: Kaseware (4 November 2025). "Kaseware and OSINT Combine join forces." <https://www.kaseware.com/post/new-era-of-investigative-intelligence-kaseware-and-osint-combine-join-forces>. Accessed 2026-10-09.
[^ibm-atom]: IBM Newsroom (28 April 2025). "IBM delivers autonomous security operations with agentic AI." <https://newsroom.ibm.com/2025-04-28-ibm-delivers-autonomous-security-operations-with-cutting-edge-agentic-ai> ; Palo Alto Networks, "IBM QRadar acquired by Palo Alto Networks", <https://www.paloaltonetworks.com/cyberpedia/ibm-qradar-acquired-by-palo-alto-networks>. Accessed 2026-10-09.
[^cursor-pricing]: Cursor. "Pricing." <https://cursor.com/pricing> ; SatNews (13 August 2026) on the SpaceX acquisition, <https://satnews.com/2026/08/13/spacex-finalizes-regulatory-procedures-to-close-60-billion-acquisition-of-ai-platform-cursor/>. Accessed 2026-10-09.
[^copilot-plans]: GitHub. "Copilot plans." <https://github.com/features/copilot/plans>. Accessed 2026-10-09.
[^replit-pricing]: Replit. "Pricing." <https://replit.com/pricing>. Accessed 2026-10-09.
[^continue-dev]: The New Stack (June 2026). "Cursor acquires Continue." <https://thenewstack.io/cursor-acquires-continue-coding/>. Accessed 2026-10-09.
[^n8n-pricing]: n8n. "Pricing." <https://n8n.io/pricing/>. Accessed 2026-10-09.
[^n8n-ai]: n8n Docs. "LangChain in n8n." <https://docs.n8n.io/build/integrate-ai/langchain-in-n8n>. Accessed 2026-10-09.
[^zapier-pricing]: Zapier. "Pricing." <https://zapier.com/pricing>. Accessed 2026-10-09.
[^notion-pricing]: Notion. "Pricing." <https://www.notion.com/pricing>. Accessed 2026-10-09.
[^obsidian]: Obsidian. "License overview." <https://obsidian.md/license>. Accessed 2026-10-12.
[^voyage-4]: Voyage AI (15 January 2026). "voyage-4." <https://blog.voyageai.com/2026/01/15/voyage-4/> ; Microsoft Azure AI model catalog, <https://ai.azure.com/catalog/models/voyage-4-embedding-model>. Accessed 2026-10-12.
[^voyage-training]: MongoDB Docs. "Model training data" (Voyage AI). <https://www.mongodb.com/docs/voyageai/management/model-training-data/>. Accessed 2026-10-12.
[^ai-act-guidelines]: Covington, Inside Privacy (June 2025). "European Commission guidelines on prohibited AI practices under the EU AI Act." <https://www.insideprivacy.com/artificial-intelligence/european-commission-guidelines-on-prohibited-ai-practices-under-the-eu-artificial-intelligence-act/>. Accessed 2026-10-09.
[^ai-omnibus]: European Parliament Legislative Train. "Digital Omnibus on AI." <https://www.europarl.europa.eu/legislative-train/package-digital-package/file-digital-omnibus-on-ai> ; White & Case (2026), <https://www.whitecase.com/insight-alert/eu-agrees-digital-omnibus-deal-simplify-ai-rules>. Accessed 2026-10-09.
[^clearview-nl]: Autoriteit Persoonsgegevens (3 September 2024). "Dutch DPA imposes a fine on Clearview." <https://www.autoriteitpersoonsgegevens.nl/en/current/dutch-dpa-imposes-a-fine-on-clearview-because-of-illegal-data-collection-for-facial-recognition>. Accessed 2026-10-09.
[^clearview-noyb]: Infosecurity Magazine (October 2025). "Clearview AI hit with criminal complaint." <https://www.infosecurity-magazine.com/news/clearview-ai-hit-with-criminal/>. Accessed 2026-10-09.
[^meta-eu-training]: Taylor Wessing (May 2025). "Meta vs Verbraucherzentrale NRW." <https://www.taylorwessing.com/en/insights-and-events/insights/2025/05/meta-vs-verbraucherzentrale-nrw>. Accessed 2026-10-09.
[^openai-italy]: Reuters via Freevacy (20 March 2026). "Italian court overturns €15m GDPR fine against OpenAI." <https://www.freevacy.com/news/reuters/italian-court-overturns-eur15m-gdpr-fine-against-openai/7241>. Accessed 2026-10-09.
[^uk-dua]: The Data (Use and Access) Act 2025 (Commencement No. 2) Regulations 2026, SI 2026/82. <https://www.legislation.gov.uk/uksi/2026/82>. Accessed 2026-10-09.
[^colorado-ai]: Skadden (June 2026). "Colorado repeals and replaces its AI Act." <https://www.skadden.com/insights/publications/2026/06/colorado-repeals-and-replaces-its-ai-act>. Accessed 2026-10-09.
[^eo-14365]: Paul Hastings (December 2025). "President Trump signs executive order challenging state AI laws." <https://www.paulhastings.com/insights/client-alerts/president-trump-signs-executive-order-challenging-state-ai-laws>. Accessed 2026-10-09.
[^fre-707]: Redgrave LLP (2026). "Machine-generated evidence: Rules Advisory Committee hits pause on proposed FRE 707." <https://www.redgravellp.com/publication/machine-generated-evidence--rules-advisory-committee-hits-pause-to-consider-significant-revisions-to-proposed-federal-rule-of-evidence-707-addressing-evidence-generated-by-artificial-intelligence>. Accessed 2026-10-09.
[^banjo]: OneZero (February 2021). "Banjo quietly rebranded itself following report on former CEO's KKK past." <https://onezero.medium.com/banjo-quietly-rebranded-itself-following-report-on-former-ceos-kkk-past-11223803c19d> ; VentureBeat (2021) on the Utah audit, <https://venturebeat.com/business/government-audit-of-ai-with-ties-to-white-supremacy-finds-no-ai>. Accessed 2026-10-09.
[^compliance-ai]: Archer (20 February 2024). "Archer acquires Compliance.ai." <https://www.archerirm.com/press-releases/archer-acquires-compliance-ai-to-drive-ai-powered-regulatory-compliance-and-risk-management>. Accessed 2026-10-09.
[^geofeedia]: NBC News (October 2016). "Facebook, Twitter, Instagram block Geofeedia, tool used for police surveillance." <https://www.nbcnews.com/tech/internet/facebook-twitter-instagram-block-geofeedia-tool-used-police-surveillance-n664706>. Accessed 2026-10-09.
[^netreveal]: SymphonyAI (2022). "SymphonyAI acquires NetReveal from BAE Systems." <https://www.symphonyai.com/news/symphonyai-acquires-netreveal-from-bae-systems>. Accessed 2026-10-09.
[^eikon]: IESE Library (2025). "Eikon has been retired and replaced by LSEG Workspace." <https://libhowto.iese.edu/faq/289028>. Accessed 2026-10-12.
