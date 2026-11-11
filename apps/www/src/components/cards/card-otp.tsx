"use client";

import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import {
	OTPField,
	OTPFieldInput,
	OTPFieldSeparator,
} from "@/components/ui/otp-field";

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
				<OTPField
					length={6}
					size="lg"
					aria-label="Verification code"
					className="mx-auto w-fit"
				>
					<OTPFieldInput />
					<OTPFieldInput aria-label="Character 2 of 6" />
					<OTPFieldInput aria-label="Character 3 of 6" />
					<OTPFieldSeparator />
					<OTPFieldInput aria-label="Character 4 of 6" />
					<OTPFieldInput aria-label="Character 5 of 6" />
					<OTPFieldInput aria-label="Character 6 of 6" />
				</OTPField>
			</CardContent>
			<CardFooter className="flex-col gap-2">
				<Button className="w-full">Verify Email</Button>
				<Button variant="link" className="w-full">
					Resend Code
				</Button>
			</CardFooter>
		</Card>
	);
}
