"use client";

import { useEffect, useState } from "react";

import {
	type Translations,
	useTranslation,
} from "@/components/language-selector";
import {
	Progress,
	ProgressCircularIndicator,
	ProgressCircularTrack,
	ProgressIndicator,
	ProgressLabel,
	ProgressTrack,
	ProgressValue,
} from "@/components/ui/progress";

const translations = {
	en: {
		exporting: "Exporting data",
		preparing: "Preparing export",
		uploading: "Uploading files",
	},
	ar: {
		exporting: "جارٍ تصدير البيانات",
		preparing: "جارٍ تجهيز التصدير",
		uploading: "جارٍ رفع الملفات",
	},
	he: {
		exporting: "מייצא נתונים",
		preparing: "מכין ייצוא",
		uploading: "מעלה קבצים",
	},
} satisfies Translations<Record<string, string>>;

export default function ProgressRtlDemo() {
	const { t } = useTranslation(translations);
	const [value, setValue] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setValue((prev) => (prev === 100 ? 100 : prev + 2));
		}, 100);
		return () => clearInterval(interval);
	}, []);

	return (
		<div className="flex w-full max-w-80 flex-col gap-6">
			<Progress value={value}>
				<ProgressLabel>{t.exporting}</ProgressLabel>
				<ProgressValue />
				<ProgressTrack>
					<ProgressIndicator />
				</ProgressTrack>
			</Progress>
			<Progress value={null}>
				<ProgressLabel>{t.preparing}</ProgressLabel>
				<ProgressTrack>
					<ProgressIndicator />
				</ProgressTrack>
			</Progress>
			<Progress className="flex items-center" value={value}>
				<ProgressCircularTrack>
					<ProgressCircularIndicator />
				</ProgressCircularTrack>
				<ProgressLabel>{t.uploading}</ProgressLabel>
				<ProgressValue />
			</Progress>
		</div>
	);
}
