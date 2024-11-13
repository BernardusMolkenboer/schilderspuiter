/** @type {import('next').NextConfig} */
const withTM = require("next-transpile-modules")(["react-syntax-highlighter"]);

module.exports = withTM({
  images: {
    domains: [
      "nextjs-abn-company.vercel.app",
      "www.abn.company",
      "abn.company",
      "source.unsplash.com",
      "images.unsplash.com",
      "localhost",
      "images.ctfassets.net",
      "pbs.twimg.com",
    ],
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: [
        {
          loader: "@svgr/webpack",
          options: {
            typescript: true,
          },
        },
      ],
    });

    return config;
  },
  async redirects() {
    return [
      {
        source: "/custom-web-tools",
        destination: "/",
        permanent: true, // Set to `true` for a 308 permanent redirect, or `false` for a 307 temporary redirect
      },
      {
        source: "/web-scraping-data",
        destination: "/data-scraping-integration",
        permanent: true, // Use 'true' for a 301 redirect; 'false' for a 302
      },
    ];
  },
});
