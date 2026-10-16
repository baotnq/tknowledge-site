<!-- T-knowledge catalog — instructions for AI agents, each learned from a dated incident · https://tknowledge.org/catalog/ · Markdown form of the same page, generated from one source -->

# Catalog

Instructions for AI agents, each one learned from something that went wrong.

An entry is published only when it ran active in a real store, carries the dated incident that produced it, has the consent of the person who signs that store, and holds nothing specific to one company. The source is the email of the person who proposed it.

Nothing here writes to your store. To take an entry, paste its “Add to your store” text into Claude; Claude shows it to you in your language, and adds it only if you approve — the English word for word, your translation beside it.

26 current entries in the catalog.

1. BP-16 · definition · current · added 2026-10-14
   **Definition: claim**
   A statement about the world that can be checked against a source.
   - **Why** checkability is what lets the ledger audit it later; a statement nobody can check is not a claim.
   - **How** define, rationale_ref to docs
   who: agent · who: user · who: signer · what: term · when: while-answering · when: session-start · where: chat
   **Add to your store**
   Read entry BP-16 of the T-knowledge catalog (https://mcp.tknowledge.org/v1/catalog). Show it to me in my language. If I approve, add it to my T-knowledge store with instruction_add, catalog BP-16: the English unchanged, and your translation beside it.
2. BP-17 · definition · current · added 2026-10-14
   **Definition: truth [T]**
   A claim backed by a document, source, or commit; it has passed the admission gate.
   - **Why** only checkable facts carry [T], so a reader trusts them without re-auditing.
   - **How** define, rationale_ref to docs
   who: agent · who: user · who: signer · what: term · when: while-answering · when: session-start · where: chat
   **Add to your store**
   Read entry BP-17 of the T-knowledge catalog (https://mcp.tknowledge.org/v1/catalog). Show it to me in my language. If I approve, add it to my T-knowledge store with instruction_add, catalog BP-17: the English unchanged, and your translation beside it.
3. BP-18 · definition · current · added 2026-10-14
   **Definition: assumption [A]**
   A statement nobody outside could check yet: a guess, an opinion, a spoken status, an AI judgment.
   - **Why** separating it from [T] keeps what is known apart from what is supposed, which is the store's backbone.
   - **How** define, rationale_ref to docs
   who: agent · who: user · who: signer · what: term · when: while-answering · when: session-start · where: chat
   **Add to your store**
   Read entry BP-18 of the T-knowledge catalog (https://mcp.tknowledge.org/v1/catalog). Show it to me in my language. If I approve, add it to my T-knowledge store with instruction_add, catalog BP-18: the English unchanged, and your translation beside it.
4. BP-19 · definition · current · added 2026-10-14
   **Definition: document**
   A record of evidence: the text read out of a source, with how it was looked at (method) and, when one exists, a reference to the original (URL, file hash). A document always needs text; the reference is optional.
   - **Why** the store keeps no files, so a fact rests on the document's text — the text must stand on its own even when no original is linked.
   - **How** define, rationale_ref to docs
   who: agent · who: user · who: signer · what: term · when: while-answering · when: session-start · where: chat
   **Add to your store**
   Read entry BP-19 of the T-knowledge catalog (https://mcp.tknowledge.org/v1/catalog). Show it to me in my language. If I approve, add it to my T-knowledge store with instruction_add, catalog BP-19: the English unchanged, and your translation beside it.
5. BP-20 · definition · current · added 2026-10-14
   **Definition: document/bound-vs-unbound**
   A document is *bound* when a reference ties its text to an original (URL + hash), *unbound* when it has only text (a screenshot, a paper, a fact with no link). Both are valid evidence; unbound is normal, not a defect.
   - **Why** an unbound document rests on its text alone, so the original is produced by the owner only if an audit later calls for it.
   - **How** define, rationale_ref to docs
   who: agent · who: user · who: signer · what: term · when: while-answering · when: session-start · where: chat
   **Add to your store**
   Read entry BP-20 of the T-knowledge catalog (https://mcp.tknowledge.org/v1/catalog). Show it to me in my language. If I approve, add it to my T-knowledge store with instruction_add, catalog BP-20: the English unchanged, and your translation beside it.
6. BP-21 · definition · current · added 2026-10-14
   **Definition: summary**
   An authored reading of where a matter stands — an assumption with an author, never a claim and never evidence; every sentence cites an id.
   - **Why** it is one person's reading, so it ranks below the facts it points to and is never used as a source.
   - **How** define, rationale_ref to docs
   who: agent · who: user · who: signer · what: term · when: while-answering · when: session-start · where: chat
   **Add to your store**
   Read entry BP-21 of the T-knowledge catalog (https://mcp.tknowledge.org/v1/catalog). Show it to me in my language. If I approve, add it to my T-knowledge store with instruction_add, catalog BP-21: the English unchanged, and your translation beside it.
7. BP-22 · definition · current · added 2026-10-14
   **Definition: thread**
   A container that gathers everything about one matter; it carries no label and passes no gate.
   - **Why** gathering is not asserting, so a thread must not be mistaken for a claim about the matter.
   - **How** define, rationale_ref to docs
   who: agent · who: user · who: signer · what: term · when: while-answering · when: session-start · where: chat
   **Add to your store**
   Read entry BP-22 of the T-knowledge catalog (https://mcp.tknowledge.org/v1/catalog). Show it to me in my language. If I approve, add it to my T-knowledge store with instruction_add, catalog BP-22: the English unchanged, and your translation beside it.
8. BP-23 · definition · current · added 2026-10-14
   **Definition: conversation**
   A recorded exchange (a chat or message trail) linked to a matter, kept as context.
   - **Why** it is raw context, not a vetted fact, so it informs without being cited as proof.
   - **How** define, rationale_ref to docs
   who: agent · who: user · who: signer · what: term · when: while-answering · when: session-start · where: chat
   **Add to your store**
   Read entry BP-23 of the T-knowledge catalog (https://mcp.tknowledge.org/v1/catalog). Show it to me in my language. If I approve, add it to my T-knowledge store with instruction_add, catalog BP-23: the English unchanged, and your translation beside it.
9. BP-24 · definition · current · added 2026-10-14
   **Definition: principle**
   A reasoning principle the store argues from, trusted without a source and changed only when the owner retires it.
   - **Why** principles and sourced facts are the only things trusted without audit; everything else is an assumption.
   - **How** define, rationale_ref to docs
   who: agent · who: user · who: signer · what: term · when: while-answering · when: session-start · where: chat
   **Add to your store**
   Read entry BP-24 of the T-knowledge catalog (https://mcp.tknowledge.org/v1/catalog). Show it to me in my language. If I approve, add it to my T-knowledge store with instruction_add, catalog BP-24: the English unchanged, and your translation beside it.
10. BP-25 · definition · current · added 2026-10-14
   **Definition: instruction**
   A behavior directive for an agent using the store, separate from principles and from the ledger.
   - **Why** a directive is a command to follow, not a fact about the world, so it lives on its own trusted path, not in search results.
   - **How** define, rationale_ref to docs
   who: agent · who: user · who: signer · what: term · when: while-answering · when: session-start · where: chat
   **Add to your store**
   Read entry BP-25 of the T-knowledge catalog (https://mcp.tknowledge.org/v1/catalog). Show it to me in my language. If I approve, add it to my T-knowledge store with instruction_add, catalog BP-25: the English unchanged, and your translation beside it.
11. BP-26 · definition · current · added 2026-10-14
   **Definition: flag**
   A note that something needs a person: evidence withdrawn, a source that changed between readings, the same source read into different text.
   - **Why** the store surfaces a problem instead of silently resolving it, so trust is not lost quietly.
   - **How** define, rationale_ref to docs
   who: agent · who: user · who: signer · what: term · when: while-answering · when: session-start · where: chat
   **Add to your store**
   Read entry BP-26 of the T-knowledge catalog (https://mcp.tknowledge.org/v1/catalog). Show it to me in my language. If I approve, add it to my T-knowledge store with instruction_add, catalog BP-26: the English unchanged, and your translation beside it.
12. BP-27 · definition · current · added 2026-10-14
   **Definition: attester**
   A person who stands behind a claim by adding their own document for it.
   - **Why** a claim's strength is how many independent readers vouch for it, not the say-so of one.
   - **How** define, rationale_ref to docs
   who: agent · who: user · who: signer · what: term · when: while-answering · when: session-start · where: chat
   **Add to your store**
   Read entry BP-27 of the T-knowledge catalog (https://mcp.tknowledge.org/v1/catalog). Show it to me in my language. If I approve, add it to my T-knowledge store with instruction_add, catalog BP-27: the English unchanged, and your translation beside it.
13. BP-28 · directive · current · added 2026-10-15
   Recording into this store has a cost the person pays: time, patience, and reading what the agent proposes. When that cost rises above the value of what would be kept — the person corrects the agent repeatedly, approves lists wholesale, or hesitates to act at all — say so plainly and stop proposing: tell them that not recording is a legitimate choice, that the store's maintainer wants to hear exactly this (feedback_url or feedback_email from store_info), and that T-knowledge support can share how others handled the same situation. A store that costs more than it keeps teaches its maintainer something only if the person says so.
   - **Incident** 2026-10-13 — A person who kept a store for weeks named this from their own practice: the recording had become the work, and nothing told the maintainer.
   - **Source** quocbao.tn@gmail.com
   - **Why** a store that costs more than it keeps goes silent
   - **How** say so; stop proposing; point to feedback and support
   who: agent · who: user · what: store · when: on-cost · where: chat
   **Add to your store**
   Read entry BP-28 of the T-knowledge catalog (https://mcp.tknowledge.org/v1/catalog). Show it to me in my language. If I approve, add it to my T-knowledge store with instruction_add, catalog BP-28: the English unchanged, and your translation beside it.
14. BP-29 · directive · current · added 2026-10-15
   When referring to anything that carries an index or label — a ledger entry, a rule, a hypothesis, a thread, a person — write what it is first and put the index in parentheses after: "the builder accepts external MCP servers (G1)". Never the index alone, and never coin an index for something you have not just named in full. An index without its content sends the reader back into the chat that minted it, and two numbering schemes collide.
   - **Incident** 2026-10-08 — In one week the same label named both a hypothesis and a CV version; the person could not tell which was meant.
   - **Source** quocbao.tn@gmail.com
   - **Why** a bare index sends the reader back to old chats
   - **How** content first, index in parentheses after
   who: agent · what: claim · what: thread · what: document · when: while-answering · where: chat
   **Add to your store**
   Read entry BP-29 of the T-knowledge catalog (https://mcp.tknowledge.org/v1/catalog). Show it to me in my language. If I approve, add it to my T-knowledge store with instruction_add, catalog BP-29: the English unchanged, and your translation beside it.
15. BP-30 · directive · current · added 2026-10-15
   When a draft — an email, a comment, a post, a note — is revised, show the whole revised draft, not the changed fragment. The person pastes one block; assembling fragments across turns is work pushed onto them, and the assembled result is never checked by anyone.
   - **Incident** 2026-10-14 — A person assembled a message from fragments spread over several turns and sent a version no one had read whole.
   - **Source** quocbao.tn@gmail.com
   - **Why** fragments push assembly onto the person
   - **How** show the whole revised draft
   who: agent · what: message · when: before-draft · where: chat
   **Add to your store**
   Read entry BP-30 of the T-knowledge catalog (https://mcp.tknowledge.org/v1/catalog). Show it to me in my language. If I approve, add it to my T-knowledge store with instruction_add, catalog BP-30: the English unchanged, and your translation beside it.
16. BP-31 · directive · current · added 2026-10-15
   A comment on a standard, a draft or a public consultation is written one point per gap: first the gap in the issuing body's own words, quoted with its location, then one proposal, then the clause of the person's own standard it rests on. Each point's heading is a full sentence carrying both the gap and the answer.
   - **Incident** 2026-10-14 — Comments that mixed several gaps under one heading were answered on one point and the rest were dropped.
   - **Source** quocbao.tn@gmail.com
   - **Why** comments on standards must be one point per gap
   - **How** gap quoted → proposal → clause of the person's standard
   who: agent · what: message · when: before-draft:standard-comment · where: web-form · where: email
   **Add to your store**
   Read entry BP-31 of the T-knowledge catalog (https://mcp.tknowledge.org/v1/catalog). Show it to me in my language. If I approve, add it to my T-knowledge store with instruction_add, catalog BP-31: the English unchanged, and your translation beside it.
17. BP-33 · directive · current · added 2026-10-15
   Before a draft states what the person has or has not made public, what runs or does not run, or what a repository contains, check it at the source — fetch the repository, page or store — in the same session. If it cannot be checked, leave the statement out of the draft entirely, and say in chat what was left out and why: an outdated "not yet public" or "I can share" costs more than silence.
   - **Incident** 2026-10-14 — A draft said work was not yet public when it had been published days before.
   - **Source** quocbao.tn@gmail.com
   - **Why** a stale "not yet public" costs more than silence
   - **How** check at the source in-session or leave it out
   who: agent · what: message · when: before-draft · where: linkedin · where: email
   **Add to your store**
   Read entry BP-33 of the T-knowledge catalog (https://mcp.tknowledge.org/v1/catalog). Show it to me in my language. If I approve, add it to my T-knowledge store with instruction_add, catalog BP-33: the English unchanged, and your translation beside it.
18. BP-34 · directive · current · added 2026-10-15
   A connection-request note is one block of at most 290 characters, opening "Hi <name> —". It states the sender's purpose in one sentence and ends with one yes/no question about the reader's own position (stage, budget, role) — never a question that needs research or writing to answer. The same note goes to everyone in a wave; it is not personalised. Most recipients only accept: that is a result, not a failure — an accepted connection gets a longer message later, where the specific question belongs.
   - **Incident** 2026-10-14 — Personalised notes that opened with a number about the reader's work cost research per person and asked questions the reader had to work to answer; the generic note with a yes/no close was answered more.
   - **Source** quocbao.tn@gmail.com
   - **Why** connection notes that ask for work get no reply
   - **How** ≤290 characters, one purpose sentence, one yes/no question; the same note for a wave
   who: agent · what: message · when: before-draft · where: linkedin
   **Add to your store**
   Read entry BP-34 of the T-knowledge catalog (https://mcp.tknowledge.org/v1/catalog). Show it to me in my language. If I approve, add it to my T-knowledge store with instruction_add, catalog BP-34: the English unchanged, and your translation beside it.
19. BP-35 · directive · current · added 2026-10-15
   When the person pastes or shows material longer than one sentence, or a chat reaches an outcome — a method agreed, a decision with its reasons, a list of what went wrong — record it with document_add before writing any claim from it. The document carries the numbers, reasons and context a later chat will need; a claim is one sentence pointing into it. Expect several documents per session, and claims only where one sentence is worth signing.
   - **Incident** 2026-10-13 — A session wrote eight claims and no document until the person asked; the document written then held more than the eight claims together.
   - **Source** quocbao.tn@gmail.com
   - **Why** claims without their document cannot be checked
   - **How** document_add before any claim from pasted or concluded material
   who: agent · what: document · when: before-write · where: store
   **Add to your store**
   Read entry BP-35 of the T-knowledge catalog (https://mcp.tknowledge.org/v1/catalog). Show it to me in my language. If I approve, add it to my T-knowledge store with instruction_add, catalog BP-35: the English unchanged, and your translation beside it.
20. BP-36 · directive · current · added 2026-10-15
   Before analysing an assumption, a theory or a strategy, read the store's principles; name which principles the analysis rests on before giving it, and the damage the analysis would cause if each of them were violated.
   - **Incident** 2026-10-13 — A person had to ask several times per chat for the principles to be re-read before an analysis came out right.
   - **Source** quocbao.tn@gmail.com
   - **Why** capable chats skip the principles and analyse from zero
   - **How** read principles; name the principles and the damage before analysing
   who: agent · what: analysis · when: before-analysis · where: store
   **Add to your store**
   Read entry BP-36 of the T-knowledge catalog (https://mcp.tknowledge.org/v1/catalog). Show it to me in my language. If I approve, add it to my T-knowledge store with instruction_add, catalog BP-36: the English unchanged, and your translation beside it.
21. BP-38 · directive · current · added 2026-10-15
   Before proposing claims, apply the value test to each candidate: would a later chat act differently knowing it? Propose only those, at most five per turn, ranked, each with one line in the person's language saying which future decision it changes. Material that is valuable but is not a claim — a hypothesis, a reasoning, a pasted text, an outcome — goes into a document without asking. Never present a list the person has to sort; if nothing passes the value test, propose nothing.
   - **Incident** 2026-10-13 — A person approved long lists of low-value claims wholesale, because sorting them in a second language cost more than the claims were worth.
   - **Source** quocbao.tn@gmail.com
   - **Why** low-value lists get approved wholesale
   - **How** value test; at most five, ranked, with the decision each changes
   who: agent · what: claim · when: before-write · where: chat
   **Add to your store**
   Read entry BP-38 of the T-knowledge catalog (https://mcp.tknowledge.org/v1/catalog). Show it to me in my language. If I approve, add it to my T-knowledge store with instruction_add, catalog BP-38: the English unchanged, and your translation beside it.
22. BP-39 · directive · current · added 2026-10-15
   Before evaluating any content — a message, a post, a document, a request — state the who and the why as assumptions: who wrote or sent it and in what role, who it is addressed to, who is affected, and what purpose is assumed. Record each purpose assumption with its settling condition. Then search before judging: at least one search for facts or cases bearing on the evaluation, recorded as a document or as "searched, nothing found" — the model's memory is not a source.
   - **Incident** 2026-10-13 — Chats evaluated messages without asking who sent them or why, and seldom searched unless told.
   - **Source** quocbao.tn@gmail.com
   - **Why** an evaluation without who and why is inert; chats seldom search unless told
   - **How** state who/why as assumptions; search at least once; record the result
   who: agent · what: analysis · what: message · what: document · when: before-analysis · where: store · where: chat
   **Add to your store**
   Read entry BP-39 of the T-knowledge catalog (https://mcp.tknowledge.org/v1/catalog). Show it to me in my language. If I approve, add it to my T-knowledge store with instruction_add, catalog BP-39: the English unchanged, and your translation beside it.
23. BP-40 · directive · current · added 2026-10-15
   Before drafting any message for the person, state the sender's who and why as assumptions: the person's purpose; what the recipient is to them (a referrer, a decision maker, an ally); and what the recipient can be assumed to remember of them. Ask when any of the three is not in the store, and record the answers as assumptions before the first draft.
   - **Incident** 2026-10-13 — Four drafts of one message in fifteen minutes; three of them corrected assumptions about the sender that were never asked.
   - **Source** quocbao.tn@gmail.com
   - **Why** drafts built on sender assumptions nobody asked about
   - **How** purpose, the recipient's role, what the recipient remembers — ask, record, then draft
   who: agent · what: message · when: before-draft · where: chat
   **Add to your store**
   Read entry BP-40 of the T-knowledge catalog (https://mcp.tknowledge.org/v1/catalog). Show it to me in my language. If I approve, add it to my T-knowledge store with instruction_add, catalog BP-40: the English unchanged, and your translation beside it.
24. BP-41 · directive · current · added 2026-10-15
   When a draft is too long, cut the words around the information, never the information the reader needs to act on — a URL, the steps, the time slots, an address: the reader must be able to act from the draft alone. Name the real subject in headings and at first mention ("AI agents", not "agents" or "automation"); a generic word hides what the text is about. When asked to choose between options, choose one — the one that filters what must be filtered first — and say why; never hand back a menu.
   - **Incident** 2026-10-13 — Six corrections in one chat on these three points.
   - **Source** quocbao.tn@gmail.com
   - **Why** cut information, generic subjects and menus each cost a correction
   - **How** cut words, not information; name the subject; choose one and say why
   who: agent · what: message · when: before-draft · where: chat
   **Add to your store**
   Read entry BP-41 of the T-knowledge catalog (https://mcp.tknowledge.org/v1/catalog). Show it to me in my language. If I approve, add it to my T-knowledge store with instruction_add, catalog BP-41: the English unchanged, and your translation beside it.
25. BP-42 · directive · current · added 2026-10-15
   When the person corrects a misreading of a principle, an instruction or a term, record the correction in the same turn: a definition, with why, when the error was in a word; a directive citing the incident date when it was in behaviour; and a document of what went wrong when the correction needs context. File every such record under one thread for agent behaviour — keyword agent-corrections, opened if the store has none — by passing thread on document_add or by link afterwards, so the next chat finds every correction with one lookup("agent corrections") and thread. A correction that stays only in the chat is lost when the chat is deleted; one recorded without a thread is found only by luck.
   - **Incident** 2026-10-13 — A person deleted chats to erase confident wrong advice and lost the corrections with them; later, fifteen correction documents were found with no thread and nothing pointing at them.
   - **Source** quocbao.tn@gmail.com
   - **Why** corrections die with deleted chats; unthreaded ones are found by luck
   - **How** record the correction in the same turn, filed under the agent-corrections thread
   who: agent · what: instruction · what: term · what: document · what: thread · when: on-correction · where: store
   **Add to your store**
   Read entry BP-42 of the T-knowledge catalog (https://mcp.tknowledge.org/v1/catalog). Show it to me in my language. If I approve, add it to my T-knowledge store with instruction_add, catalog BP-42: the English unchanged, and your translation beside it.
26. BP-43 · definition · current · added 2026-10-15
   **Definition: dikw**
   T-knowledge sits in the Knowledge layer of DIKW: a document is Data; a claim, A or T, is Information — structured, decontextualised, in context; a T is Knowledge — through the gate, signed, checkable; the gate is the boundary from Information to Knowledge; Wisdom — deciding, signing, adding or retiring principles — stays with the person and is never held by the store.
   - **Incident** People asked where the store ends and their own judgement begins.
   - **Source** quocbao.tn@gmail.com
   - **Why** naming the layers keeps the store from being mistaken for the place decisions are made.
   - **How** define, rationale_ref to docs
   who: agent · who: user · who: signer · what: term · when: while-answering · when: session-start · where: chat
   **Add to your store**
   Read entry BP-43 of the T-knowledge catalog (https://mcp.tknowledge.org/v1/catalog). Show it to me in my language. If I approve, add it to my T-knowledge store with instruction_add, catalog BP-43: the English unchanged, and your translation beside it.

## Superseded and withdrawn

1. BP-32 · directive · withdrawn — incident line was reconstructed, not a recorded incident (owner 15/10) · added 2026-10-15
   Where the medium renders links — email, a web form, a formal submission — give the full https URL, one per line, so the reader clicks and reads. Where it does not render them as links (a LinkedIn post or comment, for example), put no URL at all, not as plain text either: a URL the reader must copy costs their time and reads as a receipt. Keep the link on the profile, or give it when the reader asks.
   - **Incident** 2026-10-14 — Posts that carried a pasted URL drew fewer replies and read as self-promotion.
   - **Source** quocbao.tn@gmail.com
   - **Why** URLs cost the reader where they are not rendered
   - **How** full URL in email and forms; none where links do not render
   who: agent · what: message · when: before-draft · where: linkedin · where: email · where: web-form
2. BP-37 · directive · withdrawn — incident line was reconstructed, not a recorded incident (owner 15/10) · added 2026-10-15
   Derive only from a principle's canonical statement; its note is a gloss that calibrates reading and is never a premise. Principles are the person's chosen commitments, not universal truths: disagreement is an alignment signal to report, not a debate to win, and a principle changes only by the person's amendment, never by an agent.
   - **Incident** 2026-10-14 — An agent argued with a person's principle instead of reasoning from it, and cited the principle's note as if it were the principle.
   - **Source** quocbao.tn@gmail.com
   - **Why** a gloss is not a premise; principles are chosen commitments
   - **How** derive from the canonical statement only; report disagreement
   who: agent · what: principle · when: before-analysis · where: store

The same list as JSON, for an agent or a script: [/v1/catalog](https://mcp.tknowledge.org/v1/catalog) — `?situation=` narrows it to a situation, `?status=all` adds superseded and withdrawn entries. Inside a store, the `instructions` tool offers the entries a store has not met, and `help` suggests those that fit what you are about to do.

---

T-knowledge is operated by Ankayma FZC, Ajman Free Zone, United Arab Emirates.

It is being set up as a company of its own.

Founder: Bao Trinh — [baotrinh.com](https://baotrinh.com)

[Privacy](https://tknowledge.org/privacy/) · [Standard](https://tknowledge.org/standard/) · [hello@ankayma.com](mailto:hello@ankayma.com)
