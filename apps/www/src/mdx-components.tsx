import * as React from "react"
import Link from "next/link"
import { MessageSquareWarningIcon } from "lucide-react"

import { CodeBlock } from "@/components/code-block"
import { CommandBlock } from "@/components/command-block"
import { ComponentAnatomy } from "@/components/component-anatomy"
import { ComponentInstallation } from "@/components/component-installation"
import { ComponentLinks } from "@/components/component-links"
import { ComponentPreview } from "@/components/component-preview"
import { ComponentSource } from "@/components/component-source"
import { Icons } from "@/components/icons"
import { ThemeToggle } from "@/components/theme-toggle"
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion"
import {
	Alert,
	AlertContent,
	AlertDescription,
	AlertIcon,
	AlertTitle,
} from "@/components/ui/alert"
import { Separator } from "@/components/ui/separator"
import { Tab, TabContent, Tabs, TabsList } from "@/components/ui/tabs"

import { cn } from "@/lib/utils"

interface MDXComponents {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	[key: string]: React.FC<any> | MDXComponents
}

const components: MDXComponents = {
	h1: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
		<h1
			className={cn("scroll-m-20 text-4xl font-bold", className)}
			{...props}
		/>
	),
	h2: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
		<h2
			className={cn("mt-10 scroll-m-20 text-2xl font-semibold", className)}
			{...props}
		/>
	),
	h3: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
		<h3
			className={cn("mt-8 scroll-m-20 text-xl font-semibold", className)}
			{...props}
		/>
	),
	h4: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
		<h4
			className={cn("mt-4 scroll-m-20 text-lg font-semibold", className)}
			{...props}
		/>
	),
	p: ({ className, ...props }: React.HTMLAttributes<HTMLParagraphElement>) => (
		<p
			className={cn("leading-7 [&:not(:first-child)]:mt-4", className)}
			{...props}
		/>
	),
	ul: ({ className, ...props }: React.HTMLAttributes<HTMLUListElement>) => (
		<ul className={cn("mt-2 space-y-2 font-normal", className)} {...props} />
	),
	ol: ({ className, ...props }: React.HTMLAttributes<HTMLOListElement>) => (
		<ol className={cn("mt-2 space-y-2 font-normal", className)} {...props} />
	),
	li: ({ className, ...props }: React.HTMLAttributes<HTMLLIElement>) => (
		<li className={cn("ml-2 list-inside list-disc", className)} {...props} />
	),
	code: ({
		className,
		...props
	}: React.HTMLAttributes<HTMLElement> & {
		"data-inline"?: string
	}) => {
		const isInline = props["data-inline"] === ""

		return (
			<code
				className={cn(
					isInline &&
						"relative rounded-sm bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-normal text-accent-foreground",
					className
				)}
				{...props}
			/>
		)
	},
	blockquote: ({
		className,
		...props
	}: React.BlockquoteHTMLAttributes<HTMLQuoteElement>) => (
		<blockquote
			className={cn(
				"mt-6 border-l-2 pl-6 italic text-muted-foreground",
				className
			)}
			{...props}
		/>
	),
	table: ({
		className,
		...props
	}: React.TableHTMLAttributes<HTMLTableElement>) => (
		<div className="my-6 w-full overflow-hidden rounded-lg border">
			<table className={cn("w-full", className)} {...props} />
		</div>
	),
	thead: ({
		className,
		...props
	}: React.HTMLAttributes<HTMLTableSectionElement>) => (
		<thead className={cn("border-b bg-muted/40", className)} {...props} />
	),
	tbody: ({
		className,
		...props
	}: React.HTMLAttributes<HTMLTableSectionElement>) => (
		<tbody className={cn("divide-y divide-muted", className)} {...props} />
	),
	tr: ({ className, ...props }: React.HTMLAttributes<HTMLTableRowElement>) => (
		<tr className={cn("", className)} {...props} />
	),
	th: ({
		className,
		...props
	}: React.ThHTMLAttributes<HTMLTableHeaderCellElement>) => (
		<th
			className={cn("p-4 text-left text-sm font-semibold", className)}
			{...props}
		/>
	),
	td: ({
		className,
		...props
	}: React.TdHTMLAttributes<HTMLTableDataCellElement>) => (
		<td
			className={cn("p-4 text-sm text-muted-foreground", className)}
			{...props}
		/>
	),
	pre: ({
		__rawString__,
		__npmCommand__,
		__yarnCommand__,
		__pnpmCommand__,
		__bunCommand__,
		__title__,
		__lang__,
		__unwrapCode__,
		...props
	}: React.HTMLAttributes<HTMLPreElement> & {
		__rawString__?: string
		__npmCommand__?: string
		__yarnCommand__?: string
		__pnpmCommand__?: string
		__bunCommand__?: string
		__title__?: string
		__lang__?: string
		__unwrapCode__?: string
	}) => {
		const isCommand =
			!!__npmCommand__ &&
			!!__yarnCommand__ &&
			!!__pnpmCommand__ &&
			!!__bunCommand__

		if (isCommand) {
			return (
				<CommandBlock
					npmCommand={__npmCommand__}
					yarnCommand={__yarnCommand__}
					pnpmCommand={__pnpmCommand__}
					bunCommand={__bunCommand__}
				/>
			)
		}

		const shouldUnwrap = __unwrapCode__ === "true"

		if (shouldUnwrap) {
			return <pre {...props} />
		}

		const hasTitle = !!__title__

		return (
			<CodeBlock
				content={__rawString__ ?? ""}
				topBar={hasTitle ? { label: __title__ } : undefined}
				lang={__lang__}
				{...props}
			/>
		)
	},
	hr: ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
		<Separator className={cn("my-8", className)} {...props} />
	),
	a: ({
		className,
		...props
	}: React.AnchorHTMLAttributes<HTMLAnchorElement>) => (
		<a
			className={cn(
				"font-medium text-foreground underline underline-offset-4",
				className
			)}
			{...props}
		/>
	),
	strong: ({ className, ...props }: React.HTMLAttributes<HTMLElement>) => (
		<strong className={cn("font-semibold", className)} {...props} />
	),
	img: ({
		className,
		alt,
		...props
	}: React.ImgHTMLAttributes<HTMLImageElement>) => (
		<img className={cn("rounded-lg border", className)} alt={alt} {...props} />
	),
	Title: ({
		className,
		content,
		...props
	}: React.HTMLAttributes<HTMLHeadingElement>) => {
		if (!content) {
			throw new Error("Title must be provided")
		}

		return (
			<React.Fragment>
				<h1 className={cn("text-3xl font-bold", className)} {...props}>
					{content}
				</h1>
				<title>{`${content} | 9ui`}</title>
			</React.Fragment>
		)
	},
	Description: ({
		className,
		content,
		...props
	}: React.HTMLAttributes<HTMLParagraphElement>) => {
		if (!content || content.length > 160) {
			throw new Error(
				"Meta description must be provided and less than 160 characters"
			)
		}

		return (
			<React.Fragment>
				<p className={cn("mt-2 text-muted-foreground", className)} {...props}>
					{content}
				</p>
				<meta name="description" content={content} />
			</React.Fragment>
		)
	},
	Step: ({ className, ...props }: React.ComponentProps<"h3">) => (
		<h3
			className={cn("step mt-8 font-semibold tracking-tight", className)}
			{...props}
		/>
	),
	Steps: ({ ...props }) => (
		<div
			className="steps mb-12 ml-4 border-l pl-8 [counter-reset:step]"
			{...props}
		/>
	),
	LinkCard: ({ className, ...props }: React.ComponentProps<typeof Link>) => (
		<Link
			className={cn(
				"flex w-full flex-col items-center justify-center gap-3 rounded-lg border bg-card p-10 font-medium text-card-foreground shadow transition-colors hover:bg-card/80 md:p-10",
				className
			)}
			{...props}
		/>
	),
	Accordion,
	AccordionTrigger,
	AccordionItem,
	AccordionContent,
	MessageSquareWarningIcon,
	Alert,
	AlertContent,
	AlertTitle,
	AlertDescription,
	AlertIcon,
	ComponentPreview,
	ComponentLinks,
	ComponentSource,
	Tabs,
	TabContent,
	Tab,
	TabsList,
	ComponentInstallation,
	ComponentAnatomy,
	Icons,
	ThemeToggle,
}

export function useMDXComponents(): MDXComponents {
	return components
}
