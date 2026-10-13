# AI-Enhanced OSINT: A Practical Guide for Illicit Trade Intelligence

> Part of the [Atlas Bear Library](https://atlas-bear.github.io/), where Atlas Bear Labs gathers its public guides, lists and tools

**Intelligence Toolkit Integration:**

- [OSINT Tools](https://github.com/atlas-bear/osint-tools) - Maritime and supply chain OSINT tools and data sources, also as a [website](https://atlas-bear.github.io/osint-tools/)
- [Recommended Reading](https://github.com/atlas-bear/recommended-reading) - Essential reading on illicit trade and intelligence analysis

---

Atlas Bear Labs wrote this guide to share what we have learned about using AI tools in open source intelligence (OSINT) work. Our focus is illicit trade. It covers the AI assistants and OSINT platforms we think are worth your time. It explains where your data goes when you use them, and how to keep an investigation safe while you do. We hope it is useful to practitioners, students and teachers. If something is wrong or missing, please tell us through GitHub Issues.

[![License: CC BY 4.0](https://img.shields.io/badge/License-CC_BY_4.0-lightgrey.svg)](https://creativecommons.org/licenses/by/4.0/)
![Last Updated](https://img.shields.io/badge/Last%20Updated-October%202026-blue)
![Version](https://img.shields.io/badge/Version-3.0-blue)
[![DOI](https://img.shields.io/badge/DOI-10.5281%2Fzenodo.23314064-blue.svg)](https://doi.org/10.5281/zenodo.23314064)
![OSINT](https://img.shields.io/badge/OSINT-Intelligence%20Research-red)
![AI Models](https://img.shields.io/badge/AI-Models%20%26%20Platforms-green)

**Read it as a website.** This guide is also published at <https://atlas-bear.github.io/osint-ai-guide/>, with search and one page per Part. The README and the website are built from the same files.

**How this guide is maintained.** We review the whole guide twice a year, in spring before the Summer School on Illicit Trade and again in autumn. Every table carries the date we last checked it against vendor pages. Prices and data policies change quickly, so check the vendor page before you buy or before you paste anything sensitive. Corrections are welcome through Issues or a pull request. Each review is published as a GitHub Release with a version number, and the [CHANGELOG](https://github.com/atlas-bear/osint-ai-guide/blob/main/CHANGELOG.md) lists what changed in each version.

## BLUF

AI tools now sit inside most OSINT work. They speed up research, translation, document review and drafting. They also add new risks. Your prompts can become training data or court evidence. A web page you ask an AI agent to read can hijack it. Models state invented facts with confidence. Treat every AI tool as a service you have to assess, the same way you would assess a data broker, not as a neutral assistant.

> **Consumer AI chat logs are discoverable records.** In May 2025 a US federal court ordered OpenAI to preserve consumer ChatGPT logs, including deleted chats, as evidence in a copyright case. That duty ended in September 2025. The preserved data stays under hold, and in January 2026 a judge upheld an order to hand 20 million de-identified conversations to the plaintiffs.[^nyt-order][^nyt-order-end][^nyt-20m] OpenAI's own chief executive has said there is no legal privilege for what you tell a chatbot.[^altman-privilege] Do not put a target's name or your case details into a consumer chat service.

### Quick decision matrix

The four letters are the OPSEC rubric explained in [Part 1](01-opsec-rubric.md#part-1-reading-the-opsec-rubric): **T**raining on your inputs, **R**etention and legal exposure, **D**eployment control, and **Q**uery attribution to you.

| Option | T | R | D | Q | Use it for |
| --- | --- | --- | --- | --- | --- |
| Open-weight model run on your own hardware ([Part 3](03-local-models.md#part-3-local-and-open-weight-models)) | 🟢 | 🟢 | 🟢 | 🟢 | Anything that names a target, a source or a case |
| Enterprise AI with no-training terms: Claude Team or Enterprise, ChatGPT Enterprise, Microsoft 365 Copilot, Azure OpenAI and Microsoft Foundry, Amazon Bedrock, Google Vertex AI ([Part 2.5](02-ai-assistants.md#25-enterprise-and-no-training-routes)) | 🟢 | 🟢 | 🟡 | 🟡 | Sensitive work under an organisational account, accepting that administrators can see audit logs |
| Consumer paid plan with model training switched off and a temporary or incognito chat | 🟡 | 🟡 | 🔴 | 🟡 | General research, drafting and translation that does not identify a target |
| Consumer plan on default settings | 🔴 | 🟡 | 🔴 | 🔴 | Summaries of public sources only |
| Any AI browser or agent pointed at content an adversary controls while you are logged in to mail, files or tools ([Part 4](04-agent-security.md#part-4-ai-agent-security-for-analysts)) | 🔴 | 🔴 | 🔴 | 🔴 | Do not |
| Apps and APIs hosted in China (DeepSeek, Qwen, Kimi, GLM) | 🔴 | 🔴 | 🔴 | 🔴 | Not for case work. The same companies' open weights run locally are 🟢 on every count |

### Six things to do

1. Keep anything that names a target, a source or a case on a local model or on an enterprise account with no-training terms.
2. Assume every prompt you send to a consumer service can be retained, reviewed by staff and produced in court.
3. Use any vendor's deep research mode if it helps, then check every citation yourself. Models still invent sources ([Part 6](06-tradecraft.md#part-6-analytic-tradecraft-hallucination-verification-and-provenance)).
4. Never point an AI browser, agent or MCP connector at adversary content while it has access to your email, files or credentials ([Part 4](04-agent-security.md#part-4-ai-agent-security-for-analysts)).
5. Turn memory off and use temporary or incognito chats for case work ([Part 2.4](02-ai-assistants.md#24-memory-and-temporary-modes)).
6. AI output is never a source. Record where a fact came from, not which model repeated it.

**If you teach OSINT**, start students on free local tools, then move to commercial platforms, and make operational security the first lesson rather than the last. [Part 12](12-educators.md#part-12-for-educators-curriculum-lab-setup-and-budgets) has a course outline and budgets.

**If you practise OSINT**, combine the tools you already trust with AI assistants, but keep sensitive work local or on enterprise terms. The information and knowledge you control directly remain your most valuable asset.

Market analysts put the OSINT software market somewhere between 10 and 18 billion US dollars in 2025. They forecast growth of 15 to 27 percent a year. The spread is wide because each firm defines the market differently, so treat these figures as direction rather than fact.[^market]
