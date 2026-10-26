# NessaHub Guide

The public guide explaining everything NessaHub does — every service, dashboard and policy — with
global search. Hosted on Firebase in the NessaHub project (`nessahub-47d89`), site `nessahub-guide`:
**https://nessahub-guide.web.app**, next to the main web app, the provider portal and the policies site.

## Files

| File | What it is |
|------|------------|
| `index.html` | Page shell (top bar, sidebar, search dialog, footer) |
| `app.js` | Routing, rendering, search index and search dialog |
| `styles.css` | All styles — light/dark themes, responsive to phone width |
| `theme.js` | Applies the saved light/dark choice before first paint |
| `content/*.js` | **The guide itself** — chapters and articles as plain data |
| `firebase.json` | Hosting config with the security headers |

## Editing content

Everything people read is in `content/`. Each file adds chapters to `window.GUIDE.chapters`; each
article's `body` is a list of blocks (the format is described at the top of `content/01-start.js`):
paragraphs, sub-headings, bullet lists, numbered steps, tip/warning boxes, tables, links and FAQs.
`**bold**` works inside text. Sub-headings appear in "On this page" and are searchable on their own.

Add `keywords` to an article for words people might search that aren't in the text.

When NessaHub gains or changes a feature, update the matching article here.

## Search

Built into `app.js`, no service needed. It indexes every chapter, article, sub-heading and FAQ
question; ranks title matches above keyword, summary and body matches; tolerates small typos; and
highlights matches. Open it with the search bar, **Ctrl/⌘ K** or **/**.

## Run locally

```bash
cd Nessa-Hub-Guide
python3 -m http.server 5190
```

Open `http://localhost:5190`.

## Deploy

```bash
cd Nessa-Hub-Guide
firebase deploy --only hosting:guide
```

Always deploy with `--only hosting:guide`: a plain `firebase deploy` on `nessahub-47d89` would target
the main web app's site.

### Custom domain (e.g. guide.nessahub.com)

Firebase console → Hosting → `nessahub-guide` → **Add custom domain** → `guide.nessahub.com`, then add the
records it shows in **Namecheap → Advanced DNS** (Host: `guide`), and click Verify.

## Security

- No framework, no third-party scripts, fonts or CDNs; no network requests at all.
- Strict Content-Security-Policy (`default-src 'none'`), HSTS, frame-ancestors none, no referrer
  leakage, permissions policy disabling camera, microphone, location and payment APIs.
- All content is inserted as text, never HTML.
