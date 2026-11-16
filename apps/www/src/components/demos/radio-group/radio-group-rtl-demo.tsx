"use client";

import { useId } from "react";

import {
	type Translations,
	useTranslation,
} from "@/components/language-selector";
import { Label } from "@/components/ui/label";
import {
	Radio,
	RadioGroup,
	RadioGroupLabel,
} from "@/components/ui/radio-group";

const translations = {
	en: {
		plan: "Plan",
		basic: "Basic",
		standard: "Standard",
		premium: "Premium",
	},
	ar: {
		plan: "الباقة",
		basic: "الأساسية",
		standard: "القياسية",
		premium: "المميزة",
	},
	he: {
		plan: "תוכנית",
		basic: "בסיסית",
		standard: "רגילה",
		premium: "פרימיום",
	},
} satisfies Translations<Record<string, string>>;

const plans = ["basic", "standard", "premium"] as const;

export default function RadioGroupRtlDemo() {
	const { t } = useTranslation(translations);
	const id = useId();

	return (
		<RadioGroup aria-labelledby={id} defaultValue="standard">
			<RadioGroupLabel id={id}>{t.plan}</RadioGroupLabel>
			{plans.map((plan) => (
				<Label key={plan} className="font-normal">
					<Radio value={plan} />
					{t[plan]}
				</Label>
			))}
		</RadioGroup>
	);
}
