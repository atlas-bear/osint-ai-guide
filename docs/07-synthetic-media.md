## Part 7: Synthetic media, verification and AI geolocation

<!-- last-reviewed: 2026-10-12 -->

### 7.1 Generators, and what provenance marks can and cannot tell you

Convincing synthetic video and imagery became a consumer product in 2025. OpenAI's Sora 2 app (September 2025) lets users insert real people as "cameos" and went viral within days with fabricated clips of public figures.[^sora2] Google's Veo 3 and 3.1 produce video with synchronised audio. Google's "Nano Banana" image models (August 2025, with a Pro version in November 2025) edit photographs on instruction while keeping faces consistent. xAI's Grok Imagine generated sexualised images of real people in January 2026 and triggered regulatory action in several countries ([Part 2.1](02-ai-assistants.md#21-comparison-table)).

Two provenance systems try to label this content at the source.

- **C2PA Content Credentials** attach signed metadata about how a file was made and edited. Google's Pixel 10 (September 2025) was the first phone to sign every photo at capture.[^pixel-c2pa] Sora 2 output carries C2PA metadata and a visible moving watermark. OpenAI itself notes that the metadata "can easily be removed".[^sora2]
- **SynthID** is Google's invisible watermark. Since November 2025 the Gemini app can tell you whether an image or video carries a SynthID mark. It only detects Google's own output.[^synthid-gemini]

Both help when they are present. Neither proves anything when absent. Screenshots, re-encodes and most social platforms strip metadata, so a file with no credentials is the normal case, not a red flag.

### 7.2 Detection tools and how far to trust them

Automated detectors do much worse in the wild than on benchmarks. The Deepfake-Eval-2024 study collected real circulating deepfakes rather than lab samples. It found that open-source detectors' accuracy (AUC) fell by roughly 45 to 50 percent compared with academic test sets. Commercial detectors did better but stayed below trained human forensic analysts.[^deepfake-eval] TrueMedia.org, the best known free detector for journalists, shut its hosted service in January 2025 and open-sourced its models. A revival under Georgetown University was reported later that year.[^truemedia]

So we treat detectors as one signal among several and verify the way journalists do. The Global Investigative Journalism Network's Reporter's Guide to Detecting AI-Generated Content (September 2025, updated March 2026) is the best current walkthrough.[^gijn-ai] In short:

1. **Provenance first.** Who posted it, when, and where did it first appear? Reverse image search and archive lookups answer more cases than forensics does.
2. **Context second.** Does the weather, the shadows, the signage, the language on the signs, the vehicles match the claimed place and time?
3. **Forensics third.** Run a detector, and read its confidence as a hint. Look at hands, teeth, text, reflections and edges yourself.
4. **Audio counts.** Voice cloning is now routine in fraud. In May 2025 the FBI warned of AI voice messages impersonating senior US officials. In July 2025 someone used an AI voice of the US Secretary of State to contact foreign ministers over Signal.[^fbi-voice][^rubio]

### 7.3 AI geolocation

In April 2025 users noticed that OpenAI's reasoning models could identify where a photograph was taken from background details alone. They were often right to the city and sometimes to the street. Bellingcat tested the leading models in August 2025 on 20 images. Google's AI Mode did best and GPT-5 did worse than the earlier o4-mini. All of them hallucinated locations with full confidence some of the time.[^bellingcat-geo] An academic benchmark put o3 at roughly 60 percent city-level accuracy on one dataset.[^imageo-bench] GeoSpy, a dedicated geolocation service, closed public access in January 2025 after reporting showed stalkers were using it. It now sells only to law enforcement and enterprise under the name Raven.[^geospy]

For investigators this cuts two ways. It is a useful first pass on an image before you do the work by hand. And it means anyone can do the same to photographs of you, your colleagues and your sources. Stripping metadata is no longer enough. The background is the metadata.
