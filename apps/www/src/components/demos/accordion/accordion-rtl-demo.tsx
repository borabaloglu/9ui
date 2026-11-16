"use client";

import {
	type Translations,
	useTranslation,
} from "@/components/language-selector";
import {
	Accordion,
	AccordionItem,
	AccordionPanel,
	AccordionTrigger,
} from "@/components/ui/accordion";

const translations = {
	en: {
		shippingTrigger: "How long does shipping take?",
		shippingContent:
			"Standard shipping takes 3–5 business days. Express options are available at checkout.",
		returnsTrigger: "What is your return policy?",
		returnsContent:
			"You can return any item within 30 days of purchase for a full refund.",
		paymentTrigger: "What payment methods do you accept?",
		paymentContent: "We accept Visa, Mastercard, PayPal, and Apple Pay.",
	},
	ar: {
		shippingTrigger: "كم يستغرق الشحن؟",
		shippingContent:
			"يستغرق الشحن العادي من 3 إلى 5 أيام عمل. تتوفر خيارات الشحن السريع عند الدفع.",
		returnsTrigger: "ما هي سياسة الإرجاع؟",
		returnsContent:
			"يمكنك إرجاع أي منتج خلال 30 يومًا من الشراء واسترداد المبلغ كاملًا.",
		paymentTrigger: "ما طرق الدفع المتاحة؟",
		paymentContent: "نقبل Visa وMastercard وPayPal وApple Pay.",
	},
	he: {
		shippingTrigger: "כמה זמן לוקח המשלוח?",
		shippingContent:
			"משלוח רגיל לוקח 3 עד 5 ימי עסקים. אפשרויות משלוח מהיר זמינות בקופה.",
		returnsTrigger: "מהי מדיניות ההחזרות?",
		returnsContent: "אפשר להחזיר כל מוצר תוך 30 יום מהרכישה ולקבל החזר מלא.",
		paymentTrigger: "אילו אמצעי תשלום אתם מקבלים?",
		paymentContent: "אנחנו מקבלים Visa, Mastercard, PayPal ו-Apple Pay.",
	},
} satisfies Translations<Record<string, string>>;

export default function AccordionRtlDemo() {
	const { t } = useTranslation(translations);

	const items = [
		{
			value: "shipping",
			trigger: t.shippingTrigger,
			content: t.shippingContent,
		},
		{ value: "returns", trigger: t.returnsTrigger, content: t.returnsContent },
		{ value: "payment", trigger: t.paymentTrigger, content: t.paymentContent },
	];

	return (
		<Accordion className="mx-auto max-w-96">
			{items.map((item) => (
				<AccordionItem key={item.value} value={item.value}>
					<AccordionTrigger>{item.trigger}</AccordionTrigger>
					<AccordionPanel>{item.content}</AccordionPanel>
				</AccordionItem>
			))}
		</Accordion>
	);
}
