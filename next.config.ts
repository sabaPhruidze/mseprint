// next.config.ts
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    formats: ['image/webp'],          // keep WEBP (faster to encode)
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    minimumCacheTTL: 86400,
  },

  // experimental: { optimizePackageImports: ['framer-motion', 'lucide-react'] },  ← comment out
  poweredByHeader: false,
  productionBrowserSourceMaps: false,
};

export default nextConfig;
