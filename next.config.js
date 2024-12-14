/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  distDir: 'dist',
  images: {
    unoptimized: true
  },
  reactStrictMode: true,
  // Only process specific directories
  onDemandEntries: {
    maxInactiveAge: 25 * 1000,
    pagesBufferLength: 2,
  },
  // Explicitly include only the directories we need
  transpilePackages: ['@vercel/analytics'],
  experimental: {
    optimizeCss: true,
    legacyBrowsers: false
  }
}

module.exports = nextConfig 