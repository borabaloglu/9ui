import { Framework, FRAMEWORKS } from "@/constants/frameworks"
import IGNORES from "@/constants/ignores"
import fg from "fast-glob"

import { getPackageJson } from "@/utils/project/get-package-json"

export async function getProjectFramework(): Promise<Framework> {
	const root = process.cwd()

	const [configFiles, packageJson] = await Promise.all([
		fg.glob("**/{next,astro,vite}.config.*|gatsby-config.*", {
			cwd: root,
			deep: 3,
			ignore: IGNORES,
		}),
		getPackageJson(),
	])

	if (configFiles.find((file) => file.startsWith("next.config"))) {
		return FRAMEWORKS.next
	}

	if (configFiles.find((file) => file.startsWith("vite.config"))) {
		return FRAMEWORKS.vite
	}

	if (configFiles.find((file) => file.startsWith("astro.config"))) {
		return FRAMEWORKS.astro
	}

	if (configFiles.find((file) => file.startsWith("gatsby-config"))) {
		return FRAMEWORKS.gatsby
	}

	if (
		Object.keys(packageJson.dependencies ?? {}).find((key) =>
			key.startsWith("@remix-run/")
		)
	) {
		return FRAMEWORKS.remix
	}

	return FRAMEWORKS.unknown
}
