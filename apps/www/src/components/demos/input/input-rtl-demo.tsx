"use client";

import {
	type Translations,
	useTranslation,
} from "@/components/language-selector";
import { Input } from "@/components/ui/input";

const translations = {
	en: {
		name: "Name",
	},
	ar: {
		name: "الاسم",
	},
	he: {
		name: "שם",
	},
} satisfies Translations<Record<string, string>>;

export default function InputRtlDemo() {
	const { t } = useTranslation(translations);

	return (
		<Input aria-label={t.name} placeholder={t.name} className="max-w-sm" />
	);
}
