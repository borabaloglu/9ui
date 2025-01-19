import { exec } from "child_process"
import ora from "ora"

import logger from "@/utils/logger/logger"
import { getPackageManager } from "@/utils/project/get-package-manager"

export async function installDependencies(
	dependencies: string[],
	devDependencies: string[]
) {
	const spinner = ora("Installing dependencies...").start()

	try {
		const agent = await getPackageManager()

		// Set commands based on detected package manager
		const installCmd = agent === "npm" ? "npm install" : `${agent} add`
		const devInstallCmd = `${installCmd} -D`

		// Install dependencies
		if (dependencies.length > 0) {
			await new Promise<void>((resolve, reject) => {
				exec(
					`${installCmd} ${dependencies.join(" ")}`,
					(error: Error | null) => {
						if (error) reject(error)
						resolve()
					}
				)
			})
		}

		// Install devDependencies
		if (devDependencies.length > 0) {
			await new Promise<void>((resolve, reject) => {
				exec(
					`${devInstallCmd} ${devDependencies.join(" ")}`,
					(error: Error | null) => {
						if (error) reject(error)
						resolve()
					}
				)
			})
		}

		spinner.succeed("Dependencies installed successfully")
		return { success: true }
	} catch (error) {
		spinner.fail()
		logger.error(
			`Failed to install dependencies: ${error instanceof Error ? error.message : "Unknown error"}`
		)
		process.exit(1)
	}
}
