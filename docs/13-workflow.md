---
title: "Part 13: An investigation workflow for illicit trade"
---

<!-- last-reviewed: 2026-10-12 -->

This is the order we work in. It is vendor-neutral on purpose. Swap in the tools you have.

## Phase 1: Scope and first collection

1. Write the question down and decide what you will not collect.
2. Public context first, on a local model or an enterprise account. Run a deep research report on the commodity, route or jurisdiction and check every citation ([Part 2.2](02-ai-assistants.md#22-deep-research-across-vendors), [Part 6](06-tradecraft.md#part-6-analytic-tradecraft-hallucination-verification-and-provenance)).
3. Structured data next ([Part 9.2](09-platforms-and-data.md#92-free-structured-data-for-illicit-trade-investigation)). Sanctions and PEP lists through OpenSanctions. Company records through OpenCorporates and national registries. Leaks through ICIJ and Aleph. Group structures through GLEIF. US shipments through ImportYeti. Trade statistics through Comtrade.
4. Map what you have in Maltego or on paper. Archive every page you relied on.

## Phase 2: Deep investigation

1. Infrastructure: Shodan or Censys for anything with an internet presence; WHOIS and certificate history.
2. Leaks and underground sources: Intelligence X, and the dark web through Tor with the isolation described in [Part 5](05-opsec.md#part-5-opsec-for-ai-assisted-osint).
3. Money: blockchain explorers and, if you have them, Chainalysis, Elliptic or TRM; trade data from Panjiva, Datamyne or ImportGenius for the shipping side.
4. People and companies: the corporate intelligence platforms in [Part 9.5](09-platforms-and-data.md#95-corporate-supply-chain-trade-sanctions-and-blockchain), each under its own account and audit log.
5. Languages: a local model for translation of anything sensitive; cloud translation for public material.
6. Images and video: provenance, context, forensics, in that order ([Part 7](07-synthetic-media.md#part-7-synthetic-media-verification-and-ai-geolocation)).

## Phase 3: Analysis and reporting

1. Link and timeline analysis in Maltego, i2 or Gephi.
2. Analysis of competing hypotheses, written down, with a key assumptions check.
3. Every claim in the report traced to a primary source you opened, with provenance recorded.
4. Draft with an assistant if you like, on terms you have read, with the AI assistance labelled.
5. Review with someone who was not on the case.
