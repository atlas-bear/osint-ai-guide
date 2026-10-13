---
title: "Part 2: AI assistants for OSINT research"
---

<!-- last-reviewed: 2026-10-12 -->

Every major AI assistant now offers the same core research features. Each has a deep research mode that runs many searches and writes a cited report. Each has connectors to your files and email, an agent mode that can browse and act, and memory across chats. The differences that matter for OSINT are in the data terms, not the feature list. This Part compares the seven assistants we see most often in investigative work. We have tried to describe each vendor's terms as they stand in October 2026. Policies change often. Read the vendor's own page before you rely on any row.

## 2.1 Comparison table

Rubric strings are explained in [Part 1](01-opsec-rubric.md#part-1-reading-the-opsec-rubric). Where two strings appear, the first is for consumer plans and the second for enterprise or API access.

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

We dropped three things from this table since the last edition. OSINT-GPT was a third-party wrapper on YesChat.ai that added a data hop with no published terms. The "custom GPT" listings are covered by the warning in [Part 4](04-agent-security.md#part-4-ai-agent-security-for-analysts). The long Mistral product list now lives in one row above and in [Part 3](03-local-models.md#part-3-local-and-open-weight-models).

## 2.2 Deep research across vendors

Deep research modes run dozens of searches, read the pages, and write a report with citations. They are the single most useful AI feature for background work on a company, a vessel, a port or a trafficking route. They are also where hallucinated citations show up most often, so every link in a deep research report needs to be opened and read. [Part 6](06-tradecraft.md#part-6-analytic-tradecraft-hallucination-verification-and-provenance) explains how we check them.

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

## 2.3 Connectors, MCP and agent modes

The Model Context Protocol (MCP) is the open standard that lets an assistant call outside tools and data sources. Anthropic published it in late 2024, OpenAI adopted it in March 2025, and Microsoft followed at Build in May 2025.[^mcp-openai] In December 2025 Anthropic donated MCP to the Linux Foundation's new Agentic AI Foundation, citing more than 10,000 public servers.[^mcp-aaif] The official registry listed roughly 10,000 to 19,000 entries at different points in 2026, depending on how you count.[^mcp-registry]

Three things to know before you connect anything:

- **The old reference servers are unmaintained.** In May 2025 the MCP project moved its GitHub, Slack, PostgreSQL, Google Drive and Puppeteer servers to an archive. The archive notice says "no security guarantees are provided".[^mcp-archived] Earlier editions of this guide linked to them. Use vendor-maintained servers instead: GitHub's own server,[^github-mcp] Exa's,[^exa-mcp] Tavily's,[^tavily-mcp] and the Slack server now maintained by Zencoder.[^slack-mcp]
- **For OSINT data, prefer servers run by the data owner.** OpenSanctions ships an MCP server with its open-source client.[^opensanctions-oss] The popular Shodan MCP server is a community project under an MIT licence, not a Shodan product.[^shodan-mcp]
- **A connector is a new way for data to leave.** Each MCP server you add can read what the model reads and may send it elsewhere. [Part 4](04-agent-security.md#part-4-ai-agent-security-for-analysts) covers the attacks we have seen in the wild and the rules we follow.

## 2.4 Memory and temporary modes

Memory lets an assistant carry facts between chats. For OSINT that is a liability. A target's name from one case can surface in a chat about another. Memory also builds a profile of you, the analyst, that a breach or a discovery order could expose. And memory can be planted: a web page an agent reads can try to write into it.

| Assistant | Memory behaviour | How to avoid it |
| --- | --- | --- |
| ChatGPT | Saved memories, plus "reference chat history" across all past chats since April 2025. On by default where available.[^openai-memory] | Settings, Personalization, turn off both switches. Temporary Chat neither reads nor writes memory. |
| Claude | Memory rolled out to Team and Enterprise in September 2025 and to Pro and Max in October 2025. You can view, edit or pause it.[^claude-memory] | Incognito chats are kept out of history, memory and training. |
| Gemini | Saved info and past-chat recall are tied to "Keep Activity". Personal Intelligence connects Google apps, opt-in per app.[^gemini-personal] | Turn off Keep Activity and disconnect apps. Temporary Chats skip personalisation. |
| Grok | Memory launched in April 2025, not in the EU or UK. | Settings, Data Controls, turn off personalisation with memories. |

Our rule: case work happens in an incognito or temporary chat, or in a separate account with memory off, or on a local model.

## 2.5 Enterprise and no-training routes

The question we hear most often is "can I use a frontier model safely at all?" The answer is yes, if you buy it under business terms. Four routes:

- **The vendor's own business plans.** Claude Team and Enterprise, ChatGPT Enterprise, Edu and Business, and Microsoft 365 Copilot are all excluded from model training. They also give administrators audit logs and retention controls.
- **API access with zero data retention.** Anthropic, OpenAI and Google all offer API terms that exclude training. OpenAI's zero-data-retention option requires approval and is set per organisation or project.[^openai-data-controls]
- **Cloud marketplaces.** Amazon Bedrock, Google Vertex AI and Microsoft Foundry serve Claude, Gemini, Llama, Mistral and other models inside your own cloud account. You choose the region and your data is not used for training.[^vertex-data] This is the usual answer for government and regulated organisations.
- **Open weights you run yourself.** See [Part 3](03-local-models.md#part-3-local-and-open-weight-models).

Cohere sells to this market too. Its Command A+ model was released as open weights under Apache 2.0 in May 2026, and its North product is a workspace for private deployments.[^cohere-command-a-plus]

## 2.6 Research and academic tools

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

## A worked example with one vendor

This example uses Claude Research with MCP connectors. ChatGPT Deep Research with connectors or Gemini Deep Research with Google Workspace work the same way.

1. Open an incognito chat on a Team or Enterprise account, or on a Pro account with model training switched off.
2. Ask a public, non-identifying research question first. For example: "How do Chinese-flagged fishing fleets use transshipment at sea to move catch? Which ports in West Africa are named in recent reports?"
3. Let Research run. It takes five to fifteen minutes and returns a report with citations.
4. Open every citation. Mark each claim as confirmed, unconfirmed or wrong. Expect at least one wrong or missing citation per report.
5. Only then move to the case specifics. Do that part on a local model or an enterprise account, with the confirmed sources pasted in as context.
