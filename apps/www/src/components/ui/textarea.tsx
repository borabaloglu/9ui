import type * as React from "react";
import { Field as BaseField } from "@base-ui/react/field";

import { cn } from "@/lib/utils";

function Textarea({
	className,
	ref,
	...props
}: React.ComponentProps<"textarea">) {
	return (
		<BaseField.Control
			ref={ref}
			id={props.id}
			name={props.name}
			value={props.value}
			defaultValue={props.defaultValue}
			disabled={props.disabled}
			render={
				<textarea
					data-slot="textarea"
					className={cn(
						"bg-input placeholder:text-muted-foreground focus-visible:ring-ring/50 aria-invalid:ring-destructive/30 dark:aria-invalid:ring-destructive/40 inset-ring-border focus-visible:inset-ring-ring aria-invalid:inset-ring-destructive/60 block field-sizing-content min-h-16 w-full min-w-0 rounded-lg px-2.75 py-1.75 text-sm shadow-xs inset-ring-1 transition-[color,box-shadow] duration-150 ease-out outline-none not-dark:inset-shadow-[0_-1px_--theme(--color-black/6%)] focus-visible:ring-3 disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:ring-3 dark:inset-shadow-[0_1px_--theme(--color-white/8%)] any-pointer-coarse:text-base [&:is(:disabled,[aria-invalid])]:shadow-none [&:is(:focus-visible,:disabled,[aria-invalid])]:inset-shadow-none",
						className,
					)}
					{...props}
				/>
			}
		/>
	);
}

export { Textarea };
