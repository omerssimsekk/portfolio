/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // Ensure static HTML export works properly
  images: {
    unoptimized: true,
  },
  // Treat the src directory as the root for static files
  basePath: '',
  // Disable React strict mode for compatibility with existing code
  reactStrictMode: false,
};

module.exports = nextConfig; 