# JK Collective — Deployment Package

A static, single-page site. Built as plain HTML + React (loaded from CDN) + Babel-in-the-browser JSX. **No build step required** — drop the contents of this folder onto any static host and you're live.

## What's inside

| File / folder | Purpose |
| --- | --- |
| `index.html` | Page shell. Mounts the React app and loads the data. |
| `components.jsx` | Shared components (Nav, Footer, Img, Lightbox, logo). |
| `pages.jsx` | All page components (Home, Artists, Works, Exhibitions, Press, Visit, detail pages). |
| `data.standalone.js` | Site content: artists, works, exhibitions, press. Edit text here. |
| `assets/fonts/` | Self-hosted Gloock / Inter Tight / JetBrains Mono (16 woff2 files). |
| `assets/img/` | Local images (gallery exterior + Jean Gillon hero). |
| `favicon.svg` | Site favicon. |
| `robots.txt` · `sitemap.xml` | Crawler hints. |
| `.nojekyll` | Tells GitHub Pages to serve files starting with `_` (harmless elsewhere). |

## Hosting recipes

All hosts below serve the folder as-is. No build, no environment variables.

### Netlify
1. Drag the folder onto <https://app.netlify.com/drop>, or
2. `netlify deploy --dir=. --prod` from inside this directory.

### Vercel
`vercel --prod` from inside this directory. Accept defaults — framework "Other".

### Cloudflare Pages
Create a project → Direct Upload → upload the whole folder.

### GitHub Pages
Push the contents of this folder to the root of a `gh-pages` branch (or `main` with Pages set to `/`). The `.nojekyll` file is already included.

### Plain S3 / nginx / Apache
Just serve the folder as static files. Make sure `.woff2` is served with `font/woff2` and `.jsx` with `application/javascript` (most hosts do this by default).

## A few things worth knowing

- **JSX is transpiled in the browser** via `@babel/standalone` (loaded from unpkg). On first load this adds ~120 KB and a small parse cost. The site stays fully editable — you can change `pages.jsx` in any text editor and reload.
- **React is pinned** to 18.3.1 via unpkg with SRI integrity hashes. Don't strip the `integrity` attributes.
- **Six current-exhibition heroes point at `https://collectiveartdesign.com/wp-content/uploads/...`**. They work today but rely on that domain staying up. Replace the URLs in `data.standalone.js` (search for `https://collectiveartdesign.com`) with locally-hosted files when you have them — saving copies into `assets/img/exhibitions/` and pointing the data there is enough; the `Img` component falls back to whatever path you give it.
- **Routing is hash-based** (`#/artists`, `#/exhibitions`, etc.). That keeps the site working on any static host without server-side rewrites.
- **`data.standalone.js` is large (~6 MB)** because it inlines several hero/object photos as base64 data URIs (kept this way so the page renders even when opened straight off a USB stick). For a real production deploy, you can move those data URIs to `assets/img/` files and shrink the file dramatically — let me know if you'd like me to do that pass.

## Local preview before deploying

Any static server works. From inside this folder:

```sh
python3 -m http.server 8000
# or
npx serve .
```

Then visit <http://localhost:8000>.
