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
		if (!phoneNumber || !isValidPhoneNumber(phoneNumber)) {
			setInvalid(true);
			return;
		}

		console.log("Submitted:", phoneNumber);
	};

	return (
		<Form className="w-[300px]" onFormSubmit={handleSubmit}>
			<Field name="phoneNumber" invalid={invalid}>
				<FieldLabel>Phone Number</FieldLabel>
				<PhoneInput
					value={phoneNumber}
					onChange={(value) => {
						setPhoneNumber(value ?? "");
						setInvalid(false);
					}}
					placeholder="Enter a phone number"
					aria-invalid={invalid}
				/>
				<FieldError match={invalid}>Invalid phone number</FieldError>
			</Field>
			<Button type="submit">Submit</Button>
		</Form>
	);
}
