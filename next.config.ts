import type { NextConfig } from "next";
import { LEGACY_LEARN_REDIRECTS } from "./lib/legacy-learn-redirects";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  async redirects() {
    return Object.entries(LEGACY_LEARN_REDIRECTS).map(([from, to]) => ({
      source: `/learn/${from}`,
      destination: `/learn/${to}`,
      permanent: true,
    }));
  },
};
export default nextConfig;
