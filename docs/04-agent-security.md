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

MCP connectors ([Part 2.3](02-ai-assistants.md#23-connectors-mcp-and-agent-modes)) add two further attack paths.

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
