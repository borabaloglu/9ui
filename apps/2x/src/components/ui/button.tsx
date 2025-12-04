"use client"

import * as React from "react"
import { Button as BaseButton } from "@base-ui-components/react/button"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
	"inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all duration-200 outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50 data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0",
	{
		variants: {
			variant: {
				default:
					"bg-primary text-primary-foreground hover:bg-primary/80 shadow-xs",
				secondary:
					"bg-secondary text-secondary-foreground hover:bg-secondary/80 shadow-xs",
				ghost:
					"text-foreground hover:bg-accent dark:hover:bg-accent/50 hover:text-accent-foreground",
				outline:
					"border bg-transparent text-foreground hover:bg-accent dark:hover:bg-accent/50 hover:text-accent-foreground shadow-xs",
				link: "text-foreground hover:underline",
				destructive:
					"bg-destructive hover:bg-destructive/80 dark:bg-destructive/80 text-destructive-foreground dark:hover:bg-destructive/60 dark:focus-visible:ring-destructive/40 focus-visible:ring-destructive/50 shadow-xs",
			},
			size: {
				sm: "h-8 px-3 gap-1",
				md: "h-9 px-4",
				lg: "h-10 px-5",
				"icon-sm": "size-8 [&_svg:not([class*='size-'])]:size-3",
				icon: "size-9",
				"icon-lg": "size-10 [&_svg:not([class*='size-'])]:size-5",
			},
		},
		defaultVariants: {
			variant: "default",
			size: "md",
		},
	}
)

type ButtonProps = VariantProps<typeof buttonVariants> &
	React.ComponentProps<typeof BaseButton>

function Button({ className, variant, size, ...props }: ButtonProps) {
	return (
		<BaseButton
			data-slot="button"
			className={cn(buttonVariants({ variant, size, className }))}
			{...props}
		/>
	)
}

export { Button, buttonVariants }
export type { ButtonProps }