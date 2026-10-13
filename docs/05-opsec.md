---
title: "Part 5: OPSEC for AI-assisted OSINT"
---

<!-- last-reviewed: 2026-10-12 -->

## 5.1 Principles and the Berkeley Protocol

Operational security in OSINT is a habit before it is a toolset. You gather information from public sources without revealing who you are, who you work for, what you are looking for, or how. AI tools add a new channel for all four to leak.

The Berkeley Protocol on Digital Open Source Investigations remains the reference standard. It was published by the UN Human Rights Office and the Human Rights Center at UC Berkeley. Its security chapter asks four things of investigators. Manage attribution so that nothing identifies you, your organisation, your sources or your intent. Expect to be observed and act consistently with your online persona. Work from secure environments. Keep personal and professional activity apart.[^berkeley] It was written in 2020 and has not been revised for the AI era, so the rest of this Part extends it.

## 5.2 Technical safeguards, identity and data handling

- **Network.** Use a VPN and, where it fits your threat model, Tor. Understand what each hides and from whom before you combine them.
- **Isolation.** Research in a virtual machine or a dedicated device. Keep a separate browser profile for each persona.
- **Personas.** Research accounts should be built and maintained with the same care as a real identity, and never mixed with your own.
- **Communications.** Use end-to-end encrypted messaging (Signal) and encrypted email (Proton Mail) with sources and colleagues.
- **Storage.** Keep findings local and encrypted. Decide a retention period and delete on schedule. Limit who can read the case.
- **Metadata.** Strip location and device data from anything you upload anywhere, including to an AI assistant.

## 5.3 Where your prompts go

Every prompt you send to a cloud assistant is stored somewhere, for some time, under some terms. Four things can happen to it.

**It can train the next model.** ChatGPT, Gemini, Le Chat and Grok consumer accounts use chats for training by default with an opt-out. Claude consumer accounts asked users to choose in 2025, with a five-year retention period for those who said yes. Even opted-out chats can be used if they are flagged for safety review.[^anthropic-terms][^anthropic-privacy] Enterprise and API accounts at all these vendors are excluded. [Part 2.1](02-ai-assistants.md#21-comparison-table) has the detail.

**It can be kept for years.** Default retention starts at 30 days for deleted chats at most vendors. It runs to 18 months for Gemini's Keep Activity, three years for Gemini chats sampled for human review, and five years for Claude chats used for training.[^gemini-privacy][^anthropic-retention]

**It can be produced in court.** The 2025 OpenAI preservation order covered Free, Plus, Pro and Team accounts and API customers without zero-data-retention terms. Users in the EEA, UK and Switzerland were exempt, as were Enterprise and Edu customers. The order ran from 13 May to 26 September 2025 and was formally terminated on 9 October 2025. Everything preserved during that window remains available to the plaintiffs, and 20 million de-identified conversations were ordered produced.[^nyt-order][^nyt-order-end][^nyt-20m] This was civil discovery between private parties, not government surveillance, and it is the kind of thing that can happen to any vendor.

**It can end up on the open web.** In July 2025 more than 4,500 ChatGPT conversations that users had marked "discoverable" appeared in Google results.[^chatgpt-indexed] In August 2025 hundreds of thousands of shared Grok chats were indexed the same way.[^grok-indexed] In June 2025 the Meta AI app's Discover feed showed users' conversations in public without many of them realising.[^meta-discover]

There is no professional privilege for any of this. As OpenAI's chief executive put it, "we haven't figured that out yet".[^altman-privilege]

Government purchase of commercially available data, including data brokers' records, remains a live concern in the United States. The Fourth Amendment Is Not For Sale Act passed the House in April 2024 and has not become law.[^fisa-702]

## 5.4 Recommendations

1. Put anything that identifies a target, a source or a case on a local model or an enterprise account. Everything else is optional; this is not.
2. On consumer accounts, turn model training off, turn memory off, and use temporary or incognito chats for case work.
3. Use a case-dedicated account for cloud assistants rather than rotating your personal account.
4. Anonymise before you paste. Replace names, vessel identifiers and company numbers with placeholders and keep the key offline.
5. Write generic queries. "How do shell companies in jurisdiction X typically layer ownership" rather than "is Company Y a shell".
6. Assume permanence. If you would not want a prompt read aloud in court, do not send it to a cloud service.
