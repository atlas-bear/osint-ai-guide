---
title: "Part 12: For educators: curriculum, lab setup and budgets"
description: "Curriculum, lab setup and budgets for teaching AI-assisted OSINT, drawn from the Summer School on Illicit Trade."
---

<!-- last-reviewed: 2026-10-12 -->

This guide grew out of teaching. The Summer School on Illicit Trade at the University of Groningen brings together students and practitioners every year. The questions they ask shaped most of what is here.

## Course structure

1. **OPSEC first.** Attribution, personas, isolation and the data terms of every tool, before any tool is used.
2. **Free and local tools.** Students build a working stack from [Part 3](03-local-models.md#part-3-local-and-open-weight-models) and [Part 9.2](09-platforms-and-data.md#92-free-structured-data-for-illicit-trade-investigation) before they touch a commercial platform.
3. **Legal and ethical framework.** The Berkeley Protocol, data protection, and the limits of what a student may collect ([Part 11](11-legal.md#part-11-legal-and-regulatory-changes-2025-to-2026)).
4. **AI tradecraft.** Assign a deep research report on a public topic and grade students on how many citations they catch as wrong or unsupported ([Part 6](06-tradecraft.md#part-6-analytic-tradecraft-hallucination-verification-and-provenance)). Run a prompt injection demonstration in a sandbox ([Part 4](04-agent-security.md#part-4-ai-agent-security-for-analysts)). Do a geolocation exercise with images students have consented to share ([Part 7.3](07-synthetic-media.md#73-ai-geolocation)).
5. **Practical investigations.** Simulated cases built on open data: a vessel, a shell company, a sanctioned trader.
6. **Advanced topics.** Dark web collection, blockchain tracing, and commercial platforms, for students who have passed the earlier stages.

## Lab setup

- An isolated network segment and virtual machines for each student. Kali Linux with OSINT tooling is a common base; so is a plain Ubuntu image with Python.
- Ollama or LM Studio on lab machines with one 20 to 30 billion parameter model downloaded in advance. Confirm the setup answers with the network unplugged.
- No student use of consumer AI accounts with model training on. Where you need a cloud assistant, use an institutional Team or Enterprise plan, or the education plans the vendors offer.
- Logging of lab activity, agreed with students in advance, so that mistakes become lessons rather than incidents.

## Budgets

Earlier editions gave monthly totals for "professional" and "enterprise" stacks. Most of those figures were estimates and several of the prices were wrong, so we have replaced them with verified components. Add up what you need.

| Tier | Components | Verified price (October 2026) |
| --- | --- | --- |
| Free | Local models via Ollama or LM Studio; Maltego Basic; SpiderFoot; Censys free tier; OpenSanctions, OpenCorporates web search, ICIJ, Aleph, GLEIF, Copernicus Browser, QGIS | Hardware and time. A laptop with 32 GB of memory is the main cost |
| Practitioner | One AI plan with training off or a Team seat ($20 to $25 a month); Shodan Membership ($49 one-time) or Freelancer ($69 a month); Maltego Entry (€3,000 a year); OSINT Industries Basic (£19 a month); Intelligence X Researcher (€2,500 a year) if leaks matter to your work | Roughly €5,500 to €6,500 a year for one analyst, depending on which of these you take |
| Institutional | Enterprise AI through Bedrock, Vertex AI or Foundry, or a vendor Enterprise plan; Maltego Professional (€7,500 a year); one investigation platform from [Part 9.6](09-platforms-and-data.md#96-enterprise-intelligence-and-investigation-platforms); commercial satellite imagery as needed | Enterprise prices are quoted, not published. Expect five figures a year before platforms |

*Prices from vendor pages verified 2026-10-09. Prices change; check before you buy.*
