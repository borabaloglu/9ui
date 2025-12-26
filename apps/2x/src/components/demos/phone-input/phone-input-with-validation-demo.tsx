"use client"

import { useState } from "react"
import { isValidPhoneNumber } from "react-phone-number-input"

import { PhoneInput } from "@/components/ui/phone-input"

export default function PhoneInputWithValidationDemo() {
	const [phoneNumber, setPhoneNumber] = useState<string>()
	const [error, setError] = useState<string>()

	const handleChange = (value: string | undefined) => {
		setPhoneNumber(value)
		if (value && !isValidPhoneNumber(value)) {
			setError("Please enter a valid phone number")
		} else {
			setError(undefined)
		}
	}

	return (
		<div className="w-[300px] space-y-2">
			<PhoneInput
				value={phoneNumber}
				onChange={handleChange}
				placeholder="Enter a phone number"
				aria-invalid={!!error}
			/>
			{error && <p className="text-destructive text-sm">{error}</p>}
			{phoneNumber && !error && (
				<p className="text-muted-foreground text-sm">
					Valid phone number entered
				</p>
			)}
		</div>
	)
}
