---
title: "About, licence and contact"
description: "Licence, how to cite the guide, disclaimer, contact and the rest of our repositories."
readme-heading: false
---

## Contributing

We welcome corrections and additions.

### How to contribute

1. Fork the repository and create a branch.
2. Edit the files in the `docs/` folder, not README.md. README.md is generated from them. For a new tool, include what it does, who owns it, what it costs, where the data goes, and a source with a date. Footnotes are defined once, in `docs/references.md`.
3. Run `python scripts/build_readme.py` to regenerate README.md and the references page, and `quarto render docs` if you have Quarto installed. The pull request checks run both.
4. Open a pull request with a short description.

### Rules we hold ourselves to

- **Every fact has a source and a date.** A number without a footnote and an access date does not go in. If we cannot source it, we say it in words or leave it out.
- **Vendor neutrality.** We describe what a tool does and what its terms say. We do not rank vendors on anything we cannot measure.
- **OPSEC awareness.** Think about what a reader exposes by following your advice.
- **Plain language.** Short sentences. No marketing words.
- **Follow the existing structure** and the rubric in [Part 1](01-opsec-rubric.md#part-1-reading-the-opsec-rubric).

### Areas where help is most useful

- Verifying prices and data terms before each spring and autumn review
- Tools and sources outside Europe and North America
- Case studies that can be shared
- Translations

## License

This work is licensed under a [Creative Commons Attribution 4.0 International License](https://creativecommons.org/licenses/by/4.0/).

[![License: CC BY 4.0](https://img.shields.io/badge/License-CC_BY_4.0-lightgrey.svg)](https://creativecommons.org/licenses/by/4.0/)

You are free to share and adapt this work for any purpose, including commercially, as long as you credit AB//LABS, link to the license, and say whether you changed anything. You may not suggest that AB//LABS endorses you or your use, and you may not add legal or technical restrictions that stop others doing what the license allows.

The full legal text is in the [LICENSE](https://github.com/atlas-bear/osint-ai-guide/blob/main/LICENSE) file. Scripts, configuration and workflow files in this repository are software rather than text, and are licensed separately under the MIT License; see [LICENSE-CODE](https://github.com/atlas-bear/osint-ai-guide/blob/main/LICENSE-CODE).

### Copyright notice

```text
Copyright (c) 2025-2026 AB//LABS (formerly Atlas|Bear Labs)

This work is licensed under the Creative Commons Attribution 4.0 International License.
To view a copy of this license, visit https://creativecommons.org/licenses/by/4.0/ or
send a letter to Creative Commons, PO Box 1866, Mountain View, CA 94042, USA.

THE WORK IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED,
INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A
PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE WORK
OR THE USE OR OTHER DEALINGS IN THE WORK.
```

### How to cite this guide

The repository includes a [CITATION.cff](https://github.com/atlas-bear/osint-ai-guide/blob/main/CITATION.cff) file, which GitHub's "Cite this repository" button reads. Every release is archived on Zenodo. The DOI for all versions is [10.5281/zenodo.23314064](https://doi.org/10.5281/zenodo.23314064); the DOI for version 3.0.0 is [10.5281/zenodo.23314068](https://doi.org/10.5281/zenodo.23314068). Cite the version you used.

#### Academic papers

> AB//LABS and Clontz, R. (2026). AI-Enhanced OSINT: A Practical Guide for Illicit Trade Intelligence (Version 3.0.0). Zenodo. <https://doi.org/10.5281/zenodo.23314068>. Licensed under CC BY 4.0.

#### Presentations

> Source: "AI-Enhanced OSINT: A Practical Guide for Illicit Trade Intelligence" by AB//LABS (CC BY 4.0)

#### Adaptations

> Based on "AI-Enhanced OSINT: A Practical Guide for Illicit Trade Intelligence" by AB//LABS, adapted with modifications. Original work licensed under CC BY 4.0.

## Disclaimer

This guide is for education. You are responsible for complying with the laws that apply to you, for respecting privacy and ethical limits, for your own operational security, and for how you use these tools. We have checked the facts here as carefully as we can on the dates shown, and we will correct mistakes when they are reported, but prices, policies and products change without notice. The authors and contributors are not responsible for any misuse of this information.

## Contact and Support

- **Corrections and suggestions:** open a GitHub Issue or a pull request.
- **Questions:** use GitHub Discussions.
- **Security concerns:** use GitHub's private vulnerability reporting on this repository (Security tab), or email [support@ab-labs.io](mailto:support@ab-labs.io). See [SECURITY.md](https://github.com/atlas-bear/osint-ai-guide/blob/main/SECURITY.md).
- **Academic partnerships:** email [support@ab-labs.io](mailto:support@ab-labs.io).

## Acknowledgments

Thanks to the OSINT community for sharing what it learns. Thanks to the security researchers who find and report the problems described in Part 4. Thanks to the teachers and students who keep asking better questions. And thanks to the open-source developers whose tools make most of this possible.

Very special thanks to the lecturers, students and alumni of [The Summer School on Illicit Trade](https://www.rug.nl/education/summer-winter-schools/illicit-trade/?lang=en) at the University of Groningen for their commitment to building a global community of scholars and practitioners dedicated to understanding and combating illicit networks. Your collaborative spirit, rigorous academic approach, and willingness to bridge theory with real-world application continue to inspire and inform the methodologies presented in this guide.

**Last updated:** 12 October 2026
**Version:** 3.0 (see [CHANGELOG](https://github.com/atlas-bear/osint-ai-guide/blob/main/CHANGELOG.md))
**Contributors:** [rhinonix](https://github.com/rhinonix), [jxc112](https://github.com/jxc112)

## Our repositories

| Repository | Purpose | Status |
| --- | --- | --- |
| [osint-tools](https://github.com/atlas-bear/osint-tools) | Maritime and supply chain OSINT tools, also at [library.ab-labs.io/osint-tools](https://library.ab-labs.io/osint-tools/) | ![Status](https://img.shields.io/github/last-commit/atlas-bear/osint-tools) |
| [recommended-reading](https://github.com/atlas-bear/recommended-reading) | Curated intelligence reading list | ![Status](https://img.shields.io/github/last-commit/atlas-bear/recommended-reading) |
| [osint-ai-guide](https://github.com/atlas-bear/osint-ai-guide) | AI applications in OSINT (this guide) | ![Status](https://img.shields.io/github/last-commit/atlas-bear/osint-ai-guide) |

The MARA maritime intelligence platform is in private development and is not yet public.

Everything above is gathered at the [Library](https://library.ab-labs.io/). AB//LABS began as Atlas|Bear Labs, the technical side of [Atlas|Bear](https://atlasbear.co), and is now a company of its own. The two still work together, and our repositories keep the `atlas-bear` name on GitHub for now.

**Learn more:** [ab-labs.io](https://ab-labs.io), [Atlas|Bear](https://atlasbear.co) and its [Academy](https://www.atlasbear.academy) • **Contact:** [support@ab-labs.io](mailto:support@ab-labs.io)
