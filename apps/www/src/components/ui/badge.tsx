import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
	"inline-flex items-center rounded-full px-3 py-0.5 text-xs font-semibold gap-2 border",
	{
		variants: {
			variant: {
				default: "bg-primary border-primary text-primary-foreground",
				outline: "bg-transparent text-foreground",
				secondary: "bg-secondary border-secondary text-secondary-foreground",
				success: "bg-success border-success-border text-success-foreground",
				warning: "bg-warning border-warning-border text-warning-foreground",
				info: "bg-info border-info-border text-info-foreground",
				danger: "bg-danger border-danger-border text-danger-foreground",
			},
		},
		defaultVariants: {
			variant: "default",
		},
	}
)

export interface BadgeProps
	extends React.HTMLAttributes<HTMLDivElement>,
		VariantProps<typeof badgeVariants> {}

const Badge = ({ className, variant, ...props }: BadgeProps) => (
	<div className={cn(badgeVariants({ variant }), className)} {...props} />
)

const badgeIndicatorVariants = cva("rounded-full size-2", {
	variants: {
		variant: {
			success: "bg-success-foreground",
			warning: "bg-warning-foreground",
			info: "bg-info-foreground",
			danger: "bg-danger-foreground",
		},
	},
})

export interface BadgeIndicatorProps
	extends React.HTMLAttributes<HTMLSpanElement>,
		VariantProps<typeof badgeIndicatorVariants> {}

const BadgeIndicator = ({
	className,
	variant,
	...props
}: BadgeIndicatorProps) => (
	<span
		className={cn(badgeIndicatorVariants({ variant }), className)}
		{...props}
	/>
)

export { Badge, badgeVariants, BadgeIndicator, badgeIndicatorVariants }
