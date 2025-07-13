import type { NextConfig } from 'next'
const CANONICAL_HOST = 'www.mseprinting.com'

const nextConfig: NextConfig = {
  reactStrictMode: true,
  trailingSlash: false,

  async redirects() {
    return [
      {
        source: '/:path*',
        has: [{ type: 'host', key: 'host', value: 'mseprinting.com' }],
        destination: `https://${CANONICAL_HOST}/:path*`,
        permanent: true,
      },
      {
        source: '/:path*',
        has: [
          { type: 'host',   key: 'host', value: CANONICAL_HOST },
          { type: 'header', key: 'x-forwarded-proto', value: 'http' },
        ],
        destination: `https://${CANONICAL_HOST}/:path*`,
        permanent: true,
      },
      {
        source: '/privacy-policy/',
        destination: '/privacy-policy',
        permanent: true,
      },
    ]
  },
}

export default nextConfig




//  // Core behaviour
//   reactStrictMode: true,
//   poweredByHeader: false,
//   productionBrowserSourceMaps: false,

//   // Image optimisation
//   images: {
//     formats: ['image/avif', 'image/webp'],
//     deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
//     imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
//     minimumCacheTTL: 86_400, // 24 h

//     // Accept anything served from *.mseprinting.com over HTTPS
//     remotePatterns: [
//       {
//         protocol: 'https',
//         hostname: '**.mseprinting.com',
//       },
//     ],
//   },

//   // Redirect rules
//   async redirects() {
//     return [
//       // 1 — Add “www” if host is bare, also force HTTPS
//       {
//         source: '/:path*',
//         has: [{ type: 'host', value: 'mseprinting.com' }],
//         destination: 'https://www.mseprinting.com/:path*',
//         permanent: true,
//       },
      
//       {
//         source: '/:path*',
//         has: [{ type: 'header', key: 'x-forwarded-proto', value: 'http' }],
//         destination: 'https://www.mseprinting.com/:path*',
//         permanent: true,
//       },
//     ];
//   },