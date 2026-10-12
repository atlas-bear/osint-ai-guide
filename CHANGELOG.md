# Changelog

All notable changes to this guide are listed here. The format follows [Keep a Changelog](https://keepachangelog.com/en/1.1.0/).

## [Unreleased]

### Added

- A website version of the guide at <https://atlas-bear.github.io/osint-ai-guide/>, built with MkDocs Material from the files in `docs/`, which are now the source of truth. `scripts/build_readme.py` regenerates README.md from the same files, and a pull request check fails if the two drift apart.
- Zenodo DOIs in CITATION.cff and the README citation block: 10.5281/zenodo.23314064 for all versions and 10.5281/zenodo.23314068 for v3.0.0.

### Changed

- Contributing instructions now point to `docs/` and the build script.

## [3.0.0] - 2026-10-12

A full review and rewrite after fifteen months. Every factual claim was checked against a current source, hedged, or removed. Prose was rewritten in plain language.

### Added

- Part 1, a four-part OPSEC rubric (training, retention, deployment, query attribution) that replaces the single "OPSEC rating" and the "Hidden AI risk" columns.
- Part 2, a vendor-neutral comparison of Claude, ChatGPT, Gemini, Perplexity, Le Chat, Grok and Microsoft Copilot, with each vendor's data terms side by side; a table of deep research features across vendors; sections on MCP connectors, memory features, and enterprise no-training routes.
- Part 3, the 2026 open-weight model landscape (DeepSeek, Qwen, gpt-oss, Gemma, Mistral, IBM Granite, GLM, Kimi, Meta), hardware tiers, and a warning about Ollama cloud models.
- Part 4, AI-agent security for analysts: indirect prompt injection, the lethal trifecta, MCP tool poisoning and supply-chain incidents, agentic browsers, and a do/do-not list.
- Part 6, analytic tradecraft for working with models that hallucinate.
- Part 7, synthetic media, provenance marks, detector limits, and AI geolocation.
- Part 8, adversarial use of AI by illicit networks, drawn from Anthropic, OpenAI and Google threat reports.
- Part 9.2, free structured data sources (OpenSanctions, OpenCorporates, ICIJ, OCCRP Aleph, GLEIF, ImportYeti, UN Comtrade, ITC Trade Map).
- Part 9.3, the decline in platform and API data access (X, Meta, Bing, Google, Brave, Telegram).
- Part 10.1, agentic coding tools (Claude Code, Codex, Gemini CLI, Cursor, Cline, Copilot, Replit).
- Part 10.3, private search over investigation corpora with embeddings, RAG and vector stores, including Voyage AI and local alternatives.
- Part 11, legal and regulatory changes 2025 to 2026 (EU AI Act and Digital Omnibus, GDPR enforcement, UK Data Act, US state laws and executive order, chat logs as evidence, proposed FRE 707).
- Appendix A, a table of tools that were renamed, acquired or discontinued since 2022.
- The full CC BY 4.0 legal text in LICENSE (GitHub previously showed the license as "Other"), an MIT license for scripts and workflows in LICENSE-CODE, and citation metadata in CITATION.cff and .zenodo.json for GitHub's citation button and Zenodo release archiving.
- Named GitHub footnotes with access dates for every source; "verified" date captions on every table; a maintenance note; this changelog; SECURITY.md; a markdownlint configuration; a monthly link-check workflow.

### Changed

- The OpenAI court order is now described accurately: a preservation order for civil discovery that covered consumer and non-zero-retention API accounts from 13 May to 26 September 2025, formally terminated 9 October 2025, followed by an order to produce 20 million de-identified logs. Earlier editions called it permanent and said it gave government access. Neither was correct.
- Claude's data policy is now described accurately: consumer plans have trained on chats unless the user opted out since the August 2025 terms change, with a five-year retention period for those who opted in and a safety-review carve-out; Team, Enterprise and API accounts are excluded. Earlier editions said Claude never trained on conversations.
- Corrected citations: the custom GPT security statistics now cite Ogundoyin et al. (2025, arXiv:2505.08148), not an unrelated paper; the market-size statistic now cites three named research firms with a range, not a MarketsandMarkets report that does not exist.
- Corrected names and owners for about thirty vendors (i2 Group not IBM; LexisNexis Risk Solutions not Fiserv for Accuity; Cognyte not Verint; PenLink not Cobwebs; Vantor not Maxar; LSEG not Refinitiv; Moody's Orbis; Descartes Datamyne not Zepol; Flashpoint Ignite not Echosec; Cybersixgill under Bitsight; ReliaQuest not Digital Shadows; Recorded Future under Mastercard; Crystal Intelligence; SymphonyAI NetReveal; Webz.io not Webhose; X Pro not TweetDeck).
- Corrected prices: Maltego (per year in euros, not per month in dollars), Lampyre, Notion, Cursor, GitHub Copilot, Replit, OSINT Industries, Intelligence X, Censys, n8n, Zapier, and others, each with a verified date.
- Corrected tool descriptions: n8n has extensive AI nodes; Cline sends code to whichever model you configure; Ollama is no longer local-only.
- Replaced nine dead reference links (five MCP server paths, the Anthropic Workspace announcement, the MCP ecosystem page, the Berkeley Protocol PDF, the Shodan store page).
- Replaced all budget totals with component tables of verified prices.
- Removed the private MARA repository from the ecosystem table (the link returned 404 for readers).
- Fixed the duplicate "Academic and Research Platforms" table, the broken Part I-A anchor, the placeholder contacts, the mismatched title in the citation examples, and the inconsistent "last updated" dates.

### Removed

- Geofeedia and Banjo (defunct), CipherTrace (discontinued), Continue.dev (wound down), IBM Watson for Cyber Security (discontinued), OSINT-GPT (unvetted third-party wrapper), Clearpath REDSCOPE (out of scope).
- Tables of bank transaction-monitoring systems (NICE Actimize, SAS, FICO Falcon, NetReveal) and social-listening suites (Brandwatch, Sprinklr, Hootsuite Insights), which are not OSINT tools. Names are kept in Appendix A.
- The "Hidden AI Risk Assessment" blocks, the generic three-phase workflows repeated in each section, the marketing paragraph on enterprise platforms, and all unsourced numbers ("45,000+ GGUF models", "99%+ accuracy", "450+ tools", "200+ languages", "58+ sources").

## [2.2] - 2025-07-14

- Added Disclaimer, Contact and Support, Acknowledgments and References sections.
- Added the Atlas Bear Ecosystem table and Community Guidelines.
- Added the physical security, AI development tools, supply chain, advanced platforms and financial crime sections.
- Added the OpenAI data retention warning and the Claude capabilities section.

## [1.0] - 2025-06-30

- First public release.
