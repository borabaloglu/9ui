import * as React from "react"
import { Accordion as BaseAccordion } from "@base-ui-components/react/accordion"
import { ChevronDownIcon } from "lucide-react"

import { cn } from "@/lib/utils"

const Accordion = BaseAccordion.Root

const AccordionItem = React.forwardRef<
	HTMLDivElement,
	BaseAccordion.Item.Props
>(({ className, ...props }, ref) => (
	<BaseAccordion.Item
		ref={ref}
		className={cn("border-b", className)}
		{...props}
	/>
))
AccordionItem.displayName = "AccordionItem"

const AccordionTrigger = React.forwardRef<
	HTMLButtonElement,
	BaseAccordion.Trigger.Props
>(({ children, className, ...props }, ref) => (
	<BaseAccordion.Header>
		<BaseAccordion.Trigger
			ref={ref}
			className={cn(
				"flex w-full items-center justify-between py-2.5 font-semibold hover:underline [&>svg]:transition-transform [&>svg]:duration-200 [&[data-panel-open]>svg]:rotate-180",
				className
			)}
			{...props}
		>
			{children}
			<ChevronDownIcon className="size-4" />
		</BaseAccordion.Trigger>
	</BaseAccordion.Header>
))
AccordionTrigger.displayName = "AccordionTrigger"

const AccordionContent = ({
	children,
	className,
	...props
}: React.HTMLAttributes<HTMLDivElement>) => (
	<BaseAccordion.Panel
		className={cn(
			"h-[var(--accordion-panel-height)] overflow-hidden text-sm text-foreground transition-[height] data-[ending-style]:h-0 data-[starting-style]:h-0",
			className
		)}
		{...props}
	>
		<div className="pb-2.5" data-accordion-content-wrapper="">
			{children}
		</div>
	</BaseAccordion.Panel>
)
AccordionContent.displayName = "AccordionContent"

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }
