"use client";

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { Button, type ButtonProps } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import { cn } from "@/lib/utils";

type InputGroupSize = "sm" | "default" | "lg";

const InputGroupContext = React.createContext<InputGroupSize>("default");

const inputGroupSizes = {
	sm: "h-7 rounded-[min(var(--radius-md),0.75rem)] text-[0.8rem] before:rounded-[calc(min(var(--radius-md),0.75rem)-1px)] any-pointer-coarse:h-8",
	default:
		"h-8 rounded-lg text-sm before:rounded-[calc(var(--radius-lg)-1px)] any-pointer-coarse:h-9",
	lg: "h-9 rounded-lg text-sm before:rounded-[calc(var(--radius-lg)-1px)] any-pointer-coarse:h-10",
};

function InputGroup({
	className,
	size = "default",
	...props
}: React.ComponentProps<"div"> & { size?: InputGroupSize }) {
	return (
		<InputGroupContext.Provider value={size}>
			<div
				data-slot="input-group"
				data-size={size}
				role="group"
				className={cn(
					"bg-input relative flex w-full min-w-0 items-center border transition-[border-color,box-shadow] duration-150 ease-out any-pointer-coarse:text-base",
					inputGroupSizes[size],
					"shadow-xs not-dark:bg-clip-padding before:pointer-events-none before:absolute before:inset-0 before:shadow-[0_1px_--theme(--color-black/6%)] has-[[data-slot=input-group-control]:is(:disabled,[readonly],[aria-invalid=true])]:shadow-none has-[[data-slot=input-group-control]:is(:focus-visible,:disabled,[readonly],[aria-invalid=true])]:before:shadow-none has-[[data-slot=input-group-control][readonly]]:bg-transparent dark:before:shadow-[0_-1px_--theme(--color-white/8%)]",
					"has-[>[data-align=block-end]]:h-auto has-[>[data-align=block-end]]:flex-col has-[>[data-align=block-start]]:h-auto has-[>[data-align=block-start]]:flex-col has-[>textarea]:h-auto",
					"has-[[data-slot=input-group-control]:disabled]:opacity-50",
					"has-[[data-slot=input-group-control][aria-invalid=true]]:border-destructive/60 has-[[data-slot=input-group-control][aria-invalid=true]]:ring-destructive/30 dark:has-[[data-slot=input-group-control][aria-invalid=true]]:ring-destructive/40",
					"has-[[data-slot=input-group-control]:focus-visible]:border-ring has-[[data-slot=input-group-control]:focus-visible]:ring-ring/50 has-[[data-slot=input-group-control]:focus-visible]:ring-3",
					"has-[>[data-align=block-end]]:[&>input]:pt-3 has-[>[data-align=block-start]]:[&>input]:pb-3 has-[>[data-align=inline-end]]:[&>input]:pe-1.5 has-[>[data-align=inline-start]]:[&>input]:ps-1.5",
					className,
				)}
				{...props}
			/>
		</InputGroupContext.Provider>
	);
}

const inputGroupAddonVariants = cva(
	"text-muted-foreground flex cursor-text items-center justify-center gap-2 py-1.5 font-medium select-none [&>svg]:pointer-events-none [&>svg]:shrink-0 [&>svg:not([class*='size-'])]:size-4",
	{
		variants: {
			align: {
				"inline-start":
					"order-first min-w-0 ps-2 has-[>[data-slot=badge]]:-ms-0.75 has-[>button]:-ms-1.25 has-[>kbd]:-ms-0.75",
				"inline-end":
					"order-last min-w-0 pe-2 has-[>[data-slot=badge]]:-me-0.75 has-[>button]:-me-1.25 has-[>kbd]:-me-0.75",
				"block-start":
					"order-first w-full justify-start px-2.5 pt-2 [&>button:not(:has(~_[data-slot]))]:-me-0.5 [&>button:not([data-slot]_~_*)]:-ms-0.5 [.border-b]:pb-2",
				"block-end":
					"order-last w-full justify-start px-2.5 pb-2 [&>button:not(:has(~_[data-slot]))]:-me-0.5 [&>button:not([data-slot]_~_*)]:-ms-0.5 [.border-t]:pt-2",
			},
		},
		defaultVariants: {
			align: "inline-start",
		},
	},
);

