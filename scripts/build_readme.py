#!/usr/bin/env python3
"""Build README.md and docs/references.md from the pages in docs/.

The files in docs/ are the source of truth for the guide. Each page carries a
front-matter title and H2 subsections; the website (Quarto) renders them as
they are, and this script joins them in the order below into one README.md
for GitHub: titles become headings, body headings move down one level,
cross-page links become in-page anchors, and the footnote definitions from
docs/_references.md go at the end so GitHub renders them. It also writes
docs/references.md, the References page of the website, as a numbered list.

    python scripts/build_readme.py          # rewrite README.md and docs/references.md
    python scripts/build_readme.py --check  # exit 1 if either is out of date
"""
import pathlib
import re
import sys

ROOT = pathlib.Path(__file__).resolve().parent.parent
DOCS = ROOT / "docs"
README = ROOT / "README.md"
REFERENCES_SRC = DOCS / "_references.md"
REFERENCES_PAGE = DOCS / "references.md"
ORDER = [
    "index.md", "01-opsec-rubric.md", "02-ai-assistants.md", "03-local-models.md",
    "04-agent-security.md", "05-opsec.md", "06-tradecraft.md", "07-synthetic-media.md",
    "08-adversarial-ai.md", "09-platforms-and-data.md", "10-automation.md", "11-legal.md",
    "12-educators.md", "13-workflow.md", "conclusion.md", "appendix-a.md", "about.md",
]
REPO_BLOB = "https://github.com/atlas-bear/osint-ai-guide/blob/main/"
REPO_FILES = ["CHANGELOG.md", "LICENSE-CODE", "LICENSE", "CITATION.cff", "SECURITY.md"]
BACK = "[↑ Back to top](#ai-enhanced-osint-a-practical-guide-for-illicit-trade-intelligence)"
FRONT = re.compile(r'^---\n(?P<yaml>(?:[^\n]*\n)*?)---\n\n?', re.S)
REF_DEF = re.compile(r"^\[\^([a-z0-9-]+)\]:\s*(.*)$", re.M)
REF_USE = re.compile(r"\[\^([a-z0-9-]+)\](?!:)")
PAGE_HEADER = "<!-- GENERATED FILE. Do not edit by hand. Edit docs/_references.md and run: python scripts/build_readme.py -->\n\n"


class BuildError(Exception):
    pass


def slug(heading):
    s = heading.strip().lower()
    s = re.sub(r"[^\w\s-]", "", s)
    return re.sub(r"\s", "-", s)


def front_matter(text, name):
    m = FRONT.match(text)
    if not m:
        raise BuildError(f"docs/{name}: no front matter")
    meta = {}
    for line in m.group("yaml").splitlines():
        k, _, v = line.partition(":")
        meta[k.strip()] = v.strip().strip('"')
    if "title" not in meta:
        raise BuildError(f"docs/{name}: no title in front matter")
    return meta, text[m.end():]


def readme_form(text, name):
    """A docs page as README text: the title becomes an H1 for the front page and an H2
    elsewhere, and body headings move down one level. Pages marked readme-heading: false
    keep their own H2 sections (the About page)."""
    meta, body = front_matter(text, name)
    if name == "index.md":
        return f"# {meta['title']}\n\n{body}"
    if meta.get("readme-heading") == "false":
        return body
    body = re.sub(r"^(#{2,5}) ", lambda h: "#" + h.group(1) + " ", body, flags=re.M)
    return f"## {meta['title']}\n\n{body}"


def split_h2(text):
    """Chunks at H2 boundaries, ignoring code fences."""
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


def references():
    """(intro text, ordered list of (key, definition line)) from docs/_references.md."""
    text = REFERENCES_SRC.read_text(encoding="utf-8")
    first = REF_DEF.search(text)
    intro = text[: first.start()].strip() if first else text.strip()
    defs = [(m.group(1), m.group(0), m.group(2)) for m in REF_DEF.finditer(text)]
    return intro, defs


def build():
    out, used = [], []
    for name in ORDER:
        text = readme_form((DOCS / name).read_text(encoding="utf-8"), name)
        for m in REF_USE.finditer(text):
            if m.group(1) not in used:
                used.append(m.group(1))
        text = re.sub(r"\]\([0-9a-z-]+\.md#([^)]+)\)", r"](#\1)", text)       # cross-page -> in-page
        for f in REPO_FILES:
            text = text.replace(f"]({REPO_BLOB}{f})", f"]({f})")             # site URLs -> repo-relative
        for chunk in split_h2(text):
            if not chunk.startswith("## "):
                out.append(chunk + "\n\n## Table of Contents\n\n<!-- TOC -->\n<!-- /TOC -->\n\n---")
            else:
                out.append(chunk + "\n\n" + BACK + "\n\n---")
    intro, defs = references()
    defined = [k for k, _, _ in defs]
    missing = [k for k in used if k not in defined]
    if missing:
        raise BuildError(f"footnotes used without a definition in docs/_references.md: {missing}")
    unused = [k for k in defined if k not in used]
    if unused:
        print(f"warning: definitions never used: {unused}", file=sys.stderr)
    out.append("## References\n\n" + intro + "\n\n" + "\n".join(line for _, line, _ in defs))
    text = "\n\n".join(out) + "\n"
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
    page = ('---\ntitle: "References"\ndescription: "Every footnote in the guide, in order of first use, with the date we last opened each link."\n---\n\n' + PAGE_HEADER + intro + "\n\n"
            + "\n".join(f'1. <a id="ref-{k}"></a>{body}' for k, _, body in defs) + "\n")
    return text, page


def main():
    try:
        text, page = build()
    except BuildError as err:
        print(f"build failed: {err}", file=sys.stderr)
        return 1
    targets = [(README, text), (REFERENCES_PAGE, page)]
    if "--check" in sys.argv:
        stale = [p.name for p, want in targets
                 if not p.exists() or p.open(encoding="utf-8", newline="").read() != want]
        if stale:
            print(f"out of date: {', '.join(stale)}. Run: python scripts/build_readme.py", file=sys.stderr)
            return 1
        print("README.md and docs/references.md match docs/")
        return 0
    for p, want in targets:
        with p.open("w", encoding="utf-8", newline="") as fh:
            fh.write(want)
    print(f"wrote README.md ({len(text.splitlines())} lines) and docs/references.md")
    return 0


if __name__ == "__main__":
    sys.exit(main())
