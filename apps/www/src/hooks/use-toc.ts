"use client";

import * as React from "react";
import type { TOCItemType } from "fumadocs-core/toc";

export interface TocThumb {
	top: number;
	height: number;
}

export const getIdFromUrl = (url: string) => decodeURIComponent(url.slice(1));

function getScrollParent(element: HTMLElement | undefined) {
	for (let node = element?.parentElement; node; node = node.parentElement) {
		const { overflowY } = getComputedStyle(node);

		if (overflowY === "auto" || overflowY === "scroll") {
			return node;
		}
	}

	return document.scrollingElement ?? document.documentElement;
}

export function useActiveHeadings(
	items: TOCItemType[],
	activationOffset: number,
) {
	const [activeIds, setActiveIds] = React.useState<string[]>([]);

	React.useEffect(() => {
		const headings = items.flatMap((item) => {
			const id = getIdFromUrl(item.url);
			const element = document.getElementById(id);

			return element ? [{ id, element }] : [];
		});
		const scroller = getScrollParent(headings[0]?.element);
		let frame = 0;

		const update = () => {
			frame = 0;

			const limit = window.innerHeight * 0.75;
			const tops = headings.map(({ id, element }) => ({
				id,
				top: element.getBoundingClientRect().top,
			}));
			const visible = tops.filter(
				({ top }) => top >= activationOffset - 24 && top <= limit,
			);
			const last = tops.filter(({ top }) => top < activationOffset).at(-1);
			const active =
				visible.length > 0
					? visible.map(({ id }) => id)
					: last
						? [last.id]
						: [];
			const atEnd =
				scroller.scrollTop > 0 &&
				scroller.scrollHeight - scroller.clientHeight - scroller.scrollTop < 2;
			const start = atEnd
				? tops.findIndex(({ id }) => id === (active[0] ?? tops.at(-1)?.id))
				: -1;
			const next = start >= 0 ? tops.slice(start).map(({ id }) => id) : active;

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
	}, [items, activationOffset]);

	return activeIds;
}

export function useTocThumb(
	items: TOCItemType[],
	activeIds: string[],
	enabled = true,
) {
	const [thumb, setThumb] = React.useState<TocThumb | null>(null);
	const linkRefs = React.useRef(new Map<string, HTMLAnchorElement>());

	const setLinkRef = React.useCallback(
		(url: string) => (node: HTMLAnchorElement | null) => {
			if (node) {
				linkRefs.current.set(url, node);
			} else {
				linkRefs.current.delete(url);
			}
		},
		[],
	);

	React.useLayoutEffect(() => {
		if (!enabled) {
			setThumb(null);
			return;
		}

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
	}, [activeIds, items, enabled]);

	return { thumb, setLinkRef };
}
