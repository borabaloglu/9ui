const path = require("path")

/** @type {import('tailwindcss').Config} */
const config = {
	content: [path.resolve(__dirname, "9ui/**/*.{js,ts,jsx,tsx,mdx}")],
	darkMode: "class",
	theme: {
		extend: {
			colors: {
				bg: "oklch(from var(--background) l c h / <alpha-value>)",
				fg: "oklch(from var(--foreground) l c h / <alpha-value>)",
				primary: {
					DEFAULT: "oklch(from var(--primary) l c h / <alpha-value>)",
					fg: "oklch(from var(--primary-fg) l c h / <alpha-value>)",
				},
				secondary: {
					DEFAULT: "oklch(from var(--secondary) l c h / <alpha-value>)",
					fg: "oklch(from var(--secondary-fg) l c h / <alpha-value>)",
				},
				accent: {
					DEFAULT: "oklch(from var(--accent) l c h / <alpha-value>)",
					fg: "oklch(from var(--accent-fg) l c h / <alpha-value>)",
				},
				success: {
					DEFAULT: "oklch(from var(--success) l c h / <alpha-value>)",
					fg: "oklch(from var(--success-fg) l c h / <alpha-value>)",
				},
				danger: {
					DEFAULT: "oklch(from var(--danger) l c h / <alpha-value>)",
					fg: "oklch(from var(--danger-fg) l c h / <alpha-value>)",
				},
				warning: {
					DEFAULT: "oklch(from var(--warning) l c h / <alpha-value>)",
					fg: "oklch(from var(--warning-fg) l c h / <alpha-value>)",
				},
				info: {
					DEFAULT: "oklch(from var(--info) l c h / <alpha-value>)",
					fg: "oklch(from var(--info-fg) l c h / <alpha-value>)",
				},
				link: {
					fg: "oklch(from var(--link-fg) l c h / <alpha-value>)",
				},
			},
			boxShadow: {
				"elevation-low":
					"0px 1px 8px 0px rgba(20, 20, 20, 0.08), 0px 0px 1px 0px rgba(20, 20, 20, 0.12)",
				"elevation-medium":
					"0px 4px 12px 2px rgba(20, 20, 20, 0.08), 0px 0px 1px 0px rgba(20, 20, 20, 0.12)",
				"elevation-high":
					"0px 8px 16px 8px rgba(20, 20, 20, 0.04), 0px 0px 1px 0px rgba(20, 20, 20, 0.12)",
			},
		},
	},
	plugins: [require("tailwindcss-animate")],
}

export default config
