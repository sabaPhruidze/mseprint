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
     
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            key: 'host',                
            value: 'mseprinting.com',   
          },
        ],
        destination: 'https://www.mseprinting.com/:path*',
        permanent: true,             
      },

      {
        source: '/:path*',
        has: [
          {
            type: 'header',             
            key: 'x-forwarded-proto',   
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
