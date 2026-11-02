# Md Robiul Islam — Portfolio

A personal portfolio built with Next.js and Tailwind CSS, styled around a
data-pipeline motif to match an ETL and data-engineering background. It is
exported as static files and hosted on GitHub Pages.

## Features

- **Sections:** Hero, About, Experience and Education, Projects (with thesis),
  Skills, Achievements and Contact.
- **Responsive from 320 px up:** a full-screen menu on phones and tablets, a
  two-column hero on desktop, and a side "pipeline rail" on wide screens that
  tracks the section you're reading.
- **Accessible:** skip link, visible keyboard focus, labelled navigation,
  correct heading order, and reduced-motion support. Lighthouse accessibility
  score is 100.
- **Search and sharing:** title, description, canonical URL, Open Graph and
  Twitter cards with a 1200×630 preview image, schema.org `Person` data, and
  favicons.
- **Fast:** system fonts, a resized WebP portrait, and lazy rendering of
  sections below the fold. Lighthouse scores 97–98 on mobile and 100 on desktop.
- **Small touches:** copy-email button, styled 404 page, and an optional résumé
  button.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

```bash
npm run lint    # ESLint (Next.js core-web-vitals rules)
npm run build   # static export into out/
```

## Edit the content

All of the text lives in **`lib/content.js`**: profile and contact links,
About, Experience, Education, Projects, Skills and Achievements. Edit that one
file; the components read from it.

### Add a résumé button

1. Put the PDF at `public/resume.pdf`.
2. In `lib/content.js`, set `resume: "/resume.pdf"`.

A "Résumé" button then appears in the hero.

### Change the photo

The hero uses `public/images/robiul-600.webp`, a 600 px wide copy of
`public/images/robiul.jpeg`. To use a new photo, replace that WebP with any
portrait about 600 px wide. Keep the same file name, or update the import at the
top of `components/Hero.js`.

### Social preview image and icons

- `app/opengraph-image.png` (1200×630) is the card shown when the link is shared
  on LinkedIn, Slack, WhatsApp and similar apps. Its alt text is in
  `app/opengraph-image.alt.txt`. It's a static image, so replace it if your name,
  title or photo changes.
- `app/icon.svg` is the browser-tab icon, and `app/apple-icon.png` is the iOS
  home-screen icon.

## Deploy to GitHub Pages

The workflow at `.github/workflows/deploy.yml` lints, builds and deploys on every
push to `main`.

1. In the repository, open **Settings → Pages** and set **Source** to
   **GitHub Actions**. This only needs doing once.
2. Push to `main`, or run the workflow from the **Actions** tab.

The workflow reads the Pages settings itself, so it works without extra
configuration in each of these cases:

| Repository                 | Site address                                 |
| -------------------------- | -------------------------------------------- |
| `portfolio` (project page) | `https://robiulislam99.github.io/portfolio/` |
| `robiulislam99.github.io`  | `https://robiulislam99.github.io/`           |
| Custom domain              | `https://your-domain/`                       |

From those settings it sets `NEXT_PUBLIC_BASE_PATH`, the sub-path the site is
served from, and `NEXT_PUBLIC_SITE_URL`, the full address used in canonical and
social-preview links. A repository variable named `NEXT_PUBLIC_BASE_PATH` still
overrides the detected base path if you set one.

### Build for a sub-path by hand

```bash
NEXT_PUBLIC_BASE_PATH=/portfolio NEXT_PUBLIC_SITE_URL=https://robiulislam99.github.io/portfolio npm run build
```

## Project structure

```
app/
  layout.js            Page shell, metadata, skip link
  page.js              Section order, structured data
  globals.css          Colour tokens, fonts, base styles
  not-found.js         404 page
  icon.svg, apple-icon.png, opengraph-image.png
components/
  Nav.js               Sticky header and mobile menu
  PipelineRail.js      Side section tracker (wide screens)
  Hero.js, About.js, Experience.js, Projects.js, Skills.js,
  Achievements.js, Contact.js, Footer.js
  Section.js           Shared section wrapper and chip list
  CopyEmailButton.js   Copy-to-clipboard button
  icons.js             Inline SVG icons
  useActiveSection.js  Tracks which section is on screen
lib/
  content.js           All site copy: edit this to update the portfolio
  site.js              Base path and public site URL
public/images/         Profile photo
```
