import { readFile, writeFile } from "fs/promises"
import { join } from "path"

interface InitConfig {
	cssVars: {
		theme: Record<string, string>
		light: Record<string, string>
		dark: Record<string, string>
	}
	css: {
		"@layer base": Record<string, Record<string, string>>
	}
}

function generateGlobalsCss(config: InitConfig): string {
	const { cssVars, css } = config

	// Generate imports and custom variant
	const imports = [
		'@import "tailwindcss";',
		'@import "tw-animate-css";',
		'',
		'@custom-variant dark (&:is(.dark *));',
		''
	].join('\n')

	// Generate @layer base styles
	const baseStyles = Object.entries(css["@layer base"])
		.map(([selector, styles]) => {
			const styleProps = Object.entries(styles)
				.map(([prop, value]) => {
					// Convert CSS property names to kebab-case and handle special cases
					const cssProp = prop.replace(/([A-Z])/g, '-$1').toLowerCase()
					return `\t\t${cssProp}: ${value};`
				})
				.join('\n')
			
			return `\t${selector} {\n${styleProps}\n\t}`
		})
		.join('\n')

	const layerBase = `@layer base {\n${baseStyles}\n}`

	// Generate CSS variables for light mode
	const lightVars = Object.entries(cssVars.light)
		.map(([key, value]) => `\t--${key}: ${value};`)
		.join('\n')

	const rootSection = `:root {\n${lightVars}\n}`

	// Generate CSS variables for dark mode
	const darkVars = Object.entries(cssVars.dark)
		.map(([key, value]) => `\t--${key}: ${value};`)
		.join('\n')

	const darkSection = `.dark {\n${darkVars}\n}`

	// Generate theme variables
	const themeVars = Object.entries(cssVars.theme)
		.map(([key, value]) => `\t--${key}: ${value};`)
		.join('\n')

	// Generate theme variables section
	const themeSection = `@theme inline {\n${themeVars}\n}`

	return [imports, themeSection, '', rootSection, '', darkSection, '', layerBase].join('\n')
}

async function main() {
	const initPath = join(process.cwd(), "public/r/init.json")
	const outputPath = join(process.cwd(), "public/r/globals.css")
	
	const initContent = await readFile(initPath, "utf-8")
	const config: InitConfig = JSON.parse(initContent)
	
	const globalsCss = generateGlobalsCss(config)
	
	await writeFile(outputPath, globalsCss)
	console.log("✅ Generated globals.css at public/r/globals.css")
}

if (import.meta.url === `file://${process.argv[1]}`) {
	main().catch(console.error)
}