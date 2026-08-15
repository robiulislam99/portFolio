# Md Robiul Islam — Portfolio

A Next.js portfolio built from the resume content, styled around a data-pipeline
motif (fitting given the ETL/data engineering background). Static-exported so it
can be hosted for free on GitHub Pages.

## Features

- Sections: Hero, About, Experience, Projects (+ thesis), Skills, Achievements, Contact
- A left-hand "pipeline rail" that highlights the section you're viewing
- **Add-your-photo option**: click the avatar in the hero section (or "upload_image()")
  to upload a profile photo from your device. It's stored in your browser only
  (localStorage), so it's private and persists on that device/browser.
  For a photo that's baked into the site for every visitor, see below.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Add a permanent profile photo (optional)

The in-browser upload is per-device and doesn't ship with the site. To bake a
photo into the site for everyone:

1. Add your image as `public/images/profile.jpg`.
2. In `components/Hero.js`, replace `<ProfileImage />` with:
   ```jsx
   <img src="/images/profile.jpg" alt="Md Robiul Islam" className="h-40 w-40 rounded-2xl object-cover border border-line" />
   ```

## Add your LinkedIn link

Open `components/Contact.js` and uncomment/edit the LinkedIn line in the
`CHANNELS` array with your actual profile URL.

## Host it on GitHub Pages

This repo is already configured for a static export (`output: 'export'` in
`next.config.mjs`) and includes a ready-to-use GitHub Actions workflow at
`.github/workflows/deploy.yml`.

1. **Create a GitHub repo** and push this project:
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio"
   git branch -M main
   git remote add origin https://github.com/robiulislam99/<your-repo-name>.git
   git push -u origin main
   ```

2. **Enable Pages**: in the repo, go to **Settings → Pages**, and under
   "Build and deployment" set **Source** to **GitHub Actions**.

3. **Set the base path** (only if this is a *project* page, i.e. your repo is
   not named `robiulislam99.github.io`):
   - Go to **Settings → Secrets and variables → Actions → Variables**.
   - Add a variable named `NEXT_PUBLIC_BASE_PATH` with value `/<your-repo-name>`
     (e.g. `/portfolio`).
   - Skip this step entirely if your repo is named `robiulislam99.github.io`
     (a user page, served from the domain root).

4. **Push to `main`** (or run the workflow manually from the Actions tab).
   The workflow builds the site and deploys the `out/` folder to Pages.

5. Your site will be live at:
   - User page: `https://robiulislam99.github.io/`
   - Project page: `https://robiulislam99.github.io/<your-repo-name>/`

### Manual alternative (no GitHub Actions)

```bash
npm run build            # or: NEXT_PUBLIC_BASE_PATH=/<repo-name> npm run build
npx gh-pages -d out
```
This pushes the exported `out/` folder to a `gh-pages` branch; point GitHub
Pages at that branch under **Settings → Pages → Source → Deploy from a branch**.

## Project structure

```
app/            Next.js App Router entry (layout.js, page.js, globals.css)
components/     Section components (Hero, About, Experience, Projects, Skills,
                Achievements, Contact, Nav, PipelineRail, ProfileImage)
public/images/  Static assets — put profile.jpg / project screenshots here
```
