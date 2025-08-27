import * as React from "react"
import { ToggleGroup as BaseToggleGroup } from "@base-ui-components/react/toggle-group"

import { cn } from "@/lib/utils"

function ToggleGroup({
	className,
	...props
}: React.ComponentProps<typeof BaseToggleGroup>) {
	return (
		<BaseToggleGroup
			data-slot="toggle-group"
			className={cn(
				"[&_*[data-slot=toggle]]:data-[pressed]:border-ring/70 flex w-fit items-center shadow-xs [&_*[data-slot=toggle]]:border-y [&_*[data-slot=toggle]]:border-r [&_*[data-slot=toggle]]:first:rounded-r-none [&_*[data-slot=toggle]]:first:border [&_*[data-slot=toggle]]:last:rounded-l-none [&_*[data-slot=toggle]]:last:border-r [&_*[data-slot=toggle]]:[&:not(:first-child):not(:last-child)]:rounded-none",
				className
			)}
			{...props}
		/>
	)
}

export { ToggleGroup }
