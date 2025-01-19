import { writeFileSync } from "fs"
import { join } from "path"
import { BASE_DEPENDENCIES } from "@/constants/dependencies"
import { Command } from "commander"
import ora from "ora"
import prompts from "prompts"

import { installDependencies } from "@/utils/install-dependencies"
import { highlighter } from "@/utils/logger/highlighter"
import logger from "@/utils/logger/logger"
import { preflightInit } from "@/utils/preflight/preflight-init"
import { getProjectInfo } from "@/utils/project/get-project-info"
import { setupInitFiles } from "@/utils/setup-init-files"

export const init = new Command()
	.name("init")
	.description("Initialize 9ui configuration")
	.option("-y, --yes", "Skip prompts and use default values", false)
	.action(async (options) => {
		await preflightInit()

		const projectInfo = await getProjectInfo()

		const paths = {
			componentsPath: projectInfo.hasSrc ? "src/components" : "components",
			libsPath: projectInfo.hasSrc ? "src/libs" : "libs",
			hooksPath: projectInfo.hasSrc ? "src/hooks" : "hooks",
		}

		if (!options.yes) {
			// TODO: Use zod to validate the response ?
			const response = await prompts([
				{
					type: "text",
					name: "componentsPath",
					message: "Where would you like to store your components?",
					initial: paths.componentsPath,
					validate: (value) =>
						value.trim().length > 0 || "Please enter a valid path",
				},
				{
					type: "text",
					name: "libsPath",
					message: "Where would you like to store your libraries?",
					initial: paths.libsPath,
					validate: (value) =>
						value.trim().length > 0 || "Please enter a valid path",
				},
				{
					type: "text",
					name: "hooksPath",
					message: "Where would you like to store your hooks?",
					initial: paths.hooksPath,
					validate: (value) =>
						value.trim().length > 0 || "Please enter a valid path",
				},
			])

			paths.componentsPath = response.componentsPath
			paths.libsPath = response.libsPath
			paths.hooksPath = response.hooksPath
		}

		await setupInitFiles({
			lang: projectInfo.lang,
			...paths,
		})

		await installDependencies(
			BASE_DEPENDENCIES.dependencies,
			BASE_DEPENDENCIES.devDependencies
		)

		// Create config file
		const createSpinner = ora("Creating 9ui configuration file...").start()
		const configPath = join(process.cwd(), "9ui.config.json")

		try {
			const config = {
				framework: projectInfo.framework.name,
				lang: projectInfo.lang,
				hasSrc: projectInfo.hasSrc,
				// TODO: Add path aliases
				paths: {
					components: {
						path: paths.componentsPath,
					},
					libs: {
						path: paths.libsPath,
					},
					hooks: {
						path: paths.hooksPath,
					},
				},
			}

			writeFileSync(configPath, JSON.stringify(config, null, 2))
			createSpinner.succeed(
				`Successfully created ${highlighter.info("9ui.config.json")}`
			)
		} catch (error) {
			createSpinner.fail()
			logger.error("Failed to create configuration file.")
			if (error instanceof Error) {
				logger.error(`\nDetails: ${error.message}\n`)
			}
			process.exit(1)
		}
	})
