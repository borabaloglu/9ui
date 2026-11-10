"use client";

import * as React from "react";
import { ChevronDownIcon } from "lucide-react";

import { cn } from "@/lib/utils";

interface CodeCollapsibleProps {
	defaultExpanded?: boolean;
	children: React.ReactNode;
}

export const CodeCollapsible = ({
	defaultExpanded = false,
	children,
}: CodeCollapsibleProps) => {
	const [expanded, setExpanded] = React.useState(defaultExpanded);
	const contentId = React.useId();

	return (
		<>
			<div className="relative">
				<div
					id={contentId}
					className={cn(
						!expanded && "max-h-56 overflow-hidden [&_pre]:!overflow-hidden",
					)}
				>
					{children}
				</div>
				{!expanded && (
					<div className="pointer-events-none absolute inset-0 bg-linear-to-t from-(--code-surface) from-5% via-(--code-surface)/60 via-45% to-transparent" />
				)}
			</div>

			<button
				type="button"
				aria-expanded={expanded}
				aria-controls={contentId}
				onClick={() => setExpanded(!expanded)}
				className={cn(
					"text-muted-foreground hover:text-foreground focus-visible:ring-ring/50 flex h-10 w-full cursor-pointer items-center justify-center gap-1.5 text-[0.8125rem] font-medium transition-colors outline-none focus-visible:ring-3 focus-visible:ring-inset",
					expanded && "border-t",
				)}
			>
				{expanded ? "Collapse" : "Expand"}
				<ChevronDownIcon
					className={cn(
						"size-3.5 transition-transform duration-150 ease-out motion-reduce:transition-none",
						expanded && "rotate-180",
					)}
				/>
			</button>
		</>
	);
};
