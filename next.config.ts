// next.config.ts
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    formats: ['image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    minimumCacheTTL: 86_400,        // 1 day
  },

  poweredByHeader: false,
  productionBrowserSourceMaps: false,

  /* ─────────────── PERMANENT REDIRECTS ─────────────── */
  async redirects() {
    return [
      /* 1) Non-www  →  www  (works for http *and* https) */
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            key: 'host',                // required by the type
            value: 'mseprinting.com',   // bare domain
          },
        ],
        destination: 'https://www.mseprinting.com/:path*',
        permanent: true,               // 308 on Vercel, 301 elsewhere
      },

      /* 2) Force HTTPS on the www host */
      {
        source: '/:path*',
        has: [
          {
            type: 'header',             // look at request header
            key: 'x-forwarded-proto',   // set by most CDNs / proxies
            value: 'http',
          },
          {
            type: 'host',
            key: 'host',
            value: 'www.mseprinting.com',
          },
        ],
        destination: 'https://www.mseprinting.com/:path*',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
