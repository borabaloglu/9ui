import type * as React from "react";

import { DemoRenderer } from "@/components/demo-renderer";
import { PreviewCode } from "@/components/preview-code";

import { getDemo } from "@/lib/demos";
import { highlightCode } from "@/lib/highlight-code";
import { cn } from "@/lib/utils";

interface ComponentPreviewProps extends React.HTMLAttributes<HTMLDivElement> {
	name: string;
	showReload?: boolean;
	className?: string;
	previewClassName?: string;
}

export const ComponentPreview = ({
	name,
	showReload = false,
	className,
	previewClassName,
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
		<div className={cn("mt-4 overflow-hidden rounded-xl border", className)}>
			<div
				className={cn(
					"relative flex min-h-[200px] items-center justify-center p-10",
					previewClassName,
				)}
			>
				<DemoRenderer path={demo.path} showReload={showReload} />
			</div>

			<PreviewCode label={`${name}.tsx`} content={demo.source}>
				<div dangerouslySetInnerHTML={{ __html: highlightCode(demo.source) }} />
			</PreviewCode>
		</div>
	);
};
