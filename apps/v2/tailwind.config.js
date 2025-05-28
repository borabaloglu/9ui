import tailwindAnimate from "tailwindcss-animate"

const config = {
	darkMode: ["class"],
	content: ["src/**/*.{js,ts,jsx,tsx,mdx}"],
	theme: {
		extend: {
			fontFamily: {
				sans: ["var(--font-inter)"],
				mono: ["var(--font-geist-mono)"],
			},
			borderRadius: {
				lg: "var(--radius)",
				md: "calc(var(--radius) - 2px)",
				sm: "calc(var(--radius) - 4px)",
			},
			colors: {
				background: "oklch(from var(--background) l c h / <alpha-value>)",
				foreground: "oklch(from var(--foreground) l c h / <alpha-value>)",
				card: {
					DEFAULT: "oklch(from var(--card) l c h / <alpha-value>)",
					foreground:
						"oklch(from var(--card-foreground) l c h / <alpha-value>)",
				},
				popover: {
					DEFAULT: "oklch(from var(--popover) l c h / <alpha-value>)",
					foreground:
						"oklch(from var(--popover-foreground) l c h / <alpha-value>)",
				},
				primary: {
					DEFAULT: "oklch(from var(--primary) l c h / <alpha-value>)",
					foreground:
						"oklch(from var(--primary-foreground) l c h / <alpha-value>)",
				},
				secondary: {
					DEFAULT: "oklch(from var(--secondary) l c h / <alpha-value>)",
					foreground:
						"oklch(from var(--secondary-foreground) l c h / <alpha-value>)",
				},
				muted: {
					DEFAULT: "oklch(from var(--muted) l c h / <alpha-value>)",
					foreground:
						"oklch(from var(--muted-foreground) l c h / <alpha-value>)",
				},
				accent: {
					DEFAULT: "oklch(from var(--accent) l c h / <alpha-value>)",
					foreground:
						"oklch(from var(--accent-foreground) l c h / <alpha-value>)",
				},
				destructive: {
					DEFAULT: "oklch(from var(--destructive) l c h / <alpha-value>)",
					foreground:
						"oklch(from var(--destructive-foreground) l c h / <alpha-value>)",
				},
				danger: {
					DEFAULT: "oklch(from var(--danger) l c h / <alpha-value>)",
					border: "oklch(from var(--danger-border) l c h / <alpha-value>)",
					foreground:
						"oklch(from var(--danger-foreground) l c h / <alpha-value>)",
				},
				warning: {
					DEFAULT: "oklch(from var(--warning) l c h / <alpha-value>)",
					border: "oklch(from var(--warning-border) l c h / <alpha-value>)",
					foreground:
						"oklch(from var(--warning-foreground) l c h / <alpha-value>)",
				},
				info: {
					DEFAULT: "oklch(from var(--info) l c h / <alpha-value>)",
					border: "oklch(from var(--info-border) l c h / <alpha-value>)",
					foreground:
						"oklch(from var(--info-foreground) l c h / <alpha-value>)",
				},
				success: {
					DEFAULT: "oklch(from var(--success) l c h / <alpha-value>)",
					border: "oklch(from var(--success-border) l c h / <alpha-value>)",
					foreground:
						"oklch(from var(--success-foreground) l c h / <alpha-value>)",
				},
				border: "oklch(from var(--border) l c h / <alpha-value>)",
				input: "oklch(from var(--input) l c h / <alpha-value>)",
				ring: "oklch(from var(--ring) l c h / <alpha-value>)",
				chart: {
					1: "oklch(from var(--chart-1) l c h / <alpha-value>)",
					2: "oklch(from var(--chart-2) l c h / <alpha-value>)",
					3: "oklch(from var(--chart-3) l c h / <alpha-value>)",
					4: "oklch(from var(--chart-4) l c h / <alpha-value>)",
					5: "oklch(from var(--chart-5) l c h / <alpha-value>)",
				},
			},
			animation: {
				blink: "blink 1s infinite",
			},
			keyframes: {
				blink: {
					"0%, 100%": {
						opacity: "1",
					},
					"50%": {
						opacity: "0",
					},
				},
			},
		},
	},
	plugins: [tailwindAnimate],
}

export default config
