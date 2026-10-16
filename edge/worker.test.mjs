// node --test edge/   — the worker's choices, against a stub origin.
import test from "node:test";
import assert from "node:assert/strict";
import { handle, prefersMarkdown, choose } from "./worker.js";

const origin = async (req) => {
  const p = new URL(req.url).pathname;
  if (p.endsWith(".md")) return new Response("# md " + p, { headers: { "content-type": "text/markdown" } });
  if (p.endsWith(".txt")) return new Response("txt", { headers: { "content-type": "text/plain" } });
  return new Response("<html>" + p, { headers: { "content-type": "text/html; charset=utf-8" } });
};
const get = (path, headers = {}) => handle(new Request("https://tknowledge.org" + path, { headers }), origin);

test("Accept q-values decide, not substrings", () => {
  assert.equal(prefersMarkdown("text/markdown"), true);
  assert.equal(prefersMarkdown("text/markdown, */*;q=0.1"), true);
  assert.equal(prefersMarkdown("text/html, text/markdown;q=0.9"), false);
  assert.equal(prefersMarkdown("text/html;q=0.5, text/markdown"), true);
  assert.equal(prefersMarkdown("text/markdown;q=0, text/html"), false);
  assert.equal(prefersMarkdown("text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8"), false); // a browser
  assert.equal(prefersMarkdown("*/*"), false);
  assert.equal(prefersMarkdown("text/*"), false);
  assert.equal(prefersMarkdown(""), false);
});

test("known AI agents get Markdown even with */*; search engines always HTML", () => {
  const req = (ua, accept = "*/*") => new Request("https://tknowledge.org/", { headers: { "user-agent": ua, accept } });
  for (const ua of ["Mozilla/5.0 (compatible; ChatGPT-User/1.0; +https://openai.com/bot)", "ClaudeBot/1.0", "Claude-User",
    "PerplexityBot/1.0", "Mozilla/5.0 Grok", "GPTBot/1.2", "OAI-SearchBot/1.0", "anthropic-ai"]) {
    assert.equal(choose(req(ua)), "markdown", ua);
  }
  assert.equal(choose(req("Mozilla/5.0 (compatible; Googlebot/2.1)", "text/markdown")), "html");
  assert.equal(choose(req("Mozilla/5.0 (compatible; bingbot/2.0)")), "html");
  assert.equal(choose(req("Mozilla/5.0 (Macintosh) Safari/605", "text/html,*/*;q=0.8")), "html");
});

test("a page answers in Markdown with Vary, from its .md twin", async () => {
  const r = await get("/docs/", { accept: "text/markdown" });
  assert.equal(r.headers.get("content-type"), "text/markdown; charset=utf-8");
  assert.equal(r.headers.get("vary"), "Accept, User-Agent");
  assert.equal(await r.text(), "# md /docs.md");
  const h = await get("/docs/");
  assert.match(h.headers.get("content-type"), /text\/html/);
  assert.equal(h.headers.get("vary"), "Accept, User-Agent");
  assert.equal(h.headers.get("link"), '</docs.md>; rel="alternate"; type="text/markdown"');
  assert.equal(await (await get("/", { accept: "text/markdown" })).text(), "# md /index.md");
  assert.equal(await (await get("/docs", { accept: "text/markdown" })).text(), "# md /docs.md");
});

test(".md, llms.txt and other files", async () => {
  assert.equal((await get("/index.md")).headers.get("content-type"), "text/markdown; charset=utf-8");
  assert.equal((await get("/llms.txt")).headers.get("content-type"), "text/plain; charset=utf-8");
  const css = await get("/site.css", { accept: "text/markdown" });
  assert.equal(await css.text(), "<html>/site.css"); // not a page: passed through untouched
  assert.equal(css.headers.get("vary"), null);
});
