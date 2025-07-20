import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
	"inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden",
	{
		variants: {
			variant: {
				default: "bg-primary border-transparent text-primary-foreground",
				outline: "text-foreground",
				secondary: "bg-secondary border-secondary text-secondary-foreground",
				success: "bg-success border-transparent text-success-foreground",
				warning: "bg-warning border-transparent text-warning-foreground",
				info: "bg-info border-transparent text-info-foreground",
				danger: "bg-danger border-transparent text-danger-foreground",
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
