/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',          // creates /out on build for GitHub Pages
  images: { unoptimized: true }, // needed because GH Pages can’t run the image optimizer
  trailingSlash: true        // helps with client-side routing on Pages
};
export default nextConfig;
