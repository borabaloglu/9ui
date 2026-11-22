"use client";

import { useState } from "react";

import { Field, FieldDescription, FieldLabel } from "@/components/ui/field";
import { PhoneInput } from "@/components/ui/phone-input";

export default function PhoneInputFieldDemo() {
	const [phoneNumber, setPhoneNumber] = useState<string>();

	return (
		<Field name="phoneNumber" className="max-w-xs">
			<FieldLabel>Phone number</FieldLabel>
			<PhoneInput
				placeholder="Enter a phone number"
				value={phoneNumber}
				onChange={setPhoneNumber}
			/>
			<FieldDescription>We only use it for delivery updates.</FieldDescription>
		</Field>
	);
}
