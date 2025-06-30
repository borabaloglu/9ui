import { readFile, writeFile } from "fs/promises"
import { basename, dirname, join, relative } from "path"
import { glob } from "glob"

interface DemoFile {
	source: string
	path: string
	category: string
	name: string
}

const DEMOS_DIR = join(process.cwd(), "src/components/demos")
const OUTPUT_PATH = join(process.cwd(), "src/__registry__/demos.tsx")

async function findDemoFiles(): Promise<DemoFile[]> {
	const files = await glob("**/*.tsx", {
		cwd: DEMOS_DIR,
		absolute: true,
	})

	// Sort files alphabetically before processing
	const sortedFiles = files.sort()

	const demoFiles: DemoFile[] = []

	// Process files sequentially
	for (const file of sortedFiles) {
		const source = await readFile(file, "utf-8")
		const relativePath = relative(process.cwd(), file)
		const name = basename(file, ".tsx")
		// Get category from parent directory name
		const category = basename(dirname(relativePath))

		demoFiles.push({
			source,
			path: relativePath.replace(/\\/g, "/"),
			category,
			name,
		})
	}

	return demoFiles
}

function generateRegistryCode(demos: DemoFile[]): string {
	const imports = [
		'import { type DemoRegistry } from "@/types/demo"',
		'import React from "react"',
	].join("\n")

	const registry = demos
		.map(
			({ name, source, path, category }) => `
  "${name}": {
    source: ${JSON.stringify(source)},
    component: React.lazy(() => import("@/${path.replace(/^src\//, "").replace(".tsx", "")}")),
    title: "${name}",
    category: "${category}",
    path: "${path}"
  }`
		)
		.join(",")

	return `${imports}

export const demoRegistry: DemoRegistry = {${registry}
}
`
}

async function generateDemoRegistry() {
	console.log("🔍 Finding demo files...")
	const demos = await findDemoFiles()

	console.log("📝 Generating registry code...")
	const registryCode = generateRegistryCode(demos)

	console.log("💾 Writing registry file...")
	await writeFile(OUTPUT_PATH, registryCode)

	console.log("✨ Demo registry generated successfully!")
	console.log(`📊 Total demos: ${demos.length}`)
}

generateDemoRegistry().catch((error) => {
	console.error("Failed to generate demo registry:", error)
	process.exit(1)
})
