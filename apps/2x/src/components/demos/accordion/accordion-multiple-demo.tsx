import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion"

export default function AccordionMultipleDemo() {
	return (
		<Accordion className="mx-auto w-96" multiple>
			<AccordionItem>
				<AccordionTrigger>Can it be multiple?</AccordionTrigger>
				<AccordionContent>
					Yes. You can open multiple items at the same time.
				</AccordionContent>
			</AccordionItem>
			<AccordionItem>
				<AccordionTrigger>
					Try to open multiple items at the same time.
				</AccordionTrigger>
				<AccordionContent>
					You can open multiple items at the same time.
				</AccordionContent>
			</AccordionItem>
			<AccordionItem>
				<AccordionTrigger>
					<span>
						Add <code className="inline-block">multiple</code> prop to the
						accordion.
					</span>
				</AccordionTrigger>
				<AccordionContent>
					You can add the <code>multiple</code> prop to the accordion to allow
					multiple items to be opened at the same time.
				</AccordionContent>
			</AccordionItem>
		</Accordion>
	)
}
