# CHANGES — make tknowledge.org agent-readable (D-206)

Branch `agent-readable`. Not deployed. Nothing on mcp.tknowledge.org was touched.

## What an AI agent receives at each URL

Two stages: what works as soon as this branch is merged to `main` (GitHub Pages alone), and what
needs the edge worker in `edge/` (Cloudflare, deployed by the owner — OPEN-QUESTIONS Q1).

| URL | Browser | AI agent, after merge (Pages only) | AI agent, with the edge worker |
|---|---|---|---|
| `/` | HTML; box "Using an AI assistant? Show it this page" under the hero | HTML with `<link rel="alternate" type="text/markdown" href="/index.md">`; the box's text is in the HTML | `Accept: text/markdown` or a known AI User-Agent → `/index.md`, `text/markdown; charset=utf-8`, `Vary: Accept, User-Agent` |
| `/docs/`, `/personal/`, `/organizations/`, `/catalog/`, `/privacy/`, `/blog/`, `/blog/numbers/`, `/blog/delete-the-chat-keep-the-knowledge/` | HTML | HTML with rel=alternate to its `.md` | the `.md` twin, same headers |
| `/index.md`, `/docs.md`, `/personal.md`, `/organizations.md`, `/catalog.md`, `/privacy.md`, `/blog.md`, `/blog/*.md` | Markdown text | Markdown, `text/markdown; charset=utf-8` (Pages already sends this type) | same |
| `/llms.txt` | text | curated index: H1, the site's definition, the connect URL, H2 lists of links to every `.md` | `text/plain; charset=utf-8` |
| `/llms-full.txt` | text | every page's Markdown, concatenated | same |
| `/sitemap.md`, `/sitemap.xml`, `/robots.txt` | — | new; robots.txt allows each bot named in R3 by name, and everyone else | same |
| Googlebot, Bingbot | — | HTML | always HTML, even with `Accept: text/markdown` (R4) |

`/index.md` starts with the box: the line addressed to the agent, the site's definition verbatim,
the six connect blocks with their status, and the free-store line.

## Changes by requirement

- **R1 one source.** `src/pages/<name>.html` holds each page's text once; `build/build.py` writes the
  HTML page and the `.md` from it. Shared text (connect blocks, definition, footer) is in
  `src/partials/` and included where used, so the home box and /docs say the same thing by construction.
  `build/check.py` compares the words of each `.md` with its HTML page (nav, footer, buttons and order
  ignored): 0 differences on all 9 pages.
- **R2, R4 negotiation and agent detection.** `edge/worker.js` (Cloudflare Worker). GitHub Pages cannot
  vary on request headers, so this cannot work from the repository alone. Agent list in one file:
  `edge/agents.json` (also feeds robots.txt). q-values are parsed; ties go to the explicitly listed type.
- **R3** `.md` endpoints, `/llms.txt`, `/llms-full.txt`, `/sitemap.md`, plus `sitemap.xml` and
  `robots.txt` — neither existed before, so "keep" became "create".
- **R5** `<link rel="alternate" type="text/markdown">` in every page's head; also a `canonical` link.
- **R6** the box under the hero, `<details>`, no CSS hiding. Its connect blocks use the strings and
  statuses in D-206. The free-store line follows /docs (100 writes a month), not the "1000" in D-206 — Q3.
- **R7 /docs** in five sections: 1 Connect (connect blocks, expected result, pointer to the refusal codes),
  2 Docker and 3 Keys (placeholders — no facts in the repositories, Q4 and Q5), 4 Organisations
  (three sentences), 5 Reference (what the store holds, tools, refusals, limits, support — text unchanged,
  headings one level down). A small table of contents at the top.
- **R8** every page's title is one sentence naming T-knowledge and what it is; every meta description
  ends with the connect URL; JSON-LD `SoftwareApplication` on the home page.
- **R10 no JavaScript-only content.** The catalog used to be drawn in the browser from /v1/catalog; it is now
  rendered at build time from `src/data/catalog.json` (26 current, 2 withdrawn as of 2026-10-16), and the
  script only filters. Tab panels (home "Same claim, two outcomes", Organisations pricing) were served with
  the second panel `hidden`; they are now all in the served page and the script hides inactive panels
  after it loads. The inline scripts moved to `/site.js` and `/catalog/catalog.js`.

## Not changed

Page texts other than the ones above, the design, the hero (D-121), `/standard/`, `CNAME`.
