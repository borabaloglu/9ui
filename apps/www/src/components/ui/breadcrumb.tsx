import type * as React from "react";
import { mergeProps } from "@base-ui/react/merge-props";
import { useRender } from "@base-ui/react/use-render";
import { ChevronRightIcon, EllipsisIcon } from "lucide-react";

import { cn } from "@/lib/utils";

function Breadcrumb({ ...props }: React.ComponentProps<"nav">) {
	return <nav aria-label="breadcrumb" data-slot="breadcrumb" {...props} />;
}

function BreadcrumbList({ className, ...props }: React.ComponentProps<"ol">) {
	return (
		<ol
			data-slot="breadcrumb-list"
			className={cn(
				"text-muted-foreground flex flex-wrap items-center gap-1.5 text-sm wrap-break-word",
				className,
			)}
			{...props}
		/>
	);
}

function BreadcrumbItem({ className, ...props }: React.ComponentProps<"li">) {
	return (
		<li
			data-slot="breadcrumb-item"
			className={cn("inline-flex items-center gap-1", className)}
			{...props}
		/>
	);
}

function BreadcrumbLink({
	className,
	render,
	...props
}: useRender.ComponentProps<"a">) {
	return useRender({
		defaultTagName: "a",
		props: mergeProps<"a">(
			{
				className: cn(
					"hover:text-foreground active:text-foreground focus-visible:ring-ring/50 relative rounded-sm transition-colors duration-150 ease-out outline-none focus-visible:ring-3 any-pointer-coarse:after:absolute any-pointer-coarse:after:-inset-x-1 any-pointer-coarse:after:-inset-y-3",
					className,
				),
			},
			props,
		),
		render,
		state: {
			slot: "breadcrumb-link",
		},
	});
}

function BreadcrumbPage({ className, ...props }: React.ComponentProps<"span">) {
	return (
		<span
			data-slot="breadcrumb-page"
			aria-current="page"
			className={cn("text-foreground font-normal", className)}
			{...props}
		/>
	);
}

function BreadcrumbSeparator({
	children,
	className,
	...props
}: React.ComponentProps<"li">) {
	return (
		<li
			data-slot="breadcrumb-separator"
			role="presentation"
			aria-hidden="true"
			className={cn("[&>svg]:size-3.5", className)}
			{...props}
		>
			{children ?? <ChevronRightIcon className="rtl:rotate-180" />}
		</li>
	);
}

function BreadcrumbEllipsis({
	className,
	...props
}: React.ComponentProps<"span">) {
	return (
		<span
			data-slot="breadcrumb-ellipsis"
			role="presentation"
			aria-hidden="true"
			className={cn(
				"flex size-5 items-center justify-center [&>svg]:size-4",
				className,
			)}
			{...props}
		>
			<EllipsisIcon />
		</span>
	);
}

export {
	Breadcrumb,
	BreadcrumbEllipsis,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbList,
	BreadcrumbPage,
	BreadcrumbSeparator,
};
