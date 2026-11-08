import type * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
	"inline-flex w-fit shrink-0 items-center justify-center gap-1 overflow-hidden rounded-md border px-2 py-0.5 text-xs font-medium whitespace-nowrap shadow-xs [&>svg]:pointer-events-none [&>svg]:size-3",
	{
		variants: {
			variant: {
				default: "bg-primary text-primary-foreground border-transparent",
				outline: "text-foreground",
				secondary: "border-border/50 bg-secondary text-secondary-foreground",
				success: "border-success-border/50 bg-success text-success-foreground",
				warning: "border-warning-border/50 bg-warning text-warning-foreground",
				info: "border-info-border/50 bg-info text-info-foreground",
				danger: "border-danger-border/50 bg-danger text-danger-foreground",
			},
		},
		defaultVariants: {
			variant: "default",
		},
	},
);

function Badge({
	className,
	variant,
	...props
}: React.ComponentProps<"span"> & VariantProps<typeof badgeVariants>) {
	return (
		<span
			data-slot="badge"
			className={cn(badgeVariants({ variant }), className)}
			{...props}
		/>
	);
}

export { Badge, badgeVariants };
