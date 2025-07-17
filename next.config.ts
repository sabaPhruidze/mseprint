// next.config.ts
const CANONICAL = 'www.mseprinting.com';

export default {
  trailingSlash: false,
  async redirects() {
    return [
      // 1. Catch bare domain over either protocol
      {
        source: '/:path*',
        has: [{ type: 'host', value: '^mseprinting\\.com$' }],
        destination: `https://${CANONICAL}/:path*`,
        permanent: true,   // 308
      },
      // 2. Catch http://www.
      {
        source: '/:path*',
        has: [
          { type: 'host', value: CANONICAL },
          { type: 'header', key: 'x-forwarded-proto', value: 'http' },
        ],
        destination: `https://${CANONICAL}/:path*`,
        permanent: true,
      },
    ];
  },
};
