import { join } from "path"
import fs from "fs-extra"
import { type PackageJson } from "type-fest"

export async function getPackageJson() {
	const root = process.cwd()
	const packagePath = join(root, "package.json")

	return (
		(fs.readJSONSync(packagePath, {
			throws: false,
		}) as PackageJson) ?? {}
	)
}
