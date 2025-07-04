// next.config.ts
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    formats: ['image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    minimumCacheTTL: 86_400,
  },

  poweredByHeader: false,
  productionBrowserSourceMaps: false,

  async redirects() {
    return [
      /* 1) non-www  →  www  (http or https) */
      {
        source: '/:path*',
        has: [
          {
            type: 'host',           // only type + value for host rule
            value: 'mseprinting.com',
          },
        ],
        destination: 'https://www.mseprinting.com/:path*',
        permanent: true,
      },

      /* 2) Force HTTPS (any host still on http) */
      {
        source: '/:path*',
        has: [
          {
            type: 'header',
            key: 'x-forwarded-proto',
            value: 'http',
          },
        ],
        destination: 'https://www.mseprinting.com/:path*',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
