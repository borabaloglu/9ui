"use client";

import * as React from "react";
import type { TOCItemType } from "fumadocs-core/toc";
import { ChevronDownIcon } from "lucide-react";
import { createPortal } from "react-dom";

import {
	Collapsible,
	CollapsibleContent,
	CollapsibleTrigger,
} from "@/components/ui/collapsible";

import { getIdFromUrl, useActiveHeadings, useTocThumb } from "@/hooks/use-toc";

import { cn } from "@/lib/utils";

const MOBILE_TOC_SLOT_ID = "docs-mobile-toc";

const DEPTH_STEP = 16;
const ACTIVATION_OFFSET = 200;
const RADIUS = 6;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

const getIndent = (depth: number) =>
	10 + Math.min(Math.max(depth - 2, 0), 4) * DEPTH_STEP;

interface MobileTocProps {
	items: TOCItemType[];
}

export const MobileToc = ({ items }: MobileTocProps) => {
	const [slot, setSlot] = React.useState<HTMLElement | null>(null);
	const [open, setOpen] = React.useState(false);
	const rootRef = React.useRef<HTMLDivElement>(null);
	const navRef = React.useRef<HTMLElement>(null);
	const activeIds = useActiveHeadings(items, ACTIVATION_OFFSET);

	React.useEffect(() => {
		setSlot(document.getElementById(MOBILE_TOC_SLOT_ID));
	}, []);

	React.useEffect(() => {
		if (!open) {
			return;
		}

		const onPointerDown = (event: PointerEvent) => {
			if (
				event.target instanceof Node &&
				!rootRef.current?.contains(event.target)
			) {
				setOpen(false);
			}
		};
		const onKeyDown = (event: KeyboardEvent) => {
			if (event.key === "Escape") {
				setOpen(false);
			}
		};

		document.addEventListener("pointerdown", onPointerDown);
		document.addEventListener("keydown", onKeyDown);

		return () => {
			document.removeEventListener("pointerdown", onPointerDown);
			document.removeEventListener("keydown", onKeyDown);
		};
	}, [open]);

	const firstId = items[0] ? getIdFromUrl(items[0].url) : undefined;
	const thumbIds = React.useMemo(
		() => (activeIds.length > 0 || !firstId ? activeIds : [firstId]),
		[activeIds, firstId],
	);
	const { thumb, setLinkRef } = useTocThumb(items, thumbIds, open);
	const hasThumb = thumb !== null;
	const thumbRef = React.useRef(thumb);
	thumbRef.current = thumb;

	React.useLayoutEffect(() => {
		const nav = navRef.current;
		const target = thumbRef.current;

		if (!open || !hasThumb || !nav || !target) {
			return;
		}

		nav.scrollTop = target.top + target.height / 2 - nav.clientHeight / 2;
	}, [open, hasThumb]);

	if (!slot || items.length === 0) {
		return null;
	}

	const ids = items.map((item) => getIdFromUrl(item.url));
	const currentIds = activeIds.length > 0 ? activeIds : ids.slice(0, 1);
	const current = items[Math.max(ids.indexOf(currentIds[0]), 0)];
	const progress = (ids.indexOf(currentIds.at(-1) ?? "") + 1) / items.length;

	return createPortal(
		<Collapsible
			ref={rootRef}
			open={open}
			onOpenChange={setOpen}
			className="bg-card absolute inset-x-0 top-0 z-20 text-sm"
		>
			<CollapsibleTrigger className="text-muted-foreground focus-visible:ring-ring/50 flex h-10 w-full cursor-pointer items-center gap-2.5 ps-5.5 pe-4.5 outline-none focus-visible:ring-3 focus-visible:ring-inset">
				<svg
					aria-hidden="true"
					viewBox="0 0 16 16"
					className={cn(
						"size-4 shrink-0 -rotate-90 transition-colors",
						open && "text-foreground",
					)}
				>
					<circle
						cx="8"
						cy="8"
						r={RADIUS}
						fill="none"
						strokeWidth="2"
						className="stroke-foreground/15"
					/>
					<circle
						cx="8"
						cy="8"
						r={RADIUS}
						fill="none"
						strokeWidth="2"
						strokeLinecap="round"
						strokeDasharray={CIRCUMFERENCE}
						strokeDashoffset={CIRCUMFERENCE * (1 - progress)}
						className="stroke-current transition-[stroke-dashoffset] duration-200 ease-out motion-reduce:transition-none"
					/>
				</svg>
				<span
					className={cn(
						"min-w-0 flex-1 truncate text-start transition-colors",
						open && "text-foreground",
					)}
				>
					{current.title}
				</span>
				<ChevronDownIcon
					className={cn(
						"size-4 shrink-0 transition-transform duration-150 ease-out motion-reduce:transition-none",
						open && "rotate-180",
					)}
				/>
			</CollapsibleTrigger>
			<CollapsibleContent className="transition-[height,opacity] ease-out data-ending-style:opacity-0 data-starting-style:opacity-0 motion-reduce:transition-none">
				<nav
					ref={navRef}
					aria-label="On this page"
					className="max-h-[50dvh] [scrollbar-width:none] overflow-y-auto overscroll-contain mask-[linear-gradient(to_bottom,transparent,white_12px,white_calc(100%-12px),transparent)] px-3 py-3"
				>
					<div className="relative flex flex-col">
						{thumb && (
							<div
								aria-hidden
								className="from-foreground/10 pointer-events-none absolute inset-x-0 rounded-lg bg-linear-to-r to-transparent transition-[top,height] duration-150 ease-out motion-reduce:transition-none"
								style={{ top: thumb.top, height: thumb.height }}
							/>
						)}
						{items.map((item) => (
							<a
								key={item.url}
								ref={setLinkRef(item.url)}
								href={item.url}
								onClick={() => setOpen(false)}
								className={cn(
									"relative py-1.5 pe-2 wrap-anywhere transition-colors",
									currentIds.includes(getIdFromUrl(item.url))
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
				<div
					aria-hidden
					className="bg-background mx-2 h-4 rounded-t-2xl border border-b-0"
				/>
			</CollapsibleContent>
		</Collapsible>,
		slot,
	);
};
