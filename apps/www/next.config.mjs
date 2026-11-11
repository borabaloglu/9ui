import { createMDX } from "fumadocs-mdx/next";

/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	outputFileTracingIncludes: {
		"/docs/[...slug]": [
			"./src/components/demos/**/*",
			"./src/components/ui/**/*",
		],
	},
	redirects() {
		return [
			{
				source: "/docs",
				destination: "/docs/getting-started/introduction",
				permanent: true,
			},
			{
				source: "/docs/getting-started",
				destination: "/docs/getting-started/introduction",
				permanent: true,
			},
			{
				source: "/docs/components",
				destination: "/docs/components/accordion",
				permanent: true,
			},
			{
				source: "/docs/components/dropdown-menu",
				destination: "/docs/components/menu",
				permanent: true,
			},
			{
				source: "/docs/components/input-otp",
				destination: "/docs/components/otp-field",
				permanent: true,
			},
		];
	},
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "images.pexels.com",
			},
		],
	},
};

const withMDX = createMDX();

export default withMDX(nextConfig);
