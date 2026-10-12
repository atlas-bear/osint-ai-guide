## Part 3: Local and open-weight models

<!-- last-reviewed: 2026-10-12 -->

A model whose weights you download and run on your own machine sends nothing anywhere. That makes local models the right default for anything that names a target, a source or a case. The quality gap with the big cloud models has narrowed a great deal since 2025. A 20 to 30 billion parameter model on a laptop with 32 GB of memory is now good enough for most OSINT tasks. That includes summarising documents, extracting entities, translating and drafting. For long multi-step research with web access, cloud models are still better. So we use local models for the sensitive parts and cloud models for the public parts.

### 3.1 Open-weight models in 2026

Most of the strongest open-weight models now come from Chinese labs, with OpenAI, Google, Mistral, IBM and NVIDIA also publishing weights. Meta started the open-weights movement with Llama. It moved to closed models in 2025 and 2026 and released only one open model, Muse Glimmer 30B, in August 2026.[^meta-avocado][^meta-glimmer] Llama 4 remains available, with a licence clause for companies above 700 million monthly users and an exclusion of EU users from its multimodal models.[^llama4-eu]

| Family | Publisher | Licence | Notes |
| --- | --- | --- | --- |
| **DeepSeek V4** (Preview April 2026, V4-Pro August 2026) | DeepSeek (China) | Open weights | Strong reasoning. The DeepSeek app and API store data in China, and the app is banned on government devices in Australia, Taiwan, Italy, South Korea, India and several US agencies.[^deepseek-v4][^deepseek-bans] The weights run locally are unaffected by any of that |
| **Qwen 3.8** (August 2026) | Alibaba (China) | Apache 2.0 for the 27B model | Our default local model for multilingual document work |
| **gpt-oss** 20B and 120B (August 2025) | OpenAI | Apache 2.0 | OpenAI's first open weights since 2019.[^gpt-oss] The 20B model runs on a 16 GB laptop |
| **Gemma 4** (April 2026) | Google | Apache 2.0 | Good small models for on-device work |
| **Mistral Large 3** (675B mixture of experts) and **Medium 3.5** (128B, April 2026) | Mistral AI (France) | Apache 2.0 for Large 3 | EU publisher. Medium 3.5 replaced the Magistral reasoning and Devstral coding lines[^mistral-changelog] |
| **IBM Granite 4.x** (4.0 October 2025, 4.1 April 2026, 4.2 August 2026, 3B to 30B) | IBM | Apache 2.0 | Enterprise-oriented small models with published training-data transparency. Granite Guardian adds safety and RAG groundedness checks. Granite-Docling (258M) converts PDFs and scans into structured text and is one of the better open tools for evidence processing[^granite] |
| **GLM-5.2** (June 2026) and **Kimi K3** (July 2026) | Zhipu and Moonshot (China) | Open weights | Large models for workstation or server use[^kimi-k3] |
| **Llama 4** and **Muse Glimmer 30B** | Meta | Llama licence | See note above |
| **NVIDIA Nemotron 3** | NVIDIA | Open weights | Tuned for NVIDIA hardware |

*Verified 2026-10-09. DeepSeek, gpt-oss, Granite, Kimi and Meta entries are footnoted. Dates for Qwen, Gemma, GLM and Nemotron come from release announcements we did not re-verify for this edition; check the model cards before you quote them.*

**Weights local, app or API abroad.** The same company can be green and red at once. Running DeepSeek or Qwen weights on your own hardware keeps your data on your hardware. Using the DeepSeek app or API sends it to servers in China under Chinese law. The decision matrix in the BLUF reflects that split.

### 3.2 Hardware tiers and model picks

| Your machine | Memory | What runs well | Our picks |
| --- | --- | --- | --- |
| Laptop | 16 to 32 GB | Models up to about 30B parameters at 4-bit quantisation | Qwen 3.8 27B, gpt-oss-20b, Gemma 4 26B, Granite 4.2 8B |
| Workstation (Apple Silicon Max or Ultra, or a 24 to 48 GB GPU) | 64 to 128 GB | Models up to about 120B | gpt-oss-120b, Mistral Medium 3.5, Granite 4.2 30B, NVIDIA Nemotron 3 Super |
| Server or multi-GPU box | 256 GB and up | Frontier-class mixture-of-experts models | DeepSeek V4-Pro, Mistral Large 3, GLM-5.2, Kimi K3 |

Apple Silicon machines with unified memory are the easiest way to run the 64 to 128 GB tier without building a GPU server. Quantised GGUF files are the common format. Hugging Face listed more than 210,000 GGUF model repositories on 9 October 2026.[^hf-gguf]

### 3.3 Runners

| Tool | What it is | Licence and cost | Watch out for |
| --- | --- | --- | --- |
| **Ollama** | Command line and desktop app that downloads and serves models. `ollama run hf.co/<org>/<model>` pulls any GGUF model from Hugging Face | Free, MIT | Since September 2025 Ollama also offers cloud models. Any model tag ending in `-cloud`, and anything that asks you to run `ollama signin`, runs on Ollama's servers, not your machine.[^ollama-cloud] For sensitive work use only tags without the suffix and never sign in |
| **LM Studio** | Desktop app with a chat window, model browser and local API server | Free, including for work since July 2025[^lmstudio-free] | Check that the local server is bound to localhost only |
| **llama.cpp** | The inference engine most of the above are built on | MIT | Command line; best for servers and automation |
| **Open WebUI** | Self-hosted chat interface with document upload and search | Open source with a branding clause above 50 users[^openwebui-license] | Runs as a web service; keep it on a private network |
| **Jan** | Desktop app that runs models offline | Apache 2.0 | |
| **AnythingLLM** | Desktop or server app that adds document collections and local search on top of any model | MIT | Good first step into the private search setup described in [Part 10.3](10-automation.md#103-private-search-over-investigation-corpora) |

A test we run on every new setup: unplug the network, run a query, and confirm it answers. If a tool needs a login or a connection to answer, it is not local.
