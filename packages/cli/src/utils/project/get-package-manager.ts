import { detect } from "@antfu/ni"

export type PackageManager = "bun" | "npm" | "pnpm" | "yarn"

export async function getPackageManager(): Promise<PackageManager> {
	const agent = await detect({ programmatic: true, cwd: process.cwd() })

	return (agent as PackageManager) ?? "npm"
}
