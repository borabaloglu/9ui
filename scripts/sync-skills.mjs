import { mkdir, readdir, readFile, rm, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const skillsDir = join(root, "skills");
const sharedDir = join(skillsDir, "_shared");

const all = [
	"rulebook-format.md",
	"standards.md",
	"checks.md",
	"companions.md",
];
const rulebookOnly = ["rulebook-format.md", "standards.md"];

const references = {
	"new-component": all,
	"update-component": all,
	"review-component": all,
	"rulebook-create": rulebookOnly,
	"rulebook-update": rulebookOnly,
	"rulebook-import": rulebookOnly,
};

const check = process.argv.includes("--check");
const stale = [];

async function read(path) {
	try {
		return await readFile(path, "utf8");
	} catch {
		return null;
	}
}

for (const [skill, files] of Object.entries(references)) {
	const target = join(skillsDir, skill, "references");
	const existing = await readdir(target).catch(() => []);

	for (const file of existing) {
		if (files.includes(file)) continue;
		if (check) {
			stale.push(`${skill}/references/${file} (not in the manifest)`);
		} else {
			await rm(join(target, file));
		}
	}

	for (const file of files) {
		const source = await readFile(join(sharedDir, file), "utf8");
		const current = await read(join(target, file));
		if (current === source) continue;
		if (check) {
			stale.push(`${skill}/references/${file}`);
		} else {
			await mkdir(target, { recursive: true });
			await writeFile(join(target, file), source);
		}
	}
}

if (check && stale.length > 0) {
	console.error("Skill references are out of date:");
	for (const entry of stale) console.error(`  ${entry}`);
	console.error("Run `pnpm skills:sync`.");
	process.exit(1);
}

console.log(
	check ? "Skill references are up to date." : "Skill references synced.",
);
