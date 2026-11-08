import { visit } from "unist-util-visit";

export function rehypeRawString() {
	return (tree) => {
		visit(tree, (node) => {
			if (node?.type === "element" && node?.tagName === "pre") {
				const [codeEl] = node.children;

				if (codeEl.tagName !== "code") {
					return;
				}

				node.__rawString__ = codeEl.children?.[0].value;

				if (codeEl.data?.meta) {
					const __title__ = codeEl.data.meta.match(/title="([^"]+)"/);
					if (__title__) {
						node.__title__ = __title__[1];
					}
					codeEl.data.meta = codeEl.data.meta.replace(/title="([^"]+)"/, "");
				}

				if (
					codeEl.properties.className &&
					Array.isArray(codeEl.properties.className)
				) {
					const __lang__ = codeEl.properties.className.find((className) =>
						className.startsWith("language-"),
					);

					if (__lang__) {
						node.__lang__ = __lang__.replace("language-", "");
					}
				}

				// npm install.
				if (node.__rawString__?.startsWith("npm install")) {
					const npmCommand = node.__rawString__;
					node.__npmCommand__ = npmCommand;
					node.__yarnCommand__ = npmCommand.replace("npm install", "yarn add");
					node.__pnpmCommand__ = npmCommand.replace("npm install", "pnpm add");
					node.__bunCommand__ = npmCommand.replace("npm install", "bun add");
				}

				if (node.__rawString__?.startsWith("npx")) {
					const npxCommand = node.__rawString__;
					node.__npmCommand__ = npxCommand;
					node.__yarnCommand__ = npxCommand.replace("npx", "yarn dlx");
					node.__pnpmCommand__ = npxCommand.replace("npx", "pnpm dlx");
					node.__bunCommand__ = npxCommand.replace("npx", "bunx");
				}
			}
		});
	};
}

export function rehypeCommandProperties() {
	return (tree) => {
		visit(tree, (node) => {
			if (node?.type === "element" && node?.tagName === "figure") {
				if (!("data-rehype-pretty-code-figure" in node.properties)) {
					return;
				}

				const preElement = node.children.at(-1);
				if (preElement.tagName !== "pre") {
					return;
				}

				const shikiClasses =
					"shiki shiki-themes github-light-default github-dark-default";
				if (
					preElement.properties.className &&
					Array.isArray(preElement.properties.className)
				) {
					preElement.properties.className.push(shikiClasses);
				} else {
					preElement.properties.className = [shikiClasses];
				}

				preElement.properties.__rawString__ = node.__rawString__;
				preElement.properties.__npmCommand__ = node.__npmCommand__;
				preElement.properties.__yarnCommand__ = node.__yarnCommand__;
				preElement.properties.__pnpmCommand__ = node.__pnpmCommand__;
				preElement.properties.__bunCommand__ = node.__bunCommand__;
				preElement.properties.__title__ = node.__title__;
				preElement.properties.__lang__ = node.__lang__;
				preElement.properties.__unwrapCode__ = node.__unwrapCode__;
			}
		});
	};
}
