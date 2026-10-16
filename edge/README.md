# edge — one URL, HTML for people, Markdown for AI agents

GitHub Pages serves the files but cannot look at request headers, so it cannot
choose between a page and its Markdown twin. `worker.js` is a Cloudflare Worker
that sits in front of Pages and makes only that choice (D-206 R2, R4):

| Request | Answer |
|---|---|
| `Accept: text/markdown` ranked above `text/html` (q-values parsed) | the page's `.md`, `Content-Type: text/markdown; charset=utf-8` |
| User-Agent in `agents.json` → `markdown` (ChatGPT-User, ClaudeBot, PerplexityBot, Grok …), even with `Accept: */*` | the page's `.md` |
| User-Agent in `agents.json` → `html_always` (Googlebot, Bingbot) | always the HTML |
| anything else (browsers) | the HTML |

Every page answer carries `Vary: Accept, User-Agent` and a `Link: <…md>; rel="alternate"` header.
`.md` files get `text/markdown; charset=utf-8`, `llms.txt` and `llms-full.txt` get `text/plain; charset=utf-8`.
Which paths are pages is in `routes.json`, written by `build/build.py`.

Without the worker the site still works: the `.md` files, `/llms.txt`, `/llms-full.txt`
and `/sitemap.md` are plain files on Pages (Pages already serves `.md` as
`text/markdown; charset=utf-8`), and every HTML page links its twin with
`<link rel="alternate" type="text/markdown">`. Only negotiation on the same URL needs the worker.

## Test

    node --test edge/worker.test.mjs
    python3 -m http.server 8090 &          # the built site
    node edge/dev.mjs 8091                  # the worker in front of it
    curl -sI -H 'Accept: text/markdown' http://127.0.0.1:8091/

## Deploy (owner — not done)

1. Cloudflare dashboard → tknowledge.org → DNS: switch the four GitHub Pages A records
   (and AAAA, if any) from "DNS only" to "Proxied". SSL/TLS mode: Full (not Full strict: GitHub Pages may not renew its own certificate once the records are proxied).
2. `npx wrangler login`, then from this folder `npx wrangler deploy`.
3. Run the curl tests in TESTS.md against https://tknowledge.org.

To undo: `npx wrangler delete` and set the records back to "DNS only".
