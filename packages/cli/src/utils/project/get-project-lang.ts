import IGNORES from "@/constants/ignores"
import fg from "fast-glob"

export type ProjectLang = "ts" | "js"

export async function getProjectLang(): Promise<ProjectLang> {
	const root = process.cwd()

	const tsConfigFiles = await fg.glob("tsconfig.*", {
		cwd: root,
		deep: 1,
		ignore: IGNORES,
	})

	return tsConfigFiles.length > 0 ? "ts" : "js"
}
