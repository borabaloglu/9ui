import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
	"inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none overflow-hidden shadow-xs",
	{
		variants: {
			variant: {
				default: "bg-primary border-transparent text-primary-foreground",
				outline: "text-foreground",
				secondary: "bg-secondary border-border/50 text-secondary-foreground",
				success: "bg-success border-success-border/50 text-success-foreground",
				warning: "bg-warning border-warning-border/50 text-warning-foreground",
				info: "bg-info border-info-border/50 text-info-foreground",
				danger: "bg-danger border-danger-border/50 text-danger-foreground",
			},
		},
		defaultVariants: {
			variant: "default",
		},
	}
)

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
	)
}

export { Badge, badgeVariants }
