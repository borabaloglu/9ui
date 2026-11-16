"use client";

import {
	type Translations,
	useTranslation,
} from "@/components/language-selector";
import {
	Field,
	FieldDescription,
	FieldError,
	FieldLabel,
} from "@/components/ui/field";
import { Textarea } from "@/components/ui/textarea";

const translations = {
	en: {
		message: "Message",
		messagePlaceholder: "How can we help?",
		messageDescription: "We reply within one business day.",
		messageError: "Enter a message.",
	},
	ar: {
		message: "الرسالة",
		messagePlaceholder: "كيف يمكننا مساعدتك؟",
		messageDescription: "نرد خلال يوم عمل واحد.",
		messageError: "أدخل رسالة.",
	},
	he: {
		message: "הודעה",
		messagePlaceholder: "איך נוכל לעזור?",
		messageDescription: "נחזור אליך תוך יום עסקים אחד.",
		messageError: "יש להזין הודעה.",
	},
} satisfies Translations<Record<string, string>>;

export default function TextareaRtlDemo() {
	const { t } = useTranslation(translations);

	return (
		<Field name="message" validationMode="onBlur" className="max-w-sm">
			<FieldLabel>{t.message}</FieldLabel>
			<Textarea placeholder={t.messagePlaceholder} required />
			<FieldDescription>{t.messageDescription}</FieldDescription>
			<FieldError match="valueMissing">{t.messageError}</FieldError>
		</Field>
	);
}
