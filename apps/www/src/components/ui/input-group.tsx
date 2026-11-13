"use client";

import type * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { Button, type ButtonProps } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import { cn } from "@/lib/utils";

function InputGroup({ className, ...props }: React.ComponentProps<"div">) {
	return (
		<div
			data-slot="input-group"
			role="group"
			className={cn(
				"group/input-group border-border bg-input relative flex h-8 w-full min-w-0 items-center rounded-lg border transition-[color,border-color,box-shadow] duration-150 ease-out outline-none any-pointer-coarse:h-9",
				"shadow-xs not-dark:bg-clip-padding before:pointer-events-none before:absolute before:inset-0 before:rounded-[calc(var(--radius-lg)-1px)] before:shadow-[0_1px_--theme(--color-black/6%)] has-[[data-slot=input-group-control]:is(:disabled,[aria-invalid=true])]:shadow-none has-[[data-slot=input-group-control]:is(:focus-visible,:disabled,[aria-invalid=true])]:before:shadow-none dark:bg-clip-border dark:before:shadow-[0_-1px_--theme(--color-white/8%)]",
				"has-[>[data-align=block-end]]:h-auto has-[>[data-align=block-end]]:flex-col has-[>[data-align=block-start]]:h-auto has-[>[data-align=block-start]]:flex-col has-[>textarea]:h-auto",
				"any-pointer-coarse:has-[>[data-align=block-end]]:h-auto any-pointer-coarse:has-[>[data-align=block-start]]:h-auto any-pointer-coarse:has-[>textarea]:h-auto",
				"has-[[data-slot=input-group-control]:disabled]:opacity-50",
				"has-[[data-slot=input-group-control][aria-invalid=true]]:border-destructive/60 has-[[data-slot=input-group-control][aria-invalid=true]]:ring-destructive/30 dark:has-[[data-slot=input-group-control][aria-invalid=true]]:ring-destructive/40 has-[[data-slot=input-group-control][aria-invalid=true]]:ring-3",
				"has-[[data-slot=input-group-control]:focus-visible]:border-ring has-[[data-slot=input-group-control]:focus-visible]:ring-ring/50 has-[[data-slot=input-group-control]:focus-visible]:ring-3",
				"has-[>[data-align=block-end]]:[&>input]:pt-3 has-[>[data-align=block-start]]:[&>input]:pb-3 has-[>[data-align=inline-end]]:[&>input]:pr-1.5 has-[>[data-align=inline-start]]:[&>input]:pl-1.5",
				className,
			)}
			{...props}
		/>
	);
}

const inputGroupAddonVariants = cva(
	"text-muted-foreground flex h-auto cursor-text items-center justify-center gap-2 py-1.5 text-sm font-medium select-none [&>svg]:pointer-events-none [&>svg]:shrink-0 [&>svg:not([class*='size-'])]:size-4",
	{
		variants: {
			align: {
				"inline-start":
					"order-first min-w-0 pl-2 has-[>[data-slot=badge]]:-ml-0.75 has-[>button]:-ml-1.25 has-[>kbd]:-ml-0.75 any-pointer-coarse:text-base",
				"inline-end":
					"order-last min-w-0 pr-2 has-[>[data-slot=badge]]:-mr-0.75 has-[>button]:-mr-1.25 has-[>kbd]:-mr-0.75 any-pointer-coarse:text-base",
				"block-start":
					"order-first w-full justify-start px-2.5 pt-2 [&>button:not(:has(~_[data-slot]))]:-mr-0.5 [&>button:not([data-slot]_~_*)]:-ml-0.5 [.border-b]:pb-2",
				"block-end":
					"order-last w-full justify-start px-2.5 pb-2 [&>button:not(:has(~_[data-slot]))]:-mr-0.5 [&>button:not([data-slot]_~_*)]:-ml-0.5 [.border-t]:pt-2",
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
					?.querySelector<HTMLInputElement | HTMLTextAreaElement>(
						"input, textarea",
					)
					?.focus();
			}}
			{...props}
		/>
	);
}

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
	return (
		<Button
			type={type}
			data-size={size}
			variant={variant}
			size={size}
			className={cn(
				"shadow-none any-pointer-coarse:after:hidden",
				(size === "xs" || size === "icon-xs") &&
					"rounded-sm before:rounded-[calc(var(--radius-sm)-1px)]",
				size === "icon-xs" && "[&_svg:not([class*='size-'])]:size-4",
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
				"text-muted-foreground flex min-w-0 items-center gap-2 truncate [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
				className,
			)}
			{...props}
		/>
	);
}

function InputGroupInput({
	className,
	...props
}: React.ComponentProps<typeof Input>) {
	return (
		<Input
			data-slot="input-group-control"
			className={cn(
				"h-full min-w-12 flex-1 rounded-none bg-transparent px-2.5 shadow-none ring-0 inset-ring-0 not-dark:inset-shadow-none focus-visible:ring-0 disabled:opacity-100 aria-invalid:ring-0 dark:inset-shadow-none any-pointer-coarse:h-full",
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
	return (
		<Textarea
			data-slot="input-group-control"
			className={cn(
				"flex-1 resize-none rounded-none bg-transparent px-2.5 py-2 shadow-none ring-0 inset-ring-0 not-dark:inset-shadow-none focus-visible:ring-0 disabled:opacity-100 aria-invalid:ring-0 dark:inset-shadow-none",
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
