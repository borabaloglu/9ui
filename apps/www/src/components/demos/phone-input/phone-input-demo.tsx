"use client";

import { useState } from "react";

import { PhoneInput } from "@/components/ui/phone-input";

export default function PhoneInputDemo() {
	const [phoneNumber, setPhoneNumber] = useState<string>();

	return (
		<PhoneInput
			aria-label="Phone number"
			className="max-w-xs"
			placeholder="Enter a phone number"
			value={phoneNumber}
			onChange={setPhoneNumber}
		/>
	);
}
