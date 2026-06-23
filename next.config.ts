import { NextConfig } from "next"

const nextConfig: NextConfig = {
  allowedDevOrigins: [
    'localhost',
    '192.168.1.4'
  ],
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.ctfassets.net',
        pathname: '/4lgan033pgh0/**'
      }
    ]
  }
}

export default nextConfig