import { chmod, readdir, readFile, writeFile } from "node:fs/promises";
import { homedir } from "node:os";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const [keptDir, caseName] = process.argv.slice(2);

if (!keptDir || !caseName) {
	console.error(
		"Usage: node scripts/record-eval-history.mjs <kept temp dir> <case path under evals/>",
	);
	process.exit(1);
}

await chmod(keptDir, 0o700);
await chmod(join(keptDir, "sealed"), 0o700).catch(() => {});

const projects = join(keptDir, "config", "projects");
const transcripts = [];
for (const project of await readdir(projects)) {
	for (const file of await readdir(join(projects, project))) {
		if (file.endsWith(".jsonl")) {
			transcripts.push(join(projects, project, file));
		}
	}
}

if (transcripts.length !== 1) {
	console.error(
		`Expected one transcript in ${projects}, found ${transcripts.length}.`,
	);
	process.exit(1);
}

const text = await readFile(transcripts[0], "utf8");
const cleaned = text
	.replaceAll(root, "/repo")
	.replaceAll(homedir(), "/home/user")
	.replace(/[\w.%+-]+@[\w-]+(\.[\w-]+)+/g, "user@example.com")
	.replace(
		/"organizationUuid":"[^"]*"/g,
		'"organizationUuid":"00000000-0000-0000-0000-000000000000"',
	);

const target = join(root, "evals", caseName, "history.jsonl");
await writeFile(target, cleaned);
console.log(`Wrote ${target} (${Math.round(cleaned.length / 1024)} KB)`);
