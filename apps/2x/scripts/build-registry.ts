import { execSync } from "child_process"
import { readFile, writeFile } from "fs/promises"
import { join } from "path"
import { glob } from "glob"

interface RegistryFile {
	path: string
	content: string
	type: string
	target: string
}

interface Registry {
	$schema: string
	name: string
	type: string
	dependencies: string[]
	registryDependencies: string[]
	files: RegistryFile[]
}

async function buildRegistry(): Promise<void> {
	console.log("🔨 Running shadcn build...")
	execSync("npx shadcn build", { stdio: "inherit" })

	console.log("🔍 Processing registry files...")

	const registryDir = join(process.cwd(), "public", "r")
	const jsonFiles = await glob("*.json", { cwd: registryDir })

	for (const file of jsonFiles) {
		const filePath = join(registryDir, file)
		const content = await readFile(filePath, "utf8")

		try {
			const registry: Registry = JSON.parse(content)

			if (registry.type === "registry:ui" && registry.files) {
				let modified = false

				registry.files.forEach((fileEntry) => {
					if (fileEntry.path?.startsWith("src/components/ui/")) {
						fileEntry.path = fileEntry.path.replace("src/components/ui/", "ui/")
						modified = true
					}
				})

				if (modified) {
					await writeFile(filePath, JSON.stringify(registry, null, 2))
					console.log(`✅ Updated paths in ${file}`)
				}
			}
		} catch (error) {
			console.error(`❌ Error processing ${file}:`, error instanceof Error ? error.message : String(error))
		}
	}

	console.log("✨ Registry build completed!")
}

buildRegistry().catch((error) => {
	console.error("Failed to build registry:", error)
	process.exit(1)
})