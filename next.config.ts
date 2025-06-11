import type { NextConfig } from "next"

const nextConfig: NextConfig = {
     images: {
    formats: ['image/webp'],
    minimumCacheTTL: 86400, // 24hr cache
  },
};

export default nextConfig;
