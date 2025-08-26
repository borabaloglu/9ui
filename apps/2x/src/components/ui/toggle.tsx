"use client"

import * as React from "react"
import { Toggle as BaseToggle } from "@base-ui-components/react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const toggleVariants = cva(
	"inline-flex bg-transparent items-center justify-center gap-2 rounded-md text-sm font-medium hover:bg-muted hover:text-muted-foreground disabled:pointer-events-none disabled:opacity-50 data-[pressed]:bg-accent data-[pressed]:text-accent-foreground [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 [&_svg]:shrink-0 focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] outline-none transition-[color,box-shadow,border-color] aria-invalid:ring-destructive/50 aria-invalid:border-destructive whitespace-nowrap",
	{
		variants: {
			variant: {
				default: "",
				outline: "border data-[pressed]:border-ring/70 shadow-xs",
			},
			size: {
				default: "h-9 px-2 min-w-9",
				sm: "h-8 px-1.5 min-w-8",
				lg: "h-10 px-2.5 min-w-10",
			},
		},
		defaultVariants: {
			variant: "default",
			size: "default",
		},
	}
)

function Toggle({
	className,
	variant,
	size,
	...props
}: React.ComponentProps<typeof BaseToggle> &
	VariantProps<typeof toggleVariants>) {
	return (
		<BaseToggle
			data-slot="toggle"
			className={cn(toggleVariants({ variant, size, className }))}
			{...props}
		/>
	)
}

export { Toggle, toggleVariants }
