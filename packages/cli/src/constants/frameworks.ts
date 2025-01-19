const BASE_INSTALLATION_URL =
	"https://9ui.vercel.app/docs/getting-started/installation"

export const FRAMEWORKS = {
	next: {
		name: "next",
		label: "Next.js",
		links: {
			installation: `${BASE_INSTALLATION_URL}/next`,
			tailwind: "https://tailwindcss.com/docs/guides/nextjs",
		},
	},
	astro: {
		name: "astro",
		label: "Astro",
		links: {
			installation: `${BASE_INSTALLATION_URL}/astro`,
			tailwind: "https://tailwindcss.com/docs/guides/astro",
		},
	},
	remix: {
		name: "remix",
		label: "Remix",
		links: {
			installation: `${BASE_INSTALLATION_URL}/remix`,
			tailwind: "https://tailwindcss.com/docs/guides/remix",
		},
	},
	vite: {
		name: "vite",
		label: "Vite",
		links: {
			installation: `${BASE_INSTALLATION_URL}/vite`,
			tailwind: "https://tailwindcss.com/docs/guides/vite",
		},
	},
	gatsby: {
		name: "gatsby",
		label: "Gatsby",
		links: {
			installation: `${BASE_INSTALLATION_URL}/gatsby`,
			tailwind: "https://tailwindcss.com/docs/guides/gatsby",
		},
	},
	unknown: {
		name: "unknown",
		label: "Unknown",
		links: {
			installation: `${BASE_INSTALLATION_URL}/manual`,
			tailwind: "https://tailwindcss.com/docs/installation",
		},
	},
} as const

export type Framework = (typeof FRAMEWORKS)[keyof typeof FRAMEWORKS]
