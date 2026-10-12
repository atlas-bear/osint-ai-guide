#!/usr/bin/env python3
"""Build README.md from the pages in docs/.

The files in docs/ are the source of truth for the guide. This script joins
them in the order below into one README.md, converts cross-page links back to
in-page anchors, adds a table of contents and "back to top" links, and keeps
the footnote definitions from docs/references.md at the end so GitHub renders
them. Run it after editing anything in docs/:

    python scripts/build_readme.py          # rewrite README.md
    python scripts/build_readme.py --check  # exit 1 if README.md is out of date
"""
import pathlib
import re
import sys

ROOT = pathlib.Path(__file__).resolve().parent.parent
DOCS = ROOT / "docs"
README = ROOT / "README.md"
ORDER = [
    "index.md", "01-opsec-rubric.md", "02-ai-assistants.md", "03-local-models.md",
    "04-agent-security.md", "05-opsec.md", "06-tradecraft.md", "07-synthetic-media.md",
    "08-adversarial-ai.md", "09-platforms-and-data.md", "10-automation.md", "11-legal.md",
    "12-educators.md", "13-workflow.md", "conclusion.md", "appendix-a.md", "about.md",
    "references.md",
]
REPO_BLOB = "https://github.com/atlas-bear/osint-ai-guide/blob/main/"
REPO_FILES = ["CHANGELOG.md", "LICENSE-CODE", "LICENSE", "CITATION.cff", "SECURITY.md"]
BACK = "[↑ Back to top](#ai-enhanced-osint-a-practical-guide-for-illicit-trade-intelligence)"


def slug(heading):
    s = heading.strip().lower()
    s = re.sub(r"[^\w\s-]", "", s)
    return re.sub(r"\s", "-", s)


def split_h2(text):
    """Yield (heading_line_or_None, body) chunks at H2 boundaries, ignoring code fences."""
    chunks, cur, fence = [], [], False
    for line in text.splitlines():
        if line.startswith("```"):
            fence = not fence
        if line.startswith("## ") and not fence:
            chunks.append(cur)
            cur = [line]
        else:
            cur.append(line)
    chunks.append(cur)
    return ["\n".join(c).strip("\n") for c in chunks if "\n".join(c).strip()]


def build():
    out = []
    for name in ORDER:
        text = (DOCS / name).read_text(encoding="utf-8")
        text = re.sub(r"\]\([0-9a-z-]+\.md#([^)]+)\)", r"](#\1)", text)       # cross-page -> in-page
        for f in REPO_FILES:
            text = text.replace(f"]({REPO_BLOB}{f})", f"]({f})")             # site URLs -> repo-relative
        for chunk in split_h2(text):
            is_front = not chunk.startswith("## ")
            is_refs = chunk.startswith("## References")
            if is_front:
                out.append(chunk + "\n\n## Table of Contents\n\n<!-- TOC -->\n<!-- /TOC -->\n\n---")
            elif is_refs:
                out.append(chunk)
            else:
                out.append(chunk + "\n\n" + BACK + "\n\n---")
    text = "\n\n".join(out) + "\n"
    # table of contents from H2/H3 headings outside code fences
    toc, fence = [], False
    for line in text.splitlines():
        if line.startswith("```"):
            fence = not fence
            continue
        m = re.match(r"^(##|###) (.+)$", line)
        if m and not fence and m.group(2).strip() != "Table of Contents":
            indent = "" if m.group(1) == "##" else "  "
            toc.append(f"{indent}- [{m.group(2).strip()}](#{slug(m.group(2))})")
    text = text.replace("<!-- TOC -->\n<!-- /TOC -->", "<!-- TOC -->\n" + "\n".join(toc) + "\n<!-- /TOC -->", 1)
    return text


def main():
    text = build()
    if "--check" in sys.argv:
        current = README.read_text(encoding="utf-8") if README.exists() else ""
        if current != text:
            print("README.md is out of date. Run: python scripts/build_readme.py", file=sys.stderr)
            return 1
        print("README.md matches docs/")
        return 0
    README.write_text(text, encoding="utf-8")
    print(f"wrote README.md ({len(text.splitlines())} lines)")
    return 0


if __name__ == "__main__":
    sys.exit(main())
