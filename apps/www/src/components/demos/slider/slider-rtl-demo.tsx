"use client";

import {
	type Translations,
	useTranslation,
} from "@/components/language-selector";
import { Slider, SliderLabel, SliderValue } from "@/components/ui/slider";

const translations = {
	en: {
		opacity: "Opacity",
	},
	ar: {
		opacity: "الشفافية",
	},
	he: {
		opacity: "אטימות",
	},
} satisfies Translations<Record<string, string>>;

export default function SliderRtlDemo() {
	const { t } = useTranslation(translations);

	return (
		<Slider className="max-w-60" defaultValue={50}>
			<SliderLabel>{t.opacity}</SliderLabel>
			<SliderValue />
		</Slider>
	);
}
