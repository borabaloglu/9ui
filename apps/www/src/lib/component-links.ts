import { readFileSync } from "node:fs";
import path from "node:path";

const contentDir = path.join(process.cwd(), "src/content");

const leadingBlock =
	/^---[\s\S]*?---\s*<ComponentLinks\s+links=\{\[([\s\S]*?)\]\}\s*\/>/;
const linkEntry = /label:\s*"([^"]+)",\s*href:\s*"([^"]+)"/g;

export interface ComponentLink {
	label: string;
	href: string;
}

export function getLeadingComponentLinks(filePath: string): ComponentLink[] {
	let source: string;

	try {
		source = readFileSync(path.join(contentDir, filePath), "utf8");
	} catch {
		return [];
	}

	const block = source.match(leadingBlock);

	if (!block) {
		return [];
	}

	return Array.from(block[1].matchAll(linkEntry), ([, label, href]) => ({
		label,
		href,
	}));
}
