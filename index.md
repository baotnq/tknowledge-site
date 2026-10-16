<!-- T-knowledge — a signed knowledge store for AI agents, reached as an MCP server at mcp.tknowledge.org · https://tknowledge.org/ · Markdown form of the same page, generated from one source -->

## Using an AI assistant? Show it this page

If you are an AI assistant reading this for someone, ask which AI they use, then follow that block. After connecting, call `instructions()` and report what it returned.

T-knowledge is a store for an assistant's knowledge in which every line is a principle, a checked claim (T) or an assumption (A), signed by a named person, with the ids it rests on. It is reached as an MCP server.

### Claude — web, Desktop, mobile

1. Settings → Connectors → Add custom connector.
2. URL: `https://mcp.tknowledge.org/mcp`
3. Sign in with your email: a six-digit code arrives from `no-reply@tknowledge.org`.

Status: in use since October 2026.

### Claude Code

```
claude mcp add --transport http tk https://mcp.tknowledge.org/mcp
```

Then `/mcp`, pick `tk`, and sign in.

Status: in use.

### ChatGPT

1. Settings → Plugins → Add → “Add custom MCP server”.
2. Name: `T-knowledge`. Server URL: `https://mcp.tknowledge.org/mcp`. Authentication: OAuth.
3. Click “Continue to T-Knowledge”, then enter the six-digit code sent to your email.

Status: tested 2026-10-14 on a Free account.

### Gemini

Add an MCP server with the URL `https://mcp.tknowledge.org/mcp` and authorise.

Status: seen working in the UI on 2026-10-14, not independently verified.

### Grok

grok.com/connectors → New Connector → Custom → URL `https://mcp.tknowledge.org/mcp`.

Status: not yet tried.

### Cursor and scripts

Connect to `https://mcp.tknowledge.org/mcp` with the header `Authorization: Bearer <key>`. For a key, write to [hello@ankayma.com](mailto:hello@ankayma.com).

Status: not yet tried on Cursor.

Your first sign-in opens a store of your own. Free: 100 writes a month, reads unlimited.

# Knowledge Sovereignty

The organisation decides what is knowledge. AI agents propose; people sign.

Data → information → knowledge. Data becomes information when it has structure — one idea, with names and dates. Information becomes knowledge when it can be trusted without checking again.

- **Truth.** Reasoned by a person or an AI agent.
- **Trust.** Signed by a human only.
- **Traceable.** A living system in which claims are promoted and demoted.

T(truth-trust-traceable)-knowledge holds the organisation's information and knowledge; the data stays where it is. The store keeps what was read from a source, and where the original is. A claim nobody can check yet is an [A]. With all three it is a [T], and the gate decides that at the moment of writing, not in a review weeks later.

- [**I pay for Claude and keep losing what I knew.** · For one person: what goes wrong between chats, and a store that keeps it.](https://tknowledge.org/personal/)
- [**My organisation runs AI agents.** · Which risk disappears, what it costs to run, what you hand the auditor.](https://tknowledge.org/organizations/)

- [Start free — 5 minutes](https://tknowledge.org/personal/#try)

## Same claim, two outcomes.

AI agents propose claims. People sign them. T-knowledge decides what it is: a fact (T) if it rests on evidence a stranger could open, a guess (A) if it rests on your word alone.

**T claim**

1. T · Bao Trinh founded T-knowledge, https://tknowledge.org. · signed Bao Trinh 2026-10-13 · rests on the page footer

1. An AI agent proposes the claim and opens https://tknowledge.org.
2. It reads the page into a document: the text it saw, the link, the date it was read.
3. It points at where in that document the claim is read — the footer line “Founder: Bao Trinh”.
4. You sign. T-knowledge checks: evidence a stranger could open, a named signer, a path back to the document. All three present.
5. Accepted as a T. Its wording never changes again.

**A claim**

1. A · Bao Trinh owns the website https://ankayma.com. · signed Bao Trinh 2026-10-07 · open until a WHOIS or registration record

1. An AI agent proposes the claim and opens the page.
2. No name, no legal entity — only “© 2026 Ankayma” and a contact address.
3. Your own word that you own it is not evidence. Asked to record it as a fact, T-knowledge refuses and says why.
4. You sign it as a guess instead. It is kept as an A with the condition that would settle it: a WHOIS record or business registration naming Bao Trinh as owner.
5. Add that document later, and the same sentence is promoted to T.

---

T-knowledge is operated by Ankayma FZC, Ajman Free Zone, United Arab Emirates.

It is being set up as a company of its own.

Founder: Bao Trinh — [baotrinh.com](https://baotrinh.com)

[Privacy](https://tknowledge.org/privacy/) · [Standard](https://tknowledge.org/standard/) · [hello@ankayma.com](mailto:hello@ankayma.com)
