"use client";

import { useId } from "react";

import {
	type Translations,
	useTranslation,
} from "@/components/language-selector";
import { Label } from "@/components/ui/label";
import {
	OTPField,
	OTPFieldInput,
	OTPFieldSeparator,
} from "@/components/ui/otp-field";

const LENGTH = 6;

const translations = {
	en: {
		label: "Verification code",
		character: "Character {index} of {length}",
	},
	ar: {
		label: "رمز التحقق",
		character: "الخانة {index} من {length}",
	},
	he: {
		label: "קוד אימות",
		character: "תו {index} מתוך {length}",
	},
} satisfies Translations<Record<string, string>>;

export default function OTPFieldRtlDemo() {
	const { t } = useTranslation(translations);
	const id = useId();

	const characterLabel = (index: number) =>
		t.character
			.replace("{index}", String(index))
			.replace("{length}", String(LENGTH));

	return (
		<div className="flex flex-col gap-2">
			<Label htmlFor={id}>{t.label}</Label>
			<OTPField id={id} length={LENGTH}>
				{Array.from({ length: 3 }, (_, index) => (
					<OTPFieldInput key={index} aria-label={characterLabel(index + 1)} />
				))}
				<OTPFieldSeparator />
				{Array.from({ length: 3 }, (_, index) => (
					<OTPFieldInput
						key={index + 3}
						aria-label={characterLabel(index + 4)}
					/>
				))}
			</OTPField>
		</div>
	);
}
