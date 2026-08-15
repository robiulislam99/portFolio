/** @type {import('next').NextConfig} */

// When deploying to https://<user>.github.io/<repo>/ (a project page, not a
// user/organization page), GitHub serves the site from a sub-path. Set
// NEXT_PUBLIC_BASE_PATH to "/<repo>" (e.g. "/portfolio") via a repo variable
// or directly below before building. Leave it empty for a user/organization
// page (https://<user>.github.io/).
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

const nextConfig = {
  output: 'export',
  basePath,
  assetPrefix: basePath ? `${basePath}/` : undefined,
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

export default nextConfig;
