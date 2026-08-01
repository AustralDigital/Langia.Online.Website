import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    qualities: [75, 90],
  },
  async redirects() {
    return [
      "/about",
      "/blog",
      "/contact",
      "/corporate",
      "/legal",
      "/programs",
      "/programs/langia-4-kids-n-teens",
      "/programs/langia-online",
      "/programs/talkin-club",
      "/programs/test-prep",
      "/test-your-english-level",
      "/work-with-us",
    ].map((source) => ({ source, destination: `/es${source}`, permanent: true })).concat([
      { source: "/blog/:slug", destination: "/en/blog/:slug", permanent: true },
    ]);
  },
};

export default nextConfig;
