import * as React from "react"
import { ScrollArea as BaseScrollArea } from "@base-ui-components/react/scroll-area"

import { cn } from "@/lib/utils"

interface ScrollAreaProps
	extends React.ComponentPropsWithoutRef<typeof BaseScrollArea.Root> {
	orientation?: "horizontal" | "vertical"
}

const ScrollArea = React.forwardRef<HTMLDivElement, ScrollAreaProps>(
	({ children, className, orientation = "vertical", ...props }, ref) => (
		<BaseScrollArea.Root
			ref={ref}
			className={cn("relative h-96 overflow-hidden", className)}
			{...props}
		>
			<BaseScrollArea.Viewport className="size-full overscroll-contain">
				{children}
			</BaseScrollArea.Viewport>
			<BaseScrollArea.Scrollbar
				orientation={orientation}
				className={cn(
					"m-1 rounded-full opacity-0 transition-opacity delay-300 data-[hovering]:opacity-100 data-[scrolling]:opacity-100 data-[hovering]:delay-0 data-[scrolling]:delay-0 data-[hovering]:duration-100 data-[scrolling]:duration-100",
					orientation === "horizontal" && "h-1.5",
					orientation === "vertical" && "w-1.5"
				)}
			>
				<BaseScrollArea.Thumb className="size-full rounded-full bg-muted" />
			</BaseScrollArea.Scrollbar>
		</BaseScrollArea.Root>
	)
)
ScrollArea.displayName = "ScrollArea"

export { ScrollArea }
