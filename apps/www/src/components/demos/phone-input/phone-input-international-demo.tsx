"use client";

import { useState } from "react";

import { PhoneInput } from "@/components/ui/phone-input";

export default function PhoneInputInternationalDemo() {
	const [phoneNumber, setPhoneNumber] = useState<string>();

	return (
		<PhoneInput
			aria-label="Phone number"
			className="max-w-xs"
			placeholder="Enter a phone number"
			defaultCountry="TR"
			international
			value={phoneNumber}
			onChange={setPhoneNumber}
		/>
	);
}
