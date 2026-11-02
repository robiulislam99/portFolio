/** @type {import('next').NextConfig} */

// A GitHub project page (https://<user>.github.io/<repo>/) is served from a
// sub-path. The deploy workflow sets NEXT_PUBLIC_BASE_PATH from the repo's
// Pages settings automatically; locally it is empty, so the site runs at
// http://localhost:3000/.
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
