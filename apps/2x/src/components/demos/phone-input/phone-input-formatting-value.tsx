"use client"

import { useState } from "react"
import {
	Country,
	formatPhoneNumber,
	formatPhoneNumberIntl,
	getCountryCallingCode,
} from "react-phone-number-input"

import { PhoneInput } from "@/components/ui/phone-input"

export default function PhoneInputFormattingValue() {
	const [phoneNumber, setPhoneNumber] = useState<string>()
	const [country, setCountry] = useState<Country>()

	return (
		<div className="w-[300px] space-y-4">
			<PhoneInput
				value={phoneNumber}
				onChange={setPhoneNumber}
				onCountryChange={setCountry}
				placeholder="Enter a phone number"
			/>
			<div className="space-y-2 text-sm">
				<div>
					<span className="font-semibold">National:</span>{" "}
					{phoneNumber && formatPhoneNumber(phoneNumber)}
				</div>
				<div>
					<span className="font-semibold">International:</span>{" "}
					{phoneNumber && formatPhoneNumberIntl(phoneNumber)}
				</div>
				<div>
					<span className="font-semibold">Country code:</span>{" "}
					{country && getCountryCallingCode(country)}
				</div>
			</div>
		</div>
	)
}
