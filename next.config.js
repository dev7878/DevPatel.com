/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  assetPrefix: process.env.NODE_ENV === "production" ? "/DevPatel.com" : "",
  basePath: process.env.NODE_ENV === "production" ? "/DevPatel.com" : "",
  trailingSlash: true,
};

module.exports = nextConfig;
