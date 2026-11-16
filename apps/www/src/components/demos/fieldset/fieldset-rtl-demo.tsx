"use client";

import {
	type Translations,
	useTranslation,
} from "@/components/language-selector";
import { Field, FieldDescription, FieldLabel } from "@/components/ui/field";
import {
	Fieldset,
	FieldsetDescription,
	FieldsetLegend,
} from "@/components/ui/fieldset";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";

const translations = {
	en: {
		legend: "Billing Details",
		description: "These details appear on your invoices.",
		company: "Company",
		companyPlaceholder: "Acme Inc.",
		taxId: "Tax ID",
		taxIdDescription: "Leave empty if you don't have one.",
		emailInvoices: "Email invoices to me",
	},
	ar: {
		legend: "بيانات الفوترة",
		description: "تظهر هذه البيانات على فواتيرك.",
		company: "الشركة",
		companyPlaceholder: "شركة المثال",
		taxId: "الرقم الضريبي",
		taxIdDescription: "اتركه فارغًا إن لم يكن لديك رقم.",
		emailInvoices: "أرسل الفواتير إلى بريدي الإلكتروني",
	},
	he: {
		legend: "פרטי חיוב",
		description: "הפרטים האלה יופיעו בחשבוניות שלך.",
		company: "חברה",
		companyPlaceholder: "חברה בע״מ",
		taxId: "מספר עוסק",
		taxIdDescription: "אפשר להשאיר ריק אם אין.",
		emailInvoices: "שליחת חשבוניות באימייל",
	},
} satisfies Translations<Record<string, string>>;

export default function FieldsetRtlDemo() {
	const { t } = useTranslation(translations);

	return (
		<Fieldset className="max-w-xs">
			<FieldsetLegend>{t.legend}</FieldsetLegend>
			<FieldsetDescription>{t.description}</FieldsetDescription>
			<Field name="company">
				<FieldLabel>{t.company}</FieldLabel>
				<Input placeholder={t.companyPlaceholder} />
			</Field>
			<Field name="taxId">
				<FieldLabel>{t.taxId}</FieldLabel>
				<Input placeholder="300012345600003" />
				<FieldDescription>{t.taxIdDescription}</FieldDescription>
			</Field>
			<Field name="emailInvoices" orientation="horizontal">
				<Switch defaultChecked />
				<FieldLabel>{t.emailInvoices}</FieldLabel>
			</Field>
		</Fieldset>
	);
}
