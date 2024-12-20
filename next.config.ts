import type { NextConfig } from "next";


const nextConfig: NextConfig = {
  /* config options here */
  images:{
    remotePatterns:[
      {
        hostname:"energetic-cuttlefish-696.convex.cloud",
        protocol:"https",
      }
     
    ]
  }
};

export default nextConfig;
