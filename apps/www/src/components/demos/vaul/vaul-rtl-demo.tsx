"use client";

import {
	type Translations,
	useTranslation,
} from "@/components/language-selector";
import { Button } from "@/components/ui/button";
import { Field, FieldLabel } from "@/components/ui/field";
import { Textarea } from "@/components/ui/textarea";
import {
	Vaul,
	VaulClose,
	VaulContent,
	VaulDescription,
	VaulFooter,
	VaulHeader,
	VaulPanel,
	VaulTitle,
	VaulTrigger,
} from "@/components/ui/vaul";

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

export default function VaulRtlDemo() {
	const { dir, t } = useTranslation(translations);

	return (
		<Vaul>
			<VaulTrigger render={<Button variant="outline" />}>
				{t.sendFeedback}
			</VaulTrigger>
			<VaulContent dir={dir}>
				<VaulHeader>
					<VaulTitle>{t.sendFeedback}</VaulTitle>
					<VaulDescription>{t.description}</VaulDescription>
				</VaulHeader>
				<VaulPanel>
					<Field name="feedback">
						<FieldLabel>{t.feedback}</FieldLabel>
						<Textarea placeholder={t.placeholder} rows={4} />
					</Field>
				</VaulPanel>
				<VaulFooter>
					<VaulClose render={<Button variant="outline" />}>
						{t.cancel}
					</VaulClose>
					<Button>{t.send}</Button>
				</VaulFooter>
			</VaulContent>
		</Vaul>
	);
}
