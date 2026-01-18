/** @type {import('next').NextConfig} */

// Extract repo name from GITHUB_REPOSITORY env var (format: "owner/repo")
// or use REPO_NAME env var directly
// Falls back to "portfolio" if not set (for local dev)
const getRepoName = () => {
  if (process.env.REPO_NAME) {
    return process.env.REPO_NAME;
  }
  if (process.env.GITHUB_REPOSITORY) {
    return process.env.GITHUB_REPOSITORY.split('/')[1];
  }
  return 'portfolio'; // default for local development
};

const repoName = getRepoName();
const isProduction = process.env.NODE_ENV === 'production';

const withNextIntl = require('next-intl/plugin')('./i18n.ts');

const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  // Only set basePath and assetPrefix for production (GitHub Pages)
  ...(isProduction && {
    basePath: `/${repoName}`,
    assetPrefix: `/${repoName}`,
  }),
};

module.exports = withNextIntl(nextConfig);

