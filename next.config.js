const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx',
});

const assetPrefix = "/reading-notes";

const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  reactStrictMode: true,
  swcMinify: true,
  trailingSlash: true,
  basePath: assetPrefix,
};

module.exports = {
  ...withNextra(),
  ...nextConfig,
};