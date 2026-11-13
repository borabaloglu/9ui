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
				"bg-input file:text-foreground placeholder:text-muted-foreground focus-visible:ring-ring/50 aria-invalid:ring-destructive/30 dark:aria-invalid:ring-destructive/40 inset-ring-border focus-visible:inset-ring-ring aria-invalid:inset-ring-destructive/60 h-8 w-full min-w-0 rounded-lg px-2.75 py-1 text-sm shadow-xs inset-ring-1 transition-[color,box-shadow] duration-150 ease-out outline-none not-dark:inset-shadow-[0_-1px_--theme(--color-black/6%)] file:inline-flex file:h-6 file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:ring-3 disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:ring-3 dark:inset-shadow-[0_1px_--theme(--color-white/8%)] any-pointer-coarse:h-9 any-pointer-coarse:text-base [&:is(:disabled,[aria-invalid])]:shadow-none [&:is(:focus-visible,:disabled,[aria-invalid])]:inset-shadow-none",
				className,
			)}
			{...props}
		/>
	);
}

export { Input };
