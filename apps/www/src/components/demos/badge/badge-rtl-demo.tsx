"use client";

import { ArrowRightIcon, StarIcon } from "lucide-react";

import {
	type Translations,
	useTranslation,
} from "@/components/language-selector";
import { Badge } from "@/components/ui/badge";

const translations = {
	en: { badge: "Badge", startIcon: "Start Icon", endIcon: "End Icon" },
	ar: {
		badge: "شارة",
		startIcon: "أيقونة في البداية",
		endIcon: "أيقونة في النهاية",
	},
	he: { badge: "תג", startIcon: "סמל בהתחלה", endIcon: "סמל בסוף" },
} satisfies Translations<Record<string, string>>;

export default function BadgeRtlDemo() {
	const { t } = useTranslation(translations);

	return (
		<div className="flex flex-wrap items-center justify-center gap-2">
			<Badge>{t.badge}</Badge>
			<Badge>
				<StarIcon data-icon="inline-start" />
				{t.startIcon}
			</Badge>
			<Badge variant="secondary">
				{t.endIcon}
				<ArrowRightIcon data-icon="inline-end" className="rtl:rotate-180" />
			</Badge>
		</div>
	);
}
