import * as React from "react"
import { Accordion as BaseAccordion } from "@base-ui-components/react/accordion"
import { ChevronDownIcon } from "lucide-react"

import { cn } from "@/lib/utils"

function Accordion({
	...props
}: React.ComponentProps<typeof BaseAccordion.Root>) {
	return <BaseAccordion.Root data-slot="accordion" {...props} />
}

function AccordionItem({
	className,
	...props
}: React.ComponentProps<typeof BaseAccordion.Item>) {
	return (
		<BaseAccordion.Item
			data-slot="accordion-item"
			className={cn("border-b last:border-b-0", className)}
			{...props}
		/>
	)
}

function AccordionTrigger({
	children,
	className,
	...props
}: React.ComponentProps<typeof BaseAccordion.Trigger>) {
	return (
		<BaseAccordion.Header className="flex">
			<BaseAccordion.Trigger
				data-slot="accordion-trigger"
				className={cn(
					"focus-visible:ring-ring/50 flex flex-1 items-center justify-between gap-4 rounded-md py-3 text-left text-sm font-medium underline-offset-2 outline-none hover:underline focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50 data-[panel-open]:[&_*[data-slot=accordion-icon]]:rotate-180",
					className
				)}
				{...props}
			>
				{children}
				<ChevronDownIcon
					data-slot="accordion-icon"
					className="text-muted-foreground size-4 shrink-0 transition-transform duration-200"
				/>
			</BaseAccordion.Trigger>
		</BaseAccordion.Header>
	)
}

function AccordionContent({
	children,
	className,
	...props
}: React.ComponentProps<typeof BaseAccordion.Panel>) {
	return (
		<BaseAccordion.Panel
			data-slot="accordion-content"
			className="h-[var(--accordion-panel-height)] overflow-hidden text-sm transition-[height] duration-200 ease-out data-ending-style:h-0 data-starting-style:h-0"
			{...props}
		>
			<div className={cn("pb-2.5", className)}>{children}</div>
		</BaseAccordion.Panel>
	)
}

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }
