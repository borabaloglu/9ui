import * as React from "react"
import { ChevronRightIcon } from "lucide-react"

import { cn } from "@/lib/utils"

const Breadcrumb = React.forwardRef<
	HTMLElement,
	React.ComponentPropsWithoutRef<"nav">
>(({ ...props }, ref) => <nav ref={ref} aria-label="breadcrumb" {...props} />)

Breadcrumb.displayName = "Breadcrumb"

const BreadcrumbList = React.forwardRef<
	HTMLOListElement,
	React.OlHTMLAttributes<HTMLOListElement>
>(({ className, ...props }, ref) => (
	<ol
		ref={ref}
		className={cn(
			"flex flex-wrap items-center gap-2 break-words text-sm",
			className
		)}
		{...props}
	/>
))
BreadcrumbList.displayName = "BreadcrumbList"

export interface BreadcrumbItemProps
	extends React.LiHTMLAttributes<HTMLLIElement> {
	active?: boolean
}

const BreadcrumbItem = React.forwardRef<HTMLLIElement, BreadcrumbItemProps>(
	({ className, active, ...props }, ref) => (
		<li
			ref={ref}
			aria-current={active ? "page" : undefined}
			className={cn(
				"inline-flex items-center gap-2 text-muted-foreground [&>a]:transition-colors [&>a]:hover:text-foreground [&>svg]:size-4",
				active && "text-foreground",
				className
			)}
			{...props}
		/>
	)
)
BreadcrumbItem.displayName = "BreadcrumbItem"

const BreadcrumbSeparator = React.forwardRef<
	HTMLSpanElement,
	React.HTMLAttributes<HTMLSpanElement>
>(({ className, children, ...props }, ref) => (
	<span
		ref={ref}
		aria-hidden="true"
		role="presentation"
		className={cn("text-muted-foreground [&>svg]:size-3", className)}
		{...props}
	>
		{children || <ChevronRightIcon />}
	</span>
))
BreadcrumbSeparator.displayName = "BreadcrumbSeparator"

export { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbSeparator }
