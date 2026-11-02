// Where the site is served from. GitHub Actions sets both variables from the
// Pages configuration (see .github/workflows/deploy.yml); the fallbacks match
// the default project-page address.
export const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

export const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL || `https://robiulislam99.github.io${basePath}`
).replace(/\/+$/, "");
