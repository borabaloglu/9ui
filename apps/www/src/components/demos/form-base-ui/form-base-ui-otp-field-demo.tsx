"use client";

import { useState } from "react";
import type { Form as FormPrimitive } from "@base-ui/react/form";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import {
	Field,
	FieldDescription,
	FieldError,
	FieldLabel,
} from "@/components/ui/field";
import { Form } from "@/components/ui/form";
import { OTPField, OTPFieldInput } from "@/components/ui/otp-field";

const LENGTH = 6;

export default function FormBaseUiOTPFieldDemo() {
	const [loading, setLoading] = useState(false);
	const [formKey, setFormKey] = useState(0);

	const handleSubmit = async (values: FormPrimitive.Values) => {
		setLoading(true);
		await new Promise((resolve) => setTimeout(resolve, 500));
		setLoading(false);

		toast("You submitted the following values:", {
			description: (
				<pre className="bg-muted text-foreground mt-2 overflow-x-auto rounded-md p-3">
					<code>{JSON.stringify(values, null, 2)}</code>
				</pre>
			),
		});
	};

	return (
		<Card className="w-full max-w-sm">
			<CardHeader>
				<CardTitle>Sign in</CardTitle>
				<CardDescription>
					Sign in to your account with a one-time password.
				</CardDescription>
			</CardHeader>
			<CardContent>
				<Form
					onFormSubmit={handleSubmit}
					key={formKey}
					onReset={(event) => {
						event.preventDefault();
						setFormKey((k) => k + 1);
					}}
				>
					<Field name="otp">
						<FieldLabel>One-time password</FieldLabel>
						<OTPField length={LENGTH} required>
							{Array.from({ length: LENGTH }, (_, index) => (
								<OTPFieldInput
									key={index}
									aria-label={`Character ${index + 1} of ${LENGTH}`}
								/>
							))}
						</OTPField>
						<FieldDescription>
							Enter the 6-digit code sent to your device.
						</FieldDescription>
						<FieldError match="valueMissing">Code is required.</FieldError>
						<FieldError match="patternMismatch">
							Code must be 6 digits.
						</FieldError>
					</Field>
					<div className="flex gap-2">
						<Button disabled={loading} type="reset" variant="outline">
							Reset
						</Button>
						<Button loading={loading} type="submit">
							Verify
						</Button>
					</div>
				</Form>
			</CardContent>
		</Card>
	);
}
