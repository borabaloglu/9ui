import { OTPField as BaseOTPField } from "@base-ui/react/otp-field";

import { cn } from "@/lib/utils";

function OTPField({
	className,
	size = "default",
	...props
}: Omit<BaseOTPField.Root.Props, "className"> & {
	className?: string;
	size?: "default" | "lg";
}) {
	return (
		<BaseOTPField.Root
			data-slot="otp-field"
			data-size={size}
			className={cn("flex items-center gap-2", className)}
			{...props}
		/>
	);
}

function OTPFieldInput({
	className,
	...props
}: Omit<BaseOTPField.Input.Props, "className"> & {
	className?: string;
}) {
	return (
		<BaseOTPField.Input
			data-slot="otp-field-input"
			className={cn(
				"bg-input placeholder:text-muted-foreground focus-visible:ring-ring/50 enabled:data-invalid:ring-destructive/30 dark:enabled:data-invalid:ring-destructive/40 selection:text-foreground inset-ring-border focus-visible:inset-ring-ring enabled:data-invalid:inset-ring-destructive/60 size-8 shrink-0 rounded-lg text-center text-sm shadow-xs inset-ring-1 transition-[box-shadow] duration-150 ease-out outline-none not-dark:inset-shadow-[0_-1px_--theme(--color-black/6%)] selection:bg-transparent focus-visible:ring-3 focus-visible:outline-hidden disabled:cursor-not-allowed disabled:opacity-50 in-data-[size=lg]:size-10 in-data-[size=lg]:text-base data-readonly:bg-transparent dark:inset-shadow-[0_1px_--theme(--color-white/8%)] any-pointer-coarse:size-10 any-pointer-coarse:text-base any-pointer-coarse:in-data-[size=lg]:size-11 any-pointer-coarse:in-data-[size=lg]:text-lg [&:is(:disabled,[data-readonly],[data-invalid])]:shadow-none [&:is(:focus-visible,:disabled,[data-readonly],[data-invalid])]:inset-shadow-[0_0_#0000]",
				className,
			)}
			{...props}
		/>
	);
}

function OTPFieldSeparator({
	className,
	...props
}: Omit<BaseOTPField.Separator.Props, "className"> & {
	className?: string;
}) {
	return (
		<BaseOTPField.Separator
			data-slot="otp-field-separator"
			className={cn(
				"bg-muted-foreground/50 h-0.5 w-3 shrink-0 rounded-full in-data-disabled:opacity-50",
				className,
			)}
			{...props}
		/>
	);
}

export { OTPField, OTPFieldInput, OTPFieldSeparator };
