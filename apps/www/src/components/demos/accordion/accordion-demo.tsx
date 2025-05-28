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
				<AccordionTrigger>Is it an accordion?</AccordionTrigger>
				<AccordionContent>
					Yes, it is an accordion. It is a component that allows you to collapse
					and expand content.
				</AccordionContent>
			</AccordionItem>
			<AccordionItem>
				<AccordionTrigger>Is it animated?</AccordionTrigger>
				<AccordionContent>
					Yes, it is animated. It is a component that allows you to collapse and
					expand content.
				</AccordionContent>
			</AccordionItem>
			<AccordionItem>
				<AccordionTrigger>Is it customizable?</AccordionTrigger>
				<AccordionContent>
					Yes, it is customizable. It is a component that allows you to collapse
					and expand content.
				</AccordionContent>
			</AccordionItem>
		</Accordion>
	)
}
