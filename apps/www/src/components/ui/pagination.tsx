import type * as React from "react";
import { mergeProps } from "@base-ui/react/merge-props";
import { useRender } from "@base-ui/react/use-render";
import { ChevronLeftIcon, ChevronRightIcon, EllipsisIcon } from "lucide-react";

import { type Button, buttonVariants } from "@/components/ui/button";

import { cn } from "@/lib/utils";

type PaginationSize = React.ComponentProps<typeof Button>["size"];

const paginationLinkIconSizes: Partial<
	Record<NonNullable<PaginationSize>, string>
> = {
	"icon-xs":
		"w-auto min-w-6 px-1 any-pointer-coarse:w-auto any-pointer-coarse:min-w-7",
	"icon-sm":
		"w-auto min-w-7 px-1 any-pointer-coarse:w-auto any-pointer-coarse:min-w-8",
	icon: "w-auto min-w-8 px-1 any-pointer-coarse:w-auto any-pointer-coarse:min-w-9",
	"icon-lg":
		"w-auto min-w-9 px-1 any-pointer-coarse:w-auto any-pointer-coarse:min-w-10",
	"icon-xl":
		"w-auto min-w-10 px-1 any-pointer-coarse:w-auto any-pointer-coarse:min-w-11",
};

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
					size && paginationLinkIconSizes[size],
					"tabular-nums aria-disabled:pointer-events-none aria-disabled:opacity-50",
					active &&
						"[&:active]:bg-input dark:[&:active]:bg-input [&:active]:hover:bg-accent dark:[&:active]:hover:bg-accent/50 active:before:shadow-[0_1px_--theme(--color-black/6%)] dark:active:before:shadow-[0_-1px_--theme(--color-white/8%)] [&:is(:active,[data-disabled])]:shadow-xs motion-safe:[&:not([data-variant=link]):not([aria-haspopup=menu]):not([aria-haspopup=listbox]):not([role=combobox])]:active:scale-100",
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
			<EllipsisIcon />
		</span>
	);
}

export type { PaginationLinkProps, PaginationStepProps };
export {
	Pagination,
	PaginationContent,
	PaginationEllipsis,
	PaginationItem,
	PaginationLink,
	PaginationNext,
	PaginationPrevious,
};
