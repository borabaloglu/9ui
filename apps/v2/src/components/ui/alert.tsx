import * as React from "react"
import { cva, VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const alertVariants = cva(
	"flex w-full items-start space-x-4 rounded-md border p-4",
	{
		variants: {
			variant: {
				default:
					"bg-card text-foreground [&_[data-description=true]]:text-muted-foreground",
				warning: "bg-warning border-warning-border text-warning-foreground",
				danger: "bg-danger border-danger-border text-danger-foreground",
				info: "bg-info border-info-border text-info-foreground",
				success: "bg-success border-success-border text-success-foreground",
			},
		},
		defaultVariants: {
			variant: "default",
		},
	}
)

export interface AlertProps
	extends VariantProps<typeof alertVariants>,
		React.HTMLAttributes<HTMLDivElement> {}

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(
	({ className, variant, ...props }, ref) => (
		<div
			ref={ref}
			className={cn(alertVariants({ variant }), className)}
			{...props}
		/>
	)
)
Alert.displayName = "Alert"

const AlertContent = React.forwardRef<
	HTMLDivElement,
	React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
	<div
		ref={ref}
		className={cn("flex flex-1 flex-col gap-y-2", className)}
		{...props}
	/>
))
AlertContent.displayName = "AlertContent"

const AlertIcon = React.forwardRef<
	HTMLDivElement,
	React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
	<div ref={ref} className={cn("[&>svg]:size-4", className)} {...props} />
))
AlertIcon.displayName = "AlertIcon"

const AlertTitle = React.forwardRef<
	HTMLHeadingElement,
	React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
	<h4
		ref={ref}
		className={cn("text-sm font-medium leading-none tracking-tight", className)}
		{...props}
	/>
))
AlertTitle.displayName = "AlertTitle"

const AlertDescription = React.forwardRef<
	HTMLDivElement,
	React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
	<div
		ref={ref}
		className={cn("text-sm", className)}
		data-description={true}
		{...props}
	/>
))
AlertDescription.displayName = "AlertDescription"

const AlertAction = React.forwardRef<
	HTMLDivElement,
	React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
	<div ref={ref} className={cn("ml-auto self-center", className)} {...props} />
))
AlertAction.displayName = "AlertAction"

export {
	Alert,
	AlertContent,
	AlertIcon,
	AlertTitle,
	AlertDescription,
	AlertAction,
}
