"use client";

import {
	type Translations,
	useTranslation,
} from "@/components/language-selector";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const translations = {
	en: { label: "Aspect Ratio" },
	ar: { label: "نسبة العرض إلى الارتفاع" },
	he: { label: "יחס גובה-רוחב" },
} satisfies Translations<Record<string, string>>;

export default function AspectRatioRtlDemo() {
	const { t } = useTranslation(translations);

	return (
		<AspectRatio
			ratio={16 / 9}
			className="bg-muted w-full max-w-xs rounded-xl border"
		>
			<div className="flex size-full flex-col items-center justify-center gap-1">
				<span dir="ltr" className="text-xl font-medium tabular-nums">
					16 : 9
				</span>
				<span className="text-muted-foreground text-sm">{t.label}</span>
			</div>
		</AspectRatio>
	);
}
