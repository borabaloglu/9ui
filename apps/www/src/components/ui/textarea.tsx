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
						"border-border bg-input placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:border-destructive/60 aria-invalid:ring-destructive/30 dark:aria-invalid:ring-destructive/40 block field-sizing-content min-h-16 w-full min-w-0 rounded-lg border px-2.5 py-1.5 text-sm transition-[color,border-color,box-shadow] duration-150 ease-out outline-none focus-visible:ring-3 disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:ring-3 any-pointer-coarse:text-base",
						className,
					)}
					{...props}
				/>
			}
		/>
	);
}

export { Textarea };
