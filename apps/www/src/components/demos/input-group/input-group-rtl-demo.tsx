"use client";

import { AtSignIcon, MailIcon, PaperclipIcon, SearchIcon } from "lucide-react";

import {
	type Translations,
	useTranslation,
} from "@/components/language-selector";
import {
	InputGroup,
	InputGroupAddon,
	InputGroupButton,
	InputGroupInput,
	InputGroupText,
	InputGroupTextarea,
} from "@/components/ui/input-group";

const translations = {
	en: {
		search: "Search...",
		searchLabel: "Search",
		email: "Email",
		amount: "Amount",
		currencySymbol: "$",
		currencyCode: "USD",
		comment: "Comment",
		commentPlaceholder: "Leave a comment...",
		attach: "Attach file",
		mention: "Mention someone",
	},
	ar: {
		search: "بحث...",
		searchLabel: "بحث",
		email: "البريد الإلكتروني",
		amount: "المبلغ",
		currencySymbol: "ر.س",
		currencyCode: "SAR",
		comment: "تعليق",
		commentPlaceholder: "اترك تعليقًا...",
		attach: "إرفاق ملف",
		mention: "الإشارة إلى شخص",
	},
	he: {
		search: "חיפוש...",
		searchLabel: "חיפוש",
		email: "אימייל",
		amount: "סכום",
		currencySymbol: "₪",
		currencyCode: "ILS",
		comment: "הערה",
		commentPlaceholder: "השאירו הערה...",
		attach: "צירוף קובץ",
		mention: "אזכור משתמש",
	},
} satisfies Translations<Record<string, string>>;

export default function InputGroupRtlDemo() {
	const { t } = useTranslation(translations);

	return (
		<div className="flex w-full max-w-sm flex-col gap-4">
			<InputGroup>
				<InputGroupAddon align="inline-start">
					<InputGroupText>
						<SearchIcon />
					</InputGroupText>
				</InputGroupAddon>
				<InputGroupInput aria-label={t.searchLabel} placeholder={t.search} />
			</InputGroup>
			<InputGroup>
				<InputGroupInput
					aria-label={t.email}
					placeholder={t.email}
					type="email"
				/>
				<InputGroupAddon align="inline-end">
					<InputGroupText>
						<MailIcon />
					</InputGroupText>
				</InputGroupAddon>
			</InputGroup>
			<InputGroup>
				<InputGroupAddon align="inline-start">
					<InputGroupText>{t.currencySymbol}</InputGroupText>
				</InputGroupAddon>
				<InputGroupInput aria-label={t.amount} placeholder="0.00" />
				<InputGroupAddon align="inline-end">
					<InputGroupText>{t.currencyCode}</InputGroupText>
				</InputGroupAddon>
			</InputGroup>
			<InputGroup>
				<InputGroupTextarea
					aria-label={t.comment}
					className="min-h-20"
					placeholder={t.commentPlaceholder}
				/>
				<InputGroupAddon align="block-end" className="gap-1 border-t">
					<InputGroupButton size="icon-xs" aria-label={t.attach}>
						<PaperclipIcon />
					</InputGroupButton>
					<InputGroupButton size="icon-xs" aria-label={t.mention}>
						<AtSignIcon />
					</InputGroupButton>
					<InputGroupButton variant="default" className="ms-auto">
						{t.comment}
					</InputGroupButton>
				</InputGroupAddon>
			</InputGroup>
		</div>
	);
}
