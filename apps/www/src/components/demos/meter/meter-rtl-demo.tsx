"use client";

import {
	type Translations,
	useTranslation,
} from "@/components/language-selector";
import {
	Meter,
	MeterCircularIndicator,
	MeterCircularTrack,
	MeterIndicator,
	MeterLabel,
	MeterTrack,
	MeterValue,
} from "@/components/ui/meter";

const translations = {
	en: {
		storage: "Storage used",
		memory: "Memory used",
	},
	ar: {
		storage: "التخزين المستخدم",
		memory: "الذاكرة المستخدمة",
	},
	he: {
		storage: "אחסון בשימוש",
		memory: "זיכרון בשימוש",
	},
} satisfies Translations<Record<string, string>>;

export default function MeterRtlDemo() {
	const { t } = useTranslation(translations);

	return (
		<div className="flex w-full max-w-80 flex-col gap-6">
			<Meter value={75}>
				<MeterLabel>{t.storage}</MeterLabel>
				<MeterValue />
				<MeterTrack>
					<MeterIndicator />
				</MeterTrack>
			</Meter>
			<Meter className="flex items-center" value={40}>
				<MeterCircularTrack>
					<MeterCircularIndicator />
				</MeterCircularTrack>
				<MeterLabel>{t.memory}</MeterLabel>
				<MeterValue />
			</Meter>
		</div>
	);
}
