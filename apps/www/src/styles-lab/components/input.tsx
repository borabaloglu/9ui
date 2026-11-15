import type * as React from "react";
import { Input as BaseInput } from "@base-ui/react/input";

import { cn } from "@/lib/utils";

function Input({
	className,
	...props
}: Omit<React.ComponentProps<typeof BaseInput>, "className"> & {
	className?: string;
}) {
	return (
		<BaseInput
			data-slot="input"
			className={cn(
				"skin-input w-full min-w-0 outline-none disabled:cursor-not-allowed",
				className,
			)}
			{...props}
		/>
	);
}

function Label({ className, ...props }: React.ComponentProps<"label">) {
	return (
		// biome-ignore lint/a11y/noLabelWithoutControl: association is set by the consumer
		<label
			data-slot="label"
			className={cn(
				"skin-label flex w-fit items-center select-none",
				className,
			)}
			{...props}
		/>
	);
}

export { Input, Label };
