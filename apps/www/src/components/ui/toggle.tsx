"use client";

import type * as React from "react";
import { Toggle as BaseToggle } from "@base-ui/react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const toggleVariants = cva(
	"hover:bg-muted hover:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:border-destructive aria-invalid:ring-destructive/50 data-pressed:bg-accent data-pressed:text-accent-foreground inline-flex items-center justify-center gap-2 rounded-md bg-transparent text-sm font-medium whitespace-nowrap transition-[color,box-shadow,border-color] outline-none focus-visible:ring-[3px] data-disabled:pointer-events-none data-disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
	{
		variants: {
			variant: {
				default: "",
				outline: "data-pressed:border-ring/70 border shadow-xs",
			},
			size: {
				default: "h-9 min-w-9 px-2",
				sm: "h-8 min-w-8 px-1.5",
				lg: "h-10 min-w-10 px-2.5",
			},
		},
		defaultVariants: {
			variant: "default",
			size: "default",
		},
	},
);

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
	);
}

export { Toggle, toggleVariants };
