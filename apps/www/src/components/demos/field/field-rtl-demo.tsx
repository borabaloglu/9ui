"use client";

import {
	type Translations,
	useTranslation,
} from "@/components/language-selector";
import { Checkbox } from "@/components/ui/checkbox";
import {
	Field,
	FieldDescription,
	FieldError,
	FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";

const translations = {
	en: {
		username: "Username",
		usernameDescription: "Your public display name.",
		usernameError: "Enter a username.",
		notifications: "Email notifications",
		terms: "Accept terms and conditions",
	},
	ar: {
		username: "اسم المستخدم",
		usernameDescription: "اسمك الظاهر للجميع.",
		usernameError: "أدخل اسم المستخدم.",
		notifications: "إشعارات البريد الإلكتروني",
		terms: "أوافق على الشروط والأحكام",
	},
	he: {
		username: "שם משתמש",
		usernameDescription: "השם הציבורי שלך.",
		usernameError: "יש להזין שם משתמש.",
		notifications: "התראות באימייל",
		terms: "אישור התנאים וההגבלות",
	},
} satisfies Translations<Record<string, string>>;

export default function FieldRtlDemo() {
	const { t } = useTranslation(translations);

	return (
		<div className="flex w-full max-w-xs flex-col gap-6">
			<Field name="username" validationMode="onBlur">
				<FieldLabel>{t.username}</FieldLabel>
				<Input placeholder="sara_ahmed" required />
				<FieldDescription>{t.usernameDescription}</FieldDescription>
				<FieldError match="valueMissing">{t.usernameError}</FieldError>
			</Field>
			<Field name="notifications" orientation="horizontal">
				<Switch defaultChecked />
				<FieldLabel>{t.notifications}</FieldLabel>
			</Field>
			<Field name="terms" orientation="horizontal">
				<Checkbox />
				<FieldLabel>{t.terms}</FieldLabel>
			</Field>
		</div>
	);
}
