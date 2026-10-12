"""MkDocs hooks for the OSINT AI Guide site.

The guide's footnotes are defined once, in docs/references.md, so that the
single-file README can be generated from the same sources. MkDocs renders
footnotes per page, so this hook appends the definitions each page uses to
that page at build time, and turns the References page into a readable list.
"""
import pathlib
import re

REF_DEF = re.compile(r"^\[\^([a-z0-9-]+)\]:\s*(.*)$", re.M)
REF_USE = re.compile(r"\[\^([a-z0-9-]+)\](?!:)")
_defs = {}


def _load(config):
    if not _defs:
        text = (pathlib.Path(config["docs_dir"]) / "references.md").read_text(encoding="utf-8")
        for m in REF_DEF.finditer(text):
            _defs[m.group(1)] = m.group(0)


def on_page_markdown(markdown, page, config, files):
    _load(config)
    if page.file.src_path == "references.md":
        first = REF_DEF.search(markdown)
        head = markdown[: first.start()] if first else markdown
        items = [f'1. <a id="ref-{m.group(1)}"></a>{m.group(2)}' for m in REF_DEF.finditer(markdown)]
        return head.rstrip() + "\n\n" + "\n".join(items) + "\n"
    used = []
    for m in REF_USE.finditer(markdown):
        if m.group(1) not in used:
            used.append(m.group(1))
    if not used:
        return markdown
    missing = [k for k in used if k not in _defs]
    if missing:
        raise SystemExit(f"{page.file.src_path}: footnotes without a definition in references.md: {missing}")
    return markdown.rstrip() + "\n\n" + "\n".join(_defs[k] for k in used) + "\n"
