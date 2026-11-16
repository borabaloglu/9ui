"use client";

import {
	type Translations,
	useTranslation,
} from "@/components/language-selector";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

const translations = {
	en: {
		formatting: "Text formatting",
		bold: "Bold",
		italic: "Italic",
		underline: "Underline",
	},
	ar: {
		formatting: "تنسيق النص",
		bold: "غامق",
		italic: "مائل",
		underline: "تسطير",
	},
	he: {
		formatting: "עיצוב טקסט",
		bold: "מודגש",
		italic: "נטוי",
		underline: "קו תחתון",
	},
} satisfies Translations<Record<string, string>>;

export default function ToggleGroupRtlDemo() {
	const { t } = useTranslation(translations);

	return (
		<ToggleGroup
			variant="outline"
			multiple
			defaultValue={["bold", "italic"]}
			aria-label={t.formatting}
		>
			<ToggleGroupItem value="bold">{t.bold}</ToggleGroupItem>
			<ToggleGroupItem value="italic">{t.italic}</ToggleGroupItem>
			<ToggleGroupItem value="underline">{t.underline}</ToggleGroupItem>
		</ToggleGroup>
	);
}
