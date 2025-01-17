import * as React from "react"
import { Progress as BaseProgress } from "@base-ui-components/react/progress"

import { merge } from "../../utils"

/********
Progress
********/
const Progress = React.forwardRef<
	HTMLDivElement,
	React.ComponentProps<typeof BaseProgress.Root>
>(({ className, children, ...props }, ref) => {
	return (
		<BaseProgress.Root ref={ref} className="relative" {...props}>
			<BaseProgress.Track
				className={merge(
					"block h-1 w-full overflow-hidden rounded-full bg-muted",
					className
				)}
			>
				<BaseProgress.Indicator className="block bg-accent transition-all duration-300" />
			</BaseProgress.Track>
			{children}
		</BaseProgress.Root>
	)
})
Progress.displayName = "Progress"

/********
Progress Label
********/
const ProgressLabel = React.forwardRef<
	HTMLSpanElement,
	React.HTMLAttributes<HTMLSpanElement>
>(({ className, ...props }, ref) => {
	return (
		<span
			ref={ref}
			className={merge(
				"absolute right-0 top-2 text-xs font-medium text-fg",
				className
			)}
			{...props}
		/>
	)
})
ProgressLabel.displayName = "ProgressLabel"

export { Progress, ProgressLabel }
