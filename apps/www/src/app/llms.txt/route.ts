import type { Item, Node } from "fumadocs-core/page-tree";

import { siteConfig } from "@/config/site";

import { getMarkdownUrl } from "@/lib/markdown/render";
import { source } from "@/lib/source";

export const dynamic = "force-static";

const optional = new Set(["/docs/getting-started/changelog"]);

interface Entry {
	url: string;
	line: string;
}

function toEntry(item: Item, prefix?: string): Entry | null {
	const page = source.getNodePage(item);

	if (!page || page.data.disabled) {
		return null;
	}

	const title = prefix ? `${prefix}: ${page.data.title}` : page.data.title;
	const description = page.data.description ? `: ${page.data.description}` : "";

	return {
		url: page.url,
		line: `- [${title}](${getMarkdownUrl(page.url)})${description}`,
	};
}

function collect(nodes: Node[], prefix?: string): Entry[] {
	return nodes.flatMap((node) => {
		if (node.type === "page") {
			const entry = toEntry(node, prefix);

			return entry ? [entry] : [];
		}

		if (node.type === "folder") {
			const index = node.index ? toEntry(node.index) : null;

			return [
				...(index ? [index] : []),
				...collect(node.children, String(node.name)),
			];
		}

		return [];
	});
}

export function GET() {
	const sections: string[] = [];
	const later: string[] = [];

	for (const node of source.pageTree.children) {
		if (node.type !== "folder") {
			continue;
		}

		const entries = collect(node.children);
		const lines = entries
			.filter((entry) => !optional.has(entry.url))
			.map((entry) => entry.line);

		later.push(
			...entries
				.filter((entry) => optional.has(entry.url))
				.map((entry) => entry.line),
		);
		sections.push(`## ${String(node.name)}\n\n${lines.join("\n")}`);
	}

	if (later.length > 0) {
		sections.push(`## Optional\n\n${later.join("\n")}`);
	}

	const body = [
		`# ${siteConfig.name}`,
		"> Accessible React components built with Base UI and Tailwind CSS, added to your project as code.",
		`Every link below is a Markdown page. To add a component, run \`npx shadcn@latest add @9ui/<name>\`. The registry is at ${siteConfig.url}/r/registry.json.`,
		...sections,
	].join("\n\n");

	return new Response(`${body}\n`, {
		headers: { "Content-Type": "text/plain; charset=utf-8" },
	});
}
