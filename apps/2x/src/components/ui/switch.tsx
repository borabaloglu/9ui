import * as React from "react"
import { Switch as BaseSwitch } from "@base-ui-components/react/switch"

import { cn } from "@/lib/utils"

function Switch({
	className,
	...props
}: React.ComponentProps<typeof BaseSwitch.Root>) {
	return (
		<BaseSwitch.Root
			data-slot="switch"
			className={cn(
				"peer data-[checked]:bg-primary focus-visible:border-ring focus-visible:ring-ring/50 data-[unchecked]:bg-input data-[unchecked]:hover:border-ring/70 data-[checked]:border-primary inline-flex h-5 w-8 shrink-0 items-center rounded-full border shadow-xs transition-[color,box-shadow,border-color] outline-none focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50",
				className
			)}
			{...props}
		>
			<BaseSwitch.Thumb
				data-slot="switch-thumb"
				className={cn(
					"bg-foreground data-[checked]:bg-background pointer-events-none block size-4 rounded-full ring-0 transition-transform duration-200 ease-in-out data-[checked]:translate-x-[calc(100%-3px)] data-[unchecked]:translate-x-px"
				)}
			/>
		</BaseSwitch.Root>
	)
}

export { Switch }
