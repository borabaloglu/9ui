import * as React from "react";
import { useVirtualizer } from "@tanstack/react-virtual";



import { Autocomplete, AutocompleteContent, AutocompleteEmpty, AutocompleteInput, AutocompleteItem, AutocompleteList, useFilter } from "@/components/ui/autocomplete";
import { Label } from "@/components/ui/label";





export default function AutocompleteVirtualized() {
	const [open, setOpen] = React.useState(false)
	const [searchValue, setSearchValue] = React.useState("")

	const scrollElementRef = React.useRef<HTMLDivElement>(null)

	const { contains } = useFilter({ sensitivity: "base" })

	const filteredItems = React.useMemo(() => {
		return virtualItems.filter((item) => contains(item, searchValue))
	}, [contains, searchValue])

	const virtualizer = useVirtualizer({
		enabled: open,
		count: filteredItems.length,
		getScrollElement: () => scrollElementRef.current,
		estimateSize: () => 32,
		overscan: 20,
		paddingStart: 4,
		paddingEnd: 4,
	})

	const handleScrollElementRef = React.useCallback(
		(element: HTMLDivElement) => {
			scrollElementRef.current = element
			if (element) {
				virtualizer.measure()
			}
		},
		[virtualizer]
	)

	const totalSize = virtualizer.getTotalSize()
	const totalSizePx = `${totalSize}px`

	return (
		<Autocomplete
			virtualized
			items={virtualItems}
			open={open}
			onOpenChange={setOpen}
			value={searchValue}
			onValueChange={setSearchValue}
			openOnInputClick
			onItemHighlighted={(item, { reason, index }) => {
				if (!item) {
					return
				}

				const isStart = index === 0
				const isEnd = index === filteredItems.length - 1
				const shouldScroll =
					reason === "none" || (reason === "keyboard" && (isStart || isEnd))
				if (shouldScroll) {
					queueMicrotask(() => {
						virtualizer.scrollToIndex(index, { align: isEnd ? "start" : "end" })
					})
				}
			}}
		>
			<div className="flex flex-col gap-2">
				<Label htmlFor="search-items-virtualized">
					Search 10,000 items (virtualized)
				</Label>
				<AutocompleteInput className="w-80" id="search-items-virtualized" />
			</div>

			<AutocompleteContent className="w-80 py-0 pr-0">
				<AutocompleteEmpty>No items found.</AutocompleteEmpty>
				<AutocompleteList>
					{filteredItems.length > 0 && (
						<div
							role="presentation"
							ref={handleScrollElementRef}
							className="h-[min(var(--total-size),18rem)] max-h-[calc(var(--available-height)-2rem)] overflow-y-scroll overscroll-contain"
							style={{ "--total-size": totalSizePx } as React.CSSProperties}
						>
							<div
								role="presentation"
								className="relative w-full"
								style={{ height: totalSizePx }}
							>
								{virtualizer.getVirtualItems().map((virtualItem) => {
									const item = filteredItems[virtualItem.index]
									if (!item) {
										return null
									}

									return (
										<AutocompleteItem
											key={virtualItem.key}
											index={virtualItem.index}
											value={item}
											aria-setsize={filteredItems.length}
											aria-posinset={virtualItem.index + 1}
											style={{
												position: "absolute",
												top: 0,
												left: 0,
												width: "100%",
												height: `${virtualItem.size}px`,
												transform: `translateY(${virtualItem.start}px)`,
											}}
										>
											{item}
										</AutocompleteItem>
									)
								})}
							</div>
						</div>
					)}
				</AutocompleteList>
			</AutocompleteContent>
		</Autocomplete>
	)
}

const virtualItems = Array.from({ length: 10000 }, (_, i) => {
	const indexLabel = String(i + 1).padStart(5, "0")
	return `Item ${indexLabel}`
})