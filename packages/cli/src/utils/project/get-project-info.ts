import path from "path"
import { Framework } from "@/constants/frameworks"
import fs from "fs-extra"

import {
	getPackageManager,
	PackageManager,
} from "@/utils/project/get-package-manager"
import { getProjectFramework } from "@/utils/project/get-project-framework"
import { getProjectLang, ProjectLang } from "@/utils/project/get-project-lang"

export type ProjectInfo = {
	framework: Framework
	lang: ProjectLang
	packageManager: PackageManager
	hasSrc: boolean
}

export async function getProjectInfo(): Promise<ProjectInfo> {
	const root = process.cwd()

	const [framework, packageManager, lang, hasSrc] = await Promise.all([
		getProjectFramework(),
		getPackageManager(),
		getProjectLang(),
		fs.pathExists(path.resolve(root, "src")),
	])

	return {
		framework,
		lang,
		packageManager,
		hasSrc,
	}
}
