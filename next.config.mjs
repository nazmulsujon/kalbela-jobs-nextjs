/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
    missingSuspenseWithCSRBailout: false,
  },
  env: {
    NEXT_APP_BASE_URL: process.env.NEXT_APP_BASE_URL,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
}

export default nextConfig
