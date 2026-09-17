# Goldilocks Web — Landing Page Prototype

Static HTML/CSS/JS prototype for the Goldilocks ecosystem landing page, split across three pages:

- `public/index.html` — home page: project overview, funders, and links to Data / ML / Core / Agent
- `public/core.html` — Core / Workbench entry point
- `public/agent.html` — Agent entry point (online + download)

An "About" overlay (project overview, challenge, solution, outcomes, people, organisations) is available from the nav on every page, powered by `public/script.js`.

## Run locally

No build step required. Either open `public/index.html` directly in a browser, or serve the folder:

```sh
cd public
python3 -m http.server 8000
```

Then visit `http://localhost:8000/index.html`.

## Note on this branch

This `landing-page` branch is a design prototype and is unrelated to the Astro site on `main` (forked from [ddmms/goldilocks-web](https://github.com/ddmms/goldilocks-web)), which is the current source for the live [goldilocks.ac.uk](https://goldilocks.ac.uk/) site.
