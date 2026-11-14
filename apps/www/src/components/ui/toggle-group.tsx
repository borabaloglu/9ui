"use client";

import * as React from "react";
import { Toggle as BaseToggle } from "@base-ui/react/toggle";
import { ToggleGroup as BaseToggleGroup } from "@base-ui/react/toggle-group";
import type { VariantProps } from "class-variance-authority";

import { toggleVariants } from "@/components/ui/toggle";

import { cn } from "@/lib/utils";

type ToggleGroupContextValue = VariantProps<typeof toggleVariants> & {
	joined: boolean;
	vertical: boolean;
};

const ToggleGroupContext = React.createContext<ToggleGroupContextValue>({
	variant: "default",
	size: "default",
	joined: false,
	vertical: false,
});

function ToggleGroup<Value extends string>({
	className,
	style,
	variant = "default",
	size = "default",
	spacing = variant === "outline" ? 0 : 0.5,
	orientation = "horizontal",
	children,
	...props
}: Omit<BaseToggleGroup.Props<Value>, "className" | "style"> &
	VariantProps<typeof toggleVariants> & {
		className?: string;
		style?: React.CSSProperties;
		spacing?: number;
	}) {
	const vertical = orientation === "vertical";
	const context = React.useMemo(
		() => ({ variant, size, joined: spacing === 0, vertical }),
		[variant, size, spacing, vertical],
	);

	return (
		<BaseToggleGroup
			data-slot="toggle-group"
			data-variant={variant}
			data-size={size}
			orientation={orientation}
			style={
				{ "--toggle-group-spacing": spacing, ...style } as React.CSSProperties
			}
			className={cn(
				"flex w-fit gap-[--spacing(var(--toggle-group-spacing))]",
				vertical ? "flex-col items-stretch" : "items-center",
				className,
			)}
			{...props}
		>
			<ToggleGroupContext.Provider value={context}>
				{children}
			</ToggleGroupContext.Provider>
		</BaseToggleGroup>
	);
}

function ToggleGroupItem({
	className,
	...props
}: Omit<BaseToggle.Props, "className"> & {
	className?: string;
}) {
	const { variant, size, joined, vertical } =
		React.useContext(ToggleGroupContext);

	return (
		<BaseToggle
			data-slot="toggle-group-item"
			className={cn(
				toggleVariants({ variant, size }),
				"focus-visible:z-1",
				vertical
					? "any-pointer-coarse:after:min-h-0"
					: "any-pointer-coarse:after:min-w-0",
				joined && "motion-safe:active:scale-100",
				joined &&
					(vertical
						? "not-first:rounded-t-none not-first:border-t-0 not-last:rounded-b-none not-first:before:rounded-t-none not-last:before:rounded-b-none not-dark:not-last:before:hidden dark:not-first:before:hidden"
						: "not-first:rounded-s-none not-first:border-s-0 not-last:rounded-e-none not-first:before:rounded-s-none not-last:before:rounded-e-none"),
				className,
			)}
			{...props}
		/>
	);
}

export { ToggleGroup, ToggleGroupItem };
