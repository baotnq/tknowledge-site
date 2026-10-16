// Edge worker for tknowledge.org (D-206 R2, R4). GitHub Pages serves the files;
// this worker only chooses which file a request gets. Same URL: HTML for
// browsers and search engines, the page's Markdown twin for AI agents — the
// two are generated from one source by build/build.py, so they never differ in
// substance. Deploy with `wrangler deploy` (see edge/README.md).
import agents from "./agents.json" with { type: "json" };
import routes from "./routes.json" with { type: "json" };

const MD_TYPE = "text/markdown; charset=utf-8";

// q-value of a media type under an Accept header: the most specific match wins.
export function quality(accept, type) {
  const [major] = type.split("/");
  let best = { spec: -1, q: 0 };
  for (const part of (accept || "").split(",")) {
    const [range, ...params] = part.trim().toLowerCase().split(";").map((s) => s.trim());
    if (!range) continue;
    let q = 1;
    for (const p of params) if (p.startsWith("q=")) q = Number.parseFloat(p.slice(2));
    if (Number.isNaN(q)) q = 0;
    const spec = range === type ? 2 : range === major + "/*" ? 1 : range === "*/*" ? 0 : -1;
    if (spec > best.spec) best = { spec, q };
  }
  return best.q;
}

// Markdown only when the client ranks it above HTML; an explicit text/markdown
// beats an HTML match that came only from a wildcard.
export function prefersMarkdown(accept) {
  const md = quality(accept, "text/markdown");
  const html = quality(accept, "text/html");
  if (md <= 0) return false;
  if (md !== html) return md > html;
  const listed = (t) => (accept || "").toLowerCase().split(",").some((p) => p.trim().split(";")[0] === t);
  return listed("text/markdown") && !listed("text/html");
}

const has = (ua, list) => list.some((a) => ua.includes(a.toLowerCase()));

// "markdown" or "html" for a page request.
export function choose(request) {
  const ua = (request.headers.get("user-agent") || "").toLowerCase();
  if (has(ua, agents.html_always)) return "html"; // search-engine parity
  if (prefersMarkdown(request.headers.get("accept"))) return "markdown";
  if (has(ua, agents.markdown)) return "markdown";
  return "html";
}

export function pagePath(pathname) {
  let p = pathname.replace(/index\.html$/, "");
  if (!p.endsWith("/")) p += "/";
  return Object.hasOwn(routes, p) ? p : null;
}

function withHeaders(resp, headers) {
  const out = new Response(resp.body, resp);
  for (const [k, v] of Object.entries(headers)) out.headers.set(k, v);
  return out;
}

export async function handle(request, origin) {
  const url = new URL(request.url);
  if (request.method !== "GET" && request.method !== "HEAD") return origin(request);
  if (url.pathname.endsWith(".md")) {
    return withHeaders(await origin(request), { "content-type": MD_TYPE });
  }
  if (url.pathname === "/llms.txt" || url.pathname === "/llms-full.txt") {
    return withHeaders(await origin(request), { "content-type": "text/plain; charset=utf-8" });
  }
  const page = pagePath(url.pathname);
  if (!page) return origin(request);
  const md = routes[page];
  const vary = { vary: "Accept, User-Agent", link: `<${md}>; rel="alternate"; type="text/markdown"` };
  if (choose(request) === "markdown") {
    const resp = await origin(new Request(new URL(md, url), request));
    if (resp.ok) return withHeaders(resp, { ...vary, "content-type": MD_TYPE, "content-location": md });
  }
  return withHeaders(await origin(request), vary);
}

export default {
  fetch(request) {
    return handle(request, (r) => fetch(r));
  },
};
