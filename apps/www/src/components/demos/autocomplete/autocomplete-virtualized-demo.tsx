"use client";

import * as React from "react";
import { useVirtualizer } from "@tanstack/react-virtual";

import {
	Autocomplete,
	AutocompleteEmpty,
	AutocompleteInput,
	AutocompleteItem,
	AutocompleteList,
	AutocompletePopup,
	useFilteredItems,
} from "@/components/ui/autocomplete";
import { Field, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";

type Virtualizer = ReturnType<typeof useVirtualizer<HTMLDivElement, Element>>;

const items = Array.from({ length: 10000 }, (_, index) => {
	return `Item ${String(index + 1).padStart(5, "0")}`;
});

export default function AutocompleteVirtualizedDemo() {
	const virtualizerRef = React.useRef<Virtualizer | null>(null);

	return (
		<Field className="max-w-sm">
			<FieldLabel>Search 10,000 items</FieldLabel>
			<Autocomplete
				virtualized
				items={items}
				openOnInputClick
				onItemHighlighted={(item, { reason, index }) => {
					const virtualizer = virtualizerRef.current;

					if (!item || !virtualizer) {
						return;
					}

					const isStart = index === 0;
					const isEnd = index === virtualizer.options.count - 1;
					const shouldScroll =
						reason === "none" || (reason === "keyboard" && (isStart || isEnd));

					if (shouldScroll) {
						queueMicrotask(() => {
							virtualizer.scrollToIndex(index, {
								align: isEnd ? "start" : "end",
							});
						});
					}
				}}
			>
				<AutocompleteInput placeholder="e.g. Item 00042" render={<Input />} />
				<AutocompletePopup>
					<AutocompleteEmpty>No items found.</AutocompleteEmpty>
					<AutocompleteList className="not-empty:p-0">
						<VirtualizedList virtualizerRef={virtualizerRef} />
					</AutocompleteList>
				</AutocompletePopup>
			</Autocomplete>
		</Field>
	);
}

function VirtualizedList({
	virtualizerRef,
}: {
	virtualizerRef: React.RefObject<Virtualizer | null>;
}) {
	const filteredItems = useFilteredItems<string>();
	const scrollElementRef = React.useRef<HTMLDivElement | null>(null);

	const virtualizer = useVirtualizer({
		count: filteredItems.length,
		getScrollElement: () => scrollElementRef.current,
		estimateSize: () => 28,
		overscan: 20,
		paddingStart: 4,
		paddingEnd: 4,
		scrollPaddingStart: 4,
		scrollPaddingEnd: 4,
	});

	React.useImperativeHandle(virtualizerRef, () => virtualizer);

	const handleScrollElementRef = React.useCallback(
		(element: HTMLDivElement | null) => {
			scrollElementRef.current = element;
			if (element) {
				virtualizer.measure();
			}
		},
		[virtualizer],
	);

	const totalSize = virtualizer.getTotalSize();

	if (!filteredItems.length) {
		return null;
	}

	return (
		<div
			role="presentation"
			ref={handleScrollElementRef}
			className="h-[min(var(--total-size),18rem)] scroll-py-1 overflow-y-auto overscroll-contain px-1"
			style={{ "--total-size": `${totalSize}px` } as React.CSSProperties}
		>
			<div
				role="presentation"
				className="relative w-full"
				style={{ height: totalSize }}
			>
				{virtualizer.getVirtualItems().map((virtualItem) => {
					const item = filteredItems[virtualItem.index];
					if (!item) {
						return null;
					}

					return (
						<AutocompleteItem
							key={virtualItem.key}
							index={virtualItem.index}
							data-index={virtualItem.index}
							ref={virtualizer.measureElement}
							value={item}
							aria-setsize={filteredItems.length}
							aria-posinset={virtualItem.index + 1}
							className="absolute top-0 left-0"
							style={{ transform: `translateY(${virtualItem.start}px)` }}
						>
							{item}
						</AutocompleteItem>
					);
				})}
			</div>
		</div>
	);
}
