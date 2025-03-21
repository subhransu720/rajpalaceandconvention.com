/** @type {import('next').NextConfig} */

const nextConfig = {
  output: 'standalone',
  reactStrictMode: true,
  images: {
    domains: ['images.unsplash.com'],
    unoptimized: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  experimental: {
    serverActions: true,
  },
  env: {
    NEXT_PUBLIC_BASE_URL: process.env.NODE_ENV === 'development' 
      ? 'http://localhost:3004' 
      : 'https://rajpalaceandconvention.com',
  }
};

module.exports = nextConfig; 