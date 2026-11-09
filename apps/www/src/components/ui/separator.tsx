import type * as React from "react";
import { Separator as BaseSeparator } from "@base-ui/react/separator";

import { cn } from "@/lib/utils";

function Separator({
	className,
	orientation = "horizontal",
	...props
}: React.ComponentProps<typeof BaseSeparator>) {
	return (
		<BaseSeparator
			data-slot="separator"
			orientation={orientation}
			className={cn(
				"bg-border shrink-0",
				orientation === "vertical"
					? "w-px not-[[class*='_h-']]:self-stretch"
					: "h-px w-full",
				className,
			)}
			{...props}
		/>
	);
}

export { Separator };
