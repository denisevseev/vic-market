/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  distDir: "build",
  images: {
    unoptimized: true,
    domains: ["source.unsplash.com", "crm.victorum-group.com"]
  },
  modularizeImports: {
    "@mui/icons-material": {
      transform: "@mui/icons-material/{{member}}",
    },
  },
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: `https://crm.victorum-group.com/:path*`,
      },
    ];
  },
};

module.exports = nextConfig;
