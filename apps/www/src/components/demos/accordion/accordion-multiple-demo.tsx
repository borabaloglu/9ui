import {
	Accordion,
	AccordionItem,
	AccordionPanel,
	AccordionTrigger,
} from "@/components/ui/accordion";

const items = [
	{
		value: "traffic",
		trigger: "Traffic sources",
		content:
			"62% of your visitors came from organic search this month, up 8% from last month.",
	},
	{
		value: "conversion",
		trigger: "Conversion funnel",
		content:
			"Your checkout drop-off rate is 34%. Most users leave on the payment step.",
	},
	{
		value: "retention",
		trigger: "User retention",
		content:
			"30-day retention is at 41%. Users who set up a dashboard return 2x more often.",
	},
];

export default function AccordionMultipleDemo() {
	return (
		<Accordion className="mx-auto max-w-96" multiple>
			{items.map((item) => (
				<AccordionItem key={item.value} value={item.value}>
					<AccordionTrigger>{item.trigger}</AccordionTrigger>
					<AccordionPanel>{item.content}</AccordionPanel>
				</AccordionItem>
			))}
		</Accordion>
	);
}
