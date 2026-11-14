import type * as React from "react";

import { cn } from "@/lib/utils";

function Skeleton({ className, ...props }: React.ComponentProps<"div">) {
	return (
		<div
			data-slot="skeleton"
			className={cn(
				"animate-skeleton bg-muted rounded-sm bg-[linear-gradient(120deg,transparent_40%,var(--skeleton-highlight),transparent_60%)] bg-size-[200%_100%] bg-fixed [--skeleton-highlight:--alpha(var(--color-white)/64%)] motion-reduce:animate-none motion-reduce:bg-none dark:[--skeleton-highlight:--alpha(var(--color-white)/6%)]",
				className,
			)}
			{...props}
		/>
	);
}

export { Skeleton };
