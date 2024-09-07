import path from "path";
import { fileURLToPath } from "url";

/** @type {import('next').NextConfig} */

const __filename = fileURLToPath(import.meta.url);
// console.log("file name", __filename);
const __dirname = path.dirname(__filename);
// console.log("dir name", __dirname);

const nextConfig = {
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
};

export default nextConfig;
