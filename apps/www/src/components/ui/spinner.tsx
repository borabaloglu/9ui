import type * as React from "react";
import { LoaderCircleIcon } from "lucide-react";

import { cn } from "@/lib/utils";

function Spinner({
	className,
	...props
}: Omit<React.ComponentProps<typeof LoaderCircleIcon>, "size">) {
	return (
		<LoaderCircleIcon
			data-slot="spinner"
			role="status"
			aria-label="Loading"
			className={cn("size-4 animate-[spin_800ms_linear_infinite]", className)}
			{...props}
		/>
	);
}

export { Spinner };
