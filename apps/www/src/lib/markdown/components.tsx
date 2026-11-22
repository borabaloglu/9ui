import * as React from "react";
import { asMarkdown, md } from "fumadocs-core/server";

import { siteConfig } from "@/config/site";

import { getComponentSource, getDemo } from "@/lib/demos";
import { getPrompt, type PromptName } from "@/lib/prompts";
import { getSidebarNav, source } from "@/lib/source";

interface ApiTableRow {
	name: string;
	type: string;
	shortType?: string;
	default?: string;
	description: React.ReactNode;
}

function fence(lang: string, value: string, label?: string) {
	const title = label ? `\`${label}\`\n\n` : "";

	return `\n${title}\`\`\`${lang}\n${value.trim()}\n\`\`\`\n\n`;
}

function cell(value: string) {
	return value.replaceAll("|", "\\|").replaceAll("\n", " ").trim();
}

function codeCell(value?: string) {
	return value ? `\`${cell(value)}\`` : "";
}

async function ApiTable({
	label = "Prop",
	rows,
}: {
	label?: string;
	rows: ApiTableRow[];
}) {
	asMarkdown();

	const hasDefault = rows.some((row) => row.default);
	const head = [label, "Type"];

	if (hasDefault) head.push("Default");
	head.push("Description");

	const lines = [
		`| ${head.join(" | ")} |`,
		`| ${head.map(() => "---").join(" | ")} |`,
	];

	for (const row of rows) {
		const cells = [codeCell(row.name), codeCell(row.type)];

		if (hasDefault) cells.push(codeCell(row.default));
		cells.push(cell(await md`${row.description}`));
		lines.push(`| ${cells.join(" | ")} |`);
	}

	return `\n${lines.join("\n")}\n\n`;
}

function ComponentPreview({
	name,
	direction = "ltr",
}: {
	name: string;
	direction?: "ltr" | "rtl";
}) {
	asMarkdown();

	const demo = getDemo(name);

	if (!demo) {
		throw new Error(`Demo "${name}" not found`);
	}

	const note =
		direction === "rtl"
			? "\nThis demo switches language with `useTranslation` and sets `dir` on its popups, because the docs site is left to right. In your app, set `dir` once on `html` instead.\n"
			: "";

	return `${note}${fence("tsx", demo.source, `${name}.tsx`)}`;
}

function ComponentSource({ name }: { name: string }) {
	asMarkdown();

	const source = getComponentSource(name);

	if (!source) {
		throw new Error(`Component source "${name}" not found`);
	}

	return `\nRegistry item: ${siteConfig.url}/r/${name}.json\n${fence("tsx", source, `components/ui/${name}.tsx`)}`;
}

function splitTabs(children: React.ReactNode) {
	const text: string[] = [];
	const elements: React.ReactNode[] = [];

	for (const child of React.Children.toArray(children)) {
		if (typeof child === "string") {
			text.push(child.replace(/^<\/?div>$/gm, ""));
		} else {
			elements.push(child);
		}
	}

	return { text: text.join("").trim(), elements };
}

function ComponentInstallation({ children }: { children: React.ReactNode }) {
	asMarkdown();

	const { text, elements } = splitTabs(children);
	const [cli, manual] = elements.length > 1 ? elements : [text, elements[0]];

	return md`
		### CLI

		${cli}

		### Manual

		${manual}
	`;
}

function InstallationTabs({ children }: { children: React.ReactNode }) {
	asMarkdown();

	const [quick, manual] = splitTabs(children).elements;

	return md`
		### CLI

		${quick}

		### Manual

		${manual}
	`;
}

function ComponentsIndex() {
	asMarkdown();

	const group = getSidebarNav().find((group) => group.title === "Components");
	const pages = source.getPages();
	const lines = (group?.items ?? [])
		.filter((item) => !item.disabled)
		.map((item) => {
			const page = pages.find((page) => page.url === item.href);
			const description = page?.data.description
				? `: ${page.data.description}`
				: "";

			return `- [${item.title}](${item.href})${description}`;
		});

	return `\n${lines.join("\n")}\n\n`;
}

function Prompt({ name, text }: { name?: PromptName; text?: string }) {
	asMarkdown();

	return fence("text", getPrompt({ name, text }));
}

async function stepText(children: React.ReactNode) {
	return (await md`${children}`).trim();
}

async function Step({ children }: { children: React.ReactNode }) {
	asMarkdown();

	return `**${await stepText(children)}**\n\n`;
}

function Steps({ children }: { children: React.ReactNode }) {
	asMarkdown();

	let index = 0;

	return React.Children.map(children, async (child) => {
		if (React.isValidElement(child) && child.type === Step) {
			index += 1;

			const number = index;
			const text = await stepText(
				(child.props as { children: React.ReactNode }).children,
			);

			return `**Step ${number}.** ${text}\n\n`;
		}

		return child;
	});
}

function Tips({ children }: { children: React.ReactNode }) {
	asMarkdown();

	return children;
}

function Tip({
	title,
	children,
}: {
	title: string;
	children: React.ReactNode;
}) {
	asMarkdown();

	return md`
		### ${title}

		${children}
	`;
}

function ComponentLinks({
	links,
}: {
	links: { label: string; href: string }[];
}) {
	asMarkdown();

	return `\n${links.map((link) => `- [${link.label}](${link.href})`).join("\n")}\n\n`;
}

async function LinkCard({
	href,
	children,
}: {
	href: string;
	children: React.ReactNode;
}) {
	asMarkdown();

	const label = (await md`${children}`).replace(/<[^>]+>/g, "").trim();

	return `- [${label}](${href})\n`;
}

function Hidden() {
	asMarkdown();

	return null;
}

const Icons = new Proxy({}, { get: () => Hidden });

export const markdownComponents = {
	ApiTable,
	ComponentInstallation,
	ComponentLinks,
	ComponentPreview,
	ComponentSource,
	ComponentsIndex,
	Icons,
	InstallationTabs,
	LinkCard,
	Prompt,
	Step,
	Steps,
	Tip,
	Tips,
};
