"use client";

import * as React from "react";
import { ChevronDownIcon } from "lucide-react";

import { cn } from "@/lib/utils";

interface CodeCollapsibleProps {
	children: React.ReactNode;
}

export const CodeCollapsible = ({ children }: CodeCollapsibleProps) => {
	const [expanded, setExpanded] = React.useState(false);
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
				className="text-muted-foreground hover:text-foreground focus-visible:ring-ring/50 bg-muted/50 hover:bg-muted flex h-10 w-full cursor-pointer items-center justify-center gap-1.5 border-t text-[0.8125rem] font-medium transition-colors duration-150 ease-out outline-none select-none focus-visible:ring-3 focus-visible:ring-inset any-pointer-coarse:h-11"
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
