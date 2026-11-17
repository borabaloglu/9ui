"use client";

import {
	type Translations,
	useTranslation,
} from "@/components/language-selector";
import { Button } from "@/components/ui/button";
import { ToastProvider } from "@/components/ui/toast";

import { createToastManager } from "@/hooks/use-toast";

const toastManager = createToastManager();

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

export default function ToastRtlDemo() {
	const { dir, t } = useTranslation(translations);

	return (
		<ToastProvider
			showCloseButton
			toastManager={toastManager}
			portalProps={{ dir }}
		>
			<Button
				variant="outline"
				onClick={() => {
					const id = toastManager.add({
						title: t.title,
						description: t.description,
						actionProps: {
							children: t.undo,
							onClick: () => {
								toastManager.close(id);
								toastManager.add({ title: t.undone, type: "success" });
							},
						},
					});
				}}
			>
				{t.show}
			</Button>
		</ToastProvider>
	);
}
