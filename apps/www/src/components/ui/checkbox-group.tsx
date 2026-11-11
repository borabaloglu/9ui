import type * as React from "react";
import { CheckboxGroup as BaseCheckboxGroup } from "@base-ui/react/checkbox-group";

import { cn } from "@/lib/utils";

function CheckboxGroup({
	className,
	...props
}: Omit<BaseCheckboxGroup.Props, "className"> & {
	className?: string;
}) {
	return (
		<BaseCheckboxGroup
			data-slot="checkbox-group"
			className={cn(
				"flex flex-col items-start gap-3 any-pointer-coarse:gap-6",
				className,
			)}
			{...props}
		/>
	);
}

function CheckboxGroupLabel({
	className,
	...props
}: React.ComponentProps<"div">) {
	return (
		<div
			data-slot="checkbox-group-label"
			className={cn(
				"in-data-disabled:text-foreground/50 text-sm leading-snug font-medium",
				className,
			)}
			{...props}
		/>
	);
}

export { CheckboxGroup, CheckboxGroupLabel };
