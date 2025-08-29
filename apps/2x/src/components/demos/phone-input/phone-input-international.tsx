"use client"

import { useState } from "react"

import { PhoneInput } from "@/components/ui/phone-input"

export default function PhoneInputInternational() {
	const [phoneNumber, setPhoneNumber] = useState<string>()

	return (
		<div className="w-[300px]">
			<PhoneInput
				value={phoneNumber}
				onChange={setPhoneNumber}
				international
				defaultCountry="TR"
				placeholder="Enter a phone number"
			/>
		</div>
	)
}
