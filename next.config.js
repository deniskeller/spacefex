/** @type {import('next').NextConfig} */

const path = require("path");
const withImages = require("next-images");

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
	sassOptions: {
    includePaths: [path.join(__dirname, "src/assets/scss")],
    prependData: `@import "main.scss";`,
  },
	experimental: {
		scrollRestoration: true,
	}
}

module.exports = nextConfig