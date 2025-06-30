import fs from "fs"
import path from "path"
import { glob } from "glob"
import { u } from "unist-builder"
import { visit } from "unist-util-visit"

export function rehypeRawString() {
	return (tree) => {
		visit(tree, (node) => {
			if (node?.type === "element" && node?.tagName === "pre") {
				const [codeEl] = node.children

				if (codeEl.tagName !== "code") {
					return
				}

				node.__rawString__ = codeEl.children?.[0].value

				if (codeEl.data && codeEl.data.meta) {
					const __title__ = codeEl.data.meta.match(/title="([^"]+)"/)
					if (__title__) {
						node.__title__ = __title__[1]
					}
					codeEl.data.meta = codeEl.data.meta.replace(/title="([^"]+)"/, "")
				}

				if (
					codeEl.properties.className &&
					Array.isArray(codeEl.properties.className)
				) {
					const __lang__ = codeEl.properties.className.find((className) =>
						className.startsWith("language-")
					)

					if (__lang__) {
						node.__lang__ = __lang__.replace("language-", "")
					}
				}

				// npm install.
				if (node.__rawString__?.startsWith("npm install")) {
					const npmCommand = node.__rawString__
					node.__npmCommand__ = npmCommand
					node.__yarnCommand__ = npmCommand.replace("npm install", "yarn add")
					node.__pnpmCommand__ = npmCommand.replace("npm install", "pnpm add")
					node.__bunCommand__ = npmCommand.replace("npm install", "bun add")
				}

				if (node.__rawString__?.startsWith("npx")) {
					const npxCommand = node.__rawString__
					node.__npmCommand__ = npxCommand
					node.__yarnCommand__ = npxCommand.replace("npx", "yarn dlx")
					node.__pnpmCommand__ = npxCommand.replace("npx", "pnpm dlx")
					node.__bunCommand__ = npxCommand.replace("npx", "bunx")
				}
			}
		})
	}
}

export function rehypeComponentSource() {
	return async (tree) => {
		visit(tree, async (node) => {
			if (node.name === "ComponentSource") {
				const name = getNodeAttributeByName(node, "name")?.value

				if (!name) {
					return null
				}

				const filePath = path.join(
					process.cwd(),
					"src/components/ui",
					`${name}.tsx`
				)

				try {
					const source = fs.readFileSync(filePath, "utf8")

					node.attributes?.push({
						name: "__source__",
						value: source,
						type: "mdxJsxAttribute",
					})

					node.children?.push(
						u("element", {
							tagName: "pre",
							properties: {
								"data-rehype-pretty-code-figure": "",
							},
							children: [
								u("element", {
									tagName: "code",
									properties: {
										className: ["language-tsx"],
									},
									children: [
										{
											type: "text",
											value: source,
										},
									],
								}),
							],
						})
					)

					node.children.at(-1).__unwrapCode__ = "true"
				} catch (error) {
					console.error(error)
				}
			}
		})
	}
}

export function rehypeComponentPreview() {
	return async (tree) => {
		visit(tree, async (node) => {
			if (node.name === "ComponentPreview") {
				const name = getNodeAttributeByName(node, "name")?.value

				if (!name) {
					return null
				}

				const files = glob.sync(`**/${name}.tsx`, {
					cwd: path.join(process.cwd(), "src/components/demos"),
					absolute: true,
				})

				if (files.length === 0) {
					return null
				}

				const filePath = files[0]

				try {
					let source = fs.readFileSync(filePath, "utf8")
					source = source.replaceAll("export default", "export")

					node.attributes?.push({
						name: "__source__",
						value: source,
						type: "mdxJsxAttribute",
					})

					node.children?.push(
						u("element", {
							tagName: "pre",
							properties: {
								"data-rehype-pretty-code-figure": "",
							},
							children: [
								u("element", {
									tagName: "code",
									properties: {
										className: ["language-tsx"],
									},
									children: [
										{
											type: "text",
											value: source,
										},
									],
								}),
							],
						})
					)

					node.children.at(-1).__unwrapCode__ = "true"
				} catch (error) {
					console.error(error)
				}
			}
		})
	}
}

export function rehypeCommandProperties() {
	return (tree) => {
		visit(tree, (node) => {
			if (node?.type === "element" && node?.tagName === "figure") {
				if (!("data-rehype-pretty-code-figure" in node.properties)) {
					return
				}

				const preElement = node.children.at(-1)
				if (preElement.tagName !== "pre") {
					return
				}

				const shikiClasses =
					"shiki shiki-themes github-light-default github-dark-default"
				if (
					preElement.properties.className &&
					Array.isArray(preElement.properties.className)
				) {
					preElement.properties.className.push(shikiClasses)
				} else {
					preElement.properties.className = [shikiClasses]
				}

				preElement.properties["__rawString__"] = node.__rawString__
				preElement.properties["__npmCommand__"] = node.__npmCommand__
				preElement.properties["__yarnCommand__"] = node.__yarnCommand__
				preElement.properties["__pnpmCommand__"] = node.__pnpmCommand__
				preElement.properties["__bunCommand__"] = node.__bunCommand__
				preElement.properties["__title__"] = node.__title__
				preElement.properties["__lang__"] = node.__lang__
				preElement.properties["__unwrapCode__"] = node.__unwrapCode__
			}
		})
	}
}

function getNodeAttributeByName(node, name) {
	return node.attributes?.find((attribute) => attribute.name === name)
}
