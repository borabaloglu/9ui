"use client";

import type * as React from "react";
import { Button as BaseButton } from "@base-ui/react/button";

import { cn } from "@/lib/utils";

type ButtonVariant =
	| "default"
	| "secondary"
	| "ghost"
	| "outline"
	| "link"
	| "destructive";

type ButtonSize = "sm" | "default" | "lg" | "icon-sm" | "icon";

type ButtonProps = React.ComponentProps<typeof BaseButton> & {
	variant?: ButtonVariant;
	size?: ButtonSize;
};

/**
 * Structure only: layout, interaction and accessibility.
 * Everything visual lives in `skin-button`, defined per style in ../styles.
 */
function Button({
	className,
	variant = "default",
	size = "default",
	...props
}: ButtonProps) {
	return (
		<BaseButton
			data-slot="button"
			data-variant={variant}
			data-size={size}
			className={cn(
				"group/button skin-button relative inline-flex shrink-0 cursor-pointer items-center justify-center whitespace-nowrap outline-none select-none data-disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:shrink-0",
				className,
			)}
			{...props}
		/>
	);
}

export type { ButtonProps };
export { Button };
