/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  assetPrefix: process.env.NODE_ENV === "production" ? "/DevPatel.com" : "",
  basePath: process.env.NODE_ENV === "production" ? "/DevPatel.com" : "",
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
