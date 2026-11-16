"use client";

import { PencilIcon } from "lucide-react";

import {
	type Translations,
	useTranslation,
} from "@/components/language-selector";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardAction,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";

const translations = {
	en: {
		title: "Billing Address",
		description: "Shown on your invoices.",
		edit: "Edit",
		company: "Acme Inc.",
		street: "221 Market Street",
		city: "San Francisco, CA 94105",
		plan: "Plan",
		planValue: "Pro",
		renews: "Renews",
		renewsValue: "Dec 1, 2026",
		cancel: "Cancel",
		save: "Save",
	},
	ar: {
		title: "عنوان الفوترة",
		description: "يظهر في فواتيرك.",
		edit: "تعديل",
		company: "شركة أكمي",
		street: "221 شارع الملك فهد",
		city: "الرياض 12211",
		plan: "الخطة",
		planValue: "احترافية",
		renews: "التجديد",
		renewsValue: "1 ديسمبر 2026",
		cancel: "إلغاء",
		save: "حفظ",
	},
	he: {
		title: "כתובת לחיוב",
		description: "מופיעה בחשבוניות שלך.",
		edit: "עריכה",
		company: "אקמי בע״מ",
		street: "רחוב הרצל 221",
		city: "תל אביב 6100000",
		plan: "תוכנית",
		planValue: "מקצועית",
		renews: "חידוש",
		renewsValue: "1 בדצמבר 2026",
		cancel: "ביטול",
		save: "שמירה",
	},
} satisfies Translations<Record<string, string>>;

export default function CardRtlDemo() {
	const { t } = useTranslation(translations);

	return (
		<Card className="w-full max-w-sm">
			<CardHeader className="border-b">
				<CardTitle>{t.title}</CardTitle>
				<CardDescription>{t.description}</CardDescription>
				<CardAction>
					<Button variant="outline" size="sm">
						<PencilIcon data-icon="inline-start" />
						{t.edit}
					</Button>
				</CardAction>
			</CardHeader>
			<CardContent className="flex flex-col gap-4">
				<address className="not-italic">
					{t.company}
					<br />
					{t.street}
					<br />
					{t.city}
				</address>
				<dl className="flex flex-col gap-2">
					<div className="flex items-center justify-between">
						<dt className="text-muted-foreground">{t.plan}</dt>
						<dd className="font-medium">{t.planValue}</dd>
					</div>
					<div className="flex items-center justify-between">
						<dt className="text-muted-foreground">{t.renews}</dt>
						<dd className="font-medium">{t.renewsValue}</dd>
					</div>
				</dl>
			</CardContent>
			<CardFooter className="justify-end gap-2">
				<Button variant="ghost">{t.cancel}</Button>
				<Button>{t.save}</Button>
			</CardFooter>
		</Card>
	);
}
