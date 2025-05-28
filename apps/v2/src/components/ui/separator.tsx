import * as React from "react"
import { Separator as BaseSeparator } from "@base-ui-components/react/separator"

import { cn } from "@/lib/utils"

interface SeparatorProps extends BaseSeparator.Props {
	orientation?: "horizontal" | "vertical"
}

const Separator = React.forwardRef<
	React.ElementRef<typeof BaseSeparator>,
	SeparatorProps
>(({ className, orientation = "horizontal", ...props }, ref) => (
	<BaseSeparator
		ref={ref}
		className={cn(
			"shrink-0 bg-muted",
			orientation === "horizontal" ? "h-px" : "w-px",
			className
		)}
		{...props}
	/>
))
Separator.displayName = BaseSeparator.displayName

export { Separator }
