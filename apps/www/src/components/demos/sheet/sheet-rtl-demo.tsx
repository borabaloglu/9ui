"use client";

import {
	type Translations,
	useTranslation,
} from "@/components/language-selector";
import { Button } from "@/components/ui/button";
import { Field, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import {
	Sheet,
	SheetClose,
	SheetDescription,
	SheetFooter,
	SheetHeader,
	SheetPanel,
	SheetPopup,
	SheetTitle,
	SheetTrigger,
} from "@/components/ui/sheet";

const translations = {
	en: {
		right: "Right",
		left: "Left",
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
		right: "يمين",
		left: "يسار",
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
		right: "ימין",
		left: "שמאל",
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

const SIDES = ["left", "right"] as const;

export default function SheetRtlDemo() {
	const { dir, t } = useTranslation(translations);

	return (
		<div className="flex flex-wrap items-center justify-center gap-4 rtl:flex-row-reverse">
			{SIDES.map((side) => (
				<Sheet key={side}>
					<SheetTrigger render={<Button variant="outline" />}>
						{t[side]}
					</SheetTrigger>
					<SheetPopup dir={dir} side={side}>
						<SheetHeader>
							<SheetTitle>{t.editProfile}</SheetTitle>
							<SheetDescription>{t.description}</SheetDescription>
						</SheetHeader>
						<SheetPanel className="flex flex-col gap-4">
							<Field name="name">
								<FieldLabel>{t.name}</FieldLabel>
								<Input defaultValue={t.nameValue} />
							</Field>
							<Field name="email">
								<FieldLabel>{t.email}</FieldLabel>
								<Input type="email" defaultValue={t.emailValue} />
							</Field>
						</SheetPanel>
						<SheetFooter>
							<SheetClose render={<Button variant="outline" />}>
								{t.cancel}
							</SheetClose>
							<Button>{t.save}</Button>
						</SheetFooter>
					</SheetPopup>
				</Sheet>
			))}
		</div>
	);
}
