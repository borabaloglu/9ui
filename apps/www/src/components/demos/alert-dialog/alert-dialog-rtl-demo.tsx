"use client";

import { TriangleAlertIcon } from "lucide-react";

import {
	type Translations,
	useTranslation,
} from "@/components/language-selector";
import {
	AlertDialog,
	AlertDialogClose,
	AlertDialogDescription,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogMedia,
	AlertDialogPopup,
	AlertDialogTitle,
	AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";

const translations = {
	en: {
		show: "Show",
		withIcon: "With Icon",
		centered: "Centered",
		title: "Are you sure?",
		description: "This action cannot be undone.",
		cancel: "Cancel",
		continue: "Continue",
	},
	ar: {
		show: "عرض",
		withIcon: "مع أيقونة",
		centered: "في المنتصف",
		title: "هل أنت متأكد؟",
		description: "لا يمكن التراجع عن هذا الإجراء.",
		cancel: "إلغاء",
		continue: "متابعة",
	},
	he: {
		show: "הצגה",
		withIcon: "עם אייקון",
		centered: "ממורכז",
		title: "בטוח?",
		description: "אי אפשר לבטל את הפעולה.",
		cancel: "ביטול",
		continue: "המשך",
	},
} satisfies Translations<Record<string, string>>;

export default function AlertDialogRtlDemo() {
	const { dir, t } = useTranslation(translations);

	return (
		<div className="flex flex-wrap items-center justify-center gap-4">
			<AlertDialog>
				<AlertDialogTrigger render={<Button variant="outline" />}>
					{t.show}
				</AlertDialogTrigger>
				<AlertDialogPopup dir={dir}>
					<AlertDialogHeader>
						<AlertDialogTitle>{t.title}</AlertDialogTitle>
						<AlertDialogDescription>{t.description}</AlertDialogDescription>
					</AlertDialogHeader>
					<AlertDialogFooter>
						<AlertDialogClose render={<Button variant="outline" />}>
							{t.cancel}
						</AlertDialogClose>
						<AlertDialogClose render={<Button />}>
							{t.continue}
						</AlertDialogClose>
					</AlertDialogFooter>
				</AlertDialogPopup>
			</AlertDialog>
			<AlertDialog>
				<AlertDialogTrigger render={<Button variant="outline" />}>
					{t.withIcon}
				</AlertDialogTrigger>
				<AlertDialogPopup dir={dir}>
					<AlertDialogHeader>
						<AlertDialogMedia className="bg-destructive/10 text-destructive ring-destructive/20 ring-1">
							<TriangleAlertIcon aria-hidden />
						</AlertDialogMedia>
						<AlertDialogTitle>{t.title}</AlertDialogTitle>
						<AlertDialogDescription>{t.description}</AlertDialogDescription>
					</AlertDialogHeader>
					<AlertDialogFooter>
						<AlertDialogClose render={<Button variant="outline" />}>
							{t.cancel}
						</AlertDialogClose>
						<AlertDialogClose render={<Button />}>
							{t.continue}
						</AlertDialogClose>
					</AlertDialogFooter>
				</AlertDialogPopup>
			</AlertDialog>
			<AlertDialog>
				<AlertDialogTrigger render={<Button variant="outline" />}>
					{t.centered}
				</AlertDialogTrigger>
				<AlertDialogPopup dir={dir} size="sm">
					<AlertDialogHeader>
						<AlertDialogTitle>{t.title}</AlertDialogTitle>
						<AlertDialogDescription>{t.description}</AlertDialogDescription>
					</AlertDialogHeader>
					<AlertDialogFooter>
						<AlertDialogClose render={<Button variant="outline" />}>
							{t.cancel}
						</AlertDialogClose>
						<AlertDialogClose render={<Button />}>
							{t.continue}
						</AlertDialogClose>
					</AlertDialogFooter>
				</AlertDialogPopup>
			</AlertDialog>
		</div>
	);
}
