"use client"

import { useState } from "react"
import tr from "react-phone-number-input/locale/tr"

import { PhoneInput } from "@/components/ui/phone-input"

export default function PhoneInputInternationalization() {
	const [phoneNumber, setPhoneNumber] = useState<string>()

	return (
		<div className="w-[300px]">
			<PhoneInput
				value={phoneNumber}
				onChange={setPhoneNumber}
				labels={tr}
				defaultCountry="TR"
				placeholder="Telefon numarası"
			/>
		</div>
	)
}
