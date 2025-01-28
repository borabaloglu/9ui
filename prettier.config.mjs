/** @type {import('prettier').Config} */
const config = {
	endOfLine: "lf",
	semi: false,
	singleQuote: false,
	tabWidth: 2,
	trailingComma: "es5",
	plugins: ["@ianvs/prettier-plugin-sort-imports"],
	importOrder: [
		"^(react/(.*)$)|^(react$)",
		"^(next/(.*)$)|^(next$)",
		"<THIRD_PARTY_MODULES>",
		"",
		"^@/components/(.*)$",
		"",
		"^@/configs/(.*)$",
		"",
		"^@/providers/(.*)$",
		"",
		"^@/lib/(.*)$",
		"",
		"^[./]",
	],
	importOrderParserPlugins: ["typescript", "jsx", "decorators-legacy"],
}

export default config
