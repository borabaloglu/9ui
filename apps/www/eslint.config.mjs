import nextCoreWebVitals from "eslint-config-next/core-web-vitals"
import nextTypescript from "eslint-config-next/typescript"
import prettier from "eslint-config-prettier"

/** @type {import('eslint').Linter.Config[]} */
const config = [
	{
		ignores: ["node_modules/", ".next/", "dist/", "build/", "public/r/"],
	},
	...nextCoreWebVitals,
	...nextTypescript,
	prettier,
	{
		rules: {
			"@next/next/no-html-link-for-pages": "off",
			"react/jsx-key": "off",
			"@next/next/no-img-element": "off",
			"react-hooks/exhaustive-deps": "off",
			"react/display-name": "off",
			"react-hooks/set-state-in-effect": "warn",
			"react-hooks/refs": "warn",
			"react-hooks/incompatible-library": "warn",
		},
	},
]

export default config
