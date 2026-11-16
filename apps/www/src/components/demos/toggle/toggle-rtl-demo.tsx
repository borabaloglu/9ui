"use client";

import { BookmarkIcon } from "lucide-react";

import {
	type Translations,
	useTranslation,
} from "@/components/language-selector";
import { Toggle } from "@/components/ui/toggle";

const translations = {
	en: {
		bookmark: "Bookmark",
	},
	ar: {
		bookmark: "حفظ في المفضلة",
	},
	he: {
		bookmark: "סימנייה",
	},
} satisfies Translations<Record<string, string>>;

export default function ToggleRtlDemo() {
	const { t } = useTranslation(translations);

	return (
		<Toggle variant="outline">
			<BookmarkIcon className="group-data-pressed/toggle:fill-current" />
			{t.bookmark}
		</Toggle>
	);
}
