import type * as React from "react";
import Link from "next/link";
import { AlertTriangleIcon, ArrowUpRightIcon } from "lucide-react";
import type { MDXComponents as MDXProvidedComponents } from "mdx/types";

import { ApiTable } from "@/components/api-table";
import { CodeBlock } from "@/components/code-block";
import { CommandBlock } from "@/components/command-block";
import { ComponentAnatomy } from "@/components/component-anatomy";
import { ComponentInstallation } from "@/components/component-installation";
import { ComponentLinks } from "@/components/component-links";
import { ComponentPreview } from "@/components/component-preview";
import { ComponentSource } from "@/components/component-source";
import { ComponentsIndex } from "@/components/components-index";
import { Icons } from "@/components/icons";
import { InstallationTabs } from "@/components/installation-tabs";
import { Prompt } from "@/components/prompt";
import { ThemeToggle } from "@/components/theme-toggle";
import { Tip, Tips } from "@/components/tips";
import {
	Accordion,
	AccordionItem,
	AccordionPanel,
	AccordionTrigger,
} from "@/components/ui/accordion";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";
import { Tabs, TabsList, TabsPanel } from "@/components/ui/tabs";

import { siteConfig } from "@/config/site";

import { cn } from "@/lib/utils";

interface MDXComponents {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	[key: string]: React.FC<any> | MDXComponents;
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
			className={cn(
				"mt-14 scroll-mt-20 text-[1.375rem] font-semibold tracking-tight md:scroll-mt-14",
				className,
			)}
			{...props}
		/>
	),
	h3: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
		<h3
			className={cn(
				"mt-10 scroll-mt-20 text-lg font-semibold md:scroll-mt-14 [h2+&]:mt-5",
				className,
			)}
			{...props}
		/>
	),
	h4: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
		<h4
			className={cn(
				"mt-6 scroll-mt-20 text-base font-semibold md:scroll-mt-14",
				className,
			)}
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
		"data-inline"?: string;
	}) => {
		const isInline = props["data-inline"] === "";

		return (
			<code
				className={cn(
					isInline &&
						"bg-muted text-accent-foreground relative rounded-sm px-[0.3rem] py-[0.2rem] font-mono text-sm font-normal",
					className,
				)}
				{...props}
			/>
		);
	},
	blockquote: ({
		className,
		...props
	}: React.BlockquoteHTMLAttributes<HTMLQuoteElement>) => (
		<blockquote
			className={cn(
				"text-muted-foreground mt-6 border-l-2 pl-6 italic",
				className,
			)}
			{...props}
		/>
	),
	table: ({ className, ...props }: React.ComponentProps<typeof Table>) => (
		<Table
			containerClassName="my-6 overflow-hidden rounded-lg border"
			className={className}
			{...props}
		/>
	),
	thead: ({
		className,
		...props
	}: React.ComponentProps<typeof TableHeader>) => (
		<TableHeader className={cn("bg-muted/40", className)} {...props} />
	),
	tbody: TableBody,
	tr: TableRow,
	th: ({ className, ...props }: React.ComponentProps<typeof TableHead>) => (
		<TableHead className={cn("text-foreground", className)} {...props} />
	),
	td: ({ className, ...props }: React.ComponentProps<typeof TableCell>) => (
		<TableCell
			className={cn("text-muted-foreground whitespace-normal", className)}
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
		__rawString__?: string;
		__npmCommand__?: string;
		__yarnCommand__?: string;
		__pnpmCommand__?: string;
		__bunCommand__?: string;
		__title__?: string;
		__lang__?: string;
		__unwrapCode__?: string;
	}) => {
		const isCommand =
			!!__npmCommand__ &&
			!!__yarnCommand__ &&
			!!__pnpmCommand__ &&
			!!__bunCommand__;

		if (isCommand) {
			return (
				<CommandBlock
					npmCommand={__npmCommand__}
					yarnCommand={__yarnCommand__}
					pnpmCommand={__pnpmCommand__}
					bunCommand={__bunCommand__}
				/>
			);
		}

		const shouldUnwrap = __unwrapCode__ === "true";

		if (shouldUnwrap) {
			return <pre {...props} />;
		}

		const hasTitle = !!__title__;

		return (
			<CodeBlock
				content={__rawString__?.trimEnd() ?? ""}
				topBar={hasTitle ? { label: __title__ } : undefined}
				lang={__lang__}
				{...props}
			/>
		);
	},
	hr: ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
		<Separator className={cn("my-8", className)} {...props} />
	),
	a: ({
		className,
		href,
		children,
		...props
	}: React.AnchorHTMLAttributes<HTMLAnchorElement>) => {
		const external =
			typeof href === "string" &&
			/^https?:\/\//.test(href) &&
			!new URL(href).hostname.endsWith(siteConfig.domain);

		return (
			<a
				href={href}
				className={cn(
					"text-foreground font-medium underline underline-offset-4",
					className,
				)}
				{...(external ? { target: "_blank", rel: "noreferrer" } : {})}
				{...props}
			>
				{children}
				{external && (
					<>
						{"\u2060"}
						<ArrowUpRightIcon
							aria-hidden="true"
							className="text-muted-foreground ms-0.5 inline size-3.5 align-[-0.125em]"
						/>
						<span className="sr-only"> (opens in a new tab)</span>
					</>
				)}
			</a>
		);
	},
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
	Step: ({ className, ...props }: React.ComponentProps<"h3">) => (
		<h3
			className={cn("step mt-10 font-medium first:mt-0 [&+p]:!mt-2", className)}
			{...props}
		/>
	),
	Steps: ({ ...props }) => (
		<div
			className="steps before:from-border relative mt-6 mb-4 ml-3.5 pl-8 [counter-reset:step] before:absolute before:inset-y-0 before:left-0 before:w-px before:bg-linear-to-b before:from-[calc(100%-4rem)] before:to-transparent"
			{...props}
		/>
	),
	LinkCard: ({ className, ...props }: React.ComponentProps<typeof Link>) => (
		<Card className="hover:bg-card/80 w-full py-0 font-medium transition-colors">
			<Link
				className={cn(
					"focus-visible:ring-ring/50 flex flex-col items-center justify-center gap-3 rounded-[inherit] p-10 outline-none focus-visible:ring-3",
					className,
				)}
				{...props}
			/>
		</Card>
	),
	Accordion,
	AccordionTrigger,
	AccordionItem,
	AccordionPanel,
	AlertTriangleIcon,
	Alert,
	AlertTitle,
	AlertDescription,
	ApiTable,
	Tip,
	Tips,
	ComponentPreview,
	ComponentLinks,
	ComponentsIndex,
	ComponentSource,
	Tabs,
	TabsList,
	TabsPanel,
	ComponentInstallation,
	InstallationTabs,
	Prompt,
	ComponentAnatomy,
	Icons,
	ThemeToggle,
};

export function getMDXComponents(): MDXProvidedComponents {
	return components as MDXProvidedComponents;
}
