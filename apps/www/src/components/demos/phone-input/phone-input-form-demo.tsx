"use client";

import { useState } from "react";
import { isValidPhoneNumber } from "react-phone-number-input";

import { Button } from "@/components/ui/button";
import { Field, FieldError, FieldLabel } from "@/components/ui/field";
import { Form } from "@/components/ui/form";
import { PhoneInput } from "@/components/ui/phone-input";

export default function PhoneInputFormDemo() {
	const [phoneNumber, setPhoneNumber] = useState("");
	const [invalid, setInvalid] = useState(false);

	const handleSubmit = () => {
		if (!isValidPhoneNumber(phoneNumber)) {
			setInvalid(true);
			return;
		}

		console.log("Submitted:", phoneNumber);
	};

	return (
		<Form className="max-w-xs" onFormSubmit={handleSubmit}>
			<Field name="phoneNumber" invalid={invalid}>
				<FieldLabel>Phone number</FieldLabel>
				<PhoneInput
					placeholder="Enter a phone number"
					value={phoneNumber}
					onChange={(value) => {
						setPhoneNumber(value);
						setInvalid(false);
					}}
				/>
				<FieldError match={invalid}>Enter a valid phone number.</FieldError>
			</Field>
			<Button type="submit" className="self-start">
				Submit
			</Button>
		</Form>
	);
}
