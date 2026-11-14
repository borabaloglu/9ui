import type * as React from "react";

import { cn } from "@/lib/utils";

function AspectRatio({
	ratio = 1,
	className,
	style,
	...props
}: React.ComponentProps<"div"> & { ratio?: number }) {
	return (
		<div
			data-slot="aspect-ratio"
			style={{ "--ratio": ratio, ...style } as React.CSSProperties}
			className={cn("relative aspect-(--ratio) w-full", className)}
			{...props}
		/>
	);
}

export { AspectRatio };
