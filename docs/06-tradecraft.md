## Part 6: Analytic tradecraft: hallucination, verification and provenance

<!-- last-reviewed: 2026-10-12 -->

Language models produce fluent text whether or not the facts behind it exist. Deep research modes have reduced the rate of invented citations, but not to zero. The failures are hardest to spot in exactly the places where you know least. Three facts frame how we work:

- Damien Charlotin's database of court decisions involving fabricated AI citations grew from 87 cases in May 2025 to about 2,028 in September 2026.[^charlotin] Lawyers are paid to check sources and still file invented ones.
- In 2025 Anthropic disrupted a state-sponsored espionage campaign that had used its models to run most of the intrusion work. It reported that the model "frequently overstated findings and occasionally fabricated data", including credentials that did not work.[^anthropic-espionage] If attackers' AI invents evidence, so will yours.
- Bellingcat's 2025 geolocation tests found that models presented wrong answers with the same confidence as right ones.[^bellingcat-geo]

### How we use AI output

1. **AI output is never a source.** A fact enters a report only with a primary source we have opened. That means the document, the registry entry, the image or the post itself. The model's role is to find candidates and draft prose.
2. **Open every citation.** In a deep research report, click every link and read the passage. Mark each claim confirmed, unconfirmed or wrong. Keep the marked-up report in the case file.
3. **Two independent sources for anything that matters.** A second AI tool is not a second source.
4. **Record provenance at collection time.** URL, date and time, an archived copy (the Wayback Machine or a local capture), and a hash for files. Do this before analysis, not after.
5. **Keep a prompt log.** Save the prompts and the model and version you used. If a finding is challenged you need to be able to show how you got there.
6. **Label AI assistance in the product.** Say which parts were drafted or translated with a model and which were checked by a person.
7. **Use structured techniques.** Analysis of competing hypotheses and a key assumptions check catch the confident-but-wrong answer better than rereading does. Use consistent words for confidence (for example the probability language in the US intelligence community's analytic standards) so readers know how sure you are.
8. **Watch for manipulated summaries, not only wrong ones.** If the source material came from an adversary, [Part 4](04-agent-security.md#part-4-ai-agent-security-for-analysts) applies.

### What models are good at

Used this way, assistants earn their place. They translate quickly and well across most languages we meet in trade work. They extract entities, dates and amounts from long documents. They summarise a 200-page tender or a court file so you know where to read. They draft the first version of a report. They help you think through a hypothesis by arguing the other side. None of that needs the model to be right about the world. It needs you to be.
