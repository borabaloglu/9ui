import type * as React from "react";
import { Radio as BaseRadio } from "@base-ui/react/radio";
import { RadioGroup as BaseRadioGroup } from "@base-ui/react/radio-group";

import { cn } from "@/lib/utils";

const segmentedControlSizes = {
	sm: "[--segmented-control-height:--spacing(7)] [--segmented-control-radius:min(var(--radius-md),0.75rem)] any-pointer-coarse:[--segmented-control-height:--spacing(8)]",
	default:
		"[--segmented-control-height:--spacing(8)] [--segmented-control-radius:var(--radius-lg)] any-pointer-coarse:[--segmented-control-height:--spacing(9)]",
	lg: "[--segmented-control-height:--spacing(9)] [--segmented-control-radius:var(--radius-lg)] any-pointer-coarse:[--segmented-control-height:--spacing(10)]",
};

function SegmentedControl<Value>({
	className,
	size = "default",
	...props
}: Omit<BaseRadioGroup.Props<Value>, "className"> & {
	className?: string;
	size?: "sm" | "default" | "lg";
}) {
	return (
		<BaseRadioGroup
			data-slot="segmented-control"
			data-size={size}
			className={cn(
				"group/segmented-control isolate inline-grid w-fit max-w-full auto-cols-fr grid-flow-col",
				segmentedControlSizes[size],
				className,
			)}
			{...props}
		/>
	);
}

function SegmentedControlLabel({
	className,
	...props
}: React.ComponentProps<"div">) {
	return (
		<div
			data-slot="segmented-control-label"
			className={cn(
				"has-[+[data-invalid]]:text-destructive has-[+[data-disabled]]:text-foreground/50 w-fit text-sm leading-snug font-medium",
				className,
			)}
			{...props}
		/>
	);
}

function SegmentedControlItem<Value>({
	className,
	...props
}: Omit<BaseRadio.Root.Props<Value>, "className"> & {
	className?: string;
}) {
	return (
		<BaseRadio.Root
			data-slot="segmented-control-item"
			className={cn(
				"border-border bg-input text-foreground not-data-checked:hover:bg-accent/50 not-data-checked:hover:text-accent-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:border-destructive/60 aria-invalid:ring-destructive/30 dark:aria-invalid:ring-destructive/40 data-checked:bg-accent data-checked:text-accent-foreground [&:active]:not-data-checked:bg-accent relative inline-flex h-(--segmented-control-height) min-w-0 cursor-pointer items-center justify-center-safe gap-1.5 overflow-x-clip border bg-clip-padding px-[calc(--spacing(2.5)-1px)] text-sm font-medium whitespace-nowrap shadow-xs outline-none select-none [-webkit-tap-highlight-color:transparent] before:pointer-events-none before:absolute before:inset-0 not-data-disabled:not-data-checked:not-aria-invalid:not-active:before:shadow-[0_1px_--theme(--color-black/6%)] focus-visible:z-1 focus-visible:ring-3 data-disabled:pointer-events-none data-disabled:opacity-50 dark:bg-clip-border dark:not-data-disabled:not-data-checked:not-aria-invalid:not-active:before:shadow-[0_-1px_--theme(--color-white/8%)] any-pointer-coarse:text-base any-pointer-coarse:after:absolute any-pointer-coarse:after:size-full any-pointer-coarse:after:min-h-11 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 [&:is(:active,[data-checked],[data-disabled],[aria-invalid=true])]:shadow-none",
				"not-first-of-type:border-s-0 first-of-type:rounded-s-(--segmented-control-radius) first-of-type:before:rounded-s-[calc(var(--segmented-control-radius)-1px)] last-of-type:rounded-e-(--segmented-control-radius) last-of-type:before:rounded-e-[calc(var(--segmented-control-radius)-1px)]",
				"group-data-[size=lg]/segmented-control:px-[calc(--spacing(3)-1px)] group-data-[size=sm]/segmented-control:gap-1 group-data-[size=sm]/segmented-control:text-[0.8rem] group-data-[size=sm]/segmented-control:[&_svg:not([class*='size-'])]:size-3.5",
				className,
			)}
			{...props}
		/>
	);
}

export { SegmentedControl, SegmentedControlItem, SegmentedControlLabel };
