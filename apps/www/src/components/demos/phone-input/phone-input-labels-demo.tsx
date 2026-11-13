"use client";

import { useState } from "react";
import tr from "react-phone-number-input/locale/tr";

import { PhoneInput } from "@/components/ui/phone-input";

export default function PhoneInputLabelsDemo() {
	const [phoneNumber, setPhoneNumber] = useState<string>();

	return (
		<PhoneInput
			aria-label="Telefon numarası"
			className="max-w-xs"
			placeholder="Telefon numarası"
			defaultCountry="TR"
			labels={tr}
			searchPlaceholder="Ülke ara"
			emptyMessage="Ülke bulunamadı."
			value={phoneNumber}
			onChange={setPhoneNumber}
		/>
	);
}
