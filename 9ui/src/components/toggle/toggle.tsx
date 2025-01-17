"use client"

import * as React from "react"
import { Toggle as BaseToggle } from "@base-ui-components/react"
import { cva, type VariantProps } from "class-variance-authority"

import { merge } from "../../utils"

const toggleVariants = cva(
	"inline-flex items-center justify-center rounded-md text-sm font-medium text-fg transition-colors duration-200 hover:bg-subtle hover:text-muted-fg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-accent disabled:pointer-events-none disabled:opacity-50 data-[pressed]:bg-subtle data-[pressed]:text-fg",
	{
		variants: {
			variant: {
				default: "",
				outline: "border border-muted",
			},
			size: {
				sm: "h-8 px-2",
				md: "h-9 px-2.5",
				lg: "h-10 px-3",
			},
		},
		defaultVariants: {
			variant: "default",
			size: "md",
		},
	}
)

/********
Toggle
********/
interface ToggleProps
	extends React.CustomComponentPropsWithRef<typeof BaseToggle>,
		VariantProps<typeof toggleVariants> {}

const Toggle = React.forwardRef<HTMLButtonElement, ToggleProps>(
	({ className, size, variant, ...props }, ref) => {
		return (
			<BaseToggle
				ref={ref}
				className={merge(toggleVariants({ size, variant, className }))}
				{...props}
			/>
		)
	}
)
Toggle.displayName = "Toggle"

export { Toggle }
