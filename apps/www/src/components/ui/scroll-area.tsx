import { ScrollArea as BaseScrollArea } from "@base-ui/react/scroll-area";

import { cn } from "@/lib/utils";

function ScrollArea({
	className,
	children,
	scrollFade = false,
	scrollbarGutter = false,
	...props
}: Omit<BaseScrollArea.Root.Props, "className"> & {
	className?: string;
	scrollFade?: boolean;
	scrollbarGutter?: boolean;
}) {
	return (
		<BaseScrollArea.Root
			data-slot="scroll-area"
			className={cn("relative flex flex-col", className)}
			{...props}
		>
			<BaseScrollArea.Viewport
				data-slot="scroll-area-viewport"
				className={cn(
					"focus-visible:ring-ring/50 min-h-0 flex-1 rounded-[inherit] outline-none focus-visible:ring-[3px] data-has-overflow-x:overscroll-x-contain data-has-overflow-y:overscroll-y-contain",
					scrollFade &&
						"mask-t-from-[calc(100%-min(var(--fade-size),var(--scroll-area-overflow-y-start)))] mask-r-from-[calc(100%-min(var(--fade-size),var(--scroll-area-overflow-x-end)))] mask-b-from-[calc(100%-min(var(--fade-size),var(--scroll-area-overflow-y-end)))] mask-l-from-[calc(100%-min(var(--fade-size),var(--scroll-area-overflow-x-start)))] [--fade-size:--spacing(6)] rtl:mask-r-from-[calc(100%-min(var(--fade-size),var(--scroll-area-overflow-x-start)))] rtl:mask-l-from-[calc(100%-min(var(--fade-size),var(--scroll-area-overflow-x-end)))]",
					scrollbarGutter &&
						"data-has-overflow-x:pb-3 data-has-overflow-y:pe-3",
				)}
			>
				{children}
			</BaseScrollArea.Viewport>
			<ScrollBar orientation="vertical" />
			<ScrollBar orientation="horizontal" />
			<BaseScrollArea.Corner data-slot="scroll-area-corner" />
		</BaseScrollArea.Root>
	);
}

function ScrollBar({
	className,
	orientation = "vertical",
	...props
}: Omit<BaseScrollArea.Scrollbar.Props, "className"> & {
	className?: string;
}) {
	return (
		<BaseScrollArea.Scrollbar
			data-slot="scroll-area-scrollbar"
			orientation={orientation}
			className={cn(
				"pointer-events-none m-0.5 flex touch-none p-0.5 opacity-0 transition-opacity delay-300 select-none data-hovering:pointer-events-auto data-hovering:opacity-100 data-hovering:delay-0 data-hovering:duration-100 data-scrolling:pointer-events-auto data-scrolling:opacity-100 data-scrolling:delay-0 data-scrolling:duration-100",
				orientation === "vertical" ? "w-2.5" : "h-2.5 flex-col",
				className,
			)}
			{...props}
		>
			<BaseScrollArea.Thumb
				data-slot="scroll-area-thumb"
				className="bg-foreground/20 hover:bg-foreground/30 active:bg-foreground/40 relative flex-1 rounded-full transition-colors"
			/>
		</BaseScrollArea.Scrollbar>
	);
}

export { ScrollArea };
