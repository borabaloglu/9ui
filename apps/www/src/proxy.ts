import { type NextRequest, NextResponse } from "next/server";
import { isMarkdownPreferred, rewritePath } from "fumadocs-core/negotiation";

const { rewrite } = rewritePath("/docs{/*path}", "/llms.mdx{/*path}");

export function proxy(request: NextRequest) {
	const { pathname } = request.nextUrl;

	if (!pathname.endsWith(".md") && isMarkdownPreferred(request)) {
		const destination = rewrite(pathname);

		if (destination) {
			return NextResponse.rewrite(new URL(destination, request.nextUrl));
		}
	}

	return NextResponse.next();
}

export const config = {
	matcher: "/docs/:path+",
};
