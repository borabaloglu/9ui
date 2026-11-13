"use client";

import { useState } from "react";

import { PhoneInput } from "@/components/ui/phone-input";

export default function PhoneInputInitialValueFormatDemo() {
	const [phoneNumber, setPhoneNumber] = useState<string>("+12133734253");

	return (
		<PhoneInput
			aria-label="Phone number"
			className="max-w-xs"
			placeholder="Enter a phone number"
			initialValueFormat="national"
			value={phoneNumber}
			onChange={setPhoneNumber}
		/>
	);
}
