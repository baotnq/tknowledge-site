<!-- T-knowledge privacy — what the signed knowledge store for AI agents keeps, where, and for how long · https://tknowledge.org/privacy/ · Markdown form of the same page, generated from one source -->

# Privacy

Effective 3 October 2026. This page describes the hosted service at mcp.tknowledge.org.

## Who runs it

T-knowledge is operated by Ankayma FZC, Ajman Free Zone, United Arab Emirates. Questions and requests go through the contact at the end of this page.

## What is stored

- **Your email address** — it names you as the signer of what you write, and it is how you sign in.
- **What you write into your store** — principles, claims (T), assumptions (A), summaries, documents (their text and the reference you give to the original), threads, keywords, and the conversation turns you record. Each entry keeps who signed it, which assistant produced it, and when.
- **Sign-in records** — one-time codes and refresh tokens are kept only as hashes; registered client names and redirect addresses; the IP address a sign-in code was requested from, used to limit abuse.
- **Usage milestones** — for each store, whether it reached a first write, a refusal, a promotion, and where its link was opened from. These record that a step happened, never what was written.
- **Server logs** — the web server logs each request's IP address, time and client; it removes the request path and the authorization header, so keys and links are not logged. Application logs can contain an email address when a sign-in or an email delivery fails.

The service does not store files. A document is text you provide plus a pointer to where the original lives; the original stays wherever you keep it.

## Where it is stored

On a single virtual server, hosted by LightNode in Ho Chi Minh City, Vietnam. Each store is kept apart from every other store by the database itself.

## Who else sees it

- **Anthropic** — when you use the store from Claude, what you say to Claude is handled under Anthropic's terms; the store receives only the tool calls Claude makes.
- **Resend** — when email delivery is switched on, your address and your sign-in code or link are sent through Resend.
- **Google Fonts** — the web pages load their fonts from Google, which sees your IP address when you open a page.

Nothing is sold, nothing is used for advertising, and nothing you write is used to train any model. There are no analytics or tracking scripts.

## How long it is kept

Stores have no end date. Entries are append-only: once written they are not edited, so the record of who signed what stays intact. A trial store becomes read-only when its writes run out; it is not deleted. Sign-in codes expire after ten minutes; refresh tokens after thirty days without use. Web server logs are rotated and old ones discarded.

## Removing your data

Ask through the contact below and your store, your sign-in records and your email address are removed. Removal takes the whole store; single entries are not edited out, because the ledger is append-only.

## Contact

[hello@ankayma.com](mailto:hello@ankayma.com)

---

T-knowledge is operated by Ankayma FZC, Ajman Free Zone, United Arab Emirates.

It is being set up as a company of its own.

Founder: Bao Trinh — [baotrinh.com](https://baotrinh.com)

[Privacy](https://tknowledge.org/privacy/) · [Standard](https://tknowledge.org/standard/) · [hello@ankayma.com](mailto:hello@ankayma.com)
