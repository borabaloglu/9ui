import { init } from "@/commands/init"
import { Command } from "commander"

import packageJson from "../package.json"

async function main() {
	const program = new Command()
	program
		.name("9ui-cli")
		.description("add 9ui components and dependencies to your project")
		.version(packageJson.version, "-v, --version", "display version")
		.addCommand(init)

	program.parse()
}

main()
