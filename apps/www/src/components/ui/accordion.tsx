import type * as React from "react";
import { Accordion as BaseAccordion } from "@base-ui/react/accordion";
import { ChevronDownIcon } from "lucide-react";

import { cn } from "@/lib/utils";

function Accordion({
	className,
	...props
}: Omit<React.ComponentProps<typeof BaseAccordion.Root>, "className"> & {
	className?: string;
}) {
	return (
		<BaseAccordion.Root
			data-slot="accordion"
			className={cn("w-full", className)}
			{...props}
		/>
	);
}

function AccordionItem({
	className,
	...props
}: Omit<React.ComponentProps<typeof BaseAccordion.Item>, "className"> & {
	className?: string;
}) {
	return (
		<BaseAccordion.Item
			data-slot="accordion-item"
			className={cn("border-b last:border-b-0", className)}
			{...props}
		/>
	);
}

function AccordionTrigger({
	children,
	className,
	...props
}: Omit<React.ComponentProps<typeof BaseAccordion.Trigger>, "className"> & {
	className?: string;
}) {
	return (
		<BaseAccordion.Header data-slot="accordion-header" className="flex">
			<BaseAccordion.Trigger
				data-slot="accordion-trigger"
				className={cn(
					"focus-visible:ring-ring/50 focus-visible:outline-ring not-data-disabled:active:text-foreground/70 flex flex-1 cursor-pointer items-start justify-between gap-4 rounded-lg py-4 text-left text-sm font-medium [-webkit-tap-highlight-color:transparent] not-data-disabled:hover:underline focus-visible:ring-3 focus-visible:outline-1 focus-visible:-outline-offset-1 data-disabled:cursor-not-allowed data-disabled:opacity-50",
					className,
				)}
				{...props}
			>
				{children}
				<ChevronDownIcon
					data-slot="accordion-trigger-icon"
					className="text-muted-foreground ease-out-quint pointer-events-none mt-0.5 size-4 shrink-0 transition-[rotate] duration-150 in-data-panel-open:rotate-180 in-data-panel-open:duration-200 motion-reduce:transition-none"
				/>
			</BaseAccordion.Trigger>
		</BaseAccordion.Header>
	);
}

function AccordionPanel({
	children,
	className,
	...props
}: Omit<React.ComponentProps<typeof BaseAccordion.Panel>, "className"> & {
	className?: string;
}) {
	return (
		<BaseAccordion.Panel
			data-slot="accordion-panel"
			className="text-muted-foreground ease-out-quint h-(--accordion-panel-height) overflow-hidden text-sm transition-[height] duration-200 data-ending-style:h-0 data-ending-style:duration-150 data-starting-style:h-0 motion-reduce:transition-none"
			{...props}
		>
			<div
				className={cn(
					"[&_a]:hover:text-foreground ease-out-quint pb-4 transition-opacity duration-200 in-data-ending-style:opacity-0 in-data-ending-style:duration-150 in-data-starting-style:opacity-0 [&_a]:underline [&_a]:underline-offset-3",
					className,
				)}
			>
				{children}
			</div>
		</BaseAccordion.Panel>
	);
}

export { Accordion, AccordionItem, AccordionPanel, AccordionTrigger };
