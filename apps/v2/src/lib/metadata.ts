import type { Root } from "mdast"
import { remark } from "remark"
import { visit } from "unist-util-visit"
import type { VFile } from "vfile"

function extractMetadataPlugin() {
	return (tree: Root, file: VFile) => {
		const metadata: Metadata = {
			title: "",
			description: "",
		}

		visit(tree, "html", (node) => {
			const hasTitle = node.value.match(/<Title content="([^"]+)" \/>/g)
			const hasDescription = node.value.match(
				/<Description content="([^"]+)" \/>/g
			)

			if (hasTitle) {
				metadata.title = hasTitle[0].replace(
					/<Title content="([^"]+)" \/>/g,
					"$1"
				)
			}

			if (hasDescription) {
				metadata.description = hasDescription[0].replace(
					/<Description content="([^"]+)" \/>/g,
					"$1"
				)
			}

			file.data.metadata = metadata
		})
	}
}

type Metadata = {
	title: string
	description: string
}

export async function getMetadata(content: string): Promise<Metadata> {
	const processor = await remark().use(extractMetadataPlugin).process(content)

	return processor.data.metadata as Metadata
}
