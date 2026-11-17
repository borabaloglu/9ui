import type * as React from "react";
import { mergeProps } from "@base-ui/react/merge-props";
import { useRender } from "@base-ui/react/use-render";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const alertVariants = cva(
	"group/alert text-card-foreground relative grid w-full grid-cols-1 items-start gap-x-2 gap-y-0.5 rounded-xl border px-3.5 py-3 text-sm shadow-xs not-dark:bg-clip-padding before:pointer-events-none before:absolute before:inset-0 before:rounded-[calc(var(--radius-xl)-1px)] before:shadow-[0_1px_--theme(--color-black/6%)] has-[>svg]:grid-cols-[auto_minmax(0,1fr)] sm:has-data-[slot=alert-action]:grid-cols-[minmax(0,1fr)_auto] sm:has-[>svg]:has-data-[slot=alert-action]:grid-cols-[auto_minmax(0,1fr)_auto] dark:before:shadow-[0_-1px_--theme(--color-white/8%)] *:[svg]:h-lh *:[svg:not([class*='size-'])]:w-4",
	{
		variants: {
			variant: {
				default: "bg-card",
				warning:
					"border-warning/20 *:[svg]:text-warning bg-[color-mix(in_oklab,var(--warning)_5%,var(--card))] [--surface-accent:var(--accent-elevated)] [--surface-muted:var(--muted-elevated)] [--surface-secondary:var(--secondary-elevated)]",
				danger:
					"border-destructive/20 *:[svg]:text-destructive bg-[color-mix(in_oklab,var(--destructive)_5%,var(--card))] [--surface-accent:var(--accent-elevated)] [--surface-muted:var(--muted-elevated)] [--surface-secondary:var(--secondary-elevated)]",
				info: "border-info/20 *:[svg]:text-info bg-[color-mix(in_oklab,var(--info)_5%,var(--card))] [--surface-accent:var(--accent-elevated)] [--surface-muted:var(--muted-elevated)] [--surface-secondary:var(--secondary-elevated)]",
				success:
					"border-success/20 *:[svg]:text-success bg-[color-mix(in_oklab,var(--success)_5%,var(--card))] [--surface-accent:var(--accent-elevated)] [--surface-muted:var(--muted-elevated)] [--surface-secondary:var(--secondary-elevated)]",
			},
		},
		defaultVariants: {
			variant: "default",
		},
	},
);

function Alert({
	className,
	variant = "default",
	...props
}: React.ComponentProps<"div"> & VariantProps<typeof alertVariants>) {
	return (
		<div
			data-slot="alert"
			data-variant={variant}
			role="alert"
			className={cn(alertVariants({ variant }), className)}
			{...props}
		/>
	);
}

function AlertTitle({
	className,
	render,
	...props
}: useRender.ComponentProps<"div">) {
	return useRender({
		defaultTagName: "div",
		props: mergeProps<"div">(
			{
				className: cn(
					"col-start-1 font-medium wrap-break-word group-has-[>svg]/alert:col-start-2",
					className,
				),
			},
			props,
		),
		render,
		state: {
			slot: "alert-title",
		},
	});
}

function AlertDescription({
	className,
	...props
}: React.ComponentProps<"div">) {
	return (
		<div
			data-slot="alert-description"
			className={cn(
				"text-muted-foreground col-start-1 grid justify-items-start gap-1 text-pretty wrap-anywhere group-has-[>svg]/alert:col-start-2 [&_a]:underline [&_a]:underline-offset-3 [&_p]:leading-relaxed",
				className,
			)}
			{...props}
		/>
	);
}

function AlertAction({ className, ...props }: React.ComponentProps<"div">) {
	return (
		<div
			data-slot="alert-action"
			className={cn(
				"col-start-1 mt-2 flex gap-1 group-has-[>svg]/alert:col-start-2 sm:col-start-2 sm:row-start-1 sm:row-end-3 sm:mt-0 sm:self-center sm:group-has-[>svg]/alert:col-start-3",
				className,
			)}
			{...props}
		/>
	);
}

export { Alert, AlertAction, AlertDescription, AlertTitle };
