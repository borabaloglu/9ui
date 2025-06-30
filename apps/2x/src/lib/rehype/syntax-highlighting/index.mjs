import rehypePrettyCode from "rehype-pretty-code"
import { createHighlighter } from "shiki"
import { visitParents } from "unist-util-visit-parents"

export function rehypeInlineCode() {
	return (tree) => {
		visitParents(tree, (node, ancestors) => {
			const hasParentPre = ancestors.find(({ tagName }) => tagName === "pre")

			if (node.tagName !== "code" || hasParentPre) {
				return
			}

			node.properties ??= {}
			node.properties["data-inline"] = ""

			if (ancestors.find(({ tagName }) => tagName === "span")) {
				const span = ancestors.slice(-1)[0]
				const spanParent = ancestors.slice(-2)[0]
				const spanIndex = spanParent.children.indexOf(span)
				spanParent.children[spanIndex] = node
				node.children = node.children[0].children

				delete node.properties.style
				for (const child of node.children) {
					delete child.properties.style
				}
			}

			if (ancestors.find(({ tagName }) => tagName === "a")) {
				for (const child of node.children) {
					delete child.properties.style
				}
			}
		})
	}
}

// Next.js hot reload doesn't dispose previously created instances of the
// Shiki highlighter, which leads to server crashes during moderately long
// work sessions. We instantiate the highlighter as a property of `globalThis`
// so that the object persists between hot reloads and doesn't leak memory.
globalThis.highlighter ??= await createHighlighter({
	themes: ["github-dark-default", "github-light-default"],
	langs: ["tsx", "bash", "css", "js", "json", "jsx", "ts"],
})

/** @type {Awaited<ReturnType<typeof import('shiki').createHighlighter>> } */
export const highlighter = globalThis.highlighter

/** @type {import('unified').PluggableList} */
export const rehypeSyntaxHighlighting = [
	[
		rehypePrettyCode,
		{
			getHighlighter: () => globalThis.highlighter,
			theme: {
				light: "github-light-default",
				dark: "github-dark-default",
			},
			defaultLang: "tsx",
		},
	],
	rehypeInlineCode,
]
