# lotmind.ai

The LotMind website, plain static HTML. lotmind.ai is served by Cloud Run (`lotmind-site` in lotmind-prod): every merge to `main` builds `Dockerfile` (nginx with these files) and deploys it, through `cloudbuild.yaml` and the trigger `lotmind-site-main`.

| Page | File |
|---|---|
| Home | `index.html` |
| LotMind Ops | `ops/index.html` |
| LotMind Vendor | `vendor/index.html` |
| LotMind Sales | `sales/index.html` |
| LotMind Marketing | `marketing/index.html` |
| Every feature | `features/index.html` |
| Plans | `plans/index.html` |
| Previous one-page site (kept until it can go, not indexed) | `old/index.html` |

The header, footer and chat bubble are repeated in every page. All styles are in `assets/site.css`
(the numbered classes carry the approved mockup's values; the phone rules are at the end), and the menu,
chat bubble and Plans switch are in `assets/site.js`. Images are in `assets/`.

Every "Book a call" link uses one booking link; search for `Book%20a%20LotMind%20call` to change it.

Don't delete `CNAME`: it keeps lotmind.ai pointed here.
