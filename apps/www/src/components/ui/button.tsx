"use client";

import type * as React from "react";
import { Button as BaseButton } from "@base-ui/react/button";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
	"focus-visible:ring-ring/50 inline-flex shrink-0 items-center justify-center gap-2 rounded-md text-sm font-medium whitespace-nowrap transition-all duration-200 outline-none focus-visible:ring-[3px] data-disabled:pointer-events-none data-disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
	{
		variants: {
			variant: {
				default:
					"bg-primary text-primary-foreground hover:bg-primary/80 shadow-xs",
				secondary:
					"bg-secondary text-secondary-foreground hover:bg-secondary/80 shadow-xs",
				ghost:
					"text-foreground hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
				outline:
					"text-foreground hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50 border bg-transparent shadow-xs",
				link: "text-foreground hover:underline",
				destructive:
					"bg-destructive text-destructive-foreground hover:bg-destructive/80 focus-visible:ring-destructive/50 dark:bg-destructive/80 dark:hover:bg-destructive/60 dark:focus-visible:ring-destructive/40 shadow-xs",
			},
			size: {
				sm: "h-8 gap-1 px-3",
				default: "h-9 px-4",
				lg: "h-10 px-5",
				"icon-sm": "size-8 [&_svg:not([class*='size-'])]:size-3",
				icon: "size-9",
				"icon-lg": "size-10 [&_svg:not([class*='size-'])]:size-5",
			},
		},
		defaultVariants: {
			variant: "default",
			size: "default",
		},
	},
);

type ButtonProps = VariantProps<typeof buttonVariants> &
	React.ComponentProps<typeof BaseButton>;

function Button({ className, variant, size, ...props }: ButtonProps) {
	return (
		<BaseButton
			data-slot="button"
			className={cn(buttonVariants({ variant, size, className }))}
			{...props}
		/>
	);
}

export type { ButtonProps };
export { Button, buttonVariants };
