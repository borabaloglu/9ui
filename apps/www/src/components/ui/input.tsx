import type * as React from "react";
import { Input as BaseInput } from "@base-ui/react/input";

import { cn } from "@/lib/utils";

function Input({
	className,
	type,
	...props
}: Omit<React.ComponentProps<typeof BaseInput>, "className"> & {
	className?: string;
}) {
	return (
		<BaseInput
			type={type}
			data-slot="input"
			className={cn(
				"border-border bg-input file:text-foreground placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:border-destructive/60 aria-invalid:ring-destructive/30 dark:aria-invalid:ring-destructive/40 h-8 w-full min-w-0 rounded-lg border px-2.5 py-1 text-sm transition-[color,border-color,box-shadow] duration-150 ease-out outline-none file:inline-flex file:h-6 file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:ring-3 disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:ring-3 any-pointer-coarse:h-9 any-pointer-coarse:text-base",
				className,
			)}
			{...props}
		/>
	);
}

export { Input };
