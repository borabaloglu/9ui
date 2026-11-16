"use client";

import { toast } from "sonner";

import {
	type Translations,
	useTranslation,
} from "@/components/language-selector";
import { Button } from "@/components/ui/button";

const translations = {
	en: {
		show: "Show Toast",
		title: "Event added",
		description: "A short description.",
		undo: "Undo",
		undone: "Event removed",
	},
	ar: {
		show: "عرض الإشعار",
		title: "تمت إضافة الحدث",
		description: "وصف قصير.",
		undo: "تراجع",
		undone: "تمت إزالة الحدث",
	},
	he: {
		show: "הצגת הודעה",
		title: "האירוע נוסף",
		description: "תיאור קצר.",
		undo: "ביטול",
		undone: "האירוע הוסר",
	},
} satisfies Translations<Record<string, string>>;

export default function SonnerRtlDemo() {
	const { t } = useTranslation(translations);

	return (
		<Button
			variant="outline"
			onClick={() =>
				toast(t.title, {
					description: t.description,
					closeButton: true,
					action: {
						label: t.undo,
						onClick: () => toast(t.undone),
					},
				})
			}
		>
			{t.show}
		</Button>
	);
}
