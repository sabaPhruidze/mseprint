import type { NextConfig } from "next"

const nextConfig: NextConfig = {
     images: {
    deviceSizes: [360, 640, 768, 1024, 1280, 1536, 1920],
    imageSizes:  [16, 32, 64, 256, 512, 1050],
  },
};

export default nextConfig;
