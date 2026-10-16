# tknowledge.org

Website giới thiệu và hướng dẫn T-knowledge, chạy trên GitHub Pages. Tách khỏi code server
(`t-knowledge-system`) để sửa trang liên tục mà không phải build hay deploy server.

**Sửa ở `src/`, rồi build — không sửa file sinh ra.** Mỗi trang có một nguồn duy nhất
(`src/pages/<tên>.html`); từ đó sinh trang HTML cho người đọc và bản Markdown cho AI agent (D-206).

    python3 build/build.py            # sinh HTML, .md, llms.txt, llms-full.txt, sitemap.md/.xml, robots.txt
    python3 build/build.py --fetch    # lấy lại catalog từ /v1/catalog trước khi build
    python3 build/check.py            # kiểm: rel=alternate, hộp cho AI, chữ .md = chữ HTML
    node --test edge/worker.test.mjs  # worker chọn HTML hay Markdown

- `src/pages/` — nội dung từng trang (đầu file: title, description, path, md)
- `src/partials/` — phần dùng chung: `connect` (khối kết nối từng client), `definition`, `footer`
- `src/data/catalog.json` — ảnh chụp `/v1/catalog?status=all`; catalog render sẵn lúc build
- `build/` — `build.py`, `check.py` (Python stdlib, không cài gì)
- `edge/` — Cloudflare Worker: cùng URL, HTML cho người, Markdown cho AI agent (chưa deploy, xem `edge/README.md`)
- `site.css`, `site.js`, `catalog/catalog.js` — viết tay
- `standard/index.html` — chuyển hướng tới baotrinh.com/standard, viết tay
- `CNAME` — domain của GitHub Pages

Link connector: **https://mcp.tknowledge.org/mcp** (server tk, repo `t-knowledge-system`).
