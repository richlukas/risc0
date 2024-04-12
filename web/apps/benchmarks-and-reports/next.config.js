await import("./src/env.js");
import withBundleAnalyzer from "@next/bundle-analyzer";
import packageJson from "./package.json" assert { type: "json" };

/** @type {import("next").NextConfig} */
const config = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  reactStrictMode: true,
  transpilePackages: ["@risc0/ui"],
  experimental: {
    caseSensitiveRoutes: true,
  },
  publicRuntimeConfig: {
    version: packageJson.version,
  },

  // permanent redirects
  // biome-ignore lint/suspicious/useAwait: ignore for this one
  async redirects() {
    return [
      {
        source: "/",
        destination: "/latest",
        permanent: true,
      },
    ];
  },
};

export default withBundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
})(config);
