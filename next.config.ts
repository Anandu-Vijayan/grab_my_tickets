import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
  },
  images: {
    remotePatterns: [
      {
        hostname: "energetic-cuttlefish-696.convex.cloud",
        protocol: "https",
      },
      {
        hostname: "fearless-manatee-174.convex.cloud",
        protocol: "https",
      },

    ],
  },
};

export default nextConfig;
