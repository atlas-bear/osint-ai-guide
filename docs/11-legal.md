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
- **Chat logs as evidence.** [Part 5.3](05-opsec.md#53-where-your-prompts-go) covers the OpenAI preservation order and the production of 20 million conversations. There is no privilege for what you tell a chatbot.
- **AI-generated evidence.** A proposed Federal Rule of Evidence 707 on machine-generated evidence was published for comment in 2025. In May 2026 the Advisory Committee declined to advance it and scheduled a conference for 15 October 2026. A separate proposal on authenticating suspected deepfakes is on its own track.[^fre-707] Courts have sanctioned lawyers in more than 2,000 cases for fabricated AI citations.[^charlotin]

### Standards and guidance

- The **Berkeley Protocol** remains the reference for lawful, ethical open source investigation. It has not been revised since 2020 and does not address AI.[^berkeley]
- GIJN's guide to detecting AI-generated content ([Part 7](07-synthetic-media.md#part-7-synthetic-media-verification-and-ai-geolocation)) is the most current practitioner guidance we know of.[^gijn-ai]
- **Telegram** changed its privacy policy in September 2024 to allow disclosure of IP addresses and phone numbers to authorities on valid requests.[^telegram-privacy]

### What we do

1. Collect the minimum personal data needed, record a lawful basis for holding it, and set a deletion date.
2. Do not use face search engines on scraped images for anything that could reach a European court.
3. Keep a chain of custody: who collected what, when, from where, and the hash of the file.
4. Treat AI assistance as something that must be disclosed and reproducible if the work reaches litigation.
5. Ask local counsel before cross-border collection, before any active engagement with a target, and before using commercial data brokers.
