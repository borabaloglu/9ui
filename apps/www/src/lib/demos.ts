import { readFileSync } from "node:fs";
import path from "node:path";
import { globSync } from "glob";

const demosDir = path.join(process.cwd(), "src/components/demos");
const componentsDir = path.join(process.cwd(), "src/components/ui");

export function getDemo(name: string) {
	const [file] = globSync(`**/${name}.tsx`, { cwd: demosDir });

	if (!file) {
		return null;
	}

	const source = readFileSync(path.join(demosDir, file), "utf8");

	return {
		path: file.replace(/\.tsx$/, ""),
		source: source.replaceAll("export default", "export"),
	};
}

export function getComponentSource(name: string) {
	try {
		return readFileSync(path.join(componentsDir, `${name}.tsx`), "utf8");
	} catch {
		return null;
	}
}
