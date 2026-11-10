import type * as React from "react";

import { CodeBar } from "@/components/code-bar";
import { DemoRenderer } from "@/components/demo-renderer";

import { getDemo } from "@/lib/demos";
import { highlightCode } from "@/lib/highlight-code";
import { cn } from "@/lib/utils";

interface ComponentPreviewProps extends React.HTMLAttributes<HTMLDivElement> {
	name: string;
	showReload?: boolean;
	className?: string;
}

export const ComponentPreview = ({
	name,
	showReload = false,
	className,
}: ComponentPreviewProps) => {
	const demo = getDemo(name);

	if (!demo) {
		return (
			<p className="text-muted-foreground mt-8 text-sm">
				Demo <code data-inline="">{name}</code> not found.
			</p>
		);
	}

	return (
		<div className={cn("mt-4 overflow-hidden rounded-lg border", className)}>
			<div className="relative flex min-h-[200px] items-center justify-center p-10">
				<DemoRenderer path={demo.path} showReload={showReload} />
			</div>

			<CodeBar label={`${name}.tsx`} content={demo.source} type="demo" />

			<div
				className="[&_pre]:!max-h-[300px]"
				dangerouslySetInnerHTML={{ __html: highlightCode(demo.source) }}
			/>
		</div>
	);
};
