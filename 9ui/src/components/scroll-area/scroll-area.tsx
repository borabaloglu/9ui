import * as React from "react"
import { ScrollArea as BaseScrollArea } from "@base-ui-components/react/scroll-area"

import { merge } from "../../utils"

/********
Scroll Area
********/
interface ScrollAreaProps
	extends React.ComponentPropsWithoutRef<typeof BaseScrollArea.Root> {
	orientation?: "horizontal" | "vertical"
}

const ScrollArea = React.forwardRef<HTMLDivElement, ScrollAreaProps>(
	({ children, className, orientation = "vertical", ...props }, ref) => {
		return (
			<BaseScrollArea.Root
				ref={ref}
				className={merge("relative h-96 overflow-hidden", className)}
				{...props}
			>
				<BaseScrollArea.Viewport className="size-full overscroll-contain">
					{children}
				</BaseScrollArea.Viewport>
				<BaseScrollArea.Scrollbar
					orientation={orientation}
					className={merge(
						"m-2 rounded-full bg-muted opacity-0 transition-opacity delay-300 data-[hovering]:opacity-100 data-[scrolling]:opacity-100 data-[hovering]:delay-0 data-[scrolling]:delay-0 data-[hovering]:duration-100 data-[scrolling]:duration-100",
						orientation === "horizontal" && "h-1",
						orientation === "vertical" && "w-1"
					)}
				>
					<BaseScrollArea.Thumb className="size-full rounded-full bg-muted-fg" />
				</BaseScrollArea.Scrollbar>
			</BaseScrollArea.Root>
		)
	}
)

export { ScrollArea }
