"use client";

import {
	type Translations,
	useTranslation,
} from "@/components/language-selector";
import { Textarea } from "@/components/ui/textarea";

const translations = {
	en: {
		message: "Message",
		messagePlaceholder: "How can we help?",
	},
	ar: {
		message: "الرسالة",
		messagePlaceholder: "كيف يمكننا مساعدتك؟",
	},
	he: {
		message: "הודעה",
		messagePlaceholder: "איך נוכל לעזור?",
	},
} satisfies Translations<Record<string, string>>;

export default function TextareaRtlDemo() {
	const { t } = useTranslation(translations);

	return (
		<Textarea
			aria-label={t.message}
			className="max-w-sm"
			placeholder={t.messagePlaceholder}
		/>
	);
}
