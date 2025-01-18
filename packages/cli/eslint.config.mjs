import { FlatCompat } from "@eslint/eslintrc"

const compat = new FlatCompat({
	baseDirectory: import.meta.dir,
	resolvePluginsRelativeTo: import.meta.dir,
})

/** @type {import('eslint').Linter.Config[]} */
const config = [
	...compat.config({
		$schema: "https://json.schemastore.org/eslintrc",
		root: true,
		extends: ["turbo", "prettier"],
		parser: "@typescript-eslint/parser",
		parserOptions: {
			project: "./tsconfig.json",
			tsconfigRootDir: import.meta.dir,
		},
		plugins: ["@typescript-eslint"],
		ignorePatterns: ["node_modules/", "dist/", "build/"],
		rules: {
			"@typescript-eslint/no-unused-vars": [
				"error",
				{
					argsIgnorePattern: "^_",
					varsIgnorePattern: "^_",
				},
			],
			"@typescript-eslint/no-explicit-any": "warn",
		},
	}),
	{
		files: ["**/*.{js,mjs,cjs,ts}"],
	},
]

export default config
