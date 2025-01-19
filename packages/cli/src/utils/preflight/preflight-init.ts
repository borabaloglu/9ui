import { join } from "path"
import fg from "fast-glob"
import fs from "fs-extra"
import ora from "ora"

import { highlighter } from "@/utils/logger/highlighter"
import logger from "@/utils/logger/logger"
import { getProjectInfo } from "@/utils/project/get-project-info"

export async function preflightInit(): Promise<void> {
	const root = process.cwd()
	const configPath = join(root, "9ui.config.json")
	const packagePath = join(root, "package.json")
	const projectInfo = await getProjectInfo()

	const preflightSpinner = ora("Preflight checks...").start()

	if (!fs.existsSync(packagePath)) {
		preflightSpinner.fail()
		logger.error(
			"No",
			highlighter.info("package.json"),
			"file found at",
			highlighter.info(root)
		)
		logger.error(
			"Please make sure you're running this command in a Node.js project directory."
		)
		process.exit(1)
	}

	if (projectInfo.framework.name === "unknown") {
		preflightSpinner.fail()
		logger.error(
			"Could not detect a supported framework at",
			highlighter.info(root)
		)
		logger.error(
			"Visit",
			highlighter.info(projectInfo.framework.links.installation),
			"to install 9ui manually."
		)
		process.exit(1)
	}

	if (fs.existsSync(configPath)) {
		preflightSpinner.fail()
		logger.error(
			"A",
			highlighter.info("9ui.config.json"),
			"file already exists at",
			highlighter.info(root)
		)
		logger.error(
			"To start over, delete the existing",
			highlighter.info("9ui.config.json"),
			"file and run",
			highlighter.info("9ui-cli init"),
			"again."
		)
		process.exit(1)
	}

	const tailwindConfigs = await fg.glob("tailwind.config.*", {
		cwd: process.cwd(),
	})
	if (tailwindConfigs.length === 0) {
		preflightSpinner.fail()
		logger.error(
			"No Tailwind CSS configuration file found at",
			highlighter.info(root)
		)
		logger.break()
		logger.error(
			"Please visit",
			highlighter.info(projectInfo.framework.links.tailwind),
			"to install and setup Tailwind CSS first."
		)
		logger.error(
			"Follow the framework-specific guide or the instructions for your environment to properly set up Tailwind CSS."
		)
		process.exit(1)
	}

	preflightSpinner.succeed("Preflight checks")
}
