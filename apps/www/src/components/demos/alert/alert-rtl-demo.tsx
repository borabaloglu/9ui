"use client";

import { CircleAlertIcon, InfoIcon } from "lucide-react";

import {
	type Translations,
	useTranslation,
} from "@/components/language-selector";
import {
	Alert,
	AlertAction,
	AlertDescription,
	AlertTitle,
} from "@/components/ui/alert";
import { Button } from "@/components/ui/button";

const translations = {
	en: {
		basicTitle: "Basic Alert",
		basicDescription: "An icon, a title and a short description.",
		actionTitle: "Alert with Action",
		actionDescription: "The action sits at the end of the alert.",
		action: "Action",
	},
	ar: {
		basicTitle: "تنبيه أساسي",
		basicDescription: "أيقونة وعنوان ووصف قصير.",
		actionTitle: "تنبيه مع إجراء",
		actionDescription: "يظهر الإجراء في نهاية التنبيه.",
		action: "إجراء",
	},
	he: {
		basicTitle: "התראה בסיסית",
		basicDescription: "סמל, כותרת ותיאור קצר.",
		actionTitle: "התראה עם פעולה",
		actionDescription: "הפעולה מופיעה בסוף ההתראה.",
		action: "פעולה",
	},
} satisfies Translations<Record<string, string>>;

export default function AlertRtlDemo() {
	const { t } = useTranslation(translations);

	return (
		<div className="flex w-full max-w-lg flex-col gap-4">
			<Alert>
				<InfoIcon />
				<AlertTitle>{t.basicTitle}</AlertTitle>
				<AlertDescription>{t.basicDescription}</AlertDescription>
			</Alert>
			<Alert>
				<CircleAlertIcon />
				<AlertTitle>{t.actionTitle}</AlertTitle>
				<AlertDescription>{t.actionDescription}</AlertDescription>
				<AlertAction>
					<Button size="xs" variant="outline">
						{t.action}
					</Button>
				</AlertAction>
			</Alert>
		</div>
	);
}
