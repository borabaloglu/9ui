import type { Root } from "mdast"
import { toString } from "mdast-util-to-string"
import { remark } from "remark"
import { visit } from "unist-util-visit"
import type { VFile } from "vfile"

interface TocEntry {
	value: string
	url: string
	depth: number
}

function extractTocPlugin() {
	return (tree: Root, file: VFile) => {
		const toc: TocEntry[] = []
		visit(tree, "heading", (node) => {
			const textContent = toString(node)

			toc.push({
				value: textContent,
				url:
					"#" +
					textContent
						.toLowerCase()
						.replace(/\s+/g, "-")
						.replace(/[^a-z0-9-]/g, ""),
				depth: node.depth,
			})
		})

		file.data.toc = toc
	}
}

type Toc = TocEntry[]

export async function getTableOfContents(content: string): Promise<Toc> {
	const processor = await remark().use(extractTocPlugin).process(content)

	return processor.data.toc as Toc
}
