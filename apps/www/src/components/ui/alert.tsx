import type * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const alertVariants = cva(
	"relative grid w-full grid-cols-[0_1fr] items-start gap-y-0.5 rounded-lg border px-4 py-3 text-sm has-[>svg]:grid-cols-[calc(var(--spacing)*4)_1fr] has-[>svg]:gap-x-3 [&>svg]:size-4 [&>svg]:translate-y-0.5 [&>svg]:text-current",
	{
		variants: {
			variant: {
				default:
					"bg-card text-card-foreground [&_*[data-slot=alert-description]]:text-muted-foreground",
				warning:
					"border-warning-border bg-warning text-warning-foreground [&_*[data-slot=alert-description]]:text-warning-foreground/70",
				danger:
					"border-danger-border bg-danger text-danger-foreground [&_*[data-slot=alert-description]]:text-danger-foreground/70",
				info: "border-info-border bg-info text-info-foreground [&_*[data-slot=alert-description]]:text-info-foreground/70",
				success:
					"border-success-border bg-success text-success-foreground [&_*[data-slot=alert-description]]:text-success-foreground/70",
			},
		},
		defaultVariants: {
			variant: "default",
		},
	},
);

function Alert({
	className,
	variant,
	...props
}: React.ComponentProps<"div"> & VariantProps<typeof alertVariants>) {
	return (
		<div
			data-slot="alert"
			role="alert"
			className={cn(alertVariants({ variant }), className)}
			{...props}
		/>
	);
}

function AlertTitle({ className, ...props }: React.ComponentProps<"h4">) {
	return (
		<h4
			data-slot="alert-title"
			className={cn(
				"col-start-2 min-h-4 font-medium tracking-tight",
				className,
			)}
			{...props}
		/>
	);
}

function AlertDescription({
	className,
	...props
}: React.ComponentProps<"div">) {
	return (
		<div
			data-slot="alert-description"
			className={cn(
				"col-start-2 grid justify-items-start gap-1 text-sm [&_p]:leading-relaxed",
				className,
			)}
			{...props}
		/>
	);
}

export { Alert, AlertDescription, AlertTitle };
