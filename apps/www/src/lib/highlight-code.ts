import { highlighter } from "@/lib/rehype/syntax-highlighting";

const theme = "github-light-default github-dark-default";

export function highlightCode(code: string, lang = "tsx") {
	const html = highlighter.codeToHtml(code, {
		lang,
		themes: {
			light: "github-light-default",
			dark: "github-dark-default",
		},
		defaultColor: false,
		transformers: [
			{
				pre(node) {
					node.properties["data-language"] = lang;
					node.properties["data-theme"] = theme;
				},
				code(node) {
					node.properties["data-language"] = lang;
					node.properties["data-theme"] = theme;
					node.properties.style = "display:grid";
				},
				line(node) {
					delete node.properties.class;
					node.properties["data-line"] = "";
				},
			},
		],
	});

	return `<figure data-rehype-pretty-code-figure="">${html}</figure>`;
}
