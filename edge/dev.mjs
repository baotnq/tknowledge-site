// Local stand-in for the edge: node edge/dev.mjs [port] [origin]
// Runs worker.js in front of a static server (default http://127.0.0.1:8090,
// e.g. `python3 -m http.server 8090`), so the curl tests in TESTS.md run before deploy.
import http from "node:http";
import { handle } from "./worker.js";

const port = Number(process.argv[2] || 8091);
const originBase = process.argv[3] || "http://127.0.0.1:8090";

http.createServer(async (req, res) => {
  const url = "https://tknowledge.org" + req.url;
  const request = new Request(url, { method: req.method, headers: req.headers });
  const resp = await handle(request, (r) => {
    const u = new URL(r.url);
    return fetch(originBase + u.pathname + u.search, { method: r.method, headers: { accept: r.headers.get("accept") || "*/*" }, redirect: "manual" });
  });
  const headers = Object.fromEntries(resp.headers);
  delete headers["content-encoding"];
  delete headers["content-length"];
  res.writeHead(resp.status, headers);
  res.end(Buffer.from(await resp.arrayBuffer()));
}).listen(port, "127.0.0.1", () => console.log(`edge dev on http://127.0.0.1:${port} → ${originBase}`));