function InputGroupAddon({
	className,
	align = "inline-start",
	onMouseDown,
	...props
}: React.ComponentProps<"div"> & VariantProps<typeof inputGroupAddonVariants>) {
	return (
		<div
			role="group"
			data-slot="input-group-addon"
			data-align={align}
			className={cn(inputGroupAddonVariants({ align }), className)}
			onMouseDown={(event) => {
				onMouseDown?.(event);
				if (event.defaultPrevented) return;

				const target = event.target as HTMLElement;
				if (!event.currentTarget.contains(target)) return;

				const isInteractive = target.closest(
					"button, a, input, select, textarea, [role='button'], [role='combobox'], [role='listbox']",
				);
				if (isInteractive) return;

				event.preventDefault();
				event.currentTarget.parentElement
					?.querySelector<HTMLElement>("[data-slot=input-group-control]")
					?.focus();
			}}
			{...props}
		/>
	);
}

const inputGroupButtonHeights = {
	sm: {
		text: "h-5 any-pointer-coarse:h-6",
		icon: "size-5 any-pointer-coarse:size-6",
	},
	default: {
		text: "h-6 any-pointer-coarse:h-7",
		icon: "size-6 any-pointer-coarse:size-7",
	},
	lg: {
		text: "h-7 any-pointer-coarse:h-8",
		icon: "size-7 any-pointer-coarse:size-8",
	},
};

function InputGroupButton({
	className,
	type = "button",
	variant = "ghost",
	size = "xs",
	...props
}: Omit<ButtonProps, "size" | "type" | "className"> & {
	size?: "xs" | "sm" | "icon-xs" | "icon-sm";
	type?: "button" | "submit" | "reset";
	className?: string;
}) {
	const groupSize = React.useContext(InputGroupContext);
	const heights = inputGroupButtonHeights[groupSize];

	return (
		<Button
			type={type}
			variant={variant}
			size={size}
			className={cn(
				"rounded-sm shadow-none before:rounded-[calc(var(--radius-sm)-1px)] any-pointer-coarse:after:inset-x-0 any-pointer-coarse:after:inset-y-[calc(50%-22px)] any-pointer-coarse:after:size-auto any-pointer-coarse:after:min-h-0 any-pointer-coarse:after:min-w-0",
				size === "icon-xs" && "[&_svg:not([class*='size-'])]:size-4",
				size.startsWith("icon") ? heights.icon : heights.text,
				className,
			)}
			{...props}
		/>
	);
}

function InputGroupText({ className, ...props }: React.ComponentProps<"span">) {
	return (
		<span
			data-slot="input-group-text"
			className={cn(
				"text-muted-foreground block min-w-0 truncate has-[>svg]:flex has-[>svg]:items-center has-[>svg]:gap-2 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
				className,
			)}
			{...props}
		/>
	);
}

function InputGroupInput({
	className,
	size,
	...props
}: React.ComponentProps<typeof Input>) {
	const groupSize = React.useContext(InputGroupContext);
	const resolvedSize = size ?? groupSize;

	return (
		<Input
			data-slot="input-group-control"
			size={resolvedSize}
			className={cn(
				"h-full min-w-12 flex-1 rounded-none bg-transparent px-2.5 shadow-none inset-ring-0 not-dark:inset-shadow-none focus-visible:ring-0 focus-visible:outline-none disabled:opacity-100 dark:inset-shadow-none any-pointer-coarse:h-full",
				resolvedSize === "lg" && "px-3",
				className,
			)}
			{...props}
		/>
	);
}

function InputGroupTextarea({
	className,
	...props
}: React.ComponentProps<typeof Textarea>) {
	const groupSize = React.useContext(InputGroupContext);

	return (
		<Textarea
			data-slot="input-group-control"
			className={cn(
				"flex-1 resize-none rounded-none bg-transparent px-2.5 py-2 shadow-none inset-ring-0 not-dark:inset-shadow-none focus-visible:ring-0 focus-visible:outline-none disabled:opacity-100 dark:inset-shadow-none",
				groupSize === "sm" && "py-1.5 text-[0.8rem]",
				groupSize === "lg" && "px-3",
				className,
			)}
			{...props}
		/>
	);
}

export {
	InputGroup,
	InputGroupAddon,
	InputGroupButton,
	InputGroupInput,
	InputGroupText,
	InputGroupTextarea,
};
