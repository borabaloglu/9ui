"use client";

import { useState } from "react";
import { ArrowRightIcon, PlayIcon, PlusIcon } from "lucide-react";

import {
	type Translations,
	useTranslation,
} from "@/components/language-selector";
import { Button } from "@/components/ui/button";

const translations = {
	en: {
		button: "Button",
		icon: "Icon",
		startIcon: "Start Icon",
		endIcon: "End Icon",
		loading: "Loading",
	},
	ar: {
		button: "زر",
		icon: "أيقونة",
		startIcon: "أيقونة في البداية",
		endIcon: "أيقونة في النهاية",
		loading: "جارٍ التحميل",
	},
	he: {
		button: "כפתור",
		icon: "סמל",
		startIcon: "סמל בהתחלה",
		endIcon: "סמל בסוף",
		loading: "טוען",
	},
} satisfies Translations<Record<string, string>>;

export default function ButtonRtlDemo() {
	const { t } = useTranslation(translations);
	const [loading, setLoading] = useState(false);

	const handleClick = () => {
		setLoading(true);
		setTimeout(() => setLoading(false), 2000);
	};

	return (
		<div className="flex flex-wrap items-center justify-center gap-2">
			<Button>{t.button}</Button>
			<Button variant="outline" size="icon" aria-label={t.icon}>
				<PlusIcon />
			</Button>
			<Button variant="outline">
				<PlayIcon data-icon="inline-start" />
				{t.startIcon}
			</Button>
			<Button variant="outline">
				{t.endIcon}
				<ArrowRightIcon data-icon="inline-end" className="rtl:rotate-180" />
			</Button>
			<Button loading={loading} onClick={handleClick}>
				{t.loading}
			</Button>
		</div>
	);
}
