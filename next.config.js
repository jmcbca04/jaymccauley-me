/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Explicitly define which files to include in the build
  pageExtensions: ['js', 'jsx', 'ts', 'tsx'],
  // Disable unnecessary features
  reactStrictMode: true,
  poweredByHeader: false,
}

module.exports = nextConfig 