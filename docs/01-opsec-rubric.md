## Part 1: Reading the OPSEC rubric

<!-- last-reviewed: 2026-10-12 -->

Earlier versions of this guide gave each tool one OPSEC rating. That hid the real questions. A platform can protect your data well and still log every query you make under your own name. A free local model can be safe for your data and still be the wrong tool for a report that needs sources. So we now rate four things separately, and every rated table in this guide uses the same four letters.

| Letter | Question | 🟢 | 🟡 | 🔴 |
| --- | --- | --- | --- | --- |
| **T** Training | Are my inputs used to train the vendor's models? | Never, or excluded by contract (enterprise plans, API, local models) | On by default with an opt-out, or an opt-out with carve-outs such as safety review | On with no opt-out, or the policy is unclear |
| **R** Retention and legal exposure | How long are my logs kept, and who can compel them? | Zero retention or 30 days or less, and you can delete | A fixed default retention (for example 18 months, or five years if you opt in to training), or a history of litigation holds | Indefinite or unclear, or hosted where compelled access is routine |
| **D** Deployment control | Can I run it locally, self-host it, or choose a sovereign or private cloud? | Local or self-hosted | Enterprise cloud with a choice of region and no-training terms (Vertex AI, Bedrock, Azure OpenAI and Foundry) | Consumer cloud only |
| **Q** Query attribution | Can the vendor, or my own employer's audit log, tie this query about this target to me? | No account needed, or fully local | Account-bound, but a pseudonymous account is possible and logs are not shared | Real-identity account, or full analyst-query audit logging. Audit logs are a compliance feature on enterprise platforms and an exposure for sensitive cases. Both are true |

Take a row that reads `T🟢 R🟢 D🟡 Q🟡`. It means the vendor does not train on your inputs and keeps little. You cannot run it yourself. Your organisation can see what you asked. We rate what the vendor's published terms say on the date shown under each table. Enterprise contracts can change a rating. Running open weights on your own machine makes all four green. Where we could not confirm a policy we say so rather than guess.

Two things the rubric does not measure. It does not say how good the tool is at the job. And it does not replace your own threat model. A journalist protecting a source, a compliance analyst screening a supplier, and a student in a lab face different adversaries. Each should read the same row differently.
