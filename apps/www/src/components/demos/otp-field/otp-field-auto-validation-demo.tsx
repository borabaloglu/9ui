"use client";

import { useState } from "react";

import { Field, FieldError, FieldLabel } from "@/components/ui/field";
import { OTPField, OTPFieldInput } from "@/components/ui/otp-field";

const LENGTH = 6;
const CODE = "123456";

export default function OTPFieldAutoValidationDemo() {
	const [value, setValue] = useState("");

	const complete = value.length === LENGTH;
	const invalid = complete && value !== CODE;

	return (
		<Field name="code" invalid={invalid} className="w-fit">
			<FieldLabel>Verification code</FieldLabel>
			<OTPField length={LENGTH} value={value} onValueChange={setValue}>
				{Array.from({ length: LENGTH }, (_, index) => (
					<OTPFieldInput
						key={index}
						aria-label={`Character ${index + 1} of ${LENGTH}`}
					/>
				))}
			</OTPField>
			<div className="min-h-lh text-sm leading-normal text-nowrap contain-inline-size">
				{!complete && (
					<p className="text-muted-foreground">Enter 123456 to pass.</p>
				)}
				{complete && !invalid && <p className="text-success">Code verified.</p>}
				<FieldError match={invalid}>That code is incorrect.</FieldError>
			</div>
		</Field>
	);
}
