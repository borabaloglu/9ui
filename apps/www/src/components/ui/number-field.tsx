import { NumberField as BaseNumberField } from "@base-ui/react/number-field";
import { MinusIcon, PlusIcon } from "lucide-react";

import { cn } from "@/lib/utils";

const stepperClassName =
	"hover:bg-accent hover:text-accent-foreground active:bg-foreground/10 dark:hover:bg-accent/50 dark:active:bg-accent relative flex w-8 shrink-0 items-center justify-center transition-colors duration-150 ease-out outline-none select-none hover:transition-none active:transition-none data-disabled:pointer-events-none data-readonly:pointer-events-none data-readonly:opacity-50 in-data-[size=sm]:w-7 not-in-data-disabled:data-disabled:opacity-50 any-pointer-coarse:w-11 any-pointer-coarse:after:absolute any-pointer-coarse:after:inset-x-0 any-pointer-coarse:after:inset-y-[calc(50%-22px)] [&_svg]:pointer-events-none [&_svg]:shrink-0 motion-safe:active:[&_svg]:scale-90 [&_svg:not([class*='size-'])]:size-4";

function NumberField({
	className,
	size = "default",
	...props
}: Omit<BaseNumberField.Root.Props, "className"> & {
	className?: string;
	size?: "sm" | "default";
}) {
	return (
		<BaseNumberField.Root
			data-slot="number-field"
			data-size={size}
			className={cn("flex w-full flex-col items-start gap-2", className)}
			{...props}
		/>
	);
}

function NumberFieldGroup({
	className,
	...props
}: Omit<BaseNumberField.Group.Props, "className"> & {
	className?: string;
}) {
	return (
		<BaseNumberField.Group
			data-slot="number-field-group"
			className={cn(
				"border-border bg-input text-foreground has-[input:focus-visible]:border-ring has-[input:focus-visible]:ring-ring/50 has-aria-invalid:border-destructive/60 has-aria-invalid:ring-destructive/30 dark:has-aria-invalid:ring-destructive/40 relative flex h-8 w-full min-w-0 rounded-lg border text-sm shadow-xs transition-[color,border-color,box-shadow] duration-150 ease-out not-dark:bg-clip-padding before:pointer-events-none before:absolute before:inset-0 before:rounded-[calc(var(--radius-lg)-1px)] not-data-disabled:not-has-aria-invalid:before:shadow-[0_1px_--theme(--color-black/6%)] in-data-[size=sm]:h-7 in-data-[size=sm]:rounded-[min(var(--radius-md),0.75rem)] in-data-[size=sm]:before:rounded-[calc(min(var(--radius-md),0.75rem)-1px)] has-aria-invalid:ring-3 has-[input:focus-visible]:ring-3 data-disabled:cursor-not-allowed data-disabled:opacity-50 dark:bg-clip-border dark:not-data-disabled:not-has-aria-invalid:before:shadow-[0_-1px_--theme(--color-white/8%)] any-pointer-coarse:h-9 any-pointer-coarse:text-base any-pointer-coarse:in-data-[size=sm]:h-8 [&:is([data-disabled],:has([aria-invalid=true]))]:shadow-none",
				className,
			)}
			{...props}
		/>
	);
}

function NumberFieldInput({
	className,
	...props
}: Omit<BaseNumberField.Input.Props, "className"> & {
	className?: string;
}) {
	return (
		<BaseNumberField.Input
			data-slot="number-field-input"
			className={cn(
				"placeholder:text-muted-foreground h-full w-full min-w-0 flex-1 bg-transparent px-1 text-center tabular-nums outline-none disabled:cursor-not-allowed",
				className,
			)}
			{...props}
		/>
	);
}

function NumberFieldDecrement({
	className,
	children,
	...props
}: Omit<BaseNumberField.Decrement.Props, "className"> & {
	className?: string;
}) {
	return (
		<BaseNumberField.Decrement
			data-slot="number-field-decrement"
			className={cn(
				stepperClassName,
				"rounded-s-[calc(var(--radius-lg)-1px)] in-data-[size=sm]:rounded-s-[calc(min(var(--radius-md),0.75rem)-1px)]",
				className,
			)}
			{...props}
		>
			{children ?? <MinusIcon />}
		</BaseNumberField.Decrement>
	);
}

function NumberFieldIncrement({
	className,
	children,
	...props
}: Omit<BaseNumberField.Increment.Props, "className"> & {
	className?: string;
}) {
	return (
		<BaseNumberField.Increment
			data-slot="number-field-increment"
			className={cn(
				stepperClassName,
				"rounded-e-[calc(var(--radius-lg)-1px)] in-data-[size=sm]:rounded-e-[calc(min(var(--radius-md),0.75rem)-1px)]",
				className,
			)}
			{...props}
		>
			{children ?? <PlusIcon />}
		</BaseNumberField.Increment>
	);
}

function NumberFieldScrubArea({
	className,
	children,
	...props
}: Omit<BaseNumberField.ScrubArea.Props, "className"> & {
	className?: string;
}) {
	return (
		<BaseNumberField.ScrubArea
			data-slot="number-field-scrub-area"
			className={cn(
				"flex w-fit cursor-ew-resize select-none *:cursor-[inherit] data-disabled:cursor-not-allowed",
				className,
			)}
			{...props}
		>
			{children}
			<BaseNumberField.ScrubAreaCursor
				data-slot="number-field-scrub-area-cursor"
				className="drop-shadow-sm"
			>
				<svg
					width="26"
					height="14"
					viewBox="0 0 24 14"
					className="fill-black stroke-white"
					aria-hidden="true"
				>
					<path d="M19.5 5.5L6.49737 5.51844V2L1 6.9999L6.5 12L6.49737 8.5L19.5 8.5V12L25 6.9999L19.5 2V5.5Z" />
				</svg>
			</BaseNumberField.ScrubAreaCursor>
		</BaseNumberField.ScrubArea>
	);
}

export {
	NumberField,
	NumberFieldDecrement,
	NumberFieldGroup,
	NumberFieldIncrement,
	NumberFieldInput,
	NumberFieldScrubArea,
};
