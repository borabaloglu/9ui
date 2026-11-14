import type * as React from "react";

import { ScrollArea } from "@/components/ui/scroll-area";

import { cn } from "@/lib/utils";

function Table({
	className,
	containerClassName,
	variant = "default",
	size = "default",
	...props
}: React.ComponentProps<"table"> & {
	containerClassName?: string;
	variant?: "default" | "card";
	size?: "default" | "sm";
}) {
	const card = variant === "card";

	return (
		<div
			data-slot="table-container"
			data-variant={variant}
			data-size={size}
			className={cn(
				"relative flex w-full flex-col",
				card &&
					"bg-card text-card-foreground rounded-xl border shadow-xs not-dark:bg-clip-padding before:pointer-events-none before:absolute before:inset-0 before:rounded-[calc(var(--radius-xl)-1px)] before:shadow-[0_1px_--theme(--color-black/6%)] dark:bg-clip-border dark:before:shadow-[0_-1px_--theme(--color-white/8%)]",
				containerClassName,
			)}
		>
			<ScrollArea
				className={cn(
					"min-h-0 flex-1",
					card && "rounded-[calc(var(--radius-xl)-1px)]",
				)}
			>
				<table
					data-slot="table"
					className={cn(
						"isolate w-full caption-bottom text-sm tabular-nums",
						className,
					)}
					{...props}
				/>
			</ScrollArea>
		</div>
	);
}

function TableHeader({
	className,
	sticky = false,
	...props
}: React.ComponentProps<"thead"> & { sticky?: boolean }) {
	return (
		<thead
			data-slot="table-header"
			data-sticky={sticky ? "" : undefined}
			className={cn(
				"in-data-[variant=card]:bg-muted/50 [&_tr]:border-b data-sticky:[&_tr]:border-b-0",
				className,
			)}
			{...props}
		/>
	);
}

function TableBody({ className, ...props }: React.ComponentProps<"tbody">) {
	return (
		<tbody
			data-slot="table-body"
			className={cn("[&_tr:last-child]:border-0", className)}
			{...props}
		/>
	);
}

function TableFooter({ className, ...props }: React.ComponentProps<"tfoot">) {
	return (
		<tfoot
			data-slot="table-footer"
			className={cn(
				"bg-muted/50 border-t font-medium [&>tr]:last:border-b-0",
				className,
			)}
			{...props}
		/>
	);
}

function TableRow({ className, ...props }: React.ComponentProps<"tr">) {
	return (
		<tr
			data-slot="table-row"
			className={cn(
				"in-data-[slot=table-body]:hover:bg-muted/50 aria-selected:bg-muted data-[state=selected]:bg-muted border-b",
				className,
			)}
			{...props}
		/>
	);
}

function TableHead({
	className,
	scope = "col",
	...props
}: React.ComponentProps<"th">) {
	return (
		<th
			data-slot="table-head"
			scope={scope}
			className={cn(
				"text-muted-foreground in-data-sticky:bg-background in-data-sticky:in-data-[slot=card]:bg-card h-10 px-3 text-start align-middle font-medium whitespace-nowrap first:ps-4 last:pe-4 in-data-sticky:sticky in-data-sticky:top-0 in-data-sticky:z-1 in-data-sticky:shadow-[inset_0_-1px_var(--border)] in-data-[size=sm]:h-8 in-data-sticky:in-data-[variant=card]:bg-[color-mix(in_oklab,var(--muted)_50%,var(--card))] has-[[role=checkbox]]:w-px first:has-[[role=checkbox]]:pe-0 last:has-[[role=checkbox]]:ps-0 any-pointer-coarse:h-11 any-pointer-coarse:in-data-[size=sm]:h-10 *:[[role=checkbox]]:flex",
				className,
			)}
			{...props}
		/>
	);
}

function TableCell({ className, ...props }: React.ComponentProps<"td">) {
	return (
		<td
			data-slot="table-cell"
			className={cn(
				"px-3 py-2.5 align-middle whitespace-nowrap first:ps-4 last:pe-4 in-data-[size=sm]:py-1.5 has-[[role=checkbox]]:w-px first:has-[[role=checkbox]]:pe-0 last:has-[[role=checkbox]]:ps-0 any-pointer-coarse:py-3 any-pointer-coarse:in-data-[size=sm]:py-2.5 *:[[role=checkbox]]:flex",
				className,
			)}
			{...props}
		/>
	);
}

function TableCaption({
	className,
	...props
}: React.ComponentProps<"caption">) {
	return (
		<caption
			data-slot="table-caption"
			className={cn(
				"text-muted-foreground mt-4 text-sm in-data-[variant=card]:mt-0 in-data-[variant=card]:border-t in-data-[variant=card]:px-4 in-data-[variant=card]:py-3",
				className,
			)}
			{...props}
		/>
	);
}

export {
	Table,
	TableBody,
	TableCaption,
	TableCell,
	TableFooter,
	TableHead,
	TableHeader,
	TableRow,
};
