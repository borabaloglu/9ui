import { notFound } from "next/navigation";

import { getPageMarkdown } from "@/lib/markdown/render";
import { source } from "@/lib/source";

export const dynamic = "force-static";

export function generateStaticParams() {
	return source
		.getPages()
		.filter((page) => !page.data.disabled)
		.map((page) => ({ slug: page.slugs }));
}

export async function GET(
	_request: Request,
	{ params }: { params: Promise<{ slug: string[] }> },
) {
	const { slug } = await params;
	const page = source.getPage(slug);

	if (!page || page.data.disabled) {
		notFound();
	}

	return new Response(await getPageMarkdown(page), {
		headers: { "Content-Type": "text/markdown; charset=utf-8" },
	});
}
