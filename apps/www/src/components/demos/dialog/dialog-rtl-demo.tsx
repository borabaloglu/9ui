"use client";

import {
	type Translations,
	useTranslation,
} from "@/components/language-selector";
import { Button } from "@/components/ui/button";
import {
	Dialog,
	DialogClose,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogPopup,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import { Field, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";

const translations = {
	en: {
		editProfile: "Edit Profile",
		description:
			"Update your profile information. You can always change this later.",
		name: "Name",
		nameValue: "Bora Baloglu",
		email: "Email",
		emailValue: "bora@example.com",
		cancel: "Cancel",
		save: "Save",
	},
	ar: {
		editProfile: "تعديل الملف الشخصي",
		description: "حدّث معلومات ملفك الشخصي. يمكنك تغييرها لاحقًا في أي وقت.",
		name: "الاسم",
		nameValue: "سارة أحمد",
		email: "البريد الإلكتروني",
		emailValue: "sara@example.com",
		cancel: "إلغاء",
		save: "حفظ",
	},
	he: {
		editProfile: "עריכת פרופיל",
		description: "עדכנו את פרטי הפרופיל. תמיד אפשר לשנות אותם מאוחר יותר.",
		name: "שם",
		nameValue: "נועה כהן",
		email: "אימייל",
		emailValue: "noa@example.com",
		cancel: "ביטול",
		save: "שמירה",
	},
} satisfies Translations<Record<string, string>>;

export default function DialogRtlDemo() {
	const { dir, t } = useTranslation(translations);

	return (
		<Dialog>
			<DialogTrigger render={<Button variant="outline" />}>
				{t.editProfile}
			</DialogTrigger>
			<DialogPopup dir={dir}>
				<DialogHeader>
					<DialogTitle>{t.editProfile}</DialogTitle>
					<DialogDescription>{t.description}</DialogDescription>
				</DialogHeader>
				<div className="flex flex-col gap-4">
					<Field name="name">
						<FieldLabel>{t.name}</FieldLabel>
						<Input defaultValue={t.nameValue} />
					</Field>
					<Field name="email">
						<FieldLabel>{t.email}</FieldLabel>
						<Input type="email" defaultValue={t.emailValue} />
					</Field>
				</div>
				<DialogFooter>
					<DialogClose render={<Button variant="outline" />}>
						{t.cancel}
					</DialogClose>
					<Button>{t.save}</Button>
				</DialogFooter>
			</DialogPopup>
		</Dialog>
	);
}
