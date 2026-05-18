# Kyle Turchick website starter

This is a free, static personal research website built from the master CV. It uses only HTML, CSS, and JavaScript, so it does not need a paid host, a database, or a build system.

## Files

- `index.html` — main website content
- `styles.css` — layout, colors, typography, responsive design
- `script.js` — mobile menu, sticky header, email link, footer year
- `assets/favicon.svg` — browser icon
- `assets/social-preview.svg` — social preview image placeholder
- `404.html` — fallback page
- `robots.txt` — search-engine crawl file

## Privacy notes before publishing

The public website intentionally omits the phone number from the CV. If you add a downloadable CV, consider using a public CV PDF that removes private details, references, and your master-copy tailoring notes.

Recommended public links to add once available:

- Google Scholar
- ORCID
- GitHub
- LinkedIn
- A public CV PDF
- Cornell / lab profile

## Free hosting option 1: GitHub Pages

1. Create a free GitHub account if needed.
2. Create a new public repository named `kyle-turchick-website` or, for a cleaner URL, `<your-github-username>.github.io`.
3. Upload all files in this folder to the repository root.
4. In the repository, go to **Settings → Pages**.
5. Under **Build and deployment**, choose **Deploy from a branch**.
6. Select the `main` branch and `/root`, then save.
7. GitHub will publish the site at either `https://<your-github-username>.github.io/` or `https://<your-github-username>.github.io/kyle-turchick-website/`.

## Free hosting option 2: Cloudflare Pages

1. Create a free Cloudflare account.
2. Go to **Workers & Pages → Create → Pages**.
3. Choose **Direct Upload** for the simplest no-code route.
4. Upload this folder.
5. Cloudflare will provide a free `pages.dev` URL. You can later connect a custom domain if you buy one.

## Editing tips

- Update the `meta` description in `index.html` when the research focus changes.
- Replace provisional manuscript titles after submission or acceptance.
- Add links in the Contact section when public profiles are ready.
- Keep this website shorter than the master CV; use it as a polished front door, not the whole filing cabinet.

## Local preview

Open `index.html` in a browser. No build step is needed.

For a slightly more realistic preview, run this command from the folder:

```bash
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.
