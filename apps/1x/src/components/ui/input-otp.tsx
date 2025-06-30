"use client"

import * as React from "react"
import { OTPInput, OTPInputContext } from "input-otp"
import { MinusIcon } from "lucide-react"

import { cn } from "@/lib/utils"

const InputOTP = React.forwardRef<
	React.ElementRef<typeof OTPInput>,
	React.ComponentPropsWithoutRef<typeof OTPInput>
>(({ containerClassName, ...props }, ref) => (
	<OTPInput
		ref={ref}
		containerClassName={cn("flex items-center gap-x-2", containerClassName)}
		{...props}
	/>
))
InputOTP.displayName = "InputOTP"

const InputOTPGroup = React.forwardRef<
	React.ElementRef<"div">,
	React.ComponentPropsWithoutRef<"div">
>(({ className, ...props }, ref) => (
	<div
		ref={ref}
		className={cn("flex items-center gap-x-2", className)}
		{...props}
	/>
))
InputOTPGroup.displayName = "InputOTPGroup"

const InputOTPSlot = React.forwardRef<
	React.ElementRef<"div">,
	React.ComponentPropsWithoutRef<"div"> & { index: number }
>(({ className, index, ...props }, ref) => {
	const context = React.useContext(OTPInputContext)
	const { char, hasFakeCaret, isActive } = context.slots[index]

	return (
		<div
			ref={ref}
			className={cn(
				"relative flex h-10 w-8 items-center justify-center rounded-md border bg-input text-sm shadow-sm transition-all",
				isActive && "z-50 outline-none ring-1 ring-ring",
				className
			)}
			{...props}
		>
			{char}
			{hasFakeCaret && (
				<div className="pointer-events-none absolute inset-0 flex items-center justify-center">
					<div className="h-4 w-px animate-blink bg-foreground duration-1000" />
				</div>
			)}
		</div>
	)
})
InputOTPSlot.displayName = "InputOTPSlot"

const InputOTPSeparator = React.forwardRef<
	React.ElementRef<"div">,
	React.ComponentPropsWithoutRef<"div">
>(({ className, children, ...props }, ref) => (
	<div
		ref={ref}
		className={cn("text-foreground [&_svg]:size-3", className)}
		role="separator"
		{...props}
	>
		{children || <MinusIcon />}
	</div>
))
InputOTPSeparator.displayName = "InputOTPSeparator"

export { InputOTP, InputOTPGroup, InputOTPSlot, InputOTPSeparator }
