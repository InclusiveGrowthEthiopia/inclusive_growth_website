import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Produces static files in /out for Plesk's Apache/Nginx document root.
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;
