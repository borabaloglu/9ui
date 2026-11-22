import type * as React from "react";
import { renderToMarkdown } from "fumadocs-core/server";

import { siteConfig } from "@/config/site";

import { markdownComponents } from "@/lib/markdown/components";
import type { source } from "@/lib/source";

type Page = NonNullable<ReturnType<typeof source.getPage>>;

const components = new Proxy(markdownComponents as Record<string, unknown>, {
	get(target, key) {
		if (typeof key !== "string" || key in target) {
			return target[key as string];
		}

		if (/^[A-Z]/.test(key)) {
			throw new Error(`<${key}> has no Markdown form in markdownComponents.`);
		}

		return undefined;
	},
});

export function getMarkdownUrl(url: string) {
	return `${siteConfig.url}${url}.md`;
}

function absoluteLinks(markdown: string) {
	return markdown.replace(
		/\]\((\/docs\/[^)#\s]*)(#[^)\s]*)?\)/g,
		(_match, path: string, hash = "") => `](${getMarkdownUrl(path)}${hash})`,
	);
}

function baseUiLinks(markdown: string) {
	return markdown.replace(
		/\]\((https:\/\/base-ui\.com\/react\/[^)#\s]+?)\/?(#[^)\s]*)?\)/g,
		(match, path: string, hash = "") =>
			path.endsWith(".md") ? match : `](${path}.md${hash})`,
	);
}

function dropWrappers(markdown: string) {
	const lines: string[] = [];
	let fenced = false;

	for (const line of markdown.split("\n")) {
		if (line.trimStart().startsWith("```")) {
			fenced = !fenced;
			lines.push(line);
			continue;
		}

		if (fenced) {
			lines.push(line);
		} else if (!/^\s*<\/?div[^>]*>\s*$/.test(line)) {
			lines.push(line.replace(/^\s+(?=- \[)/, ""));
		}
	}

	return lines.join("\n").replace(/\n{3,}/g, "\n\n");
}

export async function getPageMarkdown(page: Page) {
	const Markdown = (
		page.data as unknown as {
			_exports: {
				_markdown: React.FC<{ components: Record<string, unknown> }>;
			};
		}
	)._exports._markdown;
	const body = await renderToMarkdown(<Markdown components={components} />);
	const { title, description } = page.data;

	return `# ${title}\n\n${description ? `${description}\n\n` : ""}${baseUiLinks(absoluteLinks(dropWrappers(body)))}\n`;
}
