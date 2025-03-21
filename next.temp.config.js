/** @type {import('next').NextConfig} */

const nextConfig = {
  eslint: {
    // Disable ESLint during production build
    ignoreDuringBuilds: true,
  },
  typescript: {
    // Disable TypeScript checking during build
    ignoreBuildErrors: true,
  },
  images: {
    domains: ['images.unsplash.com', 'source.unsplash.com'],
  },
  // Disable any other checks
  reactStrictMode: false,
};

module.exports = nextConfig; 