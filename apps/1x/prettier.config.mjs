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
		"^@/config/(.*)$",
		"",
		"^@/lib/(.*)$",
		"",
		"^@/providers/(.*)$",
		"",
		"^@/registry/(.*)$",
		"",
		"^@/types/(.*)$",
		"",
		"^[./]",
	],
	importOrderParserPlugins: ["typescript", "jsx", "decorators-legacy"],
}

export default config
