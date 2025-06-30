import { FlatCompat } from "@eslint/eslintrc"

const compat = new FlatCompat({
	baseDirectory: import.meta.dir,
})

/** @type {import('eslint').Linter.Config[]} */
const config = [
	...compat.config({
		$schema: "https://json.schemastore.org/eslintrc",
		root: true,
		extends: [
			"next/core-web-vitals",
			"next/typescript",
			"prettier",
			"plugin:tailwindcss/recommended",
		],
		plugins: ["tailwindcss", "@typescript-eslint"],
		ignorePatterns: ["node_modules/", ".next/", "dist/", "build/"],
		rules: {
			"@next/next/no-html-link-for-pages": "off",
			"react/jsx-key": "off",
			"tailwindcss/no-custom-classname": "off",
			"@next/next/no-img-element": "off",
			"react-hooks/exhaustive-deps": "off",
		},
		settings: {
			tailwindcss: {
				callees: ["cn"],
				config: "./tailwind.config.js",
			},
		},
	}),
	{
		files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],
	},
]

export default config
