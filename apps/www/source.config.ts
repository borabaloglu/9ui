import { pageSchema } from "fumadocs-core/source/schema";
import { defineConfig, defineDocs } from "fumadocs-mdx/config";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import { z } from "zod";

import {
	rehypeCommandProperties,
	rehypeRawString,
} from "./src/lib/rehype/component/index.mjs";
import { rehypeSyntaxHighlighting } from "./src/lib/rehype/syntax-highlighting/index.mjs";

export const docs = defineDocs({
	dir: "src/content",
	docs: {
		schema: pageSchema.extend({
			description: z.string().max(160).optional(),
			label: z.string().optional(),
			disabled: z.boolean().optional(),
		}),
	},
});

export default defineConfig({
	mdxOptions: {
		rehypeCodeOptions: false,
		remarkImageOptions: false,
		remarkCodeTabOptions: false,
		remarkNpmOptions: false,
		remarkStructureOptions: false,
		rehypePlugins: (plugins) => [
			...plugins,
			rehypeAutolinkHeadings,
			rehypeRawString,
			...rehypeSyntaxHighlighting,
			rehypeCommandProperties,
		],
	},
});
