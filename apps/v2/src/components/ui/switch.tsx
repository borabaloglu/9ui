import * as React from "react"
import { Switch as BaseSwitch } from "@base-ui-components/react/switch"

import { cn } from "@/lib/utils"

const Switch = React.forwardRef<
	HTMLButtonElement,
	React.ComponentPropsWithoutRef<typeof BaseSwitch.Root>
>(({ className, ...props }, ref) => (
	<BaseSwitch.Root
		ref={ref}
		className={cn(
			"peer inline-flex h-6 w-10 items-center rounded-full bg-muted p-0.5 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 data-[checked]:bg-primary",
			className
		)}
		{...props}
	>
		<BaseSwitch.Thumb className="left-0 top-0 aspect-square h-5 rounded-full bg-background transition-[colors,transform] duration-300 ease-in-out data-[checked]:translate-x-4 data-[checked]:bg-primary-foreground" />
	</BaseSwitch.Root>
))
Switch.displayName = "Switch"

export { Switch }
