#!/usr/bin/env python3
"""Acceptance checks on the built files (D-206 R11, the parts that need no server):
every HTML page links its Markdown twin; the home page's box for AI assistants is
in the served HTML and its text is the top of /index.md; and each .md holds the
same words as its HTML page, ignoring nav, footer, buttons and order.

    python3 build/check.py        # exit 1 on any failure
"""
import os
import re
import sys
from collections import Counter

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import build  # noqa: E402

ROOT = build.ROOT
WORD = re.compile(r"[\w$€%@.+'’/:-]+", re.U)


def words(text):
    out = []
    for w in WORD.findall(text):
        w = w.strip(".:/'’-")
        if w and re.search(r"\w", w):
            out.append(w.lower())
    return Counter(out)


def html_text(page_html):
    """Visible words of the header and main of a generated page."""
    body = page_html.split("<body>", 1)[1].split("<footer", 1)[0]
    root = build.parse(body)
    labels = [re.sub(r"\s+", " ", "".join(build.text_nodes_all(n))) for n in build.walk(root)
              if n.tag == "button" and n.attrs.get("role") == "tab"]
    return " ".join(build.text_nodes(root)) + " " + " ".join(labels)


def md_text(md):
    md = re.sub(r"^<!--.*?-->\n", "", md, flags=re.S)
    md = md.rsplit("\n---\n", 1)[0]                      # footer
    md = re.sub(r"\]\((?:https?://|mailto:)[^)]*\)", "]", md)  # link targets
    md = re.sub(r"^```.*$", "", md, flags=re.M)
    md = re.sub(r"^\s*(?:[-*]|\d+\.)\s", " ", md, flags=re.M)
    md = re.sub(r"^#+\s|^>\s?|\*\*|\*|`|\||^\|?-+\|.*$", " ", md, flags=re.M)
    return md.replace("\\|", "|")


def main():
    fails = []
    pages = {n: build.load_page(n) for n in build.ORDER}
    for n, p in pages.items():
        out = "index.html" if p["path"] == "/" else p["path"].strip("/") + "/index.html"
        page = open(os.path.join(ROOT, out), encoding="utf-8").read()
        md = open(os.path.join(ROOT, p["md"].lstrip("/")), encoding="utf-8").read()
        if f'<link rel="alternate" type="text/markdown" href="{p["md"]}">' not in page:
            fails.append(f"{out}: no rel=alternate to {p['md']}")
        a, b = words(html_text(page)), words(md_text(md))
        missing, extra = a - b, b - a
        print(f"{out:52} {p['md']:44} html {sum(a.values()):5} words, md {sum(b.values()):5};"
              f" only in html {sum(missing.values())}, only in md {sum(extra.values())}")
        if missing or extra:
            fails.append(f"{out}: only in html {dict(missing)}; only in md {dict(extra)}")

    home = open(os.path.join(ROOT, "index.html"), encoding="utf-8").read()
    m = re.search(r'<section class="block agent-box"[^>]*>(.*?)</section>', home, re.S)
    if not m or "<details>" not in m.group(1) or "Using an AI assistant? Show it this page" not in m.group(1):
        fails.append("index.html: the box for AI assistants is not in the served HTML")
    else:
        box = build.md_of(m.group(0))
        index_md = open(os.path.join(ROOT, "index.md"), encoding="utf-8").read()
        top = re.sub(r"^<!--.*?-->\n\n", "", index_md, flags=re.S)
        same = top.startswith(box)
        print(f"home box: {len(box)} characters; first in /index.md: {same}")
        if not same:
            fails.append("index.md does not start with the box's text")
        if re.search(r"display\s*:\s*none", open(os.path.join(ROOT, "site.css")).read().split(".agent-box", 1)[1]):
            fails.append("site.css hides something after .agent-box")

    for f in ("llms.txt", "llms-full.txt", "sitemap.md", "sitemap.xml", "robots.txt"):
        if not os.path.getsize(os.path.join(ROOT, f)):
            fails.append(f + " is empty")
    print("\n".join(["", "FAIL:"] + fails) if fails else "\nall checks passed")
    sys.exit(1 if fails else 0)


if __name__ == "__main__":
    main()
