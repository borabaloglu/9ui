"use client"

import { Button } from "@/components/ui/button"
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card"
import {
	InputOTP,
	InputOTPGroup,
	InputOTPSeparator,
	InputOTPSlot,
} from "@/components/ui/input-otp"

export function OTPCard() {
	return (
		<Card className="size-full">
			<CardHeader>
				<CardTitle>Verify Your Email</CardTitle>
				<CardDescription>
					We sent a verification code to your email. Please enter the code
					below.
				</CardDescription>
			</CardHeader>
			<CardContent>
				<InputOTP
					containerClassName="w-fit mx-auto [&_*[data-slot=input-otp-slot]]:h-12 [&_*[data-slot=input-otp-slot]]:w-10 [&_*[data-slot=input-otp-slot]]:text-lg"
					maxLength={6}
				>
					<InputOTPGroup>
						<InputOTPSlot index={0} />
						<InputOTPSlot index={1} />
						<InputOTPSlot index={2} />
					</InputOTPGroup>
					<InputOTPSeparator />
					<InputOTPGroup>
						<InputOTPSlot index={3} />
						<InputOTPSlot index={4} />
						<InputOTPSlot index={5} />
					</InputOTPGroup>
				</InputOTP>
			</CardContent>
			<CardFooter className="flex-col gap-2">
				<Button className="w-full">Verify Email</Button>
				<Button variant="link" className="w-full">
					Resend Code
				</Button>
			</CardFooter>
		</Card>
	)
}
