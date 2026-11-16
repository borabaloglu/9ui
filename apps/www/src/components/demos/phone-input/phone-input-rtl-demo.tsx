"use client";

import { useState } from "react";
import ar from "react-phone-number-input/locale/ar";
import en from "react-phone-number-input/locale/en";
import he from "react-phone-number-input/locale/he";

import {
	type Translations,
	useTranslation,
} from "@/components/language-selector";
import { PhoneInput } from "@/components/ui/phone-input";

const translations = {
	en: {
		phone: "Phone number",
		placeholder: "Enter a phone number",
		search: "Search countries",
		empty: "No countries found.",
	},
	ar: {
		phone: "رقم الهاتف",
		placeholder: "أدخل رقم الهاتف",
		search: "ابحث عن دولة",
		empty: "لم يتم العثور على دولة.",
	},
	he: {
		phone: "מספר טלפון",
		placeholder: "הזינו מספר טלפון",
		search: "חיפוש מדינה",
		empty: "לא נמצאו מדינות.",
	},
} satisfies Translations<Record<string, string>>;

const locales = { en, ar, he };

const defaultCountries = { en: "US", ar: "SA", he: "IL" } as const;

export default function PhoneInputRtlDemo() {
	const { dir, language, t } = useTranslation(translations);
	const [phoneNumber, setPhoneNumber] = useState<string>();

	return (
		<PhoneInput
			key={language}
			dir={dir}
			aria-label={t.phone}
			className="max-w-xs"
			placeholder={t.placeholder}
			defaultCountry={defaultCountries[language]}
			labels={locales[language]}
			searchPlaceholder={t.search}
			emptyMessage={t.empty}
			value={phoneNumber}
			onChange={setPhoneNumber}
		/>
	);
}
