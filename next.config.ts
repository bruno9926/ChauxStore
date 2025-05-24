import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'src/styles')],
    prependData: "@use 'variables' as *;"
  }
};

export default nextConfig;
