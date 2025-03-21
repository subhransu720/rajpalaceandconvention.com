/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['images.unsplash.com'],
    unoptimized: false,
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  experimental: {
    optimizeCss: true,
  },
  compiler: {
    removeConsole: false,
  },
  env: {
    NEXT_PUBLIC_BASE_URL: process.env.NODE_ENV === 'development' 
      ? 'http://localhost:3004' 
      : 'https://rajpalaceandconvention.com',
  }
};

module.exports = nextConfig; 