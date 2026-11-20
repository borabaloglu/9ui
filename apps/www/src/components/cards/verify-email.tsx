"use client";

import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import {
	OTPField,
	OTPFieldInput,
	OTPFieldSeparator,
} from "@/components/ui/otp-field";

export function VerifyEmailCard() {
	return (
		<Card>
			<CardHeader>
				<CardTitle>Verify your email</CardTitle>
				<CardDescription>
					Enter the 6-digit code we sent to bora@9ui.dev.
				</CardDescription>
			</CardHeader>
			<CardContent className="flex flex-col gap-4">
				<OTPField length={6} aria-label="Verification code" className="mx-auto">
					<OTPFieldInput />
					<OTPFieldInput aria-label="Character 2 of 6" />
					<OTPFieldInput aria-label="Character 3 of 6" />
					<OTPFieldSeparator />
					<OTPFieldInput aria-label="Character 4 of 6" />
					<OTPFieldInput aria-label="Character 5 of 6" />
					<OTPFieldInput aria-label="Character 6 of 6" />
				</OTPField>
				<Button>Verify email</Button>
				<p className="text-muted-foreground -mt-2 text-center text-xs">
					Didn&apos;t get a code?{" "}
					<button
						type="button"
						className="text-foreground focus-visible:ring-ring/50 cursor-pointer rounded-sm underline underline-offset-2 outline-none focus-visible:ring-3"
					>
						Resend
					</button>
				</p>
			</CardContent>
		</Card>
	);
}
