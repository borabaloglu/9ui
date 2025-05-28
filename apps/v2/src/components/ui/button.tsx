"use client"

import * as React from "react"
import { mergeProps } from "@base-ui-components/react"
import { useRender } from "@base-ui-components/react/use-render"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
	"inline-flex items-center justify-center whitespace-nowrap rounded-md font-medium transition-colors duration-200 outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:shrink-0",
	{
		variants: {
			variant: {
				default: "bg-primary text-primary-foreground hover:bg-primary/80",
				secondary:
					"bg-secondary text-secondary-foreground hover:bg-secondary/80",
				ghost: "text-foreground hover:bg-accent hover:text-accent-foreground",
				outline:
					"border bg-transparent text-foreground hover:bg-accent hover:text-accent-foreground",
				link: "text-foreground hover:underline",
				destructive:
					"bg-destructive text-destructive-foreground hover:bg-destructive/80",
			},
			size: {
				sm: "h-8 px-3 text-xs",
				md: "h-9 px-4 py-2 text-sm",
				lg: "h-10 px-5 py-3",
				"icon-sm": "size-8 [&>svg]:size-3",
				icon: "size-9 [&>svg]:size-4",
				"icon-lg": "size-10 [&>svg]:size-5",
			},
		},
		defaultVariants: {
			variant: "default",
			size: "md",
		},
	}
)

export interface ButtonProps
	extends VariantProps<typeof buttonVariants>,
		React.ButtonHTMLAttributes<HTMLButtonElement>,
		useRender.ComponentProps<"button"> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
	({ className, variant, size, render = <button />, ...props }, ref) => {
		const defaultProps: useRender.ElementProps<"button"> = {
			className: cn(buttonVariants({ variant, size, className })),
			ref: ref,
		}

		const { renderElement } = useRender({
			render,
			props: mergeProps<"button">(defaultProps, props),
		})

		return renderElement()
	}
)
Button.displayName = "Button"

export { Button, buttonVariants }
