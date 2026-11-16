"use client";

import { useId } from "react";

import {
	type Translations,
	useTranslation,
} from "@/components/language-selector";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const translations = {
	en: {
		email: "Email",
		terms: "Accept terms and conditions",
	},
	ar: {
		email: "البريد الإلكتروني",
		terms: "أوافق على الشروط والأحكام",
	},
	he: {
		email: "אימייל",
		terms: "אישור התנאים וההגבלות",
	},
} satisfies Translations<Record<string, string>>;

export default function LabelRtlDemo() {
	const { t } = useTranslation(translations);
	const id = useId();

	return (
		<div className="flex w-full max-w-64 flex-col gap-6">
			<div className="flex flex-col gap-2">
				<Label htmlFor={id}>{t.email}</Label>
				<Input id={id} type="email" placeholder="you@example.com" />
			</div>
			<Label>
				<Checkbox />
				{t.terms}
			</Label>
		</div>
	);
}
