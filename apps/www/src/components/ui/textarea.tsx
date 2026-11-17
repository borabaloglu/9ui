import type * as React from "react";
import { Field as BaseField } from "@base-ui/react/field";

import { cn } from "@/lib/utils";

function Textarea({
	className,
	ref,
	id,
	name,
	value,
	defaultValue,
	disabled,
	onValueChange,
	...props
}: Omit<React.ComponentProps<"textarea">, "value" | "defaultValue"> &
	Pick<BaseField.Control.Props, "value" | "defaultValue" | "onValueChange">) {
	return (
		<BaseField.Control
			ref={ref as React.Ref<HTMLInputElement>}
			id={id}
			name={name}
			value={value}
			defaultValue={defaultValue}
			disabled={disabled}
			onValueChange={onValueChange}
			render={
				<textarea
					data-slot="textarea"
					className={cn(
						"bg-input placeholder:text-muted-foreground focus-visible:ring-ring/50 aria-invalid:ring-destructive/30 dark:aria-invalid:ring-destructive/40 inset-ring-border focus-visible:inset-ring-ring aria-invalid:inset-ring-destructive/60 block field-sizing-content min-h-16 w-full min-w-0 rounded-lg px-2.75 py-1.75 text-sm shadow-xs inset-ring-1 transition-[box-shadow] duration-150 ease-out outline-none not-dark:inset-shadow-[0_-1px_--theme(--color-black/6%)] focus-visible:ring-3 disabled:cursor-not-allowed disabled:opacity-50 dark:inset-shadow-[0_1px_--theme(--color-white/8%)] any-pointer-coarse:text-base [&:is(:disabled,[readonly],[aria-invalid=true])]:shadow-none [&:is(:focus-visible,:disabled,[readonly],[aria-invalid=true])]:inset-shadow-[0_0_#0000] [&[readonly]]:bg-transparent",
						className,
					)}
					{...props}
				/>
			}
		/>
	);
}

export { Textarea };
