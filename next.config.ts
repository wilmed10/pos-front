import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'pos-nest-7bsb.onrender.com'
      },
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com'
      },
    ]
  }
};

export default nextConfig;
