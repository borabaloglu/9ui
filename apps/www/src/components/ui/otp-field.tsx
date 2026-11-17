import { OTPField as BaseOTPField } from "@base-ui/react/otp-field";

import { cn } from "@/lib/utils";

function OTPField({
	className,
	size = "default",
	...props
}: Omit<BaseOTPField.Root.Props, "className"> & {
	className?: string;
	size?: "sm" | "default" | "lg";
}) {
	return (
		<BaseOTPField.Root
			data-slot="otp-field"
			data-size={size}
			className={cn(
				"group/otp-field flex items-center gap-2 data-[size=sm]:gap-1.5",
				className,
			)}
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
				"bg-input placeholder:text-muted-foreground focus-visible:ring-ring/50 enabled:data-invalid:ring-destructive/30 dark:enabled:data-invalid:ring-destructive/40 selection:text-foreground inset-ring-border focus-visible:inset-ring-ring enabled:data-invalid:inset-ring-destructive/60 size-8 shrink-0 rounded-lg text-center text-sm shadow-xs inset-ring-1 transition-[box-shadow] duration-150 ease-out outline-none not-dark:inset-shadow-[0_-1px_--theme(--color-black/6%)] group-data-[size=lg]/otp-field:size-9 group-data-[size=lg]/otp-field:text-base group-data-[size=sm]/otp-field:size-7 group-data-[size=sm]/otp-field:rounded-[min(var(--radius-md),0.75rem)] group-data-[size=sm]/otp-field:text-[0.8rem] selection:bg-transparent focus-visible:ring-3 disabled:cursor-not-allowed disabled:opacity-50 data-readonly:bg-transparent dark:inset-shadow-[0_1px_--theme(--color-white/8%)] any-pointer-coarse:size-9 any-pointer-coarse:text-base any-pointer-coarse:group-data-[size=lg]/otp-field:size-10 any-pointer-coarse:group-data-[size=lg]/otp-field:text-lg any-pointer-coarse:group-data-[size=sm]/otp-field:size-8 any-pointer-coarse:group-data-[size=sm]/otp-field:text-base [&:is(:disabled,[data-readonly],[data-invalid])]:shadow-none [&:is(:focus-visible,:disabled,[data-readonly],[data-invalid])]:inset-shadow-[0_0_#0000]",
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
