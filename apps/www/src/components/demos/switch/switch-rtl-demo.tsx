"use client";

import {
	type Translations,
	useTranslation,
} from "@/components/language-selector";
import { Field, FieldDescription, FieldLabel } from "@/components/ui/field";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";

const translations = {
	en: {
		notifications: "Enable notifications",
		focusMode: "Focus mode",
		focusModeDescription: "Get notified when focus mode turns on or off.",
	},
	ar: {
		notifications: "تفعيل الإشعارات",
		focusMode: "وضع التركيز",
		focusModeDescription: "تلقَّ إشعارًا عند تشغيل وضع التركيز أو إيقافه.",
	},
	he: {
		notifications: "הפעלת התראות",
		focusMode: "מצב מיקוד",
		focusModeDescription: "קבלת התראה כשמצב מיקוד מופעל או כבוי.",
	},
} satisfies Translations<Record<string, string>>;

export default function SwitchRtlDemo() {
	const { t } = useTranslation(translations);

	return (
		<div className="flex w-full max-w-sm flex-col items-start gap-6">
			<Label>
				<Switch defaultChecked />
				{t.notifications}
			</Label>
			<Field name="focusMode" className="w-full">
				<FieldLabel className="border-border data-filled:border-ring/50 data-filled:bg-accent/50 w-full items-start justify-between gap-4 rounded-xl border p-4 transition-colors duration-150 ease-out">
					<div className="flex flex-col gap-1">
						{t.focusMode}
						<FieldDescription className="font-normal">
							{t.focusModeDescription}
						</FieldDescription>
					</div>
					<Switch className="mt-0.5" />
				</FieldLabel>
			</Field>
		</div>
	);
}
