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
				<InputOTP maxLength={8} className="gap-2">
					<InputOTPGroup className="mx-auto">
						<InputOTPSlot className="h-12 w-10 text-lg" index={0} />
						<InputOTPSlot className="h-12 w-10 text-lg" index={1} />
						<InputOTPSlot className="h-12 w-10 text-lg" index={2} />
						<InputOTPSeparator />
						<InputOTPSlot className="h-12 w-10 text-lg" index={3} />
						<InputOTPSlot className="h-12 w-10 text-lg" index={4} />
						<InputOTPSlot className="h-12 w-10 text-lg" index={5} />
					</InputOTPGroup>
				</InputOTP>
			</CardContent>
			<CardFooter className="flex flex-col gap-2">
				<Button className="w-full">Verify Email</Button>
				<Button variant="link" className="text-sm">
					Resend Code
				</Button>
			</CardFooter>
		</Card>
	)
}
