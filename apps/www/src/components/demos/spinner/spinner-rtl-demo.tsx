"use client";

import {
	type Translations,
	useTranslation,
} from "@/components/language-selector";
import { Spinner } from "@/components/ui/spinner";

const translations = {
	en: { loading: "Loading" },
	ar: { loading: "جارٍ التحميل" },
	he: { loading: "טוען" },
} satisfies Translations<Record<string, string>>;

export default function SpinnerRtlDemo() {
	const { t } = useTranslation(translations);

	return (
		<div className="text-muted-foreground flex items-center gap-2 text-sm">
			<Spinner aria-hidden />
			{t.loading}
		</div>
	);
}
