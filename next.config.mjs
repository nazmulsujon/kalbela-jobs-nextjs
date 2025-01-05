/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    NEXT_APP_BASE_URL: process.env.NEXT_APP_BASE_URL,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
}

export default nextConfig
