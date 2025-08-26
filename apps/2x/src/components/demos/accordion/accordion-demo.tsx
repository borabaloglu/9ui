import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion"

export default function AccordionDemo() {
	return (
		<Accordion className="mx-auto w-96" orientation="vertical">
			<AccordionItem>
				<AccordionTrigger>What is accordion?</AccordionTrigger>
				<AccordionContent>
					A collapsible component that organizes content into expandable
					sections.
				</AccordionContent>
			</AccordionItem>
			<AccordionItem>
				<AccordionTrigger>Is it customizable?</AccordionTrigger>
				<AccordionContent>
					Yes. You can style it with tailwind classes to match your design
					system.
				</AccordionContent>
			</AccordionItem>
			<AccordionItem>
				<AccordionTrigger>Is it animated?</AccordionTrigger>
				<AccordionContent>
					Yes. Smooth expand and collapse transitions are built in.
				</AccordionContent>
			</AccordionItem>
			<AccordionItem disabled>
				<AccordionTrigger>Can it be disabled?</AccordionTrigger>
			</AccordionItem>
		</Accordion>
	)
}
