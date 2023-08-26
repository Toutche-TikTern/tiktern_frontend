/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'localhost',
      'cdn-icons-png.flaticon.com',
      'tiktern-backend.azurewebsites.net',
    ],
  },
  output: 'standalone',
};

module.exports = nextConfig;
