---
title: "Part 9: OSINT platforms and data sources"
description: "OSINT platforms and data sources worth an investigator's time, with who owns each, what it costs and where your queries go."
---

<!-- last-reviewed: 2026-10-12 -->

This Part replaces six separate vendor sections from earlier editions. We have removed tools that no longer exist, corrected owners and names, and dropped prices we could not confirm. [Appendix A](appendix-a.md#appendix-a-renamed-acquired-or-discontinued-2022-to-2026) lists everything that was renamed, bought or shut down. Most platforms here are account-bound services that log your queries, which is a compliance feature for their customers and a consideration for you. Where a platform processes your data with AI we say so; where it does not say what model it uses, we say that too.

## 9.1 Professional OSINT tools

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

## 9.2 Free structured data for illicit trade investigation

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

## 9.3 Platform and data access is shrinking

Several collection methods that OSINT courses still teach no longer work or now cost money.

- **X (Twitter).** TweetDeck became the paid X Pro in 2023. The API moved to pay-per-use pricing in 2026, at $0.005 per post read and $0.010 per user read with a monthly cap. The old free and basic tiers have closed.[^x-api] Grok remains the main way to search X conversationally, with the data terms described in [Part 2.1](02-ai-assistants.md#21-comparison-table).
- **Meta.** CrowdTangle shut down in August 2024. Its replacement, the Meta Content Library, is open to approved academic and non-profit researchers only.
- **Search APIs.** Microsoft retired the Bing Search APIs on 11 August 2025. It points developers to "Grounding with Bing" inside Azure agents, which does not return raw results.[^bing-retire] Google has announced the closure of the Custom Search JSON API on 1 January 2027.[^google-cse]
- **Search APIs for tool builders.** Brave ended its free Search API tier for new users in February 2026 and charges about $5 per 1,000 queries.[^brave-api] Tavily gives 1,000 free credits a month.[^tavily-pricing] Exa charges about 7 US dollars per 1,000 queries.[^exa-pricing]
- **Telegram.** Since September 2024 Telegram's privacy policy says it may share a user's IP address and phone number with authorities on a valid request. That changed its standing both as a collection target and as a tool.[^telegram-privacy]
- **Reddit, TikTok and others** now gate research access behind application processes and licences.

The practical answer is to budget for data and to build on the free structured sources in 9.2. Archive what you collect, because you may not be able to collect it again.

## 9.4 Geospatial intelligence

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

For AI geolocation of photographs see [Part 7.3](07-synthetic-media.md#73-ai-geolocation). Physical security monitoring platforms (Dataminr, Liferaft) are in 9.6.

## 9.5 Corporate, supply chain, trade, sanctions and blockchain

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

CipherTrace, listed in earlier editions, was discontinued by Mastercard in March 2024.[^ciphertrace] Bank transaction-monitoring systems (NICE Actimize, SAS, FICO Falcon, SymphonyAI NetReveal) are not OSINT tools and have moved to [Appendix A](appendix-a.md#appendix-a-renamed-acquired-or-discontinued-2022-to-2026).

*Verified 2026-10-09. Enterprise prices are not public; earlier editions' price ranges were estimates and have been removed.*

## 9.6 Enterprise intelligence and investigation platforms

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
