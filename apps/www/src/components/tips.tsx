import type * as React from "react";

import {
	Accordion,
	AccordionItem,
	AccordionPanel,
	AccordionTrigger,
} from "@/components/ui/accordion";

import { cn } from "@/lib/utils";

interface TipsProps {
	className?: string;
	children: React.ReactNode;
}

interface TipProps {
	title: string;
	children: React.ReactNode;
}

function Tips({ className, children }: TipsProps) {
	return (
		<div
			data-slot="tips"
			className={cn("mt-4 overflow-hidden rounded-xl border", className)}
		>
			<Accordion multiple hiddenUntilFound>
				{children}
			</Accordion>
		</div>
	);
}

function Tip({ title, children }: TipProps) {
	return (
		<AccordionItem data-slot="tip">
			<AccordionTrigger className="items-center rounded-none px-4 py-3 text-sm font-medium not-data-disabled:hover:no-underline">
				{title}
			</AccordionTrigger>
			<AccordionPanel className="pb-0">
				<div className="text-muted-foreground px-4 pb-4 text-sm [&_p]:leading-6">
					{children}
				</div>
			</AccordionPanel>
		</AccordionItem>
	);
}

export { Tip, Tips };
