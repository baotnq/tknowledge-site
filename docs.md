<!-- T-knowledge docs — how AI agents connect to the signed knowledge store at mcp.tknowledge.org · https://tknowledge.org/docs/ · Markdown form of the same page, generated from one source -->

# Docs

T-knowledge is a store for an assistant's knowledge in which every line is a principle, a checked claim (T) or an assumption (A), signed by a named person, with the ids it rests on. It is reached as an MCP server.

## 1. Connect AI agents to the hosted store

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

Expected result: `instructions()` returns the meta lines M1–M3 and an index.

A refused call is an answer, not a failure: it carries a code and `next`, the move still open. The codes are under Refusals.

## 2. Run your own store — Docker (Personal)

Self-hosting for individuals is being documented — write to [hello@ankayma.com](mailto:hello@ankayma.com).

## 3. Keys — free and paid

Keys for free and paid use are being documented — write to [hello@ankayma.com](mailto:hello@ankayma.com).

## 4. Organisations

An organisation runs one instance of T-knowledge inside its own environment, with its own root key. The organisation's own people sign what its AI agents propose. To set one up, write to [hello@ankayma.com](mailto:hello@ankayma.com).

## 5. Reference

### What the store holds

| Kind | Meaning |
|---|---|
| claim | A statement about the world that can be checked against a source. Every T and every A is one. |
| P.n | A principle: an axiom, added and retired, never rewritten. A new store starts with seven. |
| T-n | A claim that passed the gate — a fact backed by a document, or a conclusion from at least two standing entries. Its wording never changes. |
| A-n | An assumption, with what would settle it. Promoted to T when the evidence arrives, refuted when the opposite is observed. |
| D-n | A document: readable text plus a pointer to the original (which stays where you keep it), and how you looked at it. *Bound* when a URL and hash tie the text to an original, *unbound* when it is text alone — both are valid evidence. |
| TH-n | A thread: one matter you follow, with keywords, linking the entries, people and conversations that belong to it. |
| I-n | An instruction: how an assistant should use this store — a meta line (M1), a directive (1, 2 …) or a definition (def:claim). Not a claim and not a principle; added or retired, never edited. |
| S-n | A summary of a thread: always an A, with a named author; each sentence cites ids in the thread; marked stale when newer entries arrive. |
| conv_n | A conversation: a chat or message trail linked to a matter, kept as context — it informs, it is not cited as proof. |
| F-n | A flag: something needs a person — evidence withdrawn, a source that changed between readings. The store raises it instead of resolving it quietly. |
| attester | A person who stands behind a claim by adding their own document for it. |

### Tools

The assistant picks these on its own; you talk in plain language.

| Tool | Use |
|---|---|
| assume · update_assumption | Hold something not yet checked, and revise it while it is open. |
| document_add | Record evidence as text, with where the original is. |
| admit · promote | Put a checked claim into the ledger; raise an assumption once its evidence is in. |
| attest · withdraw_evidence | Add or withdraw a document behind a claim. |
| demote · retire · recheck · refute | Take down what no longer holds; record that a source was checked again; refute an assumption. |
| principles · principle_add · principle_retire | Read, add or retire principles; retiring one lists everything standing on it. |
| instructions · instruction_add · instruction_retire | How assistants use your store, kept in the store: one list for every project — meta lines about the list, numbered directives, and definitions of the store's concepts. Added or retired, never edited; wording already there is caught as for claims. `instructions` also lists entries of the [catalog](https://tknowledge.org/catalog/) your store has not met; you take one, in your language, or decline it. |
| help | Before acting, the instructions of your store that fit what you are about to do — “draft a LinkedIn message”, “record a decision” — and catalog entries that fit, offered, never followed. |
| store_info | Who maintains this deployment and where to send feedback when tk misbehaves. |
| thread_open · thread_tag · link · unlink · thread_close | Group entries into a matter you follow. |
| summarize | Write a reading of a thread — drafted by the assistant, approved by you, every sentence citing ids. |
| ledger · entry · chain · open_items · thread · lookup · documents · flags | Read: what is known, one entry, what it stands on, what is still open, a thread, search by keyword, documents, warnings. |
| check_claim · define | Ask whether a sentence is a claim yet, and what the store's words mean. These work before signing in. |

### Refusals

A refusal is an answer, not an error. It comes with a code, a sentence saying why, and `next` — the move still open — so the assistant can tell you what to write instead. Common ones:

- `CLAIM_FAILED` — not a claim yet: two sentences in one, a relative date, a person not named.
- `NO_SOURCE` — a fact names no document, or not where in it the claim is read.
- `SINGLE_PREMISE` — a derivation needs at least two premises.
- `PREMISE_NOT_FOUND` — a premise id is not in the truth ledger (an assumption is not).
- `USE_PROMOTE` — that sentence is already an open assumption; promote it with evidence.
- `SOURCE_NOT_RETRIEVABLE`, `USE_DOCUMENT` — a fact needs a document someone else could open.
- `PREMISE_NOT_T` — a conclusion cannot stand on something that has fallen.
- `SUMMARY_UNCITED` — a sentence in a summary cites no entry of the thread.
- `CLAIM_TOO_MANY_WORDS`, `WRITE_LIMIT_REACHED` — a store's limits.

Every refusal carries its own reason and `next`. Ask the assistant to run `define` on a word of the store — claim, T, A, evidence, promote … — for the store's own explanation.

### Limits

Writes are counted per person per calendar month (Asia/Dubai time): Free 100, Standard 1,000, Unlimited without a count. Reads are unlimited; up to 100 words per claim. When the writes run out the store stays readable, and they start again next month. Plans: [Personal](https://tknowledge.org/personal/#pricing), [teams and organisations](https://tknowledge.org/organizations/#cost).

### Support

[hello@ankayma.com](mailto:hello@ankayma.com)

---

T-knowledge is operated by Ankayma FZC, Ajman Free Zone, United Arab Emirates.

It is being set up as a company of its own.

Founder: Bao Trinh — [baotrinh.com](https://baotrinh.com)

[Privacy](https://tknowledge.org/privacy/) · [Standard](https://tknowledge.org/standard/) · [hello@ankayma.com](mailto:hello@ankayma.com)
