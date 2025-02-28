/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // Ensure static HTML export works properly
  images: {
    unoptimized: true,
  },
  // Disable React strict mode for compatibility with existing code
  reactStrictMode: false,
  // Ensure all static files are copied
  distDir: 'out',
  trailingSlash: true,
};

module.exports = nextConfig; 