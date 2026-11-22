import { execSync } from "node:child_process";
import { readFile, writeFile } from "node:fs/promises";
import { join } from "node:path";
import { glob } from "glob";

import { siteConfig } from "../src/config/site";

interface RegistryFile {
	path: string;
	content: string;
	type: string;
	target: string;
}

interface Registry {
	$schema: string;
	name: string;
	type: string;
	dependencies: string[];
	registryDependencies: string[];
	files: RegistryFile[];
}

interface RegistrySourceItem {
	name: string;
	type: string;
	title?: string;
	description?: string;
	docs?: string;
	[key: string]: unknown;
}

const docsPages: Record<string, string> = {
	form: "forms/base-ui",
};

const titles: Record<string, string> = {
	form: "Form",
};

function readFrontmatter(source: string, key: string) {
	const frontmatter = source.match(/^---\n([\s\S]*?)\n---/)?.[1] ?? "";
	const value = frontmatter.match(new RegExp(`^${key}:\\s*(.+)$`, "m"))?.[1];

	return value?.trim().replace(/^(["'])(.*)\1$/, "$2");
}

async function syncDescriptions(): Promise<void> {
	const registryPath = join(process.cwd(), "registry.json");
	const registry: { items: RegistrySourceItem[] } = JSON.parse(
		await readFile(registryPath, "utf8"),
	);
	let modified = false;

	for (const item of registry.items) {
		const page = docsPages[item.name] ?? `components/${item.name}`;
		const source = await readFile(
			join(process.cwd(), "src", "content", `${page}.mdx`),
			"utf8",
		).catch(() => null);

		if (!source) {
			continue;
		}

		const title = titles[item.name] ?? readFrontmatter(source, "title");
		const description = readFrontmatter(source, "description");
		const docs = `Docs: ${siteConfig.url}/docs/${page}`;

		if (
			!title ||
			!description ||
			(item.title === title &&
				item.description === description &&
				item.docs === docs)
		) {
			continue;
		}

		const {
			name,
			type,
			title: _title,
			description: _description,
			docs: _docs,
			...rest
		} = item;

		registry.items[registry.items.indexOf(item)] = {
			name,
			type,
			title,
			description,
			docs,
			...rest,
		};
		modified = true;
	}

	if (modified) {
		await writeFile(registryPath, `${JSON.stringify(registry, null, "\t")}\n`);
		console.log("✅ Synced titles, descriptions and docs links from the docs");
	}
}

async function buildRegistry(): Promise<void> {
	await syncDescriptions();

	console.log("🔨 Running shadcn build...");
	execSync("npx shadcn build", { stdio: "inherit" });

	console.log("🔍 Processing registry files...");

	const registryDir = join(process.cwd(), "public", "r");
	const jsonFiles = await glob("*.json", { cwd: registryDir });

	for (const file of jsonFiles) {
		const filePath = join(registryDir, file);
		const content = await readFile(filePath, "utf8");

		try {
			const registry: Registry = JSON.parse(content);

			if (registry.type === "registry:ui" && registry.files) {
				let modified = false;

				registry.files.forEach((fileEntry) => {
					if (fileEntry.path?.startsWith("src/components/ui/")) {
						fileEntry.path = fileEntry.path.replace(
							"src/components/ui/",
							"ui/",
						);
						modified = true;
					}
				});

				if (modified) {
					await writeFile(filePath, JSON.stringify(registry, null, 2));
					console.log(`✅ Updated paths in ${file}`);
				}
			}
		} catch (error) {
			console.error(
				`❌ Error processing ${file}:`,
				error instanceof Error ? error.message : String(error),
			);
		}
	}

	console.log("✨ Registry build completed!");
}

buildRegistry().catch((error) => {
	console.error("Failed to build registry:", error);
	process.exit(1);
});
