"use client";

import {
	type Translations,
	useTranslation,
} from "@/components/language-selector";
import {
	Meter,
	MeterIndicator,
	MeterLabel,
	MeterTrack,
	MeterValue,
} from "@/components/ui/meter";

const translations = {
	en: {
		storage: "Storage used",
	},
	ar: {
		storage: "التخزين المستخدم",
	},
	he: {
		storage: "אחסון בשימוש",
	},
} satisfies Translations<Record<string, string>>;

export default function MeterRtlDemo() {
	const { t } = useTranslation(translations);

	return (
		<Meter className="max-w-80" value={75}>
			<MeterLabel>{t.storage}</MeterLabel>
			<MeterValue />
			<MeterTrack>
				<MeterIndicator />
			</MeterTrack>
		</Meter>
	);
}
