"use client";

import {
	type Translations,
	useTranslation,
} from "@/components/language-selector";
import { Checkbox } from "@/components/ui/checkbox";
import { Field, FieldDescription, FieldLabel } from "@/components/ui/field";
import { Label } from "@/components/ui/label";

const translations = {
	en: {
		terms: "Accept terms and conditions",
		updates: "Product updates",
		updatesDescription: "Get an email when a new component ships.",
		notifications: "Enable notifications",
		notificationsDescription: "Get notified when focus mode turns on or off.",
	},
	ar: {
		terms: "أوافق على الشروط والأحكام",
		updates: "تحديثات المنتج",
		updatesDescription: "تلقَّ رسالة بريد إلكتروني عند إطلاق مكوّن جديد.",
		notifications: "تفعيل الإشعارات",
		notificationsDescription: "تلقَّ إشعارًا عند تشغيل وضع التركيز أو إيقافه.",
	},
	he: {
		terms: "אני מסכים לתנאים ולהגבלות",
		updates: "עדכוני מוצר",
		updatesDescription: "קבלת אימייל כשרכיב חדש יוצא.",
		notifications: "הפעלת התראות",
		notificationsDescription: "קבלת התראה כשמצב מיקוד מופעל או כבוי.",
	},
} satisfies Translations<Record<string, string>>;

export default function CheckboxRtlDemo() {
	const { t } = useTranslation(translations);

	return (
		<div className="flex w-full max-w-sm flex-col gap-6">
			<Label>
				<Checkbox defaultChecked />
				{t.terms}
			</Label>
			<Field
				name="updates"
				className="grid w-fit grid-cols-[auto_1fr] items-center gap-x-2 gap-y-1"
			>
				<Checkbox />
				<FieldLabel>{t.updates}</FieldLabel>
				<FieldDescription className="col-start-2">
					{t.updatesDescription}
				</FieldDescription>
			</Field>
			<Field name="notifications">
				<FieldLabel className="border-border data-filled:border-ring/50 data-filled:bg-accent/50 w-full items-start rounded-xl border p-4 transition-colors duration-150 ease-out">
					<Checkbox className="mt-0.5" />
					<div className="flex flex-col gap-1">
						{t.notifications}
						<FieldDescription className="font-normal">
							{t.notificationsDescription}
						</FieldDescription>
					</div>
				</FieldLabel>
			</Field>
		</div>
	);
}
