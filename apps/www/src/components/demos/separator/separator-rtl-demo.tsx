"use client";

import {
	type Translations,
	useTranslation,
} from "@/components/language-selector";
import { Separator } from "@/components/ui/separator";

const translations = {
	en: {
		description: "Copy-Paste Components That Adapt to Your Design",
		home: "Home",
		projects: "Projects",
		settings: "Settings",
	},
	ar: {
		description: "مكونات جاهزة للنسخ تتكيف مع تصميمك",
		home: "الرئيسية",
		projects: "المشاريع",
		settings: "الإعدادات",
	},
	he: {
		description: "רכיבים להעתקה שמתאימים את עצמם לעיצוב שלך",
		home: "דף הבית",
		projects: "פרויקטים",
		settings: "הגדרות",
	},
} satisfies Translations<Record<string, string>>;

export default function SeparatorRtlDemo() {
	const { t } = useTranslation(translations);

	return (
		<div className="flex max-w-sm flex-col gap-3 text-sm">
			<div className="flex flex-col gap-1.5">
				<div className="leading-none font-medium">9ui</div>
				<div className="text-muted-foreground">{t.description}</div>
			</div>
			<Separator />
			<div className="flex h-5 items-center gap-3">
				<span>{t.home}</span>
				<Separator orientation="vertical" />
				<span>{t.projects}</span>
				<Separator orientation="vertical" />
				<span>{t.settings}</span>
			</div>
		</div>
	);
}
