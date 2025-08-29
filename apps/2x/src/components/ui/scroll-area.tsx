import * as React from "react"
import { ScrollArea as BaseScrollArea } from "@base-ui-components/react/scroll-area"

import { cn } from "@/lib/utils"

function ScrollArea({
	className,
	children,
	orientation,
	...props
}: React.ComponentProps<typeof BaseScrollArea.Root> & {
	orientation?: "horizontal" | "vertical"
}) {
	return (
		<BaseScrollArea.Root
			data-slot="scroll-area"
			className={cn("relative", className)}
			{...props}
		>
			<BaseScrollArea.Viewport
				data-slot="scroll-area-viewport"
				className="focus-visible:ring-ring/50 size-full overscroll-contain rounded-[inherit] transition-[color,box-shadow] outline-none focus-visible:ring-[3px] focus-visible:outline"
			>
				{children}
			</BaseScrollArea.Viewport>
			<ScrollBar orientation={orientation} />
			<BaseScrollArea.Corner />
		</BaseScrollArea.Root>
	)
}

function ScrollBar({
	className,
	orientation = "vertical",
	...props
}: React.ComponentProps<typeof BaseScrollArea.Scrollbar>) {
	return (
		<BaseScrollArea.Scrollbar
			data-slot="scroll-area-scrollbar"
			orientation={orientation}
			className={cn(
				"m-1 flex touch-none p-px opacity-0 transition-[border-color,opacity] delay-200 select-none data-hovering:opacity-100 data-hovering:delay-0 data-hovering:duration-100 data-scrolling:opacity-100 data-scrolling:delay-0 data-scrolling:duration-100",
				orientation === "vertical" && "w-2.5 border-l border-l-transparent",
				orientation === "horizontal" &&
					"h-2.5 flex-col border-t border-t-transparent",
				className
			)}
			{...props}
		>
			<BaseScrollArea.Thumb
				data-slot="scroll-area-thumb"
				className="bg-border relative flex-1 rounded-full"
			/>
		</BaseScrollArea.Scrollbar>
	)
}

export { ScrollArea }
