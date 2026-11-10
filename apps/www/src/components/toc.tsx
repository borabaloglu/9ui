"use client";

import * as React from "react";
import type { TOCItemType } from "fumadocs-core/toc";
import { TextAlignStartIcon } from "lucide-react";

import { cn } from "@/lib/utils";

interface TableOfContentsProps {
	items: TOCItemType[];
}

interface Thumb {
	top: number;
	height: number;
}

const DEPTH_STEP = 16;
const ACTIVATION_OFFSET = 96;

const getIdFromUrl = (url: string) => decodeURIComponent(url.slice(1));

const getIndent = (depth: number) =>
	10 + Math.min(Math.max(depth - 2, 0), 4) * DEPTH_STEP;

export const TableOfContents = ({ items }: TableOfContentsProps) => {
	const [activeIds, setActiveIds] = React.useState<string[]>([]);
	const [thumb, setThumb] = React.useState<Thumb | null>(null);
	const linkRefs = React.useRef(new Map<string, HTMLAnchorElement>());

	React.useEffect(() => {
		const headings = items.flatMap((item) => {
			const id = getIdFromUrl(item.url);
			const element = document.getElementById(id);

			return element ? [{ id, element }] : [];
		});
		let frame = 0;

		const update = () => {
			frame = 0;

			const limit = window.innerHeight * 0.75;
			const tops = headings.map(({ id, element }) => ({
				id,
				top: element.getBoundingClientRect().top,
			}));
			const visible = tops.filter(
				({ top }) => top >= ACTIVATION_OFFSET - 24 && top <= limit,
			);
			const last = tops.filter(({ top }) => top < ACTIVATION_OFFSET).at(-1);
			const next =
				visible.length > 0
					? visible.map(({ id }) => id)
					: last
						? [last.id]
						: [];

			setActiveIds((current) =>
				current.length === next.length &&
				current.every((id, index) => id === next[index])
					? current
					: next,
			);
		};

		const schedule = () => {
			if (frame === 0) {
				frame = requestAnimationFrame(update);
			}
		};

		update();
		document.addEventListener("scroll", schedule, {
			capture: true,
			passive: true,
		});
		window.addEventListener("resize", schedule);

		return () => {
			cancelAnimationFrame(frame);
			document.removeEventListener("scroll", schedule, { capture: true });
			window.removeEventListener("resize", schedule);
		};
	}, [items]);

	React.useEffect(() => {
		const links = activeIds.flatMap((id) => {
			const item = items.find((item) => getIdFromUrl(item.url) === id);
			const link = item ? linkRefs.current.get(item.url) : undefined;

			return link ? [link] : [];
		});
		const first = links[0];
		const last = links.at(-1);

		if (!first || !last) {
			setThumb(null);
			return;
		}

		const top = first.offsetTop;
		const bottom = last.offsetTop + last.clientHeight;

		setThumb({ top, height: bottom - top });
	}, [activeIds, items]);

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
							ref={(node) => {
								if (node) {
									linkRefs.current.set(item.url, node);
								} else {
									linkRefs.current.delete(item.url);
								}
							}}
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
