"use client"

import * as React from "react"
import { Toggle as BaseToggle } from "@base-ui-components/react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const toggleVariants = cva(
	"inline-flex items-center justify-center rounded-md text-sm font-medium text-foreground transition-colors duration-200 hover:bg-muted hover:text-muted-foreground focus-visible:ring-1 focus-visible:ring-ring focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 data-[pressed]:bg-muted data-[pressed]:text-foreground [&>svg]:size-4",
	{
		variants: {
			variant: {
				default: "",
				outline: "border",
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

interface ToggleProps
	extends React.CustomComponentPropsWithRef<typeof BaseToggle>,
		VariantProps<typeof toggleVariants> {}

const Toggle = React.forwardRef<HTMLButtonElement, ToggleProps>(
	({ className, size, variant, ...props }, ref) => (
		<BaseToggle
			ref={ref}
			className={cn(toggleVariants({ size, variant, className }))}
			{...props}
		/>
	)
)
Toggle.displayName = "Toggle"

export { Toggle }
