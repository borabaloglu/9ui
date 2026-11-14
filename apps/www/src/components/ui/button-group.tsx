"use client";

import * as React from "react";
import { mergeProps } from "@base-ui/react/merge-props";
import { useRender } from "@base-ui/react/use-render";

import { Separator } from "@/components/ui/separator";

import { cn } from "@/lib/utils";

type ButtonGroupOrientation = "horizontal" | "vertical";

const ButtonGroupContext =
	React.createContext<ButtonGroupOrientation>("horizontal");

function ButtonGroup({
	className,
	orientation = "horizontal",
	...props
}: React.ComponentProps<"div"> & {
	orientation?: ButtonGroupOrientation;
}) {
	return (
		<ButtonGroupContext.Provider value={orientation}>
			<div
				role="group"
				data-slot="button-group"
				data-orientation={orientation}
				className={cn(
					"dark:*:data-[variant=outline]:active:bg-accent flex w-fit items-stretch *:focus-visible:z-1 *:has-focus-visible:z-1 has-[>[data-slot=button-group]]:gap-2 *:aria-invalid:z-1 *:data-[slot=select-trigger]:shrink-0 [&>button]:active:scale-100! [&>button]:active:inset-shadow-sm *:[[data-slot]~[data-slot=input]]:focus-visible:[clip-path:none] *:[[data-slot]~[data-slot=input]]:aria-invalid:[clip-path:none]",
					orientation === "vertical"
						? "flex-col *:data-slot:has-[~[data-slot]]:rounded-b-none *:data-slot:has-[~[data-slot]]:before:rounded-b-none not-dark:*:data-slot:has-[~[data-slot]]:before:hidden [&>button]:any-pointer-coarse:after:min-h-0 *:[[data-slot]~[data-slot=input]]:-mt-px *:[[data-slot]~[data-slot=input]]:[clip-path:inset(1px_-3px_-3px_-3px)] *:[[data-slot]~[data-slot]]:rounded-t-none *:[[data-slot]~[data-slot]]:border-t-0 *:[[data-slot]~[data-slot]]:before:rounded-t-none dark:*:[[data-slot]~[data-slot]]:before:hidden"
						: "*:data-slot:has-[~[data-slot]]:rounded-e-none *:data-slot:has-[~[data-slot]]:before:rounded-e-none [&>button]:any-pointer-coarse:after:min-w-0 *:[[data-slot]~[data-slot=input]]:-ms-px *:[[data-slot]~[data-slot=input]]:[clip-path:inset(-3px_-3px_-3px_1px)] rtl:*:[[data-slot]~[data-slot=input]]:[clip-path:inset(-3px_1px_-3px_-3px)] *:[[data-slot]~[data-slot]]:rounded-s-none *:[[data-slot]~[data-slot]]:border-s-0 *:[[data-slot]~[data-slot]]:before:rounded-s-none",
					className,
				)}
				{...props}
			/>
		</ButtonGroupContext.Provider>
	);
}

function ButtonGroupText({
	className,
	render,
	...props
}: useRender.ComponentProps<"div">) {
	return useRender({
		defaultTagName: "div",
		props: mergeProps<"div">(
			{
				className: cn(
					"border-border bg-muted text-foreground relative flex items-center gap-2 rounded-lg border px-2.5 text-sm font-medium whitespace-nowrap shadow-xs not-dark:bg-clip-padding before:pointer-events-none before:absolute before:inset-0 before:rounded-[calc(var(--radius-lg)-1px)] before:shadow-[0_1px_--theme(--color-black/6%)] dark:bg-clip-border dark:before:shadow-[0_-1px_--theme(--color-white/8%)] any-pointer-coarse:text-base [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
					className,
				),
			},
			props,
		),
		render,
		state: {
			slot: "button-group-text",
		},
	});
}

function ButtonGroupSeparator(
	props: Omit<React.ComponentProps<typeof Separator>, "orientation">,
) {
	const orientation = React.useContext(ButtonGroupContext);

	return (
		<Separator
			data-slot="button-group-separator"
			orientation={orientation === "vertical" ? "horizontal" : "vertical"}
			{...props}
		/>
	);
}

export { ButtonGroup, ButtonGroupSeparator, ButtonGroupText };
