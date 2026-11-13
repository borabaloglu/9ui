"use client";

import { useState } from "react";
import {
	type Country,
	formatPhoneNumber,
	formatPhoneNumberIntl,
	getCountryCallingCode,
} from "react-phone-number-input";

import { PhoneInput } from "@/components/ui/phone-input";

export default function PhoneInputFormattingValueDemo() {
	const [phoneNumber, setPhoneNumber] = useState<string>();
	const [country, setCountry] = useState<Country>();

	return (
		<div className="w-full max-w-xs space-y-4">
			<PhoneInput
				aria-label="Phone number"
				placeholder="Enter a phone number"
				value={phoneNumber}
				onChange={setPhoneNumber}
				onCountryChange={setCountry}
			/>
			<div className="space-y-2 text-sm">
				<div>
					<span className="font-semibold">National:</span>{" "}
					{phoneNumber ? (
						formatPhoneNumber(phoneNumber)
					) : (
						<span className="text-muted-foreground">Enter a phone number</span>
					)}
				</div>
				<div>
					<span className="font-semibold">International:</span>{" "}
					{phoneNumber ? (
						formatPhoneNumberIntl(phoneNumber)
					) : (
						<span className="text-muted-foreground">Enter a phone number</span>
					)}
				</div>
				<div>
					<span className="font-semibold">Country code:</span>{" "}
					{country && `+${getCountryCallingCode(country)}`}
				</div>
			</div>
		</div>
	);
}
