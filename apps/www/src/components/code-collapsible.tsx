"use client";

import * as React from "react";

import { CodeBar } from "@/components/code-bar";
import { Button } from "@/components/ui/button";

import { cn } from "@/lib/utils";

interface CodeCollapsibleProps {
	label: string;
	content: string;
	children: React.ReactNode;
}

export const CodeCollapsible = ({
	label,
	content,
	children,
}: CodeCollapsibleProps) => {
	const [expanded, setExpanded] = React.useState(false);

	return (
		<div className="mt-4 overflow-hidden rounded-lg border">
			<CodeBar
				label={label}
				className="border-t-0"
				content={content}
				type="component"
			/>

			<div className="relative">
				<div
					className={cn(
						"overflow-hidden transition-none",
						!expanded && "max-h-32",
					)}
				>
					<div
						className={cn(
							"[&_pre]:max-h-[600px] [&_pre]:!pb-16",
							expanded ? "[&>pre]:overflow-auto" : "[&>pre]:overflow-hidden",
						)}
					>
						{children}
					</div>
				</div>
				<div
					className={cn(
						"from-background/50 to-background/90 absolute flex items-center justify-center bg-gradient-to-b p-2",
						expanded ? "inset-x-0 bottom-0 h-12" : "inset-0",
					)}
				>
					<Button
						variant="default"
						size="sm"
						onClick={() => setExpanded(!expanded)}
					>
						{expanded ? "Hide code" : "Show Code"}
					</Button>
				</div>
			</div>
		</div>
	);
};
