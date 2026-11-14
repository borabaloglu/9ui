"use client";

import type * as React from "react";
import { mergeProps } from "@base-ui/react/merge-props";
import { useRender } from "@base-ui/react/use-render";
import {
	ChevronLeftIcon,
	ChevronRightIcon,
	MoreHorizontalIcon,
} from "lucide-react";

import { type Button, buttonVariants } from "@/components/ui/button";

import { cn } from "@/lib/utils";

type PaginationSize = React.ComponentProps<typeof Button>["size"];

function Pagination({ className, ...props }: React.ComponentProps<"nav">) {
	return (
		<nav
			aria-label="pagination"
			data-slot="pagination"
			className={cn("mx-auto flex w-full justify-center", className)}
			{...props}
		/>
	);
}

function PaginationContent({
	className,
	...props
}: React.ComponentProps<"ul">) {
	return (
		<ul
			data-slot="pagination-content"
			className={cn("flex items-center gap-0.5", className)}
			{...props}
		/>
	);
}

function PaginationItem(props: React.ComponentProps<"li">) {
	return <li data-slot="pagination-item" {...props} />;
}

type PaginationLinkProps = useRender.ComponentProps<"a"> & {
	active?: boolean;
	size?: PaginationSize;
};

function PaginationLink({
	className,
	active = false,
	size = "icon",
	render,
	...props
}: PaginationLinkProps) {
	return useRender({
		defaultTagName: "a",
		props: mergeProps<"a">(
			{
				"aria-current": active ? "page" : undefined,
				className: cn(
					buttonVariants({ variant: active ? "outline" : "ghost", size }),
					"tabular-nums aria-disabled:pointer-events-none aria-disabled:opacity-50",
					active &&
						"active:before:shadow-[0_1px_--theme(--color-black/6%)] dark:active:before:shadow-[0_-1px_--theme(--color-white/8%)] [&:is(:active,[data-disabled])]:shadow-xs motion-safe:[&:not([data-variant=link]):not([aria-haspopup])]:active:scale-100",
					className,
				),
			},
			props,
		),
		render,
		state: {
			slot: "pagination-link",
			active,
		},
	});
}

type PaginationStepProps = PaginationLinkProps & {
	text?: string;
};

function PaginationPrevious({
	className,
	text = "Previous",
	...props
}: PaginationStepProps) {
	return (
		<PaginationLink
			aria-label="Go to previous page"
			size="default"
			className={cn(
				"max-sm:has-data-[icon]:aspect-square max-sm:has-data-[icon]:px-0",
				className,
			)}
			{...props}
		>
			<ChevronLeftIcon
				className="rtl:rotate-180"
				data-icon={text ? "inline-start" : undefined}
			/>
			{text && <span className="max-sm:hidden">{text}</span>}
		</PaginationLink>
	);
}

function PaginationNext({
	className,
	text = "Next",
	...props
}: PaginationStepProps) {
	return (
		<PaginationLink
			aria-label="Go to next page"
			size="default"
			className={cn(
				"max-sm:has-data-[icon]:aspect-square max-sm:has-data-[icon]:px-0",
				className,
			)}
			{...props}
		>
			{text && <span className="max-sm:hidden">{text}</span>}
			<ChevronRightIcon
				className="rtl:rotate-180"
				data-icon={text ? "inline-end" : undefined}
			/>
		</PaginationLink>
	);
}

function PaginationEllipsis({
	className,
	size = "icon",
	...props
}: React.ComponentProps<"span"> & { size?: PaginationSize }) {
	return (
		<span
			aria-hidden
			data-slot="pagination-ellipsis"
			className={cn(
				buttonVariants({ variant: "ghost", size }),
				"text-muted-foreground pointer-events-none",
				className,
			)}
			{...props}
		>
			<MoreHorizontalIcon />
		</span>
	);
}

export type { PaginationLinkProps };
export {
	Pagination,
	PaginationContent,
	PaginationEllipsis,
	PaginationItem,
	PaginationLink,
	PaginationNext,
	PaginationPrevious,
};
