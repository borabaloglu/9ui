"use client";

import type { TOCItemType } from "fumadocs-core/toc";
import { TextAlignStartIcon } from "lucide-react";

import { getIdFromUrl, useActiveHeadings, useTocThumb } from "@/hooks/use-toc";

import { cn } from "@/lib/utils";

interface TableOfContentsProps {
	items: TOCItemType[];
}

const DEPTH_STEP = 16;
const ACTIVATION_OFFSET = 96;

const getIndent = (depth: number) =>
	10 + Math.min(Math.max(depth - 2, 0), 4) * DEPTH_STEP;

export const TableOfContents = ({ items }: TableOfContentsProps) => {
	const activeIds = useActiveHeadings(items, ACTIVATION_OFFSET);
	const { thumb, setLinkRef } = useTocThumb(items, activeIds);

	return (
		<div className="flex min-h-0 flex-col">
			<h2 className="text-muted-foreground inline-flex items-center gap-1.5 text-sm">
				<TextAlignStartIcon className="size-4" />
				On this page
			</h2>
			<nav className="min-h-0 [scrollbar-width:none] overflow-y-auto overscroll-contain mask-[linear-gradient(to_bottom,transparent,white_12px,white_calc(100%-12px),transparent)] py-3">
				<div className="relative flex flex-col">
					<div
						aria-hidden
						className={cn(
							"from-foreground/10 pointer-events-none absolute inset-x-0 rounded-lg bg-linear-to-r to-transparent transition-[top,height,opacity] duration-150 ease-out motion-reduce:transition-none",
							!thumb && "opacity-0",
						)}
						style={{ top: thumb?.top ?? 0, height: thumb?.height ?? 0 }}
					/>
					{items.map((item) => (
						<a
							key={item.url}
							ref={setLinkRef(item.url)}
							href={item.url}
							className={cn(
								"hover:text-accent-foreground relative py-1 pe-2 text-[0.8125rem]/5 wrap-anywhere transition-colors",
								activeIds.includes(getIdFromUrl(item.url))
									? "text-foreground"
									: "text-muted-foreground",
							)}
							style={{ paddingInlineStart: getIndent(item.depth) }}
						>
							{item.title}
						</a>
					))}
				</div>
			</nav>
		</div>
	);
};
