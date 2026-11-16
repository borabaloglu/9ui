"use client";

import {
	type Translations,
	useTranslation,
} from "@/components/language-selector";
import { Button } from "@/components/ui/button";
import {
	Drawer,
	DrawerClose,
	DrawerDescription,
	DrawerFooter,
	DrawerHeader,
	DrawerPanel,
	DrawerPopup,
	DrawerTitle,
	DrawerTrigger,
} from "@/components/ui/drawer";
import { Field, FieldLabel } from "@/components/ui/field";
import { Textarea } from "@/components/ui/textarea";

const translations = {
	en: {
		sendFeedback: "Send Feedback",
		description: "Tell us what works and what does not. We read every message.",
		feedback: "Feedback",
		placeholder: "Share your thoughts...",
		cancel: "Cancel",
		send: "Send",
	},
	ar: {
		sendFeedback: "إرسال ملاحظات",
		description: "أخبرنا بما ينجح وما لا ينجح. نقرأ كل رسالة.",
		feedback: "الملاحظات",
		placeholder: "شارك أفكارك...",
		cancel: "إلغاء",
		send: "إرسال",
	},
	he: {
		sendFeedback: "שליחת משוב",
		description: "ספרו לנו מה עובד ומה לא. אנחנו קוראים כל הודעה.",
		feedback: "משוב",
		placeholder: "שתפו את המחשבות שלכם...",
		cancel: "ביטול",
		send: "שליחה",
	},
} satisfies Translations<Record<string, string>>;

export default function DrawerRtlDemo() {
	const { dir, t } = useTranslation(translations);

	return (
		<Drawer>
			<DrawerTrigger render={<Button variant="outline" />}>
				{t.sendFeedback}
			</DrawerTrigger>
			<DrawerPopup dir={dir}>
				<DrawerHeader>
					<DrawerTitle>{t.sendFeedback}</DrawerTitle>
					<DrawerDescription>{t.description}</DrawerDescription>
				</DrawerHeader>
				<DrawerPanel>
					<Field name="feedback">
						<FieldLabel>{t.feedback}</FieldLabel>
						<Textarea placeholder={t.placeholder} rows={4} />
					</Field>
				</DrawerPanel>
				<DrawerFooter>
					<DrawerClose render={<Button variant="outline" />}>
						{t.cancel}
					</DrawerClose>
					<Button>{t.send}</Button>
				</DrawerFooter>
			</DrawerPopup>
		</Drawer>
	);
}
