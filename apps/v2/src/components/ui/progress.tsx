import * as React from "react"
import { Progress as BaseProgress } from "@base-ui-components/react/progress"

import { cn } from "@/lib/utils"

const Progress = React.forwardRef<
	HTMLDivElement,
	React.ComponentProps<typeof BaseProgress.Root>
>(({ className, children, ...props }, ref) => (
	<BaseProgress.Root ref={ref} className="relative" {...props}>
		<BaseProgress.Track
			className={cn(
				"block h-1 w-full overflow-hidden rounded-full bg-muted",
				className
			)}
		>
			<BaseProgress.Indicator className="block bg-primary transition-all duration-300" />
		</BaseProgress.Track>
		{children}
	</BaseProgress.Root>
))
Progress.displayName = "Progress"

const ProgressValue = React.forwardRef<
	HTMLSpanElement,
	React.ComponentPropsWithoutRef<typeof BaseProgress.Value>
>(({ className, ...props }, ref) => (
	<BaseProgress.Value
		ref={ref}
		className={cn(
			"mt-2 flex justify-end text-xs font-medium text-foreground",
			className
		)}
		{...props}
	/>
))
ProgressValue.displayName = "ProgressValue"

export { Progress, ProgressValue }
