"use client"

import * as React from "react"
import { Checkbox as BaseCheckbox } from "@base-ui-components/react/checkbox"
import { CheckIcon, MinusIcon } from "lucide-react"

import { cn } from "@/lib/utils"

function Checkbox({
	className,
	...props
}: React.ComponentProps<typeof BaseCheckbox.Root>) {
	return (
		<BaseCheckbox.Root
			data-slot="checkbox"
			className={cn(
				"peer bg-input focus-visible:ring-ring/50 aria-invalid:border-destructive aria-invalid:text-destructive aria-invalid:focus:ring-destructive/50 data-checked:border-primary data-checked:bg-primary data-checked:text-primary-foreground data-[indeterminate]:text-foreground flex size-4 items-center justify-center rounded-[4px] border transition-colors duration-150 outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",
				className
			)}
			{...props}
		>
			<BaseCheckbox.Indicator
				data-slot="checkbox-indicator"
				className="block data-[unchecked]:hidden"
			>
				{props.indeterminate ? (
					<MinusIcon className="size-3.5" />
				) : (
					<CheckIcon className="size-3.5" />
				)}
			</BaseCheckbox.Indicator>
		</BaseCheckbox.Root>
	)
}

export { Checkbox }
