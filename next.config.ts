import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enable React strict mode for better development practices
  reactStrictMode: true,

  // Image optimization
  images: {
    formats: ["image/webp"],
    qualities: [75],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 2678400, // 31 days
    remotePatterns: [
      { protocol: "https", hostname: "image.tmdb.org" },
      { protocol: "https", hostname: "s4.anilist.co" },
      { protocol: "https", hostname: "howlongtobeat.com" },
      { protocol: "https", hostname: "via.placeholder.com" }, // for the avatar fallback
    ],
  },

  // Compress responses
  compress: true,

  // Production optimizations
  poweredByHeader: false,
};

export default nextConfig;
