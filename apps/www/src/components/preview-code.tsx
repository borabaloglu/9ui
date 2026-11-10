"use client";

import * as React from "react";
import { ChevronDownIcon } from "lucide-react";

import { CodeBar } from "@/components/code-bar";
import { Button } from "@/components/ui/button";

import { cn } from "@/lib/utils";

interface PreviewCodeProps {
	label: string;
	content: string;
	children: React.ReactNode;
}

export const PreviewCode = ({ label, content, children }: PreviewCodeProps) => {
	const [open, setOpen] = React.useState(false);
	const contentId = React.useId();

	return (
		<div className="border-t bg-(--code-surface)">
			<CodeBar
				label={label}
				content={content}
				type="demo"
				className={cn(!open && "border-b-transparent")}
			>
				<Button
					variant="ghost"
					size="sm"
					aria-expanded={open}
					aria-controls={contentId}
					onClick={() => setOpen(!open)}
					className="text-muted-foreground hover:text-foreground"
				>
					{open ? "Hide code" : "Show code"}
					<ChevronDownIcon
						data-icon="inline-end"
						className={cn(
							"transition-transform duration-150 ease-out motion-reduce:transition-none",
							open && "rotate-180",
						)}
					/>
				</Button>
			</CodeBar>

			<div id={contentId} hidden={!open} className="[&_pre]:!max-h-[400px]">
				{children}
			</div>
		</div>
	);
};
