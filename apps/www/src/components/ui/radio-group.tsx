import type * as React from "react";
import { Radio as BaseRadio } from "@base-ui/react/radio";
import { RadioGroup as BaseRadioGroup } from "@base-ui/react/radio-group";

import { cn } from "@/lib/utils";

function RadioGroup({
	className,
	...props
}: Omit<BaseRadioGroup.Props, "className"> & {
	className?: string;
}) {
	return (
		<BaseRadioGroup
			data-slot="radio-group"
			className={cn(
				"flex flex-col items-start gap-3 any-pointer-coarse:gap-6",
				className,
			)}
			{...props}
		/>
	);
}

function RadioGroupLabel({ className, ...props }: React.ComponentProps<"div">) {
	return (
		<div
			data-slot="radio-group-label"
			className={cn(
				"in-data-disabled:text-foreground/50 text-sm leading-snug font-medium",
				className,
			)}
			{...props}
		/>
	);
}

function Radio({
	className,
	...props
}: Omit<BaseRadio.Root.Props, "className"> & {
	className?: string;
}) {
	return (
		<BaseRadio.Root
			data-slot="radio"
			className={cn(
				"border-border bg-input focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:border-destructive/60 aria-invalid:ring-destructive/30 data-checked:border-primary data-checked:bg-primary dark:aria-invalid:ring-destructive/40 aria-invalid:data-checked:border-primary relative inline-flex size-4 shrink-0 items-center justify-center rounded-full border shadow-xs transition-[background-color,border-color,box-shadow,scale] duration-150 ease-out outline-none not-dark:bg-clip-padding before:pointer-events-none before:absolute before:inset-0 before:rounded-full not-data-disabled:not-data-checked:not-aria-invalid:before:shadow-[0_1px_--theme(--color-black/6%)] after:absolute after:-inset-x-3 after:-inset-y-2 focus-visible:ring-3 aria-invalid:ring-3 data-disabled:cursor-not-allowed data-disabled:opacity-50 motion-safe:not-data-disabled:active:scale-95 motion-safe:not-data-disabled:in-[label:active]:scale-95 motion-safe:not-data-disabled:has-[+input+label:active]:scale-95 dark:bg-clip-border dark:not-data-disabled:not-data-checked:not-aria-invalid:before:shadow-[0_-1px_--theme(--color-white/8%)] any-pointer-coarse:size-5 any-pointer-coarse:after:-inset-[13px] [&:is([data-disabled],[data-checked],[aria-invalid])]:shadow-none motion-safe:not-data-disabled:[label:active+&]:scale-95",
				className,
			)}
			{...props}
		>
			<BaseRadio.Indicator
				data-slot="radio-indicator"
				className="bg-primary-foreground ease-out-quint size-1.5 rounded-full transition-[scale] duration-150 data-ending-style:scale-0 data-starting-style:scale-0 motion-reduce:transition-none any-pointer-coarse:size-2"
			/>
		</BaseRadio.Root>
	);
}

export { Radio, RadioGroup, RadioGroupLabel };
