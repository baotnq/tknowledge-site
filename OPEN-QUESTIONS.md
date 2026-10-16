# OPEN QUESTIONS for the owner (D-206)

Each one is a fact the brief or the repositories do not hold. Nothing below was guessed into the site;
where text was needed, the placeholder from D-206 stands.

**Q1. The edge for R2 and R4 — Cloudflare Worker, or something else?**
GitHub Pages cannot answer the same URL differently by `Accept` or `User-Agent`. DNS for tknowledge.org
is already on Cloudflare (DNS only, not proxied). `edge/` holds a tested Worker; deploying it means
proxying the four Pages records and `wrangler deploy` from your Cloudflare account (`edge/README.md`).
The alternative is to serve the site from the VPS behind Caddy. Which do you want? Until then, agents get
the `.md` files, `/llms.txt` and the rel=alternate links, but not Markdown on the bare URL.

**Q2. The catalog is now a snapshot.** It is rendered at build time (R10 forbids content only JavaScript
draws). After each `tk catalog approve` or `withdraw`, someone runs `python3 build/build.py --fetch` and
pushes. Should a scheduled GitHub Action do that (for example hourly), or is by hand enough?

**Q3. Free-store line.** D-206 R6 gives "Trial: 1000 writes, reads unlimited" and says "from /docs, keep in
sync". /docs and the deployed server (seat plans, 14/10) say Free: 100 writes a month. The box says
"Free: 100 writes a month, reads unlimited." Is 100 right, or did you mean a different trial?

**Q4. Docker (Personal).** The only Docker files are in `t-knowledge-system`: a development
`docker-compose.yml` that builds from source, needs two sibling repositories (cause-channel,
cause-justified-change-monitoring) and uses a development grant key. There is no published image name,
run command for one person, list of environment variables, or root-key step. /docs §2 carries the
placeholder. What is the Personal image, and its run command?

**Q5. Keys, free and paid.** Neither repository mentions Lemon Squeezy (D-157) or what a key changes.
/docs §3 carries a placeholder. What does the paid key unlock versus free — writes, signers, updates —
and what is the Lemon Squeezy page URL?

**Q6. Exact UI strings for Gemini and Grok.** D-206 gives Gemini as "add an MCP server … and authorise"
(no menu path) and Grok as "grok.com/connectors → New Connector → Custom → URL" (not tried). The site
uses those words. When each is tried, the block and its status line change in one place:
`src/partials/connect.html`.

**Q7. Claude Code status has no date.** R9 asks every connect block for its status and date; D-206 gives
Claude Code as "Status: in use." Since when? (Claude web says "in use since October 2026".)

**Q8. "Expected result: instructions() returns the meta lines M1–M3 and an index."** Copied from D-206 into
/docs §1; not checked against the server's answer in this task. Confirm, or give the wording.

**Q9. Singular wording against R9 (FIXED: "AI agents propose, people sign — plural").** Left as they are
because the hero is fixed by D-121 and the brief adds only the box:
- home hero: "The AI proposes; a person signs." and "The AI proposes a claim. A person signs it."
- Organisations hero: "The agent proposes. A named person signs."
- blog post: "The AI proposes a claim; a human signs it" (a dated post, quoted from the store).
Change the first two to plural?

**Q10. /personal says "Works with Claude — web, Desktop, mobile and Claude Code. Other MCP clients connect
with a key."** Since 2026-10-14 ChatGPT connects with OAuth, without a key (D-129). Update that line to
point at the connect blocks?

**Q11. The site's definition.** The box and /llms.txt quote, verbatim, the sentence that opens /docs:
"T-knowledge is a store for an assistant's knowledge in which every line is a principle, a checked claim (T)
or an assumption (A), signed by a named person, with the ids it rests on. It is reached as an MCP server."
The hero has no single defining sentence. Is this the definition you mean (D-120)?
