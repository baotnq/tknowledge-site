# TESTS — D-206 R11

Run on 2026-10-16 12:44 +07 on branch `agent-readable`, before deploy. The production URL
tests (`https://tknowledge.org`) cannot pass yet: the site there is the old build, and negotiation needs
the edge worker (OPEN-QUESTIONS Q1). So the same requests were run against the built site served
locally (`python3 -m http.server 8090`) with the worker in front (`node edge/dev.mjs 8091`).
After deploy, repeat them with `E=https://tknowledge.org`.

## 1. Worker unit tests — `node --test edge/worker.test.mjs`

```
✔ Accept q-values decide, not substrings (0.998209ms)
✔ known AI agents get Markdown even with */*; search engines always HTML (24.249458ms)
✔ a page answers in Markdown with Vary, from its .md twin (2.062375ms)
✔ .md, llms.txt and other files (0.2965ms)
ℹ pass 4
ℹ fail 0
```

## 2. Static checks — `python3 build/check.py`

rel=alternate on every page; the box in the served HTML and equal to the top of /index.md; words of each
`.md` equal to the words of its HTML page (nav, footer, buttons and order ignored). The checker was
also run once with one word changed in docs.md: it failed on that word, as it should.

```
index.html                                           /index.md                                    html   642 words, md   642; only in html 0, only in md 0
docs/index.html                                      /docs.md                                     html  1095 words, md  1095; only in html 0, only in md 0
personal/index.html                                  /personal.md                                 html   600 words, md   600; only in html 0, only in md 0
organizations/index.html                             /organizations.md                            html   731 words, md   731; only in html 0, only in md 0
catalog/index.html                                   /catalog.md                                  html  4170 words, md  4170; only in html 0, only in md 0
blog/index.html                                      /blog.md                                     html    52 words, md    52; only in html 0, only in md 0
blog/delete-the-chat-keep-the-knowledge/index.html   /blog/delete-the-chat-keep-the-knowledge.md  html   351 words, md   351; only in html 0, only in md 0
blog/numbers/index.html                              /blog/numbers.md                             html   228 words, md   228; only in html 0, only in md 0
privacy/index.html                                   /privacy.md                                  html   469 words, md   469; only in html 0, only in md 0
home box: 1710 characters; first in /index.md: True

all checks passed
```

## 3. curl, through the local worker (`E=http://127.0.0.1:8091`)

```
$ curl -sI -H 'Accept: text/markdown' $E/
HTTP/1.1 200 OK
content-location: /index.md
content-type: text/markdown; charset=utf-8
vary: Accept, User-Agent

$ curl -sI $E/
HTTP/1.1 200 OK
content-type: text/html
vary: Accept, User-Agent

$ curl -sI -A 'ChatGPT-User' $E/
HTTP/1.1 200 OK
content-location: /index.md
content-type: text/markdown; charset=utf-8
vary: Accept, User-Agent

$ curl -sI -A 'Googlebot' $E/
HTTP/1.1 200 OK
content-type: text/html
vary: Accept, User-Agent

$ curl -sI -A 'Googlebot' -H 'Accept: text/markdown' $E/
HTTP/1.1 200 OK
content-type: text/html
vary: Accept, User-Agent

$ curl -sI -H 'Accept: text/html, text/markdown;q=0.9' $E/docs/
HTTP/1.1 200 OK
content-type: text/html
vary: Accept, User-Agent

$ curl -sI -A 'Mozilla/5.0 (compatible; ClaudeBot/1.0)' $E/catalog/
HTTP/1.1 200 OK
content-location: /catalog.md
content-type: text/markdown; charset=utf-8
vary: Accept, User-Agent

$ curl -s -A 'ChatGPT-User' $E/ | sed -n 3p
## Using an AI assistant? Show it this page
```

## 4. Endpoints — status and type

```
/index.md            200 text/markdown; charset=utf-8
/docs.md             200 text/markdown; charset=utf-8
/personal.md         200 text/markdown; charset=utf-8
/organizations.md    200 text/markdown; charset=utf-8
/catalog.md          200 text/markdown; charset=utf-8
/privacy.md          200 text/markdown; charset=utf-8
/llms.txt            200 text/plain; charset=utf-8
/llms-full.txt       200 text/plain; charset=utf-8
/sitemap.md          200 text/markdown; charset=utf-8
/sitemap.xml         200 application/xml
/robots.txt          200 text/plain
```

## 5. Production today (before merge), for comparison

```
$ curl -sI -H 'Accept: text/markdown' https://tknowledge.org/
HTTP/2 200 
content-type: text/html; charset=utf-8
vary: Accept-Encoding
$ curl -sI https://tknowledge.org/README.md   # how Pages types a .md file
HTTP/2 200 
content-type: text/markdown; charset=utf-8
```

## 6. Manual — owner, after deploy

New ChatGPT chat → paste `tknowledge.org` → ask "connect me to this". Record the result in the store as
test T1 of D-131. Not run.
