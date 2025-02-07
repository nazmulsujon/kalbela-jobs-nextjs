/** @type {import('next').NextConfig} */
const nextConfig = {
      reactStrictMode: true,

      images: {
            remotePatterns: [
                  {
                        protocol: 'https',
                        hostname: 'i.ibb.co.com',
                        port: '',
                        pathname: '/J25bz4n/**',
                  },
                  {
                        protocol: 'https',
                        hostname: 'image.kalbelajobs.com',
                        port: '',
                        pathname: '/api/v1/image/**',
                  },
                  {
                        protocol: 'https',
                        hostname: 'encrypted-tbn0.gstatic.com',
                        port: '',
                        pathname: '/images?**',
                  },


            ],
      },
      env: {
            NEXT_APP_BASE_URL: process.env.NEXT_APP_BASE_URL,
      },
      eslint: {
            ignoreDuringBuilds: true,
      },
}

export default nextConfig
