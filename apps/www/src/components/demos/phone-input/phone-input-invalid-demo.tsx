"use client";

import { useState } from "react";
import { isValidPhoneNumber } from "react-phone-number-input";

import { Field, FieldError, FieldLabel } from "@/components/ui/field";
import { PhoneInput } from "@/components/ui/phone-input";

export default function PhoneInputInvalidDemo() {
	const [phoneNumber, setPhoneNumber] = useState<string>("+90532");
	const invalid = !isValidPhoneNumber(phoneNumber);

	return (
		<Field name="phoneNumber" invalid={invalid} className="max-w-xs">
			<FieldLabel>Phone number</FieldLabel>
			<PhoneInput
				placeholder="Enter a phone number"
				defaultCountry="TR"
				value={phoneNumber}
				onChange={setPhoneNumber}
			/>
			<div className="min-h-lh text-sm leading-normal">
				<FieldError match={invalid}>Enter a valid phone number.</FieldError>
			</div>
		</Field>
	);
}
