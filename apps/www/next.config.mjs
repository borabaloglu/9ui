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
	rewrites() {
		return [
			{
				source: "/docs/:path*.md",
				destination: "/llms.mdx/:path*",
			},
		];
	},
	redirects() {
		return [
			{
				source: "/docs/getting-started/dark-mode/remix",
				destination: "/docs/getting-started/dark-mode/react-router",
				permanent: true,
			},
			{
				source: "/llms-full.txt",
				destination: "/llms.txt",
				permanent: true,
			},
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
				source: "/skills",
				destination: "/docs/getting-started/skills",
				permanent: true,
			},
			{
				source: "/docs/components/breadcrumbs",
				destination: "/docs/components/breadcrumb",
				permanent: true,
			},
			{
				source: "/docs/components/dropdown-menu",
				destination: "/docs/components/menu",
				permanent: true,
			},
			{
				source: "/docs/components/form",
				destination: "/docs/forms/base-ui",
				permanent: true,
			},
			{
				source: "/docs/forms",
				destination: "/docs/forms/base-ui",
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
