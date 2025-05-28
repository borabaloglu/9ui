import * as React from "react"
import { Meter as BaseMeter } from "@base-ui-components/react/meter"

import { cn } from "@/lib/utils"

const Meter = React.forwardRef<
	HTMLDivElement,
	React.ComponentPropsWithoutRef<typeof BaseMeter.Root>
>(({ className, children, ...props }, ref) => (
	<BaseMeter.Root
		ref={ref}
		className={cn("w-full space-y-1.5", className)}
		{...props}
	>
		{children}
		<BaseMeter.Track
			ref={ref}
			className={cn(
				"h-2 w-full overflow-hidden rounded-[2px] border bg-muted",
				className
			)}
			{...props}
		>
			<BaseMeter.Indicator className="bg-primary" />
		</BaseMeter.Track>
	</BaseMeter.Root>
))
Meter.displayName = "Meter"

const MeterLabel = React.forwardRef<
	HTMLDivElement,
	React.ComponentPropsWithoutRef<typeof BaseMeter.Label>
>(({ className, ...props }, ref) => (
	<BaseMeter.Label
		ref={ref}
		className={cn("text-sm font-medium", className)}
		{...props}
	/>
))
MeterLabel.displayName = "MeterLabel"

const MeterValue = React.forwardRef<
	HTMLDivElement,
	React.ComponentPropsWithoutRef<typeof BaseMeter.Value>
>(({ className, ...props }, ref) => (
	<BaseMeter.Value ref={ref} className={cn("text-sm", className)} {...props} />
))
MeterValue.displayName = "MeterValue"

export { Meter, MeterLabel, MeterValue }
