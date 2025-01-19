import fs from "fs/promises"
import ora from "ora"

import { ProjectLang } from "@/utils/project/get-project-lang"

const UTILS_URL =
	"https://raw.githubusercontent.com/borabaloglu/9ui/refs/heads/main/9ui/src/utils/index.tsx"

interface SetupInitFilesOptions {
	lang: ProjectLang
	componentsPath: string
	libsPath: string
	hooksPath: string
}

export async function setupInitFiles({
	lang,
	componentsPath,
	libsPath,
	hooksPath,
}: SetupInitFilesOptions) {
	const spinner = ora("Setting up project directories...").start()

	const root = process.cwd()

	try {
		await Promise.all([
			fs.mkdir(`${root}/${componentsPath}/ui`, { recursive: true }),
			fs.mkdir(`${root}/${libsPath}`, { recursive: true }),
			fs.mkdir(`${root}/${hooksPath}`, { recursive: true }),
		])

		const utils = await fetch(UTILS_URL)
		const utilsContent = await utils.text()

		if (lang === "ts") {
			await fs.writeFile(`${root}/${libsPath}/utils.tsx`, utilsContent)
		} else {
			// TODO: Implement transforming tsx to jsx
		}

		spinner.succeed("Project directories created successfully")
	} catch (error) {
		spinner.fail("Failed to create project directories")
		throw error
	}
}
