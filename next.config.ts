import type { NextConfig } from "next";

const repo = "Jalalati";
const usingPages = process.env.GITHUB_PAGES === "true";

const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
  trailingSlash: true,
  basePath: usingPages ? `/${repo}` : "",
  assetPrefix: usingPages ? `/${repo}/` : undefined,
};

export default nextConfig;
