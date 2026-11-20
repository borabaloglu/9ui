"use client";

import * as React from "react";
import { ChevronDownIcon } from "lucide-react";

import { CodeBar } from "@/components/code-bar";
import { Button } from "@/components/ui/button";
import {
	Collapsible,
	CollapsiblePanel,
	CollapsibleTrigger,
} from "@/components/ui/collapsible";

import { cn } from "@/lib/utils";

interface PreviewCodeProps {
	label: string;
	content: string;
	note?: React.ReactNode;
	children: React.ReactNode;
}

export const PreviewCode = ({
	label,
	content,
	note,
	children,
}: PreviewCodeProps) => {
	const [open, setOpen] = React.useState(false);

	return (
		<Collapsible
			open={open}
			onOpenChange={setOpen}
			className="border-t bg-(--code-surface)"
		>
			<CodeBar
				label={label}
				content={content}
				type="demo"
				className={cn(!open && "border-b-transparent")}
			>
				<CollapsibleTrigger
					render={
						<Button
							variant="ghost"
							size="sm"
							className="text-muted-foreground hover:text-foreground"
						/>
					}
				>
					{open ? "Hide code" : "Show code"}
					<ChevronDownIcon
						data-icon="inline-end"
						className={cn(
							"transition-transform duration-150 ease-out motion-reduce:transition-none",
							open && "rotate-180",
						)}
					/>
				</CollapsibleTrigger>
			</CodeBar>

			<CollapsiblePanel className="[&_pre]:!max-h-[400px]">
				{note}
				{children}
			</CollapsiblePanel>
		</Collapsible>
	);
};
