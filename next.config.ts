import type { NextConfig } from "next";
import path from "path";

// A lockfile outside this folder made Next.js treat the wrong directory as
// the app. Keep file tracing and the dev server rooted in this project.
const projectRoot = path.join(__dirname);

const nextConfig: NextConfig = {
  outputFileTracingRoot: projectRoot,
  turbopack: {
    root: projectRoot,
  },
};

export default nextConfig;
