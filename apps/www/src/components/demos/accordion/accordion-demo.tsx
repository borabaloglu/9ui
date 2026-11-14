import {
	Accordion,
	AccordionItem,
	AccordionPanel,
	AccordionTrigger,
} from "@/components/ui/accordion";

const items = [
	{
		value: "shipping",
		trigger: "How long does shipping take?",
		content:
			"Standard shipping takes 3–5 business days. Express options are available at checkout.",
	},
	{
		value: "returns",
		trigger: "What is your return policy?",
		content:
			"You can return any item within 30 days of purchase for a full refund.",
	},
	{
		value: "payment",
		trigger: "What payment methods do you accept?",
		content: "We accept Visa, Mastercard, PayPal, and Apple Pay.",
	},
];

export default function AccordionDemo() {
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
