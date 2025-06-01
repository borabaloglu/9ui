import * as React from "react"
import { Progress as BaseProgress } from "@base-ui-components/react/progress"

import { cn } from "@/lib/utils"

function Progress({
	className,
	children,
	...props
}: React.ComponentProps<typeof BaseProgress.Root>) {
	return (
		<BaseProgress.Root data-slot="progress" className="relative" {...props}>
			<BaseProgress.Track
				data-slot="progress-track"
				className={cn(
					"bg-primary/20 block h-2 w-full overflow-hidden rounded-full",
					className
				)}
			>
				<BaseProgress.Indicator
					data-slot="progress-indicator"
					className="bg-primary block h-full w-full transition-all"
				/>
			</BaseProgress.Track>
			{children}
		</BaseProgress.Root>
	)
}

function ProgressValue({
	className,
	...props
}: React.ComponentProps<typeof BaseProgress.Value>) {
	return (
		<BaseProgress.Value
			data-slot="progress-value"
			className={cn(
				"text-foreground mt-2 flex justify-end text-sm font-medium",
				className
			)}
			{...props}
		/>
	)
}

export { Progress, ProgressValue }
