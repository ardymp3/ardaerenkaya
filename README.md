# Arda Eren Kaya Portfolio

Static portfolio site for GitHub Pages.

## Update content

- Main work data lives in `assets/js/site-data.js`.
- To add a new work, add a new object to `window.ARDA_SITE.works`.
- For a clean URL, copy any existing folder under `works/`, rename it to the new slug, and update `data-work-detail` in that folder's `index.html`.
- Social links also live in `assets/js/site-data.js`. Replace `#` values with the real profile URLs.

## Preview

Open `index.html` directly, or run a tiny static server from this folder:

```powershell
python -m http.server 4173
```

Then visit `http://localhost:4173`.
