## Part 10: Automation and agentic coding for OSINT

<!-- last-reviewed: 2026-10-12 -->

Most investigators now write small scripts. A scraper for a registry. A screen of a supplier list against OpenSanctions. A notebook that joins trade data to company records. AI coding agents make that work much faster. They also read everything you show them, so the same rules apply as for chat assistants. The rubric for a coding tool follows the model behind it and the account you use.

### 10.1 Agentic coding tools

| Tool | What it is | Pricing (October 2026) | Where your code goes |
| --- | --- | --- | --- |
| **Claude Code** (Anthropic) | Terminal and IDE agent that reads, edits and runs code | Included with Pro, Max, Team and Enterprise; also via the API, Bedrock, Vertex AI and Foundry[^claude-pricing] | On Free, Pro and Max accounts, sessions fall under the consumer training setting ([Part 2.1](02-ai-assistants.md#21-comparison-table)). Team, Enterprise and API are excluded from training |
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

A minimal local setup needs four pieces. Docling converts the files. A local embedding model runs through Ollama. sqlite-vec or Chroma holds the vectors. A 20 to 30 billion parameter local model answers. AnythingLLM and Open WebUI ([Part 3.3](03-local-models.md#33-runners)) package most of this behind a user interface. Whatever you build, keep the retrieved passages visible in every answer so the analyst can check them, and never let the model answer from memory alone.

*Model and product names verified 2026-10-12 for existence; test any of them on your own documents before you trust them.*

### 10.4 Safe development checklist

1. Develop in a virtual machine or container, with a local Git repository.
2. Use AI coding tools on an account whose terms you have read. Prefer a local model or an enterprise account for anything that touches case data.
3. Never include real targets, identifiers or credentials in prompts, code, comments or test data.
4. Review all generated code. Pay attention to anything that makes a network request.
5. Respect rate limits and terms of service for the sites you collect from. Automated collection can breach a site's terms and, in some jurisdictions, the law.
6. Encrypt data at rest, log access, and back up securely.
