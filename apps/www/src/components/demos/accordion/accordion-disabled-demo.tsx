import {
	Accordion,
	AccordionItem,
	AccordionPanel,
	AccordionTrigger,
} from "@/components/ui/accordion";

const items = [
	{
		value: "account",
		trigger: "Create your account",
		content: "Your account has been created. Welcome aboard!",
		disabled: false,
	},
	{
		value: "workspace",
		trigger: "Set up your workspace",
		content: "Your workspace is configured and ready to use.",
		disabled: false,
	},
	{
		value: "invite",
		trigger: "Invite your team",
		content: "Complete workspace setup before inviting team members.",
		disabled: true,
	},
];

export default function AccordionDisabledDemo() {
	return (
		<Accordion className="mx-auto max-w-96">
			{items.map((item) => (
				<AccordionItem
					key={item.value}
					value={item.value}
					disabled={item.disabled}
				>
					<AccordionTrigger>{item.trigger}</AccordionTrigger>
					<AccordionPanel>{item.content}</AccordionPanel>
				</AccordionItem>
			))}
		</Accordion>
	);
}
